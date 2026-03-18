import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "B Sc Dialysis Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc dialysis technology colleges in Tamilnadu? JKKN offers renal dialysis technology courses with clinical training & placements. Apply now.",
  path: "/dialysis-technology",
  keywords: [
    "b sc dialysis technology colleges in tamilnadu",
    "bsc dialysis technology colleges in tamilnadu",
    "bsc renal dialysis technology colleges in tamilnadu"
  ],
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc Dialysis Technology",
  "description": "Specialized program that prepares students to become skilled dialysis technologists, mastering hemodialysis procedures, peritoneal dialysis techniques, water treatment systems, and advanced kidney patient care management.",
  "url": "https://ahs.jkkn.ac.in/dialysis-technology",
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
    "maximumAttendeeCapacity": 5
  },
  "occupationalCategory": "Dialysis Technician, Hemodialysis Specialist, Peritoneal Dialysis Technician, Renal Care Coordinator, Dialysis Unit Supervisor",
  "teaches": [
    "Hemodialysis Procedures",
    "Peritoneal Dialysis",
    "Water Treatment Systems",
    "Renal Patient Care",
    "Dialysis Equipment Management"
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
  "name": "B Sc Dialysis Technology Colleges in Tamilnadu | JKKN",
  "url": "https://ahs.jkkn.ac.in/dialysis-technology",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Dialysis Technology", "item": "https://ahs.jkkn.ac.in/dialysis-technology" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Dialysis Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Dialysis Technology is a four-year degree that trains professionals in hemodialysis, peritoneal dialysis, and renal replacement therapy. It covers water treatment systems, vascular access management, patient care, and dialysis unit operations. Graduates operate dialysis equipment and provide critical care to patients with kidney failure."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (40% for SC/ST, 45% for OBC). Minimum age is 17 years as on December 31st of the admission year. A medical fitness certificate is also required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Dialysis Technologist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level dialysis technologists earn ₹2.5-4 lakhs per annum. With 3-5 years experience, salaries range from ₹5-10 lakhs. Senior positions like Dialysis Unit Supervisors or Coordinators in corporate hospitals offer ₹12-20 lakhs per annum. International opportunities offer even higher remuneration."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dialysis Technology graduates work as Dialysis Technicians, Hemodialysis Specialists, Renal Care Coordinators, and Dialysis Unit Supervisors. Employment opportunities exist in hospitals, standalone dialysis centers, nephrology departments, medical equipment companies, research institutions, and healthcare consulting firms."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue M.Sc in Dialysis Technology, Renal Sciences, or Medical Technology after completing this degree. Advanced options include MBA in Healthcare Management and specialized certifications in CRRT (Continuous Renal Replacement Therapy) for enhanced career opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes 2000+ hours of clinical training in hemodialysis units, peritoneal dialysis centers, and nephrology departments. Students gain hands-on experience in machine operations, vascular access cannulation, patient monitoring, water treatment system management, and emergency response procedures."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a demand for Dialysis Technologists in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the demand is rapidly growing. India has over 2 lakh patients requiring regular dialysis, with the number increasing by 10-15% annually due to rising diabetes and hypertension cases. The government's initiatives to establish dialysis centers in every district further increase employment opportunities. Globally, the dialysis market is expected to reach $135 billion by 2028."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Hemodialysis and Peritoneal Dialysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hemodialysis uses an external machine to filter blood through a dialyzer, typically performed at a dialysis center 3 times weekly for 4 hours. Peritoneal Dialysis uses the patient's peritoneal membrane as a natural filter, with dialysate fluid introduced into the abdomen. It can be done at home daily. Our program covers both modalities comprehensively."
      }
    }
  ]
};

export default function DialysisTechnologyLayout({
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
