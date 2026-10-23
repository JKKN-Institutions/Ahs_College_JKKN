'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';
import EnquiryButton from '@/components/lead/EnquiryButton';

export function MobileHeader() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
                scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm shadow-sm",
                "lg:hidden"  // Show only on mobile
            )}
        >
            {/* Logo left, "Enquire Now" right (2026-10-23): below lg the desktop Navbar is hidden, so
                without this button a phone or tablet visitor had no enquiry button in the top bar. */}
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/ahs-logo.svg"
                        alt="JKKN Allied Health Sciences"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>
                <EnquiryButton
                    sourcePage={pathname === "/" ? "home-header" : "header"}
                    fallbackHref={siteConfig.admissionFormUrl}
                    fallbackLabel="Apply Now"
                    className="shrink-0 text-sm py-2.5 px-4 min-h-[44px] bg-[#0b6d41] text-white rounded-full font-semibold transition-colors hover:bg-[#085231]"
                >
                    Enquire Now
                </EnquiryButton>
            </div>
        </header>
    );
}
