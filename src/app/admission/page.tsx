"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';
import {
    GraduationCap, TrendingUp, IndianRupee, Award, Hospital, Clock,
    CheckCircle2, FileText, Phone, Mail, MapPin, ArrowRight,
    Plus, Minus, AlertTriangle, Globe, Sparkles, Users,
    ClipboardList, Upload, UserCheck, Calendar, CreditCard,
    BookOpen, IdCard, Camera, Shield, Heart, Building2,
    Stethoscope, ChevronRight
} from 'lucide-react';

export default function AdmissionPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Admission 2026-27' }
                    ]} />
                </div>
                <HeroSection />
                <HighlightsSection />
                <ProgramsFeesSection />
                <EligibilitySection />
                <AdmissionProcessSection />
                <DocumentsSection />
                <ImportantDatesSection />
                <ScholarshipsSection />
                <WhyChooseSection />
                <FAQSection />
                <CTASection />
                <CrossLinksSection />
            </main>

            <Footer />
        </div>
    );
}

// 1. Hero Section
function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#042d1a] text-white py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <span className="inline-block text-[#ffde59] font-bold tracking-widest uppercase text-xs mb-4 px-4 py-1.5 bg-white/10 rounded-full">
                    Admission Open 2026-27
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Shape Your Future in<br />
                    <span className="text-[#ffde59]">Allied Health Sciences</span>
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                    9 Programs &bull; NAAC A+ &bull; 95% Placement &bull; TN Dr. MGR Medical University
                </p>
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

