# AEO Task Decomposition — Allied Health Science College in Namakkal

> **Document Type:** Answer Engine Optimization Task Cards
> **Site:** https://ahs.jkkn.ac.in/namakkal/
> **Institution:** JKKN College of Allied Health Sciences
> **Date:** 2026-03-28
> **Companion Files:** `AEO-NAMAKKAL-SPEC.md` | `AEO-NAMAKKAL-PLAN.md`
> **Total Tasks:** 16 (Tier 0: 3 | Tier 1: 6 | Tier 2: 7)

---

## Task Card Format

Each task card contains:
- **ID** — Unique reference (T-01 through T-16)
- **Tier** — 0 (Critical) / 1 (High-Impact) / 2 (Completeness)
- **Files** — Exact file paths and line numbers
- **What to Change** — Specific, actionable instruction
- **Exact Content** — Exact text/code to add or replace
- **Verification** — How to confirm the fix worked
- **Dependencies** — Tasks that must complete first

---

## TIER 0 — CRITICAL BLOCKERS

---

### T-01: Fix Duplicate H2 Headings

**Tier:** 0 | **Priority:** CRITICAL
**Est. Dev Time:** 10 minutes
**Files:**
- `src/app/namakkal/page.tsx` — line 226 (WhyChooseSection H2)
- `src/app/namakkal/page.tsx` — line 681 (CompetitiveAdvantageSection H2)

**Problem:** Both sections use identical H2 text "Why Namakkal Students Choose JKKN AHS". Duplicate H2s create ambiguity for search engines about which section is the authoritative answer for this query angle.

**What to Change:**

In WhyChooseSection (line 226), change:
```tsx
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
  Why Namakkal Students Choose JKKN AHS
</h2>
```
To:
```tsx
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
  Why Study Allied Health Sciences in Namakkal?
</h2>
```

In CompetitiveAdvantageSection (line 681), change:
```tsx
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
  Why Namakkal Students Choose JKKN AHS
</h2>
```
To:
```tsx
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
  JKKN AHS Competitive Advantage in Namakkal District
</h2>
```

**Verification:** Run `grep -n "Why Namakkal Students Choose JKKN AHS" src/app/namakkal/page.tsx` — should return 0 results after fix.
**Dependencies:** None — can execute independently.

---

### T-02: Fix FAQ Rendering — Remove JavaScript Gating

**Tier:** 0 | **Priority:** CRITICAL (Highest impact single fix)
**Est. Dev Time:** 60–90 minutes
**Files:**
- `src/app/namakkal/page.tsx` — lines 710–804 (FAQSection component)
- `src/app/namakkal/page.tsx` — line 1 (`"use client"` directive)

**Problem:** The `FAQSection()` component at lines 710–804 uses `useState<number | null>(0)` (line 758) to control accordion visibility. The conditional `{open === i && (<div className="faq-answer...">)}` at line 792–798 means all 11 FAQ answer texts are absent from the server-rendered HTML. Googlebot's initial parse sees only the questions, not the answers. The FAQPage schema in layout.tsx has all 11 entries, but schema without matching visible content gets lower trust signals.

**Why `"use client"` matters:** The `"use client"` directive at page.tsx line 1 forces Next.js to client-side render the ENTIRE page. This means even server-capable components (WhyChooseSection, ProgrammesSection, HowToReachSection) get CSR'd. The priority fix is FAQ, but ultimately the goal is to make page.tsx a server component.

**Recommended Fix — Option A (CSS-Only Details/Summary):**

Replace the entire FAQSection component (lines 710–804) with this implementation:

