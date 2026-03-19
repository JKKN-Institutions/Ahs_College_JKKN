import type { Metadata } from "next";

// Static metadata for the hardcoded blog post at /blog/[slug]
// When dynamic blog posts are added from Supabase, convert this to generateMetadata()
export const metadata: Metadata = {
  title: "Allied Health Sciences Admission 2026: Courses, Eligibility & Careers | JKKN AHS Blog",
  description:
    "Complete guide to allied health sciences admission 2026 in Tamil Nadu — eligibility criteria, course curriculum, clinical training, fee structure, career scope, and admission process at JKKN College.",
  alternates: {
    canonical: "https://ahs.jkkn.ac.in/blog/allied-health-sciences-admission-2026",
  },
  openGraph: {
    title: "Allied Health Sciences Admission 2026: Courses, Eligibility & Careers",
    description:
      "Complete guide to allied health sciences admission 2026 in Tamil Nadu — eligibility, courses, fees, placements, and how to apply at JKKN College.",
    url: "https://ahs.jkkn.ac.in/blog/allied-health-sciences-admission-2026",
    siteName: "JKKN College of Allied Health Sciences",
    images: [
      {
        url: "https://ahs.jkkn.ac.in/allied-health-science-hero.png",
        width: 1200,
        height: 630,
        alt: "Allied Health Sciences Admission 2026 — JKKN College",
      },
    ],
    type: "article",
    publishedTime: "2026-03-01",
    modifiedTime: "2026-03-18",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allied Health Sciences Admission 2026: Courses, Eligibility & Careers",
    description:
      "Complete guide to allied health sciences admission 2026 — eligibility, courses, fees, placements at JKKN College Tamil Nadu.",
    images: ["https://ahs.jkkn.ac.in/allied-health-science-hero.png"],
  },
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Allied Health Sciences Admission 2026: Courses, Eligibility & Careers",
  "url": "https://ahs.jkkn.ac.in/blog/allied-health-sciences-admission-2026",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"],
  },
};

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
