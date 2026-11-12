// DEP-34 — the allied health sciences enquiry form. One component, mounted on several pages.
//
// Third college to get this form. The Arts version went live 2026-08-16 and was submitted
// end-to-end from a real browser the same day: the action returned the CRM-accepted branch, not
// the 409 branch and not the error branch. Nursing and pharmacy followed the same day. This is
// the same shape, pointed at the allied health sciences institution.
//
// PII rule, and it is not a style preference: name and phone are collected here and NEVER sent to
// GA4. Only the source page, the programme id and the path leave this component.
//
// LOOK — mockup #7 "What Happens Next", the user's pick of 10 on 2026-10-22, live on the Dental
// site first (PR #18) and ported here with the same colours. The form is now its own white card:
// the old see-through dark card and white-on-green boxes did not stand out on the green hosts.
// The three-step strip answers the parent's first doubt ("what happens after I give my number?")
// and the trust line answers the second ("is this college genuine?"). Fields, labels, button text
// and the CRM payload are unchanged.
//
// CALL / WHATSAPP (user's choice 2026-11-04, the Dental pattern; the user OK'd this change to the
// frozen AHS form for it). No form ends on the "we call in 24 hours" thank-you screen any more:
// every form shows "Call Counsellor" + "Chat on WhatsApp", and ONE tap sends the lead (keepalive
// fetch to /api/enquiry, the same server action behind it) and opens the dialer / WhatsApp. The
// server action stays as the form's action for visitors without JavaScript. Fields, the hidden
// source_page, the programme ids and the CRM payload are unchanged.

"use client"

import { useActionState, useEffect, useId, useRef, useState, type FormEvent } from "react"
import { CheckCircle2, ChevronDown } from "lucide-react"
import { submitAhsEnquiry, type AhsEnquiryState } from "@/app/actions/ahs-enquiry"
import CampaignFields from "@/components/lead/CampaignFields"
import { AHS_PROGRAMMES } from "@/lib/ahs-programmes"
import { ENQUIRY_DONE_KEY, writeStore } from "@/lib/enquiry-store"
import { sendGaEvent } from "@/lib/ga-event"
import { GATE_PHONE_DISPLAY, telGateUrl, whatsappGateUrl, type GateIntent } from "@/lib/call-gate"

const ADMISSION_PHONE = "+919345855001"
const ADMISSION_PHONE_DISPLAY = "+91 93458 55001"

// Browser autofill fills a saved number as "07000000001" (Chrome 156, tel-national, India trunk 0 -
// measured 2026-11-12 on this live form) or "+91 ...". The box and the server both accept exactly 10
// digits from 6-9, so keep digits only and drop a leading 91 / 0 - otherwise a one-tap fill fails the
// pattern check and the visitor has to retype it. Same helper as the other college repos.
export function toTenDigitMobile(raw: string): string {
  const digits = raw.replace(/\D/g, "")
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2)
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1)
  return digits
}

// Only what a document proves for THIS college (checked 2026-10-22):
// - Affiliation: The Tamil Nadu Dr. M.G.R. Medical University, "AHS Courses - Affiliated Colleges /
//   Institutions for the Academic Year 2025-26" (FINALAHSWEBSITEUPDATIONsep72026.pdf) lists all 9
//   of our B.Sc programmes under institution code 825 (printed as J.K.K.Nattraja Dental College &
//   Hospital, Kumarapalayam) - see src/lib/ahs-colleges-tn.ts, row 825.
// - Since 2019: the same list prints "Year of PA issued 2019-20" for all 9 programmes, and the site
//   says "Since 2019" (AboutSection heading, foundingDate in src/app/layout.tsx).
// - NAAC is NOT here on purpose: /pdfs/NAAC-certificate.pdf is addressed to J K K Nattraja Dental
//   College and Hospital and does not name this college. Add it only with a certificate that does.
const TRUST = ["Affiliated to TN Dr. M.G.R. Medical University", "Since 2019"]

