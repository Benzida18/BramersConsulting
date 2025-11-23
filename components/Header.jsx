"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

// Simple translation map for header-only copy
const copy = {
    en: {
        industries: "Industries",
        services: "Services",
        caseStudies: "Case Studies",
        insights: "Insights",
        about: "About",
        contact: "Contact",
        main: "Main",
        language: "Language",
        english: "English",
        french: "Français",
    },
    fr: {
        industries: "Secteurs",
        services: "Services",
        caseStudies: "Études de cas",
        insights: "Analyses",
        about: "À propos",
        contact: "Contact",
        main: "Principal",
        language: "Langue",
        english: "Anglais",
        french: "Français",
    },
};

export default function Header() {
    const { language, setLanguage } = useLanguage();
    const t = copy[language];

    const [scrolled, setScrolled] = useState(false);
    const [indOpen, setIndOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const barRef = useRef(null);
    const ticking = useRef(false);
    const indCloseTimeout = useRef(null);
    const langCloseTimeout = useRef(null);

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

    const openIndustries = () => {
        if (indCloseTimeout.current) clearTimeout(indCloseTimeout.current);
        setIndOpen(true);
    };

    const closeIndustries = () => {
        indCloseTimeout.current = setTimeout(() => setIndOpen(false), 150);
    };

    const openLang = () => {
        if (langCloseTimeout.current) clearTimeout(langCloseTimeout.current);
        setLangOpen(true);
    };

    const closeLang = () => {
        langCloseTimeout.current = setTimeout(() => setLangOpen(false), 150);
    };

    const closeMobile = () => setMobileOpen(false);

    // scroll bar + header shrink
    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const scrollPos = window.scrollY || window.pageYOffset;
                    const docHeight = document.documentElement.scrollHeight;
                    const winHeight = window.innerHeight;
                    const maxScroll = docHeight - winHeight || 1;
                    const progress = Math.min(Math.max(scrollPos / maxScroll, 0), 1);

                    if (barRef.current) {
                        barRef.current.style.transform = `scaleX(${progress})`;
                    }

                    setScrolled(scrollPos > 50);
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (indCloseTimeout.current) clearTimeout(indCloseTimeout.current);
            if (langCloseTimeout.current) clearTimeout(langCloseTimeout.current);
        };
    }, []);

    // lock body scroll when mobile nav is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            {/* blue scroll bar */}
            <div
                ref={barRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "3px",
                    width: "100%",
                    background: "#1E90FF",
                    transformOrigin: "0 0",
                    transform: "scaleX(0)",
                    transition: "transform 0.12s linear",
                    zIndex: 10000,
                }}
            />

            {/* HEADER – hooks into .site-header in globals.css */}
            <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
                <nav className="main-nav">
                    {/* logo */}
                    <Link href="/" className="logo-wrap">
                        <img
                            src="/logo.jpg"
                            alt="Bramers Consulting"
                            className="site-logo"
                        />
                    </Link>

                    {/* DESKTOP NAV LIST */}
                    <ul className="nav-list">
                        {/* INDUSTRIES DROPDOWN */}
                        <li
                            className="nav-item nav-item-industries"
                            onMouseEnter={openIndustries}
                            onMouseLeave={closeIndustries}
                        >
                            <button type="button" className="dropdown-trigger">
                                {t.industries} <span className="chevron">▾</span>
                            </button>

                            <ul
                                className={`dropdown-menu ${indOpen ? "show" : ""}`}
                                onMouseEnter={openIndustries}
                                onMouseLeave={closeIndustries}
                            >
                                {INDUSTRIES.map(([label, href]) => (
                                    <li key={href}>
                                        <Link href={href}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* SIMPLE LINKS */}
                        <li>
                            <Link className="nav-link" href="/services">
                                {t.services}
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/case-studies">
                                {t.caseStudies}
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/insights">
                                {t.insights}
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/about">
                                {t.about}
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                {t.contact}
                            </Link>
                        </li>

                        {/* LANGUAGE DROPDOWN (desktop) */}
                        <li
                            className="nav-item nav-item-language"
                            onMouseEnter={openLang}
                            onMouseLeave={closeLang}
                        >
                            <button
                                type="button"
                                className="dropdown-trigger"
                                style={{
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    cursor: "pointer",
                                }}
                            >
                                {language === "en" ? "EN" : "FR"}{" "}
                                <span className="chevron">▾</span>
                            </button>

                            <ul
                                className={`dropdown-menu language-menu ${
                                    langOpen ? "show" : ""
                                }`}
                                onMouseEnter={openLang}
                                onMouseLeave={closeLang}
                            >
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setLanguage("en")}
                                        style={{
                                            background: "none",
                                            border: "none",
                                            padding: 0,
                                            cursor: "pointer",
                                            font: "inherit",
                                            color:
                                                language === "en"
                                                    ? "var(--color-primary)"
                                                    : "inherit",
                                        }}
                                    >
                                        {t.english}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => setLanguage("fr")}
                                        style={{
                                            background: "none",
                                            border: "none",
                                            padding: 0,
                                            cursor: "pointer",
                                            font: "inherit",
                                            color:
                                                language === "fr"
                                                    ? "var(--color-primary)"
                                                    : "inherit",
                                        }}
                                    >
                                        {t.french}
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* MOBILE CONTROLS (burger + tiny lang switch) */}
                    <div className="mobile-controls">
                        <button
                            type="button"
                            className="mobile-lang-chip"
                            onClick={() =>
                                setLanguage(language === "en" ? "fr" : "en")
                            }
                        >
                            {language === "en" ? "EN" : "FR"}
                        </button>

                        <label className="burger">
                            <input
                                type="checkbox"
                                checked={mobileOpen}
                                onChange={() =>
                                    setMobileOpen((open) => !open)
                                }
                                aria-label="Toggle navigation menu"
                            />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </nav>

                {/* LAYOUT + MOBILE STYLES */}
                <style jsx>{`
                    .logo-wrap {
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                    }

                    .main-nav {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        overflow: visible;
                    }

                    .nav-list {
                        display: flex;
                        gap: 48px;
                        list-style: none;
                        align-items: center;
                    }

                    .nav-link,
                    .dropdown-trigger {
                        font-family: var(--font-playfair);
                        color: #ffffff;
                        text-decoration: none;
                        font-size: 20px;
                        background: none;
                        border: none;
                        padding: 0;
                        cursor: pointer;
                    }

                    .mobile-controls {
                        display: none;
                    }

                    .mobile-lang-chip {
                        border-radius: 999px;
                        border: 1px solid rgba(255, 255, 255, 0.4);
                        padding: 4px 10px;
                        font-size: 11px;
                        letter-spacing: 0.16em;
                        text-transform: uppercase;
                        background: transparent;
                        color: #ffffff;
                    }

                    .burger {
                        position: relative;
                        width: 28px;
                        height: 20px;
                        border: none;
                        padding: 0;
                        background: transparent;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        cursor: pointer;
                    }

                    .burger input {
                        display: none;
                    }

                    .burger span {
                        display: block;
                        height: 2px;
                        width: 100%;
                        border-radius: 999px;
                        background: #ffffff;
                        transition: transform 0.25s ease, opacity 0.25s ease;
                        transform-origin: left center;
                    }

                    @media (max-width: 900px) {
                        .nav-list {
                            display: none;
                        }

                        .mobile-controls {
                            display: inline-flex;
                            align-items: center;
                            gap: 10px;
                        }
                    }
                `}</style>

                {/* MOBILE FULL-SCREEN OVERLAY */}
                {mobileOpen && (
                    <div className="mobile-nav-overlay">
                        <div className="mobile-nav-main">
                            <div className="mobile-nav-group">
                                <div className="mobile-nav-label">
                                    {t.main}
                                </div>
                                <ul className="mobile-nav-links">
                                    <li>
                                        <Link href="/services" onClick={closeMobile}>
                                            {t.services}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/case-studies"
                                            onClick={closeMobile}
                                        >
                                            {t.caseStudies}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/insights"
                                            onClick={closeMobile}
                                        >
                                            {t.insights}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" onClick={closeMobile}>
                                            {t.about}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            onClick={closeMobile}
                                        >
                                            {t.contact}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="mobile-nav-group"
                                style={{ marginTop: 32 }}
                            >
                                <div className="mobile-nav-label">
                                    {t.industries}
                                </div>
                                <ul className="mobile-nav-industry-list">
                                    {INDUSTRIES.map(([label, href]) => (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                onClick={closeMobile}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mobile-nav-footer">
                            <div className="mobile-nav-label">
                                {t.language}
                            </div>
                            <div className="mobile-lang-row">
                                <button
                                    type="button"
                                    className={`mobile-lang-pill ${
                                        language === "en" ? "active" : ""
                                    }`}
                                    onClick={() => setLanguage("en")}
                                >
                                    {t.english}
                                </button>
                                <button
                                    type="button"
                                    className={`mobile-lang-pill ${
                                        language === "fr" ? "active" : ""
                                    }`}
                                    onClick={() => setLanguage("fr")}
                                >
                                    {t.french}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}