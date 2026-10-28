import Link from "next/link";

// Seats from The Tamil Nadu Dr. M.G.R. Medical University AHS list 2025-26 (code 825, updated
// 07-09-2026); fees from /admissions (2026-27). Lifted out of /namakkal so every city page that
// shows seats prints the same 82, not the 30 / 40 the old course cards carried.
export default function SeatsFeesSection() {
  const rows = [
    { name: "B.Sc Cardiac Technology", seats: 7, fee: "₹1,70,000" },
    { name: "Bachelor of Dialysis Therapy Technology (B.DTT)", seats: 5, fee: "₹1,10,000" },
    { name: "Bachelor of Medical Radiology and Imaging Technology (B.MRIT)", seats: 5, fee: "₹1,30,000" },
    { name: "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)", seats: 10, fee: "₹1,70,000" },
    { name: "Bachelor of Respiratory Technology (B.RT)", seats: 10, fee: "₹1,10,000" },
    { name: "Bachelor of Physician Associates (B.PA)", seats: 10, fee: "₹1,30,000" },
    { name: "B.Sc Critical Care Technology", seats: 10, fee: "₹1,10,000" },
    { name: "Bachelor of Emergency Medical Technologist (Paramedic)", seats: 10, fee: "₹1,10,000" },
    { name: "Bachelor of Science in Health Information Management (B.Sc. HIM)", seats: 15, fee: "₹60,000" },
  ];
  const total = rows.reduce((s, r) => s + r.seats, 0);

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 text-center">
          Seats and Fees, Course by Course
        </h2>
        <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mb-8"></div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#e8f5ea] text-left">
                <th className="p-3 font-semibold text-gray-900">Course (3 years + 1 year internship)</th>
                <th className="p-3 font-semibold text-gray-900">Seats</th>
                <th className="p-3 font-semibold text-gray-900">Management-quota tuition a year</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-b border-gray-100">
                  <td className="p-3 text-gray-800">{r.name}</td>
                  <td className="p-3 text-gray-800">{r.seats}</td>
                  <td className="p-3 text-gray-800">{r.fee}</td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td className="p-3 text-gray-900">Total</td>
                <td className="p-3 text-gray-900">{total}</td>
                <td className="p-3 text-gray-600 font-normal">Government quota: as per government norms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          Seats: The Tamil Nadu Dr. M.G.R. Medical University, AHS affiliated colleges 2025-26,
          institution code 825. Fees: JKKN College of Allied Health Sciences fee structure 2026-27
          (see <Link href="/admissions" className="text-[#006837] font-semibold hover:underline">admissions</Link>).
        </p>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          Institution: the university lists these courses under J.K.K. Nattraja Dental College &amp;
          Hospital (code 825), which is NAAC accredited with an A grade (CGPA 3.01, valid to
          26 February 2030).
        </p>
      </div>
    </section>
  );
}
