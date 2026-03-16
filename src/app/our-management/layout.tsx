import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Management — JKKN College of Allied Health Sciences | Leadership Team",
  description: "Meet the visionary leadership of JKKN College of Allied Health Sciences — Chairperson Smt. N. Sendamaraai and Director Shri. S. Ommsharravana guiding excellence in allied health education since 1952.",
};

const chairpersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Smt. N. Sendamaraai",
  "jobTitle": "Chairperson",
  "worksFor": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "JKKN Educational Institutions",
    "url": "https://jkkn.ac.in/"
  }
};

const directorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shri. S. Ommsharravana",
  "jobTitle": "Director",
  "worksFor": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  },
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "JKKN Educational Institutions",
    "url": "https://jkkn.ac.in/"
  }
};

export default function OurManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chairpersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(directorSchema) }}
      />
      {children}
    </>
  );
}
