# AEO Implementation Plan — Coimbatore City Page

> **Document Type:** AEO Execution Plan (Phase-by-Phase)
> **City Page:** https://ahs.jkkn.ac.in/coimbatore/
> **Companion Spec:** `seo-audits/aeo/city-pages/coimbatore/AEO-COIMBATORE-SPEC.md`
> **Task Cards:** `seo-audits/aeo/city-pages/coimbatore/AEO-COIMBATORE-DECOMPOSE.md`
> **Competitive Priority:** CRITICAL — most contested of 5 city pages
> **Date:** 2026-03-28

---

## Section 1: Priority Overview

Coimbatore is JKKN AHS's most competitive city target. Eight named AHS colleges operate in or directly serve the Coimbatore market. The page has the lowest AEO readiness score of all five city pages (38/100) due to three compounding issues: the entire page is client-rendered (`"use client"` at line 1), the FAQ accordion is JavaScript-gated, and no Course schema exists for any of the 9 programmes.

**Score:** 38/100 → Target: 80/100

| Priority Tier | Issue | Impact on Score |
|--------------|-------|----------------|
| Tier 0 (Blocker) | `"use client"` — full client render | +20 points |
| Tier 0 (Blocker) | FAQ JS-gate (useState accordion) | +15 points |
| Tier 1 (High) | Missing Course JSON-LD (9 programmes) | +8 points |
| Tier 1 (High) | Meta title 75 chars (over limit) | +3 points |
| Tier 1 (High) | Meta description 196 chars (over limit) | +2 points |
| Tier 1 (High) | Distance inconsistency ("100-110 km" vs "105 km") | +4 points |
| Tier 1 (High) | Missing comparison FAQ (JKKN vs Kongunadu) | +4 points |
| Tier 2 (Medium) | Missing HowTo schema | +2 points |
| Tier 2 (Medium) | Wrong cross-city distances in ExploreCitiesSection | +2 points |
| Tier 2 (Medium) | Missing snippet paragraph block | +3 points |

---

## Section 2: Phase Structure

The plan is structured in 4 phases. Phase 0 and Phase 1 are critical path — no subsequent phase should start until Phase 1 is complete. Phases 2 and 3 can run in parallel.

| Phase | Name | Duration | Outcome |
|-------|------|----------|---------|
| Phase 0 | Blockers Removed | 1–2 days | Page becomes server-renderable; FAQ visible in HTML |
| Phase 1 | Core AEO Fixes | 2–3 days | Meta fixed; distance consistent; Course schema added |
| Phase 2 | Content Enhancement | 2–3 days | Comparison content, new FAQs, snippet blocks |
| Phase 3 | Monitoring Setup | 1 day | GSC tracking, competitor watch, weekly review |

---

## Section 3: Phase 0 — Blockers Removed

These two issues must be fixed first. They block every other AEO optimization.

### Phase 0 Tasks

| Task | File | Lines | Action |
|------|------|-------|--------|
| P0-T1: Remove `"use client"` from page | `src/app/coimbatore/page.tsx` | Line 1 | Delete `"use client"` directive |
| P0-T2: Move `useState` to FAQSection only | `src/app/coimbatore/page.tsx` | Lines 1–3, 759 | Move `"use client"` directive into FAQSection; convert parent to Server Component |
| P0-T3: Verify Navbar/Footer are compatible | `src/components/layout/Navbar.tsx` | — | Navbar and Footer must be Client Components; LayoutWrapper handles this |
| P0-T4: Convert FAQ accordion to CSS | `src/app/coimbatore/page.tsx` | Lines 759–806 | Replace `useState` open/close with `<details>/<summary>` elements, or extract FAQSection to a separate `"use client"` child component |

**Recommended approach for P0-T4:** Extract `FAQSection` into a separate file `src/app/coimbatore/FAQSection.client.tsx` with `"use client"` at line 1. The parent `page.tsx` becomes a Server Component. This approach requires the least refactoring.

**Verification after Phase 0:** Run `curl -s https://ahs.jkkn.ac.in/coimbatore/ | grep -o "Why Coimbatore Students"` should return content (indicates server-side render). Alternatively, check "View Page Source" — H1 text should be visible without JavaScript.

---

## Section 4: Phase 1 — Core AEO Fixes

All fixes in this phase are non-content changes to existing elements.

### Phase 1 Tasks

| Task | File | Lines | Fix |
|------|------|-------|-----|
| P1-T1: Fix title tag | `src/app/coimbatore/layout.tsx` | Line 4 | Change to "Allied Health Sciences Colleges in Coimbatore \| JKKN" (52 chars) |
| P1-T2: Fix meta description | `src/app/coimbatore/layout.tsx` | Line 6 | Change to ≤155 char version (see SPEC Section 14.2) |
| P1-T3: Fix distance in FAQ answer 1 | `src/app/coimbatore/page.tsx` | Line 715 | "approximately 105 km" |
| P1-T4: Fix distance in FAQ answer 2 | `src/app/coimbatore/page.tsx` | Line 719 | "approximately 105 km" |
| P1-T5: Fix distance in HowToReachSection header | `src/app/coimbatore/page.tsx` | Line 521 | "105 km • 2–2.5 hours" |
| P1-T6: Fix distance in FAQ schema Q1 | `src/app/coimbatore/layout.tsx` | Line 63 | "approximately 105 km" |
| P1-T7: Fix distance in FAQ schema Q2 | `src/app/coimbatore/layout.tsx` | Line 71 | "approximately 105 km" |
| P1-T8: Fix cross-city distances | `src/app/coimbatore/page.tsx` | Lines 814–818 | Erode ~22 km, Salem ~58 km, Tiruppur ~67 km, Namakkal ~66 km |
| P1-T9: Add Course JSON-LD (9 blocks) | `src/app/coimbatore/layout.tsx` | After line 203 | Add 9 Course schema blocks (see SPEC Section 13.1) |
| P1-T10: Add HowTo schema | `src/app/coimbatore/layout.tsx` | After Course schema | Add HowTo schema (see SPEC Section 13.2) |

