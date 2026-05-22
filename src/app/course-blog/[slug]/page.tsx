import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";
import {
  getAllCourseBlogSlugs,
  getCourseBlogPostBySlug,
} from "@/lib/course-blog-posts";
import CourseBlogLayout from "@/components/course-blog/CourseBlogLayout";

import CardiacTechnologyContent from "../_content/scope-of-cardiac-technology-in-india";
import DialysisTechnologyContent from "../_content/future-of-dialysis-technology-careers";
import RadiologyContent from "../_content/radiology-imaging-technology-career-guide";
import OperationTheatreContent from "../_content/operation-theatre-anaesthesia-technologist-roadmap";
import RespiratoryTherapyContent from "../_content/respiratory-therapy-scope-and-salary-india";
import PhysicianAssistantContent from "../_content/physician-assistant-career-india";
import CriticalCareContent from "../_content/critical-care-technology-future-india";
import MedicalRecordContent from "../_content/medical-record-science-career-india";
import EmergencyCareContent from "../_content/accident-emergency-care-technician-guide";

const contentMap: Record<string, React.ComponentType> = {
  "scope-of-cardiac-technology-in-india": CardiacTechnologyContent,
  "future-of-dialysis-technology-careers": DialysisTechnologyContent,
  "radiology-imaging-technology-career-guide": RadiologyContent,
  "operation-theatre-anaesthesia-technologist-roadmap": OperationTheatreContent,
  "respiratory-therapy-scope-and-salary-india": RespiratoryTherapyContent,
  "physician-assistant-career-india": PhysicianAssistantContent,
  "critical-care-technology-future-india": CriticalCareContent,
  "medical-record-science-career-india": MedicalRecordContent,
  "accident-emergency-care-technician-guide": EmergencyCareContent,
};

export async function generateStaticParams() {
  return getAllCourseBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = getCourseBlogPostBySlug(slug);
  if (!post) {
    return createPageMetadata({
      title: "Post Not Found | JKKN Allied Health Sciences",
      description: "The blog post you are looking for does not exist.",
      path: `/course-blog/${slug}`,
    });
  }
  return createPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/course-blog/${post.slug}`,
    keywords: post.keywords,
    ogType: "article",
    ogImage: {
      url: `https://ahs.jkkn.ac.in${post.heroImage}`,
      width: 1200,
      height: 630,
      alt: post.heroImageAlt,
    },
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
  });
}

export default async function CourseBlogDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getCourseBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const ContentComponent = contentMap[post.slug];
  if (!ContentComponent) {
    notFound();
  }

  const url = `https://ahs.jkkn.ac.in/course-blog/${post.slug}`;
  const imageUrl = `https://ahs.jkkn.ac.in${post.heroImage}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "JKKN Institutions", item: "https://jkkn.ac.in/" },
      { "@type": "ListItem", position: 2, name: "Allied Health Sciences", item: "https://ahs.jkkn.ac.in/" },
      { "@type": "ListItem", position: 3, name: "Course Insights", item: "https://ahs.jkkn.ac.in/course-blog" },
      { "@type": "ListItem", position: 4, name: post.title, item: url },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.metaDescription,
    image: [imageUrl],
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://ahs.jkkn.ac.in/",
    },
    publisher: {
      "@type": "CollegeOrUniversity",
      name: "JKKN College of Allied Health Sciences",
      logo: {
        "@type": "ImageObject",
        url: "https://ahs.jkkn.ac.in/ahs-logo.svg",
      },
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
    about: {
      "@type": "EducationalOccupationalProgram",
      name: post.courseName,
      url: `https://ahs.jkkn.ac.in/${post.courseSlug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: post.modifiedDate,
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: post.metaTitle,
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-question", ".faq-answer", "h1", "h2"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <CourseBlogLayout post={post}>
        <ContentComponent />
      </CourseBlogLayout>
    </>
  );
}
