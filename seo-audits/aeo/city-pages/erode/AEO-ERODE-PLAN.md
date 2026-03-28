# AEO Erode City Page — Implementation Plan

> **Document Type:** AEO Implementation Plan
> **Site:** https://ahs.jkkn.ac.in/erode/
> **Institution:** JKKN College of Allied Health Sciences
> **Primary Keyword:** allied health science colleges in erode
> **Date:** 2026-03-28
> **Companion Files:** `AEO-ERODE-SPEC.md` | `AEO-ERODE-DECOMPOSE.md`

---

## 1. Executive Summary

The Erode city page has an AEO Readiness Score of **27/100** — the lowest possible gate (Gate D: Critical Rebuild Required). The root cause is a single architectural decision: the `"use client"` directive on line 1 of `page.tsx` makes the entire 857-line page client-side rendered. Googlebot receives an essentially empty HTML shell, making ~96% of the page content invisible to search engines and AI crawlers.

**The entire optimization depends on fixing CSR first.** All other improvements (snippet blocks, new FAQs, schema additions) are worthless without server-rendered HTML that crawlers can read.

**Estimated total implementation time:** 8-12 hours across 3 tiers.

**Expected score improvement:** 27/100 → 78/100 after all tiers complete.

**Revenue impact:** Erode is JKKN AHS's highest-traffic city query. Capturing the featured snippet for "allied health science colleges in erode" is estimated to increase organic CTR from ~3% (position 2) to ~8-12% (featured snippet position 0). With monthly search volume of 800-1,200, this represents approximately 60-120 additional monthly clicks from the primary keyword alone.

---

## 2. Implementation Tiers

### Tier 0 — Critical Fixes (Complete FIRST — No AEO Value Without These)

> Estimated time: 3-4 hours | Risk: Medium (requires careful React architecture change)

| Task ID | Task | File | Impact |
|---------|------|------|--------|
| TASK-ERODE-01 | Remove `"use client"` — migrate to server component | page.tsx | CRITICAL — unlocks all crawler access |
| TASK-ERODE-02 | Extract FAQ accordion to `FAQAccordion.client.tsx` | New file | Required for Tier 0.01 |
| TASK-ERODE-03 | Fix all distance data (30-40 km → ~22 km) | page.tsx (11 locations) | HIGH — accuracy fix |
| TASK-ERODE-04 | Fix meta title (74 chars → 52 chars) | layout.tsx line 4 | HIGH — SERP display |
| TASK-ERODE-05 | Fix meta description (189 chars → 129 chars, fix distance) | layout.tsx lines 5-7 | HIGH — SERP display |
| TASK-ERODE-06 | Fix cross-city distances in ExploreCitiesSection | page.tsx lines 813-818 | MEDIUM — data accuracy |

### Tier 1 — High-Impact AEO Additions (After Tier 0 Complete)

> Estimated time: 3-4 hours | Risk: Low (additive changes only)

| Task ID | Task | File | Impact |
|---------|------|------|--------|
| TASK-ERODE-07 | Add paragraph snippet block (57-word answer) | page.tsx — after HeroSection | HIGH — featured snippet capture |
| TASK-ERODE-08 | Add Course schema (9 programmes) | layout.tsx — new JSON-LD block | HIGH — rich results |
| TASK-ERODE-09 | Add HowTo schema (admission steps) | layout.tsx — new JSON-LD block | MEDIUM — how-to rich result |
| TASK-ERODE-10 | Fix FAQ schema distance values in layout.tsx | layout.tsx lines 71, 72, 103 | HIGH — schema accuracy |
| TASK-ERODE-11 | Fix Speakable schema selectors | layout.tsx lines 205-213 | MEDIUM — voice search |
| TASK-ERODE-12 | Add 5 new Erode-specific FAQs to page.tsx | page.tsx — FAQSection | HIGH — PAA coverage |
| TASK-ERODE-13 | Add 5 new FAQs to FAQPage schema in layout.tsx | layout.tsx — faqSchema | HIGH — schema completeness |

### Tier 2 — Depth Improvements (After Tier 1 Complete)

> Estimated time: 2-4 hours | Risk: Low

