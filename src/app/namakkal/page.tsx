"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/site-config";
import { MapPin, ChevronDown, ChevronUp, GraduationCap, Phone, TrendingUp, Building2, GitBranch, Target, Globe, Bus, Activity, Microscope, HeartPulse, Droplet, ShieldCheck, Wind, Stethoscope, Heart, FileText, Ambulance, Map, Train, Plane, Home, BookOpen, Trophy, Wifi, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NamakkalPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-[#0b6d41] focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <Breadcrumb items={[{ label: "Namakkal" }]} />
      <main id="main-content">
        <TopBanner />
        <HeroSection />
        <AffiliationBar />
        <DistanceCard />
        <WhyChooseSection />
        <ProgrammesSection />
        <PlacementHighlights />
        <CompetitiveAdvantageSection />
        <HowToReachSection />
        <FacilitiesSection />
        <CampusGallerySection />
        <FAQSection />
        <ExploreCitiesSection />
      </main>
      <Footer />
    </>
  );
}

/* ──────────────────────────────────────────
   TOP BANNER
────────────────────────────────────────── */
function TopBanner() {
  return (
    <div className="bg-[#006837] text-white py-2 px-4 flex items-center justify-center gap-4 text-sm flex-wrap lg:-mt-20">
      <span className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
        Admissions Open 2026-27
      </span>
      <a
        href="tel:+919345855001"
        className="px-4 py-1 border border-white/50 rounded-full text-white hover:bg-white/10 transition-colors text-xs font-medium"
      >
        Call Now
      </a>
    </div>
  );
}

