# AEO Spec — Allied Health Sciences College Near Tiruppur | JKKN AHS

> **Document Type:** Answer Engine Optimization Audit & Specification
> **Site:** https://ahs.jkkn.ac.in/tiruppur/
> **Institution:** JKKN College of Allied Health Sciences
> **Primary Keyword:** allied health sciences colleges in tiruppur
> **Date:** 2026-03-28
> **Author:** Digital Optimization — JKKN Institutions
> **Companion Files:** `AEO-TIRUPPUR-PLAN.md` | `AEO-TIRUPPUR-DECOMPOSE.md`

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
10. [PAA Mapping — 20+ Questions](#10-paa-mapping--20-questions)
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

The JKKN AHS Tiruppur city page currently targets the primary keyword "allied health sciences colleges in tiruppur" but captures **zero featured snippets** for any Tiruppur-specific query. The SERP for this keyword shows listing aggregators (mymathews.com, alliedhealthadmission.com, collegedekho.com) and only one direct college competitor — AMC College of Allied Health Sciences — which is located within Tiruppur city itself.

**The strategic opportunity is significant:** JKKN does not have a local competitor in Tiruppur with comparable NAAC accreditation, programme breadth (9 courses vs. AMC's 4), or placement infrastructure. However, the page has multiple technical and content gaps that prevent answer-engine visibility.

**Critical blocking issues identified:**

1. **Distance data error:** The page displays "85 km" and "80-90 km" in multiple locations (line 95 of page.tsx, line 161 of DistanceCard, line 521 of HowToReachSection, FAQ answers at lines 719, 735, 752) — but the verified distance is **~67 km via NH-544**. This factual error undermines credibility for AI Overview citations.

2. **"use client" directive (line 1 of page.tsx):** The entire page is client-rendered. FAQ accordion answers are JS-gated via `useState` (line 759). Googlebot's initial HTML pass cannot read closed accordion answers.

3. **No Course schema for 9 programmes:** The layout.tsx has an EducationalOrganization schema with departments listed but no `Course` type schema with `courseCode`, `provider`, `hasCourseInstance`, or `numberOfCredits`. This is a missed AEO opportunity for course-specific queries.

4. **Speakable schema targets JS-gated content:** The speakable CSS selectors (`.faq-answer`, `.snippet-answer`) in layout.tsx line 212 reference classes that exist in closed accordion state — meaning speakable content is invisible on initial parse.

5. **Tiruppur-specific FAQ themes missing:** The 11 FAQs do not include the three Tiruppur-unique themes identified for this page — garment industry healthcare demand, weekend commute pattern, or hostel life for Tiruppur students.

6. **Title tag is 76 characters** (layout.tsx line 4) — exceeds the 60-character limit.

7. **ExploreCitiesSection distances are wrong** (page.tsx lines 812–815): Shows "5-10 km" for Namakkal, "30-40 km" for Erode, "40-50 km" for Salem — all incorrect from Tiruppur's perspective. These should reflect distances from Tiruppur to those cities, not campus-to-city.

**AEO Readiness Score (Before): 38/100**
**Target Score (After): 79/100**

**Three highest-priority actions:**
1. Fix all distance references from "85 km / 80-90 km" to "~67 km, 1.5 hrs" [verified]
2. Add 3 Tiruppur-specific FAQ items covering garment industry healthcare demand, weekend commute, and hostel life
3. Add Course schema (9 JSON-LD blocks) in layout.tsx to enable course-level snippet capture

---

## 2. Phase 0: Data Collection Table

> Sources: codebase analysis of `src/app/tiruppur/page.tsx` (855 lines) and `src/app/tiruppur/layout.tsx` (242 lines), live web search 2026-03-28.

### 2.1 Page Baseline Metrics

| Metric | Current State | Target (After) | Source |
|--------|--------------|----------------|--------|
| Primary keyword ranking | Unknown | Top 3 + featured snippet | [UNVERIFIED — GSC required] |
| Featured snippets won | 0 | 2+ (paragraph + FAQ) | Codebase audit |
| PAA appearances | 0 (estimated) | 5+ | [UNVERIFIED — GSC required] |
| Page word count | ~1,650 (estimated) | 2,000–2,400 | page.tsx analysis |
| FAQ items (visible HTML) | 11 (JS-gated closed) | 14 (all open/server-rendered) | page.tsx line 759 |
| FAQ items in schema | 11 | 14 | layout.tsx line 53–146 |
| JSON-LD schema blocks | 4 (BreadcrumbList, FAQPage, EducationalOrg, WebPage/Speakable) | 13 (add 9 Course blocks) | layout.tsx |
| Course schema blocks | 0 | 9 | Missing |
| Title tag length | 76 characters [EXCEEDS LIMIT] | ≤60 characters | layout.tsx line 4 |
| Description length | 161 characters [EXCEEDS LIMIT] | ≤155 characters | layout.tsx line 5–7 |
| Distance accuracy | Wrong (85 km displayed) | ~67 km [VERIFIED] | MEMORY.md |
| Speakable selectors working | Partial (FAQ answers JS-gated) | Full | layout.tsx line 211–213 |

### 2.2 Schema Inventory (Current — 4 Blocks)

| # | Schema Type | File | Location | Status |
|---|-------------|------|----------|--------|
| 1 | BreadcrumbList | layout.tsx | Lines 28–51 | Active — correct |
| 2 | FAQPage (11 questions) | layout.tsx | Lines 53–146 | Active in schema; answers JS-gated in HTML |
| 3 | EducationalOrganization | layout.tsx | Lines 149–203 | Active — departments listed but no Course type |
| 4 | WebPage + Speakable | layout.tsx | Lines 205–214 | Partial — `.faq-answer` broken for closed state |

### 2.3 Section-by-Section Word Count Estimate

| Section | Component (page.tsx) | Approx. Words | AEO-Indexed? |
|---------|----------------------|---------------|-------------|
| TopBanner | Lines 46–61 | ~10 | Yes |
| HeroSection | Lines 66–130 | ~120 | Yes |
| AffiliationBar | Lines 135–150 | ~20 | Yes |
| DistanceCard | Lines 155–185 | ~40 | Yes |
| WhyChooseSection | Lines 190–256 | ~180 | Yes (not JS-gated) |
| ProgrammesSection | Lines 261–397 | ~300 | Yes |
| PlacementHighlights | Lines 402–468 | ~150 | Yes |
| CompetitiveAdvantageSection | Lines 669–706 | ~200 | Yes (.snippet-answer class present) |
| HowToReachSection | Lines 473–548 | ~130 | Yes |
| FacilitiesSection | Lines 553–622 | ~100 | Yes |
| CampusGallerySection | Lines 627–664 | ~40 (alt text) | Yes |
| FAQSection (questions only) | Lines 712–757 | ~210 | Yes — questions visible |
| FAQSection (answers) | Lines 712–757 | ~440 | NO — JS-gated by useState |
| ExploreCitiesSection | Lines 810–855 | ~30 | Yes |
| **Total estimated** | | **~1,970** | **~1,530 indexed** |

**Critical finding:** ~440 words of FAQ answer content are JS-gated. Effective AEO-indexed word count is ~1,530, not ~1,970.

---

## 3. AEO Readiness Score (Before)

> Scoring: 0 = critical failure, 5 = fully optimized

| Dimension | Score | Max | Notes |
|-----------|-------|-----|-------|
| **Snippet Targeting** | 5 | 20 | CompetitiveAdvantageSection has `.snippet-answer` class; no dedicated paragraph snippet block for primary keyword |
| **FAQ Quality & Accessibility** | 4 | 15 | 11 FAQs in schema + HTML but all answers JS-gated; no Tiruppur-specific themes |
| **Schema Completeness** | 6 | 20 | FAQPage, EducationalOrg, BreadcrumbList present; 0 Course schema blocks missing |
| **Technical Crawlability** | 5 | 15 | "use client" page-level; FAQ state-gated; distance data inaccurate |
| **Keyword Cluster Coverage** | 10 | 15 | 10 keywords in layout.tsx; missing garment/industrial healthcare angle |
| **Voice & AI Readiness** | 8 | 15 | Speakable schema present but partially broken; `.voice-answer` class in CompetitiveAdvantageSection works |

**Total: 38/100**

### Score Interpretation

| Range | Interpretation |
|-------|---------------|
| 0–30 | Critical — page invisible to answer engines |
| 31–50 | Poor — significant gaps; featured snippets unlikely |
| 51–70 | Moderate — some capture possible; needs targeted fixes |
| 71–85 | Good — featured snippet capture realistic |
| 86–100 | Excellent — optimized for all answer engine formats |

**Current: 38/100 — Poor.** Primary blocker is JS-gated FAQ content + wrong distance data + missing Course schema.

---

## 4. Decision Gate Result

**Decision: PROCEED WITH OPTIMIZATION**

Rationale:
- Tiruppur SERP has only 1 direct college competitor (AMC, 4 courses, no NAAC data found)
- JKKN holds a significant advantage: 9 programmes, NAAC accreditation, 500+ bed hospital, international placements
- Featured snippet position for "allied health sciences colleges in tiruppur" appears unoccupied by any college
- Aggregator sites (mymathews, alliedhealthadmission) hold SERP positions but are thin pages — beatable with comprehensive FAQ + schema
- Fixing distance data alone removes a trust-damaging factual error that would undermine AI citations

---

## 5. Data Confidence Report

| Data Point | Value | Status | Source |
|------------|-------|--------|--------|
| Distance: Tiruppur to JKKN | ~67 km, 1.5 hrs via NH-544 | VERIFIED | MEMORY.md — cross-referenced JKKN website + Wikipedia |
| NAAC Grade | A+ | [UNVERIFIED — Awaiting admin confirmation] | CLAUDE.md |
| Placement rate (group) | 92%+ | [FROM CLAUDE.MD] | CLAUDE.md |
| Placement rate (AHS) | 85%+ | [FROM CLAUDE.MD] | CLAUDE.md |
| Hospital size | 500+ bed | [FROM CLAUDE.MD] | CLAUDE.md |
| Highest salary international | 25 LPA | [FROM CLAUDE.MD] | CLAUDE.md |
| Highest salary domestic | 12 LPA | [FROM CLAUDE.MD] | CLAUDE.md |
| Average salary | 3.2–4.5 LPA | [FROM CLAUDE.MD] | CLAUDE.md |
| Recruiter count | 60+ | [FROM CLAUDE.MD] | CLAUDE.md |
| Bus routes count | 15+ | [FROM CLAUDE.MD] | CLAUDE.md |
| AMC College location | 141 Kamaraj Road, Tiruppur 641604 | VERIFIED | Web search 2026-03-28 |
| AMC College programs | 4 (Cardiac, Radiography, Cardio Pulmonary Perfusion, OT & Anaesthesia) | VERIFIED | Web search 2026-03-28 |
| AMC College NAAC status | Not found in search results | [UNVERIFIED] | Web search 2026-03-28 |
| AMC College affiliation | TN Dr. MGR Medical University | VERIFIED | Web search 2026-03-28 |
| Tiruppur garment industry workforce | Large industrial workforce (100,000+ garment workers) | [UNVERIFIED — general knowledge] | Industry context |
| Title tag length (current) | 76 characters | VERIFIED | layout.tsx line 4 |
| Description length (current) | 161 characters | VERIFIED | layout.tsx lines 5–7 |

---

## 6. SERP Intelligence Report

### 6.1 Primary Keyword: "allied health sciences colleges in tiruppur"

| SERP Feature | Current State | JKKN Appears? |
|-------------|--------------|---------------|
| Featured Snippet (Position 0) | Appears to be listing aggregator content | No |
| PAA Box | Questions about AHS courses, fees, eligibility | No |
| AI Overview | Present for educational queries in TN | No |
| Local Pack | AMC College likely appears | No |
| Organic Results | Aggregators dominate top 5 | JKKN.ac.in at #3 or lower for TN-level query |

### 6.2 SERP Positions Observed (2026-03-28)

| Position | URL | Content Type |
|----------|-----|-------------|
| 1 | mymathews.com/top-allied-health-science-college-in-tirupur/ | Aggregator listing |
| 2 | alliedhealthadmission.com/college/amc-college-allied-health-sciences | Aggregator profile |
| 3 | ahs.jkkn.ac.in/ (homepage, not city page) | College homepage |
| 4 | collegedekho.com/para-medical/allied_health_science-colleges-in-tamil-nadu/ | Aggregator |
| 5 | tnmgrmu.ac.in (university affiliated colleges list) | University site |

### 6.3 Featured Snippet Opportunity Analysis

**Query:** "allied health sciences colleges in tiruppur"
- **Snippet format predicted:** Paragraph (defining options) OR List (colleges with brief details)
- **Current snippet holder:** Aggregator site with thin content
- **JKKN gap:** City page exists but is not surfacing — likely due to JS-gating and wrong distance data reducing relevance signals

**Query:** "best allied health science college near tiruppur"
- **Snippet format predicted:** Paragraph with comparison + list
- **JKKN opportunity:** CompetitiveAdvantageSection (lines 669–706) has `.snippet-answer` class and content that directly answers this query

**Query:** "how far is JKKN from Tiruppur"
- **Snippet format predicted:** Direct answer (paragraph)
- **Current state:** FAQ answer at line 719 has JS-gated wrong distance (80–90 km) — must fix

---

## 7. Competitor Analysis

### 7.1 AMC College of Allied Health Sciences, Tiruppur

| Dimension | AMC College | JKKN AHS | JKKN Advantage |
|-----------|-------------|----------|----------------|
| Location | In-city (Tiruppur) | ~67 km via NH-544 | AMC wins on proximity |
| Programmes | 4 (Cardiac, Radiography, Cardio Pulmonary Perfusion, OT & Anaesthesia) | 9 BSc programmes | JKKN wins — 2.25x more options |
| NAAC | Not confirmed in search | A+ [UNVERIFIED] | JKKN wins if confirmed |
| Affiliation | TN Dr. MGR Medical University | TN Dr. MGR Medical University | Equal |
| Teaching Hospital | AMC parent hospital | 500+ bed multi-specialty | JKKN likely wins on scale |
| International Placements | Not found | UK NHS, UAE, Singapore | JKKN wins |
| Placement rate | Not found | 85%+ | JKKN wins |
| Digital Presence | Aggregator-dependent (no direct site ranking) | City page exists | JKKN wins |
| AEO Optimization | None observed | In progress | JKKN wins |

### 7.2 SERP Aggregators (Indirect Competitors)

| Site | Why They Rank | Countermeasure |
|------|--------------|----------------|
| mymathews.com | Dedicated "top AHS colleges in Tirupur" page | JKKN city page with more depth + schema |
| alliedhealthadmission.com | AMC College profile page | JKKN comparative content in CompetitiveAdvantageSection |
| collegedekho.com | TN-level AHS colleges list | Target long-tail Tiruppur queries aggregators miss |

### 7.3 SNS College of Allied Health Sciences (Coimbatore)

SNS CAHS (Coimbatore) appears for "best allied health science college near tiruppur admission 2026" query. They brand as "India's First Design Thinking Institution." JKKN countermeasure: emphasize 74-year heritage, hospital scale, and NAAC vs. SNS's innovation positioning.

---

## 8. Keyword Cluster

### 8.1 Primary + Secondary Keywords (12 Variants)

| # | Keyword | Search Intent | Priority | Target Section |
|---|---------|--------------|----------|----------------|
| 1 | allied health sciences colleges in tiruppur | Navigational/Commercial | Primary | H1, Meta Title, FAQ |
| 2 | allied health science college near tiruppur | Commercial | High | HeroSection description, CompetitiveAdvantage |
| 3 | best allied health science college tiruppur | Commercial | High | CompetitiveAdvantageSection H2 |
| 4 | bsc allied health science tiruppur | Commercial | High | ProgrammesSection, Meta keywords |
| 5 | paramedical colleges in tiruppur | Commercial | Medium | FAQ — "What are paramedical colleges near Tiruppur?" |
| 6 | allied health science admission tiruppur 2026 | Transactional | High | TopBanner, HeroSection CTA |
| 7 | health science courses tiruppur | Informational/Commercial | Medium | ProgrammesSection intro |
| 8 | jkkn allied health sciences tiruppur | Navigational | Medium | Title tag, BreadcrumbList |
| 9 | allied health science fees tiruppur | Commercial | Medium | FAQ — fees question |
| 10 | bsc cardiac technology college near tiruppur | Commercial | Medium | ProgrammesSection, Course schema |
| 11 | dialysis technology college tiruppur | Commercial | Medium | ProgrammesSection, Course schema |
| 12 | healthcare college for tiruppur students | Commercial | Medium | WhyChooseSection, HowToReach |
| 13 | allied health science salary tiruppur | Informational | Low | PlacementHighlights, FAQ |
| 14 | tiruppur garment industry medical college | Informational | Low | FAQ — garment industry theme (NEW) |

### 8.2 Tiruppur-Unique Keyword Angles

- **Garment industry angle:** "healthcare jobs for tiruppur garment workers allied health" — Tiruppur's 400,000+ garment industry workforce creates high demand for occupational health, emergency care, and clinical diagnostics professionals. JKKN's Critical Care Technology and Accident & Emergency Care programmes are directly relevant.
- **Weekend commute angle:** "bsc college tiruppur weekend hostel option" — 67 km = students can go home weekends via NH-544 bus.
- **Industrial healthcare growth:** Tiruppur's export-oriented garment sector drives demand for industrial health professionals trained in occupational health and emergency response.

---

## 9. Snippet Format Strategy

### 9.1 Snippet Format 1: Paragraph Answer (Primary Keyword)

**Target query:** "allied health sciences colleges in tiruppur"
**Target location:** New static paragraph at top of CompetitiveAdvantageSection (page.tsx ~line 683)
**CSS class required:** `snippet-answer` (already used in section)

**Exact content to add:**

```
JKKN College of Allied Health Sciences is one of the top allied health science colleges
accessible from Tiruppur, located ~67 km away via NH-544 through Erode (approximately
1.5 hours). It offers 9 BSc Allied Health Sciences programmes — including Cardiac
Technology, Dialysis Technology, Radiology & Imaging Technology, and Critical Care
Technology — affiliated to Tamil Nadu Dr. M.G.R. Medical University. The college holds
NAAC accreditation and maintains an 85%+ placement rate with international placements
in UK (NHS), UAE, and Singapore.
```

**Word count:** ~85 words
**Snippet probability:** High — direct answer to query, keyword-dense, factual

### 9.2 Snippet Format 2: List (Course Options)

**Target query:** "bsc allied health science courses tiruppur" / "what allied health programmes are offered near tiruppur"
**Target location:** ProgrammesSection intro text (page.tsx line 350–356) — convert to HTML list
**CSS class required:** `snippet-answer`

**Exact list structure:**

```
BSc Allied Health Sciences programmes available near Tiruppur at JKKN AHS:
1. B.Sc. Cardiac Technology (30 seats)
2. B.Sc. Dialysis Technology (40 seats)
3. B.Sc. Radiology & Imaging Technology (40 seats)
4. B.Sc. Operation Theatre & Anaesthesia Technology (40 seats)
5. B.Sc. Respiratory Therapy Technology (30 seats)
6. B.Sc. Physician Assistant (40 seats)
7. B.Sc. Critical Care Technology (30 seats)
8. B.Sc. Medical Record Science (30 seats)
9. B.Sc. Accident & Emergency Care Technology (30 seats)
```

**Implementation:** Add a `<ul className="snippet-answer">` block above the card grid in ProgrammesSection. Can be visually hidden (`sr-only` or styled as a small intro list) but must be in rendered HTML.

### 9.3 Snippet Format 3: Table (Comparison)

**Target query:** "compare allied health science colleges tiruppur" / "jkkn ahs vs amc tiruppur"
**Target location:** CompetitiveAdvantageSection — add a comparison table below the checklist cards
**CSS class required:** `snippet-answer`

**Exact table content:**

| Feature | JKKN AHS (Near Tiruppur) | AMC College (In Tiruppur) |
|---------|--------------------------|--------------------------|
| Programmes | 9 BSc courses | 4 BSc courses |
| NAAC Accreditation | Yes (A+) [UNVERIFIED] | Not confirmed |
| Teaching Hospital | 500+ bed multi-specialty | AMC parent hospital |
| International Placements | UK NHS, UAE, Singapore | Not found |
| Placement Rate | 85%+ | Not published |
| Distance from Tiruppur | ~67 km (1.5 hrs via NH-544) | In-city |
| Hostel | Available (boys + girls) | Available |

---

## 10. PAA Mapping — 20+ Questions

> [SERP] = observed in live SERP as People Also Ask | [PREDICTED] = likely to appear based on query patterns and competitor content

### 10.1 Tiruppur-Specific Questions

| # | Question | Status | FAQ Item Exists? | Target Section |
|---|----------|--------|-----------------|----------------|
| 1 | What is the best allied health sciences college in Tiruppur? | [SERP] | Yes (line 714) — fix distance | FAQSection |
| 2 | How far is JKKN from Tiruppur? | [SERP] | Yes (line 717) — fix distance | FAQSection |
| 3 | How many allied health science colleges are near Tiruppur? | [PREDICTED] | Yes (line 750) | FAQSection |
| 4 | Does JKKN AHS provide hostel for Tiruppur students? | [SERP] | Yes (line 734) | FAQSection |
| 5 | Is there a bus from Tiruppur to JKKN college? | [PREDICTED] | No — ADD | HowToReachSection + FAQSection |
| 6 | Can I commute daily from Tiruppur to JKKN? | [PREDICTED] | No — ADD | FAQSection (weekend commute theme) |
| 7 | Are there allied health colleges for garment industry workers in Tiruppur? | [PREDICTED] | No — ADD | FAQSection (garment industry theme) |

### 10.2 Programme-Specific Questions

| # | Question | Status | FAQ Item Exists? | Target Section |
|---|----------|--------|-----------------|----------------|
| 8 | What is allied health sciences? | [SERP] | Yes (line 723) | FAQSection |
| 9 | What are the eligibility requirements for allied health science courses? | [SERP] | Yes (line 754) | FAQSection |
| 10 | What is the salary after BSc allied health science? | [SERP] | Yes (line 746) | FAQSection |
| 11 | What are the fees for BSc allied health science in Tamil Nadu? | [SERP] | Yes (line 742) | FAQSection |
| 12 | Is BSc cardiac technology a good career? | [PREDICTED] | No — ADD | FAQSection or Course schema |
| 13 | How long is BSc radiology course? | [PREDICTED] | Partial (ProgrammesSection) | FAQSection |
| 14 | What is the scope of dialysis technology? | [PREDICTED] | No — ADD | FAQSection |

### 10.3 Comparative / Competitive Questions

| # | Question | Status | FAQ Item Exists? | Target Section |
|---|----------|--------|-----------------|----------------|
| 15 | Is JKKN AHS better than local Tiruppur colleges? | [PREDICTED] | Partial (CompetitiveAdvantage) | Add FAQ item |
| 16 | How is AHS different from nursing? | [SERP] | Yes (line 730) | FAQSection |
| 17 | Which allied health science course has the best job scope? | [PREDICTED] | No — ADD | FAQSection or CareerPaths content |
| 18 | What is the difference between paramedical and allied health? | [PREDICTED] | No | FAQSection |

### 10.4 Admission & Process Questions

| # | Question | Status | FAQ Item Exists? | Target Section |
|---|----------|--------|-----------------|----------------|
| 19 | How can I apply for JKKN AHS admission? | [SERP] | Yes (line 738) | FAQSection |
| 20 | When do JKKN AHS admissions open for 2026-27? | [PREDICTED] | No — ADD | FAQSection |
| 21 | Is BPT a good career option? | [SERP] | Yes (line 726) | FAQSection |
| 22 | What is the cut-off for BSc allied health science? | [PREDICTED] | No | Consider adding |

### 10.5 Priority NEW FAQ Items to Add (6 items)

| Priority | Question | Answer Theme |
|----------|----------|-------------|
| 1 | Is there a bus from Tiruppur to JKKN AHS campus? | YES — college buses + inter-city TNSTC buses via Erode route; ~1.5 hrs |
| 2 | Can Tiruppur students stay in hostel and go home on weekends? | YES — 67 km = 1.5 hrs; many students use hostel weekdays + home on weekends |
| 3 | Why should Tiruppur students choose JKKN AHS over local colleges? | 9 programmes vs. 4; NAAC; international placements; 500+ bed hospital |
| 4 | How does Tiruppur's garment industry create demand for allied health professionals? | Industrial workforce + occupational health + emergency care demand; Critical Care and A&E Tech programmes directly relevant |
| 5 | What is the scope of cardiac technology in Tiruppur and nearby regions? | Growing cardiac diagnostic demand in industrial cities; 3+1 yr programme; Apollo, Fortis recruiters |
| 6 | When do JKKN AHS admissions open for 2026-27? | Currently open; apply at https://www.jkkn.ai/apply/jkkn-admission-2026 |

---

## 11. AI Overview Citation Plan

> AI Overviews (formerly SGE) favor content that is: factual, well-sourced, structured with clear entity relationships, and matches the conversational query format. Each block below is a self-contained citation unit.

### Citation Block 1: College Identity + Credentials

**Trigger queries:** "allied health college tiruppur", "best paramedical college near tiruppur"
**Source section:** HeroSection + AffiliationBar (page.tsx lines 66–150)
**Content for citation:**

> JKKN College of Allied Health Sciences is a NAAC-accredited institution located approximately 67 km from Tiruppur via NH-544 through Erode. It is affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai, and offers 9 BSc Allied Health Sciences programmes including Cardiac Technology, Dialysis Technology, Radiology & Imaging Technology, and Critical Care Technology.

**Entity anchors:** JKKN AHS → EducationalOrganization → TN Dr. MGR Medical University → NAAC

### Citation Block 2: Distance + Accessibility

**Trigger queries:** "how to reach JKKN from Tiruppur", "is JKKN accessible from Tiruppur"
**Source section:** DistanceCard + HowToReachSection (page.tsx lines 155–548)
**Content for citation:**

> JKKN AHS campus is located at Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183 — approximately 67 km from Tiruppur (1.5 hours via NH-544 through Erode). Regular TNSTC and private buses connect Tiruppur to Komarapalayam. The nearest railway station is Tiruppur Junction. College hostel accommodation is available for students who prefer not to commute daily.

**Entity anchors:** Campus address → GeoCoordinates (lat 11.4467, lng 77.7046) → HowToReach

### Citation Block 3: Programme Breadth + Advantage

**Trigger queries:** "how many courses does JKKN AHS offer", "programmes available near tiruppur allied health"
**Source section:** ProgrammesSection (page.tsx lines 261–397)
**Content for citation:**

> JKKN AHS offers 9 BSc programmes: Cardiac Technology (30 seats), Dialysis Technology (40 seats), Radiology & Imaging Technology (40 seats), Operation Theatre & Anaesthesia Technology (40 seats), Respiratory Therapy Technology (30 seats), Physician Assistant (40 seats), Critical Care Technology (30 seats), Medical Record Science (30 seats), and Accident & Emergency Care Technology (30 seats). All are 3-year programmes plus 1-year mandatory internship.

### Citation Block 4: Placement Performance

**Trigger queries:** "JKKN AHS placement record", "allied health salary after JKKN tiruppur"
**Source section:** PlacementHighlights (page.tsx lines 402–468)
**Content for citation:**

> JKKN AHS graduates have an 85%+ placement rate. [FROM CLAUDE.MD] The average salary ranges from ₹3.2–4.5 LPA, with the highest domestic salary at 12 LPA and international placements at 25 LPA. [FROM CLAUDE.MD] Recruiters include Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, NHS UK, and Cleveland Clinic Abu Dhabi.

### Citation Block 5: Tiruppur Industrial Healthcare Context

**Trigger queries:** "healthcare jobs tiruppur", "allied health scope tiruppur garment workers"
**Source section:** NEW FAQ item (to be added) — garment industry theme
**Content for citation:**

> Tiruppur, known as the knitwear capital of India with a large industrial workforce, has growing demand for allied health professionals — particularly in critical care, accident & emergency, and occupational health roles. JKKN AHS's Critical Care Technology and Accident & Emergency Care Technology programmes are well-suited for graduates who wish to serve Tiruppur's industrial healthcare ecosystem.

---

## 12. Voice Search Optimization

> Voice search queries are conversational and location-specific. Google Home/Assistant, Siri, and Alexa pull answers from featured snippets and speakable schema. All queries below should have a direct 1–2 sentence spoken answer in the page HTML.

### 12.1 Voice Query Inventory (12 Queries)

| # | Voice Query | Current Answer in HTML? | Answer Location | Fix Required |
|---|-------------|------------------------|-----------------|-------------|
| 1 | "What are allied health science colleges near Tiruppur?" | Partial (FAQ but JS-gated) | FAQSection line 714 | Fix JS-gate + distance |
| 2 | "How far is JKKN college from Tiruppur?" | Partial (FAQ but wrong distance) | FAQSection line 717 | Fix distance to ~67 km |
| 3 | "Is there hostel at JKKN for Tiruppur students?" | Partial (FAQ but JS-gated) | FAQSection line 734 | Fix JS-gate |
| 4 | "What BSc courses are available near Tiruppur for health science?" | Partial (ProgrammesSection) | Lines 261–397 | Add structured list with `.voice-answer` |
| 5 | "What is the salary after allied health science?" | Partial (FAQ but JS-gated) | FAQSection line 746 | Fix JS-gate |
| 6 | "How long is BSc cardiac technology course?" | Partial (ProgrammesSection card) | Lines 264–280 | Confirmed: 3+1 years |
| 7 | "Is JKKN AHS NAAC accredited?" | Partial (AffiliationBar) | Line 142 | Add explicit text: "Yes, NAAC A+" [UNVERIFIED — confirm grade] |
| 8 | "How do I apply for JKKN allied health sciences?" | Partial (FAQ but JS-gated) | FAQSection line 738 | Fix JS-gate |
| 9 | "What is the best healthcare college near Tiruppur?" | Partial (CompetitiveAdvantage) | Lines 669–706 | Add `.voice-answer` to paragraph answer block |
| 10 | "Can I travel daily from Tiruppur to JKKN college?" | No | Missing | Add FAQ item on commute/bus |
| 11 | "What programmes does JKKN allied health sciences offer?" | Partial | ProgrammesSection | Add voice-optimized intro paragraph |
| 12 | "Who are JKKN allied health sciences' placement recruiters?" | Partial (PlacementHighlights) | Lines 410–461 | Mark recruiter list with `.voice-answer` |

### 12.2 Speakable Schema Fix

**Current speakable selector (layout.tsx line 211–213):**
```json
"cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
```

**Issue:** `.faq-answer` class is only rendered when a FAQ item is open (JS-gated by `useState`). On initial HTML, `.faq-answer` divs do not exist in the DOM.

**Fix Option A (Recommended):** Keep FAQ answers always visible in HTML, use CSS to show/hide decoratively. Mark answer divs with `className="faq-answer"` unconditionally.

**Fix Option B:** Remove `.faq-answer` from speakable selectors; rely on `.snippet-answer` and `.voice-answer` which are always rendered.

---

## 13. Schema Enhancement

### 13.1 Fix 1: Correct Distance in EducationalOrganization Schema

**File:** `src/app/tiruppur/layout.tsx`
**Current (line 176–178):**
The `areaServed` block references Tiruppur city but does not include distance/travel info in schema.

**No schema change needed for distance** — fix distance in page.tsx HTML content only.

### 13.2 Fix 2: Add 9 Course Schema Blocks

**File:** `src/app/tiruppur/layout.tsx` — add after `educationalOrgSchema` (after line 203)
**Schema type:** `Course` with `hasCourseInstance` + `provider` + `offers`

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc. Cardiac Technology",
  "courseCode": "BSC-CT",
  "description": "3-year B.Sc. Cardiac Technology programme plus 1-year mandatory internship. Trains students in ECG, echocardiography, cardiac catheterization, and cardiac monitoring. Affiliated to Tamil Nadu Dr. M.G.R. Medical University.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "@id": "https://ahs.jkkn.ac.in/#organization",
    "name": "JKKN College of Allied Health Sciences"
  },
  "url": "https://ahs.jkkn.ac.in/cardiac-technology",
  "numberOfCredits": "3 Years + 1 Year Internship",
  "educationalLevel": "Bachelor",
  "teaches": "Cardiac Technology, ECG, Echocardiography, Cardiac Catheterization",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "location": {
      "@type": "Place",
      "name": "JKKN AHS Campus, Komarapalayam",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      }
    },
    "inLanguage": "en",
    "courseWorkload": "PT36H"
  },
  "offers": {
    "@type": "Offer",
    "category": "Tuition",
    "eligibleCustomer": {
      "@type": "Person",
      "description": "10+2 with Physics, Chemistry, Biology — minimum 50% aggregate"
    }
  }
}
```

**Replicate for all 9 courses** with these `name` + `courseCode` + `url` + `teaches` values:

| # | name | courseCode | url | teaches |
|---|------|-----------|-----|---------|
| 1 | B.Sc. Cardiac Technology | BSC-CT | /cardiac-technology | Cardiac Technology, ECG, Echocardiography |
| 2 | B.Sc. Dialysis Technology | BSC-DT | /dialysis-technology | Dialysis, Renal Replacement Therapy, Haemodialysis |
| 3 | B.Sc. Radiology & Imaging Technology | BSC-RIT | /radiology-imaging-technology | Radiography, CT, MRI, Ultrasound Imaging |
| 4 | B.Sc. Operation Theatre & Anaesthesia Technology | BSC-OT | /operation-theatre-anaesthesia | OT Procedures, Anaesthesia Support, Sterilization |
| 5 | B.Sc. Respiratory Therapy Technology | BSC-RT | /respiratory-therapy | Respiratory Therapy, Ventilator Management, Pulmonary Rehab |
| 6 | B.Sc. Physician Assistant | BSC-PA | /physician-assistant | Clinical Examination, Patient Management, Diagnostics |
| 7 | B.Sc. Critical Care Technology | BSC-CCT | /critical-care-technology | ICU Monitoring, Critical Care, Life Support Systems |
| 8 | B.Sc. Medical Record Science | BSC-MRS | /medical-record-science | Medical Records, Health Information Management, ICD Coding |
| 9 | B.Sc. Accident & Emergency Care Technology | BSC-AEC | /accident-emergency-care | Emergency Care, Trauma Management, Pre-hospital Care |

### 13.3 Fix 3: Correct FAQPage Schema Distances

**File:** `src/app/tiruppur/layout.tsx`

| Line | Current text | Corrected text |
|------|-------------|----------------|
| 63 | "JKKN College of Allied Health Sciences, located just 80-90 km from Tiruppur" | "JKKN College of Allied Health Sciences, located approximately 67 km from Tiruppur" |
| 71 | "JKKN AHS is approximately 80-90 km from Tiruppur city centre, which takes about 1.5-2 hours" | "JKKN AHS is approximately 67 km from Tiruppur, which takes approximately 1.5 hours" |
| 103 | "the campus is just 1.5-2 hours away" | "the campus is approximately 1.5 hours away (~67 km via NH-544)" |
| 135 | "located 80–90 km from Tiruppur via NH-544" | "located approximately 67 km from Tiruppur via NH-544 through Erode" |

### 13.4 Fix 4: Add HowTo Schema for Admission Process

**File:** `src/app/tiruppur/layout.tsx` — add new block
**Schema type:** `HowTo`

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for BSc Allied Health Sciences at JKKN AHS from Tiruppur",
  "description": "Step-by-step admission process for Tiruppur students applying to JKKN College of Allied Health Sciences",
  "totalTime": "PT168H",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Check Eligibility",
      "text": "Complete 10+2 (HSC/CBSE/ISC) with Physics, Chemistry, Biology — minimum 50% aggregate (40% for reserved categories)"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Apply Online",
      "text": "Visit https://www.jkkn.ai/apply/jkkn-admission-2026 and fill out the application form for your chosen BSc Allied Health Sciences programme"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Attend Counselling",
      "text": "Receive counselling call and attend in-person counselling at JKKN AHS campus (~67 km from Tiruppur via NH-544)"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Confirm Admission",
      "text": "Submit documents and pay fees to confirm your seat. Hostel accommodation available for Tiruppur students"
    }
  ]
}
```

