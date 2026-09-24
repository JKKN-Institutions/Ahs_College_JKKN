// Every institution affiliated to The Tamil Nadu Dr. M.G.R. Medical University for at least one
// undergraduate allied health (paramedical) course that is still admitting, 2025-26.
//
// Source: TNMGRMU "AHS Courses - Affiliated Colleges / Institutions for the Academic Year 2025-26"
// (FINALAHSWEBSITEUPDATIONsep72026.pdf). Parsed 2026-09-24 by
// artefacts/keywords/ahs-paramedical-2026-09-24/ahs_list_parse.py + normalise.py in the SEO project:
// 184 printed records, serials contiguous; a course marked "Existing" / "Denied" (no fresh admission)
// is not counted; institution code 671 is printed twice and is one institution here.
//
// Names are the university's own spelling (first part of the printed address). "district" is filled
// only where it was checked by hand (Namakkal, Erode, Salem); every other row keeps its printed town.
// Counts on the page are derived from this array - never typed in.
//
// Not on this list by design: deemed universities (they run these courses under their own status),
// B.Sc Nursing and BPT (separate university lists).

export type AhsInstitution = {
  code: string;
  name: string;
  place: string;
  pin: string;
  gov: boolean;
  district: "" | "Namakkal" | "Erode" | "Salem";
  courses: string[];
  jkkn?: boolean;
};

export const AHS_LIST_SOURCE = {
  title: "The Tamil Nadu Dr. M.G.R. Medical University - AHS Courses, Affiliated Colleges / Institutions 2025-26",
  url: "https://www.tnmgrmu.ac.in/affiliation/affiliated-institutions/",
  year: "2025-26",
};

