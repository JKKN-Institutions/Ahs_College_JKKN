import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our Institutions — JKKN Group of Colleges, Tamil Nadu",
  description:
    "Explore all 9 JKKN institutions — colleges for dental, pharmacy, nursing, engineering, allied health, arts & science, and education in Komarapalayam.",
  path: "/our-institutions",
});

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "JKKN Group of Institutions",
  "description": "All colleges and schools under J. K. K. Nattraja Educational Institutions in Komarapalayam, Namakkal, Tamil Nadu.",
  "url": "https://ahs.jkkn.ac.in/our-institutions",
  "numberOfItems": 9,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Dental College & Hospital", "url": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "JKKN College of Pharmacy", "url": "https://pharmacy.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "JKKN College of Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 4, "name": "JKKN College of Engineering & Technology", "url": "https://engg.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 5, "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 6, "name": "JKKN College of Arts & Science", "url": "https://cas.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 7, "name": "JKKN College of Education", "url": "https://edu.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 8, "name": "JKKN Matriculation Higher Secondary School", "url": "https://school.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 9, "name": "Nattraja Vidhyalya (CBSE)", "url": "https://nv.jkkn.ac.in/" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Institutions — JKKN Group of Colleges, Tamil Nadu",
  "url": "https://ahs.jkkn.ac.in/our-institutions",
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
    { "@type": "ListItem", "position": 3, "name": "Our Institutions", "item": "https://ahs.jkkn.ac.in/our-institutions" }
  ]
};

export default function OurInstitutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  );
}
