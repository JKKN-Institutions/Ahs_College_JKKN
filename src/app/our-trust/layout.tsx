import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "JKKN Educational Trust — 74+ Years of Excellence Since 1952",
  description:
    "Learn about JKKN Educational Trust, founded in 1952 — managing 9 institutions offering dental, pharmacy, nursing, engineering, and allied health education.",
  path: "/our-trust",
  keywords: [
    "JKKN educational trust",
    "J K K Nattraja trust Komarapalayam",
    "JKKN trust founded 1952 Tamil Nadu",
    "Nattraja educational institutions trust",
    "JKKN group trust Namakkal",
    "educational trust allied health college Tamil Nadu",
  ],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "J. K. K. Nattraja Educational Institutions",
  "alternateName": "JKKN Institutions",
  "url": "https://jkkn.ac.in/",
  "foundingDate": "1952",
  "description": "J. K. K. Nattraja Educational Institutions, founded in 1952, is a multi-institution educational trust managing 9 colleges and schools in Komarapalayam, Namakkal, Tamil Nadu, India.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NH-544, Natarajapuram",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "subOrganization": [
    { "@type": "CollegeOrUniversity", "name": "JKKN Dental College & Hospital", "url": "https://dental.jkkn.ac.in/" },
    { "@type": "CollegeOrUniversity", "name": "JKKN College of Pharmacy", "url": "https://pharmacy.jkkn.ac.in/" },
    { "@type": "CollegeOrUniversity", "name": "JKKN College of Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/" },
    { "@type": "CollegeOrUniversity", "name": "JKKN College of Engineering & Technology", "url": "https://engg.jkkn.ac.in/" },
    { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
    { "@type": "CollegeOrUniversity", "name": "JKKN College of Arts & Science", "url": "https://cas.jkkn.ac.in/" },
    { "@type": "CollegeOrUniversity", "name": "JKKN College of Education", "url": "https://edu.jkkn.ac.in/" },
    { "@type": "School", "name": "JKKN Matriculation Higher Secondary School", "url": "https://school.jkkn.ac.in/" },
    { "@type": "School", "name": "Nattraja Vidhyalya (CBSE)", "url": "https://nv.jkkn.ac.in/" }
  ],
  "sameAs": [
    "https://www.facebook.com/jkknallied",
    "https://www.instagram.com/jkknallied/",
    "https://www.linkedin.com/company/jkknallied/",
    "https://www.youtube.com/playlist?list=PL6QsTq-__HhsWGzdJbTOuadFqdXlcawUE",
    "https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions"
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "JKKN Educational Trust — 74+ Years of Excellence Since 1952",
  "url": "https://ahs.jkkn.ac.in/our-trust",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Our Trust", "item": "https://ahs.jkkn.ac.in/our-trust" }
  ]
};

export default function OurTrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  );
}
