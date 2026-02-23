import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Medical Record Science Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc medical record science colleges in Tamilnadu? JKKN offers clinical training, NAAC accreditation & placement support. Apply for 2026-27!",
  keywords: [
    "bsc medical record science colleges in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc Medical Record Science",
  "description": "Undergraduate program training healthcare professionals in health information management, medical coding, disease classification systems (ICD-10, CPT), healthcare data analytics, electronic health records, and hospital information systems.",
  "url": "https://ahs.jkkn.ac.in/medical-record-science",
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
    "maximumAttendeeCapacity": 15
  },
  "occupationalCategory": "Medical Records Technician, Medical Coder, Health Information Manager, Clinical Data Analyst, Medical Transcriptionist, Healthcare IT Specialist",
  "teaches": [
    "Medical Coding (ICD-10 and CPT)",
    "Health Information Management",
    "Electronic Health Records",
    "Healthcare Data Analytics",
    "Hospital Information Systems"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc Medical Record Science", "item": "https://ahs.jkkn.ac.in/medical-record-science" }
  ]
};

export default function MedicalRecordScienceLayout({
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
