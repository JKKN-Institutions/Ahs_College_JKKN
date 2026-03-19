import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog — JKKN College of Allied Health Sciences",
  description:
    "Latest news, events, and updates from JKKN College of Allied Health Sciences — campus activities, student achievements, and allied health insights.",
  path: "/blog",
  keywords: [
    "JKKN AHS blog",
    "allied health sciences news",
    "JKKN college campus updates",
    "healthcare education blog Tamil Nadu",
    "allied health student achievements",
    "JKKN Komarapalayam news",
  ],
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Blog — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/blog",
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
    { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://ahs.jkkn.ac.in/blog" }
  ]
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Blog — JKKN College of Allied Health Sciences",
  "description": "Latest news, events, and updates from JKKN College of Allied Health Sciences — campus activities, student achievements, and allied health insights.",
  "url": "https://ahs.jkkn.ac.in/blog",
  "publisher": {
    "@type": "CollegeOrUniversity",
    "@id": "https://ahs.jkkn.ac.in/#organization",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      {children}
    </>
  );
}
