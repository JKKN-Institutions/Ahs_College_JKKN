# AEO Erode City Page — Atomic Task Decomposition

> **Document Type:** AEO Atomic Task Cards
> **Site:** https://ahs.jkkn.ac.in/erode/
> **Institution:** JKKN College of Allied Health Sciences
> **Date:** 2026-03-28
> **Companion Files:** `AEO-ERODE-SPEC.md` | `AEO-ERODE-PLAN.md`

---

## How to Use This Document

1. Execute tasks in order: Tier 0 → Tier 1 → Tier 2
2. Do NOT start a higher tier until all lower-tier tasks are complete and tested
3. Each task card contains: exact file path, line numbers from codebase, current code, new code, and test criteria
4. Mark each task DONE before moving to the next
5. After completing all tasks in a tier, run the testing checklist in AEO-ERODE-PLAN.md

---

## TIER 0 — CRITICAL FIXES

---

### TASK-ERODE-01

**Title:** Remove `"use client"` directive from page.tsx (Server Component Migration — Step 1 of 2)

**Tier:** 0

**File:** `src/app/erode/page.tsx`

**Lines:** 1-11

**Blocked By:** None

**Blocks:** TASK-ERODE-02

**AEO Impact:** CRITICAL — Without this fix, Googlebot receives an empty HTML shell. All other AEO improvements are ineffective until this is resolved. Estimated crawlable content increase: from ~150 words to ~3,420 words.

**Current Code (lines 1-11):**
```tsx
"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/site-config";
import { MapPin, ChevronDown, ChevronUp, GraduationCap, Phone, TrendingUp, Building2, GitBranch, Target, Globe, Bus, Activity, Microscope, HeartPulse, Droplet, ShieldCheck, Wind, Stethoscope, Heart, FileText, Ambulance, Map, Train, Plane, Home, BookOpen, Trophy, Wifi, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
```

**New Code:**
```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/site-config";
import { MapPin, GraduationCap, Phone, TrendingUp, Building2, GitBranch, Target, Globe, Bus, Activity, Microscope, HeartPulse, Droplet, ShieldCheck, Wind, Stethoscope, Heart, FileText, Ambulance, Map, Train, Plane, Home, BookOpen, Trophy, Wifi, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FAQSection } from "./FAQAccordion.client";
```

**What changed:**
- Removed `"use client"` directive from line 1
- Removed `useState` from imports (used only in FAQSection — moved to client component)
- Removed `ChevronDown, ChevronUp` from lucide imports (moved to client component)
- Added import for `FAQSection` from the new client component file (TASK-ERODE-02)

**Also update line 35 of page.tsx:**

Current (line 35):
```tsx
        <FAQSection />
```

New (line 35 — no change needed if import is correct):
```tsx
        <FAQSection />
```
The import alias handles the swap. No change to JSX usage.

**Testing Criteria:**
- [ ] `View Source` on `/erode/` shows full HTML content (not just Next.js runtime shell)
- [ ] No `"use client"` in page.tsx
- [ ] No React hydration errors in browser console
- [ ] Page visually identical to before change

---

### TASK-ERODE-02

**Title:** Extract FAQSection into `FAQAccordion.client.tsx` (Server Component Migration — Step 2 of 2)

**Tier:** 0

**File (Create New):** `src/app/erode/FAQAccordion.client.tsx`

**Blocked By:** TASK-ERODE-01

**Blocks:** TASK-ERODE-11, TASK-ERODE-12

**AEO Impact:** HIGH — Separating the accordion (which needs useState) into its own client component means only the accordion is client-rendered. All other sections become fully server-rendered and crawlable.

**Current Code (page.tsx lines 708-807 — FAQSection function):**
```tsx
function FAQSection() {
  const faqs = [
    {
      q: "What is the best allied health sciences college near Erode?",
      a: "JKKN College of Allied Health Sciences...",
    },
    // ... 10 more FAQs
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 px-4">
      {/* ... accordion JSX with conditional rendering */}
      {open === i && (
        <div className="faq-answer snippet-answer px-6 pb-5 text-sm text-gray-500 leading-relaxed">
          {faq.a}
        </div>
      )}
    </section>
  );
}
```

