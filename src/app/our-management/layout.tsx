import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our Management | JKKN College of Allied Health Sciences",
  description: "Meet the leadership of JKKN College of Allied Health Sciences — Chairperson Smt. N. Sendamaraai and Director Shri. S. Ommsharravana.",
  path: "/our-management",
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Management | JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/our-management",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const chairpersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Smt. N. Sendamaraai",
  "jobTitle": "Chairperson",
  "worksFor": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "JKKN Educational Institutions",
    "url": "https://jkkn.ac.in/"
  }
};

const directorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shri. S. Ommsharravana",
  "jobTitle": "Director",
  "worksFor": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "JKKN Educational Institutions",
    "url": "https://jkkn.ac.in/"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Our Management", "item": "https://ahs.jkkn.ac.in/our-management" }
  ]
};

export default function OurManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chairpersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(directorSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
