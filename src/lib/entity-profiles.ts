/**
 * The identity URLs for JKKN College of Allied Health Sciences — the single source for every
 * `sameAs` on this site. Before this file the array was duplicated across 19 files in five
 * different shapes, so a wrong entry had to be found and fixed nineteen times.
 *
 * WHAT `sameAs` MEANS, AND WHY THAT MATTERS HERE.
 * `sameAs` is an identity assertion: "this entity IS also reachable at that URL". It is not a
 * "related links" list. A regulator's homepage, an affiliating university, a parent trust and a
 * click-to-chat endpoint are all DIFFERENT entities, and naming them here tells Google and every
 * AI engine that this college is those things.
 *
 * REMOVED 2026-09-16, both verified live that day:
 *
 *  - `https://www.wikidata.org/wiki/Q55090877` — fetched live: label
 *    "J.K.K.Nattraja Educational Institutions", English description **"Wikimedia list article"**,
 *    typed `P31 = Q13406463`. So the site was asserting that this college IS a Wikipedia list
 *    page. Same class of defect as the nursing site's `Q7397` ("software"). There is no
 *    replacement: an AHS-specific Wikidata item cannot be created — Wikidata:Notability excludes
 *    self-published sources and every source naming this college is ours (site, Facebook,
 *    YouTube, our own Maps listing). Re-tested 2026-08-13, unchanged; see CNT-11. It unblocks on
 *    any one of: a NAAC certificate naming AHS, an AISHE code in its own name, a TNMGRMU
 *    affiliation letter in its own name, or a UGC/state listing.
 *
 *  - `https://x.com/jkkninstitution` — the GROUP handle, not this college's. The user's
 *    ground-truth handle list (2026-08-13) gives AHS `jkknallied` only. Putting a group handle on
 *    a college entity is the same trap as the Education site's `instagram.com/jkkninstitutions`.
 *
 * CHANGED 2026-09-16: the Google Maps entry was `https://maps.app.goo.gl/JJ5dKGY4NAHReFpj7`.
 * It resolves correctly (302 -> "JKKN College Of Allied Health Science", pin 11.4428327,
 * 77.7288828), so it was never pointing at the wrong place — but `goo.gl` is on the Wikimedia
 * spam blacklist and a short link carries no entity information of its own. Replaced with the
 * resolved place URL, stripped of the volatile `?entry=` / `g_ep=` / `skid=` params, re-checked
 * 200 with no redirect on 2026-09-16.
 */

/** Google Maps place URL for the campus. Resolved from the short link, HEAD 200 on 2026-09-16. */
export const AHS_MAPS_URL =
  "https://www.google.com/maps/place/JKKN+College+Of+Allied+Health+Science/" +
  "@11.4428327,77.7263025,903m/data=!3m2!1e3!4b1!4m6!3m5!" +
  "1s0x3ba969fb9a2e0d93:0x6a21699145f2e49b!8m2!3d11.4428327!4d77.7288828!16s%2Fg%2F11x8sp6r6s";

/**
 * The verified identity URLs for this college. Handles are `jkkn` + the college word — the
 * user supplied `jkknallied` as ground truth twice (2026-08-11 and 2026-08-13) and both lists
 * agree. AHS is the estate's only `/company/` LinkedIn; the other five colleges are `/school/`.
 *
 * The YouTube entry is a PLAYLIST, not a channel: this college has no channel of its own, and
 * the parent channel `@JKKNInstitutions` is a different entity. Live title 2026-09-16:
 * "Allied Health Science". Kept by user decision 2026-09-16; a playlist is weaker than a channel
 * as an identity URL, so it is the first thing to revisit if AHS ever gets its own channel.
 *
 * Do not HTTP-probe these to "verify" them: LinkedIn answers 999 to everything, Facebook 400,
 * and Instagram returns 200 even for a handle that does not exist.
 */
export const AHS_SAME_AS = [
  "https://www.facebook.com/jkknallied",
  "https://www.instagram.com/jkknallied/",
  "https://www.linkedin.com/company/jkknallied/",
  "https://www.youtube.com/playlist?list=PL6QsTq-__HhsWGzdJbTOuadFqdXlcawUE",
  AHS_MAPS_URL,
] as const;