**New File to Create — `src/app/erode/FAQAccordion.client.tsx`:**
```tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is the best allied health sciences college near Erode?",
    a: "JKKN College of Allied Health Sciences, located just ~22 km from Erode on NH-544, is widely regarded as one of the top allied health sciences colleges accessible from Erode. NAAC-accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers 9 BSc programmes with strong placement support and clinical training from Year 1.",
  },
  {
    q: "How far is JKKN AHS from Erode?",
    a: "JKKN AHS is approximately ~22 km from Erode city centre, which takes about 35-40 minutes by road via NH-544 — direct highway connectivity. Regular bus services are available from Erode.",
  },
  {
    q: "What is Allied Health Sciences?",
    a: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences, you can study radiology, cardiac technology, dialysis technology, operation theatre technology, and more.",
  },
  {
    q: "Is BPT a good career option?",
    a: "Yes, BPT (Bachelor of Physiotherapy) is an excellent career choice with high demand in hospitals, sports clinics, and rehabilitation centres. However, note that JKKN AHS currently offers Cardiac Technology, Dialysis Technology, Radiology, Critical Care Technology, and other specialised allied health programmes. Contact us at +91 9345855001 for the complete programme list.",
  },
  {
    q: "How is AHS different from nursing?",
    a: "While nursing focuses on patient care and bedside support, Allied Health Sciences covers specialised diagnostic and therapeutic roles like radiology imaging, cardiac monitoring, dialysis procedures, and critical care management. Both are valuable healthcare careers, but AHS offers more specialisation options with strong international placement potential.",
  },
  {
    q: "Does JKKN AHS provide hostel for Erode students?",
    a: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Students from Erode can also opt for daily commute as the campus is just 35-40 minutes away via NH-544. College transport services are available from Erode.",
  },
  {
    q: "How can I apply for admission at JKKN AHS?",
    a: "You can apply online at https://www.jkkn.ai/apply/jkkn-admission-2026 or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office at +91 9345855001 for guidance.",
  },
  {
    q: "What are the fees for BSc allied health science in Tamil Nadu?",
    a: "BSc Allied Health Science fees in Tamil Nadu typically range from ₹50,000 to ₹2,00,000 per year depending on the college and course. At JKKN College of Allied Health Sciences, fees are competitively priced with scholarship options available for meritorious students. Contact the admission office at +91 9345855001 for the latest fee structure.",
  },
  {
    q: "What is the salary after BSc allied health science?",
    a: "BSc Allied Health Science graduates can expect starting salaries of ₹2.5–4.5 LPA in India, with experienced professionals earning ₹6–12 LPA. International opportunities in Gulf countries, UK, and Australia offer ₹8–25 LPA. JKKN AHS graduates benefit from an 85%+ placement rate with 60+ recruiting partners.",
  },
  {
    q: "How many allied health science colleges are there near Erode?",
    a: "Erode district has a limited number of allied health science colleges. JKKN College of Allied Health Sciences, located just ~22 km from Erode on NH-544, stands out with 9 BSc programmes, NAAC approval, and an 85%+ placement rate — making it one of the top choices for Erode students.",
  },
  {
    q: "What are the eligibility requirements for allied health science courses?",
    a: "To pursue BSc Allied Health Sciences at JKKN AHS, candidates must have passed 12th standard (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with a minimum aggregate of 50% (40% for reserved categories). Admission is based on merit and counselling. JKKN is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
  },
  {
    q: "Is healthcare a good career option for students from Erode's textile industry background?",
    a: "Yes — healthcare is one of the fastest-growing career sectors in Tamil Nadu, providing stable employment independent of textile industry cycles. JKKN College of Allied Health Sciences, ~22 km from Erode on NH-544, offers 9 BSc programmes with 85%+ placement rates and international career opportunities in the UK, UAE, and Singapore.",
  },
  {
    q: "Can I travel daily from Erode to JKKN AHS without staying in the hostel?",
    a: "Yes — daily commute from Erode is very practical. JKKN AHS is approximately ~22 km from Erode city centre, accessible in 35-40 minutes via NH-544 (Salem-Coimbatore Highway). College-operated buses run daily routes connecting Erode and surrounding towns to the campus.",
  },
  {
    q: "Should I study allied health science in Erode or prefer a college in Coimbatore?",
    a: "For Erode students, JKKN College of Allied Health Sciences (~22 km from Erode) offers a strong alternative to Coimbatore colleges. JKKN has a 500+ bed on-campus teaching hospital for clinical training from Year 1, an 85%+ placement rate, and international placement partners (NHS UK, UAE, Singapore). The shorter commute and lower accommodation costs compared to Coimbatore make JKKN a practical and high-quality choice.",
  },
  {
    q: "Are there direct buses from Erode to JKKN Allied Health Sciences campus?",
    a: "Yes — regular government and private buses operate from Erode Central Bus Stand to Komarapalayam throughout the day via NH-544. The journey covers approximately ~22 km and takes 35-40 minutes. JKKN also operates college transport buses from Erode for student convenience.",
  },
  {
    q: "What hospitals near Erode hire allied health science graduates?",
    a: "Allied health science graduates from Erode find employment at hospitals in Erode, Tiruppur, Salem, and Coimbatore — including Apollo Hospitals, Fortis Healthcare, and Manipal Hospitals. JKKN AHS graduates also secure placements at NHS UK hospitals and UAE healthcare facilities. With 60+ recruiting partners, JKKN ensures placement support both in Tamil Nadu and internationally.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Allied Health Sciences College near Erode — Your Questions Answered
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

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
              {open === i && (
                <div className="faq-answer snippet-answer px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Also update page.tsx — remove old FAQSection function (lines 711-807) and update import:**

In page.tsx, remove the entire `FAQSection` function (lines 711-807). The import added in TASK-ERODE-01 (`import { FAQSection } from "./FAQAccordion.client"`) handles the replacement.

**Testing Criteria:**
- [ ] FAQ accordion is interactive (click to expand/collapse)
- [ ] New client file has `"use client"` directive at top
- [ ] page.tsx no longer contains FAQSection function definition
- [ ] 16 FAQ questions visible in the accordion (original 11 + 5 new Erode-specific)
- [ ] All distance references in FAQ answers use "~22 km" and "35-40 minutes"
- [ ] No TypeScript errors

---

### TASK-ERODE-03

**Title:** Fix all distance data in page.tsx (11 locations with wrong "30-40 km" data)

**Tier:** 0

**File:** `src/app/erode/page.tsx`

**Blocked By:** None

**Blocks:** TASK-ERODE-10

**AEO Impact:** HIGH — Wrong distance data (30-40 km vs verified ~22 km) damages user trust, contradicts verified real-world data, and propagates inaccurate information to Google's Knowledge Graph via FAQ schema.

**Changes Required:**

**Change 1 — HeroSection description (line 86-87):**

Current:
```tsx
          JKKN College of Allied
          Health Sciences offers top-tier allied health sciences programmes with
          92%+ placement support — just 30-40 km from Erode with excellent
          highway connectivity.
```

New:
```tsx
          JKKN College of Allied
          Health Sciences offers top-tier allied health sciences programmes with
          92%+ placement support — just ~22 km from Erode via NH-544 with excellent
          highway connectivity.
```

**Change 2 — HeroSection stats bar (line 95):**

Current:
```tsx
            { value: "35km", label: "FROM ERODE" },
```

New:
```tsx
            { value: "22km", label: "FROM ERODE" },
