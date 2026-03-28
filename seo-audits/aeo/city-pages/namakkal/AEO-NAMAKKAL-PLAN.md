# AEO Execution Plan — Allied Health Science College in Namakkal

> **Document Type:** Answer Engine Optimization Execution Plan
> **Site:** https://ahs.jkkn.ac.in/namakkal/
> **Institution:** JKKN College of Allied Health Sciences
> **Primary Keyword:** allied health science college namakkal
> **AEO Score Before:** 38/100 | **Target Score After:** 78/100
> **Date:** 2026-03-28
> **Companion Files:** `AEO-NAMAKKAL-SPEC.md` | `AEO-NAMAKKAL-DECOMPOSE.md`

---

## Table of Contents

1. [Phase Summary](#1-phase-summary)
2. [Tier 0 — Critical Blockers (Do First)](#2-tier-0--critical-blockers-do-first)
3. [Tier 1 — High-Impact AEO Wins](#3-tier-1--high-impact-aeo-wins)
4. [Tier 2 — Completeness & Depth](#4-tier-2--completeness--depth)
5. [File Change Map](#5-file-change-map)
6. [Expected Impact by Action](#6-expected-impact-by-action)
7. [Execution Timeline](#7-execution-timeline)
8. [Approval Gate Checklist](#8-approval-gate-checklist)

---

## 1. Phase Summary

| Tier | Label | Actions | Files Affected | Est. Dev Time |
|------|-------|---------|---------------|---------------|
| 0 | Critical Blockers | 3 | page.tsx, layout.tsx | 2–3 hrs |
| 1 | High-Impact AEO | 6 | page.tsx, layout.tsx | 3–4 hrs |
| 2 | Completeness & Depth | 7 | page.tsx, layout.tsx | 2–3 hrs |
| **Total** | | **16 actions** | **2 files** | **7–10 hrs** |

**Execution order is strictly sequential within each tier. Tier 0 must complete before Tier 1 begins.**

**Namakkal-specific priority:** The district domicile angle and the "5-10 km from Namakkal city centre" distance claim are JKKN's strongest AEO differentiators for this page. Every content addition must reinforce that campus IS in Namakkal district — not "near Namakkal" or "close to Namakkal" but "within Namakkal district."

---

## 2. Tier 0 — Critical Blockers (Do First)

These 3 issues prevent Googlebot from reading AEO-critical content. Until resolved, no Tier 1/2 work will yield snippet benefits.

### T0-01: Fix FAQ Rendering — Remove useState JS Gating

**Problem:** `page.tsx` line 1 has `"use client"` and `FAQSection()` uses `useState` (line 758) to control accordion visibility. The check `{open === i && (<div className="faq-answer ...">)}` at line 792–798 means all 11 FAQ answers are absent from initial HTML. Googlebot cannot read them.

**Fix:** Extract `FAQSection` into a separate client component file (`FAQClient.tsx`) or convert the accordion to CSS-only `<details>/<summary>` elements that are server-rendered. The preferred approach:

Option A (Recommended): Convert to `<details>/<summary>` HTML elements — no JavaScript needed, fully server-rendered, SEO-safe, and accessible.
Option B: Extract `FAQSection` to a separate `"use client"` component and make the parent `page.tsx` a server component (remove `"use client"` from line 1 of page.tsx).

**Files:** `src/app/namakkal/page.tsx` lines 710–804 (FAQSection component)
**Blocker Impact:** This single fix unlocks 510 words of content for Googlebot, activates the FAQPage schema, and enables the Speakable `.faq-answer` selector.
**DECOMPOSE Task:** T-02

### T0-02: Fix Duplicate H2 — "Why Namakkal Students Choose JKKN AHS"

**Problem:** Two sections have identical H2 text:
- `WhyChooseSection()` — page.tsx line 226: "Why Namakkal Students Choose JKKN AHS"
- `CompetitiveAdvantageSection()` — page.tsx line 681: "Why Namakkal Students Choose JKKN AHS"

Duplicate H2s confuse search engines about which section represents the authoritative answer for the query "why choose JKKN AHS Namakkal."

**Fix:** Rename one H2 to differentiate:
- Keep line 226 as: "Why Study Allied Health Sciences in Namakkal?"
- Change line 681 to: "JKKN AHS Competitive Advantage in Namakkal District"

**Files:** `src/app/namakkal/page.tsx` lines 226, 681
**DECOMPOSE Task:** T-01

### T0-03: Fix Title Tag — Reduce to ≤60 Characters

**Problem:** Current title tag (layout.tsx line 4) = 74 characters:
`"Allied Health Science College in Namakkal | JKKN AHS — Admissions 2026-27"`

This is 14 characters over the 60-character limit. Google truncates titles over ~60 characters, losing the "Admissions 2026-27" CTA.

**Fix:** Change to 49-character title:
`"Allied Health Science College Namakkal | JKKN AHS"`

Or 59-character alternative:
`"Best AHS College in Namakkal District | JKKN AHS"`

**Files:** `src/app/namakkal/layout.tsx` line 4
**DECOMPOSE Task:** T-03

---

## 3. Tier 1 — High-Impact AEO Wins

These 6 actions directly create snippet-eligible content and schema signals. Execute after Tier 0 is complete.

### T1-01: Add Paragraph Snippet Block (Definition Answer)

Add a static 50-word paragraph below HeroSection with `class="snippet-answer"`. This is the primary target for a definition-style featured snippet.

**Content:** See AEO-NAMAKKAL-SPEC.md Section 9.1 for exact text.
**Files:** `src/app/namakkal/page.tsx` — new component after HeroSection (after line 26 in NamakkalPage return)
**Expected snippet:** Position-zero paragraph for "allied health science college namakkal"
**DECOMPOSE Task:** T-04

### T1-02: Add Course List Snippet Block

Add a static `<ul>` listing all 9 BSc programmes with intake and duration. Format as `class="snippet-answer"` section.

**Content:** See AEO-NAMAKKAL-SPEC.md Section 9.2 for exact HTML.
**Files:** `src/app/namakkal/page.tsx` — new component `ProgrammeSnippetBlock()` after AffiliationBar
**Expected snippet:** List snippet for "allied health science courses namakkal"
**DECOMPOSE Task:** T-05

### T1-03: Add Distance Table Snippet

Add a static HTML `<table>` inside HowToReachSection showing distances from 6 cities to campus.

**Content:** See AEO-NAMAKKAL-SPEC.md Section 9.3 for exact table.
**Files:** `src/app/namakkal/page.tsx` — inside HowToReachSection around line 510
**Expected snippet:** Table snippet for "distance namakkal to JKKN AHS"
**DECOMPOSE Task:** T-06

### T1-04: Add 9 Course Schemas to Layout

Add a `courseListSchema` JSON-LD block with all 9 Course types to layout.tsx.

**Content:** See AEO-NAMAKKAL-SPEC.md Section 13.1.1 for full JSON-LD.
**Files:** `src/app/namakkal/layout.tsx` — add after line 203 as new variable + `<script>` tag
**Expected impact:** Programme-level schema for AI Overview citations; enables Course rich results
**DECOMPOSE Task:** T-07

### T1-05: Add HowTo Schema (How to Reach)

Add a `howToReachSchema` JSON-LD block for the step-by-step campus directions.

**Content:** See AEO-NAMAKKAL-SPEC.md Section 13.1.2 for full JSON-LD.
**Files:** `src/app/namakkal/layout.tsx` — add after courseListSchema
**Expected impact:** HowTo rich result for "how to reach JKKN from namakkal"
**DECOMPOSE Task:** T-08

### T1-06: Fix Meta Description — Reduce to ≤155 Characters

**Problem:** Current description (layout.tsx line 5–7) = 196 characters — 41 over limit.

**Fix:** Use 152-character version:
`"JKKN Allied Health Sciences — Namakkal's top AHS college, 5-10 km on NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Admissions open 2026-27."`

**Files:** `src/app/namakkal/layout.tsx` lines 5–7
**DECOMPOSE Task:** T-09

---

## 4. Tier 2 — Completeness & Depth

These 7 actions improve AEO depth, entity signals, and content coverage for long-tail queries.

### T2-01: Add LocalBusiness Schema

Add a `localBusinessSchema` JSON-LD to layout.tsx for map/local search signals.
**Content:** See AEO-NAMAKKAL-SPEC.md Section 13.1.3.
**Files:** `src/app/namakkal/layout.tsx`
**DECOMPOSE Task:** T-10

### T2-02: Expand EducationalOrganization Schema — areaServed + knowsAbout

Add `knowsAbout` array (9 specialisations) and expand `areaServed` to cover Namakkal District, Salem District, Erode District.
**Files:** `src/app/namakkal/layout.tsx` lines 176–177
**DECOMPOSE Task:** T-11

### T2-03: Fix ExploreCities Distances

Correct the four city distances in ExploreCitiesSection to match MEMORY.md verified values:
- Salem: 40-50 km → 58 km
- Erode: 30-40 km → 22 km
- Tiruppur: 80-90 km → 67 km
- Coimbatore: 100-110 km → 105 km

**Files:** `src/app/namakkal/page.tsx` lines 811–815
**DECOMPOSE Task:** T-12

### T2-04: Add Voice-Optimised Paragraph in HowToReachSection

Add `<p class="voice-answer">` text in HowToReachSection for voice search coverage.
**Content:** See AEO-NAMAKKAL-SPEC.md Section 12.3 for exact text.
**Files:** `src/app/namakkal/page.tsx` around line 507
**DECOMPOSE Task:** T-13

### T2-05: Add 3 Missing FAQs for PAA Gap Coverage

Add 3 new FAQ items to close PAA gaps identified in SPEC Section 10:
1. "Is JKKN AHS a government or private college?" (Category A gap)
2. "What is the admission process for allied health science 2026?" (Category D gap)
3. "Does JKKN AHS have international placement?" (Category E gap)

Also add corresponding entries to FAQPage schema in layout.tsx.
**Files:** `src/app/namakkal/page.tsx` (FAQSection) + `src/app/namakkal/layout.tsx` (faqSchema)
**DECOMPOSE Task:** T-14

### T2-06: Add "Namakkal District" Paragraph to WhyChooseSection

Add a new reason card or a paragraph explicitly about Namakkal district domicile benefits — students from Namakkal district qualify for district quota/government merit counselling.
**Content draft:** "Namakkal District Domicile Advantage — Students native to Namakkal district may qualify for district domicile quota under Tamil Nadu government merit counselling. JKKN AHS campus is located within Namakkal district (Komarapalayam taluk), making it eligible for district-level admission preferences."
**Files:** `src/app/namakkal/page.tsx` — add to `reasons` array in WhyChooseSection (lines 190–221)
**DECOMPOSE Task:** T-15

### T2-07: Add "paramedical" Keyword to Page Content

The term "paramedical college namakkal" has significant search volume but does not appear anywhere on the page. Add it naturally in one location — CompetitiveAdvantage or WhyChoose text.
**Suggested addition:** In the H1 subtitle or a page subtitle: "Also known as paramedical sciences, allied health programmes at JKKN prepare students for clinical support roles in hospitals and diagnostic centres."
**Files:** `src/app/namakkal/page.tsx`
**DECOMPOSE Task:** T-16

---

## 5. File Change Map

| File | Lines Affected | Change Type | Tier |
|------|---------------|-------------|------|
| `src/app/namakkal/layout.tsx` | 4 | Title tag update | Tier 0 |
| `src/app/namakkal/layout.tsx` | 5–7 | Description update | Tier 1 |
| `src/app/namakkal/layout.tsx` | After 203 | Add courseListSchema (9 courses) | Tier 1 |
| `src/app/namakkal/layout.tsx` | After courseListSchema | Add howToReachSchema | Tier 1 |
| `src/app/namakkal/layout.tsx` | After howToReachSchema | Add localBusinessSchema | Tier 2 |
| `src/app/namakkal/layout.tsx` | 176–177 | Expand areaServed + add knowsAbout | Tier 2 |
| `src/app/namakkal/layout.tsx` | 53–147 | Add 3 new FAQ entries to faqSchema | Tier 2 |
| `src/app/namakkal/page.tsx` | 1 | Evaluate `"use client"` — split component | Tier 0 |
| `src/app/namakkal/page.tsx` | 226 | Change duplicate H2 text | Tier 0 |
| `src/app/namakkal/page.tsx` | 681 | Change duplicate H2 text | Tier 0 |
| `src/app/namakkal/page.tsx` | After line 26 | Add ParagraphSnippetBlock() | Tier 1 |
| `src/app/namakkal/page.tsx` | After AffiliationBar | Add ProgrammeSnippetBlock() | Tier 1 |
| `src/app/namakkal/page.tsx` | ~510 | Add distance table in HowToReach | Tier 1 |
| `src/app/namakkal/page.tsx` | 758–803 | Fix FAQ rendering (details/summary) | Tier 0 |
| `src/app/namakkal/page.tsx` | 811–815 | Fix city distances | Tier 2 |
| `src/app/namakkal/page.tsx` | ~507 | Add voice-answer paragraph | Tier 2 |
| `src/app/namakkal/page.tsx` | FAQSection | Add 3 new FAQ items | Tier 2 |
| `src/app/namakkal/page.tsx` | reasons array ~190–221 | Add Namakkal District card | Tier 2 |

---

## 6. Expected Impact by Action

| Action | AEO Dimension | Expected Outcome | Confidence |
|--------|--------------|-----------------|-----------|
| Fix FAQ rendering (T0-01) | FAQ Rendering | 0→90 on FAQ dim. | HIGH |
| Fix duplicate H2 (T0-02) | Snippet-Ready Content | Cleaner heading hierarchy | MEDIUM |
| Fix title tag (T0-03) | Meta | Full title displayed in SERP | HIGH |
| Add paragraph snippet (T1-01) | Snippet-Ready Content | Featured snippet eligible | HIGH |
| Add course list snippet (T1-02) | Snippet-Ready Content | List snippet eligible | HIGH |
| Add distance table (T1-03) | Snippet-Ready Content | Table snippet eligible | MEDIUM |
| Add 9 Course schemas (T1-04) | Schema Coverage | Programme-level AI citations | HIGH |
| Add HowTo schema (T1-05) | Schema Coverage | HowTo rich result | MEDIUM |
| Fix meta description (T1-06) | Meta | Full description displayed | HIGH |
| Add LocalBusiness schema (T2-01) | Schema Coverage | Local pack signals | MEDIUM |
| Expand EducationalOrg (T2-02) | Schema Coverage | Entity recognition | MEDIUM |
| Fix distances (T2-03) | Accuracy | Avoids negative trigger #2 | HIGH |
| Add voice paragraph (T2-04) | Voice Search | Voice answer coverage | MEDIUM |
| Add 3 FAQs (T2-05) | FAQ Coverage | 3 new PAA opportunities | MEDIUM |
| Add district domicile card (T2-06) | Keyword Depth | Unique angle, no competitor covers | HIGH |
| Add paramedical term (T2-07) | Keyword Depth | New keyword cluster coverage | MEDIUM |

---

## 7. Execution Timeline

| Week | Actions | Priority |
|------|---------|---------|
| Week 1 (Immediate) | T0-01, T0-02, T0-03 — Critical blockers | MUST DO |
| Week 1–2 | T1-01, T1-02, T1-03 — Snippet content | HIGH |
| Week 2 | T1-04, T1-05, T1-06 — Schema + meta | HIGH |
| Week 3 | T2-01, T2-02, T2-03, T2-04 — Completeness | MEDIUM |
| Week 3–4 | T2-05, T2-06, T2-07 — Depth | MEDIUM |
| Week 5+ | Monitor KPIs (Section 18 of SPEC) | ONGOING |

**Admission season urgency:** Tier 0 and Tier 1 actions must be live before April 1, 2026 to capture peak admission-season search traffic. The March–August admission cycle means delayed implementation = lost leads.

---

## 8. Approval Gate Checklist

Before deploying any changes to production, verify:

- [ ] `"use client"` refactor does not break any interactive elements (FAQ open/close)
- [ ] All 9 Course schemas pass Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] HowTo schema passes Rich Results Test
- [ ] FAQPage schema passes Rich Results Test with all 11+ entries
- [ ] Title tag = ≤60 characters (verify character count)
- [ ] Meta description = ≤155 characters (verify character count)
- [ ] No broken links in internal linking additions
- [ ] Distance table data matches MEMORY.md verified distances
- [ ] Duplicate H2 issue resolved (grep for "Why Namakkal Students Choose JKKN AHS" — should appear once)
- [ ] Mobile viewport (320px, 768px) — verify FAQ details/summary elements display correctly
- [ ] FAQ answers visible in browser DevTools > View Page Source (not just in rendered DOM)

---

*Document: AEO-NAMAKKAL-PLAN.md | Lines: ~230 | Date: 2026-03-28*
