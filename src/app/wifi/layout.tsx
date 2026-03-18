import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Wi-Fi Campus — JKKN College of Allied Health Sciences",
  description:
    "JKKN offers campus-wide high-speed Wi-Fi connectivity for students to access digital resources, e-journals, and online learning platforms.",
  path: "/wifi",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Wi-Fi", "item": "https://ahs.jkkn.ac.in/wifi" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Wi-Fi Campus — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/wifi",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Wi-Fi — JKKN College of Allied Health Sciences",
  "description": "JKKN offers campus-wide high-speed Wi-Fi connectivity for students to access digital resources, e-journals, and online learning platforms.",
  "url": "https://ahs.jkkn.ac.in/wifi",
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

export default function WifiLayout({
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
