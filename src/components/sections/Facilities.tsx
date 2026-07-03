"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FlaskConical, Microscope, Heart, Activity, Eye, Droplet, BookOpen, Home, Bus } from 'lucide-react';

const facilities = [
    {
        title: "Clinical Biochemistry Lab",
        description: "10+ fully automated analyzers for blood chemistry, enzymes, and metabolic panels. Equipped with semi-auto analyzers, spectrophotometers, and electrolyte analyzers matching hospital-grade diagnostic standards.",
        icon: <FlaskConical className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]",
        href: "/lab"
    },
    {
        title: "Microbiology & Pathology Lab",
        description: "Advanced culture facilities, microscopy stations, and histopathology with digital imaging workstations. Includes laminar air flow cabinets, incubators, and automated staining systems for comprehensive diagnostic training.",
        icon: <Microscope className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]",
        href: "/lab"
    },
    {
        title: "Digital Learning Commons",
        description: "10,000+ medical books, e-journals, and online databases with 24/7 access. Subscriptions to PubMed, Elsevier, and national medical archives ensure Learners stay current with the latest research and clinical guidelines.",
        icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]",
        href: "/library"
    },
    {
        title: "Hostel & Amenities",
        description: "200+ rooms across separate men's and women's hostels with attached bathrooms. Includes mess with vegetarian and non-vegetarian options, Wi-Fi, gymnasium, recreation areas, and 24/7 CCTV security within the JKKN campus.",
        icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]",
        href: "/hostel"
    },
    {
        title: "Transportation",
        description: "Fleet of college buses covering 15+ routes across Namakkal, Salem, Erode, Tiruppur, and surrounding towns. Door-step pickup ensures safe and convenient daily commute for day scholars.",
        icon: <Bus className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]",
        href: "/transport"
    },
    {
        title: "Career Guidance & Placement Cell",
        description: "Dedicated placement cell connecting Learners with 100+ recruiting partners. Services include mock interviews, resume workshops, soft skills training, and industry networking events to ensure career readiness.",
        icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]",
        href: "/#careers"
    }
];

export function Facilities() {
    return (
        <section id="facilities" className="py-12 sm:py-16 md:py-24 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-6 sm:mb-8 md:mb-16">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">INFRASTRUCTURE</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                        World-Class Allied Health Sciences Facilities
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
                        Learn with the same equipment you'll use in your professional career at leading hospitals and diagnostic centers.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {facilities.map((facility, index) => (
                        <Link key={index} href={facility.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 h-full"
                            >
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${facility.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4`}>
                                    {facility.icon}
                                </div>
                                <h3 className="text-base sm:text-lg font-black text-[#0b6d41] mb-2 leading-tight">
                                    {facility.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {facility.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
