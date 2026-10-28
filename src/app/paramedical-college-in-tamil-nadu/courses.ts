// JKKN's own paramedical (allied health) programmes, as the university lists them.
// Source: TNMGRMU "AHS Courses - Affiliated Colleges / Institutions 2025-26", entry for institution
// code 825 (J.K.K. Nattraja Dental College & Hospital, under which the university files every JKKN
// allied health programme). Seats are the sanctioned intake printed there; they sum to 82.
// B.Sc Radiotherapy Technology (3 seats) is on the list for existing students only and is not
// offered to new applicants, so it is not shown.
export const JKKN_PARAMEDICAL_COURSES: { name: string; slug: string; seats: number }[] = [
  { name: "B.Sc Cardiac Technology", slug: "cardiac-technology", seats: 7 },
  { name: "Bachelor of Dialysis Therapy Technology (B.DTT)", slug: "dialysis-technology", seats: 5 },
  { name: "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)", slug: "radiology-imaging-technology", seats: 5 },
  { name: "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)", slug: "operation-theatre-anaesthesia", seats: 10 },
  { name: "Bachelor of Respiratory Technology (B.RT)", slug: "respiratory-therapy", seats: 10 },
  { name: "Bachelor of Physician Associates (B.PA)", slug: "physician-assistant", seats: 10 },
  { name: "B.Sc Critical Care Technology", slug: "critical-care-technology", seats: 10 },
  { name: "Bachelor of Emergency Medical Technologist (Paramedic)", slug: "accident-emergency-care", seats: 10 },
  { name: "Bachelor of Science in Health Information Management (B.Sc. HIM)", slug: "medical-record-science", seats: 15 },
];

export const JKKN_PARAMEDICAL_SEATS = JKKN_PARAMEDICAL_COURSES.reduce((s, c) => s + c.seats, 0);
