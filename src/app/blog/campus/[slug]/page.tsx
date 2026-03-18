import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Navbar as Header } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import CampusBlogContent from './CampusBlogContent';

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: post } = await supabase
    .from('blogs')
    .select('title, excerpt, cover_image_url, published_at, created_at')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) {
    return {
      title: 'Campus Blog | JKKN College of Allied Health Sciences',
      description: 'Latest campus news and updates from JKKN College of Allied Health Sciences.',
    };
  }

  const title = `${post.title} | JKKN AHS Campus Blog`;
  const description = post.excerpt ?? 'Read the latest campus news and updates from JKKN College of Allied Health Sciences.';
  const url = `https://ahs.jkkn.ac.in/blog/campus/${slug}`;
  const imageUrl = post.cover_image_url ?? 'https://ahs.jkkn.ac.in/allied-health-science-hero.png';

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'JKKN College of Allied Health Sciences',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      type: 'article',
      publishedTime: post.published_at ?? post.created_at,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

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

export default async function CampusBlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) notFound();

  const [{ data: popularPosts }, { data: relatedPosts }, { data: initialComments }] = await Promise.all([
    // Popular: other recent published blogs
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Related: same category, exclude current
    supabase
      .from('blogs')
      .select(
        'id, title, slug, category, excerpt, cover_image_url, published_at, created_at'
      )
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .eq('category', post.category ?? 'General')
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Approved comments for this post
    supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('blog_id', post.id)
      .eq('status', 'approved')
      .order('created_at', { ascending: true }),
  ]);

  // Structured posts (new format with sections JSONB) skip HTML processing
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

  const siteUrl = 'https://ahs.jkkn.ac.in';
  const postUrl = `${siteUrl}/blog/campus/${slug}`;
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt ?? '',
    url: postUrl,
    datePublished: post.published_at ?? post.created_at,
    dateModified: post.updated_at ?? post.published_at ?? post.created_at,
    author: {
      '@type': 'Person',
      name: 'JKKN Editorial Team',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'JKKN College of Allied Health Sciences',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    ...(post.cover_image_url ? { image: post.cover_image_url } : {}),
    ...(post.tags ? { keywords: Array.isArray(post.tags) ? post.tags.join(', ') : post.tags } : {}),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'JKKN Institutions', item: 'https://jkkn.ac.in/' },
      { '@type': 'ListItem', position: 2, name: 'Allied Health Sciences', item: siteUrl },
      { '@type': 'ListItem', position: 3, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 4, name: post.title, item: postUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts ?? []}
        relatedPosts={relatedPosts ?? []}
        initialComments={initialComments ?? []}
      />
      <Footer />
    </div>
  );
}
