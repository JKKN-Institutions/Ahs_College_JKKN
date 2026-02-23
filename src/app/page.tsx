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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Allied Health Sciences and what careers does it lead to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Allied Health Sciences encompasses healthcare professions that support patient diagnosis, treatment, and recovery using specialized medical technologies. At JKKN, our 9 B.Sc programs prepare graduates for careers as Cardiac Technologists, Radiology Technicians, Dialysis Technologists, OT and Anaesthesia Technicians, Respiratory Therapists, Physician Assistants, Critical Care Technologists, Medical Record Scientists, and Emergency Care Technologists across hospitals, diagnostic centers, and healthcare institutions."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility for B.Sc. Allied Health Sciences admission at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have passed 10+2 or equivalent from a recognized board with Physics, Chemistry, and Biology or Mathematics as core subjects, with a minimum of 50% aggregate marks (40% for SC/ST/OBC categories). Candidates must be at least 17 years of age. A medical fitness certificate and conduct certificate from the last attended institution are also required."
      }
    },
    {
      "@type": "Question",
      "name": "Which university is JKKN Allied Health Sciences College affiliated with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN College of Allied Health Sciences is affiliated to The Tamil Nadu Dr. MGR Medical University, Chennai. All B.Sc Allied Health Sciences programs are UGC approved and the institution holds NAAC A+ Accreditation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fee structure for B.Sc. Allied Health Sciences programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For the current fee structure of B.Sc Allied Health Sciences programs, please contact the JKKN admissions office at +91 9345855001 or email alliedhealth@jkkn.ac.in. You can also apply online through the admissions portal at admission.jkkn.ac.in."
      }
    },
    {
      "@type": "Question",
      "name": "What is the placement record and average salary after B.Sc. AHS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN AHS maintains a 95% placement rate with 20+ recruiting hospital partners. The highest package offered is 7.5 LPA and the average package is 3.2 LPA. Top recruiters include Apollo Hospitals, MIOT International, Fortis Healthcare, Manipal Hospitals, Columbia Asia, Narayana Health, Kauvery Hospital, and GEM Hospital."
      }
    },
    {
      "@type": "Question",
      "name": "Does JKKN provide hospital training and internship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All B.Sc Allied Health Sciences programs at JKKN include over 2,000 clinical training hours with 25+ partner hospitals, including a 500+ bed multi-specialty teaching hospital. The program structure is 3 years of academic study followed by 1 year of mandatory clinical internship."
      }
    },
    {
      "@type": "Question",
      "name": "What laboratory facilities are available at JKKN AHS College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN AHS features advanced laboratories including a Clinical Biochemistry Lab with automated analyzers, Microbiology and Pathology Lab with culture and histopathology equipment, program-specific training labs for each specialization, and a digital library with 5,000+ medical books, e-journals, and online databases."
      }
    },
    {
      "@type": "Question",
      "name": "Are hostel facilities available for AHS students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. JKKN provides separate hostel facilities for boys and girls with mess, Wi-Fi, gymnasium, and 24/7 security. College bus transport is available covering routes across Namakkal, Salem, Erode, and Tiruppur."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue higher studies after B.Sc. Allied Health Sciences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. After completing B.Sc Allied Health Sciences, graduates can pursue M.Sc in Allied Health Sciences in their respective specializations, MBA in Hospital Administration, or other postgraduate programs in both clinical and healthcare management fields."
      }
    },
    {
      "@type": "Question",
      "name": "What makes JKKN different from other Allied Health Sciences colleges?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN stands apart with over 70 years of educational legacy, NAAC A+ accreditation, affiliation to Tamil Nadu Dr. MGR Medical University, a 500+ bed multi-specialty teaching hospital for hands-on clinical training, 9 specialized B.Sc programs covering the full spectrum of allied health, 2,000+ clinical training hours, a 95% placement rate with leading hospital chains, and a dedicated Career Guidance Incubation Cell."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
