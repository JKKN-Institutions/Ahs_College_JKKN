import { createPageMetadata } from "@/lib/metadata";
import { AHS_MAPS_URL } from "@/lib/entity-profiles";

export const metadata = createPageMetadata({
  title: "Allied Health Science College Namakkal | JKKN AHS",
  description:
    "JKKN AHS — in Namakkal district on NH-544, Komarapalayam. 9 BSc allied health programmes, NAAC accredited, placement support, teaching hospital. Admissions 2026-27.",
  path: "/namakkal",
  keywords: [
    "allied health science college namakkal",
    "allied health science courses in namakkal",
    "allied health science college in namakkal",
    "best allied health science college namakkal",
    "bsc allied health science namakkal",
    "paramedical colleges in namakkal",
    "health science courses namakkal",
    "jkkn allied health sciences namakkal",
    "allied health science admission namakkal",
    "allied health science near namakkal",
  ],
  ogImage: {
    url: "https://ahs.jkkn.ac.in/allied-health-science-hero.webp",
    width: 1200,
    height: 630,
    alt: "JKKN College of Allied Health Sciences — Best AHS College in Namakkal",
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
      name: "Namakkal",
      item: "https://ahs.jkkn.ac.in/namakkal",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-03-24",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best allied health sciences college in Namakkal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Allied Health Sciences is in Komarapalayam, Namakkal district, on NH-544. Its 9 B.Sc programmes are affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. For B.Sc Cardiac Technology, the university's 2025-26 list has 8 colleges in Namakkal district, and JKKN is one of them.",
      },
    },
    {
      "@type": "Question",
      name: "How far is JKKN AHS from Namakkal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS is located in Komarapalayam, Namakkal district (not Namakkal town). It's approximately 15 km from Tiruchengode and around 66 km from Namakkal town via NH-544 (Salem-Coimbatore Highway). Regular bus services connect the campus to nearby towns.",
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
      name: "Does JKKN AHS provide hostel for Namakkal learners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Learners from Namakkal can also opt for daily commute as the campus is just 15-20 minutes away. College transport services are available.",
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
      name: "How many allied health science colleges are there in Namakkal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Namakkal district has several allied health science colleges. JKKN College of Allied Health Sciences, located in Komarapalayam (Namakkal district), offers 9 BSc programmes with NAAC approval and placement support — making it the preferred choice for Namakkal district learners.",
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
      name: "What is the advantage of JKKN AHS being in Namakkal district?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Being in Namakkal district's Komarapalayam offers key advantages: strategic NH-544 highway location connecting Salem and Coimbatore, proximity to Tiruchengode (~15 km) for daily needs, affordable cost of living compared to major cities, peaceful campus environment ideal for studies, and easy accessibility from multiple towns — Erode (~22 km), Salem (~58 km), and Tiruppur (~67 km).",
      },
    },
    {
      "@type": "Question",
      name: "How well connected is JKKN AHS campus by public transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS campus at Komarapalayam is excellently connected by public transport. It sits directly on NH-544 (Salem-Coimbatore Highway) with frequent TNSTC government buses and private services. Tiruchengode bus stand is ~15 km away with regular local buses. Learners from Erode, Salem, Namakkal town, and surrounding areas have multiple daily bus options. The campus also provides its own transport services.",
      },
    },
    {
      "@type": "Question",
      name: "Do Namakkal district learners get any special benefits at JKKN AHS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While JKKN AHS welcomes learners from all districts equally, Namakkal district learners benefit from proximity advantages: easy daily commute from nearby towns, lower transportation costs, ability to stay at home and save on hostel fees, strong local community support, and the option to do clinical rotations closer to home. The college also participates in government scholarship programmes available to all eligible Tamil Nadu learners.",
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
  areaServed: { "@type": "City", name: "Namakkal" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for Allied Health Science Admission at JKKN AHS",
  description: "Step-by-step admission process for BSc Allied Health Sciences at JKKN College of Allied Health Sciences, Namakkal district.",
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
  name: "Allied Health Science College Namakkal | JKKN AHS",
  url: "https://ahs.jkkn.ac.in/namakkal",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".snippet-answer", ".voice-answer", "[data-speakable]"],
  },
};

export default function NamakkalLayout({
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
