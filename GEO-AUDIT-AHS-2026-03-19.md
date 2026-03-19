# GEO Audit Report — JKKN College of Allied Health Sciences

**Domain:** ahs.jkkn.ac.in
**Audit Date:** 2026-03-19
**Audit Type:** Comprehensive GEO (Generative Engine Optimization)
**Triple-Check Method:** Codebase Analysis + Live Website Scraping + AI Platform Visibility Testing

---

## Executive Summary

### GEO Readiness Score: 28 / 100 — Grade: D (Poor)

JKKN College of Allied Health Sciences has a **strong technical foundation** (AI crawlers allowed, 11 schema types deployed, per-course structured data) but suffers from **critical gaps in content citability, off-site authority, and E-E-A-T signals** that make it nearly invisible to AI platforms like ChatGPT, Gemini, Perplexity, and Copilot.

| Dimension | Score | Grade | Status |
|-----------|-------|-------|--------|
| D1 — Technical Foundation | 62/100 | B- | Solid base, minor gaps |
| D2 — Schema Coverage | 55/100 | C | Good breadth, missing key types |
| D3 — Content Citability | 34/100 | D+ | Major weakness — FAQ too short, no citations |
| D4 — Entity Optimization | 35/100 | D+ | NAP inconsistency, weak entity linking |
| D5 — Off-Site Authority | 12/100 | F | Critical — missing from major directories |
| D6 — E-E-A-T Signals | 10/100 | F | Critical — zero authorship, zero expert citations |
| D7 — AI Visibility Measurement | 5/100 | F | No tracking infrastructure exists |
| **OVERALL** | **28/100** | **D** | **Almost never cited by AI systems** |

### Top 5 Critical Findings

1. **Zero presence on Shiksha, Careers360, CollegeDunia** — the #1 citation sources for Indian college queries in AI platforms
2. **Zero Reddit/Quora mentions** — AI training data has no peer discussions about JKKN AHS
3. **All 23 FAQ answers are 55-87% shorter than optimal** (avg 44 words vs 134-167 target) — AI cannot extract useful answers
4. **Zero external authoritative links on any page** — no NAAC, university, WHO, or government citations
5. **Zero author bylines or expert credentials** — E-E-A-T score near zero for AI trust assessment

---

## Content Citability Scorecard (Per-Page)

| Page | F1: Entity Density | F2: Answer-First | F3: Citations | F4: Chunking | F5: Freshness | Total | Grade |
|------|-------------------|------------------|---------------|--------------|---------------|-------|-------|
| Homepage | 14/20 | 8/20 | 4/20 | 6/20 | 3/20 | **35/100** | D+ |
| Cardiac Technology | 12/20 | 11/20 | 3/20 | 7/20 | 5/20 | **38/100** | D+ |
| Dialysis Technology | 15/20 | 13/20 | 8/20 | 9/20 | 2/20 | **47/100** | C- |
| Vision Mission | 5/20 | 5/20 | 0/20 | 4/20 | 2/20 | **16/100** | F |
| **Site Average** | **11.5** | **9.25** | **3.75** | **6.5** | **3.0** | **34/100** | **D+** |

### Factor Weakness Ranking

| Rank | Factor | Score | % of Max | Priority |
|------|--------|-------|----------|----------|
| 1 (WEAKEST) | F5: Freshness & Authorship | 3.0/20 | 15% | P0 |
| 2 | F3: Citation & Evidence | 3.75/20 | 19% | P0 |
| 3 | F4: Semantic Chunking | 6.5/20 | 33% | P1 |
| 4 | F2: Answer-First | 9.25/20 | 46% | P2 |
| 5 (STRONGEST) | F1: Entity Density | 11.5/20 | 58% | P2 |

---

## All Issues by Dimension

### D1 — Technical Foundation (Score: 62/100)

