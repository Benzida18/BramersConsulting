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
            "Bramers helps owners, managers and teams plan, structure and move work forward between the UK and African markets. We focus on clear conversations, simple documents and steady follow-through.",
        approachHeading: "How we work",
        approachBody:
            "Most engagements start with a straightforward conversation: where you are today, who is involved, and which decision or project feels stuck. We then suggest a short, practical plan – usually a few pages rather than a long report – and stay close while you test it. The aim is not to promise everything, but to move one step at a time with less noise and more clarity.",
        approachList: [
            "Begin with a short diagnostic call and a clear follow-up note.",
            "Agree who does what and by when, including Bramers’ role.",
            "Stay available between sessions for quick questions and course-corrections.",
        ],
        gridTitle: "Service areas",
        gridIntro:
            "Most assignments sit in one of these areas. Each project is different, but the pattern is similar: understand your context, shape a realistic plan, and support you while you deliver.",
        ctaLabel: "Learn more",
    },
    fr: {
        heroTitle: "Services",
        heroSubtitle:
            "Bramers aide les dirigeants, les propriétaires et leurs équipes à planifier, structurer et faire avancer leurs projets entre le Royaume-Uni et les marchés africains. Nous privilégions les échanges clairs, des documents simples et un accompagnement régulier.",
        approachHeading: "Notre manière de travailler",
        approachBody:
            "La plupart des missions commencent par une conversation directe : votre situation actuelle, les personnes impliquées et la décision ou le projet qui bloque. Nous proposons ensuite un plan court et concret – généralement quelques pages plutôt qu’un long rapport – et restons présents pendant les premières étapes. L’objectif n’est pas de tout promettre, mais d’avancer pas à pas avec moins de bruit et plus de clarté.",
        approachList: [
            "Démarrer par un échange de diagnostic et une note de synthèse claire.",
            "S’accorder précisément sur qui fait quoi et pour quand, y compris le rôle de Bramers.",
            "Rester disponible entre les séances pour les questions rapides et les ajustements.",
        ],
        gridTitle: "Domaines d’intervention",
        gridIntro:
            "La plupart des missions entrent dans l’un de ces domaines. Chaque contexte est particulier, mais la logique reste la même : comprendre votre réalité, définir un plan réaliste et vous accompagner dans l’exécution.",
        ctaLabel: "En savoir plus",
    },
};

