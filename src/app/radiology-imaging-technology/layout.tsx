import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Best Radiography Course in Tamilnadu | JKKN AHS College",
  description: "JKKN offers the best radiography course in Tamilnadu. BSc radiography programme with hospital-attached imaging training & placements. Admissions 2026-27!",
  path: "/radiology-imaging-technology",
  keywords: [
    "radiography course in tamilnadu",
    "b sc radiography colleges in tamilnadu",
    "bsc radiography colleges in tamilnadu",
    "radiography courses in tamilnadu"
  ],
});

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
  "coursePrerequisites": "10+2 or equivalent with Physics, Chemistry, and Biology/Mathematics. Minimum 50% aggregate (40% for SC/ST, 45% for OBC). Age 17+ years.",
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
  "name": "Best Radiography Course in Tamilnadu | JKKN AHS College",
  "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Radiography Imaging Technology", "item": "https://ahs.jkkn.ac.in/radiology-imaging-technology" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Radiography Imaging Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Radiography Imaging Technology is a 3 years + 1 year internship program that trains professionals in diagnostic medical imaging. It covers X-ray, CT scan, MRI, ultrasound, mammography, fluoroscopy, interventional radiology, and nuclear medicine imaging techniques. Graduates become skilled in operating imaging equipment, patient positioning, radiation safety, and producing high-quality diagnostic images."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Biology/Mathematics with minimum 50% aggregate marks (40% for SC/ST, 45% for OBC). Minimum age is 17 years as on December 31st of the admission year. A medical fitness certificate is also required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Radiology Technologist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level radiology technologists earn ₹3-5 lakhs per annum. With 3-5 years experience, salaries range from ₹6-10 lakhs. Specialists in CT/MRI and senior positions at corporate hospitals can earn ₹12-20 lakhs per annum. International opportunities offer significantly higher packages."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Radiography graduates work as X-ray Technicians, CT Scan Technologists, MRI Technologists, and Ultrasound Technicians in hospitals and diagnostic centers. Additional roles include Mammography Specialist, Interventional Radiology Technician, Nuclear Medicine Technologist, and Quality Assurance Officer."
      }
    },
    {
      "@type": "Question",
      "name": "Is B.Sc Radiography Imaging Technology a good career choice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, B.Sc Radiography Imaging Technology offers excellent career prospects due to growing healthcare infrastructure, increasing demand for diagnostic services, technological advancements in medical imaging, and competitive salaries. The field offers diverse specializations and opportunities for continuous professional development."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue M.Sc in Radiography Imaging Technology, Medical Imaging, or Radiological Sciences for advanced specialization. PG Diploma in CT/MRI Technology and MBA in Healthcare Management are also available for career advancement and leadership roles."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes 2000+ hours of clinical training in radiology departments with hands-on experience in X-ray, CT, MRI, ultrasound, mammography, fluoroscopy, and interventional radiology. Students work with latest imaging equipment and learn patient care, positioning techniques, image processing, and radiation safety protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Is radiation exposure a concern in this profession?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern radiology technology and strict safety protocols minimize radiation exposure. Radiology technologists are trained in radiation safety, use protective equipment, and follow ALARA (As Low As Reasonably Achievable) principles. With proper safety measures, this is a safe and rewarding healthcare career."
      }
    }
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
