import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physician Assistant Course in Tamilnadu | JKKN AHS College",
  description: "JKKN offers the best physician assistant course in Tamilnadu. BSc physician assistant programme with hospital training & placements. Admissions 2026-27 open!",
  keywords: [
    "physician assistant course in tamilnadu",
    "bsc physician assistant colleges in tamilnadu",
    "physician assistant colleges in tamilnadu",
    "bsc physician assistant course in tamilnadu",
    "physician assistant course colleges in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc Physician Assistant",
  "description": "Comprehensive program that prepares students to become skilled clinical professionals with expertise in patient assessment, diagnostic support, and therapeutic procedures across medical specialties. Graduates work alongside physicians in clinical settings.",
  "url": "https://ahs.jkkn.ac.in/physician-assistant",
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
  "occupationalCategory": "Clinical Physician Assistant, Emergency Care Assistant, Surgical Assistant, ICU Critical Care Assistant, OPD Coordinator, Community Health Officer",
  "teaches": [
    "Clinical Patient Assessment",
    "Diagnostic Support",
    "Treatment Planning",
    "Emergency Response",
    "Patient Care Management"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc Physician Assistant", "item": "https://ahs.jkkn.ac.in/physician-assistant" }
  ]
};

export default function PhysicianAssistantLayout({
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
