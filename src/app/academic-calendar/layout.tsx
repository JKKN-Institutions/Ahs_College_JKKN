import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Calendar 2026-27 — JKKN Allied Health Sciences",
  description:
    "View the academic calendar for JKKN College of Allied Health Sciences — semester dates, exam schedules, holidays, and important academic events.",
};

export default function AcademicCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
