import Link from "next/link";

const programs = [
  { name: "B.Sc Cardiac Technology", slug: "cardiac-technology", duration: "4 Years", careers: "Cardiac Technologist, ECG Technician, Cath Lab Technician" },
  { name: "B.Sc Radiology & Imaging Technology", slug: "radiology-imaging-technology", duration: "4 Years", careers: "Radiographer, CT/MRI Technologist, Sonographer" },
  { name: "B.Sc Dialysis Technology", slug: "dialysis-technology", duration: "4 Years", careers: "Dialysis Technician, Renal Care Specialist" },
  { name: "B.Sc Operation Theatre & Anaesthesia Technology", slug: "operation-theatre-anaesthesia", duration: "4 Years", careers: "OT Technologist, Anaesthesia Technician" },
  { name: "B.Sc Respiratory Therapy", slug: "respiratory-therapy", duration: "4 Years", careers: "Respiratory Therapist, Pulmonary Care Specialist" },
  { name: "B.Sc Physician Assistant", slug: "physician-assistant", duration: "4 Years", careers: "Physician Assistant, Clinical Associate" },
  { name: "B.Sc Critical Care Technology", slug: "critical-care-technology", duration: "4 Years", careers: "ICU Technologist, Critical Care Specialist" },
  { name: "B.Sc Medical Record Science", slug: "medical-record-science", duration: "4 Years", careers: "Medical Records Officer, Health Information Manager" },
  { name: "B.Sc Accident & Emergency Care Technology", slug: "accident-emergency-care", duration: "4 Years", careers: "Emergency Care Technologist, Trauma Care Specialist" },
];

export function SnippetBlock() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#fbfbee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Paragraph Snippet — "What is the best allied health sciences college in Tamil Nadu?" */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
            Best Allied Health Sciences College in Tamil Nadu
          </h2>
          <p className="snippet-answer voice-answer text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            JKKN College of Allied Health Sciences, located on NH-544 in Komarapalayam, Tamil Nadu, is one of the best allied health sciences colleges in the state. Affiliated with Tamil Nadu Dr. M.G.R. Medical University and NAAC A+ accredited, the college offers 9 specialized B.Sc programs with 2,000+ clinical training hours at a 500+ bed multi-specialty teaching hospital. With a 95% placement rate, 100+ recruiting partners, and packages ranging from 3.2 to 7.5 LPA, JKKN produces job-ready allied health professionals for leading hospitals across India and abroad.
          </p>
        </div>

        {/* List Snippet — "Why choose JKKN AHS?" */}
        <div className="mb-10 sm:mb-14">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
            Why Choose JKKN for Allied Health Sciences?
          </h3>
          <ul className="snippet-answer list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl">
            <li><strong>NAAC A+ Accredited</strong> — Part of JKKN Educational Institutions with a 70+ year legacy of educational excellence in Tamil Nadu.</li>
            <li><strong>9 Specialized B.Sc Programs</strong> — Including <Link href="/cardiac-technology" className="text-[#0b6d41] font-semibold hover:underline">Cardiac Technology</Link>, <Link href="/radiology-imaging-technology" className="text-[#0b6d41] font-semibold hover:underline">Radiology</Link>, <Link href="/dialysis-technology" className="text-[#0b6d41] font-semibold hover:underline">Dialysis Technology</Link>, and <Link href="/respiratory-therapy" className="text-[#0b6d41] font-semibold hover:underline">Respiratory Therapy</Link>.</li>
            <li><strong>500+ Bed Teaching Hospital</strong> — Hands-on clinical training from Year 1 at a multi-specialty hospital with 2,000+ training hours.</li>
            <li><strong>95% Placement Rate</strong> — 100+ recruiters including Apollo, MIOT, Fortis, and Kauvery; highest package 7.5 LPA.</li>
            <li><strong>International Opportunities</strong> — Alumni placed in the UK (NHS), UAE, Saudi Arabia, and Australia.</li>
            <li><strong>Affordable Fees with Scholarships</strong> — GQ fees as per Govt norms; MQ annual fees from ₹60,000 to ₹1,70,000 with merit-based scholarships available.</li>
            <li><strong>Complete Campus Facilities</strong> — <Link href="/hostel" className="text-[#0b6d41] font-semibold hover:underline">Hostel</Link>, <Link href="/lab" className="text-[#0b6d41] font-semibold hover:underline">advanced labs</Link>, <Link href="/library" className="text-[#0b6d41] font-semibold hover:underline">digital library</Link>, <Link href="/transport" className="text-[#0b6d41] font-semibold hover:underline">transport</Link>, and Wi-Fi on a green campus along NH-544.</li>
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
