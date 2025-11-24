// app/case-studies/[slug]/CaseStudyDetailClient.jsx
"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

/* ---------- LABELS ---------- */
const LABELS = {
    en: {
        context: "Context",
        mandate: "Mandate",
        whatWeDid: "What we did",
        outcomes: "What changed",
        reflections: "Reflections",
        back: "Back to case studies",
    },
    fr: {
        context: "Contexte",
        mandate: "Mandat",
        whatWeDid: "Ce que nous avons fait",
        outcomes: "Ce qui a changé",
        reflections: "Réflexions",
        back: "Retour aux études de cas",
    },
};

export default function CaseStudyDetailClient({ data }) {
    const { language } = useLanguage();
    const langKey = language === "fr" ? "fr" : "en";
    const t = LABELS[langKey];

    const {
        title,
        tag,
        meta,
        summary,
        context,
        mandate,
        whatWeDid,
        outcomes,
        reflections,
    } = data;

    return (
        <main className="case-detail-page">
            {/* HERO / OVERVIEW */}
            <section className="case-detail-hero">
                {tag && <p className="case-detail-eyebrow">{tag}</p>}
                <h1 className="case-detail-title">{title}</h1>
                {meta && <p className="case-detail-meta">{meta}</p>}
                {summary && (
                    <p className="case-detail-summary">{summary}</p>
                )}
            </section>

            {/* CHAPTERS */}
            <section className="case-detail-body">
                {context && (
                    <article className="case-detail-section">
                        <h2>{t.context}</h2>
                        <p>{context}</p>
                    </article>
                )}

                {mandate && (
                    <article className="case-detail-section">
                        <h2>{t.mandate}</h2>
                        <p>{mandate}</p>
                    </article>
                )}

                {Array.isArray(whatWeDid) && whatWeDid.length > 0 && (
                    <article className="case-detail-section">
                        <h2>{t.whatWeDid}</h2>
                        <ol>
                            {whatWeDid.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ol>
                    </article>
                )}

                {outcomes && (
                    <article className="case-detail-section">
                        <h2>{t.outcomes}</h2>
                        <p>{outcomes}</p>
                    </article>
                )}

                {reflections && (
                    <article className="case-detail-section">
                        <h2>{t.reflections}</h2>
                        <p>{reflections}</p>
                    </article>
                )}
            </section>

            {/* BACK BUTTON */}
            <section className="case-detail-footer-nav">
                <Link href="/case-studies" className="fancy case-detail-back-btn">
                    <span className="top-key"></span>
                    <span className="text">{t.back}</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </Link>
            </section>
        </main>
    );
}