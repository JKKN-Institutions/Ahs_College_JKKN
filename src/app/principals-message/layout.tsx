import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Principal's Message — JKKN College of Allied Health Sciences",
  description:
    "Read the Principal's message at JKKN College of Allied Health Sciences — leadership vision for allied health education excellence in Tamil Nadu.",
  path: "/principals-message",
  keywords: [
    "JKKN AHS principal message",
    "allied health college principal Tamil Nadu",
    "JKKN College of Allied Health Sciences principal",
    "principal message Komarapalayam college",
    "JKKN leadership vision allied health",
    "allied health sciences college head message",
  ],
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ahs.jkkn.ac.in/#principal",
  "name": "Dr. Dhanasekar Balakrishnan",
  "jobTitle": "Principal",
  "honorificPrefix": "Dr.",
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "BDS" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MDS" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "fellowship", "name": "FDS RCS (England)" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "fellowship", "name": "MDTFEd (Edinburgh)" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "membership", "name": "MFDS RCPS (Glasgow)" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "membership", "name": "MFDS RCS (Edinburgh)" }
  ],
  "worksFor": {
    "@type": "CollegeOrUniversity",
    "@id": "https://ahs.jkkn.ac.in/#organization",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "image": "https://ahs.jkkn.ac.in/principal.png",
  "description": "Principal of JKKN College of Allied Health Sciences and JKKN Dental College and Hospital, Komarapalayam, Tamil Nadu. Holds BDS, MDS, FDS RCS (England), MDTFEd (Edinburgh), MFDS RCPS (Glasgow), and MFDS RCS (Edinburgh).",
  "url": "https://ahs.jkkn.ac.in/principals-message"
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Principal's Message — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/principals-message",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Principal's Message", "item": "https://ahs.jkkn.ac.in/principals-message" }
  ]
};

export default function PrincipalsMessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  );
}
