import { Poppins } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { createPageMetadata } from "@/lib/metadata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = createPageMetadata({
  title: "Best Allied Health Science Colleges in Tamilnadu | JKKN",
  description: "JKKN is among the best allied health science colleges in Tamilnadu. Explore BSc allied health science courses with clinical training. Admissions 2026-27!",
  path: "/",
  keywords: [
    "best allied health science colleges in tamilnadu",
    "allied health science courses in tamilnadu",
    "bsc allied health science colleges in tamilnadu",
    "top 10 allied health science colleges in tamilnadu",
    "bsc allied health science courses in tamilnadu",
  ],
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "JKKN College of Allied Health Sciences",
  "alternateName": "JKKN AHS",
  "url": "https://ahs.jkkn.ac.in/",
  "publisher": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences"
  },
  "inLanguage": "en",
  "dateModified": "2026-03-18",
  "potentialAction": {
    "@type": "ReadAction",
    "target": "https://ahs.jkkn.ac.in/"
  }
};

const collegeSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://ahs.jkkn.ac.in/#organization",
  "name": "JKKN College of Allied Health Sciences",
  "alternateName": ["JKKN AHS", "JKKN Allied Health Sciences"],
  "url": "https://ahs.jkkn.ac.in/",
  "description": "JKKN College of Allied Health Sciences offers 9 specialized B.Sc Allied Health programs with 2,000+ clinical training hours, 95% placement rate, and training at a 500+ bed multi-specialty teaching hospital. Affiliated to Tamil Nadu Dr. MGR Medical University. NAAC A+ Accredited. Located on NH-544, Komarapalayam, Namakkal, Tamil Nadu.",
  "foundingDate": "2019",
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
  "sameAs": [
    "https://www.facebook.com/jkknallied",
    "https://www.instagram.com/jkknallied/",
    "https://www.linkedin.com/company/jkknallied/",
    "https://www.youtube.com/playlist?list=PL6QsTq-__HhsWGzdJbTOuadFqdXlcawUE",
    "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7",
    "https://www.tnmgrmu.ac.in/",
    "https://jkkn.ac.in/",
    "https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions",
    "https://www.wikidata.org/wiki/Q55090877",
    "https://x.com/jkkninstitution",
    "https://wa.me/919345855001"
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://ahs.jkkn.ac.in/ahs-logo.svg"
  },
  "image": "https://ahs.jkkn.ac.in/allied-health-science-hero.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919345855001",
    "contactType": "admissions",
    "email": "alliedhealth@jkkn.ac.in",
    "areaServed": "IN",
    "availableLanguage": ["English", "Tamil"]
  },
  "parentOrganization": {
    "@type": "EducationalOrganization",
    "@id": "https://www.jkkn.ac.in/#organization",
    "name": "JKKN Educational Institutions",
    "url": "https://jkkn.ac.in/"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Accreditation",
    "name": "NAAC A+ Accreditation",
    "recognizedBy": {
      "@type": "Organization",
      "name": "National Assessment and Accreditation Council",
      "url": "https://www.naac.gov.in/"
    }
  },
  "department": [
    { "@type": "Organization", "name": "Department of Cardiac Technology" },
    { "@type": "Organization", "name": "Department of Radiography and Imaging Technology" },
    { "@type": "Organization", "name": "Department of Dialysis Technology" },
    { "@type": "Organization", "name": "Department of Operation Theatre and Anaesthesia Technology" },
    { "@type": "Organization", "name": "Department of Respiratory Therapy" },
    { "@type": "Organization", "name": "Department of Physician Assistant Studies" },
    { "@type": "Organization", "name": "Department of Critical Care Technology" },
    { "@type": "Organization", "name": "Department of Medical Record Science" },
    { "@type": "Organization", "name": "Department of Accident and Emergency Care Technology" }
  ],
  "areaServed": [
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Salem" },
    { "@type": "City", "name": "Namakkal" },
    { "@type": "City", "name": "Tiruchengode" },
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "AdministrativeArea", "name": "Namakkal District" },
    { "@type": "State", "name": "Tamil Nadu" }
  ],
  "knowsAbout": [
    "Allied Health Sciences",
    "Cardiac Technology",
    "Radiology and Imaging",
    "Dialysis Technology",
    "Operation Theatre Technology",
    "Anaesthesia Technology",
    "Respiratory Therapy",
    "Physician Assistant Training",
    "Critical Care Technology",
    "Medical Record Science",
    "Emergency Care Technology"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "150",
    "url": "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7"
  },
  "dateModified": "2026-03-18"
};

// ItemList schema for program discoverability by AI engines
const programListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "B.Sc Allied Health Science Programs at JKKN",
  "description": "9 specialized undergraduate allied health science programs offered by JKKN College of Allied Health Sciences, Komarapalayam, Tamil Nadu.",
  "numberOfItems": 9,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "B.Sc Cardiac Technology", "url": "https://ahs.jkkn.ac.in/cardiac-technology" },
    { "@type": "ListItem", "position": 2, "name": "B.Sc Radiology & Imaging Technology", "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology" },
    { "@type": "ListItem", "position": 3, "name": "B.Sc Dialysis Technology", "url": "https://ahs.jkkn.ac.in/dialysis-technology" },
    { "@type": "ListItem", "position": 4, "name": "B.Sc Operation Theatre & Anaesthesia Technology", "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia" },
    { "@type": "ListItem", "position": 5, "name": "B.Sc Respiratory Therapy", "url": "https://ahs.jkkn.ac.in/respiratory-therapy" },
    { "@type": "ListItem", "position": 6, "name": "B.Sc Physician Assistant", "url": "https://ahs.jkkn.ac.in/physician-assistant" },
    { "@type": "ListItem", "position": 7, "name": "B.Sc Critical Care Technology", "url": "https://ahs.jkkn.ac.in/critical-care-technology" },
    { "@type": "ListItem", "position": 8, "name": "B.Sc Medical Record Science", "url": "https://ahs.jkkn.ac.in/medical-record-science" },
    { "@type": "ListItem", "position": 9, "name": "B.Sc Accident & Emergency Care Technology", "url": "https://ahs.jkkn.ac.in/accident-emergency-care" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="JKKN College of Allied Health Sciences" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W5JJJVHB');` }} />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(programListSchema) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5JJJVHB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
