import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BSc Respiratory Therapy Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc respiratory therapy colleges in Tamilnadu? JKKN offers respiratory therapy course with clinical training & scholarships. Apply 2026-27!",
  path: "/respiratory-therapy",
  keywords: [
    "bsc respiratory therapy colleges in tamilnadu",
    "respiratory therapy course in tamilnadu",
    "bsc respiratory therapy in tamilnadu"
  ],
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Respiratory Therapy",
  "description": "Program that trains healthcare professionals in assessment, treatment, and management of respiratory and cardiopulmonary disorders. Covers respiratory anatomy, pulmonary function testing, mechanical ventilation, airway management, arterial blood gas analysis, oxygen therapy, and cardiopulmonary rehabilitation.",
  "url": "https://ahs.jkkn.ac.in/respiratory-therapy",
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
  "coursePrerequisites": "10+2 or equivalent with Physics, Chemistry, and Biology/Mathematics. Minimum 50% aggregate (40% for SC/ST, 45% for OBC). Age 17+ years.",
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
  "occupationalCategory": "Respiratory Therapist, ICU Ventilator Specialist, Pulmonary Function Technologist, Sleep Lab Technician, Neonatal Respiratory Care Specialist",
  "teaches": [
    "Mechanical Ventilation",
    "Airway Management",
    "Pulmonary Function Testing",
    "Arterial Blood Gas Analysis",
    "Oxygen Therapy",
    "Cardiopulmonary Rehabilitation"
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
    "name": "Apply for B.Sc Respiratory Therapy"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Respiratory Therapy Colleges in Tamilnadu | JKKN",
  "url": "https://ahs.jkkn.ac.in/respiratory-therapy",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Respiratory Therapy", "item": "https://ahs.jkkn.ac.in/respiratory-therapy" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Bachelor of Science Respiratory Therapy and what does it involve at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bachelor of Science Respiratory Therapy at JKKN College Tamil Nadu is a four-year program training students in pulmonary diagnostics, mechanical ventilation, airway management, and cardiopulmonary rehabilitation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria for Bachelor of Science Respiratory Therapy at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need 10+2 with Physics, Chemistry, and Biology or Mathematics, minimum 50% marks (40% for Scheduled Caste and Scheduled Tribe, 45% for Other Backward Classes), and age 17 years or older."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Respiratory Therapist in India after JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level respiratory therapists earn 3 to 5 lakhs per year. With experience and critical care specialization, salaries range from 6 to 12 lakhs. Senior positions offer 15 to 25 lakhs annually."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities after Bachelor of Science Respiratory Therapy at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Respiratory Therapists, Intensive Care Unit Ventilator Specialists, Pulmonary Function Technologists, Sleep Lab Technicians, and Neonatal Respiratory Care Specialists in hospitals and rehabilitation centers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after Bachelor of Science Respiratory Therapy at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue Master of Science in Respiratory Therapy, Critical Care Technology, MBA in Healthcare Management, or international Registered Respiratory Therapist certification from the National Board for Respiratory Care."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Respiratory Therapy and Pulmonology for students at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pulmonology requires an MBBS degree to independently diagnose lung diseases. Respiratory Therapy trains allied health professionals to manage ventilators and administer treatments under physician supervision."
      }
    },
    {
      "@type": "Question",
      "name": "Is Bachelor of Science Respiratory Therapy a good career choice at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, rising respiratory diseases and growing critical care demand make respiratory therapy an excellent career offering job stability, competitive salaries, and international opportunities for JKKN College graduates."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in Bachelor of Science Respiratory Therapy at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program provides over 1500 hours of clinical training in pulmonary function labs, Intensive Care Units, sleep labs, and neonatal units covering ventilator operation, airway management, and arterial blood gas analysis."
      }
    }
  ]
};

export default function RespiratoryTherapyLayout({
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
