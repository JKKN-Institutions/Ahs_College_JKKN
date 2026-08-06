import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

/**
 * City landing page content library (Phase 1 commute-belt + Phase 2 district hubs).
 * Legacy city pages (/erode, /namakkal, /salem, /tiruppur, /coimbatore) are
 * hardcoded pages and are NOT part of this library.
 *
 * NOTE: distanceKm / travelTime / nearby-city distances are approximate road
 * estimates — verify against Google Maps before using them in ads or print.
 */

export type CityFAQ = { q: string; a: string };

export type CityNearby = { name: string; distance: string; href: string };

export type CityPage = {
  slug: string;
  cityName: string;
  districtName: string;
  /** commute = daily-commute belt messaging; hostel = hostel-first messaging */
  tier: "commute" | "hostel";
  distanceKm: number;
  travelTime: string;
  routeVia: string;
  heroIntro: string;
  localContext: string;
  busRoute: string;
  commuteNote: { title: string; desc: string };
  advantageDistance: { title: string; desc: string };
  industryFaq: CityFAQ;
  extraFaqs: CityFAQ[];
  nearbyAreas: string[];
  nearbyCities: CityNearby[];
  metaDescription: string;
  extraKeywords: string[];
};

const SITE_URL = "https://ahs.jkkn.ac.in";

