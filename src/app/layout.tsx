import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';

  return {
    title: "Best Allied Health Science Colleges in Tamilnadu | JKKN",
    description: "JKKN is among the best allied health science colleges in Tamilnadu. Explore BSc allied health science courses with clinical training. Admissions 2026-27 open!",
    keywords: [
      "best allied health science colleges in tamilnadu",
      "allied health science courses in tamilnadu",
      "bsc allied health science colleges in tamilnadu",
      "top 10 allied health science colleges in tamilnadu",
      "bsc allied health science courses in tamilnadu"
    ],
    icons: {
      icon: "/ahs-logo.svg",
    },
    alternates: {
      canonical: `https://ahs.jkkn.ac.in${pathname}`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
