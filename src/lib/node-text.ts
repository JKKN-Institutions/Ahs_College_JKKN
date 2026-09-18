import { isValidElement, type ReactNode } from "react";

/**
 * Plain text of a rendered ReactNode - the string a crawler will find in the HTML.
 *
 * FAQ answers are written once, as JSX, so they can carry internal links. The FAQPage schema
 * needs the same content as plain text. Deriving it here means the schema cannot drift from
 * what the page renders: measured 2026-09-18, 238 of 551 declared answers appeared nowhere in
 * the server HTML because the schema copy and the rendered copy were maintained separately.
 */
export function nodeText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (isValidElement(node)) {
    return nodeText((node.props as { children?: ReactNode }).children);
  }
  return "";
}
