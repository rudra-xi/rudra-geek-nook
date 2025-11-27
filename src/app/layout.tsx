import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

// Configure DM Mono font with specified weights and subsets
const dmMono = DM_Mono({
	variable: "--font-dm-mono",
	weight: ["500", "400", "300"], // medium, regular, light
	subsets: ["latin"],
});

// Define metadata for the entire application
export const metadata: Metadata = {
	title: {
		default: "Portfolio",
		absolute: "Portfolio | rudra-xi",
		template: "%s | Portfolio",
	},
	description: "Minimalist portfolio of Goutam `rudra` Prasad",
	icons: { icon: "/assets/logo.svg" },
};

/**
 * RootLayout component that wraps the entire application.
 * It sets up the HTML structure, applies global styles,
 * and provides context for the application.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${dmMono.variable} antialiased page-base-layout`}>
				<Provider>
					<main className={"page-padding"}>{children}</main>
				</Provider>
			</body>
		</html>
	);
}
