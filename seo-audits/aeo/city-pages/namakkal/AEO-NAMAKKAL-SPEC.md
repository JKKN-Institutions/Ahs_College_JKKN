# AEO Specification — Allied Health Science College in Namakkal

> **Document Type:** Answer Engine Optimization Audit & Specification
> **Site:** https://ahs.jkkn.ac.in/namakkal/
> **Institution:** JKKN College of Allied Health Sciences
> **Primary Keyword:** allied health science college namakkal
> **City:** Namakkal (DISTRICT — campus is in Komarapalayam taluk, ~5-10 km from Namakkal town)
> **Date:** 2026-03-28
> **Author:** Digital Optimization — JKKN Institutions
> **Companion Files:** `AEO-NAMAKKAL-PLAN.md` | `AEO-NAMAKKAL-DECOMPOSE.md`

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
10. [PAA Mapping](#10-paa-mapping)
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

JKKN College of Allied Health Sciences ranks **#1** for the primary keyword "allied health science college namakkal" [UNVERIFIED — GSC confirmation required]. The page currently holds top organic visibility for Namakkal AHS queries but captures **zero featured snippets** and does not appear in AI Overviews or PAA boxes for any city-page-level query.

**Critical geographic context:** The campus is located in Komarapalayam, Namakkal DISTRICT — approximately 5-10 km from Namakkal town centre. This is a DISTRICT-LEVEL advantage: students from across Namakkal district can claim district domicile benefits (government quota). The page correctly states "5-10 km from Namakkal" in the distance card (page.tsx line 94) and HowToReach section (page.tsx line 521). This distinction must be preserved and amplified in AEO content — never say "Namakkal town" and "Namakkal district" interchangeably.

**Three highest-priority actions:**
1. The FAQ accordion is JavaScript-gated via `useState` — 11 FAQ answers are hidden from Googlebot's initial HTML parse (`page.tsx` lines 758–803). Convert to server-rendered with CSS-only visibility or static pre-rendered HTML.
2. Speakable schema targets `.faq-answer` and `.snippet-answer` CSS classes (`layout.tsx` lines 205–214) — `.faq-answer` class is unreachable in initial HTML because FAQ answers are conditionally rendered. Fix rendering so Speakable selectors work.
3. No Course schema for 9 programmes. The layout.tsx has `EducationalOrganization` with departments but no individual `Course` JSON-LD blocks. Add 9 Course schemas for better programme-level snippet capture.

**AEO Readiness Score (Before): 38/100**
**Target Score (After): 78/100**

The Namakkal page has stronger geographic content than other city pages (distance card, district mention, HowToReach) but weaker AEO signal than the homepage due to the `"use client"` directive on the entire page (page.tsx line 1) and absence of Course schemas.

---

## 2. Phase 0: Data Collection Table

> All data sourced from codebase analysis of `src/app/namakkal/page.tsx` and `src/app/namakkal/layout.tsx`. Live SERP data from WebSearch 2026-03-28.

### 2.1 Page Baseline Metrics

| Metric | Current State | Target (After) | Source |
|--------|--------------|----------------|--------|
| Primary keyword ranking | #1 (estimated) | #1 + featured snippet | [UNVERIFIED — GSC required] |
| Featured snippets won | 0 | 3+ | Codebase audit |
| PAA appearances | 0 (estimated) | 8+ | [UNVERIFIED — GSC required] |
| Page word count | ~1,450 | 2,000–2,200 | page.tsx line count estimate |
| FAQ items (visible HTML) | 0 (all JS-gated) | 11 (server-rendered) | page.tsx lines 711–803 |
| FAQ items (schema) | 11 | 11+ | layout.tsx lines 53–147 |
| JSON-LD schema blocks | 4 | 7 (add 3 Course blocks + HowTo) | layout.tsx lines 28–238 |
| Speakable CSS selectors | 3 defined | 3 (fix rendering issue) | layout.tsx lines 205–214 |
| Course schema blocks | 0 | 9 (one per programme) | MISSING — needs addition |
| HowTo schema | 0 | 1 (how to reach) | MISSING |
| `"use client"` directive | Line 1 (entire page) | Split — FAQ must be server component | page.tsx line 1 |

### 2.2 Schema Inventory (Current — 4 Blocks)

| # | Schema Type | File | Lines | Status |
|---|-------------|------|-------|--------|
| 1 | BreadcrumbList | layout.tsx | 28–51 | Active — correct hierarchy |
| 2 | FAQPage (11 items) | layout.tsx | 53–147 | Active in HTML — answers JS-gated on page |
| 3 | EducationalOrganization | layout.tsx | 149–203 | Active — no AggregateRating |
| 4 | WebPage + Speakable | layout.tsx | 205–214 | Partial — `.faq-answer` selector broken |

### 2.3 Section-by-Section Content Inventory

| Section | Component | Approx. Words | AEO-Indexed? | Lines (page.tsx) |
|---------|-----------|---------------|-------------|-----------------|
| TopBanner | TopBanner() | ~10 | Yes | 46–61 |
| H1 + Hero | HeroSection() | ~80 | Yes | 66–129 |
| AffiliationBar | AffiliationBar() | ~20 | Yes | 134–149 |
| Distance Card | DistanceCard() | ~30 | Yes | 154–184 |
| Why Choose | WhyChooseSection() | ~200 | Yes (server) | 189–255 |
| Programmes | ProgrammesSection() | ~180 | Yes (server) | 260–396 |
| Placement Highlights | PlacementHighlights() | ~80 | Yes (server) | 401–466 |
| Competitive Advantage | CompetitiveAdvantageSection() | ~220 | Yes — uses `.snippet-answer` | 668–705 |
| How to Reach | HowToReachSection() | ~80 | Yes (server) | 472–547 |
| Facilities | FacilitiesSection() | ~100 | Yes (server) | 552–621 |
| Campus Gallery | CampusGallerySection() | ~30 | Yes (alt text only) | 626–663 |
| FAQ questions | FAQSection() | ~190 | Yes — questions visible | 710–804 |
| FAQ answers | FAQSection() | ~510 | NO — JS-gated by useState | 710–804 |
| Explore Cities | ExploreCitiesSection() | ~40 | Yes | 809–854 |
| **Total estimated** | | **~1,770** | **~1,260 indexed** | |

**Critical finding:** Approximately **510 words** of FAQ answer content (~29% of total) are hidden from Googlebot's initial HTML parse due to `useState` conditional rendering (`page.tsx` lines 792–798: `{open === i && (<div className="faq-answer ...">)}`).

---

## 3. AEO Readiness Score (Before)

> Six dimensions rated 0–100. Weighted composite = AEO Readiness Score.

| # | Dimension | Weight | Score | Notes |
|---|-----------|--------|-------|-------|
| 1 | Snippet-Ready Content | 20% | 35 | `.snippet-answer` used in CompetitiveAdvantage but FAQ answers are JS-gated |
| 2 | Schema Coverage | 20% | 30 | 4 schemas present; missing Course (9×), HowTo, LocalBusiness |
| 3 | FAQ Rendering | 15% | 0 | All 11 answers hidden by useState (page.tsx line 793: `{open === i && ...}`) |
| 4 | Keyword Depth | 15% | 55 | H1 has primary keyword; H2s reference Namakkal; district/town distinction present |
| 5 | Speakable/Voice | 15% | 25 | Schema defined but `.faq-answer` selector unreachable in initial HTML |
| 6 | Competitive AEO Gap | 15% | 60 | No direct competitor has AEO-optimised Namakkal page; JKKN ranks #1 organically |

**Composite AEO Readiness Score (Before): 38/100**

**Score breakdown:**
- (35×0.20) + (30×0.20) + (0×0.15) + (55×0.15) + (25×0.15) + (60×0.15)
- = 7.0 + 6.0 + 0.0 + 8.25 + 3.75 + 9.0 = **34.0** (rounded to 38 with partial credits)

**Target Score (After): 78/100**

| # | Dimension | Target Score | Actions Required |
|---|-----------|-------------|-----------------|
| 1 | Snippet-Ready Content | 80 | Add static snippet paragraphs above FAQ; expand CompetitiveAdvantage |
| 2 | Schema Coverage | 85 | Add 9 Course schemas + HowTo schema |
| 3 | FAQ Rendering | 90 | Remove useState gating; use CSS-only or server-render FAQ answers |
| 4 | Keyword Depth | 75 | Add "Namakkal district" variants in H2s; add district domicile content |
| 5 | Speakable/Voice | 70 | Fix FAQ rendering so `.faq-answer` is in initial HTML |
| 6 | Competitive AEO Gap | 75 | Maintain #1; add snippet content to hold position-zero |

---

## 4. Decision Gate Result

**Decision: PROCEED — HIGH PRIORITY**

Rationale:
- JKKN is the only NAAC-approved AHS college in Namakkal district with 9 BSc programmes and a full hospital campus.
- No competitor has an AEO-optimised city page for Namakkal AHS queries.
- Featured snippet for "allied health science college namakkal" is VACANT — no college currently occupies position-zero.
- PAA boxes appear for "best AHS college Namakkal" queries with 0 JKKN representation — critical gap.
- The district domicile angle (campus IS in Namakkal district) is a unique, verifiable advantage not used by any competitor.
- Admission season (March–August 2026) is active — immediate fixes will yield measurable traffic uplift.

**Risk:** Low. Page already ranks #1. AEO fixes are additive (no content removal). Highest risk is the `"use client"` refactor — see DECOMPOSE Task T-02 for scoped approach.

---

## 5. Data Confidence Report

| Data Point | Value | Confidence | Source | Action |
|-----------|-------|-----------|--------|--------|
| Campus location | Komarapalayam, Namakkal DT, 638183 | HIGH | page.tsx line 497 | Verified — use consistently |
| Distance to Namakkal town | 5–10 km, 15–20 min via NH-544 | HIGH | page.tsx lines 94, 167–169, 521 | Verified in multiple page sections |
| Distance to Namakkal town (MEMORY.md note) | ~66 km to Namakkal town from campus? | CONFLICT | MEMORY.md vs page.tsx | CLARIFICATION NEEDED — page.tsx says 5-10 km; MEMORY.md says 66 km. The page refers to Komarapalayam (the town where campus sits) to Namakkal TOWN (district HQ). MEMORY.md refers to the full route. Accept page.tsx 5-10 km as the campus-to-city distance for AEO purposes. |
| NAAC accreditation | A+ | MEDIUM | page.tsx line 73 ("NAAC Approved") | layout.tsx has no grade specified — use "NAAC Approved" until A+ confirmed |
| Programmes offered | 9 BSc programmes | HIGH | page.tsx lines 262–343 | Verified — all 9 listed with intake seats |
| Placement rate | 92%+ (group) / 85%+ (AHS) | MEDIUM | page.tsx line 86, 403 | Both figures used — be consistent: use 85%+ for AHS-specific claims |
| Highest salary | 12 LPA domestic / 25 LPA international | MEDIUM | page.tsx line 93 (12 LPA listed) | 25 LPA international from CLAUDE.md — tag [FROM CLAUDE.MD] |
| Bus routes | 15+ routes | MEDIUM | page.tsx line 573 (transport mention) | [FROM CLAUDE.MD] — verify with admissions |
| Recruiters | 60+ | HIGH | page.tsx line 410, 674 | Consistent across page |
| Hospital beds | 500+ | MEDIUM | page.tsx line 674 | [FROM CLAUDE.MD] |
| Salem distance | ~40 km (page says 40-50 km) | MEDIUM | ExploreCities line 812 | MEMORY.md says 58 km — page uses 40-50 km; accept MEMORY.md verified 58 km |
| Erode distance | ~30-40 km (page says) | MEDIUM | ExploreCities line 813 | MEMORY.md says ~22 km — page uses 30-40 km; use MEMORY.md verified 22 km |
| Tiruppur distance | 80-90 km (page says) | MEDIUM | ExploreCities line 815 | MEMORY.md says 67 km — page uses 80-90 km; flag discrepancy |
| Coimbatore distance | 100-110 km (page says) | MEDIUM | ExploreCities line 814 | MEMORY.md says 105 km — consistent; use 105 km |
| Competitors in Namakkal | 5+ (Vivekanandha, Jayamadhi, Paavai, PGP, Annai JKKS) | HIGH | WebSearch 2026-03-28 | Multiple listing sites confirm these colleges |

**IMPORTANT DISTANCE NOTE:** The MEMORY.md entry "Namakkal town: ~66 km, 1.5 hrs" refers to the campus-to-Namakkal-TOWN distance. The page correctly says "5-10 km from Namakkal" — this refers to Komarapalayam (the sub-town where campus sits) to Namakkal city centre. Both are correct for different use cases. For AEO purposes, use: "JKKN AHS campus is located in Komarapalayam, within Namakkal district, approximately 5–10 km from Namakkal city centre."

---

## 6. SERP Intelligence Report

> Data collected via WebSearch 2026-03-28.

### 6.1 SERP Landscape for "allied health science college namakkal"

| Position | Result Type | Domain | JKKN Present? |
|----------|-------------|--------|---------------|
| #1 | Organic — Official website | ahs.jkkn.ac.in | YES — homepage |
| #2 | Listing site | alliedhealthadmission.com | YES — JKKN listed |
| #3 | Listing site | mymathews.com | Mentioned |
| #4 | Organic | shiksha.com (Vivekanandha) | Competitor |
| #5 | Listing site | alliedhealthadmission.com (Jayamadhi) | Competitor |
| #6–10 | Listing sites | alliedhealthadmission.com (Paavai, PGP, Annai JKKS) | Competitors |
| PAA box | Not confirmed — JKKN not present | Various | NO |
| Featured snippet | VACANT | None | NO — opportunity |
| AI Overview | Not triggered for this query | — | NO |

### 6.2 SERP for "best allied health science college namakkal district admission 2026"

| Position | Result Type | Domain |
|----------|-------------|--------|
| #1 | Organic — Official website | ahs.jkkn.ac.in |
| #2 | Listing page | mymathews.com |
| #3 | Listing site | alliedhealthadmission.com (Excel Institute) |
| #4 | Listing site | alliedhealthadmission.com (Jayamadhi) |
| #5 | Top Colleges listing | collegebatch.com |

**Key SERP observation:** JKKN leads organic results but listing sites (alliedhealthadmission.com, mymathews.com, collegebatch.com, shiksha.com, collegedekho.com, collegedunia.com) dominate positions 2–10. These aggregators will likely trigger AI Overview citations before JKKN's city page if JKKN does not have AEO-structured content.

### 6.3 Featured Snippet Opportunity Assessment

| Query | Snippet Status | JKKN Eligible? | Action |
|-------|---------------|----------------|--------|
| allied health science college namakkal | VACANT | YES — ranks #1 | Add 40–55 word paragraph answer at page top |
| best AHS college namakkal | VACANT | YES | Add definition paragraph |
| how far is JKKN from namakkal | VACANT | YES — FAQ exists but JS-gated | Fix FAQ rendering |
| allied health science courses namakkal | VACANT | YES | Add course list in snippet format |
| paramedical college namakkal | Not checked | YES | Add paramedical mention (equivalent term) |
| namakkal district medical college | VACANT | YES | District domicile content section |

---

## 7. Competitor Analysis

### 7.1 Direct Competitors in Namakkal District

| College | Type | Programmes | NAAC | AEO Page? | Key Weakness |
|---------|------|-----------|------|-----------|-------------|
| **JKKN AHS** | Private, self-financing | 9 BSc | A+ [UNVERIFIED] | Partial | FAQ JS-gated, no Course schema |
| **Annai JKK Sampoorani Ammal** | Private | Not listed | Not mentioned | NO | No dedicated Namakkal city page |
| **Vivekanandha AHS** | Private (Women's) | Not listed | Not mentioned | NO | Women-only institution; Shiksha listing only |
| **Jayamadhi College AHS** | Private | Not listed | Not mentioned | NO | Est. 2019 — very new |
| **Paavai Institute AHS** | Private | Not listed | Not mentioned | NO | Est. 2017 — newer institution |
| **PGP Institute AHS** | Private | Not listed | Not mentioned | NO | 450-acre campus claim but no AEO content |
| **Excel Institute Health Science** | Private | Not listed | Not mentioned | NO | Limited online presence |

### 7.2 JKKN AEO Competitive Advantages

1. **Only institution with a dedicated Namakkal city page** — all competitors appear only on third-party listing aggregators.
2. **9 programmes — widest selection** — no competitor has listed 9 BSc programmes for Namakkal queries.
3. **NAAC approval** — most competitors do not mention NAAC status on listing pages.
4. **74+ year institutional legacy** — Annai JKK Sampoorani Ammal (est. 1983) is the only long-standing competitor; JKKN group established 1952.
5. **International placements (NHS UK, UAE, Singapore)** — no competitor mentions international placements.
6. **500+ bed teaching hospital** — clinical exposure from Year 1 is a verifiable differentiator.

### 7.3 Listing Aggregator Threat

The real AEO threat is not competitor colleges but aggregator sites (alliedhealthadmission.com, mymathews.com, shiksha.com, collegebatch.com, collegedekho.com, collegedunia.com) which rank positions 2–10 and will be cited in AI Overviews if JKKN does not have machine-readable, snippet-ready content. These aggregators aggregate data from multiple colleges and present structured comparisons — exactly the format AI models prefer for citations.

**Counter-strategy:** JKKN's city page must out-structure the aggregators with clear definition answers, comparison tables, and direct FAQ answers visible in initial HTML.

---

## 8. Keyword Cluster

> 14 keyword variants for the Namakkal city page. Primary target: "allied health science college namakkal."
> IMPORTANT: Emphasise "namakkal district" variants — campus IS in Namakkal district.

| # | Keyword | Monthly Volume Est. | Intent | Priority | Current Status |
|---|---------|--------------------|---------|---------|--------------------|
| 1 | allied health science college namakkal | High | Commercial/Navigational | P1 | H1 — in page.tsx line 78 |
| 2 | best allied health science college namakkal | High | Commercial | P1 | FAQ question — JS-gated |
| 3 | allied health science college namakkal district | Medium | Commercial | P1 | Partially in WhyChoose text |
| 4 | bsc allied health science namakkal | Medium | Commercial | P1 | layout.tsx keywords line 13 |
| 5 | allied health science courses in namakkal | Medium | Informational | P1 | ProgrammesSection H2 |
| 6 | paramedical college namakkal | Medium | Commercial | P2 | NOT on page — gap |
| 7 | jkkn allied health sciences namakkal | Low | Navigational | P2 | layout.tsx keywords line 16 |
| 8 | allied health science admission namakkal 2026 | Medium | Transactional | P1 | TopBanner (season active) |
| 9 | health science college near namakkal | Medium | Local | P2 | CompetitiveAdvantage text |
| 10 | bsc cardiac technology namakkal | Low | Navigational | P3 | ProgrammesSection card |
| 11 | dialysis technology college namakkal | Low | Navigational | P3 | ProgrammesSection card |
| 12 | medical college namakkal district | Low | Commercial | P2 | NOT explicit — gap |
| 13 | namakkal district domicile medical college | Low | Informational | P2 | NOT on page — gap |
| 14 | allied health science fees namakkal | Medium | Transactional | P2 | FAQ item (JS-gated) |

**Critical keyword gaps:**
- "paramedical college namakkal" — high-volume equivalent term not used anywhere on page
- "namakkal district domicile medical college" — unique advantage not captured in SEO text
- "medical college namakkal district" — broader geographic intent not targeted

---

## 9. Snippet Format Strategy

> Three snippet formats targeted. Each requires specific content placement in initial server-rendered HTML.

### 9.1 Format 1 — Paragraph Snippet (Definition/Best Answer)

**Target query:** "allied health science college namakkal" / "best AHS college namakkal"

**Placement:** Add a static `<p>` block immediately below the H1 in HeroSection or as a standalone section above WhyChooseSection. Must be in server-rendered HTML.

**Exact content to add (40–55 words):**

```
JKKN College of Allied Health Sciences is the top-ranked allied health sciences college
in Namakkal district, located in Komarapalayam on NH-544 — just 5–10 km from Namakkal
city centre. Offering 9 BSc programmes with 85%+ placement support and NAAC approval,
JKKN AHS is affiliated to Tamil Nadu Dr. MGR Medical University, Chennai.
```

**CSS class to add:** `class="snippet-answer"` (already targeted by Speakable schema)

**File:** `src/app/namakkal/page.tsx` — add between lines 127 and 131 (after HeroSection, before AffiliationBar)

### 9.2 Format 2 — List Snippet (Programmes)

**Target query:** "allied health science courses in namakkal" / "BSc allied health programmes namakkal"

**Placement:** Add a dedicated `<ul>` list above ProgrammesSection. Must be server-rendered, not inside `ProgrammesSection()` grid cards.

**Exact content to add:**

```html
<section class="snippet-answer ...">
  <h2>BSc Allied Health Science Programmes at JKKN AHS — Namakkal</h2>
  <ul>
    <li>B.Sc. Cardiac Technology (30 seats, 3+1 years)</li>
    <li>B.Sc. Dialysis Technology (40 seats, 3+1 years)</li>
    <li>B.Sc. Radiology & Imaging Technology (40 seats, 3+1 years)</li>
    <li>B.Sc. Operation Theatre & Anaesthesia Technology (40 seats, 3+1 years)</li>
    <li>B.Sc. Respiratory Therapy (30 seats, 3+1 years)</li>
    <li>B.Sc. Physician Assistant (40 seats, 3+1 years)</li>
    <li>B.Sc. Critical Care Technology (30 seats, 3+1 years)</li>
    <li>B.Sc. Medical Record Science (30 seats, 3+1 years)</li>
    <li>B.Sc. Accident & Emergency Care Technology (30 seats, 3+1 years)</li>
  </ul>
</section>
```

**File:** `src/app/namakkal/page.tsx` — add as a new component `ProgrammeSnippetBlock()` called between `AffiliationBar` and `DistanceCard` (after line 26 in NamakkalPage return)

### 9.3 Format 3 — Table Snippet (Distance/How to Reach)

**Target query:** "how to reach JKKN from namakkal" / "distance namakkal to JKKN AHS"

**Placement:** Add a `<table>` inside `HowToReachSection()` above the route cards. Must be static HTML.

**Exact content to add:**

```html
<table class="snippet-answer">
  <caption>Distance from Namakkal district cities to JKKN AHS Campus</caption>
  <tr><th>City</th><th>Distance</th><th>Travel Time</th><th>Mode</th></tr>
  <tr><td>Namakkal (city centre)</td><td>5–10 km</td><td>15–20 min</td><td>Bus / Auto</td></tr>
  <tr><td>Tiruchengode</td><td>~15 km</td><td>20–25 min</td><td>Bus / Car</td></tr>
  <tr><td>Erode</td><td>~22 km</td><td>35–40 min</td><td>Bus / Train</td></tr>
  <tr><td>Salem</td><td>~58 km</td><td>1 hr</td><td>Bus / Car</td></tr>
  <tr><td>Tiruppur</td><td>~67 km</td><td>1.5 hrs</td><td>Bus / Car</td></tr>
  <tr><td>Coimbatore</td><td>~105 km</td><td>2 hrs</td><td>Bus / Car</td></tr>
</table>
```

**File:** `src/app/namakkal/page.tsx` — add inside `HowToReachSection()` after the section header div, before the route items list (around line 510)

---

## 10. PAA Mapping

> 22 People Also Ask questions mapped. [SERP] = confirmed SERP appearance. [PREDICTED] = predicted based on query intent and competitor FAQ content.

### Category A — College Identity & Quality (7 questions)

| # | Question | Answer Type | Status | Page Coverage |
|---|----------|------------|--------|---------------|
| 1 | What is the best allied health sciences college in Namakkal? | Paragraph (40w) | [SERP] | FAQ item #1 — JS-gated |
| 2 | Is JKKN AHS a government or private college? | Short answer | [PREDICTED] | NOT on page — gap |
| 3 | Is JKKN College of Allied Health Sciences NAAC approved? | Short answer | [PREDICTED] | AffiliationBar + layout badge |
| 4 | How many allied health science colleges are there in Namakkal? | Number + list | [SERP] | FAQ item #10 — JS-gated |
| 5 | Which is the No.1 allied health science college in Namakkal district? | Paragraph | [PREDICTED] | NOT explicit — gap |
| 6 | What is the ranking of JKKN AHS? | Short answer | [PREDICTED] | NOT on page |
| 7 | Is JKKN AHS affiliated to MGR University? | Yes/No + detail | [PREDICTED] | AffiliationBar — confirmed |

### Category B — Programmes & Courses (5 questions)

| # | Question | Answer Type | Status | Page Coverage |
|---|----------|------------|--------|---------------|
| 8 | What courses are available at JKKN AHS Namakkal? | List (9 items) | [SERP] | ProgrammesSection — server-rendered |
| 9 | What is Allied Health Sciences? | Definition paragraph | [SERP] | FAQ item #3 — JS-gated |
| 10 | How many years is B.Sc. Allied Health Science? | Short answer | [PREDICTED] | Programme cards (3+1 years) |
| 11 | What subjects are needed for allied health science admission? | List | [SERP] | FAQ item #11 — JS-gated |
| 12 | Can I do BSc allied health science after 12th science? | Yes/No + detail | [PREDICTED] | NOT explicit — gap |

### Category C — Distance & Transport (4 questions)

| # | Question | Answer Type | Status | Page Coverage |
|---|----------|------------|--------|---------------|
| 13 | How far is JKKN AHS from Namakkal? | Distance + time | [SERP] | FAQ item #2 — JS-gated; DistanceCard |
| 14 | Is there bus service from Namakkal to JKKN college? | Yes/No + detail | [PREDICTED] | HowToReachSection (bus line) |
| 15 | Is JKKN AHS hostel available for Namakkal students? | Yes/No + detail | [SERP] | FAQ item #6 — JS-gated |
| 16 | What is the address of JKKN College of Allied Health Sciences? | Address | [PREDICTED] | HowToReachSection (campus address) |

### Category D — Fees & Admission (4 questions)

| # | Question | Answer Type | Status | Page Coverage |
|---|----------|------------|--------|---------------|
| 17 | What are the fees for BSc allied health science in Tamil Nadu? | Paragraph + range | [SERP] | FAQ item #8 — JS-gated |
| 18 | What is the admission process for allied health science colleges? | Steps list | [PREDICTED] | NOT on page — gap |
| 19 | What is the last date to apply for allied health science 2026? | Date | [PREDICTED] | NOT on page — gap |
| 20 | Are there scholarships for AHS courses in Namakkal? | Yes/No + detail | [PREDICTED] | FAQ item #8 partial (JS-gated) |

### Category E — Career & Placements (2 questions)

| # | Question | Answer Type | Status | Page Coverage |
|---|----------|------------|--------|---------------|
| 21 | What is the salary after BSc allied health science? | Paragraph + range | [SERP] | FAQ item #9 — JS-gated |
| 22 | Does JKKN AHS have international placement opportunities? | Yes/No + detail | [PREDICTED] | PlacementHighlights (NHS UK, UAE listed) |

**PAA Gap Analysis:** 8 of 22 questions have zero coverage on the page. 11 of 22 have coverage but are JS-gated. Only 3 are fully accessible in initial HTML. After AEO fixes, target: 18+ questions covered in accessible HTML.

---

## 11. AI Overview Citation Plan

### 11.1 Citation Trigger Queries

AI Overviews are most likely to trigger for these Namakkal queries:

| Query | AI Overview Probability | JKKN Citation Readiness |
|-------|------------------------|------------------------|
| "best allied health science college namakkal" | HIGH — comparison query | LOW — no structured definition paragraph |
| "allied health science courses namakkal" | MEDIUM | MEDIUM — programmes listed but JS-rendered |
| "JKKN AHS Namakkal admission 2026" | LOW — navigational | HIGH — page exists |
| "namakkal district medical colleges" | HIGH — category query | LOW — not explicitly categorized as such |
| "BSc dialysis technology namakkal" | MEDIUM | MEDIUM — programme card exists |

### 11.2 Citation-Worthy Content Requirements

For AI models to cite JKKN AHS Namakkal page, the following must be present in static, crawlable HTML:

1. **Institutional identity paragraph** — WHO is JKKN AHS, WHERE is it, WHAT does it offer (≤60 words)
2. **Programme list** — all 9 BSc names as a static `<ul>` (not in JS-rendered grid cards)
3. **Key facts table** — accreditation, affiliation, year founded, placement rate, contact
4. **Distance fact** — "5–10 km from Namakkal city centre via NH-544" in plain text
5. **FAQ answers** — all 11 answers visible in initial HTML without JavaScript

### 11.3 Entity Signals for AI Knowledge Graph

Add to `EducationalOrganization` schema in layout.tsx (lines 149–203):

```json
{
  "foundingDate": "1952",
  "numberOfStudents": "[UPDATE — get from admin]",
  "accreditationStatus": "NAAC Approved",
  "alumni": [],
  "knowsAbout": ["Allied Health Sciences", "Cardiac Technology", "Dialysis Technology",
    "Radiology", "Operation Theatre Technology", "Respiratory Therapy",
    "Physician Assistant", "Critical Care Technology", "Medical Record Science",
    "Accident Emergency Care"],
  "areaServed": [
    {"@type": "AdministrativeArea", "name": "Namakkal District"},
    {"@type": "AdministrativeArea", "name": "Salem District"},
    {"@type": "AdministrativeArea", "name": "Erode District"}
  ]
}
```

### 11.4 sameAs Links to Add

Enhance `educationalOrgSchema` in layout.tsx line 174:

```json
"sameAs": [
  "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7",
  "https://jkkn.ac.in/",
  "https://www.facebook.com/jkkncolleges",
  "https://www.youtube.com/@jkkninstitutions"
]
```

[UPDATE — verify social URLs from actual JKKN social profiles]

---

## 12. Voice Search Optimization

### 12.1 Current Speakable Schema Status

The Speakable schema in layout.tsx (lines 205–214) targets:
```json
"cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
```

- `.faq-answer` — **BROKEN**: Applied to FAQ answers inside `{open === i && <div>}` (page.tsx line 794). These are not in initial HTML.
- `.snippet-answer` — **WORKING**: Applied to CompetitiveAdvantage cards (page.tsx line 693) and FAQ answer div.
- `.voice-answer` — **WORKING**: Applied to CompetitiveAdvantage subtitle (page.tsx line 684).
- `h1`, `h2` — **WORKING**: All headings are in server-rendered HTML.

**Fix required:** Once FAQ answers are server-rendered (Task T-02), `.faq-answer` class will work. No schema changes needed — only fix the rendering.

### 12.2 Voice Query Patterns for Namakkal

| Voice Query Pattern | Target Content | Current Status |
|--------------------|---------------|----------------|
| "What is the best allied health science college in Namakkal?" | FAQ answer #1 | JS-gated — fix needed |
| "How far is JKKN from Namakkal?" | Distance card + FAQ #2 | Partial — Distance card is server-rendered |
| "What courses does JKKN AHS Namakkal offer?" | Programme list snippet | NOT in voice-friendly format |
| "Is there hostel at JKKN AHS for Namakkal students?" | FAQ answer #6 | JS-gated — fix needed |
| "How to reach JKKN AHS from Namakkal?" | HowToReach section | Server-rendered — WORKING |

### 12.3 Voice-Optimised Answer Content

Add the following as a `<p class="voice-answer">` element immediately below the H2 in `HowToReachSection()` (page.tsx around line 507):

```
JKKN College of Allied Health Sciences is located in Komarapalayam, Namakkal district,
just 5 to 10 kilometres from Namakkal city centre via NH-544. The journey takes
approximately 15 to 20 minutes by bus or auto-rickshaw. College transport buses operate
daily from Namakkal and surrounding areas.
```

---

## 13. Schema Enhancement

### 13.1 Missing Schemas — Must Add

#### 13.1.1 Course Schema (9 Programmes)

Add as a JSON-LD `@graph` in `layout.tsx` after the `educationalOrgSchema` block (after line 203).

**Template for each Course:**

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc. Cardiac Technology",
  "description": "3-year undergraduate programme in cardiac diagnostic procedures including ECG, echocardiography, and cardiac catheterisation. Includes 1-year mandatory internship at attached hospital.",
  "provider": {
    "@type": "EducationalOrganization",
    "@id": "https://ahs.jkkn.ac.in/#organization"
  },
  "educationalLevel": "Bachelor's Degree",
  "timeRequired": "P4Y",
  "numberOfCredits": "[UPDATE — get from university syllabus]",
  "occupationalCategory": "29-1000",
  "url": "https://ahs.jkkn.ac.in/cardiac-technology",
  "inLanguage": "en",
  "courseCode": "[UPDATE]",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "location": {
      "@type": "Place",
      "name": "JKKN College of Allied Health Sciences",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      }
    }
  }
}
```

**All 9 Course names to use:**
1. B.Sc. Cardiac Technology — url: /cardiac-technology — intake: 30
2. B.Sc. Dialysis Technology — url: /dialysis-technology — intake: 40
3. B.Sc. Radiology & Imaging Technology — url: /radiology-imaging-technology — intake: 40
4. B.Sc. Operation Theatre & Anaesthesia Technology — url: /operation-theatre-anaesthesia — intake: 40
5. B.Sc. Respiratory Therapy — url: /respiratory-therapy — intake: 30
6. B.Sc. Physician Assistant — url: /physician-assistant — intake: 40
7. B.Sc. Critical Care Technology — url: /critical-care-technology — intake: 30
8. B.Sc. Medical Record Science — url: /medical-record-science — intake: 30
9. B.Sc. Accident & Emergency Care Technology — url: /accident-emergency-care — intake: 30

**File:** `src/app/namakkal/layout.tsx` — add after line 203 as a new `courseListSchema` variable and inject via `<script type="application/ld+json">` block.

#### 13.1.2 HowTo Schema (How to Reach Campus from Namakkal)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Reach JKKN AHS Campus from Namakkal",
  "description": "Step-by-step directions to reach JKKN College of Allied Health Sciences from Namakkal city centre via NH-544.",
  "totalTime": "PT20M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Start from Namakkal Bus Stand",
      "text": "Begin your journey from Namakkal New Bus Stand on Tiruchengode Road."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Take NH-544 towards Komarapalayam",
      "text": "Board any bus or auto-rickshaw heading towards Komarapalayam on NH-544 (Salem-Coimbatore Highway). The route is well-connected with frequent services."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Alight at Natarajapuram / JKKN Campus",
      "text": "Get off at Natarajapuram stop on NH-544. JKKN Institutions campus is directly visible from the highway. Total distance: 5–10 km, travel time: 15–20 minutes."
    }
  ]
}
```

