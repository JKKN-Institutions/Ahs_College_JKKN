"use client";

import React, { useState } from 'react';
import { HOME_FAQS } from '@/lib/home-faqs';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-12 sm:py-16 md:py-24 bg-[#fbfbee] overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">FAQs</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
                        Find answers to common questions about Allied Health Sciences programs and admissions.
                    </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {HOME_FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 group"
                            >
                                <span className={`text-sm sm:text-base font-bold transition-colors ${activeIndex === index ? 'text-[#0b6d41]' : 'text-gray-900'} leading-tight`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1.5 sm:p-2 rounded-full transition-all shrink-0 ${activeIndex === index ? 'bg-[#0b6d41] text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                            </button>

                            <div className={`faq-answer px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-gray-600 text-sm leading-relaxed ${activeIndex === index ? "" : "hidden"}`}>
                                            {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
