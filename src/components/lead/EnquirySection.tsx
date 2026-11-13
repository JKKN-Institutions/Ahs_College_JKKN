// The AHS enquiry form as a full-width page section (user's call 2026-11-13: forms on the 69 admission
// pages that had none). Same green section as the live Coimbatore / Erode / Namakkal / Salem pages; the card
// inside is the frozen AhsEnquiryForm, unchanged. Each page passes its own sourcePage
// (CRM utm_campaign ahs-<sourcePage>) - scripts/ahs_form_guard.py checks those values on the live pages.

import AhsEnquiryForm from "@/components/lead/AhsEnquiryForm"

type Props = {
  /** Tags the lead in the CRM as utm_campaign ahs-<sourcePage>. */
  sourcePage: string
  heading?: string
  subheading?: string
  /** Pre-selected programme id (src/lib/ahs-programmes.ts). Only for a page about exactly one programme. */
  programmeId?: string
}

export default function EnquirySection({
  sourcePage,
  heading = "Admissions 2026 — Talk to Our Admission Team",
  subheading = "Leave your details, then call or WhatsApp our admission team right away.",
  programmeId,
}: Props) {
  return (
    <section className="bg-gradient-to-br from-[#0b6d41] to-[#12a15f] py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-black text-center mb-2">{heading}</h2>
        <p className="text-white/80 text-center text-sm mb-8">{subheading}</p>
        <AhsEnquiryForm sourcePage={sourcePage} defaultProgrammeId={programmeId} />
      </div>
    </section>
  )
}
