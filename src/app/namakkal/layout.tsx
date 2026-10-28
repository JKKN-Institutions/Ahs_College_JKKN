import { createPageMetadata } from "@/lib/metadata";
import { AHS_MAPS_URL } from "@/lib/entity-profiles";
import { NAMAKKAL_FAQS } from "./faqs";

export const metadata = createPageMetadata({
  title: "Allied Health Science College Namakkal | JKKN AHS",
  description:
    "JKKN AHS, Komarapalayam, Namakkal district: 9 B.Sc allied health courses, 82 university-sanctioned seats, fees ₹60,000-₹1,70,000 a year. Admissions 2026-27.",
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

// Built from the same list the page renders, so the schema can never say what the page does not.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-10-27",
  mainEntity: NAMAKKAL_FAQS.map((f) => ({
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
  areaServed: { "@type": "City", name: "Namakkal" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for Allied Health Science Admission at JKKN AHS",
  description: "Step-by-step admission process for BSc Allied Health Sciences at JKKN College of Allied Health Sciences, Namakkal district.",
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
