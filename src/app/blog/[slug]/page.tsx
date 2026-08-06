import { notFound } from 'next/navigation';
import BlogDetailContent from './BlogDetailContent';

// This route renders ONE hardcoded article. Its real home is the slug layout.tsx
// canonicalises to; before this, every other slug answered HTTP 200 with the same article,
// which let the domain offer an unlimited number of invented URLs for indexing.
const REAL_SLUG = 'allied-health-sciences-admission-2026';

// dynamicParams: false is what actually produces the 404. notFound() alone was not enough:
// verified on a production build, it rendered the not-found body but left the status at 200,
// so the URL still looked indexable. Letting the router reject the param is status-safe.
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ slug: REAL_SLUG }];
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== REAL_SLUG) notFound();
  return <BlogDetailContent />;
}
