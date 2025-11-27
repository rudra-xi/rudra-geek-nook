"use client";

import {
	GitHubRepo,
	HeroButton,
	LocationTime,
	TerminalPrompt,
} from "@/components";

/**
 * The main Home component for the landing page.
 * It renders various interactive and informational sections
 * to showcase a developer portfolio.
 */
export default function Home() {
	return (
		// Main section containing all page content
		<section>
			{/* Renders a terminal-like prompt */}
			<TerminalPrompt />
			<div>
				{/* Displays a stylized terminal path */}
				<span
					className={
						"dark:text-accent/50 text-accent/80 text-sm font-medium"
					}
				>
					[rudra-xi ~]$
				</span>
				{/* Main heading with animated text */}
				<h1
					className={
						"text-4xl md:text-7xl lg:text-7xl leading-14 md:leading-24 lg:leading-26"
					}
				>
					{/* Sub-heading for exploration */}
					<span
						className={
							"dark:text-foreground/30 text-foreground/70 font-medium"
						}
					>
						{"~"} explore --next-gen
					</span>{" "}
					<br />
					{/* Dynamic tagline highlighting performance */}
					"fix: optimize{" "}
					<span className={"text-accent"}>performance</span> for{" "}
					<span className={"text-accent"}>maximum</span> impact"
				</h1>
			</div>
			{/* Section for the hero action button */}
			<div className={"pt-14"}>
				<HeroButton />
			</div>
			{/* Section displaying current location and time */}
			<div className={"pt-14"}>
				<LocationTime />
			</div>
			{/* Section for GitHub repository information */}
			<div className={"pt-14"}>
				<GitHubRepo />
			</div>
		</section>
	);
}
