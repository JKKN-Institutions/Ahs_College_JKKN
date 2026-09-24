import { AHS_TN_TOTAL, AHS_TN_GOVT, AHS_TN_SELF_COUNT, AHS_LIST_SOURCE, ahsInDistrict } from "@/lib/ahs-colleges-tn";

// One array feeds both the visible FAQ and the FAQPage schema, so they cannot drift.
// Every number is derived from src/lib/ahs-colleges-tn.ts.
const govtExamples = AHS_TN_GOVT.slice(0, 4).map((i) => `${i.name} (${i.place})`).join(", ");

export const PARAMEDICAL_TN_FAQS: { q: string; a: string }[] = [
  {
    q: "How many paramedical colleges are there in Tamil Nadu?",
    a: `${AHS_TN_TOTAL} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical University for at least one undergraduate allied health (paramedical) course in ${AHS_LIST_SOURCE.year}: ${AHS_TN_GOVT.length} government and ${AHS_TN_SELF_COUNT} self-financing. Deemed universities, and B.Sc Nursing and BPT colleges, are on separate lists and are not counted here.`,
  },
  {
    q: "Are paramedical courses and allied health science courses the same?",
    a: "Yes. They are the same degree courses under two names. The Tamil Nadu Selection Committee's website lists them as Paramedical Degree Courses, and its 2026-27 prospectus (G.O. (D) No. 710, dated 18-06-2026) calls them Allied and Healthcare UG Degree Courses.",
  },
  {
    q: "Which government colleges offer paramedical courses in Tamil Nadu?",
    a: `${AHS_TN_GOVT.length} government institutions are on the university's ${AHS_LIST_SOURCE.year} list, including ${govtExamples}. Government seats are applied for online through the Selection Committee, Directorate of Medical Education and Research (tnmedicalselection.org). The full table is on this page.`,
  },
  {
    q: "Which is the best paramedical college in Tamil Nadu?",
    a: "There is no official ranking of allied health colleges - NIRF has no allied health category. Compare colleges on what you can check: affiliation to The Tamil Nadu Dr. M.G.R. Medical University (every college on this page has it), a teaching hospital for clinical postings, the sanctioned seats for your course, where the one-year internship is done, and the total fee for all four years.",
  },
  {
    q: "Which paramedical colleges are in Namakkal, Erode and Salem districts?",
    a: `On the university's ${AHS_LIST_SOURCE.year} list, Namakkal district has ${ahsInDistrict("Namakkal").length} institutions, Salem district ${ahsInDistrict("Salem").length} and Erode district ${ahsInDistrict("Erode").length}, each district including one government medical college. The district tables on this page name every one.`,
  },
  {
    q: "Is JKKN College of Allied Health Sciences on the official list?",
    a: "Yes. The university lists JKKN College of Allied Health Sciences' programmes under J.K.K. Nattraja Dental College & Hospital, institution code 825, Kumarapalayam, Namakkal district.",
  },
];
