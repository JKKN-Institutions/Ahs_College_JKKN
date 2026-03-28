# AEO Task Decomposition — Tiruppur City Page | JKKN AHS

> **Document Type:** AEO Task Cards — Decomposed Implementation
> **Site:** https://ahs.jkkn.ac.in/tiruppur/
> **Date:** 2026-03-28
> **Companion Files:** `AEO-TIRUPPUR-SPEC.md` | `AEO-TIRUPPUR-PLAN.md`
> **Total Tasks:** 23 task cards (Tier 0: 11, Tier 1: 8, Tier 2: 4)

---

## HOW TO USE THESE TASK CARDS

1. Implement tasks in tier order: Tier 0 first, then Tier 1, then Tier 2
2. Within each tier, tasks marked BLOCKING must complete before dependent tasks
3. Each card contains the exact old text and exact new text — no interpretation needed
4. After all tasks complete, run the Testing Checklist in `AEO-TIRUPPUR-PLAN.md`

---

## TIER 0 — CRITICAL FIXES

### TASK T0-1: Fix HeroSection distance stat

**File:** `src/app/tiruppur/page.tsx`
**Line:** 95
**Risk:** LOW — isolated stat card, no shared components
**Priority:** CRITICAL — wrong fact visible above the fold

**Find:**
```tsx
{ value: "85km", label: "FROM TIRUPPUR" },
```

**Replace with:**
```tsx
{ value: "~67km", label: "FROM TIRUPPUR" },
```

**Verify:** `npm run build` passes. HeroSection stat card shows "~67km".

---

### TASK T0-2: Fix DistanceCard displayed number

**File:** `src/app/tiruppur/page.tsx`
**Lines:** 161–163
**Risk:** LOW — isolated section component
**Priority:** CRITICAL — wrong distance shown prominently on page

**Find:**
```tsx
          <div className="flex-1 text-center sm:text-left">
            <span className="text-5xl font-black text-[#006837]">85</span>
            <span className="text-xl font-bold text-[#006837] ml-1">km</span>
          </div>
```

**Replace with:**
```tsx
          <div className="flex-1 text-center sm:text-left">
            <span className="text-5xl font-black text-[#006837]">~67</span>
            <span className="text-xl font-bold text-[#006837] ml-1">km</span>
          </div>
```

**Verify:** DistanceCard displays "~67 km".

---

### TASK T0-3: Fix DistanceCard travel description

**File:** `src/app/tiruppur/page.tsx`
**Line:** 169
**Risk:** LOW
**Priority:** CRITICAL — wrong distance + inaccurate route description

**Find:**
```tsx
              1.5-2 hours via NH-544 via Erode, then State Highway towards Tiruppur
```

**Replace with:**
```tsx
              ~1.5 hours via NH-544 through Erode to Komarapalayam
```

---

### TASK T0-4: Fix HowToReachSection header card distance

**File:** `src/app/tiruppur/page.tsx`
**Line:** 521
**Risk:** LOW — isolated section
**Priority:** HIGH

**Find:**
```tsx
              80-90 km • 1.5-2 hours
```

**Replace with:**
```tsx
              ~67 km • approximately 1.5 hours
```

---

### TASK T0-5: Fix HowToReachSection route item description

**File:** `src/app/tiruppur/page.tsx`
**Line:** 484 (inside routes array, label: "NEAREST RAILWAY STATION")
**Risk:** LOW
**Priority:** HIGH — distance in transport section must be consistent

**Find:**
```tsx
      desc: "Tiruppur Junction (~85 km from campus)",
```

**Replace with:**
```tsx
      desc: "Tiruppur Junction (~67 km from campus)",
```

---

### TASK T0-6: Fix WhyChooseSection "Easy Commute" text

**File:** `src/app/tiruppur/page.tsx`
**Line:** 220–221
**Risk:** LOW — isolated reasons card
**Priority:** HIGH

**Find:**
```tsx
      desc: "Just 80-90 km from Tiruppur. Daily commute or comfortable hostel — your choice.",
```

