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
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
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
    "url": "https://admission.jkkn.ac.in/",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Accident and Emergency Care Technology in Tamilnadu",
  "url": "https://ahs.jkkn.ac.in/accident-emergency-care",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Accident and Emergency Care Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Accident and Emergency Care Technology is a four-year degree that trains professionals in emergency medical services, trauma care, and advanced life support. The program also covers disaster management and emergency response coordination. Graduates become skilled first responders and emergency care specialists capable of handling any medical crisis."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (40% for SC/ST, 45% for OBC). Minimum age is 17 years as on December 31st of the admission year. A medical fitness certificate is also required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of an Emergency Care Technologist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level emergency care technologists earn ₹3-5 lakhs per annum. With 3-5 years experience, salaries range from ₹6-10 lakhs. Senior positions in corporate hospitals and emergency services offer ₹12-20 lakhs per annum. International opportunities offer significantly higher packages."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Accident and Emergency Care graduates work as Emergency Medical Technicians, Trauma Care Specialists, and Critical Care Technologists in hospitals and trauma centers. Additional roles include Disaster Management Coordinator, Emergency Room Technician, and Ambulance Service Manager."
      }
    },
    {
      "@type": "Question",
      "name": "What certifications will I receive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes certifications in BLS, ACLS, ATLS, PALS, and PHTLS, making graduates highly qualified for emergency care positions. These industry-recognized credentials cover Basic Life Support, Advanced Cardiac, Trauma, Pediatric, and Pre-Hospital Trauma Life Support."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue M.Sc in Emergency Medicine, Critical Care, or Disaster Management for advanced specialization. MBA in Healthcare Management and specialized certifications in trauma care or emergency medical services are also available."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes 2000+ hours of clinical training in emergency departments, trauma centers, ICUs, ambulance services, and disaster management units. Students gain hands-on experience in patient assessment, triage, CPR, airway management, trauma care, and all major emergency medical procedures."
      }
    },
    {
      "@type": "Question",
      "name": "Is this a physically demanding career?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, emergency care requires physical stamina, quick thinking, and emotional resilience. The program includes physical fitness training and prepares students to handle high-stress situations, long shifts, and physically demanding tasks. However, the rewarding nature of saving lives makes it a fulfilling career choice."
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
