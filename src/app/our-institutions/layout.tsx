import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Institutions — JKKN Group of Colleges, Tamil Nadu",
  description:
    "Explore all 9 JKKN institutions — colleges for dental, pharmacy, nursing, engineering, allied health, arts & science, and education in Komarapalayam.",
};

export default function OurInstitutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
