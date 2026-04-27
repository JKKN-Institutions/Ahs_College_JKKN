# JKKN College of Allied Health Sciences — Website Data Request Sheet

**Prepared by:** Developer  
**Date:** 25 April 2026  
**Action needed from:** Content / SEO Team  
**Codebase:** `d:\Deepakkumar\college_websites\Ahs_College\jkkn-ahs-website`

---

> **HOW TO USE THIS DOCUMENT**  
> The **Your Answer** column is for the content/SEO team to fill in correct information.  
> The **Dev Reference** column is for the developer only — it shows the exact file and line number.  
> Do not change any code yourself; return this filled-in document to the developer.

---

## Priority Legend

| Symbol | When to use |
|--------|------------|
| 🔴 URGENT | Placeholder or wrong text is **visible to website visitors RIGHT NOW** |
| 🟠 IMPORTANT | Affects SEO, search results, or structured data — not directly visible but impacts credibility |
| 🟡 NEEDED | Element exists on site but is broken, incomplete, or showing "To Be Announced" |
| 🟢 LATER | Minor issue or low-impact — fix when convenient |
| ⚪ HIDDEN | Not visible to visitors — data still needed before that section goes live |

---

## Summary

| Priority | Count |
|----------|-------|
| 🔴 URGENT   | 9 |
| 🟠 IMPORTANT | 4 |
| 🟡 NEEDED   | 4 |
| 🟢 LATER    | 3 |
| **Total**   | **21** |

---

## Section 1 — Principal's Message Page (Wrong College Content)

> ⚠️ **Critical:** The entire Principal's Message page shows content from **JKKN Dental College and Hospital**, not from JKKN College of Allied Health Sciences. All four items below are about the same root problem.

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|--------------------------|-------------|---------------|
| 1 | 🔴 URGENT | Principal's Message page → Principal's name and title | The page currently shows the name and title of the principal of **JKKN Dental College and Hospital**. This is the Allied Health Sciences website — the AHS principal's name and correct title are needed here instead. | | `src/app/principals-message/page.tsx` lines 51–58. Current: "Dr. Dhanasekar Balakrishnan" / "Principal- JKKN Dental College and Hospital" |
| 2 | 🔴 URGENT | Principal's Message page → Principal's qualifications | The qualifications shown (BDS, MDS, FDS RCS England, etc.) are dental surgery degrees. They belong to the Dental College principal. The AHS principal's actual qualifications are needed. | | `src/app/principals-message/page.tsx` lines 53–54, 112–113. Current: "BDS, MDS, FDS RCS (England), MDTFEd (Edinburgh), MFDS RCPS (Glasgow), MFDS RCS (Edinburgh)" |
| 3 | 🔴 URGENT | Principal's Message page → Message body text | The entire message talks about "JKKN Dental College and Hospital", "dental education", "oral healthcare", and "dental care" — wrong content for an Allied Health Sciences website. The AHS principal's actual message is needed. | | `src/app/principals-message/page.tsx` lines 77–103. Wrong phrases: "JKKN Dental College and Hospital" (×3), "dental education", "dental care", "oral health", "dentistry" |
| 4 | 🔴 URGENT | Principal's Message page → Principal's photo | The photo shown (`/principal.png`) is of the Dental College principal. The AHS principal's actual photo file is needed. | | `src/app/principals-message/page.tsx` line 37. Current image: `/principal.png` |

---

## Section 2 — Our Management Page (Wrong Institution Content)

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|--------------------------|-------------|---------------|
| 5 | 🔴 URGENT | Our Management page → Director's quote | The Director (SHRI. S. OMMSHARRAVANA) is quoted saying "shaping future **engineers** of distinction" — but this is a healthcare college, not an engineering institution. This was copied from an engineering college without being updated. The correct quote for the AHS context is needed. | | `src/app/our-management/page.tsx` line 23. Current: "…shaping future engineers of distinction…" |

---

## Section 3 — Homepage Testimonials ([SAMPLE] Markers Visible to Visitors)

