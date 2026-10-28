import { AHS_TN_TOTAL, AHS_TN_GOVT, AHS_LIST_SOURCE } from "@/lib/ahs-colleges-tn";
import { JKKN_PARAMEDICAL_COURSES, JKKN_PARAMEDICAL_SEATS, inr } from "./courses";

// "Cardiac Technology and Anaesthesia ...": the courses that share one fee, highest fee first.
const FEE_GROUPS = Array.from(new Set(JKKN_PARAMEDICAL_COURSES.map((c) => c.fee)))
  .sort((a, b) => b - a)
  .map((fee) => {
    const names = JKKN_PARAMEDICAL_COURSES.filter((c) => c.fee === fee).map((c) => c.short);
    const list = names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
    return `${inr(fee)} for ${list}`;
  });

// One array feeds both the visible FAQ and the FAQPage schema. Numbers are derived, never typed.
// voice = the spoken Tanglish form, shown under the answer as "Also asked"; it is not part of the JSON-LD.
export const PARAMEDICAL_FAQS: { q: string; a: string; voice?: string }[] = [
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
    a: "Plus Two (10+2) or equivalent with English and Physics, Chemistry and Biology (or Botany and Zoology), and 17 years of age by 31 December 2026. Under the Tamil Nadu 2026-27 allied prospectus there is no minimum percentage, except Health Information Management: 50% (40% for BC, BCM, MBC, DNC, SC, SCA and ST).",
  },
  {
    q: "How long is a paramedical degree at JKKN?",
    a: "Four years: three years of study and one year of compulsory internship.",
  },
  {
    q: "What are the fees for paramedical courses at JKKN?",
    a: `Management-quota tuition a year for 2026-27 at JKKN College of Allied Health Sciences: ${FEE_GROUPS.slice(0, -1).join("; ")}; and ${FEE_GROUPS[FEE_GROUPS.length - 1]}. Government-quota fees follow government norms.`,
    voice: "JKKN la paramedical course fees evlo?",
  },
  {
    q: "Is Government Medical College, Namakkal the same as JKKN College of Allied Health Sciences?",
    a: `No. Government Medical College, Namakkal is a separate government college. JKKN College of Allied Health Sciences is a private college at Komarapalayam on NH-544, about 65 km from Namakkal town, whose ${JKKN_PARAMEDICAL_COURSES.length} courses the university lists under J.K.K. Nattraja Dental College & Hospital, institution code 825.`,
    voice: "Namakkal Government Medical College um JKKN AHS um onnaa?",
  },
  {
    q: "How many paramedical colleges are there in Tamil Nadu?",
    a: `${AHS_TN_TOTAL} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical University for at least one undergraduate allied health (paramedical) course in ${AHS_LIST_SOURCE.year}, ${AHS_TN_GOVT.length} of them government. JKKN College of Allied Health Sciences in Komarapalayam is one of them.`,
  },
];
