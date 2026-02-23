import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Radiography Course in Tamilnadu | JKKN AHS College",
  description: "JKKN offers the best radiography course in Tamilnadu. BSc radiography programme with hospital-attached imaging training & placements. Admissions 2026-27 open!",
  keywords: [
    "radiography course in tamilnadu",
    "b sc radiography colleges in tamilnadu",
    "bsc radiography colleges in tamilnadu",
    "radiography courses in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc Radiography Imaging Technology",
  "description": "Comprehensive program that prepares students to become skilled radiography technologists, mastering X-ray, CT scan, MRI, ultrasound, mammography, and advanced radiological procedures for accurate disease diagnosis and treatment planning.",
  "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology",
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
    "maximumAttendeeCapacity": 5
  },
  "occupationalCategory": "X-ray Technician, CT Scan Technologist, MRI Technologist, Ultrasound Technician, Mammography Specialist, Interventional Radiology Technician",
  "teaches": [
    "X-ray Imaging",
    "CT Scanning",
    "MRI Technology",
    "Ultrasound Imaging",
    "Mammography",
    "PACS Systems"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc Radiography Imaging Technology", "item": "https://ahs.jkkn.ac.in/radiology-imaging-technology" }
  ]
};

export default function RadiologyImagingTechnologyLayout({
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
