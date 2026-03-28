"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, Microscope, Building2, Briefcase } from 'lucide-react';
import { BRAND_LEGACY } from '@/lib/constants';

const reasons = [
    {
        title: BRAND_LEGACY.FULL_TEXT,
        description: "Part of JKKN Educational Institutions with over 70 years of transforming lives through accessible, progressive education since 1954. Our campus on NH-544, Komarapalayam, spans a green environment near Erode and Salem — giving Learners a focused academic setting backed by decades of institutional credibility.",
        icon: <Trophy className="w-10 h-10" />,
    },
    {
        title: "Advanced Laboratories",
        description: "10+ specialized labs including Anatomy, Physiology, Biochemistry, Microbiology, Pathology, Hematology, Cardiac Catheterization Simulator, and Diagnostic Imaging Center with CT and X-ray simulators. Equipment matches hospital-grade standards so Learners transition seamlessly into clinical roles.",
        icon: <Microscope className="w-10 h-10" />,
    },
    {
        title: "Hospital Partnerships",
        description: "Clinical rotations at partner hospitals including Senthil Multi-Speciality, Lotus, Erode Medical Center, and Olirum Erode Foundation. Learners complete 2,000+ hours of hands-on patient care at a 500+ bed multi-specialty teaching hospital, gaining real-world exposure from Year 1.",
        icon: <Building2 className="w-10 h-10" />,
    },
    {
        title: "95% Placement Rate",
        description: "100+ recruiters including Apollo, MIOT, Fortis, Kauvery, SRL, Thyrocare, and Dr. Lal PathLabs. Salary packages range from ₹3.2 to ₹7.5 LPA with international opportunities in the UK (NHS), UAE, Saudi Arabia, and Australia through our dedicated placement cell.",
        icon: <Briefcase className="w-10 h-10" />,
    },
    {
        title: "Clinical Training Excellence",
        description: "Allied Health Sciences professionals bridge doctors and patients by providing vital diagnostic and therapeutic care, rapid emergency response, and smart use of medical technology. Trained across 50+ partner hospitals, our graduates are equipped for ICU, OT, radiology, cardiac labs, and emergency departments.",
        icon: <Briefcase className="w-10 h-10" />,
    }
];

export function WhyChoose() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#fbfbee] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">WHY JKKN AHS</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6 px-4">
                        Why Choose JKKN College<br className="hidden sm:block" />of Allied Health Sciences?
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
                        Experience world-class healthcare education backed by {BRAND_LEGACY.YEARS} of JKKN&apos;s commitment to excellence. Explore our <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">advanced laboratories</Link> and <Link href="/#careers" className="text-[#0b6d41] font-semibold hover:underline">career opportunities</Link>.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-gray-900 shadow-md">
                                {reason.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                                {reason.description}
                                {reason.title === "Advanced Laboratories" && (
                                    <> <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">Explore our labs</Link>.</>
                                )}
                                {reason.title === "95% Placement Rate" && (
                                    <> <Link href="/placements" className="text-[#0b6d41] font-semibold hover:underline">View placement details</Link>.</>
                                )}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
