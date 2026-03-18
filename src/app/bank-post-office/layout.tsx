import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Bank & Post Office — JKKN Allied Health Sciences",
  description:
    "On-campus banking and postal services at JKKN, Komarapalayam — ATM, bank branch, and post office for student convenience.",
  path: "/bank-post-office",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Bank & Post Office", "item": "https://ahs.jkkn.ac.in/bank-post-office" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Bank & Post Office — JKKN College of Allied Health Sciences Campus",
  "url": "https://ahs.jkkn.ac.in/bank-post-office",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Bank & Post Office — JKKN College of Allied Health Sciences",
  "description": "On-campus banking and postal services at JKKN, Komarapalayam — ATM, bank branch, and post office for student convenience.",
  "url": "https://ahs.jkkn.ac.in/bank-post-office",
  "containedInPlace": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NH-544, Natarajapuram",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  }
};

export default function BankPostOfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(facilitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  );
}
