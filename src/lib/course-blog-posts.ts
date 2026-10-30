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
    title: "Scope of Cardiac Care Technology in India: Career, Pay & Future (2026)",
    metaTitle: "Cardiac Care Technology in India 2026: Scope & Careers",
    metaDescription:
      "Where a B.Sc Cardiac Care Technology degree leads — cath-lab and hospital roles, the skills employers ask for, and how to enter the field.",
    excerpt:
      "What cardiac technologists do, the career paths and skills that matter, how pay works, and the routes to work abroad.",
    heroImage: "/cardiac-technology-hero.webp",
    heroImageAlt: "Cardiac technologist operating cath lab equipment at JKKN College of Allied Health Sciences",
    courseSlug: "cardiac-technology",
    courseName: "B.Sc Cardiac Care Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Skills & Certifications" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is cardiac care technology a good career in India?",
        a: "It suits learners who want hands-on clinical work: cardiac technologists perform ECGs, echocardiograms and stress tests and assist cardiologists in the cath lab. JKKN publishes no placement or salary figure, so check current job notices for openings and pay.",
      },
      {
        q: "What does a cardiac technologist do?",
        a: "Cardiac technologists perform ECGs, echocardiograms, stress tests, Holter monitoring, and assist cardiologists during angiograms, angioplasties, and pacemaker implantations in the cath lab. They are central to diagnosing and treating heart disease.",
      },
      {
        q: "What is the salary of a cardiac technologist in India?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for cardiac technologists. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Which hospitals hire BSc Cardiac Technology graduates?",
        a: "JKKN publishes no recruiter list for its graduates. Cardiac technologists work in hospital cath labs, echo and ECG departments and cardiac centres, private and government; check each employer's current openings.",
      },
      {
        q: "Can I work abroad with a BSc in Cardiac Care Technology?",
        a: "Working abroad needs the destination country's registration or licensing exam - for example NHS registration (with IELTS) in the UK, or the DHA, HAAD or Prometric exams in the Gulf. Requirements change, so check that country's regulator before you plan.",
      },
    ],
  },
  {
    slug: "future-of-dialysis-technology-careers",
    title: "Future of Dialysis Therapy Technology in India: Why 2026 Is the Best Time to Start",
    metaTitle: "Future of Dialysis Therapy Technology in India 2026 — Career, Pay & Scope",
    metaDescription:
      "Dialysis technologist careers in India: what the work involves, career paths, how pay works, the skills and certifications that matter, and jobs abroad.",
    excerpt:
      "What dialysis technologists do on a shift, where they work, how pay works and which certifications matter.",
    heroImage: "/dialysis-technology-hero.webp",
    heroImageAlt: "Dialysis technologist operating hemodialysis machine at JKKN College",
    courseSlug: "dialysis-technology",
    courseName: "B.Sc Renal Dialysis Therapy Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "industry", label: "Dialysis in 2026" },
      { id: "day-in-life", label: "Day in the Life of a Dialysis Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Skills & Certifications" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is dialysis therapy technology a good career in India?",
        a: "Every hospital dialysis unit and stand-alone dialysis centre needs trained technologists to run its sessions. JKKN publishes no placement or salary figure, so check current job notices for openings and pay.",
      },
      {
        q: "What does a dialysis technologist do?",
        a: "They set up and operate hemodialysis machines, prepare patients, monitor vitals during 4-hour sessions, manage water treatment systems, troubleshoot alarms, document patient response, and assist nephrologists during peritoneal and CRRT procedures.",
      },
      {
        q: "What is the salary of a dialysis technologist?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for dialysis technologists. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Which companies hire dialysis technologists in India?",
        a: "JKKN publishes no recruiter list for its graduates. Dialysis technologists work in hospital dialysis units, stand-alone dialysis centres and government dialysis services such as the Pradhan Mantri National Dialysis Programme; check each employer's current openings.",
      },
      {
        q: "Can a dialysis technologist work abroad?",
        a: "Working abroad needs the destination country's registration or licensing exam - for example Prometric, DHA or HAAD in the Gulf, or NHS-equivalent registration in the UK. Requirements change, so check that country's regulator before you plan.",
      },
    ],
  },
  {
    slug: "radiology-imaging-technology-career-guide",
    title: "Medical Radiology and Imaging Technology Career Guide India 2026 — Pay, Scope & Future",
    metaTitle: "Medical Radiology and Imaging Technology Careers in India 2026",
    metaDescription:
      "Where a Bachelor of Medical Radiology and Imaging Technology (B.MRIT) leads — MRI, CT and PET roles, the skills hospitals hire for, and routes abroad.",
    excerpt:
      "What radiology technologists do, the MRI, CT and PET specialisations, the skills and certifications that matter, and how pay works.",
    heroImage: "/radiology-technology-hero.webp",
    heroImageAlt: "Radiology technologist preparing patient for MRI scan at JKKN College",
    courseSlug: "radiology-imaging-technology",
    courseName: "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "industry", label: "Radiology in 2026" },
      { id: "day-in-life", label: "Day in the Life of a Radiology Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Skills, AI Literacy & Certifications" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Will AI replace radiology technologists?",
        a: "No. AI assists radiologists in image interpretation, but technologists handle patient positioning, machine operation, contrast administration, safety, and image acquisition — none of which AI replaces.",
      },
      {
        q: "What is the salary of a radiology technologist in India?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for radiology technologists. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Which is the highest paying specialization in radiology technology?",
        a: "No official survey ranks pay by radiology specialisation, so none is stated here. MRI, CT, PET-CT and interventional radiology each need extra modality training after the degree; check current job notices for the pay offered.",
      },
      {
        q: "Which hospitals hire radiology imaging technology graduates?",
        a: "JKKN publishes no recruiter list for its graduates. Radiology technologists work in hospital imaging departments and diagnostic centres (X-ray, CT, MRI and ultrasound); check each employer's current openings.",
      },
      {
        q: "Can radiology technologists work abroad?",
        a: "Each country has its own registration: AHPRA in Australia, HCPC in the UK, CAMRT in Canada and ARRT in the USA (after additional qualification). Requirements change, so check that body before you plan.",
      },
    ],
  },
  {
    slug: "operation-theatre-anaesthesia-technologist-roadmap",
    title: "Anaesthesia and Operation Theatre Technologist Career Roadmap India 2026",
    metaTitle: "Anaesthesia & OT Technologist Career Roadmap India 2026 — Pay & Scope",
    metaDescription:
      "Complete career roadmap for B.AOTT (Anaesthesia & OT Technology) in India: how pay works, day-in-life, specializations, and global opportunities.",
    excerpt:
      "What OT and anaesthesia technologists do, how the two roles differ, the skills that matter and how pay works.",
    heroImage: "/allied-health-science-hero.webp",
    heroImageAlt: "Operation theatre technologist preparing surgical instruments at JKKN College",
    courseSlug: "operation-theatre-anaesthesia",
    courseName: "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "industry", label: "Where OT Technologists Work" },
      { id: "day-in-life", label: "Day in the Life of an OT Technologist" },
      { id: "career-paths", label: "OT Tech vs Anaesthesia Tech: Career Splits" },
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Skills & Certifications" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "What is the scope of operation theatre technology in India?",
        a: "Hospitals with operation theatres, day-care surgical centres and IVF clinics all need OT and anaesthesia technologists. JKKN publishes no placement or salary figure, so check current job notices for openings and pay.",
      },
      {
        q: "What is the difference between OT technologist and anaesthesia technologist?",
        a: "OT technologists manage sterile zone, surgical instruments, equipment setup, and assist surgeons. Anaesthesia technologists assist the anaesthesiologist with airway equipment, monitor patient vitals, drug preparation, and recovery support. JKKN's combined BSc covers both.",
      },
      {
        q: "What is the salary of an OT technologist in India?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for OT and anaesthesia technologists. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Which hospitals hire OT and anaesthesia technologists?",
        a: "JKKN publishes no recruiter list for its graduates. OT and anaesthesia technologists work in hospital operation theatres, day-care surgery centres, IVF clinics and government medical colleges; check each employer's current openings.",
      },
      {
        q: "Can OT technologists work abroad?",
        a: "Working abroad needs country-specific licensure - for example DHA, HAAD or Prometric in the Gulf, or NHS registration in the UK. Requirements change, so check that country's regulator before you plan.",
      },
    ],
  },
  {
    slug: "respiratory-therapy-scope-and-salary-india",
    title: "Respiratory Technology Scope, Pay & Future in India (2026 Complete Guide)",
    metaTitle: "Respiratory Technology Scope & Pay India 2026 — Career, Jobs, Future",
    metaDescription:
      "B.RT (Respiratory Technology) career guide: scope, pay, specializations and US/Canada licensure paths for respiratory therapists trained in India.",
    excerpt:
      "What respiratory therapists do in the ICU, the career paths and certifications, how pay works, and the US and Canada licensing routes.",
    heroImage: "/images/departments/respiratory-therapy-hero.webp",
    heroImageAlt: "Respiratory therapist setting up mechanical ventilator at JKKN College",
    courseSlug: "respiratory-therapy",
    courseName: "Bachelor of Respiratory Technology (B.RT)",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "industry", label: "Where Respiratory Therapists Work" },
      { id: "day-in-life", label: "Day in the Life of a Respiratory Therapist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Skills & Certifications" },
      { id: "global", label: "US, Canada & Gulf Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is respiratory technology (respiratory therapy) a good career in India?",
        a: "Respiratory therapists work in ICUs, emergency departments and pulmonary function labs, managing ventilators and airways. JKKN publishes no placement or salary figure, so check current job notices for openings and pay.",
      },
      {
        q: "What does a respiratory therapist do?",
        a: "They manage mechanical ventilators, perform arterial blood gas analysis, manage airway in ICU and emergency, conduct pulmonary function tests, deliver nebulization and oxygen therapy, and support patients in COPD, asthma, and ARDS management.",
      },
      {
        q: "What is the salary of a respiratory therapist?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for respiratory therapists. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Can I work as a respiratory therapist in the US?",
        a: "The US route runs through the NBRC (CRT and RRT) exams and state licensing; Canada registers respiratory therapists province by province. Rules for foreign-trained candidates change, so check the NBRC and the state board before you plan.",
      },
      {
        q: "Which hospitals hire respiratory therapists in India?",
        a: "JKKN publishes no recruiter list for its graduates. Respiratory therapists work in the ICUs and critical care units of multi-specialty hospitals; check each employer's current openings.",
      },
    ],
  },
  {
    slug: "physician-assistant-career-india",
    title: "Physician Associate Career in India 2026 — Scope, Pay & Opportunities",
    metaTitle: "Physician Associate Career India 2026 — Pay, Scope, Jobs Guide",
    metaDescription:
      "Is B.PA (Physician Associates) a good career in India? Explore the scope, how pay works, a day in the life, and how PA compares to nursing and MBBS.",
    excerpt:
      "What physician associates do alongside doctors, how the role compares with nursing and MBBS, and how pay works.",
    heroImage: "/allied-health-science-hero.webp",
    heroImageAlt: "Physician associate learner in clinical training at JKKN College",
    courseSlug: "physician-assistant",
    courseName: "Bachelor of Physician Associates (B.PA)",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "industry", label: "The PA Role in India" },
      { id: "day-in-life", label: "Day in the Life of a Physician Associate" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Skills & Certifications" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is physician associate (physician assistant) a good career in India?",
        a: "Physician associates work alongside doctors in OPD, wards and specialty units, taking histories, examining patients and assisting in procedures. JKKN publishes no placement or salary figure, so check current job notices for openings and pay.",
      },
      {
        q: "What is the difference between a physician associate and a nurse?",
        a: "Nurses focus on patient care, monitoring, and medication administration. PAs assist doctors directly in clinical decision-making, history-taking, examinations, procedure assistance, and patient counseling. PAs work as the doctor's extension across OPD and inpatient settings.",
      },
      {
        q: "What is the salary of a physician associate in India?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for physician associates. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Which hospitals hire physician associates?",
        a: "JKKN publishes no recruiter list for its graduates. Physician associates work in OPD, wards and specialty units such as cardiology, oncology and surgery, alongside doctors; check each employer's current openings.",
      },
      {
        q: "Should I do PA or MBBS?",
        a: "Different goals. MBBS is 5.5 years + PG and leads to independent practice. B.PA is 3 years plus a 1-year internship, and you work alongside doctors. PA suits those who want quicker entry to healthcare without competitive NEET pressure but still want clinical exposure.",
      },
    ],
  },
  {
    slug: "critical-care-technology-future-india",
    title: "Future of Critical Care Technology in India: Career, Pay & Scope (2026)",
    metaTitle: "Critical Care Technology Career India 2026 — ICU Tech Pay, Scope & Future",
    metaDescription:
      "What a critical care technologist does in the ICU: career paths, how pay works, specializations and certifications for B.Sc Critical Care Technology.",
    excerpt:
      "What critical care technologists do in the ICU, the career paths and certifications, how pay works and routes abroad.",
    heroImage: "/critical-care-technology-hero.webp",
    heroImageAlt: "Critical care technologist managing ICU monitors at JKKN College",
    courseSlug: "critical-care-technology",
    courseName: "B.Sc Critical Care Technology",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "industry", label: "Critical Care in 2026" },
      { id: "day-in-life", label: "Day in the Life of a Critical Care Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Skills & Certifications" },
      { id: "global", label: "Global Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "What is the scope of critical care technology in India?",
        a: "Multi-specialty hospitals, cardiac centres, neonatal ICUs and trauma centres all run intensive care units that need trained critical care technologists. JKKN publishes no placement or salary figure, so check current job notices for openings and pay.",
      },
      {
        q: "What does a critical care technologist do?",
        a: "They manage ventilators, multi-parameter monitors, CRRT (continuous renal replacement therapy), defibrillators, ECMO, intra-aortic balloon pumps, and assist intensivists in code blue, intubation, and life-support procedures.",
      },
      {
        q: "What is the salary of a critical care technologist?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for critical care technologists. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Is critical care technology different from BSc Nursing?",
        a: "Yes. Critical care technologists focus exclusively on advanced life support equipment, monitoring, and procedures in ICU/CCU. They are technical specialists, while nurses handle holistic patient care. Both roles are essential and complementary.",
      },
      {
        q: "Can I work abroad with a BSc Critical Care Technology?",
        a: "Working abroad needs the destination country's registration or licensing exam - for example Prometric, DHA or HAAD in the Gulf, or additional registration in the UK, Ireland or Australia. Requirements change, so check that country's regulator before you plan.",
      },
    ],
  },
  {
    slug: "medical-record-science-career-india",
    title: "Health Information Management Career in India 2026 — HIM, Coding & Remote Work",
    metaTitle: "Health Information Management Career India 2026 — Pay & Jobs",
    metaDescription:
      "Health Information Management (formerly medical record science): ICD-10 coding and remote US coding careers. Scope, pay, certifications, global jobs.",
    excerpt:
      "Health information management covers hospital records, ICD-10 coding and insurance work. Here is what the job involves, the certifications that matter and how pay works for B.Sc. HIM graduates.",
    heroImage: "/medical-record-science-hero.webp",
    heroImageAlt: "Health Information Management learner working on HIM digitization at JKKN College",
    courseSlug: "medical-record-science",
    courseName: "Bachelor of Science in Health Information Management (B.Sc. HIM)",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "industry", label: "HIM Digitization & Medical Coding" },
      { id: "day-in-life", label: "Day in the Life of a Medical Record Officer" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Certifications in This Field" },
      { id: "global", label: "Remote US Medical Coding Careers" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "Is health information management (medical record science) a good career in India?",
        a: "Graduates can work in hospital medical-record departments, insurance and health-information teams, and medical coding. JKKN publishes no placement or salary figure, so check current job notices for openings and pay.",
      },
      {
        q: "What is medical coding and how does it pay?",
        a: "Medical coders translate clinical documentation into ICD-10, CPT, and HCPCS codes used for insurance claims. No official survey gives coders' pay and JKKN publishes no salary figure; pay depends on the employer, certification and experience.",
      },
      {
        q: "What is the salary of a medical record officer in India?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for medical record officers and coders. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Can I work from home as a health information management graduate?",
        a: "Some medical coding roles are remote. Employers usually ask for a coding certification such as CPC (AAPC) or CCS (AHIMA); check each employer's current openings for the terms.",
      },
      {
        q: "Which companies hire health information management graduates?",
        a: "JKKN publishes no recruiter list for its graduates. Health information management graduates work in hospital medical-record departments, insurance teams and medical coding companies; check each employer's current openings.",
      },
    ],
  },
  {
    slug: "accident-emergency-care-technician-guide",
    title: "Emergency Medical Technologist (Paramedic) Career Guide India 2026",
    metaTitle: "Emergency Medical Technologist Career India 2026 — Pay & Jobs",
    metaDescription:
      "Emergency Medical Technologist (Paramedic) career guide: scope, pay, EMT certifications and jobs in India's trauma care and ambulance services and abroad.",
    excerpt:
      "What emergency medical technologists do in ambulances and emergency departments, the certifications that matter, and how pay works.",
    heroImage: "/accident-emergency-care-hero.webp",
    heroImageAlt: "Emergency care technologist responding to trauma case at JKKN College",
    courseSlug: "accident-emergency-care",
    courseName: "Bachelor of Emergency Medical Technologist (Paramedic)",
    category: "Career Guide",
    publishedDate: "2026-05-16",
    modifiedDate: "2026-10-30",
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
      { id: "industry", label: "Emergency Care Settings in India" },
      { id: "day-in-life", label: "Day in the Life of an Emergency Medical Technologist" },
      { id: "career-paths", label: "Career Paths & Specializations" },
      { id: "salary", label: "How Pay Works in India" },
      { id: "skills", label: "Skills & Certifications" },
      { id: "global", label: "Global EMT & Pre-Hospital Care Opportunities" },
      { id: "why-jkkn", label: "Why Study at JKKN" },
      { id: "faq", label: "FAQs" },
    ],
    faqs: [
      {
        q: "What is the scope of an emergency medical technologist (paramedic) career in India?",
        a: "Emergency medical technologists work in ambulance services such as 108, hospital emergency departments and trauma centres. JKKN publishes no placement or salary figure, so check current job notices for openings and pay.",
      },
      {
        q: "What does an emergency care technologist do?",
        a: "They handle triage, manage trauma resuscitation, perform BLS/ACLS, manage airway, control bleeding, splint fractures, operate defibrillators, support emergency physicians, and serve as advanced EMTs on ambulances.",
      },
      {
        q: "What is the salary of an emergency care technologist in India?",
        a: "JKKN publishes no salary figure for its graduates, and no official survey gives private-hospital pay for emergency medical technologists. Pay depends on the employer, the city, shift work and experience; for government posts, the pay level is printed in each recruitment notification (for example TN MRB, AIIMS or ESIC).",
      },
      {
        q: "Where can I work after Bachelor of Emergency Medical Technologist (Paramedic)?",
        a: "Trauma centres, 108 ambulance services, hospital emergency departments, disaster response teams, oil-rig medical services and air ambulance services.",
      },
      {
        q: "Can emergency care technologists work abroad?",
        a: "Working abroad needs the destination country's registration or extra certification; the UK, Australia and Canada run their own paramedic registration routes. Requirements change, so check that country's regulator before you plan.",
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
