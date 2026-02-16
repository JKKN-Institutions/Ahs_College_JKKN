import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Radiography Course in Tamilnadu | JKKN AHS College",
  description: "JKKN offers the best radiography course in Tamilnadu. BSc radiography programme with hospital-attached imaging training & placements. Admissions 2026-27 open!",
  keywords: [
    "radiography course in tamilnadu",
    "b sc radiography colleges in tamilnadu",
    "bsc radiography colleges in tamilnadu",
    "radiography courses in tamilnadu"
  ],
};

export default function RadiologyImagingTechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
