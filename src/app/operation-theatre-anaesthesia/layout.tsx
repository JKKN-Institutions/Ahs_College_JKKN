import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.Sc Operation Theatre & Anaesthesia Technology College in Tamilnadu",
  description: "Looking for BSc operation theatre & anaesthesia technology colleges in Tamilnadu? JKKN offers clinical OT training, placements & scholarships. Enrol 2026-27!",
  keywords: [
    "b.sc operation theatre & anaesthesia technology colleges in tamilnadu",
    "bsc operation theatre & anaesthesia technology colleges in tamilnadu",
    "operation theatre technician course in tamilnadu",
    "bsc operation theatre technology colleges in tamilnadu"
  ],
};

export default function OperationTheatreAnaesthesiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
