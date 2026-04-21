import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FAQ } from '@/components/sections/FAQ';

export default function FAQPage() {
    return (
        <>
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
