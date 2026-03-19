import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Bank & Post Office — JKKN Allied Health Sciences",
  description:
    "On-campus banking and postal services at JKKN, Komarapalayam — ATM, bank branch, and post office for student convenience.",
  path: "/bank-post-office",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Bank & Post Office", "item": "https://ahs.jkkn.ac.in/bank-post-office" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Bank & Post Office — JKKN College of Allied Health Sciences Campus",
  "url": "https://ahs.jkkn.ac.in/bank-post-office",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Bank & Post Office — JKKN College of Allied Health Sciences",
  "description": "On-campus banking and postal services at JKKN, Komarapalayam — ATM, bank branch, and post office for student convenience.",
  "url": "https://ahs.jkkn.ac.in/bank-post-office",
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
    { "@type": "Question", "name": "Is there a bank inside the JKKN College campus?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN College campus has a fully functional bank branch inside campus, allowing students and staff to manage all their banking needs conveniently." } },
    { "@type": "Question", "name": "Which bank branch is available at JKKN campus?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN campus has a branch of a popular nationalised bank offering services like account opening, deposits, withdrawals, and fund transfers for students and staff." } },
    { "@type": "Question", "name": "Can students open bank accounts at the JKKN campus bank?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Students can open bank accounts directly at the JKKN campus branch. Special offers and discounts are available exclusively for JKKN students and staff." } },
    { "@type": "Question", "name": "Is there a post office at JKKN College campus?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN campus has a dedicated post office offering domestic and international mail, speed post, registered post, parcel delivery, and postal savings schemes." } },
    { "@type": "Question", "name": "Are ATM facilities available at JKKN campus?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ATM facilities are available on the JKKN campus, giving students and staff easy access to cash and basic banking transactions at any time." } }
  ]
};

export default function BankPostOfficeLayout({
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