```tsx
function FAQSection() {
  const faqs = [
    {
      q: "What is the best allied health sciences college in Namakkal?",
      a: "JKKN College of Allied Health Sciences, located just 5–10 km from Namakkal on NH-544, is widely regarded as one of the top allied health sciences colleges in Namakkal district. Approved by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
    },
    {
      q: "How far is JKKN AHS from Namakkal?",
      a: "JKKN AHS is approximately 5–10 km from Namakkal city centre, which takes about 15–20 minutes by road via NH-544 (Salem-Coimbatore Highway). Regular bus services are available from Namakkal to Komarapalayam.",
    },
    {
      q: "What is Allied Health Sciences?",
      a: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN AHS you can study cardiac technology, dialysis technology, radiology, operation theatre technology, respiratory therapy, and more.",
    },
    {
      q: "How is Allied Health Sciences different from nursing?",
      a: "While nursing focuses on patient care and bedside support, Allied Health Sciences covers specialised diagnostic and therapeutic roles like ECG monitoring, radiology imaging, dialysis operations, and operation theatre assistance. Both are healthcare careers, but AHS offers more technical specialisation.",
    },
    {
      q: "Does JKKN AHS provide hostel for Namakkal students?",
      a: "Yes. JKKN AHS provides separate hostel facilities for boys and girls on campus. Students from Namakkal city can also opt for daily commute — the campus is just 15–20 minutes away. College transport buses operate daily from Namakkal and surrounding areas.",
    },
    {
      q: "How can I apply for admission at JKKN AHS?",
      a: "Apply online at https://admission.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Call +91 9345855001 for guidance from the admissions team.",
    },
    {
      q: "What are the fees for BSc allied health science in Tamil Nadu?",
      a: "BSc Allied Health Science fees at JKKN AHS are competitively priced with scholarship options for meritorious students. Contact the admissions office at +91 9345855001 for the latest fee structure for your chosen programme.",
    },
    {
      q: "What is the salary after BSc allied health science?",
      a: "BSc Allied Health Science graduates typically earn ₹2.5–4.5 LPA in India starting salary, rising to ₹6–12 LPA with experience. International placements in Gulf countries, UK NHS, and Australia offer ₹8–25 LPA. JKKN AHS graduates benefit from 85%+ placement support.",
    },
    {
      q: "How many allied health science colleges are there in Namakkal?",
      a: "Namakkal district has several allied health science colleges including JKKN AHS, Vivekanandha AHS, Jayamadhi College, Paavai Institute, PGP Institute, and Annai JKK Sampoorani Ammal College. JKKN AHS is the closest to Namakkal city centre (5–10 km) and offers the widest selection of 9 BSc programmes with NAAC approval.",
    },
    {
      q: "What are the eligibility requirements for allied health science courses?",
      a: "Candidates must have passed 12th standard (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with a minimum aggregate of 50% (40% for reserved categories). Admission is merit-based and through Tamil Nadu government counselling. JKKN AHS is affiliated to Tamil Nadu Dr. MGR Medical University.",
    },
    {
      q: "Is JKKN AHS a government or private college?",
      a: "JKKN College of Allied Health Sciences is a private self-financing institution under the JKKN Group of Institutions, established in 1952. It is NAAC approved and affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai. It is recognised by the Tamil Nadu government for merit counselling.",
    },
  ];

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Allied Health Sciences College in Namakkal — Your Questions Answered
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="text-left flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="rounded-2xl border border-gray-200 bg-white group open:border-[#7cb983]"
              open={i === 0}
            >
              <summary className="w-full flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                <span className="font-semibold text-gray-900 text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="faq-answer snippet-answer px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
```

After this change, remove `useState` import from line 3 (if no other component uses it) and evaluate if `"use client"` can be removed from line 1.

**NOTE on `"use client"` removal:** If no other component in page.tsx uses React hooks, browser APIs, or event handlers that require client-side rendering, you can remove `"use client"` from line 1. Check each component:
- TopBanner: No hooks — safe to SSR
- HeroSection: No hooks — safe to SSR
- AffiliationBar: No hooks — safe to SSR
- DistanceCard: No hooks — safe to SSR
- WhyChooseSection: No hooks — safe to SSR
- ProgrammesSection: No hooks — safe to SSR
- PlacementHighlights: No hooks — safe to SSR
- CompetitiveAdvantageSection: No hooks — safe to SSR
- HowToReachSection: No hooks — safe to SSR
- FacilitiesSection: No hooks — safe to SSR
- CampusGallerySection: No hooks — safe to SSR
- FAQSection (after fix): No hooks — safe to SSR
- ExploreCitiesSection: Uses `sessionStorage.setItem` (line 847) — keep as client OR use a separate client event handler

**Verdict:** The only CSR dependency after the FAQ fix is the `sessionStorage` call on line 847. Extract that into a small `onClick` handler in a separate `"use client"` component, then remove `"use client"` from page.tsx.

**Verification:**
1. Run `npm run build` — no TypeScript errors
2. View page source in browser — FAQ answers should be visible in `<details>` elements
3. Run Google Rich Results Test on the live URL — FAQPage schema should show all entries as valid
4. Confirm `.faq-answer` class is present in initial HTML (not injected by JS)

**Dependencies:** None — execute first in Tier 0.

---

