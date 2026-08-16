// DEP-34 — the allied health sciences enquiry form. One component, mounted on several pages.
//
// Third college to get this form. The Arts version went live 2026-08-16 and was submitted
// end-to-end from a real browser the same day: the action returned the CRM-accepted branch, not
// the 409 branch and not the error branch. Nursing and pharmacy followed the same day. This is
// the same shape, pointed at the allied health sciences institution.
//
// PII rule, and it is not a style preference: name and phone are collected here and NEVER sent to
// GA4. Only the source page, the programme id and the path leave this component.

"use client"

import { useActionState, useEffect, useRef } from "react"
import { submitAhsEnquiry, type AhsEnquiryState } from "@/app/actions/ahs-enquiry"
import { AHS_PROGRAMMES } from "@/lib/ahs-programmes"

const ADMISSION_PHONE = "+919345855001"
const ADMISSION_PHONE_DISPLAY = "+91 93458 55001"

type Props = {
  /** Which page this instance sits on, e.g. "cardiac-technology". Tags the lead in the CRM. */
  sourcePage: string
  /** Pre-selected programme id, so a B.Sc page opens on B.Sc. Optional. */
  defaultProgrammeId?: string
  /** Heading above the fields. */
  heading?: string
}

export default function AhsEnquiryForm({
  sourcePage,
  defaultProgrammeId,
  heading = "Get a Call Back",
}: Props) {
  const [state, formAction, isPending] = useActionState<AhsEnquiryState | null, FormData>(
    submitAhsEnquiry,
    null
  )
  const fired = useRef(false)

  // Fires once, only on a CRM-accepted submit — not on click, not before the round trip.
  useEffect(() => {
    if (!state?.success || fired.current) return
    fired.current = true
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

  if (state?.success) {
    return (
      <div className="space-y-4 text-center" role="status" aria-live="polite">
        <p className="text-white text-lg font-semibold">{state.message}</p>
        <p className="text-white/70 text-sm">You can also reach us directly:</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href={`tel:${ADMISSION_PHONE}`}
            className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {ADMISSION_PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/${ADMISSION_PHONE.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const err = state?.fieldErrors
  const inputCls =
    "w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60"

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="source_page" value={sourcePage} />

      {/* Honeypot. Off-screen rather than display:none - a real browser autofill will not reach
          it and a bot will. Never remove: the CRM scores this field. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <h2 className="sr-only">{heading}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ahs-name" className="block text-white text-sm font-medium mb-1.5">
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="ahs-name"
            type="text"
            name="name"
            required
            minLength={2}
            placeholder="Enter your full name"
            aria-invalid={!!err?.name}
            className={inputCls}
          />
          {err?.name && <p className="text-red-200 text-xs mt-1">{err.name}</p>}
        </div>
        <div>
          <label htmlFor="ahs-phone" className="block text-white text-sm font-medium mb-1.5">
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="ahs-phone"
            type="tel"
            name="phone"
            required
            inputMode="numeric"
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            aria-invalid={!!err?.phone}
            className={inputCls}
          />
          {err?.phone && <p className="text-red-200 text-xs mt-1">{err.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ahs-programme" className="block text-white text-sm font-medium mb-1.5">
            Programme Interested In <span aria-hidden="true">*</span>
          </label>
          <select
            id="ahs-programme"
            name="programme"
            required
            defaultValue={defaultProgrammeId ?? ""}
            aria-invalid={!!err?.programme}
            className={`${inputCls} appearance-none`}
          >
            <option value="" disabled className="text-gray-800 bg-white">
              Select a Programme
            </option>
            {AHS_PROGRAMMES.map((p) => (
              <option key={p.id} value={p.id} className="text-gray-800 bg-white">
                {p.label}
              </option>
            ))}
          </select>
          {err?.programme && <p className="text-red-200 text-xs mt-1">{err.programme}</p>}
        </div>
        <div>
          <label htmlFor="ahs-district" className="block text-white text-sm font-medium mb-1.5">
            Your District <span className="font-normal opacity-70">(optional)</span>
          </label>
          <input
            id="ahs-district"
            type="text"
            name="district"
            placeholder="e.g., Namakkal"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="ahs-question" className="block text-white text-sm font-medium mb-1.5">
          Any Questions? <span className="font-normal opacity-70">(optional)</span>
        </label>
        <textarea
          id="ahs-question"
          name="question"
          rows={3}
          maxLength={300}
          placeholder="e.g., What is the fee for B.Sc Cardiac Technology?"
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-4 rounded-full text-base transition-colors"
      >
        {isPending ? "Submitting…" : "Submit Enquiry — Get a Call Back"}
      </button>

      {state && !state.success && state.error && (
        <p className="text-red-200 text-sm text-center" role="alert">
          {state.error}
        </p>
      )}

      <p className="text-center text-white/70 text-sm">
        Or call us directly:{" "}
        <a href={`tel:${ADMISSION_PHONE}`} className="text-white underline">
          {ADMISSION_PHONE_DISPLAY}
        </a>{" "}
        •{" "}
        <a
          href={`https://wa.me/${ADMISSION_PHONE.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          WhatsApp
        </a>
      </p>
    </form>
  )
}
