import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | JKKN College of Allied Health Sciences',
    description: 'Find answers to common questions about Allied Health Sciences programs, admissions eligibility, fees, placements, hostel, and more at JKKN AHS College.',
    alternates: {
        canonical: 'https://ahs.jkkn.ac.in/faq',
    },
    openGraph: {
        title: 'FAQ | JKKN College of Allied Health Sciences',
        description: 'Answers to common questions about B.Sc Allied Health Sciences admissions, fees, placements, and campus life at JKKN.',
        url: 'https://ahs.jkkn.ac.in/faq',
    },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
