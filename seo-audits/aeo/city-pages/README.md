# AEO Optimization — 5 City Pages (JKKN AHS)

> **Generated:** 2026-03-28
> **Target:** https://ahs.jkkn.ac.in/{erode,salem,tiruppur,namakkal,coimbatore}/
> **Total Files:** 15 deliverables + 1 README = 16 files
> **Total Lines:** ~10,200 across all deliverables

---

## Executive Summary

Five city-specific landing pages for JKKN College of Allied Health Sciences were audited for AEO (Answer Engine Optimization) readiness. All five pages share a **critical architectural flaw** — the entire page is client-rendered via `"use client"`, making ~96% of content invisible to Googlebot's first-pass indexer. Combined with JS-gated FAQ accordions, missing Course schema, and inaccurate distance data, the pages score **27–45/100** on AEO readiness.

**The featured snippet position is VACANT for all 5 primary keywords** — no competitor currently holds it. This is a rare opportunity to capture snippets across all 5 city SERPs simultaneously with a single architectural fix (server component migration) plus targeted snippet-bait content blocks.

---

## Cross-City Summary

| City | Keyword | Distance | AEO Score (Before) | AEO Score (Target) | Gate | Top Competitor | Tasks |
|------|---------|----------|--------------------|--------------------|------|----------------|-------|
| **Erode** | allied health science colleges in erode | ~22 km | 27/100 | 78/100 | D — Full Rebuild | Nandha College of AHS | 18 |
| **Salem** | allied health science courses in salem | ~58 km | 45/100 | 87/100 | C — Rebuild Sections | FAHS Salem (VMRF) | 14 |
| **Tiruppur** | allied health sciences colleges in tiruppur | ~67 km | 38/100 | 79/100 | C — Rebuild Sections | AMC College of AHS | ~20 |
| **Namakkal** | allied health science college namakkal | ~66 km (town) | 38/100 | 78/100 | C — Rebuild Sections | Vivekanandha / Paavai | 16 |
| **Coimbatore** | allied health sciences colleges in coimbatore | ~105 km | 38/100 | 78/100 | C — Rebuild Sections | Kongunadu / SNS / PPG | 23 |

---

## File Index

### Erode (`seo-audits/aeo/city-pages/erode/`)

| File | Lines | Purpose |
|------|-------|---------|
| `AEO-ERODE-SPEC.md` | 1,162 | Full 18-section AEO strategy specification |
| `AEO-ERODE-PLAN.md` | 209 | 3-tier implementation roadmap |
| `AEO-ERODE-DECOMPOSE.md` | 1,407 | 18 atomic task cards with exact code |

### Salem (`seo-audits/aeo/city-pages/salem/`)

| File | Lines | Purpose |
|------|-------|---------|
| `AEO-SALEM-SPEC.md` | 814 | Full 18-section AEO strategy specification |
| `AEO-SALEM-PLAN.md` | 224 | 3-tier implementation roadmap |
| `AEO-SALEM-DECOMPOSE.md` | 684 | 14 atomic task cards with exact code |

### Tiruppur (`seo-audits/aeo/city-pages/tiruppur/`)

| File | Lines | Purpose |
|------|-------|---------|
| `AEO-TIRUPPUR-SPEC.md` | 829 | Full 18-section AEO strategy specification |
| `AEO-TIRUPPUR-PLAN.md` | 188 | 3-tier implementation roadmap |
| `AEO-TIRUPPUR-DECOMPOSE.md` | 964 | ~20 atomic task cards with exact code |

### Namakkal (`seo-audits/aeo/city-pages/namakkal/`)

| File | Lines | Purpose |
|------|-------|---------|
| `AEO-NAMAKKAL-SPEC.md` | 827 | Full 18-section AEO strategy specification |
| `AEO-NAMAKKAL-PLAN.md` | 295 | 3-tier implementation roadmap |
| `AEO-NAMAKKAL-DECOMPOSE.md` | 954 | 16 atomic task cards with exact code |

### Coimbatore (`seo-audits/aeo/city-pages/coimbatore/`)

| File | Lines | Purpose |
|------|-------|---------|
| `AEO-COIMBATORE-SPEC.md` | 848 | Full 18-section AEO strategy specification |
| `AEO-COIMBATORE-PLAN.md` | 156 | 3-tier implementation roadmap |
| `AEO-COIMBATORE-DECOMPOSE.md` | 632 | 23 atomic task cards with exact code |

---

## Critical Issues (Shared Across All 5 Pages)

| # | Issue | Severity | Impact | Resolution |
|---|-------|----------|--------|-----------|
| 1 | `"use client"` on page.tsx line 1 | CRITICAL | Entire page client-rendered — Googlebot cannot extract snippet content from initial HTML | Server component migration: extract interactive parts (FAQ accordion, gallery) into `.client.tsx` files |
| 2 | FAQ accordion JS-gated | CRITICAL | 11 FAQ answers invisible to crawlers — `useState` conditional render hides closed answers | CSS-only `<details>`/`<summary>` or `hidden` class pattern — answers always in DOM |
| 3 | No Course schema | HIGH | Zero rich result eligibility for 9 BSc programmes | Add Course JSON-LD for all 9 programmes in layout.tsx |
| 4 | Speakable targets JS-gated content | HIGH | Voice search cannot extract speakable content | Fix speakable CSS selectors after server component migration |
| 5 | Title tags over 60 chars | MEDIUM | SERP truncation on 4/5 pages (Erode 74, Salem 72, Tiruppur 76, Namakkal 74, Coimbatore 75) | Shorten to ≤60 chars — remove "— Admissions 2026-27" suffix |

