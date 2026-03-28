# AEO Task Decomposition — Coimbatore City Page

> **Document Type:** Developer Task Cards
> **City Page:** https://ahs.jkkn.ac.in/coimbatore/
> **Source Files:**
> - `src/app/coimbatore/page.tsx` (857 lines)
> - `src/app/coimbatore/layout.tsx` (242 lines)
> **Companion:** `seo-audits/aeo/city-pages/coimbatore/AEO-COIMBATORE-SPEC.md`
> **Total Task Cards:** 23
> **Date:** 2026-03-28

---

## Tier Overview

| Tier | Name | Cards | Must Complete Before |
|------|------|-------|---------------------|
| **Tier 0** | Render Blockers | 3 | All other tasks |
| **Tier 1** | Core AEO Fixes | 10 | Tier 2 |
| **Tier 2** | Content Enhancement | 10 | — (run after Tier 1) |

---

## TIER 0 — RENDER BLOCKERS

> These 3 tasks block every AEO gain. Do not start any other task until all 3 are complete.

---

### TASK C0-01 — Extract FAQSection to a Client Component File

**Tier:** 0 | **Priority:** CRITICAL | **Estimated Time:** 30–45 minutes

**Problem:**
`src/app/coimbatore/page.tsx` line 1 has `"use client"` making the entire page JavaScript-rendered. This means Googlebot's first-wave HTML crawl sees zero content from any of the 13 sections.

**Root Cause:**
`FAQSection` uses `useState` (line 759) for accordion open/close state. React requires `"use client"` any time `useState` is used. Because `FAQSection` is defined in the same file as `CoimbatorePage`, the directive must cover the whole file.

**Fix:**
Create a new file: `src/app/coimbatore/FAQSection.client.tsx`

```tsx
"use client";
// Move lines 708–807 from page.tsx into this file
// Export as: export function FAQSectionClient() { ... }
```

In `src/app/coimbatore/page.tsx`:
- Delete `"use client"` from line 1
- Delete `import { useState } from "react"` from line 3
- Add: `import { FAQSectionClient } from "./FAQSection.client"`
- In the JSX, replace `<FAQSection />` with `<FAQSectionClient />`

**Verification:**
- `page.tsx` line 1 must NOT contain `"use client"`
- `page.tsx` line 3 must NOT import `useState`
- `FAQSection.client.tsx` must contain `"use client"` at line 1
- View Page Source → H1 text "Allied Health Sciences Colleges in Coimbatore" must be visible without JavaScript

**Files to modify:**
- `src/app/coimbatore/page.tsx` — delete lines 1, 3; update FAQSection reference
- `src/app/coimbatore/FAQSection.client.tsx` — CREATE NEW FILE

**Blast radius check:** This change only affects `/coimbatore/`. No shared components are modified.

---

### TASK C0-02 — Verify Server Component Compatibility

**Tier:** 0 | **Priority:** CRITICAL | **Estimated Time:** 15 minutes

**Problem:**
After removing `"use client"` from `page.tsx`, imports must be verified. Any component that uses browser APIs or hooks will cause a build error if imported into a Server Component.

**Check each import in the new server-rendered page.tsx:**

| Import | Server-safe? | Action |
|--------|-------------|--------|
| `Navbar` from `@/components/layout/Navbar` | Check — likely `"use client"` internally | OK — Next.js handles this via component boundary |
| `Footer` from `@/components/layout/Footer` | Check | OK — same as Navbar |
| `Breadcrumb` from `@/components/ui/Breadcrumb` | Likely server-safe | Verify no hooks |
| `siteConfig` from `@/lib/site-config` | Server-safe | OK — config object only |
| Lucide icons | Server-safe | OK — pure SVG components |
| `Image` from `next/image` | Server-safe | OK |
| `Link` from `next/link` | Server-safe | OK |

**Action:** Run `npm run build` after C0-01. Fix any build errors before proceeding.

**Files to check:**
- `src/components/ui/Breadcrumb.tsx` — verify no useState/useEffect

---

### TASK C0-03 — Make FAQ Answers Statically Visible in HTML

**Tier:** 0 | **Priority:** CRITICAL | **Estimated Time:** 20–30 minutes

**Problem:**
Even after extracting FAQSection to a Client Component, the FAQ answers are hidden behind JavaScript. The `{open === i && ( <div className="faq-answer ..."> ... </div> )}` conditional in `FAQSection.client.tsx` means FAQ answer text is absent from initial HTML.

