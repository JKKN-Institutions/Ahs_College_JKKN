import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — JKKN College of Allied Health Sciences, Komarapalayam",
  description:
    "Get in touch with JKKN College of Allied Health Sciences. Campus address: NH-544, Komarapalayam, Namakkal. Phone, email, and Google Maps directions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
