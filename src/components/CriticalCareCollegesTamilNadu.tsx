import Link from "next/link";
import {
  CC_LIST_SOURCE,
  CC_DURATION,
  CC_GOVT_TUITION_FEE_PER_YEAR,
  CC_GOVT_COLLEGES,
  CC_GOVT_SEATS,
  CC_SELF_FINANCING_COUNT,
  CC_JKKN_SEATS,
} from "@/lib/critical-care-colleges-tn";

// Answers "bsc critical care technology college in tamilnadu" (singular) - JKKN first, then the
// university's own list for the plural and "government colleges" searches (user decision 2026-09-24).
// Government colleges are named; private colleges are counted only.
// Plain server-rendered HTML - no tabs or accordion hiding rows.
export function CriticalCareCollegesTamilNadu() {
  return (
    <section id="critical-care-technology-college-tamil-nadu" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black text-[#0b6d41] mb-4">
          B.Sc Critical Care Technology College in Tamil Nadu
        </h2>
        <p className="snippet-answer text-gray-900 leading-relaxed mb-4">
          JKKN College of Allied Health Sciences in Komarapalayam, Namakkal district, offers B.Sc Critical Care
          Technology with {CC_JKKN_SEATS} sanctioned seats, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.
          The course runs {CC_DURATION}.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Across Tamil Nadu, {CC_LIST_SOURCE.totalInstitutions} institutions are affiliated to the university for
          B.Sc Critical Care Technology in {CC_LIST_SOURCE.year}: {CC_GOVT_COLLEGES.length} government colleges with{" "}
          {CC_GOVT_SEATS} seats between them, and {CC_SELF_FINANCING_COUNT} self-financing colleges. Near our campus,
          the list has {CC_LIST_SOURCE.districtCounts.Namakkal} institutions in Namakkal district and{" "}
          {CC_LIST_SOURCE.districtCounts.Salem} in Salem district; none in Erode district offers this course.
        </p>

        <h3 className="text-xl font-bold text-[#0b6d41] mb-3">
          Government colleges offering B.Sc Critical Care Technology ({CC_GOVT_COLLEGES.length})
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm text-left">
            <caption className="sr-only">Government colleges offering B.Sc Critical Care Technology in Tamil Nadu</caption>
            <thead className="bg-[#f0f7f2] text-[#0b6d41]">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">College</th>
                <th scope="col" className="px-4 py-3 font-bold">Place</th>
                <th scope="col" className="px-4 py-3 font-bold text-right">Seats</th>
              </tr>
            </thead>
            <tbody>
              {CC_GOVT_COLLEGES.map((c) => (
                <tr key={c.code} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-900">{c.name}</td>
                  <td className="px-4 py-3 text-gray-700">{c.place}</td>
                  <td className="px-4 py-3 text-gray-900 text-right">{c.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-700 mt-4">
          Government seats are allotted through the Tamil Nadu Selection Committee (tnmedicalselection.org), on merit
          from +2 marks. The 2026-27 prospectus sets the government-college tuition fee at{" "}
          {CC_GOVT_TUITION_FEE_PER_YEAR} per year and keeps the course name B.Sc. Critical Care Technology.
        </p>
        <p className="text-xs text-gray-500 mt-6">
          Sources: {CC_LIST_SOURCE.title}; Tamil Nadu Selection Committee prospectus for Allied and Healthcare UG Degree
          Courses 2026-27 (G.O. (D) No.710, 18-06-2026) for the course name, duration, merit on +2 marks and the
          government tuition fee. Seats are the sanctioned intake printed on the university list. Deemed universities
          run the course under their own status and are not on it.{" "}
          <Link href="/paramedical-college-in-tamil-nadu" className="underline">All JKKN paramedical courses</Link>.
        </p>
      </div>
    </section>
  );
}
