import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Respiratory Therapy Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc respiratory therapy colleges in Tamilnadu? JKKN offers respiratory therapy course with clinical training & scholarships. Apply 2026-27!",
  keywords: [
    "bsc respiratory therapy colleges in tamilnadu",
    "respiratory therapy course in tamilnadu",
    "bsc respiratory therapy in tamilnadu"
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc Respiratory Therapy",
  "description": "Program that trains healthcare professionals in assessment, treatment, and management of respiratory and cardiopulmonary disorders. Covers respiratory anatomy, pulmonary function testing, mechanical ventilation, airway management, arterial blood gas analysis, oxygen therapy, and cardiopulmonary rehabilitation.",
  "url": "https://ahs.jkkn.ac.in/respiratory-therapy",
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
    "maximumAttendeeCapacity": 10
  },
  "occupationalCategory": "Respiratory Therapist, ICU Ventilator Specialist, Pulmonary Function Technologist, Sleep Lab Technician, Neonatal Respiratory Care Specialist",
  "teaches": [
    "Mechanical Ventilation",
    "Airway Management",
    "Pulmonary Function Testing",
    "Arterial Blood Gas Analysis",
    "Oxygen Therapy",
    "Cardiopulmonary Rehabilitation"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc Respiratory Therapy", "item": "https://ahs.jkkn.ac.in/respiratory-therapy" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Respiratory Therapy and what does it involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Respiratory Therapy is a 4-year undergraduate degree program that trains healthcare professionals in respiratory care, pulmonary diagnostics, and cardiopulmonary management. The program covers pulmonary function testing, mechanical ventilation, oxygen therapy, arterial blood gas analysis, airway management, critical care respiratory therapy, and cardiopulmonary rehabilitation. Graduates work as respiratory therapists in hospitals, ICUs, diagnostic centers, and rehabilitation facilities, assisting pulmonologists and critical care physicians in managing patients with breathing disorders."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria for B.Sc Respiratory Therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To be eligible for B.Sc Respiratory Therapy, candidates must have passed 10+2 or equivalent examination with Physics, Chemistry, and Biology/Mathematics as core subjects from a recognized board. A minimum of 50% aggregate marks is required (45% for SC/ST/OBC candidates). Applicants must be at least 17 years of age as on December 31st of the admission year and possess a medical fitness certificate."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a Respiratory Therapist in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level respiratory therapists in India typically earn between ₹3-5 lakhs per annum. With 3-5 years of experience and specialization in areas like critical care or neonatal respiratory care, salaries can range from ₹6-12 lakhs per annum. Senior respiratory therapists in corporate hospitals and those working abroad can earn ₹15-25 lakhs or more per annum. Salaries vary based on location, hospital type, and specialized skills in mechanical ventilation and critical care."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities after B.Sc Respiratory Therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates can pursue diverse career paths including Respiratory Therapist, ICU Ventilator Specialist, Pulmonary Function Technologist, Sleep Lab Technician, Neonatal Respiratory Care Specialist, Cardiopulmonary Rehabilitation Specialist, Home Care Respiratory Therapist, and Medical Equipment Sales Representative. Employment opportunities exist in multi-specialty hospitals, ICUs, pulmonary function laboratories, sleep centers, neonatal units, rehabilitation centers, home healthcare companies, and medical device organizations."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after B.Sc Respiratory Therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue M.Sc in Respiratory Therapy, M.Sc in Critical Care Technology, MBA in Healthcare Management, or MPH (Master of Public Health). Research-oriented individuals can pursue Ph.D. in Respiratory Sciences. International certifications such as Registered Respiratory Therapist (RRT) from the National Board for Respiratory Care (USA) can significantly enhance career prospects globally. Many graduates also pursue specialized certifications in mechanical ventilation, sleep medicine, and neonatal respiratory care."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Respiratory Therapy and Pulmonology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pulmonology is a medical specialty requiring an MBBS degree followed by MD specialization, enabling physicians to diagnose and treat lung diseases independently. Respiratory Therapy is an allied health program that trains therapists to administer respiratory treatments, manage ventilators, perform pulmonary function tests, and provide respiratory care under medical supervision. While pulmonologists make clinical decisions and prescribe treatments, respiratory therapists execute therapeutic interventions and provide hands-on patient care support."
      }
    },
    {
      "@type": "Question",
      "name": "Is B.Sc Respiratory Therapy a good career choice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, B.Sc Respiratory Therapy offers excellent career prospects due to the rising prevalence of respiratory diseases like COPD, asthma, and lung infections globally. The COVID-19 pandemic has highlighted the critical importance of respiratory care professionals, leading to increased demand for skilled respiratory therapists. The field offers job stability, competitive salaries, opportunities for specialization in critical care and neonatal care, and the satisfaction of saving lives. With technological advancements in respiratory care, the scope continues to expand across healthcare settings."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in the program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our program includes over 1500 hours of clinical training across pulmonary function laboratories, intensive care units, respiratory care units, sleep laboratories, and neonatal intensive care units. Learners gain hands-on experience with spirometry, arterial blood gas analysis, mechanical ventilator operation (invasive and non-invasive), oxygen therapy administration, nebulization techniques, airway management, chest physiotherapy, and polysomnography. Clinical rotations in partnered hospitals ensure exposure to real-world patient care scenarios and emergency respiratory protocols."
      }
    }
  ]
};

export default function RespiratoryTherapyLayout({
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
