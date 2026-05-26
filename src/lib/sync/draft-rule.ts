interface CompletenessInput {
  summary: string;
  academic_qualifications: unknown[];
  email: string;
  designation: string;
  department: string;
}

interface CompletenessResult {
  status: 'published' | 'draft';
  missing: string[];
}

/**
 * A row is published locally only if ALL required fields are present
 * AND the upstream MyJKKN status is 'published'.
 */
export function checkFacultyCompleteness(
  data: CompletenessInput,
  rehostedPhotoUrl: string | null,
  apiStatus: string
): CompletenessResult {
  const missing: string[] = [];

  if (!rehostedPhotoUrl) missing.push('photo_url');
  if (!data.summary?.trim()) missing.push('summary');
  if (!data.academic_qualifications?.length) missing.push('academic_qualifications');
  if (!data.email?.trim()) missing.push('email');
  if (!data.designation?.trim()) missing.push('designation');
  if (!data.department?.trim()) missing.push('department');

  const isComplete = missing.length === 0;
  const isUpstreamPublished = apiStatus === 'published';
  const status = isComplete && isUpstreamPublished ? 'published' : 'draft';

  return { status, missing };
}
