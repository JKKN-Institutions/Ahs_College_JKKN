"use client";

import dynamic from 'next/dynamic';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { Programs } from "@/components/sections/Programs";

// Lazy-load below-fold sections
const WhyChoose = dynamic(() => import("@/components/sections/WhyChoose").then(m => ({ default: m.WhyChoose })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const CareerPaths = dynamic(() => import("@/components/sections/CareerPaths").then(m => ({ default: m.CareerPaths })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Facilities = dynamic(() => import("@/components/sections/Facilities").then(m => ({ default: m.Facilities })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const AdmissionJourney = dynamic(() => import("@/components/sections/AdmissionJourney").then(m => ({ default: m.AdmissionJourney })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const CTASection = dynamic(() => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Programs />
        <WhyChoose />
        <CareerPaths />
        <Facilities />
        <AdmissionJourney />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
