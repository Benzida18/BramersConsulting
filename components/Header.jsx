"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [indOpen, setIndOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const barRef = useRef(null);
    const ticking = useRef(false);

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
        };
    }, []);

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
                    {/* ✅ logo now always takes you home */}
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

                    {/* NAV LINKS */}
                    <ul
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
                            className="nav-item"
                            onMouseEnter={() => setIndOpen(true)}
                            onMouseLeave={() => setIndOpen(false)}
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

                            <ul className={`dropdown-menu ${indOpen ? "show" : ""}`}>
                                {[
                                    ["Agribusiness", "/industries/agribusiness"],
                                    ["Real Estate", "/industries/real-estate"],
                                    ["Finance", "/industries/finance"],
                                    ["Catering & Hospitality", "/industries/catering-hospitality"],
                                    ["International Trade", "/industries/international-trade"],
                                    ["Football Advisory", "/industries/football-advisory"],
                                    ["Coaching & Training", "/industries/coaching-training"],
                                    ["AI Strategy", "/industries/ai-strategy"],
                                    ["Mining", "/industries/mining"],
                                ].map(([label, href]) => (
                                    <li key={href}>
                                        {/* ⬇️ no inline styles: uses globals, so black text on white */}
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

                        {/* LANGUAGE DROPDOWN */}
                        <li
                            className="nav-item"
                            onMouseEnter={() => setLangOpen(true)}
                            onMouseLeave={() => setLangOpen(false)}
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
                                style={{ right: 0, left: "auto" }}
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
            </header>
        </>
    );
}