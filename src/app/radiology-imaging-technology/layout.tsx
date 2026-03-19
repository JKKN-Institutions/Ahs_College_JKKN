import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Best Radiography Course in Tamilnadu | JKKN AHS College",
  description: "JKKN offers the best radiography course in Tamilnadu. BSc radiography programme with hospital-attached imaging training & placements. Admissions 2026-27!",
  path: "/radiology-imaging-technology",
  keywords: [
    "radiography course in tamilnadu",
    "b sc radiography colleges in tamilnadu",
    "bsc radiography colleges in tamilnadu",
    "radiography courses in tamilnadu"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/radiology-technology-hero.png", width: 1200, height: 630, alt: "BSc Radiology Imaging Technology at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Radiography Imaging Technology",
  "description": "Comprehensive program that prepares students to become skilled radiography technologists, mastering X-ray, CT scan, MRI, ultrasound, mammography, and advanced radiological procedures for accurate disease diagnosis and treatment planning.",
  "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/",
    "sameAs": "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7"
  },
  "educationalLevel": "Undergraduate",
  "educationalCredentialAwarded": "Bachelor of Science (B.Sc)",
  "timeRequired": "P4Y",
  "inLanguage": "en",
  "coursePrerequisites": "10+2 or equivalent with Physics, Chemistry, and Biology/Mathematics. Minimum 50% aggregate (40% for SC/ST, 45% for OBC). Age 17+ years.",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "full-time",
    "startDate": "2026-08-01",
    "location": {
      "@type": "Place",
      "name": "JKKN College of Allied Health Sciences",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      }
    },
    "maximumAttendeeCapacity": 5
  },
  "occupationalCategory": "X-ray Technician, CT Scan Technologist, MRI Technologist, Ultrasound Technician, Mammography Specialist, Interventional Radiology Technician",
  "teaches": [
    "X-ray Imaging",
    "CT Scanning",
    "MRI Technology",
    "Ultrasound Imaging",
    "Mammography",
    "PACS Systems"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Tuition Fees",
    "priceCurrency": "INR",
    "price": "75000",
    "priceValidUntil": "2027-07-31",
    "url": "https://admission.jkkn.ac.in/",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-03-01"
  },
  "potentialAction": {
    "@type": "ApplyAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://admission.jkkn.ac.in/",
      "actionPlatform": "http://schema.org/DesktopWebPlatform"
    },
    "name": "Apply for B.Sc Radiography Imaging Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Best Radiography Course in Tamilnadu | JKKN AHS College",
  "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Radiography Imaging Technology", "item": "https://ahs.jkkn.ac.in/radiology-imaging-technology" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Bachelor of Science Radiography Imaging Technology at JKKN College of Allied Health Sciences in Komarapalayam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bachelor of Science Radiography Imaging Technology is a three-year plus one-year internship undergraduate program training students in X-ray, Computed Tomography, Magnetic Resonance Imaging, and ultrasound diagnostic imaging."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria for Bachelor of Science Radiography Imaging Technology at JKKN Allied Health Sciences Komarapalayam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need 10+2 with Physics, Chemistry, and Biology or Mathematics, minimum 50% marks. Scheduled Caste and Scheduled Tribe: 40%. Other Backward Classes: 45%. Age minimum 17 years."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary after completing Bachelor of Science Radiography Imaging Technology from JKKN College Komarapalayam Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level radiology technologists earn three to five lakhs per year. Experienced Computed Tomography and Magnetic Resonance Imaging specialists at corporate hospitals earn twelve to twenty lakhs annually."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities after Bachelor of Science Radiography Imaging Technology from JKKN Allied Health Sciences in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as X-ray Technician, Computed Tomography Technologist, Magnetic Resonance Imaging Technologist, Ultrasound Technician, Mammography Specialist, and Interventional Radiology Technician in hospitals."
      }
    },
    {
      "@type": "Question",
      "name": "Is Bachelor of Science Radiography Imaging Technology at JKKN College of Allied Health Sciences Komarapalayam a good career choice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Growing healthcare demand, advanced imaging technology, competitive salaries, and diverse specializations make Bachelor of Science Radiography Imaging Technology an excellent career choice in Tamil Nadu."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after Bachelor of Science Radiography Imaging Technology from JKKN Allied Health Sciences Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Graduates can pursue Master of Science in Radiography, Medical Imaging, or Radiological Sciences. Postgraduate Diploma in Computed Tomography or Magnetic Resonance Imaging technology is also available."
      }
    },
    {
      "@type": "Question",
      "name": "What practical training is included in Bachelor of Science Radiography Imaging Technology at JKKN College Komarapalayam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program includes over two thousand hours of clinical training covering X-ray, Computed Tomography, Magnetic Resonance Imaging, ultrasound, mammography, and radiation safety in hospital radiology departments."
      }
    },
    {
      "@type": "Question",
      "name": "Is radiation exposure a concern for Radiography Imaging Technology students at JKKN Allied Health Sciences in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Strict safety protocols, protective equipment, and As Low As Reasonably Achievable radiation principles keep exposure minimal. Technologists receive thorough radiation safety training before clinical practice."
      }
    }
  ]
};

export default function RadiologyImagingTechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
  );
}
