"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import type { AdmissionCourse } from "@/lib/admission-courses";
import {
    Clock, IndianRupee, Users, TrendingUp, CheckCircle2, Briefcase,
    Building2, Trophy, Stethoscope, Target, ArrowRight, ChevronRight,
    Phone, Mail, MapPin, Plus, Minus, HeartPulse, Activity, ScanLine,
    Scissors, Wind, UserCheck, Siren, FileText, BookOpen, GraduationCap,
    Wrench, Zap, Globe, Star
} from "lucide-react";
import AhsEnquiryForm from "@/components/lead/AhsEnquiryForm";
import { DEFAULT_PROGRAMME_BY_PAGE } from "@/lib/ahs-programmes";

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

interface Props {
    course: AdmissionCourse;
    otherCourses: AdmissionCourse[];
}

export default function CourseAdmissionPageContent({ course, otherCourses }: Props) {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />
            <main className="flex-grow pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Admission", href: "/admissions" },
                            { label: course.shortName },
                        ]}
                    />
                </div>

                <Hero course={course} />
                <StatsStrip course={course} />
                <AboutSection course={course} />
                <WhyChooseSection course={course} />
                <DetailGrid course={course} />
                <SyllabusSection course={course} />
                <SkillsSection course={course} />
                <EquipmentSection course={course} />
                <RecruitersByRegionSection course={course} />
                <SalaryInternshipBlock course={course} />
                <CareerScopeSection course={course} />
                <HigherStudiesSection course={course} />
                <BestForCallout course={course} />
                <FAQ faqs={course.faqs} />
                <CTASection course={course} />
                <OtherCoursesSection otherCourses={otherCourses} />
            </main>
            {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser cannot POST there */}
            {/* directly - the endpoint sends no Access-Control-Allow-Origin header. */}
            <section className="bg-gradient-to-br from-[#0b6d41] to-[#12a15f] py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-white text-2xl md:text-3xl font-black text-center mb-2">Get a Call Back</h2>
                    <p className="text-white/80 text-center text-sm mb-8">Leave your details and our admission team will contact you within 24 hours.</p>
                    <AhsEnquiryForm sourcePage={`admissions-${course.slug}`} defaultProgrammeId={DEFAULT_PROGRAMME_BY_PAGE[course.slug]} />
                </div>
            </section>

            <Footer />
        </div>
    );
}