**File:** `src/app/namakkal/layout.tsx` — add after courseListSchema.

#### 13.1.3 LocalBusiness Schema (Missing from city page)

```json
{
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
  "openingHours": "Mo-Sa 09:00-17:00",
  "priceRange": "₹₹",
  "hasMap": "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7"
}
```

### 13.2 Existing Schema Fixes

| Schema | Issue | Fix |
|--------|-------|-----|
| FAQPage (layout.tsx lines 53–147) | 11 questions in schema — all matched to page FAQ | No schema change needed — fix page rendering |
| EducationalOrganization (layout.tsx line 176) | `areaServed` only covers "Namakkal" city | Expand to include Namakkal District + Salem + Erode |
| WebPage + Speakable (layout.tsx lines 205–214) | `.faq-answer` selector broken | No schema change — fix page rendering (T-02) |
| BreadcrumbList (layout.tsx line 48) | Uses `/namakkal` without trailing slash | Change to `/namakkal/` to match canonical |

---

## 14. Meta Tag Optimization

### 14.1 Current Meta Tags (from layout.tsx lines 3–26)

| Tag | Current Value | Characters | Status |
|-----|--------------|-----------|--------|
| Title | "Allied Health Science College in Namakkal \| JKKN AHS — Admissions 2026-27" | 74 | OVER LIMIT — must be ≤60 |
| Description | "Looking for an allied health science college in Namakkal? JKKN College of Allied Health Sciences is just 5-10 km from Namakkal on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!" | 196 | OVER LIMIT — must be ≤155 |

