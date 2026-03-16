# AHS College JKKN — Project CLAUDE.md

## Project Overview
- **Institution:** JKKN College of Allied Health Sciences
- **URL:** https://ahs.jkkn.ac.in/
- **Framework:** Next.js 16.1.4 + React 19.2.3 + TypeScript 5.9.3
- **Backend:** Supabase (PostgreSQL + Auth + SSR)
- **Styling:** Tailwind CSS v4 (4.1.18) + Framer Motion 12.29.0
- **Architecture:** Multi-college codebase — environment-driven via `NEXT_PUBLIC_COLLEGE_ID`

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.4 |
| Language | TypeScript (strict) | 5.9.3 |
| UI | React | 19.2.3 |
| Styling | Tailwind CSS v4 | 4.1.18 |
| State | Zustand | 5.0.10 |
| Animation | Framer Motion | 12.29.0 |
| Database/Auth | Supabase SSR | 0.8.0 / supabase-js 2.98.0 |
| Rich Text | Tiptap | 3.20.0 |
| Icons | Lucide React | 0.562.0 |
| Carousel | Swiper | 12.1.0 |
| Notifications | React Hot Toast | 2.6.0 |
| Doc Processing | mammoth (DOCX) + docx | 1.11.0 / 9.6.0 |
| Utility | clsx + tailwind-merge | 2.1.1 / 3.4.0 |

## Architecture
- **App Router:** `src/app/` — pages, layouts, API routes
- **Section Components:** `src/components/sections/` — homepage sections
- **Layout Components:** `src/components/layout/` — Navbar, Footer, MobileHeader, LayoutWrapper
- **UI Atoms:** `src/components/ui/` — reusable UI primitives
- **Bottom Nav:** `src/components/BottomNav/` — mobile bottom navigation
- **Hooks:** `src/hooks/` — custom React hooks
- **Lib/Utilities:** `src/lib/` — helpers, config, Supabase clients
- **Supabase Clients:** `src/lib/supabase/` — server and browser clients

## Directory Structure (Key Paths)

### Root Layout & Config
- `src/app/layout.tsx` — Root layout (Schema.org JSON-LD, GTM, Poppins font)
- `src/app/globals.css` — Global styles, CSS variables, typography scale, utility classes
- `src/app/page.tsx` — Home page with lazy-loaded sections
- `src/lib/site-config.ts` — Environment-driven site configuration (multi-college)
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `src/lib/constants.ts` — App constants
- `src/lib/mobileNavLinks.ts` — Mobile navigation link definitions
- `src/lib/get-admin-college.ts` — Admin college context helper

### Layout Components
- `src/components/layout/Navbar.tsx` — Desktop navigation
- `src/components/layout/Footer.tsx` — Site footer
- `src/components/layout/MobileHeader.tsx` — Mobile header
- `src/components/layout/LayoutWrapper.tsx` — Wraps Navbar + Footer + BottomNav
- `src/components/BottomNav/` — Mobile bottom navigation component
- `src/components/ScrollToTop.tsx` — Scroll to top button
- `src/components/Header.tsx` — Header re-export
- `src/components/Footer.tsx` — Footer re-export

### Homepage Sections
- `src/components/sections/Hero.tsx` — Hero banner
- `src/components/sections/AboutSection.tsx` — About section
- `src/components/sections/Programs.tsx` — Programs/courses showcase
- `src/components/sections/Facilities.tsx` — Campus facilities
- `src/components/sections/WhyChoose.tsx` — Why choose JKKN
- `src/components/sections/CareerPaths.tsx` — Career outcomes
- `src/components/sections/AdmissionJourney.tsx` — Admission process
- `src/components/sections/Testimonials.tsx` — Student testimonials
- `src/components/sections/CTASection.tsx` — Call to action
- `src/components/sections/FAQ.tsx` — Frequently asked questions

### Hooks
- `src/hooks/use-mobile.tsx` — Mobile breakpoint detection (768px)
- `src/hooks/use-bottom-nav.ts` — Bottom nav Zustand store

### Supabase
- `src/lib/supabase/client.ts` — Browser Supabase client (`createBrowserClient()`)
- `src/lib/supabase/server.ts` — Server Supabase client (`createServerClient()` with cookies)

### Admin Panel
- `src/app/admin/login/page.tsx` — Admin login
- `src/app/admin/dashboard/page.tsx` — Admin dashboard
- `src/app/admin/blogs/page.tsx` — Blog management
- `src/app/admin/events/page.tsx` — Events management
- `src/app/admin/faculty/page.tsx` — Faculty management
- `src/app/admin/gallery/page.tsx` — Gallery management
- `src/app/admin/notices/page.tsx` — Notices management
- `src/app/admin/colleges/page.tsx` — Multi-college switcher

