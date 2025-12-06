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
            "Bramers helps owners, managers and teams plan, structure and move work forward between the UK and African markets. We focus on clear conversations, simple documents and steady follow-through, across nine main service areas.",
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
            "Most assignments sit in one of these nine areas. Each project is different, but the pattern is similar: understand your context, shape a realistic plan, and support you while you deliver.",
        ctaLabel: "Learn more",
    },
    fr: {
        heroTitle: "Services",
        heroSubtitle:
            "Bramers aide les dirigeants, propriétaires et équipes à planifier, structurer et faire avancer leurs projets entre le Royaume-Uni et les marchés africains. Nous privilégions les échanges clairs, des documents simples et un accompagnement régulier, autour de neuf grands domaines d’intervention.",
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
            "La plupart des missions entrent dans l’un de ces neuf domaines. Chaque contexte est particulier, mais la logique reste la même : comprendre votre réalité, définir un plan réaliste et vous accompagner dans l’exécution.",
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
                "Support for farmers, cooperatives, traders and small processors connecting local production to UK and African demand.",
            long:
                "Typical work includes mapping the value chain, clarifying roles between producers, intermediaries and buyers, checking simple unit economics and preparing basic supply or export agreements.",
        },
        {
            slug: "real-estate",
            title: "Real Estate & Infrastructure",
            short:
                "Early stage support for real estate and basic infrastructure projects linked to African and UK markets.",
            long:
                "We help clarify who the project is for, what problem it is trying to solve, and which assumptions on demand, pricing and costs really matter – then prepare simple notes and decks to share with partners, authorities or financiers.",
        },
        {
            slug: "finance",
            title: "Financial Services Advisory",
            short:
                "Advisory for smaller financial institutions and fintechs working between the UK and African markets.",
            long:
                "We work on client and segment clarity, basic product and pricing logic, partnership ideas and simple materials that help you explain your strategy to regulators, investors or development partners.",
        },
        {
            slug: "catering-hospitality",
            title: "Hospitality & Catering",
            short:
                "Support for hotels, restaurants and catering operators that draw on UK and African markets or cultures.",
            long:
                "Assignments often cover concept and positioning, target guest, menu and pricing, simple cost structure and early thinking around new locations or partnerships so that the guest experience and the numbers work together.",
        },
        {
            slug: "international-trade",
            title: "International Trade & Logistics",
            short:
                "Practical guidance on international trade and logistics between the UK and African markets.",
            long:
                "We help you make the journey of goods visible, think through roles, risks and incoterms at a high level, and prepare questions and documentation for freight forwarders, customs agents and banks so you arrive better prepared with specialists.",
        },
        {
            slug: "football-advisory",
            title: "Football Business Advisory",
            short:
                "Support for clubs, academies, investors and project owners in football business between Africa and Europe.",
            long:
                "Typical work includes thinking through player pathways and structures, clarifying expectations and responsibilities in agreements, and helping investors or project owners prepare for discussions with clubs, federations and other partners.",
        },
        {
            slug: "coaching-training",
            title: "Coaching & Leadership",
            short:
                "One to one and small group coaching for leaders and teams working across countries.",
            long:
                "We focus on very practical leadership questions: roles and decisions, communication and feedback, meeting structure and simple routines that keep people aligned between regions without burning them out.",
        },
        {
            slug: "ai-strategy",
            title: "AI Strategy & Workflow Support",
            short:
                "Helping organisations turn broad AI ideas into a few realistic, practical use cases.",
            long:
                "We clarify the problem you want to solve, review what data and tools you actually have, prioritise 2–3 use cases and help you prepare simple briefs so conversations with AI vendors or technical partners are more focused and useful.",
        },
        {
            slug: "mining",
            title: "Mining & Natural Resources",
            short:
                "Early stage support for mining and natural resources projects.",
            long:
                "Typical work includes structuring the project story, mapping key stakeholders, highlighting high-level ESG and community considerations, and preparing clear notes for technical, legal, financial advisers or authorities.",
        },
    ],
    fr: [
        {
            slug: "agribusiness",
            title: "Conseil En Agribusiness",
            short:
                "Accompagnement des agriculteurs, coopératives, commerçants et petits transformateurs reliant la production locale à la demande au Royaume-Uni et en Afrique.",
            long:
                "Nous aidons à cartographier la chaîne de valeur, clarifier les rôles entre producteurs, intermédiaires et acheteurs, vérifier quelques bases économiques et préparer des accords d’approvisionnement ou d’export simples.",
        },
        {
            slug: "real-estate",
            title: "Immobilier & Infrastructures",
            short:
                "Soutien en amont pour des projets immobiliers et d’infrastructures liés aux marchés africains et britanniques.",
            long:
                "Nous aidons à préciser à qui s’adresse le projet, quel problème il cherche à résoudre et quelles hypothèses de demande, de prix et de coûts sont vraiment critiques, puis à préparer des notes et présentations simples pour partenaires, autorités ou financeurs.",
        },
        {
            slug: "finance",
            title: "Conseil En Services Financiers",
            short:
                "Accompagnement d’institutions financières de moindre taille et de fintechs actives entre le Royaume-Uni et l’Afrique.",
            long:
                "Nous travaillons sur la clarté des clients et segments, les grandes lignes des offres et de la tarification, les pistes de partenariiat et des supports simples pour expliquer votre stratégie aux régulateurs, investisseurs ou bailleurs.",
        },
        {
            slug: "catering-hospitality",
            title: "Hôtellerie & Restauration",
            short:
                "Soutien aux hôtels, restaurants et acteurs de la restauration qui s’inspirent des marchés et cultures britannique et africaines.",
            long:
                "Les missions portent souvent sur le concept et le positionnement, la clientèle cible, le menu et les prix, quelques éléments de coûts et les premières réflexions sur de nouveaux sites ou partenariats afin d’aligner expérience client et viabilité économique.",
        },
        {
            slug: "international-trade",
            title: "Commerce International & Logistique",
            short:
                "Aide pratique pour le commerce et la logistique entre le Royaume-Uni et les marchés africains.",
            long:
                "Nous clarifions le parcours des marchandises, mettons en évidence les rôles, risques et incoterms à un niveau simple, et préparons avec vous questions et documentation pour transitaires, douanes et banques afin d’arriver mieux préparé auprès des spécialistes.",
        },
        {
            slug: "football-advisory",
            title: "Conseil En Foot-Business",
            short:
                "Accompagnement de clubs, académies, investisseurs et porteurs de projets dans le foot-business entre l’Afrique et l’Europe.",
            long:
                "Le travail inclut souvent la réflexion sur les structures et parcours joueurs, la clarification des attentes et responsabilités dans les accords, ainsi que la préparation des investisseurs ou porteurs de projets aux échanges avec clubs, fédérations et autres partenaires.",
        },
        {
            slug: "coaching-training",
            title: "Coaching & Leadership",
            short:
                "Séances individuelles et en petits groupes pour dirigeants et équipes qui travaillent entre plusieurs pays.",
            long:
                "Nous nous concentrons sur des questions très concrètes de leadership : rôles et décisions, communication et feedback, structure des réunions et routines simples pour garder tout le monde aligné entre les régions.",
        },
        {
            slug: "ai-strategy",
            title: "Stratégie IA & Organisation Du Travail",
            short:
                "Aider les organisations à transformer des idées générales sur l’IA en quelques cas d’usage concrets et réalistes.",
            long:
                "Nous clarifions le problème à résoudre, revoyons les données et outils réellement disponibles, priorisons 2 ou 3 cas d’usage et vous aidons à préparer des cahiers des charges simples pour des échanges plus efficaces avec les prestataires ou équipes techniques.",
        },
        {
            slug: "mining",
            title: "Mines & Ressources Naturelles",
            short:
                "Soutien en amont pour des projets miniers et de ressources naturelles.",
            long:
                "Les missions incluent souvent la structuration du récit du projet, une première cartographie des parties prenantes, quelques considérations ESG et communautaires et la préparation de notes claires pour les conseillers techniques, juridiques, financiers ou les autorités.",
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