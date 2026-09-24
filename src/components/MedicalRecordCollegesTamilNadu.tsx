import Link from "next/link";
import { MRS_LIST_SOURCE, MRS_JKKN_SEATS } from "@/lib/medical-record-colleges-tn";

// Answers "bsc medical record science colleges in tamilnadu" with the university's own list. Unlike the
// other allied courses, no government college offers this one, so there is no government table - the
// honest answer is the count, the sector and where JKKN sits. Private colleges are counted only (user
// decision 2026-09-24). Plain server-rendered HTML.
export function MedicalRecordCollegesTamilNadu() {
  return (
    <section id="medical-record-science-colleges-tamil-nadu" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-black text-[#0b6d41] mb-4">B.Sc Medical Record Science Colleges in Tamil Nadu</h2>
        <p className="snippet-answer text-gray-900 leading-relaxed mb-4">
          {MRS_LIST_SOURCE.totalInstitutions} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical
          University for B.Sc Medical Record Science in {MRS_LIST_SOURCE.year}, and all of them are self-financing
          colleges: no government college is on the list for this course. JKKN College of Allied Health Sciences in
          Komarapalayam, Namakkal district, is one of them, with {MRS_JKKN_SEATS} seats.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white mb-4">
          <table className="w-full text-sm text-left">
            <caption className="sr-only">B.Sc Medical Record Science institutions near Komarapalayam, by district</caption>
            <thead className="bg-[#f0f7f2] text-[#0b6d41]">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">District</th>
                <th scope="col" className="px-4 py-3 font-bold text-right">Institutions on the list</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-900">Namakkal (JKKN, Komarapalayam)</td>
                <td className="px-4 py-3 text-gray-900 text-right">{MRS_LIST_SOURCE.districtCounts.Namakkal}</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-900">Salem</td>
                <td className="px-4 py-3 text-gray-900 text-right">{MRS_LIST_SOURCE.districtCounts.Salem}</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-900">Erode</td>
                <td className="px-4 py-3 text-gray-900 text-right">{MRS_LIST_SOURCE.districtCounts.Erode}</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-900">All of Tamil Nadu</td>
                <td className="px-4 py-3 text-gray-900 text-right">{MRS_LIST_SOURCE.totalInstitutions}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-700">
          Because every seat is in a self-financing college, fees differ from college to college - ask each college
          for its fee in writing before you decide.
        </p>
        <p className="text-xs text-gray-500 mt-6">
          Source: {MRS_LIST_SOURCE.title}. Deemed universities run courses under their own status and are not on
          it.{" "}
          <Link href="/paramedical-college-in-tamil-nadu" className="underline">All JKKN paramedical courses</Link>.
        </p>
      </div>
    </section>
  );
}
