// app/services/page.jsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

/* ---------- COPY (EN + FR) ---------- */
const TEXT = {
    en: {
        heroTitle: "Services",
        heroSubtitle:
            "Advisory built for clarity and steady execution—bridging the UK and African markets with practical structures, respectful relationships, and measurable progress.",
        approachHeading: "Our Approach",
        approachBody:
            "We start with context: the people, constraints, and levers that actually move a project forward. Then we co-design a simple operating rhythm—decisions, reviews, and clear ownership—so momentum is maintained. We avoid noise, document agreements, and build trusted partnerships that last. Progress becomes consistent, not frantic.",
        approachList: [
            "Clear roles & decisions (no ambiguity).",
            "Lightweight governance and useful reporting.",
            "Respect for culture, timing, and stakeholder priorities.",
            "Measurable milestones—small wins compounding over time.",
        ],
        gridTitle: "What We Deliver",
        gridIntro:
            "Each service mirrors an industry context we know well. Hover to explore how we work—no clicks required. When ready, book a session to map your next step with us.",
        ctaLabel: "Learn More",
    },
    fr: {
        heroTitle: "Services",
        heroSubtitle:
            "Un conseil conçu pour la clarté et une exécution régulière — en reliant les marchés du Royaume-Uni et de l’Afrique grâce à des structures pratiques, des relations respectueuses et des progrès mesurables.",
        approachHeading: "Notre approche",
        approachBody:
            "Nous commençons par le contexte : les personnes, les contraintes et les leviers qui font réellement avancer un projet. Ensuite, nous co-construisons un rythme de travail simple — décisions, revues et responsabilités claires — afin de garder l’élan. Nous évitons le bruit, documentons les accords et bâtissons des relations de confiance durables. Les progrès deviennent réguliers, plutôt que précipités.",
        approachList: [
            "Rôles et décisions clairs (aucune ambiguïté).",
            "Gouvernance légère et reporting utile.",
            "Respect de la culture, du timing et des priorités des parties prenantes.",
            "Jalons mesurables — de petits gains qui se cumulent dans le temps.",
        ],
        gridTitle: "Ce que nous apportons",
        gridIntro:
            "Chaque service reflète un contexte sectoriel que nous connaissons bien. Survolez pour découvrir notre manière de travailler. Quand vous êtes prêt, réservez une session pour cartographier votre prochaine étape avec nous.",
        ctaLabel: "En savoir plus",
    },
};

