---
name: page-alignment
description: Systematically fixes spacing, alignment, and responsiveness issues on any page. Trigger this skill whenever the user says "fix alignment", "fix spacing", "page looks off", "elements not aligned", "fix the layout", "there's too much space", "left/right not balanced", "move content to the other side", or mentions that a page looks broken or unequal visually. Works on Next.js + Tailwind CSS v4 pages. Covers: removing extra empty spaces, balancing two-column sections, moving content between columns for visual balance, aligning elements, and ensuring all breakpoints (mobile/tablet/desktop) look correct. NEVER modifies text content — only layout structure and spacing.
---

# Page Alignment Skill

Fix spacing, alignment, and responsiveness issues on a Next.js + Tailwind CSS v4 page. The golden rule: **touch only layout and spacing classes — never text content**.

This project uses Tailwind CSS v4. Breakpoints to verify: `320px` (mobile), `768px` (tablet), `1024px` (desktop), `1280px` (wide).

---

## Step 1 — Read the file

Read the full page/component file the user mentioned. If it's a page (`src/app/[page]/page.tsx`), also read any section components it imports from `src/components/sections/`.

Identify the structure: how many sections, which use two-column layouts, which are full-width.

---

## Step 2 — Run the checklist

Work through each category below. Note every issue found before making any changes.

### A. Extra / empty space
- Look for `div` or `section` wrappers with padding or margin but no meaningful content inside them — these create phantom gaps
- Check for double-stacked padding: a section with `py-16` wrapping another element that also has `pt-16` — they compound
- Look for unused spacer divs (`<div className="h-8" />` or similar) that no longer serve a purpose
- Check for `mb-` or `mt-` on the last/first child inside a padded container (double-counts the space)

### B. Section spacing consistency
- All major sections on a page should share a consistent vertical rhythm. In this project the standard is `py-16 md:py-24`
- If one section uses `py-8` while its neighbors use `py-20`, it will feel cramped — align them
- The first section after the hero typically needs no extra top padding since the hero already provides spacing

### C. Two-column / left-right balance
- For `grid grid-cols-1 md:grid-cols-2` or `flex` layouts with two children:
  - Both columns should have the same vertical alignment anchor — use `items-center` if they're roughly equal in height, `items-start` if one is much taller
  - Check that gap between columns is consistent (`gap-8` or `gap-12`) — not one side having extra padding that throws off the visual center
  - If one column has an image and the other has text, the image container should match the text block's height using `h-full` or `aspect-ratio` classes, not a fixed `h-[300px]` that may overflow or leave gaps on different screens
- On mobile (`grid-cols-1`), the stacked order should feel natural — image above text is usually correct

### D. Element alignment within sections
- Headings and body text within a section should share the same horizontal alignment — don't mix `text-left` on the heading with `text-center` on the paragraph
- Icon + text rows should use `flex items-center gap-3` so the icon and text sit on the same baseline
- Card grids: all cards in a row should be the same height — use `h-full` on the card wrapper inside a `grid` so they stretch equally

### E. Container and width consistency
- Every section's inner content should be wrapped in a max-width container. This project's standard: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- If a section is full-bleed (background color/image goes edge to edge), the background is on the outer element and the `max-w-7xl` container is the inner wrapper
- Check that no section accidentally uses `w-full` without `mx-auto` — this pins content to the left edge

### G. Column content rebalancing

When one column carries significantly more content than the other, the page feels lopsided even if spacing classes are correct. This requires moving JSX elements between columns — not just adjusting classes.

**How to detect the imbalance:**
- One column has: heading + multiple paragraphs + a list/grid of items
- The other column has: only an image or a single visual element
- Visually, the light column looks "empty" relative to the heavy one

**What to move:** Self-contained portable blocks are safe to relocate:
- Bullet point lists / feature lists (`grid` or `flex` of icon+text rows)
- Stat grids (2×2 or 3×1 number cards)
- Tag clouds or badge rows
- Do NOT move: headings, paragraphs, or any content that forms a narrative flow

**How to move it (the pattern used in this project):**
1. Remove the portable block from the heavy column
2. In the light column, wrap the existing visual (image + any absolute-positioned badge) in its own `relative` container with `mb-10 sm:mb-12` to create space below for any overhanging decorative elements
3. Place the moved block after this wrapper with `mt-4 sm:mt-6` for breathing room
4. Change the outer column div from `relative` to plain (no positioning needed) since the badge is now scoped to its inner wrapper

**Confirm before acting:** Always confirm with the user which specific items to move before restructuring. Show the plan ("move the 5 bullet points to the right column, below the image") and wait for approval.

**Mobile behavior:** When columns stack on mobile (`flex-col`), the moved items will appear below the image naturally — which is the correct reading order.

### F. Responsive check (each breakpoint)
- **320px (mobile)**: No horizontal overflow. Text doesn't run off screen. Images fit inside their containers (`w-full h-auto`). Buttons stack vertically if side by side on desktop.
- **768px (tablet)**: Two-column layouts should be switching correctly at `md:`. Check that `grid-cols-1 md:grid-cols-2` is present, not just `grid-cols-2`.
- **1024px+ (desktop)**: Padding and gaps feel spacious but not excessive. Hero sections don't have too much bottom whitespace.
- Look for missing responsive prefixes — a class like `gap-16` with no mobile variant will create huge gaps on small screens.

---

## Step 3 — Apply fixes (design only)

Make changes now, following these constraints:

**Never touch:**
- Any text string, heading content, paragraph content, button labels, alt text, or aria labels
- Component logic, props, imports, or non-className code
- Color classes (brand colors are intentional)
- Animation classes (Framer Motion variants)

**Safe to change:**
- `p-`, `px-`, `py-`, `pt-`, `pb-`, `pl-`, `pr-` (padding)
- `m-`, `mx-`, `my-`, `mt-`, `mb-`, `ml-`, `mr-` (margin)
- `gap-`, `space-x-`, `space-y-` (spacing between elements)
- `flex`, `grid`, `grid-cols-`, `items-`, `justify-`, `place-` (layout)
- `w-`, `h-`, `max-w-`, `min-h-` (sizing)
- `text-left`, `text-center`, `text-right` (text alignment — not content)
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

If removing a wrapper div would fix the spacing, only do it if the div has no semantic role (no `id`, no accessibility attributes, no event handlers).

**Structural moves (Check G):** Moving self-contained JSX blocks (bullet lists, stat grids) between columns is allowed. When doing so:
- Add a new `relative` wrapper around image + badge with `mb-10 sm:mb-12` so the badge clears the following content
- Add `mt-4 sm:mt-6` on the moved block for breathing room
- Remove `relative` from the outer column div if it was only there to scope the badge

---

## Step 4 — Report what changed

After making changes, give a short summary:

```
Fixed on [page name]:
- [Section name]: removed double padding (py-16 inside py-20 wrapper)
- [Section name]: corrected two-column gap from gap-4 to gap-8 for visual balance
- [Section name]: added items-center to flex row for icon alignment
- Responsive: added md: prefix to grid-cols-2 so mobile stacks correctly
```

No text content was modified.
