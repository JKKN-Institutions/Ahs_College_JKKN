# Project: Update OG Images in Department & Facility Layout Files

## Status
- **Last Updated:** 2026-03-19T12:00:00Z
- **Session ID:** 2026-03-19-session-1
- **Session Goal:** Add ogImage parameters to 14 layout.tsx files (6 departments + 8 facilities)
- **Overall Progress:** 0% (starting)
- **Next Immediate Step:** Update cardiac-technology layout.tsx line 3-20
- **Compact Count:** 0

## Files to Update
| # | File Path | Target | Status |
|---|-----------|--------|--------|
| 1 | `src/app/cardiac-technology/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 2 | `src/app/dialysis-technology/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 3 | `src/app/radiology-imaging-technology/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 4 | `src/app/critical-care-technology/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 5 | `src/app/medical-record-science/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 6 | `src/app/accident-emergency-care/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 7 | `src/app/respiratory-therapy/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 8 | `src/app/classroom/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 9 | `src/app/library/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 10 | `src/app/hostel/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 11 | `src/app/transport/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 12 | `src/app/lab/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 13 | `src/app/ambulance-service/layout.tsx` | Add ogImage to createPageMetadata | Pending |
| 14 | `src/app/wifi/layout.tsx` | Add ogImage to createPageMetadata | Pending |

## Skipped Files
- `src/app/operation-theatre-anaesthesia/layout.tsx` — No specific hero image
- `src/app/physician-assistant/layout.tsx` — No specific hero image
- `src/app/food-court/layout.tsx` — Image path has spaces, URL issues
- `src/app/bank-post-office/layout.tsx` — No specific image

## Completed
- [ ] PROGRESS.md created

## Remaining (Priority Order)
1. Update 7 department layout files with department-specific OG images
2. Update 7 facility layout files with facility-specific OG images
3. Verify all changes compile without errors
4. Commit changes to git

## Architecture & Design
- **Pattern:** Each layout.tsx file calls `createPageMetadata()` with title, description, path, keywords
- **Update:** Add `ogImage` parameter with url, width, height, alt properties
- **Image Dimensions:** All OG images are 1200x630px (standard Open Graph size)
- **Alteration Scope:** Minimal — only add the ogImage parameter, no other changes

## Important Code Pattern
```typescript
export const metadata = createPageMetadata({
  title: "...",
  description: "...",
  path: "/...",
  keywords: [...],
  ogImage: { url: "https://ahs.jkkn.ac.in/...", width: 1200, height: 630, alt: "..." },
});
```
