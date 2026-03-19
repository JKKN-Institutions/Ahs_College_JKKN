"use client";

import Link from 'next/link';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mx-auto">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            Something went wrong
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We could not load the blog content. This may be a temporary issue.
            {error.digest && (
              <span className="block mt-1 text-xs text-gray-400">
                Error ID: {error.digest}
              </span>
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#0b6d41] text-white font-medium text-sm hover:bg-[#085231] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0b6d41] focus:ring-offset-2"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
