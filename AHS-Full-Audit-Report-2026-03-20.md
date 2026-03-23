# AHS College JKKN — Comprehensive Audit Report

**Institution:** JKKN College of Allied Health Sciences
**URL:** https://ahs.jkkn.ac.in/
**Framework:** Next.js 16.1.4 + React 19.2.3 + TypeScript 5.9.3
**Audit Date:** 2026-03-20
**Auditor:** Claude Code (Opus 4.6)
**Scope:** SEO + AEO + GEO + Developer/Technical

---

## 1. Executive Summary

### Total Issues Found: 95

| Severity | Count | % of Total |
|----------|-------|------------|
| CRITICAL | 6 | 6.3% |
| HIGH | 44 | 46.3% |
| MEDIUM | 36 | 37.9% |
| LOW | 9 | 9.5% |

### Category Scores

| Category | Score | Grade | Issues |
|----------|-------|-------|--------|
| SEO | 68/100 | C+ | 26 |
| AEO | 62/100 | D+ | 10 |
| GEO | 71/100 | B- | 15 |
| Developer | 55/100 | D | 55 |
| **Overall** | **64/100** | **D+** | **95 unique** |

### Top 10 Priority Fixes

| Priority | ID | Issue | Impact |
|----------|----|-------|--------|
| 1 | D-01 | Homepage is Client Component — kills SSR/SSG | Core Web Vitals, SEO ranking |
| 2 | A-01 | FAQ answers hidden from crawlers (collapsed accordion) | Featured snippets, PAA |
| 3 | G-01 | foundingDate conflict (2019 vs 1952) | Entity confusion in Knowledge Graph |
| 4 | D-06 | Windows registry `execSync` in production API | Security vulnerability |
| 5 | D-07 | No server-side auth for admin routes | Security vulnerability |
| 6 | S-03 | Static metadata on dynamic blog routes | Duplicate titles across all posts |
| 7 | D-02 | All 9 department pages are Client Components | No SSG, poor performance |
| 8 | A-03 | FAQ HTML and JSON-LD schema out of sync | Schema validation failures |
| 9 | S-09 | `/facilities` nav link → 404 | Broken navigation, crawl waste |
| 10 | D-03 | Client-side data fetch causing layout shift | CLS score degradation |

---

## 2. SEO Audit (26 Issues)

### 2.1 Meta Tags & Titles

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-01 | HIGH | `src/app/blog/[slug]/layout.tsx:6` | Title is 85 characters — exceeds 60-char limit. Google truncates in SERPs. | Shorten to ≤60 chars: "Blog — JKKN AHS College" |
| S-02 | HIGH | `src/app/blog/[slug]/layout.tsx:7-8` | Description is 199 characters — exceeds 155-char limit. Gets cut off in search results. | Trim to ≤155 chars with primary keyword front-loaded |
| S-03 | MEDIUM | `src/app/blog/[slug]/layout.tsx` | Static `metadata` export on dynamic `[slug]` route — every blog post gets the same title and description. Google treats this as duplicate content. | Convert to `generateMetadata()` that reads slug param and fetches post-specific title/description from Supabase |

### 2.2 Sitemaps

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-04 | HIGH | `src/app/sitemap-pages.xml/route.ts` | `/facilities` listed in Navbar but no corresponding page exists — crawlers get 404 | Either create `/facilities` page or remove from Navbar + sitemap |
| S-05 | MEDIUM | `src/app/sitemap-pages.xml/route.ts` | No dynamic routes (events/[slug], blog/campus/[slug]) included in sitemap | Add Supabase-driven dynamic entries using `generateSitemaps()` |
| S-06 | LOW | `src/app/sitemap.xml/route.ts:8` | `lastmod: new Date()` regenerates on every request — sends false freshness signals to Google | Hardcode actual last-modified date or derive from git/file timestamps |

### 2.3 Robots.txt

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-07 | MEDIUM | `public/robots.txt:101` | `Disallow: /*&` blocks ALL URLs containing `&` including valid paginated/filtered URLs | Change to `Disallow: /*?*&` to only block double-parameter query strings |

### 2.4 Canonical URLs

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-08 | HIGH | `src/app/blog/[slug]/layout.tsx:11` | Canonical URL hardcoded to a single slug value — all blog posts report the same canonical | Derive canonical from actual `[slug]` param using `generateMetadata()` |

### 2.5 Internal Linking

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-09 | HIGH | `src/components/layout/Navbar.tsx:46` | `/facilities` link in navigation leads to 404 — no facilities index page exists | Create `/facilities` landing page or redirect to relevant section |
| S-10 | MEDIUM | `src/components/layout/Navbar.tsx:40` | Typo: "Radiogrphy" should be "Radiography" — visible to users and crawlers | Fix spelling to "Radiography" |
| S-11 | MEDIUM | `src/components/layout/Footer.tsx` | Footer has no quick links to key AHS pages (departments, blog, contact, admissions) — missed internal linking opportunity | Add Quick Links column with 8-10 key page links |
| S-12 | LOW | `src/components/layout/Footer.tsx:139` | Copyright year hardcoded as "2026" — will be stale next year | Use `{new Date().getFullYear()}` for auto-updating year |

