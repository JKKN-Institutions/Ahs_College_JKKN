// B.Sc Medical Record Science in Tamil Nadu, from the university's own list (GL6-335).
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
// Institutions 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf), parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py in the SEO project.
//
// Every institution on the list for this course is self-financing - no government college offers it.
// User decision 2026-09-24: private colleges are counted, never named.
//
// Deliberately NOT here: the 2026-27 Selection Committee prospectus has no "Medical Record Science"; it
// lists "B.Sc Health Information Management (B.Sc.HIM)". No document says the two are the same course,
// so the page does not claim it (user decision 2026-09-24).

export const MRS_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  year: "2025-26",
  totalInstitutions: 16,
  governmentInstitutions: 0,
  // Namakkal / Erode / Salem district counts (all sectors), by address and PIN. The one Namakkal entry is
  // JKKN (code 825). No institution on the list with a 636/637/638 PIN is left unresolved (checked 2026-09-24).
  districtCounts: { Namakkal: 1, Erode: 1, Salem: 1 } as Record<string, number>,
};

/** JKKN's own B.Sc Medical Record Science intake on the same list (code 825). */
export const MRS_JKKN_SEATS = 15;