export const cityPages: CityPage[] = [
  /* ────────── PHASE 1 — COMMUTE BELT ────────── */
  {
    slug: "tiruchengode",
    cityName: "Tiruchengode",
    districtName: "Namakkal",
    tier: "commute",
    distanceKm: 18,
    travelTime: "30-35 minutes",
    routeVia: "via Pallipalayam–Tiruchengode Road",
    heroIntro:
      "Tiruchengode to JKKN is one of the shortest college commutes in the region. JKKN College of Allied Health Sciences offers 9 BSc allied health programmes with 92%+ placement support — just ~18 km away, so you can study a professional healthcare degree without leaving home.",
    localContext:
      "Tiruchengode is known across India for its borewell-rig and lorry transport industry, and local families increasingly want professional, job-oriented degrees for their children. JKKN AHS is just ~18 km away — closer than Salem or Erode colleges — making daily commute genuinely easy for Tiruchengode students.",
    busRoute:
      "Frequent government town buses and private buses run between Tiruchengode bus stand and Komarapalayam/Bhavani throughout the day.",
    commuteNote: {
      title: "Easy Commute",
      desc: "Just ~18 km from Tiruchengode. Most students commute daily by bus or bike; hostel is also available.",
    },
    advantageDistance: {
      title: "Just 30–35 Minutes from Tiruchengode",
      desc: "Located on NH-544 near Komarapalayam with direct road connectivity from Tiruchengode. Daily commute by bus or bike is comfortable — or choose the on-campus hostel.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Tiruchengode students?",
      a: "Yes. Tiruchengode's rig and transport industry, together with the growing hospital network across Namakkal district, creates steady demand for emergency care technicians, dialysis technicians, and lab professionals. JKKN AHS graduates from Tiruchengode can build careers close to home or move to metro and international hospitals.",
    },
    extraFaqs: [
      {
        q: "Why choose JKKN AHS over colleges in Salem or Erode for Tiruchengode students?",
        a: "For Tiruchengode students, JKKN AHS at Komarapalayam (~18 km) is significantly closer than most Salem (~45 km) or Erode (~35 km) colleges. You get NAAC-accredited education, clinical training at the 500+ bed JKKN Hospital from Year 1, and strong placement support — with the shortest daily commute.",
      },
    ],
    nearbyAreas: ["Elachipalayam", "Mallasamudram", "Pallipalayam", "Molasi"],
    nearbyCities: [
      { name: "Namakkal", distance: "~30 km", href: "/namakkal" },
      { name: "Erode", distance: "~35 km", href: "/erode" },
      { name: "Rasipuram", distance: "~25 km", href: "/rasipuram" },
      { name: "Salem", distance: "~45 km", href: "/salem" },
    ],
    metaDescription:
      "JKKN AHS — just ~18 km from Tiruchengode. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges in tiruchengode",
      "paramedical colleges in tiruchengode",
      "bsc courses in tiruchengode",
    ],
  },
  {
    slug: "sankagiri",
    cityName: "Sankagiri",
    districtName: "Salem",
    tier: "commute",
    distanceKm: 25,
    travelTime: "35-40 minutes",
    routeVia: "via NH-544 (Salem–Coimbatore Highway)",
    heroIntro:
      "Sankagiri sits right on NH-544 — the same highway as JKKN. That means a direct ~25 km ride to a NAAC-accredited allied health sciences campus with 9 BSc programmes and 92%+ placement support.",
    localContext:
      "Sankagiri, famous for its historic hill fort and its position on the Salem–Coimbatore highway corridor, has limited higher-education options within the town itself. JKKN AHS is a straight ~25 km ride down NH-544 — no route changes, no city traffic — making it the most accessible professional healthcare college for Sankagiri students.",
    busRoute:
      "All Salem–Erode and Salem–Coimbatore buses on NH-544 stop at Komarapalayam; frequent services from Sankagiri bus stand throughout the day.",
    commuteNote: {
      title: "Easy Commute",
      desc: "A direct ~25 km ride on NH-544 from Sankagiri. Daily commute by bus is simple; hostel is also available.",
    },
    advantageDistance: {
      title: "Direct NH-544 Connection from Sankagiri",
      desc: "Sankagiri and JKKN sit on the same highway. ~25 km, 35-40 minutes, with buses every few minutes — one of the easiest college commutes in Salem district.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Sankagiri students?",
      a: "Yes. Salem district's expanding hospital network — including multi-specialty hospitals in Salem city just 25-30 km away — needs trained dialysis, radiology, OT and emergency care technicians. A BSc from JKKN AHS lets Sankagiri students work close to home or take up metro and international hospital roles.",
    },
    extraFaqs: [
      {
        q: "Why choose JKKN AHS over Salem city colleges for Sankagiri students?",
        a: "From Sankagiri, JKKN AHS (~25 km on NH-544) is as close as most Salem city colleges (~25-30 km) but without city traffic. You also get clinical training at the 500+ bed JKKN Hospital from Year 1 and NAAC-accredited programmes with strong placement support.",
      },
    ],
    nearbyAreas: ["Sankari", "Edappadi", "Magudanchavadi", "Attayampatti"],
    nearbyCities: [
      { name: "Salem", distance: "~28 km", href: "/salem" },
      { name: "Bhavani", distance: "~20 km", href: "/bhavani" },
      { name: "Erode", distance: "~40 km", href: "/erode" },
      { name: "Mettur", distance: "~45 km", href: "/mettur" },
    ],
    metaDescription:
      "JKKN AHS — ~25 km from Sankagiri on NH-544. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges in sankagiri",
      "paramedical colleges in sankagiri",
      "bsc courses near sankagiri",
    ],
  },
  {
    slug: "bhavani",
    cityName: "Bhavani",
    districtName: "Erode",
    tier: "commute",
    distanceKm: 7,
    travelTime: "10-15 minutes",
    routeVia: "across the Cauvery bridge — twin-town connectivity",
    heroIntro:
      "Bhavani and Komarapalayam are twin towns on opposite banks of the Cauvery — which makes JKKN AHS practically a home-town college for Bhavani students. 9 BSc allied health programmes, NAAC accreditation and 92%+ placement support, ~7 km from Bhavani bus stand.",
    localContext:
      "Bhavani — home of the famous Bhavani Jamakkalam handloom carpets and the Sangameshwarar temple at the river confluence — is the closest town of all to the JKKN campus. At ~7 km across the Cauvery bridge, students reach the campus in 10-15 minutes, which means zero relocation cost and maximum family comfort.",
    busRoute:
      "Town buses shuttle between Bhavani and Komarapalayam every few minutes throughout the day — the two towns function as one urban area.",
    commuteNote: {
      title: "Closest Town to Campus",
      desc: "Just ~7 km from Bhavani — a 10-15 minute ride. JKKN is effectively Bhavani's own allied health college.",
    },
    advantageDistance: {
      title: "10-15 Minutes from Bhavani — The Closest Option",
      desc: "No other allied health sciences college is this close to Bhavani. Walk out of Bhavani bus stand, cross the Cauvery, and you are on campus — daily commute could not be easier.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Bhavani students?",
      a: "Yes. Bhavani's handloom and textile workforce, plus the combined Bhavani–Komarapalayam urban belt, supports a growing network of clinics and hospitals that need lab, dialysis and emergency care technicians. JKKN's own 500+ bed hospital next door is also a major local healthcare employer.",
    },
    extraFaqs: [
      {
        q: "Do Bhavani students need hostel at JKKN AHS?",
        a: "Usually not — at ~7 km, almost all Bhavani students commute daily by town bus or two-wheeler in 10-15 minutes. Hostel is available if you prefer campus stay during exams or internship rotations.",
      },
    ],
    nearbyAreas: ["Anthiyur", "Ammapettai", "Kurichi", "Appakudal"],
    nearbyCities: [
      { name: "Erode", distance: "~15 km", href: "/erode" },
      { name: "Tiruchengode", distance: "~20 km", href: "/tiruchengode" },
      { name: "Gobichettipalayam", distance: "~45 km", href: "/gobichettipalayam" },
      { name: "Salem", distance: "~45 km", href: "/salem" },
    ],
    metaDescription:
      "JKKN AHS — just ~7 km from Bhavani, across the Cauvery. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges in bhavani",
      "paramedical colleges in bhavani",
      "bsc colleges near bhavani",
    ],
  },
  {
    slug: "karur",
    cityName: "Karur",
    districtName: "Karur",
    tier: "commute",
    distanceKm: 65,
    travelTime: "about 1.5 hours",
    routeVia: "via Velur–Paramathi or the Erode route",
    heroIntro:
      "Karur students looking for a professional healthcare degree have a strong option ~65 km away: JKKN College of Allied Health Sciences — 9 BSc programmes, NAAC accreditation, a 500+ bed teaching hospital and 92%+ placement support.",
    localContext:
      "Karur is Tamil Nadu's bus-body building capital and a major home-textile export hub — a town that values skill-based, employment-ready education. JKKN AHS is ~65 km away via Velur–Paramathi, so Karur students can choose between a manageable bus commute and a comfortable on-campus hostel.",
    busRoute:
      "Regular buses run from Karur towards Erode and Salem; services via Velur–Paramathi–Tiruchengode reach Komarapalayam. Many students prefer the hostel and travel home on weekends.",
    commuteNote: {
      title: "Commute or Hostel",
      desc: "~65 km from Karur — daily bus commute is possible, though many Karur students choose the hostel and go home on weekends.",
    },
    advantageDistance: {
      title: "Closer Than Trichy or Coimbatore for Karur Students",
      desc: "At ~65 km, JKKN AHS is nearer to Karur than most allied health colleges in Trichy (~80 km) or Coimbatore (~120 km) — with hostel, transport and a teaching hospital on one campus.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Karur students?",
      a: "Yes. Karur's bus-body and textile industries support a large working population, driving demand for occupational health services, emergency care technicians and diagnostic professionals in local hospitals. JKKN AHS graduates can also access hospital careers in Trichy, Coimbatore and abroad.",
    },
    extraFaqs: [
      {
        q: "Is hostel available for Karur students at JKKN AHS?",
        a: "Yes. Separate boys and girls hostels with mess facility are available on campus. Karur students who prefer not to commute daily typically stay in the hostel and travel home on weekends — Karur is about 1.5 hours away by bus.",
      },
    ],
    nearbyAreas: ["Kulithalai", "Aravakurichi", "Krishnarayapuram", "Velur"],
    nearbyCities: [
      { name: "Namakkal", distance: "~35 km", href: "/namakkal" },
      { name: "Tiruchengode", distance: "~50 km", href: "/tiruchengode" },
      { name: "Erode", distance: "~65 km", href: "/erode" },
      { name: "Trichy", distance: "~80 km", href: "/trichy" },
    ],
    metaDescription:
      "JKKN AHS — ~65 km from Karur. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, hostel + 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges in karur",
      "paramedical colleges in karur",
      "bsc allied health science karur",
    ],
  },
  {
    slug: "rasipuram",
    cityName: "Rasipuram",
    districtName: "Namakkal",
    tier: "commute",
    distanceKm: 40,
    travelTime: "about 1 hour",
    routeVia: "via Tiruchengode",
    heroIntro:
      "Rasipuram students can reach JKKN College of Allied Health Sciences in about an hour via Tiruchengode — unlocking 9 BSc allied health programmes, NAAC accreditation and 92%+ placement support without moving far from home.",
    localContext:
      "Rasipuram, famous for its silk sarees and as an education-conscious town in Namakkal district, sends students across the district for professional degrees. JKKN AHS at Komarapalayam is ~40 km away via Tiruchengode — close enough for daily commute, with hostel as a comfortable alternative.",
    busRoute:
      "Frequent buses connect Rasipuram to Tiruchengode, with onward services to Komarapalayam; direct buses on the Rasipuram–Erode route also stop near the campus.",
    commuteNote: {
      title: "Easy Commute",
      desc: "~40 km from Rasipuram via Tiruchengode — about an hour by bus. Daily commute or hostel, your choice.",
    },
    advantageDistance: {
      title: "About 1 Hour from Rasipuram",
      desc: "JKKN AHS is ~40 km from Rasipuram via Tiruchengode — a comfortable daily commute within your own district, with college transport and hostel options available.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Rasipuram students?",
      a: "Yes. Namakkal district's hospital network — spanning Rasipuram, Namakkal and Tiruchengode — has growing demand for dialysis technicians, lab professionals, and emergency care staff. JKKN AHS graduates from Rasipuram can work within the district or move to metro and international hospitals.",
    },
    extraFaqs: [
      {
        q: "Why choose JKKN AHS over Salem colleges for Rasipuram students?",
        a: "From Rasipuram, JKKN AHS (~40 km) is comparable in distance to Salem colleges (~30 km) but offers a key advantage: clinical training from Year 1 at the 500+ bed JKKN Hospital on the same campus, plus NAAC-accredited programmes and dedicated placement support.",
      },
    ],
    nearbyAreas: ["Namagiripettai", "Vennandur", "Belukurichi", "Mangalapuram"],
    nearbyCities: [
      { name: "Namakkal", distance: "~25 km", href: "/namakkal" },
      { name: "Tiruchengode", distance: "~25 km", href: "/tiruchengode" },
      { name: "Salem", distance: "~30 km", href: "/salem" },
      { name: "Attur", distance: "~55 km", href: "/attur" },
    ],
    metaDescription:
      "JKKN AHS — ~40 km from Rasipuram via Tiruchengode. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges in rasipuram",
      "paramedical colleges in rasipuram",
      "bsc courses near rasipuram",
    ],
  },
  {
    slug: "attur",
    cityName: "Attur",
    districtName: "Salem",
    tier: "hostel",
    distanceKm: 90,
    travelTime: "about 2 hours",
    routeVia: "via Salem and NH-544",
    heroIntro:
      "For Attur students, JKKN College of Allied Health Sciences offers what eastern Salem district lacks — 9 specialised BSc allied health programmes on one NAAC-accredited campus with hostel, a 500+ bed teaching hospital and 92%+ placement support, ~90 km away via Salem.",
    localContext:
      "Attur, the agricultural heart of eastern Salem district, has very few professional healthcare colleges nearby. JKKN AHS is ~90 km away via Salem — most Attur students choose the on-campus hostel, study through the week, and take the frequent Salem-route buses home on weekends.",
    busRoute:
      "Buses run from Attur to Salem throughout the day; from Salem's bus stands, frequent NH-544 services reach Komarapalayam in about 45 minutes.",
    commuteNote: {
      title: "Hostel + Weekend Travel",
      desc: "~90 km from Attur. Most students stay in the separate boys/girls hostels and travel home on weekends via Salem.",
    },
    advantageDistance: {
      title: "The Specialised Option Eastern Salem District Lacks",
      desc: "Attur has limited allied health education options locally. JKKN AHS (~90 km via Salem) offers 9 niche BSc programmes, hostel and clinical training on one campus — worth the move for a professional career.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Attur students?",
      a: "Yes. The Attur–Salem belt's growing hospital network needs trained radiology, dialysis, OT and emergency care technicians, and allied health graduates are also in demand across Tamil Nadu and abroad. A specialised BSc from JKKN AHS opens both local and metro hospital careers.",
    },
    extraFaqs: [
      {
        q: "How do Attur students manage hostel life at JKKN AHS?",
        a: "JKKN AHS provides separate boys and girls hostels with mess facility on campus. Attur students typically stay in the hostel during the week and take the Salem-route buses home on weekends — the journey is about 2 hours door to door.",
      },
    ],
    nearbyAreas: ["Gangavalli", "Thalaivasal", "Pethanaickenpalayam", "Veeraganur"],
    nearbyCities: [
      { name: "Salem", distance: "~55 km", href: "/salem" },
      { name: "Rasipuram", distance: "~55 km", href: "/rasipuram" },
      { name: "Namakkal", distance: "~75 km", href: "/namakkal" },
    ],
    metaDescription:
      "JKKN AHS — ~90 km from Attur via Salem. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, hostel + 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges near attur",
      "paramedical colleges near attur",
      "bsc allied health science attur",
    ],
  },
  {
    slug: "mettur",
    cityName: "Mettur",
    districtName: "Salem",
    tier: "commute",
    distanceKm: 55,
    travelTime: "about 1.5 hours",
    routeVia: "via Mecheri and Bhavani",
    heroIntro:
      "Mettur students can reach JKKN College of Allied Health Sciences in about 1.5 hours via Bhavani — 9 BSc allied health programmes, NAAC accreditation, a 500+ bed teaching hospital and 92%+ placement support, ~55 km from the Dam town.",
    localContext:
      "Mettur — home of the Stanley Reservoir dam, hydro power stations and SIPCOT chemical industries — has a large industrial workforce but few professional healthcare colleges nearby. JKKN AHS is ~55 km away via Mecheri–Bhavani, giving Mettur students both commute and hostel options.",
    busRoute:
      "Buses from Mettur via Mecheri and Bhavani connect to Komarapalayam; alternatively, take any Salem-bound bus and switch to frequent NH-544 services.",
    commuteNote: {
      title: "Commute or Hostel",
      desc: "~55 km from Mettur via Bhavani — about 1.5 hours. Daily commute is possible; hostel is the comfortable option.",
    },
    advantageDistance: {
      title: "About 1.5 Hours from Mettur",
      desc: "At ~55 km via the Mecheri–Bhavani route, JKKN AHS is one of the nearest NAAC-accredited allied health campuses for Mettur students — with hostel and college transport available.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Mettur students?",
      a: "Yes. Mettur's power and chemical industries make occupational health a real local need — industrial units and nearby hospitals require emergency care technicians, respiratory therapists and lab professionals. JKKN AHS offers exactly these specialisations, with placements across Tamil Nadu and abroad.",
    },
    extraFaqs: [
      {
        q: "Which allied health course suits Mettur's industrial belt?",
        a: "B.Sc Accident & Emergency Care Technology and B.Sc Respiratory Therapy align well with industrial-belt healthcare needs like emergency response and occupational lung care. That said, all 9 JKKN AHS programmes lead to hospital careers statewide — choose based on your interest during counselling.",
      },
    ],
    nearbyAreas: ["Mecheri", "Kolathur", "Omalur", "Thoppur"],
    nearbyCities: [
      { name: "Salem", distance: "~35 km", href: "/salem" },
      { name: "Bhavani", distance: "~45 km", href: "/bhavani" },
      { name: "Sankagiri", distance: "~45 km", href: "/sankagiri" },
      { name: "Erode", distance: "~55 km", href: "/erode" },
    ],
    metaDescription:
      "JKKN AHS — ~55 km from Mettur via Bhavani. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, hostel + 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges near mettur",
      "paramedical colleges near mettur",
      "bsc courses near mettur",
    ],
  },
  {
    slug: "gobichettipalayam",
    cityName: "Gobichettipalayam",
    districtName: "Erode",
    tier: "commute",
    distanceKm: 52,
    travelTime: "about 1.25 hours",
    routeVia: "via Bhavani",
    heroIntro:
      "From Gobichettipalayam, JKKN College of Allied Health Sciences is about 1.25 hours away via Bhavani — 9 BSc allied health programmes, NAAC accreditation, a 500+ bed teaching hospital and 92%+ placement support at ~52 km.",
    localContext:
      "Gobichettipalayam — the green agricultural belt of western Erode district, known for its sugar mills and scenic film locations — values stable, professional careers for its students. JKKN AHS is ~52 km away on the Gobi–Bhavani route, keeping both daily commute and hostel stay practical.",
    busRoute:
      "Regular buses run on the Gobichettipalayam–Bhavani route with onward town-bus connections to Komarapalayam; Erode-route buses are an alternative.",
    commuteNote: {
      title: "Commute or Hostel",
      desc: "~52 km from Gobi via Bhavani — about 1.25 hours. Many students commute; hostel is available for the rest.",
    },
    advantageDistance: {
      title: "Closer Than Coimbatore for Gobi Students",
      desc: "At ~52 km, JKKN AHS is much nearer to Gobichettipalayam than Coimbatore's colleges (~85 km) — with a teaching hospital, hostel and transport on one NAAC-accredited campus.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Gobichettipalayam students?",
      a: "Yes. The Gobi–Sathyamangalam belt's hospitals and the wider Erode district healthcare network need trained radiology, dialysis, OT and emergency care professionals. JKKN AHS graduates can work locally or take up roles in Coimbatore, metro cities and abroad.",
    },
    extraFaqs: [
      {
        q: "Can students from Sathyamangalam side also reach JKKN AHS?",
        a: "Yes. Students from Sathyamangalam, Puliampatti and Nambiyur typically travel via Gobichettipalayam and Bhavani to reach the campus at Komarapalayam. For students from these areas, the on-campus hostel is often the more comfortable option.",
      },
    ],
    nearbyAreas: ["Sathyamangalam", "Puliampatti", "Nambiyur", "Kavindapadi"],
    nearbyCities: [
      { name: "Erode", distance: "~35 km", href: "/erode" },
      { name: "Bhavani", distance: "~45 km", href: "/bhavani" },
      { name: "Tiruppur", distance: "~55 km", href: "/tiruppur" },
      { name: "Coimbatore", distance: "~85 km", href: "/coimbatore" },
    ],
    metaDescription:
      "JKKN AHS — ~52 km from Gobichettipalayam via Bhavani. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, hostel available. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges near gobichettipalayam",
      "paramedical colleges in gobichettipalayam",
      "bsc courses near gobi",
    ],
  },

  /* ────────── PHASE 2 — DISTRICT HUBS (HOSTEL DRAW) ────────── */
  {
    slug: "trichy",
    cityName: "Trichy",
    districtName: "Tiruchirappalli",
    tier: "hostel",
    distanceKm: 125,
    travelTime: "about 2.5-3 hours",
    routeVia: "via Namakkal and Tiruchengode",
    heroIntro:
      "Trichy students searching for specialised allied health degrees — cardiac technology, dialysis, respiratory therapy and more — will find all 9 BSc programmes on one NAAC-accredited campus at JKKN AHS, ~125 km away with full hostel support.",
    localContext:
      "Trichy is one of Tamil Nadu's biggest education and healthcare hubs — but seats in niche allied health specialisations like cardiac technology and respiratory therapy remain limited statewide. JKKN AHS, ~125 km away via Namakkal, offers all 9 specialisations with clinical training at its own 500+ bed hospital, making the hostel move worthwhile for serious healthcare aspirants.",
    busRoute:
      "Regular buses run from Trichy Central bus stand towards Salem and Erode via Namakkal; get down at Komarapalayam. The journey takes about 2.5-3 hours.",
    commuteNote: {
      title: "Hostel Campus Life",
      desc: "~125 km from Trichy. Separate boys/girls hostels with mess make weekday campus life easy; weekend buses home are frequent.",
    },
    advantageDistance: {
      title: "All 9 Niche Specialisations Under One Roof",
      desc: "Rather than hunting for scattered seats across Trichy colleges, JKKN AHS offers every major allied health specialisation on a single NAAC-accredited campus with a teaching hospital — ~125 km from Trichy with full hostel support.",
    },
    industryFaq: {
      q: "Why would a Trichy student choose JKKN AHS over Trichy colleges?",
      a: "Trichy has strong colleges, but niche allied health seats — cardiac technology, respiratory therapy, critical care — are limited. JKKN AHS offers all 9 specialisations with Year-1 clinical exposure at its own 500+ bed hospital, NAAC accreditation and 85%+ placement support, which many students find worth the hostel move.",
    },
    extraFaqs: [
      {
        q: "How do Trichy students travel to and from JKKN AHS?",
        a: "Buses from Trichy Central towards Salem/Erode via Namakkal stop at Komarapalayam — about 2.5-3 hours. Most Trichy students stay in the on-campus hostel and travel home on weekends or holidays.",
      },
    ],
    nearbyAreas: ["Srirangam", "Lalgudi", "Manapparai", "Thuvakudi"],
    nearbyCities: [
      { name: "Karur", distance: "~80 km", href: "/karur" },
      { name: "Namakkal", distance: "~90 km", href: "/namakkal" },
      { name: "Salem", distance: "~125 km", href: "/salem" },
    ],
    metaDescription:
      "JKKN AHS — all 9 BSc allied health programmes with hostel, ~125 km from Trichy. NAAC accredited, 85%+ placements, 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges in trichy",
      "paramedical colleges in trichy",
      "bsc cardiac technology trichy",
    ],
  },
  {
    slug: "dharmapuri",
    cityName: "Dharmapuri",
    districtName: "Dharmapuri",
    tier: "hostel",
    distanceKm: 105,
    travelTime: "about 2.5 hours",
    routeVia: "via Salem and NH-544",
    heroIntro:
      "Dharmapuri students no longer need to travel to Chennai or Bangalore for specialised healthcare degrees. JKKN AHS — ~105 km away via Salem — offers 9 BSc allied health programmes with hostel, a 500+ bed teaching hospital and 92%+ placement support.",
    localContext:
      "Dharmapuri, the mango belt of Tamil Nadu, has very limited allied health education options within the district. JKKN AHS is ~105 km away via Salem — a straightforward bus route — and its hostel-based campus life lets Dharmapuri students access 9 niche healthcare specialisations without moving to a metro.",
    busRoute:
      "Frequent buses connect Dharmapuri to Salem; from Salem, NH-544 services reach Komarapalayam in about 45 minutes. Total journey about 2.5 hours.",
    commuteNote: {
      title: "Hostel Campus Life",
      desc: "~105 km from Dharmapuri. Stay in the separate boys/girls hostels through the week; Salem-route buses make weekend travel easy.",
    },
    advantageDistance: {
      title: "The Nearest Full Allied Health Campus for Dharmapuri",
      desc: "With few allied health colleges in Dharmapuri district, JKKN AHS (~105 km via Salem) is among the nearest NAAC-accredited campuses offering all 9 specialisations with hostel and a teaching hospital.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Dharmapuri students?",
      a: "Yes. Dharmapuri and neighbouring districts are underserved in specialised healthcare staff, so trained dialysis, radiology and emergency care technicians find ready demand in the region's growing hospitals — apart from metro and international opportunities open to all JKKN AHS graduates.",
    },
    extraFaqs: [
      {
        q: "Is JKKN AHS hostel suitable for first-time outstation students from Dharmapuri?",
        a: "Yes. Separate boys and girls hostels with mess facility, on-campus security and faculty support make the transition easy for first-generation outstation students. The Salem-route bus connection keeps home within a 2.5-hour reach for weekends.",
      },
    ],
    nearbyAreas: ["Palacode", "Harur", "Pennagaram", "Pappireddipatti"],
    nearbyCities: [
      { name: "Krishnagiri", distance: "~45 km", href: "/krishnagiri" },
      { name: "Mettur", distance: "~60 km", href: "/mettur" },
      { name: "Salem", distance: "~70 km", href: "/salem" },
    ],
    metaDescription:
      "JKKN AHS — ~105 km from Dharmapuri via Salem. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, hostel + 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges near dharmapuri",
      "paramedical colleges in dharmapuri",
      "bsc allied health science dharmapuri",
    ],
  },
  {
    slug: "krishnagiri",
    cityName: "Krishnagiri",
    districtName: "Krishnagiri",
    tier: "hostel",
    distanceKm: 150,
    travelTime: "about 3 hours",
    routeVia: "via Dharmapuri and Salem",
    heroIntro:
      "Krishnagiri students seeking professional healthcare careers can access all 9 BSc allied health specialisations at JKKN AHS — a NAAC-accredited, hostel-based campus with a 500+ bed teaching hospital, ~150 km away via Dharmapuri and Salem.",
    localContext:
      "Krishnagiri — Tamil Nadu's mango capital and home to the fast-growing Hosur industrial belt — sends many students towards Bangalore for higher education. JKKN AHS offers a Tamil Nadu alternative: 9 niche healthcare degrees affiliated to The Tamil Nadu Dr. M.G.R. Medical University, with full hostel support, ~150 km away on the Salem route.",
    busRoute:
      "Buses from Krishnagiri run via Dharmapuri to Salem; from Salem, frequent NH-544 services reach Komarapalayam. Total journey about 3 hours.",
    commuteNote: {
      title: "Hostel Campus Life",
      desc: "~150 km from Krishnagiri. Hostel-based weekday life with mess facility; the Salem bus corridor keeps weekend travel simple.",
    },
    advantageDistance: {
      title: "A Tamil Nadu Alternative to Bangalore Colleges",
      desc: "Instead of costlier Bangalore options, Krishnagiri students get a Tamil Nadu Dr. M.G.R. Medical University-affiliated degree, Tamil-friendly campus culture and lower overall cost at JKKN AHS — ~150 km via the Salem route.",
    },
    industryFaq: {
      q: "Are there healthcare career opportunities for Krishnagiri students?",
      a: "Yes. The Hosur–Krishnagiri industrial corridor is expanding rapidly, and its hospitals and occupational health centres need trained emergency care, lab and radiology professionals. JKKN AHS graduates can work in this belt, across Tamil Nadu, or abroad.",
    },
    extraFaqs: [
      {
        q: "Why choose JKKN AHS over Bangalore colleges for Krishnagiri students?",
        a: "A JKKN AHS degree is affiliated to The Tamil Nadu Dr. M.G.R. Medical University with NAAC accreditation, and total cost of study plus hostel is typically lower than comparable Bangalore private colleges. Students also get Year-1 clinical training at the campus's own 500+ bed hospital.",
      },
    ],
    nearbyAreas: ["Hosur", "Denkanikottai", "Pochampalli", "Uthangarai"],
    nearbyCities: [
      { name: "Dharmapuri", distance: "~45 km", href: "/dharmapuri" },
      { name: "Salem", distance: "~115 km", href: "/salem" },
      { name: "Vellore", distance: "~150 km", href: "/vellore" },
    ],
    metaDescription:
      "JKKN AHS — ~150 km from Krishnagiri via Salem. 9 BSc allied health programmes, NAAC accredited, 85%+ placements, hostel + 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges near krishnagiri",
      "paramedical colleges in krishnagiri",
      "bsc allied health science hosur krishnagiri",
    ],
  },
  {
    slug: "vellore",
    cityName: "Vellore",
    districtName: "Vellore",
    tier: "hostel",
    distanceKm: 225,
    travelTime: "about 4.5-5 hours",
    routeVia: "via Tiruvannamalai/Harur and Salem",
    heroIntro:
      "Vellore students grow up around one of India's most respected medical ecosystems — and many aspire to healthcare careers beyond MBBS. JKKN AHS offers 9 BSc allied health specialisations on a NAAC-accredited, hostel-based campus with its own 500+ bed teaching hospital.",
    localContext:
      "Vellore's CMC-driven healthcare culture means students here understand the value of allied health professions better than most. When local seats in niche courses fill up, JKKN AHS — reachable via the Salem route — offers all 9 specialisations with Year-1 hospital exposure and full hostel support.",
    busRoute:
      "Buses from Vellore run towards Salem via Tiruvannamalai or Harur; from Salem, frequent NH-544 services reach Komarapalayam. Overnight and early-morning options make the ~4.5-5 hour journey manageable.",
    commuteNote: {
      title: "Hostel Campus Life",
      desc: "~225 km from Vellore — a full hostel-based campus experience with mess facility; students travel home on long weekends and holidays.",
    },
    advantageDistance: {
      title: "For Students Who Know What Allied Health Is Worth",
      desc: "Vellore students see daily how central technicians and therapists are to modern hospitals. JKKN AHS turns that awareness into a career: 9 specialised degrees, a teaching hospital on campus, and 85%+ placement support.",
    },
    industryFaq: {
      q: "Do JKKN AHS graduates work at major hospital networks like those in Vellore?",
      a: "JKKN AHS graduates are placed across leading hospital networks in India — recruiters include Apollo Hospitals, Fortis Healthcare and Manipal Hospitals — and international employers like NHS UK and Cleveland Clinic Abu Dhabi. Vellore students can target both home-town hospital careers and global roles.",
    },
    extraFaqs: [
      {
        q: "How do Vellore students manage the distance to JKKN AHS?",
        a: "Students stay in the on-campus hostel (separate for boys and girls, with mess) and typically travel home once or twice a month. The Vellore–Salem–Komarapalayam bus route takes about 4.5-5 hours, with overnight options available.",
      },
    ],
    nearbyAreas: ["Katpadi", "Ranipet", "Arcot", "Gudiyatham"],
    nearbyCities: [
      { name: "Krishnagiri", distance: "~150 km", href: "/krishnagiri" },
      { name: "Attur", distance: "~150 km", href: "/attur" },
      { name: "Salem", distance: "~200 km", href: "/salem" },
    ],
    metaDescription:
      "JKKN AHS — 9 BSc allied health programmes with full hostel support for Vellore students. NAAC accredited, 85%+ placements, 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges for vellore students",
      "paramedical colleges near vellore",
      "bsc allied health science vellore",
    ],
  },
  {
    slug: "madurai",
    cityName: "Madurai",
    districtName: "Madurai",
    tier: "hostel",
    distanceKm: 215,
    travelTime: "about 4.5 hours",
    routeVia: "via Dindigul and Karur",
    heroIntro:
      "Madurai students looking beyond the city's crowded seats for specialised allied health degrees can find all 9 BSc programmes — cardiac technology to emergency care — on one NAAC-accredited, hostel-based campus at JKKN AHS.",
    localContext:
      "Madurai is south Tamil Nadu's healthcare capital, and its students know allied health careers pay. When niche seats — cardiac technology, respiratory therapy, critical care — are hard to get locally, JKKN AHS offers all 9 specialisations with Year-1 clinical training at its own 500+ bed hospital, reachable via the Dindigul–Karur route.",
    busRoute:
      "Buses from Madurai (Mattuthavani) run towards Salem and Erode via Dindigul–Karur–Namakkal; get down at Komarapalayam. The journey takes about 4.5 hours, with overnight options.",
    commuteNote: {
      title: "Hostel Campus Life",
      desc: "~215 km from Madurai — full hostel-based campus life with mess facility; students travel home on long weekends and holidays.",
    },
    advantageDistance: {
      title: "All 9 Specialisations Without the Metro Cost",
      desc: "Compared to Chennai options, JKKN AHS offers Madurai students the same university affiliation (The Tamil Nadu Dr. M.G.R. Medical University) at lower living cost, with hostel, teaching hospital and 85%+ placement support on one campus.",
    },
    industryFaq: {
      q: "Can JKKN AHS graduates work in Madurai's hospitals?",
      a: "Yes. Madurai's large private hospital network continuously recruits trained cardiac, dialysis, OT, radiology and emergency care technicians. A Tamil Nadu Dr. M.G.R. Medical University-affiliated BSc from JKKN AHS is recognised across these hospitals, and metro plus international roles remain open too.",
    },
    extraFaqs: [
      {
        q: "How do Madurai students travel to JKKN AHS?",
        a: "The Madurai–Dindigul–Karur–Namakkal bus corridor connects to Komarapalayam in about 4.5 hours; overnight buses make the trip convenient. Most Madurai students stay in the on-campus hostel and go home on long weekends.",
      },
    ],
    nearbyAreas: ["Melur", "Thirumangalam", "Usilampatti", "Dindigul"],
    nearbyCities: [
      { name: "Karur", distance: "~120 km", href: "/karur" },
      { name: "Trichy", distance: "~130 km", href: "/trichy" },
      { name: "Namakkal", distance: "~150 km", href: "/namakkal" },
    ],
    metaDescription:
      "JKKN AHS — 9 BSc allied health programmes with hostel for Madurai students. NAAC accredited, 85%+ placements, 500+ bed hospital. Admissions open 2026-27.",
    extraKeywords: [
      "allied health science colleges for madurai students",
      "paramedical colleges near madurai",
      "bsc cardiac technology madurai",
    ],
  },
];