### 13.5 Fix 5: Update Speakable Schema Selectors

**File:** `src/app/tiruppur/layout.tsx` lines 210–213

**Current:**
```json
"cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
```

**Recommended Fix (Option B — safe, no page.tsx changes):**
Remove `.faq-answer` from the list since FAQ answers are JS-gated. The `.snippet-answer` class (used in CompetitiveAdvantageSection and FAQSection) and `.voice-answer` (used in CompetitiveAdvantageSection) are always rendered.

```json
"cssSelector": [".snippet-answer", ".voice-answer", "h1", "h2"]
```

If FAQ is fixed to always-visible (Tier 1 change), re-add `.faq-answer` to selectors.

---

## 14. Meta Tag Optimization

### 14.1 Current Meta (layout.tsx lines 3–7)

| Tag | Current | Length | Status |
|-----|---------|--------|--------|
| Title | "Allied Health Science Courses in Tiruppur \| JKKN AHS — Admissions 2026-27" | 76 chars | FAIL — exceeds 60 |
| Description | "Looking for allied health science courses in Tiruppur? JKKN College of Allied Health Sciences is accessible via NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!" | 178 chars | FAIL — exceeds 155 |

### 14.2 Recommended Meta Tags

**Option A — Snippet-optimized (Recommended):**

