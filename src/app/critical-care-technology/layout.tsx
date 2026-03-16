import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Critical Care Technology College in Tamilnadu | JKKN",
  description: "Looking for a BSc critical care technology college in Tamilnadu? JKKN offers hands-on ICU training, NAAC accreditation & placement support. Apply 2026-27!",
  keywords: [
    "bsc critical care technology college in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
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
  "coursePrerequisites": "10+2 or equivalent with Physics, Chemistry, and Biology/Mathematics. Minimum 50% aggregate (40% for SC/ST/OBC). Age 17+ years.",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "full-time",
    "startDate": "2026",
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
  ]
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Critical Care Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Critical Care Technology is a 3 years + 1 year internship undergraduate degree that trains professionals in intensive care unit (ICU) management, ventilator support, hemodynamic monitoring, advanced life support systems, dialysis technology, and emergency care. Graduates are equipped to work in ICUs, trauma centers, and emergency departments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Biology/Mathematics with minimum 50% aggregate marks (45% for reserved categories). Minimum age is 17 years as on December 31st of the admission year."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Critical Care Technologist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level critical care technologists earn ₹3-5 lakhs per annum. With experience, salaries range from ₹6-12 lakhs. Senior positions in corporate hospitals and specialized ICU units offer ₹15-25 lakhs per annum."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates can work as ICU Technician, Ventilator Technician, Emergency Care Specialist, Respiratory Therapist, ECMO Specialist, and Critical Care Coordinator in hospitals, trauma centers, dialysis centers, and emergency care facilities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue M.Sc in Critical Care Technology, M.Sc in Emergency Medicine, M.Sc in Respiratory Care, Post Graduate Diploma in Critical Care, or MBA in Healthcare Management for advanced career opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes 2000+ hours of clinical training in ICUs, emergency departments, dialysis units, NICU/PICU, and trauma care centers with hands-on experience in ventilator management, hemodynamic monitoring, and all major critical care procedures."
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
      {children}
    </>
  );
}
