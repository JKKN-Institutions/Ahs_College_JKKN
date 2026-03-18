import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Classrooms — JKKN College of Allied Health Sciences",
  description:
    "Modern, air-conditioned classrooms with smart boards and AV equipment at JKKN College of Allied Health Sciences, Komarapalayam.",
  path: "/classroom",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Classroom", "item": "https://ahs.jkkn.ac.in/classroom" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Classrooms — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/classroom",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Classroom — JKKN College of Allied Health Sciences",
  "description": "Modern, air-conditioned classrooms with smart boards and AV equipment at JKKN College of Allied Health Sciences, Komarapalayam.",
  "url": "https://ahs.jkkn.ac.in/classroom",
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

export default function ClassroomLayout({
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
