// Which AHS programme a blog post is about, read from its slug. Used ONLY to pre-select the programme in a
// blog enquiry box (user's call 2026-11-13: forms on the blog posts). A post whose slug names no course, or
// more than one course (e.g. "cardiac-vs-critical-care-vs-respiratory-therapy"), gets no pre-select and the
// reader picks - guessing would file the lead under a course nobody asked for.
// Checked against all 39 /blog/campus slugs and the 9 /course-blog slugs on 2026-11-13.
// Plain data + a pure function, so it stays out of any 'use server' file.

import { AHS_PROGRAMMES, DEFAULT_PROGRAMME_BY_PAGE } from "@/lib/ahs-programmes"

const COURSE_WORDS: ReadonlyArray<readonly [string, readonly string[]]> = [
  ["cardiac-technology", ["cardiac"]],
  ["critical-care-technology", ["critical-care"]],
  ["physician-assistant", ["physician-assistant", "physician-associate"]],
  ["dialysis-technology", ["dialysis"]],
  ["accident-emergency-care", ["accident-emergency", "emergency-care", "paramedic"]],
  ["respiratory-therapy", ["respiratory"]],
  ["operation-theatre-anaesthesia", ["operation-theatre", "anaesthesia", "anesthesia"]],
  ["medical-record-science", ["medical-record", "health-information"]],
  ["radiology-imaging-technology", ["radiology", "imaging"]],
]

/** The course page slug a blog slug is about, or null when it names none or several. */
export function courseForBlogSlug(slug: string): string | null {
  const s = slug.toLowerCase()
  const hits = COURSE_WORDS.filter(([, words]) => words.some((w) => s.includes(w))).map(([course]) => course)
  return hits.length === 1 ? hits[0] : null
}

/** CRM programme id to pre-select for a blog slug, or undefined. */
export function programmeForBlogSlug(slug: string): string | undefined {
  const course = courseForBlogSlug(slug)
  return course ? DEFAULT_PROGRAMME_BY_PAGE[course] : undefined
}

/** Programme label (as the form's dropdown shows it) for an id, or undefined. */
export function programmeLabel(id: string | undefined): string | undefined {
  return id ? AHS_PROGRAMMES.find((p) => p.id === id)?.label : undefined
}
