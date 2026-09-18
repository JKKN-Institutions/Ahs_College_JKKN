import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog — JKKN College of Allied Health Sciences",
  description:
    "Latest news, events, and updates from JKKN College of Allied Health Sciences — campus activities, learner achievements, and allied health insights.",
  path: "/blog",
  keywords: [
    "JKKN AHS blog",
    "allied health sciences news",
    "JKKN college campus updates",
    "healthcare education blog Tamil Nadu",
    "allied health learner achievements",
    "JKKN Komarapalayam news",
  ],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
