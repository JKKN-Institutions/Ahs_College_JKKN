import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BSc Accident and Emergency Care Technology in Tamilnadu",
  description: "Looking for BSc accident and emergency care technology colleges in Tamilnadu? JKKN provides hospital training, placements & scholarships. Enrol 2026-27!",
  path: "/accident-emergency-care",
  keywords: [
    "bsc accident and emergency care technology colleges in tamilnadu",
    "trauma care technology course",
    "emergency medical technician course tamilnadu",
    "bsc emergency care admission 2026",
    "emt training college namakkal",
    "accident emergency care technology course"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/accident-emergency-care-hero.png", width: 1200, height: 630, alt: "BSc Accident and Emergency Care at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Accident and Emergency Care Technology",
  "description": "Comprehensive program that prepares students to become skilled emergency care technologists, mastering trauma management, emergency response, critical care, advanced life support, disaster management, and pre-hospital emergency care.",
  "url": "https://ahs.jkkn.ac.in/accident-emergency-care",
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
    "name": "Apply for B.Sc Accident and Emergency Care Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Accident and Emergency Care Technology in Tamilnadu",
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu is a four-year degree training professionals in Emergency Medical Services, trauma care, Advanced Cardiac Life Support, disaster management, and emergency response coordination."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility to join Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need 10+2 with Physics, Chemistry, and Biology, minimum 50% marks. Scheduled Caste and Scheduled Tribe students need 40%, Other Backward Classes students need 45%. Minimum age is 17 years. A medical fitness certificate is required."
      }
    },
    {
      "@type": "Question",
      "name": "What salary can I earn after Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level emergency care technologists earn 3 to 5 lakhs per year. With three to five years experience, salaries reach 6 to 10 lakhs. Senior Emergency Room and disaster management positions pay up to 20 lakhs annually."
      }
    },
    {
      "@type": "Question",
      "name": "What career opportunities are available after Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Emergency Medical Technicians, Trauma Care Specialists, Critical Care Technologists, Disaster Management Coordinators, Emergency Room Technicians, and Ambulance Service Managers in hospitals and trauma centers."
      }
    },
    {
      "@type": "Question",
      "name": "What certifications are provided in Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Students receive Basic Life Support and Advanced Cardiac Life Support certifications. The program also covers Advanced Trauma Life Support and Pediatric Advanced Life Support, making graduates highly qualified for emergency care positions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue Master of Science after Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue Master of Science in Emergency Medicine, Critical Care, or Disaster Management. MBA in Healthcare Management and specialized Emergency Medical Services certifications are also available for advancement."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes over 2000 hours of clinical training in emergency departments, trauma centers, ambulance services, and disaster management units with hands-on patient assessment, triage, and Advanced Cardiac Life Support experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Bachelor of Science Accident and Emergency Care Technology at JKKN College Tamil Nadu a physically demanding career?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Accident and Emergency Care requires physical stamina, quick thinking, and emotional resilience. Training includes physical fitness preparation for high-stress situations, long shifts, and physically demanding emergency care tasks."
      }
    }
  ]
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
