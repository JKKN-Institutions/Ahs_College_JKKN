import { createServiceRoleClient } from '@/lib/supabase/service-role';

const BUCKET = 'faculty-photos';

/**
 * Download a photo from MyJKKN storage and re-upload to the AHS bucket.
 * Returns the public URL on success, null on any failure. Never throws.
 */
export async function rehostFacultyPhoto(
  apiUrl: string | null | undefined,
  staffId: string | null,
  apiUuid: string
): Promise<string | null> {
  if (!apiUrl) return null;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.warn(
        `[photo-rehost] Failed to download ${apiUrl}: ${res.status}`
      );
      return null;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get('content-type') ?? 'image/jpeg';
    const ext = contentType.includes('png')
      ? 'png'
      : contentType.includes('webp')
        ? 'webp'
        : 'jpg';

    const key = `ahs/${staffId || apiUuid}.${ext}`;

    const supabase = createServiceRoleClient();
    const { error } = await supabase.storage.from(BUCKET).upload(key, buffer, {
      upsert: true,
      cacheControl: '3600',
      contentType,
    });

    if (error) {
      console.warn(`[photo-rehost] Upload failed for ${key}:`, error.message);
      return null;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(BUCKET).getPublicUrl(key);

    return publicUrl;
  } catch (err) {
    console.warn(`[photo-rehost] Error for ${apiUuid}:`, err);
    return null;
  }
}
