import type { Metadata } from "next";

// Metadata for the Contact page
export const metadata: Metadata = {
    title: "Contact",
};

/**
 * Layout component for the Contact page.
 * It simply renders its children within a section element.
 */
export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Renders children content within a section
    return <section>{children}</section>;
}
