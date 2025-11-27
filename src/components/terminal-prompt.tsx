"use client";

/**
 * TerminalPrompt functional component.
 * Renders a stylized terminal prompt displaying application version.
 * Includes a blinking cursor animation for visual effect.
 */
export default function TerminalPrompt() {
    return (
        // Main container for the terminal prompt.
        <div className={"pb-6"}>
            {/* Text display section for the terminal prompt. */}
            <div
                className={
                    "text-foreground/50 text-xs flex items-center space-x-1"
                }
            >
                <div>
                    <span className={"text-accent font-medium"}>{"\\>"}</span>{" "}
                    rudra-geek-nook{" "}
                    <span className={"dark:text-accent/60 text-accent/80"}>
                        [Version 03.00.01]
                    </span>
                </div>
                {/* Blinking cursor element for the terminal prompt. */}
                <div className={"w-1.5 h-4 bg-accent animate-blink"} />
            </div>
        </div>
    );
}
