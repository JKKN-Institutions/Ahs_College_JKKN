import { createPageMetadata } from "@/lib/metadata";
import { COURSE_FAQS } from "@/lib/course-faqs";

// DEP-15, 2026-08-08. This page and /admissions/cardiac-technology were measured competing for
// the same searches, so this one now canonicalises to that one. Measured over the 28 days to
// 2026-08-03 (runs/2026-08-07/dep15-pairs.json): 90 shared queries, 66 genuinely contested,
// 3,770 contested impressions. The admissions page wins on every axis - 9,023 impressions to
// this page's 6,194, 113 clicks to 36, and a better average position on every one of the top
// contested queries (bsc cardiac technology 7.3 vs 7.8, bsc cardiology 6.5 vs 8.3, cardiac
// technology 9.2 vs 11.4). It also carries 14,222 words to this page's 2,083.
//
// canonical ONLY. No 301, and this page stays in the sitemap and keeps its internal links.
// That is deliberate: a canonical reverts in one deploy and a 301 does not, and pair 1 of this
// programme is a 60,388-impression page. This is the SMALLEST of the 12 pairs worth fixing and
// was chosen to go first precisely so that being wrong is cheap.
//
// A canonical is a hint, not an instruction, and these two pages differ by 7x in length, so
// Google may decline it. Read GSC 2-3 weeks out before touching any other pair.
export const metadata = createPageMetadata({
  title: "BSc Cardiac Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc cardiac technology colleges in Tamilnadu? JKKN offers cardiac care technology courses with clinical training & scholarships. Apply 2026-27!",
  path: "/cardiac-technology",
  canonicalPath: "/admissions/cardiac-technology",
  keywords: [
    "bsc cardiac technology colleges in tamilnadu",
    "cardiac technology college in tamilnadu",
    "cardiac technology course in tamilnadu",
    "b sc cardiac technology colleges in tamilnadu",
    "bsc cardiac perfusion technology colleges in tamilnadu",
    "bsc cardiac technology courses in tamilnadu",
    "bsc cardiac care technology colleges in tamilnadu",
    "cardiac care technology colleges in tamilnadu",
    "cardiac perfusion technology colleges in tamilnadu",
    "b sc cardiac perfusion technology colleges in tamilnadu",
    "cardiac perfusion technology course in tamilnadu"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/cardiac-technology-hero.webp", width: 1200, height: 630, alt: "BSc Cardiac Technology at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Cardiac Technology",
  "description": "Specialized undergraduate program designed to train healthcare professionals in the diagnosis, monitoring, and treatment support for patients with cardiovascular diseases. The learning framework combines theoretical knowledge with extensive practical training, preparing graduates to work alongside cardiologists and cardiac surgeons.",
  "url": "https://ahs.jkkn.ac.in/cardiac-technology",
  // Link, do not re-declare: a fresh anonymous Organization on every Course is a new entity
  // to Google, so the courses never attached to the college node.
  "provider": { "@id": "https://ahs.jkkn.ac.in/#organization" },
  "educationalLevel": "Undergraduate",
  "educationalCredentialAwarded": "Bachelor of Science (B.Sc)",
  "timeRequired": "P4Y",
  "inLanguage": "en",
  "coursePrerequisites": "10+2 or equivalent with Physics, Chemistry, and Biology. Minimum 50% aggregate (40% for SC/ST, 45% for OBC). Age 17+ years.",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "full-time",
    "startDate": "2026-08-01",
    "location": {
      "@type": "Place",
      "name": "JKKN College of Allied Health Sciences",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      }
    },
    "maximumAttendeeCapacity": 7
  },
  "occupationalCategory": "ECG Technician, Echo Technologist, Cath Lab Technologist, Pacemaker Technician, Cardiac Rehab Specialist",
  "teaches": [
    "Cardiovascular Diagnostics",
    "ECG Interpretation",
    "Echocardiography",
    "Cardiac Catheterization",
    "Patient Monitoring"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fees",
    "priceCurrency": "INR",
    "price": "170000",
    "priceValidUntil": "2027-07-31",
    "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01"
  },
  "potentialAction": {
    "@type": "ApplyAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.jkkn.ai/apply/jkkn-admission-2026",
      "actionPlatform": "http://schema.org/DesktopWebPlatform"
    },
    "name": "Apply for B.Sc Cardiac Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Cardiac Technology Colleges in Tamilnadu | JKKN",
  "url": "https://ahs.jkkn.ac.in/cardiac-technology",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc Cardiac Technology", "item": "https://ahs.jkkn.ac.in/cardiac-technology" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": COURSE_FAQS["cardiac-technology"].map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function CardiacTechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
