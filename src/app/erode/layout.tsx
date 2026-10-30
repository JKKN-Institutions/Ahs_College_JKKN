import { createPageMetadata } from "@/lib/metadata";
import { AHS_MAPS_URL } from "@/lib/entity-profiles";

export const metadata = createPageMetadata({
  title: "Allied Health Science Colleges near Erode | JKKN AHS",
  description:
    "JKKN AHS — ~18 km from Erode on NH-544. 9 UG allied health programmes, 82 university-sanctioned seats, placement support. Admissions open 2026-27.",
  path: "/erode",
  keywords: [
    "allied health science colleges in erode",
    "allied health science colleges erode",
    "allied health science courses in erode",
    "allied health science college near erode",
    "best allied health science college erode",
    "bsc allied health science erode",
    "paramedical colleges in erode",
    "health science courses erode",
    "jkkn allied health sciences erode",
    "allied health science admission erode",
  ],
  ogImage: {
    url: "https://ahs.jkkn.ac.in/allied-health-science-hero.webp",
    width: 1200,
    height: 630,
    alt: "JKKN College of Allied Health Sciences — Best AHS College Near Erode",
  },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "JKKN Institutions",
      item: "https://jkkn.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Allied Health Sciences",
      item: "https://ahs.jkkn.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Erode",
      item: "https://ahs.jkkn.ac.in/erode",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-10-28",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best allied health sciences college near Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Allied Health Sciences is ~18 km from Erode on NH-544, in Komarapalayam, Namakkal district - it is not in Erode district. Its 9 UG programmes are affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Compare it with the colleges inside Erode district too: for B.Sc Cardiac Technology alone, the university's 2025-26 list has 4 there.",
      },
    },
    {
      "@type": "Question",
      name: "How far is JKKN AHS from Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS is ~18 km from the Erode Bus Stand, about 30 minutes by road via NH-544 — direct highway connectivity. Regular bus services are available from Erode.",
      },
    },
    {
      "@type": "Question",
      name: "What is Allied Health Sciences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allied Health Sciences are healthcare professions that support doctors and nurses in diagnosing, treating and monitoring patients. At JKKN College of Allied Health Sciences you can study nine UG courses, including Cardiac Technology, Medical Radiology and Imaging, Dialysis Therapy, Anaesthesia and Operation Theatre, Respiratory Technology and Physician Associates.",
      },
    },
    {
      "@type": "Question",
      name: "How is AHS different from nursing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While nursing focuses on patient care and bedside support, Allied Health Sciences covers specialised diagnostic and therapeutic roles like cardiac monitoring, radiology imaging, dialysis and operation theatre support. Both are valuable healthcare careers, but AHS offers more specialisation options.",
      },
    },
    {
      "@type": "Question",
      name: "Does JKKN AHS provide hostel for Erode learners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Learners from Erode can also opt for daily commute as the campus is about 30 minutes away by road. College transport services are available.",
      },
    },
    {
      "@type": "Question",
      name: "How can I apply for admission at JKKN AHS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can apply online through the official website at https://ahs.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What are the fees for BSc allied health science in Tamil Nadu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Management-quota tuition at JKKN College of Allied Health Sciences for 2026-27 is ₹1,70,000 a year for Cardiac Technology and Anaesthesia & OT Technology, ₹1,30,000 for Medical Radiology & Imaging and Physician Associates, ₹1,10,000 for Dialysis Therapy, Respiratory Technology, Critical Care and Emergency Medical Technologist, and ₹60,000 for Health Information Management. Government-quota fees follow government norms.",
      },
    },
    {
      "@type": "Question",
      name: "What does B.Sc Cardiac Technology at JKKN cover, and how many seats are there?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B.Sc Cardiac Technology at JKKN College of Allied Health Sciences is three years of study plus a one-year internship, covering ECG, echocardiography and cardiac catheterization. The university sanctions 7 seats for 2025-26. Eligibility is a Class 12 pass with Physics, Chemistry and Biology, without NEET; management-quota tuition is ₹1,70,000 a year.",
      },
    },
    {
      "@type": "Question",
      name: "What is the salary after BSc allied health science?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Allied Health Sciences publishes no audited salary figure for its graduates, so none is stated here. Pay differs by specialisation, hospital and country, and roles abroad generally pay more than the same role in India. A dedicated placement cell supports graduates with recruitment drives, interview preparation and guidance for roles abroad; it can give current, verifiable figures on request.",
      },
    },
    {
      "@type": "Question",
      name: "How many allied health science colleges are there near Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erode district has several allied health colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical University. JKKN College of Allied Health Sciences is ~18 km from Erode, in Namakkal district. For B.Sc Cardiac Technology, the university's 2025-26 list has 4 in Erode district - two Nandha colleges at Pitchandampalayam, Shree Venkateshwara at Gobichettipalayam and JKK Munirajah at T.N. Palayam.",
      },
    },
    {
      "@type": "Question",
      name: "What are the eligibility requirements for allied health science courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Tamil Nadu 2026-27 allied health prospectus, you need a Class 12 pass with English and Physics, Chemistry and Biology (or Botany and Zoology), and must be 17 by 31 December 2026; NEET is not required. For eight of JKKN's nine courses the prospectus sets no minimum percentage. Health Information Management needs 50% (40% for BC, BCM, MBC, DNC, SC, SCA and ST candidates) and also accepts Commerce or Arts; Anaesthesia and Operation Theatre Technology also accepts Mathematics.",
      },
    },
    {
      "@type": "Question",
      name: "Are there healthcare career opportunities in Erode's textile industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS publishes no job record for Erode's textile or turmeric industry. Its courses closest to factory and industrial health work are Emergency Medical Technologist (Paramedic), B.Sc Critical Care Technology and B.PA Physician Associates, taught at Komarapalayam, ~18 km from Erode on NH-544.",
      },
    },
    {
      "@type": "Question",
      name: "Can Erode learners commute daily to JKKN AHS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. At ~18 km via NH-544, many Erode learners commute daily - about 30 minutes by road. JKKN also provides dedicated college transport services with multiple pickup points in Erode city. Hostel facilities are available for those who prefer to stay on campus.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose JKKN AHS near Erode over colleges in Coimbatore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS is ~18 km from Erode on NH-544, with clinical training at partner hospitals and local industry connections for placements. The NH-544 location also means easy access to opportunities in both Erode and Coimbatore.",
      },
    },
  ],
};

