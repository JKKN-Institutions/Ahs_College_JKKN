// B.Sc Dialysis Technology in Tamil Nadu, from the university's own list (GL6-330).
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf), parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py in the SEO project.
//
// User decision 2026-09-24: name GOVERNMENT colleges only. Private colleges are counted, never named.
// Seats are the sanctioned B.Sc Dialysis Technology intake printed on the list. Totals are derived.

export const DIALYSIS_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  // Institutions offering the course (any sector), counted by the parser. Kept as a constant because
  // only the government rows are shipped; the government count is derived below.
  totalInstitutions: 79,
  // Namakkal / Erode / Salem district counts (all sectors), by address and PIN.
  districtCounts: { Namakkal: 3, Erode: 5, Salem: 4 } as Record<string, number>,
};

// The 2026-27 Selection Committee prospectus (G.O. (D) No.710, Health and Family Welfare, 18-06-2026)
// names the course "Bachelor of Dialysis Therapy Technology (B.DTT)" and sets the government-college
// tuition fee at Rs.3,000 per annum for all allied and healthcare UG courses.
export const DIALYSIS_COUNSELLING_NAME = "Bachelor of Dialysis Therapy Technology (B.DTT)";
export const GOVT_TUITION_FEE_PER_YEAR = "Rs. 3,000";

export const DIALYSIS_GOVT_COLLEGES: { code: string; name: string; place: string; seats: number }[] = [
  { code: "395", name: "Madras Medical College", place: "Chennai", seats: 10 },
  { code: "465", name: "Govt. Stanley Medical College", place: "Chennai", seats: 5 },
  { code: "820", name: "Govt. Kilpauk Medical College & Hospital", place: "Chennai", seats: 20 },
  { code: "1072", name: "E.S.I.C. Medical College and Hospital, K.K. Nagar", place: "Chennai", seats: 10 },
  { code: "581", name: "Chengalpattu Medical College", place: "Chengalpattu", seats: 20 },
  { code: "767", name: "Coimbatore Medical College & Hospital", place: "Coimbatore", seats: 20 },
  { code: "1029", name: "Government Erode Medical College and Hospital", place: "Perundurai, Erode", seats: 10 },
  { code: "769", name: "Govt. Kanyakumari Medical College & Hospital", place: "Kanyakumari", seats: 20 },
  { code: "766", name: "Madurai Medical College & Hospital", place: "Madurai", seats: 20 },
  { code: "761", name: "Govt. Mohan Kumaramangalam Medical College", place: "Salem", seats: 15 },
  { code: "764", name: "Thanjavur Medical College & Hospital", place: "Thanjavur", seats: 20 },
  { code: "762", name: "Thiruvarur Medical College & Hospital", place: "Thiruvarur", seats: 20 },
  { code: "1036", name: "Government Thiruvannamalai Medical College", place: "Thiruvannamalai", seats: 15 },
  { code: "765", name: "KAP Viswanatham Govt. Medical College & Hospital", place: "Tiruchirappalli", seats: 20 },
  { code: "763", name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", seats: 20 },
  { code: "770", name: "Govt. Vellore Medical College & Hospital", place: "Vellore", seats: 10 },
  { code: "771", name: "Govt. Villupuram Medical College & Hospital", place: "Villupuram", seats: 10 },
];

export const DIALYSIS_GOVT_SEATS = DIALYSIS_GOVT_COLLEGES.reduce((s, c) => s + c.seats, 0);
export const DIALYSIS_SELF_FINANCING_COUNT = DIALYSIS_LIST_SOURCE.totalInstitutions - DIALYSIS_GOVT_COLLEGES.length;

/** JKKN's own B.Sc Dialysis Technology intake on the same list (code 825). */
export const DIALYSIS_JKKN_SEATS = 5;
