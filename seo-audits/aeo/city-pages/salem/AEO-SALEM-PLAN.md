# AEO Implementation Plan — Salem City Page
# JKKN College of Allied Health Sciences

> **Document Type:** Implementation Plan
> **Site:** https://ahs.jkkn.ac.in/salem/
> **Primary Keyword:** allied health science courses in salem
> **Date:** 2026-03-28
> **AEO Score (Before):** 45/100
> **AEO Score (Target):** 82/100
> **Companion Spec:** `seo-audits/aeo/city-pages/salem/AEO-SALEM-SPEC.md`
> **Task Cards:** `seo-audits/aeo/city-pages/salem/AEO-SALEM-DECOMPOSE.md`

---

## 1. Executive Summary

The Salem city page requires fixes across three tiers before it can capture featured snippets or PAA appearances for "allied health science courses in salem". The page currently renders fully on the client side, displays wrong distance data (45 km instead of verified ~58 km), has an over-length title tag (72 chars vs 60-char limit), and is missing Course schema for all 9 programmes.

The biggest quick win is Tier 0: converting the FAQ section to server-rendered HTML immediately resolves the crawlability issue, fixes the speakable schema, and makes all 11 FAQ answers visible to Googlebot. Combined with distance and meta corrections, Tier 0 alone should move the AEO score from 45/100 to ~62/100 within 2 weeks of deployment.

**Total estimated implementation time:** 6–9 developer hours across all 3 tiers.

---

## 2. Implementation Tiers

### Tier 0 — Critical Fixes (Deploy First — Within 48 Hours)

These fixes are blockers. Nothing else should be deployed until Tier 0 is complete.

| # | Task ID | Fix | File | Estimated Time | AEO Impact |
|---|---------|-----|------|----------------|-----------|
| 1 | TASK-SALEM-01 | Convert `page.tsx` from full CSR to SSR — extract FAQ accordion state to a `"use client"` child component (`FAQAccordion.tsx`) | `src/app/salem/page.tsx` + new `FAQAccordion.tsx` | 2–3 hrs | +12 pts (crawlability) |
| 2 | TASK-SALEM-02 | Fix all 5 distance instances: 45 km → ~58 km, "40-50 km" → "~58 km", "1 hour" time is already correct | `src/app/salem/page.tsx` lines 94, 161, 219, 519, 718, 750 | 30 min | +5 pts (accuracy/trust) |
| 3 | TASK-SALEM-03 | Fix title tag: 72 chars → 50 chars | `src/app/salem/layout.tsx` line 4 | 10 min | +3 pts (SERP CTR) |
| 4 | TASK-SALEM-04 | Fix meta description: 158–190 chars → 153 chars | `src/app/salem/layout.tsx` lines 5–7 | 10 min | +2 pts (SERP CTR) |
| 5 | TASK-SALEM-05 | Fix cross-city distances in ExploreCitiesSection | `src/app/salem/page.tsx` lines 811–814 | 15 min | +2 pts (accuracy) |

**Tier 0 Total Time:** ~3.5 hours
**Tier 0 AEO Score Gain:** +24 points (45 → 69)

---

### Tier 1 — Schema and Snippet Content (Deploy Within 1 Week)

Deploy after Tier 0 is live and indexed.

| # | Task ID | Fix | File | Estimated Time | AEO Impact |
|---|---------|-----|------|----------------|-----------|
| 6 | TASK-SALEM-06 | Add Course JSON-LD schema for all 9 BSc programmes | `src/app/salem/layout.tsx` (after line 214) | 45 min | +6 pts (schema) |
| 7 | TASK-SALEM-07 | Add HowTo JSON-LD schema for admission process | `src/app/salem/layout.tsx` (after Course schema) | 20 min | +3 pts (schema) |
| 8 | TASK-SALEM-08 | Add paragraph snippet block (Format 1) before DistanceCard | `src/app/salem/page.tsx` (after AffiliationBar, before DistanceCard) | 30 min | +4 pts (snippet) |
| 9 | TASK-SALEM-09 | Enhance WhyChooseSection with bulleted list snippet (Format 2) | `src/app/salem/page.tsx` lines 189–254 | 30 min | +3 pts (snippet) |
| 10 | TASK-SALEM-10 | Add numbered HowTo snippet block to HowToReachSection (Format 3) | `src/app/salem/page.tsx` lines 472–546 | 20 min | +2 pts (snippet) |

**Tier 1 Total Time:** ~2.5 hours
**Tier 1 AEO Score Gain:** +18 points (69 → 87 approximate, target 82)

---

### Tier 2 — PAA, AI Overview, Voice (Deploy Within 2 Weeks)

Deploy after Tier 1 schema is validated and Googlebot has re-crawled.