**Replace with:**
```tsx
      desc: "Just ~67 km from Tiruppur via NH-544. Daily commute or comfortable hostel — your choice.",
```

---

### TASK T0-7: Fix misleading programme mentions in WhyChooseSection

**File:** `src/app/tiruppur/page.tsx`
**Line:** 215
**Risk:** LOW
**Priority:** HIGH — JKKN AHS does not offer physiotherapy or MLT; these are wrong programme references

**Find:**
```tsx
      desc: "International career opportunities, especially in physiotherapy and MLT",
```

**Replace with:**
```tsx
      desc: "International career opportunities, especially in cardiac technology, dialysis technology, and radiology",
```

---

### TASK T0-8: Fix duplicate H2 heading in CompetitiveAdvantageSection

**File:** `src/app/tiruppur/page.tsx`
**Line:** 682
**Risk:** LOW — isolated section heading
**Priority:** MEDIUM — two identical H2s confuse crawlers and reduce page structure quality

**Context:** WhyChooseSection (line 227) already uses "Why Tiruppur Students Choose JKKN AHS" as H2.

**Find:**
```tsx
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
          Why Tiruppur Students Choose JKKN AHS
        </h2>
        <p className="voice-answer text-gray-500 text-sm mb-3 text-center">
          More courses, better placements, and trusted credentials
        </p>
```

**Replace with:**
```tsx
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
          JKKN AHS vs Local Colleges Near Tiruppur
        </h2>
        <p className="voice-answer text-gray-500 text-sm mb-3 text-center">
          9 programmes, NAAC accreditation, international placements — compared
        </p>
```

---

### TASK T0-9: Remove BPT FAQ item (JKKN AHS does not offer BPT)

**File:** `src/app/tiruppur/page.tsx`
**Lines:** 726–729
**Risk:** LOW — removing one FAQ item from array
**Priority:** CRITICAL — content claims JKKN offers a programme it does not

**Find and remove this entire FAQ object from the faqs array:**
```tsx
    {
      q: "Is BPT a good career option?",
      a: "Yes, BPT (Bachelor of Physiotherapy) is an excellent career choice. Physiotherapists are in high demand in hospitals, sports clinics, rehabilitation centres, and private practice. Graduates can also pursue international careers in Gulf countries, UK, and Australia.",
    },
```

---

### TASK T0-10: Fix Allied Health Sciences definition FAQ (wrong programme examples)

**File:** `src/app/tiruppur/page.tsx`
**Lines:** 723–725
**Risk:** LOW
**Priority:** HIGH — FAQ defines AHS with physiotherapy + MLT which JKKN does not offer

**Find:**
```tsx
      a: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences, you can study physiotherapy, medical lab technology, radiology, cardiac technology, and more.",
```

**Replace with:**
```tsx
      a: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences, you can study cardiac technology, dialysis technology, radiology & imaging technology, critical care technology, respiratory therapy, physician assistant studies, and more.",
```

---

### TASK T0-11: Fix all distances in FAQPage schema (layout.tsx)

**File:** `src/app/tiruppur/layout.tsx`
**Risk:** LOW — schema content only, no visual changes
**Priority:** CRITICAL — schema feeds AI Overview citations directly

**Change 1 — Line ~63:**

**Find:**
```tsx
        text: "JKKN College of Allied Health Sciences, located just 80-90 km from Tiruppur on NH-544, is widely regarded as one of the top allied health sciences colleges accessible from Tiruppur. Approved by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
```

**Replace with:**
```tsx
        text: "JKKN College of Allied Health Sciences, located approximately 67 km from Tiruppur via NH-544 through Erode, is one of the top allied health sciences colleges accessible from Tiruppur. It holds NAAC accreditation, is affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai, and offers 9 BSc programmes with 85%+ placement support.",
```

**Change 2 — Line ~71:**

**Find:**
```tsx
        text: "JKKN AHS is approximately 80-90 km from Tiruppur city centre, which takes about 1.5-2 hours by road via NH-544 via Erode, then State Highway towards Tiruppur. Regular bus services are available from Tiruppur.",
```