### T-03: Fix Title Tag — Reduce to ≤60 Characters

**Tier:** 0 | **Priority:** CRITICAL
**Est. Dev Time:** 5 minutes
**Files:**
- `src/app/namakkal/layout.tsx` — lines 3–6 (title inside `createPageMetadata`)

**Problem:** Current title is 74 characters — 14 over the 60-character Google display limit.

**Current value (line 4):**
```ts
title: "Allied Health Science College in Namakkal | JKKN AHS — Admissions 2026-27",
```

**Replace with (49 characters):**
```ts
title: "Allied Health Science College Namakkal | JKKN AHS",
```

**Verification:** Count characters: "Allied Health Science College Namakkal | JKKN AHS" = 49 characters ✓

**Dependencies:** None.

---

## TIER 1 — HIGH-IMPACT AEO WINS

---

### T-04: Add Paragraph Snippet Block

**Tier:** 1 | **Priority:** HIGH
**Est. Dev Time:** 20 minutes
**Files:**
- `src/app/namakkal/page.tsx` — add new component, insert after HeroSection in NamakkalPage return (after line 25)

**What to Add:**

Add a new component before `AffiliationBar`:

```tsx
function SnippetIntroBlock() {
  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="snippet-answer text-gray-700 text-base leading-relaxed text-center">
          JKKN College of Allied Health Sciences is the leading allied health sciences college
          in Namakkal district, located in Komarapalayam on NH-544 — just 5–10 km from
          Namakkal city centre. Offering 9 BSc programmes with 85%+ placement support and
          NAAC approval, JKKN AHS is affiliated to Tamil Nadu Dr. MGR Medical University, Chennai.
          Admissions open for 2026-27.
        </p>
      </div>
    </section>
  );
}
```

Then in the `NamakkalPage` return, add `<SnippetIntroBlock />` between `<HeroSection />` and `<AffiliationBar />`:

```tsx
<HeroSection />
<SnippetIntroBlock />
<AffiliationBar />
```

**Why this works:** The paragraph is ~55 words, starts with the institution name, mentions the city name, includes the primary differentiators (9 BSc, 85%+, NAAC, MGR University), and uses `class="snippet-answer"` which is already targeted by the Speakable schema in layout.tsx.

**Verification:**
- View page source — paragraph must be in initial HTML
- Paragraph text contains "Namakkal district", "NH-544", "5–10 km", "9 BSc", "85%+"
- `.snippet-answer` class present on the `<p>` element

**Dependencies:** T-02 (recommended to complete `"use client"` removal first, though this task can run independently)

---

### T-05: Add Programme List Snippet Block

**Tier:** 1 | **Priority:** HIGH
**Est. Dev Time:** 25 minutes
**Files:**
- `src/app/namakkal/page.tsx` — add new component, insert after DistanceCard

**What to Add:**

```tsx
function ProgrammeSnippetBlock() {
  return (
    <section className="bg-[#FBFBEE] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
          BSc Allied Health Science Programmes at JKKN — Namakkal District
        </h2>
        <ul className="snippet-answer grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Cardiac Technology — 30 seats, 3+1 years
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Dialysis Technology — 40 seats, 3+1 years
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Radiology &amp; Imaging Technology — 40 seats, 3+1 years
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Operation Theatre &amp; Anaesthesia Technology — 40 seats, 3+1 years
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Respiratory Therapy — 30 seats, 3+1 years
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Physician Assistant — 40 seats, 3+1 years
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Critical Care Technology — 30 seats, 3+1 years
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Medical Record Science — 30 seats, 3+1 years
          </li>
          <li className="flex items-center gap-2 sm:col-span-2">
            <span className="w-2 h-2 rounded-full bg-[#006837] flex-shrink-0"></span>
            B.Sc. Accident &amp; Emergency Care Technology — 30 seats, 3+1 years
          </li>
        </ul>
        <p className="text-xs text-gray-400 text-center mt-4">
          All programmes affiliated to Tamil Nadu Dr. MGR Medical University, Chennai.
          Eligibility: 10+2 with Physics, Chemistry, Biology (min. 50%).
        </p>
      </div>
    </section>
  );
}
```

In `NamakkalPage` return, insert after `<DistanceCard />`:
```tsx
<DistanceCard />
<ProgrammeSnippetBlock />
<WhyChooseSection />
```

