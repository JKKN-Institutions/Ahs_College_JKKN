import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Ambulance Service — JKKN College of Allied Health Sciences",
  description:
    "24/7 ambulance service available at JKKN campus, Komarapalayam. Emergency medical transport for students, staff, and hospital patients.",
  path: "/ambulance-service",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Ambulance Service", "item": "https://ahs.jkkn.ac.in/ambulance-service" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Ambulance Service — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/ambulance-service",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Ambulance Service — JKKN College of Allied Health Sciences",
  "description": "24/7 ambulance service available at JKKN campus, Komarapalayam. Emergency medical transport for students, staff, and hospital patients.",
  "url": "https://ahs.jkkn.ac.in/ambulance-service",
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

export default function AmbulanceServiceLayout({
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