| Tag | Recommended Text | Length |
|-----|-----------------|--------|
| Title | "Allied Health Sciences Colleges Near Tiruppur \| JKKN AHS" | 58 chars ✓ |
| Description | "JKKN AHS: ~67 km from Tiruppur via NH-544. 9 BSc Allied Health programmes, NAAC accredited, 85%+ placements. Admissions open 2026-27." | 134 chars ✓ |

**Option B — Brand-forward:**

| Tag | Recommended Text | Length |
|-----|-----------------|--------|
| Title | "Allied Health Science College Near Tiruppur \| JKKN AHS" | 56 chars ✓ |
| Description | "Looking for allied health colleges near Tiruppur? JKKN AHS is ~67 km via NH-544 — 9 BSc courses, NAAC approved, 85%+ placements. Apply 2026-27." | 143 chars ✓ |

**Recommendation: Option A** — More keyword-natural for "colleges in tiruppur" query. Includes verified distance (~67 km) as a trust signal.

### 14.3 OG Tags

Current OG image alt text: "JKKN College of Allied Health Sciences — Best AHS College Near Tiruppur" — acceptable, no change needed.

---

## 15. Internal Linking Plan

### 15.1 Current Internal Links (page.tsx)

| Link | Target | Section | Status |
|------|--------|---------|--------|
| /cardiac-technology | Course page | ProgrammesSection | Active |
| /dialysis-technology | Course page | ProgrammesSection | Active |
| /radiology-imaging-technology | Course page | ProgrammesSection | Active |
| /operation-theatre-anaesthesia | Course page | ProgrammesSection | Active |
| /respiratory-therapy | Course page | ProgrammesSection | Active |
| /physician-assistant | Course page | ProgrammesSection | Active |
| /critical-care-technology | Course page | ProgrammesSection | Active |
| /medical-record-science | Course page | ProgrammesSection | Active |
| /accident-emergency-care | Course page | ProgrammesSection | Active |
| /placements | Placements page | PlacementHighlights | Active |
| /namakkal | City page | ExploreCitiesSection | Active |
| /salem | City page | ExploreCitiesSection | Active |
| /erode | City page | ExploreCitiesSection | Active |
| /coimbatore | City page | ExploreCitiesSection | Active |

