import { NextResponse } from 'next/server';

const posts = [
  { loc: 'https://ahs.jkkn.ac.in/radiology-week-celebration' },
  { loc: 'https://ahs.jkkn.ac.in/ahs-brainstorm-session-2' },
  { loc: 'https://ahs.jkkn.ac.in/77th-independence-day-celebration' },
  { loc: 'https://ahs.jkkn.ac.in/iic-7-0-2' },
  { loc: 'https://ahs.jkkn.ac.in/pathfinder-your-gateway-to-your-future' },
  { loc: 'https://ahs.jkkn.ac.in/world-safety-health-at-work-day-on-28th-april-2023-2' },
  { loc: 'https://ahs.jkkn.ac.in/jkkn-college-of-allied-health-science-bsc-allied-technology-admissions-open-apply-now' },
  { loc: 'https://ahs.jkkn.ac.in/jkkn-educational-institutions-celebrated-world-malaria-day-on-25th-april-2023-on-our-campus' },
  { loc: 'https://ahs.jkkn.ac.in/1st-year-students-of-jkkn-college-of-allied-health-science-participated-in-the-painting-competition' },
];

const lastmod = new Date().toISOString().split('T')[0];

export function GET() {
  const urls = posts
    .map(
      (post) => `  <url>
    <loc>${post.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
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
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
