import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Learning Labs — JKKN College of Allied Health Sciences",
  description:
    "State-of-the-art learning labs at JKKN AHS — fully equipped for cardiac, dialysis, radiology, respiratory, and emergency care practical training.",
  path: "/lab",
  keywords: [
    "JKKN college learning lab facilities",
    "clinical lab allied health sciences",
    "medical lab practical training Komarapalayam",
    "simulation learning lab health science college Tamil Nadu",
    "JKKN AHS learning lab equipment",
    "radiology lab Namakkal",
    "cardiac technology lab JKKN",
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/lab/allied health science lab1.webp", width: 1200, height: 630, alt: "Learning Lab Facilities at JKKN College" },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Learning Lab", "item": "https://ahs.jkkn.ac.in/lab" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Learning Labs — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/lab",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Learning Lab — JKKN College of Allied Health Sciences",
  "description": "State-of-the-art learning labs at JKKN AHS — fully equipped for cardiac, dialysis, radiology, respiratory, and emergency care practical training.",
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
    { "@type": "Question", "name": "What learning lab facilities are available at JKKN College of Allied Health Sciences?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN College of Allied Health Sciences has discipline-specific learning labs for medical technology, radiology, respiratory therapy, and more, all equipped with advanced medical equipment." } },
    { "@type": "Question", "name": "Are JKKN learning labs equipped with modern medical equipment?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN learning labs are equipped with advanced, specialised medical equipment tailored to each allied health science programme, ensuring learners gain hands-on clinical experience." } },
    { "@type": "Question", "name": "How many hours of practical training do learners get in JKKN learning labs?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN allied health science learners receive extensive learning lab hours as per university curriculum guidelines, providing sufficient hands-on practice for clinical skill development." } },
    { "@type": "Question", "name": "Do JKKN learning labs have simulation equipment for clinical training?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN learning labs incorporate simulated patient encounters and clinical procedure setups, allowing learners to practise safely before working with real patients." } },
    { "@type": "Question", "name": "Are learning lab sessions included in the allied health sciences curriculum at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Learning lab sessions are a core part of the JKKN allied health sciences learning framework, ensuring every learner completes required practical hours alongside theory classes." } }
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