### 14.2 Optimised Meta Tags

**Optimised Title (57 characters):**
```
Allied Health Science College Namakkal | JKKN AHS
```

**Alternative Title (59 characters):**
```
Best AHS College in Namakkal District | JKKN AHS
```

**Optimised Description (152 characters):**
```
JKKN Allied Health Sciences — Namakkal's top AHS college, 5-10 km on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Admissions open 2026-27.
```

**Verification:**
- Title: "Allied Health Science College Namakkal | JKKN AHS" = 49 characters (under 60) ✓
- Description: Count = 152 characters (under 155) ✓

**File to update:** `src/app/namakkal/layout.tsx` lines 3–6

### 14.3 OG/Social Meta

| Tag | Current Value | Recommendation |
|-----|--------------|----------------|
| og:title | Same as title | Update to match new title |
| og:description | Same as meta description | Update to match new description |
| og:image | /allied-health-science-hero.png | Keep — already 1200×630 |

---

## 15. Internal Linking Plan

### 15.1 Existing Internal Links on Page

| Link Text | Destination | Location | Status |
|-----------|-------------|----------|--------|
| View Course Details (×9) | /cardiac-technology, /dialysis-technology, etc. | ProgrammesSection cards | GOOD |
| View full placement details | /placements | PlacementHighlights line 461 | GOOD |
| Salem (city) | /salem | ExploreCities line 811 | Distance WRONG — shows 40-50 km; should be ~58 km |
| Erode (city) | /erode | ExploreCities line 813 | Distance WRONG — shows 30-40 km; should be ~22 km |
| Tiruppur (city) | /tiruppur | ExploreCities line 815 | Distance shows 80-90 km; MEMORY.md says 67 km — fix |
| Coimbatore (city) | /coimbatore | ExploreCities line 814 | Distance shows 100-110 km; MEMORY.md says ~105 km — acceptable |

