"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function BankPostOffice() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="mb-12 md:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0b6d41] tracking-tight">
                            Bank and Post Office at JKKN College Campus
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl space-y-8">
                        {/* Introduction Paragraph */}
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                            Our bank offers a comprehensive range of financial services to fulfill your banking needs. Our courteous and knowledgeable staff can assist you with opening new accounts, making deposits or withdrawals, and providing financial guidance. With various products and services, such as personal loans, mortgages, and credit cards, our bank caters to all your financial requirements.
                        </p>

                        {/* Banking Facilities Section */}
                        <div className="space-y-4">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase">
                                BANKING FACILITIES:
                            </h2>
                            <ul className="space-y-3 pl-5">
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    Our campus has a fully-functional branch of a popular bank, so you can handle all your banking needs right here on campus.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    The bank offers a range of services, including account opening, cash deposits and withdrawals, fund transfers, and more.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    You can also avail of special offers and discounts exclusively for JKKN students and staff.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    With our banking facility, you can save time and effort, and focus on your studies and work without worrying about your financial transactions.
                                </li>
                            </ul>
                        </div>

                        {/* Postal Services Section */}
                        <div className="space-y-4">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase">
                                POSTAL SERVICES:
                            </h2>
                            <ul className="space-y-3 pl-5">
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    We have a dedicated post office on campus, so you can easily send and receive mail and packages without having to leave the campus.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    Our post office offers a range of services, including domestic and international mail, registered post, speed post, parcel delivery, and more.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    You can also avail of additional services such as post office savings schemes, money orders, and postal life insurance.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    With our postal services, you can stay connected with your loved ones and business associates, and manage your important documents and packages with ease.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0b6d41] mb-8">Frequently Asked Questions — Bank and Post Office</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Is there a bank inside the JKKN College campus?",
                                a: "Yes. JKKN College campus has a fully functional bank branch inside campus, allowing students and staff to manage all their banking needs conveniently."
                            },
                            {
                                q: "Which bank branch is available at JKKN campus?",
                                a: "JKKN campus has a branch of a popular nationalised bank offering services like account opening, deposits, withdrawals, and fund transfers for students and staff."
                            },
                            {
                                q: "Can students open bank accounts at the JKKN campus bank?",
                                a: "Yes. Students can open bank accounts directly at the JKKN campus branch. Special offers and discounts are available exclusively for JKKN students and staff."
                            },
                            {
                                q: "Is there a post office at JKKN College campus?",
                                a: "Yes. JKKN campus has a dedicated post office offering domestic and international mail, speed post, registered post, parcel delivery, and postal savings schemes."
                            },
                            {
                                q: "Are ATM facilities available at JKKN campus?",
                                a: "Yes. ATM facilities are available on the JKKN campus, giving students and staff easy access to cash and basic banking transactions at any time."
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
            </main>

            <Footer />
        </div>
    );
}
