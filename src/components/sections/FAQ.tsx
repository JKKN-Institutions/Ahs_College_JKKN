"use client";

import React, { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { BRAND_LEGACY } from '@/lib/constants';

const faqs: { question: string; answer: ReactNode }[] = [
    {
        question: "What is Allied Health Sciences and what careers does it lead to?",
        answer: <>Allied Health Sciences encompasses healthcare professions that support, diagnose, and treat patients alongside physicians and nurses. It includes Medical Lab Technology, Optometry, <Link href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">Cardiac Technology</Link>, <Link href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">Radiology</Link>, <Link href="/dialysis-technology" className="text-[#0b6d41] font-semibold hover:underline">Dialysis Technology</Link>, and more. Careers include Lab Technician, Optometrist, Cardiac Technologist, Radiographer, Dialysis Technician, <Link href="/respiratory-therapy" className="text-[#0b6d41] font-semibold hover:underline">Respiratory Therapist</Link>, and <Link href="/physician-assistant" className="text-[#0b6d41] font-semibold hover:underline">Physician Assistant</Link>. These professionals work in hospitals, diagnostic centers, research labs, and can also pursue higher studies or international opportunities.</>
    },
    {
        question: "What is the eligibility for B.Sc. Allied Health Sciences admission at JKKN?",
        answer: <>Eligibility requires completion of 10+2 with Physics, Chemistry, and Biology (PCB) with minimum 50% marks (40% for SC/ST, 45% for OBC). Age should be 17-25 years as on 31st December of the admission year. NEET is not mandatory. Both Indian nationals and NRI candidates are eligible. Admission is through merit-based selection and counseling. <Link href="/admission" className="text-[#0b6d41] font-semibold hover:underline">View full admission details</Link>.</>
    },
    {
        question: "Which university is JKKN Allied Health Sciences College affiliated with?",
        answer: "J.K.K. Nattraja College of Allied Health Sciences is affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is approved by the Government of Tamil Nadu Directorate of Medical Education and follows the curriculum prescribed by the university. All degrees are recognized nationally and internationally."
    },
    {
        question: "What is the fee structure for B.Sc. Allied Health Sciences programs?",
        answer: <>B.Sc. Allied Health Sciences fees at JKKN range from ₹75,000 to ₹1,25,000 per year depending on the program. This includes tuition, <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">laboratory</Link> fees, and hospital training components. Scholarships are available for meritorious and economically disadvantaged Learners covering up to 50% of fees. Payment can be made in installments.</>
    },
    {
        question: "What is the placement record and average salary after B.Sc. AHS?",
        answer: <>JKKN Allied Health Sciences College has 95%+ placement rate with 100+ recruiting partners including Apollo, MIOT, Fortis, Manipal, SRL, Thyrocare, and Dr. Lal PathLabs. The average package is ₹3.2 LPA with highest packages reaching ₹7.5 LPA. International placement opportunities are also available in UAE, Saudi Arabia, UK, and Australia. <Link href="/placements" className="text-[#0b6d41] font-semibold hover:underline">See placement details</Link>.</>
    },
    {
        question: "Does JKKN provide hospital training and internship?",
        answer: "Yes, all Allied Health Sciences programs include mandatory hospital internship of 6-12 months. JKKN has partnerships with 50+ hospitals including Apollo, MIOT International, Fortis, Manipal, Columbia Asia, and Narayana Health. Learners gain hands-on clinical experience working with real patients under expert supervision."
    },
    {
        question: "What laboratory facilities are available at JKKN AHS College?",
        answer: <>JKKN features state-of-the-art <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">laboratories</Link> including Clinical Biochemistry Lab with automated analyzers, Microbiology & Pathology Lab, Hematology Lab, Cardiac Catheterization Simulator, Diagnostic Imaging Center with X-ray and CT simulators, Optometry Clinic with slit lamps and OCT, Dialysis Training Unit, and <Link href="/library" className="text-[#0b6d41] font-semibold hover:underline">Digital Library</Link> with 10,000+ medical books.</>
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
        answer: <>JKKN stands apart with its {BRAND_LEGACY.FULL_TEXT} of educational excellence, state-of-the-art <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">laboratories</Link> matching hospital standards, partnerships with 50+ leading hospitals for clinical training, experienced Learning Facilitators with industry expertise, 95%+ <Link href="/placements" className="text-[#0b6d41] font-semibold hover:underline">placement rate</Link> with top healthcare organizations, scholarship programs for deserving Learners, and comprehensive support from <Link href="/admission" className="text-[#0b6d41] font-semibold hover:underline">admissions</Link> through career placement.</>
    }
];

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-12 sm:py-16 md:py-24 bg-[#fbfbee] overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-6 sm:mb-8 md:mb-16">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">FAQs</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
                        Find answers to common questions about Allied Health Sciences programs and admissions.
                    </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 group"
                            >
                                <span className={`text-sm sm:text-base font-bold transition-colors ${activeIndex === index ? 'text-[#0b6d41]' : 'text-gray-900'} leading-tight`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1.5 sm:p-2 rounded-full transition-all shrink-0 ${activeIndex === index ? 'bg-[#0b6d41] text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