/* ---------- SERVICES PER LANGUAGE (same slugs, translated copy) ---------- */
const SERVICES_COPY = {
    en: [
        {
            slug: "agribusiness",
            title: "Agribusiness Advisory",
            short:
                "Value-chain mapping, export readiness, and market access across UK–Africa routes.",
            long:
                "We align producers, processors, and distributors; design cold-chain/logistics flows; and structure partnerships with reliable off-takers.",
        },
        {
            slug: "real-estate",
            title: "Real Estate & Infrastructure",
            short:
                "Site selection, capital structuring, and delivery governance for resilient assets.",
            long:
                "From feasibility to execution, we support JV models, risk allocation, and stakeholder engagement to keep programmes bankable.",
        },
        {
            slug: "finance",
            title: "Financial Advisory",
            short: "Capital strategy, investor relations, and transaction preparation.",
            long:
                "We help prepare datarooms, refine investment theses, and map suitable sources of capital across institutional and private channels.",
        },
        {
            slug: "catering-hospitality",
            title: "Catering & Hospitality",
            short:
                "Concept design, service standards, and unit economics for premium experiences.",
            long:
                "Menu engineering, staffing models, and supplier programmes that balance guest delight with margin discipline.",
        },
        {
            slug: "international-trade",
            title: "International Trade & Export",
            short:
                "Market entry, compliance pathways, and cross-border partnership building.",
            long:
                "We clarify tariff and non-tariff barriers, secure distributors, and sequence pilots to de-risk expansion.",
        },
        {
            slug: "football-advisory",
            title: "Football Advisory",
            short: "Talent pathways, club relations, and governance alignment.",
            long:
                "We design development frameworks, stakeholder protocols, and transparent reporting that protect athlete welfare and value.",
        },
        {
            slug: "coaching-training",
            title: "Coaching & Leadership",
            short: "Practical leadership development and team performance systems.",
            long:
                "Clarity frameworks, feedback cultures, and cadence rituals that sustain execution without burnout.",
        },
        {
            slug: "ai-strategy",
            title: "AI Strategy",
            short:
                "Pragmatic automation and decision support—grounded in real workflows.",
            long:
                "Opportunity scans, vendor selection, and adoption roadmaps that respect data governance and change management.",
        },
        {
            slug: "mining",
            title: "Mining & Natural Resources",
            short: "Licensing pathways, ESG alignment, and community engagement.",
            long:
                "Stakeholder maps, risk registers, and partnerships that keep projects viable and respectful of local context.",
        },
    ],
    fr: [
        {
            slug: "agribusiness",
            title: "Conseil en agribusiness",
            short:
                "Cartographie des chaînes de valeur, préparation à l’export et accès aux marchés sur les corridors Royaume-Uni–Afrique.",
            long:
                "Nous alignons producteurs, transformateurs et distributeurs ; concevons les flux logistiques/chaîne du froid ; et structurons des partenariats avec des acheteurs fiables.",
        },
        {
            slug: "real-estate",
            title: "Immobilier & Infrastructures",
            short:
                "Sélection des sites, structuration du capital et gouvernance de livraison pour des actifs résilients.",
            long:
                "De la faisabilité à l’exécution, nous accompagnons les JV, l’allocation des risques et l’engagement des parties prenantes pour maintenir la bancabilité des programmes.",
        },
        {
            slug: "finance",
            title: "Conseil financier",
            short:
                "Stratégie de capital, relations investisseurs et préparation des transactions.",
            long:
                "Nous aidons à préparer les datarooms, affiner les thèses d’investissement et cartographier les bonnes sources de capital, institutionnelles ou privées.",
        },
        {
            slug: "catering-hospitality",
            title: "Hôtellerie & Restauration",
            short:
                "Conception de concepts, standards de service et économie unitaire pour des expériences premium.",
            long:
                "Ingénierie de menu, modèles d’effectifs et programmes fournisseurs qui concilient satisfaction client et discipline de marge.",
        },
        {
            slug: "international-trade",
            title: "Commerce international & export",
            short:
                "Entrée sur de nouveaux marchés, conformité et construction de partenariats transfrontaliers.",
            long:
                "Nous clarifions les barrières tarifaires et non tarifaires, sécurisons des distributeurs et séquençons les pilotes pour réduire le risque d’expansion.",
        },
        {
            slug: "football-advisory",
            title: "Conseil en football",
            short:
                "Parcours de talents, relations entre clubs et alignement de la gouvernance.",
            long:
                "Nous concevons des cadres de développement, des protocoles avec les parties prenantes et un reporting transparent qui protège la valeur et le bien-être des joueurs.",
        },
        {
            slug: "coaching-training",
            title: "Coaching & leadership",
            short:
                "Développement de leadership pragmatique et systèmes de performance d’équipe.",
            long:
                "Cadres de clarté, culture du feedback et rituels de cadence qui soutiennent l’exécution sans épuisement.",
        },
        {
            slug: "ai-strategy",
            title: "Stratégie d’IA",
            short:
                "Automatisation pragmatique et aide à la décision, ancrées dans les flux de travail réels.",
            long:
                "Identification des opportunités, sélection des fournisseurs et feuilles de route d’adoption respectueuses de la gouvernance des données et de la conduite du changement.",
        },
        {
            slug: "mining",
            title: "Mines & ressources naturelles",
            short:
                "Parcours d’obtention de licences, alignement ESG et engagement communautaire.",
            long:
                "Cartographies des parties prenantes, registres de risques et partenariats qui maintiennent la viabilité des projets tout en respectant le contexte local.",
        },
    ],
};

