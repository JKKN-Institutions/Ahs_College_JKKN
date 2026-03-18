'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  event_date: string | null;
  venue: string | null;
  image_url: string | null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function HomeEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from('events')
      .select('id, title, slug, description, event_date, venue, image_url')
      .eq('college_id', process.env.NEXT_PUBLIC_COLLEGE_ID!)
      .eq('is_published', true)
      .order('event_date', { ascending: false })
      .then(({ data }) => {
        setEvents(data ?? []);
        setLoaded(true);
      });
  }, []);

  if (!loaded || events.length === 0) return null;

  return (
    <section className="py-16 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002309]">Events</h2>
          <p className="text-gray-500 text-sm mt-2">
            Latest happenings at JKKN Allied Health Sciences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 bg-[#e8f0ec] flex items-center justify-center flex-shrink-0">
                {event.image_url ? (
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Calendar className="w-12 h-12 text-[#c5d9cc]" />
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 line-clamp-2">
                  {event.title}
                </h3>
                {event.description && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {event.description}
                  </p>
                )}
                <div className="flex flex-col gap-1.5 mt-auto">
                  {event.event_date && (
                    <div className="flex items-center gap-1.5 text-[#006837] text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(event.event_date)}</span>
                    </div>
                  )}
                  {event.venue && (
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.venue}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
