import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CityFAQAccordion } from "@/components/ui/CityFAQAccordion";
import { siteConfig } from "@/lib/site-config";
import { MapPin, GraduationCap, Phone, TrendingUp, Building2, GitBranch, Target, Globe, Bus, Activity, Microscope, HeartPulse, Droplet, ShieldCheck, Wind, Stethoscope, Heart, FileText, Ambulance, Map, Train, Plane, Home, BookOpen, Trophy, Wifi, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AhsEnquiryForm from "@/components/lead/AhsEnquiryForm";

export default function CoimbatorePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-[#0b6d41] focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <Breadcrumb items={[{ label: "Coimbatore" }]} />
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
        <SnippetBaitSection />
        <CityFAQAccordion cityName="Coimbatore" faqs={[
          {
            q: "What is the best allied health sciences college in Coimbatore?",
            a: "JKKN College of Allied Health Sciences is ~112 km from Coimbatore on NH-544, in Komarapalayam, Namakkal district. Its 9 B.Sc programmes are affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, with 82 university-sanctioned seats and placement support.",
          },
          {
            q: "How far is JKKN AHS from Coimbatore?",
            a: "JKKN AHS is approximately ~112 km from Coimbatore city centre, which takes about 2-2.5 hours by road via NH-544 (Coimbatore-Salem Highway) — direct route. Regular bus services are available from Coimbatore.",
          },
          {
            q: "What is Allied Health Sciences?",
            a: "Allied Health Sciences are healthcare professions that support doctors and nurses in diagnosing, treating and monitoring patients. At JKKN College of Allied Health Sciences you can study nine B.Sc courses, including Cardiac Technology, Medical Radiology and Imaging, Dialysis Therapy, Anaesthesia and Operation Theatre, Respiratory Technology and Physician Associates.",
          },
          {
            q: "How is AHS different from nursing?",
            a: "While nursing focuses on patient care and bedside support, Allied Health Sciences covers specialised diagnostic and therapeutic roles like cardiac monitoring, radiology imaging, dialysis and operation theatre support. Both are valuable healthcare careers, but AHS offers more specialisation options.",
          },
          {
            q: "Does JKKN AHS provide hostel for Coimbatore learners?",
            a: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Learners from Coimbatore can also opt for daily commute as the campus is just 2-2.5 hours away. College transport services are available.",
          },
          {
            q: "How can I apply for admission at JKKN AHS?",
            a: "You can apply online through the official website at https://ahs.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
          },
          {
            q: "What are the fees for BSc allied health science in Tamil Nadu?",
            a: "Management-quota tuition at JKKN College of Allied Health Sciences for 2026-27 is ₹1,70,000 a year for Cardiac Technology and Anaesthesia & OT Technology, ₹1,30,000 for Medical Radiology & Imaging and Physician Associates, ₹1,10,000 for Dialysis Therapy, Respiratory Technology, Critical Care and Emergency Medical Technologist, and ₹60,000 for Health Information Management. Government-quota fees follow government norms.",
          },
          {
            q: "What is the salary after BSc allied health science?",
            a: "JKKN College of Allied Health Sciences publishes no audited salary figure for its graduates, so none is stated here. Pay differs by specialisation, hospital and country, and roles abroad generally pay more than the same role in India. A dedicated placement cell supports graduates with recruitment drives, interview preparation and guidance for roles abroad; it can give current, verifiable figures on request.",
          },
          {
            q: "How many allied health science colleges are there in Coimbatore?",
            a: "Coimbatore has 14+ allied health science colleges. JKKN College of Allied Health Sciences, located ~112 km from Coimbatore on NH-544, offers 9 BSc programmes with 82 university-sanctioned seats, management-quota fees of ₹60,000 to ₹1,70,000 a year, and placement support.",
          },
          {
            q: "What are the eligibility requirements for allied health science courses?",
            a: "Under the Tamil Nadu 2026-27 allied health prospectus, you need a Class 12 pass with English and Physics, Chemistry and Biology (or Botany and Zoology), and must be 17 by 31 December 2026; NEET is not required. For eight of JKKN's nine courses the prospectus sets no minimum percentage. Health Information Management needs 50% (40% for BC, BCM, MBC, DNC, SC, SCA and ST candidates) and also accepts Commerce or Arts; Anaesthesia and Operation Theatre Technology also accepts Mathematics.",
          },
          {
            q: "With so many colleges in Coimbatore, why should I choose JKKN AHS?",
            a: "JKKN AHS is affiliated to The Tamil Nadu Dr. M.G.R. Medical University and offers clinical training at partner hospitals and placement support, including guidance for roles abroad. The NH-544 location ensures easy weekend travel home. Coimbatore has 14+ allied health science colleges of its own.",
          },
          {
            q: "How does Coimbatore's medical hub benefit JKKN AHS graduates?",
            a: "Coimbatore is Tamil Nadu's second-largest medical hub with 40+ multi-specialty hospitals including KMCH, PSG Hospital, Ganga Hospital, and Sri Ramakrishna Hospital. JKKN AHS graduates benefit from this ecosystem through placement partnerships, clinical exposure visits, guest lectures from Coimbatore specialists, and a ready job market just 2 hours from campus.",
          },
          {
            q: "Does proximity to Coimbatore International Airport benefit JKKN AHS learners?",
            a: "Yes, Coimbatore International Airport (CJB), ~101 km from campus, is an advantage for international placements. The placement cell guides graduates who want to work abroad; the college publishes no audited international placement figures. The airport connection makes travel easier, with flights to major cities and Gulf destinations.",
          },
        ]} />
        <ExploreCitiesSection />
        {/* B-06 - enquiry form. MEASURED 2026-08-27: this page had ZERO <form> elements and the
            only conversion path was an outbound link to jkkn.ai. Over 90 days the four big city
            pages took 327 GSC clicks and produced 9 apply_click events - 2.70 percent of
            sessions against the site own 3.48 percent. Same component as the course pages
            (DEP-34); it posts to the CRM from the server because the endpoint sends no
            Access-Control-Allow-Origin header. No defaultProgrammeId on purpose - a city page
            is not one programme. */}
        <section className="bg-gradient-to-br from-[#0b6d41] to-[#12a15f] py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-white text-2xl md:text-3xl font-black text-center mb-2">
              Admissions 2026 &mdash; Get a Call Back
            </h2>
            <p className="text-white/80 text-center text-sm mb-8">
              Students from Coimbatore join JKKN College of Allied Health Sciences every year. Leave
              your details and our admission team will contact you within 24 hours.
            </p>
            <AhsEnquiryForm sourcePage="city-coimbatore" />
          </div>
        </section>
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
          <span>Dr. M.G.R. Medical University Affiliated • Admissions Open</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
          Allied Health Sciences Colleges in{" "}
          <span className="text-[#7cb983]">Coimbatore</span>
        </h1>

        {/* Description */}
        <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          JKKN College of Allied Health Sciences offers allied health sciences
          programmes with placement support — just 2 hours from Coimbatore.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10">
          {[
            { value: "~105km", label: "FROM COIMBATORE" },
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
            href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=ahs.jkkn.ac.in&utm_medium=organic&utm_campaign=coimbatore"
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
          Since 2019
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
            <span className="text-5xl font-black text-[#006837]">112</span>
            <span className="text-xl font-bold text-[#006837] ml-1">km</span>
          </div>
          <div className="flex-[3] text-center sm:text-left">
            <div className="font-bold text-gray-800 text-base">
              From Coimbatore to JKKN AHS
            </div>
            <div className="text-gray-500 text-sm mt-1">
              2-2.5 hours via NH-544 (Coimbatore-Salem Highway) — direct route
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
      desc: "Hands-on clinical training at partner hospitals",
    },
    {
      icon: GitBranch,
      title: "Diverse Careers",
      desc: "Diverse career paths: hospitals, diagnostic centres, rehabilitation centres",
    },
    {
      icon: Target,
      title: "Accessible Admission",
      desc: "Less competitive admission than MBBS/BDS — accessible for more learners",
    },
    {
      icon: Globe,
      title: "International Scope",
      desc: "International career opportunities for allied health graduates",
    },
    {
      icon: Bus,
      title: "Easy Commute",
      desc: "~112 km from Coimbatore, about 2-2.5 hours by road. Hostel accommodation is available on campus.",
    },
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
          Why Coimbatore Learners Choose JKKN AHS
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-3 text-sm sm:text-base leading-relaxed">
          JKKN offers a peaceful campus away from city congestion and strong placement
          support, and hostel and transport facilities make the transition easy.
          Coimbatore has many colleges of its own.
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

        <p className="text-center text-sm text-gray-500 mt-8">
          Learners from nearby cities also choose JKKN AHS:{" "}
          <a href="/erode" className="text-[#006837] hover:underline font-medium">Erode (~18 km)</a>,{" "}
          <a href="/salem" className="text-[#006837] hover:underline font-medium">Salem (~57 km)</a>,{" "}
          <a href="/tiruppur" className="text-[#006837] hover:underline font-medium">Tiruppur (~67 km)</a>, and{" "}
          <a href="/namakkal" className="text-[#006837] hover:underline font-medium">Namakkal</a>.
        </p>
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
      intake: "7 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/cardiac-technology",
    },
    {
      icon: Activity,
      name: "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "5 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/radiology-imaging-technology",
    },
    {
      icon: Droplet,
      name: "Bachelor of Dialysis Therapy Technology (B.DTT)",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "5 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/dialysis-technology",
    },
    {
      icon: ShieldCheck,
      name: "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "10 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/operation-theatre-anaesthesia",
    },
    {
      icon: Wind,
      name: "Bachelor of Respiratory Technology (B.RT)",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "10 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/respiratory-therapy",
    },
    {
      icon: Stethoscope,
      name: "Bachelor of Physician Associates (B.PA)",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "10 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/physician-assistant",
    },
    {
      icon: Heart,
      name: "B.Sc. Critical Care Technology",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "10 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/critical-care-technology",
    },
    {
      icon: FileText,
      name: "Bachelor of Science in Health Information Management (B.Sc. HIM)",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "15 seats",
      eligibility: "10+2 with Physics, Chemistry, Biology",
      link: "/medical-record-science",
    },
    {
      icon: Ambulance,
      name: "Bachelor of Emergency Medical Technologist (Paramedic)",
      duration: "3 Years + 1 Year Internship",
      level: "UG",
      intake: "10 seats",
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
        <p className="text-xs text-gray-400 mt-6">
          Intake = seats sanctioned by The Tamil Nadu Dr. M.G.R. Medical University, AHS affiliated
          colleges list 2025-26, institution code 825.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   PLACEMENT HIGHLIGHTS
────────────────────────────────────────── */
function PlacementHighlights() {
  const stats: { value: string; label: string }[] = [
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Placement Highlights
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          The placement cell runs recruitment drives with partner hospitals
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        {stats.length > 0 && (
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
        )}

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
      desc: "NH-544 (Coimbatore-Salem Highway) — direct route",
    },
    {
      icon: Bus,
      label: "BY BUS",
      desc: "Frequent inter-city buses from Gandhipuram and Ukkadam bus stands to Komarapalayam/Namakkal route",
    },
    {
      icon: Train,
      label: "NEAREST RAILWAY STATION",
      desc: "Coimbatore Junction (~112 km from campus)",
    },
    {
      icon: Plane,
      label: "NEAREST AIRPORT",
      desc: "Coimbatore International Airport (Code: CJB) (~101 km)",
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
          How to Reach from Coimbatore
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
              Coimbatore → JKKN AHS Campus
            </div>
            <div className="text-white/70 text-xs mt-0.5">
              ~112 km • 2-2.5 hours
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
      title: "Modern Learning Labs",
      desc: "State-of-the-art learning labs and smart learning studios",
    },
    {
      icon: BookOpen,
      title: "Digital Learning Commons",
      desc: "Well-stocked learning commons with digital access and journals",
    },
    {
      icon: Home,
      title: "Hostel",
      desc: "Separate hostels for boys and girls with mess facility",
    },
    {
      icon: Bus,
      title: "Transport",
      desc: "College buses connecting to Coimbatore and surrounding areas",
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
    { src: "/images/institution.avif", alt: "JKKN College of Allied Health Sciences campus building near Coimbatore" },
    { src: "/images/boys-hostel.webp", alt: "Boys hostel at JKKN AHS — allied health science college near Coimbatore" },
    { src: "/images/girls-hostel.webp", alt: "Girls hostel at JKKN AHS — allied health science college near Coimbatore" },
    { src: "/allied health science main image6.webp", alt: "Campus life at JKKN College of Allied Health Sciences near Coimbatore" },
    { src: "/allied health science main image7.webp", alt: "Learners at JKKN Allied Health Sciences campus near Coimbatore" },
    { src: "/allied health science main image8.webp", alt: "JKKN AHS facilities and campus infrastructure near Coimbatore" },
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
    { title: "Placement Support", desc: "A dedicated placement cell runs recruitment drives with partner hospitals and supports graduates who want to work abroad. The college publishes no audited placement figures; the cell can share current, verifiable numbers on request." },
    { title: "9 Specialized BSc Programmes", desc: "Cardiac Technology, Dialysis Therapy, Medical Radiology & Imaging, Anaesthesia & OT, Respiratory Technology, Physician Associates, Critical Care, Health Information Management, and Emergency Medical Technologist — comprehensive options under one roof." },
    { title: "Clinical Training at Partner Hospitals", desc: "Clinical postings at partner hospitals give hands-on patient exposure during the course and the one-year internship. The admission office can give the current list of posting hospitals in writing." },
    { title: "Scholarships for Meritorious Learners", desc: "Merit-based scholarships available for deserving learners." },
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
          Why Coimbatore Learners Choose JKKN AHS
        </h2>
        <p className="voice-answer text-gray-500 text-sm mb-3 text-center">
          JKKN AHS offers Coimbatore learners 9 BSc programmes, clinical training at partner hospitals and merit scholarships
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
   SNIPPET BAIT SECTION
────────────────────────────────────────── */
function SnippetBaitSection() {
  return (
    <section className="bg-[#FBFBEE] py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
          Allied Health Sciences in Coimbatore — Quick Guide
        </h2>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">What are Allied Health Sciences?</h3>
            <p className="snippet-answer voice-answer text-sm text-gray-600 leading-relaxed">
              Allied Health Sciences are healthcare professions that support doctors and nurses in diagnosing, treating, and preventing diseases. These include specialisations like cardiac technology, radiology, dialysis technology, respiratory therapy, and emergency care. Near Coimbatore, JKKN College of Allied Health Sciences offers 9 BSc programmes with clinical training at partner hospitals — ~112 km via NH-544.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Top Allied Health Science Courses Available Near Coimbatore</h3>
            <ul className="snippet-answer text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>B.Sc Cardiac Technology — ECG, echocardiography, cardiac catheterisation</li>
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>Bachelor of Medical Radiology and Imaging Technology (B.MRIT) — X-ray, CT, MRI, ultrasound</li>
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>Bachelor of Dialysis Therapy Technology (B.DTT) — haemodialysis, peritoneal dialysis, renal care</li>
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT) — surgical support, anaesthesia monitoring</li>
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>Bachelor of Respiratory Technology (B.RT) — ventilator management, pulmonary rehabilitation</li>
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>Bachelor of Physician Associates (B.PA) — clinical diagnosis, patient management</li>
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>B.Sc Critical Care Technology — ICU monitoring, life support systems</li>
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>Bachelor of Science in Health Information Management (B.Sc. HIM) — health informatics, hospital data management</li>
              <li className="flex items-start gap-2"><span className="text-[#006837] mt-1">•</span>Bachelor of Emergency Medical Technologist (Paramedic) — trauma care, emergency response</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">How to Choose the Best AHS College in Coimbatore Region</h3>
            <div className="snippet-answer voice-answer text-sm text-gray-600 leading-relaxed space-y-2">
              <p>Coimbatore has 14+ allied health science colleges. When choosing, consider university affiliation (The Tamil Nadu Dr. M.G.R. Medical University is the gold standard), NAAC accreditation, the hospitals used for clinical training, placement track record, fee structure, and clinical training hours.</p>
              <p>JKKN College of Allied Health Sciences, ~112 km from Coimbatore on NH-544, is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, which lists its courses under J.K.K. Nattraja Dental College &amp; Hospital (code 825), an institution NAAC accredited with an A grade (CGPA 3.01, valid to 26 February 2030). It offers clinical training at partner hospitals, placement support, and management-quota fees of ₹60,000 to ₹1,70,000 a year with scholarship options.</p>
            </div>
          </div>
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
    { name: "Namakkal", distance: "~65 km", href: "/namakkal" },
    { name: "Salem", distance: "~57 km", href: "/salem" },
    { name: "Erode", distance: "~18 km", href: "/erode" },
    { name: "Tiruppur", distance: "~67 km", href: "/tiruppur" },
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
          href="/#programs"
          className="inline-block px-10 py-4 bg-[#7cb983] text-white font-bold rounded-full text-sm hover:bg-[#6ba872] transition-colors"
        >
          View All Programmes
        </a>
      </div>
    </section>
  );
}
