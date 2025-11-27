"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { GitHubProCard, PageHeading, TerminalPrompt } from "@/components";
import { Button, CursorFollow, CursorProvider } from "@/components/ui";

/**
 * Projects page component
 * Displays project showcase with GitHub integration
 * Features terminal-style UI elements
 */
export default function Projects() {
	return (
		<section>
			<TerminalPrompt />
			<div>
				<PageHeading
					code="execute --command"
					text={
						<>
							chore: load{" "}
							<span className={"text-accent"}>latest</span>{" "}
							projects and{" "}
							<span className={"text-accent"}>features</span>
						</>
					}
				/>

				{/* --- New Paragraph Added Here --- */}
				<p className="mt-4 max-w-4xl text-foreground/80 dark:text-foreground/60 text-lg">
					A curated selection of my work spanning full-stack
					development, UI/UX design, and open-source contributions.
					Each project represents a commitment to clean code and
					impactful problem-solving.
				</p>
			</div>

			<div className={"pt-12"}>
				<GitHubProCard />
			</div>

			<div className={"pt-12 flex-center"}>
				<Link
					href={"https://github.com/rudra-xi?tab=repositories"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<CursorProvider>
						<Button variant={"githubBtn"}>
							<Github /> <span>Find More</span>
						</Button>
						<CursorFollow>
							<span className={"whitespace-nowrap cursor-hover"}>
								Open Github
							</span>
						</CursorFollow>
					</CursorProvider>
				</Link>
			</div>
		</section>
	);
}