| Task ID | Task | File | Impact |
|---------|------|------|--------|
| TASK-ERODE-14 | Add AI Overview citability blocks (static paragraphs) | page.tsx | MEDIUM — AI platform coverage |
| TASK-ERODE-15 | Add voice search conversational answer blocks | page.tsx | MEDIUM — voice search |
| TASK-ERODE-16 | Replace generic BPT FAQ with JKKN-programme FAQ | page.tsx, layout.tsx | LOW — relevance improvement |
| TASK-ERODE-17 | Add `dateModified` to WebPage schema | layout.tsx | LOW — freshness signal |
| TASK-ERODE-18 | Add internal links to /contact and /blog | page.tsx | LOW — link equity |

---

## 3. Dependency Map

```
TASK-ERODE-01 (Remove "use client")
    └── TASK-ERODE-02 (Extract FAQAccordion client component)
            ├── TASK-ERODE-12 (Add 5 new FAQs to page.tsx)
            └── TASK-ERODE-11 (Fix Speakable schema)

TASK-ERODE-03 (Fix distances in page.tsx)
    └── TASK-ERODE-10 (Fix distances in FAQ schema — layout.tsx)

TASK-ERODE-04 (Fix meta title) ─── Independent
TASK-ERODE-05 (Fix meta description) ─── Independent
TASK-ERODE-06 (Fix cross-city distances) ─── Independent

───── TIER 0 COMPLETE ─────

TASK-ERODE-07 (Add snippet block) ─── After Tier 0
TASK-ERODE-08 (Course schema) ─── After Tier 0
TASK-ERODE-09 (HowTo schema) ─── After Tier 0
TASK-ERODE-13 (FAQ schema additions) ─── After TASK-ERODE-12

───── TIER 1 COMPLETE ─────

TASK-ERODE-14 (AI citability blocks) ─── After Tier 1
TASK-ERODE-15 (Voice search blocks) ─── After Tier 1
TASK-ERODE-16 (Replace BPT FAQ) ─── After TASK-ERODE-12
TASK-ERODE-17 (dateModified) ─── After Tier 0
TASK-ERODE-18 (Internal links) ─── After Tier 1
```

**Critical path:** TASK-ERODE-01 → TASK-ERODE-02 → All other tasks

---

## 4. Files Modified

| File | Tasks | Type of Change | Risk |
|------|-------|---------------|------|
| `src/app/erode/page.tsx` | 01, 02, 03, 06, 07, 12, 14, 15, 16, 18 | Remove `"use client"`, fix data, add content | MEDIUM |
| `src/app/erode/layout.tsx` | 04, 05, 08, 09, 10, 11, 13, 17 | Fix metadata, add schema blocks | LOW |
| `src/app/erode/FAQAccordion.client.tsx` | 02 | New file — client component for accordion | LOW |

**Total files affected: 3** (2 existing + 1 new)

**Files NOT touched:** `globals.css`, `layout.tsx` (root), `Navbar.tsx`, `Footer.tsx`, `tailwind.config.ts`

---

## 5. Word Count Impact

| Section | Before (Crawlable) | After (Crawlable) | Change |
|---------|-------------------|-------------------|--------|
| Hero section | 0 (CSR) | ~120 words | +120 |
| Snippet block (new) | 0 | ~80 words | +80 |
| AffiliationBar | 0 (CSR) | ~20 words | +20 |
| DistanceCard | 0 (CSR) | ~30 words | +30 |
| WhyChooseSection | 0 (CSR) | ~150 words | +150 |
| ProgrammesSection | 0 (CSR) | ~500 words | +500 |
| PlacementHighlights | 0 (CSR) | ~100 words | +100 |
| CompetitiveAdvantageSection | 0 (CSR) | ~250 words | +250 |
| HowToReachSection | 0 (CSR) | ~120 words | +120 |
| FacilitiesSection | 0 (CSR) | ~100 words | +100 |
| FAQSection (questions) | ~100 (visible) | ~200 words | +100 |
| FAQSection (answers — existing 11) | ~50 (1 answer only) | ~1,100 words | +1,050 |
| FAQSection (answers — 5 new) | 0 | ~600 words | +600 |
| ExploreCitiesSection | 0 (CSR) | ~50 words | +50 |
| AI citability blocks (new) | 0 | ~200 words | +200 |
| **Total** | **~150 words** | **~3,420 words** | **+3,270** |