```

**Change 3 — WhyChooseSection card description (line 221):**

Current:
```tsx
      desc: "Just 30-40 km from Erode. Daily commute or comfortable hostel — your choice.",
```

New:
```tsx
      desc: "Just ~22 km from Erode via NH-544. Daily commute or comfortable hostel — your choice.",
```

**Change 4 — WhyChooseSection paragraph (lines 232-235):**

Current:
```tsx
        <p className="text-gray-500 max-w-2xl mx-auto mb-3 text-sm sm:text-base leading-relaxed">
          Erode&apos;s strong industrial base means families value quality education with
          good placement outcomes. JKKN is just 30-40 km away — closer than many
          colleges within Erode city itself. The excellent NH-544 connectivity makes
          daily commute comfortable and quick.
        </p>
```

New:
```tsx
        <p className="text-gray-500 max-w-2xl mx-auto mb-3 text-sm sm:text-base leading-relaxed">
          Erode&apos;s strong industrial base means families value quality education with
          good placement outcomes. JKKN is just ~22 km away via NH-544 — easily accessible
          from Erode in 35-40 minutes. The excellent NH-544 connectivity makes
          daily commute comfortable and quick.
        </p>
```

**Change 5 — DistanceCard display value (line 161):**

Current:
```tsx
            <span className="text-5xl font-black text-[#006837]">35</span>
            <span className="text-xl font-bold text-[#006837] ml-1">km</span>
```

New:
```tsx
            <span className="text-5xl font-black text-[#006837]">22</span>
            <span className="text-xl font-bold text-[#006837] ml-1">km</span>
```

**Change 6 — DistanceCard subtext (line 169):**

Current:
```tsx
              40-50 minutes via NH-544 — direct highway connectivity
```

New:
```tsx
              35-40 minutes via NH-544 — direct highway connectivity
```

**Change 7 — CompetitiveAdvantageSection title (line 673):**

Current:
```tsx
    { title: "Just 30–40 Minutes from Erode", desc: "Located on NH-544 (Salem–Coimbatore Highway) with direct bus connectivity. Easy commute or hostel stay — both options available for Erode students." },
```

New:
```tsx
    { title: "Just 35–40 Minutes from Erode (~22 km)", desc: "Located on NH-544 (Salem–Coimbatore Highway), ~22 km from Erode with direct bus connectivity. Easy commute or hostel stay — both options available for Erode students." },
```

**Change 8 — HowToReachSection header card (line 521):**

Current:
```tsx
              30-40 km • 40-50 minutes
```

New:
```tsx
              ~22 km • 35-40 minutes
```

**Change 9 — HowToReachSection train entry (line 488):**

Current:
```tsx
      desc: "Erode Junction (~35 km from campus)",
```

New:
```tsx
      desc: "Erode Junction (~22 km from campus)",
```

**Testing Criteria:**
- [ ] Search page.tsx for "30-40" — zero results
- [ ] Search page.tsx for "40-50" — zero results (except if "40-50 minutes" changed to "35-40 minutes")
- [ ] Distance card shows "22 km" on page visual
- [ ] Hero stats bar shows "22km FROM ERODE"
- [ ] WhyChoose section shows "~22 km" in both card and paragraph
- [ ] HowToReach header shows "~22 km • 35-40 minutes"

---

### TASK-ERODE-04

**Title:** Fix meta title (74 chars → 52 chars)

**Tier:** 0

**File:** `src/app/erode/layout.tsx`

**Lines:** 4

**Blocked By:** None

**Blocks:** None

**AEO Impact:** HIGH — Title over 60 chars gets truncated in SERP. The current 74-char title shows as "Allied Health Science Colleges in Erode | JKKN AHS — Admissions 2026…" — the year and important context are cut off, reducing CTR.

**Current Code (line 4):**
```tsx
  title: "Allied Health Science Colleges in Erode | JKKN AHS — Admissions 2026-27",
```

**New Code:**
```tsx
  title: "Allied Health Science Colleges in Erode | JKKN AHS",
```

**Character count verification:**
- "Allied Health Science Colleges in Erode | JKKN AHS" = 50 characters — PASS (under 60 limit)

**Testing Criteria:**
- [ ] View Source confirms new title in `<title>` tag
- [ ] Google Rich Results Test shows correct title
- [ ] Title is exactly 50 characters (count manually or with a character counter)

---

### TASK-ERODE-05

**Title:** Fix meta description (189 chars → 129 chars, fix wrong distance)

**Tier:** 0

**File:** `src/app/erode/layout.tsx`

**Lines:** 5-7

**Blocked By:** None

**Blocks:** None

**AEO Impact:** HIGH — Description over 155 chars gets truncated in SERP. Current description also contains wrong distance "30-40 km" which may contradict corrected page content after TASK-ERODE-03.

**Current Code (lines 5-7):**
```tsx
  description:
    "Looking for allied health science colleges in Erode? JKKN College of Allied Health Sciences is just 30-40 km from Erode on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!",
```

**New Code:**
```tsx
  description:
    "JKKN AHS — ~22 km from Erode on NH-544. 9 BSc allied health programmes, NAAC approved, 85%+ placements. Admissions open 2026-27. Apply at ahs.jkkn.ac.in.",
