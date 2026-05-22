import { NextResponse } from 'next/server';
import { getAllCourseSlugs } from '@/lib/admission-courses';
import { getAllCourseBlogSlugs } from '@/lib/course-blog-posts';

const domain = (process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'ahs.jkkn.ac.in')
  .replace(/^https?:\/\//, '')
  .replace(/\/$/, '');
const baseUrl = `https://${domain}`;

type Entry = { loc: string; changefreq: string; priority: string; lastmod: string };

function buildPages(lastmod: string): Entry[] {
  const courseSlugs = [
    'cardiac-technology',
    'physician-assistant',
    'dialysis-technology',
    'respiratory-therapy',
    'radiology-imaging-technology',
    'medical-record-science',
    'accident-emergency-care',
    'operation-theatre-anaesthesia',
    'critical-care-technology',
  ];

  const citySlugs = ['erode', 'namakkal', 'salem', 'tiruppur', 'coimbatore'];

  const facilitySlugs = [
    'hostel',
    'classroom',
    'library',
    'lab',
    'transport',
    'food-court',
    'ambulance-service',
    'bank-post-office',
    'wifi',
  ];

  return [
    // Homepage
    { loc: `${baseUrl}/`, changefreq: 'daily', priority: '1.0', lastmod },

    // 9 root department/course pages
    ...courseSlugs.map((s) => ({
      loc: `${baseUrl}/${s}`,
      changefreq: 'monthly',
      priority: '0.9',
      lastmod,
    })),

    // Departments hub
    { loc: `${baseUrl}/departments`, changefreq: 'monthly', priority: '0.8', lastmod },

    // City landing pages
    ...citySlugs.map((s) => ({
      loc: `${baseUrl}/${s}`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod,
    })),

    // Admission hub + per-course admission pages (single source of truth)
    { loc: `${baseUrl}/admissions`, changefreq: 'monthly', priority: '0.9', lastmod },
    ...getAllCourseSlugs().map((slug) => ({
      loc: `${baseUrl}/admissions/${slug}`,
      changefreq: 'monthly',
      priority: '0.9',
      lastmod,
    })),

    // High-value pages (previously missing)
    { loc: `${baseUrl}/fee-structure`, changefreq: 'monthly', priority: '0.9', lastmod },
    { loc: `${baseUrl}/scholarships`, changefreq: 'monthly', priority: '0.9', lastmod },
    { loc: `${baseUrl}/faculty`, changefreq: 'monthly', priority: '0.8', lastmod },
    { loc: `${baseUrl}/faq`, changefreq: 'monthly', priority: '0.7', lastmod },
    { loc: `${baseUrl}/testimonials`, changefreq: 'monthly', priority: '0.7', lastmod },
    { loc: `${baseUrl}/placements`, changefreq: 'monthly', priority: '0.9', lastmod },

    // Institutional pages
    { loc: `${baseUrl}/our-management`, changefreq: 'monthly', priority: '0.8', lastmod },
    { loc: `${baseUrl}/our-trust`, changefreq: 'monthly', priority: '0.8', lastmod },
    { loc: `${baseUrl}/our-institutions`, changefreq: 'monthly', priority: '0.8', lastmod },
    { loc: `${baseUrl}/vision-mission`, changefreq: 'monthly', priority: '0.8', lastmod },
    { loc: `${baseUrl}/principals-message`, changefreq: 'monthly', priority: '0.7', lastmod },
    { loc: `${baseUrl}/NAAC`, changefreq: 'monthly', priority: '0.8', lastmod },
    { loc: `${baseUrl}/academic-calendar`, changefreq: 'monthly', priority: '0.7', lastmod },

    // Facility pages
    ...facilitySlugs.map((s) => ({
      loc: `${baseUrl}/${s}`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod,
    })),

    // Info pages
    { loc: `${baseUrl}/contact`, changefreq: 'monthly', priority: '0.8', lastmod },
    { loc: `${baseUrl}/gallery`, changefreq: 'monthly', priority: '0.6', lastmod },
    { loc: `${baseUrl}/blog`, changefreq: 'weekly', priority: '0.7', lastmod },
    { loc: `${baseUrl}/privacy-policy`, changefreq: 'yearly', priority: '0.3', lastmod },

    // Course-wise pillar blog hub + per-course posts (single source of truth)
    { loc: `${baseUrl}/course-blog`, changefreq: 'weekly', priority: '0.8', lastmod },
    ...getAllCourseBlogSlugs().map((slug) => ({
      loc: `${baseUrl}/course-blog/${slug}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod,
    })),
  ];
}

export function GET() {
  const lastmod = new Date().toISOString().split('T')[0];
  const pages = buildPages(lastmod);

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