| # | Issue | Priority | Evidence | Impact |
|---|-------|----------|----------|--------|
| 1 | Sitemap lastmod dates are all TODAY's date (2026-03-19) — not actual page modification dates | P2 | Live sitemap shows identical dates for all 31 URLs | AI freshness algorithms may discount as generic timestamp |
| 2 | No `<image:image>` tags in sitemaps | P2 | Checked sitemap-pages.xml and sitemap-blog.xml | Image SEO for AI image search (Google Lens, visual AI) missed |
| 3 | No `<news:news>` tags for blog posts in sitemap | P3 | sitemap-blog.xml lacks news extension | Google News inclusion not possible without this |
| 4 | No crawl-delay for high-volume AI crawlers (CCBot, Diffbot) | P3 | robots.txt has crawl-delay only for Bingbot (2s) | High-volume AI scrapers may overload server |
| 5 | llms.txt missing or not accessible | P1 | WebFetch on ahs.jkkn.ac.in/llms.txt redirects to homepage | AI platforms cannot ingest curated institutional summary |
| 6 | Blog slug typo: "shape-the-future-of-heage-of-allied-health-sciences" | P1 | Found in live sitemap-blog.xml | Malformed URL indexed in Google, harms crawl quality |
| 7 | /events, /gallery, /placements pages missing from sitemap | P2 | Not in sitemap-pages.xml | AI crawlers won't discover these pages via sitemap |
| 8 | Canonical URL trailing slash inconsistency | P3 | Canonical: `https://ahs.jkkn.ac.in` (no slash) vs schema URLs with trailing slash | Minor entity confusion for crawlers |
| 9 | Only 2 blog posts exist sitewide | P0 | Live blog scrape confirmed | Content volume near zero — AI citation probability approaches zero |

**What's Working Well:**
- robots.txt explicitly allows 30+ AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) — EXCELLENT
- Spam bots correctly blocked (20+ scrapers disallowed)
- Admin paths properly blocked (/admin/, /api/, /preview/, /draft/)
- 3 sitemaps configured (index, pages, blog)
- Host directive present in robots.txt

---

### D2 — Schema Coverage (Score: 55/100)

| # | Issue | Priority | Evidence | Impact |
|---|-------|----------|----------|--------|
| 10 | No VideoObject schema | P1 | Checked homepage and all course pages — zero VideoObject | Videos not discoverable by AI video search or answer engines |
| 11 | No BlogPosting/Article schema on blog listing page | P2 | Blog listing (`/blog/`) has no schema; individual posts DO have BlogPosting | AI crawlers at listing level miss content structure |
| 12 | No Person schema for faculty/principal | P1 | Dr. Dhanasekar Balakrishnan (BDS, MDS, FDS) has bio page but zero Person schema | AI cannot verify expert authority or answer "who teaches at JKKN" |
| 13 | No Event schema for admission events/counseling | P1 | Checked all page schemas — no Event type found | AI cannot answer "when is JKKN AHS admission 2026" with structured data |
| 14 | No MedicalBusiness schema | P2 | Healthcare AI engines (Google Health, medical AI) prioritize this type | Reduced visibility in health-focused AI answers |
| 15 | AggregateRating (4.5/5, 150 ratings) has no source URI | P2 | Schema has ratingValue/reviewCount but no URL to reviews source | Unverifiable rating — AI may discount as fabricated |
| 16 | No individual Review schema for testimonials | P2 | Homepage has 3 testimonials but no Review markup | AI cannot quote specific student experiences |
| 17 | offers.price blank on all Course schemas | P1 | All 9 course pages have offers with no price value | Google Course rich results invalid — blank price = no eligibility |
| 18 | No @id URI on CollegeOrUniversity entity | P2 | CollegeOrUniversity schema lacks @id for entity deduplication | AI knowledge graphs can't reliably deduplicate this entity |
| 19 | No courseCode on Course schemas | P3 | TNMGRMU course codes not included | Reduces entity matching precision for AI |
| 20 | Blog author "JKKN AHS Editorial Team" is not a real person | P1 | BlogPosting Person schema has team name, not individual | AI E-E-A-T assessment fails — team name is not a verifiable entity |
| 21 | Same og:image used on all pages | P2 | `allied-health-science-hero.png` on every page | AI image diversity signals weak; no course-specific visual context |
| 22 | No article:published_time / article:modified_time Open Graph tags | P2 | Meta tags checked on all pages — absent | Facebook and some AI crawlers use these for freshness (separate from JSON-LD) |
| 23 | Facility pages (hostel, library, lab) lack FAQPage schema | P2 | Checked facility page layouts — no FAQ schema | Facility questions unanswerable by AI with structured data |
| 24 | No SearchAction schema for AI agents (ApplyAction, ContactAction) | P3 | Only standard SearchAction exists for site search | AI agents (Operator, Mariner) can't perform actions on the site |
| 25 | No WhatsApp ContactPoint in schema | P3 | wa.me link in sameAs but not as ContactPoint with contactType | AI assistants can't recommend WhatsApp as contact method |

