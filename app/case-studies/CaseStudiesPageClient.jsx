// app/case-studies/CaseStudiesPageClient.jsx
"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

/* ---------- TEXT LABELS (EN / FR) ---------- */
const LABELS = {
    en: {
        heroTitle: "Case Studies",
        heroSub:
            "A working library of Bramers mandates across markets, capital and people.",
        eyebrow: "Selected Cases",
        intro: "A working shelf of live and upcoming Bramers mandates.",
        placeholderTitle: "Coming soon",
        placeholderText: "A future Bramers case study will appear here.",
        readCase: "Read case study",
    },
    fr: {
        heroTitle: "Études de cas",
        heroSub:
            "Une bibliothèque de mandats Bramers couvrant les marchés, le capital et les équipes.",
        eyebrow: "Cas sélectionnés",
        intro: "Une étagère vivante de mandats Bramers en cours et à venir.",
        placeholderTitle: "À venir",
        placeholderText:
            "Une future étude de cas Bramers apparaîtra ici.",
        readCase: "Lire l’étude de cas",
    },
};

/* ---------- SHELF META (EN / FR) ---------- */
const SHELF_META = {
    en: [
        {
            label: "Shelf I",
            title: "Markets & Trade",
            intro: "Routes, corridors and cross-border trade execution.",
        },
        {
            label: "Shelf II",
            title: "Capital & Assets",
            intro: "Capital allocation, real estate and infrastructure decisions.",
        },
        {
            label: "Shelf III",
            title: "People & Performance",
            intro: "Leadership, culture and execution across organisations.",
        },
    ],
    fr: [
        {
            label: "Rayon I",
            title: "Marchés & commerce",
            intro: "Routes, corridors et exécution du commerce transfrontalier.",
        },
        {
            label: "Rayon II",
            title: "Capital & actifs",
            intro: "Allocation du capital, immobilier et décisions d’infrastructure.",
        },
        {
            label: "Rayon III",
            title: "Personnes & performance",
            intro: "Leadership, culture et exécution au sein des organisations.",
        },
    ],
};

/* ---------- LANGUAGE FILTER (with fallback) ---------- */
function pickCasesForLanguage(cases, langKey) {
    const anyHasLang = cases.some((c) => c.language);

    // If no language set at all yet, just show everything
    if (!anyHasLang) return cases;

    const exact = cases.filter((c) => c.language === langKey);
    if (exact.length > 0) return exact;

    const english = cases.filter((c) => c.language === "en");
    if (english.length > 0) return english;

    return cases;
}

/* ---------- MAIN CLIENT COMPONENT ---------- */
export default function CaseStudiesPageClient({ cases, maxBooks }) {
    const { language } = useLanguage();
    const langKey = language === "fr" ? "fr" : "en";

    const t = LABELS[langKey];
    const shelfMeta = SHELF_META[langKey];

    const filteredCases = pickCasesForLanguage(cases || [], langKey);

    const visibleCases = (filteredCases || []).slice(0, maxBooks);
    const placeholdersNeeded = Math.max(maxBooks - visibleCases.length, 0);

    const cards = [
        ...visibleCases.map((c) => ({ type: "real", data: c })),
        ...Array.from({ length: placeholdersNeeded }).map((_, i) => ({
            type: "placeholder",
            index: i,
        })),
    ];

    // 3 shelves x 3 books
    const rows = [cards.slice(0, 3), cards.slice(3, 6), cards.slice(6, 9)];

    return (
        <main className="case-page">
            {/* HERO WITH VIDEO */}
            <section className="case-hero">
                <video
                    src="/videos/casestudies.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="case-hero-overlay">
                    <h1>{t.heroTitle}</h1>
                    <p className="case-hero-sub">{t.heroSub}</p>
                </div>
            </section>

            {/* BODY */}
            <section className="case-body">
                <div className="case-intro">
                    <p className="case-eyebrow">{t.eyebrow}</p>
                    <p className="case-intro-text">{t.intro}</p>
                </div>

                <div className="case-shelves">
                    {rows.map((row, rowIdx) => {
                        const meta = shelfMeta[rowIdx];

                        return (
                            <div className="case-shelf" key={rowIdx}>
                                {meta && (
                                    <header className="case-shelf-header">
                                        <p className="case-shelf-label">
                                            {meta.label}
                                        </p>
                                        <h2 className="case-shelf-title">
                                            {meta.title}
                                        </h2>
                                        <p className="case-shelf-intro">
                                            {meta.intro}
                                        </p>
                                    </header>
                                )}

                                <div className="case-shelf-line" />

                                <div className="case-books-row">
                                    {row.map((card, colIdx) => {
                                        if (!card) return null;

                                        if (card.type === "real") {
                                            const c = card.data;
                                            const metaBits = [
                                                c.tag || "Multi-sector",
                                                c.meta,
                                            ].filter(Boolean);

                                            return (
                                                <article
                                                    className="book-card"
                                                    key={c._id}
                                                >
                                                    <div className="book-spine" />
                                                    <div className="book-content">
                                                        {metaBits.length > 0 && (
                                                            <p className="book-tag">
                                                                {metaBits.join(
                                                                    " · "
                                                                )}
                                                            </p>
                                                        )}
                                                        <h3 className="book-title">
                                                            {c.title}
                                                        </h3>
                                                        {c.summary && (
                                                            <p className="book-summary">
                                                                {c.summary}
                                                            </p>
                                                        )}
                                                        {c.slug?.current && (
                                                            <Link
                                                                href={`/case-studies/${c.slug.current}`}
                                                                className="fancy fancy-small book-link"
                                                            >
                                                                <span className="top-key"></span>
                                                                <span className="text">
                                                                    {
                                                                        t.readCase
                                                                    }
                                                                </span>
                                                                <span className="bottom-key-1"></span>
                                                                <span className="bottom-key-2"></span>
                                                            </Link>
                                                        )}
                                                    </div>
                                                </article>
                                            );
                                        }

                                        // Placeholder / Coming soon
                                        return (
                                            <article
                                                className="book-card book-placeholder"
                                                key={`placeholder-${rowIdx}-${colIdx}`}
                                            >
                                                <div className="book-spine" />
                                                <div className="book-content">
                                                    <p className="book-coming-soon">
                                                        {t.placeholderTitle}
                                                    </p>
                                                    <p className="book-coming-note">
                                                        {t.placeholderText}
                                                    </p>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}