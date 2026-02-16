import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Medical Record Science Colleges in Tamilnadu | JKKN",
  description: "Looking for BSc medical record science colleges in Tamilnadu? JKKN offers clinical training, NAAC accreditation & placement support. Apply for 2026-27!",
  keywords: [
    "bsc medical record science colleges in tamilnadu"
  ],
};

export default function MedicalRecordScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