| # | Task ID | Fix | File | Estimated Time | AEO Impact |
|---|---------|-----|------|----------------|-----------|
| 11 | TASK-SALEM-11 | Add 5 Salem-specific FAQ items (steel city jobs, govt hospital, Salem vs Chennai, bus routes, NEET) | `src/app/salem/page.tsx` lines 711+ | 45 min | +6 pts (PAA) |
| 12 | TASK-SALEM-12 | Sync FAQPage schema with new 16-question FAQ (add 5 new entries) | `src/app/salem/layout.tsx` lines 53–146 | 30 min | +3 pts (schema accuracy) |
| 13 | TASK-SALEM-13 | Add AI Overview citability blocks (5 static blocks above fold) | `src/app/salem/page.tsx` (add after HeroSection) | 45 min | +4 pts (AI visibility) |
| 14 | TASK-SALEM-14 | Add cross-city internal links with corrected distances to all 4 city pages | `src/app/salem/page.tsx` lines 811–814 | 20 min | +2 pts (internal linking) |

**Tier 2 Total Time:** ~2.5 hours
**Tier 2 AEO Score Gain:** +15 points (82 → 97 upper bound, target 82)

---

## 3. Dependency Map

```
Tier 0 (Must deploy first — blockers)
├── TASK-SALEM-01 [CSR→SSR fix]
│   └── Blocks: All Tier 1 and Tier 2 tasks (speakable, FAQ schema must work in HTML first)
├── TASK-SALEM-02 [Distance fix]
│   └── Blocks: TASK-SALEM-08 (snippet block must use correct distance)
│   └── Blocks: TASK-SALEM-11 (new FAQs must reference correct distance)
├── TASK-SALEM-03 [Title fix]
│   └── No downstream dependencies
├── TASK-SALEM-04 [Meta fix]
│   └── No downstream dependencies
└── TASK-SALEM-05 [Cross-city distance fix]
    └── Blocks: TASK-SALEM-14 (internal links must have correct distances)

Tier 1 (After Tier 0 deployed and live)
├── TASK-SALEM-06 [Course schema]
│   └── Requires: TASK-SALEM-01 complete (page must be SSR before schema testing)
├── TASK-SALEM-07 [HowTo schema]
│   └── Requires: TASK-SALEM-01 complete
├── TASK-SALEM-08 [Paragraph snippet]
│   └── Requires: TASK-SALEM-02 complete (must use corrected distance)
├── TASK-SALEM-09 [List snippet]
│   └── Requires: TASK-SALEM-02 complete
└── TASK-SALEM-10 [HowTo snippet]
    └── Requires: TASK-SALEM-02 complete

Tier 2 (After Tier 1 live and validated)
├── TASK-SALEM-11 [5 new FAQs]
│   └── Requires: TASK-SALEM-01 (SSR), TASK-SALEM-02 (distance), TASK-SALEM-06 (Course schema context)
├── TASK-SALEM-12 [FAQPage schema sync]
│   └── Requires: TASK-SALEM-11 (must have final FAQ list to sync)
├── TASK-SALEM-13 [AI citability blocks]
│   └── Requires: TASK-SALEM-08 (paragraph snippet first, citability blocks are extensions)
└── TASK-SALEM-14 [Cross-city links with correct distances]
    └── Requires: TASK-SALEM-05 (distances verified)
```

---

## 4. Files Modified

| File | Tasks | Type of Change |
|------|-------|----------------|
| `src/app/salem/page.tsx` | TASK-01, TASK-02, TASK-05, TASK-08, TASK-09, TASK-10, TASK-11, TASK-13, TASK-14 | Multiple edits — architectural change (CSR→SSR) + content |
| `src/app/salem/layout.tsx` | TASK-03, TASK-04, TASK-06, TASK-07, TASK-12 | Schema + meta additions |
| `src/app/salem/FAQAccordion.tsx` | TASK-01 | New file — extracted client component |

**Files NOT modified (protected):**
- `src/app/globals.css` — No changes
- `src/components/layout/Navbar.tsx` — No changes
- `src/components/layout/Footer.tsx` — No changes
- `tailwind.config.ts` — No changes
- Any other city page files — Salem fixes are isolated

---

## 5. Word Count Impact

| Version | Estimated Word Count | AEO-Indexed Words |
|---------|---------------------|-------------------|
| Before (current) | ~3,300 | ~1,200 (FAQ answers JS-gated) |
| After Tier 0 | ~3,300 | ~3,300 (all content server-rendered) |
| After Tier 1 | ~3,600 | ~3,600 (+ 3 snippet blocks) |
| After Tier 2 | ~4,000 | ~4,000 (+ 5 new FAQs + citability blocks) |

