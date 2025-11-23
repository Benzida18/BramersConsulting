"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({
    language: "en",
    setLanguage: () => {},
});

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");

    // optional: persist in localStorage
    useEffect(() => {
        const stored = typeof window !== "undefined"
            ? window.localStorage.getItem("bramers-lang")
            : null;
        if (stored === "en" || stored === "fr") {
            setLanguage(stored);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("bramers-lang", language);
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}