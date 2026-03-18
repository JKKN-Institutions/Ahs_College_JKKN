"use client";

import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { Programs } from "@/components/sections/Programs";

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

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
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
      "url": "https://admission.jkkn.ac.in/"
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
      "url": "https://admission.jkkn.ac.in/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Allied Health Sciences and what careers does it lead to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Allied Health Sciences encompasses healthcare professions that support, diagnose, and treat patients alongside physicians and nurses. It includes Medical Lab Technology, Optometry, Cardiac Technology, Radiology, Dialysis Technology, and more. Careers include Lab Technician, Optometrist, Cardiac Technologist, Radiographer, Dialysis Technician, Respiratory Therapist, and Physician Assistant. These professionals work in hospitals, diagnostic centers, research labs, and can also pursue higher studies or international opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility for B.Sc. Allied Health Sciences admission at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligibility requires completion of 10+2 with Physics, Chemistry, and Biology (PCB) with minimum 50% marks (40% for SC/ST, 45% for OBC). Age should be 17-25 years as on 31st December of the admission year. NEET is not mandatory. Both Indian nationals and NRI candidates are eligible. Admission is through merit-based selection and counseling."
      }
    },
    {
      "@type": "Question",
      "name": "Which university is JKKN Allied Health Sciences College affiliated with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "J.K.K. Nattraja College of Allied Health Sciences is affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is approved by the Government of Tamil Nadu Directorate of Medical Education and follows the curriculum prescribed by the university. All degrees are recognized nationally and internationally."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fee structure for B.Sc. Allied Health Sciences programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc. Allied Health Sciences fees at JKKN range from ₹75,000 to ₹1,25,000 per year depending on the program. This includes tuition, laboratory fees, and hospital training components. Scholarships are available for meritorious and economically disadvantaged Learners covering up to 50% of fees. Payment can be made in installments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the placement record and average salary after B.Sc. AHS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Allied Health Sciences College has 95%+ placement rate with 100+ recruiting partners including Apollo, MIOT, Fortis, Manipal, SRL, Thyrocare, and Dr. Lal PathLabs. The average package is ₹3.2 LPA with highest packages reaching ₹7.5 LPA. International placement opportunities are also available in UAE, Saudi Arabia, UK, and Australia."
      }
    },
    {
      "@type": "Question",
      "name": "Does JKKN provide hospital training and internship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Allied Health Sciences programs include mandatory hospital internship of 6-12 months. JKKN has partnerships with 50+ hospitals including Apollo, MIOT International, Fortis, Manipal, Columbia Asia, and Narayana Health. Learners gain hands-on clinical experience working with real patients under expert supervision."
      }
    },
    {
      "@type": "Question",
      "name": "What laboratory facilities are available at JKKN AHS College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN features state-of-the-art laboratories including Clinical Biochemistry Lab with automated analyzers, Microbiology & Pathology Lab, Hematology Lab, Cardiac Catheterization Simulator, Diagnostic Imaging Center with X-ray and CT simulators, Optometry Clinic with slit lamps and OCT, Dialysis Training Unit, and Digital Library with 10,000+ medical books."
      }
    },
    {
      "@type": "Question",
      "name": "Are hostel facilities available for AHS Learners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, separate hostel facilities are available for both men and women with modern amenities including furnished rooms with attached bathrooms, 24/7 security with CCTV, mess facilities with nutritious vegetarian and non-vegetarian options, Wi-Fi connectivity, recreation areas, laundry services, gymnasium, and indoor games within the JKKN campus."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher studies after B.Sc. Allied Health Sciences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, after B.Sc. Allied Health Sciences, you can pursue M.Sc. in your specialization (MLT, Optometry, Cardiac Technology, etc.), MBA in Healthcare Management, MPH (Master of Public Health), specialization courses in specific diagnostic techniques, or research-oriented programs leading to PhD. Many of our alumni have successfully transitioned to teaching roles as Learning Facilitators."
      }
    },
    {
      "@type": "Question",
      "name": "What makes JKKN different from other Allied Health Sciences colleges?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN stands apart with its 70+ Year Legacy of educational excellence, state-of-the-art laboratories matching hospital standards, partnerships with 50+ leading hospitals for clinical training, experienced Learning Facilitators with industry expertise, 95%+ placement rate with top healthcare organizations, scholarship programs for deserving Learners, and comprehensive support from admissions through career placement."
      }
    }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "JKKN College of Allied Health Sciences — Best Allied Health Science College in Tamil Nadu",
  "url": "https://ahs.jkkn.ac.in/",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  },
  "datePublished": "2024-01-01",
  "dateModified": "2026-03-18"
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
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Programs />
        <WhyChoose />
        <CareerPaths />
        <Facilities />
        <AdmissionJourney />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
