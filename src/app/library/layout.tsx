import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Learning Commons — JKKN College of Allied Health Sciences",
  description:
    "JKKN AHS learning commons offers medical textbooks, journals, digital resources, and study spaces for allied health science learners.",
  path: "/library",
  keywords: [
    "JKKN college learning commons",
    "medical learning commons Komarapalayam",
    "digital learning commons allied health sciences",
    "e-journals health science college Tamil Nadu",
    "JKKN AHS learning commons resources",
    "medical textbooks learning commons Namakkal",
    "college learning commons with study rooms",
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/library/library-1.webp", width: 1200, height: 630, alt: "Learning Commons at JKKN College of Allied Health Sciences" },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Learning Commons", "item": "https://ahs.jkkn.ac.in/library" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Learning Commons — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/library",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Learning Commons — JKKN College of Allied Health Sciences",
  "description": "JKKN AHS learning commons offers medical textbooks, journals, digital resources, and study spaces for allied health science learners.",
  "url": "https://ahs.jkkn.ac.in/library",
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
    { "@type": "Question", "name": "What are the learning commons timings at JKKN College?", "acceptedAnswer": { "@type": "Answer", "text": "The JKKN learning commons is open from 8 AM to 8 PM on weekdays and 9 AM to 5 PM on Saturdays for all enrolled learners." } },
    { "@type": "Question", "name": "Does the JKKN learning commons have digital resources and e-journals?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the learning commons provides access to e-journals, e-books, online databases, and multimedia resources for all health science disciplines." } },
    { "@type": "Question", "name": "How many books are available in the JKKN learning commons?", "acceptedAnswer": { "@type": "Answer", "text": "The JKKN learning commons has over 5000 books, journals, and reference materials covering all allied health science specializations." } },
    { "@type": "Question", "name": "Can learners borrow books from the JKKN learning commons?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, enrolled learners can borrow up to three books at a time with a valid learning commons membership card for two weeks." } },
    { "@type": "Question", "name": "Is there a separate reading room in the JKKN learning commons?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the learning commons has dedicated reading rooms, quiet study zones, and group discussion areas for different learning needs." } }
  ]
};

export default function LibraryLayout({
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
