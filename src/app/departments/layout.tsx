import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Departments — JKKN College of Allied Health Sciences",
  description:
    "Explore 9 B.Sc Allied Health departments at JKKN — Cardiac, Dialysis, Radiology, OT, Respiratory, Physician Assistant, Critical Care & more.",
  path: "/departments",
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Departments — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/departments",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Departments", "item": "https://ahs.jkkn.ac.in/departments" }
  ]
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "B.Sc Allied Health Science Departments at JKKN",
  "description": "Nine specialized B.Sc Allied Health Science departments offered at JKKN College of Allied Health Sciences, Komarapalayam, Tamil Nadu.",
  "url": "https://ahs.jkkn.ac.in/departments",
  "numberOfItems": 9,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "B.Sc Cardiac Technology", "url": "https://ahs.jkkn.ac.in/cardiac-technology" },
    { "@type": "ListItem", "position": 2, "name": "B.Sc Dialysis Technology", "url": "https://ahs.jkkn.ac.in/dialysis-technology" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc Radiology & Imaging Technology", "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology" },
    { "@type": "ListItem", "position": 4, "name": "B.Sc Operation Theatre & Anaesthesia Technology", "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia" },
    { "@type": "ListItem", "position": 5, "name": "B.Sc Respiratory Therapy", "url": "https://ahs.jkkn.ac.in/respiratory-therapy" },
    { "@type": "ListItem", "position": 6, "name": "B.Sc Physician Assistant", "url": "https://ahs.jkkn.ac.in/physician-assistant" },
    { "@type": "ListItem", "position": 7, "name": "B.Sc Critical Care Technology", "url": "https://ahs.jkkn.ac.in/critical-care-technology" },
    { "@type": "ListItem", "position": 8, "name": "B.Sc Medical Record Science", "url": "https://ahs.jkkn.ac.in/medical-record-science" },
    { "@type": "ListItem", "position": 9, "name": "B.Sc Accident & Emergency Care Technology", "url": "https://ahs.jkkn.ac.in/accident-emergency-care" }
  ]
};

export default function DepartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  );
}
