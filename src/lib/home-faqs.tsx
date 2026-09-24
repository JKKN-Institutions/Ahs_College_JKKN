/**
 * The homepage FAQ. ONE array: the accordion in components/sections/FAQ.tsx renders `answer`,
 * and the FAQPage schema in app/page.tsx derives its text from the same node via `nodeText`.
 * They used to be two arrays in two files, and four answers had drifted apart - the schema
 * promised text that appeared nowhere on the page.
 */
import Link from 'next/link';
import type { ReactNode } from 'react';
import { BRAND_LEGACY } from '@/lib/constants';

export const HOME_FAQS: { question: string; answer: ReactNode }[] = [
    {
        question: "What is Allied Health Sciences and what careers does it lead to?",
        answer: <>Allied Health Sciences encompasses healthcare professions that support, diagnose, and treat patients alongside physicians and nurses. It includes Medical Lab Technology, Optometry, <Link href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">Cardiac Technology</Link>, <Link href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">Radiology</Link>, <Link href="/dialysis-technology" className="text-[#0b6d41] font-semibold hover:underline">Dialysis Technology</Link>, and more. Careers include Lab Technician, Optometrist, Cardiac Technologist, Radiographer, Dialysis Technician, <Link href="/respiratory-therapy" className="text-[#0b6d41] font-semibold hover:underline">Respiratory Therapist</Link>, and <Link href="/physician-assistant" className="text-[#0b6d41] font-semibold hover:underline">Physician Assistant</Link>. These professionals work in hospitals, diagnostic centers, research labs, and can also pursue higher studies or international opportunities.</>
    },
    {
        question: "What is the eligibility for B.Sc. Allied Health Sciences admission at JKKN?",
        answer: <>Eligibility requires completion of 10+2 with Physics, Chemistry, and Biology (PCB) with minimum 50% marks (40% for SC/ST, 45% for OBC). Age should be 17-25 years as on 31st December of the admission year. NEET is not mandatory. Both Indian nationals and NRI candidates are eligible. Admission is through merit-based selection and counseling. <Link href="/admissions" className="text-[#0b6d41] font-semibold hover:underline">View full admission details</Link>.</>
    },
    {
        question: "Which university is JKKN Allied Health Sciences College affiliated with?",
        answer: "J.K.K. Nattraja College of Allied Health Sciences is affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is approved by the Government of Tamil Nadu Directorate of Medical Education and follows the curriculum prescribed by the university. All degrees are recognized nationally and internationally."
    },
    {
        question: "What is the fee structure for B.Sc. Allied Health Sciences programs?",
        answer: <>Government Quota (GQ) fees are as per Govt norms. Management Quota (MQ) annual fees at JKKN range from ₹60,000 (Medical Record Science) to ₹1,70,000 (Cardiac & Operation Theatre Technology) per year. This includes tuition, <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">learning lab</Link> fees, and hospital training components. Scholarships are available for meritorious and economically disadvantaged Learners. Payment can be made in installments.</>
    },
    {
        question: "What is the placement record and average salary after B.Sc. AHS?",
        answer: <>JKKN Allied Health Sciences College runs a dedicated placement cell and places graduates with hospitals and diagnostic chains, including roles abroad. No recruiter count or salary figure is published here: this college has no audited placement report, so any such number would be unverifiable. <Link href="/placements" className="text-[#0b6d41] font-semibold hover:underline">See placement details</Link>.</>
    },
    {
        question: "Does JKKN provide hospital training and internship?",
        answer: "Yes, every Allied Health Sciences programme includes the internship year that the university counts towards the four-year award. Clinical training runs at the college's partner hospitals, where Learners work with real patients under supervision. The number of partner hospitals is not published here because no verified count exists."
    },
    {
        question: "What learning lab facilities are available at JKKN AHS College?",
        answer: <>JKKN features state-of-the-art <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">learning labs</Link> including Clinical Biochemistry Lab with automated analyzers, Microbiology & Pathology Lab, Hematology Lab, Cardiac Catheterization Simulator, Diagnostic Imaging Center with X-ray and CT simulators, Optometry Clinic with slit lamps and OCT, Dialysis Training Unit, and <Link href="/library" className="text-[#0b6d41] font-semibold hover:underline">Digital Learning Commons</Link> with 10,000+ medical books.</>
    },
    {
        question: "Are hostel facilities available for AHS Learners?",
        answer: <>Yes, separate <Link href="/hostel" className="text-[#0b6d41] font-semibold hover:underline">hostel facilities</Link> are available for both men and women with modern amenities including furnished rooms with attached bathrooms, 24/7 security with CCTV, mess facilities with nutritious vegetarian and non-vegetarian options, <Link href="/wifi" className="text-[#0b6d41] font-semibold hover:underline">Wi-Fi connectivity</Link>, recreation areas, laundry services, gymnasium, and indoor games within the JKKN campus.</>
    },
    {
        question: "Can I pursue higher studies after B.Sc. Allied Health Sciences?",
        answer: <>Yes, after B.Sc. Allied Health Sciences, you can pursue M.Sc. in your specialization (MLT, Optometry, <Link href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">Cardiac Technology</Link>, etc.), MBA in Healthcare Management, MPH (Master of Public Health), specialization courses in specific diagnostic techniques, or research-oriented programs leading to PhD. Many of our alumni have successfully transitioned to teaching roles as Learning Facilitators.</>
    },
    {
        question: "What makes JKKN different from other Allied Health Sciences colleges?",
        answer: <>JKKN stands apart with its {BRAND_LEGACY.FULL_TEXT} of educational excellence, state-of-the-art <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">learning labs</Link> matching hospital standards, partnerships with 50+ leading hospitals for clinical training, experienced Learning Facilitators with industry expertise, <Link href="/placements" className="text-[#0b6d41] font-semibold hover:underline">placement support</Link> with top healthcare organizations, scholarship programs for deserving Learners, and comprehensive support from <Link href="/admissions" className="text-[#0b6d41] font-semibold hover:underline">admissions</Link> through career placement.</>
    },
    {
        question: "How much does B.Sc Allied Health Sciences cost in Tamil Nadu?",
        answer: <>B.Sc Allied Health Sciences fees in Tamil Nadu typically range from ₹50,000 to ₹2,00,000 per year depending on the college and program. At JKKN, Government Quota (GQ) fees are as per Govt norms. Management Quota (MQ) annual fees range from ₹60,000 to ₹1,70,000 covering tuition, <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">learning lab access</Link>, and hospital training. Merit-based scholarships cover up to 50% of fees. The 4-year program (3 years academics + 1 year internship) offers strong return on investment with placement support. JKKN publishes no audited starting salary, so no figure is stated here.</>
    },
    {
        question: "Is NEET required for B.Sc Allied Health Sciences admission?",
        answer: <>No, NEET is not mandatory for B.Sc Allied Health Sciences admission in Tamil Nadu. Admission at JKKN is based on 10+2 marks in Physics, Chemistry, and Biology (PCB) with a minimum 50% aggregate (40% for SC/ST, 45% for OBC). Candidates aged 17-25 years can apply directly through the <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=ahs.jkkn.ac.in&utm_medium=organic&utm_campaign=components-faq" className="text-[#0b6d41] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">JKKN admissions portal</Link>. Selection is merit-based through counseling — no entrance exam required.</>
    },
    {
        question: "What is the salary after B.Sc Allied Health Sciences in India?",
        answer: <>Salaries for B.Sc Allied Health Sciences graduates in India vary by specialisation, employer and city. JKKN publishes no audited average or highest package, so no figure for this college is stated here. Specializations like <Link href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">Cardiac Technology</Link> and <Link href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">Radiology</Link> command higher salaries. International placements in the UK, UAE, and Saudi Arabia offer significantly higher packages. With experience, senior technologists earn ₹8-15 LPA in corporate hospital chains.</>
    },
    {
        question: "Which is better — B.Sc Nursing or B.Sc Allied Health Sciences?",
        answer: <>Both are excellent healthcare careers with distinct paths. B.Sc Nursing focuses on patient care and bedside management, while B.Sc Allied Health Sciences specializes in diagnostic technology, therapeutic procedures, and healthcare informatics. Allied Health graduates work as technologists in <Link href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">radiology</Link>, <Link href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">cardiac labs</Link>, <Link href="/critical-care-technology" className="text-[#0b6d41] font-semibold hover:underline">ICUs</Link>, and <Link href="/operation-theatre-anaesthesia" className="text-[#0b6d41] font-semibold hover:underline">operation theatres</Link>. Allied Health Sciences offers more specialization options (9 programs at JKKN) and growing demand driven by expansion of diagnostic centers and hospitals across India.</>
    },
    {
        question: "What are the job opportunities after Allied Health Sciences?",
        answer: <>Allied Health Sciences graduates have diverse career opportunities across hospitals, diagnostic chains, research labs, pharmaceutical companies, and government health services. Key roles include Cardiac Technologist, Radiographer, Dialysis Technician, <Link href="/respiratory-therapy" className="text-[#0b6d41] font-semibold hover:underline">Respiratory Therapist</Link>, <Link href="/physician-assistant" className="text-[#0b6d41] font-semibold hover:underline">Physician Assistant</Link>, <Link href="/medical-record-science" className="text-[#0b6d41] font-semibold hover:underline">Medical Records Officer</Link>, and <Link href="/accident-emergency-care" className="text-[#0b6d41] font-semibold hover:underline">Emergency Care Technologist</Link>. JKKN&apos;s placement cell helps learners apply to hospitals and diagnostic centres. No recruiter count is published, because none is audited.</>
    }
];
