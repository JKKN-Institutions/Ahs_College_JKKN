import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/principal-message',
        destination: '/principals-message',
        permanent: true,
      },
      // Old b-sc-* course URLs → new department pages
      { source: '/b-sc-medical-record-science', destination: '/medical-record-science', permanent: true },
      { source: '/b-sc-medical-record-science/', destination: '/medical-record-science', permanent: true },
      { source: '/b-sc-operation-theatre-anaesthesia-technology', destination: '/operation-theatre-anaesthesia', permanent: true },
      { source: '/b-sc-operation-theatre-anaesthesia-technology/', destination: '/operation-theatre-anaesthesia', permanent: true },
      { source: '/b-sc-dialysis-technology', destination: '/dialysis-technology', permanent: true },
      { source: '/b-sc-dialysis-technology/', destination: '/dialysis-technology', permanent: true },
      { source: '/b-sc-accident-and-emergency-care-technology', destination: '/accident-emergency-care', permanent: true },
      { source: '/b-sc-accident-and-emergency-care-technology/', destination: '/accident-emergency-care', permanent: true },
      { source: '/b-sc-cardiac-technology', destination: '/cardiac-technology', permanent: true },
      { source: '/b-sc-cardiac-technology/', destination: '/cardiac-technology', permanent: true },
      { source: '/b-sc-critical-care-technology', destination: '/critical-care-technology', permanent: true },
      { source: '/b-sc-critical-care-technology/', destination: '/critical-care-technology', permanent: true },
      { source: '/b-sc-radiotheraphy-technology', destination: '/radiology-imaging-technology', permanent: true },
      { source: '/b-sc-radiotheraphy-technology/', destination: '/radiology-imaging-technology', permanent: true },
      // Wrong URL variants → correct pages
      { source: '/ambulance-services', destination: '/ambulance-service', permanent: true },
      { source: '/ambulance-services/', destination: '/ambulance-service', permanent: true },
      { source: '/nacc', destination: '/NAAC', permanent: true },
      { source: '/nacc/', destination: '/NAAC', permanent: true },
      { source: '/academic-calendar-2', destination: '/academic-calendar', permanent: true },
      { source: '/academic-calendar-2/', destination: '/academic-calendar', permanent: true },
      // Old WordPress category / author / tag pages → /blog
      { source: '/category/:path*', destination: '/blog', permanent: true },
      { source: '/author/:path*', destination: '/blog', permanent: true },
      { source: '/tag/:path*', destination: '/blog', permanent: true },
      // Old misc pages → homepage
      { source: '/events', destination: '/', permanent: true },
      { source: '/events/', destination: '/', permanent: true },
      { source: '/iic-7-0-2', destination: '/', permanent: true },
      { source: '/iic-7-0-2/', destination: '/', permanent: true },
      { source: '/microsoft-360', destination: '/', permanent: true },
      { source: '/microsoft-360/', destination: '/', permanent: true },
      { source: '/camu', destination: '/', permanent: true },
      { source: '/camu/', destination: '/', permanent: true },
      // Old WordPress blog posts → /blog
      { source: '/jkkn-educational-institutions-celebrated-world-malaria-day-on-25th-april-2023-on-our-campus', destination: '/blog', permanent: true },
      { source: '/jkkn-educational-institutions-celebrated-world-malaria-day-on-25th-april-2023-on-our-campus/', destination: '/blog', permanent: true },
      { source: '/1st-year-students-of-jkkn-college-of-allied-health-science-participated-in-the-painting-competition', destination: '/blog', permanent: true },
      { source: '/1st-year-students-of-jkkn-college-of-allied-health-science-participated-in-the-painting-competition/', destination: '/blog', permanent: true },
      { source: '/jkkn-college-of-allied-health-science-bsc-allied-technology-admissions-open-apply-now', destination: '/blog', permanent: true },
      { source: '/jkkn-college-of-allied-health-science-bsc-allied-technology-admissions-open-apply-now/', destination: '/blog', permanent: true },
      { source: '/world-safety-health-at-work-day-on-28th-april-2023-2', destination: '/blog', permanent: true },
      { source: '/world-safety-health-at-work-day-on-28th-april-2023-2/', destination: '/blog', permanent: true },
      { source: '/mini-health-hackathon-session-123-09-2024', destination: '/blog', permanent: true },
      { source: '/mini-health-hackathon-session-123-09-2024/', destination: '/blog', permanent: true },
      { source: '/driven-by-innovative-solutions-and-experience', destination: '/blog', permanent: true },
      { source: '/driven-by-innovative-solutions-and-experience/', destination: '/blog', permanent: true },
      { source: '/professional-skills-development-program-inauguration', destination: '/blog', permanent: true },
      { source: '/professional-skills-development-program-inauguration/', destination: '/blog', permanent: true },
      { source: '/radiology-week-celebration', destination: '/blog', permanent: true },
      { source: '/radiology-week-celebration/', destination: '/blog', permanent: true },
      { source: '/pathfinder-your-gateway-to-your-future', destination: '/blog', permanent: true },
      { source: '/pathfinder-your-gateway-to-your-future/', destination: '/blog', permanent: true },
      { source: '/enhancing-clinical-preparedness-insights-from-the-hospital-professional-lecture', destination: '/blog', permanent: true },
      { source: '/enhancing-clinical-preparedness-insights-from-the-hospital-professional-lecture/', destination: '/blog', permanent: true },
      { source: '/kumarapalayam-bypass-marathon', destination: '/blog', permanent: true },
      { source: '/kumarapalayam-bypass-marathon/', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;