**Crawlable content increase: 22x improvement (150 → 3,420 words)**

---

## 6. Testing Checklist

> Run after completing each tier. Do not proceed to next tier until all checks pass.

### After Tier 0

- [ ] `View Source` of `/erode/` in browser — confirm full HTML content visible (not just Next.js shell)
- [ ] Google Rich Results Test (https://search.google.com/test/rich-results) — test `/erode/` URL — FAQPage schema should show 11 detected FAQs
- [ ] Schema.org Validator — validate all 4 schema blocks (BreadcrumbList, FAQPage, EducationalOrganization, WebPage+Speakable)
- [ ] Meta title confirmed as "Allied Health Science Colleges in Erode | JKKN AHS" (52 chars) — check in browser tab and View Source
- [ ] Meta description confirmed at 129 chars — check View Source
- [ ] Distance "~22 km" appears in all relevant locations — grep for "30-40" and "35 km" to verify no stale values remain
- [ ] FAQ accordion still works on mobile and desktop (interactive test with FAQAccordion.client.tsx)
- [ ] No React hydration errors in browser console
- [ ] All 4 cross-city links work (/namakkal, /salem, /tiruppur, /coimbatore)

### After Tier 1

- [ ] Course schema valid — Rich Results Test shows ItemList with 9 Course items
- [ ] HowTo schema valid — Rich Results Test shows HowTo with 5 steps
- [ ] 5 new FAQs visible in HTML source
- [ ] FAQPage schema updated to 16 items total
- [ ] Snippet block visible in HTML (test with `curl https://ahs.jkkn.ac.in/erode/ | grep "snippet-answer"`)
- [ ] Speakable schema selectors updated — verify `.aeo-answer` class on snippet block

### After Tier 2

- [ ] AI citability blocks present in HTML — no JS-gating
- [ ] BPT FAQ replaced or updated to not mislead visitors
- [ ] `dateModified` present in WebPage schema
- [ ] Internal links to /contact and /blog added and functional
- [ ] Final word count estimate: run character/word count on rendered HTML

---

## 7. Monitoring Plan

| Timeframe | Action | Tool | Success Metric |
|-----------|--------|------|---------------|
| Day 1 | Submit erode URL to GSC for indexing | GSC URL Inspection | Status changes to "Indexed" |
| Day 3-7 | Check GSC coverage for erode page | GSC Coverage Report | No new errors; page indexed |
| Week 2 | Monitor keyword position | GSC Performance | Position improvement for primary keyword |
| Week 2-3 | Check for featured snippet | Manual incognito search | JKKN appears in snippet position |
| Month 1 | Full GSC performance review | GSC Performance Report | CTR increase vs pre-optimization baseline |
| Month 2 | Re-run AEO Readiness Score | Manual audit | Score ≥70/100 |
| Month 3 | Target score check | Manual audit | Score ≥78/100 |

---

## 8. Success Metrics

| Metric | Before | Target (Month 1) | Target (Month 3) |
|--------|--------|-----------------|-----------------|
| AEO Readiness Score | 27/100 | 65/100 | 78/100 |
| Primary keyword ranking | #2 | #1-2 | #1 (featured snippet) |
| Featured snippets | 0 | 1 | 3 |
| PAA questions covered | 3-4 | 10 | 18+ |
| Crawlable word count | ~150 | ~3,420 | ~3,420+ |
| FAQ schema items | 11 (broken) | 16 (fixed) | 16 |
| Schema types active | 4 (partial) | 6 (all working) | 6+ |
| AI Overview citations | 0 | 0-1 (early signal) | 1-2 |
| Organic clicks (erode page) | Baseline [UNVERIFIED — GSC required] | +30% | +60% |
| Bounce rate (estimate) | [UNVERIFIED — GA4 required] | Stable | -10% |

---

*Document version: 1.0 | Created: 2026-03-28 | Next review: 2026-04-14*
