import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Departments — JKKN College of Allied Health Sciences",
  description:
    "Explore 9 UG Allied Health departments at JKKN — Cardiac, Dialysis Therapy, Medical Radiology, Anaesthesia & OT, Respiratory, Physician Associates & more.",
  path: "/departments",
  keywords: [
    "JKKN allied health departments",
    "BSc allied health science courses Tamil Nadu",
    "JKKN College departments Komarapalayam",
    "allied health BSc programs JKKN Namakkal",
    "cardiac dialysis radiology courses JKKN",
    "allied health science college departments Tamil Nadu",
  ],
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Departments — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/departments",
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
    { "@type": "ListItem", "position": 3, "name": "Departments", "item": "https://ahs.jkkn.ac.in/departments" }
  ]
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://ahs.jkkn.ac.in/#b-sc-allied-health-science-departments-at-jkkn",
  "name": "B.Sc Allied Health Science Departments at JKKN",
  "description": "Nine specialized UG Allied Health Science departments offered at JKKN College of Allied Health Sciences, Komarapalayam, Tamil Nadu.",
  "url": "https://ahs.jkkn.ac.in/departments",
  "numberOfItems": 9,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "B.Sc Cardiac Technology", "url": "https://ahs.jkkn.ac.in/cardiac-technology" },
    { "@type": "ListItem", "position": 2, "name": "Bachelor of Dialysis Therapy Technology (B.DTT)", "url": "https://ahs.jkkn.ac.in/dialysis-technology" },
    { "@type": "ListItem", "position": 3, "name": "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)", "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology" },
    { "@type": "ListItem", "position": 4, "name": "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)", "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia" },
    { "@type": "ListItem", "position": 5, "name": "Bachelor of Respiratory Technology (B.RT)", "url": "https://ahs.jkkn.ac.in/respiratory-therapy" },
    { "@type": "ListItem", "position": 6, "name": "Bachelor of Physician Associates (B.PA)", "url": "https://ahs.jkkn.ac.in/physician-assistant" },
    { "@type": "ListItem", "position": 7, "name": "B.Sc Critical Care Technology", "url": "https://ahs.jkkn.ac.in/critical-care-technology" },
    { "@type": "ListItem", "position": 8, "name": "Bachelor of Science in Health Information Management (B.Sc. HIM)", "url": "https://ahs.jkkn.ac.in/medical-record-science" },
    { "@type": "ListItem", "position": 9, "name": "Bachelor of Emergency Medical Technologist (Paramedic)", "url": "https://ahs.jkkn.ac.in/accident-emergency-care" }
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
