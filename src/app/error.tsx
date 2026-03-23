'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Global Error]', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbfbee] px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-[#0b6d41] mb-3">Something went wrong</h2>
        <p className="text-gray-500 text-sm mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-[#0b6d41] text-white rounded-full font-semibold text-sm hover:bg-[#085231] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
