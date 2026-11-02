// Top-of-page "course details" answer for the 9 AHS course pages (10,300-lead plan, AHS Step 2,
// 2026-11-02). Every number here is read from the course's own TNMGRMU list file, never typed in:
// JKKN seats = JKKN's sanctioned intake on the university's affiliated-colleges list, total and
// government counts = rows on the same list. Eligibility wording follows the Tamil Nadu allied
// prospectus 2026-27 (G.O.(D) No.710), sections II.4-6. Meaning lines restate each page's own
// "What is ..." section in plain words - no new claim.

import { CARDIAC_LIST_SOURCE, GOVERNMENT_CARDIAC_COUNT, JKKN_CARDIAC_SEATS } from "./cardiac-colleges-tn";
import { CC_LIST_SOURCE, CC_GOVT_COLLEGES, CC_JKKN_SEATS } from "./critical-care-colleges-tn";
import { PA_LIST_SOURCE, PA_GOVT_COLLEGES, PA_JKKN_SEATS } from "./pa-colleges-tn";
import { DIALYSIS_LIST_SOURCE, DIALYSIS_GOVT_COLLEGES, DIALYSIS_JKKN_SEATS } from "./dialysis-colleges-tn";
import { RT_LIST_SOURCE, RT_GOVT_COLLEGES, RT_JKKN_SEATS } from "./respiratory-colleges-tn";
import { OT_LIST_SOURCE, OT_GOVT_COLLEGES, OT_JKKN_SEATS } from "./ot-colleges-tn";
import { RAD_LIST_SOURCE, RAD_GOVT_COLLEGES, RAD_JKKN_SEATS } from "./radiology-colleges-tn";
import { AE_LIST_SOURCE, AE_GOVT_COLLEGES, AE_JKKN_SEATS } from "./emergency-colleges-tn";
import { MRS_LIST_SOURCE, MRS_JKKN_SEATS } from "./medical-record-colleges-tn";

export type CourseQuickFacts = {
  /** Official full name, used in the heading. */
  heading: string;
  /** Short form used inside the answer sentence. */
  shortName: string;
  meaning: string;
  eligibility: string;
  seats: number;
  total: number;
  /** Government colleges on the list; 0 means every college on it is self-financing. */
  govt: number;
  listYear: string;
  /** id of the page's "colleges in Tamil Nadu" section. */
  listAnchor: string;
};

const PCB = "Class 12 with English and Physics, Chemistry, Biology (or Botany and Zoology).";

