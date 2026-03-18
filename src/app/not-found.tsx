import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — JKKN College of Allied Health Sciences",
  description: "The page you are looking for does not exist. Browse our allied health science courses or contact us for help.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been moved or doesn&apos;t exist.
        Let us help you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="btn-primary px-6 py-3 rounded-lg text-white font-medium"
        >
          Go to Homepage
        </Link>
        <Link
          href="/contact"
          className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
