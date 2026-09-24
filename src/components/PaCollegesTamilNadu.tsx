import Link from "next/link";
import {
  PA_LIST_SOURCE,
  PA_GOVT_COLLEGES,
  PA_GOVT_SEATS,
  PA_SELF_FINANCING_COUNT,
  PA_JKKN_SEATS,
} from "@/lib/pa-colleges-tn";

// Answers "bsc physician assistant colleges in tamilnadu" with the university's own list.
// Government colleges are named; private colleges are counted only (user decision 2026-09-24).
// Plain server-rendered HTML - no tabs or accordion hiding rows.
export function PaCollegesTamilNadu() {
  return (
    <section id="physician-assistant-colleges-tamil-nadu" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black text-[#0b6d41] mb-4">B.Sc Physician Assistant Colleges in Tamil Nadu</h2>
        <p className="snippet-answer text-gray-900 leading-relaxed mb-6">
          {PA_LIST_SOURCE.totalInstitutions} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical University
          for B.Sc Physician Assistant in {PA_LIST_SOURCE.year}: {PA_GOVT_COLLEGES.length} government colleges with{" "}
          {PA_GOVT_SEATS} seats between them, and {PA_SELF_FINANCING_COUNT} self-financing colleges. JKKN College of
          Allied Health Sciences in Komarapalayam, Namakkal district, is one of them, with {PA_JKKN_SEATS} seats.
        </p>

        <h3 className="text-xl font-bold text-[#0b6d41] mb-3">
          Government colleges offering B.Sc Physician Assistant ({PA_GOVT_COLLEGES.length})
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm text-left">
            <caption className="sr-only">Government colleges offering B.Sc Physician Assistant in Tamil Nadu</caption>
            <thead className="bg-[#f0f7f2] text-[#0b6d41]">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">College</th>
                <th scope="col" className="px-4 py-3 font-bold">Place</th>
                <th scope="col" className="px-4 py-3 font-bold text-right">Seats</th>
              </tr>
            </thead>
            <tbody>
              {PA_GOVT_COLLEGES.map((c) => (
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
          Government seats are allotted through the Tamil Nadu Selection Committee (tnmedicalselection.org).
          Near our campus, the list has {PA_LIST_SOURCE.districtCounts.Namakkal} institutions in Namakkal district,{" "}
          {PA_LIST_SOURCE.districtCounts.Salem} in Salem district and {PA_LIST_SOURCE.districtCounts.Erode} in Erode
          district offering this course.
        </p>
        <p className="text-xs text-gray-500 mt-4">
          Source: {PA_LIST_SOURCE.title}. Seats are the sanctioned B.Sc Physician Assistant intake printed on that
          list. Deemed universities run the course under their own status and are not on it.{" "}
          <Link href="/paramedical-college-in-tamil-nadu" className="underline">All JKKN paramedical courses</Link>.
        </p>
      </div>
    </section>
  );
}
