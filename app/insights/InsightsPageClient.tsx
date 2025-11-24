// app/insights/InsightsPageClient.tsx
"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import type { InsightCardData } from "./page";
import { useLanguage } from "@/components/LanguageContext";
import { PortableText } from "@portabletext/react";

/* ---------- COPY FOR BOTH LANGUAGES ---------- */
const LABELS = {
    en: {
        heroTitle: "Insights Library",
        heroSubtitle:
            "A curated collection of articles, reports and interviews we find useful for people and organisations working between the UK and African markets.",
        sectionTitle: "Articles by Sector",
        sectionIntro:
            "Browse external resources organised by sector. Each link is something we found helpful in understanding markets, policy or practical execution.",
        emptyState: "No articles have been added to the library yet.",
        cardExcerptFallback: "Click to open the full article.",
        readArticle: "Read article",
        close: "Close",
    },
    fr: {
        heroTitle: "Bibliothèque d’analyses",
        heroSubtitle:
            "Une sélection d’articles, de rapports et d’entretiens que nous jugeons utiles pour les personnes et organisations travaillant entre le Royaume-Uni et les marchés africains.",
        sectionTitle: "Articles par secteur",
        sectionIntro:
            "Parcourez des ressources externes classées par secteur. Certaines ressources peuvent n’être disponibles qu’en anglais.",
        emptyState: "Aucun article n’a encore été ajouté à la bibliothèque.",
        cardExcerptFallback: "Cliquez pour ouvrir l’article complet.",
        readArticle: "Lire l’article",
        close: "Fermer",
    },
} as const;

/* ---------- SECTOR SECTIONS (9 industries) ---------- */
const SECTIONS = [
    {
        id: "agribusiness",
        label: { en: "Agribusiness", fr: "Agro-industrie" },
        blurb: {
            en: "Resources on farming, cooperatives and value chains from farm to market.",
            fr: "Ressources sur l’agriculture, les coopératives et les chaînes de valeur du champ au marché.",
        },
    },
    {
        id: "finance",
        label: { en: "Financial Services", fr: "Services financiers" },
        blurb: {
            en: "Resources on banks, fintechs and capital flows between the UK and African markets.",
            fr: "Ressources sur les banques, les fintechs et les flux de capitaux entre le Royaume-Uni et l’Afrique.",
        },
    },
    {
        id: "real-estate",
        label: { en: "Real Estate & Infrastructure", fr: "Immobilier et infrastructures" },
        blurb: {
            en: "Resources on urban development, real estate and core infrastructure decisions.",
            fr: "Ressources sur les projets immobiliers, l’aménagement urbain et les infrastructures clés.",
        },
    },
    {
        id: "catering-hospitality",
        label: { en: "Hospitality & Catering", fr: "Hôtellerie et restauration" },
        blurb: {
            en: "Resources on hotels, restaurants and food-service operators across UK–Africa links.",
            fr: "Ressources sur les hôtels, restaurants et la restauration sur les corridors Royaume-Uni–Afrique.",
        },
    },
    {
        id: "international-trade",
        label: {
            en: "International Trade & Logistics",
            fr: "Commerce international et logistique",
        },
        blurb: {
            en: "Resources on trade corridors, logistics and practical export/import issues.",
            fr: "Ressources sur les corridors commerciaux, la logistique et les questions pratiques d’import-export.",
        },
    },
    {
        id: "football-advisory",
        label: { en: "Sports & Football Advisory", fr: "Conseil sportif et football" },
        blurb: {
            en: "Resources on structures, talent and investment in the football ecosystem.",
            fr: "Ressources sur les structures, les talents et les investissements dans l’écosystème du football.",
        },
    },
    {
        id: "coaching-training",
        label: { en: "Coaching & Training", fr: "Coaching et formation" },
        blurb: {
            en: "Resources on leadership, skills and ways of working across countries.",
            fr: "Ressources sur le leadership, les compétences et les modes de travail entre plusieurs pays.",
        },
    },
    {
        id: "ai-strategy",
        label: { en: "AI Strategy", fr: "Stratégie IA" },
        blurb: {
            en: "Resources on applied AI, analytics and simple, practical use cases.",
            fr: "Ressources sur l’IA appliquée, l’analytique et des cas d’usage concrets.",
        },
    },
    {
        id: "mining",
        label: { en: "Mining & Natural Resources", fr: "Mines et ressources naturelles" },
        blurb: {
            en: "Resources on mining projects, communities and investment in natural resources.",
            fr: "Ressources sur les projets miniers, les communautés et les investissements dans les ressources naturelles.",
        },
    },
] as const;

