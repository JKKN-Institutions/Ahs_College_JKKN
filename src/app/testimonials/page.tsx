const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Testimonials", "item": "https://ahs.jkkn.ac.in/testimonials" },
  ],
};

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Testimonials } from '@/components/sections/Testimonials';

export default function TestimonialsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Navbar />
            <main>
                <div className="bg-[#0b6d41] py-10 sm:py-14">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <p className="text-[#ffde59] font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
                            Learner Voices
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                            What Our Learners Say
                        </h1>
                        <p className="text-green-100 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
                            Hear from our alumni who are now healthcare professionals at Apollo, MIOT, Fortis, NHS UK, and beyond.
                        </p>
                    </div>
                </div>
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}