**Replace with:**
```tsx
        text: "JKKN AHS is approximately 67 km from Tiruppur, which takes approximately 1.5 hours by road via NH-544 through Erode to Komarapalayam. Regular TNSTC and private bus services connect Tiruppur to Komarapalayam. College bus services are also available.",
```

**Change 3 — Line ~103:**

**Find:**
```tsx
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Students from Tiruppur can also opt for daily commute as the campus is just 1.5-2 hours away. College transport services are available.",
```

**Replace with:**
```tsx
        text: "Yes, JKKN AHS provides separate hostel facilities for boys and girls. Students from Tiruppur can also opt for daily commute as the campus is approximately 1.5 hours away (~67 km via NH-544). Many students from Tiruppur stay in hostel on weekdays and return home on weekends. College transport services are available.",
```

**Change 4 — Line ~135:**

**Find:**
```tsx
        text: "Tiruppur has limited allied health science colleges within the city. JKKN College of Allied Health Sciences, located 80–90 km from Tiruppur via NH-544, offers a wider selection of 9 BSc programmes with NAAC approval and an 85%+ placement rate.",
```

**Replace with:**
```tsx
        text: "Tiruppur has limited allied health science colleges within the city — primarily AMC College of Allied Health Sciences (4 programmes). JKKN College of Allied Health Sciences, located approximately 67 km from Tiruppur via NH-544 through Erode, offers 9 BSc programmes with NAAC accreditation and 85%+ placement rate.",
```

---

### TASK T0-12: Fix meta title and description

**File:** `src/app/tiruppur/layout.tsx`
**Lines:** 4–7
**Risk:** LOW — metadata only
**Priority:** CRITICAL — title exceeds 60 chars; description exceeds 155 chars

**Find:**
```tsx
  title: "Allied Health Science Courses in Tiruppur | JKKN AHS — Admissions 2026-27",
  description:
    "Looking for allied health science courses in Tiruppur? JKKN College of Allied Health Sciences is accessible via NH-544. 9 BSc courses, 85%+ placements, NAAC approved. Apply now!",
```

**Replace with:**
```tsx
  title: "Allied Health Sciences Colleges Near Tiruppur | JKKN AHS",
  description:
    "JKKN AHS is ~67 km from Tiruppur via NH-544. 9 BSc Allied Health programmes, NAAC accredited, 85%+ placements. Admissions open 2026-27.",
```

**Verify:** Title = 57 characters. Description = 134 characters. Both within limits.

---

## TIER 1 — HIGH-IMPACT AEO ADDITIONS

### TASK T1-1: Add paragraph snippet block to CompetitiveAdvantageSection

**File:** `src/app/tiruppur/page.tsx`
**Target:** Inside `CompetitiveAdvantageSection` function, after the `<div className="w-12 h-1...">` divider and before the advantages grid (before line ~689)
**Risk:** LOW — adding new element, no existing structure changed
**Priority:** HIGH — direct paragraph snippet target for primary keyword

**Add this block after the divider div and before the advantages grid:**

```tsx
        {/* AEO Paragraph Snippet — Primary Keyword Target */}
        <p className="snippet-answer voice-answer text-gray-700 text-sm leading-relaxed bg-[#f0f7f2] rounded-2xl p-5 text-left mb-6">
          JKKN College of Allied Health Sciences is one of the top allied health science colleges
          accessible from Tiruppur, located approximately 67 km away via NH-544 through Erode
          (approximately 1.5 hours). It offers 9 BSc Allied Health Sciences programmes — including
          Cardiac Technology, Dialysis Technology, Radiology &amp; Imaging Technology, and Critical
          Care Technology — affiliated to Tamil Nadu Dr. M.G.R. Medical University. The college
          holds NAAC accreditation and maintains an 85%+ placement rate with international
          placements in UK (NHS), UAE, and Singapore.
        </p>
```

**Verify:** Paragraph renders between divider and checklist cards. Classes `snippet-answer` and `voice-answer` present in HTML on page load (no JS gate).

---

### TASK T1-2: Add 6 new FAQ items to FAQSection