const MAX_PER_ROW = 3;

/* ---------- Card union types ---------- */
type RealCard = { type: "real"; post: InsightCardData };
type PlaceholderCardType = { type: "placeholder"; id: string };
type Card = RealCard | PlaceholderCardType;

/* ---------- Scroll-in animation wrapper ---------- */
function RevealOnScroll({
                            children,
                            delay = 0,
                        }: {
    children: ReactNode;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                } else {
                    el.style.opacity = "0";
                    el.style.transform = "translateY(18px)";
                }
            },
            { threshold: 0.15 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: 0,
                transform: "translateY(18px)",
                transition: `opacity .55s ease ${delay}ms, transform .55s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

/* ---------- Helper to pick posts per sector + language ---------- */
function pickPostsForSection(
    posts: InsightCardData[],
    industryId: string,
    langKey: "en" | "fr"
): InsightCardData[] {
    const allForIndustry = posts.filter((p) => p.industry === industryId);

    if (allForIndustry.length === 0) return [];

    const exactLang = allForIndustry.filter((p) => p.language === langKey);
    if (exactLang.length > 0) return exactLang;

    const englishFallback = allForIndustry.filter((p) => p.language === "en");
    if (englishFallback.length > 0) return englishFallback;

    // last resort: anything in this sector (old docs with no language set)
    return allForIndustry;
}

/* ---------- MAIN CLIENT PAGE ---------- */
export default function InsightsPageClient({
                                               posts,
                                           }: {
    posts: InsightCardData[];
}) {
    const { language } = useLanguage();
    const langKey: "en" | "fr" = language === "fr" ? "fr" : "en";
    const t = LABELS[langKey];

    const [activePost, setActivePost] = useState<InsightCardData | null>(null);

    return (
        <main style={{ fontFamily: "var(--font-inter)", color: "#111" }}>
            {/* HERO */}
            <section
                style={{ position: "relative", height: "88vh", overflow: "hidden" }}
            >
                <video
                    src="/videos/insight.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(60%)",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white",
                        textShadow: "0 8px 28px rgba(0,0,0,0.5)",
                        padding: "0 24px",
                        width: "min(90vw, 900px)",
                    }}
                >
                    <RevealOnScroll>
                        <h1
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "64px",
                                margin: 0,
                            }}
                        >
                            {t.heroTitle}
                        </h1>
                    </RevealOnScroll>

                    <RevealOnScroll delay={120}>
                        <p
                            style={{
                                fontSize: "20px",
                                maxWidth: 740,
                                opacity: 0.95,
                                margin: "12px auto 0",
                                lineHeight: 1.6,
                            }}
                        >
                            {t.heroSubtitle}
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* SECTIONS BY INDUSTRY */}
            <section style={{ background: "#fafafa", padding: "100px 0 140px" }}>
                <div className="insight-grid-container">
                    <RevealOnScroll>
                        <h2
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "36px",
                                margin: "0 0 24px",
                                textAlign: "center",
                            }}
                        >
                            {t.sectionTitle}
                        </h2>
                    </RevealOnScroll>

                    <RevealOnScroll delay={80}>
                        <p
                            style={{
                                textAlign: "center",
                                maxWidth: 820,
                                margin: "0 auto 48px",
                                fontSize: 18,
                                color: "#444",
                                lineHeight: 1.7,
                            }}
                        >
                            {t.sectionIntro}
                        </p>
                    </RevealOnScroll>

                    {SECTIONS.map((section, shelfIdx) => {
                        const sectionPosts = pickPostsForSection(
                            posts,
                            section.id,
                            langKey
                        );

                        const realCards: RealCard[] = sectionPosts.map((post) => ({
                            type: "real",
                            post,
                        }));

                        let cards: Card[] = [...realCards];

                        const remainder = cards.length % MAX_PER_ROW;
                        let placeholdersToAdd =
                            remainder === 0
                                ? cards.length === 0
                                    ? MAX_PER_ROW
                                    : 0
                                : MAX_PER_ROW - remainder;

                        for (let i = 0; i < placeholdersToAdd; i++) {
                            cards.push({
                                type: "placeholder",
                                id: `ph-${section.id}-${i}`,
                            });
                        }

                        const rows: Card[][] = [];
                        for (let i = 0; i < cards.length; i += MAX_PER_ROW) {
                            rows.push(cards.slice(i, i + MAX_PER_ROW));
                        }

                        return (
                            <RevealOnScroll
                                key={section.id}
                                delay={shelfIdx * 80}
                            >
                                <div className="insight-shelf">
                                    <header className="insight-shelf-header">
                                        <p className="insight-shelf-label">
                                            {langKey === "en" ? "Sector" : "Secteur"}
                                        </p>
                                        <h3 className="insight-shelf-title">
                                            {section.label[langKey]}
                                        </h3>
                                        <p className="insight-shelf-blurb">
                                            {section.blurb[langKey]}
                                        </p>
                                    </header>

                                    <div className="insight-shelf-line" />

                                    {rows.map((row, rowIdx) => (
                                        <div
                                            className="insight-shelf-row"
                                            key={rowIdx}
                                        >
                                            {row.map((card, colIdx) => {
                                                if (card.type === "real") {
                                                    return (
                                                        <InsightCard
                                                            key={card.post._id}
                                                            post={card.post}
                                                            fallback={
                                                                t.cardExcerptFallback
                                                            }
                                                            delay={colIdx * 70}
                                                            readLabel={
                                                                t.readArticle
                                                            }
                                                            onOpen={() =>
                                                                setActivePost(
                                                                    card.post
                                                                )
                                                            }
                                                        />
                                                    );
                                                }

                                                // Placeholder
                                                return (
                                                    <PlaceholderCard
                                                        key={`placeholder-${section.id}-${rowIdx}-${colIdx}`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </RevealOnScroll>
                        );
                    })}

                    {posts.length === 0 && (
                        <p
                            style={{
                                textAlign: "center",
                                color: "#777",
                                marginTop: 40,
                            }}
                        >
                            {t.emptyState}
                        </p>
                    )}
                </div>
            </section>

            {/* MODAL */}
            {activePost && (
                <InsightModal
                    post={activePost}
                    onClose={() => setActivePost(null)}
                    closeLabel={t.close}
                />
            )}
        </main>
    );
}

/* ---------- SINGLE CARD ---------- */
function InsightCard({
                         post,
                         fallback,
                         delay = 0,
                         readLabel,
                         onOpen,
                     }: {
    post: InsightCardData;
    fallback: string;
    delay?: number;
    readLabel: string;
    onOpen: () => void;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                }
            },
            { threshold: 0.2 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const hasBody = Array.isArray(post.body) && post.body.length > 0;

    return (
        <div
            ref={ref}
            style={{
                transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms`,
            }}
        >
            <article
                className="insight-card"
                onClick={hasBody ? onOpen : undefined}
            >
                {post.cover?.asset?.url && (
                    <img
                        src={post.cover.asset.url}
                        alt={post.title}
                        className="insight-card-img"
                    />
                )}
                <h3>{post.title}</h3>
                <p>{post.excerpt || fallback}</p>

                {hasBody && (
                    <button
                        type="button"
                        className="insight-card-readmore"
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpen();
                        }}
                    >
                        {readLabel}
                    </button>
                )}
            </article>
        </div>
    );
}

