// Showcases UI/UX redesign projects and links to GitHub

"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { Button, CursorFollow, CursorProvider } from "@/components/ui";
import { PageHeading, RedesignProjects, TerminalPrompt } from "@/components";

/**
 * Redesigns page component
 * Displays UI/UX redesign projects showcase
 * Features terminal-style UI elements
 */
export default function Redesigns() {
    return (
        <section>
            <TerminalPrompt />
            <div>
                <PageHeading
                    code="style: apply --blueprint"
                    text={
                        <>
                            refactor: refresh{" "}
                            <span className={"text-accent"}>interface</span> for{" "}
                            <span className={"text-accent"}>modern</span>{" "}
                            engagement
                        </>
                    }
                />

                <p className="mt-4 max-w-4xl text-foreground/80 dark:text-foreground/60 text-lg">
                    A showcase of UI/UX concepts, translating inspiration from
                    Dribbble and other sources into my own functional,
                    high-fidelity components and interfaces.
                </p>
            </div>

            <div className={"pt-12"}>
                <RedesignProjects />
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
