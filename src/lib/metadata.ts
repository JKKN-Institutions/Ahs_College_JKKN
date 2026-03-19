import type { Metadata } from "next";

const SITE_URL = "https://ahs.jkkn.ac.in";
const SITE_NAME = "JKKN College of Allied Health Sciences";
const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/allied-health-science-hero.png`,
  width: 1200,
  height: 630,
  alt: "JKKN College of Allied Health Sciences — Best AHS College in Tamil Nadu",
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
  ogImage,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  ogImage?: { url: string; width: number; height: number; alt: string };
  datePublished?: string;
  dateModified?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
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
      canonical: url,
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
