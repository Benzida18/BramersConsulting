// app/case-studies/page.jsx
import Link from "next/link";
import { client } from "@/sanity/client";
import "./case-studies.css";

const MAX_BOOKS = 9;

// Text for each of the 3 shelves
const SHELF_META = [
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
];

// Fetch case studies from Sanity
async function getCaseStudies() {
    const query = `
      *[_type == "caseStudy"] | order(orderRank asc, _createdAt desc) {
        _id,
        title,
        slug,
        sector,
        summary,
        country,
        year
      }
    `;
    return client.fetch(query);
}

export default async function CaseStudiesPage() {
    const cases = await getCaseStudies();

    const visibleCases = (cases || []).slice(0, MAX_BOOKS);
    const placeholdersNeeded = Math.max(MAX_BOOKS - visibleCases.length, 0);

    // Build array of cards = real + placeholders
    const cards = [
        ...visibleCases.map((c) => ({ type: "real", data: c })),
        ...Array.from({ length: placeholdersNeeded }).map((_, i) => ({
            type: "placeholder",
            index: i,
        })),
    ];

    // Split into 3 shelves of 3
    const rows = [
        cards.slice(0, 3),
        cards.slice(3, 6),
        cards.slice(6, 9),
    ];

    return (
        <main className="case-page">
            {/* HERO WITH VIDEO – just "Case Studies" in the middle */}
            <section className="case-hero">
                <video
                    src="/videos/casestudies.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="case-hero-overlay">
                    <h1>Case Studies</h1>
                    <p className="case-hero-sub">
                        A working library of Bramers mandates across markets, capital and people.
                    </p>
                </div>
            </section>

            {/* BODY */}
            <section className="case-body">
                <div className="case-intro">
                    <p className="case-eyebrow">Selected Cases</p>
                    <p className="case-intro-text">
                        A working shelf of live and upcoming Bramers mandates.
                    </p>
                </div>

                <div className="case-shelves">
                    {rows.map((row, rowIdx) => {
                        const meta = SHELF_META[rowIdx]; // pick header text for this shelf

                        return (
                            <div className="case-shelf" key={rowIdx}>

                                {meta && (
                                    <header className="case-shelf-header">
                                        <p className="case-shelf-label">{meta.label}</p>
                                        <h2 className="case-shelf-title">{meta.title}</h2>
                                        <p className="case-shelf-intro">{meta.intro}</p>
                                    </header>
                                )}


                                <div className="case-shelf-line" />

                                <div className="case-books-row">
                                    {row.map((card, colIdx) => {
                                        if (!card) return null;

                                        if (card.type === "real") {
                                            const c = card.data;
                                            const metaBits = [
                                                c.sector || "Multi-sector",
                                                c.country,
                                                c.year,
                                            ].filter(Boolean);

                                            return (
                                                <article className="book-card" key={c._id}>
                                                    <div className="book-spine" />
                                                    <div className="book-content">
                                                        {metaBits.length > 0 && (
                                                            <p className="book-tag">
                                                                {metaBits.join(" · ")}
                                                            </p>
                                                        )}
                                                        <h3 className="book-title">{c.title}</h3>
                                                        {c.summary && (
                                                            <p className="book-summary">
                                                                {c.summary}
                                                            </p>
                                                        )}
                                                        {c.slug?.current && (
                                                            <Link
                                                                href={`/case-studies/${c.slug.current}`}
                                                                className="book-link"
                                                            >
                                                                Read case study →
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
                                                    <p className="book-coming-soon">Coming soon</p>
                                                    <p className="book-coming-note">
                                                        A future Bramers case study will appear here.
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