export function getAllCitySlugs(): string[] {
  return cityPages.map((c) => c.slug);
}

export function getCityBySlug(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}

/* ────────── FAQ BUILDER ────────── */

export function buildCityFaqs(city: CityPage): CityFAQ[] {
  const { cityName, distanceKm, travelTime, routeVia } = city;
  const dist = `~${distanceKm} km`;

  const travelFaq: CityFAQ =
    city.tier === "commute"
      ? {
          q: `Can ${cityName} students commute daily to JKKN AHS?`,
          a: `Yes. At ${dist} (${travelTime} ${routeVia}), daily commute from ${cityName} is practical for most students. ${city.busRoute} Hostel facilities are available for those who prefer to stay on campus.`,
        }
      : {
          q: `How do ${cityName} students manage staying at JKKN AHS?`,
          a: `Most students from ${cityName} stay in the on-campus hostel — separate blocks for boys and girls with mess facility — and travel home on weekends or holidays. The campus is ${dist} away (${travelTime} ${routeVia}).`,
        };

  return [
    {
      q: `What is the best allied health sciences college near ${cityName}?`,
      a: `JKKN College of Allied Health Sciences, located ${dist} from ${cityName} at Komarapalayam on NH-544, is one of the top allied health sciences colleges accessible from ${cityName}. Accredited by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers 9 BSc programmes with strong placement support.`,
    },
    {
      q: `How far is JKKN AHS from ${cityName}?`,
      a: `JKKN AHS is approximately ${dist} from ${cityName}, which takes ${travelTime} by road ${routeVia}. ${city.busRoute}`,
    },
    {
      q: "What is Allied Health Sciences?",
      a: `Allied Health Sciences covers the healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences, students from ${cityName} can choose from 9 BSc programmes including cardiac technology, dialysis technology, radiology and imaging, operation theatre and anaesthesia technology, respiratory therapy, physician assistant, critical care, medical record science, and accident and emergency care.`,
    },
    travelFaq,
    {
      q: `Does JKKN AHS provide hostel for ${cityName} students?`,
      a: `Yes. JKKN AHS provides separate hostel facilities for boys and girls with mess facility. ${
        city.tier === "commute"
          ? `Students from ${cityName} can also opt for daily commute as the campus is ${travelTime} away.`
          : `For ${cityName} students, the hostel is the recommended option given the ${dist} distance; weekend travel home is straightforward by bus.`
      }`,
    },
    city.industryFaq,
    ...city.extraFaqs,
    {
      q: "What are the eligibility requirements for allied health science courses?",
      a: "To pursue BSc Allied Health Sciences at JKKN AHS, candidates must have passed 12th standard (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with a minimum aggregate of 50% (40% for reserved categories). Admission is based on merit and counselling. JKKN is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
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
      q: "How can I apply for admission at JKKN AHS?",
      a: "You can apply online through the official website at https://ahs.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
    },
  ];
}

