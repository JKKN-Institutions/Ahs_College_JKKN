import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Respiratory Therapy Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc respiratory therapy colleges in Tamilnadu? JKKN offers respiratory therapy course with clinical training & scholarships. Apply 2026-27!",
  keywords: [
    "bsc respiratory therapy colleges in tamilnadu",
    "respiratory therapy course in tamilnadu",
    "bsc respiratory therapy in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
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
  "occupationalCategory": "Respiratory Therapist, ICU Ventilator Specialist, Pulmonary Function Technologist, Sleep Lab Technician, Neonatal Respiratory Care Specialist",
  "teaches": [
    "Mechanical Ventilation",
    "Airway Management",
    "Pulmonary Function Testing",
    "Arterial Blood Gas Analysis",
    "Oxygen Therapy",
    "Cardiopulmonary Rehabilitation"
  ]
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
      {children}
    </>
  );
}
