import { createPageMetadata } from "@/lib/metadata";
import { COURSE_FAQS } from "@/lib/course-faqs";
import { CARDIAC_LIST_SOURCE, GOVERNMENT_CARDIAC_COUNT } from "@/lib/cardiac-colleges-tn";

// Canonical: SELF, since 2026-09-23 (was /admissions/cardiac-technology under DEP-15, 2026-08-08).
//
// DEP-15 pointed this page at the admissions page on a 28-day blended read. Google declined the hint
// (googleCanonical kept reading /cardiac-technology), and the per-page split measured 2026-08-27 showed
// why: this page owns the list-intent searches ("bsc cardiac technology colleges in tamilnadu" and its
// variants - 25 keywords / 2,220 mobile impressions against the admissions page's 7 / 138), while the
// admissions page owns fees / how-to-apply phrasing. Every Tamil Nadu list keyword in GSC mobile
// 2026-06-24..09-21 ranks on THIS URL (e.g. 244 impressions @ 6.0). A page Google ranks for a query
// should not declare another URL as the original. The admissions page keeps its own self-canonical.
//
// A canonical is a hint and reverts in one deploy - this is a two-way door. Re-read GSC per-page
// 3-4 weeks after deploy; revert only if the admissions page's fee/apply queries fall.
export const metadata = createPageMetadata({
  title: "BSc Cardiac Technology Colleges in Tamilnadu | JKKN",
  description: `${CARDIAC_LIST_SOURCE.totalInstitutions} institutions offer BSc Cardiac Technology in Tamilnadu (TN Dr. MGR Medical University list ${CARDIAC_LIST_SOURCE.year}). See the ${GOVERNMENT_CARDIAC_COUNT} government colleges, the Namakkal, Erode & Salem colleges, and JKKN's course.`,
  path: "/cardiac-technology",
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
    "cardiac perfusion technology course in tamilnadu",
    "bsc cardiology colleges in tamilnadu",
    "b sc cardiology colleges in tamilnadu",
    "bsc cardiac technology government colleges in tamilnadu",
    "bsc cardiac technology colleges in namakkal",
    "bsc cardiac technology colleges in erode",
    "bsc cardiac technology colleges in salem"
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
        // The CourseInstance location is the same campus as the organisation node. It was
        // shipping with no streetAddress at all, which made a 2nd distinct postal address
        // across the site; caught on the LIVE site, because the value is an empty string and
        // a "one address" check on the built HTML read it as present.
        "streetAddress": "NH-544 (Salem to Coimbatore National Highway), Natarajapuram",
        "addressLocality": "Komarapalayam",
        "addressRegion": "IN-TN",
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
