import { HOME_FAQS } from '@/lib/home-faqs';
import { nodeText } from '@/lib/node-text';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FAQ } from '@/components/sections/FAQ';


// /faq renders the same answers as the homepage accordion and carried no schema at all,
// so 15 answered questions were invisible to search and answer engines. Derived from the
// rendered array, never a second copy.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": HOME_FAQS.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": nodeText(f.answer) },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Allied Health Sciences", "item": "https://ahs.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "FAQ", "item": "https://ahs.jkkn.ac.in/faq" },
  ],
};

export default function FAQPage() {
    return (
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <Navbar />
        <main>
            <div className="bg-[#0b6d41] py-10 sm:py-14">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-[#ffde59] font-bold tracking-wider uppercase text-xs sm:text-sm mb-3">
                        Help Center
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-green-100 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
                        Everything you need to know about Allied Health Sciences programs, admissions, fees, and campus life at JKKN.
                    </p>
                </div>
            </div>
            <FAQ />
        </main>
        <Footer />
        </>
    );
}
