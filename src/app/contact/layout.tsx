import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Us | JKKN Allied Health Sciences, Komarapalayam",
  description:
    "Get in touch with JKKN College of Allied Health Sciences. Campus address: NH-544, Komarapalayam, Namakkal. Phone, email, and Google Maps directions.",
  path: "/contact",
});

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Contact Us | JKKN Allied Health Sciences, Komarapalayam",
  "url": "https://ahs.jkkn.ac.in/contact",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ahs.jkkn.ac.in/#localbusiness",
  "name": "JKKN College of Allied Health Sciences",
  "image": "https://ahs.jkkn.ac.in/allied-health-science-hero.png",
  "url": "https://ahs.jkkn.ac.in/",
  "telephone": "+919345855001",
  "email": "alliedhealth@jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NH-544 (Salem to Coimbatore National Highway), Natarajapuram",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.445190",
    "longitude": "77.726549"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+919345855001",
      "contactType": "admissions",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    },
    {
      "@type": "ContactPoint",
      "email": "alliedhealth@jkkn.ac.in",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/jkknallied",
    "https://www.instagram.com/jkknallied/",
    "https://www.linkedin.com/company/jkknallied/",
    "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7"
  ],
  "potentialAction": [
    {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "tel:+919345855001",
        "actionPlatform": "http://schema.org/TelephoneAction"
      },
      "name": "Call JKKN Allied Health Sciences"
    },
    {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "mailto:alliedhealth@jkkn.ac.in"
      },
      "name": "Email JKKN Allied Health Sciences"
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Contact Us", "item": "https://ahs.jkkn.ac.in/contact" }
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  );
}
