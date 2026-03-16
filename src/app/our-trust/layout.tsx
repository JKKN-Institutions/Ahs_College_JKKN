import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JKKN Educational Trust — 74+ Years of Excellence Since 1952",
  description:
    "Learn about JKKN Educational Trust, founded in 1952 — managing 9 institutions offering dental, pharmacy, nursing, engineering, and allied health education.",
};

export default function OurTrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
