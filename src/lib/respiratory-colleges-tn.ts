// B.Sc Respiratory Therapy in Tamil Nadu, from the university's own list (GL6-332).
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf), parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py in the SEO project.
//
// User decision 2026-09-24: name GOVERNMENT colleges only. Private colleges are counted, never named.
// Seats are the sanctioned B.Sc Respiratory Therapy intake printed on the list. Totals are derived.

export const RT_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  // Institutions offering the course (any sector), counted by the parser. Kept as a constant because
  // only the government rows are shipped; the government count is derived below.
  totalInstitutions: 32,
  // Namakkal / Erode / Salem district counts (all sectors), by address and PIN. No institution on the
  // list with a 636/637/638 PIN is left unresolved (checked 2026-09-24).
  districtCounts: { Namakkal: 2, Erode: 4, Salem: 2 } as Record<string, number>,
};

// The 2026-27 Selection Committee prospectus (G.O. (D) No.710, Health and Family Welfare, 18-06-2026)
// names the course "Bachelor of Respiratory Technology (B.RT)", 3 years plus a 1-year compulsory
// internship, and sets the government-college tuition fee at Rs.3,000 per annum for all allied and
// healthcare UG courses.
export const RT_COUNSELLING_NAME = "Bachelor of Respiratory Technology (B.RT)";
export const RT_GOVT_TUITION_FEE_PER_YEAR = "Rs. 3,000";

export const RT_GOVT_COLLEGES: { code: string; name: string; place: string; seats: number }[] = [
  { code: "395", name: "Madras Medical College", place: "Chennai", seats: 14 },
  { code: "465", name: "Govt. Stanley Medical College", place: "Chennai", seats: 20 },
  { code: "1072", name: "E.S.I.C. Medical College and Hospital, K.K. Nagar", place: "Chennai", seats: 10 },
  { code: "581", name: "Chengalpattu Medical College", place: "Chengalpattu", seats: 20 },
  { code: "1029", name: "Government Erode Medical College and Hospital", place: "Perundurai, Erode", seats: 10 },
  { code: "766", name: "Madurai Medical College & Hospital", place: "Madurai", seats: 10 },
  { code: "990", name: "Government Medical College & Hospital", place: "Namakkal", seats: 4 },
  { code: "764", name: "Thanjavur Medical College & Hospital", place: "Thanjavur", seats: 20 },
  { code: "762", name: "Thiruvarur Medical College & Hospital", place: "Thiruvarur", seats: 20 },
  { code: "1036", name: "Government Thiruvannamalai Medical College", place: "Thiruvannamalai", seats: 10 },
  { code: "772", name: "Govt. Thoothukudi Medical College & Hospital", place: "Thoothukudi", seats: 20 },
  { code: "763", name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", seats: 20 },
];

export const RT_GOVT_SEATS = RT_GOVT_COLLEGES.reduce((s, c) => s + c.seats, 0);
export const RT_SELF_FINANCING_COUNT = RT_LIST_SOURCE.totalInstitutions - RT_GOVT_COLLEGES.length;

/** JKKN's own B.Sc Respiratory Therapy intake on the same list (code 825). */
export const RT_JKKN_SEATS = 10;
