import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
  AHS_INSTITUTIONS_TN,
  AHS_TN_TOTAL,
  AHS_TN_GOVT,
  AHS_TN_SELF_COUNT,
  AHS_TN_COURSE_COUNTS,
  AHS_LIST_SOURCE,
  ahsInDistrict,
  type AhsInstitution,
} from "@/lib/ahs-colleges-tn";
import { PARAMEDICAL_TN_FAQS } from "./faqs";

// Server-rendered on purpose: every row, table and FAQ answer is in the HTML a crawler receives.
// No tabs, no accordion, no client-side filter hiding rows.

const DISTRICTS = ["Namakkal", "Erode", "Salem"] as const;

// Course names used in the Selection Committee's 2026-27 prospectus (G.O. (D) No. 710, 18-06-2026).
// Listed as printed. We do not claim which older name each one replaces - check the prospectus.
const PROSPECTUS_2026_NAMES = [
  "Bachelor of Physiotherapy (B.PT)",
  "Bachelor of Occupational Therapy (B.OT)",
  "B.Sc. Cardio-Pulmonary Perfusion Technology",
  "B.Sc. Cardiac Technology",
  "B.Sc. Critical Care Technology",
  "B.Sc. Neuro Electro Physiology",
  "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)",
  "Bachelor of Radiation Therapy Technology (B.RTT)",
  "Bachelor of Medical Laboratory Science (B.MLS)",
  "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)",
  "Bachelor of Dialysis Therapy Technology (B.DTT)",
  "Bachelor of Physician Associates (B.PA)",
  "Bachelor of Emergency Medical Technologist (Paramedic)",
  "Bachelor of Respiratory Technology (B.RT)",
  "Bachelor of Optometry (B.Optom.)",
  "Bachelor of Nutrition and Dietetics (Honours)",
];