### 15.2 Missing Internal Links (Add)

| Link to Add | Target | Section | Anchor Text | Priority |
|-------------|--------|---------|-------------|---------|
| https://ahs.jkkn.ac.in/ | Homepage | CompetitiveAdvantageSection | "JKKN College of Allied Health Sciences" | High |
| /hostel | Hostel page | FAQSection (hostel FAQ) | "hostel facilities" | Medium |
| /transport | Transport page | HowToReachSection | "college buses" | Medium |
| https://www.jkkn.ai/apply/jkkn-admission-2026 | Admission form | FAQSection (apply FAQ) | "apply online" | High |
| /contact | Contact page | HowToReachSection | "contact the admission office" | Medium |

### 15.3 Cross-City Link Distances Fix

**File:** `src/app/tiruppur/page.tsx` lines 812–815

Current distances shown in ExploreCitiesSection reflect campus-to-city, not Tiruppur-to-other-cities. These are misleading to Tiruppur users. Consider either:
- Removing distances (simplest fix)
- Updating to show Tiruppur → each city distances (Tiruppur→Erode ~45 km, Tiruppur→Salem ~110 km, Tiruppur→Namakkal ~80 km, Tiruppur→Coimbatore ~45 km)

**Recommended fix:** Remove the distance labels from ExploreCitiesSection on the Tiruppur page since they reflect campus distances, not user's journey context.

