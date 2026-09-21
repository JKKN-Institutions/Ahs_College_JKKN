import { createPageMetadata } from "@/lib/metadata";
import { PLACEMENT_FAQS } from "@/lib/placement-faqs";

export const metadata = createPageMetadata({
  title: "JKKN AHS Placements — Hospital Recruiters & Career Support | Tamil Nadu",
  description: "JKKN AHS placement cell — partner hospitals, clinical training and career support across Allied Health Sciences. Admissions open 2026.",
  path: "/placements",
  keywords: [
    "allied health sciences placement tamil nadu",
    "jkkn ahs placement rate",
    "bsc allied health sciences jobs",
    "allied health sciences salary india",
    "hospital jobs after allied health sciences",
    "healthcare placement college tamil nadu",
    "average salary after bsc cardiac technology tamil nadu",
    "nhs uk jobs for indian allied health graduates",
    "allied health sciences placement colleges in tamil nadu",
    "bsc allied health sciences recruiters",
    "international placement allied health sciences",
    "jkkn college placement record"
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Placements", "item": "https://ahs.jkkn.ac.in/placements" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // Built from the array the page renders, so the two cannot drift apart.
  "mainEntity": PLACEMENT_FAQS.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "JKKN AHS Placement Process — How to Get Placed",
  "description": "Step-by-step placement process at JKKN College of Allied Health Sciences, from registration to joining.",
  "totalTime": "PT6M",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Registration", "text": "Learners register with the placement cell in Semester 5. Profile creation, career interest mapping, and goal setting." },
    { "@type": "HowToStep", "position": 2, "name": "Resume & Skills Workshop", "text": "Professional resume building, interview skills training, communication workshops, and hospital etiquette sessions." },
    { "@type": "HowToStep", "position": 3, "name": "Hospital Tie-up Drives", "text": "Partner hospitals visit campus for recruitment drives. Group discussions, aptitude tests, and technical assessments." },
    { "@type": "HowToStep", "position": 4, "name": "Shortlisting & Interviews", "text": "Hospitals shortlist candidates based on academic performance, skills assessment, and clinical training records." },
    { "@type": "HowToStep", "position": 5, "name": "Offer Letter", "text": "Selected learners receive official offer letters with salary details, role description, and joining date." },
    { "@type": "HowToStep", "position": 6, "name": "Joining & Onboarding", "text": "Placement cell supports learners through joining formalities, relocation assistance, and initial onboarding." }
  ]
};

const recruiterListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://ahs.jkkn.ac.in/#top-recruiters-at-jkkn-ahs",
  "name": "Top Recruiters at JKKN AHS",
  "description": "Hospitals and healthcare organizations named by JKKN College of Allied Health Sciences as placement partners.",
  "numberOfItems": 18,
  "itemListElement": [
    "Apollo Hospitals", "MIOT International", "Fortis Healthcare", "Manipal Hospitals", "Kauvery Hospital", "Columbia Asia",
    "Narayana Health", "GEM Hospital", "Brookefield Hospital", "5C Network", "Punarvaas", "SRL Diagnostics",
    "Thyrocare", "Dr. Lal PathLabs", "Meenakshi Mission", "KG Hospital", "PSG Hospitals", "Ganga Hospital"
  ].map((name, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": name
  }))
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "JKKN AHS Placements — Hospital Recruiters & Career Support | Tamil Nadu",
  "url": "https://ahs.jkkn.ac.in/placements",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["#stats-snippet", "#salary-snippet", "#process-steps"]
  }
};

export default function PlacementsLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recruiterListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
