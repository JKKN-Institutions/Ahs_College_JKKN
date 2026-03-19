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
  "dateModified": "2026-03-19",
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
    "name": "Apply for B.Sc Physician Assistant"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Physician Assistant Course in Tamilnadu | JKKN AHS College",
  "url": "https://ahs.jkkn.ac.in/physician-assistant",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Physician Assistant", "item": "https://ahs.jkkn.ac.in/physician-assistant" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Bachelor of Science Physician Assistant course at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Bachelor of Science Physician Assistant course at JKKN College Tamil Nadu is a three-year degree plus one-year internship that trains students to assist physicians in clinical diagnosis, treatment, and patient care."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility to join the Bachelor of Science Physician Assistant program at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need 10+2 with Physics, Chemistry, and Biology, minimum 50% marks. Scheduled Caste and Scheduled Tribe candidates need 40%, Other Backward Classes candidates need 45%. Minimum age is 17 years."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Physician Assistant graduate from JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level Physician Assistant graduates earn three to five lakhs per year. Experienced professionals earn six to ten lakhs. Senior roles in corporate hospitals offer twelve to twenty lakhs per year."
      }
    },
    {
      "@type": "Question",
      "name": "What career opportunities are available after the Bachelor of Science Physician Assistant course at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Clinical Physician Assistants, Emergency Care Assistants, Surgical Assistants, Intensive Care Unit Assistants, Outpatient Department Coordinators, and Community Health Officers in hospitals and clinics."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Bachelor of Science Physician Assistant course at JKKN College Tamil Nadu a good career choice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Growing demand for mid-level healthcare providers, competitive salaries, diverse roles, and India's expanding healthcare infrastructure make Physician Assistant an excellent career choice."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher studies after the Bachelor of Science Physician Assistant course at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Graduates can pursue Master of Science in Physician Assistant Studies, Master of Science in Clinical Medicine, Master of Public Health, or a Master of Business Administration in Healthcare Management."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in the Bachelor of Science Physician Assistant course at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes over two thousand hours of clinical training across outpatient departments, emergency departments, Intensive Care Units, operation theatres, and community health settings."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Physician Assistant and a doctor at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Physician Assistants practice under physician supervision and assist in diagnosis and treatment. Doctors hold independent practice rights and complete five and a half years of MBBS training."
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
