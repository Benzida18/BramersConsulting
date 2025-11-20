// components/mobile/MobileHeader.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

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
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const closePanels = () => {
        setIndustriesOpen(false);
        setLangOpen(false);
    };

    return (
        <>
            <header className="mobile-header">
                {/* logo row */}
                <div className="mobile-logo">
                    <Link href="/">
                        <img src="/logo.jpg" alt="Bramers Consulting" />
                    </Link>
                </div>

                {/* grid nav */}
                <nav className="mobile-nav">
                    <ul className="nav-list">
                        <li>
                            <button
                                type="button"
                                className="nav-button"
                                onClick={() => {
                                    const next = !industriesOpen;
                                    setIndustriesOpen(next);
                                    if (next) setLangOpen(false);
                                }}
                            >
                                Industries
                            </button>
                        </li>

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

                        <li className="nav-item-language">
                            <button
                                type="button"
                                className="nav-button"
                                onClick={() => {
                                    const next = !langOpen;
                                    setLangOpen(next);
                                    if (next) setIndustriesOpen(false);
                                }}
                            >
                                EN ▾
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Half-screen Industries panel */}
            {industriesOpen && (
                <div className="mobile-panel mobile-panel-industries">
                    <div className="mobile-panel-header">
                        <span>Industries</span>
                        <button
                            type="button"
                            className="mobile-panel-close"
                            onClick={closePanels}
                            aria-label="Close industries menu"
                        >
                            ×
                        </button>
                    </div>
                    <div className="mobile-panel-inner">
                        {INDUSTRIES.map(([label, href]) => (
                            <Link key={href} href={href} onClick={closePanels}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Language panel (simple for now) */}
            {langOpen && (
                <div className="mobile-panel mobile-panel-language">
                    <div className="mobile-panel-header">
                        <span>Language</span>
                        <button
                            type="button"
                            className="mobile-panel-close"
                            onClick={closePanels}
                            aria-label="Close language menu"
                        >
                            ×
                        </button>
                    </div>
                    <div className="mobile-panel-inner">
                        <button
                            type="button"
                            className="nav-button"
                            onClick={closePanels}
                        >
                            English
                        </button>
                        <button
                            type="button"
                            className="nav-button"
                            onClick={closePanels}
                        >
                            Français
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}