/* ---------- tiny helper for scroll-in animation ---------- */
function RevealOnScroll({ children, delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                } else {
                    // allow repeat on scroll
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

/* ---------- PAGE ---------- */
export default function ServicesPage() {
    const { language } = useLanguage();
    const t = TEXT[language] ?? TEXT.en;
    const services = SERVICES_COPY[language] ?? SERVICES_COPY.en;

    return (
        <main style={{ fontFamily: "var(--font-inter)", color: "#111" }}>
            {/* ---------- HERO (Header sits over this video) ---------- */}
            <section className="services-hero">
                <video
                    src="/videos/office.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="services-hero-video"
                />

                <div className="services-hero-content">
                    <RevealOnScroll>
                        <h1 className="services-hero-title">{t.heroTitle}</h1>
                    </RevealOnScroll>
                    <RevealOnScroll delay={120}>
                        <p className="services-hero-subtitle">{t.heroSubtitle}</p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ---------- SECTION 2: Approach (text left, video right) ---------- */}
            <section className="services-approach">
                <RevealOnScroll>
                    <div className="services-approach-text">
                        <h2 className="services-approach-heading">
                            {t.approachHeading}
                        </h2>
                        <p className="services-approach-body">{t.approachBody}</p>
                        <ul className="services-approach-list">
                            {t.approachList.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                    <div className="services-approach-video">
                        <video
                            src="/videos/customer.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="services-approach-video-el"
                        />
                    </div>
                </RevealOnScroll>
            </section>

            {/* ---------- SECTION 3: Services grid (9 cards) ---------- */}
            <section className="services-grid-section">
                <div className="services-grid-inner">
                    <RevealOnScroll>
                        <h2 className="services-grid-title">{t.gridTitle}</h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={80}>
                        <p className="services-grid-intro">{t.gridIntro}</p>
                    </RevealOnScroll>

                    <div className="services-grid">
                        {services.map((s, i) => (
                            <RevealOnScroll key={s.slug} delay={i * 60}>
                                <ServiceCard service={s} ctaLabel={t.ctaLabel} />
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Scoped CSS for this page ---------- */}
            <style jsx>{`
                /* HERO */
                .services-hero {
                    position: relative;
                    height: 88vh;
                    overflow: hidden;
                }

                .services-hero-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(60%);
                }

                .services-hero-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    text-align: center;
                    text-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
                    padding: 0 24px;
                    width: min(90vw, 900px);
                }

                .services-hero-title {
                    font-family: var(--font-playfair);
                    font-size: 64px;
                    margin: 0;
                }

                .services-hero-subtitle {
                    font-size: 20px;
                    max-width: 740px;
                    opacity: 0.95;
                    margin: 12px auto 0;
                    line-height: 1.6;
                }

                /* APPROACH */
                .services-approach {
                    max-width: 1200px;
                    margin: 120px auto;
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 56px;
                    align-items: center;
                    padding: 0 24px;
                }

                .services-approach-heading {
                    font-family: var(--font-playfair);
                    font-size: 38px;
                    margin: 0 0 16px;
                }

                .services-approach-body {
                    font-size: 18px;
                    color: #444;
                    line-height: 1.75;
                    margin: 0;
                }

                .services-approach-list {
                    margin-top: 18px;
                    display: grid;
                    gap: 10px;
                    font-size: 16px;
                    color: #333;
                    padding: 0;
                }

                .services-approach-video {
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
                }

                .services-approach-video-el {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    filter: brightness(78%);
                }

                /* GRID SECTION */
                .services-grid-section {
                    background: #fafafa;
                    padding: 100px 0 140px;
                }

                .services-grid-inner {
                    max-width: 1240px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .services-grid-title {
                    font-family: var(--font-playfair);
                    font-size: 36px;
                    margin: 0 0 24px;
                    text-align: center;
                }

                .services-grid-intro {
                    text-align: center;
                    max-width: 820px;
                    margin: 0 auto 48px;
                    font-size: 18px;
                    color: #444;
                    line-height: 1.7;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 26px;
                }

                /* RESPONSIVE */
                @media (max-width: 1100px) {
                    .services-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 900px) {
                    .services-hero-title {
                        font-size: 40px;
                    }

                    .services-hero-subtitle {
                        font-size: 17px;
                        line-height: 1.6;
                    }

                    .services-approach {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        margin: 90px auto 100px;
                    }

                    .services-approach-heading {
                        font-size: 32px;
                    }

                    .services-grid-section {
                        padding: 80px 0 110px;
                    }
                }

                @media (max-width: 720px) {
                    .services-hero {
                        height: 70vh;
                    }

                    .services-hero-title {
                        font-size: 32px;
                    }

                    .services-hero-subtitle {
                        font-size: 15px;
                        margin-top: 10px;
                    }

                    .services-approach {
                        margin: 70px auto 90px;
                    }

                    .services-approach-body {
                        font-size: 15px;
                    }

                    .services-approach-list {
                        font-size: 14px;
                    }

                    .services-grid {
                        grid-template-columns: 1fr;
                    }

                    .services-grid-title {
                        font-size: 30px;
                        margin-bottom: 18px;
                    }

                    .services-grid-intro {
                        font-size: 16px;
                        margin-bottom: 36px;
                    }
                }
            `}</style>
        </main>
    );
}

/* ---------- card component ---------- */
function ServiceCard({ service, ctaLabel }) {
    const cardStyle = {
        background: "#ffffff",
        borderRadius: 18,
        padding: "26px 26px 22px",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        transition: "transform .35s ease, box-shadow .35s ease, border-color .35s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
    };

    const titleStyle = {
        fontFamily: "var(--font-playfair)",
        fontSize: 22,
        margin: "2px 0 8px",
        color: "#0A0A0A",
    };

    const shortStyle = {
        fontSize: 15.5,
        lineHeight: 1.6,
        color: "#444",
        marginBottom: 10,
    };

    const moreWrapStyle = {
        maxHeight: 0,
        overflow: "hidden",
        transition: "max-height .4s ease, opacity .35s ease, transform .35s ease",
        opacity: 0,
        transform: "translateY(6px)",
    };

    const btnWrapStyle = {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 16,
        opacity: 0,
        transform: "translateY(10px)",
        transition: "opacity .35s ease, transform .35s ease",
    };

    const wrapRef = useRef(null);
    const moreRef = useRef(null);
    const btnRef = useRef(null);

    function onEnter() {
        const el = wrapRef.current;
        const more = moreRef.current;
        const btn = btnRef.current;
        if (el) {
            el.style.transform = "translateY(-6px)";
            el.style.boxShadow = "0 18px 42px rgba(30,144,255,0.18)";
            el.style.borderColor = "#1E90FF";
        }
        if (more) {
            more.style.maxHeight = "160px";
            more.style.opacity = "1";
            more.style.transform = "translateY(0)";
        }
        if (btn) {
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        }
    }

    function onLeave() {
        const el = wrapRef.current;
        const more = moreRef.current;
        const btn = btnRef.current;
        if (el) {
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
            el.style.borderColor = "rgba(0,0,0,0.06)";
        }
        if (more) {
            more.style.maxHeight = "0px";
            more.style.opacity = "0";
            more.style.transform = "translateY(6px)";
        }
        if (btn) {
            btn.style.opacity = "0";
            btn.style.transform = "translateY(10px)";
        }
    }

    return (
        <div
            ref={wrapRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            style={cardStyle}
            role="group"
            aria-label={service.title}
        >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div
                    aria-hidden
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        marginTop: 8,
                        background: "#1E90FF",
                        boxShadow: "0 0 0 6px rgba(30,144,255,0.15)",
                    }}
                />
                <div style={{ flex: 1 }}>
                    <h3 style={titleStyle}>{service.title}</h3>
                    <p style={shortStyle}>{service.short}</p>
                    <div ref={moreRef} style={moreWrapStyle}>
                        <p style={{ fontSize: 15, color: "#333", lineHeight: 1.6 }}>
                            {service.long}
                        </p>
                    </div>
                </div>
            </div>

            <div ref={btnRef} style={btnWrapStyle}>
                <Link
                    href={`/industries/${service.slug}`}
                    style={{ textDecoration: "none" }}
                >
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">{ctaLabel}</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}