For PAA box capture and FAQPage schema to work, Google must be able to read the answer text in the HTML source (even if visually collapsed for users).

**Fix Option A (Recommended — CSS accordion):**
Replace `useState` conditional rendering with a CSS `<details>/<summary>` accordion. No JavaScript needed for open/close.

```tsx
// Replace the entire accordion div structure with:
<details
  key={i}
  open={i === 0}  // first item open by default
  className="rounded-2xl border border-gray-200 bg-white group"
>
  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
    <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
  </summary>
  <div className="faq-answer snippet-answer px-6 pb-5 text-sm text-gray-500 leading-relaxed">
    {faq.a}
  </div>
</details>
```

**Fix Option B (Simpler — static always-visible answers):**
Remove the `{open === i && ...}` conditional entirely. Render all FAQ answers as static text with CSS hide/show. This ensures every answer is always in the HTML DOM.

**Verification:**
- View Page Source → search for text from FAQ answer 1 ("JKKN College of Allied Health Sciences, located just 105 km") — must be present in source
- Google Rich Results Test → FAQPage schema should show all 11 items as "found"

**Files to modify:**
- `src/app/coimbatore/FAQSection.client.tsx` (created in C0-01)

---

## TIER 1 — CORE AEO FIXES

> Fix technical and data issues. All Tier 1 tasks should be completed in order.

---

### TASK C1-01 — Fix Meta Title (Over 60 Characters)

**Tier:** 1 | **Priority:** HIGH | **Estimated Time:** 5 minutes

**File:** `src/app/coimbatore/layout.tsx`
**Line:** 4
**Current (75 chars):** `"Allied Health Sciences Colleges in Coimbatore | JKKN AHS — Admissions 2026-27"`
**Replace with (52 chars):** `"Allied Health Sciences Colleges in Coimbatore | JKKN"`

**Verification:** Character count = 52. Contains primary keyword "allied health sciences colleges in coimbatore" at position 1. Brand "JKKN" at end.

---

### TASK C1-02 — Fix Meta Description (Over 155 Characters)

**Tier:** 1 | **Priority:** HIGH | **Estimated Time:** 5 minutes

**File:** `src/app/coimbatore/layout.tsx`
**Line:** 6
**Current (196 chars):** `"Looking for allied health sciences colleges in Coimbatore? JKKN College of Allied Health Sciences offers 9 BSc courses with 85%+ placements, NAAC approved. Direct NH-544 connectivity. Apply now!"`
**Replace with (153 chars):** `"9 BSc AHS programmes near Coimbatore. NAAC approved, 85%+ placements, own 500-bed hospital, international placements. 105 km via NH-544. Apply 2026-27."`

**Verification:** Character count ≤155. Contains: "Coimbatore", "9 BSc", "85%+ placements", "NAAC", "105 km", "NH-544".

---

### TASK C1-03 — Fix Distance: FAQ Answers in page.tsx

**Tier:** 1 | **Priority:** HIGH | **Estimated Time:** 5 minutes

**File:** `src/app/coimbatore/page.tsx`

| Line | Current | Replace With |
|------|---------|-------------|
| 715 | `"JKKN AHS is approximately 100-110 km from Coimbatore"` | `"JKKN AHS is approximately 105 km from Coimbatore"` |
| 719 | `"approximately 100-110 km from Coimbatore city centre"` | `"approximately 105 km from Coimbatore city centre"` |

---

### TASK C1-04 — Fix Distance: HowToReachSection Header

**Tier:** 1 | **Priority:** HIGH | **Estimated Time:** 5 minutes

**File:** `src/app/coimbatore/page.tsx`
**Line:** 521

**Current:** `"100-110 km • 2-2.5 hours"`
**Replace with:** `"105 km • 2–2.5 hours"`

---

### TASK C1-05 — Fix Distance: FAQ Schema in layout.tsx

**Tier:** 1 | **Priority:** HIGH | **Estimated Time:** 5 minutes

**File:** `src/app/coimbatore/layout.tsx`

| Line | Current | Replace With |
|------|---------|-------------|
| 63 | `"approximately 100-110 km from Coimbatore"` | `"approximately 105 km from Coimbatore"` |
| 71 | `"approximately 100-110 km from Coimbatore city centre"` | `"approximately 105 km from Coimbatore city centre"` |

---

### TASK C1-06 — Fix Cross-City Distances in ExploreCitiesSection

