import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hostel Facilities — JKKN College of Allied Health Sciences",
  description:
    "JKKN provides separate boys and girls hostels with modern amenities, mess facilities, and 24/7 security at Komarapalayam campus.",
  path: "/hostel",
  keywords: [
    "JKKN college hostel",
    "boys hostel Komarapalayam",
    "girls hostel allied health sciences",
    "student accommodation JKKN Tamil Nadu",
    "hostel facilities Namakkal college",
    "JKKN AHS hostel with mess",
    "college hostel near Salem Erode",
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/images/boys-hostel.png", width: 1200, height: 630, alt: "Hostel Facilities at JKKN College" },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Hostel", "item": "https://ahs.jkkn.ac.in/hostel" }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hostel Facilities — JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/hostel",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Hostel — JKKN College of Allied Health Sciences",
  "description": "JKKN provides separate boys and girls hostels with modern amenities, mess facilities, and 24/7 security at Komarapalayam campus.",
  "url": "https://ahs.jkkn.ac.in/hostel",
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
    { "@type": "Question", "name": "Is hostel accommodation available for both boys and girls at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, JKKN provides separate hostel facilities for boys and girls within the campus with round-the-clock security and CCTV surveillance." } },
    { "@type": "Question", "name": "What amenities are included in the JKKN hostel?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN hostels include furnished rooms, attached bathrooms, high-speed WiFi, study areas, gymnasium, and recreational facilities for students." } },
    { "@type": "Question", "name": "Is the JKKN hostel located within the campus?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, both boys and girls hostels are situated within the JKKN campus at Natarajapuram, Komarapalayam, ensuring convenient access to classes." } },
    { "@type": "Question", "name": "What food facilities are available for hostel students at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "JKKN hostels have an in-campus mess providing nutritious vegetarian and non-vegetarian meals three times daily with snacks." } },
    { "@type": "Question", "name": "What is the hostel fee at JKKN College?", "acceptedAnswer": { "@type": "Answer", "text": "Hostel fees vary by room type. Contact JKKN admissions at 9345855001 for current hostel fee details and room availability." } }
  ]
};

export default function HostelLayout({
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
