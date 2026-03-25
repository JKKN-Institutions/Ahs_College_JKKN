# City Pages SEO Audit — Execution Plan

> **Document:** Phase-by-Phase Audit Execution Plan
> **Site:** https://ahs.jkkn.ac.in
> **Pages:** `/erode/`, `/namakkal/`, `/salem/`, `/tiruppur/`, `/coimbatore/`
> **Date:** 2026-03-24
> **Companion:** `city-pages-seo-audit-specs.md` (scoring framework), `city-pages-seo-audit-decompose.md` (task breakdown)

---

## Table of Contents

1. [Audit Overview](#1-audit-overview)
2. [Phase 0: Pre-Audit Setup](#2-phase-0-pre-audit-setup)
3. [Phase 1: On-Page SEO Audit](#3-phase-1-on-page-seo-audit)
4. [Phase 2: Technical SEO Audit](#4-phase-2-technical-seo-audit)
5. [Phase 3: Content Quality Audit](#5-phase-3-content-quality-audit)
6. [Phase 4: Schema & Structured Data Audit](#6-phase-4-schema--structured-data-audit)
7. [Phase 5: Internal Linking Audit](#7-phase-5-internal-linking-audit)
8. [Phase 6: SERP Competitive Analysis](#8-phase-6-serp-competitive-analysis)
9. [Phase 7: Mobile & UX Audit](#9-phase-7-mobile--ux-audit)
10. [Phase 8: Final Analysis & Fix Roadmap](#10-phase-8-final-analysis--fix-roadmap)
11. [Appendix: SERP Intelligence Data](#appendix-serp-intelligence-data)

---

## 1. Audit Overview

### Objective

Conduct a comprehensive SEO audit of all 5 city landing pages to:
1. Document every SEO deficiency with evidence-based scoring
2. Quantify the gap between current state and competitive requirements
3. Produce a prioritized fix roadmap with projected score improvements
4. Establish a baseline for tracking progress after fixes are implemented

### Scope

| In Scope | Out of Scope |
|----------|-------------|
| All 5 city page files and their rendering | Homepage SEO (separate audit) |
| Supporting infrastructure files (metadata, sitemap, nav) | Department page SEO (already optimized) |
| Internal linking topology to/from city pages | External backlink analysis (requires Ahrefs/SEMrush) |
| SERP competitive landscape for 5 primary keywords | Paid ads / SEM analysis |
| Mobile experience and accessibility | Server-side performance tuning |
| Schema markup requirements | Domain authority building |

### Timeline

| Phase | Duration | Dependencies |
|-------|----------|-------------|
| Phase 0: Pre-Audit Setup | Day 1 | GSC access, dev server |
| Phase 1: On-Page SEO | Day 1 | Phase 0 complete |
| Phase 2: Technical SEO | Day 1-2 | Phase 0 complete |
| Phase 3: Content Quality | Day 2 | Phase 1 complete |
| Phase 4: Schema Audit | Day 2 | Phase 1 complete |
| Phase 5: Internal Linking | Day 2-3 | Phase 1 complete |
| Phase 6: SERP Analysis | Day 1-2 | Independent (parallel) |
| Phase 7: Mobile & UX | Day 3 | Phase 2 complete |
| Phase 8: Final Analysis | Day 3-4 | All phases complete |

---

## 2. Phase 0: Pre-Audit Setup

### 0.1 Baseline Screenshots

Capture current state of each city page for before/after comparison.

| Task | Tool | Output |
|------|------|--------|
| Desktop screenshot (1280px) of all 5 pages | Chrome DevTools / Playwright | `screenshots/desktop-{city}-{date}.png` |
| Mobile screenshot (375px) of all 5 pages | Chrome DevTools / Playwright | `screenshots/mobile-{city}-{date}.png` |
| Full-page scroll capture (desktop) | Chrome DevTools | `screenshots/full-{city}-{date}.png` |

### 0.2 Indexation Check

Verify current Google indexation status for each city page.

| Task | Method | Expected Result |
|------|--------|-----------------|
| `site:ahs.jkkn.ac.in/erode` | Google Search | Likely 0 results (no sitemap, inherited canonical) |
| `site:ahs.jkkn.ac.in/namakkal` | Google Search | Likely 0 results |
| `site:ahs.jkkn.ac.in/salem` | Google Search | Likely 0 results |
| `site:ahs.jkkn.ac.in/tiruppur` | Google Search | Likely 0 results |
| `site:ahs.jkkn.ac.in/coimbatore` | Google Search | Likely 0 results |
| Check GSC "Pages" report for city URLs | Google Search Console | Confirm indexation status |
| Check GSC "Page indexing" for canonical issues | Google Search Console | Likely "Duplicate, Google chose different canonical" |

### 0.3 GSC Baseline Data

| Metric | Source | Purpose |
|--------|--------|---------|
| Current impressions for city keywords | GSC Performance → Query filter | Baseline for improvement tracking |
| Current clicks for city keywords | GSC Performance → Query filter | Baseline |
| Current average position for target keywords | GSC Performance → Query filter | Baseline — expect limited data |
| Crawl status of city URLs | GSC → URL Inspection tool | Verify crawl/index status |

### 0.4 Dev Server Verification

| Task | Command | Purpose |
|------|---------|---------|
| Start dev server | `npm run dev` | Verify pages render correctly |
| Visit each city URL in browser | `localhost:3000/erode` etc. | Confirm all 5 pages load |
| Check browser console for errors | Chrome DevTools → Console | Identify JS errors |
| View page source for each URL | `view-source:localhost:3000/erode` | Verify CSR rendering (no metadata in source) |

---

## 3. Phase 1: On-Page SEO Audit

### 1.1 Metadata Extraction (All 5 Pages)

**Method:** For each city page, extract and document:

| Element | How to Check | File Reference |
|---------|-------------|----------------|
| `<title>` tag | View page source or DOM inspector | Root `layout.tsx` (line 12-26) — inherited |
| `<meta name="description">` | View page source | Root `layout.tsx` — inherited |
| `<link rel="canonical">` | View page source | Root `layout.tsx` via `createPageMetadata()` |
| `<meta name="keywords">` | View page source | Root `layout.tsx` — 5 generic TN keywords |
| OG tags (og:title, og:description, og:url, og:image) | View page source | Root `layout.tsx` — all homepage values |
| Twitter card tags | View page source | Root `layout.tsx` — all homepage values |
| `<meta name="robots">` | View page source | Should be `index, follow` |

**Expected finding:** All 5 pages share identical metadata from root `layout.tsx` (lines 12-26). No page-specific metadata exists because city page files use `"use client"` and have no `layout.tsx` wrapper.

### 1.2 Heading Hierarchy Analysis

For each city page, extract the complete heading structure:

```
Expected structure (all 5 pages follow this pattern):
H1: "Best Allied Health Sciences College Near [City]"
  H2: "Why [City] Students Choose JKKN AHS"
  H2: "Programmes Offered"
  H2: "Placement Highlights"
  H2: "How to Reach from [City]"
  H2: "Campus & Facilities"
  H2: "Students from [City] Love JKKN AHS"
  H2: "Frequently Asked Questions"
  H2: "Explore More Cities"
```

**Analysis points:**
- H1 count: 1 per page (correct count, but wrong content)
- H1 keyword alignment: Does NOT match target keywords
- H2 keyword integration: Zero keyword integration (generic labels)
- Missing H2 opportunities: "Allied Health Science Courses", "Admission Process", "Fee Structure"
- No H3 tags used: Flat hierarchy, no subsection depth

### 1.3 Target Keyword Mapping

| Page | Target Keyword | Title Match | H1 Match | Description Match | URL Match |
|------|---------------|-------------|----------|-------------------|-----------|
| Erode | allied health science colleges in erode | NO | NO | NO | Partial (city in URL) |
| Namakkal | allied health science college namakkal | NO | NO | NO | Partial |
| Salem | allied health science courses in salem | NO | NO | NO | Partial |
| Tiruppur | allied health science courses in tiruppur | NO | NO | NO | Partial |
| Coimbatore | allied health sciences colleges in coimbatore | NO | NO | NO | Partial |

### 1.4 Recommended Metadata (Per Page)

Template for each city page layout.tsx:

```typescript
export const metadata = createPageMetadata({
  title: "{Primary Keyword} | JKKN AHS — Admissions 2026-27",
  description: "Looking for {keyword variant}? JKKN College of Allied Health Sciences is just {X} km from {City}. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!",
  path: "/{city}",
  keywords: ["{primary keyword}", "{secondary keyword 1}", "{secondary keyword 2}", ...],
  ogImage: { url: "https://ahs.jkkn.ac.in/{city}-ahs-hero.png", width: 1200, height: 630, alt: "{Primary Keyword} — JKKN AHS" },
});
```

---

## 4. Phase 2: Technical SEO Audit

### 2.1 Sitemap Verification

**File:** `src/app/sitemap-pages.xml/route.ts`

**Current state:** 0 of 5 city pages included in sitemap.

**Required additions:**

```typescript
// City landing pages — add these 5 entries
{ loc: 'https://ahs.jkkn.ac.in/erode', changefreq: 'monthly', priority: '0.8', lastmod: '2026-03-24' },
{ loc: 'https://ahs.jkkn.ac.in/namakkal', changefreq: 'monthly', priority: '0.8', lastmod: '2026-03-24' },
{ loc: 'https://ahs.jkkn.ac.in/salem', changefreq: 'monthly', priority: '0.8', lastmod: '2026-03-24' },
{ loc: 'https://ahs.jkkn.ac.in/tiruppur', changefreq: 'monthly', priority: '0.8', lastmod: '2026-03-24' },
{ loc: 'https://ahs.jkkn.ac.in/coimbatore', changefreq: 'monthly', priority: '0.8', lastmod: '2026-03-24' },
```

### 2.2 Canonical URL Verification

| Page | Expected Canonical | Current Canonical | Status |
|------|-------------------|-------------------|--------|
| /erode | `https://ahs.jkkn.ac.in/erode` | `https://ahs.jkkn.ac.in/` | WRONG — points to homepage |
| /namakkal | `https://ahs.jkkn.ac.in/namakkal` | `https://ahs.jkkn.ac.in/` | WRONG |
| /salem | `https://ahs.jkkn.ac.in/salem` | `https://ahs.jkkn.ac.in/` | WRONG |
| /tiruppur | `https://ahs.jkkn.ac.in/tiruppur` | `https://ahs.jkkn.ac.in/` | WRONG |
| /coimbatore | `https://ahs.jkkn.ac.in/coimbatore` | `https://ahs.jkkn.ac.in/` | WRONG |

**Root cause:** No `layout.tsx` with metadata export exists for city pages. City pages use `"use client"` which prevents `export const metadata`. The canonical from root `layout.tsx` applies to all child routes.

**Fix:** Create `layout.tsx` for each city page directory (or a shared `[city]/layout.tsx`) with `createPageMetadata()`.

### 2.3 Render Method Assessment

| Aspect | Finding | Impact |
|--------|---------|--------|
| Directive | `"use client"` on all 5 page files | All content rendered client-side via JavaScript |
| Server-side HTML | Only root layout shell — no page content in initial HTML | Google can render JS but delays indexing; metadata extraction requires JS execution |
| Metadata in HTML source | Only root layout metadata in `<head>` | Search engines see homepage metadata for city pages |
| Hydration | Full page hydration on load | Performance OK but SEO suboptimal |

**Recommendation:** Convert city pages to server components (remove `"use client"`) or move interactive parts (FAQ accordion) to a separate client component while keeping the main page as a server component.

### 2.4 Breadcrumb Audit

| Check | Status | Notes |
|-------|--------|-------|
| Visual breadcrumbs | ABSENT | No breadcrumb UI on any city page |
| BreadcrumbList JSON-LD | ABSENT | `generateBreadcrumbSchema()` in `src/lib/breadcrumb-schema.ts` exists but unused |
| Expected breadcrumb trail | — | Home > JKKN AHS > Allied Health Sciences Near [City] |

### 2.5 Core Web Vitals (Estimated)

| Metric | Target | Estimated | Confidence | Notes |
|--------|--------|-----------|------------|-------|
| LCP | <2.5s | ~1.5-2.0s | Medium | No images, lightweight text page, CSR initial load |
| FID/INP | <100ms | <50ms | High | Minimal interaction, FAQ accordion is simple |
| CLS | <0.1 | ~0.05 | Medium | No images to shift, no dynamic ad slots |

**Requires live verification via Lighthouse and Chrome DevTools.**

### 2.6 robots.txt Compatibility

**File:** `public/robots.txt`

| Check | Result |
|-------|--------|
| City pages blocked? | NO — general `Allow: /` applies |
| AI crawlers blocked? | NO — 30+ AI crawlers explicitly allowed |
| Sitemap referenced? | YES — `Sitemap: https://ahs.jkkn.ac.in/sitemap.xml` |

**Status:** Excellent — robots.txt is well-configured and does not block city pages.

---

## 5. Phase 3: Content Quality Audit

### 3.1 Cross-Page Duplication Analysis

Count identical vs unique content sections across all 5 pages:

| Section | Lines of Code | Unique? | Duplication Level |
|---------|---------------|---------|-------------------|
| TopBanner | ~15 | NO — identical text | 100% duplicate |
| HeroSection | ~65 | PARTIAL — city name, distance, description vary | 40% duplicate |
| AffiliationBar | ~15 | NO — identical | 100% duplicate |
| DistanceCard | ~30 | YES — distance, map link, description vary | 30% duplicate |
| WhyChooseSection | ~65 | PARTIAL — last reason customized, title customized | 60% duplicate |
| ProgrammesSection | ~90 | NO — identical 4 courses listed | 100% duplicate |
| PlacementHighlights | ~55 | NO — identical stats and companies | 100% duplicate |
| HowToReachSection | ~75 | YES — routes, distances, transport all vary | 20% duplicate |
| FacilitiesSection | ~70 | NO — identical 6 facilities | 100% duplicate |
| TestimonialsSection | ~50 | NO — all placeholders, identical | 100% duplicate |
| FAQSection | ~80 | PARTIAL — Q1-Q2, Q6 city-specific; Q3-Q5, Q7 shared | 50% duplicate |
| ExploreCitiesSection | ~45 | YES — different target cities | 20% duplicate |

**Overall duplication estimate: ~55-60%**

### 3.2 E-E-A-T Signal Inventory

| E-E-A-T Dimension | Present? | Evidence | Score |
|--------------------|----------|----------|-------|
| **Experience** | WEAK | Placeholder testimonials; no real student voices | 10/100 |
| **Expertise** | MODERATE | NAAC mention, MGR University affiliation, programme details | 45/100 |
| **Authoritativeness** | MODERATE | Official institution page, GBP link, campus address | 50/100 |
| **Trustworthiness** | WEAK | Placeholder testimonials undermine trust; no reviews, no accreditation grade | 25/100 |

### 3.3 Content Gaps (What Competitors Have That JKKN Doesn't)

Based on SERP analysis of top-ranking pages:

| Content Element | Nandha (Erode) | FAHS/VMRF (Salem) | AMC (Tiruppur) | Kongunadu (CBE) | JKKN City Pages |
|----------------|----------------|-------------------|----------------|-----------------|-----------------|
| Full fee structure | YES | YES | YES | YES | NO |
| Reservation/quota breakdown | YES | YES | NO | NO | NO |
| Admission step-by-step | YES | YES | Partial | Partial | NO |
| Hospital affiliation details | YES | YES | Partial | YES | Brief mention |
| Faculty profiles | YES | YES | NO | NO | NO |
| Student reviews/ratings | YES (Careers360) | YES (Shiksha) | NO | NO | Placeholders |
| Photo gallery | YES | YES | YES | YES | NO (zero images) |
| Video content | Partial | YES | NO | NO | NO |
| Scholarship info | YES | YES | NO | NO | NO |
| Comparison with alternatives | NO | NO | NO | NO | NO |
| Transport route map | NO | NO | NO | NO | YES (unique JKKN advantage) |

### 3.4 Data Accuracy Review

| Claim | City Page Value | Verified? | Correct Value | Source |
|-------|----------------|-----------|---------------|--------|
| "85%+ placements" | All 5 pages | UNVERIFIED | CLAUDE.md says "92%+ group" | Needs admin confirmation |
| "5-7 LPA highest" | All 5 pages | UNVERIFIED | CLAUDE.md says "25 LPA international, 12 LPA domestic" | Discrepancy |
| "4 programmes" | All 5 pages (stat box) | WRONG | AHS website lists 9 courses | Website has 9 department pages |
| "2.5-4 LPA average" | Placement section | UNVERIFIED | CLAUDE.md says "3.2-4.5 LPA" | Discrepancy |
| "6+ top recruiters" | Placement section | PARTIAL | Lists 6 companies; CLAUDE.md says "60+ recruiters" | Underreported |

---

## 6. Phase 4: Schema & Structured Data Audit

### 4.1 Current Schema Inventory (City Pages)

| Schema Type | Present? | Notes |
|-------------|----------|-------|
| FAQPage | NO | 7 FAQs exist in content but no JSON-LD |
| BreadcrumbList | NO | `generateBreadcrumbSchema()` available but unused |
| Course | NO | 4 courses listed in content but no schema |
| LocalBusiness | NO | No location-specific schema |
| EducationalOrganization | INHERITED | Root layout has CollegeOrUniversity but not city-specific |
| WebPage | NO | No page-type identification |
| SpeakableSpecification | NO | No voice search optimization |

### 4.2 Required Schema Specifications

**For each city page layout.tsx, implement these 5 schemas:**

#### Schema 1: FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-03-24",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best allied health sciences college near {City}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{Answer from FAQ section}"
      }
    }
    // ... 6 more questions matching page FAQ content
  ]
}
```

#### Schema 2: BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "AHS College Near {City}", "item": "https://ahs.jkkn.ac.in/{city}" }
  ]
}
```

#### Schema 3: EducationalOrganization (City-Enhanced)

```json
{
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/",
  "areaServed": {
    "@type": "City",
    "name": "{City}",
    "containedInPlace": { "@type": "State", "name": "Tamil Nadu" }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "sameAs": "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7"
}
```

#### Schema 4: SpeakableSpecification

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "{Page Title}",
  "url": "https://ahs.jkkn.ac.in/{city}",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", "h1", "h2"]
  }
}
```

#### Schema 5: Course (Summary — 4 programmes)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Allied Health Science Courses Available Near {City}",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "BPT (Bachelor of Physiotherapy)",
        "provider": { "@type": "CollegeOrUniversity", "name": "JKKN College of Allied Health Sciences" },
        "timeRequired": "P4Y6M"
      }
    }
    // ... 3 more courses
  ]
}
```

### 4.3 Reference Implementation

The department page `src/app/cardiac-technology/layout.tsx` demonstrates the exact pattern:
- Lines 1-21: `createPageMetadata()` with full metadata
- Lines 23-85: Course JSON-LD schema
- Lines 87-96: Speakable schema
- Lines 98-106: BreadcrumbList schema
- Lines 108-154: FAQPage schema
- Lines 156-182: Layout component with 4 `<script>` tags

City pages should follow this exact same pattern.

---

## 7. Phase 5: Internal Linking Audit

### 5.1 Current Link Topology (City Pages)

```
INBOUND LINKS TO CITY PAGES:
─────────────────────────────
Homepage (src/app/page.tsx)              → 0 links to city pages
Navbar (src/components/layout/Navbar.tsx) → 5 links (deep submenu, lines 37-41)
Footer (src/components/layout/Footer.tsx) → 0 links
Mobile Nav (src/lib/mobileNavLinks.ts)   → 0 links
Department pages (9 courses)             → 0 links
Blog pages                               → 0 links
Admission page                           → 0 links
Contact page                             → 0 links
Facility pages (9 facilities)            → 0 links

TOTAL INBOUND: 5 (Navbar only)

OUTBOUND LINKS FROM CITY PAGES:
─────────────────────────────────
To other city pages (ExploreCitiesSection)  → 4 per page
To homepage (View All Programmes)           → 1 per page
To admission form (external)                → 6 per page (hero + 4 programme + bottom)
To Google Maps (external)                   → 1 per page
To phone number (tel:)                      → 2 per page

TOTAL OUTBOUND: ~14 per page
```

### 5.2 Recommended Internal Links to Add

| Source Page | Source File | Anchor Text | Target City Page | Priority |
|-------------|-----------|-------------|-----------------|----------|
| **Homepage** | `src/app/page.tsx` | "Allied Health Sciences Near Erode" | `/erode` | CRITICAL |
| **Homepage** | `src/app/page.tsx` | "Allied Health Sciences Near Salem" | `/salem` | CRITICAL |
| **Homepage** | `src/app/page.tsx` | "Allied Health Sciences Near Coimbatore" | `/coimbatore` | CRITICAL |
| **Homepage** | `src/app/page.tsx` | "Allied Health Sciences Near Namakkal" | `/namakkal` | CRITICAL |
| **Homepage** | `src/app/page.tsx` | "Allied Health Sciences Near Tiruppur" | `/tiruppur` | CRITICAL |
| **Footer** | `src/components/layout/Footer.tsx` | "Erode" | `/erode` | HIGH |
| **Footer** | `src/components/layout/Footer.tsx` | "Salem" | `/salem` | HIGH |
| **Footer** | `src/components/layout/Footer.tsx` | "Coimbatore" | `/coimbatore` | HIGH |
| **Footer** | `src/components/layout/Footer.tsx` | "Namakkal" | `/namakkal` | HIGH |
| **Footer** | `src/components/layout/Footer.tsx` | "Tiruppur" | `/tiruppur` | HIGH |
| **Mobile Nav** | `src/lib/mobileNavLinks.ts` | "Near Erode" (under new "Nearby Cities" group) | `/erode` | HIGH |
| **Mobile Nav** | `src/lib/mobileNavLinks.ts` | "Near Salem" | `/salem` | HIGH |
| **Mobile Nav** | `src/lib/mobileNavLinks.ts` | "Near Coimbatore" | `/coimbatore` | HIGH |
| **Mobile Nav** | `src/lib/mobileNavLinks.ts` | "Near Namakkal" | `/namakkal` | HIGH |
| **Mobile Nav** | `src/lib/mobileNavLinks.ts` | "Near Tiruppur" | `/tiruppur` | HIGH |
| **Admission page** | `src/app/admission/page.tsx` | "Students from [City]" | All 5 | MEDIUM |
| **Department pages** (9) | Each department `page.tsx` | "This course is accessible from [City]" | Relevant city pages | MEDIUM |
| **Blog posts** | Future blog content | Contextual city mentions | Relevant city page | MEDIUM |

### 5.3 Link Equity Distribution Goal

```
Current state:
Homepage ─(PageRank)─→ Navbar submenu (3rd level) ─(weak)─→ City pages

Target state:
Homepage ─(direct link)─→ City pages (strong equity)
Footer ─(sitewide link)─→ City pages (persistent equity on every page)
Mobile Nav ─(sitewide)─→ City pages (mobile equity)
Department pages ─(contextual)─→ City pages (topical relevance)
City pages ─(inter-link)─→ Other city pages (already exists)
City pages ─(contextual)─→ Department pages (reverse flow)
```

---

## 8. Phase 6: SERP Competitive Analysis

### 6.1 Keyword-by-Keyword SERP Landscape

#### Keyword 1: "allied health science colleges in erode"

| Position | Result | Type | Threat |
|----------|--------|------|--------|
| 1 | Nandha College (official site) | Institution | HIGH — Erode-native, dedicated domain |
| 2 | Nandha — alliedhealthadmission.com | Aggregator | MEDIUM |
| 3 | Nandha — mymathews.com | Directory | LOW |
| 4 | Nandha — Careers360 | Aggregator | HIGH — DA 80+ |
| 5 | Nandha — colleges-india.com | Aggregator | LOW |
| 6 | Nandha — Shiksha (courses) | Aggregator | HIGH — DA 85+ |
| **7** | **JKKN AHS (homepage)** | **Institution** | **OWN** |
| 8 | Nandha — Justdial | Local listing | LOW |
| 9 | Nandha — Shiksha (main) | Aggregator | MEDIUM |
| 10 | JKK Munirajah Institute | Institution | MEDIUM |

**Analysis:** Nandha College owns 7 of 10 positions. JKKN's homepage ranks #7 but with generic TN title. A dedicated `/erode/` page with proper metadata could realistically reach positions 3-5, displacing aggregator duplicates.

**Achievable target:** Position 3-5 (within 3-6 months with fixes)

#### Keyword 2: "allied health science college namakkal"

| Position | Result | Type | Threat |
|----------|--------|------|--------|
| **1** | **JKKN AHS (homepage)** | **Institution** | **OWN — DOMINANT** |
| 2 | Jayamadhi College | Aggregator listing | LOW |
| 3 | Vivekanandha AHS — Shiksha | Aggregator | MEDIUM |
| **4** | **JKKN — alliedhealthadmission.com** | **Aggregator listing** | **OWN (secondary)** |
| 5 | Top AHS Colleges Namakkal — mymathews | Directory | LOW |
| 6 | Paavai Institute | Aggregator listing | LOW |
| 7 | PGP Institute | Aggregator listing | LOW |
| 8 | Vivekanandha AHS | Aggregator listing | LOW |
| 9 | Annai JKK Sampoorani | Aggregator listing | LOW |
| 10 | Excel Institute | Aggregator listing | LOW |

**Analysis:** JKKN DOMINATES this SERP — #1 (official) + #4 (aggregator). Home district advantage. A dedicated `/namakkal/` page with proper metadata would cement this position and capture FAQ rich results.

**Achievable target:** Position 1 (maintain, strengthen with rich results)

#### Keyword 3: "allied health science courses in salem"

| Position | Result | Type | Threat |
|----------|--------|------|--------|
| 1 | FAHS Salem (VMRF-DU) | Institution | VERY HIGH — Deemed university, NAAC |
| 2 | Salem County CTE (USA) | Irrelevant | DISPLACEMENT OPPORTUNITY |
| 3 | GMKMC Salem | Govt institution | HIGH — government credibility |
| 4 | Best AHS Salem — mymathews | Directory | MEDIUM |
| 5 | SPC AHS Salem | Institution | MEDIUM |
| 6 | VMRF-DU Programs | Institution | HIGH |
| 7 | Shanmuga College | Aggregator listing | LOW |
| 8 | Dharan College | Institution | MEDIUM |
| 9 | Dharan — aggregator | Aggregator listing | LOW |
| 10 | Salem College (USA) | Irrelevant | DISPLACEMENT OPPORTUNITY |

**Analysis:** JKKN has ZERO presence. 2 of 10 results are USA-based "Salem" — easy displacement targets. FAHS/VMRF-DU is the dominant player (deemed university). JKKN's `/salem/` page with proper optimization could realistically enter top 7, potentially displacing USA results and weaker aggregator listings.

**Achievable target:** Position 5-7 (within 3-6 months with fixes)

#### Keyword 4: "allied health science courses in tiruppur"

| Position | Result | Type | Threat |
|----------|--------|------|--------|
| **1** | **JKKN AHS (homepage)** | **Institution** | **OWN — but fragile** |
| 2 | AMC College Tiruppur | Directory | HIGH — Tiruppur-native |
| 3 | AMC — alliedhealthadmission.com | Aggregator | MEDIUM |
| 4 | TN MGR Medical University | Official | HIGH |
| 5 | Amrita Vishwa Vidyapeetham | Institution | MEDIUM |
| 6 | KG College (Coimbatore) | Institution | LOW |
| 7 | CollegeDekho — TN AHS | Aggregator | MEDIUM |
| 8 | CollegeBatch — TN AHS | Aggregator | MEDIUM |
| 9 | Kongunadu (Coimbatore) | Institution | LOW |
| 10 | Sri Kumaran Institute Tiruppur | Aggregator listing | MEDIUM |

**Analysis:** JKKN is #1 but ranking with homepage, not a dedicated page. AMC College is the direct local competitor. A dedicated `/tiruppur/` page would solidify this position against AMC.

**Achievable target:** Position 1 (defend and strengthen)

#### Keyword 5: "allied health sciences colleges in coimbatore"

| Position | Result | Type | Threat |
|----------|--------|------|--------|
| 1 | Kongunadu Institute | Institution | HIGH |
| 2 | SNS College | Institution | HIGH |
| 3 | KG College | Institution | HIGH |
| 4 | Muthu College | Institution | MEDIUM |
| 5 | CollegeBatch — CBE AHS | Aggregator | MEDIUM |
| 6 | BSD College | Aggregator listing | LOW |
| 7 | mymathews — Best AHS CBE | Directory | MEDIUM |
| 8 | KMCH Institute | Institution | HIGH |
| 9 | studyworldindia | Blog/article | LOW |
| 10 | KG College (parent) | Institution | HIGH |

**Analysis:** JKKN has ZERO presence. Coimbatore has 14+ AHS colleges — the most competitive city SERP. JKKN's `/coimbatore/` page must differentiate on value proposition (lower fees + strong placements vs Coimbatore premium pricing). Realistic entry to top 10 possible by displacing weaker aggregator listings.

**Achievable target:** Position 7-10 (within 6 months with strong content + links)

### 6.2 SERP Features Opportunity Matrix

| Feature | Erode | Namakkal | Salem | Tiruppur | Coimbatore |
|---------|-------|----------|-------|----------|------------|
| FAQ Rich Results | HIGH | HIGH | HIGH | HIGH | HIGH |
| Featured Snippet | MEDIUM | HIGH | MEDIUM | MEDIUM | LOW |
| Local Pack | MEDIUM | HIGH | MEDIUM | MEDIUM | LOW |
| PAA Boxes | HIGH | HIGH | HIGH | HIGH | HIGH |
| AI Overview Citation | MEDIUM | HIGH | LOW | MEDIUM | LOW |
| Breadcrumb in SERP | HIGH | HIGH | HIGH | HIGH | HIGH |

### 6.3 People Also Ask (PAA) — Common Questions to Target

Based on SERP analysis, these PAA questions appear across city keywords:

1. "What is allied health science?"
2. "Which is the best AHS college in [City]?"
3. "What are the fees for BSc allied health in Tamil Nadu?"
4. "What is the salary after BSc allied health science?"
5. "Is BPT a good career option?"
6. "How many AHS colleges are in [City]?"
7. "What are the eligibility requirements for AHS courses?"
8. "Is allied health science better than nursing?"

**All 8 are answerable in city page FAQ sections — most already have matching questions.**

---

## 9. Phase 7: Mobile & UX Audit

### 7.1 Mobile Navigation Audit

| Check | Status | Impact |
|-------|--------|--------|
| City pages in mobile bottom nav | ABSENT | 80%+ users on mobile cannot discover city pages |
| City pages in hamburger menu | YES (via Navbar) | Only path for mobile discovery, requires 3 taps: Menu > About > Why Students Choose JKKN > City |
| BottomNav component renders on city pages | UNKNOWN — city pages bypass LayoutWrapper | May not show BottomNav at all |

**Critical issue:** City pages render `<Navbar/>` and `<Footer/>` directly (lines 4, 25 of erode/page.tsx) instead of using `<LayoutWrapper>`. This means the mobile BottomNav component may not appear on city pages at all.

### 7.2 Mobile Layout Checks

| Element | Desktop Behavior | Mobile Behavior | Issues |
|---------|-----------------|-----------------|--------|
| Hero stats grid | 4-column (`grid-cols-4`) | 2-column (`grid-cols-2`) | OK |
| Programme cards | 4-column | 1-column | OK |
| FAQ accordion | Full width | Full width | OK — but touch targets need verification |
| CTA buttons | Side by side | Stacked (`flex-col`) | OK |
| Distance card | Horizontal | Vertical (`flex-col`) | OK |
| TopBanner | Horizontal | Wrapping (`flex-wrap`) | May overlap on very small screens (<350px) |
| Text sizes | Standard | `text-xs` (12px) and `text-[11px]` in programme details | TOO SMALL for mobile readability |

### 7.3 Accessibility Checks

| Check | Status | WCAG Level | Notes |
|-------|--------|------------|-------|
| `aria-expanded` on FAQ accordions | MISSING | AA | Accordion buttons lack aria attributes |
| Skip navigation link | MISSING | AA | No skip-to-content link |
| Focus visible styles | DEFAULT | AA | Browser default focus rings — may not be visible enough |
| Alt text on icons | N/A | — | Lucide icons are decorative; no informational images exist |
| Color contrast (green on cream) | PASS | AA | `#006837` on `#FBFBEE` passes AA |
| Color contrast (white on green) | PASS | AA | `#FFFFFF` on `#006837` passes AA |
| Landmark roles | PARTIAL | A | `<section>` used but no `<main>`, `<nav>`, or `<aside>` |

---

## 10. Phase 8: Final Analysis & Fix Roadmap

### 10.1 Composite Score Summary

| Dimension | Current Score | Target (Sprint 4) | Gap |
|-----------|---------------|-------------------|-----|
| D1: On-Page SEO | 15.6 | 90 | +74.4 |
| D2: Technical SEO | 59.6 | 85 | +25.4 |
| D3: Content Quality | 44.5 | 75 | +30.5 |
| D4: Schema | 5.0 | 90 | +85.0 |
| D5: Internal Linking | 19.5 | 80 | +60.5 |
| D6: SERP Competitive | 22.5 | 60 | +37.5 |
| D7: Mobile | 55.6 | 80 | +24.4 |
| D8: Content Gaps | 12.0 | 55 | +43.0 |
| D9: Keyword Alignment | 27.5 | 85 | +57.5 |
| D10: UX/Conversion | 50.6 | 70 | +19.4 |
| **COMPOSITE** | **30.8** | **79.5** | **+48.7** |

### 10.2 Fix Priority Framework

| Priority | Criteria | Impact | Effort |
|----------|----------|--------|--------|
| P0: CRITICAL | Blocks indexing or creates canonical confusion | Very High | Low-Medium |
| P1: HIGH | Directly impacts ranking ability | High | Medium |
| P2: MEDIUM | Improves competitive position | Medium | Medium-High |
| P3: LOW | Enhances quality but not blocking | Low-Medium | Variable |

### 10.3 Sprint-Based Implementation Roadmap

#### Sprint 1: Foundation Fixes (Week 1) — Score: 30.8 → 60

| # | Fix | Priority | Files | Impact |
|---|-----|----------|-------|--------|
| 1 | Create layout.tsx for each city page with metadata | P0 | 5 new files | D1: +65, D9: +40 |
| 2 | Add 5 city pages to sitemap-pages.xml | P0 | 1 file edit | D2: +20 |
| 3 | Add FAQPage JSON-LD to each layout.tsx | P0 | 5 files | D4: +25 |
| 4 | Add BreadcrumbList JSON-LD to each layout.tsx | P0 | 5 files | D4: +25 |
| 5 | Rewrite H1 tags to match target keywords | P1 | 5 file edits | D9: +30 |
| 6 | Integrate keywords into H2 tags | P1 | 5 file edits | D9: +15 |

**Projected composite score after Sprint 1: ~60/100**

#### Sprint 2: Linking & Schema (Week 2) — Score: 60 → 75

| # | Fix | Priority | Files | Impact |
|---|-----|----------|-------|--------|
| 7 | Add city page links to Footer | P1 | 1 file edit | D5: +20 |
| 8 | Add city pages to mobileNavLinks.ts | P1 | 1 file edit | D5: +15, D7: +15 |
| 9 | Add city page links to Homepage | P1 | 1 file edit | D5: +20 |
| 10 | Add EducationalOrganization schema with areaServed | P1 | 5 files | D4: +20 |
| 11 | Add SpeakableSpecification schema | P2 | 5 files | D4: +10 |
| 12 | Add visual breadcrumbs UI component | P2 | 5 files + 1 new component | D2: +10 |

**Projected composite score after Sprint 2: ~75/100**

#### Sprint 3: Content Enhancement (Week 3-4) — Score: 75 → 82

| # | Fix | Priority | Files | Impact |
|---|-----|----------|-------|--------|
| 13 | Differentiate ProgrammesSection per city | P2 | 5 file edits | D3: +10 |
| 14 | Add real testimonials (replace placeholders) | P2 | 5 file edits | D3: +15, D10: +10 |
| 15 | Add admission process section | P2 | 5 file edits | D8: +15 |
| 16 | Add campus images/gallery to city pages | P2 | 5 file edits + images | D8: +15 |
| 17 | Fix data accuracy (9 courses, not 4; correct placement stats) | P1 | 5 file edits | D3: +10 |
| 18 | Add department page cross-links to city pages | P2 | 9 file edits | D5: +10 |

**Projected composite score after Sprint 3: ~82/100**

#### Sprint 4: Advanced Optimization (Week 5-6) — Score: 82 → 88

| # | Fix | Priority | Files | Impact |
|---|-----|----------|-------|--------|
| 19 | Convert city pages to server components (remove "use client") | P2 | 5 file refactors | D2: +10 |
| 20 | Add WhatsApp/Chat button | P3 | 1 shared component | D10: +10 |
| 21 | Add scholarship information section | P3 | 5 file edits | D8: +5 |
| 22 | Add fee structure section | P3 | 5 file edits | D8: +10 |
| 23 | Create city-specific blog posts linking to city pages | P3 | 5 new blog posts | D5: +10, D6: +10 |
| 24 | Submit to aggregator sites (CollegeBatch, mymathews) | P2 | External actions | D6: +15 |
| 25 | Add OG images per city page | P3 | 5 image files | D1: +5 |

**Projected composite score after Sprint 4: ~88/100**

### 10.4 Score Progression Projection

```
Sprint 0 (Current):  ████████░░░░░░░░░░░░  30.8/100  POOR
Sprint 1 (Week 1):   ████████████░░░░░░░░  60.0/100  FAIR → GOOD
Sprint 2 (Week 2):   ███████████████░░░░░  75.0/100  GOOD
Sprint 3 (Week 3-4): ████████████████░░░░  82.0/100  GOOD → EXCELLENT
Sprint 4 (Week 5-6): █████████████████░░░  88.0/100  EXCELLENT
```

---

## Appendix: SERP Intelligence Data

### JKKN Current SERP Positions (March 2026)

| Keyword | Position | URL Ranking | Notes |
|---------|----------|-------------|-------|
| allied health science colleges in erode | #7 | ahs.jkkn.ac.in (homepage) | Nandha dominates 7/10 |
| allied health science college namakkal | #1 | ahs.jkkn.ac.in (homepage) | Also #4 via aggregator |
| allied health science courses in salem | Not in top 10 | — | FAHS/VMRF-DU dominates |
| allied health science courses in tiruppur | #1 | ahs.jkkn.ac.in (homepage) | AMC College is #2 threat |
| allied health sciences colleges in coimbatore | Not in top 10 | — | 14+ local colleges competing |
| best allied health science college in tamil nadu | #6 | ahs.jkkn.ac.in (homepage) | Aggregators dominate top 5 |
| allied health science college near me tamil nadu | #3 | ahs.jkkn.ac.in (homepage) | Strong — needs GBP reinforcement |

### Key Competitors (Per City)

| City | Primary Competitor | Competitor Advantage | JKKN Counter-Strategy |
|------|-------------------|---------------------|----------------------|
| Erode | Nandha College of AHS | Erode-native, 10 programs, Careers360 profile | Dedicated /erode/ page + "closer than you think" messaging |
| Namakkal | Vivekanandha AHS | Women's institution since 1998 | Already #1 — strengthen with schema + content depth |
| Salem | FAHS/VMRF-DU | Deemed university, NAAC, 26 courses | "Affordable alternative" + transport advantage messaging |
| Tiruppur | AMC College | Tiruppur-native | Already #1 — defend with dedicated page + aggregator presence |
| Coimbatore | Kongunadu, KG, KMCH | 14 institutions in Coimbatore itself | "Better value campus" + unique selling proposition differentiation |

### Aggregator Presence Opportunities

| Aggregator | JKKN Listed? | Action |
|-----------|-------------|--------|
| alliedhealthadmission.com | YES | Update profile with current data |
| CollegeBatch | UNKNOWN | Submit profile if not listed |
| Collegedekho | UNKNOWN | Submit profile |
| mymathews.com | Partial | Ensure listed in all city listicles |
| Careers360 | UNKNOWN | Create/claim profile |
| Shiksha | UNKNOWN | Create/claim profile |
| Justdial | UNKNOWN | Verify GBP-linked listing |

---

*End of Execution Plan Document*
