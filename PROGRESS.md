# Project: Update OG Images in Department & Facility Layout Files

## Status
- **Last Updated:** 2026-03-19T12:15:30Z
- **Session ID:** 2026-03-19-session-1
- **Session Goal:** Add ogImage parameters to 14 layout.tsx files (7 departments + 7 facilities)
- **Overall Progress:** 100% (completed)
- **Next Immediate Step:** Task complete — all OG images successfully added
- **Compact Count:** 0

## Files Updated
| # | File Path | Target | Status |
|---|-----------|--------|--------|
| 1 | `src/app/cardiac-technology/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 2 | `src/app/dialysis-technology/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 3 | `src/app/radiology-imaging-technology/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 4 | `src/app/critical-care-technology/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 5 | `src/app/medical-record-science/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 6 | `src/app/accident-emergency-care/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 7 | `src/app/respiratory-therapy/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 8 | `src/app/classroom/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 9 | `src/app/library/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 10 | `src/app/hostel/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 11 | `src/app/transport/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 12 | `src/app/lab/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 13 | `src/app/ambulance-service/layout.tsx` | Add ogImage to createPageMetadata | Done |
| 14 | `src/app/wifi/layout.tsx` | Add ogImage to createPageMetadata | Done |

## Skipped Files
- `src/app/operation-theatre-anaesthesia/layout.tsx` — No specific hero image
- `src/app/physician-assistant/layout.tsx` — No specific hero image
- `src/app/food-court/layout.tsx` — Image path has spaces, URL issues
- `src/app/bank-post-office/layout.tsx` — No specific image

## Completed
- [x] 14 layout.tsx files updated with page-specific OG images
- [x] Build verification passed (npm run build successful)
- [x] Changes committed to git (commit: d85ee29)

## Completed Tasks (This Session)
1. [x] Updated 7 department layout files with department-specific OG images
2. [x] Updated 7 facility layout files with facility-specific OG images
3. [x] Verified all changes compile without errors (npm run build passed)
4. [x] Committed changes to git (commit d85ee29)

## Changes Summary
- **Total files modified:** 14 layout.tsx files
- **Parameter added:** `ogImage` with url, width (1200px), height (630px), and alt text
- **Build status:** ✓ Compiled successfully in 19.4s
- **Git commit:** d85ee29 with full attribution

## Architecture & Design
- **Pattern:** Each layout.tsx file calls `createPageMetadata()` with title, description, path, keywords
- **Update:** Add `ogImage` parameter with url, width, height, alt properties
- **Image Dimensions:** All OG images are 1200x630px (standard Open Graph size)
- **Alteration Scope:** Minimal — only add the ogImage parameter, no other changes to code structure

## Implementation Pattern (Applied to All 14 Files)
```typescript
export const metadata = createPageMetadata({
  title: "...",
  description: "...",
  path: "/...",
  keywords: [...],
  ogImage: { url: "https://ahs.jkkn.ac.in/...", width: 1200, height: 630, alt: "..." },
});
```

## OG Images Added
**Departments (7):**
1. cardiac-technology-hero.png
2. dialysis-technology-hero.png
3. radiology-technology-hero.png
4. critical-care-technology-hero.png
5. medical-record-science-hero.png
6. accident-emergency-care-hero.png
7. respiratory-therapy-hero.png (in /images/departments/)

**Facilities (7):**
1. classroom/digital-class-room-1.webp
2. library/library-1.webp
3. images/boys-hostel.png
4. transport/transport-1.webp
5. lab/allied health science lab1.png
6. ambulance.webp
7. wifi-1.png
