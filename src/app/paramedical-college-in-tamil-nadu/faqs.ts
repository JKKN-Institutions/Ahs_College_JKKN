import { AHS_TN_TOTAL, AHS_TN_GOVT, AHS_LIST_SOURCE } from "@/lib/ahs-colleges-tn";
import { JKKN_PARAMEDICAL_COURSES, JKKN_PARAMEDICAL_SEATS } from "./courses";

// One array feeds both the visible FAQ and the FAQPage schema. Numbers are derived, never typed.
export const PARAMEDICAL_FAQS: { q: string; a: string }[] = [
  {
    q: "Is JKKN College of Allied Health Sciences a paramedical college?",
    a: `Yes. Its ${JKKN_PARAMEDICAL_COURSES.length} B.Sc programmes are paramedical (allied health) degree courses affiliated to The Tamil Nadu Dr. M.G.R. Medical University. The university lists them under J.K.K. Nattraja Dental College & Hospital, institution code 825, Kumarapalayam, Namakkal district.`,
  },
  {
    q: "Are paramedical courses and allied health science courses the same?",
    a: "Yes, for these degrees. The Tamil Nadu Selection Committee's website lists them as Paramedical Degree Courses, and its 2026-27 prospectus (G.O. (D) No. 710, dated 18-06-2026) calls them Allied and Healthcare UG Degree Courses. B.Sc Nursing and B.Pharm are separate courses taught at separate JKKN colleges.",
  },
  {
    q: "Which paramedical courses does JKKN offer and how many seats are there?",
    a: `${JKKN_PARAMEDICAL_COURSES.length} courses with ${JKKN_PARAMEDICAL_SEATS} seats in total, as sanctioned by the university for ${AHS_LIST_SOURCE.year}: ${JKKN_PARAMEDICAL_COURSES.map((c) => `${c.name.replace("B.Sc ", "")} (${c.seats})`).join(", ")}.`,
  },
  {
    q: "What is the eligibility for paramedical courses at JKKN?",
    a: "Plus Two (10+2) or equivalent with Physics, Chemistry and Biology, with a minimum of 50% aggregate (45% for OBC, 40% for SC/ST), and 17 years of age.",
  },
  {
    q: "How long is a paramedical degree at JKKN?",
    a: "Four years: three years of study and one year of compulsory internship.",
  },
  {
    q: "How many paramedical colleges are there in Tamil Nadu?",
    a: `${AHS_TN_TOTAL} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical University for at least one undergraduate allied health (paramedical) course in ${AHS_LIST_SOURCE.year}, ${AHS_TN_GOVT.length} of them government. JKKN College of Allied Health Sciences in Komarapalayam is one of them.`,
  },
];
