import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Phone, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { CourseBlogPost } from "@/lib/course-blog-posts";
import { getRelatedCourseBlogPosts } from "@/lib/course-blog-posts";

type Props = {
  post: CourseBlogPost;
  children: React.ReactNode;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function CourseBlogLayout({ post, children }: Props) {
  const related = getRelatedCourseBlogPosts(post.slug, 3);
  const coursePath = `/${post.courseSlug}`;
  const admissionPath = `/admissions/${post.courseSlug}`;

  return (
    <article className="bg-[#fbfbee] min-h-screen pb-20">
      {/* Hero */}
      <header className="relative bg-gradient-to-br from-[#0b6d41] via-[#085231] to-[#063a23] text-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={post.heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/course-blog" className="hover:text-white">Course Insights</Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-white">
                {post.courseName}
              </li>
            </ol>
          </nav>

          <span className="inline-block bg-[#ffde59] text-[#0b6d41] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 max-w-4xl">
            {post.title}
          </h1>

          <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(post.publishedDate)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTimeMinutes} min read
            </span>
          </div>
        </div>
      </header>

      {/* Featured image */}
      <div className="max-w-5xl mx-auto px-5 md:px-8 -mt-8 md:-mt-12 relative z-10">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl ring-8 ring-[#fbfbee]">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body grid */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        {/* Article column */}
        <div>
          <div
            className="text-[15px] md:text-base leading-[1.75] text-gray-800
              [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#1a1a1a] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:scroll-mt-24 [&_h2]:leading-tight
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#0b6d41] [&_h3]:mt-7 [&_h3]:mb-3
              [&_p]:mb-4
              [&_ul]:mb-5 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:space-y-2
              [&_ol]:mb-5 [&_ol]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-2
              [&_li]:marker:text-[#0b6d41]
              [&_a]:text-[#0b6d41] [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#085231]
              [&_strong]:text-[#1a1a1a] [&_strong]:font-semibold
              [&_blockquote]:border-l-4 [&_blockquote]:border-[#ffde59] [&_blockquote]:bg-[#fdfde8] [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:rounded-r-lg [&_blockquote]:my-6 [&_blockquote]:italic
              [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:text-sm
              [&_th]:bg-[#0b6d41] [&_th]:text-white [&_th]:font-semibold [&_th]:p-3 [&_th]:text-left
              [&_td]:border [&_td]:border-gray-200 [&_td]:p-3
              [&_tr:nth-child(even)]:bg-gray-50"
          >
            {children}
          </div>

          {/* FAQ */}
          <section id="faq" className="mt-14 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {post.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <summary className="faq-question cursor-pointer list-none p-5 flex items-center justify-between gap-4 font-semibold text-[#1a1a1a] hover:bg-gray-50 transition-colors">
                    <span>{faq.q}</span>
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#0b6d41] text-white flex items-center justify-center text-lg font-light group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="faq-answer px-5 pb-5 pt-0 text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-14 bg-gradient-to-br from-[#0b6d41] to-[#085231] rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to start your {post.courseName} journey?
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed max-w-2xl">
              JKKN College of Allied Health Sciences offers state-of-the-art learning labs,
              clinical training in partner hospitals, and 92% placement support.
              Admissions for 2026-27 are now open.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ffde59] text-[#0b6d41] font-semibold px-6 py-3 rounded-lg hover:brightness-95 transition"
              >
                <GraduationCap size={18} />
                Apply Now
              </a>
              <Link
                href={admissionPath}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Admission Details
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
                Related Course Insights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/course-blog/${rp.slug}`}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={rp.heroImage}
                        alt={rp.heroImageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-[#0b6d41] uppercase tracking-wider">
                        {rp.category}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-[#1a1a1a] leading-snug group-hover:text-[#0b6d41] transition-colors line-clamp-3">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sticky sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start space-y-5">
          {/* TOC */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b6d41] mb-3">
              On This Page
            </h3>
            <ol className="space-y-2 text-sm">
              {post.tableOfContents.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex gap-2 text-gray-700 hover:text-[#0b6d41] transition-colors"
                  >
                    <span className="text-[#0b6d41] font-semibold">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Apply CTA */}
          <div className="bg-gradient-to-br from-[#0b6d41] to-[#085231] rounded-xl p-5 text-white shadow-sm">
            <h3 className="text-base font-bold mb-2">
              Apply for {post.courseName}
            </h3>
            <p className="text-sm text-white/85 mb-4">
              Admissions for 2026-27 are open. Limited Government + Management quota seats.
            </p>
            <a
              href={siteConfig.admissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#ffde59] text-[#0b6d41] font-semibold py-2.5 rounded-lg hover:brightness-95 transition"
            >
              Apply Now
            </a>
            <Link
              href={admissionPath}
              className="block w-full text-center mt-2 text-sm text-white/90 hover:text-white"
            >
              View course details →
            </Link>
          </div>

          {/* Course quick links */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b6d41] mb-3">
              Explore Further
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={coursePath}
                  className="text-gray-700 hover:text-[#0b6d41] flex items-center gap-1.5"
                >
                  → {post.courseName} program
                </Link>
              </li>
              <li>
                <Link
                  href={admissionPath}
                  className="text-gray-700 hover:text-[#0b6d41] flex items-center gap-1.5"
                >
                  → Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-gray-700 hover:text-[#0b6d41] flex items-center gap-1.5">
                  → Learning lab facilities
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-gray-700 hover:text-[#0b6d41] flex items-center gap-1.5">
                  → Learning Commons
                </Link>
              </li>
              <li>
                <Link href="/hostel" className="text-gray-700 hover:text-[#0b6d41] flex items-center gap-1.5">
                  → Hostel facilities
                </Link>
              </li>
              <li>
                <Link href="/placements" className="text-gray-700 hover:text-[#0b6d41] flex items-center gap-1.5">
                  → Placement record
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#ffde59]/30 border border-[#ffde59] rounded-xl p-5">
            <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">Have questions?</h3>
            <p className="text-sm text-gray-700 mb-3">
              Speak with our admission counselors.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-[#0b6d41] font-semibold text-sm hover:underline"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block mt-1 text-xs text-gray-600 hover:text-[#0b6d41]"
            >
              {siteConfig.email}
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}
