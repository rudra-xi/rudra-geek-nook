"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Imports UI components for buttons and cursor effects.
import { Button, CursorFollow, CursorProvider } from "@/components/ui";
// Imports navigation items configuration.
import { navItems } from "@/contents";
// Imports application context for theme and logo.
import { useAppContext } from "@/context";

/**
 * Navigation functional component.
 * Renders the main navigation bar of the application.
 * Includes links, a theme toggle, and the application logo.
 */
export default function Navigation() {
    // Retrieves theme, theme setter, and logo source from context.
    const { theme, setTheme, logoSrc } = useAppContext();
    // State to track if the component has mounted on the client.
    const [mounted, setMounted] = useState(false);

    /**
     * Toggles the current theme between 'light' and 'dark'.
     * Updates the application's theme state accordingly.
     */
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    /**
     * Sets the 'mounted' state to true once the component
     * has been rendered on the client-side. This prevents
     * hydration mismatches with theme-dependent rendering.
     */
    useEffect(() => {
        setMounted(true);
    }, []);

    // Render nothing until the component is mounted to avoid hydration errors.
    if (!mounted) {
        return null;
    }

    // Determines the appropriate icon based on the current theme.
    const ThemeIcon = theme === "light" ? Moon : Sun;

    return (
        // Fixed navigation container at the top of the viewport.
        <nav
            className={
                "fixed top-0 w-full flex-center pt-6 md:pt-3 lg:pt-2 z-50"
            }
        >
            {/* Inner container for navigation items. */}
            <div
                className={
                    "w-full md:w-2/4 lg:w-1/3 bg-foreground flex-center space-x-8 md:space-x-12 lg:space-x-14 py-1 rounded-md"
                }
            >
                {/* Logo button linked to the home page. */}
                <Link href="/" className="flex-center">
                    <Button variant={"navLinks"} size={"icon"}>
                        <CursorProvider>
                            <Image src={logoSrc} alt="Logo" className="" />
                            <CursorFollow>
                                <span className={"cursor-hover"}>Home</span>
                            </CursorFollow>
                        </CursorProvider>
                    </Button>
                </Link>

                {/* Container for dynamically mapped navigation buttons. */}
                <div
                    className={
                        "flex-center space-x-2 md:space-x-4 lg:space-x-4"
                    }
                >
                    {navItems.map(({ id, Icon, label, path }) => (
                        // Link for each navigation item.
                        <Link href={path} className="" key={id}>
                            <Button variant={"navLinks"} size={"icon"}>
                                <CursorProvider>
                                    <Icon />{" "}
                                    {/* Renders the Lucide icon component. */}
                                    <CursorFollow>
                                        <span className={"cursor-hover"}>
                                            {label}{" "}
                                            {/* Renders the navigation item's label. */}
                                        </span>
                                    </CursorFollow>
                                </CursorProvider>
                            </Button>
                        </Link>
                    ))}
                </div>

                {/* Theme toggle button to switch between light and dark modes. */}
                <Button
                    onClick={toggleTheme}
                    variant={"navLinks"}
                    size={"icon"}
                >
                    <CursorProvider>
                        <ThemeIcon />
                        <CursorFollow>
                            <span className={"cursor-hover"}>
                                {theme === "light" ? "Dark" : "Light"}
                            </span>
                        </CursorFollow>
                    </CursorProvider>
                </Button>
            </div>
        </nav>
    );
}
