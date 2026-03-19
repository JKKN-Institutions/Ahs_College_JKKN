"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function WiFiPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Title */}
                    <div className="mb-8 sm:mb-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b6d41] tracking-tight">
                            WiFi and Internet Facilities at JKKN College
                        </h1>
                    </div>

                    {/* Hero Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/wifi-1.png"
                                alt="Campus WiFi - Laptop on campus"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/wifi-2.png"
                                alt="Campus WiFi - Campus corridor"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/wifi-3.png"
                                alt="Campus WiFi - Campus grounds"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl space-y-6 sm:space-y-8">
                        {/* Introduction */}
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                            At JKKN Institutions, we recognize the indispensable role of robust internet connectivity in modern education and lifestyle. That's why we've gone beyond merely offering WiFi access; we provide a seamless, high-speed, and secure internet experience throughout our sprawling campus.
                        </p>

                        {/* High-Speed Access */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">High-Speed Access:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Enjoy blazing-fast internet speeds that allow for effortless streaming of educational videos, quick downloads of academic resources, and smooth video conferencing.
                            </p>
                        </div>

                        {/* All-encompassing Coverage */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">All-encompassing Coverage:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Our strategically placed routers ensure WiFi coverage in lecture halls, libraries, labs, common areas, and even outdoor spaces.
                            </p>
                        </div>

                        {/* Secure and Reliable */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Secure and Reliable:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Multi-layered security protocols protect your data and privacy, making our network not just fast but also secure.
                            </p>
                        </div>

                        {/* Resourceful Connectivity */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Resourceful Connectivity:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Our WiFi network serves as a backbone for academic resources, enabling quick access to course materials, research databases, and collaboration tools.
                            </p>
                        </div>

                        {/* Beyond Academics */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Beyond Academics:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Whether you're streaming your favorite playlist or gaming during breaks, our network supports your recreational needs without compromising speed and performance.
                            </p>
                        </div>

                        {/* Data Savings */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Data Savings:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Utilize our campus-wide WiFi to save on your personal data consumption.
                            </p>
                        </div>

                        {/* Eco-Friendly */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Eco-Friendly:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Our WiFi network is part of our sustainable tech infrastructure, reducing the need for paper and facilitating digital forms of communication and data storage.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify mt-3">
                                At JKKN Institutions, our commitment to offering a holistic digital experience that aligns perfectly with our educational vision and lifestyle aspirations. It's not just WiFi; it's your gateway to academic success and fulfilling campus life.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-8">Frequently Asked Questions — WiFi and Internet</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Is free WiFi available on the JKKN campus?",
                                a: "Yes. JKKN campus offers free WiFi access to all students and staff across classrooms, labs, libraries, common areas, and outdoor spaces."
                            },
                            {
                                q: "What is the internet speed at JKKN College campus?",
                                a: "JKKN campus provides high-speed internet that supports video streaming, large file downloads, video conferencing, and simultaneous access by multiple users."
                            },
                            {
                                q: "Can students access WiFi in hostel rooms at JKKN?",
                                a: "Yes. WiFi connectivity extends to the JKKN hostel, allowing students to access the internet from their rooms for both academic and personal use."
                            },
                            {
                                q: "Is WiFi available in classrooms and labs at JKKN?",
                                a: "Yes. WiFi is available in all classrooms, labs, and lecture halls at JKKN, supporting digital learning tools and online academic resources."
                            },
                            {
                                q: "How do students connect to the JKKN campus WiFi network?",
                                a: "Students connect to the JKKN campus WiFi using credentials provided during admission. The network is secured with multi-layered security protocols."
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
            </main>

            <Footer />
        </div>
    );
}
