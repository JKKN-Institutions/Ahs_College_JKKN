import { createPageMetadata } from "@/lib/metadata";
import { PARAMEDICAL_FAQS } from "./faqs";
import { JKKN_PARAMEDICAL_COURSES, JKKN_PARAMEDICAL_SEATS } from "./courses";

// GL6-327. The site never used the word "paramedical", so "paramedical colleges in tamilnadu" had
// ZERO impressions (GSC 2026-06-24..09-21). User decision 2026-09-24: a separate paramedical page
// about JKKN's own paramedical courses - NOT a list of other colleges.
export const metadata = createPageMetadata({
  title: "Paramedical College in Tamil Nadu - JKKN Paramedical Courses 2026-27",
  description: `JKKN College of Allied Health Sciences, Komarapalayam, Namakkal district: ${JKKN_PARAMEDICAL_COURSES.length} B.Sc paramedical (allied health) courses, ${JKKN_PARAMEDICAL_SEATS} seats, affiliated to TN Dr. M.G.R. Medical University. Eligibility, admission 2026-27.`,
  path: "/paramedical-college-in-tamil-nadu",
  keywords: [
    "paramedical colleges in tamilnadu",
    "paramedical college in tamil nadu",
    "top paramedical colleges in tamilnadu",
    "best paramedical colleges in tamilnadu",
    "best colleges for paramedical courses in tamilnadu",
    "paramedical courses in tamilnadu",
    "paramedical college namakkal",
    "allied health science colleges in tamilnadu",
    "allied science colleges in tamilnadu",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "JKKN Institutions", item: "https://jkkn.ac.in/" },
    { "@type": "ListItem", position: 2, name: "Allied Health Sciences", item: "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", position: 3, name: "Paramedical Courses", item: "https://ahs.jkkn.ac.in/paramedical-college-in-tamil-nadu" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PARAMEDICAL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// JKKN's own courses as an ItemList, each pointing at its course page.
const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Paramedical (allied health) degree courses at JKKN College of Allied Health Sciences",
  numberOfItems: JKKN_PARAMEDICAL_COURSES.length,
  itemListElement: JKKN_PARAMEDICAL_COURSES.map((c, n) => ({
    "@type": "ListItem",
    position: n + 1,
    name: c.name,
    url: `https://ahs.jkkn.ac.in/${c.slug}`,
  })),
};

export default function ParamedicalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      {children}
    </>
  );
}
