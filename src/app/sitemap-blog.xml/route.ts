import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const domain = (process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'ahs.jkkn.ac.in')
  .replace(/^https?:\/\//, '')
  .replace(/\/$/, '');
const baseUrl = `https://${domain}`;

// The ONE post that legitimately lives at /blog/<slug>. app/blog/[slug]/page.tsx pins itself to
// this single slug with dynamicParams=false, so it is the only non-campus blog URL that answers
// 200 - measured live 2026-08-31. It was MISSING from this sitemap.
//
// It replaces `top-10-career-options-after-bed-2026`, which was hardcoded here and is a phantom:
// measured the same day, it returns 404 at /blog/<slug> AND at /blog/campus/<slug>. It is also
// a B.Ed post, which is Education's subject, not Allied Health's.
const staticPosts = [
  { loc: `${baseUrl}/blog/allied-health-sciences-admission-2026`, changefreq: 'monthly', priority: '0.6' },
];

export async function GET() {
  const lastmod = new Date().toISOString().split('T')[0];
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'ahs';

  // Fetch dynamic blog posts from Supabase (anon key, no auth required for public reads)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  let dynamicPosts: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [];

  try {
    const { data: blogs } = await supabase
      .from('blogs')
      .select('slug, category, updated_at, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (blogs) {
      // EVERY CMS post renders at /blog/campus/<slug>. There is no category that changes that,
      // and the branch this replaced sent every non-"campus" post to /blog/<slug>, which cannot
      // work: app/blog/[slug]/page.tsx sets dynamicParams=false and generateStaticParams()
      // returns exactly one slug, so the router rejects every other param with a real 404. That
      // was deliberate - it is the fix for the old defect where every invented /blog/<slug>
      // answered 200 with one article - so the route is right and the sitemap was wrong.
      //
      // MEASURED 2026-08-31, all 40 URLs this file emitted, not a sample: 40 of 40 returned 404
      // as /blog/<slug>, and 39 of those 40 returned 200 with their real title at
      // /blog/campus/<slug>. The 40th is the phantom removed from staticPosts above.
      dynamicPosts = blogs.map((post) => {
        const path = `${baseUrl}/blog/campus/${post.slug}`;
        const postLastmod = (post.updated_at ?? post.published_at ?? post.created_at ?? lastmod)
          .split('T')[0];
        return {
          loc: path,
          lastmod: postLastmod,
          changefreq: 'weekly',
          priority: '0.7',
        };
      });
    }
  } catch (err) {
    console.error('[sitemap-blog] supabase fetch failed:', err);
  }

  // Merge static + dynamic, deduplicate by loc
  const allPosts = [...staticPosts.map((p) => ({ ...p, lastmod })), ...dynamicPosts];
  const seen = new Set<string>();
  const uniquePosts = allPosts.filter((p) => {
    if (seen.has(p.loc)) return false;
    seen.add(p.loc);
    return true;
  });

  const urls = uniquePosts
    .map(
      (post) => `  <url>
    <loc>${post.loc}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
    },
  });
}
