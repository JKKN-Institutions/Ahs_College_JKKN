// DEP-34 — the CRM programme list for JKKN College of Allied Health Sciences.
//
// WHY THIS IS ITS OWN FILE AND NOT PART OF THE SERVER ACTION.
// A Next.js `'use server'` module may only export async functions. On the Arts build this array
// sat inside the action file, the build stripped it, and the page died at prerender with
// `TypeError: j.map is not a function` — while `tsc --noEmit` reported zero errors. Measured
// 2026-08-16. Plain data stays out of 'use server' files.
//
// Verified live against GET https://www.jkkn.ai/api/public/forms/jkkn-admission-2026 on
// 2026-08-16: these are exactly the 9 rows the CRM holds for this institution — none missing,
// none extra, none dead.
//
// THE LABELS WERE CHECKED, NOT GUESSED. The CRM stores these as abbreviations — BSC (CT),
// BSC (AECT), BSC (OTAT) — which no parent would recognise. Each was matched against the live
// title of its own page on ahs.jkkn.ac.in on 2026-08-16, and all nine map one-to-one:
//   BSC (CT)   -> /cardiac-technology            "BSc Cardiac Technology Colleges in Tamilnadu"
//   BSC (CCT)  -> /critical-care-technology      "BSc Critical Care Technology College in Tamilnadu"
//   BSC (PA)   -> /physician-assistant           "Physician Assistant Course in Tamilnadu"
//   BSC (DT)   -> /dialysis-technology           "B Sc Dialysis Technology Colleges in Tamilnadu"
//   BSC (AECT) -> /accident-emergency-care       "BSc Accident and Emergency Care Technology"
//   BSC (RT)   -> /respiratory-therapy           "BSc Respiratory Therapy Colleges in Tamilnadu"
//   BSC (OTAT) -> /operation-theatre-anaesthesia "BSc OT & Anaesthesia Technology College in TN"
//   BSC (MRS)  -> /medical-record-science        "BSc Medical Record Science Colleges in Tamilnadu"
//   BSC (RIT)  -> /radiology-imaging-technology  "Best Radiography Course in Tamilnadu"

export const AHS_INSTITUTION_ID = "9c1554e8-12a2-4b76-a9d6-8242bb05eba1"

export type AhsProgramme = { id: string; label: string }

// Ordered by measured demand (GSC, 2026-05-15..2026-08-13): /cardiac-technology carries 12,355
// impressions against 1,707 for /radiology-imaging-technology, so cardiac leads.
export const AHS_PROGRAMMES: ReadonlyArray<AhsProgramme> = [
  { id: "89bb449f-433d-4b1c-b45b-bafd3e0f4b87", label: "B.Sc Cardiac Technology" },
  { id: "f36335f6-5b96-4358-956e-981bf8393dff", label: "B.Sc Critical Care Technology" },
  { id: "8db907b8-8115-4f91-b95d-a64f1c007cdc", label: "B.Sc Physician Assistant" },
  { id: "b8175e9c-7d16-4eba-996c-59d54e18c5eb", label: "B.Sc Dialysis Technology" },
  { id: "d6662299-c40a-4da2-9099-2a2f7739f80b", label: "B.Sc Accident and Emergency Care Technology" },
  { id: "353c4c23-7d10-42d8-9e20-f43f66b4b12e", label: "B.Sc Respiratory Therapy" },
  { id: "c5ea2a50-343a-4560-a73e-28f3b6afae90", label: "B.Sc Operation Theatre and Anaesthesia Technology" },
  { id: "dd98ecbc-a166-463b-8a17-ebc2e26c2035", label: "B.Sc Medical Record Science" },
  { id: "ea7356c4-23ba-4ff5-aac2-04ad0555bccc", label: "B.Sc Radiology and Imaging Technology" },
]

export const VALID_AHS_PROGRAMME_IDS: ReadonlySet<string> = new Set(
  AHS_PROGRAMMES.map((p) => p.id)
)

// Pre-selects the dropdown on a programme page, so a parent reading the cardiac page does not
// have to pick cardiac again. Every AHS programme is a single distinct B.Sc — unlike nursing's
// five M.Sc rows or pharmacy's six M.Pharm rows — so every page has a correct default and none
// of these is a guess.
export const DEFAULT_PROGRAMME_BY_PAGE: Readonly<Record<string, string>> = {
  "cardiac-technology": "89bb449f-433d-4b1c-b45b-bafd3e0f4b87",
  "critical-care-technology": "f36335f6-5b96-4358-956e-981bf8393dff",
  "physician-assistant": "8db907b8-8115-4f91-b95d-a64f1c007cdc",
  "dialysis-technology": "b8175e9c-7d16-4eba-996c-59d54e18c5eb",
  "accident-emergency-care": "d6662299-c40a-4da2-9099-2a2f7739f80b",
  "respiratory-therapy": "353c4c23-7d10-42d8-9e20-f43f66b4b12e",
  "operation-theatre-anaesthesia": "c5ea2a50-343a-4560-a73e-28f3b6afae90",
  "medical-record-science": "dd98ecbc-a166-463b-8a17-ebc2e26c2035",
  "radiology-imaging-technology": "ea7356c4-23ba-4ff5-aac2-04ad0555bccc",
}
