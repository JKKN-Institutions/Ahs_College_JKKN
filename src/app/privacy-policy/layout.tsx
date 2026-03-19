import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy — JKKN College of Allied Health Sciences",
  description:
    "Privacy policy for JKKN College of Allied Health Sciences website — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/privacy-policy",
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
    { "@type": "ListItem", "position": 3, "name": "Privacy Policy", "item": "https://ahs.jkkn.ac.in/privacy-policy" }
  ]
};

const policySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/privacy-policy",
  "about": {
    "@type": "Thing",
    "name": "Privacy Policy"
  },
  "publisher": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "dateModified": "2026-03-19"
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(policySchema) }} />
      {children}
    </>
  );
}
