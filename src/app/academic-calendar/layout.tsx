import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Academic Calendar 2026-27 — JKKN Allied Health Sciences",
  description:
    "View the academic calendar for JKKN College of Allied Health Sciences — semester dates, exam schedules, holidays, and important academic events.",
  path: "/academic-calendar",
  keywords: [
    "JKKN academic calendar 2026-27",
    "allied health college semester dates Tamil Nadu",
    "JKKN exam schedule Komarapalayam",
    "JKKN College holiday calendar",
    "allied health sciences academic events JKKN",
    "JKKN AHS semester timetable Namakkal",
  ],
});

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "JKKN College of Allied Health Sciences — Academic Year 2026-27",
  "description": "Academic calendar for the 2026-27 session at JKKN College of Allied Health Sciences, Komarapalayam, Tamil Nadu — semester dates, exams, holidays, and key academic events.",
  "startDate": "2026-08-01",
  "endDate": "2027-05-31",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "JKKN College of Allied Health Sciences",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NH-544, Natarajapuram",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    }
  },
  "organizer": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Allied Health Sciences",
    "url": "https://ahs.jkkn.ac.in/"
  }
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Academic Calendar 2026-27 — JKKN Allied Health Sciences",
  "url": "https://ahs.jkkn.ac.in/academic-calendar",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".snippet-answer", ".voice-answer", "h1", "h2"]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Academic Calendar", "item": "https://ahs.jkkn.ac.in/academic-calendar" }
  ]
};

export default function AcademicCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {children}
    </>
  );
}
