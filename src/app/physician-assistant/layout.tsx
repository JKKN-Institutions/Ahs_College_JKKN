import { createPageMetadata } from "@/lib/metadata";
import { COURSE_FAQS } from "@/lib/course-faqs";
import { PA_LIST_SOURCE, PA_GOVT_COLLEGES, PA_JKKN_SEATS } from "@/lib/pa-colleges-tn";

export const metadata = createPageMetadata({
  title: "B.PA Physician Associates Course & Colleges in TN | JKKN AHS",
  description: `${PA_LIST_SOURCE.totalInstitutions} institutions offer B.PA Physician Associates (formerly BSc Physician Assistant) in TN (TNMGRMU ${PA_LIST_SOURCE.year}), ${PA_GOVT_COLLEGES.length} govt. Govt list, seats, JKKN ${PA_JKKN_SEATS} seats.`,
  path: "/physician-assistant",
  keywords: [
    "physician assistant course in tamilnadu",
    "bsc physician assistant colleges in tamilnadu",
    "physician assistant colleges in tamilnadu",
    "bsc physician assistant course in tamilnadu",
    "physician assistant course colleges in tamilnadu",
    "b sc physician assistant colleges in tamilnadu",
    "physician assistant course in tamilnadu government colleges",
    "government bsc physician assistant colleges in tamilnadu"
  ],
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "Bachelor of Physician Associates (B.PA)",
  "alternateName": "B.Sc Physician Assistant",
  "description": "Comprehensive program that prepares learners to become skilled clinical professionals with expertise in patient assessment, diagnostic support, and therapeutic procedures across medical specialties. Graduates work alongside physicians in clinical settings.",
  "url": "https://ahs.jkkn.ac.in/physician-assistant",
  // Link, do not re-declare: a fresh anonymous Organization on every Course is a new entity
  // to Google, so the courses never attached to the college node.
  "provider": { "@id": "https://ahs.jkkn.ac.in/#organization" },
  "educationalLevel": "Undergraduate",
  "educationalCredentialAwarded": "Bachelor of Science (B.Sc)",
  "timeRequired": "P4Y",
  "inLanguage": "en",
  "coursePrerequisites": "10+2 or equivalent with English and Physics, Chemistry and Biology (or Botany and Zoology). No minimum percentage under the TN allied prospectus 2026-27. Age 17 by 31 December 2026.",
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
    "maximumAttendeeCapacity": 10
  },
  "occupationalCategory": "Clinical Physician Associate, Emergency Care Assistant, Surgical Assistant, ICU Critical Care Assistant, OPD Coordinator, Community Health Officer",
  "teaches": [
    "Clinical Patient Assessment",
    "Diagnostic Support",
    "Treatment Planning",
    "Emergency Response",
    "Patient Care Management"
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
    "name": "Apply for Bachelor of Physician Associates (B.PA)"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Physician Associate Course in Tamilnadu | JKKN AHS College",
  "url": "https://ahs.jkkn.ac.in/physician-assistant",
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
    { "@type": "ListItem", "position": 3, "name": "Bachelor of Physician Associates (B.PA)", "item": "https://ahs.jkkn.ac.in/physician-assistant" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": COURSE_FAQS["physician-assistant"].map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function PhysicianAssistantLayout({
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
