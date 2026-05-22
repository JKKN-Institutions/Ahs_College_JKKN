import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { courseBlogPosts } from "@/lib/course-blog-posts";
import CourseBlogCard from "@/components/course-blog/CourseBlogCard";

export const metadata: Metadata = createPageMetadata({
  title: "Course Career Insights — JKKN College of Allied Health Sciences",
  description:
    "Career guides, salary outlook, and future scope of allied health science courses in India. Pillar insights for cardiac, dialysis, radiology, OT, respiratory therapy, PA, critical care, medical record, and emergency care careers.",
  path: "/course-blog",
  keywords: [
    "allied health science career",
    "BSc course career guide",
    "JKKN AHS blog",
    "allied health career India",
    "paramedical course scope",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "JKKN Institutions", item: "https://jkkn.ac.in/" },
    { "@type": "ListItem", position: 2, name: "Allied Health Sciences", item: "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", position: 3, name: "Course Insights", item: "https://ahs.jkkn.ac.in/course-blog" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Course Career Insights — JKKN Allied Health Sciences",
  itemListElement: courseBlogPosts.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://ahs.jkkn.ac.in/course-blog/${p.slug}`,
    name: p.title,
  })),
};

export default function CourseBlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="bg-[#fbfbee] min-h-screen pb-20">
        {/* Header */}
        <header className="bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#063a23] text-white">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/80">
              <ol className="flex items-center gap-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white">Course Insights</li>
              </ol>
            </nav>
            <span className="inline-block bg-[#ffde59] text-[#0b6d41] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Career Guides
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
              Course Career Insights for Allied Health Aspirants
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
              Industry trends, real salary data, day-in-the-life stories, and global
              opportunities for every course we offer. Built to help you choose the
              right path — and own it.
            </p>
          </div>
        </header>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-5 md:px-8 mt-10 md:mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courseBlogPosts.map((post) => (
              <CourseBlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-6xl mx-auto px-5 md:px-8 mt-14 md:mt-20">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
              Ready to pick your course?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Admissions for 2026-27 are now open across all 9 allied health science
              programs. Speak with our counselors for personalized course guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.jkkn.ai/apply/jkkn-admission-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b6d41] hover:bg-[#085231] text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Apply Now
              </a>
              <a
                href="/admissions"
                className="bg-[#ffde59] text-[#0b6d41] font-semibold px-6 py-3 rounded-lg hover:brightness-95 transition"
              >
                View All Admissions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
