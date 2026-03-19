import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BSc OT & Anaesthesia Technology College in TN | JKKN",
  description: "Looking for BSc operation theatre & anaesthesia technology colleges in Tamilnadu? JKKN offers clinical OT training, placements & scholarships. Enrol 2026!",
  path: "/operation-theatre-anaesthesia",
  keywords: [
    "b.sc operation theatre & anaesthesia technology colleges in tamilnadu",
    "bsc operation theatre & anaesthesia technology colleges in tamilnadu",
    "operation theatre technician course in tamilnadu",
    "bsc operation theatre technology colleges in tamilnadu"
  ],
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Operation Theatre and Anaesthesia Technology",
  "description": "Comprehensive program that prepares students to become skilled OT and anaesthesia technologists with expertise in surgical assistance, anaesthesia support, patient monitoring, sterilization, and perioperative care management.",
  "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia",
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Bachelor of Science Operation Theatre and Anaesthesia Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a four-year undergraduate degree at JKKN College Tamil Nadu training students in surgical assistance, anaesthesia support, patient monitoring, sterilization, and perioperative care management."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria for Bachelor of Science Operation Theatre and Anaesthesia Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need 10+2 with Physics, Chemistry, and Biology, minimum 50% marks (40% for Scheduled Caste and Scheduled Tribe, 45% for Other Backward Classes), and must be 17 years or older."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of an Operation Theatre technician after studying at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level Operation Theatre technicians earn 3 to 5 lakhs per year. With experience, salaries reach 10 to 20 lakhs. International placements offer higher remuneration."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities after Bachelor of Science Operation Theatre and Anaesthesia Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Operation Theatre Technicians, Anaesthesia Technicians, Surgical Assistants, Central Sterile Supply Department Technicians, Endoscopy Technicians, and Intensive Care Unit Technicians."
      }
    },
    {
      "@type": "Question",
      "name": "What is the scope of Operation Theatre Technology in India for JKKN College Tamil Nadu graduates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skilled Operation Theatre and anaesthesia technologists are in high demand across government hospitals, private healthcare chains, and international facilities due to rapid healthcare sector growth."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after Bachelor of Science Operation Theatre and Anaesthesia Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue Master of Science in Operation Theatre and Anaesthesia Technology, Critical Care, Post Graduate Diploma in Surgical Technology, or an MBA in Healthcare Management."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in Bachelor of Science Operation Theatre and Anaesthesia Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program provides 2000 plus hours of clinical training in operation theatres, anaesthesia departments, Central Sterile Supply Department units, and Intensive Care Units with hands-on surgical experience."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Operation Theatre Technician and Anaesthesia Technician at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Operation Theatre Technicians assist surgeons and manage instruments. Anaesthesia Technicians support anaesthesiologists, prepare equipment, and monitor patients. JKKN's program trains graduates in both specializations."
      }
    }
  ]
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
