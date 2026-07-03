"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Phone, Mail, Building2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const scholarships = [
  {
    id: 1,
    title: "Trust Scholarship",
    subtitle: "Merit Based",
    category: "BC / MBC / DNC / BCM",
    quota: "MQ / GQ",
    amount: "₹5,000 – ₹10,000",
    period: "per year",
    highlights: [
      "For BC / MBC / DNC / BCM category learners",
      "Applicable under both MQ & GQ",
      "All Allied Health Sciences branches eligible",
      "Awarded based on academic merit",
    ],
    borderColor: "border-[#0b6d41]",
    badgeColor: "bg-[#0b6d41]",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Naan Mudhalvan Scholarship",
    subtitle: "Government Scheme",
    category: "All Community",
    quota: "Boys & Girls",
    amount: "₹1,000",
    period: "per month",
    highlights: [
      "Open to all community learners",
      "Must have studied in Tamil Medium",
      "Govt or Govt Aided School (Class 6–12)",
      "Available for both Boys & Girls",
    ],
    borderColor: "border-[#ffde59]",
    badgeColor: "bg-[#ffde59]",
    icon: <Award className="w-6 h-6" />,
  },
];

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbee]">
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Scholarships 2026-27" },
            ]}
            className="py-1"
          />
        </div>

        {/* Hero */}
        <section className="bg-[#0b6d41] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                <Award className="w-4 h-4" />
                Learning Year 2026-27
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Scholarships
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
                Financial support available for BSc Allied Health Sciences learners at JKKN College of Allied Health Sciences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Scholarship Cards */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {scholarships.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 ${item.borderColor} overflow-hidden`}
                >
                  {/* Card header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0b6d41]/10 rounded-xl flex items-center justify-center text-[#0b6d41] shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-[#0b6d41] leading-snug">
                          {item.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="px-6 py-4 bg-[#0b6d41]/3 border-b border-gray-100 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#0b6d41]">{item.amount}</span>
                    <span className="text-sm text-gray-500">{item.period}</span>
                  </div>

                  {/* Details */}
                  <div className="px-6 py-5">
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="text-xs font-medium bg-[#0b6d41]/8 text-[#0b6d41] px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {item.quota}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0b6d41] shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <p className="text-center text-xs text-gray-500 mt-8">
              Scholarship details are as per the institution&apos;s scheme for 2026-27. Contact the admissions office to verify current eligibility criteria.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-[#fbfbee] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41] mb-2">Have Questions About Scholarships?</h2>
            <p className="text-[#1a1a1a] text-sm mb-6">Contact our admissions office to check your eligibility and apply.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#ffde59] text-[#1a1a1a] font-semibold px-6 py-3 rounded-xl hover:bg-[#f5d200] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 bg-[#0b6d41]/10 text-[#0b6d41] font-semibold px-6 py-3 rounded-xl hover:bg-[#0b6d41]/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-[#0b6d41] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#085231] transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
