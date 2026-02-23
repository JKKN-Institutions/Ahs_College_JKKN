import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Cardiac Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc cardiac technology colleges in Tamilnadu? JKKN offers cardiac care technology courses with clinical training & scholarships. Apply 2026-27!",
  keywords: [
    "bsc cardiac technology colleges in tamilnadu",
    "cardiac technology college in tamilnadu",
    "cardiac technology course in tamilnadu",
    "b sc cardiac technology colleges in tamilnadu",
    "bsc cardiac perfusion technology colleges in tamilnadu",
    "bsc cardiac technology courses in tamilnadu",
    "bsc cardiac care technology colleges in tamilnadu",
    "cardiac care technology colleges in tamilnadu",
    "cardiac perfusion technology colleges in tamilnadu",
    "b sc cardiac perfusion technology colleges in tamilnadu",
    "cardiac perfusion technology course in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc Cardiac Technology",
  "description": "Specialized undergraduate program designed to train healthcare professionals in the diagnosis, monitoring, and treatment support for patients with cardiovascular diseases. The curriculum combines theoretical knowledge with extensive practical training, preparing graduates to work alongside cardiologists and cardiac surgeons.",
  "url": "https://ahs.jkkn.ac.in/cardiac-technology",
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
    "maximumAttendeeCapacity": 7
  },
  "occupationalCategory": "ECG Technician, Echo Technologist, Cath Lab Technologist, Pacemaker Technician, Cardiac Rehab Specialist",
  "teaches": [
    "Cardiovascular Diagnostics",
    "ECG Interpretation",
    "Echocardiography",
    "Cardiac Catheterization",
    "Patient Monitoring"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc Cardiac Technology", "item": "https://ahs.jkkn.ac.in/cardiac-technology" }
  ]
};

export default function CardiacTechnologyLayout({
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
