import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import type { Metadata } from 'next';
import { Navbar as Header } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import CampusBlogContent from './CampusBlogContent';
import { blogFromMyJkkn, blogSiteKey, getPost as getMyJkknPost, listPosts } from '@/lib/blog/myjkkn';
import { MYJKKN_URL } from '@/lib/blog/config';

export const revalidate = 300;

// Cached fetcher — deduplicates DB call between generateMetadata and the page component
const getPost = cache(async (slug: string) => {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();
  return data;
});

type PageProps = {
  params: Promise<{ slug: string }>;
  /** ?preview=<token>: the Preview link in MyJKKN opens a draft (BLOG_SOURCE=myjkkn only). */
  searchParams: Promise<{ preview?: string | string[] }>;
};

function previewToken(preview: string | string[] | undefined): string | undefined {
  return (Array.isArray(preview) ? preview[0] : preview) || undefined;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const detail = await getMyJkknPost(slug, previewToken((await searchParams).preview));
    if (!detail) {
      return {
        title: 'Campus Blog | JKKN College of Allied Health Sciences',
        description: 'Latest campus news and updates from JKKN College of Allied Health Sciences.',
      };
    }
    const { post } = detail;
    // The SEO fields are filled in MyJKKN; where the writer left one empty, MyJKKN has
    // already fallen back to the title, excerpt, featured image and the post's own address.
    const title =
      post.seo.title === post.title ? `${post.title} | JKKN AHS Campus Blog` : post.seo.title;
    const description =
      post.seo.description ??
      'Read the latest campus news and updates from JKKN College of Allied Health Sciences.';
    const imageUrl = post.seo.og_image ?? 'https://ahs.jkkn.ac.in/allied-health-science-hero.webp';
    return {
      title,
      description,
      ...(post.seo.keywords.length > 0 && { keywords: post.seo.keywords }),
      alternates: { canonical: post.seo.canonical_url },
      openGraph: {
        title,
        description,
        url: `https://ahs.jkkn.ac.in/blog/campus/${slug}`,
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
      ...((detail.preview || post.seo.noindex) && {
        robots: { index: false, follow: !detail.preview },
      }),
    };
  }

  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Campus Blog | JKKN College of Allied Health Sciences',
      description: 'Latest campus news and updates from JKKN College of Allied Health Sciences.',
    };
  }

  const title = `${post.title} | JKKN AHS Campus Blog`;
  const description = post.excerpt ?? 'Read the latest campus news and updates from JKKN College of Allied Health Sciences.';
  const url = `https://ahs.jkkn.ac.in/blog/campus/${slug}`;
  const imageUrl = post.cover_image_url ?? 'https://ahs.jkkn.ac.in/allied-health-science-hero.webp';

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

/** The post page when posts come from MyJKKN (BLOG_SOURCE=myjkkn). Same markup as below. */
async function MyJkknBlogPost({ slug, token }: { slug: string; token?: string }) {
  const detail = await getMyJkknPost(slug, token);
  if (!detail) notFound();
  const { post, related, comments, preview } = detail;

  const popularPosts = (await listPosts(4)).posts.filter((p) => p.slug !== slug).slice(0, 3);
  const { processedHtml, tocItems } = processContent(post.content);
  const { words, readTime } = calcReadMeta(post.content);

  const siteUrl = 'https://ahs.jkkn.ac.in';
  const postUrl = `${siteUrl}/blog/campus/${slug}`;
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo.description ?? post.excerpt ?? '',
    url: postUrl,
    datePublished: post.published_at ?? post.created_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Person',
      name: 'JKKN Editorial Team',
      url: siteUrl,
    },
    publisher: { "@id": "https://ahs.jkkn.ac.in/#organization" },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    ...(post.cover_image_url ? { image: post.cover_image_url } : {}),
    ...(post.tags ? { keywords: post.tags } : {}),
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
      {preview ? (
        <div className="sticky top-0 z-[60] bg-amber-400 text-amber-950">
          <p className="max-w-7xl mx-auto px-4 py-2 text-sm font-semibold">
            Draft Preview — this post is not published yet and is hidden from search engines.
          </p>
        </div>
      ) : (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </>
      )}
      <Header />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts}
        relatedPosts={related}
        initialComments={comments}
        commentsVia={{ api: `${MYJKKN_URL}/api/public/blog/comments`, site: blogSiteKey() }}
        commentFormOpen={post.allow_comments && !preview}
      />
      <Footer />
    </div>
  );
}

export default async function CampusBlogPost({ params, searchParams }: PageProps) {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    return <MyJkknBlogPost slug={slug} token={previewToken((await searchParams).preview)} />;
  }

  const post = await getPost(slug);

  if (!post) notFound();

  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

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
    publisher: { "@id": "https://ahs.jkkn.ac.in/#organization" },
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
