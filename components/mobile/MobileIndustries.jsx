"use client";

import Link from "next/link";

const SECTORS = [
    {
        title: "Agribusiness",
        href: "/industries/agribusiness",
        summary: "Value chains from farm to export markets.",
    },
    {
        title: "Finance",
        href: "/industries/finance",
        summary: "Banks, fintechs, asset managers and impact investors.",
    },
    {
        title: "Real Estate & Infrastructure",
        href: "/industries/real-estate",
        summary: "Urban development, logistics hubs and core infrastructure.",
    },
    {
        title: "Catering & Hospitality",
        href: "/industries/catering-hospitality",
        summary: "Hotels, restaurants and food-service operators across UK–Africa corridors.",
    },
    {
        title: "International Trade & Logistics",
        href: "/industries/international-trade",
        summary: "Trade corridors, ports and cross-border supply chains.",
    },
    {
        title: "Sports & Football Advisory",
        href: "/industries/football-advisory",
        summary: "Clubs, academies and investors in the football ecosystem.",
    },
    {
        title: "Coaching & Training",
        href: "/industries/coaching-training",
        summary: "Leadership development, coaching and professional training providers.",
    },
    {
        title: "AI Strategy",
        href: "/industries/ai-strategy",
        summary: "Applied AI, analytics and responsible data use.",
    },
    {
        title: "Mining",
        href: "/industries/mining",
        summary: "Natural resources and critical minerals projects.",
    },
];

export default function MobileIndustries({ onBack, onClose }) {
    return (
        <div className="mobile-menu-overlay">
            <div className="mobile-menu-header">
                {/* Fancy outline back button */}
                <button
                    type="button"
                    className="fancy mobile-back-button"
                    onClick={onBack}
                >
                    <span className="top-key"></span>
                    <span className="text">Back</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>

                <button
                    type="button"
                    className="mobile-menu-close"
                    aria-label="Close navigation"
                    onClick={onClose}
                >
                    ×
                </button>
            </div>

            <div className="mobile-industries-copy">
                <p className="mobile-menu-label">Sector focus</p>
                <h2 className="mobile-industries-title">
                    Industries we advise across the UK &amp; Africa.
                </h2>
                <p className="mobile-industries-sub">
                    Tap a sector to view the dedicated page.
                </p>
            </div>

            <ul className="mobile-industries-list">
                {SECTORS.map((s) => (
                    <li key={s.href}>
                        <Link
                            href={s.href}
                            className="mobile-industry-row"
                            onClick={onClose}
                        >
                            <span className="mobile-industry-name">{s.title}</span>
                            <span className="mobile-industry-summary">
                                {s.summary}
                            </span>
                            <span className="mobile-industry-arrow">→</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}