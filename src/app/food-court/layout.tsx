import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Food Court — JKKN College of Allied Health Sciences Campus",
  description:
    "Hygienic food court at JKKN campus offering nutritious vegetarian and non-vegetarian meals for students and staff at affordable prices.",
  path: "/food-court",
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
    "cssSelector": ["h1", "h2"]
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
      {children}
    </>
  );
}
