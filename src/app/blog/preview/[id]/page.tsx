import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Navbar as Header } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import CampusBlogContent from '../../campus/[slug]/CampusBlogContent';
import { Pencil, EyeOff } from 'lucide-react';

// Admin-only draft preview — never cached, never indexed.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Draft Preview',
  robots: { index: false, follow: false, nocache: true },
};

/** Extract h2/h3 headings from HTML and inject id attributes for TOC */
function processContent(
  html: string
): { processedHtml: string; tocItems: { id: string; label: string }[] } {
  if (!html) return { processedHtml: '', tocItems: [] };

  const tocItems: { id: string; label: string }[] = [];
  const seen = new Map<string, number>();

  const processedHtml = html.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (_, level: string, attrs: string, inner: string) => {
      const label = inner.replace(/<[^>]+>/g, '').trim();
      const base = label
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      const count = seen.get(base) ?? 0;
      const id = count > 0 ? `${base}-${count}` : base;
      seen.set(base, count + 1);

      tocItems.push({ id, label });

      if (!attrs.includes('id=')) {
        return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
      }
      return `<h${level}${attrs}>${inner}</h${level}>`;
    }
  );

  return { processedHtml, tocItems };
}

/** Estimate reading time from HTML content */
function calcReadMeta(content: string): { words: number; readTime: number } {
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, readTime: Math.max(1, Math.ceil(words / 200)) };
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

interface PreviewPost {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  author_name: string | null;
  cover_image_url: string | null;
  excerpt: string | null;
  published_at: string | null;
  created_at: string;
  tags: string | null;
  read_time: string | null;
  content: string | null;
  sections: unknown | null;
  college_id: string;
  is_published: boolean | null;
  post_status: string | null;
}

export default async function BlogPreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { id } = await params;
  const { token } = await searchParams;
  const supabase = await createClient();

  let post: PreviewPost | null = null;
  let viaShareLink = false;

  // Path 1 — anyone holding the secret share link. The RPC is SECURITY DEFINER
  // and only returns the row when the token matches, so no login is needed.
  if (token && UUID_RE.test(token) && UUID_RE.test(id)) {
    const { data } = await supabase.rpc('get_preview_blog', { p_id: id, p_token: token });
    post = ((Array.isArray(data) ? data[0] : data) ?? null) as PreviewPost | null;
    viaShareLink = !!post;
  }

  // Path 2 — logged-in staff of this college (no token needed). RLS decides.
  if (!post) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) notFound();

    const collegeId = await getAdminCollegeId();
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .eq('college_id', collegeId)
      .single();
    post = data as PreviewPost | null;
  }

  if (!post) notFound();

  const [{ data: relatedPosts }, { data: initialComments }] = await Promise.all([
    supabase
      .from('blogs')
      .select('id, title, slug, category, excerpt, cover_image_url, published_at, created_at')
      .eq('college_id', post.college_id)
      .eq('is_published', true)
      .eq('category', post.category ?? 'General')
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('blog_id', post.id)
      .eq('status', 'approved')
      .order('created_at', { ascending: true }),
  ]);

  const isStructured = !!post.sections;
  const contentHtml = post.content ?? '';
  const isHtml = contentHtml.includes('<');

  const rawHtml = isStructured
    ? ''
    : isHtml
    ? contentHtml
    : contentHtml
        .split(/\n\n+/)
        .map((p: string) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
        .join('');

  const { processedHtml, tocItems } = isStructured
    ? { processedHtml: '', tocItems: [] }
    : processContent(rawHtml);

  const { words, readTime } = calcReadMeta(rawHtml);

  const status = post.post_status ?? (post.is_published ? 'published' : 'draft');

  return (
    <div className="min-h-screen bg-white">
      {/* Preview banner — never part of the live page */}
      <div className="sticky top-0 z-[60] bg-amber-400 text-amber-950">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-3 flex-wrap">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <EyeOff className="w-4 h-4 flex-shrink-0" />
            {viaShareLink ? 'Shared preview' : 'Preview mode'} — status:{' '}
            <span className="uppercase tracking-wide">{status}</span>
            {status !== 'published' && (
              <span className="font-normal hidden sm:inline">
                · not visible to the public
              </span>
            )}
          </span>
          {/* Share-link visitors are not staff — no admin link for them. */}
          {!viaShareLink && (
            <Link
              href={`/admin/blogs/${post.id}`}
              className="flex items-center gap-1.5 text-xs font-semibold bg-amber-950 text-amber-50 px-3 py-1.5 rounded-lg hover:bg-amber-900 transition"
            >
              <Pencil className="w-3.5 h-3.5" />
              Back to editor
            </Link>
          )}
        </div>
      </div>

      <Header />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={[]}
        relatedPosts={relatedPosts ?? []}
        initialComments={initialComments ?? []}
      />
      <Footer />
    </div>
  );
}
