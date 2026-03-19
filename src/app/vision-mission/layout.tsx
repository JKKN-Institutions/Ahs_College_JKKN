import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Vision & Mission — JKKN College of Allied Health Sciences",
  description:
    "Discover the vision and mission of JKKN College of Allied Health Sciences — excellence in healthcare education, clinical training, and student success.",
  path: "/vision-mission",
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

export default function VisionMissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      {children}
    </>
  );
}