**Tier:** 1 | **Priority:** HIGH | **Estimated Time:** 10 minutes

**File:** `src/app/coimbatore/page.tsx`
**Lines:** 814–818

These distances are currently showing incorrect values. The section shows distances from campus to other cities (not from Coimbatore to those cities). Correct campus-to-city distances:

| City | Current (Wrong) | Correct Distance |
|------|----------------|-----------------|
| Namakkal | `"5-10 km"` | `"~66 km"` |
| Salem | `"40-50 km"` | `"~58 km"` |
| Erode | `"30-40 km"` | `"~22 km"` |
| Tiruppur | `"80-90 km"` | `"~67 km"` |

**Verification:** Distances verified from JKKN MEMORY.md (2026-03-27, Wikipedia + JKKN website cross-reference).

---

### TASK C1-07 — Add Course JSON-LD Schema (9 Programmes)

**Tier:** 1 | **Priority:** HIGH | **Estimated Time:** 45–60 minutes

**File:** `src/app/coimbatore/layout.tsx`
**Insert after:** Line 203 (after `educationalOrgSchema` const ends)

Add a `courseSchemas` array constant containing 9 Course objects, then render each in the layout return block.

**Programme data:**

| Programme | URL | Intake |
|-----------|-----|--------|
| B.Sc. Cardiac Technology | `/cardiac-technology/` | 30 seats |
| B.Sc. Radiology & Imaging Technology | `/radiology-imaging-technology/` | 40 seats |
| B.Sc. Dialysis Technology | `/dialysis-technology/` | 40 seats |
| B.Sc. Operation Theatre & Anaesthesia Technology | `/operation-theatre-anaesthesia/` | 40 seats |
| B.Sc. Respiratory Therapy | `/respiratory-therapy/` | 30 seats |
| B.Sc. Physician Assistant | `/physician-assistant/` | 40 seats |
| B.Sc. Critical Care Technology | `/critical-care-technology/` | 30 seats |
| B.Sc. Medical Record Science | `/medical-record-science/` | 30 seats |
| B.Sc. Accident & Emergency Care Technology | `/accident-emergency-care/` | 30 seats |

**Each Course schema must include:**
- `@type: "Course"`
- `name`: full programme name
- `provider`: `@id` reference to `https://ahs.jkkn.ac.in/#organization`
- `url`: absolute URL to course page
- `educationalCredentialAwarded`: "Bachelor of Science (B.Sc.)"
- `timeToComplete`: `"P4Y"` (4 years)
- `offers.availability`: `"https://schema.org/InStock"`

**Render pattern in layout return:**
```tsx
{courseSchemas.map((course, i) => (
  <script
    key={`course-${i}`}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
  />
))}
```

**Verification:** Google Rich Results Test → all 9 courses should appear. Search Console → Course rich result eligibility.

---

### TASK C1-08 — Add HowTo Schema (Travel Directions)

**Tier:** 1 | **Priority:** MEDIUM | **Estimated Time:** 20 minutes

**File:** `src/app/coimbatore/layout.tsx`
**Insert after:** Course schema constants

Full HowTo schema content is in `AEO-COIMBATORE-SPEC.md` Section 13.2. Key parameters:
- `name`: "How to Reach JKKN AHS from Coimbatore"
- `totalTime`: `"PT2H30M"` (2.5 hours)
- 5 steps: Start Coimbatore → NH-544 → Erode → Komarapalayam → Campus

**Verification:** View page source → HowTo JSON-LD block visible. Google Rich Results Test.

---

### TASK C1-09 — Add FAQ Items 12, 13, 14 to Schema

**Tier:** 1 | **Priority:** HIGH | **Estimated Time:** 20 minutes

**File:** `src/app/coimbatore/layout.tsx`
**Lines:** 53–147 (FAQPage `mainEntity` array)
**Action:** Append 3 new question objects at the end of `mainEntity` array (after current item 11 at line ~143)

**New items to add:**

**Item 12:** "Is JKKN AHS better than Kongunadu Institute of Allied Health Sciences for Coimbatore students?"
- Answer: JKKN offers 9 programmes vs 7 at Kongunadu; 500-bed on-campus hospital; international placements UK/UAE/Singapore; 74+ year legacy. Kongunadu is 10 km from Coimbatore, JKKN is 105 km. Students prioritising clinical exposure and international placement choose JKKN.

