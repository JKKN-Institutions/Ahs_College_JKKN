"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function AmbulanceService() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Ambulance Service' }
                    ]} />
                    {/* Header Section */}
                    <div className="mb-12 md:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0b6d41] tracking-tight">
                            Ambulance Service at JKKN College Campus
                        </h1>
                    </div>

                    {/* Ambulance Image */}
                    <div className="mb-12 md:mb-16">
                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/ambulance.webp"
                                alt="JKKN Ambulance Service"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl space-y-6">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                            JKKN Educational Institutions, we are dedicated to delivering excellent education to our students, staff, and community. In line with our pledge to the community, we take pride in presenting our exceptional ambulance services, available round-the-clock for emergency responses and medical transportation.
                        </p>

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                            Our ambulance services are managed by expert emergency medical technicians who are certified and experienced in handling diverse medical emergencies. To ensure our patients receive the highest quality of care, our ambulances are equipped with advanced medical equipment and supplies.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-8">Frequently Asked Questions — Ambulance Service</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Does JKKN College have an ambulance service on campus?",
                                a: "Yes. JKKN College campus has a dedicated ambulance service managed by certified emergency medical technicians, ready to respond to all medical emergencies."
                            },
                            {
                                q: "Is the JKKN ambulance service available 24 hours?",
                                a: "Yes. The JKKN ambulance service operates around the clock, providing 24-hour emergency medical transportation and response for students, staff, and the campus community."
                            },
                            {
                                q: "What medical emergencies does the JKKN ambulance handle?",
                                a: "The JKKN ambulance handles all medical emergencies including accidents, sudden illness, cardiac events, and any situation requiring urgent medical transportation to a hospital."
                            },
                            {
                                q: "Is there a first aid centre at JKKN College?",
                                a: "Yes. JKKN College has a first aid centre on campus that provides immediate medical attention before patients are transported via ambulance if required."
                            },
                            {
                                q: "How quickly can the JKKN ambulance respond to emergencies?",
                                a: "The JKKN ambulance is stationed on campus for rapid response. Being on-site, it can reach any point on campus within minutes of an emergency call."
                            }
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
