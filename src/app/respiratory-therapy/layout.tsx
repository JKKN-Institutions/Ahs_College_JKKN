import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Respiratory Therapy Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc respiratory therapy colleges in Tamilnadu? JKKN offers respiratory therapy course with clinical training & scholarships. Apply 2026-27!",
  keywords: [
    "bsc respiratory therapy colleges in tamilnadu",
    "respiratory therapy course in tamilnadu",
    "bsc respiratory therapy in tamilnadu"
  ],
};

export default function RespiratoryTherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
