"use client";

import { LucideGithub } from "lucide-react";
import Link from "next/link";
import { Button, CursorFollow, CursorProvider } from "@/components/ui";
import ResumeDialog from "./resume-dialog";

/**
 * Interactive hero section buttons
 * Contains resume dialog and GitHub profile link
 * Features custom cursor effects
 */
export default function HeroButton() {
	return (
		<div className={"flex space-x-6"}>
			<div>
				<ResumeDialog />
			</div>

			<Link
				href="https://github.com/rudra-xi"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="View developer's GitHub profile"
				className=""
			>
				<CursorProvider>
					<Button variant={"heroGhost"} size={"lg"}>
						<span className={"font-light"}>github</span>
						<LucideGithub />
					</Button>
					<CursorFollow>
						<span className={"cursor-hover whitespace-nowrap"}>
							rudra-xi
						</span>
					</CursorFollow>
				</CursorProvider>
			</Link>
		</div>
	);
}