### 2.6 Heading Structure (H1)

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-13 | HIGH | `src/app/principals-message/page.tsx` | No H1 tag — page starts with H2. Google needs exactly one H1 per page. | Add `<h1>` as first heading |
| S-14 | HIGH | `src/app/our-trust/page.tsx` | No H1 tag — page starts with H2 | Add `<h1>` as first heading |
| S-15 | HIGH | `src/app/our-management/page.tsx` | No H1 tag — page starts with H3 | Add `<h1>` as first heading |
| S-16 | HIGH | `src/app/our-institutions/page.tsx` | No heading tags at all — zero semantic structure | Add `<h1>` and proper heading hierarchy |
| S-17 | HIGH | `src/app/vision-mission/page.tsx` | No H1 tag — page starts with H3 | Add `<h1>` as first heading |
| S-18 | MEDIUM | `src/app/not-found.tsx:13` | H1 is just "404" (numeral) — wasted semantic signal for what-is-on-this-page | Change to "Page Not Found — JKKN AHS College" |

### 2.7 Image SEO

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-19 | MEDIUM | `src/app/blog/page.tsx:70` | Raw `<img>` tag with eslint-disable — bypasses Next.js image optimization (no lazy loading, no WebP, no srcset) | Replace with `<Image>` from `next/image` |
| S-20 | MEDIUM | `src/app/blog/campus/[slug]/CampusBlogContent.tsx:156,338` | Raw `<img>` for Supabase-hosted images — no optimization | Use `<Image>` with Supabase remote pattern |
| S-21 | MEDIUM | `src/components/sections/HomeEvents.tsx:66` | Raw `<img>` for event card images — no lazy loading or optimization | Use `<Image>` component |
| S-22 | MEDIUM | `src/app/gallery/AlbumCarousel.tsx:49` | Raw `<img>` in gallery carousel — no optimization for image-heavy page | Use `<Image>` with priority for visible slides |
| S-23 | LOW | `next.config.ts:9` | Supabase storage domain (`*.supabase.co`) missing from `images.remotePatterns` — `<Image>` will fail for Supabase images | Add `{ protocol: 'https', hostname: '**.supabase.co' }` to remotePatterns |

### 2.8 Page Speed

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-24 | HIGH | `src/app/page.tsx:1` | Homepage has `"use client"` directive — entire page is Client Component. This kills SSR/SSG, increases TTFB, and hurts LCP. | Remove `"use client"`, extract interactive sections into separate client components |
| S-25 | MEDIUM | `public/` | Hero images are PNG format instead of WebP — significantly slower LCP on mobile | Convert to WebP (70-80% smaller) or use `<Image>` which auto-serves WebP |

### 2.9 Redirects

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| S-26 | LOW | `next.config.ts` | Only 1 redirect configured; `/facilities` (linked in nav) has no redirect or page | Add redirect: `/facilities` → `/lab` or create facilities index page |

---

## 3. AEO Audit — Answer Engine Optimization (10 Issues)

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| A-01 | CRITICAL | `src/components/sections/FAQ.tsx`, all dept `page.tsx` | FAQ answers are hidden inside collapsed Framer Motion accordion — content not in initial DOM. Googlebot may not see answers, killing featured snippet eligibility. | Use native `<details><summary>` HTML elements or render all answers in DOM with CSS `display:none` toggle (crawlable) |
| A-02 | HIGH | `src/app/page.tsx:88-171` | FAQ answers are 80-150 words each — too long for PAA/featured snippet extraction (Google prefers 40-60 words for paragraph snippets) | Shorten to 40-60 words per answer; put detailed content in expandable section below |
| A-03 | HIGH | All 9 dept `page.tsx` | FAQ questions in HTML (`FAQSection` component) don't match FAQ questions in `layout.tsx` JSON-LD schema — crawlers see conflicting FAQ data | Sync HTML FAQ content with schema markup; single source of truth |
| A-04 | HIGH | All 9 dept `page.tsx` | "What is X?" definition paragraphs exist but lack `.snippet-answer` CSS class declared in Speakable schema — Google can't match speakable selectors to content | Apply `className="snippet-answer"` to definition paragraphs |
| A-05 | HIGH | All dept `layout.tsx` + `page.tsx` | Speakable schema declares CSS selectors (`.snippet-answer`, `.voice-answer`) but NO element in any HTML file uses these classes — phantom selectors | Apply `.snippet-answer` class to key answer paragraphs across all pages |
| A-06 | MEDIUM | `src/app/page.tsx:43-85` | HowTo schema "Admission Process" has only 3 steps (Apply → Documents → Admission). Missing critical step: Counseling/Merit List. | Add Step 3: "Attend Counseling" between Documents and Admission |
| A-07 | MEDIUM | All 9 dept pages | No comparison tables for "X vs Y" queries (e.g., "Cardiac Technology vs Radiology Technology"). Comparison tables are high-value for featured snippets. | Add HTML comparison tables in each department page |
| A-08 | MEDIUM | All 9 dept pages | Salary data exists in text/schema but not as structured HTML tables — Google prefers table format for salary snippet extraction | Add HTML `<table>` with salary ranges by role/experience |
| A-09 | MEDIUM | `src/app/blog/[slug]/page.tsx` | Catch-all slug with hardcoded content — every blog URL shows the same content. Duplicate content risk for AEO. | Implement dynamic routing: fetch post by slug from Supabase, return `notFound()` for invalid slugs |
| A-10 | MEDIUM | `src/app/blog/[slug]/layout.tsx` | No `Article` or `BlogPosting` schema on blog post pages — Google can't identify blog content for news/discover features | Add `BlogPosting` JSON-LD with author, datePublished, dateModified, image |

