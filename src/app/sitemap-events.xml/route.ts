import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const domain = (process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'ahs.jkkn.ac.in')
  .replace(/^https?:\/\//, '')
  .replace(/\/$/, '');
const baseUrl = `https://${domain}`;

export async function GET() {
  const fallbackLastmod = new Date().toISOString().split('T')[0];
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'ahs';

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  let events: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [];

  try {
    const { data } = await supabase
      .from('events')
      .select('slug, updated_at, event_date, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .order('event_date', { ascending: false });

    if (data) {
      events = data.map((row) => {
        const raw =
          row.updated_at ?? row.event_date ?? row.created_at ?? fallbackLastmod;
        return {
          loc: `${baseUrl}/events/${row.slug}`,
          lastmod: String(raw).split('T')[0],
          changefreq: 'monthly',
          priority: '0.6',
        };
      });
    }
  } catch (err) {
    console.error('[sitemap-events] supabase fetch failed:', err);
  }

  const urls = events
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
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
