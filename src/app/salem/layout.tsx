import { createPageMetadata } from "@/lib/metadata";
import { AHS_MAPS_URL } from "@/lib/entity-profiles";
import { SALEM_FAQS } from "./faqs";

export const metadata = createPageMetadata({
  title: "Allied Health Science Colleges near Salem | JKKN AHS",
  description:
    "JKKN AHS, about 57 km from Salem on NH-544: 9 B.Sc allied health courses, 82 university-sanctioned seats, fees ₹60,000-₹1,70,000 a year. Admissions 2026-27.",
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

// Built from the same list the page renders, so the schema can never say what the page does not.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-10-27",
  mainEntity: SALEM_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
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
    { "@type": "HowToStep", position: 1, name: "Check Eligibility", text: "Ensure you have passed 12th standard (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with minimum 50% aggregate (45% for OBC, 40% for SC/ST)." },
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
