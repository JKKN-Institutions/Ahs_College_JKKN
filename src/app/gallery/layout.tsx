import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery — JKKN College of Allied Health Sciences Campus",
  description:
    "Browse photos of JKKN College of Allied Health Sciences campus — classrooms, labs, hostel, library, and student life at Komarapalayam, Tamil Nadu.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