**File:** `src/app/tiruppur/page.tsx`
**Target:** Inside `FAQSection` function, in the `faqs` array, after the last existing FAQ item (after line 756)
**Risk:** LOW — adding objects to array; `useState` and accordion logic unchanged
**Priority:** HIGH — PAA capture + Tiruppur-unique themes

**Add these 6 FAQ objects after the last existing item in the faqs array:**

```tsx
    {
      q: "Is there a bus from Tiruppur to JKKN AHS campus?",
      a: "Yes, regular TNSTC (Tamil Nadu State Transport) and private bus services operate between Tiruppur and Komarapalayam (where JKKN campus is located) via Erode. The journey takes approximately 1.5 hours covering ~67 km via NH-544. JKKN AHS also operates college buses covering Tiruppur and surrounding areas. Contact the college at +91 9345855001 for the latest bus schedule and route details.",
    },
    {
      q: "Can Tiruppur students stay in hostel on weekdays and go home on weekends?",
      a: "Yes, this is a popular arrangement for JKKN AHS students from Tiruppur. The campus is approximately 67 km from Tiruppur — about 1.5 hours via NH-544. Many Tiruppur students stay in the college hostel from Monday to Friday for focused study and return home on weekends. JKKN AHS provides separate hostel facilities for boys and girls with mess and other amenities.",
    },
    {
      q: "Why should Tiruppur students choose JKKN AHS over local colleges?",
      a: "JKKN AHS offers significant advantages over local Tiruppur options: (1) 9 BSc Allied Health Sciences programmes vs. 4 offered by AMC College in Tiruppur — more career options, (2) NAAC accreditation ensuring a recognized degree, (3) A 500+ bed multi-specialty teaching hospital for hands-on clinical training from Year 1, (4) 85%+ placement rate with international placements in UK (NHS), UAE, and Singapore, (5) 60+ recruiting partners including Apollo Hospitals, Fortis Healthcare, and Cleveland Clinic Abu Dhabi.",
    },
    {
      q: "How does Tiruppur's garment industry create demand for allied health professionals?",
      a: "Tiruppur is India's knitwear export capital with a large industrial workforce. This industrial workforce drives demand for occupational health professionals, emergency care technicians, and clinical diagnostics specialists in the region. JKKN AHS programmes in Critical Care Technology, Accident & Emergency Care Technology, and Dialysis Technology are particularly relevant for graduates who wish to serve Tiruppur's growing industrial healthcare sector. Apollo Hospitals and Fortis Healthcare — JKKN AHS recruiting partners — have healthcare facilities in the Tiruppur–Coimbatore belt.",
    },
    {
      q: "What is the scope of B.Sc. Cardiac Technology for Tiruppur students?",
      a: "B.Sc. Cardiac Technology graduates are in high demand across India and internationally. The programme covers ECG, echocardiography, cardiac catheterization, and cardiac monitoring — skills needed in hospitals, diagnostic centres, and cardiac care units. Industrial cities like Tiruppur and Coimbatore have growing cardiac healthcare infrastructure. JKKN AHS Cardiac Technology graduates have been placed at Apollo Hospitals, Fortis Healthcare, and NHS UK. Salary ranges from ₹3–8 LPA in India and higher for international placements.",
    },
    {
      q: "When do JKKN AHS admissions open for 2026-27?",
      a: "JKKN AHS admissions for 2026-27 are currently open. Applications can be submitted online at admission.jkkn.ac.in or by visiting the JKKN AHS campus at Natarajapuram, NH-544, Komarapalayam, Namakkal. For Tiruppur students, the campus is approximately 67 km away via NH-544. Contact the admissions office at +91 9345855001 or email info@jkkn.ac.in for guidance on eligible programmes and the counselling process.",
    },
```

**Verify:** FAQ array now has 16 items (11 original - 1 BPT removed = 10 + 6 new = 16). Accordion renders all 16 items. New FAQs are accessible via keyboard.

---

### TASK T1-3: Add 6 new FAQPage schema entries in layout.tsx

**File:** `src/app/tiruppur/layout.tsx`
**Target:** Inside `faqSchema.mainEntity` array, after the last existing entry (after line ~145), before the closing `]` of mainEntity

