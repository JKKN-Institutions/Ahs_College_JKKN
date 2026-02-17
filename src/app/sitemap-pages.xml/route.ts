import { NextResponse } from 'next/server';

const pages = [
  { loc: 'https://ahs.jkkn.ac.in', changefreq: 'daily', priority: '1.0' },
  { loc: 'https://ahs.jkkn.ac.in/cardiac-technology', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/physician-assistant', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/dialysis-technology', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/respiratory-therapy', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/radiology-imaging-technology', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/medical-record-science', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/accident-emergency-care', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/operation-theatre-anaesthesia', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/critical-care-technology', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://ahs.jkkn.ac.in/b-sc-operation-theatre-anaesthesia-technology', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://ahs.jkkn.ac.in/our-management', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://ahs.jkkn.ac.in/hostel', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://ahs.jkkn.ac.in/ambulance-services', changefreq: 'monthly', priority: '0.6' },
  { loc: 'https://ahs.jkkn.ac.in/academic-calendar-2', changefreq: 'monthly', priority: '0.6' },
  { loc: 'https://ahs.jkkn.ac.in/driven-by-innovative-solutions-and-experience', changefreq: 'monthly', priority: '0.5' },
  { loc: 'https://ahs.jkkn.ac.in/wifi', changefreq: 'monthly', priority: '0.4' },
  { loc: 'https://ahs.jkkn.ac.in/microsoft-360', changefreq: 'monthly', priority: '0.4' },
];

const lastmod = new Date().toISOString().split('T')[0];

export function GET() {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
