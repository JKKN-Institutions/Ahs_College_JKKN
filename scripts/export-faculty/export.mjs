import ExcelJS from 'exceljs';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// ── Config ────────────────────────────────────────────────────────────────────

const __dir = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dir, '../../.env.local');

function parseEnv(path) {
  const text = readFileSync(path, 'utf8');
  const vars = {};
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    vars[key] = val;
  }
  return vars;
}

const env = parseEnv(envPath);
const SUPABASE_URL = env['NEXT_PUBLIC_SUPABASE_URL'];
const SUPABASE_KEY = env['NEXT_PUBLIC_SUPABASE_ANON_KEY'];
const COLLEGE_ID   = env['NEXT_PUBLIC_COLLEGE_ID'] || 'ahs';

// ── Supabase REST fetch (no SDK needed) ──────────────────────────────────────

async function fetchAllFaculty() {
  const url = `${SUPABASE_URL}/rest/v1/faculty?college_id=eq.${COLLEGE_ID}&order=display_order.asc,name.asc&limit=1000`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Supabase error ${res.status}: ${err}`);
  }
  return res.json();
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const safe = (v) => (v == null || v === '' ? '' : String(v));

function jsonArray(arr, formatter) {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return arr.map(formatter).join('\n---\n');
}

function fmtAcademicQuals(arr) {
  return jsonArray(arr, (q) =>
    [q.degree, q.specialisation, q.university, q.year].filter(Boolean).join(' | ')
  );
}

function fmtExperience(arr) {
  return jsonArray(arr, (e) =>
    [
      e.type,
      [e.period_start, e.period_end].filter(Boolean).join('–'),
      e.role,
      e.institution,
      e.description,
    ]
      .filter(Boolean)
      .join(' | ')
  );
}

function fmtPublications(arr) {
  return jsonArray(arr, (p) =>
    [
      p.title,
      p.authors,
      p.journal,
      p.year,
      p.doi_url ? `DOI: ${p.doi_url}` : '',
      p.pubmed_url ? `PubMed: ${p.pubmed_url}` : '',
    ]
      .filter(Boolean)
      .join(' | ')
  );
}

function fmtFundedResearch(arr) {
  return jsonArray(arr, (f) =>
    [f.project, f.agency, f.amount, f.period, f.status].filter(Boolean).join(' | ')
  );
}

function fmtCertifications(arr) {
  return jsonArray(arr, (c) =>
    [c.name, c.organisation, c.year].filter(Boolean).join(' | ')
  );
}

function fmtAwards(arr) {
  return jsonArray(arr, (a) =>
    [a.award, a.body, a.year].filter(Boolean).join(' | ')
  );
}

function fmtMemberships(arr) {
  return jsonArray(arr, (m) =>
    [m.organisation, m.type, m.since].filter(Boolean).join(' | ')
  );
}

function fmtPhdScholars(arr) {
  return jsonArray(arr, (s) =>
    [s.scholar, s.research_topic, s.status].filter(Boolean).join(' | ')
  );
}

function fmtFaqs(arr) {
  return jsonArray(arr, (f) =>
    `Q: ${f.question || ''}\nA: ${f.answer || ''}`
  );
}

function fmtStringArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return arr.join(', ');
}

// ── Column definitions ────────────────────────────────────────────────────────

const COLUMNS = [
  // Basic Info
  { header: 'S.No',                   key: 'sno',                    width: 6 },
  { header: 'Name',                   key: 'name',                   width: 28 },
  { header: 'Designation',            key: 'designation',            width: 22 },
  { header: 'Department',             key: 'department',             width: 32 },
  { header: 'Qualification',          key: 'qualification',          width: 18 },
  { header: 'URL Slug',               key: 'slug',                   width: 22 },
  { header: 'Photo URL',              key: 'photo_url',              width: 50 },
  { header: 'Display Order',          key: 'display_order',          width: 14 },
  { header: 'Experience (Years)',     key: 'experience_years',       width: 16 },
  { header: 'Research Papers Count',  key: 'research_papers_count',  width: 20 },
  { header: 'PhD Scholars Count',     key: 'phd_scholars_count',     width: 18 },
  { header: 'Awards Won Count',       key: 'awards_won_count',       width: 16 },
  { header: 'Email',                  key: 'email',                  width: 30 },
  { header: 'Status',                 key: 'status',                 width: 12 },
  { header: 'Aided/Self-Finance',     key: 'aided_self_finance',     width: 18 },
  { header: 'Professional Summary',   key: 'summary',                width: 60 },
  // Academic
  { header: 'Academic Qualifications', key: 'academic_qualifications', width: 60 },
  { header: 'Areas of Specialisation', key: 'areas_of_specialisation', width: 50 },
  // Experience
  { header: 'Experience Details',     key: 'experience',             width: 70 },
  // Research
  { header: 'Research Focus',         key: 'research_focus',         width: 50 },
  { header: 'Publications',           key: 'publications',           width: 80 },
  { header: 'Funded Research',        key: 'funded_research',        width: 70 },
  { header: 'Google Scholar URL',     key: 'google_scholar_url',     width: 40 },
  { header: 'ResearchGate URL',       key: 'researchgate_url',       width: 40 },
  { header: 'ORCID URL',              key: 'orcid_url',              width: 35 },
  // Achievements
  { header: 'Certifications',         key: 'certifications',         width: 60 },
  { header: 'Awards & Recognitions',  key: 'awards',                 width: 60 },
  { header: 'Professional Memberships', key: 'memberships',          width: 60 },
  { header: 'Badges',                 key: 'badges',                 width: 40 },
  // Mentoring
  { header: 'Mentoring Description',  key: 'mentoring_description',  width: 60 },
  { header: 'PG Dissertations Guided', key: 'pg_dissertations_guided', width: 22 },
  { header: 'UG Projects Guided',     key: 'ug_projects_guided',     width: 18 },
  { header: 'PhD Scholars',           key: 'phd_scholars',           width: 60 },
  // FAQs
  { header: 'FAQs',                   key: 'faqs',                   width: 80 },
];

// ── Excel builder ─────────────────────────────────────────────────────────────

const DARK_GREEN = '006837';
const LIGHT_GREEN = 'E8F5EE';

async function buildExcel(faculty) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'JKKN AHS Export';
  wb.created = new Date();

  const ws = wb.addWorksheet('Faculty', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  // Define columns
  ws.columns = COLUMNS.map((c) => ({
    header: c.header,
    key: c.key,
    width: c.width,
  }));

  // Style header row
  const headerRow = ws.getRow(1);
  headerRow.height = 28;
  COLUMNS.forEach((_, idx) => {
    const cell = headerRow.getCell(idx + 1);
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${DARK_GREEN}` } };
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    cell.border = {
      bottom: { style: 'medium', color: { argb: 'FFFFFFFF' } },
    };
  });

  // Add data rows
  faculty.forEach((member, idx) => {
    const isOdd = idx % 2 === 0;
    const rowData = {
      sno:                     idx + 1,
      name:                    safe(member.name),
      designation:             safe(member.designation),
      department:              safe(member.department),
      qualification:           safe(member.qualification),
      slug:                    safe(member.slug),
      photo_url:               safe(member.photo_url),
      display_order:           member.display_order ?? '',
      experience_years:        member.experience_years ?? '',
      research_papers_count:   member.research_papers_count ?? '',
      phd_scholars_count:      member.phd_scholars_count ?? '',
      awards_won_count:        member.awards_won_count ?? '',
      email:                   safe(member.email),
      status:                  member.is_active ? 'Active' : 'Inactive',
      aided_self_finance:      '',
      summary:                 safe(member.summary),
      academic_qualifications: fmtAcademicQuals(member.academic_qualifications),
      areas_of_specialisation: fmtStringArray(member.areas_of_specialisation),
      experience:              fmtExperience(member.experience),
      research_focus:          fmtStringArray(member.research_focus),
      publications:            fmtPublications(member.publications),
      funded_research:         fmtFundedResearch(member.funded_research),
      google_scholar_url:      safe(member.google_scholar_url),
      researchgate_url:        safe(member.researchgate_url),
      orcid_url:               safe(member.orcid_url),
      certifications:          fmtCertifications(member.certifications),
      awards:                  fmtAwards(member.awards),
      memberships:             fmtMemberships(member.memberships),
      badges:                  fmtStringArray(member.badges),
      mentoring_description:   safe(member.mentoring_description),
      pg_dissertations_guided: member.pg_dissertations_guided ?? '',
      ug_projects_guided:      member.ug_projects_guided ?? '',
      phd_scholars:            fmtPhdScholars(member.phd_scholars),
      faqs:                    fmtFaqs(member.faqs),
    };

    const row = ws.addRow(rowData);
    row.height = 40;

    const bgColor = isOdd ? 'FFFFFFFF' : `FF${LIGHT_GREEN}`;
    COLUMNS.forEach((_, ci) => {
      const cell = row.getCell(ci + 1);
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bgColor } };
      cell.alignment = { vertical: 'top', wrapText: true };
      cell.font = { size: 10 };
    });
  });

  // Auto-filter on header row
  ws.autoFilter = {
    from: { row: 1, column: 1 },
    to:   { row: 1, column: COLUMNS.length },
  };

  return wb;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Fetching faculty for college_id = "${COLLEGE_ID}" …`);
  const faculty = await fetchAllFaculty();
  console.log(`  → ${faculty.length} records found.`);

  if (faculty.length === 0) {
    console.warn('No faculty records returned. Check COLLEGE_ID and Supabase credentials.');
    process.exit(1);
  }

  const wb = await buildExcel(faculty);

  const outFile = join(__dir, `faculty_${COLLEGE_ID}_complete.xlsx`);
  await wb.xlsx.writeFile(outFile);
  console.log(`\nExcel file saved: ${outFile}`);
}

main().catch((err) => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
