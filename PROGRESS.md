# Project: AHS College JKKN — Schema Migration

## Status
- **Last Updated:** 2026-03-18 14:30 UTC
- **Session ID:** 2026-03-18-session-1
- **Previous Session:** First session
- **Session Goal:** Add BreadcrumbList + Place JSON-LD schema to all layout.tsx files with zero schema
- **Overall Progress:** 100% complete
- **Next Immediate Step:** Verify schema implementation in Google Rich Results test and monitor SERP appearance

## Files
| File Path | Purpose | Status |
|-----------|---------|--------|
| `src/app/vision-mission/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/principals-message/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/our-trust/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/our-institutions/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/departments/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/NAAC/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/academic-calendar/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/gallery/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/privacy-policy/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/blog/layout.tsx` | Info page with BreadcrumbList | Modified |
| `src/app/hostel/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `src/app/library/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `src/app/lab/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `src/app/classroom/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `src/app/transport/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `src/app/food-court/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `src/app/ambulance-service/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `src/app/bank-post-office/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `src/app/wifi/layout.tsx` | Facility page with BreadcrumbList + Place | Modified |
| `SCHEMA_MIGRATION_SUMMARY.md` | Migration documentation | Created |

## Completed
- [x] Read all 19 layout.tsx files to understand current state
- [x] Added BreadcrumbList schema to 10 info/institutional pages
- [x] Added BreadcrumbList + Place schema to 9 facility pages
- [x] Updated all JSX return statements to include script tags
- [x] Preserved existing metadata exports and createPageMetadata() calls
- [x] Verified all files have proper schema constants and script tags
- [x] Created comprehensive migration summary document
- [x] Committed changes to git

## Remaining (Priority Order)
1. Test schema in Google Rich Results Test (https://search.google.com/test/rich-results)
2. Monitor Google Search Console for breadcrumb rich snippet impressions
3. Apply same pattern to other college institutions (Dental, Pharmacy, Nursing, Engineering, Arts & Science, Education)
4. Consider adding FAQ schema to academic-calendar page
5. Consider adding Event schema for college events
6. Set up baseline metrics for SERP CTR improvement tracking

## Architecture & Design

### Pattern Applied
- **Single responsibility:** Each layout.tsx file adds schema for its page + hierarchy context
- **Non-invasive:** Schema constants added before export, return JSX modified minimally
- **Reusable:** BreadcrumbList template consistent across all 19 files
- **Facility-aware:** Place schema includes PostalAddress + containedInPlace for facility pages

### Schema Components
1. **BreadcrumbList (All 19 files)**
   - 3-level hierarchy: JKKN Institutions → Allied Health Sciences → Page Name
   - Helps Google understand site structure
   - Enables breadcrumb rich snippets in SERPs

2. **Place Schema (9 facility pages)**
   - Type: Place (for facilities within the institution)
   - Contains: PostalAddress (full campus address)
   - References: CollegeOrUniversity parent entity
   - Improves local SEO + knowledge graph integration

### Data Flow
- Metadata description (from `createPageMetadata()`) → Facility schema description
- Page path (from metadata config) → Breadcrumb URL and Place URL
- Fixed address (Komarapalayam campus) → All facility schemas

## Decisions Log
| # | Decision | Why | Alternatives Rejected |
|---|----------|-----|----------------------|
| 1 | Use 3-level breadcrumb (JKKN → AHS → Page) | Reflects site hierarchy; helps Google understand context | 2-level (just AHS → Page) would lose institutional context |
| 2 | Add Place schema only to facility pages | Facilities are physical locations; info pages are not | Add Place to all pages (semantically incorrect) |
| 3 | Use fixed Komarapalayam address for all facilities | All AHS facilities share same campus address | Query environment variables (unnecessary complexity) |
| 4 | Preserve existing JSX structure | No breaking changes; purely additive | Refactor layout wrapper (risky, out of scope) |
| 5 | JSON.stringify() with dangerouslySetInnerHTML | React standard for injecting JSON-LD | Alternative: String template (error-prone) |

## Errors & Solutions
| # | Error | Root Cause | Fix Applied |
|---|-------|-----------|-------------|
| None | N/A | N/A | N/A |

**Summary:** No errors encountered. All 19 files edited successfully on first attempt.

## Failed Approaches (Don't Repeat)
- None (straightforward task, no iterations needed)

## Environment & Config
- **Framework:** Next.js 16.1.4 with React 19.2.3
- **Schema Validator:** Google Rich Results Test
- **Git Status:** All 19 files staged and committed
- **Codebase:** Multi-college AHS instance (NEXT_PUBLIC_COLLEGE_ID = "ahs")

## Important Code Snippets

### BreadcrumbList Schema (Template)
```javascript
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "PAGE_NAME", "item": "https://ahs.jkkn.ac.in/PAGE_PATH" }
  ]
};
```

### Place Schema (Facility Template)
```javascript
const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "FACILITY_NAME — JKKN College of Allied Health Sciences",
  "description": "META_DESCRIPTION",
  "url": "https://ahs.jkkn.ac.in/PAGE_PATH",
  "containedInPlace": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NH-544, Natarajapuram",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  }
};
```

### JSX Return Pattern
```jsx
return (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    {/* Optional: facilitySchema script tag for facility pages */}
    {children}
  </>
);
```

---

## Summary

**Task:** Add BreadcrumbList + Place JSON-LD schema to 19 layout.tsx files
**Result:** All 19 files successfully updated with proper schema implementation
**Impact:** Improves SEO (breadcrumb snippets), AEO (Place schema recognition), and entity knowledge graph integration
**Next:** Verify in Google Rich Results Test and monitor SERP breadcrumb appearances
