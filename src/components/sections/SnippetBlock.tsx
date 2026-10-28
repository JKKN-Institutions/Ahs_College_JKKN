import Link from "next/link";
import { AHS_TN_TOTAL, AHS_LIST_SOURCE } from "@/lib/ahs-colleges-tn";

const programs = [
  { name: "B.Sc Cardiac Technology", slug: "cardiac-technology", duration: "4 Years", careers: "Cardiac Technologist, ECG Technician, Cath Lab Technician" },
  { name: "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)", slug: "radiology-imaging-technology", duration: "4 Years", careers: "Radiographer, CT/MRI Technologist, Sonographer" },
  { name: "Bachelor of Dialysis Therapy Technology (B.DTT)", slug: "dialysis-technology", duration: "4 Years", careers: "Dialysis Technician, Renal Care Specialist" },
  { name: "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)", slug: "operation-theatre-anaesthesia", duration: "4 Years", careers: "OT Technologist, Anaesthesia Technician" },
  { name: "Bachelor of Respiratory Technology (B.RT)", slug: "respiratory-therapy", duration: "4 Years", careers: "Respiratory Therapist, Pulmonary Care Specialist" },
  { name: "Bachelor of Physician Associates (B.PA)", slug: "physician-assistant", duration: "4 Years", careers: "Physician Associate, Clinical Associate" },
  { name: "B.Sc Critical Care Technology", slug: "critical-care-technology", duration: "4 Years", careers: "ICU Technologist, Critical Care Specialist" },
  { name: "Bachelor of Science in Health Information Management (B.Sc. HIM)", slug: "medical-record-science", duration: "4 Years", careers: "Medical Records Officer, Health Information Manager" },
  { name: "Bachelor of Emergency Medical Technologist (Paramedic)", slug: "accident-emergency-care", duration: "4 Years", careers: "Emergency Medical Technologist, Trauma Care Specialist" },
];

export function SnippetBlock() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#fbfbee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Paragraph Snippet. The "Best ... in Tamil Nadu" claim was removed 2026-09-24 (no ranking exists
            for allied health colleges); the Tamil Nadu list question is answered by its own page. */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
            Paramedical (Allied Health Sciences) College in Namakkal District
          </h2>
          <p className="snippet-answer voice-answer text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            JKKN College of Allied Health Sciences, on NH-544 in Komarapalayam, Namakkal district, offers 9 B.Sc paramedical (allied health) programmes affiliated to The Tamil Nadu Dr. M.G.R. Medical University, which lists them under J.K.K. Nattraja Dental College &amp; Hospital (code 825), an institution NAAC accredited with an A grade. Learners get 2,000+ clinical training hours and support from a dedicated placement cell. It is one of {AHS_TN_TOTAL} institutions on the university&apos;s {AHS_LIST_SOURCE.year} list for these courses - see{" "}
            <Link href="/paramedical-college-in-tamil-nadu" className="text-[#0b6d41] font-semibold hover:underline">JKKN paramedical courses, seats and eligibility</Link>.
          </p>
        </div>

        {/* List Snippet — "Why choose JKKN AHS?" */}
        <div className="mb-10 sm:mb-14">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
            Why Choose JKKN for Allied Health Sciences?
          </h3>
          <ul className="snippet-answer list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            <li><strong>University Affiliated</strong> — Affiliated to The Tamil Nadu Dr. M.G.R. Medical University; part of JKKN Educational Institutions with a 70+ year legacy of educational excellence in Tamil Nadu.</li>
            <li><strong>9 Specialized B.Sc Programs</strong> — Including <Link href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">Cardiac Technology</Link>, <Link href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">Medical Radiology and Imaging</Link>, <Link href="/dialysis-technology" className="text-[#0b6d41] font-semibold hover:underline">Dialysis Therapy Technology</Link>, and <Link href="/respiratory-therapy" className="text-[#0b6d41] font-semibold hover:underline">Respiratory Technology</Link>.</li>
            <li><strong>Clinical Training at Partner Hospitals</strong> — hands-on clinical postings, with 2,000+ training hours.</li>
            <li><strong>Placement Support</strong> — a dedicated placement cell that helps learners apply to hospitals and diagnostic centres.</li>
            <li><strong>International Careers</strong> — allied health graduates can work abroad after meeting that country&apos;s registration rules; ask the placement cell what guidance is offered.</li>
            <li><strong>Affordable Fees with Scholarships</strong> — GQ fees as per Govt norms; MQ annual fees from ₹60,000 to ₹1,70,000 with merit-based scholarships available.</li>
            <li><strong>Complete Campus Facilities</strong> — <Link href="/hostel" className="text-[#0b6d41] font-semibold hover:underline">Hostel</Link>, <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">advanced learning labs</Link>, <Link href="/library" className="text-[#0b6d41] font-semibold hover:underline">digital learning commons</Link>, <Link href="/transport" className="text-[#0b6d41] font-semibold hover:underline">transport</Link>, and Wi-Fi on a green campus along NH-544.</li>
          </ul>
        </div>

        {/* Table Snippet — Programs overview */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
            B.Sc Allied Health Sciences Programs at JKKN
          </h3>
          <div className="snippet-answer overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0b6d41] text-white">
                  <th className="px-4 py-3 font-bold">Program</th>
                  <th className="px-4 py-3 font-bold">Duration</th>
                  <th className="px-4 py-3 font-bold">Career Roles</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, index) => (
                  <tr key={program.slug} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">
                      <Link href={`/${program.slug}`} className="text-[#0b6d41] font-semibold hover:underline">
                        {program.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{program.duration}</td>
                    <td className="px-4 py-3 text-gray-600">{program.careers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
