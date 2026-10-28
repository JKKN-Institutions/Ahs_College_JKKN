// JKKN's own paramedical (allied health) programmes, as the university lists them.
// Source: TNMGRMU "AHS Courses - Affiliated Colleges / Institutions 2025-26", entry for institution
// code 825 (J.K.K. Nattraja Dental College & Hospital, under which the university files every JKKN
// allied health programme). Seats are the sanctioned intake printed there; they sum to 82.
// B.Sc Radiotherapy Technology (3 seats) is on the list for existing students only and is not
// offered to new applicants, so it is not shown.
// fee = management-quota tuition a year, 2026-27 (src/app/fee-structure/page.tsx); short = the name used in prose.
export const JKKN_PARAMEDICAL_COURSES: { name: string; short: string; slug: string; seats: number; fee: number }[] = [
  { name: "B.Sc Cardiac Technology", short: "Cardiac Technology", slug: "cardiac-technology", seats: 7, fee: 170000 },
  { name: "Bachelor of Dialysis Therapy Technology (B.DTT)", short: "Dialysis Therapy Technology", slug: "dialysis-technology", seats: 5, fee: 110000 },
  { name: "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)", short: "Medical Radiology and Imaging Technology", slug: "radiology-imaging-technology", seats: 5, fee: 130000 },
  { name: "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)", short: "Anaesthesia and Operation Theatre Technology", slug: "operation-theatre-anaesthesia", seats: 10, fee: 170000 },
  { name: "Bachelor of Respiratory Technology (B.RT)", short: "Respiratory Technology", slug: "respiratory-therapy", seats: 10, fee: 110000 },
  { name: "Bachelor of Physician Associates (B.PA)", short: "Physician Associates", slug: "physician-assistant", seats: 10, fee: 130000 },
  { name: "B.Sc Critical Care Technology", short: "Critical Care Technology", slug: "critical-care-technology", seats: 10, fee: 110000 },
  { name: "Bachelor of Emergency Medical Technologist (Paramedic)", short: "Emergency Medical Technologist", slug: "accident-emergency-care", seats: 10, fee: 110000 },
  { name: "Bachelor of Science in Health Information Management (B.Sc. HIM)", short: "Health Information Management", slug: "medical-record-science", seats: 15, fee: 60000 },
];

export const JKKN_PARAMEDICAL_SEATS = JKKN_PARAMEDICAL_COURSES.reduce((s, c) => s + c.seats, 0);
export const JKKN_PARAMEDICAL_FEE_MIN = Math.min(...JKKN_PARAMEDICAL_COURSES.map((c) => c.fee));
export const JKKN_PARAMEDICAL_FEE_MAX = Math.max(...JKKN_PARAMEDICAL_COURSES.map((c) => c.fee));
export const inr = (n: number) => "\u20b9" + n.toLocaleString("en-IN");
