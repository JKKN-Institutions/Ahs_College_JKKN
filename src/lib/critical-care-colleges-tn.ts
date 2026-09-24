// B.Sc Critical Care Technology in Tamil Nadu, from the university's own list (GL6-331).
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf), parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py in the SEO project.
//
// User decision 2026-09-24: name GOVERNMENT colleges only. Private colleges are counted, never named.
// Seats are the sanctioned B.Sc Critical Care Technology intake printed on the list. Totals are derived.

export const CC_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  // Institutions offering the course (any sector), counted by the parser. Kept as a constant because
  // only the government rows are shipped; the government count is derived below.
  totalInstitutions: 46,
  // Namakkal / Salem district counts (all sectors), by address and PIN. Erode district has none: no
  // institution on the list with a 636/637/638 PIN is left unresolved (checked 2026-09-24).
  districtCounts: { Namakkal: 6, Salem: 5, Erode: 0 } as Record<string, number>,
};

// The 2026-27 Selection Committee prospectus (G.O. (D) No.710, Health and Family Welfare, 18-06-2026)
// keeps the name "B.Sc. Critical Care Technology", sets 3 years plus a 1-year compulsory internship, and
// sets the government-college tuition fee at Rs.3,000 per annum for all allied and healthcare UG courses.
export const CC_DURATION = "3 years + 1 year compulsory internship";
export const CC_GOVT_TUITION_FEE_PER_YEAR = "Rs. 3,000";

export const CC_GOVT_COLLEGES: { code: string; name: string; place: string; seats: number }[] = [
  { code: "465", name: "Govt. Stanley Medical College", place: "Chennai", seats: 10 },
  { code: "1072", name: "E.S.I.C. Medical College and Hospital, K.K. Nagar", place: "Chennai", seats: 10 },
  { code: "990", name: "Government Medical College & Hospital", place: "Namakkal", seats: 5 },
  { code: "768", name: "Govt Medical College & Hospital", place: "Pudukottai", seats: 20 },
  { code: "761", name: "Govt. Mohan Kumaramangalam Medical College", place: "Salem", seats: 20 },
  { code: "764", name: "Thanjavur Medical College & Hospital", place: "Thanjavur", seats: 20 },
  { code: "762", name: "Thiruvarur Medical College & Hospital", place: "Thiruvarur", seats: 20 },
  { code: "765", name: "KAP Viswanatham Govt. Medical College & Hospital", place: "Tiruchirappalli", seats: 20 },
  { code: "763", name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", seats: 20 },
  { code: "771", name: "Govt. Villupuram Medical College & Hospital", place: "Villupuram", seats: 20 },
];

export const CC_GOVT_SEATS = CC_GOVT_COLLEGES.reduce((s, c) => s + c.seats, 0);
export const CC_SELF_FINANCING_COUNT = CC_LIST_SOURCE.totalInstitutions - CC_GOVT_COLLEGES.length;

/** JKKN's own B.Sc Critical Care Technology intake on the same list (code 825). */
export const CC_JKKN_SEATS = 10;
