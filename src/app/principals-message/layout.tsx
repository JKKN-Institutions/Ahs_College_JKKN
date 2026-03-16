import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Principal's Message — JKKN College of Allied Health Sciences",
  description:
    "Read the Principal's message at JKKN College of Allied Health Sciences — leadership vision for allied health education excellence in Tamil Nadu.",
};

export default function PrincipalsMessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
