"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export function AdmissionPopup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      onClick={() => setVisible(false)}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setVisible(false)}
          aria-label="Close popup"
          className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X size={18} className="text-gray-700" />
        </button>

        <a
          href="https://www.jkkn.ai/apply/jkkn-admission-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ahs-pop-up-poster.jpg"
            alt="JKKN Allied Health Sciences Admissions Open 2026-27"
            width={600}
            height={600}
            className="w-full h-auto rounded-lg shadow-2xl cursor-pointer"
            priority
          />
        </a>
      </div>
    </div>
  );
}