export const COURSE_QUICK_FACTS: Record<string, CourseQuickFacts> = {
  "cardiac-technology": {
    heading: "B.Sc Cardiac Technology",
    shortName: "B.Sc Cardiac Technology",
    meaning:
      "a cardiac technologist does heart tests such as ECG and echo and assists doctors in the cath lab. Many students search this course as BSc Cardiology.",
    eligibility: PCB,
    seats: JKKN_CARDIAC_SEATS,
    total: CARDIAC_LIST_SOURCE.totalInstitutions,
    govt: GOVERNMENT_CARDIAC_COUNT,
    listYear: CARDIAC_LIST_SOURCE.year,
    listAnchor: "cardiac-technology-colleges-tamil-nadu",
  },
  "critical-care-technology": {
    heading: "B.Sc Critical Care Technology",
    shortName: "B.Sc Critical Care Technology",
    meaning:
      "a critical care technologist runs and watches ICU life-support machines such as ventilators and monitors, working with ICU doctors.",
    eligibility: PCB,
    seats: CC_JKKN_SEATS,
    total: CC_LIST_SOURCE.totalInstitutions,
    govt: CC_GOVT_COLLEGES.length,
    listYear: CC_LIST_SOURCE.year,
    listAnchor: "critical-care-technology-college-tamil-nadu",
  },
  "physician-assistant": {
    heading: "Bachelor of Physician Associates (B.PA)",
    shortName: "B.PA",
    meaning:
      "a Physician Associate (earlier called Physician Assistant) works under a doctor's supervision to examine patients and help with diagnosis, treatment plans and patient care.",
    eligibility: PCB,
    seats: PA_JKKN_SEATS,
    total: PA_LIST_SOURCE.totalInstitutions,
    govt: PA_GOVT_COLLEGES.length,
    listYear: PA_LIST_SOURCE.year,
    listAnchor: "physician-assistant-colleges-tamil-nadu",
  },
  "dialysis-technology": {
    heading: "Bachelor of Dialysis Therapy Technology (B.DTT)",
    shortName: "B.DTT",
    meaning:
      "a dialysis technologist runs the dialysis machine and looks after kidney patients during dialysis, working with nephrologists.",
    eligibility: PCB,
    seats: DIALYSIS_JKKN_SEATS,
    total: DIALYSIS_LIST_SOURCE.totalInstitutions,
    govt: DIALYSIS_GOVT_COLLEGES.length,
    listYear: DIALYSIS_LIST_SOURCE.year,
    listAnchor: "dialysis-technology-colleges-tamil-nadu",
  },
  "respiratory-therapy": {
    heading: "Bachelor of Respiratory Technology (B.RT)",
    shortName: "B.RT",
    meaning:
      "a respiratory technologist helps patients with breathing and lung problems, using ventilators and blood-gas (ABG) tests.",
    eligibility: PCB,
    seats: RT_JKKN_SEATS,
    total: RT_LIST_SOURCE.totalInstitutions,
    govt: RT_GOVT_COLLEGES.length,
    listYear: RT_LIST_SOURCE.year,
    listAnchor: "respiratory-therapy-colleges-tamil-nadu",
  },
  "operation-theatre-anaesthesia": {
    heading: "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)",
    shortName: "B.AOTT",
    meaning:
      "an anaesthesia and operation theatre technologist prepares the operation theatre and helps the surgeon and the anaesthetist during surgery.",
    eligibility:
      "Class 12 with English, Physics, Chemistry and one of Biology, Botany and Zoology, or Mathematics.",
    seats: OT_JKKN_SEATS,
    total: OT_LIST_SOURCE.totalInstitutions,
    govt: OT_GOVT_COLLEGES.length,
    listYear: OT_LIST_SOURCE.year,
    listAnchor: "anaesthesia-technology-colleges-tamil-nadu",
  },
  "radiology-imaging-technology": {
    heading: "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)",
    shortName: "B.MRIT",
    meaning: "a radiology technologist takes X-ray, CT and MRI scans that doctors use to find the problem.",
    eligibility: PCB,
    seats: RAD_JKKN_SEATS,
    total: RAD_LIST_SOURCE.totalInstitutions,
    govt: RAD_GOVT_COLLEGES.length,
    listYear: RAD_LIST_SOURCE.year,
    listAnchor: "radiology-imaging-technology-colleges-tamil-nadu",
  },
  "accident-emergency-care": {
    heading: "Bachelor of Emergency Medical Technologist (Paramedic)",
    shortName: "the Emergency Medical Technologist (Paramedic) degree",
    meaning:
      "a paramedic (emergency medical technologist) gives first care to patients at accident scenes, in ambulances and in the emergency department.",
    eligibility: PCB,
    seats: AE_JKKN_SEATS,
    total: AE_LIST_SOURCE.totalInstitutions,
    govt: AE_GOVT_COLLEGES.length,
    listYear: AE_LIST_SOURCE.year,
    listAnchor: "accident-emergency-care-colleges-tamil-nadu",
  },
  "medical-record-science": {
    heading: "Bachelor of Science in Health Information Management (B.Sc. HIM)",
    shortName: "B.Sc. HIM",
    meaning: "a health information professional manages patient records, medical coding (ICD) and hospital health data.",
    eligibility:
      "Class 12 with English in a science, commerce or arts group, with 50% aggregate (40% for BC, BCM, MBC, DNC, SC, SCA and ST).",
    seats: MRS_JKKN_SEATS,
    total: MRS_LIST_SOURCE.totalInstitutions,
    govt: 0,
    listYear: MRS_LIST_SOURCE.year,
    listAnchor: "medical-record-science-colleges-tamil-nadu",
  },
};