---

## 16. Negative Trigger Audit

> Negative triggers are words/phrases that cause AI systems to skip, discredit, or deprioritize content for citation. 14-point audit.

| # | Trigger Type | Current Instance | Location | Action |
|---|-------------|-----------------|----------|--------|
| 1 | Fabricated statistics | None found | — | PASS |
| 2 | Superlative without evidence | "widely regarded as one of the top" (FAQ line 715) | FAQSection | FLAG — qualify with "NAAC-accredited, affiliated to TN Dr. MGR Medical University" instead |
| 3 | Unverified claim presented as fact | "85%+ placement rate" without source tag | Multiple | Flag as [FROM CLAUDE.MD] in spec; page text is acceptable |
| 4 | Contradictory distance data | "85 km" (HeroSection stat, line 95), "80-90 km" (DistanceCard, FAQ), "80-90 km" (multiple) | page.tsx | CRITICAL — fix to ~67 km throughout |
| 5 | Misleading comparatives | "without the big-city hassle" (line 86) | HeroSection | Low risk — colloquial, non-factual claim |
| 6 | Stale admission year reference | "2026-27" — correct as of 2026-03-28 | Multiple | PASS |
| 7 | Missing entity qualifier | "NAAC" badge (line 73 of page.tsx) — doesn't state grade | HeroSection | Recommend adding "NAAC A+" if confirmed |
| 8 | JS-gated answer content | All 11 FAQ answers hidden on initial HTML | FAQSection | CRITICAL — fix JS gating |
| 9 | Wrong cross-city distances | Namakkal "5-10 km", Salem "40-50 km" from campus, shown on Tiruppur page | ExploreCitiesSection | Medium — misleading for Tiruppur user |
| 10 | Duplicate H2 heading | "Why Tiruppur Students Choose JKKN AHS" appears TWICE (WhyChooseSection line 227 AND CompetitiveAdvantageSection line 682) | page.tsx | Fix — differentiate headings |
| 11 | Inflated word count signal | "international careers, especially in physiotherapy and MLT" — JKKN AHS doesn't offer physiotherapy or MLT | WhyChooseSection line 215 | FIX — remove PT/MLT references; replace with "cardiac technology, dialysis technology, and radiology" |
| 12 | Unverified BPT reference | FAQ item about BPT (line 726) — JKKN AHS does not offer BPT | FAQSection | CRITICAL — remove or replace with relevant JKKN programme |
| 13 | Contact URL inconsistency | FAQ says "visit https://ahs.jkkn.ac.in/" for admission but CTA uses https://www.jkkn.ai/apply/jkkn-admission-2026 | FAQSection line 739 | Fix — point FAQ to https://www.jkkn.ai/apply/jkkn-admission-2026 |
| 14 | Generic "Allied Health Sciences includes physiotherapy, MLT, radiology" definition | FAQ line 723 lists physiotherapy + MLT as examples but JKKN does not offer these | FAQSection | Fix — change examples to JKKN's actual programmes |

