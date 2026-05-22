import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { CourseBlogPost } from "@/lib/course-blog-posts";

type Props = {
  post: CourseBlogPost;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function CourseBlogCard({ post }: Props) {
  return (
    <Link
      href={`/course-blog/${post.slug}`}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-[#ffde59] text-[#0b6d41] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h2 className="text-lg md:text-xl font-bold text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#0b6d41] transition-colors line-clamp-3">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {post.readTimeMinutes} min · {formatDate(post.publishedDate)}
          </span>
          <span className="inline-flex items-center gap-1 text-[#0b6d41] font-semibold group-hover:gap-2 transition-all">
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
