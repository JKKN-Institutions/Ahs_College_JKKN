// Official data about JKKN College of Allied Health Sciences, copied from the regulators' own lists.
// Read live on 2026-10-29 (regulator-portal-check, SEO project report
// allied_health-official-data-for-site-2026-10-29.html). Every block on /approvals carries one of
// these sources. Nothing here comes from our own website or from an aggregator.
//
// Left OFF this page on purpose until the college office answers (do not add from memory):
// - the AISHE record's "(Inst. Code - 596)" - the university list says 825;
// - the list's "CCPA 2024-25" status - the list prints no legend for CCPA;
// - any Government / DME approval line - no public list shows one;
// - government-quota tuition - the 2026-27 prospectus PDF was not re-read live;
// - NCAHP - its institute portal says enrolment is data collection, not registration.
import { JKKN_PARAMEDICAL_COURSES } from "@/app/paramedical-college-in-tamil-nadu/courses";

export type OfficialSource = { body: string; title: string; url: string; asOn: string };

export const SRC_UNIVERSITY: OfficialSource = {
  body: "The Tamil Nadu Dr. M.G.R. Medical University",
  title: "AHS Courses - Affiliated Colleges / Institutions for the Academic Year 2025-26",
  url: "https://www.tnmgrmu.ac.in/wp-content/uploads/2026/09/FINALAHSWEBSITEUPDATIONsep72026.pdf",
  asOn: "07-09-2026",
};

export const SRC_SELECTION: OfficialSource = {
  body: "Selection Committee, Directorate of Medical Education and Research, Tamil Nadu",
  title: "Admissions 2026-2027 (course names)",
  url: "https://regpmc.tnmedicalonline.co.in/pmc26/",
  asOn: "29-10-2026",
};

export const SRC_NAAC: OfficialSource = {
  body: "NAAC",
  title: "Institutions accredited by NAAC having valid accreditation",
  url: "https://naac.gov.in/images/docs/ACCREDITATION_STATUS/Institutions_accredited_by_NAAC_having_valid_accreditation-as_on_14082025_1.xlsx",
  asOn: "14-08-2025",
};

export const SRC_AISHE: OfficialSource = {
  body: "AISHE, Ministry of Education",
  title: "Higher Education Institution Directory",
  url: "https://dashboard.aishe.gov.in/hedirectory/",
  asOn: "29-10-2026",
};

export const AISHE_CODE = "C-49058";
export const UNIVERSITY_CODE = "825";
export const LISTED_UNDER = "J.K.K. Nattraja Dental College & Hospital";
export const LISTED_ADDRESS = "Natarajapuram, NH-544 (Salem to Coimbatore), Kumarapalayam - 638 183, Namakkal district";

// Name each course carries on the university's 2025-26 list, in the list's own order.
const UNIVERSITY_NAMES: { slug: string; listName: string }[] = [
  { slug: "accident-emergency-care", listName: "B.Sc. Accident & Emergency Care Technology" },
  { slug: "cardiac-technology", listName: "B.Sc. Cardiac Technology" },
  { slug: "critical-care-technology", listName: "B.Sc. Critical Care Technology" },
  { slug: "dialysis-technology", listName: "B.Sc. Dialysis Technology" },
  { slug: "operation-theatre-anaesthesia", listName: "B.Sc. Operation Theatre & Anaesthesia Technology" },
  { slug: "physician-assistant", listName: "B.Sc. Physician Assistant" },
  { slug: "radiology-imaging-technology", listName: "B.Sc. Radiography & Imaging Technology" },
  { slug: "medical-record-science", listName: "B.Sc. Medical Record Science" },
  { slug: "respiratory-therapy", listName: "B.Sc. Respiratory Therapy" },
];

// Seats come from the one shared course array, so this page can never drift from the others.
export const OFFICIAL_COURSES = UNIVERSITY_NAMES.map(({ slug, listName }) => {
  const c = JKKN_PARAMEDICAL_COURSES.find((x) => x.slug === slug);
  if (!c) throw new Error(`approvals: no course for slug ${slug}`);
  return { slug, name: c.name, listName, seats: c.seats };
});

export const OFFICIAL_SEATS = OFFICIAL_COURSES.reduce((s, c) => s + c.seats, 0);

// One array feeds the visible FAQ and the FAQPage schema. voice = spoken Tanglish form, shown under
// the question as "Also asked"; it is not part of the JSON-LD.
export const APPROVALS_FAQS: { q: string; a: string; voice: string; source: OfficialSource }[] = [
  {
    q: "Which university is JKKN College of Allied Health Sciences affiliated to?",
    voice: "JKKN allied health college entha university la affiliated?",
    a: `It is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, which awards the degree. The university's 2025-26 list of allied health affiliated colleges shows JKKN's nine courses under ${LISTED_UNDER}, institution code ${UNIVERSITY_CODE}, at Kumarapalayam in Namakkal district.`,
    source: SRC_UNIVERSITY,
  },
  {
    q: "How many seats does each allied health course have at JKKN?",
    voice: "JKKN AHS la ovvoru course ku evlo seats?",
    a: `The university's 2025-26 list sanctions ${OFFICIAL_SEATS} seats across nine courses: Health Information Management (Medical Record Science) 15; Emergency Medical Technologist, Critical Care, Anaesthesia and Operation Theatre, Physician Associates and Respiratory Technology 10 each; Cardiac Technology 7; Dialysis Therapy and Medical Radiology and Imaging 5 each.`,
    source: SRC_UNIVERSITY,
  },
  {
    q: "Is JKKN College of Allied Health Sciences NAAC accredited?",
    voice: "JKKN allied health ku NAAC grade iruka?",
    a: `NAAC's list of institutions with valid accreditation, as on 14 August 2025, has no separate entry for JKKN College of Allied Health Sciences. The university lists its courses under ${LISTED_UNDER}, which NAAC accredited with an 'A' grade, CGPA 3.01, declared on 27 February 2025.`,
    source: SRC_NAAC,
  },
  {
    q: "What is the AISHE code of JKKN College of Allied Health Sciences?",
    voice: "JKKN allied health AISHE code enna?",
    a: `Its AISHE code is ${AISHE_CODE} in the Ministry of Education's All India Survey on Higher Education directory. Like the university list, the record carries the name ${LISTED_UNDER}; it gives 2019 as the year of establishment and The Tamil Nadu Dr. M.G.R. Medical University as the affiliating university.`,
    source: SRC_AISHE,
  },
  {
    q: "Why does the university list show J.K.K. Nattraja Dental College & Hospital and not JKKN Allied Health?",
    voice: "University list la JKKN allied health per yen illa?",
    a: `The Tamil Nadu Dr. M.G.R. Medical University files JKKN's allied health courses under ${LISTED_UNDER}, institution code ${UNIVERSITY_CODE}, at Natarajapuram, NH-544, Kumarapalayam. To check the courses and seats yourself, search the university's allied health list for that name, not for 'JKKN Allied Health'.`,
    source: SRC_UNIVERSITY,
  },
];
