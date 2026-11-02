import type { CourseQuickFacts } from "@/lib/course-quick-facts";

/**
 * Short "course details" answer near the top of an AHS course page: a plain-words meaning line,
 * then one 40-60 word paragraph with duration, eligibility, JKKN seats and the Tamil Nadu list
 * count, and a jump link to the page's own "colleges in Tamil Nadu" section. Facts come from
 * src/lib/course-quick-facts.ts, which reads the course list files.
 */
export function CourseQuickAnswer({ facts }: { facts: CourseQuickFacts }) {
  const govtText = facts.govt > 0 ? `, ${facts.govt} government` : ", all self-financing";
  return (
    <section id="course-details" aria-labelledby="course-details-heading" className="px-4 pb-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-[#0b6d41]/15 shadow-sm p-5 md:p-7">
        <h2 id="course-details-heading" className="text-xl md:text-2xl font-black text-[#0b6d41] mb-3">
          {facts.heading} course details
        </h2>
        <p className="text-gray-900 text-base leading-relaxed mb-3">
          <strong>In simple words:</strong> {facts.meaning}
        </p>
        <p className="text-gray-900 text-base leading-relaxed">
          At JKKN College of Allied Health Sciences, Komarapalayam, {facts.shortName} runs 3 years plus a 1-year
          internship under the TN Dr. M.G.R. Medical University. Eligibility: {facts.eligibility} JKKN has{" "}
          {facts.seats} seats; {facts.total} Tamil Nadu colleges offer it (university list {facts.listYear})
          {govtText}.
        </p>
        <a
          href={`#${facts.listAnchor}`}
          className="inline-block mt-4 px-5 py-2.5 rounded-full bg-[#0b6d41] text-white text-sm font-bold hover:bg-[#095c37] transition-colors"
        >
          See all {facts.total} Tamil Nadu colleges
        </a>
      </div>
    </section>
  );
}
