import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.Sc Operation Theatre & Anaesthesia Technology College in Tamilnadu",
  description: "Looking for BSc operation theatre & anaesthesia technology colleges in Tamilnadu? JKKN offers clinical OT training, placements & scholarships. Enrol 2026-27!",
  keywords: [
    "b.sc operation theatre & anaesthesia technology colleges in tamilnadu",
    "bsc operation theatre & anaesthesia technology colleges in tamilnadu",
    "operation theatre technician course in tamilnadu",
    "bsc operation theatre technology colleges in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
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
    "maximumAttendeeCapacity": 10
  },
  "occupationalCategory": "OT Technician, Anaesthesia Technician, Surgical Assistant, CSSD Technician, Endoscopy Technician, ICU Technician",
  "teaches": [
    "Surgical Assistance",
    "Anaesthesia Administration Support",
    "Sterilization and CSSD",
    "Patient Monitoring",
    "Perioperative Care"
  ]
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
      {children}
    </>
  );
}
