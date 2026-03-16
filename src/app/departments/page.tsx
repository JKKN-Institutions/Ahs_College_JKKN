"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const departments = [
  {
    name: "Accident & Emergency Care Technology",
    slug: "/accident-emergency-care",
    description:
      "Train as first responders and emergency care specialists with BLS, ACLS, and trauma care certifications.",
    icon: "🚑",
  },
  {
    name: "Cardiac Technology",
    slug: "/cardiac-technology",
    description:
      "Specialize in cardiovascular diagnostics, ECG, echocardiography, and cardiac catheterization procedures.",
    icon: "❤️",
  },
  {
    name: "Critical Care Technology",
    slug: "/critical-care-technology",
    description:
      "Master ICU management, ventilator support, hemodynamic monitoring, and advanced life support systems.",
    icon: "🏥",
  },
  {
    name: "Dialysis Technology",
    slug: "/dialysis-technology",
    description:
      "Learn hemodialysis, peritoneal dialysis, water treatment systems, and renal replacement therapy.",
    icon: "🔬",
  },
  {
    name: "Medical Record Science",
    slug: "/medical-record-science",
    description:
      "Excel in health information management, medical coding (ICD-10, CPT), and healthcare data analytics.",
    icon: "📋",
  },
  {
    name: "Operation Theatre & Anaesthesia Technology",
    slug: "/operation-theatre-anaesthesia",
    description:
      "Become skilled in surgical assistance, anaesthesia support, sterilization, and perioperative care.",
    icon: "⚕️",
  },
  {
    name: "Physician Assistant",
    slug: "/physician-assistant",
    description:
      "Work alongside physicians in clinical settings with expertise in patient assessment and treatment planning.",
    icon: "👨‍⚕️",
  },
  {
    name: "Radiography & Imaging Technology",
    slug: "/radiology-imaging-technology",
    description:
      "Operate X-ray, CT, MRI, and ultrasound equipment for diagnostic medical imaging.",
    icon: "📡",
  },
  {
    name: "Respiratory Therapy",
    slug: "/respiratory-therapy",
    description:
      "Specialize in pulmonary diagnostics, mechanical ventilation, and cardiopulmonary rehabilitation.",
    icon: "🫁",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const heroVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbee]">
      <Navbar />

      <main className="flex-grow pt-20 pb-20 md:pb-0">
        {/* ── Hero / Header ── */}
        <section className="bg-[#fbfbee] pt-10 pb-6 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-block text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-3 px-2 py-1 bg-[#0b6d41]/10 rounded">
                Allied Health Sciences
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-[#0b6d41] mb-3 leading-tight">
                Our Departments
              </h1>
              <p className="text-gray-700 text-base md:text-lg max-w-2xl leading-relaxed">
                JKKN College of Allied Health Sciences offers{" "}
                <span className="font-semibold text-[#0b6d41]">
                  9 specialized B.Sc programs
                </span>{" "}
                designed to build skilled healthcare professionals with hands-on
                clinical training, modern labs, and strong hospital tie-ups.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="mt-8 h-px bg-[#0b6d41]/10" />
          </div>
        </section>

        {/* ── Department Cards Grid ── */}
        <section className="px-4 py-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {departments.map((dept) => (
                <motion.div key={dept.slug} variants={cardVariants}>
                  <Link
                    href={dept.slug}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Card top accent bar */}
                    <div className="h-1.5 w-full bg-[#0b6d41] group-hover:bg-[#ffde59] transition-colors duration-300" />

                    <div className="flex flex-col flex-1 p-6">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-[#0b6d41]/8 flex items-center justify-center mb-4 text-3xl select-none group-hover:scale-110 transition-transform duration-300">
                        {dept.icon}
                      </div>

                      {/* Course label */}
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#0b6d41]/60 mb-1">
                        B.Sc Program
                      </span>

                      {/* Department name */}
                      <h2 className="text-[1.05rem] font-black text-[#0b6d41] leading-snug mb-3 group-hover:text-[#085231] transition-colors">
                        B.Sc {dept.name}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {dept.description}
                      </p>

                      {/* Learn More */}
                      <div className="mt-5 flex items-center gap-1.5 text-[#0b6d41] font-bold text-sm group-hover:gap-2.5 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="px-4 pb-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0b6d41] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            >
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black mb-1">
                  Ready to Start Your Healthcare Career?
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Apply for admissions 2025–26 — limited seats available.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center shrink-0">
                <a
                  href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#ffde59] text-[#085231] rounded-full font-black text-sm shadow-md hover:bg-yellow-300 transition-colors whitespace-nowrap"
                >
                  Apply Now →
                </a>
                <a
                  href="tel:+919345855001"
                  className="px-6 py-3 border-2 border-white text-white rounded-full font-bold text-sm hover:bg-white hover:text-[#0b6d41] transition-colors whitespace-nowrap"
                >
                  Contact Admissions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