**Item 13:** "How do I travel from Coimbatore to JKKN AHS campus?"
- Answer: Take NH-544 east towards Salem. JKKN campus is at Natarajapuram, Komarapalayam, approximately 105 km — about 2 to 2.5 hours. Regular buses from Gandhipuram and Ukkadam bus stands.

**Item 14:** "Why should Coimbatore students choose JKKN AHS despite the 105 km distance?"
- Answer: 500-bed on-campus hospital (clinical from Year 1), 9 programmes, international placements UK/UAE/Singapore, competitive fees, 74+ year legacy, hostels available.

---

### TASK C1-10 — Update Speakable Schema to Include New Snippet ID

**Tier:** 1 | **Priority:** MEDIUM | **Estimated Time:** 10 minutes

**File:** `src/app/coimbatore/layout.tsx`
**Lines:** 211–213

**Current:**
```json
"cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
```

**Replace with:**
```json
"cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2", "#coimbatore-answer"]
```

**Dependency:** The element with `id="coimbatore-answer"` is created in Tier 2 task C2-06. Ensure that task is completed before verifying this schema fix.

---

## TIER 2 — CONTENT ENHANCEMENT

> New content additions. Run after all Tier 1 tasks are complete.

---

### TASK C2-01 — Add Snippet Paragraph Block (Paragraph Snippet Target)

**Tier:** 2 | **Priority:** HIGH | **Estimated Time:** 20 minutes

**File:** `src/app/coimbatore/page.tsx`
**Insert:** After `<AffiliationBar />` and before `<DistanceCard />` in `CoimbatorePage` JSX (around line 27)

**New Component (add to page.tsx):**

```tsx
function SnippetBlock() {
  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <p
          id="coimbatore-answer"
          className="snippet-answer voice-answer text-gray-700 text-sm sm:text-base leading-relaxed"
        >
          JKKN College of Allied Health Sciences is one of the top-rated allied health sciences
          colleges accessible from Coimbatore, located 105 km from Coimbatore city on NH-544
          (2–2.5 hours direct). The college offers 9 BSc Allied Health Sciences programmes —
          including Cardiac Technology, Radiology, Dialysis, and Critical Care — affiliated to
          Tamil Nadu Dr. MGR Medical University, Chennai. With a 500-bed on-campus teaching
          hospital, 85%+ AHS placement rate, and international placements in the UK, UAE, and
          Singapore, JKKN AHS offers superior clinical exposure at competitive fees compared to
          Coimbatore city colleges.
        </p>
      </div>
    </section>
  );
}
```

Add `<SnippetBlock />` to the main JSX between `<AffiliationBar />` and `<DistanceCard />`.

**AEO Target:** Featured snippet (paragraph) for "allied health sciences colleges in coimbatore"
**Verification:** View Page Source → text visible. `.snippet-answer` class present on element.

---

### TASK C2-02 — Add Comparison Table to CompetitiveAdvantageSection

**Tier:** 2 | **Priority:** HIGH | **Estimated Time:** 25 minutes

**File:** `src/app/coimbatore/page.tsx`
**Location:** `CompetitiveAdvantageSection` function (around line 669)
**Insert:** After the section heading/description block, before the `advantages` array grid

**Add a comparison table:**

