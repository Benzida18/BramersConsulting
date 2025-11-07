"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 999,
                padding: scrolled ? "10px 48px" : "22px 48px",
                backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                transition: "0.3s ease",
            }}
        >
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                {/* LOGO */}
                <img
                    src="/logo.jpg"
                    alt="Bramers Consulting"
                    style={{
                        height: scrolled ? "58px" : "74px",
                        transition: "0.25s ease",
                    }}
                />

                {/* NAVIGATION */}
                <ul
                    className="nav-links"
                    style={{
                        display: "flex",
                        gap: "60px",
                        alignItems: "center",
                        listStyle: "none",
                    }}
                >

                    {/* Industries Dropdown */}
                    <li className="nav-item">
            <span className="dropdown-trigger">
             Industries <span className="chevron">▾</span>
            </span>
                        <ul className="dropdown-menu">
                            <li><Link href="/industries/agribusiness">Agribusiness</Link></li>
                            <li><Link href="/industries/real-estate">Real Estate</Link></li>
                            <li><Link href="/industries/finance">Finance</Link></li>
                            <li><Link href="/industries/catering-hospitality">Catering & Hospitality</Link></li>
                            <li><Link href="/industries/international-trade">International Trade</Link></li>
                            <li><Link href="/industries/football-advisory">Football Advisory</Link></li>
                            <li><Link href="/industries/coaching-training">Coaching & Training</Link></li>
                            <li><Link href="/industries/ai-strategy">AI Strategy</Link></li>
                            <li><Link href="/industries/mining">Mining</Link></li>
                        </ul>
                    </li>

                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/case-studies">Case Studies</Link></li>
                    <li><Link href="/insights">Insights</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* LANGUAGE SELECTOR */}
                <div
                    className="language-select"
                    onClick={() => setLangOpen(!langOpen)}
                    style={{ position: "relative", cursor: "pointer", color: "white", fontSize: "20px" }}
                >
                    🇺🇸 EN
                    {langOpen && (
                        <ul className="language-menu">
                            <li>🇺🇸 English</li>
                            <li>🇫🇷 Français</li>
                            <li>🇵🇹 Português</li>
                            <li>🇳🇱 Nederlands</li>
                            <li>🇸🇦 العربية</li>
                        </ul>
                    )}
                </div>

            </nav>
        </header>
    );
}