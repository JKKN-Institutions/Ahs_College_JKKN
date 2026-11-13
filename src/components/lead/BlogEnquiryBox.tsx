// Enquiry box inside an AHS blog post (user's call 2026-11-13: the 39 campus posts had only a comment box,
// which never reaches the CRM). Sits after the article and its tags, before the comments. The card is the
// frozen AhsEnquiryForm in its compact 3-box layout; the programme is pre-selected only when the post's slug
// names exactly one course (src/lib/blog-course.ts).

import AhsEnquiryForm from "@/components/lead/AhsEnquiryForm"
import { programmeForBlogSlug, programmeLabel } from "@/lib/blog-course"

type Props = {
  /** The post's slug - tags the lead (source_page blog-<first 40 chars>) and picks the course. */
  slug: string
}

export default function BlogEnquiryBox({ slug }: Props) {
  const programmeId = programmeForBlogSlug(slug)
  const label = programmeLabel(programmeId)
  return (
    <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#0b6d41] to-[#12a15f] p-3 min-[640px]:p-6">
      <h2 className="text-white text-xl md:text-2xl font-black text-center mb-1">
        {label ? `Ask About ${label} Admission` : "Questions About Admission? Talk to Our Team"}
      </h2>
      <p className="text-white/80 text-center text-sm mb-5">
        Leave your details, then call or WhatsApp our admission team right away.
      </p>
      <AhsEnquiryForm sourcePage={`blog-${slug.slice(0, 40)}`} defaultProgrammeId={programmeId} compact />
    </div>
  )
}
