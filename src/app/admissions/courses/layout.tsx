import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Course-Wise Admission 2026-27 | 9 BSc Allied Health Sciences Programs | JKKN Tamil Nadu",
  description:
    "Course-wise admission details for 9 BSc Allied Health Sciences programs at JKKN College — eligibility, cutoff, fees (GQ + MQ), seat matrix, career paths, salary and recruiters. Apply for AHS admission 2026-27, Tamil Nadu.",
  path: "/admissions/courses",
  keywords: [
    "course wise admission allied health sciences",
    "bsc cardiac technology admission tamilnadu",
    "bsc dialysis technology admission",
    "bsc radiology imaging technology admission",
    "bsc operation theatre anaesthesia admission",
    "bsc respiratory therapy admission",
    "bsc physician assistant admission",
    "bsc critical care technology admission",
    "bsc medical record science admission",
    "bsc accident emergency care admission",
    "allied health science course fees tamilnadu",
    "jkkn course wise admission 2026",
    "ahs course wise eligibility",
    "paramedical course fees tamilnadu",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "JKKN Institutions", item: "https://jkkn.ac.in/" },
    { "@type": "ListItem", position: 2, name: "Allied Health Sciences", item: "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", position: 3, name: "Admission 2026-27", item: "https://ahs.jkkn.ac.in/admissions" },
    { "@type": "ListItem", position: 4, name: "Course-Wise Admission", item: "https://ahs.jkkn.ac.in/admissions/courses" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Course-Wise Admission — 9 BSc Allied Health Sciences Programs at JKKN College",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 9,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "B.Sc Cardiac Technology", url: "https://ahs.jkkn.ac.in/admissions/cardiac-technology" },
    { "@type": "ListItem", position: 2, name: "B.Sc Dialysis Technology", url: "https://ahs.jkkn.ac.in/admissions/dialysis-technology" },
    { "@type": "ListItem", position: 3, name: "B.Sc Radiology & Imaging Technology", url: "https://ahs.jkkn.ac.in/admissions/radiology-imaging-technology" },
    { "@type": "ListItem", position: 4, name: "B.Sc Operation Theatre & Anaesthesia Technology", url: "https://ahs.jkkn.ac.in/admissions/operation-theatre-anaesthesia" },
    { "@type": "ListItem", position: 5, name: "B.Sc Respiratory Therapy", url: "https://ahs.jkkn.ac.in/admissions/respiratory-therapy" },
    { "@type": "ListItem", position: 6, name: "B.Sc Physician Assistant", url: "https://ahs.jkkn.ac.in/admissions/physician-assistant" },
    { "@type": "ListItem", position: 7, name: "B.Sc Critical Care Technology", url: "https://ahs.jkkn.ac.in/admissions/critical-care-technology" },
    { "@type": "ListItem", position: 8, name: "B.Sc Medical Record Science", url: "https://ahs.jkkn.ac.in/admissions/medical-record-science" },
    { "@type": "ListItem", position: 9, name: "B.Sc Accident & Emergency Care Technology", url: "https://ahs.jkkn.ac.in/admissions/accident-emergency-care" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-05-16",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which BSc Allied Health Sciences course is best at JKKN College?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best course depends on your career goal. B.Sc Cardiac Technology and B.Sc Operation Theatre & Anaesthesia have the highest placement salary (₹3.5–6 LPA). B.Sc Radiology & Imaging Technology and B.Sc Physician Assistant offer strong international scope (UK NHS, UAE, Saudi Arabia). B.Sc Medical Record Science has the lowest fee (₹60,000/yr) and excellent administrative roles. All 9 programs are 4-year courses (3+1) affiliated to TN Dr. MGR Medical University.",
      },
    },
    {
      "@type": "Question",
      name: "What is the seat matrix for each BSc AHS course at JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total Management Quota (MQ) seats per course: Cardiac Technology - 7 seats, Dialysis Technology - 5 seats, Radiology & Imaging - 5 seats, Operation Theatre & Anaesthesia - 10 seats, Respiratory Therapy - 10 seats, Physician Assistant - 10 seats, Critical Care Technology - 10 seats, Medical Record Science - 15 seats, Accident & Emergency Care - 10 seats. Government Quota (GQ) seats are allotted as per TN Govt counselling.",
      },
    },
    {
      "@type": "Question",
      name: "What is the course-wise fee structure at JKKN Allied Health Sciences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Management Quota (MQ) annual fees per course: Medical Record Science - ₹60,000, Dialysis Technology / Respiratory Therapy / Critical Care / Accident & Emergency - ₹1,10,000, Radiology & Imaging / Physician Assistant - ₹1,30,000, Cardiac Technology / Operation Theatre & Anaesthesia - ₹1,70,000. Government Quota fees are as per Tamil Nadu Government norms. Installment options and scholarships are available.",
      },
    },
    {
      "@type": "Question",
      name: "What is the eligibility for each BSc Allied Health Sciences course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All 9 BSc Allied Health Sciences programs at JKKN require: +2 / equivalent with Physics, Chemistry, Biology (PCB) as core subjects; minimum aggregate of 50% (General), 45% (OBC), 40% (SC/ST); age 17 years or above as on 31 December 2026; English as a compulsory subject; medical fitness certificate. NEET is NOT mandatory for any AHS course.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply for multiple BSc AHS courses at JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In the JKKN admission form, you can list multiple course preferences in priority order. Seat allotment is done based on merit (+2 marks) and seat availability in your preferred course. If your first preference is full, the next available preference is offered.",
      },
    },
    {
      "@type": "Question",
      name: "Which BSc AHS course has the best placement at JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Overall placement is 95% across all 9 courses. Highest average packages: B.Sc Cardiac Technology (₹4-6 LPA), B.Sc Operation Theatre & Anaesthesia (₹3.5-5 LPA), B.Sc Radiology & Imaging (₹3.5-5 LPA), B.Sc Physician Assistant (₹3-4.5 LPA). Top recruiters: Apollo, Fortis, MIOT, Manipal, Kauvery, NHS-UK, Cleveland Clinic UAE, KFSH Saudi Arabia.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an internship in BSc Allied Health Sciences courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all 9 BSc AHS programs include 1 year of mandatory clinical internship after 3 years of academic study (total 3+1 = 4 years). Internship is conducted at JKKN's 500+ bed multi-specialty teaching hospital and partnered hospitals. Stipend may be provided depending on the hospital.",
      },
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Course-Wise Admission 2026-27 | JKKN Allied Health Sciences",
  url: "https://ahs.jkkn.ac.in/admissions/courses",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".faq-answer", "h1", "h2", "h3"],
  },
};

export default function CourseAdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  );
}
