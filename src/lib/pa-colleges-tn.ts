// B.Sc Physician Assistant in Tamil Nadu, from the university's own list (GL6-328).
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf), parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py in the SEO project.
//
// User decision 2026-09-24: name GOVERNMENT colleges only. Private colleges are counted, never named.
// Seats are the sanctioned B.Sc Physician Assistant intake printed on the list. Totals are derived.

export const PA_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  // Institutions offering B.Sc Physician Assistant (any sector), counted by the parser. Kept as a
  // constant because only the government rows are shipped; the government count is derived below.
  totalInstitutions: 88,
  // Namakkal / Erode / Salem district counts (all sectors), hand-checked by address and PIN.
  districtCounts: { Namakkal: 8, Erode: 3, Salem: 6 } as Record<string, number>,
};

export const PA_GOVT_COLLEGES: { code: string; name: string; place: string; seats: number }[] = [
  { code: "465", name: "Govt. Stanley Medical College", place: "Chennai", seats: 20 },
  { code: "992", name: "Government Medical College, Omandurar Government Estate", place: "Chennai", seats: 15 },
  { code: "1072", name: "E.S.I.C. Medical College and Hospital, K.K. Nagar", place: "Chennai", seats: 10 },
  { code: "581", name: "Chengalpattu Medical College", place: "Chengalpattu", seats: 20 },
  { code: "767", name: "Coimbatore Medical College & Hospital", place: "Coimbatore", seats: 20 },
  { code: "766", name: "Madurai Medical College & Hospital", place: "Madurai", seats: 20 },
  { code: "990", name: "Government Medical College & Hospital", place: "Namakkal", seats: 6 },
  { code: "768", name: "Govt Medical College & Hospital", place: "Pudukottai", seats: 20 },
  { code: "764", name: "Thanjavur Medical College & Hospital", place: "Thanjavur", seats: 20 },
  { code: "762", name: "Thiruvarur Medical College & Hospital", place: "Thiruvarur", seats: 20 },
  { code: "1036", name: "Government Thiruvannamalai Medical College", place: "Thiruvannamalai", seats: 20 },
  { code: "765", name: "KAP Viswanatham Govt. Medical College & Hospital", place: "Tiruchirappalli", seats: 20 },
  { code: "763", name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", seats: 20 },
  { code: "770", name: "Govt. Vellore Medical College & Hospital", place: "Vellore", seats: 20 },
  { code: "771", name: "Govt. Villupuram Medical College & Hospital", place: "Villupuram", seats: 20 },
];

export const PA_GOVT_SEATS = PA_GOVT_COLLEGES.reduce((s, c) => s + c.seats, 0);
export const PA_SELF_FINANCING_COUNT = PA_LIST_SOURCE.totalInstitutions - PA_GOVT_COLLEGES.length;

/** JKKN's own B.Sc Physician Assistant intake on the same list (code 825). */
export const PA_JKKN_SEATS = 10;
