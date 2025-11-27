import type { Metadata } from "next";

// Metadata for the Skills page
export const metadata: Metadata = {
    title: "Skills",
};

/**
 * Layout component for the Skills page.
 * It simply renders its children within a section element.
 */
export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Renders children content within a section
    return <section>{children}</section>;
}