**Verification:**
- View source — `<ul class="snippet-answer">` with 9 `<li>` items visible in initial HTML
- Each `<li>` contains programme name, seat count, and duration
- Section does not duplicate the `ProgrammesSection` grid (this is a text-list; ProgrammesSection is cards)

**Dependencies:** T-02 (for `"use client"` removal)

---

### T-06: Add Distance Table in HowToReachSection

**Tier:** 1 | **Priority:** HIGH
**Est. Dev Time:** 20 minutes
**Files:**
- `src/app/namakkal/page.tsx` — inside `HowToReachSection()`, after the header card (around line 523, before route items)

**What to Add:**

Inside `HowToReachSection`, after the green header card `<div>` (after line 523) and before the route items `<div>` (line 525), add:

```tsx
{/* Distance Table — Snippet Target */}
<div className="bg-[#FBFBEE] px-4 py-4">
  <table className="snippet-answer w-full text-sm text-left border-collapse">
    <caption className="text-xs text-gray-400 text-center mb-3 font-medium">
      Distance from major cities to JKKN AHS Campus (Namakkal District)
    </caption>
    <thead>
      <tr className="border-b border-gray-200">
        <th className="py-2 pr-4 font-semibold text-gray-700">City</th>
        <th className="py-2 pr-4 font-semibold text-gray-700">Distance</th>
        <th className="py-2 pr-4 font-semibold text-gray-700">Time</th>
        <th className="py-2 font-semibold text-gray-700">Via</th>
      </tr>
    </thead>
    <tbody className="text-gray-600">
      <tr className="border-b border-gray-100">
        <td className="py-2 pr-4">Namakkal (city)</td>
        <td className="py-2 pr-4">5–10 km</td>
        <td className="py-2 pr-4">15–20 min</td>
        <td className="py-2">NH-544 / Bus</td>
      </tr>
      <tr className="border-b border-gray-100">
        <td className="py-2 pr-4">Tiruchengode</td>
        <td className="py-2 pr-4">~15 km</td>
        <td className="py-2 pr-4">20–25 min</td>
        <td className="py-2">NH-544</td>
      </tr>
      <tr className="border-b border-gray-100">
        <td className="py-2 pr-4">Erode</td>
        <td className="py-2 pr-4">~22 km</td>
        <td className="py-2 pr-4">35–40 min</td>
        <td className="py-2">NH-544</td>
      </tr>
      <tr className="border-b border-gray-100">
        <td className="py-2 pr-4">Salem</td>
        <td className="py-2 pr-4">~58 km</td>
        <td className="py-2 pr-4">~1 hr</td>
        <td className="py-2">NH-544</td>
      </tr>
      <tr className="border-b border-gray-100">
        <td className="py-2 pr-4">Tiruppur</td>
        <td className="py-2 pr-4">~67 km</td>
        <td className="py-2 pr-4">~1.5 hrs</td>
        <td className="py-2">NH-544</td>
      </tr>
      <tr>
        <td className="py-2 pr-4">Coimbatore</td>
        <td className="py-2 pr-4">~105 km</td>
        <td className="py-2 pr-4">~2 hrs</td>
        <td className="py-2">NH-544</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Note:** Distances in this table use MEMORY.md verified values — these are DIFFERENT from the current ExploreCitiesSection distances (which are wrong). This table should be the authoritative distance source.

**Verification:**
- View source — `<table class="snippet-answer">` visible in initial HTML
- 6 rows with correct distances (5-10 km Namakkal, 22 km Erode, 58 km Salem, 67 km Tiruppur, 105 km Coimbatore)

**Dependencies:** None (table is pure HTML, no interactivity)

---

### T-07: Add Course Schema (9 Programmes)

**Tier:** 1 | **Priority:** HIGH
**Est. Dev Time:** 45 minutes
**Files:**
- `src/app/namakkal/layout.tsx` — add after the `educationalOrgSchema` object (after line 203), before the `speakableSchema`

**What to Add:**

Add a new constant before the `speakableSchema` declaration:

```ts
const courseListSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "B.Sc. Cardiac Technology",
      "description": "3-year undergraduate programme in cardiac diagnostic procedures including ECG, echocardiography, and cardiac catheterisation at JKKN College of Allied Health Sciences, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/cardiac-technology",
      "inLanguage": "en",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "location": {
          "@type": "Place",
          "name": "JKKN College of Allied Health Sciences",
          "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" }
        }
      }
    },
    {
      "@type": "Course",
      "name": "B.Sc. Dialysis Technology",
      "description": "3-year undergraduate programme in renal dialysis procedures, kidney care technology, and dialysis machine operation at JKKN AHS, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/dialysis-technology",
      "inLanguage": "en",
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "JKKN College of Allied Health Sciences", "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" } } }
    },
    {
      "@type": "Course",
      "name": "B.Sc. Radiology & Imaging Technology",
      "description": "3-year programme in diagnostic radiology, X-ray, CT scan, MRI imaging, and ultrasound technology at JKKN AHS, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology",
      "inLanguage": "en",
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "JKKN College of Allied Health Sciences", "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" } } }
    },
    {
      "@type": "Course",
      "name": "B.Sc. Operation Theatre & Anaesthesia Technology",
      "description": "3-year programme in surgical assistance, anaesthesia administration, and operation theatre management at JKKN AHS, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia",
      "inLanguage": "en",
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "JKKN College of Allied Health Sciences", "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" } } }
    },
    {
      "@type": "Course",
      "name": "B.Sc. Respiratory Therapy",
      "description": "3-year programme in respiratory care, ventilator management, pulmonary function testing, and critical care respiratory support at JKKN AHS, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/respiratory-therapy",
      "inLanguage": "en",
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "JKKN College of Allied Health Sciences", "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" } } }
    },
    {
      "@type": "Course",
      "name": "B.Sc. Physician Assistant",
      "description": "3-year programme training physician assistants to support doctors in clinical diagnosis, patient examination, and medical record management at JKKN AHS, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/physician-assistant",
      "inLanguage": "en",
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "JKKN College of Allied Health Sciences", "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" } } }
    },
    {
      "@type": "Course",
      "name": "B.Sc. Critical Care Technology",
      "description": "3-year programme in intensive care unit management, patient monitoring, ventilator care, and emergency life support at JKKN AHS, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/critical-care-technology",
      "inLanguage": "en",
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "JKKN College of Allied Health Sciences", "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" } } }
    },
    {
      "@type": "Course",
      "name": "B.Sc. Medical Record Science",
      "description": "3-year programme in hospital information management, health data coding, medical documentation, and health information systems at JKKN AHS, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/medical-record-science",
      "inLanguage": "en",
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "JKKN College of Allied Health Sciences", "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" } } }
    },
    {
      "@type": "Course",
      "name": "B.Sc. Accident & Emergency Care Technology",
      "description": "3-year programme in pre-hospital emergency care, trauma management, triage, and emergency medical technician skills at JKKN AHS, Namakkal district.",
      "provider": { "@type": "EducationalOrganization", "@id": "https://ahs.jkkn.ac.in/#organization" },
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "url": "https://ahs.jkkn.ac.in/accident-emergency-care",
      "inLanguage": "en",
      "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite", "location": { "@type": "Place", "name": "JKKN College of Allied Health Sciences", "address": { "@type": "PostalAddress", "addressLocality": "Komarapalayam", "addressRegion": "Tamil Nadu", "postalCode": "638183", "addressCountry": "IN" } } }
    }
  ]
};
```

Then inject it in `NamakkalLayout` return, after the `educationalOrgSchema` script tag:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
/>
```

