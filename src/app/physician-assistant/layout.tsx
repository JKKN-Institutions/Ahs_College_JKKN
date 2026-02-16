import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physician Assistant Course in Tamilnadu | JKKN AHS College",
  description: "JKKN offers the best physician assistant course in Tamilnadu. BSc physician assistant programme with hospital training & placements. Admissions 2026-27 open!",
  keywords: [
    "physician assistant course in tamilnadu",
    "bsc physician assistant colleges in tamilnadu",
    "physician assistant colleges in tamilnadu",
    "bsc physician assistant course in tamilnadu",
    "physician assistant course colleges in tamilnadu"
  ],
};

export default function PhysicianAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