function Hero({ course }: { course: AdmissionCourse }) {
    return (
        <section className="bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#042d1a] text-white py-14 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-[#ffde59] mb-4">
                        {iconMap[course.iconKey]}
                    </div>
                    <span className="inline-block text-[#ffde59] font-bold tracking-widest uppercase text-xs mb-3 px-4 py-1.5 bg-white/10 rounded-full">
                        Course-Wise Admission 2026-27
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight max-w-4xl">
                        {course.name}<br />
                        <span className="text-[#ffde59] text-xl sm:text-2xl md:text-3xl">Admission at JKKN College, Tamil Nadu</span>
                    </h1>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mb-6 leading-relaxed">
                        {course.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-7 text-sm">
                        <span className="bg-white/15 px-4 py-1.5 rounded-full font-semibold">{course.duration}</span>
                        <span className="bg-white/15 px-4 py-1.5 rounded-full font-semibold">{course.mqFee} (MQ)</span>
                        <span className="bg-white/15 px-4 py-1.5 rounded-full font-semibold">Seats: {course.seats}</span>
                        <span className="bg-[#ffde59] text-[#042d1a] px-4 py-1.5 rounded-full font-bold">No NEET Required</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={siteConfig.admissionFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3.5 bg-white text-[#0b6d41] rounded-full font-bold shadow-lg hover:bg-[#ffde59] hover:text-[#042d1a] transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 text-sm"
                        >
                            Apply Now <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="px-7 py-3.5 border-2 border-white/40 text-white rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm"
                        >
                            <Phone className="w-4 h-4" /> Call Admissions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatBox({ icon, label, value, highlight }: { icon: React.ReactNode; label: string; value: string; highlight?: boolean }) {
    return (
        <div className={`rounded-xl p-4 border ${highlight ? "bg-[#0b6d41] text-white border-[#0b6d41]" : "bg-white border-gray-100"}`}>
            <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5 ${highlight ? "text-white/80" : "text-gray-500"}`}>
                {icon} {label}
            </div>
            <div className={`text-sm md:text-base font-black ${highlight ? "text-white" : "text-[#0b6d41]"}`}>{value}</div>
        </div>
    );
}

function StatsStrip({ course }: { course: AdmissionCourse }) {
    return (
        <section className="relative z-20 -mt-8 px-4 pb-2">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatBox icon={<Clock className="w-4 h-4" />} label="Duration" value={course.duration} />
                <StatBox icon={<IndianRupee className="w-4 h-4" />} label="MQ Fee" value={course.mqFee} highlight />
                <StatBox icon={<Users className="w-4 h-4" />} label="Seats" value={course.seats} />
                <StatBox icon={<TrendingUp className="w-4 h-4" />} label="Avg Package" value={course.avgPackage} />
            </div>
        </section>
    );
}

function AboutSection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-12 md:py-16 bg-[#fbfbee]">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-[#0b6d41]" />
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41]">About {course.shortName}</h2>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{course.longDescription}</p>
                <p className="text-xs text-gray-500 mt-3 italic">Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai</p>
            </div>
        </section>
    );
}

function DetailCard({ icon, title, accent, children }: { icon: React.ReactNode; title: string; accent: string; children: React.ReactNode }) {
    return (
        <div className={`bg-white rounded-2xl p-6 shadow-sm ${accent}`}>
            <h3 className="text-lg font-bold text-[#0b6d41] mb-4 flex items-center gap-2">
                <span className="text-[#0b6d41]">{icon}</span>
                {title}
            </h3>
            {children}
        </div>
    );
}

function DetailGrid({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-5">
                    <DetailCard icon={<CheckCircle2 className="w-5 h-5" />} title="Eligibility & Cutoff" accent="border-l-[6px] border-[#ffde59]">
                        <ul className="space-y-2.5">
                            {course.eligibility.map((e, i) => (
                                <li key={i} className="flex gap-2.5 text-sm text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-[#0b6d41] shrink-0 mt-0.5" />
                                    <span>{e}</span>
                                </li>
                            ))}
                        </ul>
                    </DetailCard>

                    <DetailCard icon={<IndianRupee className="w-5 h-5" />} title="Fee Structure" accent="border-l-[6px] border-[#0b6d41]">
                        <div className="space-y-2.5">
                            {course.feeBreakdown.map((f, i) => (
                                <div key={i} className="flex justify-between items-start text-sm border-b border-gray-100 last:border-b-0 pb-2 last:pb-0 gap-3">
                                    <span className="text-gray-600">{f.label}</span>
                                    <span className="font-bold text-[#0b6d41] text-right">{f.value}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-3">Installment payment + scholarships available. <Link href="/scholarships" className="text-[#0b6d41] font-semibold hover:underline">View scholarships →</Link></p>
                    </DetailCard>

                    <DetailCard icon={<Briefcase className="w-5 h-5" />} title="Career Paths & Roles" accent="border-l-[6px] border-[#085231]">
                        <div className="flex flex-wrap gap-2">
                            {course.roles.map((r, i) => (
                                <span key={i} className="text-xs font-semibold text-[#0b6d41] bg-[#0b6d41]/8 border border-[#0b6d41]/15 px-3 py-1.5 rounded-full">
                                    {r}
                                </span>
                            ))}
                        </div>
                    </DetailCard>

                    <DetailCard icon={<Building2 className="w-5 h-5" />} title="Top Recruiters" accent="border-l-[6px] border-[#042d1a]">
                        <div className="flex flex-wrap gap-2">
                            {course.recruiters.map((r, i) => (
                                <span key={i} className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                                    {r}
                                </span>
                            ))}
                        </div>
                    </DetailCard>
                </div>
            </div>
        </section>
    );
}

function SalaryInternshipBlock({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-10 bg-[#fbfbee]">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-5">
                <div className="bg-[#0b6d41]/5 rounded-2xl p-5 flex items-start gap-3 border border-[#0b6d41]/15">
                    <Trophy className="w-6 h-6 text-[#0b6d41] shrink-0 mt-0.5" />
                    <div>
                        <div className="text-xs font-bold text-[#0b6d41] uppercase tracking-wider mb-1.5">Salary Range</div>
                        <p className="text-sm text-gray-700 leading-relaxed">{course.salaryRange}</p>
                    </div>
                </div>
                <div className="bg-[#ffde59]/20 rounded-2xl p-5 flex items-start gap-3 border border-[#ffde59]/40">
                    <Stethoscope className="w-6 h-6 text-[#b8860b] shrink-0 mt-0.5" />
                    <div>
                        <div className="text-xs font-bold text-[#b8860b] uppercase tracking-wider mb-1.5">Internship</div>
                        <p className="text-sm text-gray-700 leading-relaxed">{course.internship}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CareerScopeSection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#0b6d41]" />
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41]">Career Scope & Growth</h2>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{course.careerScope}</p>
            </div>
        </section>
    );
}

function BestForCallout({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-10 bg-[#fbfbee]">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white border-2 border-[#0b6d41]/20 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                    <Target className="w-6 h-6 text-[#0b6d41] shrink-0 mt-0.5" />
                    <div>
                        <h3 className="text-base font-bold text-[#0b6d41] mb-1">Best for</h3>
                        <p className="text-sm text-gray-700">{course.bestFor}</p>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <Link href={course.coursePageHref} className="inline-flex items-center gap-2 text-sm font-bold text-[#0b6d41] hover:underline">
                        <GraduationCap className="w-4 h-4" /> View full course page (learning framework, learning pathway, senior learners) →
                    </Link>
                </div>
            </div>
        </section>
    );
}

function FAQ({ faqs }: { faqs: AdmissionCourse["faqs"] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/5 rounded shadow-sm inline-block">Course FAQ</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41] mt-2">Frequently Asked Questions</h2>
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
                                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
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

function CTASection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#042d1a] py-14 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">Ready to Apply for {course.shortName}?</h2>
                <p className="text-white/80 mb-7 max-w-2xl mx-auto text-sm sm:text-base">
                    Submit your application for the 2026-27 batch. Merit-based admission, no NEET required.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    <a
                        href={siteConfig.admissionFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-3.5 bg-white text-[#0b6d41] rounded-full font-bold shadow-lg hover:bg-[#ffde59] hover:text-[#042d1a] transition-all inline-flex items-center justify-center gap-2 text-sm"
                    >
                        Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href={`tel:${siteConfig.phone}`}
                        className="px-7 py-3.5 border-2 border-white/40 rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm"
                    >
                        <Phone className="w-4 h-4" /> {siteConfig.phone}
                    </a>
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="px-7 py-3.5 border-2 border-white/40 rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm"
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

function WhyChooseSection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#0b6d41]/5 to-[#fbfbee]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">Why This Course at JKKN</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41] mt-2">Why Choose {course.shortName} at JKKN?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {course.whyChoose.map((wc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#0b6d41]/10 text-[#0b6d41] flex items-center justify-center mb-3">
                                <Star className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-[#0b6d41] mb-2 leading-tight">{wc.title}</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">{wc.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SyllabusSection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">4-Year Learning Framework</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41] mt-2">Learning Pathway & Learning Framework Overview</h2>
                    <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">Year-by-year breakdown of topics covered — 3 years academic + 1 year mandatory clinical internship.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {course.syllabus.map((yr, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-[#fbfbee] rounded-2xl p-5 border-t-4 border-[#0b6d41] shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-full bg-[#0b6d41] text-white flex items-center justify-center text-xs font-black">
                                    {i + 1}
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-[#0b6d41]">{yr.year}</div>
                                    <div className="text-sm font-black text-gray-800 leading-tight">{yr.title}</div>
                                </div>
                            </div>
                            <ul className="space-y-1.5">
                                {yr.topics.map((t, j) => (
                                    <li key={j} className="flex gap-1.5 text-xs text-gray-700">
                                        <ChevronRight className="w-3 h-3 text-[#0b6d41] shrink-0 mt-0.5" />
                                        <span>{t}</span>
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

function SkillsSection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-10 bg-[#fbfbee]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-8">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">What You'll Learn</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41] mt-2">Skills You'll Master</h2>
                    <p className="text-sm text-gray-600 mt-2">Hands-on technical and clinical skills you'll gain by the end of the program.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {course.skills.map((s, i) => (
                            <span key={i} className="text-xs font-semibold text-[#0b6d41] bg-[#0b6d41]/8 border border-[#0b6d41]/15 px-3 py-2 rounded-full inline-flex items-center gap-1.5">
                                <Zap className="w-3 h-3" /> {s}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function EquipmentSection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">Hands-On Exposure</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41] mt-2">Equipment & Technology You'll Train On</h2>
                    <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">Real medical equipment used at JKKN's 500+ bed teaching hospital — the same machines you'll operate as a working professional.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {course.equipment.map((eq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03 }}
                            className="bg-[#fbfbee] rounded-xl p-4 border border-gray-100 flex items-start gap-2.5"
                        >
                            <div className="w-8 h-8 rounded-lg bg-[#0b6d41]/10 text-[#0b6d41] flex items-center justify-center shrink-0">
                                <Wrench className="w-4 h-4" />
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">{eq}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RecruitersByRegionSection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">Where You'll Work</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41] mt-2">Top Recruiters by Region</h2>
                    <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">Hospitals and organisations that actively hire {course.shortName} graduates — categorised by region.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    {course.recruitersByRegion.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="bg-[#fbfbee] rounded-2xl p-5 border-l-4 border-[#0b6d41] shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Globe className="w-5 h-5 text-[#0b6d41]" />
                                <h3 className="text-base font-bold text-[#0b6d41]">{r.region}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {r.hospitals.map((h, j) => (
                                    <span key={j} className="text-xs font-medium text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-full">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HigherStudiesSection({ course }: { course: AdmissionCourse }) {
    return (
        <section className="py-12 md:py-16 bg-[#fbfbee]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">What's Next</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41] mt-2">Higher Studies & Specialisation Pathways</h2>
                    <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">After BSc {course.shortName}, here are the pathways to specialise further or pursue international careers.</p>
                </div>
                <div className="space-y-4">
                    {course.higherStudies.map((hs, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-4"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[#0b6d41] text-white flex items-center justify-center shrink-0 shadow-sm">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-[#0b6d41] mb-1">{hs.name}</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">{hs.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function OtherCoursesSection({ otherCourses }: { otherCourses: AdmissionCourse[] }) {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0b6d41] mb-2">Explore Other AHS Programs</h2>
                <p className="text-sm text-gray-600 mb-6">Compare with the other 8 BSc Allied Health Sciences admission pages at JKKN.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {otherCourses.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/admissions/${c.slug}`}
                            className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0b6d41]/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="w-9 h-9 rounded-lg bg-[#0b6d41]/10 text-[#0b6d41] flex items-center justify-center group-hover:bg-[#0b6d41] group-hover:text-white transition-colors">
                                    {iconMap[c.iconKey]}
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0b6d41] group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm font-bold text-gray-800 group-hover:text-[#0b6d41] leading-tight">{c.shortName}</p>
                            <p className="text-xs text-gray-500 mt-1">{c.mqFee.replace(' / year', '/yr')} · {c.seats}</p>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link href="/admissions" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b6d41] hover:underline">
                        ← Back to Admission Page
                    </Link>
                </div>
            </div>
        </section>
    );
}
