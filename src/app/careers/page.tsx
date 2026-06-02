"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pb-12">
                {/* Header Banner */}
                <section className="bg-[#0b6d41] py-12 px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Careers at JKKN AHS
                        </h1>
                        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
                            Join our team and help shape the next generation of allied health professionals.
                        </p>
                    </div>
                </section>

                {/* Job Portal Embed */}
                <section className="py-10 px-4">
                    <div className="max-w-5xl mx-auto">
                        <iframe
                            src="https://jobs.cvviz.com/jkkn_institutions"
                            title="JKKN Institutions Job Portal"
                            className="w-full rounded-xl border border-gray-200 shadow-md"
                            style={{ height: '80vh', minHeight: '600px' }}
                            loading="lazy"
                            allow="fullscreen"
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
