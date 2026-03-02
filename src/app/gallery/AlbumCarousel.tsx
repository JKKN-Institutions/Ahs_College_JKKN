'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
  caption: string;
}

interface AlbumCarouselProps {
  name: string;
  images: CarouselImage[];
}

export default function AlbumCarousel({ name, images }: AlbumCarouselProps) {
  const perPage = 3;
  const totalPages = Math.ceil(images.length / perPage);
  const [page, setPage] = useState(0);

  if (images.length === 0) return null;

  const visible = images.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c2e] mb-6">{name}</h2>

      <div className="relative flex items-center gap-4">
        {/* Left arrow */}
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Images */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((img, i) => (
            <div
              key={page * perPage + i}
              className="relative rounded-xl overflow-hidden shadow-md"
              style={{ height: '260px' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page >= totalPages - 1}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === page ? 'bg-[#1e7f4e]' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
