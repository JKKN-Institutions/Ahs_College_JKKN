import { NextResponse } from 'next/server';

const pages = [
  // Homepage
  { loc: 'https://ahs.jkkn.ac.in', changefreq: 'daily', priority: '1.0', lastmod: '2026-03-19' },

  // 9 Course/Department pages
  { loc: 'https://ahs.jkkn.ac.in/cardiac-technology', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/physician-assistant', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/dialysis-technology', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/respiratory-therapy', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/radiology-imaging-technology', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/medical-record-science', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/accident-emergency-care', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/operation-theatre-anaesthesia', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/critical-care-technology', changefreq: 'monthly', priority: '0.9', lastmod: '2026-03-18' },
  { loc: 'https://ahs.jkkn.ac.in/departments', changefreq: 'monthly', priority: '0.8', lastmod: '2026-03-18' },

  // Institutional pages
  { loc: 'https://ahs.jkkn.ac.in/our-management', changefreq: 'monthly', priority: '0.8', lastmod: '2026-02-15' },
  { loc: 'https://ahs.jkkn.ac.in/our-trust', changefreq: 'monthly', priority: '0.8', lastmod: '2026-02-15' },
  { loc: 'https://ahs.jkkn.ac.in/our-institutions', changefreq: 'monthly', priority: '0.8', lastmod: '2026-02-15' },
  { loc: 'https://ahs.jkkn.ac.in/vision-mission', changefreq: 'monthly', priority: '0.8', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/principals-message', changefreq: 'monthly', priority: '0.7', lastmod: '2026-02-15' },
  { loc: 'https://ahs.jkkn.ac.in/NAAC', changefreq: 'monthly', priority: '0.8', lastmod: '2026-02-15' },
  { loc: 'https://ahs.jkkn.ac.in/academic-calendar', changefreq: 'monthly', priority: '0.7', lastmod: '2026-02-15' },

  // Facility pages
  { loc: 'https://ahs.jkkn.ac.in/hostel', changefreq: 'monthly', priority: '0.7', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/classroom', changefreq: 'monthly', priority: '0.6', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/library', changefreq: 'monthly', priority: '0.6', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/lab', changefreq: 'monthly', priority: '0.6', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/transport', changefreq: 'monthly', priority: '0.6', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/food-court', changefreq: 'monthly', priority: '0.6', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/ambulance-service', changefreq: 'monthly', priority: '0.6', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/bank-post-office', changefreq: 'monthly', priority: '0.5', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/wifi', changefreq: 'monthly', priority: '0.5', lastmod: '2026-03-15' },

  // Events
  { loc: 'https://ahs.jkkn.ac.in/events', changefreq: 'weekly', priority: '0.7', lastmod: '2026-03-19' },

  // Info pages
  { loc: 'https://ahs.jkkn.ac.in/contact', changefreq: 'monthly', priority: '0.8', lastmod: '2026-03-15' },
  { loc: 'https://ahs.jkkn.ac.in/gallery', changefreq: 'monthly', priority: '0.6', lastmod: '2026-02-15' },
  { loc: 'https://ahs.jkkn.ac.in/blog', changefreq: 'weekly', priority: '0.7', lastmod: '2026-03-19' },
  { loc: 'https://ahs.jkkn.ac.in/privacy-policy', changefreq: 'yearly', priority: '0.3', lastmod: '2026-01-15' },
];

export function GET() {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
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
