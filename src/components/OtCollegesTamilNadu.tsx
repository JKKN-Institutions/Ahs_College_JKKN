import Link from "next/link";
import {
  OT_LIST_SOURCE,
  OT_COUNSELLING_NAME,
  OT_GOVT_COLLEGES,
  OT_GOVT_SEATS,
  OT_SELF_FINANCING_COUNT,
  OT_JKKN_SEATS,
} from "@/lib/ot-colleges-tn";

// Answers "b.sc operation theatre & anaesthesia technology colleges in tamilnadu" and the
// "anaesthesia colleges" variants with the university's own list, plus a box that separates this
// technologist degree from MD Anaesthesiology (the doctor route) - the Google answer for
// "anaesthesia colleges in tamilnadu" mixes the two.
// Government colleges are named; private colleges are counted only (user decision 2026-09-24).
// Plain server-rendered HTML - no tabs or accordion hiding rows.
export function OtCollegesTamilNadu() {
  return (
    <section id="anaesthesia-technology-colleges-tamil-nadu" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black text-[#0b6d41] mb-4">
          B.Sc Operation Theatre &amp; Anaesthesia Technology Colleges in Tamil Nadu
        </h2>
        <p className="snippet-answer text-gray-900 leading-relaxed mb-4">
          {OT_LIST_SOURCE.totalInstitutions} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical University
          for B.Sc Operation Theatre &amp; Anaesthesia Technology in {OT_LIST_SOURCE.year}: {OT_GOVT_COLLEGES.length}{" "}
          government colleges with {OT_GOVT_SEATS} seats between them, and {OT_SELF_FINANCING_COUNT} self-financing
          colleges. JKKN College of Allied Health Sciences in Komarapalayam, Namakkal district, is one of them, with{" "}
          {OT_JKKN_SEATS} seats.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The same course has two names. The university list calls it B.Sc Operation Theatre &amp; Anaesthesia
          Technology; the 2026-27 Tamil Nadu Selection Committee prospectus calls it the {OT_COUNSELLING_NAME}.
          Search for either name when you apply.
        </p>

        <h3 className="text-xl font-bold text-[#0b6d41] mb-3">
          Government colleges offering B.Sc Operation Theatre &amp; Anaesthesia Technology ({OT_GOVT_COLLEGES.length})
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm text-left">
            <caption className="sr-only">
              Government colleges offering B.Sc Operation Theatre and Anaesthesia Technology in Tamil Nadu
            </caption>
            <thead className="bg-[#f0f7f2] text-[#0b6d41]">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">College</th>
                <th scope="col" className="px-4 py-3 font-bold">Place</th>
                <th scope="col" className="px-4 py-3 font-bold text-right">Seats</th>
              </tr>
            </thead>
            <tbody>
              {OT_GOVT_COLLEGES.map((c) => (
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
          from +2 marks. Near our campus, the list has {OT_LIST_SOURCE.districtCounts.Namakkal} institutions in Namakkal
          district, {OT_LIST_SOURCE.districtCounts.Salem} in Salem district and {OT_LIST_SOURCE.districtCounts.Erode} in
          Erode district offering this course.
        </p>

        <div className="mt-10 rounded-2xl border-2 border-[#0b6d41]/20 bg-[#f0f7f2] p-6">
          <h3 className="text-xl font-bold text-[#0b6d41] mb-3">
            Anaesthesia technologist or anaesthesiologist? B.Sc vs MD
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Many &quot;anaesthesia colleges&quot; searches mix two different careers. This page is about the B.Sc
            technologist degree you can join after +2. The anaesthesiologist - the doctor who gives anaesthesia - takes
            a separate postgraduate medical degree after MBBS.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm text-left">
              <caption className="sr-only">B.Sc Anaesthesia Technology compared with MD Anaesthesiology</caption>
              <thead className="bg-white text-[#0b6d41]">
                <tr>
                  <th scope="col" className="px-4 py-3 font-bold"> </th>
                  <th scope="col" className="px-4 py-3 font-bold">B.Sc OT &amp; Anaesthesia Technology (B.AOTT)</th>
                  <th scope="col" className="px-4 py-3 font-bold">MD Anaesthesiology</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-900">You become</th>
                  <td className="px-4 py-3 text-gray-800">Anaesthesia and operation theatre technologist</td>
                  <td className="px-4 py-3 text-gray-800">Anaesthesiologist (doctor)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <th scope="row" className="px-4 py-3 font-semibold text-gray-900">You join after</th>
                  <td className="px-4 py-3 text-gray-800">
                    +2 with Physics, Chemistry and Biology (for Selection Committee seats in 2026-27, Physics,
                    Chemistry and Mathematics is also accepted for B.AOTT)
                  </td>
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

        <p className="text-xs text-gray-500 mt-6">
          Sources: {OT_LIST_SOURCE.title}; Tamil Nadu Selection Committee prospectus for Allied and Healthcare UG Degree
          Courses 2026-27 (G.O. (D) No.710, 18-06-2026) for the B.AOTT name, eligible subjects, merit on +2 marks and the course duration.
          Seats are the sanctioned intake printed on the university list. Deemed universities run the course under their
          own status and are not on it.{" "}
          <Link href="/paramedical-college-in-tamil-nadu" className="underline">All JKKN paramedical courses</Link>.
        </p>
      </div>
    </section>
  );
}
