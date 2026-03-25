import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Allied Health Science Courses in Salem | JKKN AHS — Admissions 2026-27",
  description:
    "Looking for allied health science courses in Salem? JKKN College of Allied Health Sciences is just 40-50 km from Salem on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!",
  path: "/salem",
  keywords: [
    "allied health science courses in salem",
    "allied health science salem",
    "allied health science in salem",
    "allied health science college near salem",
    "best allied health science college salem",
    "bsc allied health science salem",
    "paramedical colleges in salem",
    "health science courses salem",
    "jkkn allied health sciences salem",
    "allied health science admission salem",
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
      name: "Salem",
      item: "https://ahs.jkkn.ac.in/salem",
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
      name: "What is the best allied health sciences college near Salem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Allied Health Sciences, located just 40-50 km from Salem on NH-544, is widely regarded as one of the top allied health sciences colleges accessible from Salem. Approved by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
      },
    },
    {
      "@type": "Question",
      name: "How far is JKKN AHS from Salem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS is approximately 40-50 km from Salem city centre, which takes about 50-60 minutes by road via NH-544 (Salem-Coimbatore Highway) — direct route. Regular bus services are available from Salem.",
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
      name: "Does JKKN AHS provide hostel for Salem students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Students from Salem can also opt for daily commute as the campus is just 50-60 minutes away. College transport services are available.",
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

export default function SalemLayout({
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