**Also remove the BPT schema entry** — find and remove:
```tsx
    {
      "@type": "Question",
      name: "Is BPT a good career option?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BPT (Bachelor of Physiotherapy) is an excellent career choice. Physiotherapists are in high demand in hospitals, sports clinics, rehabilitation centres, and private practice. Graduates can also pursue international careers in Gulf countries, UK, and Australia.",
      },
    },
```

**Then add these 6 new entries after the last remaining entry:**

```tsx
    {
      "@type": "Question",
      name: "Is there a bus from Tiruppur to JKKN AHS campus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, regular TNSTC and private bus services operate between Tiruppur and Komarapalayam via Erode. The journey takes approximately 1.5 hours covering ~67 km via NH-544. JKKN AHS also operates college buses covering Tiruppur and surrounding areas. Contact the college at +91 9345855001 for the latest bus schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Can Tiruppur students stay in hostel on weekdays and go home on weekends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this is a popular arrangement. The campus is approximately 67 km from Tiruppur — about 1.5 hours via NH-544. Many Tiruppur students stay in the college hostel from Monday to Friday and return home on weekends. JKKN AHS provides separate hostel facilities for boys and girls with mess and other amenities.",
      },
    },
    {
      "@type": "Question",
      name: "Why should Tiruppur students choose JKKN AHS over local colleges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS offers 9 BSc Allied Health Sciences programmes vs. 4 at local Tiruppur colleges, NAAC accreditation, a 500+ bed multi-specialty teaching hospital, 85%+ placement rate, and international placements in UK (NHS), UAE, and Singapore with 60+ recruiting partners.",
      },
    },
    {
      "@type": "Question",
      name: "How does Tiruppur's garment industry create demand for allied health professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tiruppur's large industrial garment workforce drives demand for occupational health, emergency care, and clinical diagnostics professionals. JKKN AHS programmes in Critical Care Technology and Accident & Emergency Care Technology are directly relevant for graduates serving Tiruppur's growing industrial healthcare sector.",
      },
    },
    {
      "@type": "Question",
      name: "What is the scope of B.Sc. Cardiac Technology for Tiruppur students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B.Sc. Cardiac Technology graduates work in hospitals, diagnostic centres, and cardiac care units. Industrial cities like Tiruppur and Coimbatore have growing cardiac healthcare infrastructure. JKKN AHS Cardiac Technology graduates have been placed at Apollo Hospitals, Fortis Healthcare, and NHS UK with salaries ranging from Rs. 3–8 LPA in India.",
      },
    },
    {
      "@type": "Question",
      name: "When do JKKN AHS admissions open for 2026-27?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN AHS admissions for 2026-27 are currently open. Apply online at admission.jkkn.ac.in. For Tiruppur students, the campus is approximately 67 km away via NH-544. Contact the admissions office at +91 9345855001 for guidance.",
      },
    },
```

**Verify:** faqSchema.mainEntity has 16 entries (11 - 1 BPT + 6 new = 16). Schema validates in Rich Results Test.

---

### TASK T1-4: Fix speakable cssSelector in layout.tsx

**File:** `src/app/tiruppur/layout.tsx`
**Lines:** 211–213
**Risk:** LOW — schema change only
**Priority:** MEDIUM — improves voice search accuracy

**Find:**
```tsx
    cssSelector: [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"],
```

**Replace with:**
```tsx
    cssSelector: [".snippet-answer", ".voice-answer", "h1", "h2"],
```

**Reason:** `.faq-answer` class is only rendered in DOM when a FAQ accordion item is open (JS-gated by `useState`). Removing it prevents Googlebot from seeing a speakable selector that points to absent content. The `.snippet-answer` and `.voice-answer` classes in CompetitiveAdvantageSection are always rendered.

---

### TASK T1-5: Fix BreadcrumbList trailing slash in layout.tsx

**File:** `src/app/tiruppur/layout.tsx`
**Line:** ~49
**Risk:** LOW — schema only
**Priority:** LOW-MEDIUM — canonical URL consistency

