import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments — JKKN College of Allied Health Sciences",
  description:
    "Explore all 9 B.Sc Allied Health Science departments at JKKN — Cardiac Technology, Dialysis, Radiology, OT & Anaesthesia, Respiratory Therapy, Physician Assistant, Critical Care, Medical Records, and Emergency Care.",
};

export default function DepartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
