// components/mobile/MobileHeader.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import "./MobileHeader.css";

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

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* fixed bar over the hero video */}
            <header className="mobile-header">
                <div className="mobile-header-inner">
                    <Link href="/" className="mobile-logo">
                        <img src="/logo.jpg" alt="Bramers Consulting" />
                    </Link>

                    <div className="mobile-header-right">
                        {/* language label outside the hamburger */}
                        <span className="mobile-lang-label">EN</span>

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
                            <div className="mobile-menu-label">Main</div>
                            <ul>
                                <li>
                                    <Link href="/services" onClick={closeMenu}>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies" onClick={closeMenu}>
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights" onClick={closeMenu}>
                                        Insights
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={closeMenu}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" onClick={closeMenu}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* INDUSTRIES LIST */}
                        <div className="mobile-menu-section">
                            <div className="mobile-menu-label">Industries</div>
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
                            <div className="mobile-menu-label">Language</div>
                            <div className="mobile-lang-row">
                                <button
                                    type="button"
                                    className="mobile-lang-pill active"
                                >
                                    English
                                </button>
                                <button type="button" className="mobile-lang-pill">
                                    Français
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}