> ⚠️ The `[SAMPLE]` text is appended directly to the testimonial content and **is displayed to website visitors** on the homepage right now.

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|--------------------------|-------------|---------------|
| 6 | 🔴 URGENT | Homepage → Testimonials → Kavitha Rajan's review | The testimonial ends with the literal text **[SAMPLE]** which is visible to visitors. Either replace with a real verified testimonial or confirm the content is genuine and remove the `[SAMPLE]` marker. | | `src/components/sections/Testimonials.tsx` line 38. Ends with: "…made the transition seamless. [SAMPLE]" |
| 7 | 🔴 URGENT | Homepage → Testimonials → Mr. Senthil Kumar's review | The testimonial ends with the literal text **[SAMPLE]** which is visible to visitors. Either replace with a real verified testimonial or confirm the content is genuine and remove the `[SAMPLE]` marker. | | `src/components/sections/Testimonials.tsx` line 46. Ends with: "…faculty genuinely cares about every Learner's success. [SAMPLE]" |
| 8 | 🔴 URGENT | Homepage → Testimonials → Mohammed Farhan's review | The testimonial ends with the literal text **[SAMPLE]** which is visible to visitors. Either replace with a real verified testimonial or confirm the content is genuine and remove the `[SAMPLE]` marker. | | `src/components/sections/Testimonials.tsx` line 54. Ends with: "…made my transition abroad smooth and confident. [SAMPLE]" |

---

## Section 4 — Placements Page ([UPDATE] Markers Visible to Visitors)

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|--------------------------|-------------|---------------|
| 9 | 🔴 URGENT | Placements page → International Destinations table → Australia & Canada row | The "Partner Hospitals" column for Australia & Canada shows the literal developer text **[UPDATE — confirm partner hospitals]** to website visitors. The real names of the hospitals/healthcare organisations where JKKN graduates are placed in Australia and Canada are needed. | | `src/app/placements/page.tsx` line 141. Current: `hospitals: "[UPDATE — confirm partner hospitals]"` |
| 10 | 🔴 URGENT | Placements page → Salary Table → footnote text | Below the salary table, the page displays the developer note **[UPDATE — Salary ranges are indicative. Verify with placement cell for latest figures.]** to website visitors. This needs to be replaced with either verified figures or a professionally worded disclaimer. | | `src/app/placements/page.tsx` line 647. Current literal text shown to users: "[UPDATE — Salary ranges are indicative. Verify with placement cell for latest figures.]" |

---

## Section 5 — SEO & Schema Data (Wrong College or Unverified)

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|--------------------------|-------------|---------------|
| 11 | 🟠 IMPORTANT | All pages → Google search result star rating | The structured data (used in Google search snippets) contains a review count of **150** with a developer note flagging it as "[NEEDS VERIFICATION] — verify against GBP listing". Please check the college's Google Business Profile and confirm the actual number of ratings. | | `src/app/layout.tsx` line 164. Current: `"ratingCount": "150"` with comment `// [NEEDS VERIFICATION] — verify against GBP listing` |
| 12 | 🟠 IMPORTANT | Faculty listing page → Browser tab title & Google search snippet | The Faculty page's title, description, and site name in search results all say **"JKKN Dental College & Hospital"** with a URL pointing to `dental.jkkn.ac.in`. Visitors searching for AHS faculty see the Dental College name in search results. Needs to say "JKKN College of Allied Health Sciences". | | `src/app/faculty/page.tsx` lines 10–27. All metadata (title, description, openGraph.siteName, openGraph.url) reference "JKKN Dental College & Hospital" and `dental.jkkn.ac.in` |
| 13 | 🟠 IMPORTANT | Individual faculty profile pages → Browser tab title & Google search snippet | Each faculty member's profile page also shows **"JKKN Dental College & Hospital"** in the browser tab and search results, with links to `dental.jkkn.ac.in`. Needs to be corrected to AHS. | | `src/app/faculty/[slug]/page.tsx` lines 51–60. title, description, siteName, and openGraph.url all reference the Dental College |
| 14 | 🟠 IMPORTANT | City landing pages (Coimbatore, Erode, Salem, Tiruppur, Namakkal) → Placement rate claim | The 5 city-targeting pages state **85%+** placement rate. The main Homepage, Admissions page, and Placements page all state **95%**. These are contradictory and both are visible to the public. The correct, verified figure needs to be used consistently everywhere. | | Inconsistency: City pages: `src/app/coimbatore/page.tsx:73`, `src/app/erode/page.tsx:74`, `src/app/salem/page.tsx:69`, `src/app/tiruppur/page.tsx:73`, `src/app/namakkal/page.tsx:73` say "85%+". Main site (`src/components/sections/Hero.tsx:13`, `src/app/admissions/page.tsx:98`) says "95%" |

---

