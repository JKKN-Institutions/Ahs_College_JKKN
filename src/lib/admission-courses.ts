export interface CourseFAQ {
    q: string;
    a: string;
}

export interface SyllabusYear {
    year: string;
    title: string;
    topics: string[];
}

export interface RegionRecruiters {
    region: string;
    hospitals: string[];
}

export interface HigherStudy {
    name: string;
    description: string;
}

export interface WhyChoosePoint {
    title: string;
    desc: string;
}

export interface AdmissionCourse {
    slug: string;
    name: string;
    shortName: string;
    coursePageHref: string;
    duration: string;
    durationISO: string;
    mqFee: string;
    mqFeeNumeric: number;
    totalFeeMQ: string;
    seats: string;
    avgPackage: string;
    salaryRange: string;
    description: string;
    longDescription: string;
    careerScope: string;
    eligibility: string[];
    feeBreakdown: { label: string; value: string }[];
    roles: string[];
    recruiters: string[];
    bestFor: string;
    internship: string;
    iconKey: string;
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string[];
    faqs: CourseFAQ[];
    whyChoose: WhyChoosePoint[];
    syllabus: SyllabusYear[];
    skills: string[];
    equipment: string[];
    dayInLife: string[];
    recruitersByRegion: RegionRecruiters[];
    higherStudies: HigherStudy[];
}

