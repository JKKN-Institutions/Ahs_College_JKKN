import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { Programs } from "@/components/sections/Programs";
import { SnippetBlock } from "@/components/sections/SnippetBlock";
import { ScrollToSection } from "@/components/ScrollToSection";

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
    },
    {
      "@type": "Question",
      "name": "How much does B.Sc Allied Health Sciences cost in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Allied Health Sciences fees at JKKN range from 75,000 to 1,25,000 rupees per year covering tuition, laboratory access, and hospital training. Merit-based scholarships cover up to 50% of fees."
      }
    },
    {
      "@type": "Question",
      "name": "Is NEET required for B.Sc Allied Health Sciences admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, NEET is not mandatory for B.Sc Allied Health Sciences admission. Admission at JKKN is based on 10+2 marks in Physics, Chemistry, and Biology with minimum 50% aggregate. Selection is merit-based."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary after B.Sc Allied Health Sciences in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Allied Health Sciences graduates earn 2.5 to 7.5 LPA in India. At JKKN, the average package is 3.2 LPA with top packages reaching 7.5 LPA. International placements offer higher packages."
      }
    },
    {
      "@type": "Question",
      "name": "Which is better — B.Sc Nursing or B.Sc Allied Health Sciences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both are excellent healthcare careers. B.Sc Nursing focuses on patient care while Allied Health Sciences specializes in diagnostic technology and therapeutic procedures with more specialization options."
      }
    },
    {
      "@type": "Question",
      "name": "What are the job opportunities after Allied Health Sciences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates work as Cardiac Technologists, Radiographers, Dialysis Technicians, Respiratory Therapists, Physician Assistants, and Emergency Care Technologists at hospitals, diagnostic chains, and research labs."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://ahs.jkkn.ac.in/#organization",
  "name": "JKKN College of Allied Health Sciences",
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Priya Krishnan" },
      "reviewBody": "The practical training at JKKN prepared me thoroughly for my role at Apollo. The Learning Facilitators' real-world experience made all the difference in understanding complex procedures.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2022-06-15",
      "itemReviewed": { "@id": "https://ahs.jkkn.ac.in/#organization" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rajesh Sundaram" },
      "reviewBody": "JKKN's CCT program and clinical exposure helped me start my own eye care practice within 2 years of graduation. The foundation was exceptional.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2021-06-15",
      "itemReviewed": { "@id": "https://ahs.jkkn.ac.in/#organization" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Anitha Mohan" },
      "reviewBody": "From state-of-the-art cardiac simulation labs to hospital internship at MIOT, JKKN gave me everything I needed to become a confident cardiac technologist.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2023-06-15",
      "itemReviewed": { "@id": "https://ahs.jkkn.ac.in/#organization" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Kavitha Rajan" },
      "reviewBody": "JKKN's radiology program gave me hands-on training with CT, MRI, and X-ray equipment from day one. Within months of graduating, I was placed at Fortis Healthcare, Chennai. The clinical rotations across partner hospitals made the transition seamless.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2023-09-10",
      "itemReviewed": { "@id": "https://ahs.jkkn.ac.in/#organization" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Senthil Kumar" },
      "reviewBody": "As a parent, choosing the right college was crucial. JKKN's campus safety, hostel facilities, and 95% placement record convinced us. My daughter is now in her final year of Dialysis Technology and already has an internship offer from Kauvery Hospital.",
      "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
      "datePublished": "2024-02-20",
      "itemReviewed": { "@id": "https://ahs.jkkn.ac.in/#organization" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Mohammed Farhan" },
      "reviewBody": "JKKN prepared me for an international healthcare career. After completing my Respiratory Therapy degree, I secured a position with the NHS in the United Kingdom. The clinical training standards at JKKN matched international protocols.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2022-11-15",
      "itemReviewed": { "@id": "https://ahs.jkkn.ac.in/#organization" }
    }
  ]
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
  { name: "B.Sc Cardiac Technology", slug: "cardiac-technology", description: "Specialized undergraduate program in cardiovascular diagnostics covering ECG interpretation, echocardiography, cardiac catheterization, and pacemaker technology with hands-on clinical training at partner hospitals.", occupation: "Cardiac Technologist" },
  { name: "B.Sc Radiology & Imaging Technology", slug: "radiology-imaging-technology", description: "Comprehensive program training students in diagnostic imaging including X-ray, CT scan, MRI, ultrasound, and interventional radiology with clinical rotations at multi-specialty hospitals.", occupation: "Radiographer / Imaging Technologist" },
  { name: "B.Sc Dialysis Technology", slug: "dialysis-technology", description: "Focused program on renal care and dialysis procedures including hemodialysis, peritoneal dialysis, and continuous renal replacement therapy with practical training at nephrology centers.", occupation: "Dialysis Technician" },
  { name: "B.Sc Operation Theatre & Anaesthesia Technology", slug: "operation-theatre-anaesthesia", description: "Program covering surgical assistance, anaesthesia administration, OT management, sterilization protocols, and post-operative care with extensive operating theatre clinical training.", occupation: "OT & Anaesthesia Technologist" },
  { name: "B.Sc Respiratory Therapy", slug: "respiratory-therapy", description: "Specialized training in respiratory care including ventilator management, pulmonary function testing, oxygen therapy, and cardiopulmonary rehabilitation at ICU and respiratory care units.", occupation: "Respiratory Therapist" },
  { name: "B.Sc Physician Assistant", slug: "physician-assistant", description: "Comprehensive clinical training program preparing graduates to assist physicians in patient examination, diagnosis, treatment planning, and emergency care across medical specialties.", occupation: "Physician Assistant" },
  { name: "B.Sc Critical Care Technology", slug: "critical-care-technology", description: "Advanced program focused on intensive care unit management, multi-organ monitoring, life support systems, and critical patient care with clinical training at ICU facilities.", occupation: "Critical Care Technologist" },
  { name: "B.Sc Medical Record Science", slug: "medical-record-science", description: "Program in health information management covering medical coding, hospital records administration, health informatics, and data analytics for healthcare facilities.", occupation: "Medical Records Officer" },
  { name: "B.Sc Accident & Emergency Care Technology", slug: "accident-emergency-care", description: "Training in emergency medicine, trauma management, triage protocols, first response techniques, and pre-hospital care with clinical exposure at emergency departments.", occupation: "Emergency Care Technologist" },
];

const courseGraphSchema = {
  "@context": "https://schema.org",
  "@graph": courses.map(c => ({
    "@type": "Course",
    "name": c.name,
    "description": c.description,
    "provider": { "@type": "CollegeOrUniversity", "@id": "https://ahs.jkkn.ac.in/#organization", "name": "JKKN College of Allied Health Sciences" },
    "url": `https://ahs.jkkn.ac.in/${c.slug}`,
    "timeRequired": "P4Y",
    "educationalCredentialAwarded": c.name,
    "occupationalCredentialAwarded": c.occupation,
    "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "In-Person", "startDate": "2026-08-01" },
    "offers": { "@type": "Offer", "category": "Tuition", "price": "75000", "priceCurrency": "INR", "priceValidUntil": "2027-03-31", "availability": "https://schema.org/InStock" }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
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
