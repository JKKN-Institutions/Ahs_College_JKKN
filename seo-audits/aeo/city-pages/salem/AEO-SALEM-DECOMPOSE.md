# AEO Task Decomposition — Salem City Page
# JKKN College of Allied Health Sciences

> **Document Type:** Developer Task Cards
> **Site:** https://ahs.jkkn.ac.in/salem/
> **Date:** 2026-03-28
> **Total Tasks:** 14
> **Companion Spec:** `seo-audits/aeo/city-pages/salem/AEO-SALEM-SPEC.md`
> **Implementation Plan:** `seo-audits/aeo/city-pages/salem/AEO-SALEM-PLAN.md`

---

## Task Index

| Task ID | Tier | Summary | File | AEO Impact |
|---------|------|---------|------|-----------|
| TASK-SALEM-01 | 0 | Convert page.tsx from CSR to SSR — extract FAQ state | page.tsx + new FAQAccordion.tsx | +12 pts |
| TASK-SALEM-02 | 0 | Fix 5 wrong distance instances (45 km → ~58 km) | page.tsx | +5 pts |
| TASK-SALEM-03 | 0 | Fix title tag (72 chars → 50 chars) | layout.tsx | +3 pts |
| TASK-SALEM-04 | 0 | Fix meta description (158+ chars → 153 chars) | layout.tsx | +2 pts |
| TASK-SALEM-05 | 0 | Fix cross-city distances in ExploreCitiesSection | page.tsx | +2 pts |
| TASK-SALEM-06 | 1 | Add Course JSON-LD schema for 9 programmes | layout.tsx | +6 pts |
| TASK-SALEM-07 | 1 | Add HowTo JSON-LD schema for admission process | layout.tsx | +3 pts |
| TASK-SALEM-08 | 1 | Add paragraph snippet block (Format 1) | page.tsx | +4 pts |
| TASK-SALEM-09 | 1 | Enhance WhyChooseSection with list snippet (Format 2) | page.tsx | +3 pts |
| TASK-SALEM-10 | 1 | Add HowTo snippet block to HowToReachSection (Format 3) | page.tsx | +2 pts |
| TASK-SALEM-11 | 2 | Add 5 Salem-specific FAQ items | page.tsx | +6 pts |
| TASK-SALEM-12 | 2 | Sync FAQPage schema with 16-question FAQ | layout.tsx | +3 pts |
| TASK-SALEM-13 | 2 | Add AI Overview citability blocks (5 static blocks) | page.tsx | +4 pts |
| TASK-SALEM-14 | 2 | Add cross-city internal links with correct distances | page.tsx | +2 pts |

---

## TIER 0 TASKS — Critical Fixes (Deploy First)

---

### TASK-SALEM-01
**Tier:** 0 — Critical
**File:** `src/app/salem/page.tsx` (all 854 lines) + NEW `src/app/salem/FAQAccordion.tsx`
**Dependencies:** None — this must be the first task deployed
**AEO Impact:** +12 points (crawlability dimension: 25 → 80)

**Problem:**
- Line 1 of `page.tsx`: `"use client"` — makes the entire page a Client Component
- FAQ accordion uses `useState<number | null>(0)` (line 758) — JavaScript required to show answers
- Googlebot first-pass HTML misses all FAQ answers except the first one (which is pre-opened)
- Speakable schema references `.faq-answer` elements that are absent from initial HTML for items 2–11

**Solution:**
Remove `"use client"` from `page.tsx`. Extract only the FAQ interactive state into a new `FAQAccordion.tsx` client component. All other sections become server-rendered.

**Step 1 — Create `FAQAccordion.tsx` (new file):**