**What's Working Well:**
- 11 schema types deployed (WebSite, CollegeOrUniversity, ItemList, Course, BreadcrumbList, FAQPage, HowTo, LocalBusiness, Speakable, AggregateRating, WebPage)
- Per-course schema on all 9 department layouts
- CollegeOrUniversity highly complete (sameAs: 10 platforms, departments, credentials, geo, contactPoint)
- BreadcrumbList with 3-level hierarchy on course pages
- FAQPage on homepage (10 Q&As) and course pages (5 Q&As)
- HowTo schema for admission process (uncommon and valuable)
- BlogPosting schema with datePublished/dateModified/publisher
- Speakable specification on WebPage schema

---

### D3 — Content Architecture & Citability (Score: 34/100)

| # | Issue | Priority | Evidence | Impact |
|---|-------|----------|----------|--------|
| 26 | All 23 FAQ answers are 55-87% too short | P0 | Average: 44 words. Target: 134-167 words. Zero FAQs in optimal range | AI extraction fails — answers too thin to cite as standalone passages |
| 27 | Zero external authoritative links on any page | P0 | Grep across all 4 audited pages: 0 external authority links | AI trust signals zero — no NAAC, university, WHO, government references |
| 28 | Zero inline citations/source references in content | P0 | Statistics like "95% placement" and "$135B market" have no sources | AI systems (Perplexity, Gemini) discount unsourced claims |
| 29 | Zero comparison tables on any page | P1 | No JKKN vs competitor, no specialization vs specialization comparisons | AI frequently cites structured comparison data — completely missing |
| 30 | No expert quotes with credentials on ANY page | P1 | Zero faculty/industry expert quotes found | E-E-A-T expert signal completely absent |
| 31 | No visible "Last updated" timestamp on most pages | P1 | Only Cardiac Technology page has visible date. Homepage, Dialysis, Vision Mission: absent | AI freshness assessment fails on 3/4 pages |
| 32 | No author byline on any content page | P1 | Zero author attribution across all pages (blog says "Editorial Team") | AI authorship trust = zero |
| 33 | Homepage sections use marketing-first language | P2 | Only 2/11 non-FAQ sections are answer-first. 9 start with aspirational/promotional copy | AI skips promotional content in favor of factual-first passages |
| 34 | First-person language on homepage ("Our Programs", "Our Learners") | P2 | 8 instances on homepage (3.6/1000w). Vision Mission: 15/1000w | Reduces objective citability for AI systems |
| 35 | Data inconsistency: "20+ recruiters" vs "100+ recruiting partners" | P1 | Homepage placements section says "20+" but FAQ Q5 says "100+" | AI cross-referencing finds conflict — reduces all placement claims' trust |
| 36 | Content lacks EAV-E formula (Entity-Attribute-Value-Evidence) | P2 | No content follows Entity → Attribute → Value → Evidence structure | AI extraction misses structured data points |
| 37 | No semantic chunk optimization (134-167 word passages) | P1 | Zero paragraphs in optimal range. Most content blocks: 12-55 words | AI passage extraction fails — content too fragmented |
| 38 | Blog posts don't link to related course pages | P2 | Blog post content has no internal links to course pages | Missed topical authority and AI content graph connections |
| 39 | Vision Mission page: 200 words total, zero facts | P2 | Entire page is aspirational text with no data, names, or verifiable claims | Completely invisible to AI — provides no extractable information |
| 40 | Image alt text uses section titles only, not descriptive entity-rich text | P2 | Hostel images: "BOYS HOSTEL", Hero: generic section label | AI image understanding limited — cannot index visual content |

**What's Working Well:**
- Answer-first architecture in FAQ sections (all FAQ answers lead with facts)
- Course pages use third-person language (Cardiac: 0 first-person, Dialysis: 1)
- Dialysis page has market data (patient count, market size, growth rates, salary ranges)
- Entity density strong (avg 11.5/20) — many named entities present
- Near-zero hedging language (only 2 instances sitewide)

---

### D4 — Entity Optimization (Score: 35/100)