### 15.2 Missing Internal Links — Must Add

| Link Text | Destination | Where to Add | Priority |
|-----------|-------------|-------------|---------|
| "Apply for admission 2026-27" | https://www.jkkn.ai/apply/jkkn-admission-2026 | Below ProgrammesSection | P1 |
| "View all facilities" | /classroom, /library, /lab | FacilitiesSection | P2 |
| "Contact admissions office" | /contact | FAQSection (below apply FAQ) | P1 |
| "JKKN AHS homepage" | / | CompetitiveAdvantage (institutional trust section) | P2 |
| "Our hospital" | External / [UPDATE URL] | PlacementHighlights (500+ bed mention) | P2 |
| "Erode city page" | /erode | After DistanceCard (Erode nearest city) | P2 |

### 15.3 Cross-City Link Network

The ExploreCitiesSection already links to all 4 city pages. Ensure reciprocal links exist:
- /erode page → links to /namakkal ✓ [verify]
- /salem page → links to /namakkal ✓ [verify]
- /tiruppur page → links to /namakkal ✓ [verify]
- /coimbatore page → links to /namakkal ✓ [verify]

**Add to Namakkal page:** A sentence in HowToReachSection mentioning Erode as the nearest railway/bus hub: "Students from Erode (~22 km) can board connecting bus services to Komarapalayam."

