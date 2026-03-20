import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Admission 2026-27 | JKKN Allied Health Sciences College Tamil Nadu",
  description: "Apply for BSc Allied Health Sciences admission 2026-27 at JKKN College, Tamil Nadu. 9 programs, 75K-1.25L fees, 95% placement, NAAC A+. Apply now!",
  path: "/admission",
  keywords: [
    "allied health science admission 2026",
    "bsc allied health science admission tamilnadu",
    "jkkn college admission",
    "allied health science fees tamilnadu",
    "medical college admission without neet tamilnadu",
    "bsc allied health science colleges in tamilnadu",
    "allied health science course fees",
    "jkkn allied health sciences admission",
    "paramedical course admission tamilnadu 2026",
    "bsc cardiac technology admission",
    "bsc radiology admission tamilnadu",
    "bsc dialysis technology admission"
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Admission 2026-27", "item": "https://ahs.jkkn.ac.in/admission" }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for BSc Allied Health Sciences at JKKN College Tamil Nadu",
  "description": "Step-by-step guide to apply for BSc Allied Health Sciences admission 2026-27 at JKKN College, Komarapalayam, Tamil Nadu.",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "75000"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Check Eligibility",
      "text": "Verify you have completed Plus Two with Physics, Chemistry, and Biology with minimum 50 percent marks. SC/ST candidates need 40 percent and OBC candidates need 45 percent.",
      "url": "https://ahs.jkkn.ac.in/admission#eligibility"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Choose Your Program",
      "text": "Select from 9 BSc Allied Health Sciences programs including Cardiac Technology, Dialysis Technology, Radiology, Operation Theatre, Respiratory Therapy, Physician Assistant, Critical Care, Medical Record Science, and Accident Emergency Care.",
      "url": "https://ahs.jkkn.ac.in/admission#programs"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Apply Online",
      "text": "Complete the online application form at admission.jkkn.ac.in with personal details, academic records, and program preference.",
      "url": "https://admission.jkkn.ac.in/"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Upload Documents",
      "text": "Upload scanned copies of 10th and 12th marksheets, transfer certificate, community certificate, passport photos, and Aadhaar card.",
      "url": "https://ahs.jkkn.ac.in/admission#documents"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Attend Counseling",
      "text": "Attend the admission counseling session where original documents are verified and seat is allotted based on merit.",
      "url": "https://ahs.jkkn.ac.in/admission#process"
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Complete Fee Payment",
      "text": "Pay the admission fee ranging from 75000 to 125000 rupees per year depending on the program. Installment options and scholarship assistance are available.",
      "url": "https://ahs.jkkn.ac.in/admission#programs"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the eligibility criteria for BSc Allied Health Sciences admission at JKKN College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have completed Plus Two or equivalent with Physics, Chemistry, and Biology. Minimum marks required are 50 percent for General category, 45 percent for OBC, and 40 percent for SC/ST candidates. Age should be 17 years or above. NEET score is not mandatory."
      }
    },
    {
      "@type": "Question",
      "name": "Is NEET required for BSc Allied Health Sciences admission in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, NEET is not required for BSc Allied Health Sciences admission at JKKN College. Admission is based on Plus Two marks and merit-based counseling. This makes Allied Health Sciences an excellent alternative for students who did not appear for or qualify NEET."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fee structure for BSc Allied Health Sciences programs at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Annual fees for BSc Allied Health Sciences programs at JKKN range from 75000 to 125000 rupees depending on the specialization. Fee payment can be made in installments. Government scholarships for BC, MBC, SC, and ST students are facilitated through the college."
      }
    },
    {
      "@type": "Question",
      "name": "How many BSc Allied Health Sciences programs does JKKN College offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN College of Allied Health Sciences offers 9 BSc programs: Cardiac Technology, Dialysis Technology, Radiology and Imaging Technology, Operation Theatre and Anaesthesia Technology, Respiratory Therapy, Physician Assistant, Critical Care Technology, Medical Record Science, and Accident and Emergency Care Technology."
      }
    },
    {
      "@type": "Question",
      "name": "What is the duration of BSc Allied Health Sciences course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BSc Allied Health Sciences is a 4-year program consisting of 3 years of academic study and 1 year of mandatory clinical internship. The program is affiliated to The Tamil Nadu Dr. MGR Medical University, Chennai."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for Allied Health Sciences admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Required documents include 10th and 12th marksheets, transfer certificate, community certificate, income certificate, passport size photographs, Aadhaar card, medical fitness certificate, conduct certificate from last attended institution, and migration certificate if applicable."
      }
    },
    {
      "@type": "Question",
      "name": "Are scholarships available for Allied Health Sciences students at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN facilitates government scholarships for BC, MBC, SC, and ST category students. Additionally, JKKN offers merit-based scholarships for academic toppers and fee concessions including installment payment options and education loan assistance."
      }
    },
    {
      "@type": "Question",
      "name": "What is the placement rate after BSc Allied Health Sciences from JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Allied Health Sciences College has a 95 percent placement rate. Graduates are placed in leading hospitals like Apollo, Fortis, and MIOT with an average salary of 3.2 LPA. International opportunities are available in the UK through NHS, Saudi Arabia, UAE, and Singapore."
      }
    },
    {
      "@type": "Question",
      "name": "Can NRI students apply for Allied Health Sciences at JKKN College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NRI candidates are eligible for admission to BSc Allied Health Sciences programs at JKKN College. NRI students should have completed equivalent qualification with Physics, Chemistry, and Biology. Additional documents like passport copy and NRI certificate may be required."
      }
    },
    {
      "@type": "Question",
      "name": "How can I apply for JKKN Allied Health Sciences admission 2026-27?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply online at admission.jkkn.ac.in or visit the campus at Komarapalayam, Namakkal, Tamil Nadu. For admission enquiries, call 93458 55001 or email alliedhealth@jkkn.ac.in. Applications are open for the 2026-27 academic year."
      }
    }
  ]
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Admission 2026-27 | JKKN Allied Health Sciences College Tamil Nadu",
  "url": "https://ahs.jkkn.ac.in/admission",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", "h1", "h2"]
  }
};

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
      {children}
    </>
  );
}
