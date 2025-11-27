"use client";

// Imports necessary components for the contact page.
import { ContactForm, PageHeading, TerminalPrompt } from "@/components";

/**
 * Contact functional component.
 * This component renders the main contact page.
 * It includes a terminal prompt, a page heading,
 * a descriptive paragraph, and the contact form.
 */
export default function Contact() {
    return (
        <section>
            <TerminalPrompt />
            <div>
                {/* Page heading component with dynamic text. */}
                <PageHeading
                    code="connect --init"
                    text={
                        <>
                            merge: open{" "}
                            <span className={"text-accent"}>channel</span> for{" "}
                            <span className={"text-accent"}>inquiries</span>
                        </>
                    }
                />

                {/* Paragraph introducing the contact section. */}
                <p className="mt-4 max-w-4xl text-foreground/80 dark:text-foreground/60 text-lg">
                    Ready to start a conversation? Whether you have a project in
                    mind, want to collaborate, or just want to say hello—I'm
                    always open to discussing new opportunities and creative
                    ideas.
                </p>
            </div>
            <div className={"pt-12"}>
                {/* ContactForm component for user submissions. */}
                <ContactForm />
            </div>
        </section>
    );
}
