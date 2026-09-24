import { createPageMetadata } from "@/lib/metadata";
import { COURSE_FAQS } from "@/lib/course-faqs";
import { MRS_LIST_SOURCE, MRS_JKKN_SEATS } from "@/lib/medical-record-colleges-tn";

export const metadata = createPageMetadata({
  title: "BSc Medical Record Science Course Details | JKKN",
  description: `BSc Medical Record Science course details at JKKN, Komarapalayam: ${MRS_JKKN_SEATS} seats. ${MRS_LIST_SOURCE.totalInstitutions} colleges in Tamilnadu offer it, none of them government. NAAC A.`,
  path: "/medical-record-science",
  keywords: [
    "bsc medical record science colleges in tamilnadu",
    "government bsc medical record science colleges in tamilnadu",
    "medical record technician course in tamilnadu",
    "health information management course",
    "medical coding course tamilnadu",
    "icd-10 training college",
    "bsc medical records admission 2026",
    "medical record science course namakkal"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/medical-record-science-hero.webp", width: 1200, height: 630, alt: "BSc Medical Record Science at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Medical Record Science",
  "description": "Undergraduate program training healthcare professionals in health information management, medical coding, disease classification systems (ICD-10, CPT), healthcare data analytics, electronic health records, and hospital information systems.",
  "url": "https://ahs.jkkn.ac.in/medical-record-science",
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
    "maximumAttendeeCapacity": 15
  },
  "occupationalCategory": "Medical Records Technician, Medical Coder, Health Information Manager, Clinical Data Analyst, Medical Transcriptionist, Healthcare IT Specialist",
  "teaches": [
    "Medical Coding (ICD-10 and CPT)",
    "Health Information Management",
    "Electronic Health Records",
    "Healthcare Data Analytics",
    "Hospital Information Systems"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fees",
    "priceCurrency": "INR",
    "price": "60000",
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
    "name": "Apply for B.Sc Medical Record Science"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Medical Record Science Course Details | JKKN",
  "url": "https://ahs.jkkn.ac.in/medical-record-science",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Medical Record Science", "item": "https://ahs.jkkn.ac.in/medical-record-science" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": COURSE_FAQS["medical-record-science"].map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function MedicalRecordScienceLayout({
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
