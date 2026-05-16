import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";
import { admissionCourses, getAllCourseSlugs, getCourseBySlug } from "@/lib/admission-courses";
import CourseAdmissionPageContent from "./CourseAdmissionPageContent";

export async function generateStaticParams() {
    return getAllCourseSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);
    if (!course) {
        return createPageMetadata({
            title: "Course Not Found | JKKN Allied Health Sciences",
            description: "The course you are looking for does not exist.",
            path: `/admissions/${slug}`,
        });
    }
    return createPageMetadata({
        title: course.seoTitle,
        description: course.seoDescription,
        path: `/admissions/${course.slug}`,
        keywords: course.seoKeywords,
    });
}

export default async function CourseAdmissionPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    const url = `https://ahs.jkkn.ac.in/admissions/${course.slug}`;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "JKKN Institutions", item: "https://jkkn.ac.in/" },
            { "@type": "ListItem", position: 2, name: "Allied Health Sciences", item: "https://ahs.jkkn.ac.in/" },
            { "@type": "ListItem", position: 3, name: "Admission 2026-27", item: "https://ahs.jkkn.ac.in/admissions" },
            { "@type": "ListItem", position: 4, name: "Course-Wise Admission", item: "https://ahs.jkkn.ac.in/admissions/courses" },
            { "@type": "ListItem", position: 5, name: course.name, item: url },
        ],
    };

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.name,
        description: course.longDescription,
        url,
        provider: {
            "@type": "CollegeOrUniversity",
            name: "JKKN College of Allied Health Sciences",
            sameAs: "https://ahs.jkkn.ac.in/",
        },
        educationalCredentialAwarded: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Bachelor's Degree",
            name: course.name,
            recognizedBy: {
                "@type": "Organization",
                name: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
            },
        },
        coursePrerequisites: course.eligibility.join(" · "),
        timeRequired: course.durationISO,
        occupationalCategory: course.roles.join(", "),
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Full-time",
            courseWorkload: course.durationISO,
            location: {
                "@type": "Place",
                name: "JKKN College of Allied Health Sciences",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "NH-544, Komarapalayam",
                    addressLocality: "Komarapalayam",
                    addressRegion: "Tamil Nadu",
                    postalCode: "638183",
                    addressCountry: "IN",
                },
            },
        },
        offers: {
            "@type": "Offer",
            category: "Management Quota",
            price: course.mqFeeNumeric,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://www.jkkn.ai/apply/jkkn-admission-2026",
        },
    };

    const programSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        name: course.name,
        description: course.longDescription,
        url,
        programType: "Bachelor's Degree",
        provider: {
            "@type": "CollegeOrUniversity",
            name: "JKKN College of Allied Health Sciences",
            sameAs: "https://ahs.jkkn.ac.in/",
        },
        timeToComplete: course.durationISO,
        educationalCredentialAwarded: course.name,
        numberOfCredits: 160,
        applicationDeadline: "2026-07-31",
        offers: {
            "@type": "Offer",
            category: "Management Quota",
            price: course.mqFeeNumeric,
            priceCurrency: "INR",
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        dateModified: "2026-05-16",
        mainEntity: course.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
            },
        })),
    };

    const speakableSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: course.seoTitle,
        url,
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".faq-answer", "h1", "h2", "h3"],
        },
    };

    const otherCourses = admissionCourses.filter((c) => c.slug !== course.slug);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <CourseAdmissionPageContent course={course} otherCourses={otherCourses} />
        </>
    );
}
