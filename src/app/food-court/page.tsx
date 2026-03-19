"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Leaf, ShieldCheck, IndianRupee, Heart } from 'lucide-react';
import Image from 'next/image';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function FoodCourt() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Food Court' }
                    ]} />
                </div>
                {/* Hero Title Section */}
                <section className="relative py-20 bg-[#0b6d41] overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/food court/allied health science food court.png"
                            alt="Food Court Background"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-[#ffde59] text-[#0b6d41] text-xs font-bold uppercase tracking-wider mb-4">
                                Campus Life
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                                Food Court at JKKN College of Allied Health Sciences
                            </h1>
                            <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto font-medium">
                                A vibrant social hub fueling success with healthy, diverse, and sustainable dining options.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content Section using Glassmorphism */}
                <section className="py-20 relative">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-[#0b6d41]/5 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-[#ffde59]/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12">

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-2/3 space-y-8"
                            >
                                <div className="backdrop-blur-md bg-white/60 border border-white/80 p-8 md:p-10 rounded-[2rem] shadow-sm text-gray-700 leading-relaxed text-lg">
                                    <p className="mb-6">
                                        We understand that <span className="text-[#0b6d41] font-bold">success isn't limited to academic achievements</span>, but also encompasses the quality of life on campus. That’s why we’re proud to offer a cutting-edge cafeteria that not only satisfies your taste buds, but also keeps you energized throughout the day.
                                    </p>
                                    <p className="mb-6">
                                        Our cafeteria is more than just a place to grab a quick meal. It’s a <span className="bg-[#ffde59]/30 px-1 rounded text-[#0b6d41] font-semibold">social hub</span> where students can gather, relax, catch up with friends, and rejuvenate before resuming their studies. With cozy seating and a welcoming atmosphere, it’s the ideal spot to take a break and replenish your energy.
                                    </p>
                                    <p className="mb-6">
                                        In terms of food options, you won’t be disappointed with our diverse selection. Our menu caters to a variety of dietary needs and preferences, ranging from fresh salads and sandwiches to hearty hot meals and snacks. We’re confident that you’ll find something scrumptious and fulfilling, regardless of your tastes.
                                    </p>
                                    <p className="mb-6">
                                        However, it’s not solely about the cuisine. We’re also dedicated to <span className="text-[#0b6d41] font-bold">sustainability and eco-friendliness</span>. We use environmentally friendly packaging and collaborate with local suppliers to obtain the freshest and most sustainable ingredients.
                                    </p>
                                    <p>
                                        At JKKN Educational Institutions, we believe that education entails more than just academics. It’s about cultivating a thriving community, and our cafeteria is a crucial component of that aspiration. Come visit us, grab a bite to eat, and witness for yourself why our cafeteria is the talk of the campus.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Features Sidebar */}
                            <div className="lg:w-1/3 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="sticky top-24"
                                >
                                    <div className="bg-[#0b6d41] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden mb-6">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffde59]/20 rounded-full -mr-10 -mt-10 blur-xl"></div>
                                        <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                                            <Utensils className="w-6 h-6 text-[#ffde59]" /> Highlights
                                        </h3>
                                        <ul className="space-y-4">
                                            {[
                                                { text: "Diverse menu", icon: <Utensils /> },
                                                { text: "Quality ingredients", icon: <Leaf /> },
                                                { text: "Healthy options", icon: <Heart /> },
                                                { text: "Affordable prices", icon: <IndianRupee /> },
                                                { text: "Hygiene and safety", icon: <ShieldCheck /> }
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                        {React.cloneElement(item.icon, { size: 14, className: "text-[#ffde59]" })}
                                                    </div>
                                                    <span className="font-medium text-white/90">{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Quote/Highlight Card */}
                                    <div className="backdrop-blur-md bg-white/40 border border-white/60 p-8 rounded-[2rem] shadow-sm">
                                        <Coffee className="w-10 h-10 text-[#0b6d41] mb-4" />
                                        <h4 className="text-[#0b6d41] font-bold text-xl mb-2">The Talk of Campus</h4>
                                        <p className="text-sm text-gray-600">
                                            "A place where conversations start and friendships grow over delicious food."
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Image Gallery Section */}
                <section className="py-20 bg-gradient-to-b from-[#fbfbee] to-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-black text-[#0b6d41] uppercase tracking-tight mb-4">
                                Our Food Court
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Take a virtual tour of our modern, hygienic, and vibrant food court facility
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { src: '/food court/allied health science food court.png', alt: 'Food Court Main Area', title: 'Spacious Dining Area' },
                                { src: '/food court/allied health science food court1.png', alt: 'Food Court Seating', title: 'Comfortable Seating' },
                                { src: '/food court/allied health science food court22.png', alt: 'Food Court Ambiance', title: 'Modern Ambiance' }
                            ].map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Title Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-white font-bold text-xl">{image.title}</h3>
                                        </div>
                                    </div>

                                    {/* Glass effect border on hover */}
                                    <div className="absolute inset-0 rounded-[2rem] border-2 border-white/0 group-hover:border-white/50 transition-all duration-500 pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 backdrop-blur-md bg-white/60 border border-white/80 p-8 md:p-12 rounded-[2rem] shadow-lg text-center"
                        >
                            <div className="flex flex-wrap justify-center gap-8 items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#0b6d41] flex items-center justify-center">
                                        <Utensils className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500">Variety</p>
                                        <p className="text-lg font-bold text-[#0b6d41]">50+ Dishes</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#ffde59] flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-[#0b6d41]" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500">Quality</p>
                                        <p className="text-lg font-bold text-[#0b6d41]">Fresh Daily</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#0b6d41] flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500">Safety</p>
                                        <p className="text-lg font-bold text-[#0b6d41]">100% Hygienic</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-8">Frequently Asked Questions About JKKN Food Court</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Does JKKN College have a food court on campus?", a: "Yes, JKKN College of Allied Health Sciences has a modern food court on campus offering diverse, hygienic, and affordable meals daily." },
                            { q: "Is vegetarian food available at the JKKN food court?", a: "Yes, the JKKN food court serves a wide variety of fresh vegetarian meals, snacks, and beverages to cater to all dietary preferences." },
                            { q: "What are the food court timings at JKKN College?", a: "The JKKN food court operates throughout college hours, from morning to evening, serving breakfast, lunch, and evening snacks daily." },
                            { q: "Are meals included in the hostel fee at JKKN?", a: "Yes, hostel students receive three nutritious meals daily through the campus mess as part of their hostel accommodation package." },
                            { q: "Is the JKKN food court hygienic and clean?", a: "Yes, the JKKN food court maintains strict hygiene standards with regular inspections, fresh ingredients, and eco-friendly food-grade packaging." },
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
