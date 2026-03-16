import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostel Facilities — JKKN College of Allied Health Sciences",
  description:
    "JKKN provides separate boys and girls hostels with modern amenities, mess facilities, and 24/7 security at Komarapalayam campus.",
};

export default function HostelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