---

## Distance Data Corrections Required

| City Page | Current (Wrong) | Verified (Correct) | Source |
|-----------|----------------|--------------------|--------|
| Erode | 30-40 km (7 locations) | ~22 km, 35-40 min | MEMORY.md verified |
| Salem | 40-50 km / 45 km (5+ locations) | ~58 km, 1 hr | MEMORY.md verified |
| Tiruppur | 80-90 km / 85 km (6+ locations) | ~67 km, 1.5 hrs | MEMORY.md verified |
| Namakkal | Varies — town vs district confusion | ~66 km to town; campus IN district | MEMORY.md verified |
| Coimbatore | 100-110 km (7 locations) | ~105 km, 2-2.5 hrs | MEMORY.md verified |

**Cross-city distance errors in ExploreCitiesSection:** Every city page's "Explore Other Cities" section shows wrong distances for the other 4 cities. All must be corrected per the verified values above.

---

## Unique FAQ Themes Per City (No Duplicates)

| City | Unique Theme 1 | Unique Theme 2 | Unique Theme 3 |
|------|---------------|----------------|----------------|
| **Erode** | Textile industry healthcare careers | Daily commute viability (22 km) | Erode vs Coimbatore for AHS |
| **Salem** | Steel city medical/manufacturing jobs | Government hospital training | Salem vs Chennai value comparison |
| **Tiruppur** | Garment industry healthcare demand | Weekend commute + hostel pattern | JKKN vs AMC local comparison |
| **Namakkal** | NH-544 transport hub access | District domicile/quota benefits | Walking distance local access |
| **Coimbatore** | Medical hub job market | Why JKKN over city colleges | Airport for international placements |

---

## Implementation Priority

### Tier 0 — CRITICAL (Do First, All Cities)

These changes are **blocking** — no other AEO improvement works until these are done.

1. **Server component migration** — Remove `"use client"` from page.tsx, extract FAQ and gallery into client component islands
2. **FAQ rendering fix** — Make all FAQ answers present in initial HTML (CSS-only accordion)
3. **Distance corrections** — Fix all wrong distances across all 5 pages + ExploreCitiesSection cross-references
4. **Meta tag optimization** — Shorten titles to ≤60 chars, descriptions to ≤155 chars

### Tier 1 — HIGH (Week 1)

5. **Snippet-bait content blocks** — Add paragraph, list, and table snippets per city
6. **Course schema** — Add 9 Course JSON-LD blocks to each layout.tsx
7. **HowTo schema** — Add admission process schema
8. **Speakable fix** — Update selectors after server component migration

### Tier 2 — DEPTH (Week 2-3)

9. **New city-specific FAQs** — 3-5 unique FAQs per city using themes above
10. **AI Overview content blocks** — Citability-optimized paragraphs
11. **Cross-city links** — Each page links to the other 4
12. **Voice search content** — Conversational query optimization

---

## Competitor Landscape

| City | Primary Competitors | Competitive Intensity |
|------|--------------------|-----------------------|
| **Erode** | Nandha College of AHS (10 programs, IN Erode) | MEDIUM — 1 direct competitor |
| **Salem** | FAHS/VMRF (14 UG + 13 PG, deemed university) | HIGH — strong competitor with more programs |
| **Tiruppur** | AMC College of AHS (4 programs) | LOW — limited competitor with fewer programs |
| **Namakkal** | Vivekanandha, Paavai (indirect) | LOW — JKKN dominates district |
| **Coimbatore** | Kongunadu, SNS, PPG, Muthu, SMCH (5+ colleges) | VERY HIGH — most competitive market |

---

## Monitoring Cadence

| City | Recommended Frequency | Reason |
|------|----------------------|--------|
| Erode | Weekly (first month), then biweekly | Close competitor, snippet opportunity |
| Salem | Weekly (first month), then monthly | Strong competitor (VMRF) |
| Tiruppur | Biweekly | Lower competition |
| Namakkal | Monthly | JKKN dominates |
| Coimbatore | Weekly (ongoing) | 5+ competitors, highest volatility |

---

## Quality Verification Checklist

- [x] All 15 deliverable files exist and are non-empty
- [x] AEO scores within reasonable range (27–45 baseline)
- [x] FAQ questions genuinely different per city (unique themes verified)
- [x] Cross-city links reference other 4 cities in each SPEC
- [x] Distance data uses VERIFIED values from MEMORY.md
- [x] Title tags ≤60 chars proposed for all 5 pages
- [x] No Tanglish in deliverable content
- [x] DECOMPOSE files have task IDs with dependency chains
- [x] All stats tagged with confidence levels
- [x] Schema additions consistent (all 5 get Course + HowTo)

---

## Related Files

| File | Purpose |
|------|---------|
| `seo-audits/aeo/AEO-HOMEPAGE-SPEC.md` | Homepage AEO spec (template reference) |
| `seo-audits/aeo/AEO-HOMEPAGE-PLAN.md` | Homepage AEO plan (template reference) |
| `seo-audits/aeo/AEO-HOMEPAGE-DECOMPOSE.md` | Homepage AEO decompose (template reference) |
| `src/app/{city}/page.tsx` | City page source code (~855 lines each) |
| `src/app/{city}/layout.tsx` | City page metadata + schema (242 lines each) |
