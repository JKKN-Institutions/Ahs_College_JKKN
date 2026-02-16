import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Cardiac Technology Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc cardiac technology colleges in Tamilnadu? JKKN offers cardiac care technology courses with clinical training & scholarships. Apply 2026-27!",
  keywords: [
    "bsc cardiac technology colleges in tamilnadu",
    "cardiac technology college in tamilnadu",
    "cardiac technology course in tamilnadu",
    "b sc cardiac technology colleges in tamilnadu",
    "bsc cardiac perfusion technology colleges in tamilnadu",
    "bsc cardiac technology courses in tamilnadu",
    "bsc cardiac care technology colleges in tamilnadu",
    "cardiac care technology colleges in tamilnadu",
    "cardiac perfusion technology colleges in tamilnadu",
    "b sc cardiac perfusion technology colleges in tamilnadu",
    "cardiac perfusion technology course in tamilnadu"
  ],
};

export default function CardiacTechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
