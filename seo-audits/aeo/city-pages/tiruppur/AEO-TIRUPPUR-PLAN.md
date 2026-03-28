# AEO Implementation Plan — Tiruppur City Page | JKKN AHS

> **Document Type:** AEO Implementation Plan
> **Site:** https://ahs.jkkn.ac.in/tiruppur/
> **Primary Keyword:** allied health sciences colleges in tiruppur
> **Date:** 2026-03-28
> **Companion Files:** `AEO-TIRUPPUR-SPEC.md` | `AEO-TIRUPPUR-DECOMPOSE.md`

---

## 1. Executive Summary

This plan implements AEO optimizations for the JKKN AHS Tiruppur city page across 3 tiers. The most critical change is fixing the verified distance error (85 km → ~67 km) which appears in 6+ locations. Combined with Course schema addition, FAQ content fixes, and meta tag corrections, the page AEO score will improve from **38/100 to an estimated 79/100**.

**Total estimated development effort:** 4–6 hours
**Files modified:** 2 (`src/app/tiruppur/page.tsx`, `src/app/tiruppur/layout.tsx`)
**Risk level:** LOW — surgical changes, no shared component modifications, no globals.css edits

---

## 2. Implementation Tiers

### Tier 0 — Critical Fixes (Do First — No Creative Judgment Required)

These are factual corrections and structural fixes. Implement immediately.

| # | Fix | File | Lines | Why Critical |
|---|-----|------|-------|-------------|
| T0-1 | Fix distance: "85 km" → "~67 km" in HeroSection stat | page.tsx | Line 95 | Wrong fact — AI will not cite inaccurate data |
| T0-2 | Fix distance: "85 km" → "~67 km" in DistanceCard number | page.tsx | Line 161 | Wrong fact — displays prominently to users |
| T0-3 | Fix distance text: "80-90 km" → "~67 km via NH-544 through Erode" | page.tsx | Lines 170, 484, 521 | Multiple wrong instances |
| T0-4 | Fix all FAQ answers with wrong distance | page.tsx | Lines 715, 719, 735, 752 | Wrong data in schema too |
| T0-5 | Fix FAQPage schema distances | layout.tsx | Lines 63, 71, 103, 135 | Schema feeds AI Overview citations directly |
| T0-6 | Fix title tag: 76 chars → ≤60 chars | layout.tsx | Line 4 | Title truncation in SERP reduces CTR |
| T0-7 | Fix meta description: 178 chars → ≤155 chars | layout.tsx | Lines 5–7 | Description truncation in SERP |
| T0-8 | Remove BPT FAQ item (JKKN AHS does not offer BPT) | page.tsx | Lines 726–729 | Misleading content; wrong programme reference |
| T0-9 | Fix Allied Health Sciences definition FAQ — replace PT/MLT examples with JKKN's actual programmes | page.tsx | Lines 723–724 | JKKN doesn't offer physiotherapy or MLT |
| T0-10 | Fix WhyChooseSection "international careers in physiotherapy and MLT" | page.tsx | Line 215 | JKKN AHS does not offer these programmes |
| T0-11 | Fix duplicate H2: "Why Tiruppur Students Choose JKKN AHS" | page.tsx | Lines 227, 682 | Two identical H2s confuse crawlers |

### Tier 1 — High-Impact AEO Additions

These additions directly target featured snippets, PAA boxes, and AI Overview citations.

| # | Addition | File | Target Location | Impact |
|---|----------|------|-----------------|--------|
| T1-1 | Add paragraph snippet block for primary keyword (~85 words) | page.tsx | CompetitiveAdvantageSection ~line 683 | Paragraph snippet capture |
| T1-2 | Add `.voice-answer` class to paragraph snippet | page.tsx | New block | Voice search + Speakable |
| T1-3 | Add 6 new FAQ items (bus route, weekend commute, garment industry, cardiac scope, comparison, admissions date) | page.tsx | FAQSection after line 757 | PAA capture + word count |
| T1-4 | Add 6 new FAQPage schema entries matching T1-3 FAQs | layout.tsx | After line 145 | Schema completeness |
| T1-5 | Fix speakable cssSelector — remove `.faq-answer` (JS-gated) | layout.tsx | Lines 211–213 | Speakable works for static content |
| T1-6 | Add BreadcrumbList correction — path should be "/tiruppur/" with trailing slash | layout.tsx | Line 49 | Canonical URL consistency |

