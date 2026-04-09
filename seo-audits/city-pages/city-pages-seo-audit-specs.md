# City Pages SEO Audit — Specifications

> **Document:** Audit Specifications & Scoring Framework
> **Site:** https://ahs.jkkn.ac.in
> **Pages Audited:** `/erode/`, `/namakkal/`, `/salem/`, `/tiruppur/`, `/coimbatore/`
> **Date:** 2026-03-24
> **Auditor:** Digital Optimization Team
> **Status:** CRITICAL — Estimated Composite Score: 30.8/100

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Pages Under Audit](#2-pages-under-audit)
3. [Scoring Methodology](#3-scoring-methodology)
4. [Dimension D1: On-Page SEO (20%)](#4-dimension-d1-on-page-seo-20)
5. [Dimension D2: Technical SEO (15%)](#5-dimension-d2-technical-seo-15)
6. [Dimension D3: Content Quality (15%)](#6-dimension-d3-content-quality-15)
7. [Dimension D4: Schema & Structured Data (10%)](#7-dimension-d4-schema--structured-data-10)
8. [Dimension D5: Internal Linking (10%)](#8-dimension-d5-internal-linking-10)
9. [Dimension D6: SERP Competitiveness (10%)](#9-dimension-d6-serp-competitiveness-10)
10. [Dimension D7: Mobile & Accessibility (5%)](#10-dimension-d7-mobile--accessibility-5)
11. [Dimension D8: Content Gaps (5%)](#11-dimension-d8-content-gaps-5)
12. [Dimension D9: Keyword Alignment (5%)](#12-dimension-d9-keyword-alignment-5)
13. [Dimension D10: UX & Conversion (5%)](#13-dimension-d10-ux--conversion-5)
14. [Cross-Page Comparison Matrix](#14-cross-page-comparison-matrix)
15. [H1 vs Target Keyword Analysis](#15-h1-vs-target-keyword-analysis)
16. [Composite Score Formula](#16-composite-score-formula)
17. [Pass/Fail Thresholds](#17-passfail-thresholds)
18. [Appendix A: File Path Reference](#appendix-a-file-path-reference)
19. [Appendix B: Reference Implementation](#appendix-b-reference-implementation)

---

## 1. Executive Summary

All 5 city landing pages on `ahs.jkkn.ac.in` suffer from **critical SEO deficiencies** that render them virtually invisible to search engines. Despite targeting high-intent location-based keywords, these pages:

- **Inherit homepage metadata** instead of having page-specific titles and descriptions
- **Point canonical URLs to the homepage** rather than their own URLs
- **Are completely absent from the XML sitemap** (0 of 5 included)
- **Have zero JSON-LD schema markup** (no FAQPage, BreadcrumbList, Course, or LocalBusiness)
- **Lack breadcrumbs** — neither visual UI breadcrumbs nor structured data
- **Are invisible on mobile** — zero entries in mobile bottom navigation
- **Contain placeholder testimonials** with `[Student Name]`, `[Course]`, `[Year]` literals
- **Have H1 tags that don't match target keywords** — using "Best Allied Health Sciences College Near [City]" instead of the target keyword patterns
- **Share identical content sections** across all 5 pages (Programmes, Placements, Facilities)
- **Receive zero internal links** from homepage, footer, department pages, blog, or admission page

**Estimated current composite SEO score: 30.8/100 (POOR)**

The site already has the infrastructure to fix these issues — `createPageMetadata()` in `src/lib/metadata.ts` and `generateBreadcrumbSchema()` in `src/lib/breadcrumb-schema.ts` are both available but unused on city pages. The department pages (e.g., `cardiac-technology/layout.tsx`) demonstrate the correct implementation pattern with 4 JSON-LD schemas.

---

## 2. Pages Under Audit

| # | URL Path | Full URL | Primary Keyword | Secondary Keywords | Source File |
|---|----------|----------|-----------------|--------------------|-------------|
| 1 | `/erode/` | `https://ahs.jkkn.ac.in/erode` | allied health science colleges in erode | allied health science colleges erode | `src/app/erode/page.tsx` (744 lines) |
| 2 | `/namakkal/` | `https://ahs.jkkn.ac.in/namakkal` | allied health science college namakkal | allied health science courses in namakkal | `src/app/namakkal/page.tsx` |
| 3 | `/salem/` | `https://ahs.jkkn.ac.in/salem` | allied health science courses in salem | allied health science salem, allied health science in salem | `src/app/salem/page.tsx` |
| 4 | `/tiruppur/` | `https://ahs.jkkn.ac.in/tiruppur` | allied health science courses in tiruppur | allied health science tiruppur, allied health science in tiruppur | `src/app/tiruppur/page.tsx` |
| 5 | `/coimbatore/` | `https://ahs.jkkn.ac.in/coimbatore` | allied health sciences colleges in coimbatore | allied health science colleges in coimbatore, allied health science courses in coimbatore, top allied health science colleges in coimbatore | `src/app/coimbatore/page.tsx` (746 lines) |

### Common Architecture (All 5 Pages)

All city pages follow an identical component structure:

```
ErodePage (or CityPage)
├── Navbar
├── TopBanner (Admissions Open 2026-27)
├── HeroSection (H1 + stats + CTAs)
├── AffiliationBar (NAAC + affiliation)
├── DistanceCard (km distance from city)
├── WhyChooseSection (6 reasons)
├── ProgrammesSection (4 courses)
├── PlacementHighlights (stats + companies)
├── HowToReachSection (transport routes)
├── FacilitiesSection (6 facilities)
├── TestimonialsSection (2 placeholders + 1 note card)
├── FAQSection (7 FAQs)
├── ExploreCitiesSection (links to other 4 cities)
└── Footer
```

**Critical architecture issue:** All pages use `"use client"` directive, which prevents Next.js metadata export. Without a `layout.tsx` wrapper, pages cannot have server-side metadata.

---

## 3. Scoring Methodology

### 3.1 Dimension Weights

| Dimension | ID | Weight | Rationale |
|-----------|-----|--------|-----------|
| On-Page SEO | D1 | 20% | Title, description, and headings are the primary ranking signals |
| Technical SEO | D2 | 15% | Sitemap, canonical, render method, breadcrumbs affect crawling and indexing |
| Content Quality | D3 | 15% | Unique, E-E-A-T-aligned content drives authority |
| Schema & Structured Data | D4 | 10% | Rich results eligibility (FAQPage, Course, LocalBusiness) |
| Internal Linking | D5 | 10% | Link equity distribution and crawl discovery |
| SERP Competitiveness | D6 | 10% | Competitive landscape and feature opportunity |
| Mobile & Accessibility | D7 | 5% | Mobile-first indexing and user accessibility |
| Content Gaps | D8 | 5% | Missing sections that competitors have |
| Keyword Alignment | D9 | 5% | H1/H2/body keyword targeting accuracy |
| UX & Conversion | D10 | 5% | CTA effectiveness and conversion path |
| **Total** | | **100%** | |

### 3.2 Scoring Scale

Each individual check is scored 0-100:

| Score Range | Rating | Meaning |
|-------------|--------|---------|
| 90-100 | Excellent | Best practice met, competitive advantage |
| 70-89 | Good | Meets standards, minor optimization possible |
| 50-69 | Fair | Functional but underperforming |
| 25-49 | Poor | Significant gaps, hurting rankings |
| 0-24 | Critical | Fundamentally broken, must fix immediately |

### 3.3 Dimension Score Calculation

```
Dimension Score = Average of all checks within that dimension
Weighted Score = Dimension Score × Weight
Composite Score = Sum of all Weighted Scores
```

---

## 4. Dimension D1: On-Page SEO (20%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State (All 5 Pages) | Score |
|---|-------|----------------|------------------|-----------------------------|-------|
| D1.1 | Title Tag | Page-specific title with primary keyword | 100: unique + keyword + ≤60 chars; 50: exists but generic; 0: missing/inherited | Inherited from root layout: "Best Allied Health Science Colleges in Tamilnadu \| JKKN" — homepage title, not page-specific | **0** |
| D1.2 | Meta Description | Unique description with keyword and CTA | 100: unique + keyword + CTA + ≤155 chars; 50: exists but generic; 0: missing/inherited | Inherited from root layout: generic Tamil Nadu description, no city mention | **0** |
| D1.3 | Canonical URL | Self-referencing canonical | 100: correct self-canonical; 50: exists but wrong; 0: missing or pointing to wrong page | Points to `https://ahs.jkkn.ac.in/` (homepage) instead of `/erode/` etc. | **0** |
| D1.4 | H1 Tag | Single H1 with primary keyword | 100: single H1 matching target keyword; 70: H1 present but keyword mismatch; 0: no H1 | H1 exists: "Best Allied Health Sciences College Near [City]" — does NOT match target keyword pattern | **30** |
| D1.5 | H2 Structure | Logical H2 hierarchy with keyword variations | 100: 5+ H2s with keywords; 70: H2s present but generic; 50: few H2s | 7 H2s present but generic: "Programmes Offered", "Placement Highlights", etc. — zero keyword integration | **40** |
| D1.6 | Meta Keywords | Keywords meta tag | 100: relevant keywords; 0: missing | No `keywords` meta tag — `createPageMetadata()` supports it but not used | **0** |
| D1.7 | Open Graph Tags | OG title, description, image, URL | 100: all OG tags with page-specific values; 50: inherited; 0: missing | Inherited from root — OG image/title/desc all point to homepage | **0** |
| D1.8 | Twitter Card | Twitter card meta tags | 100: page-specific; 50: inherited; 0: missing | Inherited from root layout | **0** |
| D1.9 | URL Structure | Clean, keyword-rich URL | 100: `/city-name/` with keyword; 70: clean but generic; 50: acceptable | `/erode/`, `/salem/` etc. — clean but no keyword in URL (acceptable for city pages) | **70** |
| D1.10 | Alt Text on Images | Descriptive alt attributes | 100: all images have keyword-rich alt; 50: some alts; 0: no images or no alts | No images used — all content is text/icon based (Lucide icons have no alt) | **N/A** |

### D1 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 9 (excluding N/A) |
| Sum of scores | 140 |
| **Average (D1 Score)** | **15.6/100** |
| **Weighted contribution** | 15.6 × 0.20 = **3.1** |

---

## 5. Dimension D2: Technical SEO (15%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D2.1 | XML Sitemap Inclusion | All 5 URLs in sitemap-pages.xml | 100: all 5 present; per-page: 20 pts each; 0: none present | 0 of 5 city pages in `sitemap-pages.xml` — completely missing | **0** |
| D2.2 | robots.txt | No blocking rules for city pages | 100: allowed; 0: blocked | Allowed — `robots.txt` has no city-page-specific blocks; general `Allow: /` applies | **100** |
| D2.3 | Render Method | SSR/SSG preferred over CSR | 100: SSR/SSG; 50: CSR with data; 25: pure CSR | Pure CSR — `"use client"` with no server-side metadata; all content rendered client-side | **25** |
| D2.4 | Breadcrumb Schema | BreadcrumbList JSON-LD | 100: correct schema; 0: missing | Missing — `generateBreadcrumbSchema()` exists in `src/lib/breadcrumb-schema.ts` but unused | **0** |
| D2.5 | Visual Breadcrumbs | UI breadcrumb navigation | 100: present with links; 0: absent | Absent — no breadcrumb UI component on any city page | **0** |
| D2.6 | Page Speed (Mobile) | Lighthouse performance ≥90 | 100: ≥90; 70: 70-89; 50: 50-69; 25: <50 | Estimated ~70 (CSR with Lucide icons, no images, minimal JS) — needs live verification | **70** |
| D2.7 | Page Speed (Desktop) | Lighthouse performance ≥90 | Same scale | Estimated ~85 (lightweight page, no images) — needs live verification | **85** |
| D2.8 | Core Web Vitals | LCP <2.5s, FID <100ms, CLS <0.1 | 100: all pass; 70: 2/3 pass; 50: 1/3 | Estimated pass — lightweight pages with no layout shift sources (no images, no dynamic embeds) | **75** |
| D2.9 | HTTPS | Secure connection | 100: HTTPS; 0: HTTP | HTTPS — `https://ahs.jkkn.ac.in` confirmed in sitemap and metadata | **100** |
| D2.10 | Hreflang/Language | Declared page language | 100: lang declared; 50: inherited; 0: missing | Inherited from root layout `<html lang="en">` — acceptable | **80** |
| D2.11 | Mobile-First Indexing | Responsive design, no separate mobile URL | 100: responsive; 50: separate mobile; 0: not mobile-friendly | Responsive — Tailwind breakpoints (`sm:`, `md:`, `lg:`) used throughout | **90** |
| D2.12 | Structured URL Hierarchy | Clean hierarchy: domain/city/ | 100: clean flat; 70: nested but logical | Clean: `ahs.jkkn.ac.in/erode/` — flat, city-based | **90** |

### D2 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 12 |
| Sum of scores | 715 |
| **Average (D2 Score)** | **59.6/100** |
| **Weighted contribution** | 59.6 × 0.15 = **8.9** |

---

## 6. Dimension D3: Content Quality (15%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D3.1 | Content Uniqueness | Unique content per page (not copy-pasted) | 100: >80% unique; 70: 50-80%; 50: 30-50%; 25: <30% | ~30% unique — only HeroSection, DistanceCard, WhyChooseSection, HowToReachSection, FAQSection vary per city; ProgrammesSection, PlacementHighlights, FacilitiesSection are identical across all 5 | **30** |
| D3.2 | Word Count | Sufficient content depth | 100: >2000 words; 80: 1500-2000; 60: 1000-1500; 40: <1000 | Estimated ~1200-1500 words per page (hero, reasons, programmes, placements, transport, facilities, FAQs combined) | **60** |
| D3.3 | E-E-A-T Signals | Experience, Expertise, Authority, Trust markers | 100: strong E-E-A-T; 50: some signals; 25: weak | Weak — NAAC mentioned but no grade, no faculty credentials, no research citations, placeholder testimonials | **25** |
| D3.4 | Testimonials Authenticity | Real student testimonials | 100: verified real testimonials; 50: appear real; 0: placeholders | ALL pages have literal placeholders: `[Student Name]`, `[Course]`, `[Year]`, `[Company]` | **0** |
| D3.5 | Local Relevance | City-specific content depth | 100: deep local content; 70: moderate; 50: surface mentions; 25: generic | Moderate — distance, transport routes, and "Why [City] Students" sections are customized; rest is generic | **50** |
| D3.6 | FAQ Quality | Comprehensive, keyword-rich FAQs | 100: 7+ unique FAQs with keywords; 70: 5-6; 50: 3-4; 25: generic | 7 FAQs per page with some city-specific questions — good variety but could be more keyword-optimized | **65** |
| D3.7 | Data Accuracy | Verified statistics and claims | 100: all verified; 70: mostly verified; 50: some unverified | "85%+ placement", "5-7 LPA highest", "4 programmes" — programmes count is WRONG (site has 9 courses, not 4); placement stats unverified | **40** |
| D3.8 | Content Freshness | Updated for current admission cycle | 100: current year; 70: within 1 year; 50: older | "Admissions Open 2026-27" — current and timely | **90** |
| D3.9 | Duplicate Title/Description | No duplicate metadata across pages | 100: all unique; 0: all identical | ALL 5 pages have IDENTICAL metadata (inherited homepage title/description) | **0** |
| D3.10 | Grammar & Readability | Error-free, clear writing | 100: no errors, clear; 90: minor issues | Good writing quality, no grammar issues found | **85** |

### D3 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 10 |
| Sum of scores | 445 |
| **Average (D3 Score)** | **44.5/100** |
| **Weighted contribution** | 44.5 × 0.15 = **6.7** |

---

## 7. Dimension D4: Schema & Structured Data (10%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D4.1 | FAQPage Schema | JSON-LD FAQPage for FAQ section | 100: valid schema matching FAQ content; 0: missing | Missing — 7 FAQs exist in content but zero FAQPage schema | **0** |
| D4.2 | BreadcrumbList Schema | JSON-LD breadcrumb trail | 100: valid Home > City; 0: missing | Missing — `generateBreadcrumbSchema()` utility exists in `src/lib/breadcrumb-schema.ts` but not called | **0** |
| D4.3 | LocalBusiness Schema | Location-relevant schema | 100: full LocalBusiness; 50: partial; 0: missing | Missing — no LocalBusiness or EducationalOrganization schema on city pages | **0** |
| D4.4 | Course Schema | Course/Program structured data | 100: Course schema per programme; 50: partial; 0: missing | Missing — 4 programmes listed in content but zero Course schema | **0** |
| D4.5 | CollegeOrUniversity Schema | Organization schema | 100: present; 50: inherited from root; 0: missing | Root layout has CollegeOrUniversity schema (inherited) — but not city-page-specific | **40** |
| D4.6 | WebPage/Speakable Schema | Speakable + WebPage for voice search | 100: Speakable with cssSelector; 0: missing | Missing — `cardiac-technology/layout.tsx` has Speakable as reference, but city pages don't | **0** |
| D4.7 | Schema Validation | All schemas pass Google Rich Results Test | 100: all valid; 50: some valid; 0: no schemas to test | No schemas to validate — all missing | **0** |
| D4.8 | Schema Completeness | All recommended properties filled | 100: >90% complete; 70: 60-90%; 50: 30-60% | N/A — no schemas exist | **0** |

### D4 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 8 |
| Sum of scores | 40 |
| **Average (D4 Score)** | **5.0/100** |
| **Weighted contribution** | 5.0 × 0.10 = **0.5** |

---

## 8. Dimension D5: Internal Linking (10%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D5.1 | Homepage Links | City pages linked from homepage | 100: prominent links; 50: footer/sidebar; 0: none | Zero — `src/app/page.tsx` has no mention of erode, namakkal, salem, tiruppur, or coimbatore | **0** |
| D5.2 | Desktop Navbar Links | City pages in main navigation | 100: top-level; 70: submenu; 50: deep submenu | Deep submenu — nested under About > "Why Students Choose JKKN?" at 3rd level in `Navbar.tsx` (lines 37-41) | **50** |
| D5.3 | Mobile Nav Links | City pages in mobile bottom navigation | 100: in mobile nav; 0: absent | Zero — `mobileNavLinks.ts` has no city page entries; city pages completely invisible on mobile | **0** |
| D5.4 | Footer Links | City pages in footer navigation | 100: present; 0: absent | Zero — `Footer.tsx` has only institution links, no city page links | **0** |
| D5.5 | Department Page Cross-Links | Department pages link to city pages | 100: contextual links; 0: none | Zero — no department page references city pages | **0** |
| D5.6 | Blog Cross-Links | Blog posts link to city pages | 100: contextual blog links; 0: none | Zero — no blog posts link to city pages | **0** |
| D5.7 | Admission Page Links | Admission page links to city pages | 100: present; 0: absent | Zero — admission page has no city page links | **0** |
| D5.8 | Inter-City Links | Each city page links to other city pages | 100: all linked; 70: some; 0: none | YES — `ExploreCitiesSection` at bottom of each page links to all other 4 cities | **80** |
| D5.9 | Anchor Text Quality | Descriptive, keyword-rich anchors | 100: keyword anchors; 70: descriptive; 50: generic | Navbar uses "Why Erode Students?" — descriptive but not keyword-targeted; inter-city links use city names only | **45** |
| D5.10 | Link Equity Flow | PageRank flows to city pages | 100: strong flow; 50: weak; 25: minimal | Minimal — only Navbar deep submenu provides link equity; no sitewide links | **20** |

### D5 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 10 |
| Sum of scores | 195 |
| **Average (D5 Score)** | **19.5/100** |
| **Weighted contribution** | 19.5 × 0.10 = **2.0** |

---

## 9. Dimension D6: SERP Competitiveness (10%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D6.1 | Current Ranking Position | JKKN's position for target keywords | 100: top 3; 70: top 10; 50: page 2; 25: page 3+; 0: not indexed | Likely not indexed — no metadata, no sitemap, no internal links; pages may not have been discovered by Google | **5** |
| D6.2 | Indexation Status | Pages indexed in Google | 100: all 5 indexed; per page: 20 pts each | Likely 0/5 indexed — no sitemap entry, minimal internal links, inherited canonical pointing to homepage | **5** |
| D6.3 | SERP Feature Eligibility | Eligible for featured snippets, PAA, FAQ rich results | 100: eligible for 3+ features; 50: 1-2; 0: none | 0 — no FAQPage schema (no FAQ rich results), no breadcrumb schema, no LocalBusiness | **0** |
| D6.4 | Keyword Difficulty Assessment | Target keyword competition level | Informational only — scored based on optimization gap | Low-medium difficulty — location-specific education keywords; competition is beatable with proper optimization | **50** |
| D6.5 | Content Competitiveness | Content depth vs top 10 results | 100: deeper than top 5; 70: comparable; 50: thinner | Thinner — top results (Shiksha, Getmyuni, Collegedunia) have 50+ colleges listed with ratings, reviews, fees; JKKN pages focus on single institution | **35** |
| D6.6 | Title Tag Competitiveness | Title attractiveness vs competitors | 100: compelling + keyword-rich; 50: generic | Currently inheriting homepage title — zero competitiveness for city keywords | **0** |
| D6.7 | PAA (People Also Ask) Alignment | FAQ answers match PAA questions | 100: 5+ PAA matches; 70: 3-4; 50: 1-2 | FAQs cover common questions but without live SERP PAA verification; likely 3-4 matches | **55** |
| D6.8 | Local Pack Eligibility | Eligible for Google Maps/Local Pack | 100: GBP optimized + LocalBusiness schema; 50: partial; 0: neither | GBP exists (`maps.app.goo.gl/JJ5dKGY4NAHReFpj7`) but no LocalBusiness schema on city pages | **30** |

### D6 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 8 |
| Sum of scores | 180 |
| **Average (D6 Score)** | **22.5/100** |
| **Weighted contribution** | 22.5 × 0.10 = **2.3** |

---

## 10. Dimension D7: Mobile & Accessibility (5%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D7.1 | Mobile Navigation Access | City pages discoverable on mobile | 100: in mobile nav; 50: accessible but not in nav; 0: hidden | City pages not in `mobileNavLinks.ts`; accessible only via desktop Navbar submenu that collapses on mobile | **15** |
| D7.2 | Responsive Layout | Content adapts to mobile screens | 100: fully responsive; 70: mostly; 50: partially | Fully responsive — Tailwind breakpoints used throughout (`sm:`, `md:`, `lg:`) | **90** |
| D7.3 | Touch Target Size | Buttons/links ≥48x48px | 100: all meet; 70: most; 50: some | CTA buttons and FAQ accordions appear adequately sized; programme "Enquire" buttons have `py-2.5` (may be borderline) | **75** |
| D7.4 | Font Size Readability | Body text ≥14px on mobile | 100: ≥16px; 90: 14-15px; 70: 12-13px | Body text is `text-sm` (14px) and `text-xs` (12px) in many places — programme details use 11px | **55** |
| D7.5 | ARIA/Semantic HTML | Proper semantic elements | 100: excellent semantics; 70: good; 50: basic | Basic — uses `<section>`, `<h2>`, `<p>`, `<button>` correctly; FAQ accordion lacks `aria-expanded`; no `<nav>` wrapper for breadcrumbs (none exist) | **55** |
| D7.6 | Color Contrast | WCAG AA contrast ratios | 100: all pass; 70: most; 50: some issues | Primary green `#006837` on white background — should pass AA; white text on green sections — should pass | **80** |
| D7.7 | Keyboard Navigation | All interactive elements keyboard-accessible | 100: fully; 70: mostly; 50: partially | Links and buttons are natively keyboard accessible; FAQ accordion uses `<button>` — good | **75** |
| D7.8 | Bottom Nav Visibility | Mobile bottom nav shows on city pages | 100: visible; 0: hidden | BottomNav exists sitewide via `LayoutWrapper` — BUT city pages render `<Navbar/>` and `<Footer/>` directly, bypassing `LayoutWrapper` | **0** |

### D7 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 8 |
| Sum of scores | 445 |
| **Average (D7 Score)** | **55.6/100** |
| **Weighted contribution** | 55.6 × 0.05 = **2.8** |

---

## 11. Dimension D8: Content Gaps (5%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D8.1 | Admission Process Section | Step-by-step admission guide | 100: detailed steps; 50: brief; 0: missing | Missing — no dedicated admission process section; only CTA links to admission form | **0** |
| D8.2 | Fee Structure | Transparent fee information | 100: detailed fees; 50: range; 0: missing | Missing — no fee data on city pages (department pages may have this) | **0** |
| D8.3 | Comparison with Local Alternatives | Why JKKN vs other colleges near [city] | 100: detailed comparison; 50: brief mentions; 0: missing | Missing — no competitor comparison or differentiation content | **0** |
| D8.4 | Student Life Content | Hostel, food, sports, clubs | 100: rich media + text; 50: text only; 0: missing | Brief mentions in FacilitiesSection (6 items) — surface level, no images | **30** |
| D8.5 | Gallery/Visual Content | Campus photos, lab images, student activities | 100: 10+ images; 50: 5-9; 25: 1-4; 0: none | Zero images — entire page is text and icons only | **0** |
| D8.6 | Video Content | Embedded campus/testimonial videos | 100: relevant videos; 0: none | Zero video content | **0** |
| D8.7 | Scholarship Information | Available scholarships for city students | 100: detailed; 50: mentioned; 0: missing | Missing — no scholarship information | **0** |
| D8.8 | Alumni Success Stories | Named alumni from the target city | 100: 3+ real stories; 50: 1-2; 0: placeholders | Placeholders only — `[Student Name]`, `[Course]`, `[Year]` | **0** |
| D8.9 | Accreditation Details | NAAC grade, affiliation details | 100: detailed with grade; 70: mentioned; 50: vague | AffiliationBar mentions "NAAC" and "Tamil Nadu Dr. M.G.R. Medical University" — but no grade specified | **50** |
| D8.10 | Contact/Enquiry Form | On-page lead capture form | 100: embedded form; 70: sticky CTA; 50: link to form | External link to `https://www.jkkn.ai/apply/jkkn-admission-2026` — no embedded form or sticky CTA | **40** |

### D8 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 10 |
| Sum of scores | 120 |
| **Average (D8 Score)** | **12.0/100** |
| **Weighted contribution** | 12.0 × 0.05 = **0.6** |

---

## 12. Dimension D9: Keyword Alignment (5%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D9.1 | H1-Keyword Match | H1 contains primary keyword | 100: exact match; 70: partial match; 50: semantic match; 25: poor match | H1 = "Best Allied Health Sciences College Near [City]"; Target = "allied health science colleges in [city]" — partial semantic match, missing "colleges" plural, adds "Best" and "Near" | **40** |
| D9.2 | Title-Keyword Match | Title tag contains primary keyword | 100: exact/close match; 0: missing/inherited | Inherited homepage title — zero alignment with city keywords | **0** |
| D9.3 | Description-Keyword Match | Meta description contains keyword | 100: natural keyword inclusion; 0: missing | Inherited homepage description — zero alignment | **0** |
| D9.4 | H2-Keyword Integration | H2s contain keyword variations | 100: 3+ H2s with keywords; 70: 1-2; 0: none | Zero — H2s are generic: "Programmes Offered", "Placement Highlights", "Campus & Facilities" | **0** |
| D9.5 | Body Keyword Density | Primary keyword appears naturally in body | 100: 3-5 mentions; 70: 1-2; 0: none | "Allied health sciences" appears ~5 times but never as exact target keyword phrase "allied health science colleges in erode" | **35** |
| D9.6 | Secondary Keywords | Secondary keywords present in content | 100: all present; 70: most; 50: some; 0: none | Some secondary keywords partially present through natural language | **30** |
| D9.7 | LSI/Semantic Keywords | Related terms present | 100: rich semantic field; 70: moderate; 50: basic | Moderate — physiotherapy, MLT, radiology, cardiac technology mentioned; missing terms like "paramedical", "healthcare courses", "medical technology" | **50** |
| D9.8 | Keyword in URL | URL contains keyword term | 100: full match; 70: partial; 50: related | `/erode/` — city name only; doesn't include "allied health science" but this is acceptable for URL brevity | **65** |

### D9 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 8 |
| Sum of scores | 220 |
| **Average (D9 Score)** | **27.5/100** |
| **Weighted contribution** | 27.5 × 0.05 = **1.4** |

---

## 13. Dimension D10: UX & Conversion (5%)

### Checks

| # | Check | What to Verify | Scoring Criteria | Current State | Score |
|---|-------|----------------|------------------|---------------|-------|
| D10.1 | Primary CTA Visibility | "Apply Now" above fold | 100: prominent above fold; 70: visible; 50: below fold | "Apply Now — 2026-27" and "Call Us" CTAs in HeroSection — visible above fold | **85** |
| D10.2 | CTA Count & Placement | Multiple CTAs throughout page | 100: 3+ strategic CTAs; 70: 2; 50: 1 | Multiple: Hero CTAs + "Enquire About This Course" per programme (4) + "View All Programmes" at bottom — good distribution | **80** |
| D10.3 | Phone Click-to-Call | Clickable phone number | 100: `tel:` link; 0: plain text | `tel:+919345855001` in TopBanner and HeroSection — working click-to-call | **100** |
| D10.4 | Trust Signals Above Fold | Accreditation, stats visible early | 100: strong signals; 70: moderate; 50: weak | Stats (85%+, 5-7 LPA, distance, 4 programmes) in hero + AffiliationBar (NAAC + MGR Univ) immediately below — decent trust signals | **70** |
| D10.5 | Page Load Experience | No layout shift, fast interactive | 100: instant; 70: <3s; 50: <5s | CSR page — initial load shows blank before JS hydration; potential flash of unstyled content | **55** |
| D10.6 | Social Proof | Reviews, ratings, student count | 100: multiple proof elements; 50: some; 25: weak | Placeholder testimonials undermine trust; no Google reviews, no student count, no rating | **15** |
| D10.7 | Exit Intent | Sticky CTA or exit popup | 100: implemented; 0: none | No sticky CTA, no exit popup, no floating button | **0** |
| D10.8 | WhatsApp/Chat | Quick communication channel | 100: WhatsApp + chat; 50: one; 0: neither | Neither — no WhatsApp button, no live chat (known JKKN-wide gap) | **0** |

### D10 Dimension Score

| Metric | Value |
|--------|-------|
| Checks scored | 8 |
| Sum of scores | 405 |
| **Average (D10 Score)** | **50.6/100** |
| **Weighted contribution** | 50.6 × 0.05 = **2.5** |

---

## 14. Cross-Page Comparison Matrix

### Dimension Scores by Page

| Dimension | Weight | Erode | Namakkal | Salem | Tiruppur | Coimbatore | Average |
|-----------|--------|-------|----------|-------|----------|------------|---------|
| D1: On-Page SEO | 20% | 15.6 | 15.6 | 15.6 | 15.6 | 15.6 | **15.6** |
| D2: Technical SEO | 15% | 59.6 | 59.6 | 59.6 | 59.6 | 59.6 | **59.6** |
| D3: Content Quality | 15% | 44.5 | 44.5 | 44.5 | 44.5 | 44.5 | **44.5** |
| D4: Schema | 10% | 5.0 | 5.0 | 5.0 | 5.0 | 5.0 | **5.0** |
| D5: Internal Linking | 10% | 19.5 | 19.5 | 19.5 | 19.5 | 19.5 | **19.5** |
| D6: SERP Competitive | 10% | 22.5 | 22.5 | 22.5 | 22.5 | 22.5 | **22.5** |
| D7: Mobile | 5% | 55.6 | 55.6 | 55.6 | 55.6 | 55.6 | **55.6** |
| D8: Content Gaps | 5% | 12.0 | 12.0 | 12.0 | 12.0 | 12.0 | **12.0** |
| D9: Keyword Alignment | 5% | 27.5 | 27.5 | 27.5 | 27.5 | 27.5 | **27.5** |
| D10: UX/Conversion | 5% | 50.6 | 50.6 | 50.6 | 50.6 | 50.6 | **50.6** |

**Note:** All 5 pages score identically because they share the same template, same architecture issues, and same content structure. Differentiation exists only in:
- City-specific text in Hero, DistanceCard, WhyChoose, HowToReach, FAQs
- Distance values and transport routes per city
- Inter-city links in ExploreCitiesSection (each page links to the other 4)

### Content Uniqueness Breakdown

| Section | Unique per City? | Shared Content? |
|---------|-----------------|-----------------|
| TopBanner | No (identical) | 100% shared |
| HeroSection | Yes (city name, distance, description) | ~40% shared (stats, CTAs) |
| AffiliationBar | No (identical) | 100% shared |
| DistanceCard | Yes (distance, map link) | ~30% shared (layout) |
| WhyChooseSection | Partial (city name in title/desc, last reason) | ~60% shared |
| ProgrammesSection | No (identical) | 100% shared |
| PlacementHighlights | No (identical) | 100% shared |
| HowToReachSection | Yes (routes, distances, transport) | ~20% shared |
| FacilitiesSection | No (identical) | 100% shared |
| TestimonialsSection | No (all placeholders) | 100% shared |
| FAQSection | Partial (city-specific Q1-Q2, Q6) | ~50% shared |
| ExploreCitiesSection | Yes (different target cities) | ~20% shared |

**Estimated cross-page duplication: ~55-60%**

---

## 15. H1 vs Target Keyword Analysis

### Per-Page H1 Alignment

| Page | Current H1 | Target Primary Keyword | Match Analysis | Alignment Score |
|------|-----------|----------------------|----------------|-----------------|
| Erode | "Best Allied Health Sciences College Near Erode" | "allied health science colleges in erode" | "Sciences" vs "science", "College" vs "colleges", "Near" vs "in", added "Best" | **40/100** |
| Namakkal | "Best Allied Health Sciences College Near Namakkal" | "allied health science college namakkal" | "Sciences" vs "science", added "Best" and "Near", missing preposition | **40/100** |
| Salem | "Best Allied Health Sciences College Near Salem" | "allied health science courses in salem" | "College" vs "courses", "Sciences" vs "science", "Near" vs "in" | **35/100** |
| Tiruppur | "Best Allied Health Sciences College Near Tiruppur" | "allied health science courses in tiruppur" | "College" vs "courses", "Sciences" vs "science", "Near" vs "in" | **35/100** |
| Coimbatore | "Best Allied Health Sciences College Near Coimbatore" | "allied health sciences colleges in coimbatore" | "College" (singular) vs "colleges" (plural), "Near" vs "in" | **55/100** |

### Key Misalignment Patterns

1. **"Sciences" vs "science"** — Target keywords use singular "science" (except Coimbatore which uses "sciences")
2. **"College" vs "colleges"/"courses"** — Target keywords alternate between "colleges" and "courses"; H1 uses singular "College"
3. **"Near" vs "in"** — Target keywords use "in"; H1s use "Near" (different search intent: "near" implies proximity, "in" implies location)
4. **"Best" qualifier** — Added to H1 but not in target keywords; may help CTR but doesn't match search query
5. **Missing keyword phrase** — No H1 contains the exact target keyword phrase

### Recommended H1 Rewrites

| Page | Recommended H1 | Rationale |
|------|----------------|-----------|
| Erode | "Allied Health Science Colleges in Erode — JKKN AHS" | Exact keyword match + brand |
| Namakkal | "Allied Health Science College in Namakkal — JKKN AHS" | Exact keyword match + brand |
| Salem | "Allied Health Science Courses in Salem — JKKN AHS" | Matches "courses" intent |
| Tiruppur | "Allied Health Science Courses in Tiruppur — JKKN AHS" | Matches "courses" intent |
| Coimbatore | "Allied Health Sciences Colleges in Coimbatore — JKKN AHS" | Exact keyword match + brand |

---

## 16. Composite Score Formula

### Formula

```
Composite Score = (D1 × 0.20) + (D2 × 0.15) + (D3 × 0.15) + (D4 × 0.10) +
                  (D5 × 0.10) + (D6 × 0.10) + (D7 × 0.05) + (D8 × 0.05) +
                  (D9 × 0.05) + (D10 × 0.05)
```

### Current Composite Calculation

| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| D1: On-Page SEO | 15.6 | 0.20 | 3.1 |
| D2: Technical SEO | 59.6 | 0.15 | 8.9 |
| D3: Content Quality | 44.5 | 0.15 | 6.7 |
| D4: Schema | 5.0 | 0.10 | 0.5 |
| D5: Internal Linking | 19.5 | 0.10 | 2.0 |
| D6: SERP Competitive | 22.5 | 0.10 | 2.3 |
| D7: Mobile | 55.6 | 0.05 | 2.8 |
| D8: Content Gaps | 12.0 | 0.05 | 0.6 |
| D9: Keyword Alignment | 27.5 | 0.05 | 1.4 |
| D10: UX/Conversion | 50.6 | 0.05 | 2.5 |
| **TOTAL** | | | **30.8** |

### Current Composite Score: 30.8/100 (POOR)

### Score Interpretation

| Range | Rating | Status |
|-------|--------|--------|
| 0-24 | Critical | Unranked, invisible to search engines |
| 25-49 | Poor | May be indexed but not competitive |
| 50-69 | Fair | Ranking potential but underperforming |
| 70-84 | Good | Competitive, minor optimizations needed |
| 85-100 | Excellent | Best-in-class, maintaining position |

**Current status: POOR** — pages may be crawled but are not competitive for target keywords due to missing metadata, schema, sitemap inclusion, and internal linking.

---

## 17. Pass/Fail Thresholds

### Per-Dimension Thresholds

| Dimension | Pass | Acceptable | Fail | Current | Status |
|-----------|------|------------|------|---------|--------|
| D1: On-Page SEO | ≥70 | 50-69 | <50 | 15.6 | FAIL |
| D2: Technical SEO | ≥70 | 50-69 | <50 | 59.6 | ACCEPTABLE |
| D3: Content Quality | ≥60 | 40-59 | <40 | 44.5 | ACCEPTABLE |
| D4: Schema | ≥50 | 30-49 | <30 | 5.0 | FAIL |
| D5: Internal Linking | ≥50 | 30-49 | <30 | 19.5 | FAIL |
| D6: SERP Competitive | ≥50 | 30-49 | <30 | 22.5 | FAIL |
| D7: Mobile | ≥60 | 40-59 | <40 | 55.6 | ACCEPTABLE |
| D8: Content Gaps | ≥40 | 25-39 | <25 | 12.0 | FAIL |
| D9: Keyword Alignment | ≥60 | 40-59 | <40 | 27.5 | FAIL |
| D10: UX/Conversion | ≥60 | 40-59 | <40 | 50.6 | ACCEPTABLE |

### Summary

- **PASS:** 0 dimensions
- **ACCEPTABLE:** 4 dimensions (D2, D3, D7, D10)
- **FAIL:** 6 dimensions (D1, D4, D5, D6, D8, D9)

---

## Appendix A: File Path Reference

### City Page Files

| File | Lines | Purpose |
|------|-------|---------|
| `src/app/erode/page.tsx` | 744 | Erode city landing page |
| `src/app/namakkal/page.tsx` | ~740 | Namakkal city landing page |
| `src/app/salem/page.tsx` | ~740 | Salem city landing page |
| `src/app/tiruppur/page.tsx` | ~740 | Tiruppur city landing page |
| `src/app/coimbatore/page.tsx` | 746 | Coimbatore city landing page |

### Infrastructure Files (Available, Unused on City Pages)

| File | Purpose | Status |
|------|---------|--------|
| `src/lib/metadata.ts` | `createPageMetadata()` — generates title, description, canonical, OG, Twitter | Available, unused |
| `src/lib/breadcrumb-schema.ts` | `generateBreadcrumbSchema()` — generates BreadcrumbList JSON-LD | Available, unused |
| `src/app/sitemap-pages.xml/route.ts` | Static sitemap — needs 5 city page entries added | Missing entries |
| `src/lib/mobileNavLinks.ts` | Mobile bottom nav link definitions | Missing city entries |

### Reference Implementations

| File | What It Demonstrates |
|------|---------------------|
| `src/app/cardiac-technology/layout.tsx` | Metadata export + 4 JSON-LD schemas (Course, Speakable, Breadcrumb, FAQ) |
| `src/app/layout.tsx` | Root layout with CollegeOrUniversity + WebSite schemas, GTM, Poppins font |
| `src/components/layout/Navbar.tsx` | Desktop nav with city page links (lines 37-41) |
| `src/components/layout/Footer.tsx` | Footer (no city links — needs them) |

---

## Appendix B: Reference Implementation

### How Department Pages Handle SEO (Pattern to Follow)

The `cardiac-technology/layout.tsx` demonstrates the correct pattern:

**1. Metadata Export (Server Component)**
```typescript
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BSc Cardiac Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc cardiac technology colleges in Tamilnadu? ...",
  path: "/cardiac-technology",
  keywords: ["bsc cardiac technology colleges in tamilnadu", ...],
  ogImage: { url: "...", width: 1200, height: 630, alt: "..." },
});
```

**2. JSON-LD Schemas (4 schemas in layout)**
- `Course` — programme details, provider, fees, prerequisites
- `SpeakableSpecification` — voice search optimization
- `BreadcrumbList` — Home > AHS > Department
- `FAQPage` — structured FAQ matching page content

**3. Schema Injection**
```tsx
export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
```

### What City Pages Need (Gap Summary)

Each city page needs a new `layout.tsx` file containing:
1. `createPageMetadata()` call with city-specific title, description, keywords, canonical
2. `FAQPage` JSON-LD matching the 7 FAQ items in the page
3. `BreadcrumbList` JSON-LD: Home > JKKN AHS > [City Name]
4. `EducationalOrganization` JSON-LD with city-relevant properties
5. `SpeakableSpecification` for voice search

---

*End of Specifications Document*
