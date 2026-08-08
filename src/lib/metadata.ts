import type { Metadata } from "next";

const SITE_URL = "https://ahs.jkkn.ac.in";
const SITE_NAME = "JKKN College of Allied Health Sciences";
const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/allied-health-science-hero.webp`,
  width: 1200,
  height: 630,
  alt: "JKKN College of Allied Health Sciences — Best AHS College in Tamil Nadu",
};

export function createPageMetadata({
  title,
  description,
  path,
  canonicalPath,
  keywords,
  ogType = "website",
  ogImage,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  /**
   * DEP-15. Point rel=canonical at a DIFFERENT page than this one.
   *
   * Defaults to `path`, so every existing caller is unchanged and every page keeps
   * self-canonicalising. Set it only where two URLs are measured to be competing for the
   * same searches and GSC says one of them should win.
   *
   * Deliberately does NOT change openGraph.url, which stays this page's own URL — the
   * canonical is a signal to search engines about which page to index, while og:url is what
   * a share card resolves to, and conflating them would silently change how every share of
   * this page behaves.
   *
   * Do not set this from a hunch. The evidence for the one page that uses it today is in
   * artefacts/live-verify/dep-15-canonical-remeasure-2026-08-07.md: 62 duplicate-shaped pairs
   * exist across the estate and 41 of them share zero queries, so most are a legitimate
   * course-page / admission-page split and consolidating them would delete an intent rather
   * than a duplicate.
   */
  canonicalPath?: string;
  keywords?: string[];
  ogType?: "website" | "article";
  ogImage?: { url: string; width: number; height: number; alt: string };
  datePublished?: string;
  dateModified?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath ?? path}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    ...(keywords && { keywords }),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [ogImage ?? DEFAULT_OG_IMAGE],
      locale: "en_IN",
      type: ogType,
      ...(ogType === "article" && datePublished && { publishedTime: datePublished }),
      ...(ogType === "article" && dateModified && { modifiedTime: dateModified }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [(ogImage ?? DEFAULT_OG_IMAGE).url],
    },
    ...(dateModified && {
      other: {
        "article:modified_time": dateModified,
        ...(datePublished && { "article:published_time": datePublished }),
      },
    }),
  };
}
