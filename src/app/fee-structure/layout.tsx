import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Fee Structure 2026-27 | JKKN College of Allied Health Sciences",
  description: "View the complete fee structure for all 9 BSc Allied Health Sciences programs at JKKN College. Management Quota and Government Quota fees for 2026-27.",
  path: "/fee-structure",
  keywords: [
    "JKKN AHS fee structure 2026",
    "allied health science fee structure tamilnadu",
    "bsc allied health science fees jkkn",
    "cardiac technology fee",
    "dialysis technology fee",
    "radiology technology fee",
    "operation theatre fee jkkn",
    "physician assistant fee tamilnadu",
    "allied health science management quota fees",
    "allied health science government quota fees",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Fee Structure", "item": "https://ahs.jkkn.ac.in/fee-structure" }
  ]
};

export default function FeeStructureLayout({
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
