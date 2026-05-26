import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import FacultyForm from '../FacultyForm';

export default async function EditFaculty({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: member } = await supabase
    .from('faculty')
    .select(`
      id, name, designation, department, qualification, experience_years,
      photo_url, email, display_order, is_active,
      slug, summary, research_papers_count, phd_scholars_count, awards_won_count,
      google_scholar_url, researchgate_url, orcid_url,
      mentoring_description, pg_dissertations_guided, ug_projects_guided,
      badges, academic_qualifications, areas_of_specialisation,
      experience, research_focus, publications, funded_research,
      certifications, awards, memberships, phd_scholars, faqs,
      synced_from_api, staff_id, last_synced_at, status
    `)
    .eq('id', id)
    .single();

  if (!member) notFound();

  const isSynced = member.synced_from_api === true;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl">
      <Link
        href="/admin/faculty"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Faculty
      </Link>

      {isSynced ? (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {member.name}
          </h1>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center space-y-4">
            <div className="flex justify-center">
              <ShieldCheck className="w-12 h-12 text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Managed by MyJKKN
            </h2>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              This faculty profile is synced from the MyJKKN Staff system.
              To edit details, use the MyJKKN admin portal.
              Changes will appear here on the next sync cycle (every 15 minutes).
            </p>
            {member.staff_id && (
              <p className="text-xs text-gray-400">
                Staff ID: {member.staff_id} · Last synced:{' '}
                {member.last_synced_at
                  ? new Date(member.last_synced_at).toLocaleString('en-IN')
                  : 'Never'}
              </p>
            )}
            <a
              href={`https://www.jkkn.ai/admin/staff/${member.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Edit in MyJKKN
            </a>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Faculty Member</h1>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
            <FacultyForm member={member} />
          </div>
        </>
      )}
    </div>
  );
}