// 2. Highlights Section
function HighlightsSection() {
    const highlights = [
        { value: "9", label: "Programs", icon: <GraduationCap className="w-5 h-5" /> },
        { value: "95%", label: "Placement", icon: <TrendingUp className="w-5 h-5" /> },
        { value: "₹75K-1.25L", label: "Annual Fees", icon: <IndianRupee className="w-5 h-5" /> },
        { value: "NAAC A+", label: "Accredited", icon: <Award className="w-5 h-5" /> },
        { value: "500+", label: "Bed Hospital", icon: <Hospital className="w-5 h-5" /> },
        { value: "3+1 Yr", label: "Duration", icon: <Clock className="w-5 h-5" /> },
    ];

    return (
        <section className="relative z-20 -mt-8 px-4 pb-8">
            <h2 className="sr-only">Admission Highlights</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                {highlights.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center text-center border-b-4 border-[#0b6d41]"
                    >
                        <div className="w-10 h-10 bg-[#0b6d41]/10 rounded-full flex items-center justify-center text-[#0b6d41] mb-2">
                            {item.icon}
                        </div>
                        <div className="text-xl md:text-2xl font-black text-[#0b6d41]">{item.value}</div>
                        <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">{item.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// 3. Programs & Fees Section
function ProgramsFeesSection() {
    const programs = [
        { name: "B.Sc Cardiac Technology", duration: "3+1 Years", fee: "₹75,000", seats: "7", href: "/cardiac-technology" },
        { name: "B.Sc Dialysis Technology", duration: "3+1 Years", fee: "₹75,000", seats: "5", href: "/dialysis-technology" },
        { name: "B.Sc Radiology & Imaging Technology", duration: "3+1 Years", fee: "₹1,00,000", seats: "5", href: "/radiology-imaging-technology" },
        { name: "B.Sc Operation Theatre & Anaesthesia", duration: "3+1 Years", fee: "₹75,000", seats: "10", href: "/operation-theatre-anaesthesia" },
        { name: "B.Sc Respiratory Therapy", duration: "3+1 Years", fee: "₹1,00,000", seats: "10", href: "/respiratory-therapy" },
        { name: "B.Sc Physician Assistant", duration: "3+1 Years", fee: "₹1,00,000", seats: "10", href: "/physician-assistant" },
        { name: "B.Sc Critical Care Technology", duration: "3+1 Years", fee: "₹1,00,000", seats: "10", href: "/critical-care-technology" },
        { name: "B.Sc Medical Record Science", duration: "3+1 Years", fee: "₹75,000", seats: "15", href: "/medical-record-science" },
        { name: "B.Sc Accident & Emergency Care", duration: "3+1 Years", fee: "₹1,25,000", seats: "10", href: "/accident-emergency-care" },
    ];

    return (
        <section id="programs" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">9 Specializations</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Programs & Fee Structure</h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
                        All programs are affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#0b6d41] text-white">
                                <th className="text-left py-4 px-6 rounded-tl-xl font-bold text-sm">Program</th>
                                <th className="text-center py-4 px-4 font-bold text-sm">Duration</th>
                                <th className="text-center py-4 px-4 font-bold text-sm">Annual Fee</th>
                                <th className="text-center py-4 px-4 font-bold text-sm">Seats</th>
                                <th className="text-center py-4 px-6 rounded-tr-xl font-bold text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programs.map((prog, i) => (
                                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-[#0b6d41]/5 transition-colors`}>
                                    <td className="py-4 px-6">
                                        <Link href={prog.href} className="font-semibold text-gray-900 hover:text-[#0b6d41] transition-colors text-sm">
                                            {prog.name}
                                        </Link>
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm text-gray-600">{prog.duration}</td>
                                    <td className="py-4 px-4 text-center font-bold text-[#0b6d41] text-sm">{prog.fee}</td>
                                    <td className="py-4 px-4 text-center text-sm text-gray-600">{prog.seats}</td>
                                    <td className="py-4 px-6 text-center">
                                        <div className="flex gap-2 justify-center">
                                            <Link href={prog.href} className="text-xs font-bold text-[#0b6d41] hover:underline">
                                                View Details
                                            </Link>
                                            <span className="text-gray-300">|</span>
                                            <a
                                                href={siteConfig.admissionFormUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-bold text-[#0b6d41] hover:underline"
                                            >
                                                Apply
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                    {programs.map((prog, i) => (
                        <div key={i} className="bg-white rounded-xl border-l-4 border-[#0b6d41] shadow-sm p-4">
                            <Link href={prog.href} className="font-bold text-[#0b6d41] text-sm mb-2 block hover:underline">
                                {prog.name}
                            </Link>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mb-3">
                                <span>{prog.duration}</span>
                                <span className="font-bold text-[#0b6d41]">{prog.fee}/yr</span>
                                <span>Seats: {prog.seats}</span>
                            </div>
                            <div className="flex gap-3">
                                <Link href={prog.href} className="text-xs font-bold text-[#0b6d41] hover:underline">
                                    View Details →
                                </Link>
                                <a
                                    href={siteConfig.admissionFormUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-white bg-[#0b6d41] px-3 py-1 rounded-full hover:bg-[#085231] transition-colors"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 4. Eligibility Section
function EligibilitySection() {
    return (
        <section id="eligibility" className="py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/5 rounded shadow-sm inline-block">Who Can Apply</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Eligibility Criteria</h2>
                    <p className="text-gray-600 mt-3 text-sm sm:text-base">Requirements to apply for BSc Allied Health Sciences programs</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-l-[6px] border-[#ffde59]">
                        <h3 className="text-xl font-bold text-[#0b6d41] mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-[#ffde59]" /> Academic Requirements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Passed +2 or equivalent from a recognized board",
                                "Physics, Chemistry, and Biology (PCB) as core subjects",
                                "English as a compulsory subject in +2",
                                "Minimum marks as per category (see cutoffs below)"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#0b6d41] shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-l-[6px] border-[#0b6d41]">
                        <h3 className="text-xl font-bold text-[#0b6d41] mb-6 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-[#0b6d41]" /> Additional Requirements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Age: 17 years or above as on 31st December 2026",
                                "NEET score is NOT mandatory — merit-based admission",
                                "NRI and international candidates are eligible",
                                "Medical fitness certificate from registered practitioner"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#0b6d41] shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Category Cutoff Badges */}
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    {[
                        { category: "General", cutoff: "50%", color: "bg-[#0b6d41]" },
                        { category: "OBC", cutoff: "45%", color: "bg-[#085231]" },
                        { category: "SC/ST", cutoff: "40%", color: "bg-[#042d1a]" },
                    ].map((item, i) => (
                        <div key={i} className={`${item.color} text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2`}>
                            <span>{item.category}</span>
                            <span className="bg-white/20 px-3 py-0.5 rounded-full text-xs">{item.cutoff}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 5. Admission Process Section
function AdmissionProcessSection() {
    const steps = [
        { step: 1, title: "Check Eligibility", desc: "Verify your +2 marks and subject requirements", icon: <ClipboardList className="w-5 h-5" /> },
        { step: 2, title: "Apply Online", desc: "Complete the application form at admission.jkkn.ac.in", icon: <FileText className="w-5 h-5" /> },
        { step: 3, title: "Upload Documents", desc: "Submit scanned copies of all required documents", icon: <Upload className="w-5 h-5" /> },
        { step: 4, title: "Verification", desc: "Original documents verified by admission office", icon: <UserCheck className="w-5 h-5" /> },
        { step: 5, title: "Counseling", desc: "Attend merit-based counseling and seat allotment", icon: <Users className="w-5 h-5" /> },
        { step: 6, title: "Fee Payment", desc: "Pay admission fees and complete enrollment", icon: <CreditCard className="w-5 h-5" /> },
    ];

    return (
        <section id="process" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">Step by Step</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Admission Process</h2>
                    <p className="text-gray-600 mt-3 text-sm sm:text-base">Simple 6-step process to join JKKN Allied Health Sciences</p>
                </div>

                {/* Desktop: Horizontal Stepper */}
                <div className="hidden md:block">
                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute top-10 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-[#0b6d41]/30"></div>

                        <div className="grid grid-cols-6 gap-4">
                            {steps.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center text-center relative z-10"
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#0b6d41] text-white flex items-center justify-center shadow-lg ring-4 ring-white mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-[#0b6d41] text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="md:hidden max-w-md mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#0b6d41]/20"></div>

                        <div className="space-y-6">
                            {steps.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex gap-4 relative"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#0b6d41] text-white flex items-center justify-center shadow-md shrink-0 z-10 text-sm font-bold">
                                        {item.step}
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-bold text-[#0b6d41] text-sm">{item.title}</h4>
                                        <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 6. Documents Section
function DocumentsSection() {
    const documents = [
        { name: "10th Marksheet", desc: "Original + 2 photocopies", icon: <BookOpen className="w-5 h-5" /> },
        { name: "12th Marksheet", desc: "Original + 2 photocopies", icon: <BookOpen className="w-5 h-5" /> },
        { name: "Transfer Certificate", desc: "From last attended institution", icon: <FileText className="w-5 h-5" /> },
        { name: "Community Certificate", desc: "For category-based reservation", icon: <IdCard className="w-5 h-5" /> },
        { name: "Income Certificate", desc: "For scholarship eligibility", icon: <FileText className="w-5 h-5" /> },
        { name: "Passport Photos", desc: "6 recent passport-size photos", icon: <Camera className="w-5 h-5" /> },
        { name: "Aadhaar Card", desc: "Original + photocopy", icon: <IdCard className="w-5 h-5" /> },
        { name: "Medical Fitness Certificate", desc: "From a registered practitioner", icon: <Heart className="w-5 h-5" /> },
        { name: "Conduct Certificate", desc: "From last attended institution", icon: <Shield className="w-5 h-5" /> },
        { name: "Migration Certificate", desc: "If from other state/university", icon: <FileText className="w-5 h-5" /> },
    ];

    return (
        <section id="documents" className="py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/5 rounded shadow-sm inline-block">Checklist</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Required Documents</h2>
                    <p className="text-gray-600 mt-3 text-sm sm:text-base">Keep these documents ready before applying</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {documents.map((doc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0b6d41]/20 transition-all"
                        >
                            <div className="w-10 h-10 bg-[#0b6d41]/10 rounded-lg flex items-center justify-center text-[#0b6d41] shrink-0">
                                {doc.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">{doc.name}</h4>
                                <p className="text-xs text-gray-500 mt-0.5">{doc.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 7. Important Dates Section
function ImportantDatesSection() {
    const dates = [
        { event: "Application Opens", date: "[UPDATE]", status: "upcoming" },
        { event: "Early Bird Deadline", date: "[UPDATE]", status: "upcoming" },
        { event: "Last Date to Apply", date: "[UPDATE]", status: "upcoming" },
        { event: "Counseling Begins", date: "[UPDATE]", status: "upcoming" },
        { event: "Classes Commence", date: "August 2026", status: "upcoming" },
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">Academic Year 2026-27</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Important Dates</h2>
                </div>

                {/* Warning Banner */}
                <div className="bg-[#ffde59]/20 border border-[#ffde59] rounded-xl p-4 mb-8 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-[#b8860b]">Dates subject to change</p>
                        <p className="text-xs text-[#b8860b]/80 mt-1">
                            Contact the admission office at <a href={`tel:${siteConfig.phone}`} className="underline font-bold">{siteConfig.phone}</a> for the latest schedule.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {dates.map((item, i) => (
                        <div key={i} className="bg-[#fbfbee] rounded-xl p-5 flex items-center justify-between border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#0b6d41] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {i + 1}
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">{item.event}</span>
                            </div>
                            <span className={`text-sm font-bold ${item.date === '[UPDATE]' ? 'text-[#b8860b] bg-[#ffde59]/20 px-3 py-1 rounded-full' : 'text-[#0b6d41]'}`}>
                                {item.date === '[UPDATE]' ? 'To Be Announced' : item.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 8. Scholarships Section
function ScholarshipsSection() {
    const scholarships = [
        {
            title: "Government Scholarships",
            desc: "State and central government scholarships for BC, MBC, SC, and ST category students. Covers partial to full tuition fees based on family income and category.",
            highlights: ["BC/MBC fee waiver", "SC/ST full scholarship", "Post-Matric Scholarship Scheme"],
            color: "border-[#0b6d41]",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "JKKN Merit Scholarships",
            desc: "Institution-level scholarships for academically outstanding students. Awarded based on +2 marks and performance in entrance counseling.",
            highlights: ["Top scorer awards", "Academic excellence grants", "Sports achievement awards"],
            color: "border-[#ffde59]",
            icon: <Award className="w-6 h-6" />
        },
        {
            title: "Fee Concessions & Support",
            desc: "Flexible payment options and financial support to ensure no deserving student misses out on quality education due to financial constraints.",
            highlights: ["Installment payment facility", "Education loan assistance", "Sibling fee concession"],
            color: "border-[#085231]",
            icon: <Heart className="w-6 h-6" />
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/5 rounded shadow-sm inline-block">Financial Aid</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Scholarships & Fee Support</h2>
                    <p className="text-gray-600 mt-3 text-sm sm:text-base">Making quality healthcare education accessible to all</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {scholarships.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-white p-6 rounded-2xl shadow-md border-t-4 ${item.color} hover:shadow-xl transition-all`}
                        >
                            <div className="w-12 h-12 bg-[#0b6d41]/10 rounded-xl flex items-center justify-center text-[#0b6d41] mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#0b6d41] mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                            <ul className="space-y-2">
                                {item.highlights.map((h, j) => (
                                    <li key={j} className="flex items-center gap-2 text-xs text-gray-700">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0b6d41] shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 9. Why Choose Section
function WhyChooseSection() {
    const usps = [
        { title: "70+ Year Legacy", desc: "Part of JKKN Educational Institutions with over 70 years of excellence in education across 10 institutions.", icon: <Award className="w-6 h-6" /> },
        { title: "500+ Bed Hospital", desc: "Clinical training at our multi-specialty teaching hospital with real patient exposure from Year 1.", icon: <Hospital className="w-6 h-6" /> },
        { title: "95% Placement Rate", desc: "Strong placement track record with 100+ recruiters including Apollo, Fortis, MIOT, and international hospitals.", icon: <TrendingUp className="w-6 h-6" /> },
        { title: "Global Opportunities", desc: "International placement pathways to UK (NHS), Saudi Arabia, UAE (Cleveland Clinic), and Singapore.", icon: <Globe className="w-6 h-6" /> },
        { title: "NAAC A+ Accredited", desc: "Recognized for academic excellence and quality infrastructure by the National Assessment and Accreditation Council.", icon: <Sparkles className="w-6 h-6" /> },
        { title: "Clinical Exposure", desc: "2000+ hours of hands-on clinical training across partnered hospitals with expert supervision.", icon: <Stethoscope className="w-6 h-6" /> },
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">The JKKN Advantage</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Why Choose JKKN?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {usps.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-[#fbfbee] rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <div className="w-12 h-12 bg-[#0b6d41] rounded-xl flex items-center justify-center text-white mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#0b6d41] mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 10. FAQ Section
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What are the eligibility criteria for BSc Allied Health Sciences at JKKN?",
            a: "Candidates must have completed +2 with Physics, Chemistry, and Biology (PCB) with minimum 50% marks for General category, 45% for OBC, and 40% for SC/ST. Age should be 17 years or above as on 31st December 2026. English must be a compulsory subject."
        },
        {
            q: "Is NEET required for Allied Health Sciences admission?",
            a: "No, NEET is not mandatory for BSc Allied Health Sciences admission at JKKN College. Admission is purely merit-based through +2 marks and counseling. This is an excellent pathway for students interested in healthcare without NEET."
        },
        {
            q: "What is the fee range for BSc AHS programs?",
            a: "Annual fees range from ₹75,000 to ₹1,25,000 depending on the specialization. Fee payment can be made in installments. Government scholarships and JKKN merit scholarships are available to reduce the financial burden."
        },
        {
            q: "How many programs does JKKN AHS College offer?",
            a: "JKKN offers 9 BSc Allied Health Sciences programs: Cardiac Technology, Dialysis Technology, Radiology & Imaging Technology, Operation Theatre & Anaesthesia, Respiratory Therapy, Physician Assistant, Critical Care Technology, Medical Record Science, and Accident & Emergency Care Technology."
        },
        {
            q: "What is the course duration for BSc Allied Health Sciences?",
            a: "All BSc Allied Health Sciences programs are 4-year courses — 3 years of academic study followed by 1 year of mandatory clinical internship at partnered hospitals. The degree is awarded by TN Dr. MGR Medical University."
        },
        {
            q: "What documents are needed for admission?",
            a: "You need 10th and 12th marksheets, transfer certificate, community certificate, income certificate, 6 passport-size photos, Aadhaar card, medical fitness certificate, conduct certificate, and migration certificate (if from another state/university)."
        },
        {
            q: "Are scholarships available for AHS students?",
            a: "Yes, JKKN facilitates government scholarships for BC, MBC, SC, and ST students. Additionally, JKKN offers merit-based scholarships for academic toppers, installment payment options, and education loan assistance."
        },
        {
            q: "What is the placement record at JKKN AHS?",
            a: "JKKN has a 95% placement rate with an average package of ₹3.2 LPA. Graduates are placed in leading hospitals like Apollo, Fortis, MIOT, and international healthcare facilities in UK, UAE, Saudi Arabia, and Singapore."
        },
        {
            q: "Can NRI students apply for admission?",
            a: "Yes, NRI candidates are eligible for BSc Allied Health Sciences programs. They need to have completed equivalent qualification with PCB subjects. Additional documents like passport copy and NRI certificate may be required."
        },
        {
            q: "How do I apply for JKKN AHS admission 2026-27?",
            a: "You can apply online at admission.jkkn.ac.in or visit the campus at Komarapalayam, Namakkal, Tamil Nadu 638183. For admission enquiries, call 93458 55001 or email alliedhealth@jkkn.ac.in."
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-[#fbfbee]">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/5 rounded shadow-sm inline-block">Admission Queries</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                            <h3 className="m-0 text-base">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    aria-expanded={openIndex === i}
                                    className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-[#0b6d41] text-sm pr-4">{faq.q}</span>
                                    {openIndex === i ? <Minus className="w-5 h-5 text-[#ffde59] shrink-0" /> : <Plus className="w-5 h-5 text-gray-400 shrink-0" />}
                                </button>
                            </h3>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="faq-answer p-5 pt-0 text-gray-600 text-sm leading-relaxed">
                                            {faq.a}
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

// 11. CTA Section
function CTASection() {
    return (
        <section className="bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#042d1a] py-16 text-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
                    Ready to Begin Your Healthcare Career?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                    Join 9 BSc Allied Health Sciences programs at JKKN College. Applications open for 2026-27 batch.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <a
                        href={siteConfig.admissionFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-[#0b6d41] rounded-full font-bold shadow-lg hover:bg-[#ffde59] hover:text-[#042d1a] transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                        Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href={`tel:${siteConfig.phone}`}
                        className="px-8 py-4 border-2 border-white/40 rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                        <Phone className="w-4 h-4" /> {siteConfig.phone}
                    </a>
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="px-8 py-4 border-2 border-white/40 rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                        <Mail className="w-4 h-4" /> Email Us
                    </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-white/60 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>JKKN College of Allied Health Sciences, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183</span>
                </div>
            </div>
        </section>
    );
}

// 12. Cross Links Section
function CrossLinksSection() {
    const programs = [
        { name: "Cardiac Technology", href: "/cardiac-technology" },
        { name: "Dialysis Technology", href: "/dialysis-technology" },
        { name: "Radiology & Imaging", href: "/radiology-imaging-technology" },
        { name: "OT & Anaesthesia", href: "/operation-theatre-anaesthesia" },
        { name: "Respiratory Therapy", href: "/respiratory-therapy" },
        { name: "Physician Assistant", href: "/physician-assistant" },
        { name: "Critical Care", href: "/critical-care-technology" },
        { name: "Medical Record Science", href: "/medical-record-science" },
        { name: "Accident & Emergency", href: "/accident-emergency-care" },
    ];

    const facilities = [
        { name: "Laboratories", href: "/lab" },
        { name: "Library", href: "/library" },
        { name: "Classrooms", href: "/classroom" },
        { name: "Hostel", href: "/hostel" },
        { name: "Transport", href: "/transport" },
        { name: "Food Court", href: "/food-court" },
        { name: "Wi-Fi Campus", href: "/wifi" },
        { name: "Ambulance Service", href: "/ambulance-service" },
        { name: "Bank & Post Office", href: "/bank-post-office" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Programs */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0b6d41] mb-4">Explore Our Programs</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {programs.map((p) => (
                            <Link
                                key={p.href}
                                href={p.href}
                                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0b6d41]/30 transition-all"
                            >
                                <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Facilities */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0b6d41] mb-4">Campus Facilities</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {facilities.map((f) => (
                            <Link
                                key={f.href}
                                href={f.href}
                                className="text-center py-3 px-2 rounded-xl bg-[#f0f7f2] hover:bg-[#d4eadc] transition-colors text-sm font-medium text-[#0b6d41]"
                            >
                                {f.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
