"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Users, Lightbulb, Globe, Sparkles, Award, Layers, Database } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function Library() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Library' }
                    ]} />
                    {/* Header Section */}
                    <div className="text-center mb-12 sm:mb-14 md:mb-16 relative px-4">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 rounded-full shadow-sm mb-4 sm:mb-5 md:mb-6 border border-gray-100"
                        >
                            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0b6d41] fill-[#0b6d41]" />
                            <span className="text-[10px] sm:text-xs font-black tracking-widest text-[#0b6d41] uppercase">Academic Excellence</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0b6d41] mb-3 sm:mb-4 uppercase tracking-tight break-words"
                        >
                            Library at JKKN College of Allied Health Sciences
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 font-medium text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4 break-words"
                        >
                            A Living Laboratory of Thought - Fusing Foundational Doctrines with Emergent Discourses
                        </motion.p>
                    </div>

                    {/* Library Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
                        >
                            <Image
                                src="/library/library-1.png"
                                alt="Allied Health Science Library with wooden desks and study areas"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
                        >
                            <Image
                                src="/library/library-1.webp"
                                alt="Students studying with books in the library"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
                        >
                            <Image
                                src="/library/library-3.png"
                                alt="Student reading in the library"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </motion.div>
                    </div>

                    {/* Main Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-5 sm:p-6 md:p-12 lg:p-16 shadow-xl border border-white/60 relative overflow-hidden max-w-6xl mx-auto mb-16"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffde59]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0b6d41]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 space-y-8">
                            {/* Introduction */}
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify break-words">
                                    The Allied Health Science library is more than just a place for books—it's the heart of our academic community. We bridge the gap between classic healthcare principles and the latest industry breakthroughs. Our collection offers everything from essential textbooks and peer-reviewed research to digital tools designed to support every health science specialty.   Empowering the next generation of healthcare professionals. Our library combines foundational learning with the latest digital research tools to support your journey across all health science disciplines.
                                </p>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-4">Library Features and Resources</h2>

                            {/* Feature Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12">
                                <FeatureCard
                                    icon={<Layers className="w-8 h-8" />}
                                    title="The Architecture of Thought"
                                    description="Our academic landscape is topographically nuanced to host an array of learning environments. From sequestered alcoves for solitary rumination to dynamic hubs for cross-disciplinary dialogues, the spatial heterogeneity nurtures diverse cognitive needs."
                                />

                                <FeatureCard
                                    icon={<Globe className="w-8 h-8" />}
                                    title="Digitization—The Forward March"
                                    description="In heeding our Mission to enable exponential opportunities through bioconvergence, the library offers a salient arsenal of digital resources. Stay abreast of contemporary methodologies and healthcare paradigms through our online diaspora of e-journals, e-books, and multimedia vignettes."
                                />

                                <FeatureCard
                                    icon={<Users className="w-8 h-8" />}
                                    title="Sages Amidst Shelves"
                                    description="Our librarians serve not just as custodians of printed wisdom but as intellectual sommeliers. They curate literature, offer statistical tutelage, and assist in the arcane craft of scholarly citation, thereby ushering you through your academic voyage."
                                />

                                <FeatureCard
                                    icon={<Lightbulb className="w-8 h-8" />}
                                    title="Fora of Knowledge and Praxis"
                                    description="Webinars, workshops, and panel discussions on health science innovation and ethics embellish our pedagogical repertoire. These are cerebral conclaves that cultivate a culture of continuous learning and ethical ponderance, synchronous with our Values of Commitment to Excellence and Integrity."
                                />

                                <FeatureCard
                                    icon={<Sparkles className="w-8 h-8" />}
                                    title="A Commune of Inquisitive Minds"
                                    description="In alignment with our commitment to Teamwork, the library instigates community. Peer-to-peer learning modules, group debates, and case-study forums animate the space, transcending it from a repository to a living laboratory of thought."
                                />

                                <FeatureCard
                                    icon={<Database className="w-8 h-8" />}
                                    title="Reflection and The Tapestry of Health Science"
                                    description="Pause and introspect in designated serenity zones, or undertake a temporal journey through the archives that document the historical underpinnings of health sciences. Herein lies a salutation to the rich tapestry that composes the field."
                                />
                            </div>

                            {/* Membership Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-gray-200"
                            >
                                <div className="bg-gradient-to-br from-[#0b6d41]/5 to-[#ffde59]/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10">
                                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
                                        <div className="flex-shrink-0 bg-white p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl shadow-md">
                                            <Award className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#0b6d41]" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl sm:text-xl md:text-2xl font-black text-[#0b6d41] mb-3 sm:mb-3.5 md:mb-4 break-words">Membership as Covenant</h3>
                                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify mb-3 sm:mb-3.5 md:mb-4 break-words">
                                                To indulge in an unbridled quest for health science acumen, consider library membership. This bond unfurls an array of exclusive provisions: special access rights, preferential borrowing conditions, and front-row seats in our scholastic activities.
                                            </p>
                                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify font-medium break-words">
                                                So, at the Allied Health Science Library, the invitation is not just to read but to immerse, to question, and to synthesize. Come, be part of a dynamic knowledge ecology that celebrates the endless curiosity and pioneering spirit that define the realm of Allied Health Sciences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-6 text-center">Library at a Glance</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
                        <StatsCard
                            icon={<BookOpen className="w-8 h-8 text-[#0b6d41]" />}
                            value="5,000+"
                            label="Books & Journals"
                        />
                        <StatsCard
                            icon={<Globe className="w-8 h-8 text-[#0b6d41]" />}
                            value="Digital"
                            label="E-Resources"
                        />
                        <StatsCard
                            icon={<Users className="w-8 h-8 text-[#0b6d41]" />}
                            value="Expert"
                            label="Librarians"
                        />
                        <StatsCard
                            icon={<Sparkles className="w-8 h-8 text-[#0b6d41]" />}
                            value="Modern"
                            label="Infrastructure"
                        />
                    </div>
                    {/* FAQ Section */}
                    <div className="max-w-6xl mx-auto mt-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-8">Frequently Asked Questions About JKKN Library</h2>
                        <div className="space-y-4">
                            {[
                                { q: "What are the library timings at JKKN College?", a: "The JKKN library is open from 8 AM to 8 PM on weekdays and 9 AM to 5 PM on Saturdays for all enrolled students." },
                                { q: "Does the JKKN library have digital resources and e-journals?", a: "Yes, the library provides access to e-journals, e-books, online databases, and multimedia resources for all health science disciplines." },
                                { q: "How many books are available in the JKKN library?", a: "The JKKN library has over 5000 books, journals, and reference materials covering all allied health science specializations." },
                                { q: "Can students borrow books from the JKKN library?", a: "Yes, enrolled students can borrow up to three books at a time with a valid library membership card for two weeks." },
                                { q: "Is there a separate reading room in the JKKN library?", a: "Yes, the library has dedicated reading rooms, quiet study zones, and group discussion areas for different learning needs." },
                            ].map((faq, i) => (
                                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                                    <h3 className="m-0 text-base">
                                        <div className="w-full flex justify-between items-center p-6 text-left">
                                            <span className="font-bold text-[#0b6d41]">{faq.q}</span>
                                        </div>
                                    </h3>
                                    <div className="faq-answer px-6 pb-6 text-gray-700 text-sm leading-relaxed">
                                        {faq.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Internal Cross-Links */}
                <section className="py-12 px-4 md:px-8 lg:px-16 bg-white/50">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-semibold text-[#0b6d41] mb-6">Explore Our Courses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <a href="/cardiac-technology" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc Cardiac Technology</a>
                      <a href="/dialysis-technology" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc Dialysis Technology</a>
                      <a href="/radiology-imaging-technology" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc Radiology &amp; Imaging</a>
                      <a href="/respiratory-therapy" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc Respiratory Therapy</a>
                      <a href="/operation-theatre-anaesthesia" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc OT &amp; Anaesthesia</a>
                      <a href="/physician-assistant" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc Physician Assistant</a>
                      <a href="/critical-care-technology" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc Critical Care Technology</a>
                      <a href="/medical-record-science" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc Medical Record Science</a>
                      <a href="/accident-emergency-care" className="px-4 py-3 bg-white rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-[#0b6d41] hover:text-[#0b6d41] transition-colors">BSc Accident &amp; Emergency Care</a>
                    </div>
                  </div>
                </section>
                {/* Explore Our Programs */}
                <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f0f7f2]">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#002309] mb-6">Explore Our Programs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        { name: 'B.Sc Cardiac Technology', href: '/cardiac-technology' },
                        { name: 'B.Sc Radiology & Imaging', href: '/radiology-imaging-technology' },
                        { name: 'B.Sc Dialysis Technology', href: '/dialysis-technology' },
                        { name: 'B.Sc OT & Anaesthesia', href: '/operation-theatre-anaesthesia' },
                        { name: 'B.Sc Respiratory Therapy', href: '/respiratory-therapy' },
                        { name: 'B.Sc Physician Assistant', href: '/physician-assistant' },
                        { name: 'B.Sc Critical Care Technology', href: '/critical-care-technology' },
                        { name: 'B.Sc Medical Record Science', href: '/medical-record-science' },
                        { name: 'B.Sc Emergency Care', href: '/accident-emergency-care' },
                      ].map((p) => (
                        <a key={p.href} href={p.href} className="flex items-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#e8f5ec] transition-colors text-sm font-medium text-[#0b6d41] shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-[#0b6d41] flex-shrink-0" />
                          {p.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 transition-all hover:shadow-xl group"
        >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 bg-[#0b6d41]/10 p-2.5 sm:p-3 rounded-xl group-hover:bg-[#0b6d41] transition-colors">
                    <div className="text-[#0b6d41] group-hover:text-white transition-colors [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                        {icon}
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-black text-[#0b6d41] mb-2 sm:mb-3 leading-tight break-words">{title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify break-words">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}

function StatsCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 flex flex-col items-center transition-all hover:shadow-xl"
        >
            <div className="bg-[#f0fdf4] p-3 md:p-4 rounded-xl md:rounded-2xl mb-4 md:mb-6 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">
                {icon}
            </div>
            <div className="text-2xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1.5 md:mb-2 text-center break-words">{value}</div>
            <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest text-center break-words px-2">{label}</div>
        </motion.div>
    );
}