**Verification:** Paste the schema in Google Rich Results Test — all 9 Course entities should validate without errors.

**Dependencies:** None.

---

### T-08: Add HowTo Schema (Campus Directions)

**Tier:** 1 | **Priority:** HIGH
**Est. Dev Time:** 15 minutes
**Files:**
- `src/app/namakkal/layout.tsx` — add after `courseListSchema`, before `speakableSchema`

**What to Add:**

```ts
const howToReachSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN AHS Campus from Namakkal",
  "description": "Step-by-step directions to reach JKKN College of Allied Health Sciences, Komarapalayam, from Namakkal city centre via NH-544.",
  "totalTime": "PT20M",
  "supply": [
    { "@type": "HowToSupply", "name": "Bus ticket or auto-rickshaw fare" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": "1",
      "name": "Start from Namakkal Bus Stand",
      "text": "Begin your journey from Namakkal New Bus Stand on Tiruchengode Road, Namakkal city centre."
    },
    {
      "@type": "HowToStep",
      "position": "2",
      "name": "Travel on NH-544 towards Komarapalayam",
      "text": "Board any bus or auto-rickshaw heading towards Komarapalayam on NH-544 (Salem-Coimbatore Highway). Frequent services operate throughout the day. Journey is approximately 5–10 km."
    },
    {
      "@type": "HowToStep",
      "position": "3",
      "name": "Alight at Natarajapuram (JKKN Campus Gate)",
      "text": "Get off at Natarajapuram stop on NH-544. JKKN Institutions campus (including JKKN College of Allied Health Sciences) is directly visible from the highway. Total travel time: 15–20 minutes."
    }
  ]
};
```

