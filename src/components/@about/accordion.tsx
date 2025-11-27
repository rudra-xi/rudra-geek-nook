"use client";

import { ChevronDown } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    CursorFollow,
    CursorProvider,
} from "@/components/ui";
import { accordionItems } from "@/contents";

/**
 * Terminal-style accordion component
 * Displays collapsible sections with command-line aesthetics
 * Features custom cursor effects and terminal-like styling
 */
export default function AccordionAbout() {
    return (
        <div className="pt-12 md:pt-16 text-sm max-w-3/4">
            <Accordion
                type="single"
                collapsible
                defaultValue="acc-1"
                className="w-full"
            >
                {accordionItems.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger className="px-0 py-4 group cursor-pointer border-b border-accent/30">
                            <CursorProvider>
                                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center w-full text-sm md:text-lg lg:text-lg gap-2 md:gap-0 lg:gap-0">
                                    {/* 1. Terminal Prefix and Icon (Monospace font added) */}
                                    <p
                                        className={
                                            "text-accent/60 font-medium flex items-center shrink-0 font-mono"
                                        }
                                    >
                                        <span
                                            className={
                                                "text-xs md:text-sm lg:text-sm"
                                            }
                                        >
                                            [rudra@data ~]
                                        </span>
                                        <item.icon className="size-4 md:size-5 lg:size-5 mx-3" />
                                    </p>

                                    {/* 2. Command Text - Takes available space (Monospace font added) */}
                                    <span
                                        className={
                                            "dark:text-foreground/70 text-foreground/50 font-medium text-left w-auto whitespace-nowrap font-mono"
                                        }
                                    >
                                        {item.command}
                                    </span>

                                    {/* 3. Interactive Elements Group - Aligned to the right */}
                                    <div className="flex items-center justify-end w-full ml-auto pl-10">
                                        <ChevronDown
                                            className={
                                                "size-4 md:size-5 lg:size-5 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=closed]:text-accent shrink-0"
                                            }
                                        />

                                        <CursorFollow>
                                            <span
                                                className={
                                                    "text-xs md:text-sm cursor-hover transition-opacity duration-200 group-data-[state=closed]:opacity-0 whitespace-nowrap"
                                                }
                                            >
                                                Close
                                            </span>
                                            <span
                                                className={
                                                    "text-xs md:text-sm cursor-hover transition-opacity duration-200 group-data-[state=open]:opacity-0 whitespace-nowrap"
                                                }
                                            >
                                                Open
                                            </span>
                                        </CursorFollow>
                                    </div>
                                </div>
                            </CursorProvider>
                        </AccordionTrigger>

                        <AccordionContent className="pt-2 pb-6 AccordionContent">
                            <div
                                className={
                                    "text-foreground/90 w-94 md:w-auto lg:w-auto p-3 rounded-md text-xs md:text-sm whitespace-pre-line"
                                }
                            >
                                {item.content}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
