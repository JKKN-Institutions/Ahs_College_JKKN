"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';

export default function ClassRoom() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ahs.jkkn.ac.in/" },
        { name: "Facilities", url: "https://ahs.jkkn.ac.in/#facilities" },
        { name: "Learning Studios", url: "https://ahs.jkkn.ac.in/classroom" }
    ]);

    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Navbar />

            <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Learning Studios' }
                    ]} />
                    {/* Page Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6d41] mb-12 tracking-tight">
                        Learning Studio Facilities at JKKN College of Allied Health Sciences
                    </h1>

                    {/* Content Section */}
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-4">Smart Learning Studios for Allied Health Sciences</h2>
                        <p className="text-base sm:text-lg text-justify">
                            At JKKN Educational Institutions, we prioritize the importance of exceptional learning studio facilities for an excellent learning experience. Our learning studios are specifically designed to create an engaging and comfortable environment where learners can immerse themselves in their studies and develop their skills.
                        </p>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                            <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/classroom/class_room-1.webp"
                                    alt="Learning Studio at JKKN College"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                />
                            </div>
                            <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/classroom/class_room-2.webp"
                                    alt="Learning Studio at JKKN College"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                />
                            </div>
                            <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/classroom/class_room-3.webp"
                                    alt="Learning Studio at JKKN College"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-4">Technology-Enabled Learning Environment</h2>
                        <p className="text-base sm:text-lg text-justify">
                            Our facilities are equipped with state-of-the-art technology, including high-speed internet, multimedia projectors, and interactive whiteboards, to provide learners with easy access to a vast amount of information. We also offer comfortable seating arrangements to ensure that learners can focus on their studies without any discomfort or distractions.
                        </p>

                        <p className="text-base sm:text-lg text-justify">
                            Apart from functionality, we believe that the aesthetics of the learning environment are vital in inspiring creativity and encouraging positive attitudes towards learning.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-4">Diverse Learning Spaces</h2>
                        <p className="text-base sm:text-lg text-justify">
                            We understand that each learner has unique learning needs, and that's why we offer various learning studio settings to cater to diverse learning styles. Our learning studios range from traditional lecture-style setups to collaborative workspaces, providing learners with a comfortable environment that suits their learning preferences.
                        </p>

                        <p className="text-base sm:text-lg text-justify">
                            Furthermore, we maintain and clean our learning studios regularly to ensure that learners can concentrate on their studies without any distractions. We are committed to providing a safe and hygienic learning environment that promotes academic success and personal growth.
                        </p>

                        <p className="text-base sm:text-lg text-justify">
                            In summary, at JKKN Educational Institutions, we are dedicated to providing our learners with exceptional learning studio facilities that inspire learning and growth. We believe that a great learning environment is crucial for academic success, and our learning studios are designed to provide just that.
                        </p>
                    </div>
                </div>
                {/* FAQ Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-8">Frequently Asked Questions About JKKN Learning Studios</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Are learning studios at JKKN College air-conditioned?", a: "Yes, all learning studios at JKKN College of Allied Health Sciences are air-conditioned with modern ventilation systems for comfortable learning." },
                            { q: "Do JKKN learning studios have smart boards and projectors?", a: "Yes, every learning studio is equipped with smart boards, multimedia projectors, and interactive whiteboards for technology-enhanced teaching." },
                            { q: "How many learners does each learning studio accommodate?", a: "JKKN learning studios accommodate 30 to 60 learners depending on the course, with ergonomic seating and adequate spacing." },
                            { q: "Is high-speed internet available in JKKN learning studios?", a: "Yes, all learning studios have high-speed WiFi connectivity enabling learners to access online resources and digital learning materials." },
                            { q: "Are there different types of learning studios at JKKN?", a: "Yes, JKKN offers learning auditoriums, seminar rooms, collaborative workspaces, and learning labs to support diverse learning styles." },
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
                </section>
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
