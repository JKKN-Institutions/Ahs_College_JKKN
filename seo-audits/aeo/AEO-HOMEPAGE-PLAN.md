# AEO Homepage Implementation Plan
**Institution:** JKKN College of Allied Health Sciences
**URL:** https://ahs.jkkn.ac.in/
**Date:** 2026-03-28
**Strategy:** Answer Engine Optimization (AEO)

---

## Executive Summary

| Item | Detail |
|------|--------|
| Target | Homepage only (https://ahs.jkkn.ac.in/) |
| Primary keyword | "Best Allied Health Sciences College in Tamil Nadu" |
| Current position | #3, zero featured snippets |
| Goal | Claim vacant snippet position + AI Overview citation |
| Total changes | 11 code changes across 7 files (1 new file) |
| Estimated impact | +840 words, 5 new FAQ items, 3 snippet-bait formats, ~10 new internal links |

---

## Implementation Tiers

### Tier 0 — Critical Path (~30 min)
All changes are independent. Can be executed in parallel.

| # | Change | File | Impact |
|---|--------|------|--------|
| 1 | Fix meta title (singular) + description + expand keywords to 10 | `src/app/layout.tsx` | Exact-match keyword in title |
| 2 | Eager-load FAQ section | `src/app/page.tsx` | FAQ visible to Googlebot |
| 3 | Add `faq-answer` CSS class | `src/components/sections/FAQ.tsx` | Speakable schema targets exist |
| 4 | Centralize `dateModified` + fix Review schema `@id` | `src/app/layout.tsx` + `src/app/page.tsx` | Schema validation |
| 5 | Fix Hero stats: `8+` → `9` | `src/components/sections/Hero.tsx` | Data accuracy |

### Tier 1 — High Impact (~90 min)
Depends on Tier 0 completion before starting.

| # | Change | File | Impact |
|---|--------|------|--------|
| 6 | Create SnippetBlock component | NEW: `src/components/sections/SnippetBlock.tsx` + `src/app/page.tsx` | +350 words, 3 snippet formats, 9 course links |
| 7 | Expand FAQ with 5 PAA questions | `src/components/sections/FAQ.tsx` + `src/app/page.tsx` faqSchema | 10 → 15 FAQs, PAA targeting |
| 8 | Add `voice-answer` class to Hero | `src/components/sections/Hero.tsx` | Speakable targeting |

### Tier 2 — Content Depth (~55 min)
Depends on Tier 1 completion before starting.

| # | Change | File | Impact |
|---|--------|------|--------|
| 9 | Expand WhyChoose descriptions | `src/components/sections/WhyChoose.tsx` | +140 words, geographic signals |
| 10 | Expand AboutSection content | `src/components/sections/AboutSection.tsx` | +100 words, 7 internal links |
| 11 | Enhance internal linking | `AboutSection`, `WhyChoose`, `CTASection` | ~10 new contextual links |

---

## Dependency Map

```
Tier 0 (all independent — parallel execution)
├── Change 1: Meta tags
├── Change 2: FAQ eager-load
├── Change 3: faq-answer class
├── Change 4: Schema fixes
└── Change 5: Hero stats

Tier 1 (depends on Tier 0 completion)
├── Change 6: SnippetBlock (depends on Change 3 CSS classes existing)
├── Change 7: FAQ expansion (depends on Change 2 eager-load + Change 3 class)
└── Change 8: voice-answer (independent within tier)

Tier 2 (depends on Tier 1 completion)
├── Change 9: WhyChoose (independent)
├── Change 10: AboutSection (independent)
└── Change 11: Internal links (depends on Changes 9-10 content existing)
```

---

## Files Modified Summary

| File | Action | Changes |
|------|--------|---------|
| `src/app/layout.tsx` | MODIFY | Meta title/desc, keywords, `dateModified`, schema fixes |
| `src/app/page.tsx` | MODIFY | FAQ eager-load, SnippetBlock import, 5 FAQ schema entries |
| `src/components/sections/FAQ.tsx` | MODIFY | `faq-answer` class + 5 new questions |
| `src/components/sections/Hero.tsx` | MODIFY | Stats fix (`8+` → `9`), `voice-answer` class |
| `src/components/sections/AboutSection.tsx` | MODIFY | +paragraph, +bullets, +links |
| `src/components/sections/WhyChoose.tsx` | MODIFY | 5 descriptions expanded |
| `src/components/sections/SnippetBlock.tsx` | CREATE | New server component (~80 lines) |
| `src/components/sections/CTASection.tsx` | MODIFY | Enhanced internal links in CTA text |

---

## Word Count Impact

| Section | Before | After | Delta |
|---------|--------|-------|-------|
| Hero | ~50 | ~50 | 0 |
| AboutSection | ~80 | ~180 | +100 |
| SnippetBlock (NEW) | 0 | ~350 | +350 |
| Programs | ~270 | ~270 | 0 |
| WhyChoose | ~100 | ~240 | +140 |
| FAQ (10 → 15) | ~500 | ~750 | +250 |
| Other sections | ~710 | ~710 | 0 |
| **TOTAL** | **~1,710** | **~2,550** | **+840** |

---

## Testing Checklist

1. `npm run build` — zero errors, zero warnings
2. View source on homepage — FAQ HTML present in initial DOM (not lazy-loaded)
3. CSS classes present: `.faq-answer`, `.snippet-answer`, `.voice-answer`
4. `<title>` = `"Best Allied Health Sciences College in Tamil Nadu | JKKN"`
5. Schema validation — each JSON-LD block individually valid
6. Rich Results Test — run Google's Rich Results Test on homepage URL
7. Responsive check — viewports: 320px, 375px, 768px, 1024px, 1280px
8. Internal links — click every new link, confirm no 404s
9. Lighthouse — SEO score >= 90
10. Content natural read — no keyword stuffing, human-readable flow
11. FAQ count sync — 15 items in FAQ component = 15 items in `faqSchema`

---

## Monitoring Plan (Post-Launch)

### Week 1–2
- Check Google Search Console for indexing of updated homepage
- Monitor "best allied health sciences college in tamil nadu" ranking position
- Check if FAQ rich results (accordion) appear in search results

### Week 3–4
- Check for featured snippet wins on primary keyword
- Monitor PAA (People Also Ask) appearances for new FAQ questions
- Check AI Overview citations for AHS-related queries

### Monthly
- Re-check word count and snippet format effectiveness
- Monitor competitor snippet activity on target keywords
- Update `dateModified` if any homepage content changes

---

## Re-Optimization Triggers

| Trigger | Action |
|---------|--------|
| No snippet win after 4 weeks | Restructure paragraph snippet — rewrite opening sentence as a direct definition |
| PAA questions change in SERP | Update FAQ questions to match new PAA panel |
| Competitor claims the snippet | Analyze their format (paragraph/list/table) and restructure ours |
| AI Overview cites a competitor | Strengthen entity signals — add more structured data and authoritative citations |

---

## Content Refresh Schedule

| Frequency | Action |
|-----------|--------|
| Monthly | Update `dateModified`, verify placement stats are current |
| Quarterly | Refresh FAQ answers with current academic year data |
| Annually | Full AEO re-audit — re-run keyword research, snippet analysis, PAA mapping |
