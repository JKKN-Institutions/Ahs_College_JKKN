import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "NAAC Accreditation — JKKN College of Allied Health Sciences",
  description:
    "JKKN College of Allied Health Sciences NAAC accreditation details — quality assurance, assessment reports, and institutional excellence standards.",
  path: "/NAAC",
  keywords: [
    "NAAC accreditation JKKN",
    "JKKN College NAAC grade Tamil Nadu",
    "accredited allied health college Komarapalayam",
    "NAAC assessment JKKN Allied Health Sciences",
    "quality accreditation medical college Tamil Nadu",
    "JKKN NAAC A+ accredited college",
  ],
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "NAAC Accreditation — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/NAAC",
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
    { "@type": "ListItem", "position": 3, "name": "NAAC Accreditation", "item": "https://ahs.jkkn.ac.in/NAAC" }
  ]
};

const naacSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Accreditation",
    "recognizedBy": {
      "@type": "Organization",
      "name": "National Assessment and Accreditation Council (NAAC)",
      "url": "http://www.naac.gov.in/"
    }
  }
};

export default function NAACLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(naacSchema) }} />
      {children}
    </>
  );
}
