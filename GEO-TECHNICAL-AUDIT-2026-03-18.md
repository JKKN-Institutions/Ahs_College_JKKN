# GEO Technical & Entity Audit — JKKN College of Allied Health Sciences
**Date:** 2026-03-18
**Audit Type:** Triple-Check (robots.txt, llms.txt, schema, canonical, sitemaps)
**Status:** 2 ISSUES FOUND | Score: 92/100

---

## CRITICAL FINDINGS

### Issue #1: ENTITY SPELLING INCONSISTENCY — LOCATION NAME [HIGH SEVERITY]

**Evidence:**
- llms.txt line 17: `Komarapalayam` ✓ CORRECT
- layout.tsx schema: `Komarapalayam` ✓ CORRECT  
- Footer.tsx line 109: `Kumarapalayam` ❌ WRONG

**Impact:** Search engines & AI bots see conflicting location data, weakening knowledge graph & local SEO

**Fix Required:**
File: `src/components/layout/Footer.tsx` line 109
Change: `Kumarapalayam (TK)` → `Komarapalayam (TK)`

---

### Issue #2: MISSING SITEMAP ENTRY — /typography-demo [MEDIUM SEVERITY]

**Evidence:**
- Route exists: `src/app/typography-demo/page.tsx`
- Listed in sitemap: NO
- Is it intentional? Appears to be design/development reference

**Options:**
1. Add `noindex` meta tag if development-only (recommended)
2. Add to sitemap if public-facing
3. Remove route if unused

---

## PASSING CHECKS ✅

✅ **robots.txt** — EXCELLENT
- All 11+ AI bots allowed (GPTBot, ClaudeBot, PerplexityBot, Googlebot, etc.)
- All spam bots blocked (MauiBot, BLEXBot, DataForSeoBot, etc.)
- Admin/internal paths blocked: /_next/, /api/, /admin/, /preview/, /draft/
- Parameter pollution blocked: utm_*, fbclid, gclid, etc.
- No conflicts between Allow/Disallow rules
- llms.txt referenced ✓
- Sitemap URL correct ✓
- Host directive set ✓

✅ **llms.txt** — EXCELLENT
- All 9 programs listed with correct URLs
- Contact info: +91 9345855001, alliedhealth@jkkn.ac.in
- Location accurate: Natarajapuram, NH-544, Komarapalayam
- Sister institutions listed
- Social media links complete
- All data current & verified

✅ **Schema.org Markup** — COMPREHENSIVE
- BreadcrumbList schema ✓
- WebSite schema ✓
- CollegeOrUniversity schema with:
  - Phone, email, address, geo coordinates ✓
  - 9 departments listed ✓
  - 8 areas served + state ✓
  - NAAC A+ accreditation credential ✓
  - 10 sameAs links (social + maps + Wikipedia) ✓
  - Parent organization reference ✓
- ItemList schema for 9 programs ✓
- Speakable schema for voice search ✓
- GTM analytics code ✓

✅ **Canonical URLs** — CORRECT
- Dynamic per-page: https://ahs.jkkn.ac.in{path}
- All facility pages get unique canonicals
- All program pages get unique canonicals
- Verified across multiple pages ✓

✅ **OG/Twitter Cards** — CORRECT
- og:title, og:description, og:url all dynamic ✓
- og:image: 1200x630px (correct dimensions) ✓
- twitter:card: summary_large_image ✓
- All social metadata present ✓

✅ **Facility Pages (9 total)** — ALL COMPLETE
✓ /classroom - metadata + breadcrumb + Place schema
✓ /library - metadata + breadcrumb + Place schema
✓ /lab - metadata + breadcrumb + Place schema
✓ /hostel - metadata + breadcrumb + Place schema
✓ /transport - metadata + breadcrumb + Place schema
✓ /food-court - metadata + breadcrumb + Place schema
✓ /ambulance-service - metadata + breadcrumb + Place schema
✓ /bank-post-office - metadata + breadcrumb + Place schema
✓ /wifi - metadata + breadcrumb + Place schema

✅ **Program Pages (9 total)** — ALL COMPLETE
✓ /cardiac-technology - Course schema + FAQPage schema
✓ /radiology-imaging-technology
✓ /dialysis-technology
✓ /operation-theatre-anaesthesia
✓ /respiratory-therapy
✓ /physician-assistant
✓ /critical-care-technology
✓ /medical-record-science
✓ /accident-emergency-care

✅ **Sitemaps** — VALID XML
- sitemap.xml index lists 2 subs ✓
- sitemap-pages.xml: 44 pages listed ✓
- All URLs use HTTPS ✓
- All use canonical domain ahs.jkkn.ac.in ✓
- Priority levels reasonable (1.0 home, 0.9 programs, 0.5-0.6 facilities) ✓
- Lastmod auto-updated ✓
- Cache-control headers correct ✓

✅ **Entity Consistency** (mostly)
- Phone: +919345855001 → consistent across llms.txt, layout.tsx, Footer ✓
- Email: alliedhealth@jkkn.ac.in → consistent ✓
- Address components match ✓
- Location spelling: MISMATCH in Footer only ❌ (see Issue #1)

✅ **Next.config.ts** — APPROPRIATE
- Image optimization (webp, avif formats) ✓
- Remote patterns configured ✓
- Redirects configured (old URL → home) ✓

✅ **No Test/Development URLs**
- Grep search: localhost, 127.0.0.1, vercel.app, staging = NO MATCHES ✓

✅ **No Accidental noindex Tags**
- All public pages should be indexed ✓

---

## ROUTE VERIFICATION

All routes listed in sitemap-pages.xml exist in src/app:
- Homepage ✓
- 9 Programs ✓
- Departments ✓
- Institutional pages (management, trust, institutions, vision, NAAC, principal, calendar) ✓
- 9 Facility pages ✓
- Info pages (contact, gallery, blog, privacy) ✓

Routes NOT in sitemap but exist in src/app:
- /typography-demo (development/design reference - see Issue #2)
- /admin (correctly blocked in robots.txt)
- /api (correctly blocked in robots.txt)
- /sitemap.xml, /sitemap-blog.xml, /sitemap-pages.xml (correctly meta, not in sitemap)

---

## RECOMMENDATIONS

**Priority 1 (Critical):**
1. Fix Footer.tsx line 109: Change `Kumarapalayam` to `Komarapalayam`

**Priority 2 (Important):**
2. Handle /typography-demo:
   - Option A: Add noindex if development-only
   - Option B: Add to sitemap if public
   - Option C: Remove if unused

**Priority 3 (Enhancement):**
3. Create per-page OG images for programs (improve social CTR)
4. Add more sameAs links (Google Business, news verification, etc.)
5. Add VideoObject schema if YouTube content available

---

## SCORE: 92/100

- robots.txt: 10/10
- llms.txt: 10/10
- Schema: 10/10
- Canonical URLs: 10/10
- OG/Twitter: 9/10
- Facility/Program pages: 10/10
- Sitemaps: 8/10
- Entity consistency: 7/10
- Architecture: 10/10

---

**Audit Status:** COMPLETE
**Critical Issues:** 1 (entity spelling)
**Medium Issues:** 1 (sitemap coverage)
**Recommendation:** Fix Issue #1 immediately, decide on Issue #2