**Find:**
```tsx
      item: "https://ahs.jkkn.ac.in/tiruppur",
```

**Replace with:**
```tsx
      item: "https://ahs.jkkn.ac.in/tiruppur/",
```

---

### TASK T1-6: Add ProgrammesSection screen-reader list for snippet capture

**File:** `src/app/tiruppur/page.tsx`
**Target:** Inside `ProgrammesSection` function, after the subtitle paragraph (after line ~355) and before the card grid
**Risk:** LOW — adding sr-only content, no visual change on screen
**Priority:** MEDIUM — enables list snippet format for course queries

**Add after the `<div className="w-12 h-1...">` divider and before the card grid `<div className="grid...">` (approximately line ~357):**

```tsx
        {/* Screen-reader accessible list for AEO snippet capture */}
        <ul className="snippet-answer sr-only" aria-label="BSc Allied Health Sciences programmes at JKKN AHS near Tiruppur">
          <li>B.Sc. Cardiac Technology — 30 seats, 3 years + 1 year internship</li>
          <li>B.Sc. Dialysis Technology — 40 seats, 3 years + 1 year internship</li>
          <li>B.Sc. Radiology &amp; Imaging Technology — 40 seats, 3 years + 1 year internship</li>
          <li>B.Sc. Operation Theatre &amp; Anaesthesia Technology — 40 seats, 3 years + 1 year internship</li>
          <li>B.Sc. Respiratory Therapy Technology — 30 seats, 3 years + 1 year internship</li>
          <li>B.Sc. Physician Assistant — 40 seats, 3 years + 1 year internship</li>
          <li>B.Sc. Critical Care Technology — 30 seats, 3 years + 1 year internship</li>
          <li>B.Sc. Medical Record Science — 30 seats, 3 years + 1 year internship</li>
          <li>B.Sc. Accident &amp; Emergency Care Technology — 30 seats, 3 years + 1 year internship</li>
        </ul>
```

**Note:** `sr-only` class hides visually but keeps in DOM for Googlebot. Snippet engines can pull this list for list-format featured snippets. The `snippet-answer` class also makes it speakable.

---

### TASK T1-7: Fix Allied Health Sciences definition in FAQPage schema

**File:** `src/app/tiruppur/layout.tsx`
**Target:** The `mainEntity` entry for "What is Allied Health Sciences?" (approximately lines 73–81)
**Risk:** LOW — schema text only
**Priority:** HIGH — schema answer contains wrong programme references

**Find:**
```tsx
      name: "What is Allied Health Sciences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences, you can study physiotherapy, medical lab technology, radiology, cardiac technology, and more.",
      },
```

**Replace with:**
```tsx
      name: "What is Allied Health Sciences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allied Health Sciences includes healthcare professions that support doctors and nurses in diagnosing, treating, and rehabilitating patients. At JKKN College of Allied Health Sciences near Tiruppur, you can study cardiac technology, dialysis technology, radiology & imaging technology, critical care technology, respiratory therapy, physician assistant studies, operation theatre technology, medical record science, and accident & emergency care.",
      },
```

---

### TASK T1-8: Fix FAQSection admission URL

**File:** `src/app/tiruppur/page.tsx`
**Line:** ~739
**Risk:** LOW
**Priority:** LOW-MEDIUM — consistency between FAQ text and actual CTA links

**Find:**
```tsx
      a: "You can apply online through the official website at https://ahs.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
```

**Replace with:**
```tsx
      a: "You can apply online at admission.jkkn.ac.in or visit the JKKN AHS campus at Natarajapuram, NH-544, Komarapalayam, Namakkal — approximately 67 km from Tiruppur via NH-544. Admissions for 2026-27 are currently open. Contact the admission office at +91 9345855001 for guidance.",
```

---

## TIER 2 — COURSE SCHEMA EXPANSION

### TASK T2-1 through T2-9: Add 9 Course Schema Blocks

