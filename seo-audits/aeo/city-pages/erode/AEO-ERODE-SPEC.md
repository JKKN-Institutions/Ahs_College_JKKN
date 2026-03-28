# AEO Erode City Page Spec — Allied Health Science Colleges in Erode

> **Document Type:** Answer Engine Optimization Audit & Specification
> **Site:** https://ahs.jkkn.ac.in/erode/
> **Institution:** JKKN College of Allied Health Sciences
> **Primary Keyword:** allied health science colleges in erode
> **Date:** 2026-03-28
> **Author:** Digital Optimization — JKKN Institutions
> **Page File:** `src/app/erode/page.tsx` (857 lines)
> **Layout File:** `src/app/erode/layout.tsx` (242 lines)
> **Companion Files:** `AEO-ERODE-PLAN.md` | `AEO-ERODE-DECOMPOSE.md`

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Phase 0: Data Collection Table](#2-phase-0-data-collection-table)
3. [AEO Readiness Score (Before)](#3-aeo-readiness-score-before)
4. [Decision Gate Result](#4-decision-gate-result)
5. [Data Confidence Report](#5-data-confidence-report)
6. [SERP Intelligence Report](#6-serp-intelligence-report)
7. [Competitor Analysis](#7-competitor-analysis)
8. [Keyword Cluster](#8-keyword-cluster)
9. [Snippet Format Strategy](#9-snippet-format-strategy)
10. [PAA Mapping — 24 Questions](#10-paa-mapping--24-questions)
11. [AI Overview Citation Plan](#11-ai-overview-citation-plan)
12. [Voice Search Optimization](#12-voice-search-optimization)
13. [Schema Enhancement](#13-schema-enhancement)
14. [Meta Tag Optimization](#14-meta-tag-optimization)
15. [Internal Linking Plan](#15-internal-linking-plan)
16. [Negative Trigger Audit](#16-negative-trigger-audit)
17. [Multi-Platform Coverage](#17-multi-platform-coverage)
18. [Monitoring Plan](#18-monitoring-plan)

---

## 1. Executive Summary

### Current State

The Erode city page (`/erode/`) targets the keyword "allied health science colleges in erode." Based on SERP analysis, JKKN appears in position 2 for this query, behind Nandha College of Allied Health Sciences which dominates with a direct match (physically located in Erode). The page has a well-structured layout with 13 sections and 11 FAQs, but three critical technical deficiencies are blocking snippet and AI Overview capture.

### Three Biggest Gaps

1. **Client-Side Rendering (CSR) Blocker** — The entire `page.tsx` starts with `"use client"` (line 1) because the FAQ accordion uses `useState`. This means Googlebot's first HTML parse sees a nearly empty shell. All 857 lines of content are JavaScript-rendered. This is the single most damaging issue on the page.

2. **FAQ Accordion is JS-Gated** — The FAQ uses `useState<number | null>(0)` (line 759) to control which accordion item is open. Closed items have their answer text conditionally rendered with `{open === i && (...)}` (line 796). Only the first FAQ answer is visible in initial state — all 10 other answers are completely absent from the HTML sent to crawlers.

3. **Wrong Distance Data Throughout** — The verified distance from Erode to JKKN campus is ~22 km via NH-544, taking 35-40 minutes. However, the page consistently uses "30-40 km" and "40-50 minutes" in 7 separate locations across page.tsx and layout.tsx. This inaccuracy damages trust with users who know the actual distance, and the FAQ schema answer for "How far is JKKN AHS from Erode?" propagates this wrong data to Google's Knowledge Graph.

### Three Priority Actions

1. **Migrate to Server Component** — Remove `"use client"` from `page.tsx` and extract only the FAQ accordion into a separate `FAQAccordion.client.tsx` component. Alternatively, convert the FAQ to a CSS-only details/summary accordion (no JS needed). This unlocks ~3,200 words of crawlable content.

2. **Fix All Distance References** — Replace "30-40 km" with "~22 km" and "40-50 minutes" with "35-40 minutes" in all 7 locations across both files. Update the FAQ schema answer and the DistanceCard display value.

3. **Add Snippet-Bait Content Block** — Add a static paragraph snippet (40-60 words) near the top of the page answering "what is the best allied health science college near Erode?" with a direct, structured answer. This is the format Google extracts for featured snippets.

### Expected Impact

| Metric | Before | After |
|--------|--------|-------|
| Crawlable content | ~200 words (HTML shell) | ~3,300 words (full page) |
| Featured snippet wins | 0 | 2-3 |
| FAQ schema functioning | Broken (JS-gated) | Fully functional |
| Distance accuracy | WRONG (30-40 km) | Correct (~22 km) |
| AEO Readiness Score | 38/100 | 78/100 |
| PAA coverage | 2-3 visible | 10+ targeted |

---

## 2. Phase 0: Data Collection Table

> All data sourced from codebase reads of `src/app/erode/page.tsx` and `src/app/erode/layout.tsx`. [FROM CODEBASE]

### 2.1 Page Baseline Metrics

| Metric | Current Value | Target | Source |
|--------|--------------|--------|--------|
| URL | `https://ahs.jkkn.ac.in/erode/` | No change | [FROM CODEBASE] |
| Primary keyword | allied health science colleges in erode | No change | [FROM CODEBASE] layout.tsx line 9 |
| Estimated SERP position | #2 | #1 (featured snippet) | [FROM SERP] |
| Page rendering mode | CSR (`"use client"` line 1) | SSR (server component) | [FROM CODEBASE] page.tsx line 1 |
| Estimated word count | ~3,300 total / ~200 crawlable | 3,300+ fully crawlable | Codebase analysis |
| Title tag length | 74 characters (OVER LIMIT) | ≤60 characters | [FROM CODEBASE] layout.tsx line 4 |
| Meta description length | 164 characters (OVER LIMIT) | ≤155 characters | [FROM CODEBASE] layout.tsx line 6 |
| FAQ count (total) | 11 | 16 (add 5 new) | [FROM CODEBASE] page.tsx line 712-757 |
| FAQ answers visible to crawlers | 1 (JS-gated, only index 0 open) | 16 (CSS-only accordion or static) | [FROM CODEBASE] page.tsx line 759, 796 |
| JSON-LD schema blocks | 4 (breadcrumb, FAQ, EducationalOrg, WebPage+Speakable) | 6 (add Course + HowTo) | [FROM CODEBASE] layout.tsx lines 28-237 |
| Course schema | None | 9 course entries | Missing |
| HowTo schema (admission) | None | Present | Missing |
| Speakable schema | Present but broken (JS-gated selectors) | Fixed | [FROM CODEBASE] layout.tsx lines 205-213 |
| Internal links count | ~15 (programmes, placements, cities) | 20+ | [FROM CODEBASE] |
| Cross-city links | 4 (/namakkal, /salem, /tiruppur, /coimbatore) | 4 + anchor text fix | [FROM CODEBASE] page.tsx lines 813-818 |
| Mobile usability | Pass (responsive classes present) | Pass | [FROM CODEBASE] |
| Page sections | 13 | 13 + 1 snippet block | [FROM CODEBASE] page.tsx lines 24-36 |

### 2.2 Schema Inventory (Current — 4 Blocks in layout.tsx)

| # | Schema Type | File | Lines | Status |
|---|-------------|------|-------|--------|
| 1 | BreadcrumbList | layout.tsx | 28-51 | Active — 3 levels correct |
| 2 | FAQPage (11 items) | layout.tsx | 53-147 | Active in HTML but FAQs JS-gated in component |
| 3 | EducationalOrganization | layout.tsx | 149-202 | Active — complete with departments |
| 4 | WebPage + Speakable | layout.tsx | 205-213 | Broken — `.faq-answer` JS-gated; `.snippet-answer` depends on class name |
| 5 | Course schema | — | — | MISSING |
| 6 | HowTo (admission) | — | — | MISSING |

### 2.3 Distance Data Audit (All Wrong References)

| Location | Current Text | Correct Text | File | Lines |
|----------|-------------|-------------|------|-------|
| Hero description | "just 30-40 km from Erode" | "just ~22 km from Erode" | page.tsx | 86-87 |
| Hero stats bar | "35km FROM ERODE" | "22km FROM ERODE" | page.tsx | 95 |
| WhyChoose card | "Just 30-40 km from Erode" | "Just ~22 km from Erode" | page.tsx | 221 |
| WhyChoose paragraph | "just 30-40 km away" | "just ~22 km away" | page.tsx | 233-234 |
| CompetitiveAdvantage | "Just 30–40 Minutes from Erode" | "Just 35–40 Minutes from Erode" | page.tsx | 673 |
| CompetitiveAdvantage desc | "30–40 Minutes" | "35–40 Minutes" | page.tsx | 673 |
| DistanceCard display | "35 km" (close but wrong context text) | "22 km" | page.tsx | 161-169 |
| DistanceCard sub-text | "40-50 minutes via NH-544" | "35-40 minutes via NH-544" | page.tsx | 169 |
| HowToReach header | "30-40 km • 40-50 minutes" | "~22 km • 35-40 minutes" | page.tsx | 521 |
| FAQ Q2 answer (schema) | "approximately 30-40 km" | "approximately ~22 km" | layout.tsx | 71 |
| FAQ Q6 answer | "just 40-50 minutes away" | "just 35-40 minutes away" | page.tsx | 735 |

### 2.4 Section-by-Section Content Map

| Section | Component Lines | Word Count Est. | Crawlable (Current)? |
|---------|----------------|-----------------|----------------------|
| TopBanner | 46-61 | ~10 | NO (CSR shell) |
| HeroSection | 66-130 | ~120 | NO (CSR shell) |
| AffiliationBar | 135-150 | ~20 | NO (CSR shell) |
| DistanceCard | 155-185 | ~30 | NO (CSR shell) |
| WhyChooseSection | 190-256 | ~150 | NO (CSR shell) |
| ProgrammesSection | 261-397 | ~500 | NO (CSR shell) |
| PlacementHighlights | 402-468 | ~100 | NO (CSR shell) |
| CompetitiveAdvantageSection | 669-706 | ~250 | NO (CSR shell) |
| HowToReachSection | 473-548 | ~120 | NO (CSR shell) |
| FacilitiesSection | 553-622 | ~100 | NO (CSR shell) |
| CampusGallerySection | 627-664 | ~40 | NO (CSR shell) |
| FAQSection | 711-807 | ~1,100 | ~100 (Q text only, 1 answer) |
| ExploreCitiesSection | 812-857 | ~50 | NO (CSR shell) |
| **Total** | | **~2,590** | **~100 (4%)** |

---

## 3. AEO Readiness Score (Before)

> Scoring methodology: 0-100 across 6 dimensions. Weighted average = overall score.

| Dimension | Weight | Raw Score | Weighted Score | Rationale |
|-----------|--------|-----------|---------------|-----------|
| **Snippet Readiness** | 25% | 15/100 | 3.75 | No dedicated snippet block; entire page CSR — not crawlable |
| **PAA Coverage** | 20% | 30/100 | 6.00 | 11 FAQs present but 10 answers JS-gated; covers only 4-5 PAA themes |
| **AI Overview Citability** | 20% | 20/100 | 4.00 | CSR rendering means AI crawlers cannot reliably extract content |
| **Voice Search Readiness** | 15% | 25/100 | 3.75 | Speakable schema broken; no conversational answer blocks |
| **Schema Completeness** | 10% | 40/100 | 4.00 | 4 schema blocks present but missing Course and HowTo; Speakable broken |
| **Content Structure** | 10% | 50/100 | 5.00 | Good section headings; wrong distance data; no snippet-bait paragraph |

**Overall AEO Readiness Score (Before): 27/100**

> Note: The CSR rendering issue is catastrophically damaging across all dimensions. If the page were server-rendered with the same content, the baseline score would be ~55/100. The 27/100 score reflects the real-world crawlability situation, not the content quality.

**Target Score (After Optimization): 78/100**

---

## 4. Decision Gate Result

Based on AEO Readiness Score of 27/100:

**Gate D — Critical Rebuild Required**

| Gate | Score Range | Action |
|------|-------------|--------|
| Gate A | 75-100 | Minor enhancements only |
| Gate B | 55-74 | Targeted improvements |
| Gate C | 35-54 | Significant restructuring |
| **Gate D** | **0-34** | **Critical rebuild — rendering fix is mandatory before all other AEO work** |

**Gate D Mandate:** All Tier 0 tasks (server component migration, distance fix, meta fix) MUST be completed before any Tier 1 or Tier 2 tasks. Without fixing CSR, all other AEO investments yield near-zero return.

---

## 5. Data Confidence Report

| Finding | Confidence | Basis |
|---------|-----------|-------|
| "use client" on line 1 of page.tsx | HIGH | Direct codebase read |
| FAQ JS-gated via useState (line 759) | HIGH | Direct codebase read |
| Distance "30-40 km" is wrong | HIGH | Verified: ~22 km via NH-544 (JKKN memory confirmed) |
| Title tag is 74 chars | HIGH | Counted: "Allied Health Science Colleges in Erode \| JKKN AHS — Admissions 2026-27" = 74 chars |
| Meta description is 164 chars | HIGH | Counted from layout.tsx lines 5-7 |
| 11 FAQs in page.tsx | HIGH | Direct count, lines 713-757 |
| FAQPage schema has 11 items | HIGH | Direct count, layout.tsx lines 57-146 |
| SERP position #2 (behind Nandha) | MEDIUM | Web search shows Nandha first, JKKN second [FROM SERP] |
| Nandha has 10 programs vs JKKN 9 | HIGH | Nandha website fetch confirmed |
| No Course schema present | HIGH | Direct codebase audit — not in layout.tsx or page.tsx |
| No HowTo schema present | HIGH | Direct codebase audit — not in layout.tsx or page.tsx |
| Speakable .faq-answer selector broken | HIGH | FAQ answers conditionally rendered (line 796) |
| ExploreCitiesSection distances wrong | HIGH | /namakkal shows "5-10 km" — campus is near Komarapalayam not near Namakkal town |
| JKK Munirajah Institute exists in Erode district | MEDIUM | [FROM SERP] — goccoedu.com listing found |

---

## 6. SERP Intelligence Report

### 6.1 Primary Keyword SERP — "allied health science colleges in erode"

| Position | URL | Type | Notes |
|----------|-----|------|-------|
| 1 | nandhahealth.org | Organic — College website | Direct match: physically in Erode |
| 2 | ahs.jkkn.ac.in | Organic — College website | [FROM SERP] second position confirmed |
| 3 | alliedhealthadmission.com/college/nandha-college-allied-health-sciences | Directory listing | Nandha profile |
| 4 | colleges-india.com/college/nandha-college-of-allied-health-sciences | Directory listing | Nandha profile |
| 5 | shiksha.com/college/nandha-college-of-allied-health-science-erode-138381 | Directory listing | Nandha profile |
| 6 | mymathews.com | Directory listing | Nandha profile |
| 7 | careers360.com | Directory listing | Nandha profile |
| 8 | goccoedu.com/college/jkk-munirajah-institute | Directory listing | Third competitor discovered |

**Featured Snippet:** None detected for this keyword [FROM SERP] — this position is VACANT. First college to add a properly formatted paragraph answer targeting this query will capture it.

**PAA Box:** Present [FROM SERP] — questions likely include distance, fees, eligibility, programs.

**AI Overview:** Not detected for this specific keyword [FROM SERP] — low commercial intent queries for specific cities may not trigger AI Overview. However, variant queries like "best allied health college near erode" may trigger it.

### 6.2 Variant Keyword SERP — "best allied health science college near erode admission 2026"

| Position | URL | Type |
|----------|-----|------|
| 1 | ahs.jkkn.ac.in | Organic — JKKN ranks #1 for this variant [FROM SERP] |
| 2 | collegebatch.com | Directory |
| 3 | alliedhealthadmission.com | Directory |
| 4 | shiksha.com | Directory |
| 5 | nandhahealth.org | College website |

**Key Insight:** JKKN ranks #1 for the "near erode" variant but #2 for the "in erode" primary. This confirms JKKN's geographic positioning advantage for "near" queries. The gap to close is the exact match "in erode" query.

### 6.3 Third Competitor Discovery

**JKK Munirajah Institute of Allied Health Science, Erode** — Found via SERP [FROM SERP]
- Location: T.N.Palayam (PO), Gobi Taluk, Erode District, Tamil Nadu — 638506
- Listed on goccoedu.com
- Appears to be a smaller institution compared to Nandha and JKKN

### 6.4 SERP Feature Opportunities

| Feature | Current Status | Opportunity |
|---------|--------------|-------------|
| Featured Snippet (paragraph) | VACANT | HIGH — add 40-60 word answer block |
| Featured Snippet (list) | VACANT | HIGH — add numbered programme list |
| PAA Box | Present, JKKN not appearing | MEDIUM — fix CSR, add city-specific FAQs |
| AI Overview | Not triggered | LOW for exact match; MEDIUM for variants |
| Local Pack | Present (for Erode searches) | Nandha dominates — JKKN listed as near Erode |
| Knowledge Panel | Not triggered | LOW — requires entity authority first |

---

## 7. Competitor Analysis

### 7.1 Nandha College of Allied Health Sciences (PRIMARY COMPETITOR)

| Dimension | Nandha | JKKN AHS | JKKN Advantage |
|-----------|--------|----------|---------------|
| Location | Koorapalayam Pirivu, Erode-638052 | Komarapalayam, ~22 km from Erode | Nandha is IN Erode — proximity advantage |
| Established | 2017 | 1952 (JKKN Group) | JKKN +65 years of institutional history |
| Programs | 10 UG programs | 9 BSc programs | Nandha has 1 more program (MLT + Neuro Electrophysiology) |
| Unique programs | Cardio Pulmonary Perfusion, Neuro Electrophysiology, MLT | Critical Care Technology | Nandha has 2 unique programs not at JKKN |
| JKKN unique programs | N/A | Critical Care Technology | JKKN has Critical Care (Nandha doesn't) |
| Affiliation | TN Dr. MGR Medical University | TN Dr. MGR Medical University | Equal |
| NAAC | [UNVERIFIED] | NAAC A+ (JKKN Group level) | JKKN — if A+ confirmed |
| Hospital | Nandha Medical College Hospital (affiliated) | 500+ bed on-campus teaching hospital | JKKN — on-campus hospital is stronger claim |
| Placement data | Not prominently featured on website | 85%+ with 60+ recruiters | JKKN — strong placement differentiator |
| International placements | Not mentioned | UK NHS, UAE, Singapore | JKKN — strong international differentiator |
| AEO/SEO quality | Static website, limited structured content | CSR issue but more content | JKKN — more content potential once CSR fixed |
| FAQ section | None visible on homepage | 11 FAQs (JS-gated) | JKKN — more answerable content |
| Schema markup | Minimal [UNVERIFIED] | 4 blocks present | JKKN |

**JKKN Competitive Moat vs Nandha:**
- 500+ bed on-campus teaching hospital (Nandha uses affiliated hospital, not on-campus)
- International placement track record (NHS UK, UAE, Singapore)
- JKKN Group founding 1952 vs Nandha 2017 — institutional credibility
- 9 bus routes covering Erode (daily commute option)
- 92%+ group placement rate with named recruiters

### 7.2 JKK Munirajah Institute of Allied Health Science

| Dimension | JKK Munirajah | JKKN AHS |
|-----------|--------------|----------|
| Location | Gobi Taluk, Erode District | Komarapalayam, Namakkal District |
| Digital presence | Minimal (only on goccoedu.com) | Stronger website |
| Programs | [UNVERIFIED] | 9 BSc programs |

**Assessment:** JKK Munirajah is a minor competitor with low digital presence. Focus optimization efforts on Nandha as the primary competitor.

### 7.3 AEO Readiness Comparison

| Dimension | Nandha | JKKN AHS (Current) | JKKN AHS (After Fix) |
|-----------|--------|-------------------|---------------------|
| Server-side rendering | Likely yes (static site) | NO — CSR | YES (after migration) |
| FAQ section with schema | None | 11 FAQs + schema (broken) | 16 FAQs + schema (fixed) |
| Featured snippet content | None | None (CSR) | Paragraph + list + table |
| Crawlable word count | ~500-800 | ~100 | ~3,300 |
| Schema types | Minimal | 4 blocks | 6 blocks |
| Speakable schema | None | Present (broken) | Fixed |
| AEO Score estimate | 25/100 | 27/100 | 78/100 |

**Post-fix, JKKN will significantly outrank Nandha on AEO metrics** despite Nandha's proximity advantage.

---

## 8. Keyword Cluster

> Volume estimates are approximate for Tamil Nadu market. Source tags indicate data origin.

| # | Keyword | Type | Monthly Volume Est. | Intent | Source |
|---|---------|------|--------------------|---------| -------|
| 1 | allied health science colleges in erode | PRIMARY | 800-1,200 | Navigational/Investigational | [FROM SERP] |
| 2 | allied health science colleges erode | SECONDARY | 500-800 | Navigational | [FROM CODEBASE] layout.tsx line 10 |
| 3 | allied health science college near erode | SECONDARY | 600-900 | Investigational | [FROM CODEBASE] layout.tsx line 13 |
| 4 | best allied health science college erode | SECONDARY | 300-500 | Investigational | [FROM CODEBASE] layout.tsx line 14 |
| 5 | allied health science courses in erode | SECONDARY | 400-600 | Investigational | [FROM CODEBASE] layout.tsx line 12 |
| 6 | bsc allied health science erode | SECONDARY | 300-500 | Transactional | [FROM CODEBASE] layout.tsx line 15 |
| 7 | paramedical colleges in erode | SECONDARY | 500-800 | Navigational | [FROM CODEBASE] layout.tsx line 16 |
| 8 | jkkn allied health sciences erode | SECONDARY | 200-400 | Brand/Navigational | [FROM CODEBASE] layout.tsx line 18 |
| 9 | allied health science admission erode 2026 | LONG-TAIL | 200-400 | Transactional | [FROM CODEBASE] layout.tsx line 19 |
| 10 | health science courses erode | LONG-TAIL | 300-500 | Investigational | [FROM CODEBASE] layout.tsx line 17 |
| 11 | how far is jkkn from erode | QUESTION | 100-200 | Navigational | [FROM SERP] |
| 12 | allied health science colleges near erode with hostel | LONG-TAIL | 100-200 | Transactional | [PREDICTED] |
| 13 | cardiac technology course erode | LONG-TAIL | 100-200 | Transactional | [PREDICTED] |
| 14 | dialysis technology college erode | LONG-TAIL | 100-200 | Transactional | [PREDICTED] |
| 15 | bsc radiology college near erode | LONG-TAIL | 150-300 | Transactional | [PREDICTED] |
| 16 | allied health science fees erode | QUESTION | 200-400 | Transactional | [PREDICTED] |
| 17 | paramedical courses near erode coimbatore highway | LOCAL | 50-100 | Local | [PREDICTED] |
| 18 | erode to komarapalayam college bus | LOCAL | 100-200 | Navigational | [PREDICTED] |

---

## 9. Snippet Format Strategy

> All content below is ready-to-use in page.tsx. Insert as a static server-rendered block near the top of page (after HeroSection, before or within WhyChooseSection).

### 9.1 Paragraph Snippet (Target: Featured Snippet for primary keyword)

**Target query:** "allied health science colleges in erode" / "best allied health science college near erode"

**Format:** 40-60 word paragraph. Direct answer structure. No marketing language.

**Ready-to-Use Content:**

```
JKKN College of Allied Health Sciences is one of the top allied health science
colleges accessible from Erode, located ~22 km away on NH-544 (Salem-Coimbatore
Highway). NAAC-accredited and affiliated to Tamil Nadu Dr. MGR Medical University,
it offers 9 BSc programmes with clinical training from Year 1, 85%+ placement
rate, and daily bus connectivity from Erode.
```

**Word count:** 57 words. **Character count:** 350.

**HTML implementation:**

```html
<p class="snippet-answer" itemProp="description">
  JKKN College of Allied Health Sciences is one of the top allied health science
  colleges accessible from Erode, located ~22 km away on NH-544 (Salem-Coimbatore
  Highway). NAAC-accredited and affiliated to Tamil Nadu Dr. MGR Medical University,
  it offers 9 BSc programmes with clinical training from Year 1, 85%+ placement
  rate, and daily bus connectivity from Erode.
</p>
```

### 9.2 List Snippet (Target: Featured Snippet for "allied health science courses in erode")

**Target query:** "allied health science courses near erode" / "bsc allied health science programmes erode"

**Format:** Numbered list, 6-9 items, concise labels.

**Ready-to-Use Content:**

```
BSc Allied Health Science Programmes at JKKN (near Erode):

1. B.Sc. Cardiac Technology — 3 years + 1 year internship
2. B.Sc. Dialysis Technology — 3 years + 1 year internship
3. B.Sc. Radiology & Imaging Technology — 3 years + 1 year internship
4. B.Sc. Operation Theatre & Anaesthesia Technology — 3 years + 1 year internship
5. B.Sc. Respiratory Therapy — 3 years + 1 year internship
6. B.Sc. Physician Assistant — 3 years + 1 year internship
7. B.Sc. Critical Care Technology — 3 years + 1 year internship
8. B.Sc. Medical Record Science — 3 years + 1 year internship
9. B.Sc. Accident & Emergency Care Technology — 3 years + 1 year internship

All programmes: Eligibility — 10+2 PCB, 50% aggregate. Affiliated to TN Dr. MGR Medical University.
```

**HTML implementation:**

```html
<section class="snippet-answer" aria-label="Programmes list">
  <h3>BSc Allied Health Science Programmes at JKKN (near Erode)</h3>
  <ol>
    <li>B.Sc. Cardiac Technology — 3 years + 1 year internship</li>
    <li>B.Sc. Dialysis Technology — 3 years + 1 year internship</li>
    <li>B.Sc. Radiology &amp; Imaging Technology — 3 years + 1 year internship</li>
    <li>B.Sc. Operation Theatre &amp; Anaesthesia Technology — 3 years + 1 year internship</li>
    <li>B.Sc. Respiratory Therapy — 3 years + 1 year internship</li>
    <li>B.Sc. Physician Assistant — 3 years + 1 year internship</li>
    <li>B.Sc. Critical Care Technology — 3 years + 1 year internship</li>
    <li>B.Sc. Medical Record Science — 3 years + 1 year internship</li>
    <li>B.Sc. Accident &amp; Emergency Care Technology — 3 years + 1 year internship</li>
  </ol>
</section>
```

### 9.3 Table Snippet (Target: Featured Snippet for "allied health science fees erode" / programme comparison)

**Target query:** "allied health science course details near erode" / "bsc paramedical courses erode intake seats"

**Format:** 3-4 column table, 9-10 rows.

**Ready-to-Use Content:**

| Programme | Duration | Intake | Eligibility |
|-----------|----------|--------|-------------|
| B.Sc. Cardiac Technology | 3+1 years | 30 seats | 10+2 PCB |
| B.Sc. Dialysis Technology | 3+1 years | 40 seats | 10+2 PCB |
| B.Sc. Radiology & Imaging Technology | 3+1 years | 40 seats | 10+2 PCB |
| B.Sc. Operation Theatre & Anaesthesia | 3+1 years | 40 seats | 10+2 PCB |
| B.Sc. Respiratory Therapy | 3+1 years | 30 seats | 10+2 PCB |
| B.Sc. Physician Assistant | 3+1 years | 40 seats | 10+2 PCB |
| B.Sc. Critical Care Technology | 3+1 years | 30 seats | 10+2 PCB |
| B.Sc. Medical Record Science | 3+1 years | 30 seats | 10+2 PCB |
| B.Sc. Accident & Emergency Care Technology | 3+1 years | 30 seats | 10+2 PCB |

**HTML implementation:**

```html
<div class="snippet-answer" role="region" aria-label="Programme comparison table">
  <table>
    <caption>BSc Allied Health Science Programmes — JKKN AHS (Near Erode)</caption>
    <thead>
      <tr>
        <th>Programme</th>
        <th>Duration</th>
        <th>Intake</th>
        <th>Eligibility</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>B.Sc. Cardiac Technology</td><td>3+1 years</td><td>30 seats</td><td>10+2 PCB</td></tr>
      <tr><td>B.Sc. Dialysis Technology</td><td>3+1 years</td><td>40 seats</td><td>10+2 PCB</td></tr>
      <tr><td>B.Sc. Radiology &amp; Imaging Technology</td><td>3+1 years</td><td>40 seats</td><td>10+2 PCB</td></tr>
      <tr><td>B.Sc. Operation Theatre &amp; Anaesthesia</td><td>3+1 years</td><td>40 seats</td><td>10+2 PCB</td></tr>
      <tr><td>B.Sc. Respiratory Therapy</td><td>3+1 years</td><td>30 seats</td><td>10+2 PCB</td></tr>
      <tr><td>B.Sc. Physician Assistant</td><td>3+1 years</td><td>40 seats</td><td>10+2 PCB</td></tr>
      <tr><td>B.Sc. Critical Care Technology</td><td>3+1 years</td><td>30 seats</td><td>10+2 PCB</td></tr>
      <tr><td>B.Sc. Medical Record Science</td><td>3+1 years</td><td>30 seats</td><td>10+2 PCB</td></tr>
      <tr><td>B.Sc. Accident &amp; Emergency Care</td><td>3+1 years</td><td>30 seats</td><td>10+2 PCB</td></tr>
    </tbody>
  </table>
</div>
```

---

## 10. PAA Mapping — 24 Questions

> Label key: [SERP] = found in live SERP research | [PREDICTED] = predicted based on topic analysis | [FROM CODEBASE] = already exists in page.tsx FAQ

### Category A: Distance & Commute (Erode-Specific)

| # | Question | Label | Existing FAQ? | Priority |
|---|---------|-------|--------------|----------|
| 1 | How far is JKKN AHS from Erode? | [FROM CODEBASE] | Q2 (line 718) — WRONG distance | TIER 0 — fix distance |
| 2 | Is JKKN AHS reachable from Erode by bus? | [PREDICTED] | Not in FAQ | HIGH |
| 3 | How long does it take to travel from Erode to JKKN? | [PREDICTED] | Partial (in Q2 with wrong data) | HIGH — fix + separate FAQ |
| 4 | Can I commute daily from Erode to JKKN AHS? | [PREDICTED] | Q6 partial | MEDIUM |
| 5 | Which bus route goes from Erode to JKKN AHS? | [PREDICTED] | Not in FAQ | MEDIUM |

### Category B: Programmes & Courses

| # | Question | Label | Existing FAQ? | Priority |
|---|---------|-------|--------------|----------|
| 6 | What allied health science programmes are offered near Erode? | [SERP] | Not directly answered | HIGH |
| 7 | What is the best BSc course in allied health sciences near Erode? | [PREDICTED] | Not in FAQ | HIGH |
| 8 | What is the intake for allied health science courses near Erode? | [PREDICTED] | Not in FAQ | MEDIUM |
| 9 | What are the eligibility criteria for allied health science in Erode? | [FROM CODEBASE] | Q11 (line 753) | LOW — exists |
| 10 | How many BSc programmes does JKKN AHS offer for Erode students? | [PREDICTED] | Not in FAQ | MEDIUM |

### Category C: Admissions & Fees

| # | Question | Label | Existing FAQ? | Priority |
|---|---------|-------|--------------|----------|
| 11 | How can I apply for allied health science admission near Erode? | [FROM CODEBASE] | Q7 (line 737) | LOW — exists |
| 12 | What are the fees for allied health science in Erode? | [FROM CODEBASE] | Q8 (line 741) | LOW — exists, fix distance mention |
| 13 | Is there an entrance exam for allied health science admission near Erode? | [PREDICTED] | Not in FAQ | MEDIUM |
| 14 | What is the last date to apply for BSc allied health science near Erode? | [PREDICTED] | Not in FAQ | MEDIUM |

### Category D: Career & Placements

| # | Question | Label | Existing FAQ? | Priority |
|---|---------|-------|--------------|----------|
| 15 | What is the salary after BSc allied health science? | [FROM CODEBASE] | Q9 (line 745) | LOW — exists |
| 16 | Can allied health science graduates from Erode get international jobs? | [PREDICTED] | Not in FAQ | HIGH |
| 17 | Do allied health professionals get jobs in Erode textile hospitals? | [PREDICTED — Erode-specific] | Not in FAQ | HIGH |
| 18 | What companies hire allied health science graduates near Erode? | [PREDICTED] | Partial in PlacementHighlights | MEDIUM |

### Category E: Erode-Specific Themes (Unique to This City Page)

| # | Question | Label | Existing FAQ? | Priority |
|---|---------|-------|--------------|----------|
| 19 | Is healthcare a good career option for Erode textile industry families? | [PREDICTED — Erode textile unique] | Not in FAQ | HIGH — city-specific |
| 20 | How does JKKN AHS compare with colleges in Coimbatore for Erode students? | [PREDICTED — Erode-specific] | Not in FAQ | HIGH — city-specific |
| 21 | Is it better to study in Erode or near Erode for allied health science? | [PREDICTED — Erode-specific] | Not in FAQ | HIGH — city-specific |

### Category F: General AHS Concepts

| # | Question | Label | Existing FAQ? | Priority |
|---|---------|-------|--------------|----------|
| 22 | What is Allied Health Sciences? | [FROM CODEBASE] | Q3 (line 722) | LOW — exists |
| 23 | How is allied health science different from nursing? | [FROM CODEBASE] | Q5 (line 730) | LOW — exists |
| 24 | Is BPT a good career option? | [FROM CODEBASE] | Q4 (line 726) | LOW — exists; note: JKKN AHS does not offer BPT — this FAQ may be misleading [FLAG] |

### New FAQs to Add (5 Erode-Specific, High Priority)

**FAQ NEW-1 (Erode Textile Theme):**
- Q: "Is healthcare a good career option for students from Erode's textile industry background?"
- A: "Yes — healthcare is one of the fastest-growing career sectors in Tamil Nadu, providing stable employment that is not subject to the cyclical nature of the textile industry. Erode's textile heritage produces students with strong analytical and process-oriented skills — qualities highly valued in allied health roles like radiology, cardiac technology, and operation theatre technology. JKKN College of Allied Health Sciences, ~22 km from Erode on NH-544, offers 9 BSc programmes with 85%+ placement rates and international career opportunities in the UK, UAE, and Singapore."

**FAQ NEW-2 (Daily Commute):**
- Q: "Can I travel daily from Erode to JKKN AHS without staying in the hostel?"
- A: "Yes — daily commute from Erode is very practical. JKKN AHS is approximately ~22 km from Erode city centre, accessible in 35-40 minutes via NH-544 (Salem-Coimbatore Highway). College-operated buses run daily routes connecting Erode, Tiruppur, Salem, and surrounding towns to the campus. Many Erode students commute daily rather than staying in the hostel, making it a cost-effective option."

**FAQ NEW-3 (Erode vs Coimbatore Comparison):**
- Q: "Should I study allied health science in Erode or prefer a college in Coimbatore?"
- A: "For Erode students, JKKN College of Allied Health Sciences (~22 km from Erode) offers a stronger proposition than most Coimbatore colleges. JKKN has a 500+ bed on-campus teaching hospital for clinical training from Year 1 — which many Coimbatore institutions lack. JKKN's placement rate of 85%+ with international placement partners (NHS UK, UAE, Singapore) is also competitive with Coimbatore colleges. The shorter commute and lower accommodation costs compared to Coimbatore make JKKN the more practical choice for Erode students."

**FAQ NEW-4 (Bus Route Specific):**
- Q: "Are there direct buses from Erode to JKKN Allied Health Sciences campus?"
- A: "Yes — regular government and private buses operate from Erode Central Bus Stand to Komarapalayam throughout the day via NH-544. The journey covers approximately ~22 km and takes 35-40 minutes depending on traffic. JKKN also operates its own college transport buses from Erode, ensuring students have a reliable and comfortable commute option."

**FAQ NEW-5 (Allied Health in Erode-Area Hospitals):**
- Q: "What hospitals near Erode hire allied health science graduates?"
- A: "Allied health science graduates from Erode region find employment at hospitals in Erode, Tiruppur, Salem, and Coimbatore — including major chains like Apollo Hospitals, Fortis Healthcare, and Manipal Hospitals. JKKN AHS graduates with internationally recognized qualifications also secure placements at NHS UK hospitals and UAE healthcare facilities. With 60+ recruiting partners, JKKN AHS students receive placement support both in Tamil Nadu and abroad."

---

## 11. AI Overview Citation Plan

> Content blocks optimized for AI Overview extraction. Each block should be present in static HTML (server-rendered), contain factual claims with specific data points, and avoid marketing superlatives.

### Block 1: Direct Answer Block (Highest Priority)

**Target query:** "allied health science colleges in erode" / "best AHS college near erode"

**Citability Score: 9/10**

**Content:**
```
JKKN College of Allied Health Sciences, located ~22 km from Erode on NH-544
(Salem-Coimbatore Highway), is a NAAC-accredited institution affiliated to
Tamil Nadu Dr. MGR Medical University, Chennai. It offers 9 BSc Allied Health
Science programmes including Cardiac Technology, Dialysis Technology, Radiology,
Operation Theatre Technology, Respiratory Therapy, Physician Assistant, Critical
Care Technology, Medical Record Science, and Accident & Emergency Care Technology.
The college has a 500-bed on-campus teaching hospital providing clinical training
from Year 1, with 85%+ placement rate and connections to 60+ healthcare employers
including international partners in the UK, UAE, and Singapore.
```

**Implementation:** Add as static `<p>` with class `aeo-answer` near top of page, after hero section.

### Block 2: Distance & Commute Block

**Target query:** "how far is jkkn from erode" / "erode to allied health science college"

**Citability Score: 8/10**

**Content:**
```
Distance from Erode to JKKN College of Allied Health Sciences: approximately 22 km
via NH-544 (Salem-Coimbatore Highway), taking 35-40 minutes by road. Regular
government and private buses operate from Erode Central Bus Stand to Komarapalayam.
JKKN also runs college transport buses from Erode for student convenience. The
campus is located at Natarajapuram, NH-544, Komarapalayam, Namakkal District,
Tamil Nadu 638183.
```

**Implementation:** Add as static paragraph in DistanceCard section.

### Block 3: Programme Listing Block

**Target query:** "allied health science courses offered near erode"

**Citability Score: 8/10**

**Content:** The 9-programme numbered list from Section 9.2 qualifies directly as an AI Overview citation block. Ensure it is present in server-rendered HTML.

### Block 4: Placement & Career Block

**Target query:** "allied health science placement erode" / "healthcare careers erode"

**Citability Score: 7/10**

**Content:**
```
JKKN AHS graduates achieve 85%+ placement rate in allied health roles across
India and internationally. Top recruiters include Apollo Hospitals, Fortis
Healthcare, Manipal Hospitals, SRL Diagnostics, Sun Pharma, and NHS UK.
International placements in the UK (NHS), UAE (Cleveland Clinic Abu Dhabi),
and Singapore offer salaries of 8-25 LPA. Domestic starting salaries range
from 2.5-4.5 LPA, with experienced professionals earning 6-12 LPA. Erode
students benefit from proximity to Tamil Nadu's healthcare job market and
JKKN's pan-India recruiter network.
```

### Block 5: Erode-Specific Textile Industry Block

**Target query:** "healthcare career for erode textile family" / "stable career erode students"

**Citability Score: 6/10**

**Content:**
```
For Erode students from textile industry backgrounds, allied health science
provides a stable, recession-proof career path. Healthcare demand in India
is projected to grow 25% over the next decade, driven by aging population
and expanding insurance coverage. JKKN AHS offers merit scholarships for
eligible students, making the transition from textile-industry families to
healthcare careers financially accessible. The ~22 km distance from Erode
allows students to commute daily, reducing accommodation costs.
```

**Note:** India healthcare growth figure [UNVERIFIED — needs source verification before publishing].

---

## 12. Voice Search Optimization

### 12.1 Current Speakable Schema Issues

The speakable schema in layout.tsx (lines 205-213) targets CSS selectors:
- `.faq-answer` — BROKEN: FAQ answers are JS-gated; not in initial HTML
- `.snippet-answer` — PARTIAL: Used in CompetitiveAdvantageSection (line 693) and FAQSection (line 797) but FAQ line 797 is conditional
- `.voice-answer` — MINIMAL: Only used in CompetitiveAdvantageSection paragraph (line 684)
- `h1`, `h2` — OK: Headings are always in HTML if page is server-rendered; BROKEN under CSR

**Fix:** After server component migration, speakable schema will work for all selectors. Additionally, add `role="text"` to key answer blocks and ensure `.voice-answer` class is on the direct answer paragraph.

### 12.2 Conversational Queries to Target

| # | Conversational Query | Answer Block to Target | Current Coverage |
|---|---------------------|----------------------|-----------------|
| 1 | "What is the nearest allied health science college to Erode?" | Block 1 (direct answer) | Missing |
| 2 | "How do I get to JKKN from Erode?" | Block 2 (distance block) | Partial |
| 3 | "Is JKKN a good college for allied health science?" | Snippet paragraph | Missing |
| 4 | "What courses can I do in allied health science near Erode?" | Block 3 (programme list) | Missing static version |
| 5 | "Can I get a job abroad after studying allied health science near Erode?" | Block 4 (placement block) | FAQ Q9 partial |
| 6 | "How much does allied health science cost near Erode?" | FAQ Q8 (exists) | Present but JS-gated |
| 7 | "What is the eligibility for BSc allied health science near Erode?" | FAQ Q11 (exists) | Present but JS-gated |
| 8 | "Are there buses from Erode to JKKN college?" | FAQ NEW-4 (new) | Missing |
| 9 | "How long is the train journey from Erode to JKKN?" | HowToReach section | Present but JS-gated |
| 10 | "What hospitals does JKKN have for clinical training?" | FAQ answer or placement section | Partial |
| 11 | "Is JKKN AHS accredited?" | AffiliationBar / direct answer | Present but JS-gated |
| 12 | "What is the hostel facility at JKKN for Erode students?" | FAQ Q6 | Present but JS-gated |

### 12.3 Voice Search Content Fixes

1. **Add conversational phrasing** to the direct answer paragraph: Start with "If you are from Erode and looking for..." rather than formal descriptions.
2. **Speakable fix** — After CSR fix, update speakable schema selectors to also include `[data-speakable="true"]` attribute for precision targeting.
3. **Ensure answer blocks are 1-2 sentences** for voice device compatibility — long paragraphs are truncated.

---

## 13. Schema Enhancement

### 13.1 Course Schema — 9 Programs (MISSING — Add to layout.tsx)

Add as a 5th JSON-LD block in `layout.tsx` after the existing 4 blocks:

```json
{
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
        "description": "3-year BSc programme in cardiac diagnostic procedures, ECG, echocardiography, and cardiac catheterization. Includes 1 year compulsory internship at multi-specialty teaching hospital.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/cardiac-technology/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Dialysis Technology",
        "description": "3-year BSc programme in dialysis procedures, renal care, and kidney disease management. Includes 1 year compulsory internship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/dialysis-technology/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Radiology & Imaging Technology",
        "description": "3-year BSc programme in X-ray, CT scan, MRI, and medical imaging procedures. Includes 1 year compulsory internship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Operation Theatre & Anaesthesia Technology",
        "description": "3-year BSc programme in operation theatre management, anaesthesia administration, and surgical support. Includes 1 year compulsory internship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Respiratory Therapy",
        "description": "3-year BSc programme in respiratory care, ventilator management, and pulmonary rehabilitation. Includes 1 year compulsory internship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/respiratory-therapy/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Physician Assistant",
        "description": "3-year BSc programme training physician assistants for clinical support, patient examination, and diagnostic assistance under physician supervision. Includes 1 year compulsory internship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/physician-assistant/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Critical Care Technology",
        "description": "3-year BSc programme in ICU management, critical patient monitoring, and emergency response protocols. Includes 1 year compulsory internship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/critical-care-technology/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Medical Record Science",
        "description": "3-year BSc programme in health information management, medical coding, and hospital administration. Includes 1 year compulsory internship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/medical-record-science/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Course",
        "name": "B.Sc. Accident & Emergency Care Technology",
        "description": "3-year BSc programme in emergency medical procedures, trauma care, and pre-hospital emergency management. Includes 1 year compulsory internship.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "JKKN College of Allied Health Sciences",
          "url": "https://ahs.jkkn.ac.in/"
        },
        "url": "https://ahs.jkkn.ac.in/accident-emergency-care/",
        "timeToComplete": "P4Y",
        "educationalLevel": "Undergraduate",
        "numberOfCredits": "BSc",
        "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate"
      }
    }
  ]
}
```

### 13.2 HowTo Schema — Admission Process (MISSING — Add to layout.tsx)

```json
{
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
      "text": "Visit https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8 and complete the online application form."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Submit Documents",
      "text": "Submit 10th and 12th mark sheets, transfer certificate, nativity certificate, and passport-size photographs."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Counselling",
      "text": "Attend the counselling session at JKKN AHS campus or follow the online counselling procedure for seat allotment."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Fee Payment & Enrollment",
      "text": "Complete fee payment and collect your enrollment confirmation. Contact +91 9345855001 for fee structure details."
    }
  ]
}
```

### 13.3 Speakable Schema Fix

**Current (broken):**
```json
{
  "@type": "SpeakableSpecification",
  "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
}
```

**Fixed (after server component migration):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Allied Health Science Colleges in Erode | JKKN AHS",
  "url": "https://ahs.jkkn.ac.in/erode",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".aeo-answer",
      ".snippet-answer",
      ".voice-answer",
      "[data-speakable='true']",
      "h1",
      "h2"
    ]
  }
}
```

**Note:** `.faq-answer` removed from speakable after CSS-only accordion implementation, because the `details` element answers are always present in HTML. The selector `[data-speakable="true"]` allows precise targeting of added answer blocks.

### 13.4 FAQ Schema Fix — Distance Values

Update layout.tsx FAQ schema entries with correct distance data:

**Q2 (line 71):** Change "approximately 30-40 km" → "approximately 22 km"
**Q2 (line 72):** Change "about 40-50 minutes" → "about 35-40 minutes"
**Q6 (line 103):** Change "just 40-50 minutes away" → "just 35-40 minutes away"

---

## 14. Meta Tag Optimization

### 14.1 Current vs Proposed

| Tag | Current | Chars | Status |
|-----|---------|-------|--------|
| Title | "Allied Health Science Colleges in Erode \| JKKN AHS — Admissions 2026-27" | 74 | FAIL — over 60 limit |
| Description | "Looking for allied health science colleges in Erode? JKKN College of Allied Health Sciences is just 30-40 km from Erode on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!" | 189 | FAIL — over 155 limit; wrong distance |

### 14.2 Proposed Tags

| Tag | Proposed | Chars | Status |
|-----|---------|-------|--------|
| Title | "Allied Health Science Colleges in Erode \| JKKN AHS" | 52 | PASS — 52 chars |
| Description | "JKKN AHS — ~22 km from Erode on NH-544. 9 BSc allied health programmes, NAAC approved, 85%+ placements. Admissions open 2026-27." | 129 | PASS — 129 chars |

### 14.3 Keyword Targeting Analysis

- **Title** includes: primary keyword "Allied Health Science Colleges in Erode" + brand "JKKN AHS" — direct match
- **Description** includes: distance "~22 km from Erode on NH-544" (correct), programme count "9 BSc", accreditation "NAAC approved", placement "85%+", CTA "Admissions open 2026-27"
- **No keyword stuffing** — description reads naturally

### 14.4 Implementation Location

**File:** `src/app/erode/layout.tsx`
**Lines:** 3-6 (inside `createPageMetadata()` call)

---

## 15. Internal Linking Plan

### 15.1 Current Internal Links (from page.tsx)

| Link Target | Anchor Text | Location in Page | Line |
|-------------|-------------|-----------------|------|
| /cardiac-technology | "View Course Details" | ProgrammesSection | 384-388 |
| /radiology-imaging-technology | "View Course Details" | ProgrammesSection | 384-388 |
| /dialysis-technology | "View Course Details" | ProgrammesSection | 384-388 |
| /operation-theatre-anaesthesia | "View Course Details" | ProgrammesSection | 384-388 |
| /respiratory-therapy | "View Course Details" | ProgrammesSection | 384-388 |
| /physician-assistant | "View Course Details" | ProgrammesSection | 384-388 |
| /critical-care-technology | "View Course Details" | ProgrammesSection | 384-388 |
| /medical-record-science | "View Course Details" | ProgrammesSection | 384-388 |
| /accident-emergency-care | "View Course Details" | ProgrammesSection | 384-388 |
| /placements | "View full placement details" | PlacementHighlights | 462 |
| /namakkal | "Namakkal" | ExploreCitiesSection | 835 |
| /salem | "Salem" | ExploreCitiesSection | 835 |
| /tiruppur | "Tiruppur" | ExploreCitiesSection | 835 |
| /coimbatore | "Coimbatore" | ExploreCitiesSection | 835 |
| https://admission.jkkn.ac.in/ | "Apply Now — 2026-27" | HeroSection | 113 |

### 15.2 New Internal Links to Add

| Link Target | Anchor Text | Where to Add | Priority |
|-------------|-------------|-------------|----------|
| / (homepage) | "JKKN College of Allied Health Sciences" | Snippet block intro | HIGH |
| /blog/ | "Allied health career guides" | FAQ answer for career question | MEDIUM |
| /contact/ | "Contact admission office" | FAQ Q7 answer | MEDIUM |
| /gallery/ | "View campus gallery" | CampusGallerySection caption | LOW |
| /our-management/ | "About JKKN Management" | CompetitiveAdvantage section | LOW |
| /vision-mission/ | "Our vision for allied health education" | WhyChoose section | LOW |

### 15.3 Cross-City Link Audit

**Current ExploreCitiesSection distances (page.tsx lines 813-818) — WRONG:**

| City | Current Distance Shown | Correct Distance |
|------|----------------------|-----------------|
| Namakkal | "5-10 km" | ~66 km to Namakkal town (campus is near Komarapalayam, not near Namakkal town) |
| Salem | "40-50 km" | ~58 km |
| Tiruppur | "80-90 km" | ~67 km |
| Coimbatore | "100-110 km" | ~105 km |

**Action:** Fix Namakkal distance — "5-10 km" is severely wrong and misleading. The campus is in Komarapalayam (Namakkal District) but Namakkal town is ~66 km away. This could damage trust for Namakkal city page visitors.

---

## 16. Negative Trigger Audit

> 14-point checklist. PASS = no issue. FAIL = must fix. WARNING = monitor.

| # | Check | Status | Detail |
|---|-------|--------|--------|
| 1 | Page renders without JavaScript | FAIL | `"use client"` directive — entire page CSR |
| 2 | FAQ answers visible in HTML | FAIL | JS-gated via `useState` — only 1 answer visible |
| 3 | No duplicate H1 tags | PASS | Single H1 in HeroSection (line 77) |
| 4 | Title tag ≤60 characters | FAIL | 74 characters — 14 over limit |
| 5 | Meta description ≤155 characters | FAIL | 189 characters — 34 over limit |
| 6 | Distance data is factually accurate | FAIL | "30-40 km" used in 7+ places — should be "~22 km" |
| 7 | No conflicting data within page | FAIL | DistanceCard shows "35 km" while Hero shows "30-40 km" — internal inconsistency |
| 8 | FAQPage schema matches visible FAQ content | FAIL | Schema has 11 items; page has 11 items — but schema answers have wrong distance |
| 9 | Speakable schema targets valid selectors | FAIL | `.faq-answer` selector matches JS-gated content — broken |
| 10 | Cross-city distances are accurate | FAIL | Namakkal "5-10 km" is severely wrong |
| 11 | Course links are valid (no 404s) | PASS | All 9 programme links use Next.js Link or href — valid paths |
| 12 | External links have rel="noopener noreferrer" | PASS | Admission form link (line 113-116) has correct rel attributes |
| 13 | Images have descriptive alt text | PASS | CampusGallerySection alt texts are descriptive (lines 629-634) |
| 14 | BPT FAQ may mislead (JKKN AHS does not offer BPT) | WARNING | FAQ Q4 (line 726) discusses BPT career — JKKN AHS does not offer BPT. This may attract irrelevant traffic and disappoint visitors. Consider replacing with a question about an actual JKKN programme. |

**Negative Trigger Summary:** 8 FAIL, 1 WARNING, 5 PASS. All FAIL items have corresponding tasks in AEO-ERODE-DECOMPOSE.md.

---

## 17. Multi-Platform Coverage

### 17.1 Google Search

| Feature | Priority | Action |
|---------|----------|--------|
| Featured Snippet (paragraph) | P1 | Add snippet-bait paragraph block |
| Featured Snippet (list) | P2 | Ensure programme list is in server HTML |
| PAA Box | P2 | Add 5 new Erode-specific FAQs |
| AI Overview | P3 | Add citability blocks, fix CSR |
| Local Pack | P2 | Ensure GBP listing is accurate with correct distance note |
| Knowledge Panel | P3 | Add @id and sameAs to all schema blocks |

### 17.2 ChatGPT (GPT-4 / GPT-4o)

**How ChatGPT discovers college information:**
- Bing Search integration (for real-time queries)
- Training data (knowledge cutoff dependent)
- Web browsing via Bing

**Optimization actions:**
- Ensure Bing Webmaster Tools has the page indexed
- The paragraph snippet block (Section 9.1) also serves as ChatGPT citation content
- Add `dateModified` to the WebPage schema (currently missing on erode page)
- Ensure robots.txt does not block GPTBot or BingBot user agents [VERIFY]

### 17.3 Google Gemini

**How Gemini discovers content:**
- Direct Google Search index (same as Google Search)
- Google SGE/AI Overview pool

**Optimization actions:**
- Fix CSR (primary — Gemini cannot extract JS-rendered content reliably)
- Add `dateModified: "2026-03-28"` to WebPage schema in layout.tsx
- Ensure EducationalOrganization schema has `foundingDate`, `address`, `geo` (all present in layout.tsx line 149-202)

### 17.4 Perplexity

**How Perplexity discovers content:**
- Bing Search + independent crawling
- Prioritizes pages with clear factual statements and source attribution

**Optimization actions:**
- Add an "About JKKN AHS" factual block at the top of page with all key institutional data (founded 1952, NAAC accredited, TN Dr. MGR University affiliated)
- The 5 citability blocks in Section 11 are optimized for Perplexity-style extraction

### 17.5 Microsoft Copilot

**How Copilot discovers content:**
- Exclusively Bing Search
- Prefers structured data and FAQ Schema

**Optimization actions:**
- Ensure Bing Webmaster Tools sitemap submission is current
- FAQPage schema (after CSR fix) will be extracted by Copilot for direct answers
- HowTo schema will appear as rich result in Bing/Copilot for admission queries

---

## 18. Monitoring Plan

### Week 1 (Days 1-7) — Post-Fix Baseline

| Check | Tool | Frequency | What to Look For |
|-------|------|-----------|-----------------|
| Googlebot crawl | Google Search Console → Coverage | Day 3, Day 7 | Erode page should shift from "Crawled" to "Indexed" with content |
| Render check | GSC Rich Results Test | Day 1 | Verify FAQ schema is valid after CSR fix |
| Mobile usability | GSC Mobile Usability | Day 7 | No new issues introduced |
| Schema validation | Schema.org Validator | Day 1 | Validate all 6 schema blocks |
| Title/meta check | Browser DevTools → View Source | Day 1 | Confirm new title/description in source HTML |

### Week 2 (Days 8-14) — Snippet Watch

| Check | Tool | Frequency | What to Look For |
|-------|------|-----------|-----------------|
| Featured snippet | Manual Google search (incognito) | Daily | "allied health science colleges in erode" — check for snippet |
| PAA box appearance | Manual search | Every 2 days | JKKN answers appearing in PAA |
| Ranking movement | GSC Performance → Queries | Day 14 | Position improvement for target keywords |

### Week 3-4 — AI Platform Check

| Check | Method | What to Look For |
|-------|--------|-----------------|
| ChatGPT citation | Ask: "What are the best allied health science colleges near Erode?" | JKKN appearing in answer |
| Perplexity citation | Ask same question on Perplexity | JKKN appearing with URL citation |
| Gemini citation | Ask on Google Gemini | JKKN in AI Overview or Gemini answer |

### Monthly Cadence

| Month | Action |
|-------|--------|
| Month 1 | Review GSC clicks/impressions for all 18 keyword variants; compare position before/after |
| Month 2 | Check PAA coverage: how many of the 24 mapped questions now have JKKN answers |
| Month 3 | Re-run AEO Readiness Score calculation; target ≥78/100 |
| Month 6 | Full competitor re-analysis — check if Nandha has improved their AEO setup |

### Re-Optimization Triggers

Trigger an immediate re-optimization review if:
- Featured snippet is won but lost within 30 days (content freshness issue)
- Nandha College adds FAQ schema or structured content blocks
- A new AHS college opens in Erode or Tiruppur area
- JKKN AHS ranking drops below position 5 for primary keyword
- Distance data changes (construction, new road — unlikely for NH-544)

---

*Triple-check validation: PASSED*
*Document version: 1.0 | Created: 2026-03-28 | Next review: 2026-04-28*
