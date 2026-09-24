import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/site-config";
import { AHS_TN_TOTAL, AHS_TN_GOVT, AHS_LIST_SOURCE } from "@/lib/ahs-colleges-tn";
import { JKKN_PARAMEDICAL_COURSES, JKKN_PARAMEDICAL_SEATS } from "./courses";
import { PARAMEDICAL_FAQS } from "./faqs";

// Server-rendered: every table row and FAQ answer is in the HTML a crawler receives.
// About JKKN's own paramedical courses only - no list of other colleges (user decision 2026-09-24).

export default function ParamedicalCollegePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 bg-[#fbfbee]">
        <Breadcrumb items={[{ label: "Paramedical Courses" }]} />

        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-[#0b6d41] mb-4">
              Paramedical College in Tamil Nadu - JKKN Paramedical Courses 2026-27
            </h1>
            <p className="snippet-answer text-gray-900 text-base leading-relaxed mb-4">
              JKKN College of Allied Health Sciences is a paramedical (allied health) college on NH-544 in
              Komarapalayam, Namakkal district, Tamil Nadu. It offers {JKKN_PARAMEDICAL_COURSES.length} four-year B.Sc
              paramedical courses with {JKKN_PARAMEDICAL_SEATS} sanctioned seats, affiliated to The Tamil Nadu Dr.
              M.G.R. Medical University. Admissions for 2026-27 are open.
            </p>
            <a
              href={siteConfig.admissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#0b6d41] text-white rounded-full font-bold text-sm hover:bg-[#08502f]"
            >
              Apply for 2026-27
            </a>
          </div>
        </section>

        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">Paramedical and allied health - the same courses</h2>
            <p className="text-gray-800 leading-relaxed">
              &quot;Paramedical&quot; and &quot;allied health science&quot; are two names for the same degree courses. The
              Tamil Nadu Selection Committee&apos;s website lists them as Paramedical Degree Courses; its 2026-27
              prospectus (G.O. (D) No. 710, dated 18-06-2026) calls them Allied and Healthcare UG Degree Courses.
              B.Sc Nursing and B.Pharm are separate courses, taught at JKKN&apos;s separate nursing and pharmacy
              colleges.
            </p>
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">Paramedical courses at JKKN</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Paramedical courses and sanctioned seats at JKKN College of Allied Health Sciences</caption>
                <thead className="bg-[#f0f7f2] text-[#0b6d41]">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">Course</th>
                    <th scope="col" className="px-4 py-3 font-bold">Duration</th>
                    <th scope="col" className="px-4 py-3 font-bold text-right">Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {JKKN_PARAMEDICAL_COURSES.map((c) => (
                    <tr key={c.slug} className="border-t border-gray-100">
                      <td className="px-4 py-3">
                        <Link href={`/${c.slug}`} className="text-[#0b6d41] font-semibold hover:underline">{c.name}</Link>
                      </td>
                      <td className="px-4 py-3 text-gray-700">3 years + 1 year internship</td>
                      <td className="px-4 py-3 text-gray-900 text-right">{c.seats}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-200 bg-[#f0f7f2] font-bold">
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 text-right">{JKKN_PARAMEDICAL_SEATS}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Seats: sanctioned intake on {AHS_LIST_SOURCE.title}, institution code 825. Fees:{" "}
              <Link href="/fee-structure" className="underline">fee structure 2026-27</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">Eligibility and admission</h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Plus Two (10+2) or equivalent with Physics, Chemistry and Biology.</li>
              <li>Minimum 50% aggregate (45% for OBC, 40% for SC/ST); 17 years of age.</li>
              <li>
                Government-quota seats are allotted through the Tamil Nadu Selection Committee (tnmedicalselection.org).
                Management-quota seats: apply to the college directly.
              </li>
            </ul>
            <p className="mt-4">
              <Link href="/admissions" className="text-[#0b6d41] font-semibold underline">Admission process 2026-27</Link>
            </p>
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">How to choose a paramedical college in Tamil Nadu</h2>
            <p className="text-gray-800 mb-3">
              {AHS_TN_TOTAL} institutions are affiliated to The Tamil Nadu Dr. M.G.R. Medical University for at least one
              undergraduate paramedical course in {AHS_LIST_SOURCE.year}, {AHS_TN_GOVT.length} of them government. There
              is no official ranking of allied health colleges, so compare them on what you can check:
            </p>
            <ol className="list-decimal pl-6 text-gray-800 space-y-2">
              <li>The college and your course are on the university&apos;s current affiliation list.</li>
              <li>A teaching hospital for clinical postings - ask for its name in writing.</li>
              <li>The sanctioned seats for your course.</li>
              <li>Where the one-year compulsory internship is done.</li>
              <li>The total fee for all four years, including hostel, transport and exam fees.</li>
            </ol>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {PARAMEDICAL_FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold text-gray-900 mb-1">{f.q}</h3>
                  <p className="faq-answer text-gray-800 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
