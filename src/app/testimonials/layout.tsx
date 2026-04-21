import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Testimonials | JKKN College of Allied Health Sciences',
    description: 'Hear from JKKN alumni now working at Apollo, MIOT, Fortis, NHS UK and more. Real stories from B.Sc Allied Health Sciences graduates across India and abroad.',
    alternates: {
        canonical: 'https://ahs.jkkn.ac.in/testimonials',
    },
    openGraph: {
        title: 'Student Testimonials | JKKN College of Allied Health Sciences',
        description: 'Real stories from JKKN Allied Health Sciences alumni placed at Apollo, MIOT, Fortis, and NHS UK.',
        url: 'https://ahs.jkkn.ac.in/testimonials',
    },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