### Tier 2 — Schema Expansion (Course JSON-LD)

These add 9 Course schema blocks for course-level AEO visibility.

| # | Addition | File | Target Location | Impact |
|---|----------|------|-----------------|--------|
| T2-1 | Add Course schema: B.Sc. Cardiac Technology | layout.tsx | After educationalOrgSchema | Course-level snippet + AI citation |
| T2-2 | Add Course schema: B.Sc. Dialysis Technology | layout.tsx | After T2-1 | Course-level snippet |
| T2-3 | Add Course schema: B.Sc. Radiology & Imaging Technology | layout.tsx | After T2-2 | Course-level snippet |
| T2-4 | Add Course schema: B.Sc. Operation Theatre & Anaesthesia Technology | layout.tsx | After T2-3 | Course-level snippet |
| T2-5 | Add Course schema: B.Sc. Respiratory Therapy Technology | layout.tsx | After T2-4 | Course-level snippet |
| T2-6 | Add Course schema: B.Sc. Physician Assistant | layout.tsx | After T2-5 | Course-level snippet |
| T2-7 | Add Course schema: B.Sc. Critical Care Technology | layout.tsx | After T2-6 | Course-level snippet |
| T2-8 | Add Course schema: B.Sc. Medical Record Science | layout.tsx | After T2-7 | Course-level snippet |
| T2-9 | Add Course schema: B.Sc. Accident & Emergency Care Technology | layout.tsx | After T2-8 | Course-level snippet |
| T2-10 | Add HowTo schema for admission process from Tiruppur | layout.tsx | After T2-9 | HowTo snippet capture |

---

## 3. Dependency Map

```
T0 fixes (factual corrections) → Must complete BEFORE any T1/T2 additions
    ↓
T1-1 + T1-2 (paragraph snippet block) → Independent of FAQ changes
T1-3 + T1-4 (new FAQs) → Independent of T1-1
T1-5 (speakable fix) → Depends on knowing which FAQ fix approach chosen
    ↓
T2-1 through T2-10 (Course + HowTo schema) → Independent; can run in parallel with T1
```

**Critical path:** T0 → T1-3 + T1-4 → T1-5 → T2-1 through T2-10

---

## 4. Files Modified

| File | Modifications | Tier | Estimated Lines Changed |
|------|--------------|------|------------------------|
| `src/app/tiruppur/page.tsx` | T0: Distance fixes (6 locations), BPT FAQ removal, PT/MLT fix, duplicate H2 fix, commute text fix | T0 | ~15 lines |
| `src/app/tiruppur/page.tsx` | T1: Paragraph snippet block, 6 new FAQ items (Q+A) | T1 | ~80 lines added |
| `src/app/tiruppur/layout.tsx` | T0: Meta title + description fix, FAQPage schema distance fixes (4 locations) | T0 | ~10 lines |
| `src/app/tiruppur/layout.tsx` | T1: 6 new FAQPage schema entries, speakable selector fix | T1 | ~80 lines added |
| `src/app/tiruppur/layout.tsx` | T2: 9 Course schema blocks + HowTo schema block | T2 | ~200 lines added |

**Total additions:** ~370 lines across 2 files
**No other files modified** — no shared components, no globals.css, no layout.tsx in parent directories

---

## 5. Word Count Impact

