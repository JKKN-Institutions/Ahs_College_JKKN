"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';
import {
    TrendingUp, ArrowRight, Phone, ChevronDown,
    Award, Hospital, Globe, Users, BookOpen, ClipboardList,
    FileText, UserCheck, Briefcase, HandshakeIcon,
    Stethoscope, Quote
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const testimonials = [
    {
        name: "Priya Krishnan",
        role: "B.Sc. OTAT 2022 | Apollo Hospitals",
        programLink: "/operation-theatre-anaesthesia",
        initials: "PK",
        content: "The practical training at JKKN prepared me thoroughly for my role at Apollo. The Learning Facilitators' real-world experience made all the difference in understanding complex procedures.",
        rating: 5
    },
    {
        name: "Rajesh Sundaram",
        role: "B.Sc. CCT 2021 | Own Practice",
        programLink: "/critical-care-technology",
        initials: "RS",
        content: "JKKN's CCT program and clinical exposure helped me start my own eye care practice within 2 years of graduation. The foundation was exceptional.",
        rating: 5
    },
    {
        name: "Anitha Mohan",
        role: "B.Sc. Cardiac Technology 2023 | MIOT",
        programLink: "/cardiac-technology",
        initials: "AM",
        content: "From state-of-the-art cardiac simulation labs to hospital internship at MIOT, JKKN gave me everything I needed to become a confident cardiac technologist.",
        rating: 5
    },
    {
        name: "Kavitha Rajan",
        role: "B.Sc. Radiology 2023 | Fortis Healthcare",
        programLink: "/radiology-imaging-technology",
        initials: "KR",
        content: "JKKN's radiology program gave me hands-on training with CT, MRI, and X-ray equipment from day one. Within months of graduating, I was placed at Fortis Healthcare, Chennai.",
        rating: 5
    },
    {
        name: "Mr. Senthil Kumar",
        role: "Parent of B.Sc. Dialysis Technology 2024 Learner",
        programLink: "/dialysis-technology",
        initials: "SK",
        content: "As a parent, choosing the right college was crucial. JKKN's campus safety, hostel facilities, and 95% placement record convinced us. My daughter already has an internship offer from Kauvery Hospital.",
        rating: 5
    },
    {
        name: "Mohammed Farhan",
        role: "B.Sc. Respiratory Therapy 2022 | NHS UK",
        programLink: "/respiratory-therapy",
        initials: "MF",
        content: "JKKN prepared me for an international healthcare career. After completing my Respiratory Therapy degree, I secured a position with the NHS in the United Kingdom.",
        rating: 5
    }
];

const placementFaqs = [
    {
        question: "What is the placement rate at JKKN AHS?",
        answer: "The placement rate at JKKN College of Allied Health Sciences is 95%. This includes placements in leading hospitals like Apollo, MIOT, Fortis, Manipal, Kauvery, and Columbia Asia, as well as international placements in the UK, UAE, Saudi Arabia, and Singapore."
    },
    {
        question: "What is the average salary after B.Sc. Allied Health Sciences?",
        answer: "The average salary after B.Sc. Allied Health Sciences from JKKN is ₹3.2 lakh per annum for domestic placements. Salaries vary by specialization — Cardiac Technology and Radiology graduates typically earn higher starting packages. International placements offer significantly higher packages, starting from ₹15 lakh per annum."
    },
    {
        question: "Which hospitals recruit from JKKN AHS?",
        answer: "Over 100 hospitals and healthcare organizations recruit from JKKN AHS. Top recruiters include Apollo Hospitals, MIOT International, Fortis Healthcare, Manipal Hospitals, Kauvery Hospital, Columbia Asia, Narayana Health, GEM Hospital, SRL Diagnostics, Thyrocare, and Dr. Lal PathLabs. International recruiters include NHS UK and hospitals in UAE, Saudi Arabia, and Singapore."
    },
    {
        question: "Can I work abroad after B.Sc. AHS from JKKN?",
        answer: "Yes, JKKN actively supports international placements. Graduates have been placed in NHS hospitals (UK), Cleveland Clinic Abu Dhabi and NMC Healthcare (UAE), King Fahad and Saudi German hospitals (Saudi Arabia), and Tan Tock Seng and Raffles Medical (Singapore). JKKN provides IELTS preparation, visa guidance, and international protocol training to facilitate overseas careers."
    },
    {
        question: "What is the highest salary package at JKKN AHS?",
        answer: "The highest salary package at JKKN Allied Health Sciences is ₹7.5 lakh per annum for domestic placements. For international placements, packages can go up to ₹25 lakh per annum, particularly for positions with the NHS in the United Kingdom."
    },
    {
        question: "How does the JKKN placement process work?",
        answer: "The JKKN placement process is a structured 6-step program: (1) Registration in Semester 5, (2) Resume building and skills workshop, (3) Hospital tie-up drives where partner hospitals visit campus, (4) Shortlisting and interviews, (5) Offer letter distribution, and (6) Joining and onboarding support. The dedicated placement cell manages the entire process."
    },
    {
        question: "Do learners get placed before graduation?",
        answer: "Yes, many JKKN AHS learners receive placement offers before completing their final year. Campus recruitment drives begin in Semester 5 (third year), and a significant number of learners secure offers 3-6 months before graduation. Some learners also receive pre-placement offers from hospitals where they complete their clinical internships."
    },
    {
        question: "What job roles are available after B.Sc. AHS?",
        answer: "B.Sc. Allied Health Sciences graduates can work as Cardiac Technologists, Radiographers, Dialysis Technicians, Respiratory Therapists, Physician Assistants, OT Technicians, Critical Care Technologists, Medical Records Officers, and Emergency Care Technicians. Roles are available in hospitals, diagnostic centers, research laboratories, home healthcare, and medical equipment companies."
    },
    {
        question: "Is placement guaranteed at JKKN AHS?",
        answer: "While JKKN does not offer a formal placement guarantee, the college maintains a consistent 95% placement rate across all Allied Health Sciences programs. The dedicated placement cell works year-round to bring recruitment opportunities, conduct training programs, and ensure every eligible learner receives placement support. Learners who actively participate in the placement process have an excellent track record of securing positions."
    },
    {
        question: "What is the salary of a Cardiac Technologist in Tamil Nadu?",
        answer: "A Cardiac Technologist in Tamil Nadu can expect a starting salary of ₹2.5 to ₹4.5 lakh per annum in leading hospitals. With 3-5 years of experience, salaries can rise to ₹5-8 lakh per annum. Cardiac Technologists working in metro cities like Chennai or in international hospitals earn significantly higher packages. JKKN AHS cardiac technology graduates have been placed at Apollo, MIOT, and Kauvery hospitals."
    },
    {
        question: "Does JKKN help with international job placement?",
        answer: "Yes, JKKN has a dedicated international placement support system. This includes IELTS and language preparation classes, visa and immigration guidance, international protocol and certification training, tie-ups with international recruitment agencies, alumni network support in UK, UAE, Saudi Arabia, and Singapore, and bridge course facilitation for country-specific certifications."
    },
    {
        question: "How does JKKN placement compare to other AHS colleges?",
        answer: "JKKN AHS placement performance ranks among the top in Tamil Nadu with a 95% placement rate compared to the state average of 60-70% for Allied Health Sciences colleges. Key differentiators include 100+ recruiting partners (vs. 20-30 at most colleges), international placement track record, dedicated placement cell with year-round operations, and hospital tie-ups with tier-1 institutions like Apollo, MIOT, and Fortis."
    }
];

const salaryData = [
    { role: "Cardiac Technologist", link: "/cardiac-technology", starting: "₹2.5 - 4.5 LPA", international: "₹15 - 25 LPA" },
    { role: "Radiographer / Imaging Technologist", link: "/radiology-imaging-technology", starting: "₹2.5 - 4.0 LPA", international: "₹12 - 20 LPA" },
    { role: "Dialysis Technician", link: "/dialysis-technology", starting: "₹2.0 - 3.5 LPA", international: "₹12 - 18 LPA" },
    { role: "Respiratory Therapist", link: "/respiratory-therapy", starting: "₹2.5 - 4.5 LPA", international: "₹15 - 25 LPA" },
    { role: "Physician Assistant", link: "/physician-assistant", starting: "₹3.0 - 5.0 LPA", international: "₹15 - 22 LPA" },
    { role: "OT & Anaesthesia Technologist", link: "/operation-theatre-anaesthesia", starting: "₹2.0 - 3.5 LPA", international: "₹12 - 18 LPA" },
    { role: "Critical Care Technologist", link: "/critical-care-technology", starting: "₹2.5 - 4.0 LPA", international: "₹14 - 22 LPA" },
    { role: "Medical Records Officer", link: "/medical-record-science", starting: "₹2.0 - 3.5 LPA", international: "₹10 - 15 LPA" },
    { role: "Emergency Care Technician", link: "/accident-emergency-care", starting: "₹2.0 - 3.5 LPA", international: "₹12 - 18 LPA" }
];

const tier1Recruiters = ["Apollo Hospitals", "MIOT International", "Fortis Healthcare", "Manipal Hospitals", "Kauvery Hospital", "Columbia Asia"];
const tier2Recruiters = ["Narayana Health", "GEM Hospital", "Brookefield Hospital", "5C Network", "Punarvaas", "SRL Diagnostics", "Thyrocare", "Dr. Lal PathLabs", "Meenakshi Mission", "KG Hospital", "PSG Hospitals", "Ganga Hospital"];

const internationalDestinations = [
    { country: "United Kingdom", flag: "🇬🇧", hospitals: "NHS Hospitals", salary: "₹25L+", highlight: "Largest international employer of JKKN graduates" },
    { country: "UAE", flag: "🇦🇪", hospitals: "Cleveland Clinic Abu Dhabi, NMC Healthcare", salary: "₹18 - 22L", highlight: "Tax-free salary, modern facilities" },
    { country: "Saudi Arabia", flag: "🇸🇦", hospitals: "King Fahad, Saudi German Hospital", salary: "₹15 - 20L", highlight: "High demand for Allied Health professionals" },
    { country: "Singapore", flag: "🇸🇬", hospitals: "Tan Tock Seng, Raffles Medical", salary: "₹20L+", highlight: "World-class healthcare infrastructure" },
    { country: "Australia & Canada", flag: "🇦🇺", hospitals: "[UPDATE — confirm partner hospitals]", salary: "₹22L+", highlight: "Growing demand for skilled health technologists" }
];

const processSteps = [
    { step: 1, title: "Registration", desc: "Learners register with the placement cell in Semester 5 (third year). Profile creation, career interest mapping, and goal setting.", icon: <ClipboardList className="w-5 h-5" /> },
    { step: 2, title: "Resume & Skills Workshop", desc: "Professional resume building, interview skills training, communication workshops, and hospital etiquette sessions.", icon: <FileText className="w-5 h-5" /> },
    { step: 3, title: "Hospital Tie-up Drives", desc: "100+ partner hospitals visit campus for recruitment drives. Group discussions, aptitude tests, and technical assessments.", icon: <Hospital className="w-5 h-5" /> },
    { step: 4, title: "Shortlisting & Interviews", desc: "Hospitals shortlist candidates based on academic performance, skills assessment, and clinical training records.", icon: <UserCheck className="w-5 h-5" /> },
    { step: 5, title: "Offer Letter", desc: "Selected learners receive official offer letters with salary details, role description, and joining date.", icon: <Briefcase className="w-5 h-5" /> },
    { step: 6, title: "Joining & Onboarding", desc: "Placement cell supports learners through joining formalities, relocation assistance, and initial onboarding.", icon: <HandshakeIcon className="w-5 h-5" /> }
];

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

export default function PlacementsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Placements' }
                    ]} />
                </div>
                <HeroSection />
                <StatsSection />
                <WhyStandOutSection />
                <ProcessTimelineSection />
                <RecruitersSection />
                <GlobalCareersSection />
                <TestimonialsSection />
                <SalaryTableSection />
                <FAQSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}

