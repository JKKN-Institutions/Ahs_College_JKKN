import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission — JKKN College of Allied Health Sciences",
  description:
    "Discover the vision and mission of JKKN College of Allied Health Sciences — committed to excellence in healthcare education, clinical training, and student success.",
};

export default function VisionMissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
