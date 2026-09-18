import dynamic from 'next/dynamic';
import { HOME_FAQS } from "@/lib/home-faqs";
import { nodeText } from "@/lib/node-text";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { Programs } from "@/components/sections/Programs";
import { SnippetBlock } from "@/components/sections/SnippetBlock";
import { ScrollToSection } from "@/components/ScrollToSection";
import { AdmissionPopup } from "@/components/AdmissionPopup";

// Lazy-load below-fold sections
const WhyChoose = dynamic(() => import("@/components/sections/WhyChoose").then(m => ({ default: m.WhyChoose })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const CareerPaths = dynamic(() => import("@/components/sections/CareerPaths").then(m => ({ default: m.CareerPaths })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Facilities = dynamic(() => import("@/components/sections/Facilities").then(m => ({ default: m.Facilities })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const AdmissionJourney = dynamic(() => import("@/components/sections/AdmissionJourney").then(m => ({ default: m.AdmissionJourney })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

import { FAQ } from "@/components/sections/FAQ";

const HomeEvents = dynamic(() => import("@/components/sections/HomeEvents").then(m => ({ default: m.HomeEvents })), {
  loading: () => null
});

const CTASection = dynamic(() => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for B.Sc Allied Health Sciences at JKKN College",
  "description": "Step-by-step admission process for B.Sc Allied Health Sciences programs at JKKN College of Allied Health Sciences, Komarapalayam, Tamil Nadu. Applications open for 2026-27 academic year.",
  "totalTime": "P3D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "500"
  },
  "supply": [
    { "@type": "HowToSupply", "name": "10+2 Mark Sheet (Physics, Chemistry, Biology)" },
    { "@type": "HowToSupply", "name": "Transfer Certificate (TC)" },
    { "@type": "HowToSupply", "name": "Community Certificate" },
    { "@type": "HowToSupply", "name": "Passport-size Photographs" },
    { "@type": "HowToSupply", "name": "Aadhaar Card" },
    { "@type": "HowToSupply", "name": "Medical Fitness Certificate" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Submit Online Application",
      "text": "Visit the JKKN admissions portal and fill out the online application form with your personal details, academic qualifications, and preferred B.Sc Allied Health Sciences program. Upload required documents including 10+2 mark sheet, transfer certificate, and passport-size photographs.",
      "url": "https://www.jkkn.ai/apply/jkkn-admission-2026"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Document Verification",
      "text": "Submit original documents for verification either online or in-person at the JKKN campus. The admissions team will verify your 10+2 marks, eligibility criteria (minimum 50% aggregate, 40% for SC/ST, 45% for OBC), and age requirement (17-25 years).",
      "url": "https://ahs.jkkn.ac.in/#admissions"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Complete Fee Payment and Enrollment",
      "text": "After successful document verification, complete the fee payment through the admissions portal or at the campus office. Receive your admission confirmation letter and begin your journey towards a career in Allied Health Sciences at JKKN.",
      "url": "https://www.jkkn.ai/apply/jkkn-admission-2026"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // Derived from the answers the page renders, so the schema cannot declare text
  // the visitor never sees.
  "mainEntity": HOME_FAQS.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": nodeText(f.answer) },
  })),
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "JKKN College of Allied Health Sciences — Best Allied Health Sciences College in Tamil Nadu",
  "url": "https://ahs.jkkn.ac.in/",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  },
  "datePublished": "2024-01-01",
  "dateModified": "2026-03-28"
};

const courses = [
  { name: "B.Sc Cardiac Technology", slug: "cardiac-technology", description: "Specialized undergraduate program in cardiovascular diagnostics covering ECG interpretation, echocardiography, cardiac catheterization, and pacemaker technology with hands-on clinical training at partner hospitals.", occupation: "Cardiac Technologist", price: "170000" },
  { name: "B.Sc Radiology & Imaging Technology", slug: "radiology-imaging-technology", description: "Comprehensive program training learners in diagnostic imaging including X-ray, CT scan, MRI, ultrasound, and interventional radiology with clinical rotations at multi-specialty hospitals.", occupation: "Radiographer / Imaging Technologist", price: "130000" },
  { name: "B.Sc Dialysis Technology", slug: "dialysis-technology", description: "Focused program on renal care and dialysis procedures including hemodialysis, peritoneal dialysis, and continuous renal replacement therapy with practical training at nephrology centers.", occupation: "Dialysis Technician", price: "110000" },
  { name: "B.Sc Operation Theatre & Anaesthesia Technology", slug: "operation-theatre-anaesthesia", description: "Program covering surgical assistance, anaesthesia administration, OT management, sterilization protocols, and post-operative care with extensive operating theatre clinical training.", occupation: "OT & Anaesthesia Technologist", price: "170000" },
  { name: "B.Sc Respiratory Therapy", slug: "respiratory-therapy", description: "Specialized training in respiratory care including ventilator management, pulmonary function testing, oxygen therapy, and cardiopulmonary rehabilitation at ICU and respiratory care units.", occupation: "Respiratory Therapist", price: "110000" },
  { name: "B.Sc Physician Assistant", slug: "physician-assistant", description: "Comprehensive clinical training program preparing graduates to assist physicians in patient examination, diagnosis, treatment planning, and emergency care across medical specialties.", occupation: "Physician Assistant", price: "130000" },
  { name: "B.Sc Critical Care Technology", slug: "critical-care-technology", description: "Advanced program focused on intensive care unit management, multi-organ monitoring, life support systems, and critical patient care with clinical training at ICU facilities.", occupation: "Critical Care Technologist", price: "110000" },
  { name: "B.Sc Medical Record Science", slug: "medical-record-science", description: "Program in health information management covering medical coding, hospital records administration, health informatics, and data analytics for healthcare facilities.", occupation: "Medical Records Officer", price: "60000" },
  { name: "B.Sc Accident & Emergency Care Technology", slug: "accident-emergency-care", description: "Training in emergency medicine, trauma management, triage protocols, first response techniques, and pre-hospital care with clinical exposure at emergency departments.", occupation: "Emergency Care Technologist", price: "110000" },
];

const courseGraphSchema = {
  "@context": "https://schema.org",
  "@graph": courses.map(c => ({
    "@type": "Course",
    "name": c.name,
    "description": c.description,
    "provider": { "@id": "https://ahs.jkkn.ac.in/#organization" },
    "url": `https://ahs.jkkn.ac.in/${c.slug}`,
    "timeRequired": "P4Y",
    "educationalCredentialAwarded": c.name,
    "occupationalCredentialAwarded": c.occupation,
    "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "In-Person", "startDate": "2026-08-01" },
    "offers": { "@type": "Offer", "category": "Tuition", "price": c.price, "priceCurrency": "INR", "priceValidUntil": "2027-03-31", "availability": "https://schema.org/InStock" }
  }))
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <AdmissionPopup />
      <ScrollToSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseGraphSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SnippetBlock />
        <Programs />
        <WhyChoose />
        <CareerPaths />
        <Facilities />
        <HomeEvents />
        <AdmissionJourney />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
