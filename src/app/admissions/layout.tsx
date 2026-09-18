import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Admission 2026-27 | JKKN Allied Health Sciences College Tamil Nadu",
  description: "Apply for BSc Allied Health Sciences admission 2026-27 at JKKN College, Tamil Nadu. 9 programs, GQ as per Govt norms, MQ 60K-1.7L, placement support, NAAC A. Apply now!",
  path: "/admissions",
  keywords: [
    "allied health science admission 2026",
    "bsc allied health science admission tamilnadu",
    "jkkn college admission",
    "allied health science fees tamilnadu",
    "medical college admission without neet tamilnadu",
    "bsc allied health science colleges in tamilnadu",
    "allied health science course fees",
    "jkkn allied health sciences admission",
    "paramedical course admission tamilnadu 2026",
    "bsc cardiac technology admission",
    "bsc radiology admission tamilnadu",
    "bsc dialysis technology admission"
  ],
});

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