Inject after the `courseListSchema` script tag in `NamakkalLayout`.

**Verification:** Google Rich Results Test — HowTo entity should validate.

**Dependencies:** T-07 (add in same editing session for efficiency).

---

### T-09: Fix Meta Description — Reduce to ≤155 Characters

**Tier:** 1 | **Priority:** HIGH
**Est. Dev Time:** 5 minutes
**Files:**
- `src/app/namakkal/layout.tsx` — lines 5–7 (description inside `createPageMetadata`)

**Current value (196 characters):**
```ts
description: "Looking for an allied health science college in Namakkal? JKKN College of Allied Health Sciences is just 5-10 km from Namakkal on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!",
```

**Replace with (152 characters):**
```ts
description: "JKKN Allied Health Sciences — Namakkal's top AHS college, 5-10 km on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Admissions open 2026-27.",
```

**Verification:** Character count = 152 ✓ (under 155 limit)

**Dependencies:** None.

---

## TIER 2 — COMPLETENESS & DEPTH

---

### T-10: Add LocalBusiness Schema

**Tier:** 2 | **Priority:** MEDIUM
**Est. Dev Time:** 15 minutes
**Files:**
- `src/app/namakkal/layout.tsx` — add after `howToReachSchema`

**What to Add:**

```ts
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ahs.jkkn.ac.in/#localbusiness",
  "name": "JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/",
  "telephone": "+919345855001",
  "email": "info@jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.4467,
    "longitude": 77.7046
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "17:00" }
  ],
  "hasMap": "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Bank Transfer, DD"
};
```

**Dependencies:** T-08 (add in same editing session)

---

### T-11: Expand EducationalOrganization Schema

**Tier:** 2 | **Priority:** MEDIUM
**Est. Dev Time:** 15 minutes
**Files:**
- `src/app/namakkal/layout.tsx` — inside `educationalOrgSchema` object, lines 149–203

**What to Change:**

1. Replace `areaServed` (line 176–178):
```ts
// CURRENT:
areaServed: { "@type": "City", "name": "Namakkal" },

// REPLACE WITH:
areaServed: [
  { "@type": "AdministrativeArea", "name": "Namakkal District" },
  { "@type": "AdministrativeArea", "name": "Salem District" },
  { "@type": "AdministrativeArea", "name": "Erode District" },
  { "@type": "City", "name": "Namakkal" },
  { "@type": "City", "name": "Erode" },
  { "@type": "City", "name": "Salem" }
],
```

2. Add `knowsAbout` array after `areaServed`:
```ts
knowsAbout: [
  "Allied Health Sciences",
  "Cardiac Technology",
  "Dialysis Technology",
  "Radiology and Imaging Technology",
  "Operation Theatre Technology",
  "Respiratory Therapy",
  "Physician Assistant",
  "Critical Care Technology",
  "Medical Record Science",
  "Accident and Emergency Care Technology",
  "Paramedical Education",
  "Healthcare Education in Tamil Nadu"
],
```

**Dependencies:** T-07/T-08 (add in same editing session)

---

### T-12: Fix ExploreCities Distances

**Tier:** 2 | **Priority:** HIGH (data accuracy)
**Est. Dev Time:** 5 minutes
**Files:**
- `src/app/namakkal/page.tsx` — `ExploreCitiesSection()`, the `cities` array (lines 810–816)

**Current values (incorrect):**
```tsx
{ name: "Salem", distance: "40-50 km", href: "/salem" },
{ name: "Erode", distance: "30-40 km", href: "/erode" },
{ name: "Coimbatore", distance: "100-110 km", href: "/coimbatore" },
{ name: "Tiruppur", distance: "80-90 km", href: "/tiruppur" },
```

**Replace with (MEMORY.md verified values):**
```tsx
{ name: "Salem", distance: "~58 km", href: "/salem" },
{ name: "Erode", distance: "~22 km", href: "/erode" },
{ name: "Coimbatore", distance: "~105 km", href: "/coimbatore" },
{ name: "Tiruppur", distance: "~67 km", href: "/tiruppur" },
```

**Verification:** Values match MEMORY.md "JKKN Campus Distances" section.

