import type { Metadata } from "next";

// Metadata for the Recreations page
export const metadata: Metadata = {
    title: "Recreations",
};

/**
 * Layout component for the Redesigns (Recreations) page.
 * It simply renders its children within a section element.
 */
export default function RecreationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Renders children content within a section
    return <section>{children}</section>;
}