// The college is declared once, in src/app/layout.tsx. A city page adds one fact.
const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://ahs.jkkn.ac.in/#organization",
  // `name` repeated on purpose: Google merges by @id, but a validator reads each block
  // on its own and CollegeOrUniversity requires a name.
  name: "JKKN College of Allied Health Sciences",
  areaServed: { "@type": "City", name: "Erode" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for Allied Health Science Admission at JKKN AHS",
  description: "Step-by-step admission process for BSc Allied Health Sciences at JKKN College of Allied Health Sciences, near Erode.",
  totalTime: "P14D",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Eligibility", text: "Check that you have passed Class 12 with English and Physics, Chemistry and Biology (or Botany and Zoology) and will be 17 by 31 December 2026. Health Information Management needs 50% (40% for BC, BCM, MBC, DNC, SC, SCA and ST); the other courses set no minimum percentage." },
    { "@type": "HowToStep", position: 2, name: "Apply Online", text: "Visit https://www.jkkn.ai/apply/jkkn-admission-2026 and fill out the online application form with your personal and academic details." },
    { "@type": "HowToStep", position: 3, name: "Submit Documents", text: "Upload or submit 12th mark sheet, community certificate, Aadhaar card, passport-size photos, and transfer certificate." },
    { "@type": "HowToStep", position: 4, name: "Attend Counselling", text: "Attend the admission counselling session at JKKN campus or online. Select your preferred BSc programme from 9 available options." },
    { "@type": "HowToStep", position: 5, name: "Pay Fees & Confirm", text: "Complete fee payment to confirm your admission. Scholarship options are available for meritorious learners." },
    { "@type": "HowToStep", position: 6, name: "Join Campus", text: "Report to JKKN AHS campus at Komarapalayam on the designated date. Hostel and transport facilities available." },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Allied Health Science Colleges in Erode | JKKN AHS",
  url: "https://ahs.jkkn.ac.in/erode",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".snippet-answer", ".voice-answer", "[data-speakable]"],
  },
};

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
