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
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    { "@type": "Question", "name": "Is free WiFi available on the JKKN campus?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN campus offers free WiFi access to all students and staff across classrooms, labs, libraries, common areas, and outdoor spaces." } },
    { "@type": "Question", "name": "What is the internet speed at JKKN College campus?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN campus provides high-speed internet that supports video streaming, large file downloads, video conferencing, and simultaneous access by multiple users." } },
    { "@type": "Question", "name": "Can students access WiFi in hostel rooms at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WiFi connectivity extends to the JKKN hostel, allowing students to access the internet from their rooms for both academic and personal use." } },
    { "@type": "Question", "name": "Is WiFi available in classrooms and labs at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WiFi is available in all classrooms, labs, and lecture halls at JKKN, supporting digital learning tools and online academic resources." } },
    { "@type": "Question", "name": "How do students connect to the JKKN campus WiFi network?", "acceptedAnswer": { "@type": "Answer", "text": "Students connect to the JKKN campus WiFi using credentials provided during admission. The network is secured with multi-layered security protocols." } }
  ]
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
