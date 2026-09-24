// B.Sc Radiography & Imaging Technology in Tamil Nadu, from the university's own list (GL6-333).
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf), parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py in the SEO project.
//
// User decision 2026-09-24: name GOVERNMENT colleges only. Private colleges are counted, never named.
// Seats are the sanctioned B.Sc Radiography & Imaging Technology intake printed on the list.

export const RAD_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  // The name the university list uses for the course.
  listName: "B.Sc. Radiography & Imaging Technology",
  // Institutions offering the course (any sector), counted by the parser. Kept as a constant because
  // only the government rows are shipped; the government count is derived below.
  totalInstitutions: 115,
  // Namakkal / Erode / Salem district counts (all sectors), by address and PIN. No institution on the
  // list with a 636/637/638 PIN is left unresolved (checked 2026-09-24).
  districtCounts: { Namakkal: 10, Erode: 4, Salem: 9 } as Record<string, number>,
};

// The 2026-27 Selection Committee prospectus (G.O. (D) No.710, Health and Family Welfare, 18-06-2026)
// names the course "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)", 3 years plus a 1-year
// compulsory internship, Physics, Chemistry and Biology mandatory, merit on +2 marks, and sets the
// government-college tuition fee at Rs.3,000 per annum for all allied and healthcare UG courses.
export const RAD_COUNSELLING_NAME = "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)";
export const RAD_GOVT_TUITION_FEE_PER_YEAR = "Rs. 3,000";

export const RAD_GOVT_COLLEGES: { code: string; name: string; place: string; seats: number }[] = [
  { code: "395", name: "Madras Medical College", place: "Chennai", seats: 20 },
  { code: "465", name: "Govt. Stanley Medical College", place: "Chennai", seats: 20 },
  { code: "820", name: "Govt. Kilpauk Medical College & Hospital", place: "Chennai", seats: 10 },
  { code: "1072", name: "E.S.I.C. Medical College and Hospital, K.K. Nagar", place: "Chennai", seats: 10 },
  { code: "581", name: "Chengalpattu Medical College", place: "Chengalpattu", seats: 20 },
  { code: "767", name: "Coimbatore Medical College & Hospital", place: "Coimbatore", seats: 10 },
  { code: "981", name: "Government Medical College & Hospital", place: "Cuddalore", seats: 10 },
  { code: "1029", name: "Government Erode Medical College and Hospital", place: "Perundurai, Erode", seats: 10 },
  { code: "769", name: "Govt. Kanyakumari Medical College & Hospital", place: "Kanyakumari", seats: 20 },
  { code: "998", name: "Government Medical College", place: "Karur", seats: 20 },
  { code: "766", name: "Madurai Medical College & Hospital", place: "Madurai", seats: 10 },
  { code: "990", name: "Government Medical College & Hospital", place: "Namakkal", seats: 10 },
  { code: "768", name: "Govt Medical College & Hospital", place: "Pudukottai", seats: 20 },
  { code: "761", name: "Govt. Mohan Kumaramangalam Medical College", place: "Salem", seats: 20 },
  { code: "764", name: "Thanjavur Medical College & Hospital", place: "Thanjavur", seats: 20 },
  { code: "1031", name: "Government Theni Medical College", place: "Theni", seats: 20 },
  { code: "762", name: "Thiruvarur Medical College & Hospital", place: "Thiruvarur", seats: 20 },
  { code: "1036", name: "Government Thiruvannamalai Medical College", place: "Thiruvannamalai", seats: 20 },
  { code: "772", name: "Govt. Thoothukudi Medical College & Hospital", place: "Thoothukudi", seats: 10 },
  { code: "765", name: "KAP Viswanatham Govt. Medical College & Hospital", place: "Tiruchirappalli", seats: 20 },
  { code: "763", name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", seats: 20 },
  { code: "1081", name: "Government Medical College", place: "Tiruppur", seats: 10 },
  { code: "770", name: "Govt. Vellore Medical College & Hospital", place: "Vellore", seats: 10 },
  { code: "771", name: "Govt. Villupuram Medical College & Hospital", place: "Villupuram", seats: 20 },
  { code: "1030", name: "Government Medical College", place: "Virudhunagar", seats: 10 },
];

export const RAD_GOVT_SEATS = RAD_GOVT_COLLEGES.reduce((s, c) => s + c.seats, 0);
export const RAD_SELF_FINANCING_COUNT = RAD_LIST_SOURCE.totalInstitutions - RAD_GOVT_COLLEGES.length;

/** JKKN's own B.Sc Radiography & Imaging Technology intake on the same list (code 825). */
export const RAD_JKKN_SEATS = 5;
