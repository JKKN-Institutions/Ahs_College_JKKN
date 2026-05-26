/** Raw shape returned by GET /api/api-management/staff for a single row. */
export interface StaffApiRow {
  id: string;
  first_name: string;
  last_name: string;
  staff_id: string | null;
  designation: string;
  email: string;
  institution_email: string | null;
  phone: string | null;
  profile_picture: string | null;
  slug: string;
  status: 'published' | 'draft';
  is_active: boolean;
  display_order: number;
  experience_years: number;
  research_papers: number;
  phd_scholars: number;
  awards_won: number;
  pg_dissertations_guided: number;
  ug_projects_guided: number;

  qualification_summary: string | null;
  professional_summary: string | null;
  mentoring_description: string | null;

  google_scholar_url: string | null;
  researchgate_url: string | null;
  orcid_url: string | null;

  department: { department_name: string } | null;

  badges: { label: string }[];
  qualifications: {
    year: number | string;
    degree: string;
    institution: string;
    specialization: string;
  }[];
  specialisations: { name: string }[];
  experience_entries: {
    from: string;
    to: string;
    role: string;
    organisation: string;
    description: string;
  }[];
  research_focus_areas: { area: string }[];
  publications: {
    doi?: string;
    url?: string;
    year: number | string;
    title: string;
    journal: string;
  }[];
  funded_projects: {
    title: string;
    agency: string;
    amount: string;
    status: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    year?: number | string;
  }[];
  awards: {
    year: number | string;
    title: string;
    awarded_by: string;
  }[];
  memberships: {
    body: string;
    role: string;
    since: number | string;
  }[];
  phd_scholars_list: {
    name: string;
    topic: string;
    status: string;
  }[];
  faqs: { question: string; answer: string }[];
}

export interface StaffApiResponse {
  data: StaffApiRow[];
  metadata: { total: number; all: boolean; returned: number };
}
