import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Ambulance Service — JKKN College of Allied Health Sciences",
  description:
    "24/7 ambulance service available at JKKN campus, Komarapalayam. Emergency medical transport for students, staff, and hospital patients.",
  path: "/ambulance-service",
  keywords: [
    "JKKN campus ambulance service",
    "24/7 emergency medical transport Komarapalayam",
    "college ambulance facility Tamil Nadu",
    "JKKN AHS emergency service",
    "campus medical emergency Namakkal",
    "ambulance service allied health college",
    "first aid centre JKKN campus",
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/ambulance.webp", width: 1200, height: 630, alt: "Ambulance Service at JKKN College" },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Ambulance Service", "item": "https://ahs.jkkn.ac.in/ambulance-service" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Ambulance Service — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/ambulance-service",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Ambulance Service — JKKN College of Allied Health Sciences",
  "description": "24/7 ambulance service available at JKKN campus, Komarapalayam. Emergency medical transport for students, staff, and hospital patients.",
  "url": "https://ahs.jkkn.ac.in/ambulance-service",
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
    { "@type": "Question", "name": "Does JKKN College have an ambulance service on campus?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN College campus has a dedicated ambulance service managed by certified emergency medical technicians, ready to respond to all medical emergencies." } },
    { "@type": "Question", "name": "Is the JKKN ambulance service available 24 hours?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The JKKN ambulance service operates around the clock, providing 24-hour emergency medical transportation and response for students, staff, and the campus community." } },
    { "@type": "Question", "name": "What medical emergencies does the JKKN ambulance handle?", "acceptedAnswer": { "@type": "Answer", "text": "The JKKN ambulance handles all medical emergencies including accidents, sudden illness, cardiac events, and any situation requiring urgent medical transportation to a hospital." } },
    { "@type": "Question", "name": "Is there a first aid centre at JKKN College?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. JKKN College has a first aid centre on campus that provides immediate medical attention before patients are transported via ambulance if required." } },
    { "@type": "Question", "name": "How quickly can the JKKN ambulance respond to emergencies?", "acceptedAnswer": { "@type": "Answer", "text": "The JKKN ambulance is stationed on campus for rapid response. Being on-site, it can reach any point on campus within minutes of an emergency call." } }
  ]
};

export default function AmbulanceServiceLayout({
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
