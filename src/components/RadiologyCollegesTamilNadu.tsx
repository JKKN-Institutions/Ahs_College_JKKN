import Link from "next/link";
import {
  RAD_LIST_SOURCE,
  RAD_COUNSELLING_NAME,
  RAD_GOVT_TUITION_FEE_PER_YEAR,
  RAD_GOVT_COLLEGES,
  RAD_GOVT_SEATS,
  RAD_SELF_FINANCING_COUNT,
  RAD_JKKN_SEATS,
} from "@/lib/radiology-colleges-tn";

// Answers "radiology colleges in tamilnadu" and its B.Sc variants with the university's own list, a box
// that separates the technologist degree from MD Radio-Diagnosis (the doctor route - Google's AI answer
// mixes the two), and neutral how-to-choose points for the "best colleges" search instead of a
// "best" claim. Government colleges are named; private colleges are counted only (user decisions
// 2026-09-24). Plain server-rendered HTML - no tabs or accordion hiding rows.
export function RadiologyCollegesTamilNadu() {
  return (
    <section id="radiology-imaging-technology-colleges-tamil-nadu" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black text-[#0b6d41] mb-4">
          B.Sc Radiology and Imaging Technology Colleges in Tamil Nadu
        </h2>
        <p className="snippet-answer text-gray-900 leading-relaxed mb-4">
          {RAD_LIST_SOURCE.totalInstitutions} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical
          University for B.Sc Radiology (Radiography) and Imaging Technology in {RAD_LIST_SOURCE.year}:{" "}
          {RAD_GOVT_COLLEGES.length} government colleges with {RAD_GOVT_SEATS} seats between them, and{" "}
          {RAD_SELF_FINANCING_COUNT} self-financing colleges. JKKN College of Allied Health Sciences in Komarapalayam,
          Namakkal district, is one of them, with {RAD_JKKN_SEATS} seats.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The same course goes by more than one name. The university list calls it {RAD_LIST_SOURCE.listName}; the
          2026-27 Tamil Nadu Selection Committee prospectus calls it the {RAD_COUNSELLING_NAME}. Search for either
          name when you apply.
        </p>

        <h3 className="text-xl font-bold text-[#0b6d41] mb-3">
          Government colleges offering B.Sc Radiology and Imaging Technology ({RAD_GOVT_COLLEGES.length})
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm text-left">
            <caption className="sr-only">
              Government colleges offering B.Sc Radiology and Imaging Technology in Tamil Nadu
            </caption>
            <thead className="bg-[#f0f7f2] text-[#0b6d41]">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">College</th>
                <th scope="col" className="px-4 py-3 font-bold">Place</th>
                <th scope="col" className="px-4 py-3 font-bold text-right">Seats</th>
              </tr>
            </thead>
            <tbody>
              {RAD_GOVT_COLLEGES.map((c) => (
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
          {RAD_GOVT_TUITION_FEE_PER_YEAR} per year. Near our campus, the list has{" "}
          {RAD_LIST_SOURCE.districtCounts.Namakkal} institutions in Namakkal district,{" "}
          {RAD_LIST_SOURCE.districtCounts.Salem} in Salem district and {RAD_LIST_SOURCE.districtCounts.Erode} in Erode
          district offering this course.
        </p>

        <div className="mt-10 rounded-2xl border-2 border-[#0b6d41]/20 bg-[#f0f7f2] p-6">
          <h3 className="text-xl font-bold text-[#0b6d41] mb-3">
            Radiology technologist or radiologist? B.Sc vs MD
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Many &quot;radiology colleges&quot; searches mix two different careers. This page is about the B.Sc
            technologist degree you can join after +2. The radiologist - the doctor who reports the scans - takes a
            separate postgraduate medical degree after MBBS.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm text-left">
              <caption className="sr-only">B.Sc Radiology and Imaging Technology compared with MD Radio-Diagnosis</caption>
              <thead className="bg-white text-[#0b6d41]">
                <tr>
                  <th scope="col" className="px-4 py-3 font-bold"> </th>
                  <th scope="col" className="px-4 py-3 font-bold">B.Sc Radiology &amp; Imaging Technology (B.MRIT)</th>
                  <th scope="col" className="px-4 py-3 font-bold">MD Radio-Diagnosis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-900">You become</th>
                  <td className="px-4 py-3 text-gray-800">Radiographer / imaging technologist</td>
                  <td className="px-4 py-3 text-gray-800">Radiologist (doctor)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-900">You join after</th>
                  <td className="px-4 py-3 text-gray-800">+2 with Physics, Chemistry and Biology</td>
                  <td className="px-4 py-3 text-gray-800">MBBS</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-900">Admission (Tamil Nadu)</th>
                  <td className="px-4 py-3 text-gray-800">Selection Committee merit on +2 marks - no NEET</td>
                  <td className="px-4 py-3 text-gray-800">Postgraduate medical entrance, after MBBS</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-900">Duration</th>
                  <td className="px-4 py-3 text-gray-800">3 years + 1 year compulsory internship</td>
                  <td className="px-4 py-3 text-gray-800">Postgraduate course after the MBBS degree</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#0b6d41] mt-10 mb-3">How to choose a B.Sc Radiology college</h3>
        <ol className="list-decimal pl-6 space-y-2 text-gray-800">
          <li>Check that the college is on the university&apos;s affiliated list for this course for your year.</li>
          <li>Check the sanctioned seats for the course; the list shows each college&apos;s intake.</li>
          <li>Ask which hospital gives the X-ray, CT and MRI training, and visit it.</li>
          <li>
            Compare fees: government seats cost {RAD_GOVT_TUITION_FEE_PER_YEAR} a year in tuition; ask each
            self-financing college for its fee in writing.
          </li>
          <li>Make sure it is the B.Sc degree (3 years + 1 year internship), not a diploma or certificate course.</li>
        </ol>

        <p className="text-xs text-gray-500 mt-6">
          Sources: {RAD_LIST_SOURCE.title}; Tamil Nadu Selection Committee prospectus for Allied and Healthcare UG
          Degree Courses 2026-27 (G.O. (D) No.710, 18-06-2026) for the B.MRIT name, eligible subjects, merit on +2
          marks, duration and the government tuition fee. Seats are the sanctioned intake printed on the university
          list. Deemed universities run the course under their own status and are not on it.{" "}
          <Link href="/paramedical-college-in-tamil-nadu" className="underline">All JKKN paramedical courses</Link>.
        </p>
      </div>
    </section>
  );
}