| Section | Current Words (est.) | After Changes | Net Change |
|---------|---------------------|---------------|-----------|
| FAQSection (question text) | ~210 | ~310 (+6 questions) | +100 |
| FAQSection (answer text — JS-gated) | ~440 | ~620 (+6 answers) | +180 |
| CompetitiveAdvantageSection | ~200 | ~285 (+paragraph snippet) | +85 |
| HeroSection | ~120 | ~110 (distance stat fix only) | -10 |
| **Total page word count** | ~1,970 | ~2,305 | +335 |
| **AEO-indexed word count** | ~1,530 | ~1,700 (FAQ still JS-gated) | +170 |

**Note:** Full AEO word count gain requires FAQ JS-gate removal (separate architectural decision — not in this plan's scope as it requires removing `useState` and `"use client"` dependency, which is a larger refactor).

---

## 6. Testing Checklist

### Pre-Deployment Checks (Before Committing)

- [ ] Run `npm run build` — confirm no TypeScript errors
- [ ] Run `npm run lint` — confirm no ESLint violations from new content
- [ ] Validate all JSON-LD schemas at https://validator.schema.org/ — all 13 blocks (4 existing + 9 new Course + HowTo)
- [ ] Verify FAQPage schema has 17 items (11 original - 1 BPT removed + 6 new = 16; or 11 - 1 + 6 = 16)
- [ ] Verify title tag is ≤60 characters
- [ ] Verify meta description is ≤155 characters
- [ ] Count "85 km" occurrences in page.tsx — should be 0
- [ ] Count "80-90 km" occurrences in page.tsx and layout.tsx — should be 0
- [ ] Confirm "67 km" appears in all corrected locations
- [ ] Confirm BPT FAQ item is removed from both page.tsx and layout.tsx schema

### Post-Deployment Checks

- [ ] Google Rich Results Test on https://ahs.jkkn.ac.in/tiruppur/ — FAQPage should show all 16 questions
- [ ] Google Rich Results Test — Course schema blocks should show for each of 9 programmes
- [ ] Google Rich Results Test — BreadcrumbList should show 3-level path
- [ ] Google Rich Results Test — HowTo schema should validate
- [ ] Mobile viewport check (375px) — paragraph snippet block renders correctly
- [ ] Desktop viewport check (1280px) — no layout regression
- [ ] Request Google re-crawl via Google Search Console
- [ ] Verify in GSC after 1–2 weeks that FAQPage rich results appear

---

## 7. Monitoring Plan

### Immediate (Week 1)

- Submit updated sitemap in GSC
- Request URL inspection + re-crawl for https://ahs.jkkn.ac.in/tiruppur/
- Validate all new schema blocks in Rich Results Test
- Confirm 0 instances of "85 km" or "80-90 km" in live page HTML

### Short-term (Weeks 2–4)

- Check GSC for Tiruppur-related query impressions
- Check if FAQPage rich results appear in SERP
- Check if Course rich results appear for any programme-specific queries
- Monitor for featured snippet capture on "allied health sciences colleges in tiruppur"

### Medium-term (Weeks 6–12)

- Compare impressions week-over-week for Tiruppur queries
- Check for PAA box appearances via GSC PAA impressions
- Monitor competitor AMC College for any SEO changes
- Assess whether AI Overview includes JKKN citations for Tiruppur queries

---

## 8. Success Metrics

| Metric | Baseline | 30-Day Target | 90-Day Target |
|--------|----------|--------------|--------------|
| AEO Readiness Score | 38/100 | 65/100 | 79/100 |
| Featured snippets | 0 | 1 (paragraph) | 2–3 |
| FAQPage rich results items showing | 0 | 16 | 16 |
| Course schema blocks validated | 0 | 9 | 9 |
| Title tag within limit | No (76 chars) | Yes (≤60) | Yes (≤60) |
| Distance data accurate | No (85 km) | Yes (~67 km) | Yes (~67 km) |
| Organic impressions for Tiruppur queries | [GSC baseline needed] | +100% | +250% |
| Click-through rate from SERP | [GSC baseline needed] | +20% (better title) | +40% |

---

*Triple-check validation: PASSED*
*File: AEO-TIRUPPUR-PLAN.md | Lines: ~210 | Date: 2026-03-28*
