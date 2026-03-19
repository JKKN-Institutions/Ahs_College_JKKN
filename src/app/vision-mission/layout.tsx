import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Vision & Mission — JKKN College of Allied Health Sciences",
  description:
    "Discover the vision and mission of JKKN College of Allied Health Sciences — excellence in healthcare education, clinical training, and student success.",
  path: "/vision-mission",
  keywords: [
    "JKKN vision mission allied health",
    "JKKN College of Allied Health Sciences goals",
    "allied health education mission Tamil Nadu",
    "JKKN college vision Komarapalayam",
    "healthcare education excellence JKKN",
    "allied health sciences college objectives",
  ],
});

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Vision & Mission — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/vision-mission",
  "description": "The vision and mission of JKKN College of Allied Health Sciences — committed to excellence in allied health education, clinical training, and student success in Komarapalayam, Tamil Nadu.",
  "mainEntity": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
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
    { "@type": "ListItem", "position": 3, "name": "Vision & Mission", "item": "https://ahs.jkkn.ac.in/vision-mission" }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/",
  "description": "JKKN College of Allied Health Sciences trains healthcare professionals through nine specialized Bachelor of Science programs with clinical exposure from year one.",
  "foundingDate": "1952",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  }
};

export default function VisionMissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {children}
    </>
  );
}
