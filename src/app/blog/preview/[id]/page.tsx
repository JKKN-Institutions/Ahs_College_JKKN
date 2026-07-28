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

export default async function BlogPreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  // Only a logged-in admin may preview unpublished content.
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) notFound();

  const collegeId = await getAdminCollegeId();

  // No is_published filter — that is the whole point of the preview.
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .eq('college_id', collegeId)
    .single();

  if (!post) notFound();

  const [{ data: relatedPosts }, { data: initialComments }] = await Promise.all([
    supabase
      .from('blogs')
      .select('id, title, slug, category, excerpt, cover_image_url, published_at, created_at')
      .eq('college_id', collegeId)
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
      {/* Preview banner — admin only, not part of the live page */}
      <div className="sticky top-0 z-[60] bg-amber-400 text-amber-950">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-3 flex-wrap">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <EyeOff className="w-4 h-4 flex-shrink-0" />
            Preview mode — status:{' '}
            <span className="uppercase tracking-wide">{status}</span>
            {status !== 'published' && (
              <span className="font-normal hidden sm:inline">
                · idhu public-ku theriyaadhu
              </span>
            )}
          </span>
          <Link
            href={`/admin/blogs/${post.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold bg-amber-950 text-amber-50 px-3 py-1.5 rounded-lg hover:bg-amber-900 transition"
          >
            <Pencil className="w-3.5 h-3.5" />
            Back to editor
          </Link>
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
