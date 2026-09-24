import Link from "next/link";
import {
  AE_LIST_SOURCE,
  AE_COUNSELLING_NAME,
  AE_GOVT_TUITION_FEE_PER_YEAR,
  AE_GOVT_COLLEGES,
  AE_GOVT_SEATS,
  AE_SELF_FINANCING_COUNT,
  AE_JKKN_SEATS,
} from "@/lib/emergency-colleges-tn";

// Answers "bsc accident and emergency care technology colleges in tamilnadu" with the university's own
// list. An AI answer checked on 2026-09-24 named 11 government colleges, one of which is not on the
// university list for this course; the list has 15.
// Government colleges are named; private colleges are counted only (user decision 2026-09-24).
// Plain server-rendered HTML - no tabs or accordion hiding rows.
export function EmergencyCollegesTamilNadu() {
  return (
    <section id="accident-emergency-care-colleges-tamil-nadu" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black text-[#0b6d41] mb-4">
          B.Sc Accident and Emergency Care Technology Colleges in Tamil Nadu
        </h2>
        <p className="snippet-answer text-gray-900 leading-relaxed mb-4">
          {AE_LIST_SOURCE.totalInstitutions} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical University
          for B.Sc Accident &amp; Emergency Care Technology in {AE_LIST_SOURCE.year}: {AE_GOVT_COLLEGES.length}{" "}
          government colleges with {AE_GOVT_SEATS} seats between them, and {AE_SELF_FINANCING_COUNT} self-financing
          colleges. JKKN College of Allied Health Sciences in Komarapalayam, Namakkal district, is one of them, with{" "}
          {AE_JKKN_SEATS} seats.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The same course has two names. The university list calls it B.Sc Accident &amp; Emergency Care Technology;
          the 2026-27 Tamil Nadu Selection Committee prospectus calls it the {AE_COUNSELLING_NAME}. Search for either
          name when you apply.
        </p>

        <h3 className="text-xl font-bold text-[#0b6d41] mb-3">
          Government colleges offering B.Sc Accident &amp; Emergency Care Technology ({AE_GOVT_COLLEGES.length})
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm text-left">
            <caption className="sr-only">
              Government colleges offering B.Sc Accident and Emergency Care Technology in Tamil Nadu
            </caption>
            <thead className="bg-[#f0f7f2] text-[#0b6d41]">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">College</th>
                <th scope="col" className="px-4 py-3 font-bold">Place</th>
                <th scope="col" className="px-4 py-3 font-bold text-right">Seats</th>
              </tr>
            </thead>
            <tbody>
              {AE_GOVT_COLLEGES.map((c) => (
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
          {AE_GOVT_TUITION_FEE_PER_YEAR} per year. Near our campus, the list has{" "}
          {AE_LIST_SOURCE.districtCounts.Namakkal} institutions in Namakkal district,{" "}
          {AE_LIST_SOURCE.districtCounts.Salem} in Salem district and {AE_LIST_SOURCE.districtCounts.Erode} in Erode
          district offering this course.
        </p>
        <p className="text-xs text-gray-500 mt-6">
          Sources: {AE_LIST_SOURCE.title}; Tamil Nadu Selection Committee prospectus for Allied and Healthcare UG Degree
          Courses 2026-27 (G.O. (D) No.710, 18-06-2026) for the course name, merit on +2 marks and the government
          tuition fee. Seats are the sanctioned intake printed on the university list. Deemed universities run the
          course under their own status and are not on it.{" "}
          <Link href="/paramedical-college-in-tamil-nadu" className="underline">All JKKN paramedical courses</Link>.
        </p>
      </div>
    </section>
  );
}
