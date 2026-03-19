import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BSc Critical Care Technology College in Tamilnadu | JKKN",
  description: "Looking for a BSc critical care technology college in Tamilnadu? JKKN offers hands-on ICU training, NAAC accreditation & placement support. Apply 2026-27!",
  path: "/critical-care-technology",
  keywords: [
    "bsc critical care technology college in tamilnadu",
    "icu technology course tamilnadu",
    "ventilator training course",
    "critical care training namakkal",
    "bsc critical care technology admission 2026",
    "icu technician course tamilnadu"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/critical-care-technology-hero.png", width: 1200, height: 630, alt: "BSc Critical Care Technology at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Critical Care Technology",
  "description": "Comprehensive program that prepares students to become skilled critical care technologists, mastering ICU management, ventilator support, hemodynamic monitoring, and advanced life support systems for critically ill patients.",
  "url": "https://ahs.jkkn.ac.in/critical-care-technology",
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
    "price": "75000",
    "priceValidUntil": "2027-07-31",
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
    "name": "Apply for B.Sc Critical Care Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Critical Care Technology College in Tamilnadu | JKKN",
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Bachelor of Science Critical Care Technology course at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Bachelor of Science Critical Care Technology course at JKKN College Tamil Nadu is a four-year program training students in Intensive Care Unit management, ventilator support, hemodynamic monitoring, and emergency care."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility to join the Bachelor of Science Critical Care Technology program at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need 10+2 with Physics, Chemistry, and Biology or Mathematics, minimum 50% marks. Scheduled Caste and Scheduled Tribe candidates need 40%, Other Backward Classes candidates need 45%. Minimum age is 17 years."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Critical Care Technology graduate from JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level critical care technologists earn three to five lakhs per year. With experience, salaries reach six to twelve lakhs. Senior Intensive Care Unit roles in corporate hospitals offer fifteen to twenty-five lakhs annually."
      }
    },
    {
      "@type": "Question",
      "name": "What career opportunities are available after the Bachelor of Science Critical Care Technology course at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Intensive Care Unit Technicians, Ventilator Technicians, Emergency Care Specialists, Respiratory Therapists, and Critical Care Coordinators in hospitals, trauma centers, and dialysis centers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher studies after the Bachelor of Science Critical Care Technology course at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Graduates can pursue Master of Science in Critical Care Technology, Emergency Medicine, or Respiratory Care, or a Postgraduate Diploma in Critical Care and Master of Business Administration in Healthcare Management."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in the Bachelor of Science Critical Care Technology course at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes over two thousand hours of clinical training in Intensive Care Units, Coronary Care Units, emergency departments, dialysis units, neonatal and paediatric Intensive Care Units, and trauma care centers."
      }
    }
  ]
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
