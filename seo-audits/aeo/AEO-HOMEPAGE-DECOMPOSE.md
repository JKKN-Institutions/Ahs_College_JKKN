# AEO Homepage Decompose — Atomic Task Breakdown

> **Institution:** JKKN College of Allied Health Sciences (https://ahs.jkkn.ac.in/)
> **Created:** 2026-03-28
> **Depends on:** AEO-HOMEPAGE-PLAN.md

## Overview

Every code change from the AEO plan decomposed into atomic task cards with exact file paths, line references, old→new content, dependencies, and testing criteria.

---

## Change 1: Fix Meta Title, Description, Keywords

**File:** `src/app/layout.tsx`
**Type:** MODIFY
**Dependencies:** None
**Priority:** Tier 0 (Critical)

### Task 1.1: Add LAST_UPDATED constant

- **Location:** After line 10 (after Poppins config)
- **Action:** Add `const LAST_UPDATED = "2026-03-28";`
- **Why:** Centralize date for all dateModified references

### Task 1.2: Fix meta title

- **Old:** `"Best Allied Health Science Colleges in Tamilnadu | JKKN"` (65 chars)
- **New:** `"Best Allied Health Sciences College in Tamil Nadu | JKKN"` (57 chars)
- **Why:** Singular authority claim, exact-match primary keyword, proper "Tamil Nadu" spacing

### Task 1.3: Fix meta description

- **Old:** `"JKKN is among the best allied health science colleges in Tamilnadu. Explore BSc allied health science courses with clinical training. Admissions 2026-27!"`
- **New:** `"JKKN College of Allied Health Sciences — 9 B.Sc programs, 95% placement, 500+ bed hospital training. NAAC A+ accredited. Tamil Nadu. Admissions 2026-27!"` (155 chars)
- **Why:** Front-load institution name, include differentiating numbers, authority signal

### Task 1.4: Expand keywords from 5 to 10

**Old keywords (5):**
- best allied health science colleges in tamilnadu
- allied health science courses in tamilnadu
- bsc allied health science colleges in tamilnadu
- top 10 allied health science colleges in tamilnadu
- bsc allied health science courses in tamilnadu

**New keywords (10):**
- best allied health sciences college in tamil nadu
- allied health sciences courses in tamil nadu
- bsc allied health sciences colleges in tamil nadu
- top allied health sciences college tamil nadu
- bsc allied health sciences courses in tamilnadu
- allied health sciences college near erode
- allied health sciences college near salem
- bsc cardiac technology college tamil nadu
- bsc radiology college tamil nadu
- allied health sciences admission 2026

### Testing

- [ ] Title ≤60 chars (57 chars)
- [ ] Description ≤155 chars (155 chars)
- [ ] Primary keyword exact-match in title
- [ ] `npm run build` passes

---

## Change 2: Eager-Load FAQ Section

**File:** `src/app/page.tsx`
**Type:** MODIFY
**Dependencies:** None
**Priority:** Tier 0 (Critical)

### Task 2.1: Replace dynamic FAQ import with static import

- **Old:**
  ```tsx
  const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })), { loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> });
  ```
- **New:**
  ```tsx
  import { FAQ } from "@/components/sections/FAQ";
  ```
- **Why:** Lazy-loaded FAQ = invisible to Googlebot initial HTML. FAQPage schema references content not in initial DOM.

### Testing

- [ ] View source shows FAQ HTML in initial page load
- [ ] FAQ accordion still works (client-side interactivity preserved)
- [ ] No hydration errors in console
- [ ] Bundle size increase acceptable (~3-5KB gzipped)

---

## Change 3: Add faq-answer CSS Class

**File:** `src/components/sections/FAQ.tsx`
**Type:** MODIFY
**Dependencies:** None
**Priority:** Tier 0 (Critical)

### Task 3.1: Add faq-answer class to answer wrapper div

- **Old:**
  ```tsx
  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-gray-600 text-sm leading-relaxed">
  ```
- **New:**
  ```tsx
  <div className="faq-answer px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-gray-600 text-sm leading-relaxed">
  ```
- **Why:** Speakable schema targets `.faq-answer` but class does not exist in homepage HTML.

### Testing

- [ ] Inspect DOM — `.faq-answer` class present on each FAQ answer
- [ ] No styling changes (class is semantic only)
- [ ] Speakable schema cssSelector matches rendered HTML

---

## Change 4: Fix Schema Issues

**Files:** `src/app/layout.tsx`, `src/app/page.tsx`
**Type:** MODIFY
**Dependencies:** Task 1.1 (LAST_UPDATED constant)
**Priority:** Tier 0 (Critical)

### Task 4.1: Use LAST_UPDATED in websiteSchema dateModified

- **Old:** `"dateModified": "2026-03-18"`
- **New:** `"dateModified": LAST_UPDATED`

### Task 4.2: Use LAST_UPDATED in collegeSchema dateModified

- **Old:** `"dateModified": "2026-03-18"`
- **New:** `"dateModified": LAST_UPDATED`

### Task 4.3: Flag aggregateRating for verification

- **Current:** `"ratingCount": "150"`
- **Add comment:** `// [NEEDS VERIFICATION] — verify against GBP listing`

### Task 4.4: Fix Review schema itemReviewed (page.tsx)

- **Old (6 occurrences):**
  ```json
  "itemReviewed": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences" }
  ```
- **New:**
  ```json
  "itemReviewed": { "@id": "https://ahs.jkkn.ac.in/#organization" }
  ```
- **Why:** Use @id reference to avoid duplicate entity definitions.

### Task 4.5: Update speakable dateModified (page.tsx)

- **Old:** `"dateModified": "2026-03-18"`
- **New:** `"dateModified": "2026-03-28"`

### Testing

- [ ] All dateModified values = "2026-03-28"
- [ ] Review schema uses @id reference
- [ ] Schema validation passes (schema.org validator)
- [ ] No duplicate JSON-LD errors

---

## Change 5: Fix Hero Stats

**File:** `src/components/sections/Hero.tsx`
**Type:** MODIFY
**Dependencies:** None
**Priority:** Tier 0 (Critical)

### Task 5.1: Fix program count

- **Old:** `{ label: 'Specialized Programs', value: '8+' }`
- **New:** `{ label: 'Specialized Programs', value: '9' }`
- **Why:** Codebase consistently references 9 programs (verified from course routes + schema).

### Testing

- [ ] Hero displays "9" not "8+"
- [ ] Consistent with courseGraphSchema (9 courses) and programListSchema (9 items)

---

## Change 6: Create SnippetBlock Component

**File (new):** `src/components/sections/SnippetBlock.tsx`
**File (modify):** `src/app/page.tsx`
**Type:** CREATE + MODIFY
**Dependencies:** Change 3 (CSS classes)
**Priority:** Tier 1 (High Impact)

### Task 6.1: Create SnippetBlock.tsx

- Server component — NO `"use client"` directive
- Zero JavaScript — pure HTML rendering
- Three subsections:
  1. **Paragraph snippet** (~80 words) — class: `snippet-answer voice-answer`
  2. **List snippet** (7 bullets) — class: `snippet-answer`
  3. **Table snippet** (9 programs) — class: `snippet-answer`
- 9 internal links to course pages

```tsx
// src/components/sections/SnippetBlock.tsx
// Server component — no "use client"

export function SnippetBlock() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#0b6d41] mb-4">
        What is Allied Health Sciences?
      </h2>

      {/* Paragraph snippet — targets voice search + AI overviews */}
      <p className="snippet-answer voice-answer text-gray-700 text-base leading-relaxed mb-8">
        Allied Health Sciences is a cluster of healthcare professions that support, diagnose,
        and treat patients alongside doctors and nurses. At JKKN College of Allied Health
        Sciences in Komarapalayam, Tamil Nadu, students train across 9 B.Sc programs —
        from Cardiac Technology to Radiology — inside a 500+ bed multi-specialty teaching
        hospital. Graduates qualify for clinical roles in government hospitals, private
        healthcare chains, and international healthcare systems including NHS UK.
      </p>

      {/* List snippet — targets "how to" and list-format PAA */}
      <h2 className="text-2xl font-semibold text-[#0b6d41] mb-4">
        Allied Health Sciences Courses at JKKN
      </h2>
      <ul className="snippet-answer list-disc list-inside space-y-2 text-gray-700 mb-8">
        <li><a href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Cardiac Technology</a> — 3 years, cardiac diagnostics and ICU support</li>
        <li><a href="/dialysis-technology" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Dialysis Technology</a> — 3 years, renal care and dialysis operations</li>
        <li><a href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Radiology and Imaging Technology</a> — 3 years, X-ray, MRI, CT imaging</li>
        <li><a href="/operation-theatre-anaesthesia" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Operation Theatre and Anaesthesia Technology</a> — 3 years, OT and anaesthesia support</li>
        <li><a href="/respiratory-therapy" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Respiratory Therapy</a> — 3 years, pulmonology and ventilator care</li>
        <li><a href="/physician-assistant" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Physician Assistant</a> — 3 years, clinical assistant to specialist physicians</li>
        <li><a href="/critical-care-technology" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Critical Care Technology</a> — 3 years, ICU and emergency critical care</li>
        <li><a href="/medical-record-science" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Medical Record Science</a> — 3 years, health informatics and hospital records</li>
        <li><a href="/accident-emergency-care" className="text-[#0b6d41] font-semibold hover:underline">B.Sc Accident and Emergency Care</a> — 3 years, emergency medicine and trauma care</li>
      </ul>

      {/* Table snippet — targets comparison and structured data PAA */}
      <h2 className="text-2xl font-semibold text-[#0b6d41] mb-4">
        B.Sc Allied Health Sciences Programs — Quick Comparison
      </h2>
      <div className="snippet-answer overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse border border-gray-200">
          <thead className="bg-[#0b6d41] text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-200">Program</th>
              <th className="px-4 py-2 border border-gray-200">Duration</th>
              <th className="px-4 py-2 border border-gray-200">Career Outcome</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Cardiac Technology", "3 Years", "Cardiac Technician, ICU Specialist"],
              ["Dialysis Technology", "3 Years", "Dialysis Technician, Renal Care Specialist"],
              ["Radiology and Imaging Technology", "3 Years", "Radiographer, Imaging Technologist"],
              ["Operation Theatre and Anaesthesia", "3 Years", "OT Technician, Anaesthesia Technician"],
              ["Respiratory Therapy", "3 Years", "Respiratory Therapist, Pulmonology Support"],
              ["Physician Assistant", "3 Years", "Clinical Assistant, Specialist Support"],
              ["Critical Care Technology", "3 Years", "ICU Technician, Critical Care Specialist"],
              ["Medical Record Science", "3 Years", "Medical Records Officer, Health Informatics"],
              ["Accident and Emergency Care", "3 Years", "Emergency Technician, Trauma Care Specialist"],
            ].map(([program, duration, career], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 border border-gray-200 font-medium">{program}</td>
                <td className="px-4 py-2 border border-gray-200">{duration}</td>
                <td className="px-4 py-2 border border-gray-200">{career}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
```

### Task 6.2: Import and place in page.tsx

- **Add import:**
  ```tsx
  import { SnippetBlock } from "@/components/sections/SnippetBlock";
  ```
- **Placement:** Between `<AboutSection />` and `<Programs />`
  ```tsx
  <AboutSection />
  <SnippetBlock />
  <Programs />
  ```

### Testing

- [ ] Component renders as server component (no `"use client"`)
- [ ] View source shows all 3 snippet formats in initial HTML
- [ ] Table is responsive (`overflow-x-auto` on mobile)
- [ ] All 9 course links point to correct slugs
- [ ] CSS classes `.snippet-answer` and `.voice-answer` present in DOM

---

## Change 7: Expand FAQ with 5 PAA Questions

**Files:** `src/components/sections/FAQ.tsx`, `src/app/page.tsx`
**Type:** MODIFY (both files)
**Dependencies:** Change 2 (eager-load), Change 3 (faq-answer class)
**Priority:** Tier 1 (High Impact)

### Task 7.1: Add 5 questions to FAQ.tsx faqs array

Add these 5 entries to the existing `faqs` array:

```tsx
{
  question: "How much does B.Sc Allied Health Sciences cost in Tamil Nadu?",
  answer: (
    <>
      B.Sc Allied Health Sciences tuition fees in Tamil Nadu range from ₹50,000 to ₹1,20,000 per year depending on the institution and program. At JKKN College of Allied Health Sciences, fees are structured to be affordable, with scholarship options available for merit and economically weaker students. Government scholarships, bank education loans, and management fee waivers are also available. Contact our <a href="/contact" className="text-[#0b6d41] font-semibold hover:underline">admissions office</a> for exact fee details and scholarship eligibility.
    </>
  )
},
{
  question: "Is NEET required for B.Sc Allied Health Sciences admission?",
  answer: (
    <>
      No, NEET is not required for B.Sc Allied Health Sciences admission in Tamil Nadu. Eligibility is based on 10+2 (HSC) marks with Physics, Chemistry, and Biology (PCB) as core subjects. A minimum of 45–50% aggregate in PCB is typically required. Admission is through counseling based on academic merit. For detailed eligibility and the current admission process at JKKN AHS, visit our <a href="/contact" className="text-[#0b6d41] font-semibold hover:underline">admissions page</a>.
    </>
  )
},
{
  question: "What is the salary after B.Sc Allied Health Sciences in India?",
  answer: (
    <>
      Starting salaries for B.Sc Allied Health Sciences graduates in India range from ₹2.5 LPA to ₹4.5 LPA in government and private hospitals. Specialized roles such as <a href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">Cardiac Technicians</a> and <a href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">Radiology Technologists</a> can earn ₹4–6 LPA with 2–3 years of experience. International placements — particularly with NHS UK — offer significantly higher compensation. JKKN AHS graduates achieve a 95% placement rate with top healthcare recruiters across India.
    </>
  )
},
{
  question: "Which is better — B.Sc Nursing or B.Sc Allied Health Sciences?",
  answer: (
    <>
      Both are strong healthcare careers, but they differ in scope. B.Sc Nursing focuses on patient care, medication, and bedside management — primarily hospital-based. B.Sc Allied Health Sciences covers specialized diagnostic and therapeutic roles such as <a href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">radiology</a>, <a href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">cardiac technology</a>, and <a href="/critical-care-technology" className="text-[#0b6d41] font-semibold hover:underline">critical care</a>. Allied Health graduates often have stronger international placement opportunities and can specialize further with postgraduate programs. The right choice depends on your interest in direct patient care versus clinical diagnostics.
    </>
  )
},
{
  question: "What are the job opportunities after Allied Health Sciences?",
  answer: (
    <>
      Allied Health Sciences graduates are in high demand across government hospitals, private healthcare chains, diagnostics centers, and international healthcare systems. Key roles include Cardiac Technician, Radiographer, Dialysis Technician, OT Technician, Respiratory Therapist, and Medical Records Officer. JKKN AHS graduates are placed with Apollo Hospitals, Fortis, NHS UK, and 60+ recruiters. International opportunities exist in the UK, UAE, Saudi Arabia, and Singapore. Explore <a href="/placements" className="text-[#0b6d41] font-semibold hover:underline">our full placement data</a> for recruiter details.
    </>
  )
},
```

### Task 7.2: Add 5 matching entries to faqSchema in page.tsx

Add these 5 entries to the existing `faqSchema.mainEntity` array. Schema answers must be ≤29 words (voice-optimized):

```json
{
  "@type": "Question",
  "name": "How much does B.Sc Allied Health Sciences cost in Tamil Nadu?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "B.Sc Allied Health Sciences fees range from ₹50,000 to ₹1,20,000 per year. Scholarships and government fee waivers are available for eligible students."
  }
},
{
  "@type": "Question",
  "name": "Is NEET required for B.Sc Allied Health Sciences admission?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "No, NEET is not required. Admission is based on 10+2 PCB marks with minimum 45–50% aggregate through merit-based counseling."
  }
},
{
  "@type": "Question",
  "name": "What is the salary after B.Sc Allied Health Sciences in India?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Starting salaries range from ₹2.5 to ₹4.5 LPA. Specialized roles earn ₹4–6 LPA with experience. International placements offer significantly higher compensation."
  }
},
{
  "@type": "Question",
  "name": "Which is better — B.Sc Nursing or B.Sc Allied Health Sciences?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Nursing focuses on patient care and bedside management. Allied Health Sciences covers diagnostic specializations like radiology and cardiac technology with stronger international placement opportunities."
  }
},
{
  "@type": "Question",
  "name": "What are the job opportunities after Allied Health Sciences?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Graduates work as Cardiac Technicians, Radiographers, Dialysis Technicians, and OT Technicians in Apollo, Fortis, NHS UK, and 60+ recruiters with 95% placement rate."
  }
}
```

### Testing

- [ ] FAQ component shows 15 items total (original 10 + 5 new)
- [ ] `faqSchema.mainEntity` has 15 entries
- [ ] Question text matches EXACTLY between component and schema
- [ ] Schema answers ≤29 words
- [ ] Each new FAQ answer has at least 1 internal link
- [ ] Accordion expand/collapse works for all 15

---

## Change 8: Add voice-answer Class to Hero

**File:** `src/components/sections/Hero.tsx`
**Type:** MODIFY
**Dependencies:** None
**Priority:** Tier 1

### Task 8.1: Add voice-answer to Hero subtitle paragraph

- **Old:**
  ```tsx
  <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
  ```
- **New:**
  ```tsx
  <p className="voice-answer text-sm sm:text-base text-white/90 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
  ```

### Testing

- [ ] `.voice-answer` class present on Hero subtitle in DOM
- [ ] No visual change at any breakpoint
- [ ] Speakable schema can target it via cssSelector

---

## Change 9: Expand WhyChoose Descriptions

**File:** `src/components/sections/WhyChoose.tsx`
**Type:** MODIFY
**Dependencies:** None
**Priority:** Tier 2

### Task 9.1: Expand all 5 reason descriptions from ~15–33 words to 40–60 words

**Reason 1 — 70+ Year Legacy:**
- Add: geographic signals (NH-544, Komarapalayam, near Erode and Salem), founding year (1952)
- **New text (example):** "Founded in 1952, JKKN has over 70 years of healthcare education legacy. Located on NH-544 in Komarapalayam, Tamil Nadu — just 22 km from Erode and 58 km from Salem — our campus provides students from across the region direct access to world-class allied health training in a recognized institution."

**Reason 2 — Advanced Laboratories:**
- Add: specific counts (10+ specialized labs), equipment types
- **New text (example):** "Our 10+ specialized laboratories include cardiac simulation labs, radiology imaging suites, anatomy labs, and clinical skills centers. Students practice on industry-standard equipment — from 12-lead ECG machines to MRI simulators — ensuring clinical competency before hospital rotations. Explore our <a href='/lab'>campus lab facilities</a>."

**Reason 3 — Hospital Partnerships:**
- Add: training hours (2,000+), bed count (500+)
- **New text (example):** "Students complete 2,000+ clinical training hours inside our 500+ bed multi-specialty teaching hospital on campus. From Year 1, learners rotate through cardiology, nephrology, radiology, OT, ICU, and emergency departments — gaining real patient exposure that most allied health colleges provide only in the final year."

**Reason 4 — 95% Placement Rate:**
- Add: specific recruiter names, salary range, international details
- **New text (example):** "95% of JKKN AHS graduates secure employment within 6 months of graduation. Recruiters include Apollo Hospitals, Fortis, NHS UK, Cleveland Clinic Abu Dhabi, and 60+ healthcare organizations. Domestic salary packages start at ₹2.5–4.5 LPA; international placements in the UK and UAE offer significantly higher compensation. See our <a href='/placements'>placement records</a>."

**Reason 5 — Clinical Training Excellence:**
- Add: specific department mentions (ICU, OT, radiology, cardiac)
- **New text (example):** "Clinical training at JKKN AHS spans ICU management, OT assistance, cardiac diagnostics, radiology imaging, respiratory care, and emergency medicine. Unlike theoretical-only programs, our students work alongside senior clinicians in live hospital settings — developing the procedural confidence and patient communication skills that hospitals actively seek during recruitment."

### Task 9.2: Add internal links to lab and placements

- "Advanced Laboratories" card description → link to `/lab`
- "95% Placement Rate" card description → link to `/placements`

### Testing

- [ ] Each description is 40–60 words
- [ ] Geographic signals present (NH-544, Komarapalayam, Erode, Salem)
- [ ] Specific numbers included in each card
- [ ] Links to `/lab` and `/placements` work and return 200
- [ ] Card layout not broken on mobile (320px, 375px)
- [ ] No text overflow or wrapping issues on any breakpoint

---

## Change 10: Expand AboutSection Content

**File:** `src/components/sections/AboutSection.tsx`
**Type:** MODIFY
**Dependencies:** None
**Priority:** Tier 2

### Task 10.1: Add third paragraph (~70 words)

Add after the existing second paragraph:

```tsx
<p className="text-gray-600 text-base leading-relaxed mb-4">
  Situated on NH-544 in Komarapalayam — near{" "}
  <a href="/erode" className="text-[#0b6d41] font-semibold hover:underline">Erode</a> (22 km) and{" "}
  <a href="/salem" className="text-[#0b6d41] font-semibold hover:underline">Salem</a> (58 km) — our campus
  offers <a href="/NAAC" className="text-[#0b6d41] font-semibold hover:underline">NAAC A+ accredited</a> education
  with a 500+ bed teaching hospital, 10+{" "}
  <a href="/lab" className="text-[#0b6d41] font-semibold hover:underline">specialized laboratories</a>, and
  on-campus <a href="/hostel" className="text-[#0b6d41] font-semibold hover:underline">hostel accommodation</a>.
  Students from across Tamil Nadu and India choose JKKN AHS for its 95% placement rate, clinical-first
  curriculum, and strong recruiter network spanning government hospitals, private chains, and international
  healthcare systems.
</p>
```

### Task 10.2: Add 2 bullet points to existing list

Add after the last existing bullet point:

```tsx
<li className="flex items-start gap-2">
  <span className="text-[#0b6d41] font-bold mt-1">✓</span>
  <span>NAAC A+ Accredited with 70+ year legacy</span>
</li>
<li className="flex items-start gap-2">
  <span className="text-[#0b6d41] font-bold mt-1">✓</span>
  <span>500+ bed multi-specialty teaching hospital for clinical training</span>
</li>
```

### Testing

- [ ] 3 paragraphs visible in About section
- [ ] 5 bullet points total (original 3 + 2 new)
- [ ] All 5 internal links work and return 200
- [ ] Layout preserved on all breakpoints (320px, 768px, 1024px, 1280px)
- [ ] No text overflow on mobile

---

## Change 11: Enhance Internal Linking

**Files:** `src/components/sections/AboutSection.tsx`, `src/components/sections/WhyChoose.tsx`, `src/components/sections/CTASection.tsx`
**Type:** MODIFY
**Dependencies:** Changes 9–10
**Priority:** Tier 2

### Task 11.1: AboutSection links

New contextual links added via Task 10.1 third paragraph:
- `/erode` — "near Erode (22 km)"
- `/salem` — "and Salem (58 km)"
- `/NAAC` — "NAAC A+ accredited"
- `/lab` — "specialized laboratories"
- `/hostel` — "hostel accommodation"

### Task 11.2: WhyChoose links

New links from Task 9.2:
- `/lab` — from "Advanced Laboratories" card
- `/placements` — from "95% Placement Rate" card

### Task 11.3: CTASection links

Enhance CTA section description with contextual links:
- Link to `/cardiac-technology` from mention of Cardiac Technology
- Link to `/lab` from mention of laboratory/facilities
- Link to `/placements` from mention of placement/career outcomes

**CTA description example:**
```tsx
<p className="text-white/90 text-base leading-relaxed">
  Join 95% of JKKN AHS graduates who secure healthcare placements — from{" "}
  <a href="/cardiac-technology" className="text-white font-semibold underline hover:text-[#ffde59]">
    Cardiac Technology
  </a>{" "}
  to Radiology — backed by{" "}
  <a href="/lab" className="text-white font-semibold underline hover:text-[#ffde59]">
    10+ specialized labs
  </a>{" "}
  and a 500+ bed teaching hospital. See our{" "}
  <a href="/placements" className="text-white font-semibold underline hover:text-[#ffde59]">
    full placement records
  </a>.
</p>
```

### Testing

- [ ] ~10 new contextual internal links total across 3 files
- [ ] All links use consistent styling:
  - Body links: `text-[#0b6d41] font-semibold hover:underline`
  - CTA links (dark bg): `text-white font-semibold underline hover:text-[#ffde59]`
- [ ] No 404s on any new link (check `/erode`, `/salem`, `/NAAC`, `/lab`, `/hostel`, `/placements`)
- [ ] Links feel natural in context — not keyword-stuffed
- [ ] Link density does not exceed 1 link per 50 words

---

## Execution Order (Dependency-Safe Sequence)

Run tasks in this exact order to avoid dependency failures:

| Step | Change | Task | File | Reason |
|------|--------|------|------|--------|
| 1 | Change 1 | 1.1 | `layout.tsx` | Add LAST_UPDATED constant first — required by Change 4 |
| 2 | Change 1 | 1.2–1.4 | `layout.tsx` | Meta fixes — no dependencies |
| 3 | Change 5 | 5.1 | `Hero.tsx` | Hero stat fix — no dependencies |
| 4 | Change 8 | 8.1 | `Hero.tsx` | voice-answer class — no dependencies, same file as Change 5 |
| 5 | Change 3 | 3.1 | `FAQ.tsx` | faq-answer class — required before Change 7 |
| 6 | Change 4 | 4.1–4.5 | `layout.tsx`, `page.tsx` | Schema fixes — requires Task 1.1 done |
| 7 | Change 2 | 2.1 | `page.tsx` | Eager-load FAQ — requires faq-answer class from Change 3 |
| 8 | Change 7 | 7.1 | `FAQ.tsx` | Add 5 FAQ questions — requires eager-load done |
| 9 | Change 7 | 7.2 | `page.tsx` | Add 5 schema entries — must match FAQ.tsx questions exactly |
| 10 | Change 6 | 6.1 | `SnippetBlock.tsx` | Create new component — no file dependencies |
| 11 | Change 6 | 6.2 | `page.tsx` | Import SnippetBlock — requires Change 6.1 done |
| 12 | Change 9 | 9.1–9.2 | `WhyChoose.tsx` | Expand descriptions — no dependencies |
| 13 | Change 10 | 10.1–10.2 | `AboutSection.tsx` | Add paragraph + bullets — no dependencies |
| 14 | Change 11 | 11.1–11.3 | `AboutSection.tsx`, `WhyChoose.tsx`, `CTASection.tsx` | Link enhancement — requires Changes 9–10 done |
| 15 | ALL | — | — | `npm run build` — final verification |

---

## Final Verification Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | `npm run build` — zero errors | |
| 2 | FAQ HTML in initial DOM (not lazy-loaded) | |
| 3 | `.faq-answer` class present on all FAQ answers | |
| 4 | `.snippet-answer` class present in SnippetBlock | |
| 5 | `.voice-answer` class present in Hero + SnippetBlock | |
| 6 | Title = `"Best Allied Health Sciences College in Tamil Nadu \| JKKN"` | |
| 7 | All JSON-LD validates on schema.org Rich Results Test | |
| 8 | 15 FAQ items in component = 15 entries in faqSchema | |
| 9 | All internal links return 200 — no 404s | |
| 10 | Responsive verified: 320px, 375px, 768px, 1024px, 1280px | |
| 11 | Content reads naturally — no keyword-stuffing feel | |
| 12 | Homepage word count ~2,550 words | |
| 13 | All dateModified values = "2026-03-28" | |
| 14 | Hero stat shows "9" (not "8+") | |
| 15 | Review schema uses `@id` reference (no duplicate entity) | |
