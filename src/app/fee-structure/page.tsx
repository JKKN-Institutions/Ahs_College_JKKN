"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import { IndianRupee, Phone, Mail, ChevronDown, ChevronUp, Info } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const programs = [
  {
    name: "B.Sc Cardiac Technology",
    href: "/cardiac-technology",
    duration: "3+1 Years",
    seats: { gq: 3, mq: 7 },
    annualFee: 170000,
  },
  {
    name: "B.Sc Dialysis Technology",
    href: "/dialysis-technology",
    duration: "3+1 Years",
    seats: { gq: 2, mq: 5 },
    annualFee: 110000,
  },
  {
    name: "B.Sc Radiology & Imaging Technology",
    href: "/radiology-imaging-technology",
    duration: "3+1 Years",
    seats: { gq: 2, mq: 5 },
    annualFee: 130000,
  },
  {
    name: "B.Sc Operation Theatre & Anaesthesia",
    href: "/operation-theatre-anaesthesia",
    duration: "3+1 Years",
    seats: { gq: 5, mq: 10 },
    annualFee: 170000,
  },
  {
    name: "B.Sc Respiratory Therapy",
    href: "/respiratory-therapy",
    duration: "3+1 Years",
    seats: { gq: 5, mq: 10 },
    annualFee: 110000,
  },
  {
    name: "B.Sc Physician Assistant",
    href: "/physician-assistant",
    duration: "3+1 Years",
    seats: { gq: 5, mq: 10 },
    annualFee: 130000,
  },
  {
    name: "B.Sc Critical Care Technology",
    href: "/critical-care-technology",
    duration: "3+1 Years",
    seats: { gq: 5, mq: 10 },
    annualFee: 110000,
  },
  {
    name: "B.Sc Medical Record Science",
    href: "/medical-record-science",
    duration: "3+1 Years",
    seats: { gq: 7, mq: 15 },
    annualFee: 60000,
  },
  {
    name: "B.Sc Accident & Emergency Care",
    href: "/accident-emergency-care",
    duration: "3+1 Years",
    seats: { gq: 5, mq: 10 },
    annualFee: 110000,
  },
];

const YEARS = ["Year 1", "Year 2", "Year 3", "Year 4\n(Internship)"];

function formatFee(amount: number) {
  return "₹" + amount.toLocaleString("en-IN");
}

