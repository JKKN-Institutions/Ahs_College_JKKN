"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';
import { admissionCourses } from '@/lib/admission-courses';
import {
    GraduationCap, TrendingUp, IndianRupee, Award, Hospital,
    FileText, Phone, Mail, MapPin, ArrowRight,
    Plus, Minus, Globe, Sparkles, HeartPulse, Activity,
    ScanLine, Scissors, Wind, UserCheck, Siren, ClipboardList,
    ChevronRight, Trophy
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    "heart-pulse": <HeartPulse className="w-6 h-6" />,
    "activity": <Activity className="w-6 h-6" />,
    "scan-line": <ScanLine className="w-6 h-6" />,
    "scissors": <Scissors className="w-6 h-6" />,
    "wind": <Wind className="w-6 h-6" />,
    "user-check": <UserCheck className="w-6 h-6" />,
    "siren": <Siren className="w-6 h-6" />,
    "file-text": <FileText className="w-6 h-6" />,
};

export default function CourseWiseAdmissionHubPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ahs.jkkn.ac.in/" },
        { name: "Admission", url: "https://ahs.jkkn.ac.in/admissions" },
        { name: "Course-Wise Admission", url: "https://ahs.jkkn.ac.in/admissions/courses" }
    ]);

    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Navbar />

            <main className="flex-grow pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Admission', href: '/admissions' },
                        { label: 'Course-Wise Admission' }
                    ]} />
                </div>
                <HeroSection />
                <CommonEligibilityBand />
                <CourseCardsGrid />
                <CompactComparisonTable />
                <CourseSelectionHelper />
                <ProcessReminder />
                <FAQSection />
                <CTASection />
                <CrossLinksSection />
            </main>

            <Footer />
        </div>
    );
}

function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#042d1a] text-white py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <span className="inline-block text-[#ffde59] font-bold tracking-widest uppercase text-xs mb-4 px-4 py-1.5 bg-white/10 rounded-full">
                    Course-Wise Admission 2026-27
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Course-Wise Admission<br />
                    <span className="text-[#ffde59]">9 BSc Allied Health Sciences Programs</span>
                </h1>
                <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                    Choose your specialisation. Each course has its own dedicated admission page with eligibility, fees, seats, career paths, salary, and recruiters.
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

                <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/80 text-sm">
                    <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-[#ffde59]" /> 9 Programs</span>
                    <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#ffde59]" /> 95% Placement</span>
                    <span className="flex items-center gap-2"><Hospital className="w-4 h-4 text-[#ffde59]" /> 500+ Bed Hospital</span>
                    <span className="flex items-center gap-2"><Award className="w-4 h-4 text-[#ffde59]" /> TN Dr. MGR Medical University</span>
                </div>
            </div>
        </section>
    );
}

