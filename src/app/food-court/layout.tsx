import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Food Court — JKKN College of Allied Health Sciences Campus",
  description:
    "Hygienic food court at JKKN campus offering nutritious vegetarian and non-vegetarian meals for students and staff at affordable prices.",
  path: "/food-court",
  keywords: [
    "JKKN college food court",
    "campus canteen Komarapalayam",
    "college mess facility Tamil Nadu",
    "JKKN AHS dining hall",
    "student canteen Namakkal college",
    "hygienic food court campus",
    "vegetarian non-vegetarian meals JKKN",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Food Court", "item": "https://ahs.jkkn.ac.in/food-court" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Food Court — JKKN College of Allied Health Sciences Campus",
  "url": "https://ahs.jkkn.ac.in/food-court",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Food Court — JKKN College of Allied Health Sciences",
  "description": "Hygienic food court at JKKN campus offering nutritious vegetarian and non-vegetarian meals for students and staff at affordable prices.",
  "url": "https://ahs.jkkn.ac.in/food-court",
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
    { "@type": "Question", "name": "Does JKKN College have a food court on campus?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN College of Allied Health Sciences has a modern food court on campus offering diverse, hygienic, and affordable meals daily." } },
    { "@type": "Question", "name": "Is vegetarian food available at the JKKN food court?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the JKKN food court serves a wide variety of fresh vegetarian meals, snacks, and beverages to cater to all dietary preferences." } },
    { "@type": "Question", "name": "What are the food court timings at JKKN College?", "acceptedAnswer": { "@type": "Answer", "text": "The JKKN food court operates throughout college hours, from morning to evening, serving breakfast, lunch, and evening snacks daily." } },
    { "@type": "Question", "name": "Are meals included in the hostel fee at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, hostel students receive three nutritious meals daily through the campus mess as part of their hostel accommodation package." } },
    { "@type": "Question", "name": "Is the JKKN food court hygienic and clean?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the JKKN food court maintains strict hygiene standards with regular inspections, fresh ingredients, and eco-friendly food-grade packaging." } }
  ]
};

export default function FoodCourtLayout({
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
