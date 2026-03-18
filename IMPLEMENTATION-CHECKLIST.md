# AHS Schema Audit — Implementation Checklist
**Start Date:** March 18, 2026 | **Target Completion:** April 1, 2026 (Phase 1)

---

## PHASE 1: CRITICAL FIXES (16 hours, 2 weeks)

### Task 1.1: Add Meta Robots Directives (All 15 pages)
**File:** `src/app/layout.tsx` (root layout applies to all)
**Time:** 1 hour
**Status:** ⏳ Not Started

Add to the root layout `<Head>` or meta array:
```tsx
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
```

**Pages Affected:**
- [x] Homepage
- [x] All 9 course pages (inherit from layout)
- [x] Blog listing
- [x] Contact
- [x] NAAC
- [x] Vision Mission
- [x] Gallery

**Verification:**
- [ ] Check each page source (`Ctrl+U`) for meta robots tag
- [ ] Validate with Google Schema Tester

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 1.2: Rewrite Answer Paragraphs (≤50 words)
**Pages:** 15 (all pages)
**Time:** 4 hours
**Status:** ⏳ Not Started

For each H2 heading, create a concise 1–2 sentence answer paragraph immediately after, then expand.

**Format Template:**
```markdown
## H2: {Question}

{CONCISE ANSWER — ≤50 words. Max 1–2 sentences directly answering the question.}

{EXPANDED SECTION — Details, curriculum, examples, etc.}
```

**Page Breakdown:**

#### Course Program Pages (9)
- [x] Cardiac Technology
  - H2: "What is B.Sc Cardiac Technology?" → Need: 40-word answer
  - H2: "Career Opportunities" → Need: 40-word summary

- [x] Dialysis Technology
  - H2: "What is B.Sc Dialysis Technology?" → Need: 40-word answer
  - H2: "Career Opportunities" → Need: 40-word summary

- [x] Radiology Imaging Technology
  - H2: "What is B.Sc Radiography Imaging Technology?" → Need: 40-word answer

- [x] Operation Theatre Anaesthesia
  - H2: "What is B.Sc Operation Theatre & Anaesthesia Technology?" → Need: 40-word answer

- [x] Respiratory Therapy
  - H2: "What is B.Sc Respiratory Therapy?" → Need: 40-word answer

- [x] Physician Assistant
  - H2: "What is B.Sc Physician Assistant?" → Need: 40-word answer

- [x] Critical Care Technology
  - H2: "What is B.Sc Critical Care Technology?" → Need: 40-word answer

- [x] Medical Record Science
  - H2: "What is B.Sc Medical Record Science?" → Need: 40-word answer

- [x] Accident Emergency Care
  - H2: "What is B.Sc Accident & Emergency Care Technology?" → Need: 40-word answer

#### Info Pages (6)
- [x] Homepage
  - H2: "Allied Health Sciences Programs" → Need: 40-word intro

- [x] Blog
  - H2: "Latest Articles" → Descriptive intro

- [x] Contact
  - H2: "Get In Touch" → Contact info brief

- [x] NAAC
  - H2: "Introduction" → Rewrite: ~50 words max (currently 100+)

- [x] Vision Mission
  - H2: "Our Mission" → Rewrite: ~50 words max (currently 100+)

- [x] Gallery
  - Add intro paragraph: "A glimpse into..." (50 words)

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 1.3: Add Speakable Schema (13 pages)
**Excluded:** Blog listing (no Speakable needed until individual posts get schema)
**Time:** 3 hours
**Status:** ⏳ Not Started

Add JSON-LD Speakable schema to key Q&As. Include in each page's root layout or component.

**Schema Template:**
```json
{
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B.Sc Cardiac Technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Cardiac Technology trains professionals to operate and troubleshoot cardiac monitoring equipment in hospitals. Duration: 4 years; intake: 7 seats.",
        "speakableText": "B.Sc Cardiac Technology trains professionals to operate cardiac monitoring equipment in hospitals for 4 years."
      }
    }
  ]
}
```

**Pages to Add (5 Q&As each):**
- [x] Homepage (3 Q&As)
- [x] Cardiac Technology (5 Q&As from FAQ)
- [x] Dialysis Technology (5 Q&As from FAQ)
- [x] Radiology Imaging Technology (5 Q&As from FAQ)
- [x] Operation Theatre Anaesthesia (5 Q&As from FAQ)
- [x] Respiratory Therapy (5 Q&As from FAQ)
- [x] Physician Assistant (5 Q&As from FAQ)
- [x] Critical Care Technology (5 Q&As from FAQ)
- [x] Medical Record Science (5 Q&As from FAQ)
- [x] Accident Emergency Care (5 Q&As from FAQ)
- [x] Contact (2–3 Q&As: "How do I contact AHS?" "What are office hours?")
- [x] NAAC (3–5 Q&As: "What is NAAC?" "What is A+ accreditation?")
- [x] Vision Mission (2 Q&As: "What is our vision?" "What is our mission?")