**Dependencies:** None.

---

### T-13: Add Voice-Optimised Paragraph in HowToReachSection

**Tier:** 2 | **Priority:** MEDIUM
**Est. Dev Time:** 10 minutes
**Files:**
- `src/app/namakkal/page.tsx` — inside `HowToReachSection()`, after the subtitle paragraph (around line 510, before the green header card)

**What to Add:**

After the `<div className="w-12 h-1 bg-[#7cb983]...">` divider and before the green header card:

```tsx
<p className="voice-answer text-gray-600 text-sm text-center mb-6 leading-relaxed max-w-2xl mx-auto">
  JKKN College of Allied Health Sciences is located in Komarapalayam, Namakkal district,
  just 5 to 10 kilometres from Namakkal city centre via NH-544. The journey takes
  approximately 15 to 20 minutes by bus or auto-rickshaw. College transport buses
  operate daily from Namakkal, Tiruchengode, Erode, Salem, and surrounding areas.
</p>
```

**Verification:**
- `.voice-answer` class present — targeted by Speakable schema in layout.tsx
- Text visible in initial HTML (server-rendered section)

**Dependencies:** None.

---

### T-14: Add 3 Missing FAQs for PAA Coverage

**Tier:** 2 | **Priority:** MEDIUM
**Est. Dev Time:** 20 minutes
**Files:**
- `src/app/namakkal/page.tsx` — `FAQSection()` `faqs` array
- `src/app/namakkal/layout.tsx` — `faqSchema.mainEntity` array (lines 57–146)

**What to Add to page.tsx faqs array (add after the last FAQ item):**

```tsx
{
  q: "Is JKKN AHS a government or private college?",
  a: "JKKN College of Allied Health Sciences is a private self-financing institution under the JKKN Group of Institutions, established in 1952. It is NAAC approved and affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai. It participates in Tamil Nadu government merit counselling for admissions.",
},
{
  q: "Does JKKN AHS have international placement opportunities?",
  a: "Yes. JKKN AHS graduates have secured international placements with NHS UK, Cleveland Clinic Abu Dhabi (UAE), and hospitals in Singapore and Gulf countries. International placements offer salaries of ₹8–25 LPA [FROM CLAUDE.MD]. The placement team provides dedicated support for international job applications and documentation.",
},
{
  q: "What is the admission process for allied health science 2026?",
  a: "Admissions for 2026-27 are currently open. Step 1: Apply online at admission.jkkn.ac.in or visit the campus. Step 2: Submit 10+2 marksheets with PCB subjects (min. 50%). Step 3: Merit-based counselling via Tamil Nadu government process. Step 4: Fee payment and joining. Call +91 9345855001 for step-by-step guidance.",
},
```

**What to Add to layout.tsx faqSchema.mainEntity array:**

```ts
{
  "@type": "Question",
  name: "Is JKKN AHS a government or private college?",
  acceptedAnswer: {
    "@type": "Answer",
    text: "JKKN College of Allied Health Sciences is a private self-financing institution under the JKKN Group of Institutions, established in 1952. It is NAAC approved and affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
  },
},
{
  "@type": "Question",
  name: "Does JKKN AHS have international placement opportunities?",
  acceptedAnswer: {
    "@type": "Answer",
    text: "Yes. JKKN AHS graduates have secured international placements with NHS UK, Cleveland Clinic Abu Dhabi (UAE), and hospitals in Singapore and Gulf countries.",
  },
},
{
  "@type": "Question",
  name: "What is the admission process for allied health science 2026?",
  acceptedAnswer: {
    "@type": "Answer",
    text: "Apply online at admission.jkkn.ac.in. Submit 10+2 marksheets with PCB subjects (min. 50%). Admission is merit-based via Tamil Nadu government counselling. Call +91 9345855001 for guidance.",
  },
},
```

**Dependencies:** T-02 (FAQ rendering fix should be complete before adding more FAQs)

---

### T-15: Add Namakkal District Domicile Card to WhyChooseSection

**Tier:** 2 | **Priority:** HIGH (unique differentiator)
**Est. Dev Time:** 10 minutes
**Files:**
- `src/app/namakkal/page.tsx` — `reasons` array in `WhyChooseSection()`, lines 190–221

**What to Add (append to reasons array):**

```tsx
{
  icon: MapPin,
  title: "Namakkal District Domicile Advantage",
  desc: "Campus is located within Namakkal district (Komarapalayam taluk). Namakkal-native students may qualify for district domicile quota under Tamil Nadu government merit counselling for healthcare courses.",
},
```