```tsx
<div className="overflow-x-auto mb-10">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="bg-[#006837] text-white">
        <th className="px-4 py-3 text-left font-semibold">Feature</th>
        <th className="px-4 py-3 text-left font-semibold">JKKN AHS</th>
        <th className="px-4 py-3 text-left font-semibold">Coimbatore City Colleges</th>
      </tr>
    </thead>
    <tbody className="snippet-answer">
      {[
        ["Distance", "105 km via NH-544", "In Coimbatore city"],
        ["Teaching Hospital", "500+ bed (on-campus)", "External / hospital tie-ups"],
        ["BSc Programmes", "9 specializations", "Varies (4–8 typically)"],
        ["Placement Rate", "85%+ AHS placement rate", "Varies (typically 70–80%)"],
        ["International Placements", "UK, UAE, Singapore", "Limited"],
        ["Legacy", "74+ years (est. 1952)", "Newer institutions"],
        ["Campus", "Peaceful, dedicated campus", "Urban college environment"],
      ].map(([feature, jkkn, competitor], i) => (
        <tr key={feature} className={i % 2 === 0 ? "bg-[#f0f7f2]" : "bg-white"}>
          <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
          <td className="px-4 py-3 text-[#006837] font-semibold">{jkkn}</td>
          <td className="px-4 py-3 text-gray-500">{competitor}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

**AEO Target:** Featured snippet (table) for "jkkn vs coimbatore allied health science college"

---

### TASK C2-03 — Add FAQ Items 12–14 to FAQSection Component

**Tier:** 2 | **Priority:** HIGH | **Estimated Time:** 20 minutes

**File:** `src/app/coimbatore/FAQSection.client.tsx` (created in C0-01)
**Location:** `faqs` array (moved from `page.tsx` lines 713–757)
**Action:** Add 3 new objects at the end of the `faqs` array

Full answer text for each item is in `AEO-COIMBATORE-SPEC.md` Section 13.4 (Items 12, 13, 14) and in TASK C1-09 above. Match the text exactly — schema and page component must use identical question/answer text.

**Coimbatore-unique FAQ questions:**
- Item 12: "Is JKKN AHS better than Kongunadu Institute of Allied Health Sciences for Coimbatore students?"
- Item 13: "How do I travel from Coimbatore to JKKN AHS campus?"
- Item 14: "Why should Coimbatore students choose JKKN AHS despite the 105 km distance?"

---

### TASK C2-04 — Add Coimbatore Job Market Stat to PlacementHighlights

**Tier:** 2 | **Priority:** MEDIUM | **Estimated Time:** 15 minutes

**File:** `src/app/coimbatore/page.tsx`
**Location:** `PlacementHighlights` function (around line 402)
**Insert:** After the company tags flex block (after line ~461), before the "View full placement details" link

**Add a context paragraph:**

```tsx
<p className="text-sm text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
  Coimbatore is Tamil Nadu&apos;s second-largest healthcare hub with 280+ active healthcare
  job postings (LinkedIn, March 2026) at major employers including KMCH, PSG Hospitals,
  Sri Ramakrishna Hospital, and Access Healthcare. JKKN AHS graduates are well-positioned
  to enter this growing market.
</p>
```

**AEO Target:** Validates career outcome claims; improves AI Overview citation authority for Coimbatore healthcare context.

---

### TASK C2-05 — Add International Placement Airport Context to HowToReachSection

**Tier:** 2 | **Priority:** MEDIUM | **Estimated Time:** 10 minutes

**File:** `src/app/coimbatore/page.tsx`
**Location:** `HowToReachSection` — the `routes` array (lines 474–500)
**Action:** Update the `Plane` (airport) entry description to add international placement angle

**Current (`page.tsx` line 493):**
```
"desc": "Coimbatore International Airport (Code: CJB) (~100 km)"
```

**Replace with:**
```
"desc": "Coimbatore International Airport (Code: CJB) — approximately 100 km from campus. Convenient for students pursuing international placements in UK, UAE, and Singapore."
```

**AEO Target:** Unique Coimbatore FAQ theme — airport proximity for international placements.

---

### TASK C2-06 — Rename Duplicate H2 Heading

**Tier:** 2 | **Priority:** MEDIUM | **Estimated Time:** 5 minutes

**Problem:** Two sections use the heading "Why Coimbatore Students Choose JKKN AHS":
- `WhyChooseSection` H2 (`page.tsx` line 227)
- `CompetitiveAdvantageSection` H2 (`page.tsx` line 681)

Duplicate H2 headings confuse crawlers about content hierarchy and reduce snippet specificity.

**Fix:** Rename `CompetitiveAdvantageSection` heading:

**File:** `src/app/coimbatore/page.tsx`
**Line:** 681–682

**Current:**
```tsx
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
  Why Coimbatore Students Choose JKKN AHS
</h2>
```

**Replace with:**
```tsx
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
  JKKN AHS vs Coimbatore City Colleges — A Direct Comparison
