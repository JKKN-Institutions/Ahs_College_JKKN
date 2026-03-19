import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Transport Facilities — JKKN College of Allied Health Sciences",
  description:
    "JKKN provides college bus transport covering Salem, Erode, Namakkal, Tiruchengode, and surrounding areas for student commute.",
  path: "/transport",
  keywords: [
    "JKKN college bus transport",
    "student transport Komarapalayam",
    "college bus Salem Erode Namakkal",
    "JKKN AHS transport facility",
    "college bus service Tamil Nadu",
    "Tiruchengode college bus route",
    "JKKN campus transport facilities",
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/transport/transport-1.webp", width: 1200, height: 630, alt: "Transport Facilities at JKKN College" },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Transport", "item": "https://ahs.jkkn.ac.in/transport" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Transport Facilities — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/transport",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Transport — JKKN College of Allied Health Sciences",
  "description": "JKKN provides college bus transport covering Salem, Erode, Namakkal, Tiruchengode, and surrounding areas for student commute.",
  "url": "https://ahs.jkkn.ac.in/transport",
  "containedInPlace": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NH-544, Natarajapuram",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    { "@type": "Question", "name": "Does JKKN College provide bus transport for students?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN College of Allied Health Sciences provides a well-maintained bus fleet for students and faculty from nearby towns and cities." } },
    { "@type": "Question", "name": "What areas does the JKKN college bus service cover?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN buses cover Salem, Erode, Namakkal, Tiruchengode, Komarapalayam, and surrounding areas, ensuring broad accessibility for students." } },
    { "@type": "Question", "name": "What is the transport fee at JKKN College?", "acceptedAnswer": { "@type": "Answer", "text": "Transport fees vary by distance and route. Contact JKKN admissions at 9345855001 for current bus fee details and route schedules." } },
    { "@type": "Question", "name": "Are there separate buses for boys and girls at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN transport is mixed but ensures safety with CCTV cameras on buses and female attendants available to assist girl students." } },
    { "@type": "Question", "name": "What is the bus timing for JKKN College?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN buses operate on a strict schedule aligned with college hours. Contact the transport office at 9345855001 for exact timings." } }
  ]
};

export default function TransportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(facilitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