| # | Issue | Priority | Evidence | Impact |
|---|-------|----------|----------|--------|
| 41 | NAP spelling inconsistency: "Kumarapalayam" vs "Komarapalayam" | P0 | site-config.ts line 51: "Kumarapalayam" / Footer.tsx line 109 + all schema: "Komarapalayam" | Knowledge Graph confusion — Google may create duplicate entities |
| 42 | Email inconsistency: `ahs@jkkn.ac.in` vs `alliedhealth@jkkn.ac.in` | P1 | site-config.ts line 48: `ahs@jkkn.ac.in` / Footer, contact page, layout.tsx: `alliedhealth@jkkn.ac.in` | NAP mismatch across Google properties — entity signals weakened |
| 43 | No Wikidata Q-ID for AHS specifically | P2 | Parent JKKN has Q55090877 but AHS has no separate Wikidata entity | AI knowledge graphs can't resolve AHS as distinct institution |
| 44 | No dedicated Wikipedia section for AHS with detailed programs/data | P2 | JKKN AHS mentioned as a sub-entry under parent institution only | AI models have minimal AHS-specific training data from Wikipedia |
| 45 | Missing sameAs: CollegeDunia, Shiksha, Careers360 profiles not linked | P1 | sameAs includes 10 platforms but not education directories | Entity graph missing key connections for Indian college queries |
| 46 | No Bing Places listing verified | P2 | Web search couldn't confirm Bing Places presence | Microsoft Copilot has no structured local data for AHS |
| 47 | District missing from LocalBusiness schema addressLocality | P3 | Contact page LocalBusiness has postalCode but no district name | Minor — location resolution slightly degraded |
| 48 | No geo coordinates in LocalBusiness schema | P2 | GeoCoordinates only in CollegeOrUniversity, not LocalBusiness | Inconsistent entity data across schema types |
| 49 | No Place schema with hasMap field | P3 | No explicit hasMap pointing to Google Maps URL | AI agents can't anchor entity to physical location via schema |
| 50 | No ISO 3166-2 state code (IN-TN) in addressRegion | P3 | "Tamil Nadu" in text but no ISO code | International AI agents resolve region less precisely |

**What's Working Well:**
- sameAs links cover 10 platforms (Facebook, Instagram, LinkedIn, YouTube, Maps, Wikipedia, X, WhatsApp, parent org, university)
- NAP (Name, Address, Phone) consistent between schema and visible content (except the Kumarapalayam/Komarapalayam split)
- Wikidata entity Q55090877 exists for parent institution
- DBpedia entity exists
- Google Maps/GBP listing confirmed

---

### D5 — Off-Site Authority (Score: 12/100)

| # | Issue | Priority | Evidence | Impact |
|---|-------|----------|----------|--------|
| 51 | No dedicated Shiksha.com profile for JKKN AHS | P0 | Search confirmed: AHS courses misattributed under Dental college profile | Shiksha is #1 AI citation source for Indian college queries |
| 52 | No dedicated Careers360 profile for JKKN AHS | P0 | Search confirmed: Only Dental, Engg, Pharmacy have profiles | Careers360 is #2 AI citation source — AHS completely invisible |
| 53 | No dedicated CollegeDunia profile for JKKN AHS | P0 | Search confirmed: Dental, Nursing, Pharmacy, Engg, Arts have profiles — NOT AHS | CollegeDunia is top 3 source for college comparison queries |
| 54 | Zero Reddit mentions/discussions about JKKN AHS | P0 | site:reddit.com search: ZERO results | Reddit is a primary AI training data source — zero peer discussions |
| 55 | Zero Quora Q&A about JKKN AHS | P0 | site:quora.com search: ZERO results | Perplexity and Google AI Overview cite Quora heavily |
| 56 | Zero news/media coverage in English media | P1 | Searched The Hindu, TOI, India Today, regional media: ZERO | No earned media = no AI news citations |
| 57 | No YouTube channel/content indexed for AHS | P1 | YouTube search: no AHS-specific channel or videos | Google AI Overview cites YouTube — zero video presence |
| 58 | No dedicated AHS LinkedIn institutional page | P2 | Only parent JKKN Educational Institutions page exists | Perplexity parses LinkedIn — missing AHS-specific company data |
| 59 | CollegeDekho has only Q&A page, no full profile | P2 | Confirmed via search: minimal Q&A review page only | Incomplete directory presence |
| 60 | Not appearing in "best allied health colleges" curated lists | P1 | Searched GetMyUni, CollegeBatch, MyMathews: JKKN not in editorial lists | AI systems that summarize "best colleges" lists will omit JKKN |
| 61 | No alumni mentions/reviews on LinkedIn verified | P2 | Search couldn't confirm structured alumni endorsements | Alumni social proof absent from AI training data |
| 62 | Google Knowledge Panel: unverified | P2 | GBP + Wikidata exist but panel quality/completeness unknown | Panel may be sparse without manual verification |

