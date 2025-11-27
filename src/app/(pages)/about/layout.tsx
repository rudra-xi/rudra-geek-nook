// Defines metadata for the About page
import type { Metadata } from "next";

// Sets page title to "About"
export const metadata: Metadata = {
	title: "About",
};

// Layout component for About page
export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Renders children within a section element
	return <section>{children}</section>;
}
