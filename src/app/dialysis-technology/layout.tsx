import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B Sc Dialysis Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc dialysis technology colleges in Tamilnadu? JKKN offers renal dialysis technology courses with clinical training & placements. Apply 2026-27!",
  keywords: [
    "b sc dialysis technology colleges in tamilnadu",
    "bsc dialysis technology colleges in tamilnadu",
    "bsc renal dialysis technology colleges in tamilnadu"
  ],
};

export default function DialysisTechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
