import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "nursing";

  const { data: event } = await supabase
    .from("events")
    .select("title, description, image_url, event_date")
    .eq("slug", slug)
    .eq("college_id", collegeId)
    .eq("is_published", true)
    .single();

  if (!event) {
    return { title: "Event Not Found" };
  }

  const title = `${event.title} | JKKN College of Allied Health Sciences`;
  const description = event.description
    ? event.description.slice(0, 155).trim()
    : `${event.title} at JKKN College of Allied Health Sciences, Komarapalayam.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://ahs.jkkn.ac.in/events/${slug}`,
    },
    openGraph: {
      title: event.title,
      description,
      url: `https://ahs.jkkn.ac.in/events/${slug}`,
      siteName: "JKKN College of Allied Health Sciences",
      type: "article",
      ...(event.image_url && {
        images: [{ url: event.image_url, width: 1200, height: 630, alt: event.title }],
      }),
      ...(event.event_date && { publishedTime: event.event_date }),
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description,
      ...(event.image_url && { images: [event.image_url] }),
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? "nursing";

  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .eq("college_id", collegeId)
    .eq("is_published", true)
    .single();

  if (!event) notFound();

  const formattedDate = event.event_date
    ? new Date(event.event_date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description || "",
    "url": `https://ahs.jkkn.ac.in/events/${slug}`,
    ...(event.event_date && { "startDate": event.event_date }),
    ...(event.image_url && { "image": event.image_url }),
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.venue || "JKKN College of Allied Health Sciences",
      "address": {
        "@type": "PostalAddress",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
      { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
      { "@type": "ListItem", "position": 3, "name": "Events", "item": "https://ahs.jkkn.ac.in/events" },
      { "@type": "ListItem", "position": 4, "name": event.title, "item": `https://ahs.jkkn.ac.in/events/${slug}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen bg-[#FBFBEE]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#006837] to-[#004d29] py-16 px-8 md:px-16 lg:px-24">
          <div className="container mx-auto max-w-4xl">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-green-100 text-sm">
              {formattedDate && (
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  <span>{formattedDate}</span>
                </div>
              )}
              {event.event_time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{event.event_time}</span>
                </div>
              )}
              {event.venue && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-8 md:px-16 lg:px-24">
          <div className="container mx-auto max-w-4xl">
            {event.image_url && (
              <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={event.image_url}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#006837] mb-6">
                About This Event
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line break-words">
                {event.description}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
