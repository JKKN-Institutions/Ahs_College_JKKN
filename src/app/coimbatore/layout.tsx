import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Allied Health Sciences Colleges in Coimbatore | JKKN AHS — Admissions 2026-27",
  description:
    "Looking for allied health sciences colleges in Coimbatore? JKKN College of Allied Health Sciences offers 9 BSc courses with 85%+ placements, NAAC approved. Direct NH-544 connectivity. Apply now!",
  path: "/coimbatore",
  keywords: [
    "allied health sciences colleges in coimbatore",
    "allied health science colleges in coimbatore",
    "allied health science courses in coimbatore",
    "top allied health science colleges in coimbatore",
    "best allied health science college coimbatore",
    "bsc allied health science coimbatore",
    "paramedical colleges in coimbatore",
    "health science courses coimbatore",
    "jkkn allied health sciences coimbatore",
    "allied health science admission coimbatore",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "JKKN Institutions",
      item: "https://jkkn.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Allied Health Sciences",
      item: "https://ahs.jkkn.ac.in/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Coimbatore",
      item: "https://ahs.jkkn.ac.in/coimbatore",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-03-24",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best allied health sciences college in Coimbatore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Allied Health Sciences, located just 100-110 km from Coimbatore on NH-544, is widely regarded as one of the top allied health sciences colleges accessible from Coimbatore. Approved by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
      },
    },
    {
      "@type": "Question",
      name: "How far is JKKN AHS from Coimbatore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS is approximately 100-110 km from Coimbatore city centre, which takes about 2-2.5 hours by road via NH-544 (Coimbatore-Salem Highway) — direct route. Regular bus services are available from Coimbatore.",
      },
    },
    {
      "@type": "Question",
      name: "What is Allied Health Sciences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences, you can study physiotherapy, medical lab technology, radiology, cardiac technology, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Is BPT a good career option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BPT (Bachelor of Physiotherapy) is an excellent career choice. Physiotherapists are in high demand in hospitals, sports clinics, rehabilitation centres, and private practice. Graduates can also pursue international careers in Gulf countries, UK, and Australia.",
      },
    },
    {
      "@type": "Question",
      name: "How is AHS different from nursing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While nursing focuses on patient care and bedside support, Allied Health Sciences covers specialised diagnostic and therapeutic roles like physiotherapy, lab testing, radiology imaging, and cardiac monitoring. Both are valuable healthcare careers, but AHS offers more specialisation options.",
      },
    },
    {
      "@type": "Question",
      name: "Does JKKN AHS provide hostel for Coimbatore students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Students from Coimbatore can also opt for daily commute as the campus is just 2-2.5 hours away. College transport services are available.",
      },
    },
    {
      "@type": "Question",
      name: "How can I apply for admission at JKKN AHS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can apply online through the official website at https://ahs.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
      },
    },
  ],
};

export default function CoimbatoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