export const AHS_INSTITUTIONS_TN: AhsInstitution[] = [
  { code: "581", name: "Chengalpattu Medical College", place: "Chengalpattu", pin: "603001", gov: true, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "1072", name: "E.S.I.C. Medical College and Hospital", place: "Chennai", pin: "600078", gov: true, district: "", courses: ["Optometry", "Accident & Emergency", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "992", name: "Government Medical College", place: "Chennai", pin: "600002", gov: true, district: "", courses: ["Physician Assistant"] },
  { code: "820", name: "Govt. Kilpauk Medical College & Hospital", place: "Chennai", pin: "600010", gov: true, district: "", courses: ["Optometry", "Cardiac Tech", "Dialysis", "Radiography & Imaging", "Radiotherapy"] },
  { code: "465", name: "Govt. Stanley Medical College", place: "Chennai", pin: "600001", gov: true, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "MLT", "Neuro Electrophysiology", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "395", name: "Madras Medical College", place: "Chennai", pin: "600003", gov: true, district: "", courses: ["Audiology (BASLP)", "Cardiac Tech", "Perfusion", "Clinical Nutrition", "Dialysis", "Neuro Electrophysiology", "Radiography & Imaging", "Radiotherapy", "Respiratory Therapy"] },
  { code: "641", name: "Regional Institute of Ophthalmology", place: "Chennai", pin: "", gov: true, district: "", courses: ["Optometry"] },
  { code: "767", name: "Coimbatore Medical College & Hospital", place: "Coimbatore", pin: "641014", gov: true, district: "", courses: ["Cardiac Tech", "Dialysis", "Physician Assistant", "Radiography & Imaging", "Radiotherapy"] },
  { code: "981", name: "Government Medical College & Hospital", place: "Cuddalore", pin: "608002", gov: true, district: "", courses: ["MLT", "Radiography & Imaging"] },
  { code: "913", name: "Government Dharmapuri Medical College", place: "Dharmapuri", pin: "636701", gov: true, district: "", courses: ["Optometry", "OT & Anaesthesia"] },
  { code: "1073", name: "Government Medical College", place: "Dindigul", pin: "624003", gov: true, district: "", courses: ["MLT"] },
  { code: "1029", name: "Government Erode Medical College and Hospital", place: "Erode", pin: "638053", gov: true, district: "Erode", courses: ["Accident & Emergency", "Dialysis", "OT & Anaesthesia", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "769", name: "Govt. Kanyakumari Medical College & Hospital", place: "Kanyakumari", pin: "629201", gov: true, district: "", courses: ["Accident & Emergency", "Dialysis", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "998", name: "Government Medical College", place: "Karur", pin: "639004", gov: true, district: "", courses: ["MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "671", name: "NIEPMD - National Institute for Empowerment of Persons with Multiple Disabilities", place: "Kovalam, Chennai", pin: "", gov: true, district: "", courses: ["Audiology (BASLP)", "Prosthetics & Orthotics"] },
  { code: "766", name: "Madurai Medical College & Hospital", place: "Madurai", pin: "625020", gov: true, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Perfusion", "Dialysis", "MLT", "Neuro Electrophysiology", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Radiotherapy", "Respiratory Therapy"] },
  { code: "1071", name: "Government Medical College", place: "Nagapattinam", pin: "611108", gov: true, district: "", courses: ["MLT"] },
  { code: "990", name: "Government Medical College & Hospital", place: "Namakkal", pin: "637001", gov: true, district: "Namakkal", courses: ["Critical Care", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "768", name: "Govt Medical College & Hospital", place: "Pudukottai", pin: "622004", gov: true, district: "", courses: ["Accident & Emergency", "Critical Care", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "761", name: "Govt.Mohan Kumaramangalam Medical College", place: "Salem", pin: "636030", gov: true, district: "Salem", courses: ["Accident & Emergency", "Cardiac Tech", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "764", name: "Thanjavur Medical College & Hospital", place: "Thanjavur", pin: "613004", gov: true, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "MLT", "Neuro Electrophysiology", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Radiotherapy", "Respiratory Therapy"] },
  { code: "1031", name: "Government Theni Medical College", place: "Theni", pin: "625512", gov: true, district: "", courses: ["MLT", "Radiography & Imaging"] },
  { code: "1036", name: "Government Thiruvannamalai Medical College", place: "Thiruvannamalai", pin: "606604", gov: true, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "762", name: "Thiruvarur Medical College", place: "Thiruvarur", pin: "613701", gov: true, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "772", name: "Govt. Thoothukudi Medical College & Hospital", place: "Thoothukudi", pin: "628001", gov: true, district: "", courses: ["MLT", "OT & Anaesthesia", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "765", name: "KAP Viswanatham Govt. Medical College & Hospital", place: "Tiruchirappalli", pin: "620001", gov: true, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "763", name: "Tirunelveli Medical College & Hospital", place: "Tirunelveli", pin: "627011", gov: true, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "1081", name: "Government Medical College", place: "Tiruppur", pin: "641604", gov: true, district: "", courses: ["MLT", "Radiography & Imaging"] },
  { code: "770", name: "Govt. Vellore Medical College & Hospital", place: "Vellore", pin: "632011", gov: true, district: "", courses: ["Accident & Emergency", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "771", name: "Govt. Villupuram Medical College & Hospital", place: "Villupuram", pin: "605601", gov: true, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Critical Care", "Dialysis", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "1030", name: "Government Medical College", place: "Virudhunagar", pin: "626002", gov: true, district: "", courses: ["Radiography & Imaging"] },
  { code: "840", name: "Annamalaiyar Paramedical College", place: "Aanaipiranthan", pin: "", gov: false, district: "", courses: ["MLT", "Radiography & Imaging"] },
  { code: "633", name: "Dr.Jeyasekharan Medical Trust College of Allied Health Sciences", place: "anyakumari", pin: "629003", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "528", name: "R.K. Paramedical College", place: "Attur", pin: "636102", gov: false, district: "Salem", courses: ["Physician Assistant"] },
  { code: "747", name: "Annai J K K Sampoorani Ammal College Of Allied Health Sciences", place: "B. Komarapalayam", pin: "638183", gov: false, district: "Namakkal", courses: ["Cardiac Tech", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "584", name: "Aarthi Scans Pvt. Ltd", place: "Chennai", pin: "600026", gov: false, district: "", courses: ["Radiography & Imaging"] },
  { code: "371", name: "Apollo Hospitals Enterprises", place: "Chennai", pin: "600095", gov: false, district: "", courses: ["Critical Care", "Dialysis", "MLT", "Nuclear Medicine", "OT & Anaesthesia", "Physician Assistant", "Radiotherapy"] },
  { code: "593", name: "C.S.I. Kalyani College of Allied Health Sciences", place: "Chennai", pin: "600004", gov: false, district: "", courses: ["Optometry", "MLT", "Radiography & Imaging"] },
  { code: "439", name: "Cancer Institute (WIA)", place: "Chennai", pin: "600020", gov: false, district: "", courses: ["Nuclear Medicine", "OT & Anaesthesia", "Radiography & Imaging", "Radiotherapy"] },
  { code: "381", name: "DR.Kamakshi Institute of Medical Sciences & Research", place: "Chennai", pin: "600100", gov: false, district: "", courses: ["MLT", "Radiography & Imaging", "Radiotherapy"] },
  { code: "451", name: "Dr.Mohan's Diabetes Specialities Centre and Dr.Mohan's Diabetes Education Academy No.68", place: "Chennai", pin: "600086", gov: false, district: "", courses: ["MLT"] },
  { code: "382", name: "Global Hospitals & Health City", place: "Chennai", pin: "600100", gov: false, district: "", courses: ["Accident & Emergency", "Critical Care", "Dialysis", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "689", name: "Hindu Mission Hospital", place: "Chennai", pin: "600045", gov: false, district: "", courses: ["Optometry", "Cardiac Tech", "Perfusion", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "364", name: "India Heart Foundation", place: "Chennai", pin: "600035", gov: false, district: "", courses: ["Cardiac Tech", "Critical Care", "Physician Assistant"] },
  { code: "363", name: "International Centre For Cardio- Thoracic & Vascular Diseases", place: "Chennai", pin: "600040", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "Physician Assistant"] },
  { code: "533", name: "Ishwar Institute Of Prosthetics & Orthotics", place: "Chennai", pin: "600040", gov: false, district: "", courses: ["Prosthetics & Orthotics"] },
  { code: "373", name: "M.N.College of Optometry", place: "Chennai", pin: "600021", gov: false, district: "", courses: ["Optometry"] },
  { code: "383", name: "Medical Research Foundation", place: "Chennai", pin: "600016", gov: false, district: "", courses: ["MLT"] },
  { code: "561", name: "Mehta Hospitals Pvt. Ltd", place: "Chennai", pin: "600031", gov: false, district: "", courses: ["Accident & Emergency", "OT & Anaesthesia"] },
  { code: "367", name: "Merf-Institute of Speech And Hearing (P) Ltd.", place: "Chennai", pin: "600028", gov: false, district: "", courses: ["Audiology (BASLP)"] },
  { code: "971", name: "Panimalar College of Allied Health Sciences", place: "Chennai", pin: "600123", gov: false, district: "", courses: ["Optometry", "Accident & Emergency", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "774", name: "Sri Jayendra Saraswathi Institute of Optometry", place: "Chennai", pin: "600075", gov: false, district: "", courses: ["Optometry"] },
  { code: "696", name: "Tagore Medical College And Hospitals", place: "Chennai", pin: "600127", gov: false, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "637", name: "V.R.R Institute Of Paramedical Sciences", place: "Chennai", pin: "600056", gov: false, district: "", courses: ["Radiography & Imaging"] },
  { code: "424", name: "Vasan Institute Of Ophthalmology & Research", place: "Chennai", pin: "600033", gov: false, district: "", courses: ["Optometry"] },
  { code: "476", name: "Veecare College Of Health Sciences No.1/5", place: "Chennai", pin: "600077", gov: false, district: "", courses: ["Accident & Emergency", "Dialysis", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "441", name: "Vijaya Educational Academy", place: "Chennai", pin: "600026", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "Neuro Electrophysiology", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "812", name: "Adithya Institute of Health Science SF No 348/1", place: "Coimbatore", pin: "641107", gov: false, district: "", courses: ["Perfusion", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "853", name: "BSD College of Allied Health Sciences", place: "Coimbatore", pin: "641110", gov: false, district: "", courses: ["Cardiac Tech", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "1084", name: "Cheran’s College of Allied Health Science", place: "Coimbatore", pin: "641039", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "368", name: "G. Kuppuswamy Naidu Memorial Hospital", place: "Coimbatore", pin: "641037", gov: false, district: "", courses: ["Cardiac Tech", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "372", name: "G.R. Hospital", place: "Coimbatore", pin: "641208", gov: false, district: "", courses: ["OT & Anaesthesia"] },
  { code: "488", name: "Ganga College Of NursingS.F.No.442", place: "Coimbatore", pin: "641022", gov: false, district: "", courses: ["Accident & Emergency", "Critical Care", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "722", name: "Gem Institute of Paramedical Sciences 4/146", place: "Coimbatore", pin: "641016", gov: false, district: "", courses: ["OT & Anaesthesia", "Physician Assistant"] },
  { code: "824", name: "Hindusthan College Of Health Science Udayampalayam Road", place: "Coimbatore", pin: "641028", gov: false, district: "", courses: ["Optometry", "Cardiac Tech", "Perfusion", "OT & Anaesthesia", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "374", name: "K.G. Hospital & Post Graduate Medical Institute", place: "Coimbatore", pin: "641018", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "724", name: "Karpagam Faculty of Medical Sciences & Research", place: "Coimbatore", pin: "641032", gov: false, district: "", courses: ["Optometry", "Cardiac Tech", "Perfusion", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "393", name: "Kongunadu Institute of Allied Health SCiences", place: "Coimbatore", pin: "641012", gov: false, district: "", courses: ["Cardiac Tech", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "461", name: "Kovai Medical Center And Hospital Limited", place: "Coimbatore", pin: "641014", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Dialysis", "MLT", "Neuro Electrophysiology", "Nuclear Medicine", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Radiotherapy", "Respiratory Therapy"] },
  { code: "827", name: "Muthu College of Allied Health Sciences", place: "Coimbatore", pin: "641005", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "894", name: "Nehru Institute of Health Sciences", place: "Coimbatore", pin: "641105", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "697", name: "NG Institute of Paramedical Science", place: "Coimbatore", pin: "641005", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "642", name: "P.P.G. Institute Of Allied Health Science", place: "Coimbatore", pin: "641035", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "Clinical Nutrition", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Radiotherapy", "Respiratory Therapy"] },
  { code: "446", name: "PSG Institute of Medical Sciences and Research", place: "Coimbatore", pin: "641004", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "MLT", "Medical Record Science", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "829", name: "Royal College of Paramedical Science Marappalam", place: "Coimbatore", pin: "641105", gov: false, district: "", courses: ["Cardiac Tech", "MLT", "Physician Assistant"] },
  { code: "699", name: "RVS Padmavathy College of Allied Health Sciences", place: "Coimbatore", pin: "641402", gov: false, district: "", courses: ["Cardiac Tech", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "817", name: "SNS College of Allied Health Science", place: "Coimbatore", pin: "641005", gov: false, district: "", courses: ["Optometry", "Cardiac Tech", "Perfusion", "Dialysis", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "387", name: "Sree Abirami Hospital Pvt Ltd", place: "Coimbatore", pin: "641024", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "1078", name: "Sri Lakshmi College of Allied Health Sciences", place: "Coimbatore", pin: "641034", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "MLT", "OT & Anaesthesia"] },
  { code: "719", name: "Sri Lakshmi Medical Centre & Hospital", place: "Coimbatore", pin: "641034", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "Dialysis", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "640", name: "Sri Ramakrishna Hospital", place: "Coimbatore", pin: "641044", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "Neuro Electrophysiology", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Radiotherapy", "Respiratory Therapy"] },
  { code: "748", name: "United College Of Medical Sciences G.Koundapalayam", place: "Coimbatore", pin: "641020", gov: false, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Perfusion", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "391", name: "V.G. Institute Of Paramedical Sciences", place: "Coimbatore", pin: "641034", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "847", name: "Vasan Institute of Optometry Kurudampalayam Oorachi", place: "Coimbatore", pin: "641017", gov: false, district: "", courses: ["Optometry"] },
  { code: "711", name: "Womens Center and Hospitals Pvt. Limited", place: "Coimbatore", pin: "641043", gov: false, district: "", courses: ["OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "973", name: "Study World College of Allied Health Sciences", place: "Coimbtore", pin: "641048", gov: false, district: "", courses: ["Cardiac Tech", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "650", name: "Sri Vijay Vidyalaya College Of Nursing D.N.C. Compound", place: "Dharmapuri", pin: "636701", gov: false, district: "", courses: ["Accident & Emergency", "Critical Care", "Dialysis", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "690", name: "Sri Vijay Vidyalaya College of Pharmacy", place: "Dharmapuri", pin: "636701", gov: false, district: "", courses: ["Optometry", "Cardiac Tech", "Perfusion", "MLT", "Medical Record Science", "OT & Anaesthesia"] },
  { code: "845", name: "Dindigul Shifa College of Health Science", place: "Dindigul", pin: "624004", gov: false, district: "", courses: ["MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "1025", name: "G.T.N Institute of Paramedical and Allied Health Science Old Karur Road", place: "Dindigul", pin: "624005", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "844", name: "Jainee College of Nursing Dindigul Theni Main Road", place: "Dindigul", pin: "624303", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Critical Care", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "899", name: "NPR College of Nursing & Research Institute -Allied Health Science", place: "Dindigul", pin: "624401", gov: false, district: "", courses: ["Cardiac Tech", "MLT", "OT & Anaesthesia"] },
  { code: "377", name: "Surabi School Of Nursing", place: "Dindigul", pin: "624622", gov: false, district: "", courses: ["MLT", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "644", name: "Swamy Vivekanandha College Of Pharmacy", place: "Elayampalayam, Tiruchengode", pin: "637205", gov: false, district: "Namakkal", courses: ["Cardiac Tech", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "606", name: "Vivekanandha Medical Care Hospital Tiruchengodu", place: "Elayampalayam, Tiruchengode", pin: "637205", gov: false, district: "Namakkal", courses: ["Accident & Emergency", "Cardiac Tech", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "736", name: "Acchutha Institute Of Optometry", place: "Erode", pin: "638009", gov: false, district: "Erode", courses: ["Optometry"] },
  { code: "969", name: "Global Institutions", place: "Erode", pin: "638004", gov: false, district: "Erode", courses: ["Optometry", "Physician Assistant"] },
  { code: "746", name: "JKK Munirajah Institute of Health Sciences College of Pharmacy", place: "Erode", pin: "638506", gov: false, district: "Erode", courses: ["Accident & Emergency", "Cardiac Tech", "OT & Anaesthesia"] },
  { code: "749", name: "Kalyani Kidney Care Centre", place: "Erode", pin: "638011", gov: false, district: "Erode", courses: ["Dialysis", "OT & Anaesthesia"] },
  { code: "698", name: "Nandha Academy Of Allied Health Sciences", place: "Erode", pin: "638052", gov: false, district: "Erode", courses: ["Cardiac Tech", "Perfusion", "Dialysis", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "665", name: "Nandha College Of Allied Health Sciences", place: "Erode", pin: "638052", gov: false, district: "Erode", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Dialysis", "MLT", "Neuro Electrophysiology", "OT & Anaesthesia", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "354", name: "MMM College of Health Sciences", place: "ge Nagar Mogappair East Chennai", pin: "600107", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "Dialysis", "MLT", "Medical Sociology", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "714", name: "Shree Venkateshwara College Of Paramedical Sciences", place: "Gubichettipalayam", pin: "638455", gov: false, district: "Erode", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Perfusion", "Clinical Nutrition", "Dialysis", "Fitness & Lifestyle", "MLT", "Medical Record Science", "Neuro Electrophysiology", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "704", name: "Santhi Paramedical Institute", place: "Hosur", pin: "635126", gov: false, district: "", courses: ["Accident & Emergency", "MLT", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "1024", name: "St.Peter’s College of Allied Health Sciences & Research Institute", place: "Hosur", pin: "635130", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "846", name: "White Memorial Collelge of Allied Health Science", place: "K.K.", pin: "629177", gov: false, district: "", courses: ["Accident & Emergency", "Medical Record Science", "OT & Anaesthesia"] },
  { code: "490", name: "Karpaga Vinayaga Institute of Medical Sciences & Research Centre", place: "Kanchipuram", pin: "603308", gov: false, district: "", courses: ["MLT", "Medical Record Science", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "694", name: "Global College of Nursing", place: "Kanyakumari", pin: "629165", gov: false, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "MLT", "Medical Record Science", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "639", name: "Grace College of Allied Health Sciences", place: "Kanyakumari", pin: "629163", gov: false, district: "", courses: ["Optometry", "Critical Care", "Dialysis", "MLT", "Medical Record Science", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "648", name: "Kanyakumari Medical Mission C.S.I Hospital", place: "Kanyakumari", pin: "629802", gov: false, district: "", courses: ["OT & Anaesthesia", "Radiography & Imaging", "Radiotherapy"] },
  { code: "710", name: "Maria College of Allied Health Sciences Thottavaram", place: "Kanyakumari", pin: "629177", gov: false, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "831", name: "Siva Hospital", place: "Kanyakumari", pin: "629501", gov: false, district: "", courses: ["OT & Anaesthesia"] },
  { code: "1002", name: "Bethlahem Institute of Medical Sciences", place: "Karungal", pin: "629157", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "OT & Anaesthesia"] },
  { code: "514", name: "Surabi Institute of Medical Science", place: "Karur", pin: "639118", gov: false, district: "", courses: ["MLT", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "790", name: "VP. College of Paramedical Sciences", place: "Katpadi, Vellore", pin: "", gov: false, district: "", courses: ["MLT", "Radiography & Imaging"] },
  { code: "1061", name: "PSV College of Allied Health Science", place: "Kirshnagiri", pin: "635108", gov: false, district: "", courses: ["Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "558", name: "TCR Hospital & Charitable Trust", place: "Krishnagiri", pin: "635001", gov: false, district: "", courses: ["Critical Care", "OT & Anaesthesia"] },
  { code: "1077", name: "Sree Mookambika Institute of Medical Sciences", place: "Kulasekharam", pin: "629161", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Dialysis", "OT & Anaesthesia", "Radiography & Imaging", "Radiotherapy"] },
  { code: "825", name: "J.K.K. Nattraja Dental College & Hospital (JKKN College of Allied Health Sciences)", place: "Kumarapalayam", pin: "638183", gov: false, district: "Namakkal", courses: ["Accident & Emergency", "Cardiac Tech", "Critical Care", "Dialysis", "Medical Record Science", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"], jkkn: true },
  { code: "675", name: "Glanis Institute of Allied Health SciencesGlanis Place", place: "Madurai", pin: "625704", gov: false, district: "", courses: ["Accident & Emergency", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "776", name: "Guru Hospital", place: "Madurai", pin: "625107", gov: false, district: "", courses: ["OT & Anaesthesia", "Physician Assistant"] },
  { code: "449", name: "Meenakshi College of Allied Health Sciences", place: "Madurai", pin: "625105", gov: false, district: "", courses: ["Accident & Emergency", "MLT", "Medical Record Science"] },
  { code: "706", name: "Preethi Institute of Health Sciences", place: "Madurai", pin: "625107", gov: false, district: "", courses: ["Accident & Emergency", "Critical Care", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "444", name: "Vadamalayan Institute Of Medical And Allied Health Sciences", place: "Madurai", pin: "625002", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Dialysis", "Nuclear Medicine", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "635", name: "Velammal Medical College Hospital & Research Institute", place: "Madurai", pin: "625009", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "450", name: "Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research", place: "Melmaruvathur", pin: "603319", gov: false, district: "", courses: ["Accident & Emergency", "Critical Care", "Dialysis", "Medical Record Science", "OT & Anaesthesia"] },
  { code: "695", name: "Kauvery Hospital", place: "Mylapore Chennai", pin: "600004", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "868", name: "Sir Issac Newton College of Physiotherapy – Institute of Medical Science", place: "Nagapattinam", pin: "611102", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Dialysis", "OT & Anaesthesia"] },
  { code: "437", name: "J.M. Charitable Trust", place: "Nagercoil", pin: "629003", gov: false, district: "", courses: ["Optometry"] },
  { code: "473", name: "Vivek Institute Of Laboratory Medicine", place: "Nagercoil", pin: "629003", gov: false, district: "", courses: ["MLT"] },
  { code: "851", name: "Jayamadhi College of Allied Health Sciences", place: "Namakkal", pin: "637017", gov: false, district: "Namakkal", courses: ["Cardiac Tech", "Critical Care", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "961", name: "K.S. Rangaswamy College of Allied Health Science", place: "Namakkal", pin: "637215", gov: false, district: "Namakkal", courses: ["Cardiac Tech", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "702", name: "Paavai Institute Of Allied Health Sciences", place: "Namakkal", pin: "637018", gov: false, district: "Namakkal", courses: ["Cardiac Tech", "Perfusion", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "712", name: "PGP Institute Of Allied Health Sciences", place: "Namakkal", pin: "637207", gov: false, district: "Namakkal", courses: ["Cardiac Tech", "Critical Care", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "1083", name: "Sengunthar College of Allied Health Sciences", place: "Namakkal", pin: "637205", gov: false, district: "Namakkal", courses: ["MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "795", name: "Thangam Hospital", place: "Namakkal", pin: "637001", gov: false, district: "Namakkal", courses: ["Critical Care", "MLT", "Physician Assistant"] },
  { code: "720", name: "Excel Institute Of Health Science", place: "Nammakkal", pin: "637303", gov: false, district: "Namakkal", courses: ["MLT", "Radiography & Imaging"] },
  { code: "980", name: "Indira College of Allied Health Sciences", place: "Pandur, Thiruvallur", pin: "631203", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "OT & Anaesthesia", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "700", name: "Dhanalakshmi Srinivasan Medical College And Hospital", place: "Peramballur", pin: "621113", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "885", name: "Mother Teresa Institute of Paramedical & Allied Health Science", place: "Pudukkottai", pin: "622102", gov: false, district: "", courses: ["OT & Anaesthesia", "Physician Assistant"] },
  { code: "823", name: "Scudder Institute of Allied Health Sciences", place: "Ranipet", pin: "632401", gov: false, district: "", courses: ["MLT", "Radiography & Imaging"] },
  { code: "972", name: "Annapoorna Medical College & Hospital", place: "Salem", pin: "636308", gov: false, district: "Salem", courses: ["Accident & Emergency", "Critical Care", "MLT", "Medical Record Science", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "708", name: "Dharan Institute Of Health Sciences", place: "Salem", pin: "636201", gov: false, district: "Salem", courses: ["Cardiac Tech", "Critical Care", "Dialysis", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "895", name: "Mahendra College of Allied health Sciences", place: "Salem", pin: "636106", gov: false, district: "Salem", courses: ["Accident & Emergency", "Cardiac Tech", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "626", name: "Salem Polyclinic", place: "Salem", pin: "636007", gov: false, district: "Salem", courses: ["Accident & Emergency", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "744", name: "Shanmuga College of Allied Health Science", place: "Salem", pin: "636007", gov: false, district: "Salem", courses: ["OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Radiotherapy", "Respiratory Therapy"] },
  { code: "361", name: "Sri Gokulam Hospital", place: "Salem", pin: "636004", gov: false, district: "Salem", courses: ["Critical Care", "MLT", "Physician Assistant", "Radiography & Imaging"] },
  { code: "848", name: "Sri Shanmugha Institute of Allied Health Science", place: "Salem", pin: "637304", gov: false, district: "Salem", courses: ["Cardiac Tech", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "750", name: "Sri Shanmugha Institute of Medical Science And Research", place: "Salem", pin: "637304", gov: false, district: "Salem", courses: ["Optometry", "Cardiac Tech", "Perfusion", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "818", name: "Vasan Institute of Ophthalmology & Research", place: "Salem", pin: "636004", gov: false, district: "Salem", courses: ["Optometry"] },
  { code: "715", name: "N.R. Thiagarajan Paramedical College No. 380", place: "Theni", pin: "625531", gov: false, district: "", courses: ["Cardiac Tech", "Critical Care", "Dialysis", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "629", name: "Thiravium Para Medical College", place: "Theni", pin: "625605", gov: false, district: "", courses: ["Radiography & Imaging"] },
  { code: "357", name: "Dhanvantri College Of Nursing", place: "Tiruchengode", pin: "", gov: false, district: "Namakkal", courses: ["Accident & Emergency", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "731", name: "Shri Indra Ganesan Institute Of Medical Science", place: "Tiruchirapalli", pin: "620012", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "701", name: "Srinivasan Institute Of Medical Sciences", place: "Tiruchirapalli", pin: "621112", gov: false, district: "", courses: ["Optometry", "Perfusion", "Dialysis", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "898", name: "Rajas Institute of Allied Health Sciences (Selvam Educational & Charitable Trust)", place: "Tirunelveli", pin: "627116", gov: false, district: "", courses: ["Cardiac Tech", "OT & Anaesthesia"] },
  { code: "854", name: "St. Mariam College of Allied Health Science", place: "Tirunelveli", pin: "627853", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "832", name: "St. Mary's College of Health Science Sacred Heart Convent Near Rajapuram Colony Thenpothai", place: "Tirunelveli Tamil Nadu", pin: "627807", gov: false, district: "", courses: ["Cardiac Tech", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "830", name: "AMC College Of Allied Health Sciences", place: "Tirupur", pin: "641602", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "500", name: "Revathi College of Paramedical Sciences", place: "Tirupur", pin: "641603", gov: false, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Perfusion", "Clinical Nutrition", "Critical Care", "Dialysis", "Fitness & Lifestyle", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "632", name: "Sri Kumaran Institute of Paramedical Science", place: "Tirupur", pin: "641602", gov: false, district: "", courses: ["Accident & Emergency", "Critical Care"] },
  { code: "1026", name: "Arunai Paramedical College", place: "Tiruvannamalai", pin: "606603", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging", "Respiratory Therapy"] },
  { code: "554", name: "Doctor's Institute of Laboratory Sciences", place: "Trichy", pin: "620017", gov: false, district: "", courses: ["MLT"] },
  { code: "41", name: "Institute of Ophthalmology", place: "Trichy", pin: "620001", gov: false, district: "", courses: ["Optometry"] },
  { code: "356", name: "Kaveri Medical Centre and Hospital", place: "Trichy", pin: "620017", gov: false, district: "", courses: ["Cardiac Tech", "Perfusion", "Dialysis", "Physician Assistant"] },
  { code: "355", name: "KMC Speciality Hospitals (I) Ltd.", place: "Trichy", pin: "620001", gov: false, district: "", courses: ["Accident & Emergency", "Clinical Nutrition", "MLT", "Radiography & Imaging"] },
  { code: "900", name: "Krishna College of Paramedical & Allied Health Science", place: "Trichy", pin: "621105", gov: false, district: "", courses: ["Optometry", "Radiography & Imaging"] },
  { code: "986", name: "Mahalakshmi College of Allied Health Science", place: "Trichy", pin: "621213", gov: false, district: "", courses: ["Accident & Emergency", "Cardiac Tech", "MLT", "OT & Anaesthesia", "Physician Assistant"] },
  { code: "709", name: "Trichy SRM Medical College Hospital & Research Centre", place: "Trichy", pin: "621105", gov: false, district: "", courses: ["Perfusion", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "621", name: "Sundaram Arulrhai Hospital", place: "Tuticorin Di", pin: "628002", gov: false, district: "", courses: ["Physician Assistant"] },
  { code: "498", name: "Arun Educational Trust", place: "Vellore", pin: "632001", gov: false, district: "", courses: ["Optometry", "Accident & Emergency", "Cardiac Tech", "Clinical Nutrition", "Dialysis", "MLT", "Medical Record Science", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "436", name: "Christian Medical College", place: "Vellore", pin: "632002", gov: false, district: "", courses: ["Audiology (BASLP)", "Optometry", "Accident & Emergency", "Cardiac Tech", "Perfusion", "Critical Care", "Dialysis", "MLT", "Medical Record Science", "Medical Sociology", "Neuro Electrophysiology", "Nuclear Medicine", "OT & Anaesthesia", "Radiography & Imaging", "Radiotherapy", "Respiratory Therapy", "Prosthetics & Orthotics"] },
  { code: "821", name: "Prana Institute Of Allied Medical Science Kinginiamman Koil Stop", place: "Vellore", pin: "632104", gov: false, district: "", courses: ["Accident & Emergency", "Critical Care", "Dialysis", "MLT", "OT & Anaesthesia", "Radiography & Imaging"] },
  { code: "608", name: "Sandhya College of Health Sciences", place: "Vellore", pin: "632009", gov: false, district: "", courses: ["Accident & Emergency", "MLT", "Medical Record Science", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "442", name: "Schieffelin Institute Of Health - Research Leprosy Centre", place: "Vellore", pin: "632106", gov: false, district: "", courses: ["Optometry", "MLT", "Medical Record Science", "Medical Sociology", "Physician Assistant", "Radiography & Imaging"] },
  { code: "423", name: "Sri Sakthi Amma Institute Of Allied Health Sciences", place: "Vellore", pin: "632055", gov: false, district: "", courses: ["Cardiac Tech", "Critical Care", "Dialysis", "Medical Record Science", "OT & Anaesthesia", "Physician Assistant", "Radiography & Imaging"] },
  { code: "963", name: "St.John's College of Medical Sciences", place: "Vellore", pin: "632011", gov: false, district: "", courses: ["Accident & Emergency", "Dialysis", "Radiography & Imaging"] },
];

export const AHS_TN_TOTAL = AHS_INSTITUTIONS_TN.length;
export const AHS_TN_GOVT = AHS_INSTITUTIONS_TN.filter((i) => i.gov);
export const AHS_TN_SELF_COUNT = AHS_TN_TOTAL - AHS_TN_GOVT.length;

/** Institutions offering each course, most common first. */
export const AHS_TN_COURSE_COUNTS: { course: string; institutions: number }[] = Object.entries(
  AHS_INSTITUTIONS_TN.reduce<Record<string, number>>((acc, i) => {
    for (const c of i.courses) acc[c] = (acc[c] ?? 0) + 1;
    return acc;
  }, {})
)
  .map(([course, institutions]) => ({ course, institutions }))
  .sort((a, b) => b.institutions - a.institutions);

export const ahsInDistrict = (d: "Namakkal" | "Erode" | "Salem") => AHS_INSTITUTIONS_TN.filter((i) => i.district === d);
