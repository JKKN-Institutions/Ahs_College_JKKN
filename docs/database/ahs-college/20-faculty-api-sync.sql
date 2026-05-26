-- Faculty API Sync — AHS College schema additions
-- Run against AHS Supabase project BEFORE deploying sync code.
-- Ref: czjzizrzmqcdwgtxwuks  Institution: 9c1554e8-12a2-4b76-a9d6-8242bb05eba1

-- ─── 1. New columns on faculty ───────────────────────────────────────────────

ALTER TABLE public.faculty
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'published',
  ADD COLUMN IF NOT EXISTS synced_from_api boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS staff_id text,
  ADD COLUMN IF NOT EXISTS last_synced_at timestamptz;

-- Mark all existing manual rows as non-synced, published
UPDATE public.faculty
SET synced_from_api = false, status = 'published'
WHERE synced_from_api IS NULL OR synced_from_api = false;

-- Partial index for sync queries (only synced rows)
CREATE INDEX IF NOT EXISTS faculty_synced_from_api_idx
  ON public.faculty (id) WHERE synced_from_api = true;

-- ─── 2. Slug history table ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.faculty_slug_history (
  old_slug  text        PRIMARY KEY,
  new_slug  text        NOT NULL,
  faculty_id uuid       NOT NULL REFERENCES public.faculty(id) ON DELETE CASCADE,
  changed_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.faculty_slug_history ENABLE ROW LEVEL SECURITY;

-- Public read (middleware runs without auth session)
CREATE POLICY "Public read slug history"
  ON public.faculty_slug_history FOR SELECT USING (true);

-- Service-role write only
CREATE POLICY "Service role write slug history"
  ON public.faculty_slug_history FOR ALL
  USING (auth.role() = 'service_role');

-- ─── 3. Storage bucket for re-hosted photos ─────────────────────────────────

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'faculty-photos',
  'faculty-photos',
  true,
  5242880, -- 5 MB
  ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Public read
CREATE POLICY "Public read faculty photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'faculty-photos');

-- Service-role upload
CREATE POLICY "Service role upload faculty photos"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'faculty-photos' AND auth.role() = 'service_role');

-- Service-role overwrite
CREATE POLICY "Service role update faculty photos"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'faculty-photos' AND auth.role() = 'service_role');