**Note:** `MapPin` is already imported at line 8 of page.tsx.

**Why this matters for AEO:** No competitor college explicitly targets the "namakkal district domicile medical college" query angle. This is a unique, verifiable advantage that differentiates JKKN from colleges outside Namakkal district.

**Verification:**
- New card appears in the Why Choose grid
- Text mentions "Namakkal district", "Komarapalayam taluk", "district domicile quota"
- Does not make unverified legal claims — phrased as "may qualify"

**Dependencies:** None.

---

### T-16: Add "Paramedical" Keyword to Page Content

**Tier:** 2 | **Priority:** MEDIUM
**Est. Dev Time:** 10 minutes
**Files:**
- `src/app/namakkal/page.tsx` — `CompetitiveAdvantageSection()` or `SnippetIntroBlock()` (after T-04 is added)

**What to Add:**

In `CompetitiveAdvantageSection()`, modify the subtitle paragraph (page.tsx line 684):

**Current:**
```tsx
<p className="voice-answer text-gray-500 text-sm mb-3 text-center">
  Namakkal&apos;s closest and most trusted allied health sciences campus
</p>
```

**Replace with:**
```tsx
<p className="voice-answer text-gray-500 text-sm mb-3 text-center">
  Namakkal&apos;s closest and most trusted allied health sciences and paramedical college
</p>
```

Also, in the `SnippetIntroBlock()` paragraph text (added in T-04), consider adding "(also known as paramedical sciences)" after "Allied Health Sciences" in the first mention.

**Why:** "Paramedical college namakkal" is a high-volume equivalent search term. The term appears nowhere on the current page. Adding it naturally in 1-2 places captures this keyword cluster without keyword stuffing.

**Verification:**
- `grep "paramedical" src/app/namakkal/page.tsx` — should return 1-2 natural mentions

**Dependencies:** T-04 (SnippetIntroBlock addition recommended to complete first)

---

## Task Summary Table

| ID | Task | Tier | Files | Lines | Est. Time | Status |
|----|------|------|-------|-------|-----------|--------|
| T-01 | Fix duplicate H2 headings | 0 | page.tsx | 226, 681 | 10 min | Pending |
| T-02 | Fix FAQ rendering (useState → details) | 0 | page.tsx | 710–804 | 90 min | Pending |
| T-03 | Fix title tag to ≤60 chars | 0 | layout.tsx | 4 | 5 min | Pending |
| T-04 | Add paragraph snippet block | 1 | page.tsx | After line 25 | 20 min | Pending |
| T-05 | Add programme list snippet block | 1 | page.tsx | After DistanceCard | 25 min | Pending |
| T-06 | Add distance table in HowToReach | 1 | page.tsx | ~510 | 20 min | Pending |
| T-07 | Add 9 Course schemas | 1 | layout.tsx | After 203 | 45 min | Pending |
| T-08 | Add HowTo schema | 1 | layout.tsx | After courseListSchema | 15 min | Pending |
| T-09 | Fix meta description to ≤155 chars | 1 | layout.tsx | 5–7 | 5 min | Pending |
| T-10 | Add LocalBusiness schema | 2 | layout.tsx | After howToReachSchema | 15 min | Pending |
| T-11 | Expand EducationalOrg schema | 2 | layout.tsx | 176–177 | 15 min | Pending |
| T-12 | Fix ExploreCities distances | 2 | page.tsx | 810–816 | 5 min | Pending |
| T-13 | Add voice paragraph in HowToReach | 2 | page.tsx | ~507 | 10 min | Pending |
| T-14 | Add 3 new FAQs + schema entries | 2 | page.tsx + layout.tsx | FAQSection | 20 min | Pending |
| T-15 | Add Namakkal District domicile card | 2 | page.tsx | reasons array ~190 | 10 min | Pending |
| T-16 | Add "paramedical" keyword | 2 | page.tsx | ~684 | 10 min | Pending |

**Total estimated dev time: 7–10 hours**
**Recommended execution order: T-01 → T-02 → T-03 → T-04 → T-05 → T-06 → T-07 → T-08 → T-09 → T-10 → T-11 → T-12 → T-13 → T-14 → T-15 → T-16**

---

*Document: AEO-NAMAKKAL-DECOMPOSE.md | Lines: ~490 | Date: 2026-03-28*
