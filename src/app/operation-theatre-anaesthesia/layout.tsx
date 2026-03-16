import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.Sc Operation Theatre & Anaesthesia Technology College in Tamilnadu",
  description: "Looking for BSc operation theatre & anaesthesia technology colleges in Tamilnadu? JKKN offers clinical OT training, placements & scholarships. Enrol 2026-27!",
  keywords: [
    "b.sc operation theatre & anaesthesia technology colleges in tamilnadu",
    "bsc operation theatre & anaesthesia technology colleges in tamilnadu",
    "operation theatre technician course in tamilnadu",
    "bsc operation theatre technology colleges in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc Operation Theatre and Anaesthesia Technology",
  "description": "Comprehensive program that prepares students to become skilled OT and anaesthesia technologists with expertise in surgical assistance, anaesthesia support, patient monitoring, sterilization, and perioperative care management.",
  "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia",
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
  "occupationalCategory": "OT Technician, Anaesthesia Technician, Surgical Assistant, CSSD Technician, Endoscopy Technician, ICU Technician",
  "teaches": [
    "Surgical Assistance",
    "Anaesthesia Administration Support",
    "Sterilization and CSSD",
    "Patient Monitoring",
    "Perioperative Care"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc OT and Anaesthesia Technology", "item": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Operation Theatre & Anaesthesia Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Operation Theatre & Anaesthesia Technology is a 3 years + 1 year internship program that trains professionals in surgical assistance, anaesthesia administration support, patient monitoring during surgery, sterilization techniques, and perioperative care management. Graduates become essential members of surgical teams in operation theatres."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (45% for reserved categories). Minimum age is 17 years as on December 31st of the admission year. A medical fitness certificate is also required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of an OT Technician?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level OT technicians earn ₹3-5 lakhs per annum. With 3-5 years experience, salaries range from ₹5-10 lakhs. Senior positions like OT Coordinators or Supervisors in corporate hospitals offer ₹12-20 lakhs per annum. International opportunities offer even higher remuneration."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates can work as OT Technician, Anaesthesia Technician, Surgical Assistant, CSSD Technician, Endoscopy Technician, ICU Technician, Perfusionist Assistant, and Medical Device Specialist in multi-specialty hospitals, surgical centers, diagnostic facilities, and medical equipment companies."
      }
    },
    {
      "@type": "Question",
      "name": "What is the scope of OT Technology in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With increasing surgical procedures, growing healthcare infrastructure, and rising demand for skilled paramedical staff, OT and Anaesthesia technologists are in high demand across government hospitals, private healthcare chains, and international medical facilities. The healthcare sector is expected to grow at 22% CAGR, creating extensive opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue M.Sc in OT & Anaesthesia Technology, M.Sc in Critical Care, Post Graduate Diploma in Surgical Technology, MBA in Healthcare Management, or specialized certifications in perfusion technology, endoscopy, or laparoscopy for advanced career opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes 2000+ hours of clinical training in operation theatres, anaesthesia departments, CSSD units, ICUs, and surgical specialty departments with hands-on experience in surgical procedures, anaesthesia equipment handling, instrument sterilization, and patient monitoring systems."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between OT Technician and Anaesthesia Technician?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OT Technicians assist surgeons during procedures, manage surgical instruments, and maintain sterile environments. Anaesthesia Technicians specifically support anaesthesiologists, prepare and maintain anaesthesia equipment, monitor patients during anaesthesia, and manage airway equipment. Our program trains you in both specializations."
      }
    }
  ]
};

export default function OperationTheatreAnaesthesiaLayout({
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
