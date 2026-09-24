// B.Sc Cardiac Technology colleges in Tamil Nadu, from the university's own list.
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions for the Academic Year 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf). Parsed
// 2026-09-23 by artefacts/keywords/ahs-cardiac-2026-09-23/cardiac_parse.py in the SEO project.
//
// District is read off each row's own address and PIN, never matched as a substring of a town
// name: 637304 is Sankari taluk (Salem district) although the road is "Sankari Tiruchengode Main
// Road", and 636701 is Dharmapuri, not Salem. Every 636/637/638 row was swept and none was left
// unresolved.
//
// Totals are derived from the rows below, never typed in. Intake is the sanctioned B.Sc Cardiac
// Technology intake printed on the list.
//
// The list covers colleges affiliated to the university. Deemed universities (for example Vinayaka
// Mission's in Salem, SRM or Sri Ramachandra in Chennai) run the course under their own deemed
// status and are not on it — absence from this list is not absence of the course.

export const CARDIAC_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University — AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  // Total institutions on the list offering B.Sc Cardiac Technology, counted by the parser. Kept as a
  // constant only because the full 87-row table is not shipped; the government count is derived below.
  totalInstitutions: 87,
};

export type CardiacCollege = {
  name: string;
  place: string;
  code: string;
  intake: number;
  note?: string;
  isJkkn?: boolean;
};

export const GOVERNMENT_CARDIAC_COLLEGES: CardiacCollege[] = [
  { name: "Madras Medical College", place: "Chennai", code: "395", intake: 7 },
  { name: "Govt. Stanley Medical College", place: "Chennai", code: "465", intake: 20 },
  { name: "Govt. Kilpauk Medical College & Hospital", place: "Chennai", code: "820", intake: 6 },
  { name: "Chengalpattu Medical College", place: "Chengalpattu", code: "581", intake: 20 },
  { name: "Govt. Mohan Kumaramangalam Medical College", place: "Salem", code: "761", intake: 5 },
  { name: "Coimbatore Medical College & Hospital", place: "Coimbatore", code: "767", intake: 10 },
  { name: "KAP Viswanatham Govt. Medical College & Hospital", place: "Tiruchirappalli", code: "765", intake: 20 },
  { name: "Thanjavur Medical College & Hospital", place: "Thanjavur", code: "764", intake: 20 },
  { name: "Thiruvarur Medical College & Hospital", place: "Thiruvarur", code: "762", intake: 20 },
  { name: "Madurai Medical College & Hospital", place: "Madurai", code: "766", intake: 20 },
  { name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", code: "763", intake: 20 },
  { name: "Govt. Villupuram Medical College & Hospital", place: "Villupuram", code: "771", intake: 4 },
  { name: "Government Thiruvannamalai Medical College", place: "Thiruvannamalai", code: "1036", intake: 10 },
];

export type District = "Namakkal" | "Erode" | "Salem";

export const CARDIAC_COLLEGES_BY_DISTRICT: Record<District, CardiacCollege[]> = {
  Namakkal: [
    {
      name: "J.K.K. Nattraja Dental College & Hospital (JKKN College of Allied Health Sciences)",
      place: "Komarapalayam",
      code: "825",
      intake: 7,
      isJkkn: true,
      note: "The university lists JKKN's allied health programmes under J.K.K. Nattraja Dental College & Hospital, code 825.",
    },
    { name: "Annai J K K Sampoorani Ammal College of Allied Health Sciences", place: "B. Komarapalayam", code: "747", intake: 20 },
    { name: "K.S. Rangaswamy College of Allied Health Science", place: "Thokkavadi, Tiruchengode", code: "961", intake: 15 },
    { name: "Vivekanandha Medical Care Hospital", place: "Elayampalayam, Tiruchengode", code: "606", intake: 20 },
    { name: "Swamy Vivekanandha College of Pharmacy", place: "Elayampalayam, Tiruchengode", code: "644", intake: 20 },
    { name: "Paavai Institute of Allied Health Sciences", place: "Puduchatram", code: "702", intake: 20 },
    { name: "PGP Institute of Allied Health Sciences", place: "Namakkal", code: "712", intake: 20 },
    { name: "Jayamadhi College of Allied Health Sciences", place: "Namakkal", code: "851", intake: 5 },
  ],
  Erode: [
    { name: "Nandha College of Allied Health Sciences", place: "Pitchandampalayam, Erode", code: "665", intake: 20 },
    { name: "Nandha Academy of Allied Health Sciences", place: "Pitchandampalayam, Erode", code: "698", intake: 20 },
    { name: "Shree Venkateshwara College of Paramedical Sciences", place: "Gobichettipalayam", code: "714", intake: 20 },
    { name: "JKK Munirajah Institute of Health Sciences College of Pharmacy", place: "T.N. Palayam, Gobichettipalayam", code: "746", intake: 20 },
  ],
  Salem: [
    { name: "Govt. Mohan Kumaramangalam Medical College", place: "Salem", code: "761", intake: 5, note: "Government college." },
    { name: "Dharan Institute of Health Sciences", place: "Salem", code: "708", intake: 20 },
    { name: "Mahendra College of Allied Health Sciences", place: "Minnampalli, Salem", code: "895", intake: 15, note: "An increase to 20 is listed for 2025-26." },
    { name: "Sri Shanmugha Institute of Medical Science and Research", place: "Sankari", code: "750", intake: 20 },
    { name: "Sri Shanmugha Institute of Allied Health Science", place: "Sankari", code: "848", intake: 10 },
  ],
};

export function districtTotals(district: District) {
  const rows = CARDIAC_COLLEGES_BY_DISTRICT[district];
  return { colleges: rows.length, seats: rows.reduce((sum, r) => sum + r.intake, 0) };
}

export const GOVERNMENT_CARDIAC_SEATS = GOVERNMENT_CARDIAC_COLLEGES.reduce((sum, r) => sum + r.intake, 0);

export const GOVERNMENT_CARDIAC_COUNT = GOVERNMENT_CARDIAC_COLLEGES.length;
