import { createPageMetadata } from "@/lib/metadata";
import { COURSE_FAQS } from "@/lib/course-faqs";
import { AE_LIST_SOURCE, AE_GOVT_COLLEGES, AE_JKKN_SEATS } from "@/lib/emergency-colleges-tn";

export const metadata = createPageMetadata({
  title: "BSc Accident and Emergency Care Technology Colleges in Tamilnadu | JKKN",
  description: `${AE_LIST_SOURCE.totalInstitutions} BSc Accident & Emergency Care Technology colleges in Tamilnadu (TNMGRMU ${AE_LIST_SOURCE.year}), ${AE_GOVT_COLLEGES.length} govt. Govt list, seats, fee, JKKN ${AE_JKKN_SEATS} seats.`,
  path: "/accident-emergency-care",
  keywords: [
    "bsc accident and emergency care technology colleges in tamilnadu",
    "trauma care technology course",
    "emergency medical technician course tamilnadu",
    "bsc emergency care admission 2026",
    "emt training college namakkal",
    "accident emergency care technology course",
    "government bsc accident and emergency care technology colleges in tamilnadu",
    "bachelor of emergency medical technologist paramedic"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/accident-emergency-care-hero.webp", width: 1200, height: 630, alt: "BSc Accident and Emergency Care at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Accident and Emergency Care Technology",
  "description": "Comprehensive program that prepares learners to become skilled emergency care technologists, mastering trauma management, emergency response, critical care, advanced life support, disaster management, and pre-hospital emergency care.",
  "url": "https://ahs.jkkn.ac.in/accident-emergency-care",
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
  "occupationalCategory": "Emergency Medical Technician, Trauma Care Specialist, Emergency Room Technician, Critical Care Technologist, Disaster Management Officer, Ambulance Service Manager",
  "teaches": [
    "Trauma Management",
    "Emergency Response",
    "Advanced Life Support",
    "Disaster Management",
    "Pre-Hospital Emergency Care"
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
    "name": "Apply for B.Sc Accident and Emergency Care Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Accident and Emergency Care Technology Colleges in Tamilnadu | JKKN",
  "url": "https://ahs.jkkn.ac.in/accident-emergency-care",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Accident and Emergency Care Technology", "item": "https://ahs.jkkn.ac.in/accident-emergency-care" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": COURSE_FAQS["accident-emergency-care"].map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function AccidentEmergencyCareLayout({
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