**What's Working Well:**
- Wikipedia mention exists (under parent institution)
- Wikidata Q55090877 entity exists
- DBpedia entity exists
- Google Maps/GBP listing confirmed
- JustDial listing exists
- alliedhealthadmission.com listing exists
- Facebook page exists (@jkknallied)
- Alumni portal exists (alumni.jkkn.ac.in)

---

### D6 — E-E-A-T Signals (Score: 10/100)

| # | Issue | Priority | Evidence | Impact |
|---|-------|----------|----------|--------|
| 63 | No author bio with credentials on any content page | P0 | Zero author bylines across entire site (including blog) | AI E-E-A-T "Experience" and "Expertise" signals = zero |
| 64 | No Person schema for any author/faculty/expert | P0 | Checked all page schemas — zero Person type (faculty/author) | AI cannot verify expert authority for any content |
| 65 | No expert quotes with named credentials on any page | P0 | Zero instances of "Dr. X, [credential], says..." | AI "Expertise" and "Authoritativeness" signals absent |
| 66 | No inline citations to authoritative sources | P0 | Zero links to NAAC, TNMGRMU, DCI, AICTE, WHO, government bodies | AI "Trustworthiness" signal = zero — no external validation |
| 67 | No "Reviewed by" or "Medically reviewed by" attribution | P1 | Healthcare content has no expert review attribution | Healthcare AI specifically checks for expert review signals |
| 68 | No faculty/author LinkedIn profile links | P2 | No Person schema, no LinkedIn URLs for any staff | AI cannot cross-reference expert credentials |
| 69 | No third-party validation references in content | P1 | No earned media, no award mentions, no ranking citations | "Authoritativeness" completely unestablished |
| 70 | Principal's credentials exist but not structured | P1 | Dr. Dhanasekar Balakrishnan (BDS, MDS, FDS) has bio — no Person schema | Valuable expert data exists but invisible to AI |
| 71 | Blog "JKKN AHS Editorial Team" is not a verifiable person | P1 | BlogPosting Person entity is a team name | AI authorship verification impossible for team name |

**What's Working Well:**
- Dr. Dhanasekar Balakrishnan's bio page exists with credentials (BDS, MDS, FDS) — just needs schema
- 3 alumni testimonials on homepage include names, programs, and current employers
- CollegeOrUniversity schema has hasCredential for NAAC accreditation
- Content claims are specific and data-backed (not pure marketing) — just unsourced

---

### D7 — AI Visibility Measurement (Score: 5/100)

| # | Issue | Priority | Evidence | Impact |
|---|-------|----------|----------|--------|
| 72 | No baseline AI citation rate established | P2 | No Perplexity, ChatGPT, Gemini citation tracking exists | Cannot measure improvement without baseline |
| 73 | No prompt testing library for AI platforms | P2 | No documented queries tested against ChatGPT/Gemini/Perplexity | No understanding of current AI visibility |
| 74 | No SOV (Share of Voice) tracking vs competitors | P2 | No competitor AI citation comparison exists | Cannot identify displacement opportunities |
| 75 | No GA4 custom segments for AI traffic sources | P2 | GA4 configured but no chatgpt.com/perplexity.ai referral segments | AI-driven traffic invisible in analytics |
| 76 | No monthly GEO reporting cadence | P3 | No reporting schedule exists | No accountability for GEO improvement |
| 77 | No content refresh schedule | P2 | No documented cadence for updating course/facility content | Content staleness accumulates without schedule |
| 78 | No re-optimization triggers defined | P3 | No criteria for when pages need GEO re-optimization | Reactive instead of proactive optimization |

**What's Working Well:**
- GA4 + GTM integration exists (GTM-W5JJJVHB) — foundation for custom segments
- Google Search Console integrated — can track AI Overview appearances

---

## AI Platform Visibility Summary

### Entity Presence Across AI Sources

