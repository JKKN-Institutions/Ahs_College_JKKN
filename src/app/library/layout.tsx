import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library — JKKN College of Allied Health Sciences",
  description:
    "JKKN AHS library offers medical textbooks, journals, digital resources, and study spaces for allied health science students.",
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
