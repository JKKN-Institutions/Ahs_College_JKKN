import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Photo Gallery — JKKN College of Allied Health Sciences",
  description:
    "Browse photos of JKKN College of Allied Health Sciences campus — classrooms, labs, hostel, library, and student life at Komarapalayam, Tamil Nadu.",
  path: "/gallery",
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Photo Gallery — JKKN College of Allied Health Sciences Campus",
  "url": "https://ahs.jkkn.ac.in/gallery",
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
    { "@type": "ListItem", "position": 3, "name": "Gallery", "item": "https://ahs.jkkn.ac.in/gallery" }
  ]
};

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "JKKN College of Allied Health Sciences — Campus Photo Gallery",
  "description": "Photos of JKKN College of Allied Health Sciences campus including classrooms, labs, hostel, library, and student life at Komarapalayam, Tamil Nadu.",
  "url": "https://ahs.jkkn.ac.in/gallery",
  "publisher": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />
      {children}
    </>
  );
}
