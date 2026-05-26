import type { StaffApiRow, StaffApiResponse } from '@/lib/schemas/staff-api';

const AHS_INSTITUTION_ID =
  process.env.JKKN_AHS_INSTITUTION_ID ?? '9c1554e8-12a2-4b76-a9d6-8242bb05eba1';

function getBaseUrl(): string {
  return process.env.JKKN_API_BASE_URL ?? 'https://www.jkkn.ai/api';
}

function getApiKey(): string {
  const key = process.env.JKKN_API_KEY;
  if (!key) throw new Error('[staff-api] JKKN_API_KEY is not set');
  return key;
}

async function fetchStaff(roleKey: string): Promise<StaffApiRow[]> {
  const base = getBaseUrl();
  const params = new URLSearchParams({
    institution_id: AHS_INSTITUTION_ID,
    role_key: roleKey,
    is_active: 'true',
    has_extended_profile: 'true',
    all: 'true',
  });

  const url = `${base}/api-management/staff?${params}`;
  let res = await fetch(url, {
    headers: { Authorization: `Bearer ${getApiKey()}` },
    cache: 'no-store',
  });

  // One retry on 429
  if (res.status === 429) {
    const retryAfter = parseInt(res.headers.get('Retry-After') ?? '5', 10);
    await new Promise((r) => setTimeout(r, retryAfter * 1000));
    res = await fetch(url, {
      headers: { Authorization: `Bearer ${getApiKey()}` },
      cache: 'no-store',
    });
  }

  if (!res.ok) {
    throw new Error(
      `[staff-api] ${roleKey} fetch failed: ${res.status} ${res.statusText}`
    );
  }

  const body: StaffApiResponse = await res.json();
  return body.data;
}

/**
 * Fetch all active AHS faculty with extended profiles from MyJKKN.
 * Uses role_key=faculty (MyJKKN role_name: "Facilitator").
 */
export async function listAhsFaculty(): Promise<StaffApiRow[]> {
  const rows = await fetchStaff('faculty');

  // Dedupe by UUID (shouldn't happen with single role, but defensive)
  const seen = new Set<string>();
  return rows.filter((r) => {
    if (seen.has(r.id)) return false;
    seen.add(r.id);
    return true;
  });
}
