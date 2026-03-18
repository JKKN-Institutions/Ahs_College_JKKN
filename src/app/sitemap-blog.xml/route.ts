import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const staticPosts = [
  { loc: 'https://ahs.jkkn.ac.in/blog/top-10-career-options-after-bed-2026', changefreq: 'monthly', priority: '0.6' },
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
      dynamicPosts = blogs.map((post) => {
        const isCampus =
          post.category?.toLowerCase() === 'campus' ||
          post.category?.toLowerCase() === 'campus news';
        const path = isCampus
          ? `https://ahs.jkkn.ac.in/blog/campus/${post.slug}`
          : `https://ahs.jkkn.ac.in/blog/${post.slug}`;
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
  } catch {
    // If Supabase fetch fails, fall back to static entries only
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
