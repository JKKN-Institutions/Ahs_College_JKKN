import { listAhsFaculty } from '@/lib/services/staff-api';
import { staffToAhsFacultyRow } from '@/lib/adapters/staff-to-faculty';
import { rehostFacultyPhoto } from '@/lib/sync/photo-rehost';
import { checkFacultyCompleteness } from '@/lib/sync/draft-rule';
import { createServiceRoleClient } from '@/lib/supabase/service-role';
import type { SyncReport, SyncRowResult } from '@/lib/types/sync';

const COLLEGE_ID = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'ahs';

export async function syncFacultyFromMyJKKN(): Promise<SyncReport> {
  const start = Date.now();
  const supabase = createServiceRoleClient();

  const errors: string[] = [];
  const rows: SyncRowResult[] = [];
  let upserted = 0;
  let drafts = 0;
  let published = 0;
  let orphansSoftDeleted = 0;
  let slugRenames = 0;

  // 1. Fetch API rows
  const apiRows = await listAhsFaculty();

  // 2. Snapshot local slugs for rename detection
  const { data: localRows } = await supabase
    .from('faculty')
    .select('id, slug')
    .eq('synced_from_api', true);

  const localSlugMap = new Map<string, string>();
  for (const r of localRows ?? []) {
    localSlugMap.set(r.id, r.slug);
  }

  const processedIds = new Set<string>();

  // 3. Process each API row
  for (const apiRow of apiRows) {
    try {
      // 3a. Adapt
      const adapted = staffToAhsFacultyRow(apiRow);

      // 3b. Rehost photo
      const photoUrl = await rehostFacultyPhoto(
        apiRow.profile_picture,
        apiRow.staff_id,
        apiRow.id
      );

      // 3c. Completeness check
      const { status, missing } = checkFacultyCompleteness(
        adapted,
        photoUrl,
        apiRow.status
      );

      // 3d. Slug rename detection
      const oldSlug = localSlugMap.get(apiRow.id);
      if (oldSlug && oldSlug !== adapted.slug) {
        const { error: slugErr } = await supabase
          .from('faculty_slug_history')
          .upsert(
            {
              old_slug: oldSlug,
              new_slug: adapted.slug,
              faculty_id: apiRow.id,
              changed_at: new Date().toISOString(),
            },
            { onConflict: 'old_slug' }
          );

        if (slugErr) {
          errors.push(`slug history ${apiRow.id}: ${slugErr.message}`);
        } else {
          slugRenames++;
        }
      }

      // 3e. Slug collision guard — if a non-API row holds this slug, rename it
      const { data: collision } = await supabase
        .from('faculty')
        .select('id, synced_from_api')
        .eq('slug', adapted.slug)
        .neq('id', apiRow.id)
        .maybeSingle();

      if (collision && !collision.synced_from_api) {
        const legacySlug = `${adapted.slug}-legacy-${collision.id.slice(0, 8)}`;
        await supabase
          .from('faculty')
          .update({ slug: legacySlug, is_active: false, status: 'draft' })
          .eq('id', collision.id);
      }

      // 3f. Upsert
      const { error: upsertErr } = await supabase.from('faculty').upsert(
        {
          id: apiRow.id,
          college_id: COLLEGE_ID,
          ...adapted,
          photo_url: photoUrl,
          status,
          synced_from_api: true,
          staff_id: apiRow.staff_id,
          last_synced_at: new Date().toISOString(),
        },
        { onConflict: 'id' }
      );

      if (upsertErr) {
        errors.push(`upsert ${apiRow.id}: ${upsertErr.message}`);
      } else {
        upserted++;
        if (status === 'published') published++;
        else drafts++;
      }

      rows.push({ id: apiRow.id, name: adapted.name, status, missing });
      processedIds.add(apiRow.id);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      errors.push(`row ${apiRow.id}: ${msg}`);
    }
  }

  // 4. Orphan sweep — soft-delete local synced rows no longer in API
  for (const [localId] of localSlugMap) {
    if (!processedIds.has(localId)) {
      const { error: orphanErr } = await supabase
        .from('faculty')
        .update({ is_active: false, status: 'draft' })
        .eq('id', localId)
        .eq('synced_from_api', true);

      if (orphanErr) {
        errors.push(`orphan ${localId}: ${orphanErr.message}`);
      } else {
        orphansSoftDeleted++;
      }
    }
  }

  const report: SyncReport = {
    fetched: apiRows.length,
    upserted,
    drafts,
    published,
    orphansSoftDeleted,
    slugRenames,
    errors,
    rows,
    durationMs: Date.now() - start,
  };

  // 5. Structured log
  console.log(
    JSON.stringify({
      event: 'faculty_sync_completed',
      ...report,
      ts: new Date().toISOString(),
    })
  );

  return report;
}
