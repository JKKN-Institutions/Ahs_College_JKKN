// B.Sc Operation Theatre & Anaesthesia Technology in Tamil Nadu, from the university's own list (GL6-329).
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf), parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py in the SEO project.
//
// User decision 2026-09-24: name GOVERNMENT colleges only. Private colleges are counted, never named.
// Seats are the sanctioned B.Sc OT & Anaesthesia Technology intake printed on the list. Totals are derived.

export const OT_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  // Institutions offering the course (any sector), counted by the parser. Kept as a constant because
  // only the government rows are shipped; the government count is derived below.
  totalInstitutions: 127,
  // Namakkal / Erode / Salem district counts (all sectors), by address and PIN.
  districtCounts: { Namakkal: 11, Erode: 6, Salem: 8 } as Record<string, number>,
};

// The 2026-27 Selection Committee prospectus (G.O. (D) No.710, Health and Family Welfare, 18-06-2026)
// names the course "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)".
export const OT_COUNSELLING_NAME = "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)";

export const OT_GOVT_COLLEGES: { code: string; name: string; place: string; seats: number }[] = [
  { code: "465", name: "Govt. Stanley Medical College", place: "Chennai", seats: 20 },
  { code: "1072", name: "E.S.I.C. Medical College and Hospital, K.K. Nagar", place: "Chennai", seats: 10 },
  { code: "581", name: "Chengalpattu Medical College", place: "Chengalpattu", seats: 20 },
  { code: "913", name: "Government Dharmapuri Medical College", place: "Dharmapuri", seats: 20 },
  { code: "1029", name: "Government Erode Medical College and Hospital", place: "Perundurai, Erode", seats: 10 },
  { code: "769", name: "Govt. Kanyakumari Medical College & Hospital", place: "Kanyakumari", seats: 20 },
  { code: "998", name: "Government Medical College", place: "Karur", seats: 20 },
  { code: "766", name: "Madurai Medical College & Hospital", place: "Madurai", seats: 20 },
  { code: "990", name: "Government Medical College & Hospital", place: "Namakkal", seats: 10 },
  { code: "768", name: "Govt Medical College & Hospital", place: "Pudukottai", seats: 20 },
  { code: "761", name: "Govt. Mohan Kumaramangalam Medical College", place: "Salem", seats: 20 },
  { code: "764", name: "Thanjavur Medical College & Hospital", place: "Thanjavur", seats: 20 },
  { code: "762", name: "Thiruvarur Medical College & Hospital", place: "Thiruvarur", seats: 20 },
  { code: "1036", name: "Government Thiruvannamalai Medical College", place: "Thiruvannamalai", seats: 20 },
  { code: "772", name: "Govt. Thoothukudi Medical College & Hospital", place: "Thoothukudi", seats: 20 },
  { code: "765", name: "KAP Viswanatham Govt. Medical College & Hospital", place: "Tiruchirappalli", seats: 20 },
  { code: "763", name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", seats: 20 },
  { code: "770", name: "Govt. Vellore Medical College & Hospital", place: "Vellore", seats: 20 },
  { code: "771", name: "Govt. Villupuram Medical College & Hospital", place: "Villupuram", seats: 20 },
];

export const OT_GOVT_SEATS = OT_GOVT_COLLEGES.reduce((s, c) => s + c.seats, 0);
export const OT_SELF_FINANCING_COUNT = OT_LIST_SOURCE.totalInstitutions - OT_GOVT_COLLEGES.length;

/** JKKN's own B.Sc OT & Anaesthesia Technology intake on the same list (code 825). */
export const OT_JKKN_SEATS = 10;
