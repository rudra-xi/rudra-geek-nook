"use client";

import { useTheme } from "next-themes";
import { logo, logo_light } from "public";
import { createContext, type ReactNode, useContext } from "react";

// Define the Shape of the Context Value
interface AppContextType {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    logoSrc: string;
}

// Create the Context with a default value of 'null' or a defined structure
const AppContext = createContext<AppContextType | null>(null);

// Custom Hook (useAppContext)
export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

// Provider Component (AppProvider)
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const { theme, setTheme } = useTheme();

    const logoSrc = theme === "light" ? logo : logo_light;

    // The context value must match the AppContextType interface
    const contextValue: AppContextType = {
        theme,
        setTheme,
        logoSrc,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