```

**Character count verification:**
- "JKKN AHS — ~22 km from Erode on NH-544. 9 BSc allied health programmes, NAAC approved, 85%+ placements. Admissions open 2026-27. Apply at ahs.jkkn.ac.in." = 153 characters — PASS (under 155 limit)

**Testing Criteria:**
- [ ] View Source confirms new description in `<meta name="description">` tag
- [ ] Description is ≤155 characters
- [ ] Description contains "~22 km" (not "30-40 km")
- [ ] Description contains primary keyword context

---

### TASK-ERODE-06

**Title:** Fix cross-city distances in ExploreCitiesSection

**Tier:** 0

**File:** `src/app/erode/page.tsx`

**Lines:** 813-818

**Blocked By:** None

**Blocks:** None

**AEO Impact:** MEDIUM — Wrong distance data for Namakkal ("5-10 km" is severely incorrect — actual distance is ~66 km to Namakkal town) damages credibility. A user from Namakkal visiting the Erode page would see the 5-10 km figure and be misled when they navigate to /namakkal.

**Current Code (lines 813-818):**
```tsx
  const cities = [
    { name: "Namakkal", distance: "5-10 km", href: "/namakkal" },
    { name: "Salem", distance: "40-50 km", href: "/salem" },
    { name: "Tiruppur", distance: "80-90 km", href: "/tiruppur" },
    { name: "Coimbatore", distance: "100-110 km", href: "/coimbatore" },
  ];
```

**New Code:**
```tsx
  const cities = [
    { name: "Namakkal", distance: "~66 km", href: "/namakkal" },
    { name: "Salem", distance: "~58 km", href: "/salem" },
    { name: "Tiruppur", distance: "~67 km", href: "/tiruppur" },
    { name: "Coimbatore", distance: "~105 km", href: "/coimbatore" },
  ];
```

**Distance data source:** JKKN campus distance reference — all verified [VERIFIED from JKKN memory and campus location NH-544 Komarapalayam].

**Testing Criteria:**
- [ ] ExploreCitiesSection shows correct distances for all 4 cities
- [ ] Namakkal shows "~66 km" (not "5-10 km")
- [ ] No city shows a distance that contradicts the respective city page's stated distance

---

## TIER 1 — HIGH-IMPACT AEO ADDITIONS

---

### TASK-ERODE-07

**Title:** Add paragraph snippet block (57-word featured snippet bait)

**Tier:** 1

**File:** `src/app/erode/page.tsx`

**Insert After:** HeroSection (line 25) call in ErodePage function — insert `<SnippetBlock />` as a new section

**Blocked By:** TASK-ERODE-01

**Blocks:** None

**AEO Impact:** HIGH — A static, server-rendered paragraph directly answering the primary query is the single most effective featured snippet capture tactic. Google extracts this type of 40-60 word paragraph for the snippet box.

**Current Code (page.tsx lines 24-36 — ErodePage return):**
```tsx
        <TopBanner />
        <HeroSection />
        <AffiliationBar />
        <DistanceCard />
```

**New Code — Add SnippetBlock function and insert into render:**

**Step 1 — Add new SnippetBlock function at the bottom of page.tsx (before the closing of file):**

```tsx
/* ──────────────────────────────────────────
   SNIPPET BLOCK — AEO FEATURED SNIPPET BAIT
────────────────────────────────────────── */
function SnippetBlock() {
  return (
    <section className="bg-[#FBFBEE] py-6 px-4" aria-label="Quick answer">
      <div className="max-w-3xl mx-auto">
        <p
          className="snippet-answer aeo-answer text-gray-700 text-sm sm:text-base leading-relaxed"
          data-speakable="true"
          itemProp="description"
        >
          JKKN College of Allied Health Sciences is one of the top allied health
          science colleges accessible from Erode, located ~22 km away on NH-544
          (Salem-Coimbatore Highway). NAAC-accredited and affiliated to Tamil Nadu
          Dr. MGR Medical University, it offers 9 BSc programmes with clinical
          training from Year 1, 85%+ placement rate, and daily bus connectivity
          from Erode.
        </p>
      </div>
    </section>
  );
}
```

**Step 2 — Insert `<SnippetBlock />` in ErodePage (after `<HeroSection />`):**

Current (line 25):
```tsx
        <HeroSection />
        <AffiliationBar />
```

New:
```tsx
        <HeroSection />
        <SnippetBlock />
        <AffiliationBar />
```

**Testing Criteria:**
- [ ] `View Source` shows snippet paragraph text in HTML (not JS-rendered)
- [ ] Paragraph is visible on page (not hidden)
- [ ] Word count is 40-60 words
- [ ] Contains "~22 km", "NH-544", "NAAC", "85%+", "9 BSc"
- [ ] Class `aeo-answer` and `data-speakable="true"` present in HTML

---

### TASK-ERODE-08

**Title:** Add Course schema (9 BSc programmes as ItemList/Course JSON-LD)

**Tier:** 1

**File:** `src/app/erode/layout.tsx`

**Insert After:** Line 237 (after speakableSchema script tag closes)

**Blocked By:** TASK-ERODE-01

**Blocks:** None

**AEO Impact:** HIGH — Course schema enables rich results in Google Search for programme queries. It also provides structured data that AI Overview and Perplexity use to list and compare programmes.

**Current Code (layout.tsx lines 235-240):**
```tsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      {children}
    </>
