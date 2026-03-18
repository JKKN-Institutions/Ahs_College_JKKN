import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Physician Assistant Course in Tamilnadu | JKKN AHS College",
  description: "JKKN offers the best physician assistant course in Tamilnadu. BSc physician assistant programme with hospital training & placements. Admissions 2026-27!",
  path: "/physician-assistant",
  keywords: [
    "physician assistant course in tamilnadu",
    "bsc physician assistant colleges in tamilnadu",
    "physician assistant colleges in tamilnadu",
    "bsc physician assistant course in tamilnadu",
    "physician assistant course colleges in tamilnadu"
  ],
});

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
  "coursePrerequisites": "10+2 or equivalent with Physics, Chemistry, and Biology. Minimum 50% aggregate (40% for SC/ST, 45% for OBC). Age 17+ years.",
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
    "maximumAttendeeCapacity": 10
  },
  "occupationalCategory": "Clinical Physician Assistant, Emergency Care Assistant, Surgical Assistant, ICU Critical Care Assistant, OPD Coordinator, Community Health Officer",
  "teaches": [
    "Clinical Patient Assessment",
    "Diagnostic Support",
    "Treatment Planning",
    "Emergency Response",
    "Patient Care Management"
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
  "name": "Physician Assistant Course in Tamilnadu | JKKN AHS College",
  "url": "https://ahs.jkkn.ac.in/physician-assistant",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Physician Assistant", "item": "https://ahs.jkkn.ac.in/physician-assistant" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Physician Assistant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Physician Assistant is a 3 years + 1 year internship program that trains healthcare professionals to work alongside physicians in clinical settings. Physician Assistants are skilled in patient assessment, diagnosis support, medical procedures, treatment planning, and patient care management across various medical specialties including general medicine, surgery, emergency care, and community health."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have passed +2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (40% for SC/ST, 45% for OBC). Minimum age is 17 years as on December 31st of the admission year. A medical fitness certificate is also required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Physician Assistant in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level Physician Assistants earn ₹3-5 lakhs per annum. With 3-5 years of experience, salaries range from ₹6-10 lakhs. Senior Physician Assistants and those in specialized roles at corporate hospitals can earn ₹12-20 lakhs per annum. International opportunities offer significantly higher packages."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Physician Assistant graduates work as Clinical Physician Assistants, Emergency Care Assistants, Surgical Assistants, and ICU/Critical Care Assistants in hospitals and clinics. Additional roles include OPD Coordinator, Community Health Officer, and Clinical Research Associate."
      }
    },
    {
      "@type": "Question",
      "name": "Is B.Sc Physician Assistant a good career choice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, B.Sc Physician Assistant is an excellent career choice with growing demand for mid-level healthcare providers in India. The field offers competitive salaries, diverse work environments, and opportunities for specialization. With India's expanding healthcare infrastructure, PAs are increasingly recognized as vital healthcare team members."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue M.Sc in Physician Assistant Studies, Clinical Medicine, or Public Health (MPH) for advanced specialization. MBA in Healthcare Management and certifications in Emergency Medicine or Critical Care are also available."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes 2000+ hours of clinical training across OPD, emergency departments, ICU, operation theaters, and community health settings. Students gain hands-on experience in patient assessment, medical procedures, diagnostic interpretations, and clinical rotations in medicine, surgery, pediatrics, and emergency care."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Physician Assistant and a Doctor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Physician Assistants practice medicine under the supervision of physicians. While doctors have independent practice rights, PAs work as part of a healthcare team. PAs can diagnose, treat, and prescribe medications but always collaborate with physicians for complex cases. The 4-year PA program focuses on clinical practice, while medical doctors complete 5.5 years of MBBS."
      }
    }
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