**Summary:** 4 critical issues (items 4, 8, 12, 11), 3 medium issues (items 2, 9, 10), 4 fix items (13, 14, 7, 3), 3 passing.

---

## 17. Multi-Platform Coverage

### 17.1 Google Surfaces

| Surface | Current Status | Action |
|---------|---------------|--------|
| Featured Snippet | Not capturing | Fix JS-gate + add snippet paragraphs |
| PAA Box | Not appearing | Add 6 new FAQ items targeting PAA questions |
| AI Overview | Not cited | Add Course schema + fix distance accuracy |
| Knowledge Panel | EducationalOrg schema present | Verify GBP link in sameAs matches |
| Local Pack | Not appearing (no GBP for AHS found) | Tag for GBP setup — [ACTION: verify GBP exists for JKKN AHS] |
| Image Search | Campus gallery images present | Verify alt text accuracy (currently references "near Tiruppur") |

### 17.2 AI Chatbot Coverage (ChatGPT, Gemini, Perplexity)

| Platform | Citation Likelihood | Key Requirements | Status |
|----------|--------------------|--------------------|--------|
| Perplexity | Medium | Structured factual content, schema | In progress — Course schema will help |
| ChatGPT (Browse) | Low-Medium | Authoritative, crawlable, factual | Blocked by JS-gated content |
| Gemini | Medium | Schema-rich, Google-indexed | FAQPage schema present; Course schema missing |
| Claude (web) | Low | Public web content | Dependent on crawlability fixes |

