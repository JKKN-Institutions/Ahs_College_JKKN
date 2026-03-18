import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Laboratories — JKKN College of Allied Health Sciences",
  description:
    "State-of-the-art labs at JKKN AHS — fully equipped for cardiac, dialysis, radiology, respiratory, and emergency care practical training.",
  path: "/lab",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Laboratory", "item": "https://ahs.jkkn.ac.in/lab" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Laboratories — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/lab",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Laboratory — JKKN College of Allied Health Sciences",
  "description": "State-of-the-art labs at JKKN AHS — fully equipped for cardiac, dialysis, radiology, respiratory, and emergency care practical training.",
  "url": "https://ahs.jkkn.ac.in/lab",
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

export default function LabLayout({
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
