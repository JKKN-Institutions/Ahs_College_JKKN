import { createPageMetadata } from "@/lib/metadata";
import { AHS_MAPS_URL } from "@/lib/entity-profiles";

export const metadata = createPageMetadata({
  title: "Allied Health Science Colleges in Erode | JKKN AHS",
  description:
    "JKKN AHS — ~22 km from Erode on NH-544. 9 BSc allied health programmes, NAAC accredited, placement support, 500+ bed hospital. Admissions open 2026-27.",
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
  dateModified: "2026-03-24",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best allied health sciences college near Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Allied Health Sciences, located just ~22 km from Erode on NH-544, is widely regarded as one of the top allied health sciences colleges accessible from Erode. Approved by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
      },
    },
    {
      "@type": "Question",
      name: "How far is JKKN AHS from Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS is approximately ~22 km from Erode city centre, which takes about 35-40 minutes by road via NH-544 — direct highway connectivity. Regular bus services are available from Erode.",
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
      name: "Does JKKN AHS provide hostel for Erode learners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Learners from Erode can also opt for daily commute as the campus is just 35-40 minutes away. College transport services are available.",
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
        text: "BSc Allied Health Science graduates can expect starting salaries of ₹2.5–4.5 LPA in India, with experienced professionals earning ₹6–12 LPA. International opportunities in Gulf countries, UK, and Australia offer ₹8–25 LPA. JKKN AHS graduates benefit from placement support with 60+ recruiting partners.",
      },
    },
    {
      "@type": "Question",
      name: "How many allied health science colleges are there near Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erode district has a limited number of allied health science colleges. JKKN College of Allied Health Sciences, located just ~22 km from Erode on NH-544, stands out with 9 BSc programmes, NAAC approval, and placement support — making it one of the top choices for Erode learners.",
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
      name: "Are there healthcare career opportunities in Erode's textile industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Erode's thriving textile and turmeric industries have created demand for occupational health professionals, industrial physiotherapists, and emergency care technicians. JKKN AHS graduates are well-positioned for roles in occupational health centres at textile mills, industrial clinics, and corporate wellness programmes across the Erode industrial belt.",
      },
    },
    {
      "@type": "Question",
      name: "Can Erode learners commute daily to JKKN AHS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. At just ~22 km via NH-544, many Erode learners commute daily. The journey takes only 35-40 minutes by bus or bike. JKKN also provides dedicated college transport services with multiple pickup points in Erode city. Hostel facilities are available for those who prefer to stay on campus.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose JKKN AHS near Erode over colleges in Coimbatore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS offers comparable programme quality to Coimbatore colleges but with key advantages: closer proximity (~22 km vs 105 km from Erode), lower cost of living, personalised attention with smaller batch sizes, direct clinical exposure at the 500+ bed JKKN Hospital from Year 1, and strong local industry connections for placements. The NH-544 location also means easy access to opportunities in both Erode and Coimbatore.",
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
