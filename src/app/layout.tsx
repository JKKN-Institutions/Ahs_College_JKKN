import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';

  return {
    title: "Best Allied Health Science Colleges in Tamilnadu | JKKN",
    description: "JKKN is among the best allied health science colleges in Tamilnadu. Explore BSc allied health science courses with clinical training. Admissions 2026-27 open!",
    keywords: [
      "best allied health science colleges in tamilnadu",
      "allied health science courses in tamilnadu",
      "bsc allied health science colleges in tamilnadu",
      "top 10 allied health science colleges in tamilnadu",
      "bsc allied health science courses in tamilnadu"
    ],
    icons: {
      icon: "/ahs-logo.svg",
    },
    alternates: {
      canonical: `https://ahs.jkkn.ac.in${pathname}`,
    },
    openGraph: {
      title: "Best Allied Health Science Colleges in Tamilnadu | JKKN",
      description: "JKKN is among the best allied health science colleges in Tamilnadu. Explore BSc allied health science courses with clinical training. Admissions 2026-27 open!",
      url: `https://ahs.jkkn.ac.in${pathname}`,
      siteName: "JKKN College of Allied Health Sciences",
      images: [
        {
          url: "https://ahs.jkkn.ac.in/allied-health-science-hero.png",
          width: 1200,
          height: 630,
          alt: "JKKN College of Allied Health Sciences — Best AHS College in Tamil Nadu",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Allied Health Science Colleges in Tamilnadu | JKKN",
      description: "JKKN is among the best allied health science colleges in Tamilnadu. Explore BSc allied health science courses with clinical training. Admissions 2026-27 open!",
      images: ["https://ahs.jkkn.ac.in/allied-health-science-hero.png"],
    },
  };
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "JKKN Institutions",
      "item": "https://jkkn.ac.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Allied Health Sciences",
      "item": "https://ahs.jkkn.ac.in/"
    }
  ]
};

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
  "inLanguage": "en"
};

const collegeSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
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
    "https://jkkn.ac.in/"
  ],
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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W5JJJVHB');` }} />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeSchema) }}
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