export const admissionCourses: AdmissionCourse[] = [
    {
        slug: "cardiac-technology",
        name: "B.Sc Cardiac Technology",
        shortName: "Cardiac Technology",
        coursePageHref: "/cardiac-technology",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹1,70,000 / year",
        mqFeeNumeric: 170000,
        totalFeeMQ: "₹6,80,000",
        seats: "7 (MQ)",
        avgPackage: "₹4 – 6 LPA",
        salaryRange: "Entry: ₹2.5 – 4 LPA · Senior (5+ yrs): ₹6 – 12 LPA · International (Gulf/UK): ₹15 – 30 LPA",
        description: "Train as a Cardiac Care Technologist — operate ECG, Echo, TMT, Cath Lab equipment and assist cardiologists in diagnostics and interventional procedures.",
        longDescription: "B.Sc Cardiac Technology at JKKN College is a 4-year program (3 years academic + 1 year clinical internship) that trains learners to become certified Cardiac Care Technologists. Learners learn to operate ECG machines, perform Echocardiography (TTE, TEE, Stress Echo), conduct Treadmill Tests (TMT), and assist cardiologists in the Cath Lab during angiograms, angioplasties, pacemaker implantations, and electrophysiology studies. The curriculum is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training happens at JKKN's 500+ bed multi-specialty hospital with rotations across Cardiology OPD, CTVS, ICCU, and Cath Lab.",
        careerScope: "Cardiac Technology is one of the highest-paying allied health specialisations in India. With cardiovascular disease being the leading cause of mortality globally, demand for cardiac technologists is growing at 14–18% CAGR in India and 20–25% globally. Top hospitals — Apollo, Fortis, MIOT, Madras Medical Mission, Narayana Health, Manipal, and Kauvery — actively recruit fresh BSc Cardiac graduates. International opportunities are excellent: UK (NHS), UAE (Cleveland Clinic Abu Dhabi, NMC, Aster), Saudi Arabia (King Faisal Specialist Hospital), and Singapore. Senior cardiac technologists with 5+ years of experience earn ₹6–12 LPA in India and ₹15–30 LPA abroad. Specialised pathways include Cath Lab Specialist, EP Lab Specialist, Pediatric Cardiac Tech, and Perfusion Technology.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹1,70,000 / year" },
            { label: "Total (4 years, MQ)", value: "₹6,80,000" }
        ],
        roles: ["Cardiac Care Technologist", "Cath Lab Technologist", "Echo Technician", "TMT Technician", "EP Lab Specialist", "ICCU Technician", "Pacemaker Technologist", "Perfusionist (with further study)"],
        recruiters: ["Apollo Hospitals", "Fortis Healthcare", "MIOT International", "Madras Medical Mission", "Kauvery Hospital", "Narayana Health", "Manipal Hospitals", "NHS UK", "Cleveland Clinic Abu Dhabi", "King Faisal Specialist Hospital (Saudi)"],
        bestFor: "Learners aiming for the highest salary potential, interventional cardiology exposure, and strong international placement scope.",
        internship: "1 year paid internship at JKKN's 500+ bed multi-speciality hospital — rotations across Cardiology OPD, CTVS, ICCU, Cath Lab, and Echo Lab.",
        iconKey: "heart-pulse",
        seoTitle: "BSc Cardiac Technology Admission 2026-27 in Tamil Nadu | JKKN College",
        seoDescription: "Apply for BSc Cardiac Technology admission 2026-27 at JKKN College, Tamil Nadu. ₹1.7L/yr MQ, 7 seats, 4-yr course, 95% placement, ₹4-6 LPA avg package. No NEET required.",
        seoKeywords: [
            "bsc cardiac technology admission tamilnadu",
            "bsc cardiac technology admission 2026",
            "bsc cardiac care technology admission",
            "cardiac technology course fees tamilnadu",
            "cardiac technology college tamilnadu admission",
            "jkkn cardiac technology admission",
            "bsc cardiac perfusion technology admission",
            "cardiac technology seats tamilnadu",
            "cardiac technology eligibility tamilnadu",
            "bsc cardiac technology without neet"
        ],
        whyChoose: [
            { title: "Highest-Paying AHS Career", desc: "Average package ₹4-6 LPA at entry; senior cardiac techs earn ₹6-12 LPA in India and ₹15-30 LPA in UK/Gulf — top of all allied health pay scales." },
            { title: "Direct Cath Lab Exposure", desc: "Hands-on training in JKKN's interventional Cath Lab — angiograms, angioplasties, pacemaker implants, and EP studies during the 1-year internship." },
            { title: "500+ Bed Multi-Speciality Hospital", desc: "Clinical rotations in Cardiology OPD, ICCU, CTVS, Echo Lab, and Cath Lab with real patient exposure from Year 2." },
            { title: "Strong International Pathway", desc: "Alumni placed in NHS UK, Cleveland Clinic Abu Dhabi, KFSH Saudi Arabia, and Singapore. HAAD/DHA/MOH licensing prep guidance from the placement cell." },
            { title: "Specialisation Routes", desc: "Pathways into Perfusion Technology, Paediatric Cardiac Tech, EP Lab Specialist, and Cath Lab Lead via short PG diplomas after BSc." }
        ],
        syllabus: [
            {
                year: "Year 1",
                title: "Foundations",
                topics: ["Human Anatomy", "Human Physiology", "Biochemistry", "Basic Cardiac Anatomy", "Medical Terminology", "Communication Skills", "First Aid & BLS"]
            },
            {
                year: "Year 2",
                title: "Cardiac Sciences",
                topics: ["Pathology", "Pharmacology", "Cardiovascular Physiology", "Basic Electrocardiography (ECG)", "Cardiac Pharmacology", "Microbiology", "Patient Care"]
            },
            {
                year: "Year 3",
                title: "Advanced Cardiology",
                topics: ["Echocardiography (TTE/TEE)", "Treadmill Test (TMT)", "Holter Monitoring", "Cath Lab Procedures", "Electrophysiology Basics", "Cardiac Imaging", "Research Methodology"]
            },
            {
                year: "Year 4",
                title: "Clinical Internship",
                topics: ["Cardiology OPD Rotation", "ICCU Posting", "CTVS Posting", "Cath Lab Rotation", "Echo Lab Rotation", "Project Work & Dissertation"]
            }
        ],
        skills: ["12-Lead ECG Interpretation", "Echocardiography (TTE/TEE)", "Stress Echo & TMT", "Holter Monitor Analysis", "Cath Lab Assistance", "Hemodynamic Monitoring", "Pacemaker Programming", "EP Study Support", "Defibrillation & ACLS", "Patient Counselling", "Cardiac Emergency Response", "EMR Documentation"],
        equipment: ["12-Lead ECG Machines", "Echocardiography Machines (Philips/GE)", "TMT Treadmill Systems", "Holter Recorders", "Cath Lab (Philips Allura/Siemens Artis)", "EP Recording Systems", "Pacemaker Programmers (Medtronic/Boston Scientific)", "Defibrillators & AEDs", "IABP (Intra-Aortic Balloon Pump)", "Cardiac Monitors", "Pulse Oximeters", "Blood Pressure Monitors"],
        dayInLife: [
            "08:00 AM — Report at Cath Lab; set up procedure room, check equipment, review patient list",
            "09:00 AM — Assist cardiologist in angiogram / angioplasty — manage hemodynamic console, contrast injection, monitor vitals",
            "11:30 AM — Rotate to Echo Lab; perform TTE on OPD patients, prepare echo reports",
            "01:00 PM — Lunch break + handover notes",
            "02:00 PM — TMT testing in cardiac stress lab; monitor ECG during treadmill exercise",
            "04:00 PM — Round in ICCU; assist with bedside ECG, pacemaker checks, defibrillator readiness",
            "06:00 PM — On-call shift begins; respond to cardiac emergencies and Code Blue calls"
        ],
        recruitersByRegion: [
            { region: "India — Top Tier", hospitals: ["Apollo Hospitals", "Fortis Healthcare", "MIOT International", "Madras Medical Mission", "Narayana Health", "Manipal Hospitals", "Kauvery Hospital"] },
            { region: "Gulf (UAE/Saudi/Qatar)", hospitals: ["Cleveland Clinic Abu Dhabi", "NMC Healthcare UAE", "King Faisal Specialist Hospital Saudi", "Aster DM Gulf", "Mediclinic Middle East"] },
            { region: "UK / Europe", hospitals: ["NHS UK Trusts", "Bupa Cromwell Hospital", "King's College Hospital London"] },
            { region: "Southeast Asia", hospitals: ["Mount Elizabeth Singapore", "Bumrungrad Thailand", "Gleneagles Singapore"] }
        ],
        higherStudies: [
            { name: "MSc Cardiac Care Technology", description: "2-year specialisation — deeper expertise in interventional cardiology, EP studies, and cardiac imaging. Offered at TN MGR University and select private universities." },
            { name: "PG Diploma in Perfusion Technology", description: "1-year program to become a Cardiac Perfusionist — operates heart-lung machine during open-heart surgery. Salaries: ₹6-15 LPA India, ₹25-50 LPA abroad." },
            { name: "Cath Lab Specialist Certification", description: "6-month vendor certifications (Philips, Siemens, GE) for advanced Cath Lab operations." },
            { name: "International Bridge — UK / US", description: "BCS (UK British Cardiology Society) registration or US RCIS / RCS certification opens UK NHS and US cardiac sonographer roles." }
        ],
        faqs: [
            { q: "What does a BSc Cardiac Technologist do after graduation?", a: "A BSc Cardiac Technologist performs and assists in non-invasive and invasive cardiac diagnostic procedures including ECG, Echocardiography (TTE/TEE/Stress Echo), TMT, Holter monitoring, and Cath Lab procedures like angiograms, angioplasties, pacemaker implantation, and electrophysiology studies. They work directly with cardiologists in OPD, ICCU, CTVS, and Cath Labs." },
            { q: "Is BSc Cardiac Technology a good career in 2026?", a: "Yes — cardiac technology is one of the fastest-growing allied health careers globally. With cardiovascular disease being the leading cause of mortality worldwide, demand for cardiac technologists is growing 14–18% in India and 20–25% globally. Average packages range from ₹2.5–4 LPA at entry to ₹6–12 LPA after 5 years; international roles in UK/Gulf pay ₹15–30 LPA." },
            { q: "What is the fee for BSc Cardiac Technology at JKKN?", a: "Management Quota (MQ) fee is ₹1,70,000 per year. Total course fee (4 years, MQ) is ₹6,80,000. Government Quota (GQ) fee is as per Tamil Nadu Government norms. Installment payments, education loan assistance, and merit-based scholarships are available." },
            { q: "How many seats are available for BSc Cardiac Technology at JKKN?", a: "JKKN College of Allied Health Sciences offers 7 seats under Management Quota (MQ) for BSc Cardiac Technology. Additional seats are filled under Government Quota (GQ) through Tamil Nadu Government counselling. Apply early as this is a high-demand course with limited seats." },
            { q: "Do I need to pass NEET for BSc Cardiac Technology admission?", a: "No — NEET is NOT required for BSc Cardiac Technology admission at JKKN College. Admission is purely merit-based using +2 marks. Eligibility: +2 with PCB (50% Gen / 45% OBC / 40% SC-ST), age 17+ as on 31 Dec 2026." },
            { q: "Can BSc Cardiac Technology graduates work abroad?", a: "Yes — BSc Cardiac Technology has excellent international scope. JKKN graduates have been placed in UK (NHS), UAE (Cleveland Clinic Abu Dhabi, NMC, Aster), Saudi Arabia (King Faisal Specialist Hospital), and Singapore. International salaries range from ₹15–30 LPA. Licensing (HAAD/DHA/MOH for Gulf, NHS registration for UK) may be required." }
        ]
    },
    {
        slug: "dialysis-technology",
        name: "B.Sc Dialysis Technology",
        shortName: "Dialysis Technology",
        coursePageHref: "/dialysis-technology",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹1,10,000 / year",
        mqFeeNumeric: 110000,
        totalFeeMQ: "₹4,40,000",
        seats: "5 (MQ)",
        avgPackage: "₹2.8 – 4.2 LPA",
        salaryRange: "Entry: ₹2 – 3 LPA · Senior (5+ yrs): ₹4.5 – 7 LPA · International: ₹12 – 25 LPA",
        description: "Become a Renal Dialysis Technologist — operate haemodialysis machines, perform CRRT/SLED procedures, and manage chronic kidney disease patients.",
        longDescription: "B.Sc Dialysis Technology at JKKN College is a 4-year program (3 + 1) preparing learners to become certified Renal Dialysis Technologists. Learners master haemodialysis machine operation, CRRT (Continuous Renal Replacement Therapy), SLED (Sustained Low-Efficiency Dialysis), peritoneal dialysis, vascular access management, water treatment systems, and dialyser reprocessing. Curriculum is affiliated to TN Dr. MGR Medical University with clinical postings in Nephrology, ICU, and renal transplant units at JKKN's teaching hospital.",
        careerScope: "India has 2.2 lakh+ new end-stage kidney disease patients each year and only 12,000 trained dialysis technicians — creating massive demand. Career growth is rapid: starting at ₹2-3 LPA in private dialysis chains (NephroPlus, DaVita, Apollo Dialysis) and reaching ₹4.5-7 LPA within 5 years as a unit in-charge. Gulf countries (UAE, Saudi Arabia, Kuwait) actively hire Indian dialysis technologists at ₹12-25 LPA. Further specialisations include CRRT specialist, renal transplant coordinator, dialysis unit manager, and dialysis trainer/educator. Government 'Pradhan Mantri National Dialysis Programme' (PMNDP) has expanded dialysis centres to all districts — boosting Tier-2 and Tier-3 city jobs.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹1,10,000 / year" },
            { label: "Total (4 years, MQ)", value: "₹4,40,000" }
        ],
        roles: ["Dialysis Technologist", "Nephrology Technician", "CRRT Specialist", "Renal Transplant Technician", "Dialysis Unit In-charge", "Vascular Access Coordinator", "Water Treatment Specialist"],
        recruiters: ["Apollo Dialysis", "NephroPlus", "DaVita Care India", "Fortis Renal", "MIOT Nephrology", "Aster DM Healthcare (Gulf)", "NMC Healthcare UAE", "PMNDP Centres (Govt)"],
        bestFor: "Learners wanting a stable, recession-proof healthcare career with strong demand in Tier-2/3 cities and Gulf countries.",
        internship: "1 year clinical internship in Nephrology, Dialysis Units, ICU-CRRT, and partnered renal centres at JKKN hospital.",
        iconKey: "activity",
        seoTitle: "BSc Dialysis Technology Admission 2026-27 in Tamil Nadu | JKKN College",
        seoDescription: "Apply for BSc Dialysis Technology admission at JKKN College, Tamil Nadu. ₹1.1L/yr MQ, 5 seats, 4-yr course, 95% placement, ₹2.8-4.2 LPA avg package. No NEET needed.",
        seoKeywords: [
            "bsc dialysis technology admission tamilnadu",
            "bsc dialysis admission 2026",
            "dialysis technology course fees",
            "dialysis technician course tamilnadu",
            "jkkn dialysis technology admission",
            "bsc renal dialysis admission",
            "dialysis technology seats tamilnadu",
            "dialysis technology eligibility",
            "bsc dialysis without neet"
        ],
        whyChoose: [
            { title: "Severe Skill Shortage = Job Security", desc: "India has 2.2 lakh+ new dialysis patients/year but only ~12,000 trained technicians. Graduates land jobs within weeks of internship completion." },
            { title: "Affordable Fee, Strong ROI", desc: "₹1.1L/yr is the second-lowest among AHS courses. Total ₹4.4L investment yields ₹2.8-4.2 LPA at entry — payback within 18 months." },
            { title: "Govt Expansion Programme", desc: "PMNDP (Pradhan Mantri Dialysis Programme) is opening dialysis centres in every district — creating Tier-2/3 city jobs near your home town." },
            { title: "Gulf Migration Pathway", desc: "Aster DM Gulf, NMC, and Saudi government hospitals actively hire Indian dialysis techs at ₹12-25 LPA after 2 years of Indian experience." },
            { title: "CRRT & Transplant Specialisations", desc: "After 3-4 years, specialise in CRRT (ICU dialysis) or Renal Transplant Coordination — these roles pay 40-60% more than basic dialysis work." }
        ],
        syllabus: [
            { year: "Year 1", title: "Medical Foundations", topics: ["Human Anatomy", "Human Physiology", "Biochemistry", "Renal Anatomy & Physiology", "Medical Terminology", "First Aid & BLS", "Communication Skills"] },
            { year: "Year 2", title: "Renal Sciences", topics: ["Pathology", "Pharmacology", "Renal Pathophysiology", "Hemodialysis Principles", "Vascular Access", "Water Treatment Systems", "Microbiology & Infection Control"] },
            { year: "Year 3", title: "Advanced Dialysis", topics: ["CRRT & SLED", "Peritoneal Dialysis", "Dialysis Pharmacology", "Renal Transplantation", "Dialyser Reprocessing", "ICU Dialysis", "Research Methodology"] },
            { year: "Year 4", title: "Clinical Internship", topics: ["Nephrology OPD Rotation", "HD Unit Posting", "CRRT in ICU Rotation", "Renal Transplant Unit", "Vascular Access Procedures", "Project Work"] }
        ],
        skills: ["Hemodialysis Machine Operation", "Vascular Access Cannulation", "Dialysate Preparation", "Water Treatment QA", "CRRT Setup & Management", "Peritoneal Dialysis", "Anticoagulation Management", "Patient Triage", "Infection Control", "Equipment Troubleshooting", "EMR Documentation", "BLS Certification"],
        equipment: ["Fresenius 4008/5008 HD Machines", "Nipro Surdial Dialysis Machines", "Baxter PrisMax CRRT Machine", "B. Braun Dialog+ Machines", "Reverse Osmosis Water Plants", "Dialyser Reprocessing Units", "Peritoneal Dialysis Cyclers", "Vascular Access Doppler", "Bedside Ultrasound", "Defibrillators & Crash Cart"],
        dayInLife: [
            "07:00 AM — Arrive at dialysis unit; check machines, prime dialysers, prepare dialysate",
            "07:30 AM — Patient handover from night shift; review charts of scheduled HD patients",
            "08:00 AM — Patient 1 cannulation; start 4-hour HD session, monitor vitals every 30 min",
            "12:00 PM — End session, document outcomes, disinfect machine for next patient",
            "12:30 PM — Patient 2 cannulation begins; parallel lunch break with peer coverage",
            "04:30 PM — Patient 3 starts (afternoon shift); attend to CRRT call from ICU",
            "06:00 PM — End-of-day documentation, water treatment plant log, shift handover"
        ],
        recruitersByRegion: [
            { region: "India — Dialysis Chains", hospitals: ["NephroPlus (100+ centres)", "DaVita Care India", "Apollo Dialysis", "Fresenius Medical Care", "B. Braun Avitum"] },
            { region: "India — Hospital Renal Units", hospitals: ["Apollo Nephrology", "Fortis Renal", "MIOT", "Manipal", "Kauvery", "Aster Medcity"] },
            { region: "Gulf", hospitals: ["NMC Healthcare UAE", "Aster DM Gulf", "Saudi German Hospital", "King Saud Medical City", "Hamad Medical Qatar"] },
            { region: "Government — PMNDP", hospitals: ["District Hospitals (TN/AP/KA)", "ESI Dialysis Centres", "Government Medical Colleges"] }
        ],
        higherStudies: [
            { name: "MSc Renal Sciences / Dialysis Technology", description: "2-year specialisation. Opens academic and senior clinical roles. Offered at TN MGR University, Manipal, and select private universities." },
            { name: "PG Diploma in Renal Transplant Coordination", description: "1-year specialised program. Coordinates kidney transplant donor-recipient workflow. Salaries ₹6-12 LPA." },
            { name: "MBA Hospital Administration", description: "For senior management roles — Dialysis Unit Manager, Regional Operations Head. NephroPlus and DaVita actively promote graduates with MBA + clinical experience." },
            { name: "International — ASN Certification (US)", description: "American Society of Nephrology Technologist certification opens US clinical roles. India experience + ASN cert + Visa = USD 50-70k roles." }
        ],
        faqs: [
            { q: "What is the job role of a BSc Dialysis Technologist?", a: "A BSc Dialysis Technologist sets up and operates haemodialysis machines, monitors patients during 4-hour dialysis sessions, manages vascular access (AV fistulas, catheters), performs CRRT in ICU, handles peritoneal dialysis, manages water treatment systems, and assists nephrologists. They typically handle 2-3 patients per shift in a dialysis unit." },
            { q: "Is BSc Dialysis Technology in demand in 2026?", a: "Very high demand. India has 2.2 lakh+ new end-stage kidney disease patients yearly but only ~12,000 trained dialysis technicians — a severe shortage. Government's PMNDP scheme has opened dialysis centres in every district. Private chains like NephroPlus, DaVita, and Apollo Dialysis hire 500+ BSc Dialysis grads each year." },
            { q: "What is the fee for BSc Dialysis Technology at JKKN?", a: "Management Quota (MQ) fee is ₹1,10,000 per year — total ₹4,40,000 for 4 years. Government Quota (GQ) is as per TN Govt norms. Installment options, education loan support, and scholarships available." },
            { q: "How many seats are there for BSc Dialysis Technology at JKKN?", a: "5 seats under Management Quota (MQ). Additional seats are filled via Government Quota (GQ) Tamil Nadu counselling. Limited intake — apply early." },
            { q: "What salary can I earn as a Dialysis Technologist abroad?", a: "Dialysis technologists in UAE, Saudi Arabia, Kuwait, and Qatar earn ₹12-25 LPA depending on experience and certifications. UK NHS roles pay ₹15-22 LPA. Most Gulf employers require 2 years of Indian experience and DHA/HAAD/MOH licensing exam." },
            { q: "Can I do MSc or further study after BSc Dialysis Technology?", a: "Yes — after BSc Dialysis Technology, you can pursue MSc Renal Sciences, MSc Medical Lab Technology, MBA Hospital Administration, or specialised certifications like ASN Nephrology Technologist (US) and AVR (Australia). Many grads also become dialysis unit managers or trainers." }
        ]
    },
    {
        slug: "radiology-imaging-technology",
        name: "B.Sc Radiology & Imaging Technology",
        shortName: "Radiology & Imaging",
        coursePageHref: "/radiology-imaging-technology",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹1,30,000 / year",
        mqFeeNumeric: 130000,
        totalFeeMQ: "₹5,20,000",
        seats: "5 (MQ)",
        avgPackage: "₹3.5 – 5 LPA",
        salaryRange: "Entry: ₹2.5 – 3.5 LPA · Senior (5+ yrs): ₹6 – 10 LPA · International: ₹18 – 35 LPA",
        description: "Operate X-ray, CT, MRI, USG, Mammography, and Interventional Radiology equipment. Excellent international placement scope.",
        longDescription: "B.Sc Radiology & Imaging Technology at JKKN College is a 4-year program (3 + 1) training learners to operate the full spectrum of medical imaging equipment: digital X-ray, Computed Tomography (CT), Magnetic Resonance Imaging (MRI), Ultrasonography (USG), Mammography, Fluoroscopy, Bone Densitometry (DEXA), and Interventional Radiology (IR). The learning framework covers radiation physics, anatomy, patient positioning, contrast administration, image post-processing, PACS administration, and radiation safety. Affiliated to TN Dr. MGR Medical University; internship at JKKN's hospital with rotations across all imaging modalities.",
        careerScope: "Radiology & Imaging Technology has one of the strongest international job markets among allied health careers. UK (NHS — chronic radiographer shortage), Australia (AHPRA-registered radiographers earn AUD 80k–120k), Canada (CAMRT certified roles), and Gulf countries actively hire Indian radiographers at ₹18–35 LPA. In India, demand is growing 15% annually with new MRI/CT installations across Tier-2 cities, diagnostic chains (Aarthi Scans, Medall, Vijaya Diagnostics), and corporate hospitals. Specialised pathways include CT/MRI specialist, Interventional Radiology tech, Mammography specialist, Sonographer, and PACS Administrator. With OECD radiographer-to-population ratios still 3-5× higher than India, the domestic shortage will persist for the next decade.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹1,30,000 / year" },
            { label: "Total (4 years, MQ)", value: "₹5,20,000" }
        ],
        roles: ["Radiology Technologist", "CT Technologist", "MRI Technologist", "Interventional Radiology Tech", "Mammography Specialist", "Sonographer", "PACS Administrator", "Cath Lab Imaging Tech"],
        recruiters: ["Apollo Imaging", "Fortis Imaging", "Medall Diagnostics", "Aarthi Scans", "Vijaya Diagnostic", "NHS UK", "Bumrungrad Thailand", "Cleveland Clinic Abu Dhabi", "NMC Healthcare UAE"],
        bestFor: "Learners aiming for international careers (UK/Australia/Canada/Gulf) with the highest earning potential among AHS courses.",
        internship: "1 year internship rotation across CT, MRI, Ultrasound, X-ray, Cath Lab, and Interventional Radiology at JKKN's 500+ bed hospital.",
        iconKey: "scan-line",
        seoTitle: "B.Sc Radiography Imaging Technology Admission | JKKN AHS",
        seoDescription: "Four-year B.Sc Radiography Imaging Technology at JKKN AHS, NAAC A+ accredited. Five seats. Eligibility, fees and how to apply for 2026-27.",
        seoKeywords: [
            "bsc radiology imaging technology admission tamilnadu",
            "bsc radiology admission 2026 tamilnadu",
            "radiology imaging course fees tamilnadu",
            "bsc medical imaging admission",
            "jkkn radiology admission",
            "bsc xray technician course tamilnadu",
            "radiography college tamilnadu admission",
            "ct mri technologist course admission",
            "bsc radiology eligibility"
        ],
        whyChoose: [
            { title: "Strongest International Scope", desc: "UK NHS, Australia AHPRA, Canada CAMRT, and Gulf hospitals all face chronic radiographer shortages. JKKN grads earn ₹18-35 LPA abroad within 2-3 years." },
            { title: "Full-Spectrum Modality Training", desc: "Hands-on exposure to digital X-ray, CT, MRI, USG, Mammography, Fluoroscopy, DEXA, and Interventional Radiology — not just X-ray." },
            { title: "JKKN Hospital Imaging Department", desc: "500+ bed hospital fully equipped with all imaging modalities — learners rotate across every machine during the 1-year internship." },
            { title: "PACS & DICOM Training", desc: "Learning framework includes PACS administration and DICOM workflow — opens hybrid clinical+IT roles in teleradiology and healthcare AI." },
            { title: "Highest AHS Earning Ceiling", desc: "Senior radiographers in UK earn GBP 50-70k (₹50-70 LPA); US radiographers earn USD 75-95k (₹62-78 LPA) — among the highest of any allied health career globally." }
        ],
        syllabus: [
            { year: "Year 1", title: "Physics & Anatomy", topics: ["Human Anatomy", "Human Physiology", "Radiation Physics", "Basic Radiographic Anatomy", "Patient Care & Ethics", "Medical Terminology", "First Aid & BLS"] },
            { year: "Year 2", title: "Imaging Sciences", topics: ["Pathology", "X-Ray Procedures & Positioning", "Contrast Media", "Radiation Protection (AERB)", "Ultrasonography Basics", "Darkroom & Digital Radiography", "Pharmacology"] },
            { year: "Year 3", title: "Advanced Imaging", topics: ["CT Scan Procedures", "MRI Procedures & Safety", "Mammography", "Interventional Radiology", "PACS & DICOM", "Nuclear Medicine Basics", "Research Methodology"] },
            { year: "Year 4", title: "Clinical Internship", topics: ["X-Ray & Fluoroscopy Rotation", "CT Scan Posting", "MRI Posting", "Ultrasound Posting", "Mammography & DEXA", "Interventional Radiology", "Project Work"] }
        ],
        skills: ["Digital X-Ray Operation", "CT Scan Protocols", "MRI Procedures & Safety", "Ultrasonography (Basic)", "Mammography Positioning", "Contrast Media Administration", "PACS Administration", "DICOM Workflow", "Patient Positioning", "Radiation Safety (AERB)", "Image Post-Processing", "Teleradiology Workflow"],
        equipment: ["Siemens / GE Digital X-Ray Systems", "Siemens SOMATOM CT Scanners", "Philips Ingenia MRI 1.5T / 3T", "GE Voluson / Philips EPIQ USG Machines", "Hologic Selenia Mammography", "Hologic Horizon DEXA", "Philips Allura Cath Lab", "PACS Workstations (GE / Sectra)", "C-Arm Fluoroscopy", "Mobile X-Ray Units", "Bone Densitometers", "Lead Aprons & Dosimeters"],
        dayInLife: [
            "08:00 AM — Equipment QA checks (CT, MRI calibration); review patient list",
            "08:30 AM — Outpatient X-Ray imaging (chest, abdomen, ortho) — 8-10 patients in 90 min",
            "10:00 AM — CT Scan procedures — contrast-enhanced abdomen, head CT for emergency cases",
            "12:30 PM — Lunch break, PACS review with radiologist",
            "01:30 PM — MRI Scans — brain, spine, knee — patient screening for contraindications",
            "04:00 PM — Mammography & DEXA outpatient slot",
            "05:30 PM — On-call X-Ray for ER trauma cases; image upload to PACS, hand-off"
        ],
        recruitersByRegion: [
            { region: "India — Hospital Imaging", hospitals: ["Apollo Imaging", "Fortis Imaging", "MIOT", "Manipal", "Kauvery", "Aster Medcity"] },
            { region: "India — Diagnostic Chains", hospitals: ["Medall Diagnostics", "Aarthi Scans", "Vijaya Diagnostic", "Anderson Diagnostics", "Lucid Diagnostics", "Hindlabs"] },
            { region: "UK", hospitals: ["NHS Trusts (chronic radiographer shortage)", "Bupa Cromwell Hospital", "King's College London", "Spire Healthcare"] },
            { region: "Gulf", hospitals: ["Cleveland Clinic Abu Dhabi", "NMC Healthcare UAE", "Mediclinic Middle East", "Aster Gulf", "KFSH Saudi"] },
            { region: "Australia / Canada", hospitals: ["AHPRA-registered Hospitals (AU)", "I-MED Radiology Network (AU)", "CAMRT-certified Hospitals (CA)"] }
        ],
        higherStudies: [
            { name: "MSc Medical Imaging Technology", description: "2-year specialisation. Opens senior clinical and academic roles. TN MGR University, AIIMS, PGI Chandigarh offer programs." },
            { name: "PG Diploma in CT / MRI", description: "1-year specialised programs. CT/MRI specialists earn 30-50% more than general radiographers in India and abroad." },
            { name: "ARRT Certification (US)", description: "American Registry of Radiologic Technologists. Required for US radiographer roles. Indian BSc + ARRT + immigration = USD 75-95k." },
            { name: "UK NHS Radiographer Registration", description: "HCPC (Health & Care Professions Council) registration via TLEAC route. UK NHS sponsors visas; entry salaries GBP 30-40k." }
        ],
        faqs: [
            { q: "What does a BSc Radiology & Imaging Technologist do?", a: "A Radiology & Imaging Technologist performs and operates X-ray, CT scans, MRI, Ultrasonography, Mammography, Fluoroscopy, and Bone Density scans. They position patients correctly, administer contrast agents, manage radiation safety, process images via PACS, and assist radiologists during interventional procedures." },
            { q: "Is BSc Radiology a good career for going abroad?", a: "Excellent — radiography has the strongest international scope of any AHS career. UK (NHS), Australia (AHPRA), Canada (CAMRT), and Gulf countries face chronic radiographer shortages. JKKN graduates earn ₹18-35 LPA abroad. UK NHS sponsors visas for qualified radiographers. Average time from BSc to overseas job is 2-3 years." },
            { q: "What is the fee for BSc Radiology at JKKN?", a: "Management Quota (MQ) annual fee is ₹1,30,000 — total ₹5,20,000 for the 4-year course. Government Quota (GQ) is as per Tamil Nadu Govt norms. Scholarships, installments, and education loan support available." },
            { q: "How many seats are available for BSc Radiology at JKKN?", a: "5 Management Quota (MQ) seats + additional Government Quota (GQ) seats filled through Tamil Nadu Govt counselling. Among the most competitive AHS courses — apply early." },
            { q: "Is there exposure to MRI and CT during the course?", a: "Yes — JKKN's 500+ bed hospital has a fully-equipped Radiology Department with digital X-ray, CT scan, MRI, USG, Mammography, and Cath Lab. Learners rotate across all modalities during the 1-year internship and get hands-on patient positioning, scan protocols, and image processing experience." },
            { q: "Can I specialise in CT or MRI after BSc Radiology?", a: "Yes — after BSc you can pursue PG Diploma in CT/MRI, MSc Medical Imaging Technology, certifications like IAEA Radiation Safety, ARRT (US), or vendor-specific training (Siemens, GE, Philips). Many specialists earn 30-50% more than generalist radiographers." }
        ]
    },
    {
        slug: "operation-theatre-anaesthesia",
        name: "B.Sc Operation Theatre & Anaesthesia Technology",
        shortName: "OT & Anaesthesia",
        coursePageHref: "/operation-theatre-anaesthesia",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹1,70,000 / year",
        mqFeeNumeric: 170000,
        totalFeeMQ: "₹6,80,000",
        seats: "10 (MQ)",
        avgPackage: "₹3.5 – 5 LPA",
        salaryRange: "Entry: ₹2.5 – 4 LPA · Senior (5+ yrs): ₹5 – 9 LPA · International: ₹15 – 28 LPA",
        description: "Assist anaesthesiologists and surgeons, manage OT equipment, monitor vitals during surgery, handle peri-operative care across all specialities.",
        longDescription: "B.Sc Operation Theatre & Anaesthesia Technology (OT & Anaesthesia Tech) at JKKN College is a 4-year program (3 + 1) training learners to function as Operation Theatre Technologists and Anaesthesia Technicians. The course covers OT setup and sterilisation, surgical instrument identification and handling, anaesthesia machine operation, patient monitoring (ECG, BP, SpO2, EtCO2, ABG), airway management, drug administration, peri-operative care, and CSSD (Central Sterile Services Department) operations. Affiliated to TN Dr. MGR Medical University. Internship rotations cover General Surgery, Orthopaedics, Neurosurgery, Cardiac Surgery, OB-GYN, Paediatric Surgery, and Day-Care OTs.",
        careerScope: "Every hospital with a surgical facility needs OT technologists and anaesthesia technicians — making it one of the most universally employable AHS careers. India performs 5 crore+ surgeries annually with 50,000+ OT technologist openings. Top recruiters: Apollo, Fortis, MIOT, Manipal, Kauvery, Aster, and corporate hospital chains pay ₹2.5–4 LPA at entry, ₹5–9 LPA by year 5. Gulf countries hire Indian OT techs at ₹15–28 LPA — Aster DM, Mediclinic, NMC, and Saudi Government hospitals are active recruiters. Senior pathways include OT In-charge, CSSD Manager, Surgical Robotics Specialist, Cardiac Anaesthesia Tech, and Transplant OT coordinator. With increasing day-care and minimally-invasive surgeries, demand is structurally growing.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹1,70,000 / year" },
            { label: "Total (4 years, MQ)", value: "₹6,80,000" }
        ],
        roles: ["OT Technologist", "Anaesthesia Technician", "Surgical Technologist", "Peri-Operative Coordinator", "OT In-charge", "CSSD In-charge", "Robotic Surgery Tech", "Transplant OT Coordinator"],
        recruiters: ["Apollo Hospitals", "Fortis Healthcare", "MIOT International", "Manipal Hospitals", "Kauvery Hospital", "Narayana Health", "Aster DM (UAE/Saudi)", "Mediclinic Middle East", "NMC Healthcare"],
        bestFor: "Learners who enjoy fast-paced surgical environments and want broad multi-speciality OT exposure with reliable placement.",
        internship: "1 year rotation across General Surgery, Ortho, Neuro, Cardiac, OB-GYN, Paediatric, and Day-Care OTs at JKKN hospital.",
        iconKey: "scissors",
        seoTitle: "BSc Operation Theatre & Anaesthesia Admission 2026-27 Tamil Nadu | JKKN",
        seoDescription: "Apply for BSc OT & Anaesthesia Technology admission at JKKN College. ₹1.7L/yr MQ, 10 seats, 4-yr course, 95% placement, ₹3.5-5 LPA avg package. No NEET.",
        seoKeywords: [
            "bsc operation theatre technology admission tamilnadu",
            "bsc anaesthesia technology admission",
            "ot technician course tamilnadu",
            "anaesthesia technician course admission",
            "bsc ot anaesthesia admission 2026",
            "jkkn operation theatre admission",
            "surgical technologist course tamilnadu",
            "ot technology fees tamilnadu",
            "anaesthesia technology eligibility"
        ],
        whyChoose: [
            { title: "Universally Employable", desc: "Every hospital with surgical capability needs OT and anaesthesia techs. India has 50,000+ open positions — placement is virtually guaranteed." },
            { title: "Multi-Speciality OT Rotations", desc: "Internship covers General, Ortho, Neuro, Cardiac, OB-GYN, Paediatric, and Day-Care OTs. You get exposure to every surgical speciality before specialising." },
            { title: "Robotic Surgery Future", desc: "Da Vinci, Mako, and Versius robotic systems are scaling rapidly in India. JKKN trains future Robotic Surgery Technologists — a niche, high-paying specialty." },
            { title: "Strong Gulf Demand", desc: "Aster DM, NMC, Mediclinic, and Saudi government hospitals actively hire Indian OT techs at ₹15-28 LPA after 2-3 years experience and DHA/HAAD/MOH licensing." },
            { title: "Critical Role in Patient Safety", desc: "Anaesthesia techs maintain patient safety throughout surgery — high-responsibility, high-respect role. Also opens pathways into Transplant OT and CTVS specialist tracks." }
        ],
        syllabus: [
            { year: "Year 1", title: "Foundations", topics: ["Human Anatomy", "Human Physiology", "Biochemistry", "Surgical Anatomy", "Medical Terminology", "First Aid & BLS", "Hospital Infection Control"] },
            { year: "Year 2", title: "Surgical & Anaesthesia Basics", topics: ["Pathology", "Pharmacology", "Surgical Instruments", "Anaesthesia Principles", "OT Layout & Sterilization", "Patient Positioning", "Microbiology"] },
            { year: "Year 3", title: "Advanced OT & Anaesthesia", topics: ["Anaesthesia Equipment", "Airway Management", "Monitoring in Anaesthesia", "Speciality OT (Cardiac/Neuro/Ortho)", "CSSD Operations", "Emergency Anaesthesia", "Research Methodology"] },
            { year: "Year 4", title: "Clinical Internship", topics: ["General Surgery OT", "Ortho OT", "Neuro OT", "Cardiac OT", "OB-GYN OT", "Paediatric OT", "Day-Care OT & Project Work"] }
        ],
        skills: ["OT Setup & Sterilisation", "Anaesthesia Machine Operation", "Airway Management (Intubation Assist)", "Patient Vital Monitoring", "ECG / SpO2 / EtCO2 / ABG", "Surgical Instrument Handling", "Drug Calculation & Administration", "Peri-Operative Care", "CSSD Workflow", "Emergency Drug Trolley Management", "Defibrillation & ACLS", "Documentation & Consent"],
        equipment: ["Datex Ohmeda / Drager Anaesthesia Machines", "Philips IntelliVue Monitors", "Medtronic / Mindray Defibrillators", "Stryker / Karl Storz Endoscopy", "Pulse Oximeters & EtCO2 Modules", "ABG Analysers (Radiometer)", "Surgical Loupes & Microscopes", "Electrocautery Units", "Suction Apparatus", "Da Vinci Robotic Console (exposure)", "CSSD Autoclaves & ETO Sterilisers", "Emergency Crash Carts"],
        dayInLife: [
            "07:30 AM — OT setup; check anaesthesia machine, monitors, drug trolley; review surgical list",
            "08:30 AM — Patient 1 receiving — IV access, pre-medication, monitoring setup",
            "09:00 AM — Anaesthesia induction; assist with intubation; monitor vitals during 2-hour surgery",
            "11:30 AM — Patient handover to recovery; OT turnover (cleaning, sterilisation) — 15 min",
            "12:00 PM — Patient 2 surgery (Ortho — knee replacement); regional anaesthesia setup",
            "03:00 PM — Lunch + CSSD inspection",
            "04:00 PM — Emergency C-section case; on-call until 6 PM",
            "06:00 PM — Day-end logbook, instrument count, shift handover"
        ],
        recruitersByRegion: [
            { region: "India — Multi-Speciality", hospitals: ["Apollo Hospitals", "Fortis Healthcare", "MIOT International", "Manipal Hospitals", "Kauvery", "Narayana Health"] },
            { region: "India — Day-Care & Robotic", hospitals: ["Apollo Day Care", "Vasan Health Care", "Sankara Eye Care", "Robotic Surgery Centres"] },
            { region: "Gulf", hospitals: ["Aster DM Healthcare", "NMC Healthcare UAE", "Mediclinic Middle East", "Saudi German Hospital", "Hamad Medical Qatar"] },
            { region: "Southeast Asia", hospitals: ["Mount Elizabeth Singapore", "Bumrungrad Thailand", "Gleneagles Malaysia"] }
        ],
        higherStudies: [
            { name: "MSc OT & Anaesthesia Technology", description: "2-year specialisation. Opens senior OT In-charge and academic roles. Offered at TN MGR University and select private universities." },
            { name: "PG Diploma in Cardiac Anaesthesia", description: "1-year specialised program. Cardiac Anaesthesia Techs work in CTVS OTs and earn 40-60% more than general OT techs." },
            { name: "Robotic Surgery Technologist Certification", description: "Intuitive Surgical (Da Vinci) and Stryker (Mako) certifications — specialist robotic surgery techs are rare and well-paid (₹6-12 LPA India, ₹25-40 LPA Gulf)." },
            { name: "MBA Hospital Administration", description: "For OT Manager and CSSD Head roles. Apollo, Fortis, and Manipal promote graduates with MBA + clinical experience." }
        ],
        faqs: [
            { q: "What is the role of an OT & Anaesthesia Technologist?", a: "OT & Anaesthesia Technologists set up the operation theatre, prepare instruments and equipment, assist the anaesthesiologist with airway management and drug administration, monitor patient vitals (ECG/BP/SpO2/EtCO2) during surgery, manage the CSSD, and ensure sterile field maintenance. They are critical members of every surgical team." },
            { q: "Is BSc OT & Anaesthesia a good career?", a: "Yes — universal employability since every hospital with surgical capability needs OT and anaesthesia techs. India has 50,000+ open positions. Career progression: ₹2.5-4 LPA at entry → ₹5-9 LPA in 5 years → OT In-charge / CSSD Manager in 8-10 years. Gulf packages range ₹15-28 LPA." },
            { q: "What is the fee for BSc OT & Anaesthesia at JKKN?", a: "Management Quota (MQ) annual fee is ₹1,70,000 — total ₹6,80,000 for 4 years. Government Quota (GQ) is as per Tamil Nadu Govt norms. Installments, scholarships, and education loan assistance are available." },
            { q: "How many seats for BSc OT & Anaesthesia at JKKN?", a: "10 Management Quota (MQ) seats — among the larger intakes among AHS courses at JKKN. Additional Government Quota (GQ) seats are filled via Tamil Nadu Govt counselling." },
            { q: "Will I get hands-on training in OT during the course?", a: "Yes — extensive hands-on training. 1-year mandatory internship at JKKN's 500+ bed hospital includes rotations across General Surgery, Ortho, Neuro, Cardiac, OB-GYN, Paediatric, and Day-Care OTs. Learners assist with 200+ procedures during the internship." },
            { q: "Can OT & Anaesthesia graduates work in cardiac surgery?", a: "Yes — with 2-3 years of general OT experience, technologists can specialise in Cardiac Anaesthesia, CTVS OT, or Transplant OT. These specialist roles pay 30-50% more than general OT positions. Many JKKN alumni currently work in cardiac OTs at Apollo and Madras Medical Mission." }
        ]
    },
    {
        slug: "respiratory-therapy",
        name: "B.Sc Respiratory Therapy",
        shortName: "Respiratory Therapy",
        coursePageHref: "/respiratory-therapy",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹1,10,000 / year",
        mqFeeNumeric: 110000,
        totalFeeMQ: "₹4,40,000",
        seats: "10 (MQ)",
        avgPackage: "₹3 – 4.5 LPA",
        salaryRange: "Entry: ₹2.4 – 3.5 LPA · Senior (5+ yrs): ₹5 – 8 LPA · International: ₹14 – 26 LPA",
        description: "Manage ventilators, ABG analysis, pulmonary rehabilitation, oxygen therapy, and critical care of patients with respiratory failure.",
        longDescription: "B.Sc Respiratory Therapy at JKKN College is a 4-year program (3 + 1) producing certified Respiratory Therapists trained to manage patients with acute and chronic respiratory disorders. The learning framework covers mechanical ventilation, non-invasive ventilation (BiPAP, CPAP, HFNC), arterial blood gas (ABG) analysis, pulmonary function testing, oxygen therapy, airway management, pulmonary rehabilitation, sleep medicine (PSG), and ECMO support. Affiliated to TN Dr. MGR Medical University. Clinical training across MICU, SICU, NICU, PICU, Pulmonology OPD, and Sleep Lab at JKKN's hospital.",
        careerScope: "Respiratory Therapy demand exploded post-COVID and continues to grow at 18-22% CAGR globally. India has only ~5,000 qualified respiratory therapists for a population of 1.4 billion — a structural shortage. US-trained RTs earn USD 70,000–90,000; UK, Canada, and Australia have active immigration pathways for Indian BSc RTs. Top Indian recruiters: Apollo, Fortis, MIOT, Christian Medical College, AIIMS, and corporate ICU chains pay ₹2.4–3.5 LPA entry, ₹5–8 LPA after 5 years. Gulf countries (UAE, Saudi, Kuwait) hire Indian RTs at ₹14–26 LPA. Specialisations include ECMO Specialist, Neonatal RT, Pulmonary Rehab Specialist, Sleep Technologist, and Home Ventilation Coordinator.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹1,10,000 / year" },
            { label: "Total (4 years, MQ)", value: "₹4,40,000" }
        ],
        roles: ["Respiratory Therapist", "Ventilator Specialist", "ECMO Specialist", "Pulmonary Rehab Therapist", "Sleep Lab Technician", "Neonatal RT", "ICU Respiratory Care Lead", "Home Ventilation Coordinator"],
        recruiters: ["Apollo Critical Care", "Fortis ICU", "MIOT Pulmonology", "CMC Vellore", "AIIMS", "Manipal", "NHS UK", "Saudi German Hospital", "Cleveland Clinic UAE"],
        bestFor: "Learners drawn to critical care, ICU work, and post-COVID high-demand respiratory medicine — with strong abroad migration pathways.",
        internship: "1 year ICU + Pulmonology rotation at JKKN — adult MICU, SICU, neonatal NICU, paediatric PICU, and Sleep Lab postings.",
        iconKey: "wind",
        seoTitle: "BSc Respiratory Therapy Admission 2026-27 in Tamil Nadu | JKKN College",
        seoDescription: "Apply for BSc Respiratory Therapy admission at JKKN College, Tamil Nadu. ₹1.1L/yr MQ, 10 seats, 4-yr course, 95% placement, ₹3-4.5 LPA. Strong abroad scope.",
        seoKeywords: [
            "bsc respiratory therapy admission tamilnadu",
            "bsc respiratory therapy admission 2026",
            "respiratory therapy course fees tamilnadu",
            "respiratory therapist course admission",
            "jkkn respiratory therapy admission",
            "bsc ventilator technology course",
            "respiratory care course tamilnadu",
            "rt course eligibility tamilnadu",
            "bsc respiratory therapy without neet"
        ],
        whyChoose: [
            { title: "Post-COVID Demand Surge", desc: "Respiratory therapy demand grew 18-22% globally post-pandemic. India has only ~5,000 qualified RTs for 1.4 billion — structural shortage will persist for a decade." },
            { title: "Strong Migration Pathway", desc: "USA (NBRC RRT cert), UK, Canada, and Australia have active visa programs for Indian BSc RTs. US RTs earn USD 70-90k (₹58-75 LPA)." },
            { title: "Multi-Unit ICU Training", desc: "Rotations across MICU, SICU, NICU, PICU, Pulmonology OPD, and Sleep Lab at JKKN's 500+ bed hospital — broad clinical exposure." },
            { title: "ECMO & Advanced Ventilation", desc: "JKKN's MICU has ECMO capability; you train on ARDS management, prone ventilation, weaning protocols, and HFNC therapy." },
            { title: "Specialisation Routes", desc: "After BSc, specialise in Neonatal RT, ECMO Specialist, Pulmonary Rehab, or Sleep Tech — each opens 30-50% higher salary brackets." }
        ],
        syllabus: [
            { year: "Year 1", title: "Foundations", topics: ["Human Anatomy", "Human Physiology", "Biochemistry", "Respiratory Anatomy", "Medical Terminology", "First Aid & BLS", "Communication Skills"] },
            { year: "Year 2", title: "Pulmonary Sciences", topics: ["Pathology", "Pharmacology", "Respiratory Pathophysiology", "Basic Ventilator Mechanics", "ABG Analysis", "Oxygen Therapy", "Microbiology"] },
            { year: "Year 3", title: "Advanced Respiratory Care", topics: ["Mechanical Ventilation", "NIV (BiPAP/CPAP/HFNC)", "Pulmonary Function Tests", "ECMO Basics", "Sleep Medicine (PSG)", "Pulmonary Rehabilitation", "Research Methodology"] },
            { year: "Year 4", title: "Clinical Internship", topics: ["MICU Rotation", "SICU Rotation", "NICU/PICU Rotation", "Pulmonology OPD", "Sleep Lab", "Pulmonary Rehab", "Project Work"] }
        ],
        skills: ["Mechanical Ventilation Setup", "NIV (BiPAP/CPAP/HFNC) Operation", "ABG Analysis & Interpretation", "Airway Management", "Endotracheal Intubation Assist", "Pulmonary Function Testing", "Oxygen Therapy Delivery", "ECMO Circuit Monitoring", "Sleep Study (PSG) Operation", "Pulmonary Rehab Programs", "BLS & ACLS Certified", "Patient Counselling"],
        equipment: ["Drager Evita / Hamilton G5 Ventilators", "Philips V60 / ResMed NIV Machines", "Vyaire / Carefusion HFNC", "Radiometer ABL90 ABG Analyser", "Spirometers (Vyntus / MIR)", "Polysomnography (PSG) Systems", "ECMO Circuits (Maquet / Getinge)", "Pulse Oximeters & Capnographs", "Nebulisers & Aerosol Generators", "Oxygen Concentrators", "Suction Apparatus", "Defibrillators"],
        dayInLife: [
            "07:00 AM — ICU rounds with intensivist; review ventilator settings for 8-10 patients",
            "08:00 AM — ABG sampling and analysis; adjust ventilator settings (PEEP, FiO2, Pressure Support)",
            "10:00 AM — Weaning trial for stable patient; SBT (Spontaneous Breathing Trial) monitoring",
            "11:30 AM — Bedside intubation assist for new ARDS admission",
            "01:00 PM — Lunch + documentation",
            "02:00 PM — Pulmonary function testing (PFT) for OPD patients",
            "04:00 PM — Pulmonary rehab session with COPD patient",
            "06:00 PM — Evening ventilator round + handover; on-call for night emergencies"
        ],
        recruitersByRegion: [
            { region: "India — Critical Care", hospitals: ["Apollo Critical Care", "Fortis ICU", "MIOT", "Manipal", "Kauvery", "Aster"] },
            { region: "India — Teaching Hospitals", hospitals: ["CMC Vellore", "AIIMS Delhi", "PGI Chandigarh", "JIPMER", "St. John's Bangalore"] },
            { region: "Gulf", hospitals: ["Cleveland Clinic Abu Dhabi", "Saudi German Hospital", "Aster Gulf", "King Faisal Specialist Hospital"] },
            { region: "UK / Canada / Australia", hospitals: ["NHS Trusts (UK)", "AHPRA-registered Hospitals (AU)", "CSRT-certified Hospitals (CA)"] },
            { region: "USA (Post-Bridge)", hospitals: ["Mayo Clinic", "Cleveland Clinic Ohio", "Johns Hopkins", "Massachusetts General"] }
        ],
        higherStudies: [
            { name: "MSc Respiratory Therapy", description: "2-year specialisation. Opens academic, ICU lead, and ECMO Specialist roles. Offered at Manipal, KMCT, and select institutions." },
            { name: "PG Diploma in Neonatal RT", description: "1-year specialised program. Neonatal RTs in NICUs earn 30-50% more; rare specialty with high demand." },
            { name: "NBRC RRT (US)", description: "National Board for Respiratory Care — Registered Respiratory Therapist certification. With 1-year US AS-RT bridge, opens US RT roles at USD 70-90k." },
            { name: "ECMO Specialist Certification (ELSO)", description: "Extracorporeal Life Support Organization certification. ECMO specialists earn ₹6-12 LPA in India and ₹25-40 LPA in Gulf." }
        ],
        faqs: [
            { q: "What does a BSc Respiratory Therapist do?", a: "A Respiratory Therapist manages mechanical ventilators in ICU, performs ABG analysis, sets up non-invasive ventilation (BiPAP/CPAP/HFNC), conducts pulmonary function tests, manages airway and oxygen therapy, runs pulmonary rehab programs, and supports ECMO patients. Critical role in ICUs, ERs, NICUs, and Sleep Labs." },
            { q: "Is respiratory therapy a good career after COVID?", a: "Excellent — post-COVID, demand surged 18-22% globally. India has only ~5,000 qualified RTs for 1.4 billion people. US RTs earn USD 70-90k; Canada, UK, Australia have active visa pathways. India entry packages ₹2.4-3.5 LPA, senior roles ₹5-8 LPA, Gulf ₹14-26 LPA." },
            { q: "What is the fee for BSc Respiratory Therapy at JKKN?", a: "Management Quota (MQ) annual fee is ₹1,10,000 — total ₹4,40,000 for 4 years. Government Quota (GQ) is as per Tamil Nadu Govt norms. Installments and scholarships available." },
            { q: "How many seats for BSc Respiratory Therapy at JKKN?", a: "10 Management Quota (MQ) seats + additional GQ seats via Tamil Nadu Govt counselling. Affordable fee + strong placement makes it one of the most popular AHS courses at JKKN." },
            { q: "Can BSc Respiratory Therapy graduates migrate to the USA?", a: "Yes — but the US requires the NBRC CRT/RRT certification and additional bridge education (typically a 1-year US AS-RT program). JKKN BSc RT is a strong foundation. Many alumni follow this pathway and earn USD 70-90k as RRTs. Canada and Australia have simpler bridging programs." },
            { q: "Will I learn ECMO and advanced ventilation?", a: "Yes — JKKN's MICU/SICU has advanced ventilators, BiPAP/CPAP/HFNC machines, and ECMO capability. The 1-year internship includes hands-on exposure to ARDS management, prone ventilation, weaning protocols, and basic ECMO support." }
        ]
    },
    {
        slug: "physician-assistant",
        name: "B.Sc Physician Assistant",
        shortName: "Physician Assistant",
        coursePageHref: "/physician-assistant",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹1,30,000 / year",
        mqFeeNumeric: 130000,
        totalFeeMQ: "₹5,20,000",
        seats: "10 (MQ)",
        avgPackage: "₹3 – 4.5 LPA",
        salaryRange: "Entry: ₹2.4 – 3.5 LPA · Senior (5+ yrs): ₹5 – 9 LPA · International (US/UK): ₹40 – 80 LPA (post bridge)",
        description: "Work alongside doctors in OPD/IPD/Emergency — perform history taking, basic procedures, patient counselling, and clinical documentation.",
        longDescription: "B.Sc Physician Assistant at JKKN College is a 4-year program (3 + 1) preparing learners as Clinical Physician Assistants who work directly under physicians' supervision. The course covers clinical history-taking, physical examination, basic diagnostic procedures (suturing, IV cannulation, ABG sampling, lumbar puncture assistance), patient counselling, clinical documentation, EMR systems, and OPD/IPD/Emergency workflows. Affiliated to TN Dr. MGR Medical University. Internship rotations cover General Medicine, Cardiology, Neurology, Oncology, OB-GYN, Paediatrics, and Emergency Medicine at JKKN's 500+ bed teaching hospital.",
        careerScope: "Physician Assistant is uniquely positioned as a bridge career between nursing and medicine. In India, demand is growing in corporate hospitals (Apollo, Fortis, Manipal, Aster) for OPD-based clinical assistants — entry packages ₹2.4–3.5 LPA, senior PAs ₹5–9 LPA. The biggest opportunity is international migration: US Physician Assistants earn USD 100,000–130,000 (₹80L–₹1Cr+); UK Physician Associates earn GBP 45,000–65,000. The pathway requires a 2-3 year US PA bridge program or UK PA registration. JKKN BSc PA forms an excellent foundation. Specialisations include Cardiology PA, Oncology PA, Emergency PA, and Surgical First Assistant.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹1,30,000 / year" },
            { label: "Total (4 years, MQ)", value: "₹5,20,000" }
        ],
        roles: ["Physician Assistant", "Clinical Assistant", "Cardiology PA", "Oncology PA", "Emergency PA", "Surgical First Assistant", "Medical Officer Assistant", "Health Coach"],
        recruiters: ["Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "Aster Medcity", "Narayana Health", "Kauvery Hospital", "Pathway to US PA / UK Physician Associate"],
        bestFor: "Learners who want a doctor-adjacent clinical role and a bridge to international PA careers earning ₹40-80 LPA.",
        internship: "1 year rotation across General Medicine, Cardiology, Neurology, Oncology, OB-GYN, Paediatrics, and Emergency at JKKN hospital.",
        iconKey: "user-check",
        seoTitle: "BSc Physician Assistant Admission 2026-27 in Tamil Nadu | JKKN College",
        seoDescription: "Apply for BSc Physician Assistant admission at JKKN College, Tamil Nadu. ₹1.3L/yr MQ, 10 seats, 4-yr course, ₹3-4.5 LPA avg, US/UK PA bridge pathway.",
        seoKeywords: [
            "bsc physician assistant admission tamilnadu",
            "bsc physician assistant admission 2026",
            "physician assistant course fees tamilnadu",
            "bsc pa admission tamilnadu",
            "jkkn physician assistant admission",
            "us physician assistant pathway india",
            "uk physician associate course india",
            "bsc clinical assistant admission",
            "physician assistant eligibility tamilnadu"
        ],
        whyChoose: [
            { title: "Doctor-Adjacent Clinical Role", desc: "PAs work directly with consultants on patient care, OPD, IPD, and Emergency — closest you can get to physician-level work without MBBS." },
            { title: "International Migration Pathway", desc: "US PAs earn USD 100-130k (₹80L-₹1Cr+); UK Physician Associates earn GBP 45-65k. JKKN BSc PA is a strong launchpad for both pathways." },
            { title: "2,000+ Patient Encounters", desc: "Internship includes Medicine, Cardiology, Neurology, Oncology, OB-GYN, Paediatrics, and Emergency rotations — broad clinical exposure rare in entry-level allied health." },
            { title: "Speciality Tracks", desc: "After 2-3 years experience, specialise as Cardiology PA, Oncology PA, Emergency PA, or Surgical First Assistant — each pays 30-50% premium." },
            { title: "OPD/Emergency Versatility", desc: "PAs can move flexibly between OPD, IPD, ER, and Day-Care settings — career stability through versatility." }
        ],
        syllabus: [
            { year: "Year 1", title: "Medical Foundations", topics: ["Human Anatomy", "Human Physiology", "Biochemistry", "Medical Terminology", "Clinical Communication", "First Aid & BLS", "Behavioural Science"] },
            { year: "Year 2", title: "Clinical Sciences", topics: ["Pathology", "Pharmacology", "Microbiology", "General Medicine", "Surgical Principles", "Clinical Examination Skills", "EMR & Documentation"] },
            { year: "Year 3", title: "Speciality Medicine", topics: ["Cardiology", "Neurology", "Oncology", "OB-GYN", "Paediatrics", "Emergency Medicine", "Clinical Decision Support", "Research Methodology"] },
            { year: "Year 4", title: "Clinical Internship", topics: ["General Medicine OPD/IPD", "Cardiology Rotation", "Neurology Rotation", "Oncology Rotation", "OB-GYN/Paediatrics", "Emergency Medicine", "Project Work"] }
        ],
        skills: ["History Taking & Physical Exam", "Clinical Documentation (EMR)", "IV Cannulation", "Suturing & Wound Care", "ABG Sampling", "Lumbar Puncture Assist", "Patient Counselling", "OPD Workflow Management", "BLS & ACLS Certified", "Differential Diagnosis Support", "EKG Interpretation", "Insurance/TPA Coordination"],
        equipment: ["Diagnostic Examination Tools (Stethoscope/Otoscope/BP)", "ECG Machines", "Glucometers", "Pulse Oximeters", "Suturing Kits", "IV Access Trolleys", "Crash Carts (BLS/ACLS)", "EMR Workstations (Epic / Allscripts)", "Diagnostic Microscopes (basic)", "Ophthalmoscopes & Auriscopes", "Doppler Sonography", "Patient Monitors"],
        dayInLife: [
            "08:00 AM — OPD opens; assist consultant with patient flow — history taking, vitals, EMR entry",
            "10:30 AM — Procedure room — perform IV cannulation, suturing for OPD-day-care patients",
            "12:30 PM — IPD round with consultant; review inpatient charts, write progress notes",
            "01:30 PM — Lunch + EMR catch-up",
            "02:30 PM — Speciality clinic (Cardiology) — pre-rounds, ECG interpretation, patient counselling",
            "05:00 PM — Emergency Department coverage — initial triage, history, basic procedures",
            "07:00 PM — End-of-day documentation, handover, on-call shift begins"
        ],
        recruitersByRegion: [
            { region: "India — Corporate Hospitals", hospitals: ["Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "Aster Medcity", "Narayana Health", "Kauvery"] },
            { region: "India — Speciality Clinics", hospitals: ["Cardiology Chains", "Oncology Day Care Centres", "Emergency Care Networks (108)"] },
            { region: "UK — Physician Associate", hospitals: ["NHS Trusts (UK PA registration required)", "Private practice clinics"] },
            { region: "USA (Post-Bridge)", hospitals: ["Mayo Clinic", "Cleveland Clinic", "Kaiser Permanente", "HCA Healthcare"] }
        ],
        higherStudies: [
            { name: "MSc Physician Assistant", description: "2-year specialisation in India. Opens senior clinical and academic roles. Offered at Manipal and select universities." },
            { name: "US Physician Assistant (MS-PA)", description: "2-3 year US Master's-level PA program post-bachelor. Requires PA-CAT or GRE. US PAs earn USD 100-130k. Top schools: Duke, Yale, USC." },
            { name: "UK Physician Associate Registration", description: "1-year UK PA course or direct registration with FRCP equivalency. UK PAs earn GBP 45-65k under NHS." },
            { name: "MBA Hospital Administration", description: "For OPD Manager, Clinical Operations Lead roles. Strong career pathway in corporate hospitals." }
        ],
        faqs: [
            { q: "What does a BSc Physician Assistant do?", a: "A Physician Assistant works under a physician's supervision — takes patient history, performs physical examinations, orders and interprets basic tests, performs procedures (suturing, IV access, ABG, dressings), counsels patients, manages EMR documentation, and runs OPD/IPD workflows. PAs are doctor-extenders in busy hospitals." },
            { q: "How is BSc Physician Assistant different from BSc Nursing?", a: "BSc Nursing focuses on bedside nursing care, medication administration, and patient monitoring. BSc PA focuses on doctor-side clinical work — history taking, examination, basic procedures, and clinical decision support. PAs work in OPDs/clinics under doctors; nurses primarily work in wards/ICUs. PAs have stronger international migration pathways (US/UK PA programs)." },
            { q: "What is the fee for BSc Physician Assistant at JKKN?", a: "Management Quota (MQ) annual fee is ₹1,30,000 — total ₹5,20,000 for 4 years. Government Quota (GQ) as per TN Govt norms. Installments and scholarships available." },
            { q: "How many seats for BSc Physician Assistant at JKKN?", a: "10 Management Quota (MQ) seats + GQ seats via Tamil Nadu counselling. One of the more competitive intakes due to international PA pathway appeal." },
            { q: "Can I become a US Physician Assistant after BSc PA from India?", a: "Yes, with additional steps. The US requires a Master's-level accredited PA program (typically 2-3 years post-bachelor). Indian BSc PA is a strong foundation but you'll need to complete the US PA program + PANCE certification. US PAs earn USD 100-130k. Alternative: UK Physician Associate registration (1-year bridge)." },
            { q: "Will I get hands-on patient interaction during the course?", a: "Yes — extensive patient interaction from Year 2. 1-year mandatory clinical internship at JKKN's 500+ bed hospital covers Medicine, Cardiology, Neurology, Oncology, OB-GYN, Paediatrics, and Emergency. Learners complete 2,000+ patient encounters during the program." }
        ]
    },
    {
        slug: "critical-care-technology",
        name: "B.Sc Critical Care Technology",
        shortName: "Critical Care",
        coursePageHref: "/critical-care-technology",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹1,10,000 / year",
        mqFeeNumeric: 110000,
        totalFeeMQ: "₹4,40,000",
        seats: "10 (MQ)",
        avgPackage: "₹3 – 4.5 LPA",
        salaryRange: "Entry: ₹2.4 – 3.5 LPA · Senior (5+ yrs): ₹5 – 8 LPA · International: ₹14 – 26 LPA",
        description: "Manage MICU/SICU/CCU/NICU equipment, ventilators, monitors, and assist intensivists in life-saving interventions.",
        longDescription: "B.Sc Critical Care Technology at JKKN College is a 4-year program (3 + 1) training learners as Critical Care Technologists who form the backbone of every Intensive Care Unit (MICU, SICU, CCU, NICU, PICU). The learning framework covers ICU equipment (ventilators, monitors, infusion pumps, dialysis machines, ECMO), haemodynamic monitoring, ABG analysis, advanced airway management, drug calculations, sepsis protocols, ACLS/BLS, organ donation, and end-of-life care. Affiliated to TN Dr. MGR Medical University. Internship rotates across all ICU types at JKKN's 500+ bed multi-speciality hospital.",
        careerScope: "ICU demand has structurally grown post-COVID — India added 2 lakh+ ICU beds during 2020-2024 with massive ongoing shortage of trained critical care professionals. Top Indian recruiters: Apollo Critical Care, Fortis, MIOT, Manipal, Kauvery, Narayana — pay ₹2.4–3.5 LPA entry, ₹5–8 LPA after 5 years as senior CCT or ICU In-charge. Gulf countries (UAE, Saudi, Qatar) hire Indian CCTs at ₹14–26 LPA. Specialisations include ECMO Specialist, NICU/PICU Specialist, CRRT Specialist, Cardiac ICU Tech, and ICU Manager. The structural shortage means high job security across the next decade.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹1,10,000 / year" },
            { label: "Total (4 years, MQ)", value: "₹4,40,000" }
        ],
        roles: ["Critical Care Technologist", "ICU Technician", "ECMO Specialist", "NICU/PICU Specialist", "CRRT Specialist", "Code Blue Team Member", "ICU In-charge", "Cardiac ICU Tech"],
        recruiters: ["Apollo Critical Care", "Fortis ICU", "MIOT", "Manipal Hospitals", "Kauvery Hospital", "Narayana Health", "Mediclinic Middle East", "Saudi German Hospital", "Aster Gulf"],
        bestFor: "Learners passionate about intensive care, ECMO, and life-support technology — high-pressure but extremely rewarding clinical work.",
        internship: "1 year rotation across MICU, SICU, CCU, NICU, PICU, and ECMO unit at JKKN's 500+ bed multi-speciality hospital.",
        iconKey: "siren",
        seoTitle: "BSc Critical Care Technology Admission 2026-27 Tamil Nadu | JKKN",
        seoDescription: "Apply for BSc Critical Care Technology admission at JKKN College. ₹1.1L/yr MQ, 10 seats, 4-yr course, 95% placement, ₹3-4.5 LPA. Strong ICU career scope.",
        seoKeywords: [
            "bsc critical care technology admission tamilnadu",
            "bsc critical care admission 2026",
            "critical care course fees tamilnadu",
            "icu technologist course admission",
            "jkkn critical care admission",
            "bsc ecmo course tamilnadu",
            "icu technician course tamilnadu",
            "critical care eligibility tamilnadu",
            "bsc critical care without neet"
        ],
        whyChoose: [
            { title: "Post-COVID ICU Expansion", desc: "India added 2 lakh+ ICU beds during 2020-2024. Massive shortage of trained critical care professionals — placement is rapid and broad." },
            { title: "Multi-ICU Rotations", desc: "Internship covers MICU, SICU, CCU, NICU, PICU, and ECMO unit at JKKN's 500+ bed hospital. Wider clinical exposure than most AHS programs." },
            { title: "ECMO Specialist Pathway", desc: "JKKN's MICU has ECMO capability — learners get hands-on exposure. Post-graduation ELSO certification opens ₹6-12 LPA India / ₹25-40 LPA Gulf ECMO Specialist roles." },
            { title: "24/7 Job Security", desc: "ICUs operate 24/7 with high staffing ratios — recession-proof career with high shift premiums and overtime pay." },
            { title: "Speciality Tracks", desc: "Pathways into NICU Specialist (neonatal), PICU Specialist (paediatric), CRRT Specialist (ICU dialysis), and Cardiac ICU Tech — each opens niche, well-paid careers." }
        ],
        syllabus: [
            { year: "Year 1", title: "Medical Foundations", topics: ["Human Anatomy", "Human Physiology", "Biochemistry", "Critical Care Anatomy", "Medical Terminology", "First Aid & BLS", "ICU Infection Control"] },
            { year: "Year 2", title: "Critical Care Sciences", topics: ["Pathology", "Pharmacology", "Critical Care Pathophysiology", "Ventilator Basics", "ABG Analysis", "Hemodynamic Monitoring", "Microbiology"] },
            { year: "Year 3", title: "Advanced ICU Care", topics: ["Advanced Ventilation", "ECMO & CRRT", "Sepsis Management", "Advanced Airway", "Drug Calculations", "ACLS/PALS/NRP", "Research Methodology"] },
            { year: "Year 4", title: "Clinical Internship", topics: ["MICU Posting", "SICU Posting", "CCU Posting", "NICU/PICU Posting", "ECMO Unit", "Code Blue Team", "Project Work"] }
        ],
        skills: ["Mechanical Ventilation Management", "ABG Analysis & Interpretation", "Hemodynamic Monitoring (CVP/ABP)", "Infusion Pump & Drug Calculations", "Advanced Airway Management", "CRRT Setup & Monitoring", "ECMO Circuit Management", "ACLS / PALS / NRP Certified", "Sepsis Bundle Implementation", "Code Blue Response", "Defibrillation", "ICU Documentation"],
        equipment: ["Drager Evita / Hamilton G5 Ventilators", "Philips IntelliVue / Mindray Patient Monitors", "Baxter PrisMax CRRT Machines", "Maquet / Getinge ECMO Circuits", "Radiometer ABG Analysers", "Infusion / Syringe Pumps (B. Braun / Fresenius)", "Defibrillators (Zoll / Philips)", "Bedside Ultrasound (POCUS)", "Capnographs & EtCO2 Monitors", "Glucometers & Lactate Analysers", "Bronchoscopes", "Crash Carts"],
        dayInLife: [
            "07:00 AM — ICU rounds with intensivist; review 8-10 critical patients, ventilator and monitor settings",
            "08:30 AM — ABG sampling and interpretation; titrate vasopressors and ventilator support",
            "10:00 AM — Bedside intubation for new ARDS admission; central line assist",
            "12:00 PM — Code Blue alert — rapid response; assist with CPR and ACLS protocols",
            "01:00 PM — Lunch + handover notes",
            "02:00 PM — CRRT setup for AKI patient in SICU",
            "04:00 PM — NICU rotation — neonatal ventilator management for premature infant",
            "07:00 PM — End-of-shift documentation; on-call coverage begins for night ICU"
        ],
        recruitersByRegion: [
            { region: "India — Critical Care", hospitals: ["Apollo Critical Care", "Fortis ICU", "MIOT", "Manipal", "Kauvery", "Narayana Health", "Aster Medcity"] },
            { region: "India — Teaching Hospitals", hospitals: ["CMC Vellore", "AIIMS", "PGI Chandigarh", "JIPMER", "Sree Chitra Tirunal"] },
            { region: "Gulf", hospitals: ["Cleveland Clinic Abu Dhabi", "Mediclinic Middle East", "Saudi German Hospital", "Aster Gulf", "Hamad Medical Qatar"] },
            { region: "UK / Singapore", hospitals: ["NHS UK Trusts", "Mount Elizabeth Singapore", "Gleneagles Singapore", "Raffles Hospital"] }
        ],
        higherStudies: [
            { name: "MSc Critical Care Technology", description: "2-year specialisation. Opens academic and ICU lead roles. Offered at TN MGR University, Manipal, and select universities." },
            { name: "ECMO Specialist (ELSO Certification)", description: "Extracorporeal Life Support Organization certification. ECMO specialists earn ₹6-12 LPA in India, ₹25-40 LPA in Gulf." },
            { name: "PG Diploma in Neonatal Critical Care", description: "1-year specialised program. NICU specialists are rare and well-paid (₹5-9 LPA India, ₹16-28 LPA Gulf)." },
            { name: "FCCS / ATLS / PALS / NRP Certifications", description: "Fundamentals of Critical Care Support, Advanced Trauma Life Support, Paediatric ALS, Neonatal Resuscitation — all employer-preferred certifications." }
        ],
        faqs: [
            { q: "What does a BSc Critical Care Technologist do?", a: "A Critical Care Technologist operates ICU equipment (ventilators, monitors, infusion pumps, ECMO machines), performs ABG analysis, assists intensivists with intubation/central lines, manages haemodynamic monitoring, runs CRRT, participates in Code Blue responses, and provides 24/7 critical patient care in MICU/SICU/CCU/NICU." },
            { q: "Is BSc Critical Care a good career in 2026?", a: "Excellent — post-COVID India added 2 lakh+ ICU beds with massive ongoing shortage of trained critical care professionals. ICUs operate 24/7 with high staffing ratios. Top recruiters pay ₹2.4-3.5 LPA entry, ₹5-8 LPA in 5 years, ICU In-charges ₹8-12 LPA, Gulf packages ₹14-26 LPA." },
            { q: "What is the fee for BSc Critical Care Technology at JKKN?", a: "Management Quota (MQ) annual fee is ₹1,10,000 — total ₹4,40,000 for 4 years. Government Quota (GQ) as per Tamil Nadu Govt norms. Installments and scholarships available." },
            { q: "How many seats for BSc Critical Care at JKKN?", a: "10 Management Quota (MQ) seats + additional Government Quota (GQ) seats via Tamil Nadu Govt counselling." },
            { q: "Will I learn ECMO during BSc Critical Care?", a: "Yes — JKKN's MICU/SICU includes ECMO capability. The internship covers basic ECMO setup, monitoring, and circuit management. After graduation, focused ECMO Specialist certification (ELSO) opens roles at ₹6-12 LPA in India and ₹20-30 LPA in Gulf." },
            { q: "Is the work in ICU stressful?", a: "Critical care is intense — long shifts, life-and-death decisions, emotional weight. But it's also one of the most rewarding healthcare careers because you directly save lives. JKKN's internship includes mentorship and gradual responsibility scaling to build resilience and clinical confidence." }
        ]
    },
    {
        slug: "medical-record-science",
        name: "B.Sc Medical Record Science",
        shortName: "Medical Record Science",
        coursePageHref: "/medical-record-science",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹60,000 / year",
        mqFeeNumeric: 60000,
        totalFeeMQ: "₹2,40,000",
        seats: "15 (MQ)",
        avgPackage: "₹2.5 – 4 LPA",
        salaryRange: "Entry: ₹2 – 3 LPA · Senior (5+ yrs): ₹4.5 – 8 LPA · International (US Medical Coding): ₹8 – 18 LPA",
        description: "Handle medical records, ICD-10 / CPT coding, hospital data analytics, HIM systems, and insurance/TPA processing.",
        longDescription: "B.Sc Medical Record Science at JKKN College is a 4-year program (3 + 1) producing Health Information Managers, Medical Coders, and Hospital Data Analysts. The learning framework covers Health Information Management (HIM), ICD-10-CM/PCS and CPT-4 medical coding, EMR/EHR systems, hospital data analytics, healthcare quality (NABH/JCI), insurance and TPA processing, medical transcription, and healthcare law/ethics. Affiliated to TN Dr. MGR Medical University. Internship rotates across Medical Records Department, Quality Cell, Insurance/TPA desk, and Health Analytics at JKKN hospital.",
        careerScope: "Medical Record Science offers the most diverse career pathways at the lowest fee (₹60K/yr). The US medical coding industry — outsourced largely to India — employs 1.5 lakh+ Indian medical coders. Companies like Optum, Cognizant Healthcare, Omega Healthcare, AGS Health, and IKS Health hire BSc MRS grads at ₹2.5–4 LPA entry; certified CPC/CCS coders earn ₹5–8 LPA in 3-4 years; senior auditors earn ₹10–18 LPA. Hospital HIM roles pay ₹2–3 LPA entry; HIM Managers earn ₹6–10 LPA. Insurance/TPA companies (Star Health, ICICI Lombard, Bajaj Allianz) hire BSc MRS grads at ₹3–5 LPA. This is the best AHS course for an office-based, work-from-home-friendly, recession-proof career.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹60,000 / year — lowest among AHS courses" },
            { label: "Total (4 years, MQ)", value: "₹2,40,000" }
        ],
        roles: ["Medical Record Officer", "Medical Coder (ICD-10/CPT)", "HIM Specialist", "Insurance / TPA Coordinator", "Hospital Data Analyst", "EMR Administrator", "Healthcare Quality Officer", "Medical Auditor"],
        recruiters: ["Apollo Health Information", "Fortis HIM", "Optum (UHG)", "Cognizant Healthcare", "Omega Healthcare", "AGS Health", "IKS Health", "Star Health Insurance", "ICICI Lombard"],
        bestFor: "Learners who want the lowest fee (₹60K/yr), office-based work, work-from-home roles, and entry into healthcare IT / US medical coding.",
        internship: "1 year rotation in Medical Records, HIM, Insurance/TPA, Healthcare Quality, and Health Analytics departments.",
        iconKey: "file-text",
        seoTitle: "BSc Medical Record Science Admission 2026-27 Tamil Nadu | JKKN College",
        seoDescription: "Apply for BSc Medical Record Science admission at JKKN College. ₹60K/yr MQ (lowest fee), 15 seats, 4-yr course, medical coding & HIM careers, ₹2.5-4 LPA avg.",
        seoKeywords: [
            "bsc medical record science admission tamilnadu",
            "bsc medical record admission 2026",
            "medical record science fees tamilnadu",
            "medical coding course tamilnadu",
            "jkkn medical record admission",
            "bsc him course tamilnadu",
            "health information management course",
            "icd-10 coding course tamilnadu",
            "medical record science eligibility"
        ],
        whyChoose: [
            { title: "Lowest Fee Among AHS", desc: "₹60,000/year (₹2.4L total for 4 years) — most affordable AHS course at JKKN. High ROI with starting packages of ₹2.5-4 LPA." },
            { title: "Work-From-Home Friendly", desc: "Medical coding for US healthcare (largest industry employer) supports remote work. Optum, Cognizant, Omega, AGS Health — all hire BSc MRS grads for WFH roles." },
            { title: "Largest MQ Seat Intake (15)", desc: "JKKN offers 15 Management Quota seats — the highest among all AHS courses, with lower competition than clinical courses." },
            { title: "Diverse Career Pathways", desc: "US medical coding, hospital HIM, insurance/TPA, healthcare analytics, NABH quality cell, EMR administration — many parallel pathways from one degree." },
            { title: "Recession-Proof Office Career", desc: "Healthcare IT and medical coding grew during COVID and continue to expand. Office-based work, predictable shifts, no on-call burden." }
        ],
        syllabus: [
            { year: "Year 1", title: "Foundations", topics: ["Human Anatomy", "Human Physiology", "Medical Terminology", "Health Records Management Basics", "Computer Fundamentals", "Communication Skills", "Healthcare System Overview"] },
            { year: "Year 2", title: "HIM & Coding Basics", topics: ["Pathology", "Pharmacology", "ICD-10-CM Basics", "CPT-4 Basics", "Hospital Workflows", "Medical Transcription", "Healthcare Law & Ethics"] },
            { year: "Year 3", title: "Advanced HIM", topics: ["Advanced ICD-10 / CPT Coding", "EMR / EHR Systems", "Healthcare Analytics & SQL Basics", "NABH / JCI Quality Standards", "Insurance & TPA Processing", "HIPAA & Compliance", "Research Methodology"] },
            { year: "Year 4", title: "Clinical Internship", topics: ["Medical Records Department", "HIM & Coding Rotation", "Insurance / TPA Desk", "Healthcare Quality Cell", "Health Analytics Project", "Medical Audit Posting", "Project Work"] }
        ],
        skills: ["ICD-10-CM/PCS Coding", "CPT-4 Coding", "EMR/EHR Operation (Epic / Allscripts / Cerner)", "Medical Transcription", "Healthcare SQL & Analytics", "NABH/JCI Compliance", "Insurance / TPA Processing", "HIPAA Compliance", "Medical Audit", "Data Visualisation (Power BI/Tableau)", "Healthcare Documentation Standards", "Quality Indicators Reporting"],
        equipment: ["EMR Systems (Epic / Allscripts / Cerner)", "Coding Reference Tools (Encoder Pro / 3M)", "Medical Transcription Software", "Data Analytics Tools (Power BI / Tableau)", "SQL Databases", "Hospital Information Systems (HIS)", "Insurance / TPA Portals", "NABH Documentation Tools", "Office Suite (Excel Advanced)", "Healthcare Compliance Software", "Quality Indicator Dashboards", "Audit Tools"],
        dayInLife: [
            "09:00 AM — Log in to EMR system; review medical record charts pending coding",
            "09:30 AM — ICD-10 / CPT coding for discharge summaries — 15-20 charts per day target",
            "12:00 PM — Insurance / TPA query handling; resolve coding-related claim rejections",
            "01:00 PM — Lunch + team huddle",
            "02:00 PM — NABH quality indicator data entry; prepare monthly dashboard",
            "04:00 PM — Audit pending records for completeness; flag missing documentation",
            "05:30 PM — Generate reports for clinical heads; coordinate with billing team",
            "06:30 PM — Day-end documentation, prepare next day's chart queue"
        ],
        recruitersByRegion: [
            { region: "India — US Medical Coding (BPO)", hospitals: ["Optum (UnitedHealth Group)", "Cognizant Healthcare", "Omega Healthcare", "AGS Health", "IKS Health", "R1 RCM"] },
            { region: "India — Hospital HIM", hospitals: ["Apollo Health Information", "Fortis HIM", "Manipal Health Records", "Kauvery Quality Cell", "Aster Medcity HIM"] },
            { region: "India — Insurance / TPA", hospitals: ["Star Health Insurance", "ICICI Lombard", "Bajaj Allianz", "HDFC ERGO", "Medi Assist", "FHPL"] },
            { region: "Healthcare Analytics", hospitals: ["IQVIA", "Cognizant Health Analytics", "Optum Analytics", "Accenture Health"] }
        ],
        higherStudies: [
            { name: "MSc Health Information Management", description: "2-year specialisation. Opens senior HIM, Healthcare Analytics, and academic roles. Offered at Manipal, JIPMER, and select universities." },
            { name: "AAPC CPC / CCS (AHIMA) Certifications", description: "Certified Professional Coder (CPC) and Certified Coding Specialist (CCS). 4-6 month additional courses. Boost salaries 50-100%." },
            { name: "MBA Hospital Administration / Healthcare IT", description: "For HIM Manager and Healthcare IT roles. Combine with clinical experience for ₹8-15 LPA roles." },
            { name: "International — RHIA / RHIT (AHIMA, US)", description: "American Health Information Management Association certifications. Opens US healthcare data analyst roles at USD 50-70k." }
        ],
        faqs: [
            { q: "What is BSc Medical Record Science about?", a: "BSc Medical Record Science covers Health Information Management (HIM), ICD-10/CPT medical coding, EMR/EHR systems, hospital data analytics, insurance and TPA processing, healthcare quality (NABH/JCI), and medical transcription. It's the gateway to office-based, work-from-home-friendly healthcare careers." },
            { q: "Why is BSc Medical Record Science fee so low at JKKN?", a: "₹60,000/year (₹2.4L total) is the lowest among AHS courses because the program doesn't require expensive clinical equipment (no ventilators, cath labs, dialysis machines). It's learning studio + digital learning lab focused — making it the most affordable AHS pathway with strong career outcomes." },
            { q: "Can I work from home after BSc Medical Record Science?", a: "Yes — medical coding (ICD-10/CPT) for US healthcare is the largest work-from-home healthcare job in India. Companies like Optum, Cognizant Healthcare, Omega Healthcare, and AGS Health hire BSc MRS grads for remote coding roles. Salaries: ₹2.5-4 LPA entry, ₹5-8 LPA after certifications (CPC/CCS)." },
            { q: "How many seats for BSc Medical Record Science at JKKN?", a: "15 Management Quota (MQ) seats — the largest MQ intake among AHS courses at JKKN. Additional Government Quota (GQ) seats via Tamil Nadu counselling." },
            { q: "Is BSc Medical Record Science a good career?", a: "Yes — diverse pathways: US medical coding (₹2.5-18 LPA), hospital HIM (₹2-10 LPA), insurance/TPA (₹3-8 LPA), healthcare analytics (₹4-12 LPA). Lowest fee + highest seat count + recession-proof office work + work-from-home options = high ROI. India's medical coding industry employs 1.5 lakh+ professionals." },
            { q: "Do I need CPC or CCS certification after BSc?", a: "Highly recommended. CPC (Certified Professional Coder) and CCS (Certified Coding Specialist) certifications from AAPC/AHIMA boost salary 50-100%. Many JKKN MRS grads pursue these in Year 3-4 or right after graduation — typically a 4-6 month additional course." }
        ]
    },
    {
        slug: "accident-emergency-care",
        name: "B.Sc Accident & Emergency Care Technology",
        shortName: "Accident & Emergency",
        coursePageHref: "/accident-emergency-care",
        duration: "3 + 1 Years",
        durationISO: "P4Y",
        mqFee: "₹1,10,000 / year",
        mqFeeNumeric: 110000,
        totalFeeMQ: "₹4,40,000",
        seats: "10 (MQ)",
        avgPackage: "₹3 – 4.5 LPA",
        salaryRange: "Entry: ₹2.4 – 3.5 LPA · Senior (5+ yrs): ₹5 – 8 LPA · International: ₹14 – 24 LPA",
        description: "Handle trauma resuscitation, ACLS/BLS, pre-hospital ambulance care, disaster response, and ER triage.",
        longDescription: "B.Sc Accident & Emergency Care Technology at JKKN College is a 4-year program (3 + 1) training Emergency Medical Care Technologists who form the frontline of every hospital's Emergency Department. The learning framework covers Advanced Cardiac Life Support (ACLS), Basic Life Support (BLS), Advanced Trauma Life Support (ATLS), pre-hospital ambulance care, disaster management, ER triage protocols, polytrauma resuscitation, toxicology, mass casualty incident response, and emergency surgical assistance. Affiliated to TN Dr. MGR Medical University. Internship at JKKN's Emergency Department, Trauma Bay, Ambulance Service, and Disaster Management cell.",
        careerScope: "India's organised Emergency Medicine sector is growing 20% annually — fuelled by trauma centres (NABH-accredited Level 1/2 trauma units), 108 EMRI ambulance services, corporate hospital ERs, and disaster response networks. Top recruiters: Apollo Emergency, Fortis ER, MIOT Trauma, GVK EMRI (108 Services), Ziqitza Healthcare. Entry: ₹2.4–3.5 LPA, senior ER techs ₹5–8 LPA, Gulf packages ₹14–24 LPA. Specialisations: Trauma Care Specialist, Ambulance Paramedic, Disaster Response Specialist, Flight Paramedic (helicopter EMS), 108/EMRI Officer, ER Triage Lead. Career stability is high since emergency services are recession-proof and 24/7 staffed.",
        eligibility: [
            "+2 with Physics, Chemistry, Biology (PCB)",
            "Minimum 50% (Gen) / 45% (OBC) / 40% (SC/ST) aggregate",
            "Age 17+ as on 31 Dec 2026",
            "English as compulsory subject in +2",
            "Medical fitness certificate from registered practitioner"
        ],
        feeBreakdown: [
            { label: "Govt. Quota (GQ)", value: "As per TN Govt norms" },
            { label: "Management Quota (MQ)", value: "₹1,10,000 / year" },
            { label: "Total (4 years, MQ)", value: "₹4,40,000" }
        ],
        roles: ["Emergency Care Technologist", "Trauma Care Specialist", "Ambulance Paramedic", "ER Triage Officer", "Disaster Response Specialist", "108/EMRI Officer", "Flight Paramedic", "ER In-charge"],
        recruiters: ["Apollo Emergency", "Fortis ER", "MIOT Trauma", "GVK EMRI (108 Services)", "Ziqitza Healthcare", "Mediclinic Middle East", "Saudi Red Crescent", "Aster DM Healthcare"],
        bestFor: "Learners who thrive in fast-paced, high-stakes trauma and emergency medicine — drawn to saving lives in critical moments.",
        internship: "1 year rotation in ER, Trauma Bay, Ambulance Service, Disaster Management cell, and Toxicology unit at JKKN hospital.",
        iconKey: "siren",
        seoTitle: "BSc Accident & Emergency Care Admission 2026-27 Tamil Nadu | JKKN",
        seoDescription: "Apply for BSc Accident & Emergency Care Technology admission at JKKN College. ₹1.1L/yr MQ, 10 seats, 4-yr course, 95% placement, ₹3-4.5 LPA. Trauma & ER focus.",
        seoKeywords: [
            "bsc accident emergency care admission tamilnadu",
            "bsc emergency care admission 2026",
            "emergency care course fees tamilnadu",
            "trauma care course admission",
            "jkkn emergency care admission",
            "bsc paramedic course tamilnadu",
            "ambulance technician course tamilnadu",
            "er technologist course admission",
            "accident emergency care eligibility"
        ],
        whyChoose: [
            { title: "20% Annual Sector Growth", desc: "India's organised emergency medicine sector is growing 20% YoY — fuelled by trauma centres, 108 EMRI, and corporate ERs. Job creation is strong and sustained." },
            { title: "Frontline Patient Impact", desc: "Emergency Care Techs save lives in critical moments — high responsibility, high respect, high purpose career path." },
            { title: "Multi-Setting Career", desc: "ER, Trauma Bay, Ambulance Service (108), Disaster Response, Flight Paramedic (helicopter EMS) — switch settings throughout your career." },
            { title: "ACLS / ATLS / PALS Certified Learning Framework", desc: "Course includes Advanced Cardiac Life Support, Advanced Trauma Life Support, and Paediatric ALS — credentials employers explicitly require." },
            { title: "Gulf Demand for Trauma Techs", desc: "Saudi Red Crescent, Mediclinic, Hamad Medical Qatar actively hire Indian Emergency Care Techs at ₹14-24 LPA after 2-3 years experience." }
        ],
        syllabus: [
            { year: "Year 1", title: "Medical Foundations", topics: ["Human Anatomy", "Human Physiology", "Biochemistry", "Emergency Medicine Basics", "Medical Terminology", "First Aid & BLS", "Communication Skills"] },
            { year: "Year 2", title: "Emergency Sciences", topics: ["Pathology", "Pharmacology", "Trauma Pathophysiology", "Pre-Hospital Care Basics", "Airway Management", "ACLS Protocols", "Microbiology"] },
            { year: "Year 3", title: "Advanced Emergency Care", topics: ["Advanced Trauma Life Support (ATLS)", "Polytrauma Resuscitation", "Toxicology & Poisoning", "Disaster Management", "Triage Protocols", "Paediatric Emergency (PALS)", "Research Methodology"] },
            { year: "Year 4", title: "Clinical Internship", topics: ["Emergency Department Rotation", "Trauma Bay Posting", "Ambulance Service (108) Rotation", "Disaster Management Cell", "Toxicology Unit", "Code Blue Team", "Project Work"] }
        ],
        skills: ["Trauma Resuscitation", "ACLS / BLS / ATLS / PALS Certified", "Airway Management (Intubation Assist)", "Defibrillation & AED Operation", "Pre-Hospital Triage", "Mass Casualty Incident Response", "Toxicology & Antidote Administration", "Patient Stabilisation in Transit", "IV Access & Drug Administration", "Splinting & Wound Care", "Disaster Communication & Coordination", "EMR Documentation"],
        equipment: ["Defibrillators / AEDs (Zoll / Philips)", "Mechanical CPR Devices (LUCAS / AutoPulse)", "Ambulance Stretchers & Backboards", "Cervical Collars & C-Spine Boards", "Portable Ventilators (Drager Oxylog)", "Portable Suction Apparatus", "Pulse Oximeters & Capnographs", "Trauma IV Sets & Tourniquets", "Glucometers & Lactate Analysers", "Mobile X-Ray (in some trauma bays)", "Splints & Immobilisation Devices", "Communication Radios (EMS-grade)"],
        dayInLife: [
            "07:00 AM — Shift handover at ER; receive patient list from night shift",
            "07:30 AM — Trauma Bay readiness check — equipment, drugs, defibrillator, intubation kit",
            "08:30 AM — Polytrauma activation (RTA case) — primary survey, ABCDE, IV access, immobilisation",
            "10:00 AM — ER triage — 8-10 walk-in patients categorised by Manchester Triage System",
            "12:00 PM — Lunch + brief",
            "01:00 PM — Ambulance (108) call — pre-hospital response to cardiac arrest at residence; CPR + transport",
            "03:30 PM — Toxicology case — pesticide poisoning; antidote administration assist",
            "06:00 PM — End-of-shift documentation, handover; on-call standby for disaster"
        ],
        recruitersByRegion: [
            { region: "India — Emergency Departments", hospitals: ["Apollo Emergency", "Fortis ER", "MIOT Trauma", "Manipal Emergency", "Kauvery ER", "Aster Medcity Emergency"] },
            { region: "India — Ambulance Networks", hospitals: ["GVK EMRI (108 Services)", "Ziqitza Healthcare", "Apollo HomeCare Ambulance", "Star Ambulance Services"] },
            { region: "Gulf", hospitals: ["Saudi Red Crescent Authority", "Mediclinic Middle East", "NMC Healthcare UAE", "Hamad Medical Qatar", "Aster DM Gulf"] },
            { region: "Government / Disaster Response", hospitals: ["State Disaster Response Force (SDRF)", "NDRF Medical Teams", "TN Govt Trauma Centres"] }
        ],
        higherStudies: [
            { name: "MSc Emergency Medicine / Trauma Care", description: "2-year specialisation. Opens senior ER lead and academic roles. Offered at Manipal, Christian Medical College (CMC), and select universities." },
            { name: "PG Diploma in Disaster Management", description: "1-year specialised program. Disaster Response Specialists work with NDRF, state DMAs, and international relief agencies." },
            { name: "Flight Paramedic Certification", description: "Helicopter Emergency Medical Services (HEMS) certification. Flight paramedics earn ₹8-15 LPA in India, ₹30-50 LPA in Gulf/Australia." },
            { name: "International — NREMT / EMT-P (US)", description: "National Registry of Emergency Medical Technicians (US) — Paramedic level. With visa, opens US EMS roles at USD 50-70k." }
        ],
        faqs: [
            { q: "What does a BSc Accident & Emergency Care Technologist do?", a: "An Emergency Care Technologist works on the frontline of the Emergency Department — performs trauma resuscitation, ACLS/BLS, manages polytrauma cases, runs ER triage, handles pre-hospital ambulance care, responds to disasters and mass casualty incidents, assists ER physicians during emergency procedures, and operates 108 ambulance services." },
            { q: "Is BSc Emergency Care a good career?", a: "Yes — India's organised emergency medicine is growing 20% annually. Trauma centres, 108 EMRI ambulance services, corporate hospital ERs, and disaster response networks all need trained emergency techs. Entry ₹2.4-3.5 LPA, senior ER techs ₹5-8 LPA, Gulf packages ₹14-24 LPA. Recession-proof, 24/7 staffed." },
            { q: "What is the fee for BSc Accident & Emergency Care at JKKN?", a: "Management Quota (MQ) annual fee is ₹1,10,000 — total ₹4,40,000 for 4 years. Government Quota (GQ) as per Tamil Nadu Govt norms. Installments and scholarships available." },
            { q: "How many seats for BSc Accident & Emergency Care at JKKN?", a: "10 Management Quota (MQ) seats + additional Government Quota (GQ) seats via Tamil Nadu Govt counselling." },
            { q: "Will I learn to drive an ambulance during the course?", a: "Ambulance driving requires a separate commercial license, not part of BSc. However, you'll get extensive training on pre-hospital ambulance care, equipment operation (defibrillator, ventilator, suction), patient stabilisation in transit, and coordination with the receiving ER. JKKN partners with 108 EMRI for ambulance rotations." },
            { q: "Is BSc Emergency Care stressful?", a: "Yes — emergency medicine is one of the most stressful clinical environments (trauma, deaths, mass casualties, long shifts). It's also one of the most rewarding because you directly save lives in critical moments. JKKN's learning framework includes resilience training, peer support, and gradual exposure scaling during the internship." }
        ]
    }
];

export function getCourseBySlug(slug: string): AdmissionCourse | undefined {
    return admissionCourses.find((c) => c.slug === slug);
}

export function getAllCourseSlugs(): string[] {
    return admissionCourses.map((c) => c.slug);
}

export function getOtherCourses(currentSlug: string): AdmissionCourse[] {
    return admissionCourses.filter((c) => c.slug !== currentSlug);
}