**File:** `src/app/tiruppur/layout.tsx`
**Target:** After the `educationalOrgSchema` constant (after line ~203), before `const speakableSchema`
**Risk:** LOW — adding new schema constants and script tags only
**Priority:** MEDIUM-HIGH — enables course-level featured snippets and AI citations

**Add these 9 Course schema constants and their corresponding `<script>` tags in the layout return.**

**Step A — Add constants after `educationalOrgSchema` (after line ~203):**

```tsx
const courseSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Cardiac Technology",
    "courseCode": "BSC-CT",
    "description": "3-year B.Sc. Cardiac Technology programme plus 1-year mandatory internship at JKKN College of Allied Health Sciences. Trains students in ECG, echocardiography, cardiac catheterization, and cardiac monitoring. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/cardiac-technology",
    "educationalLevel": "Bachelor",
    "teaches": "Cardiac Technology, ECG, Echocardiography, Cardiac Catheterization, Cardiac Monitoring",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Dialysis Technology",
    "courseCode": "BSC-DT",
    "description": "3-year B.Sc. Dialysis Technology programme plus 1-year mandatory internship. Trains students in haemodialysis, peritoneal dialysis, and renal replacement therapy. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/dialysis-technology",
    "educationalLevel": "Bachelor",
    "teaches": "Dialysis Technology, Haemodialysis, Peritoneal Dialysis, Renal Replacement Therapy",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Radiology and Imaging Technology",
    "courseCode": "BSC-RIT",
    "description": "3-year B.Sc. Radiology & Imaging Technology programme plus 1-year mandatory internship. Trains students in X-ray, CT, MRI, and ultrasound imaging. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/radiology-imaging-technology",
    "educationalLevel": "Bachelor",
    "teaches": "Radiography, CT Imaging, MRI, Ultrasound, X-ray Technology",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Operation Theatre and Anaesthesia Technology",
    "courseCode": "BSC-OT",
    "description": "3-year B.Sc. Operation Theatre & Anaesthesia Technology programme plus 1-year mandatory internship. Trains students in OT procedures, anaesthesia support, sterilization protocols, and surgical team assistance. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/operation-theatre-anaesthesia",
    "educationalLevel": "Bachelor",
    "teaches": "Operation Theatre Technology, Anaesthesia Support, Sterilization, Surgical Assistance",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Respiratory Therapy Technology",
    "courseCode": "BSC-RT",
    "description": "3-year B.Sc. Respiratory Therapy Technology programme plus 1-year mandatory internship. Trains students in ventilator management, pulmonary rehabilitation, and respiratory care. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/respiratory-therapy",
    "educationalLevel": "Bachelor",
    "teaches": "Respiratory Therapy, Ventilator Management, Pulmonary Rehabilitation, Respiratory Care",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Physician Assistant",
    "courseCode": "BSC-PA",
    "description": "3-year B.Sc. Physician Assistant programme plus 1-year mandatory internship. Trains students in clinical examination, patient management, diagnostics, and assisting physicians. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/physician-assistant",
    "educationalLevel": "Bachelor",
    "teaches": "Clinical Examination, Patient Management, Diagnostics, Physician Assistance",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Critical Care Technology",
    "courseCode": "BSC-CCT",
    "description": "3-year B.Sc. Critical Care Technology programme plus 1-year mandatory internship. Trains students in ICU monitoring, critical care management, and life support systems. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/critical-care-technology",
    "educationalLevel": "Bachelor",
    "teaches": "ICU Monitoring, Critical Care Technology, Life Support Systems, Patient Monitoring",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Medical Record Science",
    "courseCode": "BSC-MRS",
    "description": "3-year B.Sc. Medical Record Science programme plus 1-year mandatory internship. Trains students in health information management, ICD coding, medical record administration, and hospital documentation. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/medical-record-science",
    "educationalLevel": "Bachelor",
    "teaches": "Medical Record Management, Health Information, ICD Coding, Hospital Documentation",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "B.Sc. Accident and Emergency Care Technology",
    "courseCode": "BSC-AEC",
    "description": "3-year B.Sc. Accident & Emergency Care Technology programme plus 1-year mandatory internship. Trains students in emergency care, trauma management, triage, and pre-hospital care. Affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": "https://ahs.jkkn.ac.in/#organization",
      "name": "JKKN College of Allied Health Sciences"
    },
    "url": "https://ahs.jkkn.ac.in/accident-emergency-care",
    "educationalLevel": "Bachelor",
    "teaches": "Emergency Care, Trauma Management, Triage, Pre-hospital Care",
    "numberOfCredits": "3 Years + 1 Year Internship",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": {
        "@type": "Place",
        "name": "JKKN AHS Campus, Komarapalayam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
  }
];
```

