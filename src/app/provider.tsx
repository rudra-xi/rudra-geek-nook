"use client";

// Imports necessary components for theme, navigation, footer, and toast notifications.
import { Footer, Navigation, ThemeProvider } from "@/components";
import { Toaster } from "@/components/ui";
// Imports the application context provider.
import { AppProvider } from "@/context";

/**
 * Provider functional component.
 * This component acts as a wrapper for the entire application.
 * It provides context for themes, global application state,
 * and includes structural components like navigation and footer.
 */
export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <section>
            {/* ThemeProvider configures dark mode and system theme settings. */}
            <ThemeProvider
                attribute={"class"}
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {/* AppProvider delivers global state and context to children. */}
                <AppProvider>
                    {/* Toaster component for displaying notifications. */}
                    <Toaster />
                    {/* Navigation component for site-wide navigation. */}
                    <Navigation />
                    {/* Renders the child components wrapped by this provider. */}
                    {children}
                    {/* Footer component displayed at the bottom of the page. */}
                    <Footer />
                </AppProvider>
            </ThemeProvider>
        </section>
    );
}
