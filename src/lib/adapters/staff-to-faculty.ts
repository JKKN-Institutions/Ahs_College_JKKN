import type { StaffApiRow } from '@/lib/schemas/staff-api';

// Honorific prefixes to strip from first_name
const HONORIFICS = /^(MR\.?|MRS\.?|MS\.?|DR\.?|PROF\.?)\s+/i;

function cleanName(first: string, last: string): string {
  const cleaned = first.replace(HONORIFICS, '').trim();
  return `${cleaned} ${last}`.replace(/\s+/g, ' ').trim();
}

function titleCase(str: string): string {
  if (str !== str.toUpperCase()) return str.trim();
  return str
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function toStr(v: number | string | undefined | null): string {
  if (v == null) return '';
  return String(v);
}

function normaliseDoi(doi?: string, url?: string): string {
  if (url) return url;
  if (!doi) return '';
  if (doi.startsWith('http')) return doi;
  return `https://doi.org/${doi}`;
}

function normaliseStatus(s: string): string {
  const lower = s.toLowerCase().trim();
  if (lower === 'ongoing' || lower === 'in progress') return 'Ongoing';
  return 'Completed';
}

/**
 * Transform a MyJKKN Staff API row into the AHS local faculty table shape.
 * Does NOT set: id, college_id, photo_url, status, synced_from_api, staff_id, last_synced_at.
 * Those are set by the orchestrator.
 */
export function staffToAhsFacultyRow(api: StaffApiRow) {
  const name = cleanName(api.first_name, api.last_name);

  return {
    name,
    slug: api.slug || slugify(name),
    designation: titleCase(api.designation ?? ''),
    department: api.department?.department_name ?? '',
    email: api.institution_email || api.email || '',
    qualification: api.qualification_summary ?? '',
    summary: api.professional_summary ?? '',
    experience_years: api.experience_years ?? 0,
    research_papers_count: api.research_papers ?? 0,
    phd_scholars_count: api.phd_scholars ?? 0,
    awards_won_count: api.awards_won ?? 0,
    display_order: api.display_order ?? 0,
    is_active: api.is_active,

    google_scholar_url: api.google_scholar_url ?? null,
    researchgate_url: api.researchgate_url ?? null,
    orcid_url: api.orcid_url ?? null,
    mentoring_description: api.mentoring_description ?? null,
    pg_dissertations_guided: api.pg_dissertations_guided ?? 0,
    ug_projects_guided: api.ug_projects_guided ?? 0,

    // JSONB arrays — mapped to AHS column names and inner shapes
    badges: (api.badges ?? []).map((b) => b.label),

    academic_qualifications: (api.qualifications ?? []).map((q) => ({
      degree: q.degree ?? '',
      specialisation: q.specialization ?? '',
      university: q.institution ?? '',
      year: toStr(q.year),
    })),

    areas_of_specialisation: (api.specialisations ?? []).map((s) => s.name),

    experience: (api.experience_entries ?? []).map((e) => {
      // Lift type from description field, then blank description
      const descLower = (e.description ?? '').toLowerCase().trim();
      let type = 'Teaching';
      if (descLower.startsWith('clinical')) type = 'Clinical';
      else if (descLower.startsWith('teaching')) type = 'Teaching';
      else if (descLower) type = 'Teaching';

      return {
        type,
        period_start: e.from ?? '',
        period_end: e.to ?? '',
        role: e.role ?? '',
        institution: e.organisation ?? '',
        description: descLower.startsWith('teaching') || descLower.startsWith('clinical')
          ? e.description.replace(/^(Teaching|Clinical)\s*[-–:.]?\s*/i, '').trim()
          : e.description ?? '',
      };
    }),

    research_focus: (api.research_focus_areas ?? []).map((r) => r.area),

    publications: (api.publications ?? []).map((p) => ({
      title: p.title ?? '',
      authors: '',
      journal: p.journal ?? '',
      year: toStr(p.year),
      doi_url: normaliseDoi(p.doi, p.url),
      pubmed_url: '',
    })),

    funded_research: (api.funded_projects ?? []).map((f) => ({
      project: f.title ?? '',
      agency: f.agency ?? '',
      amount: f.amount ?? '',
      period: '',
      status: normaliseStatus(f.status ?? ''),
    })),

    certifications: (api.certifications ?? []).map((c) => ({
      name: c.name ?? '',
      organisation: c.issuer ?? '',
      year: toStr(c.year),
    })),

    awards: (api.awards ?? []).map((a) => ({
      award: a.title ?? '',
      body: a.awarded_by ?? '',
      year: toStr(a.year),
    })),

    memberships: (api.memberships ?? []).map((m) => ({
      organisation: m.body ?? '',
      type: m.role ?? '',
      since: toStr(m.since),
    })),

    phd_scholars: (api.phd_scholars_list ?? []).map((s) => ({
      scholar: s.name ?? '',
      research_topic: s.topic ?? '',
      status: s.status ?? '',
    })),

    faqs: api.faqs ?? [],
  };
}