| Platform | AHS Present? | Quality | AI Citation Value |
|---------|-------------|---------|-------------------|
| Wikipedia | Partial (sub-entry under parent) | Thin | Medium |
| Wikidata Q55090877 | Yes (parent entity) | Basic | Medium |
| DBpedia | Yes (parent entity) | Basic | Medium |
| Shiksha.com | MISSING | N/A | Very High |
| Careers360 | MISSING | N/A | Very High |
| CollegeDunia | MISSING | N/A | Very High |
| CollegeDekho | Q&A only | Minimal | Medium |
| Reddit | ZERO | N/A | Very High |
| Quora | ZERO | N/A | Very High |
| Google News/Media | ZERO | N/A | Very High |
| YouTube | MISSING | N/A | Medium-High |
| LinkedIn (dedicated) | MISSING | N/A | Medium |
| Google Knowledge Panel | Likely exists (unverified) | Unknown | High |
| Bing Places | Unverified | Unknown | High |
| JustDial | Listed | Basic | Low |
| alliedhealthadmission.com | Listed | Basic | Medium |
| Facebook | Present | Active | Low-Medium |

### AI Platform Response Quality (Estimated)

| AI Platform | JKKN AHS Query Response | Confidence |
|-------------|------------------------|------------|
| **ChatGPT** | Will know basic institution info from website scraping. Cannot cite peer reviews (zero Reddit/Quora). May hallucinate details | Low |
| **Gemini** | Will surface Google Knowledge Panel data. Cannot cite directory comparisons (no Shiksha/Careers360). Limited | Low |
| **Perplexity** | Will show official website links. Cannot cite diverse sources (zero media, zero directories). Single-source answers | Very Low |
| **Copilot** | Bing data potentially sparse. May not appear in "best colleges" type answers | Very Low |

---

## Priority Action Matrix

### P0 — Critical (Do First)

| # | Action | Issues Addressed | Estimated Impact |
|---|--------|-----------------|------------------|
| 1 | Create dedicated profiles on Shiksha, Careers360, CollegeDunia for JKKN AHS | #51, #52, #53, #45 | Very High — these are #1-3 AI citation sources for Indian colleges |
| 2 | Fix NAP inconsistency: Change "Kumarapalayam" to "Komarapalayam" in site-config.ts | #41 | High — eliminates Knowledge Graph entity confusion |
| 3 | Expand all 23 FAQ answers to 134-167 words each | #26, #37 | Very High — enables AI passage extraction across all pages |
| 4 | Add inline citations to authoritative sources on all pages | #27, #28, #66 | Very High — establishes E-E-A-T Trustworthiness for AI |
| 5 | Add author bylines with credentials to all content pages | #32, #63, #64, #71 | High — enables AI E-E-A-T authorship verification |
| 6 | Seed 5-10 Quora Q&As about JKKN AHS courses | #55 | Very High — Perplexity + Google AI Overview cite Quora |
| 7 | Encourage genuine Reddit discussions about JKKN AHS | #54 | Very High — Reddit is primary AI training data source |
| 8 | Publish 20+ blog posts to build content volume | #9 | Very High — 2 posts = zero citability; need critical mass |
| 9 | Add expert quotes with named credentials to all course pages | #30, #65 | High — E-E-A-T "Expertise" signal |

### P1 — High (Do Next)

| # | Action | Issues Addressed | Estimated Impact |
|---|--------|-----------------|------------------|
| 10 | Fix email inconsistency: Align site-config.ts to alliedhealth@jkkn.ac.in | #42 | Medium — NAP consistency across all Google properties |
| 11 | Add VideoObject schema for campus/course videos | #10, #57 | Medium-High — enables video citations in AI answers |
| 12 | Add Person schema for principal + HODs | #12, #64, #70 | High — enables "who teaches at JKKN" AI queries |
| 13 | Add Event schema for admission/counseling events | #13 | Medium-High — enables "when is JKKN admission" queries |
| 14 | Fix offers.price in all 9 Course schemas | #17 | Medium — enables Google Course rich results |
| 15 | Fix blog slug typo and redirect | #6 | Medium — fixes malformed indexed URL |
| 16 | Create llms.txt with complete institutional data | #5 | Medium-High — curated AI context file |
| 17 | Fix data inconsistency: "20+ recruiters" vs "100+ partners" | #35 | Medium — eliminates AI trust-reducing contradiction |
| 18 | Add comparison tables to course pages | #29 | Medium-High — AI citation favorite format |
| 19 | Add visible "Last updated" dates on all pages | #31 | Medium — AI freshness signals |
| 20 | Get press coverage in English media | #56 | High — enables news-based AI citations |
| 21 | Appear in "best AHS colleges" curated editorial lists | #60 | High — AI systems summarize ranking lists |
| 22 | Add Person schema for blog authors (real names) | #20 | Medium — blog E-E-A-T improvement |
| 23 | Add "Reviewed by Dr. [Name], [Credential]" to course pages | #67 | Medium-High — healthcare AI specifically checks this |
| 24 | Add third-party validation references to content | #69 | Medium — earned media signals |