---

## Section 5: Phase 2 — Content Enhancement

Content additions that directly target AEO snippet positions and PAA boxes.

### Phase 2 Tasks

| Task | Section | What to Add | AEO Target |
|------|---------|-------------|-----------|
| P2-T1: Add snippet paragraph | New SnippetBlock above WhyChooseSection | 87-word paragraph with `.snippet-answer` class (see SPEC Section 9.1) | Featured snippet (paragraph) |
| P2-T2: Add comparison table | CompetitiveAdvantageSection | JKKN vs Coimbatore city colleges table (7 rows, see SPEC Section 9.3) | Featured snippet (table) / AI Overview |
| P2-T3: Add FAQ item — JKKN vs Kongunadu | FAQSection + layout.tsx FAQPage schema | Direct comparison FAQ (see SPEC Section 13.4 Item 12) | PAA box |
| P2-T4: Add FAQ item — How to travel from Coimbatore | FAQSection + layout.tsx FAQPage schema | Travel directions FAQ (see SPEC Section 13.4 Item 13) | PAA box / Voice search |
| P2-T5: Add FAQ item — Why 105 km worth it | FAQSection + layout.tsx FAQPage schema | Value proposition FAQ (see SPEC Section 13.4 Item 14) | PAA box |
| P2-T6: Add AI citation paragraph | CompetitiveAdvantageSection | 100-word entity-rich paragraph (see SPEC Section 11.3) with `id="coimbatore-answer"` | AI Overview citation |
| P2-T7: Add Coimbatore job market data | PlacementHighlights section | "Coimbatore has 280+ active healthcare jobs (LinkedIn 2026)" as context for placement value | Content authority |
| P2-T8: Rename duplicate section heading | CompetitiveAdvantageSection (`page.tsx` line 681) | Current: "Why Coimbatore Students Choose JKKN AHS" — rename to "JKKN vs Coimbatore City Colleges — A Direct Comparison" | Prevents duplicate H2 |

---

## Section 6: Phase 3 — Monitoring Setup

One-time setup tasks to track Coimbatore AEO performance.

### Phase 3 Tasks

| Task | Tool | Action |
|------|------|--------|
| P3-T1: GSC position filter | Google Search Console | Add filter for query "allied health sciences colleges in coimbatore" — track weekly |
| P3-T2: SERP manual check | Browser | Run 5 target queries weekly; log snippet presence in a tracking sheet |
| P3-T3: Competitor watch | WebFetch (monthly) | Fetch kongunadualliedsciences.com and snscahs.org monthly; note new content |
| P3-T4: Rich Results Test | Google Search Console | Test layout.tsx after all schema additions — validate all 6 schema blocks |
| P3-T5: Schema validation | Schema.org validator | Validate Course JSON-LD for all 9 programmes |

---

## Section 7: Success Metrics

| Metric | Baseline | 30-Day Target | 90-Day Target |
|--------|---------|--------------|--------------|
| AEO Readiness Score | 38/100 | 65/100 | 80/100 |
| Primary keyword position | [UNVERIFIED] | Position 3–5 | Position 1–3 |
| Featured snippets won | 0 | 1 (paragraph) | 2+ |
| PAA box appearances | 0 | 3+ | 6+ |
| FAQ schema items indexed | 0 (client-rendered) | 11 | 14 |
| Course schema blocks live | 0 | 9 | 9 |
| GSC clicks from Coimbatore queries | [BASELINE NEEDED] | +20% | +50% |

---

## Section 8: Dependency Map

```
Phase 0 (P0-T1 → P0-T4) — MUST complete before any other fix
    ↓
Phase 1 (P1-T1 through P1-T10) — run in parallel after Phase 0
    ↓
Phase 2 (P2-T1 through P2-T8) — content adds after technical fixes
    ↓                    ↓
Phase 3                  Verify with GSC + Rich Results Test
(monitoring setup)       after Phase 2 completes
```

**Critical path:** P0-T1/T2 (remove `"use client"`) → P0-T4 (FAQSection extract) → P1-T9/T10 (add Course + HowTo schema) → P2-T3/T4/T5 (add comparison FAQs)

**Do not:** Add FAQ schema items (P2-T3/T4/T5) before fixing the `"use client"` issue. New FAQ schema on a fully client-rendered page will still not be indexed in first-wave HTML.

---

*Companion files:*
- *Spec: `seo-audits/aeo/city-pages/coimbatore/AEO-COIMBATORE-SPEC.md`*
- *Tasks: `seo-audits/aeo/city-pages/coimbatore/AEO-COIMBATORE-DECOMPOSE.md`*
