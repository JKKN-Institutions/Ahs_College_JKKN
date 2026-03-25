# City Pages SEO Audit — Task Decomposition

> **Document:** Atomic Task Breakdown + Fix Roadmap
> **Site:** https://ahs.jkkn.ac.in
> **Pages:** `/erode/`, `/namakkal/`, `/salem/`, `/tiruppur/`, `/coimbatore/`
> **Date:** 2026-03-24
> **Companion:** `city-pages-seo-audit-specs.md` (scoring), `city-pages-seo-audit-plan.md` (phases)

---

## Table of Contents

1. [Task ID System](#1-task-id-system)
2. [Audit Tasks (116 Tasks)](#2-audit-tasks-116-tasks)
3. [Fix Items (25 Items)](#3-fix-items-25-items)
4. [Fix Prioritization Framework](#4-fix-prioritization-framework)
5. [Sprint Roadmap](#5-sprint-roadmap)
6. [Score Projections](#6-score-projections)
7. [Internal Link Specifications](#7-internal-link-specifications)
8. [File Modification Registry](#8-file-modification-registry)

---

## 1. Task ID System

### ID Format

```
{Phase}.{Dimension}.{Sequence}
```

- **Phase:** P0-P8 (matches audit plan phases)
- **Dimension:** D1-D10 (matches specs dimensions)
- **Sequence:** 01-99 (sequential within phase+dimension)

### Priority Codes

| Code | Meaning | Timeline |
|------|---------|----------|
| P0 | CRITICAL — blocks indexing | Sprint 1 (Week 1) |
| P1 | HIGH — impacts ranking | Sprint 1-2 (Week 1-2) |
| P2 | MEDIUM — improves competitiveness | Sprint 3 (Week 3-4) |
| P3 | LOW — enhances quality | Sprint 4 (Week 5-6) |

---

## 2. Audit Tasks (116 Tasks)

### Phase 0: Pre-Audit Setup (12 Tasks)

| ID | Task | Priority | Dimension | Output | Status |
|----|------|----------|-----------|--------|--------|
| P0.D0.01 | Capture desktop screenshot (1280px) — Erode page | P1 | Setup | `screenshots/desktop-erode.png` | Pending |
| P0.D0.02 | Capture desktop screenshot (1280px) — Namakkal page | P1 | Setup | `screenshots/desktop-namakkal.png` | Pending |
| P0.D0.03 | Capture desktop screenshot (1280px) — Salem page | P1 | Setup | `screenshots/desktop-salem.png` | Pending |
| P0.D0.04 | Capture desktop screenshot (1280px) — Tiruppur page | P1 | Setup | `screenshots/desktop-tiruppur.png` | Pending |
| P0.D0.05 | Capture desktop screenshot (1280px) — Coimbatore page | P1 | Setup | `screenshots/desktop-coimbatore.png` | Pending |
| P0.D0.06 | Capture mobile screenshot (375px) — all 5 pages | P1 | Setup | `screenshots/mobile-{city}.png` | Pending |
| P0.D0.07 | Run `site:ahs.jkkn.ac.in/{city}` for all 5 pages | P0 | D6 | Indexation status table | Pending |
| P0.D0.08 | Check GSC URL Inspection for all 5 city URLs | P0 | D2 | Crawl/index status per URL | Pending |
| P0.D0.09 | Export GSC Performance data for city keywords | P1 | D6 | CSV with impressions, clicks, position | Pending |
| P0.D0.10 | Verify dev server loads all 5 city pages | P0 | D2 | Pass/fail per page | Pending |
| P0.D0.11 | View HTML source for all 5 pages (verify CSR metadata gap) | P0 | D1 | Source code evidence | Done |
| P0.D0.12 | Check browser console errors on all 5 pages | P1 | D2 | Error log | Pending |

### Phase 1: On-Page SEO Audit (20 Tasks)

| ID | Task | Priority | Dimension | Output | Status |
|----|------|----------|-----------|--------|--------|
| P1.D1.01 | Extract `<title>` tag from rendered DOM — Erode | P0 | D1 | Title text + evidence | Done — "Best Allied Health Science Colleges in Tamilnadu \| JKKN" (inherited) |
| P1.D1.02 | Extract `<title>` tag from rendered DOM — all 5 pages | P0 | D1 | Confirm identical across 5 | Done — all identical |
| P1.D1.03 | Extract `<meta description>` — all 5 pages | P0 | D1 | Description text | Done — all inherited from root |
| P1.D1.04 | Extract `<link rel="canonical">` — all 5 pages | P0 | D1 | Canonical URLs | Done — all point to homepage |
| P1.D1.05 | Extract `<meta name="keywords">` — all 5 pages | P1 | D1 | Keywords meta content | Done — 5 generic TN keywords inherited |
| P1.D1.06 | Extract all OG tags — all 5 pages | P1 | D1 | OG title, desc, url, image | Done — all homepage values |
| P1.D1.07 | Extract Twitter card tags — all 5 pages | P1 | D1 | Card type, title, desc, image | Done — all homepage values |
| P1.D1.08 | Document H1 tag for each city page | P0 | D9 | H1 text × 5 | Done — "Best Allied Health Sciences College Near {City}" |
| P1.D1.09 | Document all H2 tags for each city page | P1 | D9 | H2 list × 5 | Done — 8 generic H2s per page |
| P1.D1.10 | Check for H3 tags | P2 | D9 | H3 count | Done — 0 H3 tags used |
| P1.D1.11 | Verify no duplicate H1 tags on any page | P0 | D1 | Pass/fail | Done — 1 H1 per page (pass) |
| P1.D1.12 | Map H1 to primary target keyword — Erode | P0 | D9 | Alignment score | Done — 40/100 |
| P1.D1.13 | Map H1 to primary target keyword — Namakkal | P0 | D9 | Alignment score | Done — 40/100 |
| P1.D1.14 | Map H1 to primary target keyword — Salem | P0 | D9 | Alignment score | Done — 35/100 |
| P1.D1.15 | Map H1 to primary target keyword — Tiruppur | P0 | D9 | Alignment score | Done — 35/100 |
| P1.D1.16 | Map H1 to primary target keyword — Coimbatore | P0 | D9 | Alignment score | Done — 55/100 |
| P1.D1.17 | Count primary keyword occurrences in body — all 5 | P1 | D9 | Keyword density per page | Done — 0 exact matches; ~5 partial matches |
| P1.D1.18 | Count secondary keyword occurrences — all 5 | P2 | D9 | Secondary keyword presence | Done — partial presence |
| P1.D1.19 | Verify URL structure matches best practice | P2 | D1 | URL assessment | Done — clean `/city/` pattern (70/100) |
| P1.D1.20 | Check for `alt` attributes on any images | P3 | D1 | Image alt audit | Done — N/A (no images used) |

### Phase 2: Technical SEO Audit (18 Tasks)

| ID | Task | Priority | Dimension | Output | Status |
|----|------|----------|-----------|--------|--------|
| P2.D2.01 | Verify city pages NOT in sitemap-pages.xml | P0 | D2 | Confirmed 0/5 present | Done |
| P2.D2.02 | Verify city pages NOT in sitemap-blog.xml | P2 | D2 | Confirmed not blog content | Done — N/A |
| P2.D2.03 | Check robots.txt for city page blocks | P0 | D2 | No blocks found | Done — allowed |
| P2.D2.04 | Verify render method (CSR vs SSR) for city pages | P0 | D2 | CSR confirmed | Done — `"use client"` |
| P2.D2.05 | Check if layout.tsx exists for any city page | P0 | D2 | 0/5 have layout.tsx | Done |
| P2.D2.06 | Run Lighthouse (mobile) — Erode | P1 | D2 | Performance score | Pending |
| P2.D2.07 | Run Lighthouse (mobile) — Namakkal | P1 | D2 | Performance score | Pending |
| P2.D2.08 | Run Lighthouse (mobile) — Salem | P1 | D2 | Performance score | Pending |
| P2.D2.09 | Run Lighthouse (mobile) — Tiruppur | P1 | D2 | Performance score | Pending |
| P2.D2.10 | Run Lighthouse (mobile) — Coimbatore | P1 | D2 | Performance score | Pending |
| P2.D2.11 | Run Lighthouse (desktop) — all 5 pages | P2 | D2 | Performance scores | Pending |
| P2.D2.12 | Check CWV (LCP, INP, CLS) — all 5 pages | P1 | D2 | CWV metrics | Pending |
| P2.D2.13 | Verify breadcrumb schema absent — all 5 | P0 | D4 | Confirmed absent | Done |
| P2.D2.14 | Verify visual breadcrumbs absent — all 5 | P1 | D2 | Confirmed absent | Done |
| P2.D2.15 | Check HTTPS status | P0 | D2 | HTTPS confirmed | Done — 100/100 |
| P2.D2.16 | Verify HTML lang attribute | P2 | D2 | `lang="en"` inherited | Done — 80/100 |
| P2.D2.17 | Check for mobile-first responsive design | P1 | D2 | Responsive confirmed | Done — 90/100 |
| P2.D2.18 | Verify BottomNav renders on city pages | P1 | D7 | Check if LayoutWrapper wraps city pages | Pending — likely NOT rendering |

### Phase 3: Content Quality Audit (20 Tasks)

| ID | Task | Priority | Dimension | Output | Status |
|----|------|----------|-----------|--------|--------|
| P3.D3.01 | Calculate content duplication percentage across 5 pages | P1 | D3 | Duplication % per section | Done — ~55-60% overall |
| P3.D3.02 | Identify shared (identical) sections | P1 | D3 | Shared section list | Done — TopBanner, AffiliationBar, Programmes, Placements, Facilities, Testimonials |
| P3.D3.03 | Identify unique (customized) sections | P1 | D3 | Unique section list | Done — Hero, Distance, HowToReach, parts of WhyChoose/FAQ |
| P3.D3.04 | Estimate word count per page | P2 | D3 | Word count × 5 | Done — ~1200-1500 words |
| P3.D3.05 | Audit testimonials — Erode | P0 | D3 | Placeholder confirmed | Done — `[Student Name]`, `[Course]`, `[Year]` |
| P3.D3.06 | Audit testimonials — all 5 pages | P0 | D3 | All placeholders confirmed | Done — identical across all 5 |
| P3.D3.07 | Verify programme count accuracy (stat: "4 programmes") | P0 | D3 | WRONG — site has 9 courses | Done — inaccurate |
| P3.D3.08 | Verify placement rate accuracy ("85%+") | P1 | D3 | UNVERIFIED — CLAUDE.md says 92%+ group | Done — discrepancy |
| P3.D3.09 | Verify highest salary accuracy ("5-7 LPA") | P1 | D3 | UNVERIFIED — CLAUDE.md says 25 LPA international | Done — discrepancy |
| P3.D3.10 | Verify average salary accuracy ("2.5-4 LPA") | P1 | D3 | UNVERIFIED — CLAUDE.md says 3.2-4.5 LPA | Done — discrepancy |
| P3.D3.11 | Verify recruiter count ("6+ top recruiters") | P2 | D3 | Lists 6; CLAUDE.md says 60+ | Done — underreported |
| P3.D3.12 | Audit E-E-A-T signals — Experience | P1 | D3 | Score: 10/100 | Done |
| P3.D3.13 | Audit E-E-A-T signals — Expertise | P1 | D3 | Score: 45/100 | Done |
| P3.D3.14 | Audit E-E-A-T signals — Authoritativeness | P1 | D3 | Score: 50/100 | Done |
| P3.D3.15 | Audit E-E-A-T signals — Trustworthiness | P1 | D3 | Score: 25/100 | Done |
| P3.D3.16 | Check FAQ content uniqueness per city page | P2 | D3 | ~50% unique (Q1-Q2, Q6 vary) | Done |
| P3.D3.17 | Check WhyChoose content uniqueness per city | P2 | D3 | ~40% unique | Done |
| P3.D3.18 | Check content freshness (admission year references) | P2 | D3 | "2026-27" — current | Done — 90/100 |
| P3.D3.19 | Check grammar and readability quality | P3 | D3 | Good quality, no errors | Done — 85/100 |
| P3.D3.20 | Compare content depth with top competitor per keyword | P2 | D6 | Comparison table per city | Done — JKKN thinner than aggregators |

### Phase 4: Schema & Structured Data Audit (16 Tasks)

| ID | Task | Priority | Dimension | Output | Status |
|----|------|----------|-----------|--------|--------|
| P4.D4.01 | Check for FAQPage JSON-LD — all 5 pages | P0 | D4 | Absent on all 5 | Done — 0/5 |
| P4.D4.02 | Check for BreadcrumbList JSON-LD — all 5 pages | P0 | D4 | Absent on all 5 | Done — 0/5 |
| P4.D4.03 | Check for Course JSON-LD — all 5 pages | P1 | D4 | Absent on all 5 | Done — 0/5 |
| P4.D4.04 | Check for LocalBusiness JSON-LD — all 5 pages | P1 | D4 | Absent on all 5 | Done — 0/5 |
| P4.D4.05 | Check for EducationalOrganization JSON-LD | P1 | D4 | Inherited from root (not city-specific) | Done — 40/100 |
| P4.D4.06 | Check for WebPage/SpeakableSpecification | P2 | D4 | Absent on all 5 | Done — 0/5 |
| P4.D4.07 | Verify `generateBreadcrumbSchema()` utility availability | P0 | D4 | Available in `src/lib/breadcrumb-schema.ts` | Done |
| P4.D4.08 | Verify `createPageMetadata()` utility availability | P0 | D4 | Available in `src/lib/metadata.ts` | Done |
| P4.D4.09 | Verify reference implementation exists (cardiac-technology) | P0 | D4 | Full reference at `src/app/cardiac-technology/layout.tsx` | Done |
| P4.D4.10 | Draft FAQPage schema for Erode page | P0 | D4 | JSON-LD spec | Pending |
| P4.D4.11 | Draft FAQPage schema for all 5 pages | P0 | D4 | 5 JSON-LD specs | Pending |
| P4.D4.12 | Draft BreadcrumbList schema for all 5 pages | P0 | D4 | 5 JSON-LD specs | Pending |
| P4.D4.13 | Draft EducationalOrganization schema with areaServed | P1 | D4 | JSON-LD spec | Pending |
| P4.D4.14 | Draft SpeakableSpecification for all 5 pages | P2 | D4 | JSON-LD spec | Pending |
| P4.D4.15 | Draft Course ItemList schema | P2 | D4 | JSON-LD spec | Pending |
| P4.D4.16 | Validate all drafted schemas with Google Rich Results Test | P1 | D4 | Validation results | Pending |

### Phase 5: Internal Linking Audit (14 Tasks)

| ID | Task | Priority | Dimension | Output | Status |
|----|------|----------|-----------|--------|--------|
| P5.D5.01 | Count inbound links to city pages from homepage | P0 | D5 | 0 links | Done |
| P5.D5.02 | Count inbound links from Navbar | P0 | D5 | 5 links (deep submenu) | Done |
| P5.D5.03 | Count inbound links from Footer | P0 | D5 | 0 links | Done |
| P5.D5.04 | Count inbound links from mobileNavLinks.ts | P0 | D5 | 0 links | Done |
| P5.D5.05 | Count inbound links from department pages (9) | P1 | D5 | 0 links | Done |
| P5.D5.06 | Count inbound links from blog pages | P2 | D5 | 0 links | Done |
| P5.D5.07 | Count inbound links from admission page | P1 | D5 | 0 links | Done |
| P5.D5.08 | Count inbound links from facility pages (9) | P2 | D5 | 0 links | Done |
| P5.D5.09 | Verify inter-city links (ExploreCitiesSection) | P1 | D5 | 4 links per page (confirmed) | Done — working |
| P5.D5.10 | Audit anchor text quality of Navbar city links | P2 | D5 | "Why Erode Students?" etc. | Done — descriptive but not keyword-targeted |
| P5.D5.11 | Map complete link topology (inbound + outbound) | P1 | D5 | Link topology diagram | Done |
| P5.D5.12 | Calculate link equity score | P2 | D5 | Weak — only Navbar submenu provides equity | Done — 20/100 |
| P5.D5.13 | Specify homepage link placement and anchor text | P0 | D5 | Detailed spec | See Section 7 |
| P5.D5.14 | Specify footer link section design | P1 | D5 | Detailed spec | See Section 7 |

### Phase 6: SERP Competitive Analysis (10 Tasks)

| ID | Task | Priority | Dimension | Output | Status |
|----|------|----------|-----------|--------|--------|
| P6.D6.01 | SERP research — "allied health science colleges in erode" | P1 | D6 | Top 10 + features + JKKN position | Done — JKKN #7 |
| P6.D6.02 | SERP research — "allied health science college namakkal" | P1 | D6 | Top 10 + features + JKKN position | Done — JKKN #1 |
| P6.D6.03 | SERP research — "allied health science courses in salem" | P1 | D6 | Top 10 + features + JKKN position | Done — JKKN not in top 10 |
| P6.D6.04 | SERP research — "allied health science courses in tiruppur" | P1 | D6 | Top 10 + features + JKKN position | Done — JKKN #1 |
| P6.D6.05 | SERP research — "allied health sciences colleges in coimbatore" | P1 | D6 | Top 10 + features + JKKN position | Done — JKKN not in top 10 |
| P6.D6.06 | Identify PAA questions per keyword | P2 | D6 | PAA question list | Done — 8 common PAAs identified |
| P6.D6.07 | Analyze SERP feature eligibility per keyword | P2 | D6 | Feature opportunity matrix | Done |
| P6.D6.08 | Identify aggregator listing opportunities | P2 | D6 | Aggregator action list | Done — 7 aggregators identified |
| P6.D6.09 | Compare content patterns of top 10 per keyword | P2 | D6 | Content pattern table | Done |
| P6.D6.10 | Calculate achievable target position per keyword | P1 | D6 | Target position table | Done |

### Phase 7: Mobile & UX Audit (6 Tasks)

| ID | Task | Priority | Dimension | Output | Status |
|----|------|----------|-----------|--------|--------|
| P7.D7.01 | Verify city pages in mobile bottom nav | P0 | D7 | Absent — 0/5 | Done |
| P7.D7.02 | Verify BottomNav renders on city pages (LayoutWrapper check) | P1 | D7 | Likely not rendering | Pending |
| P7.D7.03 | Check minimum touch target sizes on mobile | P2 | D7 | Programme "Enquire" buttons may be borderline | Pending |
| P7.D7.04 | Check minimum font sizes on mobile | P2 | D7 | `text-[11px]` too small for mobile | Done |
| P7.D7.05 | Check ARIA attributes on FAQ accordion | P2 | D7 | Missing `aria-expanded` | Done |
| P7.D7.06 | Run Lighthouse accessibility audit — all 5 pages | P2 | D7 | Accessibility scores | Pending |

**TOTAL AUDIT TASKS: 116**

| Status | Count |
|--------|-------|
| Done | 82 |
| Pending | 34 |
| **Total** | **116** |

---

## 3. Fix Items (25 Items)

### Fix Registry

| Fix ID | Fix Description | Priority | Sprint | Dimension(s) | Files Modified | Effort | Score Impact |
|--------|----------------|----------|--------|--------------|----------------|--------|-------------|
| **FIX-01** | Create `layout.tsx` with `createPageMetadata()` for `/erode/` | P0 | 1 | D1, D9 | `src/app/erode/layout.tsx` (new) | 30 min | D1: +65 |
| **FIX-02** | Create `layout.tsx` with `createPageMetadata()` for `/namakkal/` | P0 | 1 | D1, D9 | `src/app/namakkal/layout.tsx` (new) | 30 min | D1: +65 |
| **FIX-03** | Create `layout.tsx` with `createPageMetadata()` for `/salem/` | P0 | 1 | D1, D9 | `src/app/salem/layout.tsx` (new) | 30 min | D1: +65 |
| **FIX-04** | Create `layout.tsx` with `createPageMetadata()` for `/tiruppur/` | P0 | 1 | D1, D9 | `src/app/tiruppur/layout.tsx` (new) | 30 min | D1: +65 |
| **FIX-05** | Create `layout.tsx` with `createPageMetadata()` for `/coimbatore/` | P0 | 1 | D1, D9 | `src/app/coimbatore/layout.tsx` (new) | 30 min | D1: +65 |
| **FIX-06** | Add 5 city pages to `sitemap-pages.xml` | P0 | 1 | D2 | `src/app/sitemap-pages.xml/route.ts` | 10 min | D2: +20 |
| **FIX-07** | Add FAQPage JSON-LD to all 5 city `layout.tsx` files | P0 | 1 | D4 | 5 layout.tsx files | 60 min | D4: +25 |
| **FIX-08** | Add BreadcrumbList JSON-LD to all 5 city `layout.tsx` files | P0 | 1 | D4 | 5 layout.tsx files | 30 min | D4: +25 |
| **FIX-09** | Rewrite H1 tags to match target keywords on all 5 pages | P1 | 1 | D9, D1 | 5 page.tsx files | 20 min | D9: +30 |
| **FIX-10** | Integrate keywords into H2 tags on all 5 pages | P1 | 1 | D9 | 5 page.tsx files | 30 min | D9: +15 |
| **FIX-11** | Add "Nearby Cities" section with city links to Footer | P1 | 2 | D5 | `src/components/layout/Footer.tsx` | 30 min | D5: +20 |
| **FIX-12** | Add city page entries to mobile navigation | P1 | 2 | D5, D7 | `src/lib/mobileNavLinks.ts` | 20 min | D5: +15, D7: +15 |
| **FIX-13** | Add city page link section to Homepage | P1 | 2 | D5 | `src/app/page.tsx` or a new section component | 45 min | D5: +20 |
| **FIX-14** | Add EducationalOrganization schema with `areaServed` to all 5 layouts | P1 | 2 | D4 | 5 layout.tsx files | 30 min | D4: +20 |
| **FIX-15** | Add SpeakableSpecification schema to all 5 layouts | P2 | 2 | D4 | 5 layout.tsx files | 15 min | D4: +10 |
| **FIX-16** | Create visual breadcrumb component and add to city pages | P2 | 2 | D2 | 1 new component + 5 page.tsx edits | 45 min | D2: +10 |
| **FIX-17** | Fix data accuracy: update programme count from "4" to "9" on all 5 pages | P1 | 3 | D3 | 5 page.tsx files | 15 min | D3: +5 |
| **FIX-18** | Fix data accuracy: update placement and salary stats to match verified data | P1 | 3 | D3 | 5 page.tsx files | 20 min | D3: +5 |
| **FIX-19** | Replace placeholder testimonials with real student data (or remove section) | P2 | 3 | D3, D10 | 5 page.tsx files | 60 min | D3: +15, D10: +10 |
| **FIX-20** | Add admission process section to all 5 city pages | P2 | 3 | D8 | 5 page.tsx files | 60 min | D8: +15 |
| **FIX-21** | Differentiate ProgrammesSection per city (city-relevant content) | P2 | 3 | D3 | 5 page.tsx files | 60 min | D3: +10 |
| **FIX-22** | Add cross-links from department pages to relevant city pages | P2 | 3 | D5 | 9 department page.tsx files | 45 min | D5: +10 |
| **FIX-23** | Add campus images/gallery to city pages | P2 | 3 | D8 | 5 page.tsx + image files | 90 min | D8: +15 |
| **FIX-24** | Convert city pages to server components (extract FAQ to client component) | P2 | 4 | D2 | 5 page.tsx refactors + 1 new client component | 120 min | D2: +10 |
| **FIX-25** | Create OG images per city page | P3 | 4 | D1 | 5 image files + layout.tsx updates | 60 min | D1: +5 |

### Fix Summary by Priority

| Priority | Count | Total Effort | Sprint |
|----------|-------|-------------|--------|
| P0 (Critical) | 8 | ~4 hours | Sprint 1 |
| P1 (High) | 8 | ~4 hours | Sprint 1-2 |
| P2 (Medium) | 8 | ~8.25 hours | Sprint 2-3 |
| P3 (Low) | 1 | ~1 hour | Sprint 4 |
| **Total** | **25** | **~17.25 hours** | |

---

## 4. Fix Prioritization Framework

### Decision Matrix

| Factor | Weight | Score Criteria |
|--------|--------|---------------|
| SEO Impact | 40% | How much does this fix improve ranking potential? |
| Effort | 25% | How long does this take to implement? (inverse — lower effort = higher score) |
| Dependencies | 20% | Does this block other fixes? |
| Risk | 15% | What's the blast radius if something goes wrong? |

### Priority Assignment Logic

```
P0 (CRITICAL): Blocks Google from correctly indexing/canonicalizing the page
  → layout.tsx creation (FIX-01 to FIX-05)
  → Sitemap addition (FIX-06)
  → FAQPage schema (FIX-07)
  → BreadcrumbList schema (FIX-08)

P1 (HIGH): Directly impacts ranking signals once page is indexed
  → H1 keyword alignment (FIX-09)
  → H2 keyword integration (FIX-10)
  → Footer links (FIX-11)
  → Mobile nav links (FIX-12)
  → Homepage links (FIX-13)
  → Org schema (FIX-14)
  → Data accuracy fixes (FIX-17, FIX-18)

P2 (MEDIUM): Improves competitiveness after foundation is fixed
  → Speakable schema (FIX-15)
  → Visual breadcrumbs (FIX-16)
  → Testimonial replacement (FIX-19)
  → Admission process section (FIX-20)
  → Content differentiation (FIX-21)
  → Department cross-links (FIX-22)
  → Campus images (FIX-23)
  → Server component conversion (FIX-24)

P3 (LOW): Quality enhancements, nice-to-have
  → OG images (FIX-25)
```

---

## 5. Sprint Roadmap

### Sprint 1: Foundation (Week 1)

**Goal:** Get city pages properly indexed with correct metadata, canonical URLs, and basic schema.

| Day | Fixes | Files Touched | Verification |
|-----|-------|---------------|-------------|
| Day 1 (AM) | FIX-01 to FIX-05: Create 5 layout.tsx files | 5 new files | View source — verify title, canonical, description per page |
| Day 1 (PM) | FIX-06: Add to sitemap | `sitemap-pages.xml/route.ts` | Visit `/sitemap-pages.xml` — verify 5 new entries |
| Day 2 (AM) | FIX-07: FAQPage JSON-LD × 5 | 5 layout.tsx files | Google Rich Results Test per URL |
| Day 2 (PM) | FIX-08: BreadcrumbList JSON-LD × 5 | 5 layout.tsx files | Google Rich Results Test |
| Day 3 (AM) | FIX-09: Rewrite H1s × 5 | 5 page.tsx files | DOM inspection — verify H1 text |
| Day 3 (PM) | FIX-10: Keyword-rich H2s × 5 | 5 page.tsx files | DOM inspection — verify H2 text |
| Day 3 (End) | Deploy + Submit to GSC URL Inspection | — | Request indexing for all 5 URLs |

**Sprint 1 Deliverables:**
- 5 new `layout.tsx` files (metadata + 2 schemas each)
- Updated `sitemap-pages.xml/route.ts`
- 5 updated H1 tags
- 5 sets of updated H2 tags

### Sprint 2: Linking & Advanced Schema (Week 2)

**Goal:** Establish sitewide internal linking and complete schema coverage.

| Day | Fixes | Files Touched | Verification |
|-----|-------|---------------|-------------|
| Day 1 | FIX-11: Footer city links | `Footer.tsx` | Visual inspection — all 5 cities in footer |
| Day 1 | FIX-12: Mobile nav city entries | `mobileNavLinks.ts` | Mobile viewport — verify city links in nav |
| Day 2 | FIX-13: Homepage city section | `page.tsx` or new component | Visual — city links visible on homepage |
| Day 2 | FIX-14: EducationalOrganization schema × 5 | 5 layout.tsx files | Rich Results Test |
| Day 3 | FIX-15: Speakable schema × 5 | 5 layout.tsx files | Schema validation |
| Day 3 | FIX-16: Visual breadcrumbs | New component + 5 page edits | Visual — breadcrumbs render on all 5 pages |

**Sprint 2 Deliverables:**
- Updated `Footer.tsx` with city link section
- Updated `mobileNavLinks.ts` with city entries
- Updated homepage with city section
- 5 layout.tsx files now with 4-5 schemas each
- New breadcrumb UI component

### Sprint 3: Content Enhancement (Week 3-4)

**Goal:** Differentiate content, fix data accuracy, improve E-E-A-T.

| Day | Fixes | Files Touched | Verification |
|-----|-------|---------------|-------------|
| Day 1-2 | FIX-17, FIX-18: Data accuracy fixes | 5 page.tsx files | Manual verification against source data |
| Day 3-4 | FIX-19: Replace testimonials | 5 page.tsx files | Visual — real names and quotes visible |
| Day 5-6 | FIX-20: Admission process sections | 5 page.tsx files | Visual — new section renders correctly |
| Day 7-8 | FIX-21: Differentiate Programmes | 5 page.tsx files | Cross-page comparison — content differs |
| Day 9 | FIX-22: Department cross-links | 9 department page.tsx files | Click-through — links work |
| Day 10 | FIX-23: Campus images | 5 page.tsx + public/ images | Visual — images load and display |

**Sprint 3 Deliverables:**
- All data corrected (9 courses, verified stats)
- Real testimonials (or section removed)
- New admission process sections
- City-specific programme content
- Department → city cross-links
- Campus images on city pages

### Sprint 4: Advanced Optimization (Week 5-6)

**Goal:** Technical refinements and quality enhancements.

| Day | Fixes | Files Touched | Verification |
|-----|-------|---------------|-------------|
| Day 1-3 | FIX-24: Server component conversion | 5 page.tsx refactors + 1 new FAQ client component | View source — verify server-rendered HTML |
| Day 4-5 | FIX-25: OG images | 5 images + 5 layout.tsx updates | OG debugger — verify images render |
| Day 6+ | Aggregator submissions | External actions | Profile live on CollegeBatch, mymathews, etc. |
| Day 6+ | Blog posts linking to city pages | 5 new blog files | Published blogs with city page links |

**Sprint 4 Deliverables:**
- Server-rendered city pages (improved indexing speed)
- City-specific OG images
- Aggregator profiles submitted
- Blog posts published

---

## 6. Score Projections

### Dimension-by-Dimension Projection

| Dimension | Current | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 |
|-----------|---------|----------|----------|----------|----------|
| D1: On-Page SEO (20%) | 15.6 | **80** | 82 | 84 | **90** |
| D2: Technical SEO (15%) | 59.6 | **70** | 80 | 80 | **85** |
| D3: Content Quality (15%) | 44.5 | 45 | 45 | **70** | **75** |
| D4: Schema (10%) | 5.0 | **55** | **85** | 85 | **90** |
| D5: Internal Linking (10%) | 19.5 | 20 | **70** | **80** | **80** |
| D6: SERP Competitive (10%) | 22.5 | 35 | 40 | 50 | **60** |
| D7: Mobile (5%) | 55.6 | 56 | **75** | 75 | **80** |
| D8: Content Gaps (5%) | 12.0 | 12 | 12 | **50** | **55** |
| D9: Keyword Alignment (5%) | 27.5 | **80** | 82 | 84 | **85** |
| D10: UX/Conversion (5%) | 50.6 | 51 | 52 | **65** | **70** |

### Composite Score Projection

| Sprint | Composite Score | Rating | Key Milestone |
|--------|----------------|--------|---------------|
| Current | **30.8** | POOR | Unindexed, invisible |
| Sprint 1 | **54.2** | FAIR | Metadata + schema foundation → indexable |
| Sprint 2 | **65.7** | FAIR → GOOD | Linking + breadcrumbs → discoverable |
| Sprint 3 | **74.5** | GOOD | Content depth → competitive |
| Sprint 4 | **79.5** | GOOD → EXCELLENT | Advanced optimization → ranking |

### Weighted Calculation (Sprint 4 Target)

| Dimension | Target Score | Weight | Weighted |
|-----------|-------------|--------|----------|
| D1 | 90 | 0.20 | 18.0 |
| D2 | 85 | 0.15 | 12.8 |
| D3 | 75 | 0.15 | 11.3 |
| D4 | 90 | 0.10 | 9.0 |
| D5 | 80 | 0.10 | 8.0 |
| D6 | 60 | 0.10 | 6.0 |
| D7 | 80 | 0.05 | 4.0 |
| D8 | 55 | 0.05 | 2.8 |
| D9 | 85 | 0.05 | 4.3 |
| D10 | 70 | 0.05 | 3.5 |
| **TOTAL** | | | **79.5** |

### Projected SERP Position Improvement

| Keyword | Current | After Sprint 1 | After Sprint 4 | Target |
|---------|---------|----------------|----------------|--------|
| Erode | #7 (homepage) | #5-7 (city page) | #3-5 | #3 |
| Namakkal | #1 (homepage) | #1 (city page) | #1 | #1 (defend) |
| Salem | Not in top 10 | #8-10 | #5-7 | #5 |
| Tiruppur | #1 (homepage) | #1 (city page) | #1 | #1 (defend) |
| Coimbatore | Not in top 10 | #10-15 | #7-10 | #7 |

---

## 7. Internal Link Specifications

### 7.1 Homepage City Section

**Location:** After the Programmes section or before the CTA section in `src/app/page.tsx`

**Design:** "Find Us Near Your City" section with 5 city cards

| Link # | Anchor Text | Href | Context Sentence |
|--------|-------------|------|-----------------|
| 1 | "Allied Health Sciences Near Erode" | `/erode` | "Just 35 km via NH-544 — 40 min drive" |
| 2 | "Allied Health Sciences Near Namakkal" | `/namakkal` | "5-10 km from Namakkal — closest city" |
| 3 | "Allied Health Sciences Near Salem" | `/salem` | "65 km from Salem — excellent highway connectivity" |
| 4 | "Allied Health Sciences Near Tiruppur" | `/tiruppur` | "80 km from Tiruppur — accessible and affordable" |
| 5 | "Allied Health Sciences Near Coimbatore" | `/coimbatore` | "105 km from Coimbatore — better value campus" |

### 7.2 Footer City Links

**Location:** New "NEARBY CITIES" column in `src/components/layout/Footer.tsx`

**Design:** Simple link list matching existing footer column style

| Link # | Display Text | Href |
|--------|-------------|------|
| 1 | "AHS Near Erode" | `/erode` |
| 2 | "AHS Near Namakkal" | `/namakkal` |
| 3 | "AHS Near Salem" | `/salem` |
| 4 | "AHS Near Tiruppur" | `/tiruppur` |
| 5 | "AHS Near Coimbatore" | `/coimbatore` |

### 7.3 Mobile Navigation Entries

**Location:** New "Nearby Cities" group in `src/lib/mobileNavLinks.ts`

```typescript
{
  groupLabel: 'Nearby Cities',
  mainHref: '#cities',
  menus: [
    { href: '/erode', label: 'Near Erode', icon: MapPin, active: pathname === '/erode' },
    { href: '/namakkal', label: 'Near Namakkal', icon: MapPin, active: pathname === '/namakkal' },
    { href: '/salem', label: 'Near Salem', icon: MapPin, active: pathname === '/salem' },
    { href: '/tiruppur', label: 'Near Tiruppur', icon: MapPin, active: pathname === '/tiruppur' },
    { href: '/coimbatore', label: 'Near Coimbatore', icon: MapPin, active: pathname === '/coimbatore' },
  ]
}
```

### 7.4 Department Page Cross-Links

**Location:** Add "Accessible from nearby cities" section at the bottom of each department page

| Department Page | File | Recommended Link |
|----------------|------|-----------------|
| `cardiac-technology/page.tsx` | Dept page | "Students from Erode, Salem, and Coimbatore can easily access our BSc Cardiac Technology programme." + links to `/erode`, `/salem`, `/coimbatore` |
| `dialysis-technology/page.tsx` | Dept page | Same pattern with relevant city pages |
| `radiology-imaging-technology/page.tsx` | Dept page | Same pattern |
| `operation-theatre-anaesthesia/page.tsx` | Dept page | Same pattern |
| `respiratory-therapy/page.tsx` | Dept page | Same pattern |
| `physician-assistant/page.tsx` | Dept page | Same pattern |
| `critical-care-technology/page.tsx` | Dept page | Same pattern |
| `medical-record-science/page.tsx` | Dept page | Same pattern |
| `accident-emergency-care/page.tsx` | Dept page | Same pattern |

### 7.5 Admission Page Cross-Links

**Location:** In the admission page's city-relevant section

| Link | Anchor Text | Context |
|------|-------------|---------|
| `/erode` | "Students from Erode" | "Erode students — just 35 km from campus" |
| `/namakkal` | "Students from Namakkal" | "Namakkal students — 5-10 km away" |
| `/salem` | "Students from Salem" | "Salem students — 65 km via NH-544" |
| `/tiruppur` | "Students from Tiruppur" | "Tiruppur students — 80 km drive" |
| `/coimbatore` | "Students from Coimbatore" | "Coimbatore students — 105 km" |

---

## 8. File Modification Registry

### New Files to Create

| File Path | Sprint | Purpose | Priority |
|-----------|--------|---------|----------|
| `src/app/erode/layout.tsx` | 1 | Metadata + 4-5 JSON-LD schemas | P0 |
| `src/app/namakkal/layout.tsx` | 1 | Metadata + 4-5 JSON-LD schemas | P0 |
| `src/app/salem/layout.tsx` | 1 | Metadata + 4-5 JSON-LD schemas | P0 |
| `src/app/tiruppur/layout.tsx` | 1 | Metadata + 4-5 JSON-LD schemas | P0 |
| `src/app/coimbatore/layout.tsx` | 1 | Metadata + 4-5 JSON-LD schemas | P0 |
| `src/components/ui/Breadcrumb.tsx` | 2 | Visual breadcrumb component | P2 |

### Existing Files to Modify

| File Path | Sprint | Modification | Priority | Blast Radius |
|-----------|--------|-------------|----------|-------------|
| `src/app/sitemap-pages.xml/route.ts` | 1 | Add 5 city page entries to `pages` array | P0 | LOW — only affects sitemap output |
| `src/app/erode/page.tsx` | 1, 3 | H1 rewrite, H2 keywords, data fixes, testimonials, content | P0-P2 | LOW — single page |
| `src/app/namakkal/page.tsx` | 1, 3 | Same edits as erode | P0-P2 | LOW |
| `src/app/salem/page.tsx` | 1, 3 | Same edits as erode | P0-P2 | LOW |
| `src/app/tiruppur/page.tsx` | 1, 3 | Same edits as erode | P0-P2 | LOW |
| `src/app/coimbatore/page.tsx` | 1, 3 | Same edits as erode | P0-P2 | LOW |
| `src/components/layout/Footer.tsx` | 2 | Add "Nearby Cities" link column | P1 | HIGH — affects every page sitewide |
| `src/lib/mobileNavLinks.ts` | 2 | Add "Nearby Cities" menu group | P1 | MEDIUM — affects mobile nav on all pages |
| `src/app/page.tsx` | 2 | Add city section (or import new component) | P1 | MEDIUM — homepage only |
| 9 department `page.tsx` files | 3 | Add city cross-links section | P2 | LOW — per department page |

### Blast Radius Summary

| Risk Level | Files | Pre-Edit Protocol |
|------------|-------|-------------------|
| HIGH | `Footer.tsx` | Grep all usages, test all breakpoints (320px-1280px), verify sitewide |
| MEDIUM | `mobileNavLinks.ts`, `page.tsx` (homepage) | Test mobile nav, verify homepage layout |
| LOW | City page files, sitemap, new layout.tsx files | Page-specific testing |

---

*End of Task Decomposition Document*