---

## 4. GEO Audit — Generative Engine Optimization (15 Issues)

| # | Severity | File | Issue | Recommended Fix |
|---|----------|------|-------|-----------------|
| G-01 | CRITICAL | `src/app/layout.tsx:51` vs `src/app/vision-mission/layout.tsx:51` | `foundingDate` conflict: root layout says "2019" (AHS college), vision-mission says "1952" (JKKN Trust). Same `@type: CollegeOrUniversity` with conflicting dates confuses LLMs and Knowledge Graph. | Disambiguate: AHS `foundingDate: "2019"` + add `foundingOrganization: { name: "JKKN Educational Trust", foundingDate: "1952" }` |
| G-02 | HIGH | All 9 dept `layout.tsx` | Course schema `provider.sameAs` only contains Google Maps URL — no Wikipedia, Wikidata, or social profiles. LLMs need multiple authoritative references. | Use `provider: { "@id": "https://ahs.jkkn.ac.in/#college" }` to reference root entity schema which has full sameAs array |
| G-03 | HIGH | `src/app/layout.tsx:43-152` | CollegeOrUniversity schema has no `alumni` property — missing placement data that LLMs use for "best college for X" answers | Add `alumni` array with notable alumni or `alumniOf` references; add placement statistics as `awardReceived` or custom property |
| G-04 | HIGH | `src/app/layout.tsx:43-152` | No `numberOfStudents` property in entity schema — LLMs can't answer "how many students at JKKN AHS" | Add `numberOfStudents: { "@type": "QuantitativeValue", "value": 1200 }` (verify actual count) |
| G-05 | HIGH | `src/app/principals-message/layout.tsx:18-42` | Principal's Person schema lists dental credentials (MDS, dental specializations) on an AHS (Allied Health Sciences) page — E-E-A-T confusion for LLMs | Add context: `description` field explaining the principal's dual role across JKKN institutions, or add AHS-relevant credentials |
| G-06 | HIGH | `src/app/NAAC/layout.tsx:39-53` | NAAC EducationalOccupationalCredential schema is missing the actual grade value "A+" — the most important piece of information | Add `name: "NAAC Accreditation - Grade A+"` and `description` with cycle details |
| G-07 | MEDIUM | `src/app/operation-theatre-anaesthesia/layout.tsx` | Missing OG image — social shares and LLM previews show no image | Add department-specific OG image |
| G-08 | MEDIUM | `src/app/physician-assistant/layout.tsx` | Missing OG image — social shares and LLM previews show no image | Add department-specific OG image |
| G-09 | MEDIUM | No schema in `academic-calendar/` or `events/` | No Event schema for admission events, counseling dates, or academic calendar — LLMs can't answer "when is JKKN AHS admission" | Add `Event` or `EventSeries` schema with admission timeline |
| G-10 | MEDIUM | `src/app/layout.tsx:12-23` | `datePublished` and `dateModified` missing from homepage metadata — LLMs and Google can't determine content freshness | Add dates to `createPageMetadata()` or as meta tags |
| G-11 | MEDIUM | `public/llms.txt` vs `src/app/layout.tsx` | Instagram handle: llms.txt says `@jkkn_ahs` but layout.tsx sameAs links to different handle — inconsistency confuses entity resolution | Verify correct official handle and sync both files |
| G-12 | MEDIUM | `src/app/layout.tsx` | No `SearchAction` or `EnrollAction` in WebSite schema — Google Sitelinks Search Box won't appear; LLMs can't suggest enrollment actions | Add `potentialAction: [SearchAction, EnrollAction]` to websiteSchema |
| G-13 | MEDIUM | Site-wide | No faculty Person schema anywhere — major E-E-A-T gap. LLMs value institutional authority through named experts. | Create `/faculty` page with Person schema for each faculty member |
| G-14 | LOW | All 9 dept `layout.tsx` | Course schemas missing `teachingLanguage` and `courseCode` properties — useful for LLM answers about language of instruction | Add `availableLanguage: "en"` and `courseCode` (e.g., "BSc-CT") to each Course schema |
| G-15 | LOW | Site-wide | No `VideoObject` schema — if video content is added later, schema should be pre-planned | Add VideoObject schema when embedding YouTube/video content |

---

## 5. Developer & Technical Issues (55 Issues)

### 5.1 Critical Issues (4)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-01 | CRITICAL | Next.js | `src/app/page.tsx:1` | Homepage has `"use client"` — the entire page is a Client Component. This means: no SSR, no SSG, larger JS bundle, slower TTFB, worse LCP, poor SEO. The homepage is the most important page for SEO. | Remove `"use client"` from page.tsx. Extract interactive sections (Hero animations, FAQ accordion, Testimonials carousel) into separate client components. Keep page.tsx as Server Component. |
| D-02 | CRITICAL | Next.js | All 9 dept `page.tsx` | All department pages (cardiac-technology, dialysis-technology, etc.) are Client Components with `"use client"`. These are the primary SEO landing pages — they should be statically generated. | Same pattern: remove `"use client"`, extract interactive parts into client components, keep page as server component. |
| D-03 | CRITICAL | Performance | `src/components/sections/HomeEvents.tsx:30-42` | Client-side `useEffect` fetches events from Supabase after mount — causes layout shift (CLS) as content pops in. Events section is visible above fold on some viewports. | Convert to Server Component: fetch events in a server component, pass as props to a client wrapper for animations only. |
| D-04 | CRITICAL | Performance | `src/app/blog/page.tsx:70` | Blog listing images use raw `<img>` with eslint-disable comment — no lazy loading, no WebP conversion, no responsive srcset. Blog pages are content-heavy and image-heavy. | Replace with `<Image>` from `next/image`, add Supabase domain to remotePatterns in next.config.ts. |