export default function FeeStructurePage() {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbee]">
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Fee Structure 2026-27" },
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
                <IndianRupee className="w-4 h-4" />
                Academic Year 2026-27
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Fee Structure
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
                Transparent, year-wise fee details for all 9 BSc Allied Health Sciences programs at JKKN College of Allied Health Sciences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Note bar */}
        <div className="bg-[#ffde59]/20 border-b border-[#ffde59]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-start gap-2 text-sm text-[#1a1a1a]">
            <Info className="w-4 h-4 text-[#0b6d41] mt-0.5 shrink-0" />
            <span>
              <strong>Government Quota (GQ)</strong> fees are regulated by the Tamil Nadu Government and are subject to revision each academic year.{" "}
              <strong>Management Quota (MQ)</strong> fees shown are per annum and remain the same across all 4 years of the program.
            </span>
          </div>
        </div>

        {/* Desktop Table */}
        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Desktop view */}
            <div className="hidden md:block">
              {programs.map((prog, idx) => (
                <motion.div
                  key={prog.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Program header */}
                  <div className="flex items-center justify-between px-6 py-4 bg-[#0b6d41]/5 border-b border-gray-100">
                    <div>
                      <Link href={prog.href} className="text-lg font-semibold text-[#0b6d41] hover:underline">
                        {prog.name}
                      </Link>
                      <span className="ml-3 text-sm text-gray-500">Duration: {prog.duration}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Total Seats: <span className="font-semibold text-[#1a1a1a]">{prog.seats.gq + prog.seats.mq}</span>
                      <span className="mx-1 text-gray-300">|</span>
                      GQ: <span className="font-semibold text-[#1a1a1a]">{prog.seats.gq}</span>
                      <span className="mx-1 text-gray-300">|</span>
                      MQ: <span className="font-semibold text-[#1a1a1a]">{prog.seats.mq}</span>
                    </div>
                  </div>

                  {/* Fee table */}
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
                        <th className="px-6 py-3 text-left font-medium w-40">Quota</th>
                        {YEARS.map((yr) => (
                          <th key={yr} className="px-4 py-3 text-center font-medium whitespace-pre-line">{yr}</th>
                        ))}
                        <th className="px-4 py-3 text-center font-medium">Total (4 Yrs)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-700">Government Quota</td>
                        {YEARS.map((yr) => (
                          <td key={yr} className="px-4 py-4 text-center text-gray-500 italic text-xs">
                            As Per Govt Norms
                          </td>
                        ))}
                        <td className="px-4 py-4 text-center text-gray-500 italic text-xs">
                          As Per Govt Norms
                        </td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-[#0b6d41]/3">
                        <td className="px-6 py-4 font-medium text-gray-700">Management Quota</td>
                        {YEARS.map((yr) => (
                          <td key={yr} className="px-4 py-4 text-center font-semibold text-[#0b6d41]">
                            {formatFee(prog.annualFee)}
                          </td>
                        ))}
                        <td className="px-4 py-4 text-center font-bold text-[#0b6d41]">
                          {formatFee(prog.annualFee * 4)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </motion.div>
              ))}
            </div>

            {/* Mobile accordion view */}
            <div className="md:hidden space-y-4">
              {programs.map((prog, idx) => {
                const isOpen = expandedProgram === idx;
                return (
                  <motion.div
                    key={prog.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedProgram(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between px-4 py-4 text-left"
                    >
                      <div>
                        <p className="font-semibold text-[#0b6d41] text-sm leading-snug">{prog.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{prog.duration} · {prog.seats.gq + prog.seats.mq} Seats</p>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 px-4 pb-4">
                        {/* Seats */}
                        <div className="flex gap-4 py-3 text-xs text-gray-500 border-b border-gray-100">
                          <span>GQ Seats: <strong className="text-[#1a1a1a]">{prog.seats.gq}</strong></span>
                          <span>MQ Seats: <strong className="text-[#1a1a1a]">{prog.seats.mq}</strong></span>
                        </div>

                        {/* GQ row */}
                        <div className="py-3 border-b border-gray-100">
                          <p className="text-xs font-semibold text-gray-600 mb-2">Government Quota</p>
                          <div className="grid grid-cols-2 gap-2">
                            {["Year 1", "Year 2", "Year 3", "Year 4 (Internship)"].map((yr) => (
                              <div key={yr} className="bg-gray-50 rounded-lg px-3 py-2">
                                <p className="text-xs text-gray-400">{yr}</p>
                                <p className="text-xs italic text-gray-500 mt-0.5">As Per Govt Norms</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* MQ row */}
                        <div className="py-3">
                          <p className="text-xs font-semibold text-gray-600 mb-2">Management Quota</p>
                          <div className="grid grid-cols-2 gap-2">
                            {["Year 1", "Year 2", "Year 3", "Year 4 (Internship)"].map((yr) => (
                              <div key={yr} className="bg-[#0b6d41]/5 rounded-lg px-3 py-2">
                                <p className="text-xs text-gray-400">{yr}</p>
                                <p className="text-sm font-semibold text-[#0b6d41] mt-0.5">{formatFee(prog.annualFee)}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 bg-[#0b6d41]/10 rounded-lg px-3 py-2 flex justify-between items-center">
                            <span className="text-xs font-medium text-gray-600">Total (4 Years)</span>
                            <span className="text-sm font-bold text-[#0b6d41]">{formatFee(prog.annualFee * 4)}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-10 bg-[#fbfbee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#0b6d41] mb-2">Have Questions About Fees?</h2>
            <p className="text-[#1a1a1a] text-sm mb-6">Contact our admissions office for detailed fee payment schedules and installment options.</p>
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
