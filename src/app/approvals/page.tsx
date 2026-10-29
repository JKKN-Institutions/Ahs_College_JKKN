import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  AISHE_CODE,
  APPROVALS_FAQS,
  LISTED_ADDRESS,
  LISTED_UNDER,
  OFFICIAL_COURSES,
  OFFICIAL_SEATS,
  SRC_AISHE,
  SRC_NAAC,
  SRC_SELECTION,
  SRC_UNIVERSITY,
  UNIVERSITY_CODE,
  type OfficialSource,
} from "./data";

// Server-rendered: every fact and FAQ answer is in the HTML a crawler receives.
// Only values printed on a regulator's own list go here - see the note at the top of ./data.ts.

function SourceLine({ src }: { src: OfficialSource }) {
  return (
    <p className="text-xs text-gray-500 mt-3 leading-relaxed">
      Source: {src.body},{" "}
      <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0b6d41]">
        {src.title}
      </a>{" "}
      ({new URL(src.url).hostname.replace(/^www\./, "")}), as on {src.asOn}.
    </p>
  );
}

const KEY_FACTS: { label: string; value: string }[] = [
  { label: "Affiliating university", value: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai" },
  { label: "Name and code on the university list (2025-26)", value: `${LISTED_UNDER}, institution code ${UNIVERSITY_CODE}` },
  { label: "Courses", value: "9 allied health degree courses" },
  { label: "Sanctioned seats (2025-26)", value: `${OFFICIAL_SEATS} in all` },
  { label: "AISHE code", value: AISHE_CODE },
  { label: "NAAC", value: `No separate entry for the college; the listed institution, ${LISTED_UNDER}, holds an 'A' grade (CGPA 3.01, declared 27-02-2025)` },
  { label: "Address on the university list", value: LISTED_ADDRESS },
];

export default function ApprovalsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 bg-[#fbfbee]">
        <Breadcrumb items={[{ label: "Approvals and Official Data" }]} />

        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-[#0b6d41] mb-4">
              Approvals and Official Data - JKKN College of Allied Health Sciences
            </h1>
            <p className="snippet-answer text-gray-900 text-base leading-relaxed">
              JKKN College of Allied Health Sciences in Komarapalayam runs nine allied health degree courses affiliated
              to The Tamil Nadu Dr. M.G.R. Medical University. The university&apos;s 2025-26 list shows them under{" "}
              {LISTED_UNDER}, institution code {UNIVERSITY_CODE}, with {OFFICIAL_SEATS} sanctioned seats. Its AISHE
              code is {AISHE_CODE}.
            </p>
            <SourceLine src={SRC_UNIVERSITY} />
          </div>
        </section>

        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-4">Key facts</h2>
            <dl className="divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-[#fbfbee]">
              {KEY_FACTS.map((f) => (
                <div key={f.label} className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-semibold text-gray-700">{f.label}</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2 text-sm text-gray-900">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              Sources: university list (as on {SRC_UNIVERSITY.asOn}), AISHE directory (as on {SRC_AISHE.asOn}), NAAC
              valid accreditation list (as on {SRC_NAAC.asOn}) - each one linked in its section below.
            </p>
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">University affiliation</h2>
            <p className="text-gray-800 leading-relaxed">
              JKKN College of Allied Health Sciences is affiliated to The Tamil Nadu Dr. M.G.R. Medical University,
              Chennai, which awards the degree. On the university&apos;s list of allied health affiliated colleges for
              2025-26, our courses appear under {LISTED_UNDER}, {LISTED_ADDRESS}, institution code {UNIVERSITY_CODE}.
              To check it yourself, search the list for &quot;J.K.K.Nattraja Dental College&quot;, not &quot;JKKN
              Allied Health&quot;.
            </p>
            <SourceLine src={SRC_UNIVERSITY} />
          </div>
        </section>

        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">Course-wise sanctioned seats</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">
                  Sanctioned seats for each course at JKKN College of Allied Health Sciences, university list 2025-26
                </caption>
                <thead className="bg-[#f0f7f2] text-[#0b6d41]">
                  <tr>
                    <th scope="col" className="px-3 sm:px-4 py-3 font-bold">Course</th>
                    <th scope="col" className="hidden sm:table-cell px-3 sm:px-4 py-3 font-bold">Name on the university list (2025-26)</th>
                    <th scope="col" className="px-3 sm:px-4 py-3 font-bold text-right">Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {OFFICIAL_COURSES.map((c) => (
                    <tr key={c.slug} className="border-t border-gray-100">
                      <td className="px-3 sm:px-4 py-3">
                        <Link href={`/${c.slug}`} className="text-[#0b6d41] font-semibold hover:underline">{c.name}</Link>
                        <span className="sm:hidden block text-xs text-gray-500 mt-0.5">List name: {c.listName}</span>
                      </td>
                      <td className="hidden sm:table-cell px-3 sm:px-4 py-3 text-gray-700">{c.listName}</td>
                      <td className="px-3 sm:px-4 py-3 text-gray-900 text-right">{c.seats}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-200 bg-[#f0f7f2] font-bold">
                    <td className="px-3 sm:px-4 py-3">Total</td>
                    <td className="hidden sm:table-cell px-3 sm:px-4 py-3"></td>
                    <td className="px-3 sm:px-4 py-3 text-right">{OFFICIAL_SEATS}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              Course names follow the Tamil Nadu 2026-27 admission list; the university&apos;s 2025-26 list still uses
              the earlier B.Sc names. The same university entry also prints B.Sc. Radiotherapy Technology as &quot;3
              (existing only)&quot;; it is not one of the nine courses listed for admission on this website. Fees are on
              the <Link href="/fee-structure" className="text-[#0b6d41] font-semibold underline">fee structure page</Link>.
            </p>
            <SourceLine src={SRC_UNIVERSITY} />
            <SourceLine src={SRC_SELECTION} />
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">NAAC</h2>
            <p className="text-gray-800 leading-relaxed">
              NAAC&apos;s list of institutions with valid accreditation does not show a separate entry for JKKN College
              of Allied Health Sciences. The institution the university lists our courses under, {LISTED_UNDER}, is
              accredited by NAAC with an &apos;A&apos; grade (CGPA 3.01, first cycle, declared 27 February 2025). Its
              certificate is on our <Link href="/NAAC" className="text-[#0b6d41] font-semibold underline">NAAC page</Link>.
            </p>
            <SourceLine src={SRC_NAAC} />
          </div>
        </section>

        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">AISHE code</h2>
            <p className="text-gray-800 leading-relaxed">
              AISHE code: <strong>{AISHE_CODE}</strong> (All India Survey on Higher Education, Ministry of Education).
              Like the university list, the AISHE record carries the name {LISTED_UNDER}.
            </p>
            <SourceLine src={SRC_AISHE} />
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">NIRF</h2>
            <p className="text-gray-800 leading-relaxed">
              The NIRF document in this website&apos;s menu is the data the college submitted for NIRF 2024 (Innovation
              category, ID IR-I-{AISHE_CODE}). It is a data submission, not a rank.{" "}
              <a href="/pdfs/nirf-report.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0b6d41] font-semibold underline">
                Open the NIRF 2024 data (PDF)
              </a>
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-6">Frequently asked questions</h2>
            <div className="space-y-8">
              {APPROVALS_FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold text-gray-900 mb-1">{f.q}</h3>
                  <p className="text-xs text-[#0b6d41] mb-2">Also asked: {f.voice}</p>
                  <p className="faq-answer text-gray-800 text-sm leading-relaxed">{f.a}</p>
                  <SourceLine src={f.source} />
                </div>
              ))}
            </div>
            <p className="mt-8">
              <Link href="/admissions" className="text-[#0b6d41] font-semibold underline">Admission process</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