function CommonEligibilityBand() {
    const items = [
        { label: "+2 with PCB", value: "Physics, Chemistry, Biology" },
        { label: "NEET", value: "NOT required" },
        { label: "Age", value: "17+ as on 31 Dec 2026" },
        { label: "Cutoff", value: "Gen 50% · OBC 45% · SC/ST 40%" },
    ];

    return (
        <section className="py-10 bg-[#ffde59]/15">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-start gap-3 mb-6 max-w-3xl mx-auto text-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#0b6d41] mt-1 shrink-0" />
                    <div>
                        <h2 className="text-xl md:text-2xl font-black text-[#0b6d41]">Common Eligibility — All 9 Courses</h2>
                        <p className="text-sm text-gray-700 mt-1">Same eligibility for every BSc Allied Health Sciences program at JKKN. NEET is not mandatory.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
                    {items.map((it, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{it.label}</div>
                            <div className="text-sm font-bold text-[#0b6d41]">{it.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CourseCardsGrid() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">9 Specialisations</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Choose Your Course</h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
                        Each course has a dedicated admission page with full details — click any card to explore.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {admissionCourses.map((course, i) => (
                        <motion.div
                            key={course.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                        >
                            <Link
                                href={`/admissions/${course.slug}`}
                                className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#0b6d41]/30 shadow-sm hover:shadow-xl transition-all h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#0b6d41] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        {iconMap[course.iconKey]}
                                    </div>
                                    <span className="text-xs font-bold text-[#0b6d41] bg-[#0b6d41]/10 px-2 py-1 rounded">
                                        {course.duration}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-[#0b6d41] mb-2 leading-tight group-hover:underline">
                                    {course.name}
                                </h3>
                                <p className="text-xs text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                                <div className="grid grid-cols-3 gap-2 mb-4 pt-3 border-t border-gray-100">
                                    <div>
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">MQ Fee</div>
                                        <div className="text-xs font-black text-[#0b6d41]">{course.mqFee.replace(' / year', '/yr')}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">Seats</div>
                                        <div className="text-xs font-black text-gray-700">{course.seats}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">Avg Pkg</div>
                                        <div className="text-xs font-black text-gray-700">{course.avgPackage}</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm font-bold text-[#0b6d41]">
                                    <span>View Admission Details</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CompactComparisonTable() {
    return (
        <section className="py-16 bg-[#fbfbee]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">Side-by-Side</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Quick Comparison — All 9 Courses</h2>
                    <p className="text-gray-600 mt-3 text-sm sm:text-base">Compare fees, seats, and career outlook across all BSc AHS programs</p>
                </div>

                <div className="hidden md:block overflow-x-auto bg-white rounded-2xl shadow-md">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#0b6d41] text-white">
                                <th className="text-left py-4 px-5 rounded-tl-2xl font-bold text-sm">Course</th>
                                <th className="text-center py-4 px-4 font-bold text-sm">MQ Fee/yr</th>
                                <th className="text-center py-4 px-4 font-bold text-sm">Seats</th>
                                <th className="text-center py-4 px-4 font-bold text-sm">Avg Package</th>
                                <th className="text-left py-4 px-5 rounded-tr-2xl font-bold text-sm">Best For</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admissionCourses.map((c, i) => (
                                <tr key={c.slug} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'} hover:bg-[#0b6d41]/5 transition-colors`}>
                                    <td className="py-4 px-5">
                                        <Link href={`/admissions/${c.slug}`} className="font-semibold text-gray-900 hover:text-[#0b6d41] text-sm">
                                            {c.name}
                                        </Link>
                                    </td>
                                    <td className="py-4 px-4 text-center font-bold text-[#0b6d41] text-sm">{c.mqFee}</td>
                                    <td className="py-4 px-4 text-center text-sm text-gray-700">{c.seats}</td>
                                    <td className="py-4 px-4 text-center text-sm font-semibold text-gray-700">{c.avgPackage}</td>
                                    <td className="py-4 px-5 text-xs text-gray-600">{c.bestFor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="md:hidden space-y-3">
                    {admissionCourses.map((c) => (
                        <Link key={c.slug} href={`/admissions/${c.slug}`} className="block bg-white rounded-xl p-4 border-l-4 border-[#0b6d41] shadow-sm">
                            <span className="font-bold text-[#0b6d41] text-sm block mb-2">{c.name}</span>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                                <div><span className="text-gray-500">Fee:</span> <span className="font-bold text-[#0b6d41]">{c.mqFee.replace(' / year', '')}</span></div>
                                <div><span className="text-gray-500">Seats:</span> <span className="font-bold">{c.seats}</span></div>
                                <div><span className="text-gray-500">Package:</span> <span className="font-bold">{c.avgPackage}</span></div>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">{c.bestFor}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CourseSelectionHelper() {
    const helpers = [
        {
            q: "Want the highest salary potential?",
            a: "B.Sc Cardiac Technology & B.Sc Operation Theatre & Anaesthesia",
            href: "/admissions/cardiac-technology",
            icon: <Trophy className="w-5 h-5" />,
        },
        {
            q: "Looking for best international scope (UK / Gulf / US)?",
            a: "B.Sc Radiology & Imaging, B.Sc Physician Assistant, B.Sc Respiratory Therapy",
            href: "/admissions/radiology-imaging-technology",
            icon: <Globe className="w-5 h-5" />,
        },
        {
            q: "Want the lowest fees and office-based career?",
            a: "B.Sc Medical Record Science — ₹60K/year, healthcare IT & medical coding scope",
            href: "/admissions/medical-record-science",
            icon: <IndianRupee className="w-5 h-5" />,
        },
        {
            q: "Drawn to fast-paced critical care & trauma?",
            a: "B.Sc Critical Care Technology & B.Sc Accident & Emergency Care",
            href: "/admissions/critical-care-technology",
            icon: <Siren className="w-5 h-5" />,
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">Not Sure Which Course?</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mt-2">Pick Your Path</h2>
                    <p className="text-gray-600 mt-3 text-sm sm:text-base">Quick guidance based on your career priority</p>
                </div>
                <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {helpers.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <Link
                                href={h.href}
                                className="bg-[#fbfbee] hover:bg-[#0b6d41] hover:text-white rounded-2xl p-5 border border-gray-100 transition-all group flex items-start gap-3"
                            >
                                <div className="w-10 h-10 bg-[#0b6d41] text-white group-hover:bg-white group-hover:text-[#0b6d41] rounded-xl flex items-center justify-center shrink-0 transition-colors">
                                    {h.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-sm text-[#0b6d41] group-hover:text-white mb-1">{h.q}</p>
                                    <p className="text-sm text-gray-700 group-hover:text-white/90">{h.a}</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white shrink-0 mt-2" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProcessReminder() {
    return (
        <section className="py-12 bg-[#fbfbee]">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-xl md:text-2xl font-black text-[#0b6d41] mb-4">Admission Process & Documents</h2>
                <p className="text-gray-600 text-sm mb-6 max-w-2xl mx-auto">
                    The application process and required documents are the same for all 9 BSc Allied Health Sciences programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/admissions#process" className="px-6 py-3 bg-white border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold text-sm hover:bg-[#0b6d41] hover:text-white transition-all inline-flex items-center justify-center gap-2">
                        <ClipboardList className="w-4 h-4" /> View 6-Step Process
                    </Link>
                    <Link href="/admissions#documents" className="px-6 py-3 bg-white border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold text-sm hover:bg-[#0b6d41] hover:text-white transition-all inline-flex items-center justify-center gap-2">
                        <FileText className="w-4 h-4" /> Documents Checklist
                    </Link>
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: { q: string; a: React.ReactNode }[] = [
        {
            q: "Which BSc Allied Health Sciences course is best at JKKN College?",
            a: "The best course depends on your career goal. B.Sc Cardiac Technology and B.Sc Operation Theatre & Anaesthesia have the highest placement salary (₹3.5–6 LPA). B.Sc Radiology & Imaging Technology and B.Sc Physician Assistant offer strong international scope. B.Sc Medical Record Science has the lowest fee (₹60,000/yr). All 9 programs are 4-year courses (3+1) affiliated to TN Dr. MGR Medical University.",
        },
        {
            q: "What is the seat matrix for each BSc AHS course at JKKN?",
            a: "Total Management Quota (MQ) seats per course: Cardiac Technology — 7, Dialysis Technology — 5, Radiology & Imaging — 5, Operation Theatre & Anaesthesia — 10, Respiratory Therapy — 10, Physician Assistant — 10, Critical Care Technology — 10, Medical Record Science — 15, Accident & Emergency Care — 10. Government Quota (GQ) seats are allotted as per Tamil Nadu Govt counselling.",
        },
        {
            q: "What is the course-wise fee structure at JKKN Allied Health Sciences?",
            a: "Management Quota (MQ) annual fees per course: Medical Record Science — ₹60,000, Dialysis Technology / Respiratory Therapy / Critical Care / Accident & Emergency — ₹1,10,000, Radiology & Imaging / Physician Assistant — ₹1,30,000, Cardiac Technology / Operation Theatre & Anaesthesia — ₹1,70,000. GQ fees as per TN Govt norms.",
        },
        {
            q: "What is the eligibility for each BSc Allied Health Sciences course?",
            a: "All 9 BSc Allied Health Sciences programs at JKKN require: +2 / equivalent with Physics, Chemistry, Biology (PCB) as core subjects; minimum aggregate of 50% (General), 45% (OBC), 40% (SC/ST); age 17 years or above as on 31 December 2026; English as a compulsory subject; medical fitness certificate. NEET is NOT mandatory for any AHS course.",
        },
        {
            q: "Can I apply for multiple BSc AHS courses at JKKN?",
            a: <>Yes. In the JKKN admission form, you can list multiple course preferences in priority order. Seat allotment is done based on merit (+2 marks) and seat availability. If your first preference is full, the next available preference is offered. <a href={siteConfig.admissionFormUrl} target="_blank" rel="noopener noreferrer" className="text-[#0b6d41] font-semibold hover:underline">Apply here</a>.</>,
        },
        {
            q: "Which BSc AHS course has the best placement at JKKN?",
            a: "Overall placement is 95% across all 9 courses. Highest average packages: B.Sc Cardiac Technology (₹4-6 LPA), B.Sc Operation Theatre & Anaesthesia (₹3.5-5 LPA), B.Sc Radiology & Imaging (₹3.5-5 LPA), B.Sc Physician Assistant (₹3-4.5 LPA). Top recruiters: Apollo, Fortis, MIOT, Manipal, Kauvery, NHS-UK, Cleveland Clinic UAE, KFSH Saudi Arabia.",
        },
        {
            q: "Is there an internship in BSc Allied Health Sciences courses?",
            a: "Yes, all 9 BSc AHS programs include 1 year of mandatory clinical internship after 3 years of academic study (total 3+1 = 4 years). Internship is conducted at JKKN's 500+ bed multi-specialty teaching hospital and partnered hospitals.",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/5 rounded shadow-sm inline-block">General FAQ</span>
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

function CTASection() {
    return (
        <section className="bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#042d1a] py-16 text-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
                    Found Your Course? Apply Now.
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                    Submit your application for the 2026-27 batch in under 10 minutes. Merit-based admission, no NEET required.
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

function CrossLinksSection() {
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

