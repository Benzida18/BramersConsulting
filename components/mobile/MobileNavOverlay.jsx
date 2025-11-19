"use client";

import Link from "next/link";

const MAIN_LINKS = [
    ["Services", "/services"],
    ["Case Studies", "/case-studies"],
    ["Insights", "/insights"],
    ["About", "/about"],
    ["Contact", "/contact"],
];

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

export default function MobileNavOverlay({ view, setView, closeAll }) {
    if (view === "language") {
        return (
            <div className="m-menu-overlay">
                <div className="m-menu-header">
                    <button
                        type="button"
                        className="m-back-pill"
                        onClick={() => setView("nav")}
                    >
                        ← Back
                    </button>
                    <span className="m-menu-title">Language</span>
                    <button
                        type="button"
                        className="m-close"
                        aria-label="Close"
                        onClick={closeAll}
                    >
                        ×
                    </button>
                </div>

                <div className="m-language-body">
                    <button type="button" className="m-lang-option active">
                        English
                    </button>
                    <button type="button" className="m-lang-option">
                        Français
                    </button>
                </div>
            </div>
        );
    }

    if (view === "industries") {
        return (
            <div className="m-menu-overlay">
                <div className="m-menu-header">
                    <button
                        type="button"
                        className="m-back-pill"
                        onClick={() => setView("nav")}
                    >
                        ← Back
                    </button>
                    <span className="m-menu-title">Industries</span>
                    <button
                        type="button"
                        className="m-close"
                        aria-label="Close"
                        onClick={closeAll}
                    >
                        ×
                    </button>
                </div>

                <div className="m-menu-body">
                    <ul className="m-list">
                        {INDUSTRIES.map(([label, href]) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="m-pill-link"
                                    onClick={closeAll}
                                >
                                    <span>{label}</span>
                                    <span className="m-arrow">→</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    // Default: main navigation
    return (
        <div className="m-menu-overlay">
            <div className="m-menu-header">
                <span className="m-menu-title">Navigation</span>
                <button
                    type="button"
                    className="m-close"
                    aria-label="Close"
                    onClick={closeAll}
                >
                    ×
                </button>
            </div>

            <div className="m-menu-body">
                <ul className="m-list">
                    {MAIN_LINKS.map(([label, href]) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="m-pill-link"
                                onClick={closeAll}
                            >
                                <span>{label}</span>
                                <span className="m-arrow">→</span>
                            </Link>
                        </li>
                    ))}

                    {/* Industries entry as last pill */}
                    <li>
                        <button
                            type="button"
                            className="m-pill-link m-pill-button"
                            onClick={() => setView("industries")}
                        >
                            <span>Industries</span>
                            <span className="m-arrow">→</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}