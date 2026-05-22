/**
 * Course-wise pillar blog post metadata.
 * One pillar SEO + awareness post per course (9 total).
 * Lives at /course-blog/[slug]. Content components in src/app/course-blog/_content/{slug}.tsx
 */

export type CourseBlogFAQ = { q: string; a: string };

export type CourseBlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  courseSlug: string;
  courseName: string;
  category: string;
  publishedDate: string;
  modifiedDate: string;
  readTimeMinutes: number;
  author: string;
  keywords: string[];
  tableOfContents: { id: string; label: string }[];
  faqs: CourseBlogFAQ[];
};

export const courseBlogPosts: CourseBlogPost[] = [
  {
    slug: "scope-of-cardiac-technology-in-india",
    title: "Scope of Cardiac Care Technology in India: Career, Salary & Future (2026)",
    metaTitle: "Scope of Cardiac Care Technology in India 2026 — Salary, Career & Jobs",
    metaDescription:
      "Complete guide to the scope of BSc Cardiac Care Technology in India — career paths, salary, top hospitals, day in the life, and global opportunities for cardiac technologists.",
    excerpt:
      "India faces a cardiac care crisis with 4.77 crore CVD patients. Here's why cardiac technologists are in record demand — and what your career, salary, and growth path look like.",
    heroImage: "/cardiac-technology-hero.png",
    heroImageAlt: "Cardiac technologist operating cath lab equipment at JKKN College of Allied Health Sciences",
    courseSlug: "cardiac-technology",
    courseName: "B.Sc Cardiac Care Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 11,
    author: "JKKN AHS Academic Team",
    keywords: [
      "scope of cardiac technology in India",
      "cardiac care technology career",
      "BSc cardiac technology salary",
      "cardiac technologist jobs",
      "cardiac care technology future",
      "cardiac technologist scope",
    ],
    tableOfContents: [
      { id: "industry", label: "Why Cardiac Care Matters in 2026" },
      { id: "day-in-life", label: "Day in the Life of a Cardiac Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "Salary Outlook in India" },
      { id: "skills", label: "Skills & Certifications That Multiply Your Value" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is cardiac care technology a good career in India?",
        a: "Yes. With over 4.77 crore cardiovascular disease patients in India and a severe shortage of trained cardiac technologists, the demand outpaces supply in every tier-1 and tier-2 city. Entry-level salaries start at ₹2.4–4.2 LPA and reach ₹8–14 LPA with 5+ years of experience.",
      },
      {
        q: "What does a cardiac technologist do?",
        a: "Cardiac technologists perform ECGs, echocardiograms, stress tests, Holter monitoring, and assist cardiologists during angiograms, angioplasties, and pacemaker implantations in the cath lab. They are central to diagnosing and treating heart disease.",
      },
      {
        q: "What is the salary of a cardiac technologist in India?",
        a: "Entry-level: ₹2.4–4.2 LPA in tier-1 hospitals. Mid-level (3–5 years): ₹5–8 LPA. Senior cath lab technologists with 8+ years and cardiology fellowship certifications earn ₹10–18 LPA. Gulf and UK roles can pay 2–3× Indian salaries.",
      },
      {
        q: "Which hospitals hire BSc Cardiac Technology graduates?",
        a: "Apollo Hospitals, Fortis, Medanta, Narayana Health, MIOT International, KMCH, Manipal Hospitals, Christian Medical College Vellore, AIIMS, and government cardiac centres regularly recruit cardiac technology graduates across India.",
      },
      {
        q: "Can I work abroad with a BSc in Cardiac Care Technology?",
        a: "Yes. UK (after IELTS + NHS registration), Gulf countries (DHA/HAAD/Prometric exams), Australia, and Canada hire Indian-trained cardiac technologists. Pay is typically 2.5–4× Indian salaries depending on country and experience.",
      },
    ],
  },
  {
    slug: "future-of-dialysis-technology-careers",
    title: "Future of Dialysis Technology in India: Why 2026 Is the Best Time to Start",
    metaTitle: "Future of Dialysis Technology in India 2026 — Career, Salary & Scope",
    metaDescription:
      "India's dialysis demand is exploding with 2.2 lakh new ESRD cases yearly. Discover dialysis technologist career paths, salary, skills, and global jobs.",
    excerpt:
      "Over 2.2 lakh Indians develop end-stage kidney disease every year, but only 30% receive dialysis. The math makes dialysis technology one of the safest healthcare careers of this decade.",
    heroImage: "/dialysis-technology-hero.png",
    heroImageAlt: "Dialysis technologist operating hemodialysis machine at JKKN College",
    courseSlug: "dialysis-technology",
    courseName: "B.Sc Renal Dialysis Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 10,
    author: "JKKN AHS Academic Team",
    keywords: [
      "future of dialysis technology",
      "dialysis technologist career India",
      "BSc dialysis technology salary",
      "renal dialysis jobs",
      "dialysis technician scope",
    ],
    tableOfContents: [
      { id: "industry", label: "Why Dialysis Demand Is Exploding" },
      { id: "day-in-life", label: "Day in the Life of a Dialysis Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "Salary Outlook in India" },
      { id: "skills", label: "Skills & Certifications That Multiply Your Value" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is dialysis technology a good career in India?",
        a: "Yes. India has fewer than 12,000 trained dialysis technicians for over 2 lakh new patients each year. Even rural Tamil Nadu, Kerala, and Andhra Pradesh dialysis chains are short-staffed. Job security and salary growth are exceptional.",
      },
      {
        q: "What does a dialysis technologist do?",
        a: "They set up and operate hemodialysis machines, prepare patients, monitor vitals during 4-hour sessions, manage water treatment systems, troubleshoot alarms, document patient response, and assist nephrologists during peritoneal and CRRT procedures.",
      },
      {
        q: "What is the salary of a dialysis technologist?",
        a: "Entry-level: ₹2.2–3.6 LPA in private dialysis chains. Mid-level (3–5 years): ₹4.2–6.5 LPA. Senior dialysis in-charge or unit manager roles touch ₹7–11 LPA. Gulf jobs pay ₹12–22 LPA depending on country and experience.",
      },
      {
        q: "Which companies hire dialysis technologists in India?",
        a: "NephroPlus, B. Braun Avitum, DaVita, Apex Kidney Care, Fresenius Medical Care, Apollo Dialysis, Manipal Hospitals, and government hospitals under PMNDP (Pradhan Mantri National Dialysis Programme) hire actively across India.",
      },
      {
        q: "Can a dialysis technologist work abroad?",
        a: "Yes. UAE, Saudi Arabia, Qatar, Kuwait, Oman, and the UK regularly recruit dialysis technologists. You will need Prometric/DHA/HAAD or NHS-equivalent registration. Indian-trained dialysis technicians are highly preferred in the Gulf.",
      },
    ],
  },
  {
    slug: "radiology-imaging-technology-career-guide",
    title: "Radiology & Imaging Technology Career Guide India 2026 — Salary, Scope & Future",
    metaTitle: "Radiology & Imaging Technology Career Guide India 2026 — Jobs, Salary, Scope",
    metaDescription:
      "Complete career guide for BSc Radiology & Imaging Technology in India. Explore MRI, CT, PET careers, AI in radiology, salary ranges, and global opportunities.",
    excerpt:
      "India will need 65,000 additional radiology technologists by 2030. AI isn't replacing them — it's multiplying their productivity. Here's what your career, salary, and skills should look like.",
    heroImage: "/radiology-technology-hero.png",
    heroImageAlt: "Radiology technologist preparing patient for MRI scan at JKKN College",
    courseSlug: "radiology-imaging-technology",
    courseName: "B.Sc Radiology & Imaging Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 12,
    author: "JKKN AHS Academic Team",
    keywords: [
      "radiology imaging technology career",
      "BSc radiology technology salary India",
      "radiology technologist jobs",
      "MRI CT technologist career",
      "AI in radiology career impact",
    ],
    tableOfContents: [
      { id: "industry", label: "Why Radiology Is Booming in 2026" },
      { id: "day-in-life", label: "Day in the Life of a Radiology Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "Salary Outlook by City Tier" },
      { id: "skills", label: "Skills, AI Literacy & Certifications" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Will AI replace radiology technologists?",
        a: "No. AI assists radiologists in image interpretation, but technologists handle patient positioning, machine operation, contrast administration, safety, and image acquisition — none of which AI replaces. AI-literate technologists actually earn more.",
      },
      {
        q: "What is the salary of a radiology technologist in India?",
        a: "Entry-level: ₹2.8–4.5 LPA. Mid-level (3–5 years) with MRI/CT specialization: ₹5–9 LPA. Senior modality specialists (PET-CT, interventional radiology) earn ₹10–16 LPA in tier-1 hospitals.",
      },
      {
        q: "Which is the highest paying specialization in radiology technology?",
        a: "Interventional radiology technologists, PET-CT technologists, and MRI specialists earn the most in India. Cath lab cross-trained radiology technologists are also in very high demand at top corporate hospitals.",
      },
      {
        q: "Which hospitals hire radiology imaging technology graduates?",
        a: "Apollo, Fortis, Medanta, Manipal, KMCH, MIOT, Christian Medical College Vellore, AIIMS, Tata Memorial, HCG Cancer Centres, and diagnostic chains like Vijaya Diagnostic, Metropolis, SRL, and Krsnaa Diagnostics actively hire graduates.",
      },
      {
        q: "Can radiology technologists work abroad?",
        a: "Yes. Australia (AHPRA registration), UK (HCPC + NHS), Canada (CAMRT), USA (ARRT after additional qualification), and Gulf countries hire Indian-trained radiology technologists. Salaries are 3–5× higher than India.",
      },
    ],
  },
  {
    slug: "operation-theatre-anaesthesia-technologist-roadmap",
    title: "Operation Theatre & Anaesthesia Technologist Career Roadmap India 2026",
    metaTitle: "OT & Anaesthesia Technologist Career Roadmap India 2026 — Salary & Scope",
    metaDescription:
      "Complete career roadmap for BSc Operation Theatre & Anaesthesia Technology in India. Salary, day-in-life, specializations, and global opportunities.",
    excerpt:
      "India performs 25 million surgeries every year and is short of 80,000 OT technologists. Here's what the career, daily work, salary, and growth path look like.",
    heroImage: "/allied-health-science-hero.png",
    heroImageAlt: "Operation theatre technologist preparing surgical instruments at JKKN College",
    courseSlug: "operation-theatre-anaesthesia",
    courseName: "B.Sc Operation Theatre & Anaesthesia Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 11,
    author: "JKKN AHS Academic Team",
    keywords: [
      "operation theatre technology career",
      "anaesthesia technologist salary India",
      "BSc OT technology jobs",
      "operation theatre technician roadmap",
      "anaesthesia tech scope",
    ],
    tableOfContents: [
      { id: "industry", label: "Surgical Volume & Why You're Needed" },
      { id: "day-in-life", label: "Day in the Life of an OT Technologist" },
      { id: "career-paths", label: "OT Tech vs Anaesthesia Tech: Career Splits" },
      { id: "salary", label: "Salary Outlook in India" },
      { id: "skills", label: "Skills & Certifications That Multiply Your Value" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "What is the scope of operation theatre technology in India?",
        a: "Excellent. India performs 25 million+ surgeries yearly and every multi-specialty hospital, day-care surgical centre, and IVF clinic needs OT technologists. The shortage is acute in tier-2 and tier-3 cities, pushing salaries upward.",
      },
      {
        q: "What is the difference between OT technologist and anaesthesia technologist?",
        a: "OT technologists manage sterile zone, surgical instruments, equipment setup, and assist surgeons. Anaesthesia technologists assist the anaesthesiologist with airway equipment, monitor patient vitals, drug preparation, and recovery support. JKKN's combined BSc covers both.",
      },
      {
        q: "What is the salary of an OT technologist in India?",
        a: "Entry-level: ₹2.4–4 LPA. Mid-level (3–5 years): ₹4.5–7.5 LPA. Senior OT in-charge or anaesthesia tech specialists: ₹8–14 LPA in tier-1 corporate hospitals. Gulf and UK roles pay 2–3× more.",
      },
      {
        q: "Which hospitals hire OT and anaesthesia technologists?",
        a: "Apollo, Fortis, Medanta, Narayana Health, MIOT, KMCH, Manipal, Yashoda, Kauvery, Christian Medical College Vellore, AIIMS, and all major day-care surgery centres, IVF clinics, and government medical colleges recruit graduates.",
      },
      {
        q: "Can OT technologists work abroad?",
        a: "Yes. Gulf countries, UK, Ireland, and Australia regularly recruit OT and anaesthesia technologists. You will need country-specific licensure (DHA/HAAD/Prometric/NHS). Pay is typically 2.5–4× Indian salaries.",
      },
    ],
  },
  {
    slug: "respiratory-therapy-scope-and-salary-india",
    title: "Respiratory Therapy Scope, Salary & Future in India (2026 Complete Guide)",
    metaTitle: "Respiratory Therapy Scope & Salary India 2026 — Career, Jobs, Future",
    metaDescription:
      "Post-COVID demand for respiratory therapists has tripled. Explore the career scope, salary, specializations, and US/Canada licensure paths for BSc Respiratory Therapy.",
    excerpt:
      "Post-COVID, India added 1.5 lakh new ICU ventilator beds. The country has fewer than 8,000 trained respiratory therapists. The math makes this one of the most undersupplied healthcare careers.",
    heroImage: "/images/departments/respiratory-therapy-hero.png",
    heroImageAlt: "Respiratory therapist setting up mechanical ventilator at JKKN College",
    courseSlug: "respiratory-therapy",
    courseName: "B.Sc Respiratory Therapy",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 11,
    author: "JKKN AHS Academic Team",
    keywords: [
      "respiratory therapy scope India",
      "respiratory therapist salary",
      "BSc respiratory therapy career",
      "respiratory therapy jobs",
      "respiratory therapist US Canada",
    ],
    tableOfContents: [
      { id: "industry", label: "Post-COVID Demand for Respiratory Therapy" },
      { id: "day-in-life", label: "Day in the Life of a Respiratory Therapist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "Salary Outlook in India" },
      { id: "skills", label: "Skills & Certifications That Multiply Your Value" },
      { id: "global", label: "US, Canada & Gulf Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is respiratory therapy a good career in India?",
        a: "Yes. India's ICU and ventilator capacity has doubled post-COVID, but trained respiratory therapists number under 8,000 nationwide. Demand far exceeds supply, salaries are rising, and global mobility (US/Canada) is exceptional.",
      },
      {
        q: "What does a respiratory therapist do?",
        a: "They manage mechanical ventilators, perform arterial blood gas analysis, manage airway in ICU and emergency, conduct pulmonary function tests, deliver nebulization and oxygen therapy, and support patients in COPD, asthma, and ARDS management.",
      },
      {
        q: "What is the salary of a respiratory therapist?",
        a: "Entry-level: ₹2.8–4.5 LPA. Mid-level (3–5 years): ₹5–8 LPA. Senior ICU respiratory therapists or sleep lab specialists: ₹8–14 LPA. US-licensed (NBRC RRT) therapists earn $65,000–95,000.",
      },
      {
        q: "Can I work as a respiratory therapist in the US?",
        a: "Yes. After your BSc Respiratory Therapy and clearing the NBRC (CRT + RRT) exams, you can practice in the US. Many Indian graduates pursue this pathway. Canada (CSRT registration) and Gulf countries are also strong options.",
      },
      {
        q: "Which hospitals hire respiratory therapists in India?",
        a: "Apollo, Fortis, Medanta, Manipal, MIOT, KMCH, AIIMS, Christian Medical College Vellore, AMRI, and every major multi-specialty hospital with a critical care unit recruits respiratory therapists.",
      },
    ],
  },
  {
    slug: "physician-assistant-career-india",
    title: "Physician Assistant Career in India 2026 — Scope, Salary & Real Opportunities",
    metaTitle: "Physician Assistant Career India 2026 — Salary, Scope, Jobs Guide",
    metaDescription:
      "Is BSc Physician Assistant a good career in India? Explore real scope, salary, day-in-life, hospital adoption, and how PA compares to nursing and MBBS.",
    excerpt:
      "Indian hospitals are quietly hiring 6,000+ physician assistants every year. The role is growing because hospitals can't find enough specialist doctors — and PAs fill a critical gap.",
    heroImage: "/allied-health-science-hero.png",
    heroImageAlt: "Physician assistant student in clinical training at JKKN College",
    courseSlug: "physician-assistant",
    courseName: "B.Sc Physician Assistant",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 11,
    author: "JKKN AHS Academic Team",
    keywords: [
      "physician assistant career India",
      "BSc PA salary India",
      "physician assistant scope",
      "PA vs nursing vs MBBS",
      "physician assistant jobs",
    ],
    tableOfContents: [
      { id: "industry", label: "Why PA Role Is Growing in India" },
      { id: "day-in-life", label: "Day in the Life of a Physician Assistant" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "Salary Outlook in India" },
      { id: "skills", label: "Skills & Certifications That Multiply Your Value" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is physician assistant a good career in India?",
        a: "Yes — especially in corporate hospitals. Apollo, Fortis, Medanta, Manipal, and KMCH actively hire PAs for cardiology, nephrology, oncology, and surgical units. Salaries are competitive and the role is becoming formally recognized.",
      },
      {
        q: "What is the difference between a physician assistant and a nurse?",
        a: "Nurses focus on patient care, monitoring, and medication administration. PAs assist doctors directly in clinical decision-making, history-taking, examinations, procedure assistance, and patient counseling. PAs work as the doctor's extension across OPD and inpatient settings.",
      },
      {
        q: "What is the salary of a physician assistant in India?",
        a: "Entry-level: ₹2.5–4.2 LPA. Mid-level (3–5 years): ₹5–8 LPA. Senior PAs attached to senior consultants in cardiology, oncology, transplant medicine: ₹8–15 LPA. International PA roles pay considerably more.",
      },
      {
        q: "Which hospitals hire physician assistants?",
        a: "Apollo Hospitals (the largest PA employer in India), Fortis, Medanta, Manipal, KMCH, MIOT, Christian Medical College Vellore, Yashoda, Care Hospitals, and most super-specialty hospitals with cardiology, oncology, and transplant departments.",
      },
      {
        q: "Should I do PA or MBBS?",
        a: "Different goals. MBBS is 5.5 years + PG and leads to independent practice. PA is 4 years + 1 year internship and you work alongside doctors. PA suits those who want quicker entry to healthcare without competitive NEET pressure but still want clinical exposure.",
      },
    ],
  },
  {
    slug: "critical-care-technology-future-india",
    title: "Future of Critical Care Technology in India: Career, Salary & Scope (2026)",
    metaTitle: "Critical Care Technology Career India 2026 — ICU Tech Salary, Scope & Future",
    metaDescription:
      "India added 1.5 lakh ICU beds post-COVID but lacks trained critical care technologists. Explore career, salary, specializations, and certifications.",
    excerpt:
      "Every 100 ICU beds need 8–10 trained critical care technologists. India has fewer than 10,000 of them for 95,000+ ICU beds. The gap defines opportunity.",
    heroImage: "/critical-care-technology-hero.png",
    heroImageAlt: "Critical care technologist managing ICU monitors at JKKN College",
    courseSlug: "critical-care-technology",
    courseName: "B.Sc Critical Care Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 11,
    author: "JKKN AHS Academic Team",
    keywords: [
      "critical care technology future India",
      "ICU technologist salary",
      "critical care tech career",
      "BSc critical care jobs",
      "ICU tech scope India",
    ],
    tableOfContents: [
      { id: "industry", label: "ICU Expansion & The Talent Shortage" },
      { id: "day-in-life", label: "Day in the Life of a Critical Care Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "Salary Outlook in India" },
      { id: "skills", label: "Skills & Certifications That Multiply Your Value" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "What is the scope of critical care technology in India?",
        a: "Excellent. India has 95,000+ ICU beds and fewer than 10,000 trained critical care technologists. Every multi-specialty hospital, cardiac centre, neonatal ICU, and trauma centre actively hires graduates.",
      },
      {
        q: "What does a critical care technologist do?",
        a: "They manage ventilators, multi-parameter monitors, CRRT (continuous renal replacement therapy), defibrillators, ECMO, intra-aortic balloon pumps, and assist intensivists in code blue, intubation, and life-support procedures.",
      },
      {
        q: "What is the salary of a critical care technologist?",
        a: "Entry-level: ₹2.6–4.2 LPA. Mid-level (3–5 years): ₹5–8 LPA. Senior critical care technologists with ECMO, CRRT specialization: ₹9–15 LPA in tier-1 hospitals. Gulf and SEA hospitals pay 2–3× more.",
      },
      {
        q: "Is critical care technology different from BSc Nursing?",
        a: "Yes. Critical care technologists focus exclusively on advanced life support equipment, monitoring, and procedures in ICU/CCU. They are technical specialists, while nurses handle holistic patient care. Both roles are essential and complementary.",
      },
      {
        q: "Can I work abroad with a BSc Critical Care Technology?",
        a: "Yes. Gulf countries (Saudi, UAE, Qatar, Kuwait, Oman) actively hire critical care technologists. UK, Ireland, and Australia also recognize the qualification after additional registration. Pay is 2.5–4× Indian salaries.",
      },
    ],
  },
  {
    slug: "medical-record-science-career-india",
    title: "Medical Record Science Career in India 2026 — HIM, Coding & Remote Work",
    metaTitle: "Medical Record Science Career India 2026 — HIM Salary, Coding Jobs, Remote",
    metaDescription:
      "Medical record science offers HIM, ICD-10 coding, and remote US medical coding careers. Explore scope, salary, certifications, and global opportunities.",
    excerpt:
      "Medical coding is now a ₹4,000 crore industry in India, with US hospitals outsourcing ICD-10 work to Indian coders. BSc Medical Record Science is the entry ticket.",
    heroImage: "/medical-record-science-hero.png",
    heroImageAlt: "Medical record science student working on HIM digitization at JKKN College",
    courseSlug: "medical-record-science",
    courseName: "B.Sc Medical Record Science",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 10,
    author: "JKKN AHS Academic Team",
    keywords: [
      "medical record science career",
      "BSc medical record science salary",
      "HIM career India",
      "medical coding jobs",
      "ICD-10 coder salary",
      "US medical coding remote work",
    ],
    tableOfContents: [
      { id: "industry", label: "HIM Digitization & The Coding Boom" },
      { id: "day-in-life", label: "Day in the Life of a Medical Record Officer" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "Salary Outlook in India" },
      { id: "skills", label: "Certifications That 3x Your Salary" },
      { id: "global", label: "Remote US Medical Coding Careers" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is medical record science a good career in India?",
        a: "Yes. The HIM industry is growing at 18% CAGR, and US-bound medical coding is a ₹4,000 crore export segment. Graduates can work in hospitals, insurance, HIM consulting, or remote-coding for US hospitals.",
      },
      {
        q: "What is medical coding and how does it pay?",
        a: "Medical coders translate clinical documentation into ICD-10, CPT, and HCPCS codes used for insurance claims. CPC-certified Indian coders working for US hospitals earn ₹4–10 LPA, often fully remote.",
      },
      {
        q: "What is the salary of a medical record officer in India?",
        a: "Entry-level in hospitals: ₹2–3.5 LPA. Mid-level HIM executive (3–5 years): ₹4–7 LPA. CPC-certified medical coders: ₹4–10 LPA. Senior HIM managers in corporate hospitals: ₹8–14 LPA.",
      },
      {
        q: "Can I work from home as a medical record science graduate?",
        a: "Yes. Once you earn CPC (AAPC) or CCS (AHIMA) certification, US-bound medical coding companies like Optum, Cognizant, Omega Healthcare, Access Healthcare, R1 RCM, and Sutherland hire fully remote coders.",
      },
      {
        q: "Which companies hire medical record science graduates?",
        a: "All Apollo, Fortis, Manipal, MIOT, KMCH, AIIMS, and government hospitals hire MRO/HIM staff. Medical coding companies: Optum, Cognizant, Omega Healthcare, Access Healthcare, R1 RCM, Sutherland, Genpact, and Wipro HealthPlume.",
      },
    ],
  },
  {
    slug: "accident-emergency-care-technician-guide",
    title: "Accident & Emergency Care Technology Career Guide India 2026",
    metaTitle: "Accident & Emergency Care Technology Career India 2026 — Salary, Scope, Jobs",
    metaDescription:
      "India's trauma care and ambulance services are expanding fast. Discover career scope, salary, EMT certifications, and global opportunities for BSc Accident & Emergency Care.",
    excerpt:
      "India has 4.5 lakh road accident victims a year but fewer than 15,000 trained emergency care technologists. The Modi government's trauma care expansion is creating thousands of new roles.",
    heroImage: "/accident-emergency-care-hero.png",
    heroImageAlt: "Emergency care technologist responding to trauma case at JKKN College",
    courseSlug: "accident-emergency-care",
    courseName: "B.Sc Accident & Emergency Care Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-05-16",
    readTimeMinutes: 10,
    author: "JKKN AHS Academic Team",
    keywords: [
      "accident emergency care career India",
      "emergency care technologist salary",
      "BSc emergency care scope",
      "EMT certification India",
      "trauma care technician jobs",
    ],
    tableOfContents: [
      { id: "industry", label: "Trauma Care Expansion in India" },
      { id: "day-in-life", label: "Day in the Life of an Emergency Care Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "Salary Outlook in India" },
      { id: "skills", label: "Skills & Certifications That Multiply Your Value" },
      { id: "global", label: "Global EMT & Pre-Hospital Care Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "What is the scope of accident and emergency care technology in India?",
        a: "Excellent. India has 4.5 lakh road accident victims yearly, expanding 108 ambulance services, growing trauma centres under PMSSY, and corporate hospitals all hiring emergency care technologists.",
      },
      {
        q: "What does an emergency care technologist do?",
        a: "They handle triage, manage trauma resuscitation, perform BLS/ACLS, manage airway, control bleeding, splint fractures, operate defibrillators, support emergency physicians, and serve as advanced EMTs on ambulances.",
      },
      {
        q: "What is the salary of an emergency care technologist in India?",
        a: "Entry-level: ₹2.4–4 LPA. Mid-level (3–5 years): ₹4.5–7 LPA. Senior emergency care technologists in trauma centres or air ambulance services: ₹7–13 LPA. Gulf and Saudi roles pay 2.5–4× higher.",
      },
      {
        q: "Where can I work after BSc Accident & Emergency Care?",
        a: "Trauma centres (Apollo, Medanta, AIIMS, Christian Medical College Vellore), 108 ambulance services, corporate emergency departments, disaster response teams, oil-rig medical services, air ambulance companies, and ER chains like CARE Hospitals.",
      },
      {
        q: "Can emergency care technologists work abroad?",
        a: "Yes. Gulf countries hire Indian EMTs for hospital emergency departments and oil-field medical services. UK, Australia, and Canada have structured EMT-paramedic pathways after additional certifications.",
      },
    ],
  },
];

export const getAllCourseBlogSlugs = (): string[] =>
  courseBlogPosts.map((p) => p.slug);

export const getCourseBlogPostBySlug = (
  slug: string,
): CourseBlogPost | undefined => courseBlogPosts.find((p) => p.slug === slug);

export const getRelatedCourseBlogPosts = (
  currentSlug: string,
  limit = 3,
): CourseBlogPost[] =>
  courseBlogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