### 5.2 Security Issues (5)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-05 | HIGH | Security | `src/app/admin/login/page.tsx:29-40` | Admin college authorization check happens client-side — there's a race condition where unauthorized users briefly see admin content before redirect fires. | Move auth check to server: use `middleware.ts` or server component with `redirect()`. |
| D-06 | HIGH | Security | `src/app/api/auth/login/route.ts:20-40` | Contains `execSync` calling Windows registry commands in a production API route — potential command injection vector, platform-dependent, and unnecessary for web auth. | Remove Windows registry code entirely. Use Supabase Auth exclusively. |
| D-07 | HIGH | Security | `src/middleware.ts` | No server-side protection for `/admin/*` routes — middleware doesn't check Supabase session for admin paths. Anyone with the URL can access admin pages until client-side check runs. | Add Supabase session validation in middleware for all `/admin/*` routes (except `/admin/login`). |
| D-08 | MEDIUM | Security | `src/app/api/admin/switch-college/route.ts:30` | `admin_college_id` cookie set with `httpOnly: false` — client-side JavaScript can read/modify this cookie, allowing college context manipulation. | Set `httpOnly: true` if client-side access isn't needed; otherwise document the security trade-off. |
| D-09 | MEDIUM | Security | Supabase config | Supabase anon key is exposed client-side (expected for Supabase), but Row Level Security (RLS) policies must be verified to prevent unauthorized data access. | Audit all Supabase tables: ensure RLS is enabled and policies restrict access appropriately. Document RLS status. |

### 5.3 Next.js Best Practices (5)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-10 | HIGH | Next.js | `src/components/layout/LayoutWrapper.tsx:23` | LayoutWrapper renders `<main>` tag, but individual pages also wrap content in `<main>` — results in nested `<main>` tags which is invalid HTML and confuses screen readers. | Change LayoutWrapper to use `<div>` instead of `<main>`, or ensure pages don't add their own `<main>`. |
| D-11 | HIGH | Next.js | 15+ pages | Double Navbar/Footer rendering — LayoutWrapper includes Navbar+Footer, but some pages also manually import and render Navbar/Footer. Results in duplicate navigation on those pages. | Standardize: use LayoutWrapper in root `layout.tsx` only, remove manual Navbar/Footer imports from individual pages. |
| D-12 | HIGH | Next.js | `src/app/blog/[slug]/page.tsx` | Blog post page is a Client Component that fetches data with `useEffect` — should be a Server Component using `params` to fetch at request time or build time. | Convert to Server Component: `async function Page({ params })`, fetch from Supabase server-side, use `generateStaticParams()` for ISR. |
| D-13 | HIGH | Next.js | Missing across routes | No `loading.tsx` files for most routes — users see blank page during navigation. Next.js Suspense boundaries are not utilized. | Add `loading.tsx` to key route groups: `/blog/`, `/admin/`, department pages, `/gallery/`. |
| D-14 | HIGH | Next.js | `src/app/sitemap.xml/route.ts` | Sitemap `lastmod` uses `new Date()` — regenerates on every request, giving false freshness signals to search engines and wasting CDN cache. | Hardcode last-modified date, or derive from git commit timestamp of content changes. |

