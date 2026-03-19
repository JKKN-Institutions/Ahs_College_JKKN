import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BSc Medical Record Science Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc medical record science colleges in Tamilnadu? JKKN offers clinical training, NAAC accreditation & placement support. Apply for 2026-27!",
  path: "/medical-record-science",
  keywords: [
    "bsc medical record science colleges in tamilnadu",
    "health information management course",
    "medical coding course tamilnadu",
    "icd-10 training college",
    "bsc medical records admission 2026",
    "medical record science course namakkal"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/medical-record-science-hero.png", width: 1200, height: 630, alt: "BSc Medical Record Science at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
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
    "maximumAttendeeCapacity": 15
  },
  "occupationalCategory": "Medical Records Technician, Medical Coder, Health Information Manager, Clinical Data Analyst, Medical Transcriptionist, Healthcare IT Specialist",
  "teaches": [
    "Medical Coding (ICD-10 and CPT)",
    "Health Information Management",
    "Electronic Health Records",
    "Healthcare Data Analytics",
    "Hospital Information Systems"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fees",
    "priceCurrency": "INR",
    "price": "75000",
    "priceValidUntil": "2027-07-31",
    "url": "https://admission.jkkn.ac.in/",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01"
  },
  "potentialAction": {
    "@type": "ApplyAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://admission.jkkn.ac.in/",
      "actionPlatform": "http://schema.org/DesktopWebPlatform"
    },
    "name": "Apply for B.Sc Medical Record Science"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Medical Record Science Colleges in Tamilnadu | JKKN",
  "url": "https://ahs.jkkn.ac.in/medical-record-science",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
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
  "dateModified": "2026-03-19",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Bachelor of Science Medical Record Science at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bachelor of Science Medical Record Science at JKKN College Tamil Nadu is a four-year degree training professionals in Health Information Management, medical coding, International Classification of Diseases, and hospital information systems."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility to join Bachelor of Science Medical Record Science at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need 10+2 with Physics, Chemistry, and Biology or Mathematics, minimum 50% marks. Scheduled Caste and Scheduled Tribe students need 40%, Other Backward Classes students need 45%. Minimum age is 17 years."
      }
    },
    {
      "@type": "Question",
      "name": "What salary can I earn after Bachelor of Science Medical Record Science at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level Medical Record Science professionals earn 2.5 to 4 lakhs per year. Experienced Health Information Management specialists earn 5 to 12 lakhs. Senior roles in corporate hospitals pay up to 20 lakhs annually."
      }
    },
    {
      "@type": "Question",
      "name": "What career opportunities are available after Bachelor of Science Medical Record Science at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Medical Record Technicians, Health Information Managers, Medical Coders, Clinical Data Analysts, and Healthcare Information Technology Specialists in hospitals, insurance companies, and pharmaceutical firms."
      }
    },
    {
      "@type": "Question",
      "name": "Is medical coding using International Classification of Diseases taught in Bachelor of Science Medical Record Science at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, International Classification of Diseases coding and Electronic Medical Records are core components. Students learn disease classification, procedural coding, and hands-on practice with real medical records and coding software."
      }
    },
    {
      "@type": "Question",
      "name": "Can I work abroad after completing Bachelor of Science Medical Record Science at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Health Information Management professionals are globally in demand. USA, UK, Canada, Australia, and Gulf nations hire trained medical coders. Additional international certifications further increase overseas job opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue Master of Science after Bachelor of Science Medical Record Science at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue Master of Science in Medical Record Science or Health Informatics, or an MBA in Healthcare Management. Professional certifications in coding specialization are also available for career advancement."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in Bachelor of Science Medical Record Science at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes over 2000 hours of practical training in medical record departments, coding laboratories, Electronic Medical Records systems, and hospital internships with hands-on Health Information Management experience."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
