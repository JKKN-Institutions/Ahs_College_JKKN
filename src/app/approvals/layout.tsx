import { createPageMetadata } from "@/lib/metadata";
import { APPROVALS_FAQS } from "./data";

export const metadata = createPageMetadata({
  title: "Approvals & Official Data | JKKN Allied Health Sciences",
  description:
    "JKKN College of Allied Health Sciences: Dr. M.G.R. Medical University affiliation, course-wise seats, AISHE code C-49058 and NAAC facts, with sources.",
  path: "/approvals",
  keywords: [
    "JKKN allied health sciences affiliation",
    "JKKN AHS university code 825",
    "JKKN allied health AISHE code",
    "JKKN allied health sciences seats",
    "JKKN allied health NAAC",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "JKKN Institutions", item: "https://jkkn.ac.in/" },
    { "@type": "ListItem", position: 2, name: "Allied Health Sciences", item: "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", position: 3, name: "Approvals and Official Data", item: "https://ahs.jkkn.ac.in/approvals" },
  ],
};

// Same text as the visible FAQ on the page (one array feeds both).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: APPROVALS_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ApprovalsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