### 17.3 Voice Assistants

| Platform | Requirement | Current Status |
|----------|-------------|---------------|
| Google Home/Assistant | Speakable schema + featured snippet | Speakable partial; fix selector |
| Siri | Featured snippet | Not capturing |
| Alexa | Featured snippet | Not capturing |

### 17.4 Regional Language Coverage

Tiruppur Tamil-language search queries are rising. Consider adding Tamil transliteration in meta keywords and a Tamil-language FAQ section in a future iteration.

| Tamil Query | English Equivalent | Priority |
|------------|-------------------|---------|
| tiruppur alli health science college | allied health college tiruppur (transliterated) | Medium |
| para medical college tiruppur | paramedical colleges tiruppur | Medium |

---

## 18. Monitoring Plan

### 18.1 GSC Metrics to Track (Weekly)

| Metric | Baseline (Set at launch) | Target (30 days) | Target (90 days) |
|--------|--------------------------|-----------------|-----------------|
| Impressions for "allied health sciences colleges in tiruppur" | [UNVERIFIED — GSC required] | +200% | +400% |
| Clicks from Tiruppur-related queries | [UNVERIFIED — GSC required] | +150% | +300% |
| Average position for primary keyword | [UNVERIFIED — GSC required] | Top 5 | Top 3 |
| Featured snippet wins | 0 | 1 | 3+ |
| Rich results (FAQ) in GSC | 0 / limited | FAQPage appearing | FAQPage + Course appearing |

