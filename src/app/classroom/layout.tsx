import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Classrooms — JKKN College of Allied Health Sciences",
  description:
    "Modern, air-conditioned classrooms with smart boards and AV equipment at JKKN College of Allied Health Sciences, Komarapalayam.",
  path: "/classroom",
  keywords: [
    "smart classroom JKKN",
    "allied health sciences classroom facilities",
    "modern classroom Komarapalayam",
    "JKKN AHS learning facilities",
    "air-conditioned classroom Tamil Nadu",
    "smart board classroom Namakkal",
    "JKKN College classroom infrastructure",
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/classroom/digital-class-room-1.webp", width: 1200, height: 630, alt: "Smart Classrooms at JKKN College" },
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
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    { "@type": "Question", "name": "Are classrooms at JKKN College air-conditioned?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all classrooms at JKKN College of Allied Health Sciences are air-conditioned with modern ventilation systems for comfortable learning." } },
    { "@type": "Question", "name": "Do JKKN classrooms have smart boards and projectors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, every classroom is equipped with smart boards, multimedia projectors, and interactive whiteboards for technology-enhanced teaching." } },
    { "@type": "Question", "name": "How many students does each classroom accommodate?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN classrooms accommodate 30 to 60 students depending on the course, with ergonomic seating and adequate spacing." } },
    { "@type": "Question", "name": "Is high-speed internet available in JKKN classrooms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all classrooms have high-speed WiFi connectivity enabling students to access online resources and digital learning materials." } },
    { "@type": "Question", "name": "Are there different types of classrooms at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN offers lecture halls, seminar rooms, collaborative workspaces, and laboratory classrooms to support diverse learning styles." } }
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
