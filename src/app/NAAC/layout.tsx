import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAAC Accreditation — JKKN College of Allied Health Sciences",
  description:
    "JKKN College of Allied Health Sciences NAAC accreditation details — quality assurance, assessment reports, and institutional excellence standards.",
};

export default function NAACLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