### API Routes
- `src/app/api/` — API routes (auth, college-switch, blog-template)

### Blog
- `src/app/blog/` — Public blog listing
- `src/app/blog/[slug]/` — Dynamic blog post pages
- `src/app/blog/campus/` — Campus blog category

### Department Pages (9 Courses)
- `src/app/cardiac-technology/`
- `src/app/dialysis-technology/`
- `src/app/radiology-imaging-technology/`
- `src/app/operation-theatre-anaesthesia/`
- `src/app/respiratory-therapy/`
- `src/app/physician-assistant/`
- `src/app/critical-care-technology/`
- `src/app/medical-record-science/`
- `src/app/accident-emergency-care/`

### Facility Pages
- `src/app/classroom/`, `src/app/library/`, `src/app/lab/`
- `src/app/hostel/`, `src/app/transport/`, `src/app/food-court/`
- `src/app/ambulance-service/`, `src/app/bank-post-office/`, `src/app/wifi/`

### Info Pages
- `src/app/vision-mission/`, `src/app/contact/`, `src/app/principals-message/`
- `src/app/our-management/`, `src/app/our-trust/`, `src/app/our-institutions/`
- `src/app/NAAC/`, `src/app/academic-calendar/`, `src/app/privacy-policy/`
- `src/app/gallery/`, `src/app/typography-demo/`

### Sitemaps
- `src/app/sitemap.xml/` — Main sitemap
- `src/app/sitemap-pages.xml/` — Pages sitemap
- `src/app/sitemap-blog.xml/` — Blog sitemap

## Brand Colors & Design

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#0b6d41` | Buttons, headings, accents, links |
| `--primary-dark` | `#085231` | Hover states, gradients, sidebar |
| `--secondary` | `#ffde59` | Secondary buttons, highlights |
| `--background` | `#fbfbee` | Page background (cream) |
| `--foreground` | `#1a1a1a` | Body text |
| `--white` | `#ffffff` | Cards, surfaces |

- **Font:** Poppins (weights: 300, 400, 500, 600, 700) via `next/font/google`
- **Mobile breakpoint:** 768px (`md:` in Tailwind)
- **Typography scale:** Defined in `globals.css` `@layer base` — h1 (32-44px), h2 (20-28px), h3 (18-22px), p (15-16px), small (13-14px)

### Utility Classes (globals.css)
- `.bg-cream`, `.bg-primary`, `.bg-secondary`, `.text-primary`, `.text-secondary`, `.border-primary`
- `.btn-primary`, `.btn-secondary` — Button styles with hover/active states
- `.glass-card`, `.glass-morphism` — Glassmorphism effects
- `.bg-premium-gradient` — Premium background gradient
- `.text-gradient` — Gradient text (primary to primary-dark)

## Environment Variables