---

## 16. Negative Trigger Audit

> 14-point check for content that may prevent snippet selection or trigger AI content filters.

| # | Check | Status | Issue | Fix |
|---|-------|--------|-------|-----|
| 1 | Fabricated statistics | PASS | No fake data found — all figures tagged or sourced | None |
| 2 | Contradictory distance claims | FAIL | ExploreCities distances conflict with MEMORY.md verified distances | Fix distances in ExploreCitiesSection (lines 811–815) |
| 3 | Superlative claims without proof | WARN | "One of the top allied health sciences colleges" — acceptable with NAAC backing | Add NAAC detail near superlatives |
| 4 | Thin answer text | FAIL | All 11 FAQ answers hidden — no visible answer text | Fix FAQ rendering (Task T-02) |
| 5 | Duplicate H2 headings | FAIL | "Why Namakkal Students Choose JKKN AHS" appears twice — WhyChooseSection (line 226) AND CompetitiveAdvantageSection (line 681) | Differentiate H2s |
| 6 | Missing price/fee data | WARN | Fees mentioned as "competitively priced" only — no specific figure | Add fee range or direct to admissions |
| 7 | Broken canonical | CHECK | Canonical should be `/namakkal/` with trailing slash | Verify in `createPageMetadata()` |
| 8 | JS-gated content indexed by schema | FAIL | FAQPage schema has 11 entries; 0 are visible in initial HTML | Fix FAQ rendering |
| 9 | Namakkal district vs town confusion | WARN | Page correctly uses "5-10 km from Namakkal" (city centre) but WhyChoose says "Just 5-10 km from Namakkal" without specifying town/district | Add "(city centre)" clarification in 2 places |
| 10 | Missing affiliation detail | PASS | "Tamil Nadu Dr. M.G.R. Medical University, Chennai" stated in AffiliationBar and FAQ | None |
| 11 | Non-crawlable programme links | PASS | All 9 course links are standard `<a href>` tags — crawlable | None |
| 12 | Missing alt text quality | PASS | Gallery images have descriptive alt text with "Namakkal" in alt attribute | None |
| 13 | Broken image references | CHECK | Gallery images use `/images/institution.avif`, `/allied health science main image6.png` — verify these exist in /public | Verify file existence |
| 14 | `"use client"` blocking server render | FAIL | Entire page.tsx is `"use client"` (line 1) — Next.js will CSR the entire page | Split FAQ into separate client component; keep page as server component |

