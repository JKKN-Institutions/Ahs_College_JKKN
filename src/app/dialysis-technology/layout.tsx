import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B Sc Dialysis Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc dialysis technology colleges in Tamilnadu? JKKN offers renal dialysis technology courses with clinical training & placements. Apply 2026-27!",
  keywords: [
    "b sc dialysis technology colleges in tamilnadu",
    "bsc dialysis technology colleges in tamilnadu",
    "bsc renal dialysis technology colleges in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
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
  "coursePrerequisites": "10+2 or equivalent with Physics, Chemistry, and Biology. Minimum 50% aggregate (40% for SC/ST/OBC). Age 17+ years.",
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
    "maximumAttendeeCapacity": 5
  },
  "occupationalCategory": "Dialysis Technician, Hemodialysis Specialist, Peritoneal Dialysis Technician, Renal Care Coordinator, Dialysis Unit Supervisor",
  "teaches": [
    "Hemodialysis Procedures",
    "Peritoneal Dialysis",
    "Water Treatment Systems",
    "Renal Patient Care",
    "Dialysis Equipment Management"
  ]
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
      {children}
    </>
  );
}