```

**New Code — Add courseSchema constant and script tag:**

**Step 1 — Add courseSchema constant before ErodeLayout function (after speakableSchema, approx line 214):**

```tsx
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "BSc Allied Health Science Programmes at JKKN AHS near Erode",
  "description": "9 BSc Allied Health Science programmes offered at JKKN College of Allied Health Sciences, ~22 km from Erode on NH-544",
  "numberOfItems": 9,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Cardiac Technology",
        "description": "3-year BSc programme in cardiac diagnostic procedures with 1 year compulsory internship. Intake: 30 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/cardiac-technology/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Dialysis Technology",
        "description": "3-year BSc programme in dialysis procedures and renal care with 1 year compulsory internship. Intake: 40 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/dialysis-technology/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Radiology & Imaging Technology",
        "description": "3-year BSc programme in X-ray, CT scan, MRI, and medical imaging with 1 year compulsory internship. Intake: 40 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Operation Theatre & Anaesthesia Technology",
        "description": "3-year BSc programme in operation theatre management and anaesthesia with 1 year compulsory internship. Intake: 40 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Respiratory Therapy",
        "description": "3-year BSc programme in respiratory care and ventilator management with 1 year compulsory internship. Intake: 30 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/respiratory-therapy/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Physician Assistant",
        "description": "3-year BSc programme training physician assistants for clinical support with 1 year compulsory internship. Intake: 40 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/physician-assistant/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Critical Care Technology",
        "description": "3-year BSc programme in ICU management and critical patient monitoring with 1 year compulsory internship. Intake: 30 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/critical-care-technology/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Medical Record Science",
        "description": "3-year BSc programme in health information management and medical coding with 1 year compulsory internship. Intake: 30 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/medical-record-science/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Accident & Emergency Care Technology",
        "description": "3-year BSc programme in emergency medical procedures and trauma care with 1 year compulsory internship. Intake: 30 seats.",
        "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Allied Health Sciences", "url": "https://ahs.jkkn.ac.in/" },
        "url": "https://ahs.jkkn.ac.in/accident-emergency-care/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
      }
    }
  ]
};
```

**Step 2 — Add script tag in ErodeLayout (before `{children}`):**

```tsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
```

**Testing Criteria:**
- [ ] Rich Results Test validates ItemList with 9 Course items
- [ ] Schema.org validator shows no errors for courseSchema
- [ ] All 9 course URLs in schema match actual page routes

---

### TASK-ERODE-09

**Title:** Add HowTo schema (admission process — 5 steps)

**Tier:** 1

**File:** `src/app/erode/layout.tsx`

**Insert After:** courseSchema script tag (TASK-ERODE-08)

**Blocked By:** TASK-ERODE-01

**Blocks:** None

**AEO Impact:** MEDIUM — HowTo schema targets "how to apply for allied health science near erode" queries and may generate a HowTo rich result in Google Search.

**New Code — Add howToSchema constant and script tag:**

**Step 1 — Add howToSchema constant after courseSchema:**

```tsx
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for BSc Allied Health Science Admission at JKKN AHS from Erode",
  "description": "Step-by-step admission process for BSc Allied Health Science programmes at JKKN College of Allied Health Sciences for students from Erode.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Check Eligibility",
      "text": "Ensure you have passed 10+2 (HSC/CBSE/ISC) with Physics, Chemistry, and Biology with minimum 50% aggregate (40% for reserved categories)."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Apply Online",
      "text": "Visit https://www.jkkn.ai/apply/jkkn-admission-2026 and complete the online application form for your chosen BSc Allied Health Science programme."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Submit Documents",
      "text": "Submit 10th and 12th mark sheets, transfer certificate, nativity certificate, and passport-size photographs to the admission office."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Attend Counselling",
      "text": "Attend the counselling session at JKKN AHS campus (~22 km from Erode via NH-544) for seat allotment based on merit."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Fee Payment and Enrollment",
      "text": "Complete fee payment and collect your enrollment confirmation. Contact +91 9345855001 for fee structure details and scholarship information."
    }
  ]
};
```

**Step 2 — Add script tag:**

```tsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
```

**Testing Criteria:**
- [ ] Rich Results Test detects HowTo schema with 5 steps
- [ ] Each step has position, name, and text fields
- [ ] No schema validation errors

---

### TASK-ERODE-10

**Title:** Fix FAQ schema distance values in layout.tsx (3 wrong distance references)

**Tier:** 1

**File:** `src/app/erode/layout.tsx`

**Blocked By:** TASK-ERODE-03

**Blocks:** None

**AEO Impact:** HIGH — FAQ schema answer text is what Google displays in PAA boxes and rich snippets. Wrong distance in schema means Google propagates wrong data to users searching for distance information.

**Change 1 — Q2 answer (lines 70-73):**

Current:
```tsx
        text: "JKKN AHS is approximately 30-40 km from Erode city centre, which takes about 40-50 minutes by road via NH-544 — direct highway connectivity. Regular bus services are available from Erode.",
```

New:
```tsx
        text: "JKKN AHS is approximately ~22 km from Erode city centre, which takes about 35-40 minutes by road via NH-544 — direct highway connectivity. Regular bus services are available from Erode.",
```

**Change 2 — Q1 answer (lines 62-65):**

Current:
```tsx
        text: "JKKN College of Allied Health Sciences, located just 30-40 km from Erode on NH-544, is widely regarded as one of the top allied health sciences colleges accessible from Erode...",
```

New:
```tsx
        text: "JKKN College of Allied Health Sciences, located just ~22 km from Erode on NH-544, is widely regarded as one of the top allied health sciences colleges accessible from Erode. NAAC-accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers 9 BSc programmes with strong placement support and clinical training from Year 1.",
