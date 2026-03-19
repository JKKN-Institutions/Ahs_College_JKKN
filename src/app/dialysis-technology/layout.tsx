import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "B Sc Dialysis Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc dialysis technology colleges in Tamilnadu? JKKN offers renal dialysis technology courses with clinical training & placements. Apply now.",
  path: "/dialysis-technology",
  keywords: [
    "b sc dialysis technology colleges in tamilnadu",
    "bsc dialysis technology colleges in tamilnadu",
    "bsc renal dialysis technology colleges in tamilnadu"
  ],
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Dialysis Technology",
  "description": "Specialized program that prepares students to become skilled dialysis technologists, mastering hemodialysis procedures, peritoneal dialysis techniques, water treatment systems, and advanced kidney patient care management.",
  "url": "https://ahs.jkkn.ac.in/dialysis-technology",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/",
    "sameAs": "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7"
  },
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
    "maximumAttendeeCapacity": 5
  },
  "occupationalCategory": "Dialysis Technician, Hemodialysis Specialist, Peritoneal Dialysis Technician, Renal Care Coordinator, Dialysis Unit Supervisor",
  "teaches": [
    "Hemodialysis Procedures",
    "Peritoneal Dialysis",
    "Water Treatment Systems",
    "Renal Patient Care",
    "Dialysis Equipment Management"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fees",
    "priceCurrency": "INR",
    "price": "Contact for fees",
    "url": "https://admission.jkkn.ac.in/",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01"
  },
  "potentialAction": {
    "@type": "ApplyAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://admission.jkkn.ac.in/",
      "actionPlatform": "http://schema.org/DesktopWebPlatform"
    },
    "name": "Apply for B.Sc Dialysis Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "B Sc Dialysis Technology Colleges in Tamilnadu | JKKN",
  "url": "https://ahs.jkkn.ac.in/dialysis-technology",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Dialysis Technology", "item": "https://ahs.jkkn.ac.in/dialysis-technology" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Bachelor of Science in Dialysis Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bachelor of Science in Dialysis Technology is a four-year degree training professionals in hemodialysis, peritoneal dialysis, and renal replacement therapy at JKKN College."
      }
    },
    {
      "@type": "Question",
      "name": "What are the eligibility requirements for Bachelor of Science Dialysis Technology in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need Plus Two with Physics, Chemistry, and Biology with minimum 50 percent aggregate marks. Scheduled Caste and Scheduled Tribe need 40 percent."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Dialysis Technologist in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level dialysis technologists earn two to four lakhs per annum. With experience, salaries range from five to twenty lakhs depending on position and hospital."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities after Bachelor of Science Dialysis Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Dialysis Technicians, Hemodialysis Specialists, Renal Care Coordinators, and Dialysis Unit Supervisors in hospitals and dialysis centers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after Bachelor of Science Dialysis Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue Master of Science in Dialysis Technology, Renal Sciences, or Healthcare Management for advanced career opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in the Dialysis Technology program at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes over two thousand hours of clinical training in hemodialysis units, peritoneal dialysis centers, and nephrology departments with hands-on experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is there demand for Dialysis Technologists in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, India has over two lakh patients needing regular dialysis, with demand growing annually due to rising diabetes and kidney disease cases."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Hemodialysis and Peritoneal Dialysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hemodialysis uses an external machine to filter blood at a center. Peritoneal dialysis uses the abdominal membrane as a natural filter and can be done at home."
      }
    }
  ]
};

export default function DialysisTechnologyLayout({
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
