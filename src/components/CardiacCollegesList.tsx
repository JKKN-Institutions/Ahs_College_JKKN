import Link from "next/link";
import {
  CARDIAC_LIST_SOURCE,
  CARDIAC_COLLEGES_BY_DISTRICT,
  GOVERNMENT_CARDIAC_COLLEGES,
  GOVERNMENT_CARDIAC_COUNT,
  GOVERNMENT_CARDIAC_SEATS,
  districtTotals,
  type CardiacCollege,
  type District,
} from "@/lib/cardiac-colleges-tn";

// Answers "B.Sc cardiac technology colleges in <district / Tamil Nadu>" with the university's own
// list, so the page says which colleges exist instead of only describing ours. Always rendered as
// plain HTML (no tabs, no accordion) so a crawler reads every row.

const DISTRICTS: District[] = ["Namakkal", "Erode", "Salem"];

function CollegeTable({ rows, caption }: { rows: CardiacCollege[]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-sm text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-[#f0f7f2] text-[#0b6d41]">
          <tr>
            <th scope="col" className="px-4 py-3 font-bold">College</th>
            <th scope="col" className="px-4 py-3 font-bold">Place</th>
            <th scope="col" className="px-4 py-3 font-bold text-right">Seats</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code} className={`border-t border-gray-100 ${r.isJkkn ? "bg-[#fbfbee]" : ""}`}>
              <td className="px-4 py-3 text-gray-900">
                {r.name}
                {r.note && <span className="block text-xs text-gray-500 mt-1">{r.note}</span>}
              </td>
              <td className="px-4 py-3 text-gray-700">{r.place}</td>
              <td className="px-4 py-3 text-gray-900 text-right">{r.intake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SourceNote() {
  return (
    <p className="text-xs text-gray-500 mt-4">
      Source: {CARDIAC_LIST_SOURCE.title}. Seats are the sanctioned B.Sc Cardiac Technology intake printed
      on that list. Deemed universities (for example Vinayaka Mission&apos;s in Salem) run the course under
      their own status and do not appear on it.
    </p>
  );
}

/** Statewide answer for /cardiac-technology: total, the government colleges, and the three districts around our campus. */
export function CardiacCollegesTamilNadu() {
  return (
    <section id="cardiac-technology-colleges-tamil-nadu" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black text-[#0b6d41] mb-4">
          B.Sc Cardiac Technology Colleges in Tamil Nadu
        </h2>
        <p className="snippet-answer text-gray-900 leading-relaxed mb-8">
          {CARDIAC_LIST_SOURCE.totalInstitutions} institutions are affiliated to The Tamil Nadu Dr. M.G.R.
          Medical University for B.Sc Cardiac Technology in {CARDIAC_LIST_SOURCE.year}.{" "}
          {GOVERNMENT_CARDIAC_COUNT} of them are government medical colleges with {GOVERNMENT_CARDIAC_SEATS} seats
          between them; the rest are self-financing. JKKN College of Allied Health Sciences in Komarapalayam,
          Namakkal district, is one of them, with 7 seats.
        </p>
        <p className="text-gray-700 text-sm mb-8">
          Many students search for this course as &quot;B.Sc Cardiology&quot;. The university&apos;s course
          name is B.Sc Cardiac Technology, and that is the name the colleges below are listed under.
        </p>

        <h3 className="text-xl font-bold text-[#0b6d41] mb-3">Government colleges offering B.Sc Cardiac Technology</h3>
        <CollegeTable rows={GOVERNMENT_CARDIAC_COLLEGES} caption="Government colleges offering B.Sc Cardiac Technology in Tamil Nadu" />

        {DISTRICTS.map((d) => {
          const t = districtTotals(d);
          return (
            <div key={d} className="mt-10">
              <h3 className="text-xl font-bold text-[#0b6d41] mb-3">B.Sc Cardiac Technology colleges in {d} district</h3>
              <p className="text-gray-700 text-sm mb-4">
                {t.colleges} colleges, {t.seats} seats.{" "}
                <Link href={`/${d.toLowerCase()}`} className="text-[#0b6d41] underline">
                  Studying from {d}
                </Link>
              </p>
              <CollegeTable rows={CARDIAC_COLLEGES_BY_DISTRICT[d]} caption={`B.Sc Cardiac Technology colleges in ${d} district`} />
            </div>
          );
        })}
        <SourceNote />
        <p className="text-sm text-gray-700 mt-4">
          All JKKN allied health courses:{" "}
          <Link href="/paramedical-college-in-tamil-nadu" className="text-[#0b6d41] underline">
            paramedical courses at JKKN
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/** One district's list, for the city pages. */
export function CardiacCollegesInDistrict({ district, lead }: { district: District; lead: string }) {
  const t = districtTotals(district);
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b6d41] mb-4">
          B.Sc Cardiac Technology Colleges in {district} District
        </h2>
        <p className="snippet-answer text-gray-900 leading-relaxed mb-6">
          {t.colleges} colleges in {district} district are affiliated to The Tamil Nadu Dr. M.G.R. Medical
          University for B.Sc Cardiac Technology in {CARDIAC_LIST_SOURCE.year}, with {t.seats} seats between
          them. {lead}
        </p>
        <CollegeTable rows={CARDIAC_COLLEGES_BY_DISTRICT[district]} caption={`B.Sc Cardiac Technology colleges in ${district} district`} />
        <p className="text-sm text-gray-700 mt-4">
          All government and statewide options are on the{" "}
          <Link href="/cardiac-technology#cardiac-technology-colleges-tamil-nadu" className="text-[#0b6d41] underline">
            B.Sc Cardiac Technology page
          </Link>
          .
        </p>
        <SourceNote />
      </div>
    </section>
  );
}
