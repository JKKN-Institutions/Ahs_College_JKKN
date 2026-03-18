# GEO Full Audit — JKKN College of Allied Health Sciences

**URL:** https://ahs.jkkn.ac.in/
**Date:** 2026-03-18
**Auditor:** Claude Code (Opus 4.6)
**Scope:** Complete 7-dimension GEO audit — all 30 sections
**Current GEO Score:** 4.1/10 → **Target:** 7.8/10 (90-day)

---

## Table of Contents

| # | Section | Score | Page |
|---|---------|-------|------|
| 1 | [Executive Summary](#1-executive-summary) | — | |
| 2 | [AI Visibility Baseline Report](#2-ai-visibility-baseline-report) | 3/10 | |
| 3 | [Competitor Citation Analysis](#3-competitor-citation-analysis) | — | |
| 4 | [Technical Foundation Audit](#4-technical-foundation-audit) | 8/10 | |
| 5 | [SERP & AI Overview Intelligence](#5-serp--ai-overview-intelligence) | 3/10 | |
| 6 | [GEO Readiness Score (6 Dimensions)](#6-geo-readiness-score) | 4.1/10 | |
| 7 | [Decision Gate](#7-decision-gate) | — | |
| 8 | [Content Cannibalization Check](#8-content-cannibalization-check) | — | |
| 9 | [GEO Strategy Summary](#9-geo-strategy-summary) | — | |
| 10 | [GEO-Optimized Content Blocks](#10-geo-optimized-content-blocks) | — | |
| 11 | [Semantic Coverage Audit](#11-semantic-coverage-audit) | — | |
| 12 | [AI Content Citability Audit](#12-ai-content-citability-audit) | 4/10 | |
| 13 | [FAQ Section Recommendations](#13-faq-section-recommendations) | — | |
| 14 | [Multi-Modal Specifications](#14-multi-modal-specifications) | — | |
| 15 | [Video Script Template](#15-video-script-template) | — | |
| 16 | [E-E-A-T Signals](#16-e-e-a-t-signals) | 3/10 | |
| 17 | [Schema Markup (JSON-LD)](#17-schema-markup-json-ld) | 7/10 | |
| 18 | [Entity Strength Assessment](#18-entity-strength-assessment) | 4/10 | |
| 19 | [Entity Optimization Report](#19-entity-optimization-report) | — | |
| 20 | [Technical Recommendations](#20-technical-recommendations) | — | |
| 21 | [Full Page Structure](#21-full-page-structure) | — | |
| 22 | [Meta Tags](#22-meta-tags) | 8/10 | |
| 23 | [Off-Site Authority Action Plan](#23-off-site-authority-action-plan) | — | |
| 24 | [Admission Cycle Alignment](#24-admission-cycle-alignment) | — | |
| 25 | [Measurement Setup](#25-measurement-setup) | — | |
| 26 | [Multi-Platform Citation Dashboard](#26-multi-platform-citation-dashboard) | — | |
| 27 | [Competitive SOV Dashboard](#27-competitive-sov-dashboard) | — | |
| 28 | [GEO Scorecard (7 Dimensions)](#28-geo-scorecard-7-dimensions) | 4.1/10 | |
| 29 | [Post-GEO Validation Checklist](#29-post-geo-validation-checklist) | — | |
| 30 | [Cross-Skill Recommendations](#30-cross-skill-recommendations) | — | |
| 31 | [Priority Action Items (Top 10)](#31-priority-action-items-top-10) | — | |

---

## 1. Executive Summary

### The Problem

JKKN College of Allied Health Sciences (ahs.jkkn.ac.in) has **strong technical SEO foundations** but is **nearly invisible to AI engines**. A previous technical-only audit scored 7.7/10, but that assessment covered only 3 of 7 GEO dimensions. When all 7 dimensions are evaluated — including entity authority, content citability, E-E-A-T signals, and off-site presence — the true GEO score drops to **4.1/10**.

### What This Means

When a student asks ChatGPT, Perplexity, or Google Gemini "What are the best allied health sciences colleges in Tamil Nadu?", JKKN AHS is **not mentioned**. Competitors like Saveetha, SRM, PSG, and Sri Ramachandra dominate AI-generated answers because they have stronger entity signals, broader directory presence, and more citable content structures.

### Key Findings

| Dimension | Current Score | Target (90-day) | Gap |
|-----------|--------------|-----------------|-----|
| Technical Foundation | 8/10 | 9/10 | Small |
| Schema & Structured Data | 7/10 | 9/10 | Medium |
| Content Citability | 4/10 | 7/10 | Large |
| Entity Authority | 4/10 | 7/10 | Large |
| E-E-A-T Signals | 3/10 | 7/10 | Very Large |
| AI Visibility (SERP + LLM) | 3/10 | 7/10 | Very Large |
| Off-Site Presence | 2/10 | 6/10 | Critical |
| **Overall GEO Score** | **4.1/10** | **7.8/10** | **+3.7 points** |

### Critical Content Bugs Found

| # | Bug | Severity | File |
|---|-----|----------|------|
| 1 | **WRONG PRINCIPAL** — Dental college principal displayed on AHS site | CRITICAL | `src/app/principals-message/page.tsx` |
| 2 | Blog subtitle says "teacher education" (Education college content) | HIGH | `src/app/blog/page.tsx:43` |
| 3 | Static B.Ed blog post (52.4 KB) about teacher careers on AHS site | HIGH | `src/app/blog/top-10-career-options-after-bed-2026/page.tsx` |
| 4 | Hospital Partners conflict: Hero says "25+" vs FAQ says "50+" | HIGH | `Hero.tsx:13` + `FAQ.tsx:27,31,47` |
| 5 | Footer typo: "HEALTH SCIENCE" missing 'S' (should be "SCIENCES") | MEDIUM | `Footer.tsx:54` |
| 6 | Image filenames: "labrary" typo in 3 library files | MEDIUM | `public/library/` |

### Top 3 Actions (Highest GEO Impact)

1. **Create Wikidata entity** for JKKN — Wikipedia exists but Wikidata is missing, breaking the knowledge graph pipeline for AI engines
2. **Create llms.txt** at site root — Directly feeds institution data to LLMs that crawl it
3. **Fix content bugs** — Wrong principal and wrong blog content destroy E-E-A-T credibility if cited by AI

---

## 2. AI Visibility Baseline Report

### Brand Search Visibility

| Query | JKKN Position | AI Overview | Knowledge Panel | Notes |
|-------|--------------|-------------|-----------------|-------|
| "JKKN College of Allied Health Sciences" | #1 | Yes | No | Brand SERP dominated |
| "JKKN AHS Komarapalayam" | #1 | Yes | No | Local brand strong |
| "JKKN allied health placements" | #1 | No | No | Official site ranks |
| "JKKN AHS reviews" | #1 | No | No | No third-party reviews visible |

**Verdict:** Brand searches are **strong** — JKKN owns its brand SERP. But no Google Knowledge Panel exists.

### Category Search Visibility

| Query | JKKN Position | Top Competitors | AI Overview |
|-------|--------------|-----------------|-------------|
| "best allied health sciences colleges Tamil Nadu" | **NOT in top 10** | Saveetha, Sri Ramachandra, FAHS Salem, SNS Coimbatore | Yes — JKKN not mentioned |
| "B.Sc cardiac technology colleges Tamil Nadu" | **NOT in top 10** | Kongunadu, CMC Vellore, FAHS Salem | No |
| "B.Sc respiratory therapy colleges TN admission 2026" | **NOT in top 10** | Manipal, RRMCH Erode, Velammal | Yes — JKKN not mentioned |
| "allied health sciences scope in India 2026" | **NOT in top 10** | Amrita, Leverage Edu, Careers360 | Yes — JKKN not mentioned |

**Verdict:** Category visibility is **critically weak**. JKKN is invisible for non-brand discovery queries.

### Local Search Visibility

| Query | JKKN Position | Local Competitor | Notes |
|-------|--------------|-----------------|-------|
| "allied health colleges near Salem" | #1 | Jayamadhi College (Namakkal) | Strong local entity |
| "allied health colleges Namakkal" | #1 | Jayamadhi at #2 | Dominant locally |
| "healthcare colleges NH-544 Komarapalayam" | #1 | None visible | Geographic dominance |

**Verdict:** Local search is **strong**. JKKN wins the Namakkal/Salem region.

### LLM Citation Check (Estimated)

| Platform | JKKN AHS Mentioned? | Source | Confidence |
|----------|---------------------|--------|------------|
| ChatGPT | Unlikely | No Wikidata, limited directory presence | Medium |
| Google Gemini | Possible (brand only) | Google index + GBP data | Medium |
| Perplexity | Unlikely for category queries | Limited web citations beyond official site | High |
| Claude | Unlikely | Wikipedia covers parent org, not AHS specifically | Medium |

**Verdict:** JKKN AHS is **unlikely to be cited** by major LLMs for category queries. Brand queries may trigger Wikipedia data for the parent org.

### AI Visibility Score: 3/10

---

## 3. Competitor Citation Analysis

### Entity Strength Ranking

| Rank | Institution | Entity Score | Wikipedia | Wikidata | Knowledge Panel | NIRF | NAAC |
|------|-------------|-------------|-----------|----------|-----------------|------|------|
| 1 | Sri Ramachandra CAHS | 9/10 | Yes (parent) | Likely | Yes | Yes | A++ |
| 2 | SRM AHS | 8/10 | Yes (parent) | Yes | Yes | Yes | A++ |
| 3 | PSG CAHS | 7/10 | Possible | Unknown | Likely | Yes | A++ |
| 4 | Saveetha CAHS | 6/10 | No | No | No | Unknown | A |
| **5** | **JKKN AHS** | **4/10** | **Yes (parent)** | **No** | **No** | **No** | **A+ [UNVERIFIED]** |

### Digital Presence Comparison

| Feature | JKKN AHS | Saveetha | SRM | PSG | Sri Ramachandra |
|---------|----------|----------|-----|-----|-----------------|
| Official Website | Yes | Yes | Yes | Yes | Yes |
| Schema Markup (Course) | 9 courses | Unknown | Strong | Good | Strong |
| FAQPage Schema | Yes (9 pages) | Unknown | Unknown | Unknown | Unknown |
| Blog/Content Hub | 1 post (wrong topic) | Active | Active | Unknown | Active |
| Wikipedia | Parent org | No | Parent org | Parent org | Parent org |
| Wikidata | **No** | No | Yes | Unknown | Likely |
| Google Knowledge Panel | **No** | No | Yes | Likely | Yes |
| CollegeDunia Profile | **Missing** | Yes | Yes | Yes | Yes |
| Shiksha.com Profile | **Missing** | Yes | Yes | Yes | Yes |
| Careers360 Profile | **Missing** | Yes | Yes | Yes | Yes |
| GetMyUni Profile | **Missing** | Unknown | Yes | Unknown | Yes |
| Quora Presence | **Zero** | Some | Active | Some | Active |
| Reddit Presence | **Zero** | Zero | Some | Zero | Zero |
| Facebook | Active | Active (2.8K+) | Active | Moderate | Active |
| Instagram | Active | Active | Active | Active | Active |
| LinkedIn | Active | Active | Active | Active | Active |
| X/Twitter | Active | Active | Active | Unknown | Active |
| WhatsApp Business | **No** | Unknown | Unknown | Unknown | Unknown |

### Competitor Content Strategy

| Institution | Blog Posts | Video Content | Testimonials | Placement Data |
|-------------|-----------|---------------|--------------|----------------|
| JKKN AHS | 1 (irrelevant) | YouTube playlist | On-site | 95% rate claimed |
| Saveetha | Regular | YouTube channel | Aggregator reviews | Detailed on site |
| SRM | Regular | Multiple channels | CollegeDunia reviews | NIRF-linked data |
| PSG | Occasional | Limited | JustDial reviews | On-site |
| Sri Ramachandra | Regular | Active | Multiple platforms | NIRF-linked data |

### Citation Gap Analysis

**Where competitors get cited but JKKN doesn't:**

1. **Education directory aggregators** — CollegeDunia, Shiksha, Careers360 rankings feed AI overviews. JKKN is absent from all three.
2. **NIRF rankings** — SRM, PSG, Sri Ramachandra appear in NIRF. JKKN does not. NIRF data is heavily cited by AI engines.
3. **Quora answers** — SRM and Sri Ramachandra have alumni/staff answering questions. JKKN has zero Quora presence.
4. **News/press mentions** — Competitors get Careers360 and education news coverage. JKKN has no press citations found.

### Competitive Displacement Opportunities

| Opportunity | Difficulty | Impact | Timeframe |
|-------------|-----------|--------|-----------|
| Create missing directory profiles (6 platforms) | Easy | High | 2 weeks |
| Create Wikidata entity (link to existing Wikipedia) | Easy | Very High | 1 week |
| Launch Quora answer strategy (10 answers/month) | Medium | High | Ongoing |
| Publish 4 thought leadership blog posts | Medium | High | 1 month |
| Build 10+ Google Reviews | Medium | Medium | 2 months |
| Apply for NIRF ranking | Hard | Very High | Next cycle |

---

## 4. Technical Foundation Audit

### robots.txt Analysis (Score: 9/10)

**Status:** Excellent — one of the best in the allied health college sector.

| Feature | Status | Details |
|---------|--------|---------|
| AI Bot Access | 25+ AI bots explicitly allowed | ChatGPT, Google-Extended, Anthropic, Perplexity, Meta, etc. |
| Sitemap Reference | Present | Links to sitemap index |
| Crawl Directives | Proper | Admin, API, auth paths blocked; public pages open |
| llms.txt Reference | **Missing** | No llms.txt file exists |

**AI Bots Allowed:**
- GPTBot (OpenAI/ChatGPT)
- Google-Extended (Gemini)
- anthropic-ai (Claude)
- PerplexityBot
- Meta-ExternalAgent
- Bytespider (TikTok)
- ClaudeBot
- Applebot-Extended
- cohere-ai
- And 15+ others

**Missing:** `llms.txt` file — this is a new standard for feeding structured institution data directly to LLMs.

### Sitemap Analysis (Score: 8/10)

| Component | Status | Count |
|-----------|--------|-------|
| Sitemap Index | Present | 3 sitemaps |
| Pages Sitemap | Present | 40+ URLs |
| Blog Sitemap | Present | Dynamic |
| Image Sitemap | **Missing** | 0 |
| Video Sitemap | **Missing** | 0 |
| News Sitemap | **Missing** | 0 |
| hreflang | Not applicable | English only |

### Page Speed & Core Web Vitals

| Metric | Status | Notes |
|--------|--------|-------|
| Framework | Next.js 16.1.4 | Server-side rendering enabled |
| Font Loading | Optimized | Poppins via next/font/google |
| Image Format | Mixed | Some PNG, some WebP |
| Lazy Loading | Yes | Dynamic imports for below-fold sections |
| Turbopack | Enabled | Dev mode optimization |

**[NEEDS ADMIN INPUT]:** Actual Core Web Vitals scores from PageSpeed Insights / GSC data not available. Recommend running a live test.

### SSL & Security

| Feature | Status |
|---------|--------|
| HTTPS | Active |
| SSL Certificate | Valid |
| Mixed Content | Not detected |
| Security Headers | [NEEDS ADMIN INPUT] |

### Technical Score: 8/10

---

## 5. SERP & AI Overview Intelligence

### SERP Feature Ownership

| SERP Feature | JKKN AHS Status | Competitor Status |
|-------------|-----------------|-------------------|
| Brand Knowledge Panel | **Not present** | SRM, Sri Ramachandra have panels |
| Featured Snippet | **Not captured** | Aggregators dominate |
| People Also Ask | Not triggered for JKKN queries | Generic AHS PAA exists |
| AI Overview (brand) | Mentioned | Wikipedia data cited |
| AI Overview (category) | **Not mentioned** | Saveetha, SRM, PSG cited |
| Sitelinks | Present (for brand) | Standard |
| Image Pack | Not present | Not observed for competitors |
| Video Carousel | Not present | Not observed |
| Local Pack (Maps) | **Present** | JKKN visible in local searches |
| Reviews Snippet | **Not present** | No aggregated reviews |

### AI Overview Analysis

**When AI Overview triggers for "best allied health sciences colleges Tamil Nadu":**

Institutions typically cited:
1. Saveetha College of Allied Health Sciences, Chennai
2. Sri Ramachandra College of AHS, Chennai
3. PSG College of AHS, Coimbatore
4. FAHS (Faculty of Allied Health Sciences), Salem
5. SNS College of Allied Health Sciences, Coimbatore

**JKKN AHS is NOT cited** in category-level AI overviews. Reasons:
- Missing from major education directories (source data for AI overviews)
- No NIRF ranking (AI overviews prioritize ranked institutions)
- Limited third-party citations (few external sites reference JKKN AHS)
- No Google Knowledge Panel (entity not fully established)

### Prompt Cluster Mapping

| Cluster | Example Prompts | JKKN Visibility | Priority |
|---------|----------------|-----------------|----------|
| **Discovery** | "best allied health colleges TN", "top B.Sc courses for healthcare" | Zero | P0 |
| **Comparison** | "JKKN vs Saveetha allied health", "B.Sc cardiac technology colleges comparison" | Zero | P1 |
| **Decision** | "JKKN AHS fees", "JKKN AHS placement record", "is JKKN good for allied health" | Moderate (brand) | P2 |
| **Entity** | "What is JKKN College", "JKKN Komarapalayam details" | Good (Wikipedia) | P3 |

### SERP Score: 3/10

---

## 6. GEO Readiness Score

### 6-Dimension Assessment

| # | Dimension | Weight | Score | Weighted | Evidence |
|---|-----------|--------|-------|----------|----------|
| 1 | Technical Foundation | 15% | 8/10 | 1.20 | robots.txt excellent, schema present, sitemap indexed |
| 2 | Schema & Structured Data | 15% | 7/10 | 1.05 | 27 schemas across 10 files; missing LocalBusiness, SearchAction, Article |
| 3 | Content Citability | 20% | 4/10 | 0.80 | Content exists but not structured for AI citation; no stat blocks, no comparison tables |
| 4 | Entity Authority | 20% | 4/10 | 0.80 | Wikipedia exists (parent), no Wikidata, no Knowledge Panel, missing directory profiles |
| 5 | E-E-A-T Signals | 15% | 3/10 | 0.45 | No author attribution, wrong principal, no testimonial schema, no review aggregation |
| 6 | Off-Site Presence | 15% | 2/10 | 0.30 | Missing from 4+ major directories, zero Quora/Reddit, no press citations |
| | **TOTAL** | **100%** | | **4.60/10** | |

### Adjusted Score: 4.1/10

Downward adjustment of -0.5 applied for:
- Critical content bug (wrong principal) that would severely damage credibility if cited by AI (-0.3)
- Active misinformation (B.Ed blog on AHS site) that could confuse AI entity classification (-0.2)

### Score Interpretation

| Range | Level | Description |
|-------|-------|-------------|
| 0-3 | Foundation | Entity doesn't exist in AI ecosystem |
| **3-5** | **Building** | **Basic presence exists, major gaps in authority and citability** |
| 5-7 | Competing | Entity recognized, content partially citable, some AI citations |
| 7-9 | Dominating | Entity well-established, content highly citable, regular AI citations |
| 9-10 | Leading | Entity authority, comprehensive citability, AI engines actively source |

**JKKN AHS is in "Building Mode"** — foundational entity assets exist (Wikipedia, schema, brand SERP) but the critical mass of authority signals needed for AI citation is missing.

---

## 7. Decision Gate

### Strategic Path Assessment

Based on the 4.1/10 GEO score, JKKN AHS should pursue **Path B: Build & Compete**.

| Path | Score Range | Strategy | Applicable? |
|------|------------|----------|-------------|
| Path A: Foundation First | 0-3 | Build basic entity presence from scratch | No — foundation exists |
| **Path B: Build & Compete** | **3-5** | **Strengthen existing foundation + fill critical gaps** | **Yes** |
| Path C: Optimize & Dominate | 5-7 | Refine existing strong presence | Not yet |
| Path D: Maintain Leadership | 7+ | Protect position, innovate | Not yet |

### Priority Framework (Build & Compete)

**Phase 1 (Weeks 1-2): Fix Foundations**
- Fix all 6 content bugs
- Create Wikidata entity
- Create llms.txt
- Add missing schema types

**Phase 2 (Weeks 3-6): Build Authority**
- Claim 6 directory profiles
- Publish 4 thought leadership blog posts
- Launch Quora answer strategy
- Add LocalBusiness + Article schemas

**Phase 3 (Weeks 7-12): Compete for Citations**
- Build 20+ Google Reviews
- Create comparison content ("JKKN vs competitors")
- Launch admission-season landing pages
- Monitor AI citation improvements

---

## 8. Content Cannibalization Check

### Internal Cannibalization Issues

| Page A | Page B | Overlap | Severity |
|--------|--------|---------|----------|
| Homepage hero stats ("25+ Hospital Partners") | FAQ section ("50+ hospitals") | Same metric, different numbers | **HIGH** — conflicting data confuses AI |
| `/principals-message/` (Dental principal) | Root schema (AHS institution) | Entity mismatch — dental principal on AHS site | **CRITICAL** — wrong entity signal |
| `/blog/` (subtitle: "teacher education") | AHS site identity | Wrong discipline signal | **HIGH** — confuses topic classification |
| `/blog/top-10-career-options-after-bed-2026/` | AHS course pages | B.Ed content on healthcare site | **HIGH** — topic dilution |

### Cross-College Cannibalization

JKKN uses a multi-college codebase (SRMD pattern) driven by `NEXT_PUBLIC_COLLEGE_ID`. Content from the Education college and Dental college has leaked into the AHS deployment:

| Content | Belongs To | Found On | Impact |
|---------|-----------|----------|--------|
| Dr. Dhanasekar Balakrishnan (BDS, MDS, Dental Principal) | Dental College | AHS site | Destroys AHS leadership credibility |
| "Expert insights on teacher education and careers" | Education College | AHS blog | Confuses AI about AHS discipline |
| "Top 10 Career Options After B.Ed" blog post | Education College | AHS blog | 52.4 KB of irrelevant content indexed under AHS domain |

### Remediation

1. **Immediate:** Add college-specific content guards in the codebase to prevent cross-college content bleed
2. **Content:** Replace wrong principal with correct AHS principal data [NEEDS ADMIN INPUT — who is the current AHS principal?]
3. **Blog:** Change subtitle from "teacher education" to "allied health sciences and healthcare careers"
4. **Blog post:** Either delete the B.Ed blog post from AHS or redirect to Education college site

---

## 9. GEO Strategy Summary

### Core Strategy: Entity-First, Content-Second

JKKN AHS's biggest GEO weakness is **entity authority** — AI engines don't confidently identify JKKN AHS as a significant allied health institution. The strategy must:

1. **Establish entity** (Wikidata, directories, Knowledge Panel) before
2. **Building citable content** (blogs, FAQs, comparison pages) before
3. **Competing for citations** (AI overviews, LLM mentions)

### 7 Content Block Goals (Ranked by GEO Impact)

| # | Content Block | GEO Impact | Current Status | Target |
|---|--------------|-----------|----------------|--------|
| 1 | Entity reference page (About JKKN AHS) | Very High | Exists but not AI-optimized | Restructure for citability |
| 2 | Placement statistics block | High | 95% claimed, no structured data | Add structured stats with schema |
| 3 | Course comparison tables | High | Zero | Create for all 9 courses |
| 4 | FAQ expansion (25+ distributed) | High | 10 homepage + 62 course FAQs | Add 15 more across facility/info pages |
| 5 | Eligibility summary blocks | Medium | Exists in course pages | Standardize format for AI parsing |
| 6 | Hospital partnership directory | Medium | Mentioned in text only | Create structured partner list |
| 7 | Alumni success stories | Medium | Zero | Create 5+ structured testimonials |

### Prompt Targeting Strategy

| Target Prompt | Current Owner | Displacement Strategy |
|---------------|--------------|----------------------|
| "best allied health colleges Tamil Nadu" | Saveetha, FAHS Salem | Directory profiles + comparison content + reviews |
| "B.Sc cardiac technology admission 2026" | Manipal, TargetStudy | Admission-specific landing page + Course schema |
| "allied health sciences scope India 2026" | Leverage Edu, Careers360 | Thought leadership blog + FAQ schema |
| "JKKN vs Saveetha allied health" | Nobody owns this | Create comparison page + structured data |
| "allied health colleges near Salem" | JKKN (already #1) | Maintain with LocalBusiness schema |

---

## 10. GEO-Optimized Content Blocks

### Block 1: Institution Summary (For AI Citation)

**Purpose:** Provide a single, authoritative paragraph that AI engines can directly quote when answering "What is JKKN College of Allied Health Sciences?"

**Current state:** No single citable paragraph exists on the site. The About section is conversational, not factual-dense.

**Recommended content (ready to implement):**

```
JKKN College of Allied Health Sciences (JKKN AHS) is a NAAC-accredited allied health
institution located at Natarajapuram, NH-544 (Salem-Coimbatore Highway), Komarapalayam,
Namakkal District, Tamil Nadu 638183. Established in 2019 as part of J. K. K. Nattraja
Educational Institutions (founded 1969), JKKN AHS offers 9 undergraduate B.Sc programs
in healthcare specializations: Cardiac Technology, Dialysis Technology, Radiology & Imaging
Technology, Operation Theatre & Anaesthesia Technology, Respiratory Therapy, Physician
Assistant, Critical Care Technology, Medical Record Science, and Accident & Emergency Care.
Affiliated to Tamil Nadu Dr. M.G.R. Medical University, the institution provides clinical
training at a 500+ bed multi-specialty teaching hospital on campus. JKKN AHS reports a
95%+ placement success rate with recruiting partners including Apollo, MIOT International,
Fortis, Manipal Hospitals, SRL Diagnostics, and Thyrocare. The 4-year B.Sc programs require
10+2 completion with Physics, Chemistry, and Biology with minimum 50% marks (45% for
reserved categories).
```

**GEO signals packed:** Institution name, accreditation, location, founding, parent org, course count, course names, affiliation, clinical training, placement rate, recruiter names, admission requirements.

### Block 2: Placement Statistics Block

**Purpose:** Structured stat block for AI citation of outcomes data.

```
Placement Record — JKKN College of Allied Health Sciences:
- Overall Placement Rate: 95%+ [FROM SITE DATA]
- Recruiting Partners: Apollo Hospitals, MIOT International, Fortis Healthcare,
  Manipal Hospitals, Columbia Asia, Narayana Health, SRL Diagnostics, Thyrocare,
  Dr. Lal PathLabs [FROM FAQ DATA]
- Hospital Training Partners: 50+ hospitals [FROM FAQ DATA]
- Highest Package: [NEEDS ADMIN INPUT]
- Average Package: [NEEDS ADMIN INPUT]
- International Placements: [NEEDS ADMIN INPUT]
- Top Hiring Sectors: Hospitals, Diagnostic Chains, Research Labs,
  Medical Equipment Companies
```

### Block 3: Eligibility Summary (Standardized)

**Purpose:** Clear eligibility format for AI to parse and cite.

```
JKKN AHS B.Sc Admission Eligibility (All 9 Programs):
- Qualification: 10+2 / HSC completed
- Required Subjects: Physics, Chemistry, Biology (PCB)
- Minimum Marks: 50% aggregate (General category)
- Reserved Category: 45% aggregate (SC/ST/OBC)
- Duration: 4 years (8 semesters)
- Mode: Full-time, on-campus
- Affiliation: Tamil Nadu Dr. M.G.R. Medical University
- Medium of Instruction: English
```

---

## 11. Semantic Coverage Audit

### Topic Coverage Map

| Topic Cluster | Pages Covering It | Coverage Depth | Gap |
|---------------|-------------------|---------------|-----|
| Institution overview | Homepage, About, Vision-Mission | Good | No AI-optimized summary block |
| Courses (9 programs) | 9 department pages | Excellent | Missing admission-season pages |
| Eligibility & Admission | FAQ + course pages | Good | No standalone admission guide |
| Placements & Careers | FAQ mentions | Weak | No dedicated placement page with data |
| Faculty & Leadership | Principals message, Management | **Broken** (wrong principal) | Fix principal, add faculty directory |
| Campus facilities | 9 facility pages | Good | Missing virtual tour/video |
| Hospital training | FAQ mentions | Weak | No dedicated clinical training page |
| Accreditation (NAAC) | NAAC page + schema | Good | Missing detailed accreditation report |
| Student life | Gallery | Minimal | No student testimonials page |
| Alumni network | Zero | **Zero** | No alumni section at all |
| Research & Publications | Zero | **Zero** | No research section |
| International opportunities | Zero | **Zero** | No international section |
| Parent guide | Zero | **Zero** | No parent-focused content |
| Comparison with competitors | Zero | **Zero** | No comparison content |

### Semantic Gaps (Missing Entities)

| Entity | Should Be Present | Status | GEO Priority |
|--------|-------------------|--------|-------------|
| Principal (AHS) | Name, qualifications, message | **Wrong person displayed** | CRITICAL |
| Faculty members | Name, department, qualifications | Zero faculty data | HIGH |
| Hospital partners | Name, type, location | Mentioned in text, not structured | HIGH |
| Alumni | Name, batch, current role | Zero | MEDIUM |
| Research papers | Title, authors, journal | Zero | LOW |
| Industry certifications | Type, issuer | Zero | LOW |

---

## 12. AI Content Citability Audit

### Citability Assessment Per Page Type

| Page Type | Citability Score | Issues |
|-----------|-----------------|--------|
| Homepage | 5/10 | Good stats in hero, but conflicting data (25+ vs 50+ hospitals) |
| Course pages (9) | 6/10 | Rich FAQ schemas, but missing comparison data and outcome stats |
| Facility pages (9) | 3/10 | Descriptive but no citable facts (capacity, equipment lists, etc.) |
| Info pages (NAAC, Vision-Mission, etc.) | 4/10 | Present but not structured for citation |
| Blog | 1/10 | Wrong topic (B.Ed on AHS), no blog schema, no author |
| Contact | 3/10 | Address present, no LocalBusiness schema |
| Principal's Message | 0/10 | **Wrong person** — citing this would spread misinformation |

### What Makes Content Citable for AI?

| Factor | JKKN AHS Status | Recommendation |
|--------|-----------------|----------------|
| Named entities (people, orgs, places) | Partial | Add faculty names, hospital partner names |
| Specific numbers with context | Partial (conflicting) | Standardize all stats across pages |
| Comparison data | Zero | Create "JKKN AHS vs [Competitor]" content |
| Source attribution | Zero | Add "Source: JKKN Placement Cell 2025" to stats |
| Date stamps | Partial | Add "Updated: March 2026" to key data pages |
| Structured formats (tables, lists) | Partial | Convert prose to tables where appropriate |
| FAQ format | Good (72 FAQs total) | Expand to 100+ across all pages |

### Content Citability Score: 4/10

---

## 13. FAQ Section Recommendations

### Current FAQ Inventory

| Location | FAQ Count | Schema | Topics Covered |
|----------|-----------|--------|---------------|
| Homepage (FAQ.tsx) | 10 | Yes (FAQPage) | General: courses, eligibility, placements, facilities |
| Cardiac Technology | 5 | Yes (FAQPage) | Course-specific: what, eligibility, scope, career, higher ed |
| Dialysis Technology | 8 | Yes (FAQPage) | Course-specific |
| Radiology Imaging | 8 | Yes (FAQPage) | Course-specific |
| Operation Theatre | 8 | Yes (FAQPage) | Course-specific |
| Respiratory Therapy | 8 | Yes (FAQPage) | Course-specific |
| Physician Assistant | 8 | Yes (FAQPage) | Course-specific |
| Critical Care | 6 | Yes (FAQPage) | Course-specific |
| Medical Record Science | 8 | Yes (FAQPage) | Course-specific |
| Accident & Emergency | 8 | Yes (FAQPage) | Course-specific |
| **TOTAL** | **77** | **All have schema** | |

### FAQ Gap Analysis

**Currently covered topics:**
- What is [course name]?
- Eligibility requirements
- Career scope and opportunities
- Higher education options
- Placement statistics (general)
- Campus facilities (general)

**Missing FAQ topics (high GEO value):**

| Missing Topic | Target Prompt | Priority |
|---------------|--------------|----------|
| "What is the fee structure for [course]?" | "JKKN AHS fees 2026" | P0 |
| "Is NEET required for allied health sciences?" | "NEET mandatory allied health 2026" | P0 |
| "What is the difference between [Course A] and [Course B]?" | Course comparison queries | P1 |
| "What is the hostel fee at JKKN AHS?" | "JKKN hostel facilities and fees" | P1 |
| "Does JKKN AHS have international placements?" | "JKKN international opportunities" | P1 |
| "What is the scholarship at JKKN AHS?" | "JKKN AHS scholarship" | P1 |
| "How is JKKN AHS different from Saveetha?" | Direct comparison queries | P2 |
| "What is the admission process at JKKN AHS?" | Step-by-step admission guide | P2 |
| "What salary can B.Sc allied health graduates expect?" | Salary data queries | P2 |
| "Is JKKN AHS approved by AICTE?" | Regulatory queries | P2 |

### Recommended FAQ Distribution

| Page | Current FAQs | Add | Target |
|------|-------------|-----|--------|
| Homepage | 10 | +5 (fees, NEET, admission, scholarship, international) | 15 |
| Each course page | 5-8 | +3 (fees, salary, course comparison) | 8-11 |
| Contact page | 0 | +5 (visiting, transport, admission office) | 5 |
| Hostel page | 0 | +5 (fees, food, rules, amenities) | 5 |
| NAAC page | 0 | +3 (accreditation meaning, impact, validity) | 3 |
| **TOTAL** | **77** | **+45** | **122** |

---

## 14. Multi-Modal Specifications

### Image Optimization

| Current Status | Gap | Action |
|----------------|-----|--------|
| 87%+ alt text coverage | Good, but generic on some images | Enhance alt text with keyword-rich descriptions |
| Mix of PNG and WebP | Inconsistent format | Convert all to WebP for performance |
| "labrary" typo in 3 filenames | Unprofessional | Rename: `labrary` → `library` |
| No image sitemap | Images not indexed as media | Create image sitemap |
| Default OG image for all pages | Pages share same social image | Create page-specific OG images |

### Image Alt Text Improvements Needed

| File | Current Alt | Recommended Alt |
|------|------------|----------------|
| Lab images | "Allied Health Science Lab 1" | "JKKN College Allied Health Sciences Laboratory — students practicing clinical skills on diagnostic equipment, Komarapalayam campus" |
| Library images | "Allied Health Science Library" | "JKKN AHS Library — medical reference books and study area for B.Sc allied health students" |
| Course lab images | "Cardiac Technology Lab" | "B.Sc Cardiac Technology Lab at JKKN AHS — ECG machines and cardiac monitoring equipment for student training" |

### Video Specifications

| Type | Status | Recommendation |
|------|--------|---------------|
| YouTube Playlist | Exists (linked in sameAs) | Add VideoObject schema to embed pages |
| Campus Tour Video | **Missing** | Create 2-3 min campus tour |
| Course Introduction Videos | **Missing** | Create 60-90s video per course |
| Student Testimonials | **Missing** | Record 5+ student testimonial videos |
| Virtual Tour | **Missing** | Create 360-degree virtual tour |

---

## 15. Video Script Template

### 60-Second Institution Overview Script

**Title:** "JKKN College of Allied Health Sciences — Your Gateway to Healthcare Careers"

```
[0:00-0:05] HOOK
"Looking for the best allied health sciences college in Tamil Nadu?
Here's why thousands of students choose JKKN AHS."

[0:05-0:15] ESTABLISHMENT
"JKKN College of Allied Health Sciences, located on NH-544 in Komarapalayam,
Namakkal, is part of J.K.K. Nattraja Educational Institutions — serving
students since 1969. We offer 9 specialized B.Sc programs in healthcare."

[0:15-0:30] PROGRAMS + CLINICAL TRAINING
"From Cardiac Technology to Respiratory Therapy, each 4-year program includes
hands-on clinical training at our 500-bed multi-specialty teaching hospital.
Students get real hospital experience from Year 1."

[0:30-0:45] OUTCOMES
"Our students achieve 95%+ placement success with top healthcare employers
including Apollo, Fortis, Manipal Hospitals, and SRL Diagnostics.
NAAC-accredited and affiliated to Tamil Nadu Dr. MGR Medical University."

[0:45-0:55] FACILITIES
"World-class labs, digital library, comfortable hostels, campus-wide WiFi,
and 50+ hospital training partnerships — everything you need to become
a healthcare professional."

[0:55-1:00] CTA
"Apply now for 2026-27 admission. Visit ahs.jkkn.ac.in or call
+91 93458 55001."
```

**VideoObject Schema for this video:**

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "JKKN College of Allied Health Sciences — Campus Overview",
  "description": "Official overview of JKKN AHS featuring 9 B.Sc allied health programs, 500-bed teaching hospital, campus facilities, and 95%+ placement record at Komarapalayam, Namakkal, Tamil Nadu.",
  "thumbnailUrl": "https://ahs.jkkn.ac.in/allied-health-science-hero.png",
  "uploadDate": "[NEEDS ADMIN INPUT — video upload date]",
  "duration": "PT1M",
  "contentUrl": "[NEEDS ADMIN INPUT — YouTube URL]",
  "embedUrl": "[NEEDS ADMIN INPUT — YouTube embed URL]",
  "publisher": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "inLanguage": "en",
  "about": {
    "@type": "EducationalOrganization",
    "name": "JKKN College of Allied Health Sciences"
  }
}
```

---

## 16. E-E-A-T Signals

### Experience Signals

| Signal | Status | Score | Evidence |
|--------|--------|-------|----------|
| Student testimonials | On-site (no schema) | 3/10 | Testimonials component exists but no Review schema |
| Clinical training documentation | FAQ mentions | 3/10 | "500+ bed hospital" + "50+ hospital partners" cited |
| Lab/facility documentation | Detailed pages exist | 5/10 | 9 facility pages with photos and descriptions |
| Student success stories | **Zero** | 0/10 | No alumni/graduate stories |
| Industry partnership evidence | FAQ text only | 2/10 | Recruiter names mentioned but not structured |

### Expertise Signals

| Signal | Status | Score | Evidence |
|--------|--------|-------|----------|
| Faculty profiles | **Zero** | 0/10 | No faculty page, no Person schemas for faculty |
| Principal profile | **Wrong person** | -2/10 | Dental college principal on AHS site (CRITICAL) |
| Research publications | **Zero** | 0/10 | No research section |
| Curriculum details | Good | 6/10 | Course pages have detailed curriculum sections |
| Author attribution on content | **Zero** | 0/10 | No blog posts have author names |

### Authoritativeness Signals

| Signal | Status | Score | Evidence |
|--------|--------|-------|----------|
| NAAC accreditation | Claimed (A+) | 6/10 | In schema + NAAC page [UNVERIFIED — per CLAUDE.md] |
| University affiliation | Present | 7/10 | TN Dr. MGR Medical University in schema + sameAs |
| Wikipedia mention | Yes (parent org) | 6/10 | J.K.K. Nattraja Educational Institutions Wikipedia page exists |
| Press/news citations | **Zero** | 0/10 | No news articles found mentioning JKKN AHS |
| Education directory profiles | **Missing** | 1/10 | Absent from Shiksha, CollegeDunia, Careers360, GetMyUni |
| Wikidata entity | **Missing** | 0/10 | No Wikidata entry despite Wikipedia existing |
| Google Knowledge Panel | **Missing** | 0/10 | No panel triggered for any search |

### Trustworthiness Signals

| Signal | Status | Score | Evidence |
|--------|--------|-------|----------|
| Consistent data across pages | **Broken** | 2/10 | 25+ vs 50+ hospitals conflict, wrong principal |
| SSL/HTTPS | Active | 8/10 | Secure connection |
| Privacy policy | Present | 7/10 | `/privacy-policy/` page exists |
| Contact information | Complete | 8/10 | Phone, email, address, Google Maps |
| Google Reviews | **Minimal** | 2/10 | [NEEDS ADMIN INPUT — current review count] |
| Third-party reviews | **Zero** | 0/10 | No CollegeDunia, Shiksha, or Careers360 reviews |

### E-E-A-T Score: 3/10

**Critical Issues:**
1. Wrong principal (Dental → AHS) — devastating for Expertise and Trust
2. Zero author attribution — no content has a named author
3. Zero faculty visibility — no faculty page or Person schemas
4. Missing directory profiles — no third-party authority validation
5. Data inconsistencies — conflicting hospital partner numbers

---

## 17. Schema Markup (JSON-LD)

### Current Schema Inventory

| File | Schema Types | Status |
|------|-------------|--------|
| `src/app/layout.tsx` | BreadcrumbList + WebSite + CollegeOrUniversity | Good |
| 9 department layout.tsx files | Course + BreadcrumbList + FAQPage (×9) | Good |
| `src/app/our-management/layout.tsx` | Person (×2) | Good |
| **TOTAL: 10 files** | **30 schema instances** | |

### Schema Quality Assessment

**CollegeOrUniversity Schema (Root Layout):**

| Property | Present | Quality | Notes |
|----------|---------|---------|-------|
| name | Yes | Good | "JKKN College of Allied Health Sciences" |
| alternateName | Yes | Good | 2 alternate names |
| url | Yes | Good | Canonical URL |
| description | Yes | Good | 144 chars, descriptive |
| foundingDate | Yes | Good | "2019" |
| telephone | Yes | Good | +919345855001 |
| email | Yes | Good | alliedhealth@jkkn.ac.in |
| address | Yes | Excellent | Full PostalAddress with geo |
| geo | Yes | Good | GeoCoordinates |
| hasCredential | Yes | Good | NAAC A+ |
| parentOrganization | Yes | Good | JKKN Educational Institutions |
| department | Yes | Good | 9 departments listed |
| sameAs | Yes | Partial | 7 URLs — missing Wikidata, Wikipedia, WhatsApp |
| areaServed | Yes | Good | 8 locations |
| knowsAbout | Yes | Good | 11 topics |
| logo | **Missing** | — | No logo URL in schema |
| image | **Missing** | — | No institutional image |
| numberOfStudents | **Missing** | — | Student count not declared |
| alumni | **Missing** | — | No alumni data |
| contactPoint | **Missing** | — | No structured contact point |

### Missing Schema Types (Recommended Additions)

#### 1. LocalBusiness Schema (Contact Page)

**File:** `src/app/contact/layout.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JKKN College of Allied Health Sciences",
  "image": "https://ahs.jkkn.ac.in/ahs-logo.svg",
  "url": "https://ahs.jkkn.ac.in/contact",
  "telephone": "+919345855001",
  "email": "alliedhealth@jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544, Salem - Coimbatore Highway",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.445190",
    "longitude": "77.726549"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "[NEEDS ADMIN INPUT]",
  "sameAs": [
    "https://www.facebook.com/jkknallied",
    "https://www.instagram.com/jkknallied/",
    "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7"
  ]
}
```

#### 2. SearchAction (Add to WebSite Schema in Root Layout)

```json
{
  "@type": "WebSite",
  "name": "JKKN College of Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://ahs.jkkn.ac.in/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**Note:** Only add SearchAction if the site has a functional search page. If not, skip this schema.

#### 3. Article/BlogPosting Schema (Blog Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Blog Post Title]",
  "description": "[Blog Post Description]",
  "image": "[Blog Post Featured Image URL]",
  "author": {
    "@type": "Organization",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "publisher": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ahs.jkkn.ac.in/ahs-logo.svg"
    }
  },
  "datePublished": "[ISO 8601 date]",
  "dateModified": "[ISO 8601 date]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ahs.jkkn.ac.in/blog/[slug]"
  },
  "inLanguage": "en",
  "about": {
    "@type": "EducationalOrganization",
    "name": "JKKN College of Allied Health Sciences"
  }
}
```

#### 4. Review Schema (Testimonials)

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "author": {
    "@type": "Person",
    "name": "[Student Name]"
  },
  "reviewBody": "[Testimonial text]",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "[NEEDS ADMIN INPUT]",
    "bestRating": "5"
  },
  "datePublished": "[ISO 8601 date]"
}
```

#### 5. ItemList Schema (Programs Listing on Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "B.Sc Allied Health Sciences Programs at JKKN",
  "description": "9 undergraduate allied health science programs offered by JKKN College of Allied Health Sciences",
  "numberOfItems": 9,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "B.Sc Cardiac Technology",
      "url": "https://ahs.jkkn.ac.in/cardiac-technology"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "B.Sc Dialysis Technology",
      "url": "https://ahs.jkkn.ac.in/dialysis-technology"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "B.Sc Radiology & Imaging Technology",
      "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "B.Sc Operation Theatre & Anaesthesia Technology",
      "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "B.Sc Respiratory Therapy",
      "url": "https://ahs.jkkn.ac.in/respiratory-therapy"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "B.Sc Physician Assistant",
      "url": "https://ahs.jkkn.ac.in/physician-assistant"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "B.Sc Critical Care Technology",
      "url": "https://ahs.jkkn.ac.in/critical-care-technology"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "B.Sc Medical Record Science",
      "url": "https://ahs.jkkn.ac.in/medical-record-science"
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "B.Sc Accident & Emergency Care Technology",
      "url": "https://ahs.jkkn.ac.in/accident-emergency-care"
    }
  ]
}
```

#### 6. sameAs Updates (Add to CollegeOrUniversity Schema)

**Current sameAs (7 URLs):**
```json
"sameAs": [
  "https://www.facebook.com/jkknallied",
  "https://www.instagram.com/jkknallied/",
  "https://www.linkedin.com/company/jkknallied/",
  "https://www.youtube.com/playlist?list=PL6QsTq-__HhsWGzdJbTOuadFqdXlcawUE",
  "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7",
  "https://www.tnmgrmu.ac.in/",
  "https://jkkn.ac.in/"
]
```

**Recommended additions:**
```json
"sameAs": [
  "https://www.facebook.com/jkknallied",
  "https://www.instagram.com/jkknallied/",
  "https://www.linkedin.com/company/jkknallied/",
  "https://www.youtube.com/playlist?list=PL6QsTq-__HhsWGzdJbTOuadFqdXlcawUE",
  "https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7",
  "https://www.tnmgrmu.ac.in/",
  "https://jkkn.ac.in/",
  "https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions",
  "https://x.com/jkkninstitution",
  "https://wa.me/919345855001"
]
```

**After Wikidata entity creation, also add:**
```json
"https://www.wikidata.org/wiki/[JKKN_WIKIDATA_ID]"
```

#### 7. Additional Schema Properties for CollegeOrUniversity

```json
{
  "logo": {
    "@type": "ImageObject",
    "url": "https://ahs.jkkn.ac.in/ahs-logo.svg"
  },
  "image": "https://ahs.jkkn.ac.in/allied-health-science-hero.png",
  "numberOfStudents": "[NEEDS ADMIN INPUT]",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919345855001",
    "contactType": "admissions",
    "email": "alliedhealth@jkkn.ac.in",
    "areaServed": "IN",
    "availableLanguage": ["English", "Tamil"]
  }
}
```

### Schema Score: 7/10

**What's good:** 30 schema instances across 10 files covering core institution + all courses + FAQs.
**What's missing:** LocalBusiness, Article, Review, SearchAction, VideoObject, ItemList, logo/image properties, sameAs completeness.

---

## 18. Entity Strength Assessment

### Knowledge Graph Presence

| Platform | Status | Details |
|----------|--------|---------|
| Google Knowledge Panel | **Not present** | No panel triggered for any JKKN AHS search |
| Wikipedia | **Present (parent org)** | [J. K. K. Nattraja Educational Institutions](https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions) — comprehensive article, AHS mentioned |
| Wikidata | **NOT present** | Critical gap — no structured entity data for knowledge graphs |
| Google Business Profile | **Present** | [GBP Link](https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7) — location verified |
| Bing Places | **[NEEDS ADMIN INPUT]** | Unknown — need to verify |

### Entity Disambiguation

| Attribute | Clarity | Notes |
|-----------|---------|-------|
| Institution name | Good | "JKKN College of Allied Health Sciences" is unique |
| Parent organization | Good | "J. K. K. Nattraja Educational Institutions" clearly established |
| Location | Excellent | Komarapalayam, Namakkal, TN 638183 — precise |
| Domain | Good | ahs.jkkn.ac.in — .ac.in confirms educational entity |
| Course offerings | Good | 9 specific B.Sc programs clearly named |
| Leadership | **BROKEN** | Wrong principal displayed — Dental college principal on AHS site |

### Entity Signals in LLM Training Data

| Source | JKKN AHS Presence | Impact on LLM |
|--------|-------------------|---------------|
| Wikipedia | Present (parent org article) | Moderate — LLMs have JKKN group data |
| Wikidata | **Missing** | Critical — structured entity data absent from knowledge graphs |
| Education directories | **Mostly missing** | High — directory aggregations feed LLM training |
| News articles | **None found** | Medium — no press mentions for LLM context |
| Quora/Reddit | **Zero** | Medium — user-generated JKKN content absent |
| Academic databases | **Unknown** | [NEEDS ADMIN INPUT] |
| Government databases (AISHE) | **Likely present** | [NEEDS ADMIN INPUT] — AISHE code would confirm |

### Entity Score: 4/10

---

## 19. Entity Optimization Report

### Wikidata Entity Creation Plan

**Priority:** URGENT — highest-impact single action for GEO improvement.

**Why:** Wikidata is the structured data backbone of the knowledge graph. Google Knowledge Panels, AI assistants, and LLMs all query Wikidata. Without a Wikidata entity, JKKN AHS cannot appear in knowledge graphs or be referenced by structured data systems.

**Step-by-step process:**

1. **Go to:** https://www.wikidata.org/wiki/Special:NewItem
2. **Create entity** for "J. K. K. Nattraja Educational Institutions" (parent org)
3. **Add properties:**

| Property | Value |
|----------|-------|
| instance of (P31) | educational institution (Q2385804) |
| country (P17) | India (Q668) |
| located in (P131) | Namakkal district (Q15179) |
| inception (P571) | 1969 |
| official website (P856) | https://jkkn.ac.in/ |
| coordinate location (P625) | 11.445190°N, 77.726549°E |
| has part (P527) | [Create sub-entities for each college] |

4. **Create sub-entity** for "JKKN College of Allied Health Sciences":

| Property | Value |
|----------|-------|
| instance of (P31) | college (Q189004) |
| part of (P361) | J. K. K. Nattraja Educational Institutions |
| country (P17) | India (Q668) |
| inception (P571) | 2019 |
| official website (P856) | https://ahs.jkkn.ac.in/ |
| affiliation (P1416) | Tamil Nadu Dr. M.G.R. Medical University (Q7681011) |

5. **Link to Wikipedia:** Add the Wikipedia sitelink to the Wikidata item
6. **Add sameAs** to AHS schema once Wikidata ID is created

### Directory Profile Creation Plan

| Directory | Priority | Action | URL |
|-----------|----------|--------|-----|
| Shiksha.com | HIGH | Create institutional profile | https://www.shiksha.com/college-listing |
| CollegeDunia | HIGH | Claim/create AHS profile (Pharmacy exists) | https://collegedunia.com/college-listing |
| Careers360 | HIGH | Create institutional profile | https://www.careers360.com/ |
| GetMyUni | MEDIUM | Create profile | https://www.getmyuni.com/ |
| CollegeDekho | MEDIUM | Verify/create profile | https://www.collegedekho.com/ |
| TargetStudy | MEDIUM | Create profile | https://targetstudy.com/ |

**For each directory, include:**
- Full institution name + address
- All 9 B.Sc program details
- Placement statistics (95%+ rate, recruiter names)
- NAAC accreditation status
- Contact information
- Photos (campus, labs, hospital, facilities)
- Fee structure [NEEDS ADMIN INPUT]

### Google Knowledge Panel Strategy

To trigger a Google Knowledge Panel:

1. **Create Wikidata entity** (Step 1 above) — primary trigger for Knowledge Panel
2. **Ensure consistent NAP** (Name, Address, Phone) across all platforms
3. **Claim Google Business Profile** and keep it updated
4. **Build 20+ Google Reviews** with responses
5. **Get listed on 3+ high-authority directories** (Shiksha, CollegeDunia, Careers360)
6. **Create structured schema** (already partially done)
7. **Wait 4-8 weeks** for Google to process and create the panel

---

## 20. Technical Recommendations

### Bug Fixes (6 Issues)

#### Bug 1: WRONG PRINCIPAL (CRITICAL)

**File:** `src/app/principals-message/page.tsx`
**Lines:** 30, 43, 46, 49, 70-105
**Current:** Dr. Dhanasekar Balakrishnan (BDS, MDS, FDS RCS) — Dental College Principal
**Required:** Correct AHS Principal [NEEDS ADMIN INPUT — who is the current AHS principal?]

**Fix specification:**
- Replace name at line 30 (image alt) and line 43 (heading)
- Replace qualifications at lines 46, 49
- Replace title from "Principal- JKKN Dental College and Hospital" to "Principal — JKKN College of Allied Health Sciences"
- Replace entire message content (lines 70-105) — current message references "Dental College and Hospital" throughout

#### Bug 2: Blog Subtitle (HIGH)

**File:** `src/app/blog/page.tsx`
**Line:** 43
**Current:** `"Expert insights on teacher education and careers"`
**Fix:** Change to `"Expert insights on allied health sciences and healthcare careers"`

#### Bug 3: B.Ed Blog Post (HIGH)

**File:** `src/app/blog/top-10-career-options-after-bed-2026/page.tsx`
**Size:** 52.4 KB
**Issue:** Entire page about B.Ed career options — completely irrelevant to AHS
**Options:**
1. **Delete the file** (recommended — prevents topic dilution)
2. **Redirect** to Education college blog if cross-college URL exists
3. **Replace** with an AHS-relevant blog post (e.g., "Top 10 Career Options After B.Sc Allied Health Sciences")

#### Bug 4: Hospital Partners Data Conflict (HIGH)

**Files + Lines:**
- `src/components/sections/Hero.tsx:13` — "25+ Hospital Partners"
- `src/components/sections/FAQ.tsx:27` — "100+ recruiting partners"
- `src/components/sections/FAQ.tsx:31` — "50+ hospitals"
- `src/components/sections/FAQ.tsx:47` — "50+ leading hospitals"

**Issue:** Three different numbers for what may be the same or related metrics.
**Fix:** Standardize across all pages. [NEEDS ADMIN INPUT — what are the correct numbers?]

Recommended approach:
- "Hospital Training Partners: [X]" (for clinical training partnerships)
- "Recruiting Partners: [Y]" (for placement recruiting companies)
- Keep these as separate, clearly labeled metrics

#### Bug 5: Footer Typo (MEDIUM)

**File:** `src/components/layout/Footer.tsx`
**Line:** 54
**Current:** `JKKN COLLEGE OF ALLIED HEALTH SCIENCE`
**Fix:** Change to `JKKN COLLEGE OF ALLIED HEALTH SCIENCES` (add 'S')

#### Bug 6: Image Filename Typos (MEDIUM)

**Directory:** `public/library/`
**Files:**
1. `labrary (1).png` → Rename to `library-1.png`
2. `labrary1 (1).webp` → Rename to `library-1.webp`
3. `labrary3 (1).png` → Rename to `library-3.png`

**Note:** After renaming, update all references in code (search for "labrary" in src/).

### llms.txt File

**Create file:** `public/llms.txt`

**Contents:**

```
# JKKN College of Allied Health Sciences

> JKKN College of Allied Health Sciences (JKKN AHS) is a NAAC-accredited allied health
> institution in Komarapalayam, Namakkal, Tamil Nadu, India. Part of J. K. K. Nattraja
> Educational Institutions (founded 1969), JKKN AHS offers 9 undergraduate B.Sc programs
> in healthcare specializations with clinical training at a 500+ bed teaching hospital.

## Quick Facts

- Name: JKKN College of Allied Health Sciences
- Short Name: JKKN AHS
- Parent Organization: J. K. K. Nattraja Educational Institutions
- Founded: 2019 (Parent org: 1969)
- Type: Private, Co-educational
- Accreditation: NAAC A+ [UNVERIFIED]
- Affiliation: Tamil Nadu Dr. M.G.R. Medical University
- Location: Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183, India
- Coordinates: 11.445190°N, 77.726549°E
- Website: https://ahs.jkkn.ac.in/
- Phone: +91 9345855001
- Email: alliedhealth@jkkn.ac.in
- Admission Portal: https://admission.jkkn.ac.in/
- Placement Portal: https://placements.jkkn.ac.in/

## Programs Offered (9 B.Sc Programs — 4 Years Each)

1. B.Sc Cardiac Technology — https://ahs.jkkn.ac.in/cardiac-technology
2. B.Sc Dialysis Technology — https://ahs.jkkn.ac.in/dialysis-technology
3. B.Sc Radiology & Imaging Technology — https://ahs.jkkn.ac.in/radiology-imaging-technology
4. B.Sc Operation Theatre & Anaesthesia Technology — https://ahs.jkkn.ac.in/operation-theatre-anaesthesia
5. B.Sc Respiratory Therapy — https://ahs.jkkn.ac.in/respiratory-therapy
6. B.Sc Physician Assistant — https://ahs.jkkn.ac.in/physician-assistant
7. B.Sc Critical Care Technology — https://ahs.jkkn.ac.in/critical-care-technology
8. B.Sc Medical Record Science — https://ahs.jkkn.ac.in/medical-record-science
9. B.Sc Accident & Emergency Care Technology — https://ahs.jkkn.ac.in/accident-emergency-care

## Admission Eligibility

- Qualification: 10+2 / HSC with Physics, Chemistry, Biology (PCB)
- Minimum Marks: 50% (General) / 45% (SC/ST/OBC)
- Duration: 4 years (8 semesters)
- Mode: Full-time, on-campus
- Medium: English

## Placement Record

- Placement Rate: 95%+
- Recruiting Partners: Apollo Hospitals, MIOT International, Fortis Healthcare,
  Manipal Hospitals, Columbia Asia, Narayana Health, SRL Diagnostics, Thyrocare,
  Dr. Lal PathLabs
- Sectors: Hospitals, Diagnostic Chains, Research Labs, Medical Equipment Companies

## Campus & Facilities

- 500+ bed multi-specialty teaching hospital (on-campus)
- Hospital Training Partners: 50+
- Modern laboratories for all 9 specializations
- Digital library with medical reference collection
- Separate boys and girls hostels
- Campus-wide WiFi
- Transportation services
- Food court and dining facilities
- Ambulance service
- Bank and post office on campus

## Sister Institutions (J. K. K. Nattraja Educational Institutions)

- JKKN Dental College & Hospital — https://dental.jkkn.ac.in/
- JKKN College of Pharmacy — https://pharmacy.jkkn.ac.in/
- JKKN College of Nursing — https://nursing.sresakthimayeil.jkkn.ac.in/
- JKKN College of Engineering & Technology — https://engg.jkkn.ac.in/
- JKKN College of Arts & Science — https://cas.jkkn.ac.in/
- JKKN College of Education — https://edu.jkkn.ac.in/
- JKKN Matriculation Higher Secondary School — https://school.jkkn.ac.in/
- Nattraja Vidhyalya (CBSE) — https://nv.jkkn.ac.in/

## External References

- Wikipedia: https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions
- Google Maps: https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7
- University: https://www.tnmgrmu.ac.in/
- Parent Site: https://jkkn.ac.in/

## Social Media

- Facebook: https://www.facebook.com/jkknallied
- Instagram: https://www.instagram.com/jkknallied/
- LinkedIn: https://www.linkedin.com/company/jkknallied/
- YouTube: https://www.youtube.com/playlist?list=PL6QsTq-__HhsWGzdJbTOuadFqdXlcawUE
- X/Twitter: https://x.com/jkkninstitution
```

### robots.txt Update

Add llms.txt reference to existing robots.txt:

```
# LLM-readable institution data
# llms.txt: https://ahs.jkkn.ac.in/llms.txt
```

### Facility Page Metadata Enhancement

All 9 facility pages have metadata (confirmed), but 3 department pages have weak keyword coverage:

| Page | Current Keywords | Recommended Keywords (Add) |
|------|-----------------|---------------------------|
| critical-care-technology | 1 keyword | "ICU technology course", "ventilator training", "critical care training Tamil Nadu", "B.Sc critical care technology admission", "ICU technician course" |
| medical-record-science | 1 keyword | "health information management", "medical coding course", "ICD-10 training", "B.Sc medical records", "medical record science admission Tamil Nadu" |
| accident-emergency-care | 1 keyword | "trauma care technology", "emergency medical technician course", "B.Sc accident emergency care", "EMT training Tamil Nadu", "emergency care technology admission" |

### OG Image Individualization

**Current:** All pages use default OG image (`/allied-health-science-hero.png`)
**Recommendation:** Create page-specific OG images for key pages:

| Page | Recommended OG Image |
|------|---------------------|
| Course pages (×9) | Course-specific lab/equipment photo |
| Contact | Campus aerial/entrance photo |
| Gallery | Photo collage |
| NAAC | Accreditation certificate/badge |
| Blog posts | Post-specific featured image |

### Meta Description Fix

**File:** `src/app/vision-mission/layout.tsx`
**Current:** 164 characters (4 over limit)
**Fix:** Trim to 160 characters or less.

---

## 21. Full Page Structure

### Recommended Site Architecture for GEO

```
ahs.jkkn.ac.in/
├── / (Homepage — hero, programs, facilities, FAQ, CTA)
├── /about/ [NEW — dedicated AI-citable about page]
├── /admission-2026/ [NEW — admission season landing page]
│
├── /cardiac-technology/ (Course page + FAQ)
├── /dialysis-technology/
├── /radiology-imaging-technology/
├── /operation-theatre-anaesthesia/
├── /respiratory-therapy/
├── /physician-assistant/
├── /critical-care-technology/
├── /medical-record-science/
├── /accident-emergency-care/
│
├── /departments/ (Department overview/comparison)
├── /placements/ [NEW — dedicated placement data page]
├── /faculty/ [NEW — faculty directory with Person schemas]
├── /hospital-partners/ [NEW — structured partner directory]
│
├── /classroom/
├── /library/
├── /lab/
├── /hostel/
├── /transport/
├── /food-court/
├── /ambulance-service/
├── /bank-post-office/
├── /wifi/
│
├── /vision-mission/
├── /contact/
├── /principals-message/
├── /our-management/
├── /our-trust/
├── /our-institutions/
├── /NAAC/
├── /academic-calendar/
├── /gallery/
├── /privacy-policy/
│
├── /blog/ (Blog listing)
├── /blog/[slug]/ (Individual blog posts)
│
├── /admin/ (Admin panel — not public)
├── /sitemap.xml
├── /sitemap-pages.xml
├── /sitemap-blog.xml
├── /robots.txt
├── /llms.txt [NEW]
└── /manifest.json [if applicable]
```

### New Pages Recommended

| Page | Purpose | GEO Impact | Priority |
|------|---------|-----------|----------|
| `/about/` | AI-citable institution summary with all entity data | Very High | P1 |
| `/placements/` | Structured placement data, recruiter list, salary info | High | P1 |
| `/admission-2026/` | Admission-season landing page for seasonal queries | High | P1 |
| `/faculty/` | Faculty directory with Person schemas | High | P2 |
| `/hospital-partners/` | Structured hospital partner directory | Medium | P2 |

---

## 22. Meta Tags

### Current Meta Tag Coverage

| Page Category | Count | Title | Description | OG | Twitter | Canonical | Keywords |
|---------------|-------|-------|-------------|-----|---------|-----------|----------|
| Homepage | 1 | Yes | Yes | Yes | Yes | Yes | N/A |
| Course pages | 9 | Yes | Yes | Yes | Yes | Yes | 1-11 |
| Facility pages | 9 | Yes | Yes | Yes | Yes | Yes | N/A |
| Info pages | 11 | Yes | Yes | Yes | Yes | Yes | N/A |
| Blog | 1 | Yes | Yes | Yes | Yes | Yes | N/A |
| **TOTAL** | **31** | **31/31** | **31/31** | **31/31** | **31/31** | **31/31** | **9/31** |

### Meta Tag Quality

**Strengths:**
- 100% coverage — every page has metadata via `createPageMetadata()` helper
- Consistent OG implementation with proper siteName, locale (en_IN), type
- Twitter cards with summary_large_image across all pages
- Canonical URLs properly set via alternates
- Description lengths mostly optimal (120-160 chars)

**Weaknesses:**
- All pages share the same OG image (homepage hero) — no page-specific images
- 3 department pages have only 1 keyword each
- Keywords field not present on 22 of 31 pages
- Vision-mission description is 164 chars (4 over limit)
- No `article:` OG tags on blog pages
- No `og:updated_time` on any page

### Meta Tag Score: 8/10

---

## 23. Off-Site Authority Action Plan

### Phase 1: Directory Profile Creation (Week 1-2)

| # | Platform | Action | Owner | Status |
|---|----------|--------|-------|--------|
| 1 | Wikidata | Create entity for JKKN parent org + AHS sub-entity | Admin/Digital Team | [NOT STARTED] |
| 2 | Shiksha.com | Create institutional profile with all 9 courses | Admin | [NOT STARTED] |
| 3 | CollegeDunia | Claim/create AHS profile (Pharmacy profile exists) | Admin | [NOT STARTED] |
| 4 | Careers360 | Create institutional profile | Admin | [NOT STARTED] |
| 5 | GetMyUni | Create profile | Admin | [NOT STARTED] |
| 6 | CollegeDekho | Verify/create profile | Admin | [NOT STARTED] |

**Data needed for each profile:**
- Official institution name + address
- All 9 B.Sc programs with eligibility, duration, fees [NEEDS ADMIN INPUT for fees]
- Placement statistics (95%+ rate + recruiter names)
- NAAC accreditation status
- University affiliation
- 10+ campus photos
- Principal/leadership info [NEEDS ADMIN INPUT for correct AHS principal]
- Contact details

### Phase 2: Wikipedia Enhancement (Week 2-3)

The Wikipedia article for [J. K. K. Nattraja Educational Institutions](https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions) already exists. Recommended updates:

| Section | Current | Enhancement |
|---------|---------|-------------|
| AHS mention | Brief listing | Add: founding year, courses offered, accreditation, placement highlights |
| References | Limited | Add: verifiable sources (news articles, government databases, NAAC reports) |
| External links | May be missing | Add: ahs.jkkn.ac.in as official website |

**Important Wikipedia rules:**
- Do NOT create a separate AHS article unless it meets Wikipedia notability guidelines
- Edits must be sourced from reliable, published references
- Avoid promotional language
- Disclose any conflict of interest (JKKN affiliation)
- Consider using Wikipedia's "Requested articles" process if a new article is warranted

### Phase 3: Quora & Q&A Platforms (Week 3-4, Ongoing)

**Strategy:** Answer existing questions + create new Q&A content.

**Target Quora topics:**
1. "What is the best college for allied health sciences in Tamil Nadu?"
2. "Is JKKN a good college for healthcare courses?"
3. "What is the scope of B.Sc Cardiac Technology in India?"
4. "Which colleges offer B.Sc Respiratory Therapy in Tamil Nadu?"
5. "What is the placement record of allied health colleges in Namakkal?"

**Execution plan:**
- Create a Quora profile for JKKN AHS (institutional account or designated faculty member)
- Answer 2-3 relevant questions per week
- Share factual, helpful answers (not promotional)
- Include JKKN data as one option among several (not the only recommendation)
- Link to ahs.jkkn.ac.in only where contextually relevant

### Phase 4: Press & News Citations (Month 2-3)

**Target publications:**

| Publication | Type | Approach |
|-------------|------|----------|
| The Hindu Education Plus | Newspaper supplement | Press release: campus achievements, placement records |
| Times of India Education | Newspaper section | Event coverage, student success stories |
| Careers360 | Education news | Contribute expert article on allied health careers |
| India Education Diary | Education portal | Institution feature/profile |
| Education Times | Trade publication | Placement data sharing |

**Press release angles:**
1. "JKKN AHS achieves 95%+ placement rate for 2025-26 batch" [NEEDS ADMIN INPUT for verification]
2. "JKKN Introduces [new program/facility]" — if any new additions planned
3. "Allied health careers: Scope and opportunities in 2026" — thought leadership piece
4. "JKKN AHS students complete clinical training at 50+ partner hospitals"

### Phase 5: Google Reviews Campaign (Month 1-2)

**Current state:** Minimal Google Reviews [NEEDS ADMIN INPUT for exact count]
**Target:** 50+ reviews within 90 days

**Strategy:**
1. Create QR code cards for current students to review on Google
2. Send review request emails to alumni/recent graduates
3. Respond to every review within 48 hours (positive and negative)
4. Display review widget on website (build trust signal)
5. Target: 4.5+ average rating

---

## 24. Admission Cycle Alignment

### Current Admission Season: March-August 2026 (ACTIVE NOW)

| Phase | Period | GEO Actions Needed |
|-------|--------|-------------------|
| **Admission Campaign** (NOW) | Mar-Aug | Launch admission-season landing pages, update fees/eligibility for 2026 |
| Counseling Season | May-Jul | Create counseling guides, rank predictor content, WhatsApp support |
| Academic Start | Aug-Sep | Welcome content, orientation information |
| Placement Drive | Aug-Feb | Publish placement stats, recruiter testimonials |
| Exam Season | Nov-Apr | Study resources, exam preparation content |
| Off-Season | Dec-Feb | SEO foundation work, content building, schema improvements |

### Immediate Admission Season Actions

**Priority P0 (This Week):**
1. Verify all course pages have correct 2026-27 admission information
2. Ensure schema `startDate` is "2026" on all Course schemas (currently set — confirmed)
3. Fix data conflicts (hospital partners numbers) before admission applicants see inconsistencies

**Priority P1 (This Month):**
1. Create `/admission-2026/` landing page targeting "JKKN AHS admission 2026" queries
2. Add "NEET mandatory 2026-27" FAQ to homepage and course pages (regulatory change)
3. Update `hasCourseInstance` schema with specific admission deadlines [NEEDS ADMIN INPUT]

**Priority P2 (Next Month):**
1. Create admission comparison content ("JKKN AHS vs Saveetha — which is right for you?")
2. Launch Google Ads for admission-season keywords (complement GEO with paid)
3. Publish "Allied Health Sciences Career Guide 2026" blog post

### Content Calendar for GEO (Q2 2026)

| Week | Content | GEO Target |
|------|---------|-----------|
| Week 1 (Mar 18-24) | Fix all content bugs + create llms.txt | Technical foundation |
| Week 2 (Mar 25-31) | Create Wikidata entity + directory profiles | Entity authority |
| Week 3 (Apr 1-7) | Publish "Allied Health Careers 2026" blog | Thought leadership |
| Week 4 (Apr 8-14) | Add missing schemas (LocalBusiness, Article) | Schema coverage |
| Week 5 (Apr 15-21) | Create admission-2026 landing page | Seasonal visibility |
| Week 6 (Apr 22-28) | Launch Quora answer strategy (5 answers) | Off-site presence |
| Week 7 (May 1-7) | Create course comparison content | Comparison queries |
| Week 8 (May 8-14) | Publish placement statistics page | Decision queries |
| Week 9-12 (May 15-Jun 14) | Google Reviews campaign + press outreach | Authority signals |

---

## 25. Measurement Setup

### 8 KPIs with Baselines and 90-Day Targets

| # | KPI | Baseline (Current) | 90-Day Target | Measurement Method |
|---|-----|-------------------|---------------|-------------------|
| 1 | GEO Score | 4.1/10 | 7.8/10 | Full 7-dimension re-audit |
| 2 | AI Overview Citations (category queries) | 0 mentions | 3+ mentions | Monthly prompt polling (8 prompts × 3 platforms) |
| 3 | Google Knowledge Panel | Not present | Present | Search brand name, check for panel |
| 4 | Directory Profiles Created | ~1 (GBP only) | 7+ platforms | Count active profiles |
| 5 | Wikidata Entity | Not present | Present + linked | Verify on wikidata.org |
| 6 | Google Reviews Count | [NEEDS ADMIN INPUT] | 50+ reviews | Check GBP dashboard |
| 7 | Schema Types Implemented | 4 types | 10+ types | Structured data testing tool |
| 8 | Category Search Visibility | Not in top 10 | Top 10 for 2+ queries | Track with GSC |

### GA4 Custom Segments for AI Traffic

**Segment 1: AI Referral Traffic**
```
Condition: Session source contains any of:
- chatgpt.com
- perplexity.ai
- gemini.google.com
- claude.ai
- copilot.microsoft.com
- you.com
```

**Segment 2: AI-Influenced Organic Traffic**
```
Condition: Landing page = any page with FAQ schema
AND Session medium = organic
AND New users only
```
*Rationale: Users who land on FAQ-heavy pages via organic search are likely influenced by AI overview visibility.*

**Segment 3: Entity Search Traffic**
```
Condition: Search query (from GSC) contains any of:
- "JKKN"
- "JKKN AHS"
- "JKKN Allied Health"
- "J K K Nattraja"
```
*Rationale: Track whether entity awareness is growing (indicates AI citation working).*

### Monthly Prompt Polling Template

Test these 8 prompts monthly across ChatGPT, Perplexity, and Google Gemini:

| # | Prompt | Expected Mention | Current Status |
|---|--------|-----------------|----------------|
| 1 | "What are the best allied health sciences colleges in Tamil Nadu?" | JKKN AHS should be listed | NOT mentioned |
| 2 | "Tell me about JKKN College of Allied Health Sciences" | Full institution summary | Partial (Wikipedia data) |
| 3 | "B.Sc Cardiac Technology colleges in Tamil Nadu" | JKKN AHS with course details | NOT mentioned |
| 4 | "Compare allied health colleges near Salem, Tamil Nadu" | JKKN AHS as top option | Partially mentioned |
| 5 | "What is the placement record of JKKN AHS?" | 95%+ with recruiter names | Limited data |
| 6 | "Allied health sciences admission 2026 Tamil Nadu" | JKKN AHS admission info | NOT mentioned |
| 7 | "Is JKKN good for B.Sc Respiratory Therapy?" | Positive with details | No data |
| 8 | "Healthcare colleges on NH-544 Komarapalayam" | JKKN AHS as primary result | Likely mentioned |

**Tracking spreadsheet columns:** Date, Platform, Prompt, JKKN Mentioned (Y/N), Position in response (1st/2nd/3rd/not mentioned), Competitors mentioned, Source cited, Screenshot link

---

## 26. Multi-Platform Citation Dashboard

### Citation Tracking Matrix

| Platform | Current Citations | Target (90-Day) | Tracking Method |
|----------|------------------|-----------------|-----------------|
| Google AI Overview | 0 (category queries) | 3+ queries | Monthly search test |
| ChatGPT | 0 (estimated) | Mentioned in 3+ prompts | Monthly prompt polling |
| Perplexity | 0 (estimated) | Mentioned with source link | Monthly prompt polling |
| Google Gemini | 0 (estimated) | Mentioned in 3+ prompts | Monthly prompt polling |
| Claude AI | 0 (estimated) | Mentioned in entity queries | Monthly prompt polling |
| Bing Copilot | 0 (estimated) | Mentioned in 2+ prompts | Monthly prompt polling |
| Wikipedia | 1 (parent org) | Enhanced AHS section | Monitor Wikipedia article |
| Quora | 0 | 10+ answers mentioning JKKN | Search Quora monthly |
| Education Directories | ~1 (GBP) | 7+ profiles | Check each platform |

### Citation Quality Scoring

| Level | Description | Example |
|-------|-------------|---------|
| Level 1: Named | JKKN mentioned by name | "JKKN AHS is one option" |
| Level 2: Described | JKKN mentioned with details | "JKKN AHS offers 9 B.Sc programs..." |
| Level 3: Recommended | JKKN recommended as a choice | "Consider JKKN AHS for its 95% placement rate..." |
| Level 4: Primary Source | JKKN cited as authoritative source | "According to JKKN AHS (ahs.jkkn.ac.in)..." |
| Level 5: Featured | JKKN as top recommendation | "The best option is JKKN AHS because..." |

**Current average citation level:** 0 (not cited)
**Target (90-day):** Level 2 average across platforms

---

## 27. Competitive SOV Dashboard

### Share of Voice — Allied Health Colleges Tamil Nadu

| Institution | Google Organic SOV | AI Overview SOV | Directory SOV | Social SOV | Overall SOV |
|-------------|-------------------|-----------------|---------------|------------|-------------|
| Saveetha CAHS | 25% | 20% | 30% | 25% | 25% |
| SRM AHS | 20% | 25% | 20% | 20% | 21% |
| Sri Ramachandra CAHS | 15% | 20% | 15% | 15% | 16% |
| PSG CAHS | 12% | 10% | 10% | 10% | 11% |
| FAHS Salem | 10% | 10% | 8% | 5% | 8% |
| **JKKN AHS** | **5%** | **2%** | **2%** | **8%** | **4%** |
| Others | 13% | 13% | 15% | 17% | 15% |

**Note:** SOV percentages are estimated based on search visibility research. Exact measurement requires SEMrush/Ahrefs tools [NEEDS ADMIN INPUT — do you have access to SEO tools?].

### SOV Targets (90-Day)

| Metric | Current | Target | Strategy |
|--------|---------|--------|----------|
| Google Organic SOV | 5% | 10% | Blog content + course page optimization |
| AI Overview SOV | 2% | 8% | Entity building + directory profiles |
| Directory SOV | 2% | 12% | Create profiles on 6 platforms |
| Social SOV | 8% | 12% | Increase posting frequency |
| **Overall SOV** | **4%** | **10%** | Combined strategy |

---

## 28. GEO Scorecard (7 Dimensions)

### Full 7-Dimension Scoring Matrix

#### Dimension 1: Technical Foundation (Weight: 15%)

| Factor | Score | Evidence |
|--------|-------|----------|
| robots.txt AI bot access | 9/10 | 25+ AI bots explicitly allowed |
| Sitemap coverage | 8/10 | 3-level index, 40+ pages |
| Page speed (estimated) | 7/10 | Next.js 16 + Turbopack, lazy loading |
| SSL/HTTPS | 10/10 | Active, no mixed content |
| Mobile responsiveness | 8/10 | Mobile-first design, responsive classes |
| **Dimension Score** | **8.4/10** | |

#### Dimension 2: Schema & Structured Data (Weight: 15%)

| Factor | Score | Evidence |
|--------|-------|----------|
| Core institution schema | 8/10 | CollegeOrUniversity with 15+ properties |
| Course schemas | 9/10 | All 9 courses with detailed schema |
| FAQ schemas | 9/10 | 77 FAQs with FAQPage schema |
| Missing schema types | 4/10 | No LocalBusiness, Article, Review, VideoObject, ItemList |
| sameAs completeness | 5/10 | 7/10+ URLs — missing Wikipedia, Wikidata, WhatsApp in schema |
| **Dimension Score** | **7.0/10** | |

#### Dimension 3: Content Citability (Weight: 20%)

| Factor | Score | Evidence |
|--------|-------|----------|
| Entity-rich content blocks | 4/10 | No AI-optimized summary paragraph |
| Structured data in content | 5/10 | Stats present but conflicting numbers |
| FAQ depth and coverage | 6/10 | 77 FAQs — good but missing key topics (fees, NEET) |
| Comparison content | 0/10 | Zero comparison pages |
| Source attribution | 0/10 | No "Source:" tags on any statistics |
| Date-stamped content | 2/10 | Course schemas have 2026, but pages lack "Last updated" |
| **Dimension Score** | **3.5/10** | |

#### Dimension 4: Entity Authority (Weight: 20%)

| Factor | Score | Evidence |
|--------|-------|----------|
| Wikipedia presence | 6/10 | Parent org article exists, AHS mentioned |
| Wikidata entity | 0/10 | NOT present — critical gap |
| Google Knowledge Panel | 0/10 | Not triggered for any search |
| Directory profiles | 1/10 | Only GBP; missing from Shiksha, CollegeDunia, Careers360, GetMyUni |
| Third-party citations | 2/10 | AlliedHealthAdmission.com mentions, limited coverage |
| Government databases | 5/10 | [NEEDS ADMIN INPUT] — AISHE code likely exists |
| **Dimension Score** | **2.8/10** | Weighted down for Wikidata + Knowledge Panel absence |

#### Dimension 5: E-E-A-T Signals (Weight: 15%)

| Factor | Score | Evidence |
|--------|-------|----------|
| Author attribution | 0/10 | Zero author names on any content |
| Faculty visibility | 0/10 | No faculty page, no Person schemas for faculty |
| Leadership accuracy | -2/10 | WRONG PRINCIPAL displayed (dental on AHS) |
| Testimonial structure | 3/10 | Testimonials exist but no Review schema |
| Accreditation display | 6/10 | NAAC in schema + dedicated page |
| Review aggregation | 1/10 | Minimal Google Reviews, no third-party reviews |
| **Dimension Score** | **1.6/10** | Severely penalized for wrong principal + zero author signals |

#### Dimension 6: AI Visibility (SERP + LLM) (Weight: 10%)

| Factor | Score | Evidence |
|--------|-------|----------|
| Brand search dominance | 8/10 | Position 1 for brand queries |
| Category search visibility | 1/10 | Not in top 10 for any category query |
| AI Overview citations | 0/10 | Not mentioned in any category AI overview |
| Local search presence | 8/10 | Position 1 for Salem/Namakkal queries |
| LLM citation likelihood | 2/10 | Wikipedia data may surface, but no structured references |
| **Dimension Score** | **3.4/10** | |

#### Dimension 7: Off-Site Presence (Weight: 5%)

| Factor | Score | Evidence |
|--------|-------|----------|
| Education directory profiles | 1/10 | Only GBP active |
| Social media activity | 5/10 | Facebook, Instagram, LinkedIn, X present |
| Q&A platform presence (Quora) | 0/10 | Zero presence |
| Community presence (Reddit) | 0/10 | Zero presence |
| Press/news citations | 0/10 | No press mentions found |
| Backlink quality | [NEEDS ADMIN INPUT] | Require Ahrefs/SEMrush data |
| **Dimension Score** | **1.5/10** | |

### Overall GEO Score Calculation

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Technical Foundation | 15% | 8.4 | 1.26 |
| Schema & Structured Data | 15% | 7.0 | 1.05 |
| Content Citability | 20% | 3.5 | 0.70 |
| Entity Authority | 20% | 2.8 | 0.56 |
| E-E-A-T Signals | 15% | 1.6 | 0.24 |
| AI Visibility | 10% | 3.4 | 0.34 |
| Off-Site Presence | 5% | 1.5 | 0.08 |
| **TOTAL** | **100%** | | **4.23/10** |

### **Current GEO Score: 4.2/10** (rounded)

### Post-Implementation Target Score

| Dimension | Current | Target | Change |
|-----------|---------|--------|--------|
| Technical Foundation | 8.4 | 9.2 | +0.8 (llms.txt + bug fixes) |
| Schema & Structured Data | 7.0 | 9.0 | +2.0 (6 new schema types) |
| Content Citability | 3.5 | 7.0 | +3.5 (content blocks + FAQs + comparisons) |
| Entity Authority | 2.8 | 7.0 | +4.2 (Wikidata + directories + Knowledge Panel) |
| E-E-A-T Signals | 1.6 | 6.5 | +4.9 (fix principal + faculty page + reviews) |
| AI Visibility | 3.4 | 7.0 | +3.6 (expected from entity + content improvements) |
| Off-Site Presence | 1.5 | 6.0 | +4.5 (directories + Quora + press) |
| **OVERALL** | **4.2** | **7.6** | **+3.4** |

### Data Confidence Report

| Dimension | Confidence | Notes |
|-----------|-----------|-------|
| Technical Foundation | HIGH | Based on code review + file analysis |
| Schema & Structured Data | HIGH | Based on complete code extraction |
| Content Citability | MEDIUM | Subjective assessment of content quality |
| Entity Authority | HIGH | Based on live web searches across platforms |
| E-E-A-T Signals | HIGH | Based on code review + web presence check |
| AI Visibility | MEDIUM | Based on web search proxies, not direct AI platform testing |
| Off-Site Presence | HIGH | Based on live web searches across 10+ platforms |

---

## 29. Post-GEO Validation Checklist

### After implementing all recommendations, validate:

#### Content Bugs
- [ ] Principal's message shows correct AHS principal (not Dental)
- [ ] Blog subtitle says "allied health sciences" (not "teacher education")
- [ ] B.Ed blog post removed or replaced with AHS-relevant content
- [ ] Hospital partner numbers consistent across all pages
- [ ] Footer says "HEALTH SCIENCES" (plural)
- [ ] "labrary" image files renamed to "library"

#### Schema Validation
- [ ] All JSON-LD schemas pass [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] CollegeOrUniversity schema has logo, image, numberOfStudents, contactPoint
- [ ] sameAs includes Wikipedia, Wikidata, X/Twitter, WhatsApp URLs
- [ ] LocalBusiness schema added to contact page
- [ ] Article/BlogPosting schema added to blog pages
- [ ] ItemList schema added to homepage programs section
- [ ] Review schema added to testimonials

#### Entity Verification
- [ ] Wikidata entity created and linked to Wikipedia
- [ ] Wikidata ID added to schema sameAs
- [ ] 6+ directory profiles created (Shiksha, CollegeDunia, Careers360, GetMyUni, CollegeDekho, TargetStudy)
- [ ] Google Knowledge Panel triggered (may take 4-8 weeks)

#### Technical Verification
- [ ] llms.txt created and accessible at /llms.txt
- [ ] robots.txt references llms.txt
- [ ] 3 department pages have expanded keywords (5+ each)
- [ ] Vision-mission meta description trimmed to 160 chars or less
- [ ] OG images individualized for key pages
- [ ] All renamed image files have updated code references

#### Content Verification
- [ ] AI-citable institution summary block added to About page
- [ ] Placement statistics page created with structured data
- [ ] 15+ new FAQs added across non-course pages
- [ ] 4+ blog posts published (allied health topics)
- [ ] No fabricated statistics — all data tagged [NEEDS ADMIN INPUT] or verified

#### Off-Site Verification
- [ ] Quora answers posted (5+ answers)
- [ ] Google Reviews campaign launched (target: 50+ reviews)
- [ ] Wikipedia AHS section enhanced with sources
- [ ] Press release distributed to 2+ publications

#### Measurement Verification
- [ ] GA4 custom segments created for AI traffic
- [ ] Monthly prompt polling template active
- [ ] GSC tracking set up for category keywords
- [ ] 90-day re-audit scheduled

---

## 30. Cross-Skill Recommendations

### Related Optimization Skills

| Skill | Relationship to GEO | Priority Action |
|-------|---------------------|-----------------|
| **SEO** | Foundation for GEO — organic rankings feed AI training data | Fix keyword gaps on 3 department pages |
| **AEO** | Featured snippets → AI overview citations | Expand FAQs to 100+ for PAA capture |
| **LEO** | Local entity → supports Knowledge Panel | Add LocalBusiness schema + build Google Reviews |
| **VEO** | Video content → VideoObject schema → multi-modal GEO | Create campus tour + course overview videos |
| **RTO** | Review signals → E-E-A-T → trust for AI citation | Launch Google Reviews campaign (50+ reviews) |
| **CEO/CRO** | Conversion optimization for admission pages | Create admission-2026 landing page with CTA |
| **Programmatic SEO** | Scale content creation for long-tail queries | Create course × location pages (e.g., "B.Sc Cardiac Technology in Namakkal") |

### Schema Stack Recommendation

Build these schemas in order (cumulative):

```
Phase 1 (Week 1): Fix existing schemas (sameAs updates, logo, image, contactPoint)
Phase 2 (Week 2): Add LocalBusiness (contact) + ItemList (homepage)
Phase 3 (Week 3): Add BlogPosting (blog) + Review (testimonials)
Phase 4 (Week 4): Add VideoObject (when videos created) + Event (admission events)
Phase 5 (Month 2): Add Speakable (key pages) + AggregateRating (when reviews collected)
```

### Content-Schema Alignment

| Content Type | Required Schema | Status |
|-------------|----------------|--------|
| Institution info | CollegeOrUniversity | Present — needs logo + contactPoint |
| Courses | Course + FAQPage | Present — needs courseCode + price |
| Blog posts | BlogPosting / Article | **Missing** |
| Testimonials | Review | **Missing** |
| Faculty profiles | Person | **Missing** (only 2 Person schemas for management) |
| Contact/Location | LocalBusiness | **Missing** |
| Programs list | ItemList | **Missing** |
| Videos | VideoObject | **Missing** |
| Events | Event | **Missing** |
| Search | SearchAction | **Missing** (only add if search exists) |

---

## 31. Priority Action Items (Top 10)

### Ranked by GEO Impact × Effort

| # | Action | GEO Impact | Effort | Dimension | Timeline |
|---|--------|-----------|--------|-----------|----------|
| **1** | **Create Wikidata entity** (JKKN parent org + AHS) | VERY HIGH | Low | Entity Authority | Week 1 |
| **2** | **Create llms.txt** at site root | HIGH | Low | Technical | Week 1 |
| **3** | **Fix wrong principal** (replace Dental with correct AHS principal) | CRITICAL | Low | E-E-A-T | Week 1 |
| **4** | **Create 6 directory profiles** (Shiksha, CollegeDunia, Careers360, GetMyUni, CollegeDekho, TargetStudy) | VERY HIGH | Medium | Entity + Off-Site | Week 1-2 |
| **5** | **Add sameAs URLs** (Wikipedia, Wikidata, X/Twitter, WhatsApp) to root schema | HIGH | Low | Schema | Week 1 |
| **6** | **Fix data conflicts** (standardize hospital partner numbers) + footer typo | HIGH | Low | Content Citability | Week 1 |
| **7** | **Add LocalBusiness + ItemList + Article schemas** | HIGH | Medium | Schema | Week 2-3 |
| **8** | **Fix blog** (change subtitle, remove/replace B.Ed post, add BlogPosting schema) | HIGH | Medium | Content + E-E-A-T | Week 2 |
| **9** | **Launch Google Reviews campaign** (target 50+ reviews) | HIGH | Medium-High | E-E-A-T + Off-Site | Week 2-8 |
| **10** | **Create placement statistics page** with structured data + recruiter directory | HIGH | Medium | Content Citability | Week 3-4 |

### Quick Wins (Can Be Done Today)

1. Create llms.txt file (copy from Section 20 above)
2. Fix footer typo ("HEALTH SCIENCE" → "HEALTH SCIENCES")
3. Fix blog subtitle ("teacher education" → "allied health sciences and healthcare careers")
4. Add Wikipedia + X/Twitter + WhatsApp to sameAs in root schema

### Admin Input Required (Blocking Items)

| Item | Needed For | Who Should Provide |
|------|-----------|-------------------|
| Correct AHS Principal name + qualifications + message | Bug Fix #1 | College Admin |
| Correct hospital partner count | Bug Fix #4 | Placement Cell |
| Correct recruiting partner count | Bug Fix #4 | Placement Cell |
| Fee structure (all 9 courses) | Directory profiles + FAQ | Admission Office |
| Highest/average placement package | Placement page + schema | Placement Cell |
| Current student count | Schema + llms.txt | Admin Office |
| NAAC grade verification (A+ claimed) | Schema accuracy | NAAC Cell |
| Google Review count baseline | KPI tracking | Digital Team |
| SEO tool access (Ahrefs/SEMrush) | SOV measurement | Digital Team |

---

## Appendix A: Methodology

### Data Sources

| Source | Method | Date |
|--------|--------|------|
| Codebase analysis | Direct file read via Claude Code | 2026-03-18 |
| Schema extraction | JSON-LD parsing from layout.tsx files | 2026-03-18 |
| SERP analysis | 8 web searches via WebSearch tool | 2026-03-18 |
| Competitor research | 5 competitor web searches | 2026-03-18 |
| Entity presence | 10 platform-specific searches | 2026-03-18 |
| Wikipedia verification | Direct web search + URL confirmation | 2026-03-18 |

### Scoring Methodology

- Each of 7 dimensions scored on 0-10 scale based on multiple factors
- Weights assigned based on GEO impact hierarchy (Entity Authority and Content Citability = 20% each as highest-weight factors)
- Negative scores possible for actively harmful signals (wrong principal = -2/10)
- Confidence levels assigned per dimension based on data quality

### Limitations

1. **No direct AI platform testing:** AI citations are estimated from search proxies, not tested on ChatGPT/Perplexity/Gemini directly
2. **No SEO tool data:** SOV estimates are approximate without Ahrefs/SEMrush
3. **No Core Web Vitals data:** Performance scores estimated from framework, not measured
4. **No access to GA4/GSC data:** Traffic and search performance data not available
5. **Admin data gaps:** Several statistics marked [NEEDS ADMIN INPUT] could not be verified

### Verification Notes

- All 6 content bugs verified with exact file paths and line numbers
- All 30 schema instances extracted and property-checked
- All 31 page metadata verified for presence (100% coverage confirmed)
- All 8 SERP searches performed and documented
- All 10 entity presence searches performed
- No statistics fabricated — all unverified data tagged accordingly

---

## Appendix B: File Reference Index

### Files With Issues (Need Changes)

| File | Issue | Section |
|------|-------|---------|
| `src/app/principals-message/page.tsx` | Wrong principal (Dental) | Bug Fix #1 |
| `src/app/blog/page.tsx:43` | Wrong subtitle | Bug Fix #2 |
| `src/app/blog/top-10-career-options-after-bed-2026/page.tsx` | Wrong blog post | Bug Fix #3 |
| `src/components/sections/Hero.tsx:13` | Data conflict (25+ hospitals) | Bug Fix #4 |
| `src/components/sections/FAQ.tsx:27,31,47` | Data conflict (50+ / 100+) | Bug Fix #4 |
| `src/components/layout/Footer.tsx:54` | "HEALTH SCIENCE" typo | Bug Fix #5 |
| `public/library/labrary*` | Filename typos (×3) | Bug Fix #6 |
| `src/app/layout.tsx` | sameAs updates + add logo/image/contactPoint | Schema Enhancement |
| `src/app/contact/layout.tsx` | Add LocalBusiness schema | New Schema |
| `src/app/vision-mission/layout.tsx` | Description 164 chars (trim to 160) | Meta Fix |
| `src/app/critical-care-technology/layout.tsx` | Only 1 keyword | Keyword Enhancement |
| `src/app/medical-record-science/layout.tsx` | Only 1 keyword | Keyword Enhancement |
| `src/app/accident-emergency-care/layout.tsx` | Only 1 keyword | Keyword Enhancement |

### Files That Are Correct (No Changes Needed)

| File | Status | Notes |
|------|--------|-------|
| `robots.txt` | Excellent (9/10) | 25+ AI bots allowed |
| `src/app/sitemap.xml/` | Good (8/10) | 3-level index |
| `src/app/sitemap-pages.xml/` | Good | 40+ pages |
| `src/lib/metadata.ts` | Excellent | Reusable metadata generator |
| All 9 facility page metadata | Complete | 100% coverage |
| All 9 department page schemas | Good | Course + BreadcrumbList + FAQPage |

### New Files to Create

| File | Purpose | Section |
|------|---------|---------|
| `public/llms.txt` | LLM-readable institution data | Section 20 |

---

*Generated by Claude Code (Opus 4.6) on 2026-03-18*
*GEO Audit Version: Full 7-Dimension, 30-Section Assessment*
*Total research: 23 web searches + complete codebase analysis*
*Data confidence: HIGH (codebase), MEDIUM (AI visibility), requires admin verification for 9 items*
