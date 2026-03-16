import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratories — JKKN College of Allied Health Sciences",
  description:
    "State-of-the-art labs at JKKN AHS — fully equipped for cardiac, dialysis, radiology, respiratory, and emergency care practical training.",
};

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