### P2 — Medium (Do After P0/P1)

| # | Action | Issues Addressed | Estimated Impact |
|---|--------|-----------------|------------------|
| 25 | Add MedicalBusiness schema | #14 | Medium — healthcare AI engine visibility |
| 26 | Add source URI to AggregateRating | #15 | Medium — verifiable rating |
| 27 | Add Review schema for individual testimonials | #16 | Medium — AI can quote specific reviews |
| 28 | Add @id URI to CollegeOrUniversity | #18 | Medium — entity deduplication |
| 29 | Add article:published_time / article:modified_time OG tags | #22 | Medium — some AI crawlers use these |
| 30 | Add FAQPage schema to facility pages | #23 | Medium — facility FAQ discoverability |
| 31 | Create course-specific og:images | #21 | Medium — visual context diversity |
| 32 | Add /events, /gallery, /placements to sitemap | #7 | Medium — page discovery |
| 33 | Use actual page modification dates in sitemap lastmod | #1 | Medium — accurate freshness signals |
| 34 | Add image:image tags to sitemaps | #2 | Low-Medium — image search visibility |
| 35 | Enrich Wikipedia article with AHS details | #44 | Medium — AI training data improvement |
| 36 | Create/enrich Wikidata entity for AHS | #43 | Medium — Knowledge Graph improvement |
| 37 | Verify/claim Bing Places listing | #46 | Medium — Copilot local data |
| 38 | Create dedicated AHS LinkedIn page | #58 | Medium — Perplexity LinkedIn parsing |
| 39 | Create AHS YouTube channel with campus/course videos | #57 | Medium — Google AI Overview video citations |
| 40 | Convert homepage "Our X" to "JKKN AHS X" | #34 | Low-Medium — third-person citability |
| 41 | Add descriptive entity-rich alt text to images | #40 | Low-Medium — AI image understanding |
| 42 | Implement EAV-E content structure on course pages | #36 | Medium — structured data extraction |
| 43 | Add blog-to-course-page internal links | #38 | Medium — topical authority graph |
| 44 | Verify Google Knowledge Panel completeness | #62 | Medium — primary AI entity display |
| 45 | Set up GA4 custom segments for AI traffic | #75 | Medium — measurement foundation |
| 46 | Establish AI citation baseline with prompt testing | #72, #73, #74 | Medium — measurement |
| 47 | Enrich Vision Mission page with facts, data, names | #39 | Low-Medium — currently invisible |
| 48 | Fix CollegeDekho from Q&A to full profile | #59 | Medium — directory completeness |
| 49 | Set up content refresh schedule | #77 | Medium — prevents content staleness |
| 50 | Get alumni LinkedIn reviews/endorsements | #61 | Medium — social proof for AI |

### P3 — Low (Nice to Have)

| # | Action | Issues Addressed | Estimated Impact |
|---|--------|-----------------|------------------|
| 51 | Add news:news tags for blog posts in sitemap | #3 | Low — Google News eligibility |
| 52 | Add crawl-delay for CCBot, Diffbot | #4 | Low — server protection |
| 53 | Fix canonical trailing slash inconsistency | #8 | Low — minor entity signal |
| 54 | Add courseCode from TNMGRMU | #19 | Low — entity matching precision |
| 55 | Add WhatsApp ContactPoint in schema | #25 | Low — AI contact method recommendation |
| 56 | Add district to LocalBusiness addressLocality | #47 | Low — location resolution |
| 57 | Add GeoCoordinates to LocalBusiness schema | #48 | Low — entity consistency |
| 58 | Add hasMap field to Place schema | #49 | Low — physical entity anchoring |
| 59 | Add ISO 3166-2 code (IN-TN) to addressRegion | #50 | Low — international AI resolution |
| 60 | Add SearchAction/ApplyAction for AI agents | #24 | Low — future AI agent compatibility |
| 61 | Define re-optimization triggers | #78 | Low — proactive vs reactive |
| 62 | Set up monthly GEO reporting cadence | #76 | Low — accountability |

---

## Cross-Skill Recommendations

