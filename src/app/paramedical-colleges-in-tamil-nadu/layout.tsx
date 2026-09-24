import { createPageMetadata } from "@/lib/metadata";
import { AHS_TN_TOTAL, AHS_TN_GOVT, AHS_LIST_SOURCE } from "@/lib/ahs-colleges-tn";
import { PARAMEDICAL_TN_FAQS } from "./faqs";

// The Tamil Nadu list-intent page (GL6-327). "paramedical colleges in tamilnadu" had ZERO impressions
// in GSC 2026-06-24..09-21 because the site never used the word, and every result for the list
// question is a list. This page is the list, from the university's own affiliation document.
export const metadata = createPageMetadata({
  title: "Paramedical & Allied Health Science Colleges in Tamil Nadu 2026 - Official List",
  description: `${AHS_TN_TOTAL} institutions are affiliated to TN Dr. M.G.R. Medical University for UG paramedical (allied health) courses in ${AHS_LIST_SOURCE.year}, ${AHS_TN_GOVT.length} of them government. Full list, district tables, how to choose.`,
  path: "/paramedical-colleges-in-tamil-nadu",
  keywords: [
    "paramedical colleges in tamilnadu",
    "top paramedical colleges in tamilnadu",
    "best paramedical colleges in tamilnadu",
    "best colleges for paramedical courses in tamilnadu",
    "allied health science colleges in tamilnadu",
    "allied health sciences colleges in tamilnadu",
    "allied science colleges in tamilnadu",
    "government paramedical colleges in tamilnadu",
    "list of allied health sciences colleges in tamilnadu",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "JKKN Institutions", item: "https://jkkn.ac.in/" },
    { "@type": "ListItem", position: 2, name: "Allied Health Sciences", item: "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", position: 3, name: "Paramedical Colleges in Tamil Nadu", item: "https://ahs.jkkn.ac.in/paramedical-colleges-in-tamil-nadu" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PARAMEDICAL_TN_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Government colleges as an ItemList - the part of the list a searcher most often asks for first.
const govtListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Government colleges offering UG allied health (paramedical) courses in Tamil Nadu, 2025-26",
  numberOfItems: AHS_TN_GOVT.length,
  itemListElement: AHS_TN_GOVT.map((i, n) => ({
    "@type": "ListItem",
    position: n + 1,
    name: `${i.name}, ${i.place}`,
  })),
};

export default function ParamedicalTnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(govtListSchema) }} />
      {children}
    </>
  );
}