## Section 6 — Admissions Page (Dates Not Yet Confirmed)

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|--------------------------|-------------|---------------|
| 15 | 🟡 NEEDED | Admissions page → Important Dates → "Application Opens" | Currently showing **"To Be Announced"** to visitors. The actual application opening date for 2026–27 is needed. | | `src/app/admissions/page.tsx` line 434. Value `"[UPDATE]"` displays as "To Be Announced" |
| 16 | 🟡 NEEDED | Admissions page → Important Dates → "Early Bird Deadline" | Currently showing **"To Be Announced"** to visitors. The early bird deadline for 2026–27 is needed. | | `src/app/admissions/page.tsx` line 435. Value `"[UPDATE]"` displays as "To Be Announced" |
| 17 | 🟡 NEEDED | Admissions page → Important Dates → "Last Date to Apply" | Currently showing **"To Be Announced"** to visitors. The final application deadline for 2026–27 is needed. | | `src/app/admissions/page.tsx` line 436. Value `"[UPDATE]"` displays as "To Be Announced" |
| 18 | 🟡 NEEDED | Admissions page → Important Dates → "Counseling Begins" | Currently showing **"To Be Announced"** to visitors. The counselling start date for 2026–27 is needed. | | `src/app/admissions/page.tsx` line 437. Value `"[UPDATE]"` displays as "To Be Announced" |

---

## Section 7 — Minor Issues (Fix When Convenient)

| # | Priority | Page / Section on Website | What's Missing or Needed | Your Answer | Dev Reference |
|---|----------|--------------------------|--------------------------|-------------|---------------|
| 19 | 🟢 LATER | Homepage & Placements page → Testimonials → Rajesh Sundaram | Rajesh Sundaram is identified as a **Critical Care Technology (CCT)** graduate but his testimonial says he "started his own **eye care** practice within 2 years of graduation." CCT is a hospital-based ICU/critical care discipline — not eye care. Please verify whether this is a genuine account and correct the specialisation or career outcome if needed. | | `src/components/sections/Testimonials.tsx` lines 19–23. Also: `src/app/placements/page.tsx:33` and `src/app/page.tsx:229` (JSON-LD review schema) |
| 20 | 🟢 LATER | Transport page → FAQ → Transport fee amount | The FAQ answers "What is the transport fee?" with only "fees vary by distance and route — contact admissions." No actual fee ranges are given. Adding approximate fee ranges by distance would be more useful to prospective students. | | `src/app/transport/page.tsx` line 144. Also: `src/app/transport/layout.tsx:69` (schema) |
| 21 | 🟢 LATER | Principal's Message page → SEO/Schema metadata | Once the correct AHS principal information is provided (see items 1–4), the SEO metadata description for this page also needs to be updated — it currently describes the person as serving both AHS and the Dental College. | | `src/app/principals-message/layout.tsx` line 40. Current: "Principal of JKKN College of Allied Health Sciences and JKKN Dental College and Hospital…" |

---

## Information to Collect — By Department

### From College Administration / Principal's Office
- [ ] Full name of the current Principal of JKKN College of Allied Health Sciences
- [ ] Official title/designation of the AHS principal
- [ ] Academic qualifications and credentials of the AHS principal
- [ ] Professional portrait photo of the AHS principal (high-resolution)
- [ ] AHS principal's official welcome message or message to students (500–800 words)
- [ ] Corrected quote from Director SHRI. S. OMMSHARRAVANA specifically about Allied Health Sciences (not engineering)

### From Admissions Office
- [ ] Exact date when applications open for 2026–27 admission
- [ ] Exact date for the early bird application deadline (if applicable)
- [ ] Exact final deadline to submit applications for 2026–27
- [ ] Exact date when counselling begins for 2026–27
- [ ] Transport fee schedule by distance zone / route (at least approximate ranges)

### From Placement Cell
- [ ] The confirmed, official placement rate — is it **95%** or **85%+**? (Inconsistency exists across the website; one verified number is needed for all pages)
- [ ] Names of partner hospitals / healthcare organisations where JKKN graduates have been placed in Australia and Canada
- [ ] Confirmation that all salary ranges in the Placements table are accurate and can be published — or provide updated verified ranges
- [ ] Verify: Did graduate Rajesh Sundaram (CCT batch) actually start an eye care practice? If not, provide the correct career outcome

### From Marketing / Content Team
- [ ] Real verified testimonials to replace (or confirm) the three [SAMPLE]-marked testimonials: Kavitha Rajan, Mr. Senthil Kumar, Mohammed Farhan — if the names and stories are genuine, simply confirm so the [SAMPLE] tag can be removed
- [ ] Confirm or deny: Does JKKN have documented placements at NHS UK hospitals? If yes, confirm this claim so it can remain on the site

### From SEO / Technical Team
- [ ] Log into Google Business Profile (GBP) and confirm the actual number of ratings (currently hardcoded as 150 — flagged for verification)
- [ ] Confirm the correct college name, description, and canonical URL for the Faculty page and individual Faculty profile page SEO metadata (currently shows Dental College details)

---

*Prepared by Developer — 25 April 2026 | No code was modified during this audit | JKKN College of Allied Health Sciences*