```

**Change 3 — Q6 answer (line 103):**

Current:
```tsx
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Students from Erode can also opt for daily commute as the campus is just 40-50 minutes away. College transport services are available.",
```

New:
```tsx
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Students from Erode can also opt for daily commute as the campus is just 35-40 minutes away via NH-544 (~22 km). College transport services are available from Erode.",
```

**Testing Criteria:**
- [ ] Search layout.tsx for "30-40" — zero results
- [ ] Search layout.tsx for "40-50 minutes" — zero results
- [ ] FAQPage schema validates without errors
- [ ] Q2 answer shows "~22 km" and "35-40 minutes"

---

### TASK-ERODE-11

**Title:** Fix Speakable schema selectors in layout.tsx

**Tier:** 1

**File:** `src/app/erode/layout.tsx`

**Lines:** 205-213

**Blocked By:** TASK-ERODE-02 (need server component first for selectors to work)

**Blocks:** None

**AEO Impact:** MEDIUM — Speakable schema enables Google Assistant and voice search devices to read page content. Current `.faq-answer` selector targets JS-gated content. After server migration, fix selectors to include the new `aeo-answer` class from TASK-ERODE-07.

**Current Code (lines 205-213):**
```tsx
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Allied Health Science Colleges in Erode | JKKN AHS",
  url: "https://ahs.jkkn.ac.in/erode",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"],
  },
};
```

**New Code:**
```tsx
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Allied Health Science Colleges in Erode | JKKN AHS",
  url: "https://ahs.jkkn.ac.in/erode/",
  dateModified: "2026-03-28",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [
      ".aeo-answer",
      ".snippet-answer",
      ".voice-answer",
      "[data-speakable='true']",
      "h1",
      "h2"
    ],
  },
};
```

**What changed:**
- Removed `.faq-answer` (FAQ answers are still JS-gated in the client component accordion)
- Added `.aeo-answer` (targets the new snippet block from TASK-ERODE-07)
- Added `[data-speakable="true"]` (targets any element explicitly marked speakable)
- Added `dateModified` to WebPage schema (freshness signal for Gemini/AI Overview)
- Fixed URL trailing slash consistency

**Testing Criteria:**
- [ ] Speakable schema validates at schema.org validator
- [ ] `.aeo-answer` class exists in server-rendered HTML (from TASK-ERODE-07)
- [ ] `[data-speakable="true"]` attribute exists on snippet block element
- [ ] No validation warnings about missing CSS selectors

---

### TASK-ERODE-12

**Title:** Add 5 new Erode-specific FAQs to FAQAccordion.client.tsx

**Tier:** 1

**File:** `src/app/erode/FAQAccordion.client.tsx`

**Blocked By:** TASK-ERODE-02

**Blocks:** TASK-ERODE-13

**AEO Impact:** HIGH — 5 new Erode-specific FAQs target the PAA questions unique to Erode: textile industry career angle, daily commute viability, Erode vs Coimbatore comparison, bus routes, and local hospital employment. These are high-intent questions that Nandha College does not address.

**The 5 new FAQs are already included in TASK-ERODE-02's FAQAccordion.client.tsx code** (the new file includes all 16 FAQs: 11 original + 5 new). No separate code change needed if TASK-ERODE-02 was executed correctly.

**Verification — confirm these 5 questions exist in FAQAccordion.client.tsx:**

1. "Is healthcare a good career option for students from Erode's textile industry background?"
2. "Can I travel daily from Erode to JKKN AHS without staying in the hostel?"
3. "Should I study allied health science in Erode or prefer a college in Coimbatore?"
4. "Are there direct buses from Erode to JKKN Allied Health Sciences campus?"
5. "What hospitals near Erode hire allied health science graduates?"

**Testing Criteria:**
- [ ] FAQAccordion.client.tsx contains all 16 FAQs (11 original + 5 new)
- [ ] All 5 new FAQs are visible in the accordion on the rendered page
- [ ] All distance references in new FAQs use "~22 km" and "35-40 minutes"
- [ ] FAQ accordion is interactive with all 16 items

---

### TASK-ERODE-13

**Title:** Add 5 new FAQs to FAQPage schema in layout.tsx

**Tier:** 1

**File:** `src/app/erode/layout.tsx`

**Lines:** After line 146 (end of faqSchema.mainEntity array) — before the closing `]`)

**Blocked By:** TASK-ERODE-12

**Blocks:** None

**AEO Impact:** HIGH — FAQPage schema needs to match the visible FAQ content. After adding 5 new FAQs to the component, the schema must also be updated to include them so Google can extract them as PAA answers.

**Current Code (layout.tsx line 146-147 — end of faqSchema):**
```tsx
  ],
};
```

**New Code — add 5 entries before the closing `]`:**
```tsx
    {
      "@type": "Question",
      name: "Is healthcare a good career option for students from Erode's textile industry background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — healthcare is one of the fastest-growing career sectors in Tamil Nadu, providing stable employment independent of textile industry cycles. JKKN College of Allied Health Sciences, ~22 km from Erode on NH-544, offers 9 BSc programmes with 85%+ placement rates and international career opportunities in the UK, UAE, and Singapore.",
      },
    },
    {
      "@type": "Question",
      name: "Can I travel daily from Erode to JKKN AHS without staying in the hostel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — daily commute from Erode is very practical. JKKN AHS is approximately ~22 km from Erode city centre, accessible in 35-40 minutes via NH-544 (Salem-Coimbatore Highway). College-operated buses run daily routes connecting Erode and surrounding towns to the campus.",
      },
    },
    {
      "@type": "Question",
      name: "Should I study allied health science in Erode or prefer a college in Coimbatore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Erode students, JKKN College of Allied Health Sciences (~22 km from Erode) offers a strong alternative to Coimbatore colleges. JKKN has a 500+ bed on-campus teaching hospital for clinical training from Year 1, an 85%+ placement rate, and international placement partners including NHS UK and UAE hospitals. The shorter commute and lower accommodation costs make JKKN a practical and high-quality choice.",
      },
    },
    {
      "@type": "Question",
      name: "Are there direct buses from Erode to JKKN Allied Health Sciences campus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — regular government and private buses operate from Erode Central Bus Stand to Komarapalayam throughout the day via NH-544. The journey covers approximately ~22 km and takes 35-40 minutes. JKKN also operates college transport buses from Erode for student convenience.",
      },
    },
    {
      "@type": "Question",
      name: "What hospitals near Erode hire allied health science graduates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allied health science graduates from Erode find employment at hospitals in Erode, Tiruppur, Salem, and Coimbatore — including Apollo Hospitals, Fortis Healthcare, and Manipal Hospitals. JKKN AHS graduates also secure placements at NHS UK hospitals and UAE healthcare facilities. With 60+ recruiting partners, JKKN ensures placement support both in Tamil Nadu and internationally.",
      },
    },
