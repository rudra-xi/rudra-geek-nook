"use client";

import { Heart, LucideGithub, LucideLinkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, CursorFollow, CursorProvider } from "@/components/ui";
import { useAppContext } from "@/context";

/**
 * Footer functional component.
 * Renders the footer section of the website.
 * Includes copyright information, social media links, and a custom quote.
 */
export default function Footer() {
	// Gets the current year for copyright display.
	const currentYear = new Date().getFullYear();

	// Fetches the logo source from the application context.
	const { logoSrc } = useAppContext();
	return (
		<footer className="px-6 pb-6 mt-6 w-full flex flex-col items-center">
			{/* Logo and developer name section. */}
			<div className={"flex flex-col items-center space-y-3 "}>
				<Image
					src={logoSrc}
					alt="Logo"
					className="w-16 bg-accent p-0.5"
				/>
				<p className={"text-sm"}>
					Goutam <span className={"text-accent/80"}>`rudra`</span>{" "}
					Prasad
				</p>
			</div>
			{/* Social media links section. */}
			<div className={"flex space-x-5 mt-6"}>
				<div>
					<Link
						href="https://github.com/rudra-xi"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View developer's GitHub profile"
						className=""
					>
						<CursorProvider>
							<Button variant={"footerIcon"} size={"icon"}>
								<LucideGithub fill="currentColor" />
							</Button>
							<CursorFollow>
								<span className={"cursor-hover"}>Github</span>
							</CursorFollow>
						</CursorProvider>
					</Link>
				</div>
				<div>
					<Link
						href="https://www.linkedin.com/in/goutam-rudraxi/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View developer's LinkedIn profile"
					>
						<CursorProvider>
							<Button variant={"footerIcon"} size={"icon"}>
								<LucideLinkedin fill="currentColor" />
							</Button>
							<CursorFollow>
								<span className={"cursor-hover"}>LinkedIn</span>
							</CursorFollow>
						</CursorProvider>
					</Link>
				</div>
			</div>
			{/* Copyright and build information section. */}
			<div className="flex flex-col md:flex-row lg:flex-row items-center justify-between w-full mt-3">
				<div>
					{/* Copyright text with current year. */}
					<p className="text-sm text-foreground/50">
						&copy; {currentYear} rudra-xi. All rights reserved.
					</p>

					{/* Build message with a heart icon. */}
					<p className="flex items-center space-x-1 text-sm text-foreground/30">
						Built with{" "}
						<Heart className="h-4 w-4 mx-2 text-accent fill-accent animate-pulse" />{" "}
						by{" "}
						<strong className="font-medium ml-1">rudra-xi</strong>.
					</p>
				</div>

				{/* Custom quote/message. */}
				<p className="text-xs max-w-sm md:max-w-2xs lg:max-w-sm py-3 md:py-0 lg:py-0 italic text-center md:text-right lg:text-right text-foreground/40 ">
					`I code mainly in the dark, not for aesthetics, but because
					the errors I debug are often too grim to face in broad
					daylight`
				</p>
			</div>
		</footer>
	);
}