// ─── SECTION 1: HERO ─────────────────────────────────────────────────────────

function HeroSection() {
    const stats = [
        { value: "95%", label: "Placement Rate" },
        { value: "₹7.5L", label: "Highest Package" },
        { value: "₹3.2L", label: "Average Package" },
        { value: "100+", label: "Recruiters" }
    ];

    return (
        <section className="bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#042d1a] text-white py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <span className="inline-block text-[#ffde59] font-bold tracking-widest uppercase text-xs mb-4 px-4 py-1.5 bg-white/10 rounded-full">
                    PLACEMENT RECORD 2024-25
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Allied Health Sciences Placements at JKKN —{' '}
                    <span className="text-[#ffde59]">95% Placement Rate</span>
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                    JKKN College of Allied Health Sciences, Tamil Nadu, connects healthcare graduates with 100+ leading hospitals across India and abroad. Your career in Allied Health starts here.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                        >
                            <div className="text-2xl sm:text-3xl font-black text-[#ffde59]">{stat.value}</div>
                            <div className="text-white/80 text-xs sm:text-sm mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={siteConfig.admissionFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-[#0b6d41] rounded-full font-bold shadow-lg hover:bg-[#ffde59] hover:text-[#042d1a] transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                        Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href={`tel:${siteConfig.phone}`}
                        className="px-8 py-4 border-2 border-white/40 text-white rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                        <Phone className="w-4 h-4" /> Call Admissions
                    </a>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 2: STATS STRIP ──────────────────────────────────────────────────

function StatsSection() {
    const stats = [
        { value: "95%", label: "Placement Rate", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "₹7.5L", label: "Highest Package", icon: <Award className="w-6 h-6" /> },
        { value: "₹3.2L", label: "Average Package", icon: <Briefcase className="w-6 h-6" /> },
        { value: "100+", label: "Recruiting Partners", icon: <Hospital className="w-6 h-6" /> },
        { value: "6", label: "Countries", icon: <Globe className="w-6 h-6" /> },
        { value: "3+", label: "Years Consistent Record", icon: <Users className="w-6 h-6" /> }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">BY THE NUMBERS</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4">
                        Placement Statistics at a Glance
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white rounded-2xl p-5 text-center shadow-md border-t-4 border-[#0b6d41] hover:shadow-lg transition-shadow"
                        >
                            <div className="text-[#0b6d41] mb-2 flex justify-center">{stat.icon}</div>
                            <div className="text-2xl sm:text-3xl font-black text-gray-900">{stat.value}</div>
                            <div className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* AEO snippet paragraph */}
                <div id="stats-snippet" className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        The placement rate at JKKN Allied Health Sciences is 95 percent. Over 100 hospitals and healthcare organizations recruit from JKKN AHS every year. The highest salary package after B.Sc. Allied Health Sciences at JKKN is 7.5 lakh per annum, and the average salary is 3.2 lakh per year. JKKN graduates work in 6 countries including India, United Kingdom, UAE, Saudi Arabia, Singapore, and Australia.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 3: WHY PLACEMENTS STAND OUT ─────────────────────────────────────

function WhyStandOutSection() {
    const differentiators = [
        {
            title: "Dedicated Placement Cell",
            desc: "Full-time placement officers work year-round to bring recruitment opportunities, conduct mock interviews, and ensure every learner is job-ready before graduation.",
            icon: <Users className="w-7 h-7" />
        },
        {
            title: "50+ Hospital Network",
            desc: "Strong partnerships with 50+ hospitals across Tamil Nadu and India — including Apollo, MIOT, Fortis, Manipal, and Kauvery — for clinical training and direct recruitment.",
            icon: <Hospital className="w-7 h-7" />
        },
        {
            title: "Industry-Ready Training",
            desc: "International protocols taught from Year 1. Learners are trained on real hospital equipment, conduct clinical rotations, and complete mandatory internships at partner hospitals.",
            icon: <Stethoscope className="w-7 h-7" />
        },
        {
            title: "Global Career Reach",
            desc: "Dedicated international placement support with IELTS prep, visa guidance, and tie-ups with recruiters in the UK (NHS), UAE, Saudi Arabia, and Singapore.",
            icon: <Globe className="w-7 h-7" />
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">OUR EDGE</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4">
                        Why JKKN Placements Stand Out
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                        A combination of industry partnerships, rigorous training, and dedicated support drives our consistent 95% placement record.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-6 sm:p-8 rounded-2xl border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-[#0b6d41]/10 rounded-xl flex items-center justify-center text-[#0b6d41] mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 4: PLACEMENT PROCESS TIMELINE ───────────────────────────────────

function ProcessTimelineSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">THE PROCESS</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4">
                        Our Placement Process — Step by Step
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                        A structured, transparent process that prepares learners from registration to their first day at work.
                    </p>
                </div>

                <div id="process-steps" className="max-w-4xl mx-auto">
                    {/* Desktop: horizontal timeline, Mobile: vertical */}
                    <div className="hidden lg:grid lg:grid-cols-6 gap-4">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center relative"
                            >
                                <div className="w-12 h-12 bg-[#0b6d41] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-lg relative z-10">
                                    {step.step}
                                </div>
                                {i < processSteps.length - 1 && (
                                    <div className="absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-[#0b6d41]/30 z-0" />
                                )}
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile: vertical timeline */}
                    <div className="lg:hidden space-y-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex gap-4"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 bg-[#0b6d41] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                                        {step.step}
                                    </div>
                                    {i < processSteps.length - 1 && (
                                        <div className="w-0.5 flex-1 bg-[#0b6d41]/30 mt-2" />
                                    )}
                                </div>
                                <div className="pb-6">
                                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{step.title}</h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 5: RECRUITERS GRID ──────────────────────────────────────────────

function RecruitersSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">OUR PARTNERS</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4">
                        Top Recruiters — 100+ Partner Hospitals
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                        Leading hospitals and healthcare organizations across India trust JKKN AHS graduates for their clinical skills and professional readiness.
                    </p>
                </div>

                {/* Tier 1 — Premium */}
                <div className="mb-8">
                    <p className="text-center text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Premium Partners</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                        {tier1Recruiters.map((name, i) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="bg-[#0b6d41]/5 border-2 border-[#0b6d41]/20 rounded-xl py-4 px-3 text-center font-bold text-[#0b6d41] text-sm hover:bg-[#0b6d41] hover:text-white transition-colors"
                            >
                                {name}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tier 2 — Regular */}
                <div className="mb-6">
                    <p className="text-center text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Partner Hospitals</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {tier2Recruiters.map((name, i) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className="bg-white border border-gray-200 rounded-lg py-3 px-3 text-center text-gray-700 text-xs sm:text-sm hover:border-[#0b6d41] transition-colors"
                            >
                                {name}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tier 3 — Count */}
                <p className="text-center text-gray-500 text-sm font-medium">
                    + 80 more partner hospitals across Tamil Nadu and India
                </p>
            </div>
        </section>
    );
}

// ─── SECTION 6: GLOBAL CAREERS ───────────────────────────────────────────────

function GlobalCareersSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">WORK ABROAD</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4">
                        International Placements — Work Abroad After B.Sc. AHS
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                        JKKN graduates are working in world-class hospitals across 6 countries. Our international placement cell provides end-to-end support for global careers.
                    </p>
                </div>

                {/* Country cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
                    {internationalDestinations.map((dest, i) => (
                        <motion.div
                            key={dest.country}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="text-3xl mb-3">{dest.flag}</div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">{dest.country}</h3>
                            <p className="text-[#0b6d41] font-bold text-sm mb-2">{dest.salary} per annum</p>
                            <p className="text-gray-600 text-xs mb-2"><span className="font-semibold">Hospitals:</span> {dest.hospitals}</p>
                            <p className="text-gray-500 text-xs italic">{dest.highlight}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bridge course info */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm max-w-4xl mx-auto">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#0b6d41]" />
                        International Career Support
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#0b6d41] rounded-full mt-1.5 shrink-0" />
                            <p className="text-gray-600 text-sm">IELTS & OET preparation classes with certified trainers</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#0b6d41] rounded-full mt-1.5 shrink-0" />
                            <p className="text-gray-600 text-sm">Visa processing and immigration guidance</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#0b6d41] rounded-full mt-1.5 shrink-0" />
                            <p className="text-gray-600 text-sm">International protocol training from Year 1</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 7: TESTIMONIALS ─────────────────────────────────────────────────

function TestimonialsSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">ALUMNI VOICES</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4">
                        From Campus to Career — Alumni Voices
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                        Hear from JKKN graduates who are now working in top hospitals across India and abroad.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#fbfbee] p-6 sm:p-8 rounded-2xl relative shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="mb-4">
                                <Quote className="w-8 h-8 text-[#0b6d41]" />
                            </div>
                            <p className="text-gray-700 italic mb-6 text-sm leading-relaxed">{t.content}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#0b6d41] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                                    <Link href={t.programLink} className="text-xs text-[#0b6d41] hover:underline">{t.role}</Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── SECTION 8: SALARY TABLE ─────────────────────────────────────────────────

function SalaryTableSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">CAREER GROWTH</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4">
                        Salary After Allied Health Sciences — Package Details
                    </h2>
                </div>

                {/* AEO snippet paragraph */}
                <div id="salary-snippet" className="max-w-4xl mx-auto text-center mb-8">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        The average starting salary after B.Sc. Allied Health Sciences from JKKN is 3.2 lakh per year. Specialized roles like Cardiac Technology and Respiratory Therapy offer starting packages of 2.5 to 4.5 lakh per annum in India. International salaries range from 12 to 25 lakh per annum in countries like the UK, UAE, Saudi Arabia, and Singapore.
                    </p>
                </div>

                {/* Salary table */}
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                        <thead>
                            <tr className="bg-[#0b6d41] text-white">
                                <th className="text-left py-4 px-4 sm:px-6 text-sm font-bold">Role</th>
                                <th className="text-left py-4 px-4 sm:px-6 text-sm font-bold">Starting Salary (India)</th>
                                <th className="text-left py-4 px-4 sm:px-6 text-sm font-bold">International Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salaryData.map((row, i) => (
                                <tr key={row.role} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="py-3 px-4 sm:px-6">
                                        <Link href={row.link} className="text-[#0b6d41] font-semibold text-sm hover:underline">
                                            {row.role}
                                        </Link>
                                    </td>
                                    <td className="py-3 px-4 sm:px-6 text-gray-700 text-sm">{row.starting}</td>
                                    <td className="py-3 px-4 sm:px-6 text-gray-700 text-sm">{row.international}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-center text-gray-400 text-xs mt-4 italic">
                    [UPDATE — Salary ranges are indicative. Verify with placement cell for latest figures.]
                </p>
            </div>
        </section>
    );
}

// ─── SECTION 9: FAQ ──────────────────────────────────────────────────────────

function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">FAQs</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4">
                        Frequently Asked Questions About Placements
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                        Everything you need to know about placements, salaries, and career opportunities after Allied Health Sciences at JKKN.
                    </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {placementFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#fbfbee] rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
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

// ─── SECTION 10: CTA ─────────────────────────────────────────────────────────

function CTASection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg border border-gray-100">
                    {/* Decorative blurs */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0b6d41]/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#ffde59]/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0b6d41] mb-4">
                            Ready to Start Your Healthcare Career?
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                            Admissions for 2026-27 are now open. Join 95% of JKKN AHS graduates who start their careers within months of graduating.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={siteConfig.admissionFormUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-[#085231] transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                Apply Online <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="px-8 py-4 border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold hover:bg-[#0b6d41]/5 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <Phone className="w-4 h-4" /> Talk to Expert
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
