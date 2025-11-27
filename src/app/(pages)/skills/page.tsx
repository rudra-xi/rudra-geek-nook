"use client";

// Imports necessary components for the skills page.
import { PageHeading, SkillSetGrid, TerminalPrompt } from "@/components";

/**
 * Skills functional component.
 * This component renders the main skills page.
 * It includes a terminal prompt, page heading,
 * a descriptive paragraph, and the skill set grid.
 */
export default function Skills() {
    return (
        <section>
            <TerminalPrompt />
            <div>
                {/* Page heading component with dynamic text. */}
                <PageHeading
                    code="scan --tech-focus"
                    text={
                        <>
                            ci: document core{" "}
                            <span className={"text-accent"}>capabilities</span>{" "}
                            and <span className={"text-accent"}>toolchain</span>
                        </>
                    }
                />

                {/* Paragraph describing the user's expertise. */}
                <p className="mt-4 max-w-4xl text-foreground/80 dark:text-foreground/60 text-lg">
                    My expertise is centered around the modern JavaScript
                    ecosystem, driven by a commitment to performance,
                    maintainability, and best practices across the full stack.
                </p>
            </div>
            <div className={"pt-12"}>
                {/* SkillSetGrid component displays all skill categories. */}
                <SkillSetGrid />
            </div>
        </section>
    );
}
