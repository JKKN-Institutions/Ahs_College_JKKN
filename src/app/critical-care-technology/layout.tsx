import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Critical Care Technology College in Tamilnadu | JKKN",
  description: "Looking for a BSc critical care technology college in Tamilnadu? JKKN offers hands-on ICU training, NAAC accreditation & placement support. Apply 2026-27!",
  keywords: [
    "bsc critical care technology college in tamilnadu"
  ],
};

export default function CriticalCareTechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
