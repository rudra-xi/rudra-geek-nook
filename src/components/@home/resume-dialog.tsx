"use client";
import Link from "next/link";

import {
    Button,
    CursorFollow,
    CursorProvider,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui";

import { Download, FileUser } from "lucide-react";
import Image from "next/image";
import { resume, resumePreview } from "public";

// Define paths to your assets in the public folder
const PDF_DOWNLOAD = resume;
const IMAGE_PREVIEW = resumePreview;

export default function ResumeDialog() {
    return (
        <Dialog>
            {/* The Trigger will be placed in HeroButton.js */}
            <DialogTrigger asChild>
                <CursorProvider>
                    <Button variant={"heroMain"} size={"lg"}>
                        <span className={"font-light"}>resume</span>
                        <FileUser />
                    </Button>
                    <CursorFollow>
                        <span className={"cursor-hover"}>view</span>
                    </CursorFollow>
                </CursorProvider>
            </DialogTrigger>

            <DialogContent className="max-w-[90vw] w-full h-[95vh] p-0">
                <DialogHeader className="p-4 border-b border-accent/40">
                    <DialogTitle>Goutam `rudra` Prasad Resume</DialogTitle>
                </DialogHeader>

                {/* 1. Resume Preview (Image) */}
                <DialogDescription className="flex-1 overflow-y-auto p-4">
                    <Image
                        src={IMAGE_PREVIEW}
                        alt="Resume Preview Image"
                        // Tailwind classes for responsiveness and filling the div
                        className="w-full h-auto object-contain"
                        // Set width/height based on the image's dimensions for Next/Image optimization
                        width={800}
                        height={1100}
                        priority // Load this image quickly as it's the main focus
                    />
                </DialogDescription>

                {/* 2. Download Footer */}
                <DialogFooter className="p-4 border-t border-accent/40 bg-background">
                    <Link
                        href={PDF_DOWNLOAD}
                        download="Goutam-`rudra`-Prasad-Resume.pdf" // Specify the downloaded file name
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button className="w-full">
                            <Download className="mr-2 h-4 w-4" /> Download PDF
                        </Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
