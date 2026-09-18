import { createPageMetadata } from "@/lib/metadata";
import { COURSE_FAQS } from "@/lib/course-faqs";

export const metadata = createPageMetadata({
  title: "Best Radiography Course in Tamilnadu | JKKN AHS College",
  description: "JKKN offers the best radiography course in Tamilnadu. BSc radiography programme with hospital-attached imaging training & placements. Admissions 2026-27!",
  path: "/radiology-imaging-technology",
  keywords: [
    "radiography course in tamilnadu",
    "b sc radiography colleges in tamilnadu",
    "bsc radiography colleges in tamilnadu",
    "radiography courses in tamilnadu"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/radiology-technology-hero.webp", width: 1200, height: 630, alt: "BSc Radiology Imaging Technology at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Radiography Imaging Technology",
  "description": "Comprehensive program that prepares learners to become skilled radiography technologists, mastering X-ray, CT scan, MRI, ultrasound, mammography, and advanced radiological procedures for accurate disease diagnosis and treatment planning.",
  "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology",
  // Link, do not re-declare: a fresh anonymous Organization on every Course is a new entity
  // to Google, so the courses never attached to the college node.
  "provider": { "@id": "https://ahs.jkkn.ac.in/#organization" },
  "educationalLevel": "Undergraduate",
  "educationalCredentialAwarded": "Bachelor of Science (B.Sc)",
  "occupationalCredentialAwarded": "Radiographer / Imaging Technologist",
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
    "maximumAttendeeCapacity": 5
  },
  "occupationalCategory": "X-ray Technician, CT Scan Technologist, MRI Technologist, Ultrasound Technician, Mammography Specialist, Interventional Radiology Technician",
  "teaches": [
    "X-ray Imaging",
    "CT Scanning",
    "MRI Technology",
    "Ultrasound Imaging",
    "Mammography",
    "PACS Systems"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fees",
    "priceCurrency": "INR",
    "price": "130000",
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
    "name": "Apply for B.Sc Radiography Imaging Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Best Radiography Course in Tamilnadu | JKKN AHS College",
  "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Radiography Imaging Technology", "item": "https://ahs.jkkn.ac.in/radiology-imaging-technology" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": COURSE_FAQS["radiology-imaging-technology"].map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function RadiologyImagingTechnologyLayout({
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
