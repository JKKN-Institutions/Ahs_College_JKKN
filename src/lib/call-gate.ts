// Call / WhatsApp form gate (user's choice 2026-11-04, ported from the Dental site where it went
// live 2026-11-03 / 2026-11-04 and was tested on a phone).
//
// WHY. Every Call and WhatsApp button on this site points at ONE number, +91 93458 55001, and a
// tap on it left no trace in the CRM: GA4 counted the tap (phone_click / whatsapp_click) but a tap
// carries no phone number, so no call or chat could be tied to a website visit. With the gate, a
// tap opens the 3-box enquiry form first; its button ("Call Counsellor" / "Chat on WhatsApp")
// sends the lead to the CRM AND opens the dialer / WhatsApp in the same tap. So every gated
// contact has a CRM "website" lead created a moment before it.
//
// What is NOT gated: the careers page (job seekers, not admission enquiries) and any number other
// than 93458 55001. Every AHS course page is gated: all 9 courses on the site are in the CRM list
// (src/lib/ahs-programmes.ts), so the form can always take the course. A visitor whose enquiry the
// CRM already accepted on this browser is never gated again (EnquiryModal / EnquiryButton).
//
// Plain module: no React, no server code - the modal, the form and the buttons all import it.

import { AHS_PROGRAMMES, DEFAULT_PROGRAMME_BY_PAGE } from "@/lib/ahs-programmes"

export type GateIntent = "call" | "whatsapp"

export const GATE_PHONE = "+919345855001"
export const GATE_PHONE_DISPLAY = "+91 93458 55001"
const GATE_DIGITS = "9345855001"

/** Paths where a tap must reach the number directly. */
const UNGATED_PATH_PREFIXES = ["/careers"]

export function isUngatedPath(pathname: string): boolean {
  const p = pathname.toLowerCase()
  return UNGATED_PATH_PREFIXES.some((prefix) => p === prefix || p.startsWith(`${prefix}/`))
}

/**
 * Which gate a link belongs to, or null for any other link.
 * tel: links match when their digits end in the admission number (so "tel:+91 93458 55001",
 * "tel:9345855001" and "tel: +91 93458 55001" all count, and any other number does not).
 * WhatsApp links match wa.me/<number> and api.whatsapp.com/send?phone=<number>.
 */
export function gateIntentForHref(rawHref: string): GateIntent | null {
  const href = rawHref.trim().toLowerCase()
  if (href.startsWith("tel:")) {
    const digits = href.slice(4).replace(/\D/g, "")
    return digits.endsWith(GATE_DIGITS) ? "call" : null
  }
  const wa = href.match(/^https?:\/\/(?:wa\.me\/(\d+)|(?:api|web)\.whatsapp\.com\/send\/?\?(?:.*&)?phone=(\d+))/)
  if (wa) {
    const digits = wa[1] ?? wa[2] ?? ""
    return digits.endsWith(GATE_DIGITS) ? "whatsapp" : null
  }
  return null
}

/** Short page tag for the CRM source and the WhatsApp reference, e.g. "-contact" or "-home". */
export function pageTag(pathname: string): string {
  return pathname.replace(/\/+$/, "").replace(/\//g, "-") || "-home"
}

/**
 * Pre-selects the course on a course page, so the cardiac page opens on cardiac. Matches the
 * course page itself (/cardiac-technology), its admission page (/admissions/cardiac-technology)
 * and its course blog (/course-blog/scope-of-cardiac-technology-in-india). Nothing elsewhere.
 */
export function programmeForPath(pathname: string): string | undefined {
  const segments = pathname.toLowerCase().split("/").filter(Boolean)
  const isCourseBlog = segments[0] === "course-blog" && segments.length > 1
  for (const [slug, id] of Object.entries(DEFAULT_PROGRAMME_BY_PAGE)) {
    if (segments.includes(slug)) return id
    if (isCourseBlog && segments[1].includes(slug)) return id
  }
  return undefined
}

/** The course as the CRM lists it, e.g. "B.Sc Cardiac Technology". */
function courseName(programmeId: string): string {
  return AHS_PROGRAMMES.find((x) => x.id === programmeId)?.label ?? "Allied Health course"
}

/**
 * WhatsApp link with the course and a page reference typed into the box.
 * No name and no phone in it, ever: a link like this can end up in analytics or logs.
 */
export function whatsappGateUrl(programmeId: string, pathname: string): string {
  const ref = pageTag(pathname).replace(/^-/, "").replace(/[^a-z0-9-]/gi, "").slice(0, 30) || "home"
  const text = `Hi, ${courseName(programmeId)} admission details venum. Ref: WEB-AHS-${ref}`
  return `https://wa.me/${GATE_PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`
}

export const telGateUrl = `tel:${GATE_PHONE}`

// Plain-text numbers. The site prints the number as plain text in many places (FAQ answers, page
// copy, "Call: 91-93458 55001"); iPhone used to turn those into dial links of its own, outside the
// gate. The root layout now switches that off, and EnquiryModal reads a tap on such a number with
// numberAtOffset(). Indian mobiles only, as a visitor reads them: "+91 93458 55001", "93458 55001",
// "+91-9345855001", "9345855001".
const PLAIN_MOBILE = /(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/g

/** The 10-digit mobile number that a character offset of a text falls inside, or null. */
export function numberAtOffset(text: string, offset: number): string | null {
  for (const m of text.matchAll(PLAIN_MOBILE)) {
    const start = m.index ?? 0
    if (offset >= start && offset <= start + m[0].length) return m[0].replace(/\D/g, "").slice(-10)
  }
  return null
}

/** True for the admission number - the one number the gate applies to. */
export function isGateNumber(digits: string): boolean {
  return digits === GATE_DIGITS
}

export function telUrlFor(digits: string): string {
  return `tel:+91${digits}`
}
