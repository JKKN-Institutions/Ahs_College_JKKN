import { createPageMetadata } from "@/lib/metadata";
import { COURSE_FAQS } from "@/lib/course-faqs";

export const metadata = createPageMetadata({
  title: "BSc Critical Care Technology Course Details | JKKN",
  description: "BSc Critical Care Technology course details at JKKN, Tamil Nadu — eligibility, duration, syllabus, fees and ICU training. NAAC A. Apply 2026-27.",
  path: "/critical-care-technology",
  keywords: [
    "bsc critical care technology college in tamilnadu",
    "icu technology course tamilnadu",
    "ventilator training course",
    "critical care training namakkal",
    "bsc critical care technology admission 2026",
    "icu technician course tamilnadu"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/critical-care-technology-hero.webp", width: 1200, height: 630, alt: "BSc Critical Care Technology at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Critical Care Technology",
  "description": "Comprehensive program that prepares learners to become skilled critical care technologists, mastering ICU management, ventilator support, hemodynamic monitoring, and advanced life support systems for critically ill patients.",
  "url": "https://ahs.jkkn.ac.in/critical-care-technology",
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
    "maximumAttendeeCapacity": 10
  },
  "occupationalCategory": "ICU Technician, Ventilator Technician, Emergency Care Specialist, Respiratory Therapist, Clinical Coordinator",
  "teaches": [
    "ICU Management",
    "Ventilator Support",
    "Hemodynamic Monitoring",
    "Advanced Life Support",
    "Emergency Care"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fees",
    "priceCurrency": "INR",
    "price": "110000",
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
    "name": "Apply for B.Sc Critical Care Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Critical Care Technology Course Details | JKKN",
  "url": "https://ahs.jkkn.ac.in/critical-care-technology",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Critical Care Technology", "item": "https://ahs.jkkn.ac.in/critical-care-technology" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": COURSE_FAQS["critical-care-technology"].map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function CriticalCareTechnologyLayout({
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
