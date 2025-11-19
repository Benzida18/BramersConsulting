"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <>
            {/* HEADER BAR */}
            <header className="simple-header">
                <Link href="/" className="simple-logo-wrap">
                    <img src="/logo.jpg" className="simple-logo" alt="Bramers Consulting"/>
                </Link>

                <button
                    className={`simple-burger ${menuOpen ? "open" : ""}`}
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                        setSubmenuOpen(false);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>

            {/* FULLSCREEN MENU */}
            {menuOpen && (
                <div className="simple-menu">
                    {!submenuOpen && (
                        <div className="simple-menu-list">
                            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                            <Link href="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link>
                            <Link href="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
                            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                            <button className="simple-menu-item" onClick={() => setSubmenuOpen(true)}>
                                Industries →
                            </button>
                        </div>
                    )}

                    {/* INDUSTRIES SUBMENU */}
                    {submenuOpen && (
                        <div className="simple-menu-list">
                            <button className="simple-back" onClick={() => setSubmenuOpen(false)}>← Back</button>

                            {[
                                "Agribusiness",
                                "Real Estate",
                                "Finance",
                                "Catering & Hospitality",
                                "International Trade",
                                "Football Advisory",
                                "Coaching & Training",
                                "AI Strategy",
                                "Mining"
                            ].map((i) => (
                                <Link
                                    key={i}
                                    href={`/industries/${i.toLowerCase().replace(/ /g, "")}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {i}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}