Required in `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `NEXT_PUBLIC_COLLEGE_ID` | Active college identifier (e.g., "ahs") |
| `NEXT_PUBLIC_COLLEGE_NAME` | Full institution name |
| `NEXT_PUBLIC_COLLEGE_SHORT_NAME` | Short display name |
| `NEXT_PUBLIC_COLLEGE_TAGLINE` | Hero tagline |
| `NEXT_PUBLIC_PRIMARY_COLOR` | Brand primary color hex |
| `NEXT_PUBLIC_PRIMARY_DARK` | Dark shade hex |
| `NEXT_PUBLIC_PRIMARY_MID` | Mid shade hex |
| `NEXT_PUBLIC_PRIMARY_HOVER` | Hover shade hex |
| `NEXT_PUBLIC_COLLEGE_PHONE` | Contact phone |
| `NEXT_PUBLIC_COLLEGE_EMAIL` | Contact email |
| `NEXT_PUBLIC_COLLEGE_ADDRESS` | Full postal address |
| `NEXT_PUBLIC_MAPS_EMBED_URL` | Google Maps embed URL |
| `NEXT_PUBLIC_ADMISSION_FORM_URL` | Admission form link |
| `NEXT_PUBLIC_SITE_DOMAIN` | Canonical domain |
| `NEXT_PUBLIC_LOGO_PATH` | Logo path relative to /public |

## Coding Conventions

1. **Path alias:** `@/*` maps to `src/*` — use absolute imports only, no relative imports
2. **Component files:** PascalCase (`Hero.tsx`, `Navbar.tsx`, `AboutSection.tsx`)
3. **Utility files:** lowercase (`utils.ts`, `constants.ts`, `site-config.ts`)
4. **Props interfaces:** `{ComponentName}Props` naming pattern
5. **Client components:** Add `"use client"` directive for components using Framer Motion, hooks, or browser APIs
6. **Server components:** Default — no directive needed
7. **Dynamic imports:** Use `dynamic(() => import(...))` for below-fold sections
8. **Class merging:** Use `cn()` from `@/lib/utils` (clsx + tailwind-merge)
9. **No CSS-in-JS:** Tailwind utility classes only; custom styles in `globals.css`
10. **Strict TypeScript:** No `any` types; use proper interfaces and type annotations

## Supabase Patterns

- **Server client:** `createServerClient()` with cookie store — `src/lib/supabase/server.ts`
- **Browser client:** `createBrowserClient()` — `src/lib/supabase/client.ts`
- **Admin auth:** Supabase SSR cookies for session management
- **Multi-college:** `NEXT_PUBLIC_COLLEGE_ID` filters data per institution
- **Admin college switch:** `AdminCollegeContext` for admin panel institution switching

## SEO & Schema

- **Schema.org in `layout.tsx`:** BreadcrumbList, WebSite, CollegeOrUniversity (with departments, credentials, sameAs)
- **Google Tag Manager:** `GTM-W5JJJVHB`
- **Sitemaps:** `/sitemap.xml`, `/sitemap-pages.xml`, `/sitemap-blog.xml`
- **Canonical URLs:** Dynamic per page via `x-pathname` header
- **Favicon:** `/ahs-logo.svg`

## Multi-College Architecture

- **Pattern:** Single Repository, Multiple Deployments (SRMD)
- **Driver:** `NEXT_PUBLIC_COLLEGE_ID` in `.env.local` determines active college
- **Config:** `src/lib/site-config.ts` — all college-specific values from env vars with fallbacks
- **Admin:** `AdminCollegeContext` for admin panel college switching
- **Deploy:** Same codebase, different `.env.local` per deployment

## Bug Fix Rules (MANDATORY)

1. **Surgical fixes only** — Change the minimum lines needed. No refactoring, no "improvements", no cleanup
2. **No shared class/component modifications** — If a CSS class or component is used in 3+ places, NEVER modify it directly. Create a new variant or override
3. **Before editing any file, grep for all usages** — Run `Grep` to check where the component/class/function is used BEFORE changing it. Understand blast radius first
4. **No layout changes during bug fixes** — padding, margin, flex, grid changes are HIGH RISK. After any layout edit, verify all breakpoints: mobile (320px), tablet (768px), desktop (1024px+)
5. **One fix = one commit** — Never bundle multiple fixes in a single commit
6. **Test adjacent pages** — After fixing page X, check pages Y and Z that share the same component or layout
7. **No global file edits during fixes** — `globals.css`, `tailwind.config.ts`, `layout.tsx` changes are FORBIDDEN during bug fixes unless the bug is specifically in those files
8. **Show impact before editing** — Before making any change, list: (a) files to be modified, (b) components affected, (c) pages that use those components
9. **Preserve responsive behavior** — Never remove or modify responsive classes (`sm:`, `md:`, `lg:`, `xl:`) without checking all breakpoints
10. **No dependency changes during fixes** — Do not add, remove, or update packages while fixing a bug

### High-Risk Danger Zones

| Risk Area | Why Dangerous | Rule |
|-----------|--------------|------|
| Shared components (Navbar, Footer, LayoutWrapper) | Used on EVERY page | Grep all usages first, test all pages after |
| `globals.css` | Affects entire site | Never edit during bug fix |
| `layout.tsx` files | Affects all child routes | Full child page verification required |
| Responsive classes (`sm:`, `md:`, `lg:`, `xl:`) | Breaking one breakpoint breaks mobile/tablet | Check 320px, 640px, 768px, 1024px, 1280px |
| Framer Motion animations | Complex state interactions | Test enter/exit/hover states after changes |
| z-index changes | Can hide/overlap other elements | Check all overlapping sections |
| BottomNav / MobileHeader | Mobile-only, easy to miss in desktop testing | Always test on mobile viewport after changes |
| Supabase queries | Data layer — wrong filter = wrong data shown | Verify with Supabase dashboard after changes |

## Development Commands

```bash
npm run dev     # Development server (Turbopack)
npm run build   # Production build
npm start       # Production server
npm run lint    # ESLint check
```

## Testing
- No automated tests configured
- Manual testing via browser (desktop + mobile viewports)
- Admin panel testing requires Supabase auth session

## Analytics
- **GA4 + Google Tag Manager:** `GTM-W5JJJVHB`
- **Google Search Console:** Integrated
- **Canonical domain:** `https://ahs.jkkn.ac.in`
