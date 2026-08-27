"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
    const institutions = [
        {
            name: 'JKKN Dental College and Hospital',
            url: 'https://dental.jkkn.ac.in/'
        },
        {
            name: 'JKKN College of Allied Health Sciences',
            url: 'https://ahs.jkkn.ac.in/'
        },
        {
            name: 'JKKN College of Pharmacy',
            url: 'https://pharmacy.jkkn.ac.in/'
        },
        {
            name: 'Srisakthimayeil Institute of Nursing and Research',
            url: 'https://nursing.sresakthimayeil.jkkn.ac.in/'
        },
        {
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in/'
        },
        {
            name: 'JKKN College of Arts and Science (Autonomous)',
            url: 'https://cas.jkkn.ac.in/'
        },
        {
            name: 'JKKN College of Engineering and Technology',
            url: 'https://engg.jkkn.ac.in/'
        },
        {
            name: 'JKKN Matriculation Higher Secondary School',
            url: 'https://school.jkkn.ac.in/'
        },
        {
            name: 'Nattraja Vidhyalya',
            url: 'https://nv.jkkn.ac.in/'
        }
    ];

    // A-02, 2026-08-25. This site has 18 city pages. FIVE of them - Erode, Namakkal, Salem,
    // Tiruppur, Coimbatore - are linked from the 9 course pages, and those five carry 6,259 of
    // the 6,695 all-device city impressions and 90 of the 94 clicks (GSC, 28 days to
    // 2026-08-22). The other THIRTEEN had ZERO inbound internal links anywhere in this repo,
    // and six of the thirteen have zero impressions and read "Discovered - currently not
    // indexed" in Search Console. Not one of the five linked pages is at zero.
    //
    // That is an association, NOT a proof: the four big linked pages are also the four nearest
    // cities, and Tiruppur is linked yet reads only 86 impressions while orphaned Bhavani reads
    // 147. Linking cannot create demand. What it can do is stop a page being invisible to the
    // rest of the site, which is what these thirteen were.
    //
    // The city NAME is the link text on purpose - each page targets "Allied Health Science
    // Colleges in <City>", so the heading carries that phrase and the anchor stays readable.
    // NO distances here: the "(30-40 km)" figures on the course pages are pre-existing and were
    // not measured by me, so none are repeated or invented for the other thirteen.
    const cityPages = [
        { slug: 'erode', name: 'Erode' },
        { slug: 'namakkal', name: 'Namakkal' },
        { slug: 'salem', name: 'Salem' },
        { slug: 'tiruppur', name: 'Tiruppur' },
        { slug: 'coimbatore', name: 'Coimbatore' },
        { slug: 'tiruchengode', name: 'Tiruchengode' },
        { slug: 'sankagiri', name: 'Sankagiri' },
        { slug: 'bhavani', name: 'Bhavani' },
        { slug: 'karur', name: 'Karur' },
        { slug: 'rasipuram', name: 'Rasipuram' },
        { slug: 'attur', name: 'Attur' },
        { slug: 'mettur', name: 'Mettur' },
        { slug: 'gobichettipalayam', name: 'Gobichettipalayam' },
        { slug: 'trichy', name: 'Trichy' },
        { slug: 'dharmapuri', name: 'Dharmapuri' },
        { slug: 'krishnagiri', name: 'Krishnagiri' },
        { slug: 'vellore', name: 'Vellore' },
        { slug: 'madurai', name: 'Madurai' },
    ];


    return (
        <footer className="bg-[#0b6d41] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
                    {/* Left Column - College Info with Map */}
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black mb-4 sm:mb-6 uppercase border-b-2 border-white pb-2 sm:pb-3">
                            JKKN COLLEGE OF ALLIED HEALTH SCIENCES
                        </h3>
                        <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4806747716084!2d77.726548999667!3d11.445190493008672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969fb9a2e0d93%3A0x6a21699145f2e49b!2sJKKN%20College%20Of%20Allied%20Health%20Science!5e0!3m2!1sen!2sin!4v1769243362611!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <p className="text-white font-semibold text-xs sm:text-sm">
                            Best Innovation Focused<br />
                            Multi-Disciplinary Campus
                        </p>
                    </div>

                    {/* Middle Column - Our Institutions */}
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black mb-4 sm:mb-6 uppercase border-b-2 border-white pb-2 sm:pb-3">
                            OUR INSTITUTIONS
                        </h3>
                        <ul className="space-y-2 sm:space-y-2.5">
                            {institutions.map((institution, index) => (
                                <li key={index}>
                                    <a
                                        href={institution.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[#ffde59] transition-colors text-xs sm:text-sm leading-relaxed"
                                    >
                                        {institution.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Contact Us */}
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black mb-4 sm:mb-6 uppercase border-b-2 border-white pb-2 sm:pb-3">
                            CONTACT US
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <div>
                                <p className="text-white font-semibold mb-1 text-xs sm:text-sm">Call: <a href="tel:+919345855001" className="hover:text-[#ffde59] transition-colors">+919345855001</a></p>
                            </div>
                            <div>
                                <p className="text-white font-semibold mb-1 text-xs sm:text-sm">Email: <a href="mailto:ahsincharge@jkkn.ac.in
                                " className="hover:text-[#ffde59] transition-colors">ahsincharge@jkkn.ac.in</a></p>
                            </div>
                            <div>
                                <p className="text-white font-semibold mb-2 text-xs sm:text-sm">Address:</p>
                                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                                    JKKN College of Allied Health Sciences, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu. 638183.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-base sm:text-lg md:text-xl font-black mb-3 sm:mb-4 uppercase border-b-2 border-white pb-2 sm:pb-3">
                                FOLLOW US
                            </h4>
                            <div className="flex gap-3 sm:gap-4">
                                <a href="https://www.facebook.com/jkknallied" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a href="https://www.instagram.com/jkknallied/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a href="https://www.linkedin.com/company/jkknallied/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a href="https://www.youtube.com/playlist?list=PL6QsTq-__HhsWGzdJbTOuadFqdXlcawUE" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cities we serve - A-02. Site-wide, so every page links all 18 city pages.
                    Thirteen of them had no inbound internal link anywhere before this. */}
                <div className="pt-6 sm:pt-8 border-t border-white/20 mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-black mb-3 sm:mb-4 uppercase">
                        Allied Health Science Colleges across Tamil Nadu
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-4">
                        Students join JKKN College of Allied Health Sciences from across the state.
                        Choose your city for local admission details.
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2">
                        {cityPages.map((city) => (
                            <li key={city.slug}>
                                <a
                                    href={`/${city.slug}`}
                                    className="text-white hover:text-[#ffde59] transition-colors text-xs sm:text-sm leading-relaxed"
                                >
                                    {city.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Copyright */}
                <div className="pt-4 sm:pt-6 border-t border-white/20 text-center">
                    <p className="text-white/80 text-xs sm:text-sm">
                        © 2026 JKKN Allied Health Sciences. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
