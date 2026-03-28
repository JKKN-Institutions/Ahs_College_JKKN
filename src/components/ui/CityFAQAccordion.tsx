"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface CityFAQAccordionProps {
  faqs: FAQ[];
  cityName: string;
}

export function CityFAQAccordion({ faqs, cityName }: CityFAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Allied Health Sciences College near {cityName} — Your Questions
          Answered
        </p>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-10"></div>

        <div className="text-left flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-colors ${
                open === i ? "border-[#7cb983]" : "border-gray-200"
              } bg-white`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">
                  {faq.q}
                </span>
                {open === i ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`faq-answer snippet-answer px-6 pb-5 text-sm text-gray-500 leading-relaxed ${
                  open === i ? "" : "hidden"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