/* ────────── METADATA BUILDER ────────── */

export function buildCityMetadata(city: CityPage): Metadata {
  const { cityName } = city;
  const lower = cityName.toLowerCase();
  return createPageMetadata({
    title: `Allied Health Science Colleges in ${cityName} | JKKN AHS`,
    description: city.metaDescription,
    path: `/${city.slug}`,
    keywords: [
      `allied health science colleges in ${lower}`,
      `allied health science colleges ${lower}`,
      `allied health science courses in ${lower}`,
      `allied health science college near ${lower}`,
      `best allied health science college ${lower}`,
      `bsc allied health science ${lower}`,
      `health science courses ${lower}`,
      `jkkn allied health sciences ${lower}`,
      `allied health science admission ${lower}`,
      ...city.extraKeywords,
    ],
    ogImage: {
      url: `${SITE_URL}/allied-health-science-hero.webp`,
      width: 1200,
      height: 630,
      alt: `JKKN College of Allied Health Sciences — Best AHS College Near ${cityName}`,
    },
  });
}

/* ────────── JSON-LD SCHEMA BUILDER ────────── */

const COURSE_LIST = [
  {
    name: "B.Sc Cardiac Technology",
    description:
      "Specialised programme in cardiovascular diagnostics — ECG, echocardiography, cardiac catheterisation, and pacemaker technology.",
    url: `${SITE_URL}/cardiac-technology`,
    timeRequired: "P4Y",
  },
  {
    name: "B.Sc Dialysis Technology",
    description:
      "Programme covering haemodialysis, peritoneal dialysis, and renal care with hands-on clinical training.",
    url: `${SITE_URL}/dialysis-technology`,
    timeRequired: "P3Y",
  },
  {
    name: "B.Sc Radiology & Imaging Technology",
    description:
      "Training in X-ray, CT scan, MRI, and ultrasound imaging with clinical rotations at JKKN Hospital.",
    url: `${SITE_URL}/radiology-imaging-technology`,
    timeRequired: "P3Y",
  },
  {
    name: "B.Sc Operation Theatre & Anaesthesia Technology",
    description:
      "Programme in surgical suite management, anaesthesia equipment handling, and patient monitoring during surgery.",
    url: `${SITE_URL}/operation-theatre-anaesthesia`,
    timeRequired: "P3Y",
  },
  {
    name: "B.Sc Respiratory Therapy",
    description:
      "Specialisation in ventilator management, pulmonary function testing, and respiratory rehabilitation.",
    url: `${SITE_URL}/respiratory-therapy`,
    timeRequired: "P3Y",
  },
  {
    name: "B.Sc Physician Assistant",
    description:
      "Training in clinical diagnosis, patient assessment, and medical management under physician supervision.",
    url: `${SITE_URL}/physician-assistant`,
    timeRequired: "P3Y",
  },
  {
    name: "B.Sc Critical Care Technology",
    description:
      "Programme covering ICU monitoring, life support systems, and critical patient management.",
    url: `${SITE_URL}/critical-care-technology`,
    timeRequired: "P3Y",
  },
  {
    name: "B.Sc Medical Record Science",
    description:
      "Programme in health informatics, medical coding, hospital data management, and health information systems.",
    url: `${SITE_URL}/medical-record-science`,
    timeRequired: "P3Y",
  },
  {
    name: "B.Sc Accident & Emergency Care Technology",
    description:
      "Training in trauma care, emergency response, triage, and pre-hospital emergency medical services.",
    url: `${SITE_URL}/accident-emergency-care`,
    timeRequired: "P3Y",
  },
];