**Verification:**
- [ ] Test each page with Google Rich Results Test
- [ ] Verify `speakableText` is included in JSON
- [ ] Check for syntax errors in GSC

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 1.4: Add Article Schema (4 pages)
**Pages:** Blog listing, NAAC, Vision Mission + Homepage (optional)
**Time:** 2 hours
**Status:** ⏳ Not Started

Add Article/NewsArticle schema to informational pages.

**Schema Template:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "NAAC Accreditation at JKKN College of Allied Health Sciences",
  "description": "Learn about our A+ NAAC accreditation and quality assurance standards.",
  "image": "https://ahs.jkkn.ac.in/og-image.jpg",
  "datePublished": "2024-01-15T08:00:00Z",
  "dateModified": "2026-03-18T10:30:00Z",
  "author": {
    "@type": "Organization",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "JKKN College of Allied Health Sciences",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ahs.jkkn.ac.in/logo.svg"
    }
  }
}
```

**Pages:**
- [x] NAAC (`/NAAC`)
- [x] Vision Mission (`/vision-mission`)
- [x] Blog Listing (`/blog`) — Use CollectionPage instead
- [x] Contact (`/contact`) — Optional; LocalBusiness sufficient

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 1.5: Add ContactPoint & LocalBusiness Schema
**Pages:** Contact, Homepage (optional)
**Time:** 2 hours
**Status:** ⏳ Not Started

Add structured contact information to CollegeOrUniversity schema.

**Schema Addition (to existing org schema):**
```json
{
  "@type": "CollegeOrUniversity",
  "name": "JKKN College of Allied Health Sciences",
  "telephone": "+91-9345855001",
  "email": "info@ahs.jkkn.ac.in",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "Admissions",
      "telephone": "+91-9345855001",
      "email": "admissions@ahs.jkkn.ac.in",
      "areaServed": ["IN", "NR", "SG"],
      "availableLanguage": ["en", "ta"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "Campus Tour",
      "telephone": "+91-9345855001"
    }
  ]
}
```

**Verification:**
- [ ] Phone/email appear in GSC structured data
- [ ] Contact info extracted in LLM responses

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 1.6: Add ImageObject Schema (Gallery page)
**Pages:** Gallery
**Time:** 1 hour
**Status:** ⏳ Not Started

Add structured metadata to gallery images.

**Schema Template (per image):**
```json
{
  "@type": "ImageObject",
  "name": "JKKN AHS Laboratory - Cardiac Monitoring Equipment",
  "description": "State-of-the-art cardiac monitoring lab with 12 workstations and patient simulation units.",
  "url": "https://ahs.jkkn.ac.in/images/lab-cardiac-1.jpg",
  "uploadDate": "2024-08-15T10:00:00Z",
  "caption": "Students practicing on cardiac monitors in the simulation lab.",
  "author": {
    "@type": "Organization",
    "name": "JKKN College of Allied Health Sciences"
  }
}
```

**Implementation:**
- [ ] Add ImageObject for each gallery image (5–10 images minimum)
- [ ] Include alt text in <img> tags
- [ ] Add captions below images

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

## PHASE 2: HIGH-PRIORITY ENHANCEMENTS (8 hours, weeks 3–4)

### Task 2.1: Expand NAAC Page Content
**File:** `src/app/NAAC/page.tsx`
**Time:** 3 hours
**Status:** ⏳ Not Started

Current: 1 H2, 520 words
Target: 5–7 H2s, 1,200+ words with FAQ

**New Sections to Add:**
- [x] NAAC Overview (what is NAAC, established when, mandate)
- [x] Our A+ Grade (score, timeline, assessment process)
- [x] Accreditation Categories (teaching, research, infrastructure)
- [x] Key Achievements (highlight specific scores)
- [x] Assessment Timeline (when was evaluation, next review date)
- [x] FAQ Section (5–8 Q&As about accreditation)

**Content Example:**
```markdown
## Our A+ Grade Explained

JKKN College of Allied Health Sciences achieved NAAC A+ accreditation (3.58/4.0 CGPA)
in [YEAR], recognizing excellence in academics, infrastructure, and research.
This grade places us among the top 25% of educational institutions in India.

[Expand with: what A+ means, comparison to other grades, impact on placements, etc.]

## Frequently Asked Questions

Q: How does NAAC A+ accreditation benefit students?
A: [40-word answer]

Q: What is the next NAAC assessment cycle?
A: [40-word answer]

[... 6 more Q&As ...]
```

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 2.2: Add BlogPosting Schema to Blog Posts
**Files:** Individual blog post components
**Time:** 3 hours
**Status:** ⏳ Not Started

Add BlogPosting/NewsArticle schema to each blog post.

**Schema Template:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Career Opportunities in Cardiac Technology",
  "image": "https://ahs.jkkn.ac.in/blog/cardiac-careers.jpg",
  "datePublished": "2024-02-10T09:00:00Z",
  "dateModified": "2026-03-18T10:00:00Z",
  "author": {
    "@type": "Person",
    "name": "Dr. Ramesh Kumar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "JKKN College of Allied Health Sciences"
  },
  "articleBody": "[Full article text...]"
}
```

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 2.3: Add CollectionPage Schema to Blog Listing
**File:** `src/app/blog/page.tsx`
**Time:** 1 hour
**Status:** ⏳ Not Started