</h2>
```

---

### TASK C2-07 — Add Internal Links to Hostel and Transport Pages

**Tier:** 2 | **Priority:** MEDIUM | **Estimated Time:** 15 minutes

**File:** `src/app/coimbatore/page.tsx`

| Location | Current Text | Add Link To |
|----------|-------------|------------|
| FAQ answer 6 (`page.tsx` line 735) — "JKKN AHS provides separate hostel facilities for boys and girls" | "hostel facilities" | `/hostel/` |
| HowToReachSection — "College transport services are available" | "College transport services" | `/transport/` |

**Pattern:**
```tsx
<Link href="/hostel/" className="text-[#006837] underline hover:no-underline">hostel facilities</Link>
```

---

### TASK C2-08 — Add Static Voice Anchor Sentences

**Tier:** 2 | **Priority:** MEDIUM | **Estimated Time:** 15 minutes

**File:** `src/app/coimbatore/page.tsx`
**Location:** Add 3 sentences as an `aria-hidden` or visually-accessible paragraph in appropriate sections

**Purpose:** Voice search (Google Assistant, Alexa) reads these short factual sentences. They must be server-rendered, concise, and factual.

**Sentence 1 (add to DistanceCard section):**
```
"JKKN College of Allied Health Sciences is located 105 kilometres from Coimbatore, connected via NH-544 in approximately 2 to 2.5 hours."
```

**Sentence 2 (add to AffiliationBar or snippet block):**
```
"JKKN AHS offers 9 BSc programmes in allied health sciences, affiliated to Tamil Nadu Dr. MGR Medical University, Chennai."
```

**Sentence 3 (add to PlacementHighlights):**
```
"JKKN AHS graduates have secured international placements at NHS UK, Cleveland Clinic Abu Dhabi, and hospitals in Singapore."
```

Use `className="voice-answer sr-only"` only if visual display is not desired — but prefer visible text for better user trust. Add `className="voice-answer text-sm text-gray-500"` as a visible line instead.

---

### TASK C2-09 — Add Hero Section Distance Precision Fix

**Tier:** 2 | **Priority:** LOW | **Estimated Time:** 5 minutes

**File:** `src/app/coimbatore/page.tsx`
**Line:** 84 (HeroSection description paragraph)

**Current:**
```
"Better value, better campus, better you — just 2 hours from Coimbatore."
```

**Replace with:**
```
"Better value, better campus, better you — 105 km from Coimbatore via NH-544."
```

This change replaces an imprecise time estimate with a factual, verifiable distance that is consistent throughout the page and matches the DistanceCard.

---

### TASK C2-10 — Add Contextual Cross-City Link Sentences

**Tier:** 2 | **Priority:** LOW | **Estimated Time:** 15 minutes

**File:** `src/app/coimbatore/page.tsx`
**Location:** `ExploreCitiesSection` — add a sentence before the city card grid

**Add introductory text:**
```tsx
<p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">
  JKKN AHS also serves students from{" "}
  <Link href="/erode/" className="text-[#006837] font-semibold hover:underline">Erode (~22 km)</Link>,{" "}
  <Link href="/salem/" className="text-[#006837] font-semibold hover:underline">Salem (~58 km)</Link>,{" "}
  <Link href="/tiruppur/" className="text-[#006837] font-semibold hover:underline">Tiruppur (~67 km)</Link>, and{" "}
  <Link href="/namakkal/" className="text-[#006837] font-semibold hover:underline">Namakkal (~66 km)</Link>.
  Students from all these cities can access campus via NH-544 and campus bus routes.
</p>
```

This creates richer cross-city internal linking with anchor text that includes verified distances, improving both user experience and topical link signals.

---

## Task Execution Checklist

Before marking any task complete, verify:

- [ ] View Page Source confirms text is visible without JavaScript (for all Tier 0/1 content tasks)
- [ ] `npm run build` completes without TypeScript errors
- [ ] Google Rich Results Test passes for all schema blocks
- [ ] No duplicate H2 headings in the same section context
- [ ] All distance references to Coimbatore use "105 km" (not "100-110 km")
- [ ] All cross-city distances in `ExploreCitiesSection` match verified values
- [ ] Meta title ≤60 characters, meta description ≤155 characters
- [ ] FAQPage schema in `layout.tsx` matches FAQ items in page component (same Q&A text)

---

## File Reference Summary

| File | Tasks That Modify It |
|------|---------------------|
| `src/app/coimbatore/page.tsx` | C0-01, C0-02, C1-03, C1-04, C1-06, C2-01, C2-02, C2-04, C2-05, C2-06, C2-07, C2-08, C2-09, C2-10 |
| `src/app/coimbatore/layout.tsx` | C1-01, C1-02, C1-05, C1-07, C1-08, C1-09, C1-10 |
| `src/app/coimbatore/FAQSection.client.tsx` | C0-01 (CREATE), C0-03, C2-03, C2-07 |

---

*Companion files:*
- *Spec: `seo-audits/aeo/city-pages/coimbatore/AEO-COIMBATORE-SPEC.md`*
- *Plan: `seo-audits/aeo/city-pages/coimbatore/AEO-COIMBATORE-PLAN.md`*