function InstitutionTable({ rows, caption, showDistrict = false }: { rows: AhsInstitution[]; caption: string; showDistrict?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-sm text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-[#f0f7f2] text-[#0b6d41]">
          <tr>
            <th scope="col" className="px-4 py-3 font-bold">Institution (as the university prints it)</th>
            <th scope="col" className="px-4 py-3 font-bold">Place</th>
            {showDistrict && <th scope="col" className="px-4 py-3 font-bold">Type</th>}
            <th scope="col" className="px-4 py-3 font-bold">UG courses</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code} className={`border-t border-gray-100 align-top ${r.jkkn ? "bg-[#fbfbee]" : ""}`}>
              <td className="px-4 py-3 text-gray-900">
                {r.name}
                <span className="block text-xs text-gray-500">Code {r.code}</span>
              </td>
              <td className="px-4 py-3 text-gray-700">{r.place}{r.pin ? ` ${r.pin}` : ""}</td>
              {showDistrict && <td className="px-4 py-3 text-gray-700">{r.gov ? "Government" : "Self-financing"}</td>}
              <td className="px-4 py-3 text-gray-700">{r.courses.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ParamedicalCollegesTamilNaduPage() {
  const selfFinancing = AHS_INSTITUTIONS_TN.filter((i) => !i.gov);
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 bg-[#fbfbee]">
        <Breadcrumb items={[{ label: "Paramedical Colleges in Tamil Nadu" }]} />

        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-[#0b6d41] mb-4">
              Paramedical &amp; Allied Health Science Colleges in Tamil Nadu 2026 - Official List
            </h1>
            <p className="snippet-answer text-gray-900 text-base leading-relaxed mb-4">
              {AHS_TN_TOTAL} institutions in Tamil Nadu are affiliated to The Tamil Nadu Dr. M.G.R. Medical
              University for at least one undergraduate paramedical (allied health) course in {AHS_LIST_SOURCE.year}:{" "}
              {AHS_TN_GOVT.length} government and {AHS_TN_SELF_COUNT} self-financing. This page lists every one of
              them from the university&apos;s own affiliation list, with the government colleges, the colleges in
              Namakkal, Erode and Salem districts, and what to check before you choose.
            </p>
            <p className="text-xs text-gray-500">
              Source: {AHS_LIST_SOURCE.title} (
              <a href={AHS_LIST_SOURCE.url} className="underline" rel="noopener" target="_blank">tnmgrmu.ac.in</a>).
              Deemed universities, B.Sc Nursing and BPT colleges are on separate lists and are not included.
            </p>
          </div>
        </section>

        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">Paramedical, allied health - same courses</h2>
            <p className="text-gray-800 leading-relaxed">
              &quot;Paramedical&quot; and &quot;allied health science&quot; are two names for the same degree courses. The
              Tamil Nadu Selection Committee&apos;s website lists them as Paramedical Degree Courses; its 2026-27
              prospectus (G.O. (D) No. 710, dated 18-06-2026) calls them Allied and Healthcare UG Degree Courses.
              Searching either name leads to the same colleges below.
            </p>
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">
              Government paramedical colleges in Tamil Nadu ({AHS_TN_GOVT.length})
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              Government seats are applied for online through the Selection Committee, Directorate of Medical
              Education and Research (tnmedicalselection.org).
            </p>
            <InstitutionTable rows={AHS_TN_GOVT} caption="Government paramedical colleges in Tamil Nadu" />
          </div>
        </section>

        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">Paramedical courses and how many colleges offer each</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Number of Tamil Nadu institutions offering each UG allied health course</caption>
                <thead className="bg-[#f0f7f2] text-[#0b6d41]">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">Course</th>
                    <th scope="col" className="px-4 py-3 font-bold text-right">Institutions</th>
                  </tr>
                </thead>
                <tbody>
                  {AHS_TN_COURSE_COUNTS.map((c) => (
                    <tr key={c.course} className="border-t border-gray-100">
                      <td className="px-4 py-3 text-gray-900">{c.course}</td>
                      <td className="px-4 py-3 text-gray-900 text-right">{c.institutions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 mt-4">
              Looking for one course? See the{" "}
              <Link href="/cardiac-technology#cardiac-technology-colleges-tamil-nadu" className="text-[#0b6d41] underline">
                B.Sc Cardiac Technology colleges in Tamil Nadu
              </Link>{" "}
              list.
            </p>
            <h3 className="text-lg font-bold text-[#0b6d41] mt-8 mb-2">Course names in the 2026-27 prospectus</h3>
            <p className="text-sm text-gray-700 mb-3">
              The Selection Committee&apos;s 2026-27 prospectus uses these names. Some differ from the names on the
              university&apos;s 2025-26 affiliation list above - check the prospectus for your course.
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-800 space-y-1">
              {PROSPECTUS_2026_NAMES.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
        </section>

        {DISTRICTS.map((d) => {
          const rows = ahsInDistrict(d);
          return (
            <section key={d} className="py-10 px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-black text-[#0b6d41] mb-3">
                  Paramedical colleges in {d} district ({rows.length})
                </h2>
                <InstitutionTable rows={rows} caption={`Paramedical colleges in ${d} district`} showDistrict />
                <p className="text-sm text-gray-700 mt-3">
                  <Link href={`/${d.toLowerCase()}`} className="text-[#0b6d41] underline">Studying from {d}</Link>
                </p>
              </div>
            </section>
          );
        })}

        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">How to choose a paramedical college in Tamil Nadu</h2>
            <p className="text-gray-800 mb-3">
              There is no official ranking of allied health colleges - NIRF has no allied health category. These are the
              things you can check yourself:
            </p>
            <ol className="list-decimal pl-6 text-gray-800 space-y-2">
              <li>The college and your course are on the university&apos;s current affiliation list (every row on this page is).</li>
              <li>A teaching hospital where you will do your clinical postings - ask for its name and bed strength in writing.</li>
              <li>The sanctioned seats for your course, and whether it is a government-quota or management-quota seat.</li>
              <li>Where the one-year compulsory internship is done.</li>
              <li>The total fee for all four years, including hostel, transport and exam fees.</li>
            </ol>
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-3">
              Self-financing paramedical colleges in Tamil Nadu ({selfFinancing.length})
            </h2>
            <p className="text-sm text-gray-700 mb-4">Sorted by place. Codes are the university&apos;s institution codes.</p>
            <InstitutionTable rows={selfFinancing} caption="Self-financing paramedical colleges in Tamil Nadu" />
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#0b6d41] mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {PARAMEDICAL_TN_FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold text-gray-900 mb-1">{f.q}</h3>
                  <p className="faq-answer text-gray-800 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-700 mt-8">
              JKKN College of Allied Health Sciences, Komarapalayam, Namakkal district, offers 9 of these courses -{" "}
              <Link href="/departments" className="text-[#0b6d41] underline">see the programmes</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