```

**Testing Criteria:**
- [ ] FAQPage schema has 16 items total (11 original + 5 new)
- [ ] Rich Results Test shows 16 FAQPage entries
- [ ] All 5 new schema entries have correct distance data (~22 km)
- [ ] Schema validates without errors at schema.org validator

---

## TIER 2 — DEPTH IMPROVEMENTS

---

### TASK-ERODE-14

**Title:** Add AI Overview citability blocks (3 static paragraphs)

**Tier:** 2

**File:** `src/app/erode/page.tsx`

**Blocked By:** TASK-ERODE-01, TASK-ERODE-07

**Blocks:** None

**AEO Impact:** MEDIUM — Static paragraphs with factual, citation-ready content increase the probability of AI platforms (ChatGPT, Gemini, Perplexity) citing JKKN in answers about allied health science colleges near Erode.

**New Code — Add to CompetitiveAdvantageSection or create a dedicated AICitabilityBlock section:**

Add after CompetitiveAdvantageSection (approximately line 706 after Tier 0 changes), a new `CitabilityBlock` section:

```tsx
/* ──────────────────────────────────────────
   AI CITABILITY BLOCK
────────────────────────────────────────── */
function CitabilityBlock() {
  return (
    <section className="bg-white py-8 px-4" aria-label="About JKKN AHS">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="aeo-answer" data-speakable="true">
          <h3 className="text-base font-bold text-gray-900 mb-2">
            About JKKN College of Allied Health Sciences
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            JKKN College of Allied Health Sciences, established under the JKKN
            Group (founded 1952), is located at Natarajapuram, NH-544,
            Komarapalayam, Namakkal District, Tamil Nadu 638183 — approximately
            22 km from Erode city. NAAC-accredited and affiliated to Tamil Nadu
            Dr. MGR Medical University, Chennai, the college offers 9
            undergraduate BSc programmes in allied health sciences with a
            500-bed on-campus teaching hospital providing clinical training from
            Year 1.
          </p>
        </div>
        <div className="aeo-answer">
          <h3 className="text-base font-bold text-gray-900 mb-2">
            Placement and Career Outcomes
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            JKKN AHS graduates achieve an 85%+ placement rate with 60+
            recruiting partners including Apollo Hospitals, Fortis Healthcare,
            Manipal Hospitals, SRL Diagnostics, Sun Pharma, and NHS UK.
            International placements in the UK, UAE, and Singapore offer
            salaries of 8–25 LPA. Domestic starting salaries range from
            2.5–4.5 LPA, with experienced professionals earning 6–12 LPA.
          </p>
        </div>
        <div className="aeo-answer">
          <h3 className="text-base font-bold text-gray-900 mb-2">
            Transport from Erode to JKKN AHS
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            The campus is ~22 km from Erode via NH-544 (Salem-Coimbatore
            Highway), taking 35-40 minutes. Regular government and private
            buses operate from Erode Central Bus Stand to Komarapalayam.
            JKKN-operated college buses provide additional daily transport
            from Erode, Tiruppur, Salem, and surrounding towns.
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Insert `<CitabilityBlock />` in ErodePage:** After `<CompetitiveAdvantageSection />` and before `<HowToReachSection />`.

**Testing Criteria:**
- [ ] CitabilityBlock visible in View Source (server-rendered)
- [ ] Three fact-block paragraphs visible on page
- [ ] `.aeo-answer` class on each block
- [ ] Content is factual, no marketing superlatives
- [ ] No duplicate content with SnippetBlock

---

### TASK-ERODE-15

**Title:** Add voice search conversational answer paragraph

**Tier:** 2

**File:** `src/app/erode/page.tsx`

**Blocked By:** TASK-ERODE-01

**Blocks:** None

**AEO Impact:** MEDIUM — Voice search queries use conversational phrasing. Adding a `voice-answer` block with conversational language improves voice search snippet capture.

**New Code — Add to SnippetBlock (TASK-ERODE-07) or create a second paragraph:**

In the `SnippetBlock` function (added in TASK-ERODE-07), add a second paragraph below the existing snippet-answer:

```tsx
        <p
          className="voice-answer text-gray-600 text-sm leading-relaxed mt-3"
          data-speakable="true"
        >
          If you are from Erode and looking for an allied health science college,
          JKKN AHS is your closest high-quality option — just a 35-minute drive
          on NH-544. With 9 healthcare specialisations, hospital training from
          day one, and 85% placement success, it is the top choice for Erode
          students entering the healthcare sector.
        </p>
```

**Testing Criteria:**
- [ ] `.voice-answer` class paragraph visible in server-rendered HTML
- [ ] Paragraph uses conversational language ("If you are from Erode...")
- [ ] Paragraph is 30-50 words (voice device optimal length)
- [ ] `data-speakable="true"` attribute present

---

### TASK-ERODE-16

**Title:** Update BPT FAQ to reflect actual JKKN programmes (relevance fix)

**Tier:** 2

**File:** `src/app/erode/FAQAccordion.client.tsx`

**Blocked By:** TASK-ERODE-02

**Blocks:** None

**AEO Impact:** LOW — The BPT FAQ (FAQ Q4) discusses a programme that JKKN AHS does not offer. This attracts BPT-intent traffic that will not convert, and the answer misleads users. Replace with a FAQ about Critical Care Technology (which JKKN offers and Nandha does not).

**Current FAQ Q4 in FAQAccordion.client.tsx:**
```tsx
  {
    q: "Is BPT a good career option?",
    a: "Yes, BPT (Bachelor of Physiotherapy) is an excellent career choice...",
  },
```

**New FAQ Q4:**
```tsx
  {
    q: "What makes JKKN's Critical Care Technology programme unique near Erode?",
    a: "B.Sc. Critical Care Technology at JKKN AHS is one of the few programmes of its kind available near Erode. Critical Care Technologists work in ICUs, cardiac care units, and trauma centres — roles that are in high demand as Tamil Nadu's healthcare sector grows. JKKN AHS provides hands-on ICU training at its on-campus 500-bed teaching hospital from Year 1, with graduates placed at Apollo Hospitals, Fortis Healthcare, and international facilities in the UK and UAE.",
  },
```

**Also update the FAQ Q4 entry in layout.tsx faqSchema** (same change for schema consistency):

Current faqSchema Q4 in layout.tsx:
```tsx
    {
      "@type": "Question",
      name: "Is BPT a good career option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BPT (Bachelor of Physiotherapy)...",
      },
    },
```

New:
```tsx
    {
      "@type": "Question",
      name: "What makes JKKN's Critical Care Technology programme unique near Erode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B.Sc. Critical Care Technology at JKKN AHS is one of the few programmes of its kind available near Erode. Critical Care Technologists work in ICUs, cardiac care units, and trauma centres — roles in high demand as Tamil Nadu's healthcare sector grows. JKKN AHS provides hands-on ICU training at its on-campus 500-bed teaching hospital from Year 1, with graduates placed at Apollo Hospitals, Fortis Healthcare, and international facilities.",
      },
    },
```

**Testing Criteria:**
- [ ] BPT question removed from FAQAccordion.client.tsx
- [ ] New Critical Care Technology question visible in accordion
- [ ] FAQ schema updated to match in layout.tsx
- [ ] No references to BPT in page.tsx or layout.tsx
- [ ] FAQ count remains 16 total

---

### TASK-ERODE-17

**Title:** Add `dateModified` to WebPage schema

**Tier:** 2

**File:** `src/app/erode/layout.tsx`

**Lines:** 205-213 (speakableSchema — already updated in TASK-ERODE-11)

**Blocked By:** TASK-ERODE-11

**Blocks:** None

**AEO Impact:** LOW — `dateModified` signals content freshness to Google and Gemini. Combined with the schema update in TASK-ERODE-11, this is already handled. Verify `dateModified: "2026-03-28"` was included in TASK-ERODE-11.

**Verification check only — no additional code change if TASK-ERODE-11 was complete:**
- [ ] `speakableSchema` in layout.tsx contains `dateModified: "2026-03-28"`
- [ ] faqSchema in layout.tsx contains `dateModified: "2026-03-24"` (already present at line 57 — no change needed)

---

### TASK-ERODE-18

**Title:** Add internal links to /contact and improve cross-page linking

**Tier:** 2

**File:** `src/app/erode/page.tsx`

**Blocked By:** TASK-ERODE-01

**Blocks:** None

**AEO Impact:** LOW — Improves internal link equity distribution and helps search engines understand site structure. Also provides navigation paths for users who want to contact the admission office after reading FAQ answers.

**Changes:**

**Change 1 — FAQ Q7 answer (in FAQAccordion.client.tsx):**

Current:
```tsx
    a: "You can apply online at https://www.jkkn.ai/apply/jkkn-admission-2026 or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office at +91 9345855001 for guidance.",
```

New (keep same text but note: since this is in a client component, use `<a>` tag for the contact link):
```tsx
    a: "You can apply online at https://www.jkkn.ai/apply/jkkn-admission-2026 or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office at +91 9345855001 or visit our contact page for guidance.",
```

The "contact page" reference encourages users to click through, but since FAQ answers are plain strings in the current implementation, the actual link addition would require changing `a` (answer) from a string to JSX — which is a larger refactor. Flag this as a future enhancement.

**Change 2 — PlacementHighlights section (already has Link to /placements — verify it is present):**

Verify line 462 has:
```tsx
<Link href="/placements" className="inline-flex items-center gap-2 mt-6 text-[#006837] font-bold hover:underline text-sm">
    View full placement details <span aria-hidden="true">&rarr;</span>
</Link>
```

This link already exists [FROM CODEBASE]. No change needed.

**Testing Criteria:**
- [ ] /placements link present in PlacementHighlights section
- [ ] All 9 programme links (/cardiac-technology, etc.) working and return 200 status
- [ ] All 4 cross-city links working and return 200 status

---

## Summary Table — All Tasks

| Task ID | Tier | File | Status | AEO Impact |
|---------|------|------|--------|------------|
| TASK-ERODE-01 | 0 | page.tsx | Pending | CRITICAL |
| TASK-ERODE-02 | 0 | FAQAccordion.client.tsx (new) | Pending | CRITICAL |
| TASK-ERODE-03 | 0 | page.tsx | Pending | HIGH |
| TASK-ERODE-04 | 0 | layout.tsx | Pending | HIGH |
| TASK-ERODE-05 | 0 | layout.tsx | Pending | HIGH |
| TASK-ERODE-06 | 0 | page.tsx | Pending | MEDIUM |
| TASK-ERODE-07 | 1 | page.tsx | Pending | HIGH |
| TASK-ERODE-08 | 1 | layout.tsx | Pending | HIGH |
| TASK-ERODE-09 | 1 | layout.tsx | Pending | MEDIUM |
| TASK-ERODE-10 | 1 | layout.tsx | Pending | HIGH |
| TASK-ERODE-11 | 1 | layout.tsx | Pending | MEDIUM |
| TASK-ERODE-12 | 1 | FAQAccordion.client.tsx | Pending | HIGH |
| TASK-ERODE-13 | 1 | layout.tsx | Pending | HIGH |
| TASK-ERODE-14 | 2 | page.tsx | Pending | MEDIUM |
| TASK-ERODE-15 | 2 | page.tsx | Pending | MEDIUM |
| TASK-ERODE-16 | 2 | FAQAccordion.client.tsx + layout.tsx | Pending | LOW |
| TASK-ERODE-17 | 2 | layout.tsx | Pending | LOW |
| TASK-ERODE-18 | 2 | page.tsx | Pending | LOW |

**Total tasks: 18** | Tier 0: 6 | Tier 1: 7 | Tier 2: 5

---

*Document version: 1.0 | Created: 2026-03-28 | Next review: 2026-04-14*