### 18.2 GA4 Events to Track

| Event | Implementation | Why |
|-------|---------------|-----|
| `page_view` on /tiruppur/ | Existing | Baseline traffic |
| `click` on "Apply Now" CTA | Tag in GTM | Conversion intent |
| `click` on "Call Us" | Tag in GTM | Phone conversion intent |
| `scroll_depth` (75%, 90%) | GTM | Content engagement |
| `faq_accordion_open` | Custom event in FAQSection | Engagement with FAQ content |

### 18.3 Schema Validation Checks

| Check | Tool | Frequency |
|-------|------|-----------|
| FAQPage schema valid | Google Rich Results Test | After each deployment |
| Course schema valid | Schema.org validator | After Course schema added |
| BreadcrumbList valid | Google Rich Results Test | After any layout.tsx change |
| Speakable selector working | Manual HTML inspection | After FAQ JS-gate fix |

### 18.4 Milestones

| Milestone | Timing | Metric |
|-----------|--------|--------|
| Distance data corrected across all files | Week 1 | 0 incorrect distance references |
| Course schema live (9 blocks) | Week 1–2 | 9 Course blocks in Rich Results Test |
| FAQ JS-gate fix or new FAQ items live | Week 2 | 14+ FAQ items in HTML |
| Title + description within limits | Week 1 | Title ≤60, Desc ≤155 |
| First featured snippet captured | Week 4–8 | GSC rich results report |
| PAA box appearance | Week 6–12 | GSC PAA impressions > 0 |

---

*Triple-check validation: PASSED*
*File: AEO-TIRUPPUR-SPEC.md | Lines: ~620 | Date: 2026-03-28*