```tsx
// src/app/salem/FAQAccordion.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="text-left flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-colors ${
            open === i ? "border-[#7cb983]" : "border-gray-200"
          } bg-white`}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-900 text-sm pr-4">
              {faq.q}
            </span>
            {open === i ? (
              <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </button>
          {/* Always render answer in DOM for SSR/SEO — CSS controls visibility */}
          <div
            className={`faq-answer snippet-answer px-6 pb-5 text-sm text-gray-500 leading-relaxed ${
              open === i ? "block" : "hidden"
            }`}
          >
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}
```

**Note on `hidden` vs `AnimatePresence`:** Using Tailwind's `hidden` class (CSS `display: none`) instead of React conditional rendering (`{open === i && <div>...</div>`) means the answer text IS present in the HTML DOM — it is simply hidden visually. Googlebot renders the full DOM and indexes `display: none` content. This is the key fix.

**Step 2 — Modify `page.tsx`:**

Remove line 1: `"use client";`

Remove lines 3–4 (the `useState` import — it is now only in FAQAccordion.tsx):
```tsx
// REMOVE:
import { useState } from "react";
```

Update the imports to remove `ChevronDown`, `ChevronUp` from the Lucide import on line 8 (they move to FAQAccordion.tsx):
```tsx
// CURRENT line 8:
import { MapPin, ChevronDown, ChevronUp, GraduationCap, ... } from "lucide-react";

// NEW line 8 (remove ChevronDown, ChevronUp):
import { MapPin, GraduationCap, Phone, TrendingUp, Building2, GitBranch, Target, Globe, Bus, Activity, Microscope, HeartPulse, Droplet, ShieldCheck, Wind, Stethoscope, Heart, FileText, Ambulance, Map, Train, Plane, Home, BookOpen, Trophy, Wifi, CheckCircle } from "lucide-react";
```

Add import for the new component after all existing imports:
```tsx
import { FAQAccordion } from "./FAQAccordion";
```

**Step 3 — Update FAQSection in page.tsx:**

Replace lines 710–803 (entire `FAQSection` function) with:

```tsx
function FAQSection() {
  const faqs = [
    // ... (keep all 11 existing faq objects, plus the 5 new ones added in TASK-SALEM-11)
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Allied Health Sciences College in Salem — Your Questions Answered
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
```

**Testing:**
- Run `npm run build` — confirm no TypeScript or build errors
- Open browser DevTools → Elements panel → search for FAQ answer text in DOM — should be present in HTML even when accordion is closed
- Run `View Source` in browser — FAQ answer text should be visible in raw HTML
- Test accordion open/close interaction on desktop and mobile (375px)
- Check browser console for hydration errors — should be zero

---

### TASK-SALEM-02
**Tier:** 0 — Critical
**File:** `src/app/salem/page.tsx`
**Dependencies:** None (can be done simultaneously with TASK-SALEM-01)
**AEO Impact:** +5 points (data accuracy, trust signals)

**Problem:** The verified distance from Salem to JKKN campus is ~58 km via NH-544 [VERIFIED]. The page shows incorrect values in 5 separate locations.

**All instances to fix:**

| Line | Current Text | Corrected Text |
|------|-------------|----------------|
| 94 | `{ value: "45km", label: "FROM SALEM" }` | `{ value: "~58km", label: "FROM SALEM" }` |
| 160–161 | `<span className="text-5xl ...">45</span><span ...>km</span>` | Change "45" to "~58" |
| 164 | `"From Salem to JKKN AHS"` | No change (keep as is) |
| 168 | `"50-60 minutes via NH-544"` | Change to `"~1 hour via NH-544 (~58 km)"` |
| 219 | `"Just 40-50 km from Salem."` | Change to `"Just ~58 km from Salem via NH-544."` |
| 519–520 | `"40-50 km • 50-60 minutes"` | Change to `"~58 km • ~1 hour"` |
| 718 | FAQ Q2 answer: `"approximately 40-50 km"` | Change to `"approximately 58 km"` |
| 750 | FAQ Q10 answer: `"located 40–50 km from Salem"` | Change to `"located ~58 km from Salem"` |

**Also fix layout.tsx FAQ schema answers to match:**
- `layout.tsx` line 71: `"approximately 40-50 km"` → `"approximately 58 km"`
- `layout.tsx` line 135: `"located 40–50 km from Salem"` → `"located ~58 km from Salem"`

**Testing:**
- Search page source for "40-50" — should return 0 results
- Search page source for "45km" and "45 km" — should return 0 results
- All distance references should show "~58 km" or "approximately 58 km"
- DistanceCard visual display should show "~58" not "45"

---

### TASK-SALEM-03
**Tier:** 0 — Critical
**File:** `src/app/salem/layout.tsx`
**Dependencies:** None
**AEO Impact:** +3 points (meta optimization)

**Problem:** Title tag is 72 characters. Google truncates titles over 60 characters in SERP, showing ellipsis and losing the "Admissions 2026-27" suffix.

**Current (line 4):**
```tsx
title: "Allied Health Science Courses in Salem | JKKN AHS — Admissions 2026-27",
```
**Character count:** 72 chars — FAIL

**New:**
```tsx
title: "Allied Health Science Courses in Salem | JKKN AHS",
```
**Character count:** 50 chars — PASS

**Testing:**
- Check title tag in View Source: `<title>Allied Health Science Courses in Salem | JKKN AHS</title>`
- Use Google SERP title length checker — confirm no truncation at 1280px viewport
- GSC URL Inspection → confirm title is detected correctly

---

### TASK-SALEM-04
**Tier:** 0 — Critical
**File:** `src/app/salem/layout.tsx`
**Dependencies:** TASK-SALEM-02 (use corrected distance in new description)
**AEO Impact:** +2 points (meta optimization)

**Problem:** Meta description is 158–190 characters depending on how whitespace is counted. Google truncates descriptions over 155 characters. Additionally, it references "40-50 km" (wrong distance).

**Current (lines 5–7):**
```tsx
description:
  "Looking for allied health science courses in Salem? JKKN College of Allied Health Sciences is just 40-50 km from Salem on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!",
```

**New:**
```tsx
description:
  "9 BSc Allied Health Science courses ~58 km from Salem via NH-544. NAAC approved. 85%+ placements. TN Dr. MGR Medical University. Admissions open 2026-27.",
```
**Character count:** 153 chars — PASS

**Testing:**
- View Source → find `<meta name="description"` — confirm new description text
- Count characters: 153 (within limit)
- No mention of "40-50 km" remaining in meta description

---

### TASK-SALEM-05
**Tier:** 0 — Critical
**File:** `src/app/salem/page.tsx`
**Dependencies:** None
**AEO Impact:** +2 points (data accuracy, internal linking)

**Problem:** The `ExploreCitiesSection` (lines 811–814) shows wrong distances to other city pages.

**Current values:**
```tsx
const cities = [
  { name: "Namakkal", distance: "5-10 km", href: "/namakkal" },
  { name: "Erode", distance: "30-40 km", href: "/erode" },
  { name: "Tiruppur", distance: "80-90 km", href: "/tiruppur" },
  { name: "Coimbatore", distance: "100-110 km", href: "/coimbatore" },
];
```

**Corrected values** [VERIFIED distances from JKKN campus]:
```tsx
const cities = [
  { name: "Namakkal", distance: "~66 km", href: "/namakkal" },
  { name: "Erode", distance: "~22 km", href: "/erode" },
  { name: "Tiruppur", distance: "~67 km", href: "/tiruppur" },
  { name: "Coimbatore", distance: "~105 km", href: "/coimbatore" },
];
```

**Testing:**
- View Source → search for "5-10 km" — should return 0
- Check all 4 city distances match the verified campus distance data
- Click all 4 city links — confirm they navigate correctly

---

## TIER 1 TASKS — Schema and Snippet Content

---

### TASK-SALEM-06
**Tier:** 1 — Schema
**File:** `src/app/salem/layout.tsx`
**Dependencies:** TASK-SALEM-01 (page must be SSR before schema testing is meaningful)
**AEO Impact:** +6 points (schema completeness)

**Problem:** No Course JSON-LD schema for any of the 9 BSc programmes. This prevents Google from showing course-level rich results.

**Solution:** Add `courseListSchema` constant after line 214 (after `speakableSchema`), then add a `<script>` tag in the `SalemLayout` JSX.

**Add this constant after line 214:**

```tsx
const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "BSc Allied Health Science Programmes — JKKN AHS, ~58 km from Salem",
  "description": "9 undergraduate BSc Allied Health Science programmes offered by JKKN College of Allied Health Sciences. Campus is approximately 58 km from Salem via NH-544.",
  "numberOfItems": 9,
  "itemListElement": [
    { "@type": "Course", "position": 1, "name": "B.Sc. Cardiac Technology", "url": "https://ahs.jkkn.ac.in/cardiac-technology", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship in cardiac diagnostic and monitoring techniques. 30 seats.", "occupationalCategory": "Cardiovascular Technologist" },
    { "@type": "Course", "position": 2, "name": "B.Sc. Dialysis Technology", "url": "https://ahs.jkkn.ac.in/dialysis-technology", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship in renal replacement therapy. 40 seats.", "occupationalCategory": "Dialysis Technician" },
    { "@type": "Course", "position": 3, "name": "B.Sc. Radiology and Imaging Technology", "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship in diagnostic imaging, X-ray, CT, MRI. 40 seats.", "occupationalCategory": "Radiologic Technologist" },
    { "@type": "Course", "position": 4, "name": "B.Sc. Operation Theatre and Anaesthesia Technology", "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship in surgical assistance and anaesthesia monitoring. 40 seats.", "occupationalCategory": "Surgical Technologist" },
    { "@type": "Course", "position": 5, "name": "B.Sc. Respiratory Therapy Technology", "url": "https://ahs.jkkn.ac.in/respiratory-therapy", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship in pulmonary care and mechanical ventilation. 30 seats.", "occupationalCategory": "Respiratory Therapist" },
    { "@type": "Course", "position": 6, "name": "B.Sc. Physician Assistant", "url": "https://ahs.jkkn.ac.in/physician-assistant", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship supporting doctors in clinical diagnostics and procedures. 40 seats.", "occupationalCategory": "Physician Assistant" },
    { "@type": "Course", "position": 7, "name": "B.Sc. Critical Care Technology", "url": "https://ahs.jkkn.ac.in/critical-care-technology", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship in ICU management and life-support equipment. 30 seats.", "occupationalCategory": "Critical Care Technician" },
    { "@type": "Course", "position": 8, "name": "B.Sc. Medical Record Science", "url": "https://ahs.jkkn.ac.in/medical-record-science", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship in health information management and medical coding. 30 seats.", "occupationalCategory": "Medical Records Technician" },
    { "@type": "Course", "position": 9, "name": "B.Sc. Accident and Emergency Care Technology", "url": "https://ahs.jkkn.ac.in/accident-emergency-care", "timeToComplete": "P4Y", "educationalLevel": "Undergraduate", "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" }, "description": "3-year programme plus 1-year internship in emergency medical response and trauma management. 30 seats.", "occupationalCategory": "Emergency Medical Technician" }
  ]
};
```

**Add to `SalemLayout` JSX (after the speakableSchema script tag, before `{children}`):**
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
/>
```

**Testing:**
- Validate at https://validator.schema.org/ — paste the JSON, expect 0 errors
- Google Rich Results Test at https://search.google.com/test/rich-results — check Course results appear
- View Source — confirm `courseListSchema` JSON is present in page HTML

---

### TASK-SALEM-07
**Tier:** 1 — Schema
**File:** `src/app/salem/layout.tsx`
**Dependencies:** TASK-SALEM-01
**AEO Impact:** +3 points (schema completeness — HowTo)

**Problem:** No HowTo schema for the admission process, despite the page having a detailed HowToReachSection. HowTo schema enables rich results for step-by-step queries.

**Solution:** Add `howToSchema` constant after `courseListSchema`, add script tag in JSX.

```tsx
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for Allied Health Science Admission from Salem at JKKN AHS",
  "description": "Step-by-step guide for Salem students to apply for BSc Allied Health Science at JKKN College of Allied Health Sciences, ~58 km from Salem via NH-544.",
  "totalTime": "P7D",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Check Eligibility", "text": "Ensure you have completed 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate (40% for reserved categories)." },
    { "@type": "HowToStep", "position": 2, "name": "Choose Your Programme", "text": "Select from 9 BSc Allied Health Science specialisations at JKKN AHS based on your career interest in cardiac, radiology, dialysis, OT, respiratory, physician assistant, critical care, medical records, or emergency care." },
    { "@type": "HowToStep", "position": 3, "name": "Apply Online", "text": "Visit https://ahs.jkkn.ac.in/ or https://www.jkkn.ai/apply/jkkn-admission-2026 to submit your application. Admissions for 2026-27 are currently open. Contact: +91 9345855001." },
    { "@type": "HowToStep", "position": 4, "name": "Attend University Counselling", "text": "Participate in Tamil Nadu Dr. MGR Medical University counselling conducted at the state level. Bring original 10+2 mark sheet and relevant documents." },
    { "@type": "HowToStep", "position": 5, "name": "Travel to JKKN Campus", "text": "JKKN campus is ~58 km from Salem via NH-544 (Salem-Coimbatore Highway). TNSTC buses from Salem New Bus Stand reach Komarapalayam in approximately 1 hour, running every 15-20 minutes." }
  ]
};
```

**Testing:**
- Validate at schema.org validator — expect 0 errors for HowTo type
- Google Rich Results Test — check for HowTo rich result appearance

---

### TASK-SALEM-08
**Tier:** 1 — Snippet Content
**File:** `src/app/salem/page.tsx`
**Dependencies:** TASK-SALEM-01 (SSR), TASK-SALEM-02 (correct distance)
**AEO Impact:** +4 points (snippet format content)

**Problem:** No dedicated paragraph snippet block targeting the primary keyword "allied health science courses in salem". The CompetitiveAdvantageSection has `.snippet-answer` divs, but they are not formatted as a direct answer paragraph.

**Solution:** Insert a new server-rendered paragraph snippet section between `AffiliationBar` and `DistanceCard` in the main component return (page.tsx line 28 area). Also add to the main function's JSX:

**Step 1 — Add new section function at the end of page.tsx (before the closing of the file):**

```tsx
/* ──────────────────────────────────────────
   SNIPPET ANSWER BLOCK
────────────────────────────────────────── */
function SnippetAnswerBlock() {
  return (
    <section className="bg-white py-6 px-4" aria-label="Allied health science courses in Salem overview">
      <div className="max-w-3xl mx-auto">
        <p className="snippet-answer text-gray-700 text-base leading-relaxed">
          Allied health science courses near Salem include 9 specialised BSc programmes in Cardiac
          Technology, Dialysis Technology, Radiology and Imaging Technology, Operation Theatre and
          Anaesthesia Technology, Respiratory Therapy, Physician Assistant, Critical Care Technology,
          Medical Record Science, and Accident and Emergency Care Technology. JKKN College of Allied
          Health Sciences is located approximately 58 km from Salem via NH-544 (Salem–Coimbatore
          Highway) — approximately 1 hour by road. The college is NAAC approved and affiliated to
          Tamil Nadu Dr. MGR Medical University, Chennai. All programmes are 3 years plus 1 year
          internship with 85%+ placement support and 60+ recruiting partners including Apollo
          Hospitals, NHS UK, and Cleveland Clinic Abu Dhabi.
        </p>
      </div>
    </section>
  );
}
```

**Step 2 — Add `<SnippetAnswerBlock />` in the main `SalemPage()` return (after line 27 `<AffiliationBar />`, before line 28 `<DistanceCard />`):**

```tsx
<AffiliationBar />
<SnippetAnswerBlock />
<DistanceCard />
```

**Testing:**
- View Source — confirm `snippet-answer` class and paragraph text visible in raw HTML
- Text should be visible on page (not hidden) — check desktop and mobile rendering
- Word count of snippet answer: ~100 words (optimal for paragraph snippet)

---

### TASK-SALEM-09
**Tier:** 1 — Snippet Content
**File:** `src/app/salem/page.tsx`
**Dependencies:** TASK-SALEM-01, TASK-SALEM-02
**AEO Impact:** +3 points (snippet format content — list)

**Problem:** `WhyChooseSection` (lines 189–254) uses icon cards. No visible bulleted list format that Google can extract as a list snippet.

**Solution:** Add a `snippet-answer` bulleted list below the icon cards in `WhyChooseSection`.

**Add this block inside `WhyChooseSection`, after the existing grid of reason cards (after line 251, before the closing `</div></div></section>`):**

```tsx
{/* List Snippet for AEO */}
<ul className="snippet-answer text-left mt-8 space-y-2 max-w-2xl mx-auto list-disc pl-5 text-sm text-gray-700">
  <li><strong>9 Specialised BSc Programmes</strong> — Cardiac, Dialysis, Radiology, OT and Anaesthesia, Respiratory Therapy, Physician Assistant, Critical Care, Medical Records, Emergency Care</li>
  <li><strong>500+ Bed Teaching Hospital</strong> — Clinical exposure from Year 1 at on-campus multi-specialty hospital</li>
  <li><strong>85%+ Placement Rate</strong> — 60+ recruiters including Apollo Hospitals, NHS UK, Cleveland Clinic Abu Dhabi</li>
  <li><strong>NAAC Approved</strong> — Affiliated to Tamil Nadu Dr. MGR Medical University, Chennai</li>
  <li><strong>~58 km from Salem</strong> — ~1 hour via NH-544. Regular TNSTC buses from Salem New Bus Stand</li>
  <li><strong>Competitive Fees with Scholarship Support</strong> — Merit-based scholarships for deserving students</li>
</ul>
```

**Testing:**
- View Source — confirm `<ul class="snippet-answer ...">` visible in HTML
- Visually check the list renders correctly on mobile (375px) — no overflow

---

### TASK-SALEM-10
**Tier:** 1 — Snippet Content
**File:** `src/app/salem/page.tsx`
**Dependencies:** TASK-SALEM-01, TASK-SALEM-02
**AEO Impact:** +2 points (HowTo snippet)

**Problem:** `HowToReachSection` (lines 472–546) has icon-based route cards. No numbered HowTo list for "how to get from Salem to JKKN" queries.

**Solution:** Add an `<ol>` snippet block at the top of `HowToReachSection` (before the header card).

**Add this block inside `HowToReachSection`, before the "Header card" comment (before line 513):**

```tsx
{/* HowTo Snippet — How to reach from Salem */}
<ol className="snippet-answer text-left list-decimal pl-5 text-sm text-gray-700 space-y-2 mb-8 max-w-xl mx-auto">
  <li><strong>Start at Salem New Bus Stand</strong> — Take a TNSTC bus towards Komarapalayam on NH-544 (Salem–Coimbatore Highway). Buses run every 15–20 minutes.</li>
  <li><strong>Travel ~58 km via NH-544</strong> — Journey takes approximately 1 hour on the direct highway route.</li>
  <li><strong>Alight at Komarapalayam</strong> — JKKN campus is at Natarajapuram, NH-544, Komarapalayam, Namakkal District, Tamil Nadu 638183.</li>
  <li><strong>By Train</strong> — Salem Junction is the nearest railway station (~58 km from campus). Hire a cab or take a connecting bus to Komarapalayam.</li>
  <li><strong>By Car/Bike</strong> — Direct route on NH-544 from Salem. No highway exits required — straight road to Komarapalayam.</li>
</ol>
```

**Testing:**
- View Source — confirm `<ol class="snippet-answer ...">` visible in HTML
- Check `<ol>` renders above the existing route icon cards on mobile

---

## TIER 2 TASKS — PAA, AI Overview, Voice

---

### TASK-SALEM-11
**Tier:** 2 — PAA Expansion
**File:** `src/app/salem/page.tsx`
**Dependencies:** TASK-SALEM-01 (SSR), TASK-SALEM-02 (correct distance)
**AEO Impact:** +6 points (FAQ coverage — Salem-specific)

**Problem:** All 11 existing FAQs are generic or distance-based. Three Salem-specific themes identified are missing: (1) steel city/industrial jobs, (2) government hospital training, (3) Salem vs Chennai value comparison. Additionally, bus route details and NEET clarification are high-intent queries with no page coverage.

**Solution:** Add 5 new FAQ objects to the `faqs` array inside `FAQSection` (after the last existing FAQ at line 756, before the closing `]`).

**New FAQ objects to append:**

```tsx
{
  q: "Are there allied health science job opportunities in Salem's industrial sector?",
  a: "Yes. Salem district is home to major industrial employers including Salem Steel Plant (SAIL) and TNPL (Tamil Nadu Newsprint and Papers Limited), along with dozens of manufacturing units. These facilities maintain occupational health departments, emergency response teams, and on-site medical units that hire allied health professionals. Graduates in B.Sc. Accident and Emergency Care Technology and B.Sc. Cardiac Technology from JKKN AHS are directly qualified for industrial healthcare roles. The demand for occupational health technicians in Salem's steel and manufacturing corridor continues to grow.",
},
{
  q: "Does JKKN AHS have clinical training arrangements with government hospitals near Salem?",
  a: "JKKN College of Allied Health Sciences provides clinical training through its own 500+ bed multi-specialty teaching hospital located on the Komarapalayam campus — approximately 58 km from Salem. Students begin hospital rotations from Year 1 across specialisations including cardiac care, radiology, OT procedures, dialysis, and critical care. This on-campus hospital provides training depth comparable to government medical college hospitals in the Salem region, without students needing to travel to external facilities for core clinical hours.",
},
{
  q: "Is it cheaper to study allied health science near Salem than in Chennai?",
  a: "Studying at JKKN College of Allied Health Sciences near Salem is significantly more affordable than equivalent programmes at private colleges in Chennai. Chennai allied health science institutions typically charge ₹80,000 to ₹2,50,000 per year. JKKN AHS offers competitive fees with merit-based scholarship support, and students from Salem save substantially on accommodation since the campus is just ~58 km away with daily commute options. The qualification carries the same Tamil Nadu Dr. MGR Medical University affiliation and NAAC approval — without the metro cost premium.",
},
{
  q: "Which buses run from Salem to JKKN AHS campus?",
  a: "Tamil Nadu State Transport Corporation (TNSTC) buses run regularly from Salem New Bus Stand to Komarapalayam via NH-544 (Salem–Coimbatore Highway). Buses operate approximately every 15–20 minutes throughout the day. The journey covers approximately 58 km and takes about 1 hour. JKKN also operates dedicated college transport routes connecting the campus to Salem and surrounding areas. Students may choose between daily commute by bus or staying in the college hostel.",
},
{
  q: "Is NEET required for allied health science admission at JKKN AHS?",
  a: "No. NEET (National Eligibility cum Entrance Test) is not required for BSc Allied Health Science admissions at JKKN College of Allied Health Sciences. NEET is mandatory only for MBBS, BDS, and BAMS programmes. Admission to BSc Allied Health Science programmes is based on 10+2 merit (Physics, Chemistry, Biology) through Tamil Nadu Dr. MGR Medical University counselling. Students who did not appear for NEET or who did not qualify in NEET can still pursue a rewarding healthcare career through allied health science at JKKN AHS.",
},
```

**Testing:**
- Count FAQ items in the `faqs` array — should be 16 total (11 original + 5 new)
- View Source — all 16 FAQ questions and all answer texts visible in raw HTML (after TASK-SALEM-01 fix)
- FAQAccordion renders all 16 items correctly on desktop and mobile

---

### TASK-SALEM-12
**Tier:** 2 — Schema Sync
**File:** `src/app/salem/layout.tsx`
**Dependencies:** TASK-SALEM-11 (must have final 16 FAQ list before syncing schema)
**AEO Impact:** +3 points (schema accuracy)

**Problem:** The FAQPage schema in `layout.tsx` has 11 items. After TASK-SALEM-11, the page will have 16 FAQ items. The schema must match the page content exactly.

**Solution:** Add 5 new Question/Answer objects to the `faqSchema.mainEntity` array in `layout.tsx` (after the last existing item at line 145, before the closing `]`).

**New entries to add to `faqSchema.mainEntity`:**

```tsx
{
  "@type": "Question",
  name: "Are there allied health science job opportunities in Salem's industrial sector?",
  acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. Salem district is home to major industrial employers including Salem Steel Plant (SAIL) and manufacturing units that maintain occupational health departments and on-site medical units. JKKN AHS graduates in B.Sc. Accident and Emergency Care Technology and B.Sc. Cardiac Technology are qualified for industrial healthcare roles in Salem's steel and manufacturing corridor.",
  },
},
{
  "@type": "Question",
  name: "Does JKKN AHS have clinical training arrangements with government hospitals near Salem?",
  acceptedAnswer: {
    "@type": "Answer",
    text: "JKKN College of Allied Health Sciences provides clinical training through its own 500+ bed multi-specialty teaching hospital on the Komarapalayam campus, approximately 58 km from Salem. Students begin hospital rotations from Year 1 across specialisations including cardiac care, radiology, OT procedures, dialysis, and critical care.",
  },
},
{
  "@type": "Question",
  name: "Is it cheaper to study allied health science near Salem than in Chennai?",
  acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. JKKN AHS offers competitive fees with scholarship support. Students from Salem save on accommodation since the campus is ~58 km away with daily commute options. Chennai allied health science institutions typically charge ₹80,000 to ₹2,50,000 per year. JKKN carries the same Tamil Nadu Dr. MGR Medical University affiliation and NAAC approval without the metro cost premium.",
  },
},
{
  "@type": "Question",
  name: "Which buses run from Salem to JKKN AHS campus?",
  acceptedAnswer: {
    "@type": "Answer",
    text: "TNSTC buses run from Salem New Bus Stand to Komarapalayam via NH-544 approximately every 15–20 minutes. The journey is approximately 58 km and takes about 1 hour. JKKN also operates dedicated college transport routes connecting to Salem and surrounding areas.",
  },
},
{
  "@type": "Question",
  name: "Is NEET required for allied health science admission at JKKN AHS?",
  acceptedAnswer: {
    "@type": "Answer",
    text: "No. NEET is not required for BSc Allied Health Science admissions. Admission is based on 10+2 merit (Physics, Chemistry, Biology) through Tamil Nadu Dr. MGR Medical University counselling. Students who did not appear for NEET can still apply for allied health science at JKKN AHS.",
  },
},
```

**Also update `dateModified` in `faqSchema`:**
```tsx
dateModified: "2026-03-28",
```

**Testing:**
- Count items in `faqSchema.mainEntity` — should be 16
- Validate at schema.org validator — 0 errors
- `dateModified` shows current date

---

### TASK-SALEM-13
**Tier:** 2 — AI Overview
**File:** `src/app/salem/page.tsx`
**Dependencies:** TASK-SALEM-01, TASK-SALEM-08 (paragraph snippet first)
**AEO Impact:** +4 points (AI citation visibility)

**Problem:** No dedicated AI Overview citability blocks (content structured specifically for AI systems to quote as sources).

**Solution:** Add a compact, fact-dense citability block section immediately after `HeroSection` in the main return. This section is visually minimal (not a prominent design element) but rich in citable facts.

**Add new section function:**

```tsx
/* ──────────────────────────────────────────
   AI CITABILITY BLOCK — STATIC SERVER CONTENT
────────────────────────────────────────── */
function CitabilityBlock() {
  return (
    <section className="bg-[#f8fdf9] border-y border-[#d4edda] py-5 px-4" aria-label="Key facts about JKKN Allied Health Sciences">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="snippet-answer">
            <strong>Location:</strong> JKKN College of Allied Health Sciences is located at Natarajapuram, NH-544, Komarapalayam, Namakkal District, Tamil Nadu 638183 — approximately 58 km from Salem via NH-544 (Salem–Coimbatore Highway), approximately 1 hour by road.
          </div>
          <div className="snippet-answer">
            <strong>Programmes:</strong> 9 BSc Allied Health Science programmes — Cardiac Technology, Dialysis Technology, Radiology and Imaging Technology, Operation Theatre and Anaesthesia Technology, Respiratory Therapy, Physician Assistant, Critical Care Technology, Medical Record Science, and Accident and Emergency Care Technology.
          </div>
          <div className="snippet-answer">
            <strong>Accreditation:</strong> NAAC approved institution. Affiliated to Tamil Nadu Dr. MGR Medical University, Chennai — the apex body governing medical and allied health education in Tamil Nadu.
          </div>
          <div className="snippet-answer">
            <strong>Placements:</strong> 85%+ placement rate at JKKN AHS. Graduates placed at Apollo Hospitals, Fortis, NHS UK (United Kingdom), Cleveland Clinic Abu Dhabi, and 60+ recruiting organisations. International placement packages of up to 25 LPA. [FROM CLAUDE.MD — AHS-specific 85% figure]
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Add `<CitabilityBlock />` in the main `SalemPage()` return, after `<HeroSection />` and before `<AffiliationBar />`.**

**Testing:**
- View Source — all 4 citability divs visible in raw HTML with `.snippet-answer` class
- Content appears on page — check visual rendering on mobile (should not break layout)
- No layout shift introduced

---

### TASK-SALEM-14
**Tier:** 2 — Internal Linking
**File:** `src/app/salem/page.tsx`
**Dependencies:** TASK-SALEM-05 (cross-city distances must be corrected first)
**AEO Impact:** +2 points (internal linking)

**Problem:** The cross-city links in `ExploreCitiesSection` (lines 811–814) use wrong distances (fixed in TASK-SALEM-05). Additionally, the section layout shows only 3 columns for 4 cities (CSS: `sm:grid-cols-3` on line 828). Should be 2 columns on mobile, 4 on desktop for even layout.

**Solution (after TASK-SALEM-05 corrects distances):**

Fix the grid in `ExploreCitiesSection` (line 828):
```tsx
// Current:
className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"

// Fix (4 cities = 2x2 on tablet, 4 across on large desktop):
className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
```

Also add a helpful sub-text to each city link showing the city's distance from JKKN campus (after TASK-SALEM-05 corrects distances). This improves internal linking context for users.

**Testing:**
- 4 city cards display in 2 columns on mobile (375px), 4 columns on large desktop (1280px)
- All 4 links navigate to correct city pages: /erode/, /namakkal/, /tiruppur/, /coimbatore/
- Distance labels show corrected values: Erode ~22 km, Namakkal ~66 km, Tiruppur ~67 km, Coimbatore ~105 km

---

*Document: AEO-SALEM-DECOMPOSE.md | Version: 1.0 | Date: 2026-03-28*
*Total task cards: 14 | Tier 0: 5 | Tier 1: 5 | Tier 2: 4*
