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
      {children}
    </>
  );
}
