import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Scholarships 2026-27 | JKKN College of Allied Health Sciences",
  description: "Scholarships available for BSc Allied Health Sciences students at JKKN College — Trust Scholarship and Naan Mudhalvan Scholarship details for 2026-27.",
  path: "/scholarships",
  keywords: [
    "JKKN AHS scholarship 2026",
    "allied health science scholarship tamilnadu",
    "naan mudhalvan scholarship allied health",
    "trust scholarship jkkn",
    "BC MBC scholarship allied health sciences",
    "allied health science financial aid tamilnadu",
    "jkkn college scholarship",
    "bsc allied health scholarship komarapalayam",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Scholarships", "item": "https://ahs.jkkn.ac.in/scholarships" }
  ]
};

export default function ScholarshipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
