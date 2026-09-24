import { createPageMetadata } from "@/lib/metadata";
import { COURSE_FAQS } from "@/lib/course-faqs";
import { OT_LIST_SOURCE, OT_GOVT_COLLEGES, OT_JKKN_SEATS } from "@/lib/ot-colleges-tn";

export const metadata = createPageMetadata({
  title: "BSc Operation Theatre & Anaesthesia Technology Colleges in Tamilnadu | JKKN",
  description: `BSc Anaesthesia and Operation Theatre Technology (B.AOTT): ${OT_LIST_SOURCE.totalInstitutions} colleges in Tamilnadu (TNMGRMU ${OT_LIST_SOURCE.year}), ${OT_GOVT_COLLEGES.length} govt. Govt list, seats, B.Sc vs MD, JKKN ${OT_JKKN_SEATS} seats.`,
  path: "/operation-theatre-anaesthesia",
  keywords: [
    "b.sc operation theatre & anaesthesia technology colleges in tamilnadu",
    "bsc operation theatre & anaesthesia technology colleges in tamilnadu",
    "operation theatre technician course in tamilnadu",
    "bsc operation theatre technology colleges in tamilnadu",
    "bsc anaesthesia technology colleges in tamilnadu",
    "anaesthesia colleges in tamilnadu",
    "bsc anaesthesia and operation theatre technology"
  ],
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Operation Theatre and Anaesthesia Technology",
  "description": "Comprehensive program that prepares learners to become skilled OT and anaesthesia technologists with expertise in surgical assistance, anaesthesia support, patient monitoring, sterilization, and perioperative care management.",
  "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia",
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
    "maximumAttendeeCapacity": 10
  },
  "occupationalCategory": "OT Technician, Anaesthesia Technician, Surgical Assistant, CSSD Technician, Endoscopy Technician, ICU Technician",
  "teaches": [
    "Surgical Assistance",
    "Anaesthesia Administration Support",
    "Sterilization and CSSD",
    "Patient Monitoring",
    "Perioperative Care"
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
    "name": "Apply for B.Sc Operation Theatre and Anaesthesia Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc OT & Anaesthesia Technology College in TN | JKKN",
  "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc OT and Anaesthesia Technology", "item": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": COURSE_FAQS["operation-theatre-anaesthesia"].map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function OperationTheatreAnaesthesiaLayout({
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
