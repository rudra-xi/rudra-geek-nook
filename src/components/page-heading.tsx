"use client";

// Imports React for component functionality.
import type React from "react";

/**
 * Interface for PageHeading component props.
 * Defines the data required to display a page heading.
 */
interface HeadingProps {
    code: string;
    text: React.ReactNode;
}

/**
 * PageHeading functional component.
 * Renders a stylized page heading with a terminal-like prefix.
 * Displays a command (`code`) and a descriptive text.
 */
export default function PageHeading({ code, text }: HeadingProps) {
    return (
        <>
            {/* Terminal-like prompt prefix for the heading. */}
            <span
                className={
                    "dark:text-accent/50 text-accent/80 text-sm font-medium"
                }
            >
                [rudra-xi ~]$
            </span>
            {/* Main heading element displaying code and text. */}
            <h1
                className={
                    "text-3xl md:text-4xl lg:text-4xl leading-12 md:leading-14 lg:leading-16 mt-2"
                }
            >
                {/* Stylized code part of the heading. */}
                <span
                    className={
                        "dark:text-foreground/30 text-foreground/70 font-medium"
                    }
                >
                    {"~"} {code}
                </span>{" "}
                <br />"{text}"
            </h1>
        </>
    );
}
