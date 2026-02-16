import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Accident and Emergency Care Technology in Tamilnadu",
  description: "Looking for BSc accident and emergency care technology colleges in Tamilnadu? JKKN provides hospital training, placements & scholarships. Enrol 2026-27!",
  keywords: [
    "bsc accident and emergency care technology colleges in tamilnadu"
  ],
};

export default function AccidentEmergencyCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
