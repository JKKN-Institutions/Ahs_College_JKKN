import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Learning Studios — JKKN College of Allied Health Sciences",
  description:
    "Modern, air-conditioned learning studios with smart boards and AV equipment at JKKN College of Allied Health Sciences, Komarapalayam.",
  path: "/classroom",
  keywords: [
    "smart learning studio JKKN",
    "allied health sciences learning studio facilities",
    "modern learning studio Komarapalayam",
    "JKKN AHS learning facilities",
    "air-conditioned learning studio Tamil Nadu",
    "smart board learning studio Namakkal",
    "JKKN College learning studio infrastructure",
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/classroom/digital-class-room-1.webp", width: 1200, height: 630, alt: "Smart Learning Studios at JKKN College" },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Learning Studio", "item": "https://ahs.jkkn.ac.in/classroom" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Learning Studios — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/classroom",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Learning Studio — JKKN College of Allied Health Sciences",
  "description": "Modern, air-conditioned learning studios with smart boards and AV equipment at JKKN College of Allied Health Sciences, Komarapalayam.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    { "@type": "Question", "name": "Are learning studios at JKKN College air-conditioned?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all learning studios at JKKN College of Allied Health Sciences are air-conditioned with modern ventilation systems for comfortable learning." } },
    { "@type": "Question", "name": "Do JKKN learning studios have smart boards and projectors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, every learning studio is equipped with smart boards, multimedia projectors, and interactive whiteboards for technology-enhanced teaching." } },
    { "@type": "Question", "name": "How many learners does each learning studio accommodate?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN learning studios accommodate 30 to 60 learners depending on the course, with ergonomic seating and adequate spacing." } },
    { "@type": "Question", "name": "Is high-speed internet available in JKKN learning studios?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all learning studios have high-speed WiFi connectivity enabling learners to access online resources and digital learning materials." } },
    { "@type": "Question", "name": "Are there different types of learning studios at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN offers learning auditoriums, seminar rooms, collaborative workspaces, and learning labs to support diverse learning styles." } }
  ]
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
