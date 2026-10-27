import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "NAAC Framework and the Code 825 Certificate | JKKN AHS",
  description:
    "How NAAC assesses colleges, and the NAAC A certificate of J.K.K. Nattraja Dental College & Hospital, under which the university lists JKKN AHS courses.",
  path: "/NAAC",
  keywords: [
    "NAAC accreditation JKKN",
    "JKKN College NAAC grade Tamil Nadu",
    "NAAC assessment JKKN Allied Health Sciences",
    "quality accreditation medical college Tamil Nadu",
  ],
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "NAAC Framework and the Code 825 Certificate | JKKN AHS",
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
  "url": "https://ahs.jkkn.ac.in/"
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