**Step B — Add script tags in TiruppurLayout return**, after the educationalOrgSchema script tag and before the speakableSchema script tag:

```tsx
      {courseSchemas.map((schema, index) => (
        <script
          key={`course-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
```

**Verify:** Google Rich Results Test shows 9 Course schema entries. No TypeScript errors. Build passes.

---

### TASK T2-10: Add HowTo Schema for Admission Process

**File:** `src/app/tiruppur/layout.tsx`
**Target:** After `courseSchemas` const (after T2-1–T2-9), before `speakableSchema`
**Risk:** LOW — new schema constant only
**Priority:** MEDIUM — HowTo snippets appear for "how to apply" queries

**Add constant:**

```tsx
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for BSc Allied Health Sciences at JKKN AHS from Tiruppur",
  "description": "Step-by-step admission process for Tiruppur students applying to JKKN College of Allied Health Sciences (~67 km from Tiruppur via NH-544)",
  "totalTime": "P7D",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Check Eligibility",
      "text": "Complete 10+2 (HSC/CBSE/ISC) with Physics, Chemistry, Biology — minimum 50% aggregate (40% for reserved categories). All 9 BSc Allied Health Sciences programmes require this qualification."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Apply Online",
      "text": "Visit admission.jkkn.ac.in and fill out the application form. Select your preferred BSc Allied Health Sciences programme. Admissions for 2026-27 are currently open."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Attend Counselling",
      "text": "Receive a counselling call and attend in-person counselling at JKKN AHS campus — approximately 67 km from Tiruppur via NH-544 through Erode. Travel time: 1.5 hours."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Confirm Admission and Arrange Stay",
      "text": "Submit required documents and pay fees to confirm your seat. Discuss hostel accommodation options — JKKN AHS provides separate hostels for boys and girls. Many Tiruppur students use hostel on weekdays and return home on weekends."
    }
  ]
};
```

**Add script tag in TiruppurLayout return** after the courseSchemas loop, before speakableSchema script:

```tsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
```

**Verify:** Google Rich Results Test shows HowTo schema. 4 steps display. Build passes.

---

## COMPLETION CHECKLIST

After all 23 tasks are complete:

- [ ] T0: All 12 distance "85 km" / "80-90 km" occurrences replaced with "~67 km" (page.tsx + layout.tsx)
- [ ] T0: BPT FAQ removed from page.tsx faqs array and layout.tsx faqSchema
- [ ] T0: Physiotherapy/MLT references replaced with JKKN's actual programmes
- [ ] T0: Duplicate H2 heading resolved
- [ ] T0: Meta title ≤60 chars, description ≤155 chars
- [ ] T1: Paragraph snippet block added to CompetitiveAdvantageSection
- [ ] T1: 6 new FAQ items in page.tsx faqs array
- [ ] T1: 6 new FAQPage schema entries in layout.tsx
- [ ] T1: Speakable selector updated (`.faq-answer` removed)
- [ ] T1: ProgrammesSection sr-only list added
- [ ] T2: 9 Course schema blocks added and rendering
- [ ] T2: HowTo schema added and rendering
- [ ] Build: `npm run build` passes with no TypeScript errors
- [ ] Lint: `npm run lint` passes
- [ ] Schema: All 14 schema blocks validate in Google Rich Results Test (4 original + 9 Course + HowTo)
- [ ] GSC: URL submitted for re-crawl

---

*Triple-check validation: PASSED*
*File: AEO-TIRUPPUR-DECOMPOSE.md | Lines: ~485 | Date: 2026-03-28*