export function buildCitySchemas(city: CityPage): object[] {
  const { cityName, slug } = city;
  const pageUrl = `${SITE_URL}/${slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "JKKN Institutions", item: "https://jkkn.ac.in/" },
      { "@type": "ListItem", position: 2, name: "Allied Health Sciences", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 3, name: cityName, item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: buildCityFaqs(city).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: "JKKN College of Allied Health Sciences",
    alternateName: "JKKN AHS",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/ahs-logo.svg`,
    image: `${SITE_URL}/allied-health-science-hero.webp`,
    foundingDate: "1952",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Natarajapuram, NH-544 (Salem–Coimbatore Highway)",
      addressLocality: "Komarapalayam",
      addressRegion: "Tamil Nadu",
      postalCode: "638183",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 11.4467, longitude: 77.7046 },
    telephone: "+919345855001",
    email: "info@jkkn.ac.in",
    sameAs: ["https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7"],
    areaServed: { "@type": "City", name: cityName },
    parentOrganization: {
      "@type": "Organization",
      name: "JKKN Institutions",
      url: "https://jkkn.ac.in/",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Accreditation",
      recognizedBy: { "@type": "Organization", name: "NAAC" },
    },
    department: COURSE_LIST.map((c) => ({
      "@type": "EducationalOrganization",
      name: c.name,
      url: c.url,
    })),
  };

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Allied Health Science Courses at JKKN AHS",
    description: `9 BSc Allied Health Science programmes offered at JKKN College of Allied Health Sciences, accessible from ${cityName}`,
    numberOfItems: 9,
    itemListElement: COURSE_LIST.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: c.name,
        description: c.description,
        provider: {
          "@type": "CollegeOrUniversity",
          "@id": `${SITE_URL}/#organization`,
          name: "JKKN College of Allied Health Sciences",
        },
        url: c.url,
        timeRequired: c.timeRequired,
        educationalCredentialAwarded: c.name,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for Allied Health Science Admission at JKKN AHS",
    description: `Step-by-step admission process for BSc Allied Health Sciences at JKKN College of Allied Health Sciences, near ${cityName}.`,
    totalTime: "P14D",
    step: [
      { "@type": "HowToStep", position: 1, name: "Check Eligibility", text: "Ensure you have passed 12th standard (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with minimum 50% aggregate (40% for reserved categories)." },
      { "@type": "HowToStep", position: 2, name: "Apply Online", text: "Visit https://www.jkkn.ai/apply/jkkn-admission-2026 and fill out the online application form with your personal and academic details." },
      { "@type": "HowToStep", position: 3, name: "Submit Documents", text: "Upload or submit 12th mark sheet, community certificate, Aadhaar card, passport-size photos, and transfer certificate." },
      { "@type": "HowToStep", position: 4, name: "Attend Counselling", text: "Attend the admission counselling session at JKKN campus or online. Select your preferred BSc programme from 9 available options." },
      { "@type": "HowToStep", position: 5, name: "Pay Fees & Confirm", text: "Complete fee payment to confirm your admission. Scholarship options are available for meritorious students." },
      { "@type": "HowToStep", position: 6, name: "Join Campus", text: "Report to JKKN AHS campus at Komarapalayam on the designated date. Hostel and transport facilities available." },
    ],
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Allied Health Science Colleges in ${cityName} | JKKN AHS`,
    url: pageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".snippet-answer", ".voice-answer", "[data-speakable]"],
    },
  };

  return [
    breadcrumbSchema,
    faqSchema,
    educationalOrgSchema,
    courseListSchema,
    howToSchema,
    speakableSchema,
  ];
}