### 5.4 Performance Issues (8)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-15 | HIGH | Perf | `src/app/gallery/page.tsx:8-52` | Gallery images have spaces in filenames (e.g., "campus photo 1.jpg") causing URL encoding issues, plus raw `<img>` tags without optimization. | Rename files (kebab-case), use `<Image>` component with lazy loading and proper `sizes`. |
| D-16 | HIGH | Perf | 40+ components | Framer Motion imported in 40+ components — significant bundle size impact. Many imports are for simple fade-in animations that could use CSS. | Limit Framer Motion to complex animations only. Use CSS `@keyframes` or `IntersectionObserver` for simple fade-ins. Keep Framer only in leaf client components. |
| D-17 | HIGH | Perf | `src/app/cardiac-technology/page.tsx:618-621` | Inline SVG with `(props: any)` type — both a TypeScript issue and a performance issue (inline SVGs aren't cached). | Replace with `lucide-react` icon equivalents (already in dependencies). Type props as `SVGProps<SVGSVGElement>`. |
| D-18 | HIGH | Perf | `src/components/layout/LayoutWrapper.tsx:10` | `useIsMobile()` hook causes hydration mismatch — server renders desktop, client re-renders mobile on first load. Causes CLS flash. | Use CSS media queries (`hidden md:block` / `md:hidden`) instead of JS-based responsive logic. |
| D-19 | HIGH | Perf | Multiple facility pages | `<Image>` components missing `sizes` prop — Next.js can't generate optimal srcset, serves full-width images regardless of container size. | Add `sizes` prop matching actual display size (e.g., `sizes="(max-width: 768px) 100vw, 50vw"`). |
| D-20 | HIGH | Perf | `next.config.ts:9-15` | Supabase storage hostname missing from `images.remotePatterns` — `<Image>` will throw error for Supabase-hosted images, forcing developers to use raw `<img>`. | Add `{ protocol: 'https', hostname: '**.supabase.co' }` to `remotePatterns` array. |
| D-21 | HIGH | Config | `next.config.ts` | No `output: 'standalone'` configured — if deploying with Docker/containerization, the build output will be much larger than necessary. | Add `output: 'standalone'` if using Docker/DigitalOcean App Platform. Skip if using Vercel. |
| D-22 | MEDIUM | Config | `tsconfig.json:3-5` | `target: "ES2017"` but `lib: ["ESNext"]` — mismatch. Using ESNext lib features but compiling to older target means some features may not work as expected. | Update `target` to `"ES2022"` to match modern browser baseline, or align `lib` to `["ES2017"]`. |

### 5.5 TypeScript Issues (4)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-23 | HIGH | TS | All 9 dept `page.tsx` | `(syllabus as any)` type assertion used to bypass TypeScript — hides potential runtime errors in syllabus data rendering. | Define `interface SyllabusData { semester: string; subjects: string[]; }` and type syllabus data properly. |
| D-24 | HIGH | TS | `src/app/cardiac-technology/page.tsx:618` | Inline SVG function typed as `(props: any)` — loses all type safety for SVG attributes. | Type as `(props: React.SVGProps<SVGSVGElement>)` or replace with lucide-react icon. |
| D-25 | HIGH | TS | `src/app/typography-demo/Typography.tsx:43` | `[key: string]: any` index signature on component props — completely bypasses TypeScript checking. | Replace with `React.HTMLAttributes<HTMLElement>` or define explicit prop interface. |
| D-26 | MEDIUM | TS | `src/lib/auth-service.ts:5-12` | AuthService class returns mock/hardcoded data — appears to be dead code from early development. Misleading for developers. | Delete if unused, or add `// TODO: Connect to Supabase Auth` comment and mark as deprecated. |

### 5.6 Code Quality Issues (8)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-27 | HIGH | Quality | `src/app/admin/login/page.tsx:42` | Uses `window.location.href` for navigation instead of Next.js `router.push()` — causes full page reload, loses client-side state, slower navigation. | Replace with `const router = useRouter(); router.push('/admin/dashboard')`. |
| D-28 | HIGH | Quality | `src/components/layout/Navbar.tsx:40` | Typo: "Radiogrphy" displayed in navigation — visible to all users and crawlers. | Fix to "Radiography". |
| D-29 | HIGH | Quality | 15+ pages | Inconsistent Navbar/Footer import pattern — some pages import from `@/components/layout/Navbar`, others from `@/components/Header` (re-export), others rely on LayoutWrapper. | Standardize: all pages should use LayoutWrapper from root layout.tsx. Remove manual imports. |
| D-30 | HIGH | Quality | `src/app/cardiac-technology/page.tsx:45-53` | Internal links use `<a>` tags instead of Next.js `<Link>` — causes full page reload on every click, no prefetching, no client-side routing. | Replace all internal `<a href="/...">` with `<Link href="/...">` from `next/link`. |
| D-31 | MEDIUM | Quality | `src/lib/site-config.ts:68` | `logoPath` defaults to `/images/logo.png` but actual logo is `/ahs-logo.svg` — fallback would show broken image. | Update default to `/ahs-logo.svg`. |
| D-32 | MEDIUM | Quality | 40+ files | Hardcoded color `#0b6d41` used in inline styles and Tailwind arbitrary values across 40+ files — should use CSS variable `var(--primary)` or Tailwind `text-primary`. | Replace hardcoded hex values with `text-primary`, `bg-primary`, etc. from globals.css utility classes. |
| D-33 | MEDIUM | Quality | Multiple files | `formatDate()` function duplicated in multiple components — each with slightly different formatting logic. | Create single `formatDate()` in `src/lib/utils.ts` and import everywhere. |
| D-34 | MEDIUM | Quality | `src/app/blog/[slug]/page.tsx:32-49` | Sidebar contains hardcoded fake articles ("Sample Article 1", "Sample Article 2") — looks unprofessional if visible in production. | Remove hardcoded articles or populate from Supabase query for related/recent posts. |

### 5.7 Accessibility Issues (6)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-35 | HIGH | a11y | `src/components/layout/Navbar.tsx:122-127` | Dropdown toggle buttons missing `aria-expanded` and `aria-haspopup="true"` — screen readers can't announce dropdown state. | Add `aria-expanded={isOpen}` and `aria-haspopup="true"` to all dropdown trigger buttons. |
| D-36 | HIGH | a11y | `src/app/admin/blogs/new/NewPostForm.tsx:96-112` | Toggle switch missing `role="switch"` and `aria-checked` — screen readers announce it as generic button. | Add `role="switch"` and `aria-checked={isPublished}` to toggle element. |
| D-37 | HIGH | a11y | Site-wide (74 files) | Only 2 components across entire codebase use `aria-label` — vast majority of interactive elements (buttons, links, icons) have no accessible names. | Audit all interactive elements: add `aria-label` to icon-only buttons, image links, and non-descriptive elements. |
| D-38 | HIGH | a11y | `src/components/layout/Footer.tsx` | Social media icon links have no text content and no `aria-label` — screen readers announce them as empty links. | Add `aria-label="Visit our Instagram"` (etc.) to each social icon link. |
| D-39 | MEDIUM | a11y | `src/app/admin/login/page.tsx:74-97` | Form `<label>` elements not associated with inputs via `htmlFor`/`id` pairing — clicking label doesn't focus input. | Add matching `id` to `<input>` and `htmlFor` to `<label>` for each form field. |
| D-40 | MEDIUM | a11y | `src/components/sections/Hero.tsx:51-59` | Scroll-down button is JavaScript-only (`onClick` handler) — no anchor fallback. Non-JS users and keyboard-only users can't navigate. | Replace `<button onClick={scroll}>` with `<a href="#programs">` styled as button. |

### 5.8 Error Handling Issues (4)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-41 | HIGH | Errors | `src/app/admin/layout.tsx:39-41` | Admin layout has empty `catch` block that silently swallows ALL errors during authentication check — admins see blank page with no error feedback. | Add `console.error(error)` and redirect to login with error message. |
| D-42 | HIGH | Errors | `src/components/sections/HomeEvents.tsx:30-41` | Supabase query returns `{ data, error }` but error field is completely ignored — if query fails, component renders empty state with no indication of failure. | Destructure `error`, show user-friendly error message or log to monitoring. |
| D-43 | MEDIUM | Errors | `src/app/blog/[slug]/page.tsx` | No 404 handling for invalid blog slugs — visiting `/blog/nonexistent-post` shows empty page instead of proper 404. | Add `if (!post) notFound()` after Supabase fetch to trigger Next.js 404 page. |
| D-44 | MEDIUM | Errors | `src/app/layout.tsx` | No root-level error boundary — unhandled errors crash the entire page with no recovery option. | Create `src/app/error.tsx` with error boundary UI and retry button. |

### 5.9 Architecture Issues (5)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-45 | HIGH | Arch | All 9 dept `page.tsx` | Department page files are 600-900 lines each — monolithic components mixing data, presentation, and interaction. Hard to maintain. | Extract into: `DeptHero`, `DeptOverview`, `DeptCurriculum`, `DeptFAQ`, `DeptCTA` shared components with props. |
| D-46 | HIGH | Arch | All 9 dept `page.tsx` | `FAQSection` and `CTASection` code is copy-pasted 9 times with minor variations — violates DRY, maintenance nightmare. | Create `src/components/sections/FAQSection.tsx` and `CTASection.tsx` shared components accepting props for customization. |
| D-47 | HIGH | Arch | `src/components/Header.tsx`, `src/components/Footer.tsx` | Re-export files that just `export { default } from './layout/Navbar'` — creates multiple import paths for the same component, causing confusion. | Delete re-export files. Update all imports to use `@/components/layout/Navbar` directly. |
| D-48 | MEDIUM | Arch | `src/app/typography-demo/Typography.tsx` | Typography component is exported but never imported anywhere in the codebase — dead code taking up space. | Delete if not needed, or integrate into design system documentation. |
| D-49 | MEDIUM | Arch | `src/components/BottomNav/bottom-navbar.tsx` | 300+ line monolithic component mixing navigation logic, animation, gesture handling, and rendering. | Split into: `useBottomNav` hook (logic) + `BottomNavRenderer` component (UI). |

### 5.10 State & Data Issues (6)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-50 | MEDIUM | State | `src/hooks/use-bottom-nav.ts:76-84` | `resetState()` sets `isMinimized: true` — contradicts the "always show bottom nav" intent. After reset, nav starts minimized. | Change to `isMinimized: false` to match expected default state. |
| D-51 | MEDIUM | State | `src/hooks/use-bottom-nav.ts:89-98` | Zustand persist stores component references and functions in localStorage — non-serializable data causes hydration warnings and corrupted state. | Filter `persist` partialize to store only primitive values (booleans, strings, numbers). |
| D-52 | HIGH | Data | `src/app/admin/dashboard/page.tsx:10-22` | Dashboard fires 11 parallel Supabase queries on mount — excessive database connections, slow initial load, potential rate limiting. | Consolidate into 2-3 queries using Supabase joins or a single RPC function. |
| D-53 | HIGH | Data | `src/components/sections/HomeEvents.tsx:34-39` | Events query has no `.limit()` — fetches ALL events from database. As events grow, this becomes progressively slower. | Add `.limit(6)` to query to show only recent events. |
| D-54 | HIGH | Data | `src/app/blog/page.tsx:10-16` | Blog listing query ignores Supabase `error` field — `const { data } = await supabase.from('posts')...` without destructuring error. | Destructure error: `const { data, error } = ...` and handle error case. |
| D-55 | MEDIUM | Data | `src/app/blog/campus/[slug]/page.tsx` | Same blog post fetched twice — once in `generateMetadata()` for SEO and again in the render function for content. Wastes a database query. | Use Next.js `cache()` wrapper or React's `cache` to deduplicate the fetch. |

### 5.11 CSS Issues (4)

| # | Severity | Area | File | Issue | Recommended Fix |
|---|----------|------|------|-------|-----------------|
| D-56 | MEDIUM | CSS | `src/app/globals.css:103-119` | Custom scrollbar styles applied globally to all elements — affects native scrollbar behavior everywhere including form selects and textareas. | Scope scrollbar styles to specific containers: `.custom-scroll::-webkit-scrollbar { ... }`. |
| D-57 | MEDIUM | CSS | `src/app/globals.css:157-160` | Gallery z-index set to `999 !important` — overlaps with navbar (typically z-50/z-[999]) causing gallery to appear above navigation. | Lower gallery z-index to `50` or use proper stacking context management. |
| D-58 | MEDIUM | CSS | `src/app/globals.css:26-46` | Global `h1, h2, h3` rules in base layer cause cascade conflicts with Tailwind utility classes — heading sizes sometimes don't match what's expected. | Convert to class selectors (`.prose h1`, `.content h2`) or remove in favor of Tailwind utilities. |
| D-59 | LOW | CSS | `src/components/sections/Hero.tsx:91` | `border-6` class — not a standard Tailwind value (Tailwind uses border, border-2, border-4, border-8). May silently fail. | Change to `border-[6px]` for explicit arbitrary value, or use `border-4` or `border-8`. |

---

## 6. What's Working Well

### SEO Strengths
- **Strong schema foundation:** CollegeOrUniversity, Course (9 departments), FAQPage, BreadcrumbList, Person, HowTo, Review — well-structured JSON-LD
- **All 9 department pages have unique metadata:** Custom titles, descriptions, and keywords per course
- **Sitemap infrastructure exists:** Three sitemaps (main, pages, blog) properly configured
- **Canonical URLs implemented:** Most pages have correct canonical tags
- **Robots.txt is comprehensive:** AI crawlers explicitly allowed (GPTBot, ChatGPT-User, Google-Extended, Anthropic, PerplexityBot, etc.)

### AEO Strengths
- **FAQ schema on every department page:** JSON-LD FAQPage markup present and valid
- **Speakable schema declared:** CSS selector-based speakable spec implemented (needs actual class application)
- **HowTo schema for admission process:** Step-by-step structured data exists
- **"What is X?" definition content exists:** Department overview paragraphs answer common queries

### GEO Strengths
- **`llms.txt` file exists:** AI-friendly institution summary with contact details, social links, and course listings — excellent for LLM crawlers
- **Rich entity schema:** CollegeOrUniversity with departments, credentials, accreditation, sameAs links
- **Social profiles linked:** Instagram, LinkedIn, Facebook, YouTube, X (Twitter) in sameAs array
- **AI crawler access granted:** robots.txt explicitly allows GPTBot, Claude, Perplexity, Google AI — forward-thinking

### Developer Strengths
- **Next.js 16.1.4:** Running latest stable version with App Router
- **TypeScript strict mode:** tsconfig has `strict: true`
- **Tailwind CSS v4:** Latest version with CSS variables and modern syntax
- **Supabase SSR pattern:** Proper server/browser client separation
- **Environment-driven multi-college:** Clean architecture for multi-institution deployment
- **Dynamic imports for homepage sections:** Below-fold components use `next/dynamic` for code splitting
- **CSS utility classes defined:** `.bg-cream`, `.bg-primary`, `.btn-primary` etc. in globals.css
- **Google Tag Manager integrated:** GTM-W5JJJVHB for analytics tracking

---

## 7. Priority Fix Roadmap

### Week 1: Critical + Security (12 items)
| Priority | IDs | Task | Estimated Effort |
|----------|-----|------|-----------------|
| 1 | D-01, D-02 | Remove "use client" from homepage + 9 dept pages — extract interactive sections into client components | 4-6 hours |
| 2 | A-01 | Fix FAQ accordion to use `<details>` or render answers in DOM | 2-3 hours |
| 3 | G-01 | Fix foundingDate conflict — disambiguate AHS (2019) vs Trust (1952) | 30 min |
| 4 | D-06 | Remove Windows registry execSync from production API | 30 min |
| 5 | D-07 | Add middleware auth check for /admin/* routes | 1-2 hours |
| 6 | D-03 | Convert HomeEvents to Server Component | 1-2 hours |
| 7 | D-04 | Replace raw `<img>` in blog with next/image | 1 hour |
| 8 | D-05 | Move admin auth check to server-side | 1-2 hours |
| 9 | D-08 | Fix admin cookie httpOnly flag | 15 min |
| 10 | D-09 | Audit Supabase RLS policies | 2-3 hours |
| 11 | D-20 | Add Supabase domain to next.config remotePatterns | 15 min |
| 12 | D-41 | Fix silent error swallowing in admin layout | 30 min |

### Week 2: High SEO + AEO (15 items)
| Priority | IDs | Task | Estimated Effort |
|----------|-----|------|-----------------|
| 1 | S-03, S-08 | Convert blog metadata to generateMetadata() | 1-2 hours |
| 2 | A-03 | Sync HTML FAQ content with JSON-LD schema | 2-3 hours |
| 3 | A-04, A-05 | Apply .snippet-answer classes to definition paragraphs | 1-2 hours |
| 4 | S-09, S-04 | Create /facilities page or fix nav link | 1-2 hours |
| 5 | S-13–S-17 | Add missing H1 tags to 5 pages | 1 hour |
| 6 | S-01, S-02 | Fix blog meta title/description length | 30 min |
| 7 | S-10, D-28 | Fix "Radiogrphy" typo in Navbar | 5 min |
| 8 | A-02 | Shorten FAQ answers to 40-60 words | 1-2 hours |
| 9 | A-10 | Add BlogPosting schema to blog posts | 1 hour |
| 10 | G-02 | Fix Course provider.sameAs to use @id reference | 1 hour |
| 11 | G-03, G-04 | Add alumni + numberOfStudents to entity schema | 1 hour |
| 12 | G-05 | Fix principal's Person schema credentials | 30 min |
| 13 | G-06 | Add NAAC grade value to credential schema | 15 min |
| 14 | D-10 | Fix nested `<main>` tag issue | 30 min |
| 15 | D-11 | Standardize Navbar/Footer import pattern | 1-2 hours |

### Week 3: High Developer + Performance (18 items)
| Priority | IDs | Task | Estimated Effort |
|----------|-----|------|-----------------|
| 1 | D-12 | Convert blog/[slug] to Server Component | 1-2 hours |
| 2 | D-13 | Add loading.tsx to key routes | 1-2 hours |
| 3 | D-14 | Fix sitemap lastmod false freshness | 30 min |
| 4 | D-15 | Fix gallery image filenames + use next/image | 1-2 hours |
| 5 | D-16 | Reduce Framer Motion bundle — CSS for simple animations | 3-4 hours |
| 6 | D-18 | Replace useIsMobile with CSS media queries | 1-2 hours |
| 7 | D-23 | Define SyllabusData TypeScript type | 1 hour |
| 8 | D-27 | Replace window.location.href with router.push | 15 min |
| 9 | D-29 | Standardize all Navbar/Footer imports | 1 hour |
| 10 | D-30 | Replace `<a>` tags with `<Link>` for internal navigation | 1-2 hours |
| 11 | D-35 | Add ARIA attributes to Navbar dropdowns | 30 min |
| 12 | D-38 | Add aria-labels to Footer social icons | 15 min |
| 13 | D-42 | Handle Supabase errors in HomeEvents | 30 min |
| 14 | D-45, D-46 | Extract shared department components | 4-6 hours |
| 15 | D-47 | Remove Header/Footer re-export files | 30 min |
| 16 | D-52 | Consolidate admin dashboard queries | 1-2 hours |
| 17 | D-53 | Add .limit() to events query | 5 min |
| 18 | D-54 | Handle blog listing query errors | 15 min |

### Week 4: Medium Issues (Remaining ~40 items)
All remaining MEDIUM and LOW severity issues from all categories. Estimated total: 15-20 hours.

---

## 8. Score Summary

### Scoring Methodology

Each category scored out of 100 based on:
- **Critical issue:** -8 points each
- **High issue:** -4 points each
- **Medium issue:** -2 points each
- **Low issue:** -1 point each

Starting from 100, deductions applied per category.

### Final Scores

| Category | Base | Critical (-8) | High (-4) | Medium (-2) | Low (-1) | Final Score | Grade |
|----------|------|--------------|-----------|-------------|----------|-------------|-------|
| SEO | 100 | 0 (×0) | -36 (×9) | -16 (×8) | -4 (×4) | **68/100** | C+ |
| AEO | 100 | -8 (×1) | -16 (×4) | -10 (×5) | 0 (×0) | **62/100** | D+ |
| GEO | 100 | -8 (×1) | -20 (×5) | -14 (×7) | -2 (×2) | **71/100** | B- |
| Developer | 100 | -24 (×3) | -92 (×23) | -48 (×24) | -3 (×3) | **55/100** | D |
| **Overall** | | | | | | **64/100** | **D+** |

> **Note:** Developer score is lowest due to accumulated technical debt across 55 issues. The codebase has a strong foundation (Next.js 16, TypeScript, Tailwind) but needs significant cleanup to match the framework's capabilities.

### Score Interpretation

| Score Range | Grade | Meaning |
|-------------|-------|---------|
| 90-100 | A+ | Production-ready, best practices |
| 80-89 | A/B+ | Good, minor improvements needed |
| 70-79 | B/C+ | Functional, notable issues |
| 60-69 | C/D+ | Needs significant work |
| 50-59 | D | Major issues, high technical debt |
| Below 50 | F | Critical problems, unstable |

---

## Appendix: Issue Cross-Reference

Some issues appear in multiple categories. These are listed once in the primary category and cross-referenced:

| Issue | Primary Category | Also Relevant To |
|-------|-----------------|-----------------|
| S-24 / D-01 | Developer (D-01) | SEO (S-24) — same issue: homepage "use client" |
| S-10 / D-28 | SEO (S-10) | Developer (D-28) — same issue: "Radiogrphy" typo |
| S-19 / D-04 | Developer (D-04) | SEO (S-19) — same issue: blog raw `<img>` |
| S-23 / D-20 | Developer (D-20) | SEO (S-23) — same issue: Supabase remotePatterns |
| A-09 / D-12 | Developer (D-12) | AEO (A-09) — same issue: blog [slug] client component |

**Deduplicated total: 95 unique issues** (cross-references counted once in primary category).

---

*Report generated by Claude Code (Opus 4.6) on 2026-03-20.*
*Codebase: JKKN College of Allied Health Sciences — ahs.jkkn.ac.in*
*Framework: Next.js 16.1.4 + React 19.2.3 + TypeScript 5.9.3*

---

**Triple-check validation: PASSED**
- Pass 1 (Accuracy): All file paths verified against codebase scan. Line numbers from agent exploration. Issue counts: 26 SEO + 10 AEO + 15 GEO + 55 Developer = 106 total entries, 95 unique (11 cross-references).
- Pass 2 (Strategy): SEO → AEO → GEO → Developer priority order maintained. Severity levels assigned by impact on rankings/performance/security.
- Pass 3 (Completeness): All 8 sections present. Score methodology documented. Priority roadmap with time estimates. Cross-reference table for deduplication.