/* ---------- PLACEHOLDER CARD ---------- */
function PlaceholderCard() {
    return (
        <article className="insight-card insight-card-placeholder">
            <h3 className="insight-placeholder-title">Coming soon</h3>
            <p className="insight-placeholder-text">
                More resources for this sector will appear here.
            </p>
        </article>
    );
}

/* ---------- MODAL (GLASS BLUR BACKGROUND) ---------- */
function InsightModal({
                          post,
                          onClose,
                          closeLabel,
                      }: {
    post: InsightCardData;
    onClose: () => void;
    closeLabel: string;
}) {
    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    const portableComponents = {
        types: {
            image: ({ value }: any) =>
                value?.asset?.url ? (
                    <img
                        src={value.asset.url}
                        alt={value.alt || ""}
                        className="insight-modal-image"
                    />
                ) : null,
        },
    };

    return (
        <div
            className="insight-modal-backdrop"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
        >
            <div className="insight-modal-panel">
                <header className="insight-modal-header">
                    <h2>{post.title}</h2>
                    <button
                        type="button"
                        className="insight-modal-close"
                        onClick={onClose}
                    >
                        {closeLabel}
                    </button>
                </header>

                <div className="insight-modal-body">
                    {Array.isArray(post.body) && post.body.length > 0 ? (
                        <PortableText
                            value={post.body}
                            components={portableComponents}
                        />
                    ) : (
                        <p>{post.excerpt}</p>
                    )}
                </div>
            </div>
        </div>
    );
}