/* ──────────────────────────────────────────
   HERO SECTION
────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#006837] via-[#006837] to-[#002309] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
          <GraduationCap className="w-4 h-4" />
          <span>NAAC Approved • Admissions Open</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
          Allied Health Science College in{" "}
          <span className="text-[#7cb983]">Namakkal</span>
        </h1>

        {/* Description */}
        <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Namakkal is home — and so are we. JKKN College of Allied Health
          Sciences offers top-tier allied health sciences programmes with
          92%+ placement support — located right in your home district.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10">
          {[
            { value: "92%+", label: "PLACEMENTS" },
            { value: "12", label: "LPA HIGHEST" },
            { value: "10km", label: "FROM NAMAKKAL" },
            { value: "9", label: "PROGRAMMES" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 rounded-xl px-4 py-4 text-center"
            >
              <div className="text-xl sm:text-2xl font-black">{stat.value}</div>
              <div className="text-xs text-white/70 font-medium tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#7cb983] text-white rounded-full font-bold text-sm hover:bg-[#6ba872] transition-colors"
          >
            Apply Now — 2026-27
          </a>
          <a
            href="tel:+919345855001"
            className="px-8 py-4 bg-[#006837] border-2 border-white/40 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   AFFILIATION BAR
────────────────────────────────────────── */
function AffiliationBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-3 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 flex-wrap text-sm">
        <span className="flex items-center gap-2 text-[#006837] font-semibold">
          <span className="w-5 h-5 rounded-full bg-[#e8f5ea] flex items-center justify-center text-xs">✓</span>
          NAAC
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600 text-center">
          Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   DISTANCE CARD
────────────────────────────────────────── */
function DistanceCard() {
  return (
    <section className="bg-[#FBFBEE] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-4 p-6">
          <div className="flex-1 text-center sm:text-left">
            <span className="text-5xl font-black text-[#006837]">10</span>
            <span className="text-xl font-bold text-[#006837] ml-1">km</span>
          </div>
          <div className="flex-[3] text-center sm:text-left">
            <div className="font-bold text-gray-800 text-base">
              From Namakkal to JKKN AHS
            </div>
            <div className="text-gray-500 text-sm mt-1">
              15-20 minutes via NH-544 (Salem-Coimbatore Highway)
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/w7FbkNfiTYJ2NN317"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#006837] text-white rounded-xl px-5 py-4 text-sm font-semibold flex flex-col items-center gap-1 hover:bg-[#006837] transition-colors whitespace-nowrap"
          >
            <MapPin className="w-5 h-5" />
            View on Map
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   WHY CHOOSE SECTION
────────────────────────────────────────── */
function WhyChooseSection() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Growing Demand",
      desc: "Huge demand for allied health professionals in India and abroad",
    },
    {
      icon: Building2,
      title: "Clinical Training",
      desc: "Hands-on clinical training at attached hospitals",
    },
    {
      icon: GitBranch,
      title: "Diverse Careers",
      desc: "Diverse career paths: hospitals, diagnostic centres, rehabilitation centres",
    },
    {
      icon: Target,
      title: "Accessible Admission",
      desc: "Less competitive admission than MBBS/BDS — accessible for more students",
    },
    {
      icon: Globe,
      title: "International Scope",
      desc: "International career opportunities, especially in physiotherapy and MLT",
    },
    {
      icon: Bus,
      title: "Easy Commute",
      desc: "Just 5-10 km from Namakkal. Daily commute or comfortable hostel — your choice.",
    },
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
          Why Namakkal Students Choose JKKN AHS
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-3 text-sm sm:text-base leading-relaxed">
          Being in the home district of JKKN, Namakkal students enjoy the closest
          proximity to the campus. There is no need for hostel accommodation — daily
          commute is easy and convenient. Students can stay at home and still access
          world-class education.
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-[#FBFBEE] rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="mb-3 flex justify-center"><Icon className="w-7 h-7 text-[#006837]" /></div>
                <div className="font-bold text-gray-900 text-sm mb-2">{r.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{r.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   PROGRAMMES SECTION
────────────────────────────────────────── */
function ProgrammesSection() {
  const programmes = [
    {
      icon: HeartPulse,
      name: "B.Sc. Cardiac Technology",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "30 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/cardiac-technology",
    },
    {
      icon: Activity,
      name: "B.Sc. Radiography & Imaging Technology",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "40 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/radiology-imaging-technology",
    },
    {
      icon: Droplet,
      name: "B.Sc. Dialysis Technology",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "40 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/dialysis-technology",
    },
    {
      icon: ShieldCheck,
      name: "B.Sc. Operation Theatre & Anaesthesia Technology",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "40 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/operation-theatre-anaesthesia",
    },
    {
      icon: Wind,
      name: "B.Sc. Respiratory Therapy",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "30 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/respiratory-therapy",
    },
    {
      icon: Stethoscope,
      name: "B.Sc. Physician Assistant",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "40 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/physician-assistant",
    },
    {
      icon: Heart,
      name: "B.Sc. Critical Care Technology",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "30 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/critical-care-technology",
    },
    {
      icon: FileText,
      name: "B.Sc. Medical Record Science",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "30 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/medical-record-science",
    },
    {
      icon: Ambulance,
      name: "B.Sc. Accident & Emergency Care Technology",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "30 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/accident-emergency-care",
    },
  ];

  return (
    <section className="bg-[#FBFBEE] py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Programmes Offered
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          9 B.Sc. Allied Health Sciences programmes — choose the right career path
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programmes.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-5 text-left flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-8 h-8 text-[#006837]" />
                <div className="font-bold text-gray-900 text-sm leading-snug">
                  {p.name}
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="font-medium text-gray-700">{p.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level</span>
                    <span className="font-medium text-gray-700">{p.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Intake</span>
                    <span className="font-medium text-gray-700">{p.intake}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-auto">{p.eligibility}</p>
                <a
                  href={p.link}
                  className="block text-center text-xs font-semibold text-[#006837] bg-[#e8f5ea] rounded-lg py-2.5 hover:bg-[#006837] hover:text-white transition-colors mt-1"
                >
                  View Course Details
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   PLACEMENT HIGHLIGHTS
────────────────────────────────────────── */
function PlacementHighlights() {
  const stats = [
    { value: "92%+", label: "PLACEMENT RATE" },
    { value: "12", label: "LPA HIGHEST" },
    { value: "3.2–4.5", label: "LPA AVERAGE" },
    { value: "60+", label: "TOP RECRUITERS" },
  ];

  const companies = [
    "Apollo Hospitals",
    "Fortis Healthcare",
    "Manipal Hospitals",
    "SRL Diagnostics",
    "Thyrocare",
    "Dr. Lal PathLabs",
    "Sun Pharma",
    "NHS UK",
    "Cleveland Clinic Abu Dhabi",
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Placement Highlights
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          92%+ placement rate — our students work at India&apos;s and the world&apos;s top hospitals
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-gray-200 rounded-2xl py-6 px-4"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#006837]">
                {s.value}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wider mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-4">
          Companies That Hire From Us
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {companies.map((c) => (
            <span
              key={c}
              className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700"
            >
              {c}
            </span>
          ))}
        </div>
        <Link href="/placements" className="inline-flex items-center gap-2 mt-6 text-[#006837] font-bold hover:underline text-sm">
            View full placement details <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   HOW TO REACH SECTION
────────────────────────────────────────── */
function HowToReachSection() {
  const routes = [
    {
      icon: Map,
      label: "ROUTE",
      desc: "NH-544 (Salem-Coimbatore Highway)",
    },
    {
      icon: Bus,
      label: "BY BUS",
      desc: "Frequent local buses and auto-rickshaws available from Namakkal town to Komarapalayam",
    },
    {
      icon: Train,
      label: "NEAREST RAILWAY STATION",
      desc: "Salem Junction (~40 km from campus)",
    },
    {
      icon: Plane,
      label: "NEAREST AIRPORT",
      desc: "Coimbatore International Airport (Code: CJB) (~110 km)",
    },
    {
      icon: Home,
      label: "CAMPUS ADDRESS",
      desc: "JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183",
    },
  ];

  return (
    <section className="bg-[#FBFBEE] py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          How to Reach from Namakkal
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Multiple transport options to get to campus easily
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        {/* Header card */}
        <div className="bg-[#006837] text-white rounded-t-2xl px-6 py-4 flex items-center gap-3 text-left">
          <MapPin className="w-5 h-5" />
          <div>
            <div className="font-bold text-base">
              Namakkal → JKKN AHS Campus
            </div>
            <div className="text-white/70 text-xs mt-0.5">
              5-10 km • 15-20 minutes
            </div>
          </div>
        </div>

        {/* Route items */}
        <div className="bg-white rounded-b-2xl shadow-sm divide-y divide-gray-100">
          {routes.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.label} className="flex items-start gap-4 px-6 py-4 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#006837]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">
                    {r.label}
                  </div>
                  <div className="text-sm text-gray-700">{r.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   FACILITIES SECTION
────────────────────────────────────────── */
function FacilitiesSection() {
  const facilities = [
    {
      icon: Microscope,
      title: "Modern Labs",
      desc: "State-of-the-art laboratories and smart classrooms",
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      desc: "Well-stocked library with digital access and journals",
    },
    {
      icon: Home,
      title: "Hostel",
      desc: "Separate hostels for boys and girls with mess facility",
    },
    {
      icon: Bus,
      title: "Transport",
      desc: "College buses connecting to Namakkal and surrounding areas",
    },
    {
      icon: Trophy,
      title: "Sports",
      desc: "Playground, indoor games, gym, and annual sports events",
    },
    {
      icon: Wifi,
      title: "WiFi Campus",
      desc: "High-speed internet across the entire campus",
    },
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Campus &amp; Facilities
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Everything you need for a world-class education experience
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="border border-gray-200 rounded-2xl p-5 text-left flex gap-4 items-start hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e8f5ea] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#006837]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{f.title}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   CAMPUS GALLERY SECTION
────────────────────────────────────────── */
function CampusGallerySection() {
  const images = [
    { src: "/images/institution.avif", alt: "JKKN College of Allied Health Sciences campus building in Namakkal" },
    { src: "/images/boys-hostel.png", alt: "Boys hostel at JKKN AHS — allied health science college in Namakkal" },
    { src: "/images/girls-hostel.png", alt: "Girls hostel at JKKN AHS — allied health science college in Namakkal" },
    { src: "/allied health science main image6.png", alt: "Campus life at JKKN College of Allied Health Sciences in Namakkal" },
    { src: "/allied health science main image7.png", alt: "Students at JKKN Allied Health Sciences campus in Namakkal" },
    { src: "/allied health science main image8.png", alt: "JKKN AHS facilities and campus infrastructure in Namakkal" },
  ];

  return (
    <section className="bg-[#FBFBEE] py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Campus Gallery
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          A glimpse of our world-class campus and facilities
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   COMPETITIVE ADVANTAGE SECTION
────────────────────────────────────────── */
function CompetitiveAdvantageSection() {
  const advantages = [
    { title: "Closest AHS Campus to Namakkal — Just 5–10 km", desc: "Located in Komarapalayam, JKKN is the nearest allied health sciences college to Namakkal city. Daily commute is easy, and hostel is available for those who prefer staying on campus." },
    { title: "9 BSc Programmes — Widest Selection in the District", desc: "From Cardiac Technology to Emergency Care, JKKN offers the most diverse range of allied health programmes in Namakkal district." },
    { title: "85%+ Placement with International Opportunities", desc: "Our graduates secure positions in top hospitals across India, Gulf countries, UK (NHS), and Australia. 60+ recruiting partners ensure strong career outcomes." },
    { title: "74+ Years of Institutional Legacy", desc: "Founded in 1952, JKKN Institutions brings over seven decades of educational excellence. A trusted name for Namakkal families." },
    { title: "Complete Campus Ecosystem", desc: "500+ bed teaching hospital, separate hostels for boys and girls, transport services, library, labs, food court, and Wi-Fi — everything under one roof." },
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
          Why Namakkal Students Choose JKKN AHS
        </h2>
        <p className="voice-answer text-gray-500 text-sm mb-3 text-center">
          Namakkal&apos;s closest and most trusted allied health sciences campus
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="grid gap-4">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="snippet-answer flex items-start gap-4 bg-[#f0f7f2] rounded-2xl p-5"
            >
              <CheckCircle className="w-6 h-6 text-[#0b6d41] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   FAQ SECTION
────────────────────────────────────────── */
function FAQSection() {
  const faqs = [
    {
      q: "What is the best allied health sciences college in Namakkal?",
      a: "JKKN College of Allied Health Sciences, located just 5-10 km from Namakkal on NH-544, is widely regarded as one of the top allied health sciences colleges in Namakkal district. Approved by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
    },
    {
      q: "How far is JKKN AHS from Namakkal?",
      a: "JKKN AHS is approximately 5-10 km from Namakkal city centre, which takes about 15-20 minutes by road via NH-544 (Salem-Coimbatore Highway). Regular bus services are available from Namakkal.",
    },
    {
      q: "What is Allied Health Sciences?",
      a: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences, you can study physiotherapy, medical lab technology, radiology, cardiac technology, and more.",
    },
    {
      q: "Is BPT a good career option?",
      a: "Yes, BPT (Bachelor of Physiotherapy) is an excellent career choice. Physiotherapists are in high demand in hospitals, sports clinics, rehabilitation centres, and private practice. Graduates can also pursue international careers in Gulf countries, UK, and Australia.",
    },
    {
      q: "How is AHS different from nursing?",
      a: "While nursing focuses on patient care and bedside support, Allied Health Sciences covers specialised diagnostic and therapeutic roles like physiotherapy, lab testing, radiology imaging, and cardiac monitoring. Both are valuable healthcare careers, but AHS offers more specialisation options.",
    },
    {
      q: "Does JKKN AHS provide hostel for Namakkal students?",
      a: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Students from Namakkal can also opt for daily commute as the campus is just 15-20 minutes away. College transport services are available.",
    },
    {
      q: "How can I apply for admission at JKKN AHS?",
      a: "You can apply online through the official website at https://ahs.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
    },
    {
      q: "What are the fees for BSc allied health science in Tamil Nadu?",
      a: "BSc Allied Health Science fees in Tamil Nadu typically range from ₹50,000 to ₹2,00,000 per year depending on the college and course. At JKKN College of Allied Health Sciences, fees are competitively priced with scholarship options available for meritorious students. Contact the admission office at +91 9345855001 for the latest fee structure.",
    },
    {
      q: "What is the salary after BSc allied health science?",
      a: "BSc Allied Health Science graduates can expect starting salaries of ₹2.5–4.5 LPA in India, with experienced professionals earning ₹6–12 LPA. International opportunities in Gulf countries, UK, and Australia offer ₹8–25 LPA. JKKN AHS graduates benefit from an 85%+ placement rate with 60+ recruiting partners.",
    },
    {
      q: "How many allied health science colleges are there in Namakkal?",
      a: "Namakkal district has several allied health science colleges. JKKN College of Allied Health Sciences, located just 5–10 km from Namakkal city centre, is the closest and offers 9 BSc programmes with NAAC approval and an 85%+ placement rate — making it the preferred choice for Namakkal students.",
    },
    {
      q: "What are the eligibility requirements for allied health science courses?",
      a: "To pursue BSc Allied Health Sciences at JKKN AHS, candidates must have passed 12th standard (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with a minimum aggregate of 50% (40% for reserved categories). Admission is based on merit and counselling. JKKN is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Allied Health Sciences College in Namakkal — Your Questions Answered
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="text-left flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-colors ${
                open === i ? "border-[#7cb983]" : "border-gray-200"
              } bg-white`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">
                  {faq.q}
                </span>
                {open === i ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="faq-answer snippet-answer px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   EXPLORE MORE CITIES SECTION
────────────────────────────────────────── */
function ExploreCitiesSection() {
  const cities = [
    { name: "Salem", distance: "40-50 km", href: "/salem" },
    { name: "Erode", distance: "30-40 km", href: "/erode" },
    { name: "Coimbatore", distance: "100-110 km", href: "/coimbatore" },
    { name: "Tiruppur", distance: "80-90 km", href: "/tiruppur" },
  ];

  return (
    <section className="bg-[#FBFBEE] py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Explore More Cities
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Find the best allied health sciences college near your city
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {cities.map((c) => (
            <a
              key={c.name}
              href={c.href}
              className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <MapPin className="w-5 h-5 text-[#006837] flex-shrink-0" />
              <span className="font-bold text-gray-900 text-sm flex-1 text-left">
                {c.name}
              </span>
              <span className="text-gray-400 text-xs">{c.distance}</span>
            </a>
          ))}
        </div>

        <a
          href="/"
          onClick={() => sessionStorage.setItem("scrollToSection", "programs")}
          className="inline-block px-10 py-4 bg-[#7cb983] text-white font-bold rounded-full text-sm hover:bg-[#6ba872] transition-colors"
        >
          View All Programmes
        </a>
      </div>
    </section>
  );
}
