"use client";

import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";
import "./case-studies.css";

const MAX_BOOKS = 9;

const LABELS = {
    en: {
        heroTitle: "Case Studies",
        heroSubtitle:
            "A working library of Bramers mandates across markets, capital and people.",
        eyebrow: "Selected Cases",
        intro: "A working shelf of live and upcoming Bramers mandates.",
        languageNote: "Currently showing case studies in English.",
        emptyState: "No case studies are available yet.",
        multiSector: "Multi-sector",
        readCta: "Read case study",
    },
    fr: {
        heroTitle: "Études de cas",
        heroSubtitle:
            "Une bibliothèque de missions Bramers sur les marchés, le capital et les équipes.",
        eyebrow: "Études sélectionnées",
        intro:
            "Un ensemble d’études de cas en cours ou réalisées par Bramers.",
        languageNote: "Affichage des études de cas en français.",
        emptyState: "Aucune étude de cas n’est encore disponible.",
        multiSector: "Multi-sectoriel",
        readCta: "Lire l’étude de cas",
    },
};

// Shelf meta – now bilingual
const SHELF_META = [
    {
        label: { en: "Shelf I", fr: "Étagère I" },
        title: { en: "Markets & Trade", fr: "Marchés & commerce" },
        intro: {
            en: "Routes, corridors and cross-border trade execution.",
            fr: "Corridors, routes commerciales et exécution transfrontalière.",
        },
    },
    {
        label: { en: "Shelf II", fr: "Étagère II" },
        title: { en: "Capital & Assets", fr: "Capital & actifs" },
        intro: {
            en: "Capital allocation, real estate and infrastructure decisions.",
            fr: "Allocation du capital, immobilier et décisions d’infrastructure.",
        },
    },
    {
        label: { en: "Shelf III", fr: "Étagère III" },
        title: { en: "People & Performance", fr: "Personnes & performance" },
        intro: {
            en: "Leadership, culture and execution across organisations.",
            fr: "Leadership, culture et exécution au sein des organisations.",
        },
    },
];

export default function CaseStudiesPageClient({ cases }) {
    const { language } = useLanguage();
    const langKey = language === "fr" ? "fr" : "en";
    const t = LABELS[langKey];

    // Filter by language (strict)
    const languageCases = (cases || []).filter(
        (c) => c.language === langKey
    );

    const visibleCases = languageCases.slice(0, MAX_BOOKS);
    const placeholdersNeeded = Math.max(MAX_BOOKS - visibleCases.length, 0);

    const cards = [
        ...visibleCases.map((c) => ({ type: "real", data: c })),
        ...Array.from({ length: placeholdersNeeded }).map((_, i) => ({
            type: "placeholder",
            index: i,
        })),
    ];

    // Split into 3 shelves of 3
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
                    <p className="case-hero-sub">{t.heroSubtitle}</p>
                </div>
            </section>

            {/* BODY */}
            <section className="case-body">
                <div className="case-intro">
                    <p className="case-eyebrow">{t.eyebrow}</p>
                    <p className="case-intro-text">{t.intro}</p>
                    <p
                        style={{
                            fontSize: 12,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#9ca3af",
                            marginTop: 10,
                        }}
                    >
                        {t.languageNote}
                    </p>
                </div>

                {languageCases.length === 0 && (
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: 15,
                            color: "#555",
                        }}
                    >
                        {t.emptyState}
                    </p>
                )}

                {languageCases.length > 0 && (
                    <div className="case-shelves">
                        {rows.map((row, rowIdx) => {
                            const meta = SHELF_META[rowIdx];

                            return (
                                <div className="case-shelf" key={rowIdx}>
                                    {meta && (
                                        <header className="case-shelf-header">
                                            <p className="case-shelf-label">
                                                {meta.label[langKey]}
                                            </p>
                                            <h2 className="case-shelf-title">
                                                {meta.title[langKey]}
                                            </h2>
                                            <p className="case-shelf-intro">
                                                {meta.intro[langKey]}
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
                                                    c.tag ||
                                                    t.multiSector,
                                                    c.meta,
                                                ].filter(Boolean);

                                                return (
                                                    <article
                                                        className="book-card"
                                                        key={c._id}
                                                    >
                                                        <div className="book-spine" />
                                                        <div className="book-content">
                                                            {metaBits.length >
                                                                0 && (
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
                                                                            t.readCta
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
                                                            {langKey === "en"
                                                                ? "Coming soon"
                                                                : "À venir"}
                                                        </p>
                                                        <p className="book-coming-note">
                                                            {langKey === "en"
                                                                ? "A future Bramers case study will appear here."
                                                                : "Une future étude de cas Bramers apparaîtra ici."}
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
                )}
            </section>
        </main>
    );
}