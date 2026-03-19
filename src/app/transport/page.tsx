"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function Transport() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Transport' }
                    ]} />
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0b6d41] mb-8">
                            Transport Facilities at JKKN College of Allied Health Sciences
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="bg-transparent">
                        {/* Introduction */}
                        <div className="mb-8">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Transportation is a crucial component of any educational institution, providing students and faculty members with a convenient means of getting to campus and enhancing the overall learning experience. JKKN Educational Institutions recognize the significance of transportation and have made significant efforts to improve their transport facilities. Below are some of the exceptional features of the transport service at JKKN Educational Institutions.
                            </p>
                        </div>

                        {/* Transport Image Gallery */}
                        <div className="mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="/transport/transport-1.webp"
                                        alt="JKKN Transport Fleet - School Buses"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="/transport/transport-2.webp"
                                        alt="JKKN College Buses"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Well-Maintained Fleet */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Well-Maintained Fleet:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The transport service at JKKN Educational Institutions boasts a well-maintained fleet of buses that undergo regular servicing and cleaning to ensure passenger safety and comfort. The buses are equipped with modern amenities like air conditioning, comfortable seating, and GPS tracking systems.
                            </p>
                        </div>

                        {/* Highly Trained Drivers */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Highly Trained Drivers:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The bus drivers at JKKN Educational Institutions are highly trained and experienced individuals who possess a good understanding of the local routes and traffic conditions. Their proficiency enables them to offer safe and efficient transportation services. Additionally, they receive regular training sessions to upgrade their skills.
                            </p>
                        </div>

                        {/* Affordable Charges */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Affordable Charges:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                JKKN Educational Institutions prioritize affordability and are dedicated to offering cost-effective transportation services. The transportation fees are highly affordable for everyone.
                            </p>
                        </div>

                        {/* Safe and Secure */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Safe and Secure:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The safety and security of passengers are paramount at JKKN Educational Institutions. To ensure this, CCTV cameras are installed in the buses, and female attendants are available to assist female passengers. The transportation service operates under a strict set of guidelines to ensure that the passengers are always secure.
                            </p>
                        </div>

                        {/* Timely Services */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Timely Services:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The transport service at JKKN Educational Institutions operates on a strict schedule, ensuring that the buses arrive and depart from the campus promptly. This allows students and faculty members to plan their day accordingly, without worrying about delays or missed buses.
                            </p>
                        </div>

                        {/* Accessibility */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Accessibility:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The transport service at JKKN Educational Institutions is available to all students, regardless of their physical abilities. The buses come equipped with wheelchair ramps and other accessibility features to facilitate easy movement for students with disabilities.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className="mb-6">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                In summary, JKKN Educational Institutions' transportation service provides safe, reliable, and affordable transportation to all its students and faculty members. The institution has taken significant strides to ensure that the transportation service is accessible, secure, and comfortable for everyone.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-8">Frequently Asked Questions About JKKN Transport</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Does JKKN College provide bus transport for students?", a: "Yes, JKKN College of Allied Health Sciences provides a well-maintained bus fleet for students and faculty from nearby towns and cities." },
                            { q: "What areas does the JKKN college bus service cover?", a: "JKKN buses cover Salem, Erode, Namakkal, Tiruchengode, Komarapalayam, and surrounding areas, ensuring broad accessibility for students." },
                            { q: "What is the transport fee at JKKN College?", a: "Transport fees vary by distance and route. Contact JKKN admissions at 9345855001 for current bus fee details and route schedules." },
                            { q: "Are there separate buses for boys and girls at JKKN?", a: "JKKN transport is mixed but ensures safety with CCTV cameras on buses and female attendants available to assist girl students." },
                            { q: "What is the bus timing for JKKN College?", a: "JKKN buses operate on a strict schedule aligned with college hours. Contact the transport office at 9345855001 for exact timings." },
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