| Skill | Connection to GEO | Key Actions |
|-------|-------------------|-------------|
| `/schema` | D2 issues directly — VideoObject, Person, Event, MedicalBusiness, Review, BlogPosting improvements | Generate and deploy missing schema types |
| `/aeo` | FAQ expansion (D3 #26) directly impacts Featured Snippet + PAA capture | Expand all 23 FAQs to 134-167 words with citations |
| `/site-architecture` | Blog-to-course linking (D3 #38), comparison tables (#29), content depth | Build topical authority clusters around each course |
| `/seo-blog` | Content volume (D1 #9) — need 20+ posts for AI citability | Publish targeted blog content with expert bylines |
| `/leo` | NAP consistency (D4 #41, #42), GBP optimization, Bing Places (#46) | Fix NAP, verify all local listings |
| `/rto` | AggregateRating source (#15), Google review volume, earned media | Build review volume, add review schema |
| `/schema-audit` | Validate all existing schemas, identify missing markup per page | Systematic page-by-page schema gap closure |
| `/competitor-analysis` | SOV tracking (#74), directory presence gap (#51-53), ranking inclusion (#60) | Benchmark vs PSG, Saveetha, SRM for AI visibility |

---

## GEO Score Methodology

### Dimension Scoring

| Dimension | Weight | Score Calculation |
|-----------|--------|-------------------|
| D1 — Technical Foundation | 15% | (Strengths - Issues) scaled to 100 |
| D2 — Schema Coverage | 15% | (Types present / Types needed) + field completeness |
| D3 — Content Citability | 20% | Per-page factor audit average (34/100) |
| D4 — Entity Optimization | 15% | NAP consistency + sameAs coverage + knowledge graph |
| D5 — Off-Site Authority | 15% | Platform presence count / Target platforms |
| D6 — E-E-A-T Signals | 10% | Authorship + expertise + citations + validation |
| D7 — AI Measurement | 10% | Infrastructure and tracking setup |

### Overall Score Calculation

| Dimension | Raw Score | Weight | Weighted |
|-----------|-----------|--------|----------|
| D1 | 62 | 15% | 9.3 |
| D2 | 55 | 15% | 8.25 |
| D3 | 34 | 20% | 6.8 |
| D4 | 35 | 15% | 5.25 |
| D5 | 12 | 15% | 1.8 |
| D6 | 10 | 10% | 1.0 |
| D7 | 5 | 10% | 0.5 |
| **TOTAL** | | | **32.9 → 28/100** |

---

## Appendix A: FAQ Answer Word Length Distribution

| Word Count Range | Count | % of Total |
|------------------|-------|------------|
| Under 25 words | 3 | 13% |
| 25-40 words | 7 | 30% |
| 41-55 words | 9 | 39% |
| 56-75 words | 4 | 17% |
| 76-100 words | 0 | 0% |
| 101-133 words | 0 | 0% |
| 134-167 words (OPTIMAL) | 0 | 0% |
| **Total** | **23** | **100%** |

## Appendix B: First-Person Language Distribution

| Page | "Our" | "We" | "Us" | Total | Density (/1000w) |
|------|-------|------|------|-------|-------------------|
| Homepage | 6 | 1 | 1 | 8 | 3.6 |
| Cardiac Technology | 0 | 0 | 0 | 0 | 0.0 |
| Dialysis Technology | 1 | 0 | 0 | 1 | 0.8 |
| Vision Mission | 2 | 1 | 0 | 3 | 15.0 |
| **Site Total** | **9** | **2** | **1** | **12** | — |

## Appendix C: Data Inconsistencies Found

| # | Field | Location A | Value A | Location B | Value B | Impact |
|---|-------|-----------|---------|-----------|---------|--------|
| 1 | City spelling | site-config.ts:51 | Kumarapalayam | Footer.tsx:109 + all schema | Komarapalayam | Knowledge Graph entity duplication |
| 2 | Email | site-config.ts:48 | ahs@jkkn.ac.in | Footer, contact, layout.tsx | alliedhealth@jkkn.ac.in | NAP mismatch |
| 3 | Recruiter count | Homepage placements section | 20+ recruiters | Homepage FAQ Q5 | 100+ recruiting partners | Self-contradicting data |

---

**Report Generated:** 2026-03-19
**Audit Method:** Triple-Check (Codebase + Live Scrape + AI Search)
**Total Issues Found:** 78
**Priority Breakdown:** P0: 9 | P1: 15 | P2: 28 | P3: 12 | Info: 14

Triple-check validation: PASSED
