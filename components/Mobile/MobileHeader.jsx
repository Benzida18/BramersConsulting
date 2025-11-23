// components/mobile/MobileHeader.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import "./MobileHeader.css";
import { useLanguage } from "@/components/LanguageContext";

const INDUSTRIES = [
    ["Agribusiness", "/industries/agribusiness"],
    ["Real Estate", "/industries/real-estate"],
    ["Finance", "/industries/finance"],
    ["Catering & Hospitality", "/industries/catering-hospitality"],
    ["International Trade", "/industries/international-trade"],
    ["Football Advisory", "/industries/football-advisory"],
    ["Coaching & Training", "/industries/coaching-training"],
    ["AI Strategy", "/industries/ai-strategy"],
    ["Mining", "/industries/mining"],
];

const TEXT = {
    en: {
        langShort: "EN",
        mainLabel: "Main",
        industriesLabel: "Industries",
        languageLabel: "Language",
        navLinks: [
            ["Services", "/services"],
            ["Case Studies", "/case-studies"],
            ["Insights", "/insights"],
            ["About", "/about"],
            ["Contact", "/contact"],
        ],
        langEn: "English",
        langFr: "Français",
    },
    fr: {
        langShort: "FR",
        mainLabel: "Menu principal",
        industriesLabel: "Secteurs",
        languageLabel: "Langue",
        navLinks: [
            ["Services", "/services"],
            ["Études de cas", "/case-studies"],
            ["Analyses", "/insights"],
            ["À propos", "/about"],
            ["Contact", "/contact"],
        ],
        langEn: "English",
        langFr: "Français",
    },
};

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const closeMenu = () => setMenuOpen(false);

    const t = TEXT[language] ?? TEXT.en;

    return (
        <>
            {/* fixed bar over the hero video */}
            <header className="mobile-header">
                <div className="mobile-header-inner">
                    <Link href="/" className="mobile-logo">
                        <img src="/logo.jpg" alt="Bramers Consulting" />
                    </Link>

                    <div className="mobile-header-right">
                        {/* small language label outside the hamburger – tap to toggle */}
                        <button
                            type="button"
                            className="mobile-lang-label"
                            onClick={() =>
                                setLanguage(language === "en" ? "fr" : "en")
                            }
                        >
                            {t.langShort}
                        </button>

                        <button
                            type="button"
                            className={`hamburger ${menuOpen ? "is-open" : ""}`}
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label="Toggle navigation menu"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            {/* full-screen overlay menu */}
            {menuOpen && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu-inner">
                        {/* MAIN LINKS */}
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-label">{t.mainLabel}</div>
                            <ul>
                                {t.navLinks.map(([label, href]) => (
                                    <li key={href}>
                                        <Link href={href} onClick={closeMenu}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* INDUSTRIES LIST */}
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-label">
                                {t.industriesLabel}
                            </div>
                            <ul className="mobile-menu-industries">
                                {INDUSTRIES.map(([label, href]) => (
                                    <li key={href}>
                                        <Link href={href} onClick={closeMenu}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* LANGUAGE PILLS */}
                        <div className="mobile-menu-footer">
                            <div className="mobile-menu-label">
                                {t.languageLabel}
                            </div>
                            <div className="mobile-lang-row">
                                <button
                                    type="button"
                                    className={`mobile-lang-pill ${
                                        language === "en" ? "active" : ""
                                    }`}
                                    onClick={() => setLanguage("en")}
                                >
                                    {t.langEn}
                                </button>
                                <button
                                    type="button"
                                    className={`mobile-lang-pill ${
                                        language === "fr" ? "active" : ""
                                    }`}
                                    onClick={() => setLanguage("fr")}
                                >
                                    {t.langFr}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}