import type { Metadata } from "next";

// Metadata for the Projects page
export const metadata: Metadata = {
	title: "Projects",
};

/**
 * Layout component for the Projects page.
 * It simply renders its children within a section element.
 */
export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Renders children content within a section
	return <section>{children}</section>;
}
