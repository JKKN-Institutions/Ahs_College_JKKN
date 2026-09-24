// B.Sc Accident & Emergency Care Technology in Tamil Nadu, from the university's own list (GL6-334).
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf), parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py in the SEO project.
//
// User decision 2026-09-24: name GOVERNMENT colleges only. Private colleges are counted, never named.
// Seats are the sanctioned B.Sc Accident & Emergency Care Technology intake printed on the list.

export const AE_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  // Institutions offering the course (any sector), counted by the parser. Kept as a constant because
  // only the government rows are shipped; the government count is derived below.
  totalInstitutions: 65,
  // Namakkal / Erode / Salem district counts (all sectors), by address and PIN. No institution on the
  // list with a 636/637/638 PIN is left unresolved (checked 2026-09-24).
  districtCounts: { Namakkal: 3, Erode: 4, Salem: 4 } as Record<string, number>,
};

// The 2026-27 Selection Committee prospectus (G.O. (D) No.710, Health and Family Welfare, 18-06-2026)
// names the course "Bachelor of Emergency Medical Technologist (Paramedic)", 3 years plus a 1-year
// compulsory internship, and sets the government-college tuition fee at Rs.3,000 per annum for all
// allied and healthcare UG courses.
export const AE_COUNSELLING_NAME = "Bachelor of Emergency Medical Technologist (Paramedic)";
export const AE_GOVT_TUITION_FEE_PER_YEAR = "Rs. 3,000";

export const AE_GOVT_COLLEGES: { code: string; name: string; place: string; seats: number }[] = [
  { code: "465", name: "Govt. Stanley Medical College", place: "Chennai", seats: 20 },
  { code: "1072", name: "E.S.I.C. Medical College and Hospital, K.K. Nagar", place: "Chennai", seats: 10 },
  { code: "581", name: "Chengalpattu Medical College", place: "Chengalpattu", seats: 20 },
  { code: "1029", name: "Government Erode Medical College and Hospital", place: "Perundurai, Erode", seats: 10 },
  { code: "769", name: "Govt. Kanyakumari Medical College & Hospital", place: "Kanyakumari", seats: 20 },
  { code: "766", name: "Madurai Medical College & Hospital", place: "Madurai", seats: 20 },
  { code: "768", name: "Govt Medical College & Hospital", place: "Pudukottai", seats: 20 },
  { code: "761", name: "Govt. Mohan Kumaramangalam Medical College", place: "Salem", seats: 15 },
  { code: "764", name: "Thanjavur Medical College & Hospital", place: "Thanjavur", seats: 20 },
  { code: "762", name: "Thiruvarur Medical College & Hospital", place: "Thiruvarur", seats: 20 },
  { code: "1036", name: "Government Thiruvannamalai Medical College", place: "Thiruvannamalai", seats: 20 },
  { code: "765", name: "KAP Viswanatham Govt. Medical College & Hospital", place: "Tiruchirappalli", seats: 20 },
  { code: "763", name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", seats: 20 },
  { code: "770", name: "Govt. Vellore Medical College & Hospital", place: "Vellore", seats: 20 },
  { code: "771", name: "Govt. Villupuram Medical College & Hospital", place: "Villupuram", seats: 20 },
];

export const AE_GOVT_SEATS = AE_GOVT_COLLEGES.reduce((s, c) => s + c.seats, 0);
export const AE_SELF_FINANCING_COUNT = AE_LIST_SOURCE.totalInstitutions - AE_GOVT_COLLEGES.length;

/** JKKN's own B.Sc Accident & Emergency Care Technology intake on the same list (code 825). */
export const AE_JKKN_SEATS = 10;