**Key finding:** Tier 0 alone increases AEO-indexed word count from ~1,200 to ~3,300 by removing the JavaScript gate from FAQ answers — a 175% increase in crawlable content with zero new writing.

---

## 6. Testing Checklist

### Tier 0 Verification (Before Declaring Tier 0 Complete)

- [ ] View Source on https://ahs.jkkn.ac.in/salem/ — confirm FAQ answer text visible in raw HTML (not just question text)
- [ ] Count "58" occurrences in page source — should appear in all distance contexts
- [ ] Count "45km" or "45 km" in page source — should be 0
- [ ] Title tag in View Source = "Allied Health Science Courses in Salem | JKKN AHS" (50 chars)
- [ ] Meta description in View Source starts with "9 BSc Allied Health Science courses ~58 km"
- [ ] Meta description length = 153 chars (count in browser DevTools)
- [ ] Cross-city distance for Erode shows "~22 km", Tiruppur "~67 km", Namakkal "~66 km", Coimbatore "~105 km"
- [ ] FAQ accordion still works (open/close) on desktop and mobile
- [ ] No React hydration errors in browser console
- [ ] Mobile viewport (375px) renders correctly — FAQ buttons accessible, no layout shift

### Tier 1 Verification

- [ ] JSON-LD schema visible in View Source after layout.tsx changes
- [ ] Schema validated at https://validator.schema.org/ — no errors for Course, HowTo, FAQPage, BreadcrumbList
- [ ] Google Rich Results Test passes for FAQPage and Course schemas
- [ ] Snippet blocks appear correctly at desktop (1280px) and mobile (375px)
- [ ] `.snippet-answer` CSS class applied to all 3 snippet format blocks
- [ ] No layout shift introduced by new snippet blocks (check CLS in Chrome DevTools)

### Tier 2 Verification

- [ ] 5 new FAQ items appear in page HTML (View Source)
- [ ] FAQPage schema in layout.tsx has exactly 16 items (11 original + 5 new)
- [ ] Schema count: 6 blocks total (Breadcrumb, FAQPage, EducationalOrg, Speakable, Course ItemList, HowTo)
- [ ] AI citability blocks appear above the fold on mobile (above DistanceCard)
- [ ] Cross-city links navigate correctly to /erode/, /namakkal/, /tiruppur/, /coimbatore/
- [ ] Submit URL to GSC URL Inspection → request re-indexing after each tier deployment

---

## 7. Monitoring Plan

| Timeline | Action | Tool | KPI |
|----------|--------|------|-----|
| Day 1 (after Tier 0) | URL Inspection in GSC — request re-crawl | Google Search Console | Crawl status |
| Day 3–5 | Check if FAQ answers appear in GSC page content | GSC → Pages → Inspect URL | Content indexed |
| Week 1 end | Rich Results Test for FAQPage schema | Google Rich Results Test | Pass/Fail |
| Week 2 | Check SERP for "how far is JKKN from Salem" PAA appearance | Manual SERP observation | PAA visibility |
| Week 2 | GSC Impressions for /salem/ | GSC Performance report | Impression trend |
| Week 3 | Check featured snippet for "allied health science courses in salem" | Manual SERP | Snippet position |
| Month 1 | Pull full GSC report for /salem/ page — clicks, impressions, CTR, average position | GSC | All KPIs |
| Month 2–3 | Monitor competitor FAHS Salem for schema changes | Manual SERP check | Competitor counter-moves |

---

## 8. Success Metrics

### AEO Score Targets

| Dimension | Before | After Tier 0 | After Tier 1 | After Tier 2 |
|-----------|--------|-------------|-------------|-------------|
| Crawlability | 25 | 80 | 80 | 85 |
| Snippet Format Content | 55 | 60 | 80 | 88 |
| FAQ Coverage | 50 | 65 | 70 | 90 |
| Schema Completeness | 40 | 50 | 80 | 88 |
| Keyword Coverage | 50 | 55 | 65 | 82 |
| Meta Optimization | 55 | 90 | 90 | 90 |
| **Weighted Overall** | **45/100** | **66/100** | **77/100** | **87/100** |

### Business Outcome Targets

| Metric | Before | Month 1 Target | Month 3 Target |
|--------|--------|----------------|----------------|
| SERP position for primary KW | ~2 | Top 2 | Top 1 or featured snippet |
| Featured snippets (salem queries) | 0 | 1 | 3 |
| PAA appearances | 0 | 3 | 8 |
| Organic clicks to /salem/ per month | [GSC baseline needed] | +30% | +80% |
| Enquiries from Salem region | [CRM baseline needed] | +15% | +40% |

---

*Document: AEO-SALEM-PLAN.md | Version: 1.0 | Date: 2026-03-28*
