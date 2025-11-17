"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [indOpen, setIndOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const barRef = useRef(null);
    const ticking = useRef(false);
    const indCloseTimeout = useRef(null);
    const langCloseTimeout = useRef(null);

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

    const closeMobile = () => setMobileOpen(false);

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

            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 9999,
                    padding: scrolled ? "10px 42px" : "26px 42px",
                    background: scrolled ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.35)",
                    backdropFilter: "blur(12px)",
                    transition: "0.3s ease",
                }}
            >
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        overflow: "visible",
                    }}
                >
                    {/* logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src="/logo.jpg"
                            alt="Bramers Consulting"
                            style={{
                                height: scrolled ? "70px" : "100px",
                                width: "auto",
                                objectFit: "contain",
                                transition: "0.35s ease",
                            }}
                        />
                    </Link>

                    {/* DESKTOP NAV LIST (hidden on mobile via CSS @media) */}
                    <ul
                        className="nav-list"
                        style={{
                            display: "flex",
                            gap: "48px",
                            listStyle: "none",
                            alignItems: "center",
                            transform: "translateX(-200px)",
                        }}
                    >
                        {/* INDUSTRIES DROPDOWN */}
                        <li
                            className="nav-item nav-item-industries"
                            onMouseEnter={openIndustries}
                            onMouseLeave={closeIndustries}
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
                                Industries <span className="chevron">▾</span>
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
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/case-studies">
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/insights">
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                Contact
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
                                EN <span className="chevron">▾</span>
                            </button>

                            <ul
                                className={`dropdown-menu language-menu ${
                                    langOpen ? "show" : ""
                                }`}
                                onMouseEnter={openLang}
                                onMouseLeave={closeLang}
                            >
                                <li>
                                    <span onClick={(e) => e.preventDefault()}>English</span>
                                </li>
                                <li>
                                    <span onClick={(e) => e.preventDefault()}>Français</span>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* MOBILE CONTROLS (shown only on mobile via CSS) */}
                    <div className="mobile-controls">
                        {/* simple language label next to burger */}
                        <span
                            style={{
                                color: "#ffffff",
                                fontFamily: "var(--font-playfair)",
                                fontSize: "18px",
                                marginRight: "12px",
                            }}
                        >
                            EN
                        </span>

                        <label className="burger">
                            <input
                                type="checkbox"
                                checked={mobileOpen}
                                onChange={() => setMobileOpen((open) => !open)}
                                aria-label="Toggle navigation menu"
                            />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </nav>

                {/* top links colour / hover */}
                <style jsx>{`
                    .nav-link {
                        font-family: var(--font-playfair);
                        color: #ffffff;
                        text-decoration: none;
                        font-size: 20px;
                    }
                    .nav-link:hover,
                    .dropdown-trigger:hover {
                        color: var(--color-primary);
                    }
                `}</style>

                {/* MOBILE FULL-SCREEN OVERLAY */}
                {mobileOpen && (
                    <div className="mobile-nav-overlay">
                        <div className="mobile-nav-main">
                            {/* Main links */}
                            <div className="mobile-nav-group">
                                <div className="mobile-nav-label">Main</div>
                                <ul className="mobile-nav-links">
                                    <li>
                                        <Link href="/services" onClick={closeMobile}>
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/case-studies" onClick={closeMobile}>
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/insights" onClick={closeMobile}>
                                            Insights
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" onClick={closeMobile}>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" onClick={closeMobile}>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Industries list */}
                            <div className="mobile-nav-group" style={{ marginTop: 32 }}>
                                <div className="mobile-nav-label">Industries</div>
                                <ul className="mobile-nav-industry-list">
                                    {INDUSTRIES.map(([label, href]) => (
                                        <li key={href}>
                                            <Link href={href} onClick={closeMobile}>
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Footer inside overlay: language pills */}
                        <div className="mobile-nav-footer">
                            <div className="mobile-nav-label">Language</div>
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
                )}
            </header>
        </>
    );
}