Add CollectionPage schema to blog listing.

**Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "JKKN College of Allied Health Sciences Blog",
  "description": "Insights on allied health programs, career guidance, and campus life.",
  "url": "https://ahs.jkkn.ac.in/blog",
  "hasPart": [
    {
      "@type": "BlogPosting",
      "headline": "Career Opportunities in Cardiac Technology",
      "url": "https://ahs.jkkn.ac.in/blog/cardiac-careers",
      "datePublished": "2024-02-10T09:00:00Z"
    }
    // ... more posts
  ]
}
```

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 2.4: Add Video Schema (if applicable)
**Pages:** Homepage, course pages (if video content added)
**Time:** 1 hour
**Status:** ⏳ Not Started

If videos exist, add VideoObject schema.

**Schema Template:**
```json
{
  "@type": "VideoObject",
  "name": "Tour of JKKN College of Allied Health Sciences",
  "description": "Walk through our state-of-the-art facilities and classrooms.",
  "thumbnailUrl": "https://ahs.jkkn.ac.in/videos/tour-thumb.jpg",
  "uploadDate": "2024-06-15T10:00:00Z",
  "duration": "PT5M20S",
  "contentUrl": "https://ahs.jkkn.ac.in/videos/campus-tour.mp4"
}
```

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

## PHASE 3: FUTURE-PROOFING (4 hours, weeks 5–8)

### Task 3.1: Add Individual Course Schemas (Homepage)
**File:** `src/app/page.tsx`
**Status:** ⏳ Not Started

Add Course schema for each of 9 programs listed on homepage.

**Time:** 2 hours

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

### Task 3.2: Implement Programmatic SEO (Blog Categories)
**Status:** ⏳ Not Started
**Time:** 2 hours

Create category landing pages with schema if not already done.

**Owner:** __________ | **Due:** __________ | **Status:** ⏳

---

## VERIFICATION CHECKLIST

### Phase 1 Verification (Complete before moving to Phase 2)

- [ ] All 15 pages have meta robots directive
- [ ] Each page source (`Ctrl+U` or DevTools) shows: `<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">`
- [ ] All H2 tags followed by ≤50 word answer paragraph
- [ ] All course pages + homepage have FAQPage with Speakable
- [ ] Google Rich Results Test shows FAQPage schema valid
- [ ] Google Rich Results Test shows Speakable text present
- [ ] Article schema on NAAC, Vision, Mission pages valid in tester
- [ ] Contact schema includes phone, email, ContactPoint
- [ ] Gallery images have ImageObject schema with alt text
- [ ] No schema validation errors in Google Search Console

### Phase 1 Quick Validation (Manual Testing)

For each page:
1. Open in Chrome
2. Right-click → Inspect → Network → type `schema`
3. Verify JSON-LD blocks contain expected @type values
4. Use [Google Rich Results Test](https://search.google.com/test/rich-results)
5. Verify no error messages

### Phase 2 Verification

- [ ] NAAC page expanded to 1,200+ words with 5+ H2s
- [ ] NAAC FAQ schema valid in Rich Results Tester
- [ ] BlogPosting schema on 5+ blog posts
- [ ] CollectionPage schema on /blog listing page
- [ ] Blog posts appear in Google News / Discover (monitor over 2 weeks)

---

## SUBMISSION & HANDOFF

### Before Marking Complete:

- [ ] All Phase 1 tasks completed and verified
- [ ] All schema tested in Google Rich Results Tester
- [ ] No validation errors in Google Search Console
- [ ] No broken links introduced
- [ ] Mobile responsiveness tested (inspect mode, 375px viewport)
- [ ] Lighthouse score stable or improved

### Sign-Off:

| Role | Name | Sign-Off Date | Status |
|------|------|---------------|--------|
| Implementer | ________________ | __________ | ⏳ |
| Reviewer | ________________ | __________ | ⏳ |
| Approval | ________________ | __________ | ⏳ |

---

## TIMELINE SUMMARY

| Phase | Duration | Status | Owner |
|-------|----------|--------|-------|
| Phase 1 (Critical Fixes) | 2 weeks | ⏳ | __________ |
| Phase 2 (High Priority) | 1 week | ⏳ | __________ |
| Phase 3 (Future) | 1 week | ⏳ | __________ |
| **Total** | **4 weeks** | ⏳ | __________ |

---

**Report Generated:** March 18, 2026
**Template Version:** 1.0
**Last Updated:** March 18, 2026

For questions or clarifications, refer to the full audit: `AHS-SCHEMA-CONTENT-AUDIT-2026-03-18.md`