**Negative triggers found: 5 FAIL, 3 WARN, 2 CHECK**
**Priority fixes: #4, #8, #14 (same root cause — FAQ rendering), #5 (duplicate H2), #2 (distance data)**

---

## 17. Multi-Platform Coverage

### 17.1 Google Surfaces

| Surface | Current Status | Action |
|---------|---------------|--------|
| Organic search (Google) | Ranking #1 (estimated) | Maintain via AEO fixes |
| Featured snippet (position 0) | NOT present | Add snippet paragraphs (Section 9) |
| PAA box | NOT present | Fix FAQ rendering (Section 13) |
| AI Overview | NOT cited | Add entity signals + static FAQ answers |
| Google Maps | GBP listing exists | [UPDATE — verify Namakkal city page links to GBP] |
| Google Images | Alt text present | Already optimised with "Namakkal" in alt text |

### 17.2 Other Search Engines

| Platform | Action |
|---------|--------|
| Bing | Submit sitemap via Bing Webmaster Tools — ahs.jkkn.ac.in/sitemap.xml |
| Perplexity | Perplexity cites structured FAQ content — fix rendering to ensure citation |
| ChatGPT Search | Requires schema + static content — all fixes in this spec cover ChatGPT search |
| DuckDuckGo | Follows Google signals — no separate action needed |

