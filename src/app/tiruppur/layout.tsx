import { createPageMetadata } from "@/lib/metadata";
import { AHS_MAPS_URL } from "@/lib/entity-profiles";

export const metadata = createPageMetadata({
  title: "Allied Health Sciences Colleges in Tiruppur | JKKN AHS",
  description:
    "JKKN AHS — ~67 km from Tiruppur via NH-544. 9 BSc allied health programmes, NAAC accredited, placement support, teaching hospital. Admissions open 2026-27.",
  path: "/tiruppur",
  keywords: [
    "allied health science courses in tiruppur",
    "allied health science tiruppur",
    "allied health science in tiruppur",
    "allied health science college near tiruppur",
    "best allied health science college tiruppur",
    "bsc allied health science tiruppur",
    "paramedical colleges in tiruppur",
    "health science courses tiruppur",
    "jkkn allied health sciences tiruppur",
    "allied health science admission tiruppur",
  ],
  ogImage: {
    url: "https://ahs.jkkn.ac.in/allied-health-science-hero.webp",
    width: 1200,
    height: 630,
    alt: "JKKN College of Allied Health Sciences — Best AHS College Near Tiruppur",
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
      name: "Tiruppur",
      item: "https://ahs.jkkn.ac.in/tiruppur",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-03-28",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best allied health sciences college in Tiruppur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Allied Health Sciences is ~67 km from Tiruppur on NH-544, in Komarapalayam, Namakkal district. Approved by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
      },
    },
    {
      "@type": "Question",
      name: "How far is JKKN AHS from Tiruppur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS is approximately ~67 km from Tiruppur city centre, which takes about 1.5 hours by road via NH-544 through Erode. Regular bus services are available from Tiruppur.",
      },
    },
    {
      "@type": "Question",
      name: "What is Allied Health Sciences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences, you can study physiotherapy, medical lab technology, radiology, cardiac technology, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Is BPT a good career option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BPT (Bachelor of Physiotherapy) is an excellent career choice. Physiotherapists are in high demand in hospitals, sports clinics, rehabilitation centres, and private practice. Graduates can also pursue international careers in Gulf countries, UK, and Australia.",
      },
    },
    {
      "@type": "Question",
      name: "How is AHS different from nursing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While nursing focuses on patient care and bedside support, Allied Health Sciences covers specialised diagnostic and therapeutic roles like physiotherapy, lab testing, radiology imaging, and cardiac monitoring. Both are valuable healthcare careers, but AHS offers more specialisation options.",
      },
    },
    {
      "@type": "Question",
      name: "Does JKKN AHS provide hostel for Tiruppur learners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Learners from Tiruppur can also opt for daily commute as the campus is just about 1.5 hours away. College transport services are available.",
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
        text: "BSc Allied Health Science fees in Tamil Nadu typically range from ₹50,000 to ₹2,00,000 per year depending on the college and course. At JKKN College of Allied Health Sciences, fees are competitively priced with scholarship options available for meritorious learners. Contact the admission office at +91 9345855001 for the latest fee structure.",
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
      name: "How many allied health science colleges are there near Tiruppur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tiruppur has limited allied health science colleges within the city. JKKN College of Allied Health Sciences, located ~67 km from Tiruppur via NH-544, offers a wider selection of 9 BSc programmes with NAAC approval and placement support.",
      },
    },
    {
      "@type": "Question",
      name: "What are the eligibility requirements for allied health science courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To pursue BSc Allied Health Sciences at JKKN AHS, candidates must have passed 12th standard (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with a minimum aggregate of 50% (40% for reserved categories). Admission is based on merit and counselling. JKKN is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
      },
    },
    {
      "@type": "Question",
      name: "How does Tiruppur's garment industry create healthcare career opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tiruppur's massive garment and textile export industry employs over 6 lakh workers, creating strong demand for occupational health specialists, industrial physiotherapists, and emergency care professionals. JKKN AHS graduates find opportunities in factory health centres, ESI hospitals, and corporate wellness programmes serving the garment industry workforce.",
      },
    },
    {
      "@type": "Question",
      name: "Can Tiruppur learners visit home on weekends while studying at JKKN AHS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, at ~67 km via NH-544 through Erode, Tiruppur learners can easily visit home on weekends. The journey takes about 1.5 hours by bus. Regular TNSTC and private bus services run between Tiruppur and Komarapalayam throughout the day. Many learners also use two-wheelers for the commute.",
      },
    },
    {
      "@type": "Question",
      name: "What is hostel life like at JKKN AHS for Tiruppur learners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS offers separate hostel facilities for boys and girls with 24/7 security, Wi-Fi, mess facilities with home-style South Indian food, recreation rooms, and learning commons. Tiruppur learners form a significant community on campus. The hostel fee is affordable compared to city hostels, and the campus provides a safe, focused environment for studies.",
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
  areaServed: { "@type": "City", name: "Tiruppur" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for Allied Health Science Admission at JKKN AHS",
  description: "Step-by-step admission process for BSc Allied Health Sciences at JKKN College of Allied Health Sciences, near Tiruppur.",
  totalTime: "P14D",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Eligibility", text: "Ensure you have passed 12th standard (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with minimum 50% aggregate (40% for reserved categories)." },
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
  name: "Allied Health Sciences Colleges in Tiruppur | JKKN AHS",
  url: "https://ahs.jkkn.ac.in/tiruppur",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".snippet-answer", ".voice-answer", "[data-speakable]"],
  },
};

export default function TiruppurLayout({
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
