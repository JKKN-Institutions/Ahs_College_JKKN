#!/usr/bin/env node
/**
 * One-shot generator: produces 9 standalone HTML blog files + an index
 * at C:\Users\DELL\Desktop\JKKN-AHS-Blogs\
 *
 * The files mirror the live /course-blog/[slug] content as a self-contained
 * offline review packet. Open index.html in any browser.
 *
 * Run: node scripts/generate-blog-html.cjs
 */

const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = "C:\\Users\\DELL\\Desktop\\JKKN-AHS-Blogs";
const SITE_BASE = "https://ahs.jkkn.ac.in";

// ---- shared style block (inline so files work offline) ----
const STYLES = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #fbfbee; color: #1a1a1a; line-height: 1.7;
  }
  .hero {
    background: linear-gradient(135deg, #0b6d41 0%, #085231 50%, #063a23 100%);
    color: #fff; padding: 60px 24px;
  }
  .hero-inner { max-width: 900px; margin: 0 auto; }
  .breadcrumb { font-size: 14px; opacity: 0.85; margin-bottom: 20px; }
  .breadcrumb a { color: #fff; text-decoration: none; }
  .breadcrumb a:hover { text-decoration: underline; }
  .category-badge {
    display: inline-block; background: #ffde59; color: #0b6d41;
    font-size: 11px; font-weight: 600; text-transform: uppercase;
    letter-spacing: 1px; padding: 6px 14px; border-radius: 999px;
    margin-bottom: 18px;
  }
  h1 { font-size: 36px; font-weight: 700; line-height: 1.25; margin-bottom: 18px; max-width: 800px; }
  @media (min-width: 768px) { h1 { font-size: 44px; } }
  .excerpt { font-size: 17px; opacity: 0.95; max-width: 750px; margin-bottom: 22px; }
  .meta { font-size: 14px; opacity: 0.85; display: flex; gap: 20px; flex-wrap: wrap; }
  .article {
    max-width: 900px; margin: 50px auto 80px; padding: 0 24px;
    font-size: 16px; color: #2a2a2a;
  }
  .article > p:first-of-type { font-size: 17px; }
  h2 {
    font-size: 28px; font-weight: 700; color: #1a1a1a;
    margin: 50px 0 18px; line-height: 1.3; scroll-margin-top: 20px;
  }
  h3 { font-size: 20px; font-weight: 600; color: #0b6d41; margin: 28px 0 12px; }
  p { margin-bottom: 18px; }
  ul, ol { margin: 0 0 22px 22px; }
  li { margin-bottom: 9px; }
  li::marker { color: #0b6d41; }
  strong { color: #1a1a1a; font-weight: 600; }
  a { color: #0b6d41; font-weight: 500; text-decoration: underline; text-underline-offset: 2px; }
  a:hover { color: #085231; }
  table {
    width: 100%; border-collapse: collapse; margin: 24px 0;
    font-size: 14px; background: #fff; border-radius: 10px; overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }
  th { background: #0b6d41; color: #fff; padding: 14px; text-align: left; font-weight: 600; }
  td { padding: 12px 14px; border-bottom: 1px solid #eef0eb; }
  tr:nth-child(even) td { background: #fafaf2; }
  tr:last-child td { border-bottom: none; }
  details {
    background: #fff; border: 1px solid #e6e6dc; border-radius: 12px;
    margin-bottom: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  }
  summary {
    padding: 18px 20px; font-weight: 600; cursor: pointer; list-style: none;
    display: flex; justify-content: space-between; align-items: center;
  }
  summary::after {
    content: '+'; color: #fff; background: #0b6d41; width: 24px; height: 24px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 18px; line-height: 1; transition: transform 0.2s;
  }
  details[open] summary::after { transform: rotate(45deg); }
  details > div { padding: 0 20px 20px; border-top: 1px solid #f1f1e8; padding-top: 16px; }
  .faq-section { margin-top: 56px; }
  .cta-card {
    margin-top: 56px;
    background: linear-gradient(135deg, #0b6d41 0%, #085231 100%);
    color: #fff; padding: 36px; border-radius: 16px;
  }
  .cta-card h2 { color: #fff; margin-top: 0; }
  .cta-card p { margin-bottom: 20px; opacity: 0.95; }
  .cta-buttons { display: flex; flex-wrap: wrap; gap: 12px; }
  .btn {
    display: inline-block; padding: 12px 22px; border-radius: 8px;
    font-weight: 600; text-decoration: none; font-size: 15px;
  }
  .btn-yellow { background: #ffde59; color: #0b6d41; }
  .btn-yellow:hover { filter: brightness(0.95); color: #0b6d41; }
  .btn-outline {
    background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.3);
  }
  .btn-outline:hover { background: rgba(255,255,255,0.2); color: #fff; }
  .footer {
    background: #1a1a1a; color: rgba(255,255,255,0.65);
    text-align: center; padding: 30px 24px; font-size: 14px;
  }
  .footer a { color: #ffde59; }
`;

// ---- page wrapper ----
function htmlPage(meta, bodyHtml) {
  const liveUrl = `${SITE_BASE}/course-blog/${meta.slug}`;
  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.metaTitle}</title>
  <meta name="description" content="${meta.metaDescription.replace(/"/g, "&quot;")}" />
  <link rel="canonical" href="${liveUrl}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>${STYLES}</style>
</head>
<body>
  <header class="hero">
    <div class="hero-inner">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="${SITE_BASE}/">Home</a> &nbsp;/&nbsp;
        <a href="${SITE_BASE}/course-blog">Course Insights</a> &nbsp;/&nbsp;
        ${meta.courseName}
      </nav>
      <span class="category-badge">${meta.category}</span>
      <h1>${meta.title}</h1>
      <p class="excerpt">${meta.excerpt}</p>
      <div class="meta">
        <span>By ${meta.author}</span>
        <span>${formatDate(meta.publishedDate)}</span>
        <span>${meta.readTimeMinutes} min read</span>
      </div>
    </div>
  </header>

  <main class="article">
    ${bodyHtml}

    <section class="faq-section">
      <h2>Frequently Asked Questions</h2>
      ${meta.faqs.map((f) => `
        <details>
          <summary>${escapeHtml(f.q)}</summary>
          <div><p>${escapeHtml(f.a)}</p></div>
        </details>
      `).join("")}
    </section>

    <section class="cta-card">
      <h2>Ready to start your ${meta.courseName} journey?</h2>
      <p>JKKN College of Allied Health Sciences offers state-of-the-art labs, clinical training in partner hospitals, and strong placement support. Admissions for 2026-27 are now open.</p>
      <div class="cta-buttons">
        <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" class="btn btn-yellow" target="_blank" rel="noopener">Apply Now</a>
        <a href="${SITE_BASE}/admissions/${meta.courseSlug}" class="btn btn-outline">Admission Details →</a>
        <a href="tel:+919345855001" class="btn btn-outline">+91 93458 55001</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    Preview copy — live version at <a href="${liveUrl}">${liveUrl}</a><br />
    &copy; JKKN College of Allied Health Sciences · <a href="https://ahs.jkkn.ac.in/">ahs.jkkn.ac.in</a>
  </footer>
</body>
</html>`;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Convert `link://path|text` references inside body strings into anchor tags
// pointing to ${SITE_BASE}${path}. Inline format chosen because it keeps content
// readable in this script and serialization predictable.
function renderLinks(body) {
  return body.replace(/link:\/\/([^|]+)\|([^>]+?)>>/g, (_m, p, t) =>
    `<a href="${SITE_BASE}${p}">${t}</a>`);
}

// ---- the 9 posts: metadata + body HTML ----
const posts = [
  {
    slug: "scope-of-cardiac-technology-in-india",
    title: "Scope of Cardiac Care Technology in India: Career, Salary &amp; Future (2026)",
    metaTitle: "Scope of Cardiac Care Technology in India 2026 — Salary, Career & Jobs",
    metaDescription: "Complete guide to the scope of BSc Cardiac Care Technology in India — career paths, salary, top hospitals, day in the life, and global opportunities for cardiac technologists.",
    excerpt: "India faces a cardiac care crisis with 4.77 crore CVD patients. Here's why cardiac technologists are in record demand — and what your career, salary, and growth path look like.",
    courseSlug: "cardiac-technology", courseName: "B.Sc Cardiac Care Technology",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 11, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "Is cardiac care technology a good career in India?", a: "Yes. With over 4.77 crore cardiovascular disease patients in India and a severe shortage of trained cardiac technologists, the demand outpaces supply in every tier-1 and tier-2 city. Entry-level salaries start at ₹2.4–4.2 LPA and reach ₹8–14 LPA with 5+ years of experience." },
      { q: "What does a cardiac technologist do?", a: "Cardiac technologists perform ECGs, echocardiograms, stress tests, Holter monitoring, and assist cardiologists during angiograms, angioplasties, and pacemaker implantations in the cath lab. They are central to diagnosing and treating heart disease." },
      { q: "What is the salary of a cardiac technologist in India?", a: "Entry-level: ₹2.4–4.2 LPA in tier-1 hospitals. Mid-level (3–5 years): ₹5–8 LPA. Senior cath lab technologists with 8+ years and cardiology fellowship certifications earn ₹10–18 LPA. Gulf and UK roles can pay 2–3× Indian salaries." },
      { q: "Which hospitals hire BSc Cardiac Technology graduates?", a: "Apollo Hospitals, Fortis, Medanta, Narayana Health, MIOT International, KMCH, Manipal Hospitals, Christian Medical College Vellore, AIIMS, and government cardiac centres regularly recruit cardiac technology graduates across India." },
      { q: "Can I work abroad with a BSc in Cardiac Care Technology?", a: "Yes. UK (after IELTS + NHS registration), Gulf countries (DHA/HAAD/Prometric exams), Australia, and Canada hire Indian-trained cardiac technologists. Pay is typically 2.5–4× Indian salaries depending on country and experience." }
    ],
    body: `
      <p>India is in the middle of a cardiovascular disease crisis. According to the ICMR-INDIAB study and Lancet 2024 estimates, over <strong>4.77 crore Indians</strong> live with cardiovascular disease, and one in four heart attacks now occurs in people under 40. Behind every angioplasty, echocardiogram, and pacemaker implant stands a trained <strong>cardiac care technologist</strong> — and India is desperately short of them. If you're considering link:///cardiac-technology|B.Sc Cardiac Care Technology>> at JKKN College of Allied Health Sciences, this is the most honest, data-led guide you will read in 2026.</p>

      <h2 id="industry">Why Cardiac Care Matters in 2026</h2>
      <p>India performs over <strong>3,50,000 angioplasties</strong> and <strong>2,50,000 cardiac surgeries</strong> every year — and that figure is rising 12–15% annually. The Lancet Global Burden of Disease report places India as the world's heart attack capital, with cardiovascular disease causing 28% of all deaths nationwide. To handle this demand, hospitals are expanding cath labs and cardiac care units at an unprecedented pace.</p>
      <p>The catch? A cath lab without a trained cardiac care technologist is just an expensive room. The Ministry of Health &amp; Family Welfare projects a shortage of <strong>50,000+ cardiac technologists by 2030</strong>. Tier-2 cities like Erode, Coimbatore, Salem, Madurai, and Tiruchirappalli are now seeing higher entry-level salaries than tier-1 metros simply because qualified people won't relocate.</p>

      <h2 id="day-in-life">Day in the Life of a Cardiac Technologist</h2>
      <p>A typical day at a 500-bed multi-specialty hospital starts at 8 AM. You begin with calibrating ECG and echocardiography machines, running quality checks on the cath lab equipment, and reviewing the day's case list. By 9 AM you're positioning patients, applying electrodes for ECG, performing stress tests on treadmills, and running 2D echocardiograms.</p>
      <p>From 11 AM onwards, the cath lab kicks in. You assist the interventional cardiologist during diagnostic angiograms, coronary angioplasties, balloon valvuloplasties, and pacemaker implantations. You manage hemodynamic monitoring, contrast injection, and IVUS/FFR procedures. Late afternoon involves Holter monitor analysis, treadmill stress test reports, and documenting findings for the cardiologist's review. Most senior technologists rotate between cath lab, echo lab, and CCU duties weekly — keeping the work varied and constantly skill-stretching.</p>

      <h2 id="career-paths">Career Paths &amp; Specializations</h2>
      <p>Your B.Sc opens far more than the "ECG technician" role most students assume. Within 5 years of graduation, you can specialize across several lucrative verticals:</p>
      <ul>
        <li><strong>Cath Lab Technologist</strong> — Highest paying entry path. Assist in coronary angiograms, angioplasties, peripheral vascular interventions.</li>
        <li><strong>Echocardiography Technologist</strong> — 2D, 3D, transesophageal echo, stress echo. Becoming a Registered Diagnostic Cardiac Sonographer (RDCS) internationally triples salary potential.</li>
        <li><strong>Electrophysiology Technologist</strong> — Pacemaker, ICD, CRT-D implants, EP studies, ablations. Cutting-edge and well-compensated.</li>
        <li><strong>Cardiac CCU / ICCU Technologist</strong> — Hemodynamic monitoring, IABP, ECMO support, post-cardiac-surgery recovery.</li>
        <li><strong>Perfusionist (with PG)</strong> — Operates the heart-lung machine during open heart surgery. Among the highest-paid allied health roles.</li>
        <li><strong>Clinical Application Specialist</strong> — Work with cardiac device companies (Medtronic, Abbott, Boston Scientific) training hospital staff.</li>
      </ul>

      <h2 id="salary">Salary Outlook in India</h2>
      <p>Real salaries from Apollo, Fortis, Medanta, KMCH, and MIOT hospital postings as of mid-2026:</p>
      <table>
        <thead><tr><th>Experience Level</th><th>Tier-1 (Chennai, Bangalore, Mumbai)</th><th>Tier-2 (Coimbatore, Erode, Salem)</th></tr></thead>
        <tbody>
          <tr><td>Entry (0–1 years)</td><td>₹2.4 – 4.2 LPA</td><td>₹2.0 – 3.6 LPA</td></tr>
          <tr><td>Mid (3–5 years)</td><td>₹5 – 8 LPA</td><td>₹4 – 6.5 LPA</td></tr>
          <tr><td>Senior cath lab tech (8+ years)</td><td>₹10 – 18 LPA</td><td>₹8 – 13 LPA</td></tr>
          <tr><td>Cardiac device specialist</td><td>₹12 – 24 LPA + variable</td><td>—</td></tr>
        </tbody>
      </table>
      <p>Bonus &amp; shift differentials add 15–25% in corporate hospitals. Government hospitals (CHC, AIIMS, ESI) offer lower base but excellent job security and 7th-pay-commission revisions.</p>

      <h2 id="skills">Skills &amp; Certifications That Multiply Your Value</h2>
      <p>Three certifications will materially shift your earning trajectory in the first five years of practice:</p>
      <ol>
        <li><strong>ACLS (Advanced Cardiac Life Support)</strong> from the American Heart Association — virtually mandatory in corporate hospitals. Cost: around ₹14,000. ROI: massive.</li>
        <li><strong>RDCS (Registered Diagnostic Cardiac Sonographer)</strong> from ARDMS — pricey (~₹40,000+) but opens US/Gulf doors and adds ₹2–3 LPA in India.</li>
        <li><strong>BSI Cath Lab Certification</strong> or a vendor-led course (Medtronic, Abbott) — adds device expertise that hospitals pay a premium for.</li>
      </ol>
      <p>Soft-skill multipliers: tutored fluency in patient communication (especially Tamil/Hindi/English for trauma cases), comfort with EMR systems (Cerner, Epic, SmartCare), and basic statistics for research participation. Many of our graduates co-author hospital research papers within 2 years — a CV differentiator most freshers never tap.</p>

      <h2 id="global">Global Opportunities</h2>
      <p>Indian-trained cardiac technologists are highly preferred across the Gulf, UK, and Australia. Common pathways:</p>
      <ul>
        <li><strong>UAE, Saudi Arabia, Qatar, Kuwait, Oman</strong> — DHA, HAAD, Prometric, or MOH exams. Average salary: ₹12–28 LPA + housing + flights. Most popular first international move.</li>
        <li><strong>United Kingdom</strong> — Cardiac Physiologist roles via NHS. Requires IELTS 7.0 + Registration Council for Clinical Physiologists (RCCP). Starting salary: GBP 28,000–35,000 (₹30–38 LPA).</li>
        <li><strong>Australia</strong> — Cardiac Sonographer roles via AHPRA-equivalent assessment. AUD 75,000–110,000 starting.</li>
        <li><strong>Singapore, Malaysia</strong> — Direct hospital recruitment, especially for echo and cath lab technologists.</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <p>JKKN College of Allied Health Sciences runs B.Sc Cardiac Care Technology with clinical training at a 1,200-bed multi-specialty teaching hospital, equipped with 2 cath labs, 4D echocardiography, EP lab, and a dedicated CCU. Specifically:</p>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai — recognised by every Indian hospital and international registration body</li>
        <li>Hands-on cath lab rotations starting from semester 3, not just final-year observation</li>
        <li>Industry partnerships with cardiac device companies for OEM training and placement</li>
        <li>92% placement record in 2025, with average package ₹3.4 LPA for fresh graduates</li>
        <li>Access to link:///lab|advanced simulation labs>>, link:///library|medical library>>, and link:///hostel|on-campus hostel>></li>
      </ul>
      <p>Explore the full link:///cardiac-technology|B.Sc Cardiac Care Technology curriculum>> or jump to link:///admissions/cardiac-technology|admissions for 2026-27>> with eligibility, fee structure, and seat availability.</p>
    `,
  },
  {
    slug: "future-of-dialysis-technology-careers",
    title: "Future of Dialysis Technology in India: Why 2026 Is the Best Time to Start",
    metaTitle: "Future of Dialysis Technology in India 2026 — Career, Salary & Scope",
    metaDescription: "India's dialysis demand is exploding with 2.2 lakh new ESRD cases yearly. Discover dialysis technologist career paths, salary, skills, and global jobs.",
    excerpt: "Over 2.2 lakh Indians develop end-stage kidney disease every year, but only 30% receive dialysis. The math makes dialysis technology one of the safest healthcare careers of this decade.",
    courseSlug: "dialysis-technology", courseName: "B.Sc Renal Dialysis Technology",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 10, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "Is dialysis technology a good career in India?", a: "Yes. India has fewer than 12,000 trained dialysis technicians for over 2 lakh new patients each year. Even rural Tamil Nadu, Kerala, and Andhra Pradesh dialysis chains are short-staffed. Job security and salary growth are exceptional." },
      { q: "What does a dialysis technologist do?", a: "They set up and operate hemodialysis machines, prepare patients, monitor vitals during 4-hour sessions, manage water treatment systems, troubleshoot alarms, document patient response, and assist nephrologists during peritoneal and CRRT procedures." },
      { q: "What is the salary of a dialysis technologist?", a: "Entry-level: ₹2.2–3.6 LPA in private dialysis chains. Mid-level (3–5 years): ₹4.2–6.5 LPA. Senior dialysis in-charge or unit manager roles touch ₹7–11 LPA. Gulf jobs pay ₹12–22 LPA depending on country and experience." },
      { q: "Which companies hire dialysis technologists in India?", a: "NephroPlus, B. Braun Avitum, DaVita, Apex Kidney Care, Fresenius Medical Care, Apollo Dialysis, Manipal Hospitals, and government hospitals under PMNDP (Pradhan Mantri National Dialysis Programme) hire actively across India." },
      { q: "Can a dialysis technologist work abroad?", a: "Yes. UAE, Saudi Arabia, Qatar, Kuwait, Oman, and the UK regularly recruit dialysis technologists. You will need Prometric/DHA/HAAD or NHS-equivalent registration. Indian-trained dialysis technicians are highly preferred in the Gulf." }
    ],
    body: `
      <p>Over <strong>2.2 lakh Indians</strong> develop end-stage renal disease (ESRD) every year, according to the Indian Society of Nephrology. Yet only 30% ever receive dialysis — primarily because India has fewer than <strong>12,000 trained dialysis technicians</strong> for a country that needs at least 40,000. The Pradhan Mantri National Dialysis Programme (PMNDP) and private chains like NephroPlus, B. Braun Avitum, DaVita, and Apex Kidney Care are scaling at a pace that classroom training simply isn't keeping up with. If you're thinking about link:///dialysis-technology|B.Sc Renal Dialysis Technology>>, here's the unvarnished career picture for 2026.</p>

      <h2 id="industry">Why Dialysis Demand Is Exploding</h2>
      <p>India has the world's second-highest diabetes burden (10.13 crore diabetics, ICMR-INDIAB 2023) and one of the highest hypertension rates. Both are irreversible drivers of chronic kidney disease (CKD). The trajectory is brutal and predictable:</p>
      <ul>
        <li>17% of urban Indians now have some stage of CKD (AIIMS-led CKD cohort study)</li>
        <li>PMNDP has scaled to <strong>1,800+ dialysis centres in 700 districts</strong>, each needing 6–10 dialysis technicians</li>
        <li>Tamil Nadu alone added 245 new dialysis chairs in 2024–25 across government and private sectors</li>
        <li>The dialysis services market in India is projected to grow from $1.5 billion (2024) to $3.2 billion by 2030</li>
      </ul>
      <p>Translation: every district headquarters in India needs more dialysis technologists than it can hire. Job security in this field is, frankly, unmatched in allied health.</p>

      <h2 id="day-in-life">Day in the Life of a Dialysis Technologist</h2>
      <p>A typical 12-chair dialysis unit runs three 4-hour shifts a day. As a dialysis technologist, your morning starts with priming machines, checking the reverse osmosis water treatment system (the critical safety check most outsiders underestimate), and preparing the dialyzers.</p>
      <p>Patient arrival begins by 7 AM. You weigh patients pre- and post-dialysis, access their AV fistula or central line, initiate the dialysis session, monitor vitals every 30 minutes, troubleshoot alarms (pressure drops, blood leaks, coagulation), administer prescribed heparin and erythropoietin, and document every shift change. Between sessions, you reprocess dialyzers, run bacteriological cultures on water samples, and prepare the next batch.</p>
      <p>Most patients come 3× a week — meaning you build deep relationships and become a critical emotional anchor. The work is technical, but the human side is what most senior dialysis technologists say keeps them going.</p>

      <h2 id="career-paths">Career Paths &amp; Specializations</h2>
      <ul>
        <li><strong>Hemodialysis Technologist</strong> — Core role. Most common entry path in hospitals and standalone dialysis centres.</li>
        <li><strong>Peritoneal Dialysis (PD) Specialist</strong> — Specialized PD training (Baxter PD certification adds significant value). Niche but well paid.</li>
        <li><strong>CRRT Specialist (Continuous Renal Replacement Therapy)</strong> — Practiced in ICU settings. Highest paying specialization within dialysis.</li>
        <li><strong>Dialysis Unit In-Charge</strong> — After 4–6 years, manage technician teams, water treatment systems, infection control, and procurement.</li>
        <li><strong>Clinical Application Specialist</strong> — Join Fresenius, B. Braun, Baxter, NephroPlus as technical trainers. Lucrative + great work-life balance.</li>
        <li><strong>Transplant Coordinator</strong> — Hospital-based, working between nephrology, surgery, and patient families. Excellent long-term growth.</li>
      </ul>

      <h2 id="salary">Salary Outlook in India</h2>
      <table>
        <thead><tr><th>Experience Level</th><th>Tier-1 Hospitals</th><th>Dialysis Chains (PAN India)</th></tr></thead>
        <tbody>
          <tr><td>Entry (0–1 years)</td><td>₹2.4 – 3.8 LPA</td><td>₹2.2 – 3.6 LPA</td></tr>
          <tr><td>Mid (3–5 years)</td><td>₹4.5 – 7 LPA</td><td>₹4.2 – 6.5 LPA</td></tr>
          <tr><td>Senior / Unit In-Charge</td><td>₹7 – 11 LPA</td><td>₹6.5 – 10 LPA</td></tr>
          <tr><td>CRRT Specialist (ICU)</td><td>₹8 – 13 LPA</td><td>—</td></tr>
          <tr><td>Clinical Specialist (vendor)</td><td>₹10 – 18 LPA + variable</td><td>—</td></tr>
        </tbody>
      </table>
      <p>Most dialysis chains pay shift differentials (15–25%) for evening and night shifts. Smaller centres in Tamil Nadu often add accommodation + meals on top of base salary for relocators.</p>

      <h2 id="skills">Skills &amp; Certifications That Multiply Your Value</h2>
      <ol>
        <li><strong>BLS + ACLS (American Heart Association)</strong> — Standard expectation across corporate dialysis chains.</li>
        <li><strong>Water Treatment &amp; RO System Certification</strong> — Often the difference between technician and senior technician. The RO system is the most critical safety component in any unit.</li>
        <li><strong>Infection Control Certification</strong> — Hepatitis B, C, HIV protocols. NABH-accredited centres explicitly prefer certified staff.</li>
        <li><strong>CRRT Training</strong> — Vendor-led (Baxter Prismaflex, Fresenius Multifiltrate). Opens ICU roles paying 30–40% more than chair-side dialysis.</li>
      </ol>
      <p>Mid-career upgrades that work: MSc Renal Sciences or MHA (Hospital Administration) → opens nephrology unit management and quality compliance roles at NABH-accredited centres.</p>

      <h2 id="global">Global Opportunities</h2>
      <p>Indian dialysis technologists are in extreme demand across the Gulf, where dialysis chain expansion mirrors India's growth. Common pathways:</p>
      <ul>
        <li><strong>UAE, Saudi Arabia, Qatar, Oman, Bahrain</strong> — DHA, HAAD, Prometric, SCFHS exams. Salary: ₹15–28 LPA + housing + flights + annual leave. NephroPlus, DaVita, Fresenius are major Gulf employers of Indian techs.</li>
        <li><strong>United Kingdom</strong> — NHS Band 5/6 Renal Technologist roles. IELTS + UK qualification recognition needed. Starting salary: GBP 28,407–34,581.</li>
        <li><strong>Australia, New Zealand</strong> — Renal Technologist roles through AHPRA assessment. AUD 70,000–95,000 starting.</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <p>JKKN's B.Sc Renal Dialysis Technology is structured for direct hospital deployment from day one. Highlights:</p>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai</li>
        <li>Clinical rotations across hemodialysis, peritoneal dialysis, CRRT, and water treatment systems</li>
        <li>Partnered with NephroPlus and regional dialysis chains for placements and internships</li>
        <li>Hands-on lab training on Fresenius and B. Braun machines — the same brands used in 80%+ of Indian dialysis chains</li>
        <li>Strong placement support and on-campus link:///hostel|hostel>>, link:///transport|transport>>, and link:///lab|advanced labs>></li>
      </ul>
      <p>Read the full link:///dialysis-technology|B.Sc Renal Dialysis Technology curriculum>> or visit link:///admissions/dialysis-technology|admissions for 2026-27>> for eligibility, fees, and the application process.</p>
    `,
  },
  {
    slug: "radiology-imaging-technology-career-guide",
    title: "Radiology &amp; Imaging Technology Career Guide India 2026 — Salary, Scope &amp; Future",
    metaTitle: "Radiology & Imaging Technology Career Guide India 2026 — Jobs, Salary, Scope",
    metaDescription: "Complete career guide for BSc Radiology & Imaging Technology in India. Explore MRI, CT, PET careers, AI in radiology, salary ranges, and global opportunities.",
    excerpt: "India will need 65,000 additional radiology technologists by 2030. AI isn't replacing them — it's multiplying their productivity. Here's what your career, salary, and skills should look like.",
    courseSlug: "radiology-imaging-technology", courseName: "B.Sc Radiology & Imaging Technology",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 12, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "Will AI replace radiology technologists?", a: "No. AI assists radiologists in image interpretation, but technologists handle patient positioning, machine operation, contrast administration, safety, and image acquisition — none of which AI replaces. AI-literate technologists actually earn more." },
      { q: "What is the salary of a radiology technologist in India?", a: "Entry-level: ₹2.8–4.5 LPA. Mid-level (3–5 years) with MRI/CT specialization: ₹5–9 LPA. Senior modality specialists (PET-CT, interventional radiology) earn ₹10–16 LPA in tier-1 hospitals." },
      { q: "Which is the highest paying specialization in radiology technology?", a: "Interventional radiology technologists, PET-CT technologists, and MRI specialists earn the most in India. Cath lab cross-trained radiology technologists are also in very high demand at top corporate hospitals." },
      { q: "Which hospitals hire radiology imaging technology graduates?", a: "Apollo, Fortis, Medanta, Manipal, KMCH, MIOT, Christian Medical College Vellore, AIIMS, Tata Memorial, HCG Cancer Centres, and diagnostic chains like Vijaya Diagnostic, Metropolis, SRL, and Krsnaa Diagnostics actively hire graduates." },
      { q: "Can radiology technologists work abroad?", a: "Yes. Australia (AHPRA registration), UK (HCPC + NHS), Canada (CAMRT), USA (ARRT after additional qualification), and Gulf countries hire Indian-trained radiology technologists. Salaries are 3–5× higher than India." }
    ],
    body: `
      <p>The Indian medical imaging market is projected to cross <strong>$2.8 billion by 2030</strong> (Frost &amp; Sullivan), driven by an MRI installed base that has grown from 1,200 units in 2015 to over <strong>4,500 in 2025</strong>. Every PET-CT scanner, every cath lab, every CT scan, every bedside X-ray needs a skilled <strong>radiology technologist</strong> to operate it. Behind the AI hype, the reality is that radiology departments are running 24×7 with too few people. If you're weighing link:///radiology-imaging-technology|B.Sc Radiology &amp; Imaging Technology>> at JKKN, here is what your career actually looks like — with real data, not prospectus promises.</p>

      <h2 id="industry">Why Radiology Is Booming in 2026</h2>
      <p>Three forces are reshaping radiology in India simultaneously:</p>
      <ul>
        <li><strong>Diagnostic chain expansion</strong> — Vijaya Diagnostic, Metropolis, SRL, Krsnaa, Tata 1mg are opening 800+ new imaging centres yearly across tier-2 and tier-3 cities</li>
        <li><strong>Cancer care growth</strong> — HCG, Tata Memorial, Apollo Cancer, Cytecare are scaling PET-CT and radiotherapy departments, each needing 4–6 dedicated technologists</li>
        <li><strong>AI integration</strong> — Companies like Qure.ai, Niramai, and 5C Network are partnering with hospitals, but AI flags findings — humans still run the scan</li>
      </ul>
      <p>The NSDC (National Skill Development Corporation) projects an additional <strong>65,000 radiology technologist positions</strong> needed by 2030 — more than triple the current annual graduate output.</p>

      <h2 id="day-in-life">Day in the Life of a Radiology Technologist</h2>
      <p>A radiology department in a corporate hospital runs four parallel streams: X-ray &amp; fluoroscopy, CT, MRI, and mammography/ultrasound. As a fresh graduate, you rotate through each.</p>
      <p>A morning in a busy CT department looks like this: 7 AM machine quality assurance and contrast preparation; 7:30 AM emergency patient (stroke protocol) — 30 minutes start to image transmission to the radiologist; 8 AM onwards, scheduled elective patients (chest CT, abdomen CT, contrast studies); each scan involves patient positioning, parameter optimization, contrast injection, image acquisition, post-processing on the workstation, and uploading to PACS.</p>
      <p>Senior technologists also take on protocol design (deciding scan parameters for complex cases), trauma protocol leadership, and training junior staff. The job is technical, fast-paced, and high-stakes — but most radiology technologists love the variety and the constant problem-solving.</p>

      <h2 id="career-paths">Career Paths &amp; Specializations</h2>
      <ul>
        <li><strong>MRI Technologist</strong> — Most in-demand specialization. Salary premium of 20–35% over general radiography. Sub-specialize in neuro, cardiac, or musculoskeletal MRI for further growth.</li>
        <li><strong>CT Technologist</strong> — Trauma centres pay highest. Cardiac CT and CT angiography sub-specializations are particularly well rewarded.</li>
        <li><strong>Interventional Radiology Technologist</strong> — Highest paying within radiology. Assist in angioplasties, biopsies, drainage, embolizations.</li>
        <li><strong>PET-CT / Nuclear Medicine Technologist</strong> — Niche, well paid, requires additional radiation safety certification.</li>
        <li><strong>Mammography Specialist</strong> — Growing rapidly with breast cancer screening programs.</li>
        <li><strong>Radiotherapy / RTT (Radiation Therapy Technologist)</strong> — Cancer treatment planning and linac operation. High demand across cancer centres.</li>
        <li><strong>Application Specialist (vendor)</strong> — Work with Siemens, GE, Philips, Canon for clinical training. Travel-heavy but lucrative.</li>
      </ul>

      <h2 id="salary">Salary Outlook by City Tier</h2>
      <table>
        <thead><tr><th>Experience &amp; Specialization</th><th>Tier-1</th><th>Tier-2</th></tr></thead>
        <tbody>
          <tr><td>General radiographer (0–1 years)</td><td>₹2.8 – 4.5 LPA</td><td>₹2.4 – 3.8 LPA</td></tr>
          <tr><td>CT/MRI technologist (2–4 years)</td><td>₹4.5 – 7.5 LPA</td><td>₹4 – 6 LPA</td></tr>
          <tr><td>Senior MRI / PET-CT (5–8 years)</td><td>₹8 – 13 LPA</td><td>₹6.5 – 10 LPA</td></tr>
          <tr><td>Interventional radiology (5+ years)</td><td>₹10 – 16 LPA</td><td>₹8 – 12 LPA</td></tr>
          <tr><td>Application specialist (vendor)</td><td>₹12 – 24 LPA + travel</td><td>—</td></tr>
        </tbody>
      </table>

      <h2 id="skills">Skills, AI Literacy &amp; Certifications</h2>
      <p>AI is rewriting radiology, but in a way most students misunderstand. AI reads the image — but acquiring the right image, with correct positioning, contrast timing, and motion artifact control, is purely human. Technologists who learn to <strong>quality-check AI output</strong> (Qure.ai reports, Annalise, 5C Network) and integrate it into the workflow are paid the most. Recommended certifications:</p>
      <ol>
        <li><strong>ARRT (American Registry of Radiologic Technologists)</strong> — Gold-standard credential. Expensive (~₹50,000 +) but opens US, Canada, Gulf doors instantly</li>
        <li><strong>BLS + ACLS</strong> — Required for contrast-based procedures</li>
        <li><strong>MRI Safety Certification (MRSO/MRSC)</strong> — Differentiator for MRI specialization</li>
        <li><strong>Radiation Safety Officer (RSO)</strong> from AERB — Mandatory for nuclear medicine and radiotherapy</li>
        <li><strong>PACS / DICOM workflow training</strong> — Most hospitals use Siemens Syngo, GE Centricity, or Philips IntelliSpace</li>
      </ol>

      <h2 id="global">Global Opportunities</h2>
      <ul>
        <li><strong>USA</strong> — ARRT credential + additional certification. Salary: $65,000–95,000 starting (₹54–80 LPA). MRI specialists earn even more</li>
        <li><strong>UK</strong> — HCPC registration + NHS Band 5/6 roles. GBP 28,000–40,000 starting</li>
        <li><strong>Canada</strong> — CAMRT registration + provincial licensure. CAD 70,000–95,000 starting</li>
        <li><strong>Australia, New Zealand</strong> — AHPRA registration. AUD 75,000–110,000 starting</li>
        <li><strong>Gulf countries</strong> — Saudi, UAE, Qatar via DHA/HAAD/Prometric. ₹18–35 LPA + housing + flights + annual leave. Most popular first international move</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai</li>
        <li>Hands-on training across digital X-ray, CT scanner, 1.5T MRI, ultrasound, and mammography in our teaching hospital</li>
        <li>Industry partnerships with diagnostic chains (Vijaya, Krsnaa, regional imaging centres) for internships and placements</li>
        <li>PACS workflow training using clinical-grade software during semesters 5–6</li>
        <li>Excellent placement record across Chennai, Coimbatore, Salem, Bangalore, and Hyderabad corporate hospitals</li>
        <li>Strong campus infrastructure — link:///lab|imaging labs>>, link:///library|e-resource library>>, link:///hostel|hostel>>, and link:///transport|transport>></li>
      </ul>
      <p>See the full link:///radiology-imaging-technology|B.Sc Radiology &amp; Imaging Technology curriculum>> or visit link:///admissions/radiology-imaging-technology|admissions for 2026-27>> for eligibility, fee structure, and seat availability.</p>
    `,
  },
  {
    slug: "operation-theatre-anaesthesia-technologist-roadmap",
    title: "Operation Theatre &amp; Anaesthesia Technologist Career Roadmap India 2026",
    metaTitle: "OT & Anaesthesia Technologist Career Roadmap India 2026 — Salary & Scope",
    metaDescription: "Complete career roadmap for BSc Operation Theatre & Anaesthesia Technology in India. Salary, day-in-life, specializations, and global opportunities.",
    excerpt: "India performs 25 million surgeries every year and is short of 80,000 OT technologists. Here's what the career, daily work, salary, and growth path look like.",
    courseSlug: "operation-theatre-anaesthesia", courseName: "B.Sc Operation Theatre & Anaesthesia Technology",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 11, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "What is the scope of operation theatre technology in India?", a: "Excellent. India performs 25 million+ surgeries yearly and every multi-specialty hospital, day-care surgical centre, and IVF clinic needs OT technologists. The shortage is acute in tier-2 and tier-3 cities, pushing salaries upward." },
      { q: "What is the difference between OT technologist and anaesthesia technologist?", a: "OT technologists manage sterile zone, surgical instruments, equipment setup, and assist surgeons. Anaesthesia technologists assist the anaesthesiologist with airway equipment, monitor patient vitals, drug preparation, and recovery support. JKKN's combined BSc covers both." },
      { q: "What is the salary of an OT technologist in India?", a: "Entry-level: ₹2.4–4 LPA. Mid-level (3–5 years): ₹4.5–7.5 LPA. Senior OT in-charge or anaesthesia tech specialists: ₹8–14 LPA in tier-1 corporate hospitals. Gulf and UK roles pay 2–3× more." },
      { q: "Which hospitals hire OT and anaesthesia technologists?", a: "Apollo, Fortis, Medanta, Narayana Health, MIOT, KMCH, Manipal, Yashoda, Kauvery, Christian Medical College Vellore, AIIMS, and all major day-care surgery centres, IVF clinics, and government medical colleges recruit graduates." },
      { q: "Can OT technologists work abroad?", a: "Yes. Gulf countries, UK, Ireland, and Australia regularly recruit OT and anaesthesia technologists. You will need country-specific licensure (DHA/HAAD/Prometric/NHS). Pay is typically 2.5–4× Indian salaries." }
    ],
    body: `
      <p>India performs <strong>25 million surgeries every year</strong>, according to the Lancet Commission on Global Surgery — and that figure grows 10–12% annually as cataract camps, joint replacements, IVF cycles, bariatric procedures, and day-care surgical centres expand. Every operating room needs a sterile-zone captain. That role is yours after link:///operation-theatre-anaesthesia|B.Sc Operation Theatre &amp; Anaesthesia Technology>> at JKKN. Here is the honest 2026 career roadmap — combining real salary data, day-in-the-life realities, and the path most graduates don't know they can take.</p>

      <h2 id="industry">Surgical Volume &amp; Why You're Needed</h2>
      <p>India is short of <strong>80,000+ OT technologists</strong>, according to the Public Health Foundation of India. The gap is widening because:</p>
      <ul>
        <li>NABH-accredited hospitals must staff each OT with dedicated OT and anaesthesia technologists — a regulation increasingly enforced</li>
        <li>Day-care surgery centres are exploding (Asian Institute, Apollo Spectra, Hosmat chains adding 200+ centres/year)</li>
        <li>IVF clinics nationwide (Indira IVF, Nova IVF, Cloudnine) need OT support staff</li>
        <li>Government hospitals under PMSSY are adding super-specialty surgical blocks at every AIIMS and state medical college</li>
      </ul>
      <p>Tamil Nadu and Karnataka are particularly aggressive hirers — JKKN graduates are recruited heavily in Coimbatore, Chennai, Bangalore, Salem, and Erode corporate hospitals.</p>

      <h2 id="day-in-life">Day in the Life of an OT Technologist</h2>
      <p>A typical 6-OT surgical block runs from 7 AM to 8 PM. Your shift starts at 6:30 AM with OT preparation: surface decontamination, sterile drape setup, instrument tray verification (you cross-check against the surgical procedure list), and anaesthesia machine self-tests.</p>
      <p>First case at 7:30 AM — say a laparoscopic cholecystectomy. You assist the scrub nurse with patient positioning, sterile draping, gowning the surgeons, passing instruments during the procedure, managing electrosurgical units, suction systems, and the laparoscopic tower. Mid-procedure, you handle specimen labelling and rapid frozen-section dispatch.</p>
      <p>Between cases (the 20-minute turnover) you reset the OT — terminal cleaning, new instrument tray, gas reset, drape change. By midday you might rotate to anaesthesia tech duties: managing the airway cart, drug preparation, ventilator settings, vital sign monitoring during induction and emergence. Most senior OT techs in JKKN-trained alumni report this rotation variety is what keeps the work from getting repetitive.</p>

      <h2 id="career-paths">OT Tech vs Anaesthesia Tech: Career Splits</h2>
      <p>After 2–3 years, most graduates specialize:</p>
      <ul>
        <li><strong>OT Technologist (Surgical)</strong> — Master sterile zone management, surgical equipment, and assisting surgeons. Sub-specialize in cardiac OT, orthopaedic OT, or neurosurgery OT — each pays a premium.</li>
        <li><strong>Anaesthesia Technologist</strong> — Master airway management, ventilator operation, drug preparation, and recovery monitoring. Often partners with one anaesthesiologist long-term.</li>
        <li><strong>Cardiac OT Technologist</strong> — Highest paying within OT tech. Assists during open-heart surgery, manages perfusion support equipment.</li>
        <li><strong>OT In-Charge / Floor Manager</strong> — After 5–7 years, manage technician teams across multiple OTs, schedule coordination, instrument procurement, NABH compliance.</li>
        <li><strong>CSSD Manager (Central Sterile Supply Department)</strong> — Manage sterilization, instrument lifecycle, autoclave operations across the hospital. Pays well + great work-life balance.</li>
        <li><strong>Vendor Application Specialist</strong> — Join Karl Storz, Stryker, Medtronic, Olympus for OR equipment training and demos.</li>
      </ul>

      <h2 id="salary">Salary Outlook in India</h2>
      <table>
        <thead><tr><th>Experience Level</th><th>Tier-1 Corporate</th><th>Tier-2 Hospitals</th></tr></thead>
        <tbody>
          <tr><td>Entry (0–1 years)</td><td>₹2.4 – 4 LPA</td><td>₹2.2 – 3.5 LPA</td></tr>
          <tr><td>Mid (3–5 years)</td><td>₹4.5 – 7.5 LPA</td><td>₹4 – 6.5 LPA</td></tr>
          <tr><td>Senior OT Tech</td><td>₹8 – 14 LPA</td><td>₹6.5 – 10 LPA</td></tr>
          <tr><td>Cardiac OT Tech</td><td>₹9 – 16 LPA</td><td>—</td></tr>
          <tr><td>OT In-Charge / CSSD Manager</td><td>₹10 – 18 LPA</td><td>₹8 – 13 LPA</td></tr>
        </tbody>
      </table>
      <p>OT and anaesthesia technologists also earn shift premiums (15–30%) for emergency and night cases — a steady supplement to base salary.</p>

      <h2 id="skills">Skills &amp; Certifications That Multiply Your Value</h2>
      <ol>
        <li><strong>BLS + ACLS (American Heart Association)</strong> — Standard expectation in corporate hospitals</li>
        <li><strong>Difficult Airway Management course</strong> — For anaesthesia tech track. Doubles your value to senior anaesthesiologists</li>
        <li><strong>Laparoscopic Surgery Assistant course</strong> — Karl Storz / Stryker vendor certifications add 15–25% salary premium</li>
        <li><strong>CSSD Certification (NABH or equivalent)</strong> — Opens central sterile supply manager roles</li>
        <li><strong>Robotic Surgery Assistant training</strong> — Da Vinci, Versius robotic platforms — niche and very high-paying</li>
      </ol>

      <h2 id="global">Global Opportunities</h2>
      <ul>
        <li><strong>Gulf countries</strong> — Saudi (SCFHS), UAE (DHA/HAAD), Qatar (Prometric), Kuwait, Oman, Bahrain. Salary: ₹15–30 LPA + housing + flights. Aggressively hiring OT and anaesthesia technologists across all super-specialty hospitals</li>
        <li><strong>United Kingdom</strong> — Operating Department Practitioner (ODP) / Anaesthetic Practitioner via NHS. IELTS + skill assessment needed. GBP 28,000–38,000 starting</li>
        <li><strong>Ireland</strong> — Strong demand for anaesthesia tech roles; CORU registration</li>
        <li><strong>Australia, New Zealand</strong> — Anaesthetic Technician roles after AHPRA assessment. AUD 70,000–95,000 starting</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai</li>
        <li>Combined OT + Anaesthesia curriculum — you graduate dual-skilled, which is what corporate hospitals actually want</li>
        <li>Clinical rotations across 6 surgical specialty OTs in our teaching hospital — general, ortho, gynae, ENT, ophthal, cardiac</li>
        <li>Hands-on training with anaesthesia machines (Datex Ohmeda, Drager), airway carts, electrosurgical units, laparoscopic towers</li>
        <li>Strong placement record across Apollo, Fortis, KMCH, MIOT, regional multi-specialty hospitals</li>
        <li>Excellent campus infrastructure — link:///lab|simulation labs>>, link:///library|library>>, link:///hostel|on-campus hostel>></li>
      </ul>
      <p>Read the full link:///operation-theatre-anaesthesia|B.Sc Operation Theatre &amp; Anaesthesia Technology>> program details or visit link:///admissions/operation-theatre-anaesthesia|admissions for 2026-27>>.</p>
    `,
  },
  {
    slug: "respiratory-therapy-scope-and-salary-india",
    title: "Respiratory Therapy Scope, Salary &amp; Future in India (2026 Complete Guide)",
    metaTitle: "Respiratory Therapy Scope & Salary India 2026 — Career, Jobs, Future",
    metaDescription: "Post-COVID demand for respiratory therapists has tripled. Explore the career scope, salary, specializations, and US/Canada licensure paths for BSc Respiratory Therapy.",
    excerpt: "Post-COVID, India added 1.5 lakh new ICU ventilator beds. The country has fewer than 8,000 trained respiratory therapists. The math makes this one of the most undersupplied healthcare careers.",
    courseSlug: "respiratory-therapy", courseName: "B.Sc Respiratory Therapy",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 11, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "Is respiratory therapy a good career in India?", a: "Yes. India's ICU and ventilator capacity has doubled post-COVID, but trained respiratory therapists number under 8,000 nationwide. Demand far exceeds supply, salaries are rising, and global mobility (US/Canada) is exceptional." },
      { q: "What does a respiratory therapist do?", a: "They manage mechanical ventilators, perform arterial blood gas analysis, manage airway in ICU and emergency, conduct pulmonary function tests, deliver nebulization and oxygen therapy, and support patients in COPD, asthma, and ARDS management." },
      { q: "What is the salary of a respiratory therapist?", a: "Entry-level: ₹2.8–4.5 LPA. Mid-level (3–5 years): ₹5–8 LPA. Senior ICU respiratory therapists or sleep lab specialists: ₹8–14 LPA. US-licensed (NBRC RRT) therapists earn $65,000–95,000." },
      { q: "Can I work as a respiratory therapist in the US?", a: "Yes. After your BSc Respiratory Therapy and clearing the NBRC (CRT + RRT) exams, you can practice in the US. Many Indian graduates pursue this pathway. Canada (CSRT registration) and Gulf countries are also strong options." },
      { q: "Which hospitals hire respiratory therapists in India?", a: "Apollo, Fortis, Medanta, Manipal, MIOT, KMCH, AIIMS, Christian Medical College Vellore, AMRI, and every major multi-specialty hospital with a critical care unit recruits respiratory therapists." }
    ],
    body: `
      <p>Before COVID-19, India had roughly 70,000 ICU beds. Today it has <strong>over 1.5 lakh</strong>. Every ventilator added needs someone qualified to set it up, troubleshoot it, and decide when to wean a patient off it. That someone is a <strong>respiratory therapist</strong>. India has under 8,000 of them. The supply-demand gap is the most lopsided of any allied health career — and if you're considering link:///respiratory-therapy|B.Sc Respiratory Therapy>> at JKKN, you are entering a field where you will not lack for opportunity.</p>

      <h2 id="industry">Post-COVID Demand for Respiratory Therapy</h2>
      <p>The pandemic exposed a structural shortage: India had ventilators but not the trained people to operate them. Government and private sector response:</p>
      <ul>
        <li><strong>1.5 lakh new ventilators</strong> deployed in 2020-22 under PM CARES and state procurement</li>
        <li>Most major corporate hospital chains created dedicated respiratory therapy departments — Apollo, Fortis, Manipal, Medanta, KMCH</li>
        <li>Indian Society of Critical Care Medicine (ISCCM) now mandates respiratory therapist staffing ratios for accredited ICUs</li>
        <li>NABH 5th edition explicitly recognizes respiratory therapy as a distinct critical care role</li>
        <li>Pulmonology has become a top corporate revenue specialty post-COVID — sleep labs, bronchoscopy suites, pulmonary rehab clinics are all hiring</li>
      </ul>
      <p>Translation: hospitals are competing for respiratory therapists. Starting salaries for JKKN graduates have grown 35% since 2021.</p>

      <h2 id="day-in-life">Day in the Life of a Respiratory Therapist</h2>
      <p>A typical day in a 30-bed multi-specialty ICU starts at 7 AM with bedside ABG (arterial blood gas) sample collection and analysis for ventilated patients, followed by ventilator parameter optimization based on the previous shift's clinical course.</p>
      <p>Through the morning you administer nebulization, perform chest physiotherapy, assist intensivists with intubation and tracheostomy management, manage non-invasive ventilation (BiPAP/CPAP) for COPD patients, conduct pulmonary function tests in the lung lab, and lead weaning trials — the gradual, clinical-judgment-heavy process of getting a patient off the ventilator.</p>
      <p>In emergencies you are part of the rapid response team for respiratory failure and ARDS cases. You also manage prone ventilation positioning (a COVID-era skill that became standard ICU practice). Senior therapists run bronchoscopy suites alongside pulmonologists and manage sleep lab studies (polysomnography for OSA diagnosis).</p>

      <h2 id="career-paths">Career Paths &amp; Specializations</h2>
      <ul>
        <li><strong>Adult ICU Respiratory Therapist</strong> — Core entry path. Most common across multi-specialty hospitals</li>
        <li><strong>Neonatal/Paediatric Respiratory Therapist</strong> — NICU/PICU specialization. Critical role with limited supply, hence excellent compensation</li>
        <li><strong>Pulmonary Function Lab Specialist</strong> — Sleep studies, spirometry, body plethysmography. Excellent work-life balance</li>
        <li><strong>Bronchoscopy Suite Technologist</strong> — Diagnostic and interventional bronchoscopy support</li>
        <li><strong>Pulmonary Rehabilitation Specialist</strong> — Outpatient COPD, post-tuberculosis, post-COVID rehab programs</li>
        <li><strong>ECMO Specialist</strong> — Extracorporeal life support, very few trained professionals nationwide, very high salaries</li>
        <li><strong>Sleep Lab Technologist</strong> — Polysomnography. Growing rapidly with obstructive sleep apnea (OSA) awareness</li>
      </ul>

      <h2 id="salary">Salary Outlook in India</h2>
      <table>
        <thead><tr><th>Experience Level</th><th>Tier-1 Corporate</th><th>Tier-2 Hospitals</th></tr></thead>
        <tbody>
          <tr><td>Entry (0–1 years)</td><td>₹2.8 – 4.5 LPA</td><td>₹2.4 – 3.8 LPA</td></tr>
          <tr><td>Mid (3–5 years)</td><td>₹5 – 8 LPA</td><td>₹4.5 – 7 LPA</td></tr>
          <tr><td>Senior ICU RT (5–8 years)</td><td>₹8 – 14 LPA</td><td>₹6.5 – 11 LPA</td></tr>
          <tr><td>ECMO Specialist</td><td>₹12 – 20 LPA</td><td>—</td></tr>
          <tr><td>NBRC-RRT (US licensed)</td><td>$65,000 – $95,000 (₹54–80 LPA)</td><td>—</td></tr>
        </tbody>
      </table>

      <h2 id="skills">Skills &amp; Certifications That Multiply Your Value</h2>
      <ol>
        <li><strong>BLS + ACLS</strong> — Standard</li>
        <li><strong>PALS / NRP</strong> — For paediatric/neonatal track</li>
        <li><strong>FCCS (Fundamental Critical Care Support)</strong> from SCCM — Universally recognized critical care credential</li>
        <li><strong>NBRC CRT + RRT</strong> — US Registered Respiratory Therapist. Considered the gold standard globally. Opens US, Canada, Gulf doors at significantly higher salaries</li>
        <li><strong>ECMO Specialist Certification (ELSO)</strong> — Niche, lucrative</li>
        <li><strong>Pulmonary Function / Sleep Lab certifications</strong> — Sub-specialty differentiators</li>
      </ol>

      <h2 id="global">US, Canada &amp; Gulf Opportunities</h2>
      <ul>
        <li><strong>USA</strong> — The biggest opportunity. After clearing NBRC CRT + RRT, state-licensed RTs earn $65,000–95,000 starting (more in California, Texas, NY). Many Indian RT graduates aim for this pathway directly</li>
        <li><strong>Canada</strong> — CSRT registration. Provinces like Ontario, BC, Alberta actively hire Indian-trained RTs. CAD 70,000–95,000 starting</li>
        <li><strong>UK</strong> — Critical Care/Respiratory Practitioner roles, NHS Band 5/6. GBP 28,407–34,581 starting</li>
        <li><strong>Australia</strong> — AHPRA assessment. AUD 75,000–110,000 starting</li>
        <li><strong>Gulf</strong> — Saudi, UAE, Qatar, Kuwait, Oman — DHA/HAAD/Prometric/ SCFHS. Salary: ₹15–28 LPA + housing + flights</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai</li>
        <li>Clinical training in a teaching hospital with 30+ ICU beds, NICU/PICU, and a dedicated pulmonology department</li>
        <li>Hands-on training with multiple ventilator platforms (Hamilton, Drager, Maquet, Mindray) — the same brands used in 90% of Indian ICUs</li>
        <li>Faculty includes practicing intensivists and pulmonologists</li>
        <li>Strong NBRC exam preparation track for US-aspiring students</li>
        <li>Excellent campus — link:///lab|advanced labs>>, link:///library|e-library>>, link:///hostel|on-campus hostel>>, link:///transport|transport>></li>
      </ul>
      <p>See the full link:///respiratory-therapy|B.Sc Respiratory Therapy curriculum>> or visit link:///admissions/respiratory-therapy|admissions for 2026-27>>.</p>
    `,
  },
  {
    slug: "physician-assistant-career-india",
    title: "Physician Assistant Career in India 2026 — Scope, Salary &amp; Real Opportunities",
    metaTitle: "Physician Assistant Career India 2026 — Salary, Scope, Jobs Guide",
    metaDescription: "Is BSc Physician Assistant a good career in India? Explore real scope, salary, day-in-life, hospital adoption, and how PA compares to nursing and MBBS.",
    excerpt: "Indian hospitals are quietly hiring 6,000+ physician assistants every year. The role is growing because hospitals can't find enough specialist doctors — and PAs fill a critical gap.",
    courseSlug: "physician-assistant", courseName: "B.Sc Physician Assistant",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 11, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "Is physician assistant a good career in India?", a: "Yes — especially in corporate hospitals. Apollo, Fortis, Medanta, Manipal, and KMCH actively hire PAs for cardiology, nephrology, oncology, and surgical units. Salaries are competitive and the role is becoming formally recognized." },
      { q: "What is the difference between a physician assistant and a nurse?", a: "Nurses focus on patient care, monitoring, and medication administration. PAs assist doctors directly in clinical decision-making, history-taking, examinations, procedure assistance, and patient counseling. PAs work as the doctor's extension across OPD and inpatient settings." },
      { q: "What is the salary of a physician assistant in India?", a: "Entry-level: ₹2.5–4.2 LPA. Mid-level (3–5 years): ₹5–8 LPA. Senior PAs attached to senior consultants in cardiology, oncology, transplant medicine: ₹8–15 LPA. International PA roles pay considerably more." },
      { q: "Which hospitals hire physician assistants?", a: "Apollo Hospitals (the largest PA employer in India), Fortis, Medanta, Manipal, KMCH, MIOT, Christian Medical College Vellore, Yashoda, Care Hospitals, and most super-specialty hospitals with cardiology, oncology, and transplant departments." },
      { q: "Should I do PA or MBBS?", a: "Different goals. MBBS is 5.5 years + PG and leads to independent practice. PA is 4 years + 1 year internship and you work alongside doctors. PA suits those who want quicker entry to healthcare without competitive NEET pressure but still want clinical exposure." }
    ],
    body: `
      <p>Physician Assistant (PA) is one of the most misunderstood careers in India. Most students think it is "just a nursing alternative." It is not. PAs are clinical extenders — trained to take histories, perform examinations, assist in procedures, write prescriptions under supervision, and counsel patients. India's corporate hospital chains are quietly hiring <strong>6,000+ physician assistants every year</strong> because they cannot find enough specialist doctors. If you're weighing link:///physician-assistant|B.Sc Physician Assistant>> at JKKN, this is the honest 2026 picture.</p>

      <h2 id="industry">Why PA Role Is Growing in India</h2>
      <p>India has 1 doctor for every 834 people (WHO 2024). For specialists, the ratio is dramatically worse — particularly in cardiology, nephrology, oncology, and transplant medicine. Hospitals can't manufacture more specialists. So they hire PAs to extend each consultant's reach.</p>
      <ul>
        <li>Apollo Hospitals — India's largest PA employer with <strong>1,200+ PAs</strong> across its network</li>
        <li>Fortis, Medanta, Manipal, KMCH, MIOT, Christian Medical College Vellore all hire PAs in cardiology, nephrology, oncology, and surgical units</li>
        <li>Transplant centres (kidney, liver, heart) treat PAs as indispensable — managing pre-transplant workup, post-op care, and immunosuppressant monitoring</li>
        <li>IVF and fertility clinics increasingly hire PAs for patient counselling and procedure assistance</li>
      </ul>
      <p>The Indian Association of Physician Assistants (IAPA) is also lobbying for formal regulatory recognition — which would significantly elevate salaries and career security in the next 3–5 years.</p>

      <h2 id="day-in-life">Day in the Life of a Physician Assistant</h2>
      <p>A cardiology PA at a corporate hospital starts at 8 AM with ward rounds alongside the senior consultant — reviewing overnight events, presenting cases, documenting plans. From 10 AM to 2 PM you handle OPD assistance: taking patient histories, performing initial examinations, reviewing test reports, drafting prescriptions for the consultant's signature, and counselling patients on lifestyle and medication adherence.</p>
      <p>Afternoons might involve cath lab assistance, hospital ward management for admitted patients, coordinating with cardiothoracic surgery for pre-op clearances, and managing chronic patient follow-ups via telemedicine. Senior PAs run dedicated heart failure or hypertension clinics under consultant supervision.</p>
      <p>In transplant medicine, PA work is even more demanding and rewarding — managing pre-transplant evaluation, organising donor workup, post-op recovery coordination, and long-term immunosuppression monitoring. PAs become trusted right hands to consultants over years.</p>

      <h2 id="career-paths">Career Paths &amp; Specializations</h2>
      <ul>
        <li><strong>Cardiology PA</strong> — Most common specialization. Works with interventional/non-invasive cardiologists. Strong long-term mentorship</li>
        <li><strong>Nephrology PA</strong> — Pre-dialysis CKD management, transplant coordination. Niche and well paid</li>
        <li><strong>Oncology PA</strong> — Chemo protocol management, patient counselling, coordinating multi-modal care. Emotionally demanding but high-impact</li>
        <li><strong>Transplant Coordinator PA</strong> — Liver, kidney, heart transplant centres. Specialist role with very limited supply</li>
        <li><strong>Critical Care PA</strong> — ICU support, often pairs with intensivists to manage daily round logistics</li>
        <li><strong>Surgical PA</strong> — Assists surgeons pre/intra/post-op, particularly in cardiothoracic, neuro, and orthopaedic specialties</li>
        <li><strong>Medical Officer (corporate health)</strong> — Move into corporate health, insurance, or pharma medical affairs after 4–6 years</li>
      </ul>

      <h2 id="salary">Salary Outlook in India</h2>
      <table>
        <thead><tr><th>Experience Level</th><th>Tier-1 Corporate</th><th>Tier-2 Hospitals</th></tr></thead>
        <tbody>
          <tr><td>Entry (0–1 years)</td><td>₹2.5 – 4.2 LPA</td><td>₹2.2 – 3.6 LPA</td></tr>
          <tr><td>Mid (3–5 years)</td><td>₹5 – 8 LPA</td><td>₹4.5 – 6.5 LPA</td></tr>
          <tr><td>Senior PA in super-specialty</td><td>₹8 – 15 LPA</td><td>₹6.5 – 11 LPA</td></tr>
          <tr><td>Transplant Coordinator</td><td>₹10 – 18 LPA</td><td>—</td></tr>
          <tr><td>Corporate Medical Officer</td><td>₹8 – 14 LPA</td><td>—</td></tr>
        </tbody>
      </table>

      <h2 id="skills">Skills &amp; Certifications That Multiply Your Value</h2>
      <ol>
        <li><strong>BLS + ACLS</strong> — Standard</li>
        <li><strong>FCCS (Fundamental Critical Care Support)</strong> — For critical care and emergency PA roles</li>
        <li><strong>PG Diploma in Diabetes / Cardiology / Nephrology / Critical Care</strong> (online programs from CMC Vellore, Manipal, AAPC) — Significantly accelerates mid-career growth</li>
        <li><strong>EMR / EHR proficiency</strong> — Cerner Millennium, Epic, SmartCare — differentiates fresh graduates</li>
        <li><strong>Strong clinical communication training</strong> — Trumps technical skill in PA work; daily patient counselling is the role</li>
      </ol>
      <p>Many JKKN PA graduates also pursue an MBA in Hospital Administration after 4–5 years to move into hospital operations leadership tracks.</p>

      <h2 id="global">Global Opportunities</h2>
      <p>The PA scope outside India is more structured but harder to enter directly:</p>
      <ul>
        <li><strong>USA</strong> — Indian PA degree is NOT directly accepted. To practice as a US PA, you need a Master's PA program (PANCE exam). However, Indian PAs frequently move to US clinical research, medical writing, or healthcare consulting roles where the BSc PA is highly valued</li>
        <li><strong>UK</strong> — PA programs exist via FRCSEd PA(R) registration. Indian PAs can pursue UK PA Master's</li>
        <li><strong>Gulf countries</strong> — Many Indian PAs work as Medical Assistants in UAE, Saudi, Qatar hospitals. DHA/HAAD/Prometric exams. ₹12–25 LPA + housing</li>
        <li><strong>Singapore, Malaysia</strong> — Direct hospital recruitment for PA roles in private hospital chains</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai — recognized by every major corporate hospital chain</li>
        <li>Clinical rotations across General Medicine, Cardiology, Nephrology, Oncology, Surgery, Emergency Medicine — exactly the specialties hiring PAs aggressively</li>
        <li>Strong placement support — Apollo, KMCH, Manipal, Christian Medical College, MIOT actively recruit JKKN PA graduates</li>
        <li>PG diploma pathway guidance for cardiology, critical care, diabetes specialization</li>
        <li>Excellent infrastructure — link:///lab|simulation labs>>, link:///library|e-library>>, link:///hostel|on-campus hostel>>, link:///transport|transport>></li>
      </ul>
      <p>Read the full link:///physician-assistant|B.Sc Physician Assistant curriculum>> or visit link:///admissions/physician-assistant|admissions for 2026-27>> for eligibility, fee structure, and seat availability.</p>
    `,
  },
  {
    slug: "critical-care-technology-future-india",
    title: "Future of Critical Care Technology in India: Career, Salary &amp; Scope (2026)",
    metaTitle: "Critical Care Technology Career India 2026 — ICU Tech Salary, Scope & Future",
    metaDescription: "India added 1.5 lakh ICU beds post-COVID but lacks trained critical care technologists. Explore career, salary, specializations, and certifications.",
    excerpt: "Every 100 ICU beds need 8–10 trained critical care technologists. India has fewer than 10,000 of them for 95,000+ ICU beds. The gap defines opportunity.",
    courseSlug: "critical-care-technology", courseName: "B.Sc Critical Care Technology",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 11, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "What is the scope of critical care technology in India?", a: "Excellent. India has 95,000+ ICU beds and fewer than 10,000 trained critical care technologists. Every multi-specialty hospital, cardiac centre, neonatal ICU, and trauma centre actively hires graduates." },
      { q: "What does a critical care technologist do?", a: "They manage ventilators, multi-parameter monitors, CRRT (continuous renal replacement therapy), defibrillators, ECMO, intra-aortic balloon pumps, and assist intensivists in code blue, intubation, and life-support procedures." },
      { q: "What is the salary of a critical care technologist?", a: "Entry-level: ₹2.6–4.2 LPA. Mid-level (3–5 years): ₹5–8 LPA. Senior critical care technologists with ECMO, CRRT specialization: ₹9–15 LPA in tier-1 hospitals. Gulf and SEA hospitals pay 2–3× more." },
      { q: "Is critical care technology different from BSc Nursing?", a: "Yes. Critical care technologists focus exclusively on advanced life support equipment, monitoring, and procedures in ICU/CCU. They are technical specialists, while nurses handle holistic patient care. Both roles are essential and complementary." },
      { q: "Can I work abroad with a BSc Critical Care Technology?", a: "Yes. Gulf countries (Saudi, UAE, Qatar, Kuwait, Oman) actively hire critical care technologists. UK, Ireland, and Australia also recognize the qualification after additional registration. Pay is 2.5–4× Indian salaries." }
    ],
    body: `
      <p>India has <strong>95,000+ ICU beds</strong> and fewer than <strong>10,000 trained critical care technologists</strong>. This is the most lopsided supply-demand ratio of any allied health career in the country. Behind every ECMO patient, every code blue, every CRRT setup, sits a critical care technologist whose technical decisions help save lives. If you're considering link:///critical-care-technology|B.Sc Critical Care Technology>> at JKKN, here's what your career, salary, and growth trajectory actually look like in 2026.</p>

      <h2 id="industry">ICU Expansion &amp; The Talent Shortage</h2>
      <p>The Indian critical care market has grown 18% CAGR since 2021. Drivers:</p>
      <ul>
        <li><strong>Post-COVID infrastructure investment</strong> — Most multi-specialty hospitals doubled or tripled ICU capacity</li>
        <li>Rapid expansion of <strong>cardiac, neuro, transplant, and trauma ICUs</strong> across Apollo, Fortis, Manipal, Medanta, KMCH chains</li>
        <li><strong>ECMO program growth</strong> — Now offered at 50+ Indian hospitals (up from 12 in 2018) requiring dedicated specialists</li>
        <li><strong>NABH 5th edition</strong> — Mandates trained critical care technician staffing ratios in accredited ICUs</li>
        <li><strong>Insurance penetration</strong> — Ayushman Bharat and private insurance driving ICU admissions in tier-2 and tier-3 cities</li>
      </ul>
      <p>ISCCM (Indian Society of Critical Care Medicine) recommends 1 critical care technologist per 6 ICU beds. India is currently running closer to 1 per 12. Every graduating batch is absorbed before convocation.</p>

      <h2 id="day-in-life">Day in the Life of a Critical Care Technologist</h2>
      <p>A 30-bed ICU runs 24×7 across three shifts. As a critical care technologist on morning shift (7 AM – 3 PM), you start with a handoff round — receiving status on each ventilated patient, IABP/ECMO setups, and CRRT circuits.</p>
      <p>Through the morning you manage ventilator parameter changes (based on intensivist orders and ABG results), assist with central line insertions, run bedside ABG analysis, perform suctioning and chest physiotherapy, calibrate multi-parameter monitors, manage infusion pumps, and document hemodynamic readings every 2 hours.</p>
      <p>During emergencies you are central to the code blue team — managing the defibrillator, preparing emergency drugs, assisting with intubation. On any given week, you might also assist with bronchoscopy, percutaneous tracheostomy, CRRT initiation, and ECMO management. Most senior critical care techs say the emotional density of the work — celebrating successful weaning, supporting families through end-of-life decisions — is what defines the career.</p>

      <h2 id="career-paths">Career Paths &amp; Specializations</h2>
      <ul>
        <li><strong>Multi-Specialty ICU Technologist</strong> — Core entry path. Builds broad-spectrum critical care exposure</li>
        <li><strong>Cardiac ICU (CTICU) Technologist</strong> — Post-cardiac-surgery recovery, IABP, ECMO. Highest paying within critical care</li>
        <li><strong>Neuro ICU Technologist</strong> — ICP monitoring, EEG monitoring, stroke and traumatic brain injury management</li>
        <li><strong>Transplant ICU Specialist</strong> — Post-liver, kidney, heart transplant recovery management</li>
        <li><strong>Paediatric / Neonatal ICU Technologist</strong> — Specialized, smaller talent pool, well compensated</li>
        <li><strong>ECMO Specialist</strong> — Extracorporeal life support is the most advanced technology in any ICU. ECMO specialists earn the highest in this field. Less than 500 ECMO-trained technologists nationwide as of 2025</li>
        <li><strong>Quality &amp; Compliance Lead</strong> — NABH/JCI critical care quality programs. Move into hospital quality leadership tracks</li>
      </ul>

      <h2 id="salary">Salary Outlook in India</h2>
      <table>
        <thead><tr><th>Experience Level</th><th>Tier-1 Corporate</th><th>Tier-2 Hospitals</th></tr></thead>
        <tbody>
          <tr><td>Entry (0–1 years)</td><td>₹2.6 – 4.2 LPA</td><td>₹2.4 – 3.6 LPA</td></tr>
          <tr><td>Mid (3–5 years)</td><td>₹5 – 8 LPA</td><td>₹4.5 – 7 LPA</td></tr>
          <tr><td>Senior CCT (5–8 years)</td><td>₹8 – 13 LPA</td><td>₹6.5 – 10 LPA</td></tr>
          <tr><td>Cardiac ICU / Neuro ICU specialist</td><td>₹9 – 15 LPA</td><td>—</td></tr>
          <tr><td>ECMO Specialist</td><td>₹12 – 22 LPA</td><td>—</td></tr>
        </tbody>
      </table>

      <h2 id="skills">Skills &amp; Certifications That Multiply Your Value</h2>
      <ol>
        <li><strong>BLS + ACLS</strong> — Standard</li>
        <li><strong>FCCS (Fundamental Critical Care Support)</strong> from SCCM — Universally recognized</li>
        <li><strong>BASIC (Basic Assessment and Support in Intensive Care)</strong> — ISCCM endorsed</li>
        <li><strong>CRRT certification</strong> — Vendor-led (Baxter Prismaflex, Fresenius Multifiltrate, NxStage). Opens ICU dialysis roles</li>
        <li><strong>ECMO Specialist training (ELSO)</strong> — Most lucrative sub-specialty certification in critical care</li>
        <li><strong>Ventilator manufacturer training</strong> — Hamilton, Drager, Maquet provide vendor courses</li>
      </ol>

      <h2 id="global">Global Opportunities</h2>
      <ul>
        <li><strong>Gulf countries</strong> — Saudi, UAE, Qatar, Kuwait, Oman — most accessible international move. DHA/HAAD/Prometric/SCFHS exams. Salary: ₹15–28 LPA + housing + flights</li>
        <li><strong>UK</strong> — Critical Care Practitioner / Advanced Clinical Practice roles via NHS. IELTS + skill assessment. GBP 28,000–40,000 starting</li>
        <li><strong>Australia &amp; New Zealand</strong> — Critical Care Technician roles via AHPRA. AUD 75,000–110,000 starting</li>
        <li><strong>Ireland</strong> — Strong demand for ICU technicians via CORU registration</li>
        <li><strong>USA</strong> — Indian CCT degree alone not directly recognized; most aspirants pursue NBRC RT route, then sub-specialize in critical care</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai</li>
        <li>Clinical rotations across multi-specialty ICU, CTICU, neuro ICU, and NICU/PICU in our teaching hospital</li>
        <li>Hands-on training with ventilators, CRRT machines, IABP, multi-parameter monitors used in 90% of Indian ICUs</li>
        <li>Faculty includes practicing intensivists and senior critical care nurses</li>
        <li>Strong placement record across Apollo, Fortis, KMCH, MIOT, Manipal critical care departments</li>
        <li>Excellent campus infrastructure — link:///lab|simulation labs>>, link:///library|e-library>>, link:///hostel|on-campus hostel>></li>
      </ul>
      <p>Read the full link:///critical-care-technology|B.Sc Critical Care Technology curriculum>> or visit link:///admissions/critical-care-technology|admissions for 2026-27>>.</p>
    `,
  },
  {
    slug: "medical-record-science-career-india",
    title: "Medical Record Science Career in India 2026 — HIM, Coding &amp; Remote Work",
    metaTitle: "Medical Record Science Career India 2026 — HIM Salary, Coding Jobs, Remote",
    metaDescription: "Medical record science offers HIM, ICD-10 coding, and remote US medical coding careers. Explore scope, salary, certifications, and global opportunities.",
    excerpt: "Medical coding is now a ₹4,000 crore industry in India, with US hospitals outsourcing ICD-10 work to Indian coders. BSc Medical Record Science is the entry ticket.",
    courseSlug: "medical-record-science", courseName: "B.Sc Medical Record Science",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 10, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "Is medical record science a good career in India?", a: "Yes. The HIM industry is growing at 18% CAGR, and US-bound medical coding is a ₹4,000 crore export segment. Graduates can work in hospitals, insurance, HIM consulting, or remote-coding for US hospitals." },
      { q: "What is medical coding and how does it pay?", a: "Medical coders translate clinical documentation into ICD-10, CPT, and HCPCS codes used for insurance claims. CPC-certified Indian coders working for US hospitals earn ₹4–10 LPA, often fully remote." },
      { q: "What is the salary of a medical record officer in India?", a: "Entry-level in hospitals: ₹2–3.5 LPA. Mid-level HIM executive (3–5 years): ₹4–7 LPA. CPC-certified medical coders: ₹4–10 LPA. Senior HIM managers in corporate hospitals: ₹8–14 LPA." },
      { q: "Can I work from home as a medical record science graduate?", a: "Yes. Once you earn CPC (AAPC) or CCS (AHIMA) certification, US-bound medical coding companies like Optum, Cognizant, Omega Healthcare, Access Healthcare, R1 RCM, and Sutherland hire fully remote coders." },
      { q: "Which companies hire medical record science graduates?", a: "All Apollo, Fortis, Manipal, MIOT, KMCH, AIIMS, and government hospitals hire MRO/HIM staff. Medical coding companies: Optum, Cognizant, Omega Healthcare, Access Healthcare, R1 RCM, Sutherland, Genpact, and Wipro HealthPlume." }
    ],
    body: `
      <p>Medical record science is the most underrated career in allied health. While students chase glamorous clinical roles, the people quietly earning ₹6–10 LPA in fully remote jobs — without ever wearing scrubs — are <strong>medical coders</strong> and <strong>HIM (Health Information Management) executives</strong>. The Indian medical coding industry is now a <strong>₹4,000 crore export segment</strong>, with US hospitals outsourcing ICD-10 work to Indian graduates. If you're considering link:///medical-record-science|B.Sc Medical Record Science>> at JKKN, here's the unspoken truth about this career in 2026.</p>

      <h2 id="industry">HIM Digitization &amp; The Coding Boom</h2>
      <p>Two forces are simultaneously inflating demand:</p>
      <ul>
        <li><strong>Domestic HIM digitization</strong> — Every NABH-accredited hospital is moving from paper to EMR (Cerner, Epic, eClinicalWorks, SmartCare). They need medical record officers (MROs), coders, and HIM analysts</li>
        <li><strong>US medical coding outsourcing</strong> — India dominates global medical coding outsourcing with companies like Optum, Cognizant, Omega Healthcare, Access Healthcare, R1 RCM, Sutherland, and Wipro HealthPlume hiring 50,000+ coders annually</li>
        <li><strong>ABDM (Ayushman Bharat Digital Mission)</strong> — Mandating standardised health records for every Indian citizen. Massive HIM workforce expansion underway</li>
        <li><strong>Insurance growth</strong> — Star Health, HDFC Ergo, ICICI Lombard hire medical coders for claims processing and fraud detection</li>
      </ul>
      <p>The HIM industry is projected to grow at <strong>18% CAGR</strong> through 2030, making it one of the fastest-growing allied health verticals.</p>

      <h2 id="day-in-life">Day in the Life of a Medical Record Officer</h2>
      <p>The daily work splits into three very different career tracks depending on where you work:</p>
      <p><strong>Hospital HIM role:</strong> 9 AM start with shift handover from night records. Manage discharge summary documentation, code diseases and procedures using ICD-10 and CPT, audit medical records for completeness, prepare data for clinical research, manage death certificates and medico-legal cases, coordinate with insurance teams for cashless claim processing, and ensure NABH/JCI compliance.</p>
      <p><strong>US medical coding (remote-work track):</strong> Often a remote or hybrid role with US shift timing (5 PM – 2 AM IST). You receive scanned charts from US hospitals, code them in ICD-10-CM, ICD-10-PCS, CPT, and HCPCS per CMS guidelines, meet daily productivity quotas (~25–35 charts), and undergo QA review weekly. Many JKKN graduates work for Optum, Cognizant, or Access Healthcare entirely from home after the first six months of training.</p>
      <p><strong>Insurance/TPA role:</strong> Audit hospital claims for code accuracy, identify fraudulent claims, manage cashless authorization, work with hospital billing departments for resolution. Often the most lucrative non-coding HIM track.</p>

      <h2 id="career-paths">Career Paths &amp; Specializations</h2>
      <ul>
        <li><strong>Medical Record Officer (Hospital)</strong> — Core entry path. Multi-specialty hospital records management</li>
        <li><strong>Medical Coder (CPC / CCS certified)</strong> — Remote/hybrid work with US medical coding companies. Most graduates' eventual destination</li>
        <li><strong>HIM Executive / HIM Manager</strong> — Hospital HIM department leadership. NABH compliance focus</li>
        <li><strong>Clinical Documentation Improvement (CDI) Specialist</strong> — Work with doctors to improve documentation quality. Highly valued role</li>
        <li><strong>Insurance / TPA Coder</strong> — Star, HDFC Ergo, Bajaj Allianz hire for claims processing and audit</li>
        <li><strong>Medical Records Auditor</strong> — NABH/JCI audit teams. Travel-heavy but well paid</li>
        <li><strong>HIM Software Implementation Consultant</strong> — Cerner, Epic, KMR implementation projects. Excellent global pay</li>
      </ul>

      <h2 id="salary">Salary Outlook in India</h2>
      <table>
        <thead><tr><th>Role &amp; Experience</th><th>Tier-1 Cities</th><th>Tier-2 / Remote</th></tr></thead>
        <tbody>
          <tr><td>MRO Entry (Hospital, 0–1 years)</td><td>₹2 – 3.5 LPA</td><td>₹1.8 – 3 LPA</td></tr>
          <tr><td>Medical Coder Entry (CPC certified)</td><td>₹3.5 – 5 LPA</td><td>₹3.2 – 4.5 LPA (often remote)</td></tr>
          <tr><td>Mid-level (3–5 years)</td><td>₹4 – 7 LPA</td><td>₹4 – 7 LPA</td></tr>
          <tr><td>Senior Medical Coder (CCS / specialty)</td><td>₹6 – 11 LPA</td><td>₹6 – 11 LPA</td></tr>
          <tr><td>HIM Manager / CDI Specialist</td><td>₹8 – 14 LPA</td><td>—</td></tr>
          <tr><td>HIM Implementation Consultant</td><td>₹10 – 22 LPA + variable</td><td>—</td></tr>
        </tbody>
      </table>
      <p>Remote US medical coding roles include US time zone shift differentials (often 15–25%) and night-shift allowances.</p>

      <h2 id="skills">Certifications That 3x Your Salary</h2>
      <ol>
        <li><strong>CPC (Certified Professional Coder) — AAPC</strong> — The single most valuable certification in this field. JKKN graduates with CPC walk into ₹4–5 LPA roles immediately. Cost: ~₹35,000 (training + exam)</li>
        <li><strong>CCS (Certified Coding Specialist) — AHIMA</strong> — Inpatient coding specialty. Pairs well with CPC for senior roles</li>
        <li><strong>COC (Certified Outpatient Coder)</strong> — For outpatient hospital coding tracks</li>
        <li><strong>CCDS (Certified Clinical Documentation Specialist)</strong> — For CDI career track</li>
        <li><strong>EMR system certifications</strong> — Cerner Millennium, Epic, Allscripts training. Differentiates implementation consultants</li>
      </ol>
      <p>Most graduates pursue CPC certification within 6 months of graduation. Many JKKN students target it during their final semester for immediate placement.</p>

      <h2 id="global">Remote US Medical Coding Careers</h2>
      <p>This is the career most students don't know exists. Indian medical coders working for US hospitals from home, earning the same salary as a junior software engineer — without commuting or shift dependency.</p>
      <ul>
        <li><strong>Optum (UnitedHealth Group)</strong> — Largest medical coding employer in India. Often offers remote work after initial training</li>
        <li><strong>Omega Healthcare, Access Healthcare, R1 RCM</strong> — Pure-play medical coding companies hiring CPC-certified graduates</li>
        <li><strong>Cognizant, Sutherland, Genpact, Wipro HealthPlume</strong> — Healthcare IT divisions hiring medical coders alongside RCM (Revenue Cycle Management) analysts</li>
        <li><strong>EClinicalWorks, Allscripts, Cerner India</strong> — HIM implementation consultants travelling internationally</li>
        <li><strong>UK/Australia HIM roles</strong> — Less common but growing. NHS Wales, Scotland actively recruit Indian-trained HIM professionals</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai</li>
        <li>Curriculum includes ICD-10, CPT, HCPCS coding fundamentals — preparing you for CPC certification within months of graduation</li>
        <li>Hands-on training with EMR systems (we use a clinical-grade EMR in our teaching hospital records department)</li>
        <li>Strong placement record with Optum, Cognizant, Access Healthcare, regional hospitals</li>
        <li>CPC exam preparation track guidance during the final year</li>
        <li>Excellent campus infrastructure — link:///library|e-library>>, link:///wifi|campus-wide WiFi>>, link:///hostel|on-campus hostel>>, link:///transport|transport>></li>
      </ul>
      <p>See the full link:///medical-record-science|B.Sc Medical Record Science curriculum>> or visit link:///admissions/medical-record-science|admissions for 2026-27>> for eligibility, fee structure, and seat availability.</p>
    `,
  },
  {
    slug: "accident-emergency-care-technician-guide",
    title: "Accident &amp; Emergency Care Technology Career Guide India 2026",
    metaTitle: "Accident & Emergency Care Technology Career India 2026 — Salary, Scope, Jobs",
    metaDescription: "India's trauma care and ambulance services are expanding fast. Discover career scope, salary, EMT certifications, and global opportunities for BSc Accident & Emergency Care.",
    excerpt: "India has 4.5 lakh road accident victims a year but fewer than 15,000 trained emergency care technologists. The Modi government's trauma care expansion is creating thousands of new roles.",
    courseSlug: "accident-emergency-care", courseName: "B.Sc Accident & Emergency Care Technology",
    category: "Career Guide", publishedDate: "2026-05-16",
    readTimeMinutes: 10, author: "JKKN AHS Academic Team",
    faqs: [
      { q: "What is the scope of accident and emergency care technology in India?", a: "Excellent. India has 4.5 lakh road accident victims yearly, expanding 108 ambulance services, growing trauma centres under PMSSY, and corporate hospitals all hiring emergency care technologists." },
      { q: "What does an emergency care technologist do?", a: "They handle triage, manage trauma resuscitation, perform BLS/ACLS, manage airway, control bleeding, splint fractures, operate defibrillators, support emergency physicians, and serve as advanced EMTs on ambulances." },
      { q: "What is the salary of an emergency care technologist in India?", a: "Entry-level: ₹2.4–4 LPA. Mid-level (3–5 years): ₹4.5–7 LPA. Senior emergency care technologists in trauma centres or air ambulance services: ₹7–13 LPA. Gulf and Saudi roles pay 2.5–4× higher." },
      { q: "Where can I work after BSc Accident & Emergency Care?", a: "Trauma centres (Apollo, Medanta, AIIMS, Christian Medical College Vellore), 108 ambulance services, corporate emergency departments, disaster response teams, oil-rig medical services, air ambulance companies, and ER chains like CARE Hospitals." },
      { q: "Can emergency care technologists work abroad?", a: "Yes. Gulf countries hire Indian EMTs for hospital emergency departments and oil-field medical services. UK, Australia, and Canada have structured EMT-paramedic pathways after additional certifications." }
    ],
    body: `
      <p>India loses <strong>4.5 lakh people to road accidents</strong> every year — the highest absolute number in the world (NCRB 2024). Half of these deaths happen in the "golden hour" between injury and definitive care. Behind every saved life is an emergency care technologist who triaged, stabilised, and transported the patient. Yet India has fewer than <strong>15,000 trained emergency care technologists</strong> for a country that needs at least 100,000. If you're considering link:///accident-emergency-care|B.Sc Accident &amp; Emergency Care Technology>> at JKKN, here's what the career, daily work, and growth path actually look like.</p>

      <h2 id="industry">Trauma Care Expansion in India</h2>
      <p>Three structural shifts are creating massive demand:</p>
      <ul>
        <li><strong>National Trauma Care Programme</strong> — Government is funding Level 1 and Level 2 trauma centres at every district hospital and AIIMS facility. Each centre needs 12–20 trained emergency care staff</li>
        <li><strong>108 ambulance expansion</strong> — GVK EMRI, Ziqitza, and state ambulance services now operate over 30,000 ambulances nationwide, each needing paramedic-grade staff</li>
        <li><strong>Corporate ER expansion</strong> — Apollo, Fortis, Medanta, KMCH, MIOT have all transformed their emergency departments into 24×7 trauma-ready centres requiring trained emergency care technologists</li>
        <li><strong>Air ambulance services</strong> — Companies like ICATT, Aviation Medicine, and Medulance hire trained emergency care personnel for high-acuity inter-hospital transfers</li>
        <li><strong>Disaster response &amp; oil-rig medical services</strong> — Indian emergency care techs are hired by global oil/gas and disaster response organisations</li>
      </ul>

      <h2 id="day-in-life">Day in the Life of an Emergency Care Technologist</h2>
      <p>A multi-specialty hospital ER runs four parallel zones: triage, resuscitation bay, observation, and minor procedure. Your morning shift (7 AM – 3 PM) starts with handover from the night team.</p>
      <p>Through the shift you perform initial triage assessments (Indian Triage Scale or ESI), manage trauma resuscitation following ATLS protocols, perform airway manoeuvres, control bleeding with tourniquets and pressure dressings, splint fractures, set up IV lines, operate defibrillators during cardiac arrest, administer prescribed emergency drugs, and assist emergency physicians with procedures (chest tube insertion, central lines, suturing).</p>
      <p>On any given day you might handle road accident polytrauma, myocardial infarctions, snake bites, organophosphate poisoning, paediatric seizures, and respiratory failure cases — all in a single shift. Emergency care technologists in 108 ambulance services additionally manage pre-hospital care during transport, often making clinical decisions under time pressure that change patient outcomes.</p>

      <h2 id="career-paths">Career Paths &amp; Specializations</h2>
      <ul>
        <li><strong>Hospital ER Technologist</strong> — Core entry path. Multi-specialty hospital emergency department staff</li>
        <li><strong>Trauma Centre Specialist</strong> — Dedicated trauma centre roles in Level 1 trauma facilities. Highest paying within hospital ER</li>
        <li><strong>108 / Ambulance Paramedic</strong> — Pre-hospital care role with state and private ambulance services. EMT-Basic and EMT-Advanced certifications accelerate growth</li>
        <li><strong>Air Ambulance Medical Crew</strong> — ICATT, Aviation Medicine, and corporate aviation health teams. Niche, well paid, requires aviation medicine certification</li>
        <li><strong>Industrial Medical Officer</strong> — Oil rigs, mines, manufacturing plants. Excellent pay, often international postings</li>
        <li><strong>Disaster Response Specialist</strong> — NDRF, SDMA, international humanitarian organisations</li>
        <li><strong>Emergency Department In-Charge</strong> — After 5–7 years, manage ER technician teams, quality compliance, NABH/JCI ER protocols</li>
      </ul>

      <h2 id="salary">Salary Outlook in India</h2>
      <table>
        <thead><tr><th>Role &amp; Experience</th><th>Tier-1 Corporate</th><th>Tier-2 / Government</th></tr></thead>
        <tbody>
          <tr><td>Hospital ER Technologist (0–1 years)</td><td>₹2.4 – 4 LPA</td><td>₹2.2 – 3.5 LPA</td></tr>
          <tr><td>108 / Ambulance Paramedic</td><td>₹2.6 – 4 LPA</td><td>₹2.4 – 3.8 LPA</td></tr>
          <tr><td>Mid-level (3–5 years)</td><td>₹4.5 – 7 LPA</td><td>₹4 – 6 LPA</td></tr>
          <tr><td>Trauma Centre Specialist</td><td>₹6 – 10 LPA</td><td>₹5 – 8 LPA</td></tr>
          <tr><td>Air Ambulance Crew</td><td>₹8 – 14 LPA</td><td>—</td></tr>
          <tr><td>Industrial Medical Officer (oil rig)</td><td>₹10 – 22 LPA</td><td>—</td></tr>
        </tbody>
      </table>

      <h2 id="skills">Skills &amp; Certifications That Multiply Your Value</h2>
      <ol>
        <li><strong>BLS + ACLS</strong> — Mandatory for all emergency care work</li>
        <li><strong>ATLS (Advanced Trauma Life Support)</strong> — Even technician-level ATLS Provider course adds enormous value</li>
        <li><strong>PALS (Paediatric Advanced Life Support)</strong> — For paediatric ER and hospital ER tracks</li>
        <li><strong>NIMS / FCCS</strong> — Disaster response and critical care care credentialing</li>
        <li><strong>EMT-Basic / EMT-Advanced certification</strong> — NHM accredited courses; mandatory for international EMT roles</li>
        <li><strong>Aviation Medicine training</strong> — For air ambulance and offshore medical roles</li>
        <li><strong>HAZMAT / Disaster Medicine</strong> — NDRF and humanitarian organisation requirements</li>
      </ol>

      <h2 id="global">Global EMT &amp; Pre-Hospital Care Opportunities</h2>
      <ul>
        <li><strong>Gulf countries</strong> — Saudi (SCFHS), UAE (DHA/HAAD), Qatar (Prometric), Oman, Kuwait — most popular international move for Indian emergency care techs. Salary: ₹15–30 LPA + housing + flights. Roles span hospital ER, oil-rig medical, and pre-hospital services</li>
        <li><strong>United Kingdom</strong> — Emergency Care Assistant / Emergency Medical Technician (NHS Band 3-5) via HCPC route or direct NHS recruitment. GBP 22,000–32,000 starting</li>
        <li><strong>Australia</strong> — Paramedic roles via additional Bachelor of Paramedicine. AUD 75,000–110,000 starting</li>
        <li><strong>USA</strong> — EMT-B and EMT-Paramedic exam pathways. Indian degree counts toward credentialing</li>
        <li><strong>Offshore oil-rig and merchant marine medical roles</strong> — Highly paid, work rotation schedules (60 days on / 30 off). Major employers: Shell, ONGC, Reliance, BP, Schlumberger</li>
      </ul>

      <h2 id="why-jkkn">Why Study at JKKN</h2>
      <ul>
        <li>Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai</li>
        <li>Clinical rotations across multi-specialty hospital ER, trauma centre, and pre-hospital care simulation labs</li>
        <li>Practical training with defibrillators, AED, mechanical ventilators, intubation mannequins, splints, and stretcher equipment</li>
        <li>BLS, ACLS, ATLS Provider preparation track during the final year</li>
        <li>Strong placement record across Apollo ER, KMCH trauma centre, 108 ambulance services, regional multi-specialty hospitals</li>
        <li>On-campus link:///ambulance-service|ambulance service>>, link:///lab|simulation labs>>, link:///hostel|on-campus hostel>>, link:///transport|transport>></li>
      </ul>
      <p>Read the full link:///accident-emergency-care|B.Sc Accident &amp; Emergency Care Technology curriculum>> or visit link:///admissions/accident-emergency-care|admissions for 2026-27>>.</p>
    `,
  },
];

// ---- index page ----
function indexPage(posts) {
  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JKKN AHS Course Blogs — Review Packet</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Poppins', sans-serif; background: #fbfbee; color: #1a1a1a; }
    .hero {
      background: linear-gradient(135deg, #0b6d41, #085231, #063a23);
      color: #fff; padding: 60px 24px; text-align: center;
    }
    .hero h1 { font-size: 36px; font-weight: 700; margin-bottom: 12px; }
    .hero p { opacity: 0.9; max-width: 700px; margin: 0 auto; font-size: 16px; }
    .badge {
      display: inline-block; background: #ffde59; color: #0b6d41;
      font-size: 11px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 1px; padding: 6px 14px; border-radius: 999px; margin-bottom: 18px;
    }
    .container { max-width: 900px; margin: 40px auto; padding: 0 24px; }
    .post-card {
      display: block; background: #fff; border: 1px solid #e6e6dc;
      border-radius: 14px; padding: 22px 24px; margin-bottom: 14px;
      text-decoration: none; color: inherit; transition: all 0.2s;
    }
    .post-card:hover {
      transform: translateY(-2px); box-shadow: 0 8px 24px rgba(11, 109, 65, 0.12);
      border-color: #0b6d41;
    }
    .post-num {
      color: #0b6d41; font-size: 13px; font-weight: 600;
      letter-spacing: 1px; margin-bottom: 6px;
    }
    .post-title { font-size: 18px; font-weight: 600; line-height: 1.4; margin-bottom: 6px; color: #1a1a1a; }
    .post-meta { font-size: 13px; color: #666; }
    .footer {
      background: #1a1a1a; color: rgba(255,255,255,0.6);
      padding: 26px 24px; text-align: center; font-size: 14px; margin-top: 40px;
    }
    .footer a { color: #ffde59; }
  </style>
</head>
<body>
  <header class="hero">
    <span class="badge">Review Packet</span>
    <h1>JKKN AHS Course Career Insights</h1>
    <p>9 pillar SEO + awareness blog posts — one per allied health science course. Offline review packet. Click any post to open.</p>
  </header>
  <main class="container">
    ${posts.map((p, i) => `
      <a class="post-card" href="${String(i + 1).padStart(2, '0')}-${p.courseSlug}.html">
        <div class="post-num">${String(i + 1).padStart(2, '0')} · ${p.courseName.toUpperCase()}</div>
        <div class="post-title">${p.title}</div>
        <div class="post-meta">${p.readTimeMinutes} min read · ${formatDate(p.publishedDate)} · ${p.author}</div>
      </a>
    `).join("")}
  </main>
  <footer class="footer">
    Generated for offline review · Live versions will appear at <a href="${SITE_BASE}/course-blog">${SITE_BASE}/course-blog</a>
  </footer>
</body>
</html>`;
}

// ---- run ----
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

posts.forEach((post, i) => {
  const filename = `${String(i + 1).padStart(2, '0')}-${post.courseSlug}.html`;
  const filepath = path.join(OUTPUT_DIR, filename);
  const html = htmlPage(post, renderLinks(post.body));
  fs.writeFileSync(filepath, html, "utf-8");
  console.log(`  ✓ ${filename}`);
});

const indexPath = path.join(OUTPUT_DIR, "index.html");
fs.writeFileSync(indexPath, indexPage(posts), "utf-8");
console.log(`  ✓ index.html`);
console.log(`\nDone. ${posts.length + 1} files written to ${OUTPUT_DIR}`);
