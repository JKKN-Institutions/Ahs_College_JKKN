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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Medical Record Science?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Medical Record Science is a 3 years + 1 year internship program that trains professionals in health information management, medical coding, ICD classification, health records administration, healthcare data analytics, and hospital information systems. Graduates manage patient health records and ensure data accuracy for quality healthcare delivery."
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
      "name": "What is the salary of a Medical Record Science professional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level medical record technicians earn ₹2.5-4 lakhs per annum. With experience, salaries range from ₹5-10 lakhs. Senior Health Information Managers and Certified Coders in corporate hospitals, insurance companies, and international organizations earn ₹12-20 lakhs per annum."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates can work as Medical Record Technician, Health Information Manager, Medical Coder, Clinical Data Analyst, Medical Transcriptionist, Quality Assurance Officer, Medical Auditor, and Healthcare IT Specialist in hospitals, diagnostic centers, insurance companies, pharmaceutical firms, and healthcare IT organizations."
      }
    },
    {
      "@type": "Question",
      "name": "Is medical coding covered in this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, comprehensive medical coding training is a core component of the program. Students learn ICD-10 coding for diagnoses, CPT coding for procedures, and other classification systems like ICD-O for oncology. The curriculum includes extensive hands-on practice with real medical records and coding scenarios."
      }
    },
    {
      "@type": "Question",
      "name": "Can I work abroad after this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, medical record science professionals are in high demand globally. Countries like USA, UK, Canada, Australia, and Gulf nations hire trained medical coders and health information managers. Additional certifications like RHIT (Registered Health Information Technician) or CPC (Certified Professional Coder) increase international job opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue M.Sc in Medical Record Science, M.Sc in Health Informatics, MBA in Healthcare Management, or professional certifications like RHIA (Registered Health Information Administrator), CCS (Certified Coding Specialist), or CCA (Certified Coding Associate) for advanced career opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes 2000+ hours of practical training in medical record departments, coding laboratories, health information management systems, and hospital internships. Students gain hands-on experience with electronic health records (EHR), medical coding software, health information systems, and real-world medical record management."
      }
    }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
