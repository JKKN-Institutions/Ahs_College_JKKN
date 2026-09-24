import { createPageMetadata } from "@/lib/metadata";
import { AHS_MAPS_URL } from "@/lib/entity-profiles";

export const metadata = createPageMetadata({
  title: "Allied Health Science Colleges near Salem | JKKN AHS",
  description:
    "JKKN AHS — ~57 km from Salem on NH-544. 9 BSc allied health programmes, NAAC accredited, placement support, teaching hospital. Admissions open 2026-27.",
  path: "/salem",
  keywords: [
    "allied health science courses in salem",
    "allied health science salem",
    "allied health science in salem",
    "allied health science college near salem",
    "best allied health science college salem",
    "bsc allied health science salem",
    "paramedical colleges in salem",
    "health science courses salem",
    "jkkn allied health sciences salem",
    "allied health science admission salem",
  ],
  ogImage: {
    url: "https://ahs.jkkn.ac.in/allied-health-science-hero.webp",
    width: 1200,
    height: 630,
    alt: "JKKN College of Allied Health Sciences — Best AHS College Near Salem",
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
      name: "Salem",
      item: "https://ahs.jkkn.ac.in/salem",
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
      name: "What is the best allied health sciences college near Salem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Allied Health Sciences is ~57 km from Salem on NH-544, in Komarapalayam, Namakkal district. Its 9 B.Sc programmes are affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Salem district has its own colleges too: for B.Sc Cardiac Technology, the university's 2025-26 list has 5 there, including Government Mohan Kumaramangalam Medical College.",
      },
    },
    {
      "@type": "Question",
      name: "How far is JKKN AHS from Salem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS is approximately ~57 km from Salem city centre, which takes about 1 hour by road via NH-544 (Salem-Coimbatore Highway) — direct route. Regular bus services are available from Salem.",
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
      name: "Does JKKN AHS provide hostel for Salem learners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Learners from Salem can also opt for daily commute as the campus is just 50-60 minutes away. College transport services are available.",
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
      name: "How many allied health science colleges are there near Salem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salem has multiple allied health science colleges including government and private institutions. JKKN College of Allied Health Sciences, located ~57 km from Salem on NH-544, offers a competitive alternative with 9 BSc programmes, NAAC approval, affordable fees, and strong placement support.",
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
      name: "Are there healthcare job opportunities in Salem's steel and manufacturing sector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Salem's steel plants, SAIL Salem Steel Plant, and manufacturing industries employ occupational health officers, industrial physiotherapists, and emergency medical technicians. JKKN AHS graduates with specialisations in critical care, accident & emergency care, and physician assistant programmes are well-suited for industrial healthcare roles in Salem.",
      },
    },
    {
      "@type": "Question",
      name: "Does JKKN AHS provide clinical training at Salem government hospitals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS primarily provides clinical training at its own multi-specialty teaching hospital on campus. Additionally, learners gain exposure through partnerships with various healthcare facilities in the region. The Salem Government Mohan Kumaramangalam Medical College Hospital is one of the major government hospitals learners can access for observational learning.",
      },
    },
    {
      "@type": "Question",
      name: "Is JKKN AHS near Salem a better value than colleges in Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS offers excellent value compared to Chennai colleges: significantly lower tuition and living costs, the same Tamil Nadu Dr. M.G.R. Medical University affiliation, a teaching hospital for clinical training, placement support with both domestic and international opportunities, and a safer, focused campus environment. Learners save considerably while receiving comparable education quality.",
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
  areaServed: { "@type": "City", name: "Salem" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for Allied Health Science Admission at JKKN AHS",
  description: "Step-by-step admission process for BSc Allied Health Sciences at JKKN College of Allied Health Sciences, near Salem.",
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
  name: "Allied Health Science Courses in Salem | JKKN AHS",
  url: "https://ahs.jkkn.ac.in/salem",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".snippet-answer", ".voice-answer", "[data-speakable]"],
  },
};

export default function SalemLayout({
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
