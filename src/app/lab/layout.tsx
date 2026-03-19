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
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    { "@type": "Question", "name": "What lab facilities are available at JKKN College of Allied Health Sciences?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN College of Allied Health Sciences has discipline-specific labs for medical technology, radiology, respiratory therapy, and more, all equipped with advanced medical equipment." } },
    { "@type": "Question", "name": "Are JKKN labs equipped with modern medical equipment?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN labs are equipped with advanced, specialised medical equipment tailored to each allied health science programme, ensuring students gain hands-on clinical experience." } },
    { "@type": "Question", "name": "How many hours of practical training do students get in JKKN labs?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN allied health science students receive extensive lab hours as per university curriculum guidelines, providing sufficient hands-on practice for clinical skill development." } },
    { "@type": "Question", "name": "Do JKKN labs have simulation equipment for clinical training?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN labs incorporate simulated patient encounters and clinical procedure setups, allowing students to practise safely before working with real patients." } },
    { "@type": "Question", "name": "Are lab sessions included in the allied health sciences curriculum at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Lab sessions are a core part of the JKKN allied health sciences curriculum, ensuring every student completes required practical hours alongside theory classes." } }
  ]
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