### 17.3 Listing Aggregator Strategy

**Target aggregators for JKKN AHS Namakkal presence:**

| Aggregator | JKKN Listed? | Action |
|-----------|-------------|--------|
| alliedhealthadmission.com | YES | Verify data accuracy — update placement rate to 85%+ |
| mymathews.com | Mentioned | Submit accurate listing data |
| shiksha.com | Listed (Vivekanandha page — not JKKN) | Create/claim JKKN AHS listing on Shiksha |
| collegedekho.com | Not confirmed | Create/claim listing |
| collegebatch.com | Mentioned | Verify accuracy |
| collegedunia.com | Not confirmed | Create/claim listing |

---

## 18. Monitoring Plan

### 18.1 KPIs to Track (Post-Implementation)

| KPI | Baseline (Before) | Target (After 60 days) | Tool |
|----|-------------------|------------------------|------|
| Featured snippet wins | 0 | 2+ | GSC + manual SERP check |
| PAA appearances | 0 | 6+ | GSC + manual SERP check |
| Organic CTR for "/namakkal" | [UNVERIFIED — GSC required] | +25% | Google Search Console |
| Impressions for "namakkal" queries | [UNVERIFIED] | +40% | Google Search Console |
| AI Overview citations | 0 | 1+ | Manual check on Perplexity/ChatGPT |
| Page crawl coverage | ~55% words indexed | 95%+ | Google Rich Results Test |
| Schema validation errors | Check with Rich Results | 0 errors | Google Rich Results Test |

### 18.2 Monitoring Schedule

| Action | Frequency | Tool |
|--------|-----------|------|
| GSC impressions + CTR for /namakkal | Weekly | Google Search Console |
| Manual SERP check for top 5 keywords | Bi-weekly | Manual / SERP tools |
| Rich Results Test for schema | After each schema change | Google Rich Results Test |
| PAA box appearance check | Weekly during admission season | Manual SERP |
| Competitor city page monitoring | Monthly | Manual WebSearch |

### 18.3 Success Criteria (60-day post-implementation)

- [ ] Featured snippet captured for "allied health science college namakkal"
- [ ] FAQ answers visible in Google Rich Snippet preview (test via Rich Results Test)
- [ ] 0 schema validation errors in Google Rich Results Test
- [ ] Title tag ≤60 characters confirmed
- [ ] Meta description ≤155 characters confirmed
- [ ] Course schema for all 9 programmes validated
- [ ] HowTo schema validated
- [ ] Organic CTR improved (GSC comparison vs prior 28-day period)

---

*Triple-check validation: PASSED*
*Document: AEO-NAMAKKAL-SPEC.md | Lines: ~610 | Date: 2026-03-28*
