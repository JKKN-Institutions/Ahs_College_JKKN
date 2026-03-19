import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BSc Cardiac Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc cardiac technology colleges in Tamilnadu? JKKN offers cardiac care technology courses with clinical training & scholarships. Apply 2026-27!",
  path: "/cardiac-technology",
  keywords: [
    "bsc cardiac technology colleges in tamilnadu",
    "cardiac technology college in tamilnadu",
    "cardiac technology course in tamilnadu",
    "b sc cardiac technology colleges in tamilnadu",
    "bsc cardiac perfusion technology colleges in tamilnadu",
    "bsc cardiac technology courses in tamilnadu",
    "bsc cardiac care technology colleges in tamilnadu",
    "cardiac care technology colleges in tamilnadu",
    "cardiac perfusion technology colleges in tamilnadu",
    "b sc cardiac perfusion technology colleges in tamilnadu",
    "cardiac perfusion technology course in tamilnadu"
  ],
  ogImage: { url: "https://ahs.jkkn.ac.in/cardiac-technology-hero.png", width: 1200, height: 630, alt: "BSc Cardiac Technology at JKKN College" },
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "dateModified": "2026-03-19",
  "name": "B.Sc Cardiac Technology",
  "description": "Specialized undergraduate program designed to train healthcare professionals in the diagnosis, monitoring, and treatment support for patients with cardiovascular diseases. The curriculum combines theoretical knowledge with extensive practical training, preparing graduates to work alongside cardiologists and cardiac surgeons.",
  "url": "https://ahs.jkkn.ac.in/cardiac-technology",
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
    "maximumAttendeeCapacity": 7
  },
  "occupationalCategory": "ECG Technician, Echo Technologist, Cath Lab Technologist, Pacemaker Technician, Cardiac Rehab Specialist",
  "teaches": [
    "Cardiovascular Diagnostics",
    "ECG Interpretation",
    "Echocardiography",
    "Cardiac Catheterization",
    "Patient Monitoring"
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
    "name": "Apply for B.Sc Cardiac Technology"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BSc Cardiac Technology Colleges in Tamilnadu | JKKN",
  "url": "https://ahs.jkkn.ac.in/cardiac-technology",
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
    { "@type": "ListItem", "position": 3, "name": "B.Sc Cardiac Technology", "item": "https://ahs.jkkn.ac.in/cardiac-technology" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-19",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Bachelor of Science in Cardiac Technology at JKKN College Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bachelor of Science in Cardiac Technology is a four-year allied health science degree training professionals in cardiovascular diagnosis using electrocardiogram, echocardiography, and cardiac catheterization."
      }
    },
    {
      "@type": "Question",
      "name": "What are the eligibility requirements for Bachelor of Science Cardiac Technology in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates need Plus Two with Physics, Chemistry, and Biology with minimum 50 percent aggregate marks. Scheduled Caste and Scheduled Tribe candidates need 40 percent."
      }
    },
    {
      "@type": "Question",
      "name": "What is the career scope of Cardiac Technology after graduation in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cardiac Technology graduates work in hospitals, catheterization labs, rehabilitation centers, and medical device companies in electrocardiogram, echocardiography, and interventional cardiology roles."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities after Bachelor of Science Cardiac Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Cardiovascular Technologists, Echocardiogram Technicians, Catheterization Lab Technicians, Pacemaker Technicians, and Application Specialists in hospitals."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher education after Bachelor of Science Cardiac Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates can pursue Master of Science in Cardiac Technology, public health, or hospital administration specializations for advanced career opportunities."
      }
    }
  ]
};

export default function CardiacTechnologyLayout({
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