/* ---------- SERVICES PER LANGUAGE (same slugs, translated copy) ---------- */
const SERVICES_COPY = {
    en: [
        {
            slug: "agribusiness",
            title: "Agribusiness advisory",
            short:
                "Support for cooperatives, processors and traders working with regional or overseas buyers.",
            long:
                "Typical work includes mapping the value chain, clarifying roles between farmers, aggregators and off-takers, checking basic unit economics and preparing simple export or supply agreements.",
        },
        {
            slug: "real-estate",
            title: "Real estate & infrastructure",
            short:
                "Help for families, developers and partners to organise land and building projects.",
            long:
                "We work on feasibility notes, stakeholder maps, simple JV structures and delivery rhythms so that decisions, approvals and payments move in a sensible order.",
        },
        {
            slug: "finance",
            title: "Financial support & preparation",
            short: "Preparing for conversations with banks, investors and partners.",
            long:
                "We help you explain your story in plain language, organise key numbers, prepare pitch decks or data packs, and think through what different funders will expect to see.",
        },
        {
            slug: "catering-hospitality",
            title: "Catering & hospitality",
            short:
                "Support for restaurants, cafés and hospitality projects with concept and operations.",
            long:
                "Assignments often cover offer design, simple unit economics, staffing patterns and supplier relationships, so that the guest experience and the numbers work together.",
        },
        {
            slug: "international-trade",
            title: "International trade & logistics",
            short:
                "Practical help for businesses moving goods between the UK and African markets.",
            long:
                "We look at routes, partners, basic compliance steps and paperwork, then agree a simple sequence for pilots so you can learn without taking unnecessary risk.",
        },
        {
            slug: "football-advisory",
            title: "Football & sports advisory",
            short:
                "Support around talent pathways, club relationships and key decisions.",
            long:
                "Work can include mapping options for young players, reviewing trial or scholarship opportunities, and helping families or clubs prepare for discussions and agreements.",
        },
        {
            slug: "coaching-training",
            title: "Coaching & leadership",
            short: "One-to-one and small-group sessions for leaders and teams.",
            long:
                "We focus on clarity of role, communication habits, meeting structure and simple routines that keep projects moving without burning people out.",
        },
        {
            slug: "ai-strategy",
            title: "Lightweight AI & workflow support",
            short: "Small, practical uses of automation and data in everyday work.",
            long:
                "We review current processes and tools, identify a few high-value use cases (often starting with spreadsheets or no-code tools), and outline safe first steps rather than large, risky roll-outs.",
        },
        {
            slug: "mining",
            title: "Mining & natural resources",
            short: "Early-stage support on documentation, stakeholders and cooperation.",
            long:
                "Typical work includes high-level stakeholder mapping, basic ESG and community considerations, and preparing clear notes for partners, advisers or authorities.",
        },
    ],
    fr: [
        {
            slug: "agribusiness",
            title: "Conseil en agribusiness",
            short:
                "Accompagnement des coopératives, transformateurs et négociants travaillant avec des acheteurs régionaux ou internationaux.",
            long:
                "Nous aidons à cartographier la chaîne de valeur, clarifier les rôles entre producteurs, intermédiaires et acheteurs, vérifier les bases économiques et préparer des accords d’approvisionnement ou d’export simples.",
        },
        {
            slug: "real-estate",
            title: "Immobilier & infrastructures",
            short:
                "Soutien aux familles, promoteurs et partenaires pour organiser des projets fonciers et immobiliers.",
            long:
                "Nous travaillons sur des notes de faisabilité, des cartes des parties prenantes, des structures de partenariat simples et un rythme de suivi pour que décisions, validations et paiements s’enchaînent dans le bon ordre.",
        },
        {
            slug: "finance",
            title: "Préparation financière",
            short:
                "Préparer les échanges avec banques, investisseurs et partenaires financiers.",
            long:
                "Nous aidons à raconter votre histoire de façon claire, à organiser les chiffres clés, à préparer présentations et dossiers, et à réfléchir à ce que différents financeurs attendront de voir.",
        },
        {
            slug: "catering-hospitality",
            title: "Hôtellerie & restauration",
            short:
                "Soutien aux restaurants, cafés et projets hôteliers sur le concept et l’exploitation.",
            long:
                "Les missions portent souvent sur l’offre, l’économie unitaire de base, l’organisation des équipes et la relation fournisseurs, afin d’aligner expérience client et viabilité économique.",
        },
        {
            slug: "international-trade",
            title: "Commerce international & logistique",
            short:
                "Aide pratique pour les entreprises qui déplacent des biens entre le Royaume-Uni et l’Afrique.",
            long:
                "Nous examinons les routes possibles, les partenaires, les étapes de conformité et la documentation, puis convenons d’une séquence de pilotes pour apprendre sans prendre de risque excessif.",
        },
        {
            slug: "football-advisory",
            title: "Conseil en football & sport",
            short:
                "Accompagnement sur les parcours de talents, les relations avec les clubs et les décisions clés.",
            long:
                "Le travail peut inclure la cartographie des options pour les jeunes joueurs, l’examen d’essais ou de bourses, et la préparation des familles ou des clubs aux discussions et aux accords.",
        },
        {
            slug: "coaching-training",
            title: "Coaching & leadership",
            short:
                "Séances individuelles et en petits groupes pour dirigeants et équipes.",
            long:
                "Nous travaillons sur la clarté des rôles, les habitudes de communication, la structure des réunions et des routines simples qui permettent d’avancer sans épuiser les personnes.",
        },
        {
            slug: "ai-strategy",
            title: "IA légère & organisation du travail",
            short:
                "Petits usages concrets de l’automatisation et des données dans le quotidien.",
            long:
                "Nous analysons vos processus et outils actuels, identifions quelques cas d’usage à forte valeur – souvent à partir de tableurs ou d’outils no-code – et proposons des premiers pas sécurisés plutôt que de grands déploiements risqués.",
        },
        {
            slug: "mining",
            title: "Mines & ressources naturelles",
            short:
                "Soutien en amont sur la documentation, les parties prenantes et la coopération.",
            long:
                "Les missions incluent souvent une cartographie des acteurs, les premiers éléments ESG et communautaires, et la préparation de notes claires pour les partenaires, conseillers ou autorités.",
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
        border: "1px solid rgba(0, 0, 0, 0.06)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
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