type Props = {
  /** Which page this instance sits on, e.g. "cardiac-technology". Tags the lead in the CRM. */
  sourcePage: string
  /** Pre-selected programme id, so a B.Sc page opens on B.Sc. Optional. */
  defaultProgrammeId?: string
  /** Heading above the fields. */
  heading?: string
  /** 3 boxes only (name, mobile, programme) — for the homepage popup and cards. District and
   *  the question box are optional in the CRM form, so a compact lead is still a complete lead. */
  compact?: boolean
  /** No white card of its own — for a host that already is the white card (homepage hero, popup). */
  bare?: boolean
  /** Call / WhatsApp gate (src/lib/call-gate.ts): ONE button, "Call Counsellor" or "Chat on
   *  WhatsApp" (set by EnquiryModal when a call / WhatsApp link was tapped). Left out (every page
   *  form and the Enquire Now popup, user's choice 2026-11-04): TWO buttons, "Call Counsellor" +
   *  "Chat on WhatsApp". Either way ONE tap sends the lead and opens the app. */
  gate?: GateIntent
}

type GatePhase =
  | { step: "form" }
  | { step: "opened"; result: "waiting" | "saved" | "failed"; programmeId: string; intent: GateIntent }

export default function AhsEnquiryForm({
  sourcePage,
  defaultProgrammeId,
  heading = "Call or WhatsApp our admission team",
  compact = false,
  bare = false,
  gate,
}: Props) {
  // Unique per instance: the homepage can show this form twice (hero card + popup).
  const uid = useId()
  const fid = (name: string) => `${uid}-${name}`
  const [state, formAction, isPending] = useActionState<AhsEnquiryState | null, FormData>(
    submitAhsEnquiry,
    null
  )
  const fired = useRef(false)

  // Fires once, only on a CRM-accepted submit — not on click, not before the round trip.
  useEffect(() => {
    if (!state?.success || fired.current) return
    fired.current = true
    writeStore(ENQUIRY_DONE_KEY, new Date().toISOString())
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === "function") {
      w.gtag("event", "lead_form_submit", {
        form_name: "ahs_enquiry",
        source_page: sourcePage,
        programme: state.tracking?.programme_id ?? "not_selected",
        destination: "crm",
        page_path: window.location.pathname,
      })
    }
  }, [state, sourcePage])

  // A form that silently fails and a form nobody used both read 0. This is what separates them.
  useEffect(() => {
    if (!state || state.success || !state.error) return
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === "function") {
      w.gtag("event", "lead_form_error", {
        form_name: "ahs_enquiry",
        source_page: sourcePage,
        page_path: window.location.pathname,
      })
    }
  }, [state, sourcePage])

  const surface = bare
    ? ""
    : "bg-white rounded-[20px] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-4 sm:p-6"

  const [gatePhase, setGatePhase] = useState<GatePhase>({ step: "form" })
  // Which of the two buttons was pressed. Read from SubmitEvent.submitter where the browser has it;
  // this ref (set on the button's own click) covers the rest. Enter in a box = the first button, Call.
  const chosen = useRef<GateIntent>(gate ?? "call")
  const eventFor = (intent: GateIntent) => (intent === "call" ? "gate_call" : "gate_wa")

  // Opens the dialer / WhatsApp. Called inside the visitor's tap (the browser allows another app
  // only then), and again from the fallback button if the phone ignored the first try.
  const openApp = (programmeId: string, intent: GateIntent) => {
    if (intent === "call") {
      window.location.assign(telGateUrl)
      return
    }
    const url = whatsappGateUrl(programmeId, window.location.pathname)
    // A new tab keeps this page (and the request still in flight) alive; a blocked tab falls back
    // to the same tab, where keepalive still lets the request finish.
    const tab = window.open(url, "_blank")
    if (tab) tab.opener = null
    else window.location.assign(url)
  }

  // ONE tap: check the 3 boxes, send the lead without waiting, open the app at once.
  const onGateSubmit = (e: FormEvent<HTMLFormElement>) => {
    // preventDefault also stops React's form action (it skips a prevented submit), so the server
    // action runs only when JavaScript is off - the progressive-enhancement path stays intact.
    e.preventDefault()
    const form = e.currentTarget
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const fromButton = submitter?.value === "whatsapp" || submitter?.value === "call" ? submitter.value : null
    const intent: GateIntent = gate ?? (fromButton as GateIntent | null) ?? chosen.current
    const gateEvent = eventFor(intent)
    const nameBox = form.elements.namedItem("name") as HTMLInputElement | null
    if (nameBox) nameBox.setCustomValidity(nameBox.value.trim().length < 2 ? "Please enter your full name." : "")
    // Same three rules as the server (name, 10-digit mobile from 6-9, a programme). Checked here
    // because the app opens before the server has answered.
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const programmeId = String(data.get("programme") ?? "")
    const body = new URLSearchParams()
    data.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value)
    })
    // No trailing slash: this site does not set trailingSlash, so "/api/enquiry/" would answer 308.
    const request = fetch("/api/enquiry", { method: "POST", body, keepalive: true })

    sendGaEvent(`${gateEvent}_launch`, { source_page: sourcePage, page_path: window.location.pathname })
    openApp(programmeId, intent)
    setGatePhase({ step: "opened", result: "waiting", programmeId, intent })

    request
      .then((res) => res.json() as Promise<AhsEnquiryState>)
      .then((result) => {
        if (!result.success) throw new Error("not accepted")
        writeStore(ENQUIRY_DONE_KEY, new Date().toISOString())
        // Same event, same params as the ordinary form, so lead_form_submit stays one series.
        sendGaEvent("lead_form_submit", {
          form_name: "ahs_enquiry",
          source_page: sourcePage,
          programme: result.tracking?.programme_id ?? "not_selected",
          destination: "crm",
          page_path: window.location.pathname,
        })
        sendGaEvent(`${gateEvent}_lead`, { source_page: sourcePage, page_path: window.location.pathname })
        setGatePhase((p) => (p.step === "opened" ? { ...p, result: "saved" } : p))
      })
      .catch(() => {
        sendGaEvent("lead_form_error", {
          form_name: "ahs_enquiry",
          source_page: sourcePage,
          page_path: window.location.pathname,
        })
        sendGaEvent(`${gateEvent}_fail`, { source_page: sourcePage, page_path: window.location.pathname })
        setGatePhase((p) => (p.step === "opened" ? { ...p, result: "failed" } : p))
      })
  }

  if (gatePhase.step === "opened") {
    const isCall = gatePhase.intent === "call"
    const gateEvent = eventFor(gatePhase.intent)
    return (
      <div className={`${surface} space-y-4 text-center`} role="status" aria-live="polite">
        <p className="text-[#032816] text-lg font-semibold">
          {isCall ? "Opening your phone dialer…" : "Opening WhatsApp…"}
        </p>
        <p className="text-[#4b5563] text-sm">
          {isCall
            ? `Tap the green Call button on your phone to talk to our counsellor at ${GATE_PHONE_DISPLAY}.`
            : "Your message is typed in WhatsApp. Tap Send to reach our admission team."}
        </p>
        {/* A <button>, not an <a>: ConversionTracking counts <a> taps, and this second try must not
            count as a second call tap. */}
        <button
          type="button"
          onClick={() => {
            sendGaEvent(`${gateEvent}_fallback`, { source_page: sourcePage, page_path: window.location.pathname })
            openApp(gatePhase.programmeId, gatePhase.intent)
          }}
          className={
            isCall
              ? "w-full bg-[#0b6d41] hover:bg-[#095a36] text-white font-bold py-4 rounded-full text-base transition-colors"
              : "w-full bg-[#25d366] hover:bg-[#1ebe5a] text-[#032816] font-bold py-4 rounded-full text-base transition-colors"
          }
        >
          {isCall ? `Did not open? Call ${GATE_PHONE_DISPLAY}` : "Did not open? Open WhatsApp"}
        </button>
        {gatePhase.result === "failed" && (
          <p className="text-[#b42318] text-sm" role="alert">
            Your details did not reach our system. Please tell the counsellor your name and course.
          </p>
        )}
      </div>
    )
  }

  if (state?.success) {
    return (
      <div className={`${surface} space-y-4 text-center`} role="status" aria-live="polite">
        <p className="text-[#032816] text-lg font-semibold">{state.message}</p>
        <p className="text-[#4b5563] text-sm">You can also reach us directly:</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href={`tel:${ADMISSION_PHONE}`}
            className="bg-[#0b6d41] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {ADMISSION_PHONE_DISPLAY}
          </a>
          {/* Dark text: white on WhatsApp green is 1.98:1, below the 4.5:1 text minimum. */}
          <a
            href={`https://wa.me/${ADMISSION_PHONE.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-[#032816] px-4 py-2 rounded-full text-sm font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const err = state?.fieldErrors
  // 16 px text in every box: below 16 px, iPhone Safari zooms the page on focus (the full form
  // used 14 px). Border #75867e is 3.84:1 on white and the hint text #5f6b66 is 5.55:1 — the
  // WCAG minimums are 3:1 for a box edge and 4.5:1 for text.
  const inputCls =
    "w-full bg-white border-[1.5px] border-[#75867e] rounded-xl px-4 py-3 text-base text-[#1f2a24] placeholder:text-[#5f6b66] focus:outline-none focus:border-[#0b6d41] focus:ring-[3px] focus:ring-[#0b6d41]/20"
  const labelCls = "block text-[#032816] text-sm font-semibold mb-1.5"
  const errCls = "text-[#b42318] text-xs mt-1"
  // The 3-step strip says what the buttons do (the old "We call in 24 hrs" step went with the
  // 24-hour call back, 2026-11-04).
  const steps =
    gate === "call"
      ? ["Fill 3 details", "Tap Call Counsellor", "Talk to us now"]
      : gate === "whatsapp"
        ? ["Fill 3 details", "Tap Chat on WhatsApp", "Send the message"]
        : [compact ? "Fill 3 details" : "Fill your details", "Tap Call or WhatsApp", "Talk to us now"]

  return (
    <form action={formAction} onSubmit={onGateSubmit} className={`${surface} space-y-4 text-left`}>
      <input type="hidden" name="source_page" value={sourcePage} />
      <CampaignFields />

      {/* Honeypot. Off-screen rather than display:none so a bot still fills it. Never remove: the
          CRM scores this field. autoComplete is a made-up token ON PURPOSE - measured 2026-11-12
          on Chrome 156 (/admissions/cardiac-technology, /cardiac-technology): with "off", Chrome
          read "company_website" as Company name and filled a parent's saved company into it, which
          would mark a real lead as a bot. Chrome does not fill a field whose token it does not
          recognise. Do not change it back to "off". (Frozen form: changed with the user's OK.) */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="hp-ignore"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <h2 className="sr-only">
        {gate === "call" ? "Call our admission counsellor" : gate === "whatsapp" ? "Chat with us on WhatsApp" : heading}
      </h2>

      <ol aria-label="What happens next" className="grid grid-cols-3 gap-1.5">
        {steps.map((step, i) => (
          <li
            key={step}
            className="rounded-xl bg-[#f1f7f3] px-1.5 py-2.5 text-center text-xs font-semibold leading-tight text-[#032816]"
          >
            <span
              aria-hidden="true"
              className="mx-auto mb-1.5 grid h-6 w-6 place-items-center rounded-full bg-[#ffde59] text-xs font-bold"
            >
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor={fid("name")} className={labelCls}>
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("name")}
            type="text"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Enter your full name"
            aria-invalid={!!err?.name}
            className={inputCls}
          />
          {err?.name && <p className={errCls}>{err.name}</p>}
        </div>
        <div>
          <label htmlFor={fid("phone")} className={labelCls}>
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("phone")}
            type="tel"
            name="phone"
            autoComplete="tel-national"
            onInput={(e) => {
              const box = e.currentTarget
              const tenDigits = toTenDigitMobile(box.value)
              if (tenDigits !== box.value) box.value = tenDigits
            }}
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            title="10-digit mobile number starting with 6, 7, 8 or 9"
            placeholder="10-digit mobile number"
            aria-invalid={!!err?.phone}
            className={inputCls}
          />
          {err?.phone && <p className={errCls}>{err.phone}</p>}
        </div>
      </div>

      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor={fid("programme")} className={labelCls}>
            Programme Interested In <span aria-hidden="true">*</span>
          </label>
          {/* appearance-none hides the native arrow, so draw one: without it the box does not
              read as a dropdown. */}
          <div className="relative">
            <select
              id={fid("programme")}
              name="programme"
              required
              defaultValue={defaultProgrammeId ?? ""}
              aria-invalid={!!err?.programme}
              className={`${inputCls} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select a Programme
              </option>
              {AHS_PROGRAMMES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4b5563]"
            />
          </div>
          {err?.programme && <p className={errCls}>{err.programme}</p>}
        </div>
        {!compact && (
        <div>
          <label htmlFor={fid("district")} className={labelCls}>
            Your District <span className="font-normal text-[#4b5563]">(optional)</span>
          </label>
          <input
            id={fid("district")}
            type="text"
            name="district"
            placeholder="e.g., Namakkal"
            className={inputCls}
          />
        </div>
        )}
      </div>

      {!compact && (
      <div>
        <label htmlFor={fid("question")} className={labelCls}>
          Any Questions? <span className="font-normal text-[#4b5563]">(optional)</span>
        </label>
        <textarea
          id={fid("question")}
          name="question"
          rows={3}
          maxLength={300}
          placeholder="e.g., What is the fee for B.Sc Cardiac Technology?"
          className={`${inputCls} resize-none`}
        />
      </div>
      )}

      {/* One tap = lead + app. Two buttons on every page form and the Enquire Now popup (user's choice
          2026-11-04: the old "Get a Call Back" ended on a 24-hour thank-you screen); one in a gate. */}
      {(gate ? [gate] : (["call", "whatsapp"] as GateIntent[])).map((intent) => (
        <button
          key={intent}
          type="submit"
          name="cta"
          value={intent}
          disabled={isPending}
          onClick={() => {
            chosen.current = intent
          }}
          className={
            intent === "whatsapp"
              ? "w-full bg-[#25d366] hover:bg-[#1ebe5a] disabled:opacity-60 text-[#032816] font-bold py-4 rounded-full text-base transition-colors"
              : "w-full bg-[#0b6d41] hover:bg-[#095a36] disabled:opacity-60 text-white font-bold py-4 rounded-full text-base transition-colors"
          }
        >
          {isPending ? "Submitting…" : intent === "call" ? "Call Counsellor" : "Chat on WhatsApp"}
        </button>
      ))}

      {state && !state.success && state.error && (
        <p className="text-[#b42318] text-sm text-center" role="alert">
          {state.error}
        </p>
      )}

      <ul
        aria-label="Recognition"
        className="flex flex-wrap justify-center gap-x-3.5 gap-y-1.5 text-[12.5px] font-semibold text-[#032816]"
      >
        {TRUST.map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#0b6d41]" />
            {t}
          </li>
        ))}
      </ul>

      {compact && (
        <p className="text-center text-[#5f6b66] text-xs">
          By submitting, you agree to be contacted by our admission team.
        </p>
      )}
    </form>
  )
}
