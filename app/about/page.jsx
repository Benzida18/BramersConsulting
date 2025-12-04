// app/about/page.jsx
"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";

/** TEXT COPY (EN + FR) */
const copy = {
    en: {
        heroTitle: "About Bramers",
        heroSubtitle: (
            <>
                Independent advisory practice based in the United Kingdom, bridging
                markets and enabling institutional cooperation across the UK and Africa.
            </>
        ),
        founderTitle: "Why Bramers?",
        founderBody: (
            <>
                Bramers was created to make it easier for people in the United Kingdom
                and West Africa to work together in a clear, organised way. The core
                purpose is simple: to act as a bridge between businesses in Francophone
                markets and the UK, so that opportunities on both sides are easier to
                see, explain and execute.
                <br />
                <br />
                On one side, Bramers helps companies from French speaking West African
                markets understand how to present themselves, structure deals and build
                trust with UK partners. On the other side, Bramers supports UK based
                firms that want to enter or expand in West Africa by giving them plain
                language insight into local markets, stakeholders and ways of working.
                The aim is to reduce misunderstanding, not to over promise.
                <br />
                <br />
                The firm was founded by Bouraima Zida who has got a international trade and maritime management educational background.
                After years of working in the Banking, Finance, Media, Data Analysis, Hospitality, Real Estate sectors between the
                United Kingdom and West Africa. Bouraima Zida felt the need to create Bramers Consulting to serve as a bridge between companies
                that operate in both regions.
                <br />
                <br />
                Today, Bramers focuses on practical questions of market entry, cross
                border partnerships, leadership and organisational design. The practice
                stays deliberately lean so the work remains hands on, discreet and close
                to decision makers. Rather than chasing visibility, Bramers concentrates
                on a small number of relationships where clarity, trust and continuity
                matter more than noise.
            </>
        ),
        whatTitle: "What Bramers Do",
        whatBody: (
            <>
                We help leaders simplify choices, structure initiatives and build
                momentum in a way that fits their reality. The work typically spans
                three areas that reinforce each other.
            </>
        ),
        cards: [
            {
                title: "Market Strategy and Positioning",
                desc: "Define where to play and how to compete. We map demand drivers, entry paths and competitive edges, then align internal capabilities to the chosen direction.",
                bullets: [
                    "Opportunity scanning and prioritisation",
                    "Route to market and sequencing",
                    "Operating model and governance setup",
                ],
            },
            {
                title: "Institutional and Regulatory Alignment",
                desc: "Translate intent into workable frameworks. We align private objectives with policy constraints to reduce friction and protect momentum.",
                bullets: [
                    "Regulatory navigation and compliance setup",
                    "Stakeholder mapping and engagement rhythm",
                    "Risk registers and escalation paths",
                ],
            },
            {
                title: "International Partnerships",
                desc: "Establish trusted cross border relationships. We focus on credibility, clarity of value exchange and durable collaboration mechanisms.",
                bullets: [
                    "Partner profiling and introductions",
                    "Term sheet scaffolding",
                    "Delivery PMO and performance reviews",
                ],
            },
        ],
        quote: (
            <>
                “Bramers exists to help people move forward with clarity at the right
                pace, in the right direction.”
            </>
        ),
    },
    fr: {
        heroTitle: "À propos de Bramers",
        heroSubtitle: (
            <>
                Cabinet de conseil indépendant basé au Royaume Uni, reliant les marchés
                et facilitant la coopération institutionnelle entre le Royaume Uni et
                l’Afrique.
            </>
        ),
        founderTitle: "Pourquoi Bramers existe",
        founderBody: (
            <>
                Bramers a été créé pour faciliter le travail en commun entre le Royaume Uni
                et l’Afrique de l’Ouest, de manière claire et organisée. Sa vocation
                principale est simple : servir de pont entre les entreprises des marchés
                francophones et celles du Royaume Uni, afin que les opportunités des deux
                côtés soient plus faciles à voir, à expliquer et à concrétiser.
                <br />
                <br />
                D’un côté, Bramers aide les entreprises issues de marchés ouest africains
                francophones à savoir se présenter, structurer leurs accords et construire
                la confiance avec des partenaires au Royaume Uni. De l’autre côté, Bramers
                accompagne les sociétés basées au Royaume Uni qui souhaitent entrer ou se
                développer en Afrique de l’Ouest en leur apportant une lecture simple des
                marchés locaux, des parties prenantes et des façons de travailler. L’objectif
                est de réduire les incompréhensions, pas de tout promettre.
                <br />
                <br />
                Le cabinet a été fondé par Bouraima Zida, qui a une formation en commerce
                international et gestion maritime. Après plusieurs années d’expérience
                dans les secteurs de la banque, de la finance, des médias, de l’analyse
                de données, de l’hôtellerie restauration et de l’immobilier entre le
                Royaume Uni et l’Afrique de l’Ouest, il a ressenti le besoin de créer
                Bramers Consulting pour servir de passerelle entre les entreprises qui
                opèrent dans ces deux régions.
                <br />
                <br />
                Aujourd’hui, Bramers se concentre sur des questions pratiques
                d’entrée de marché, de partenariats transfrontaliers, de leadership et
                de conception organisationnelle. La structure reste volontairement
                légère pour que le travail reste concret, discret et proche des
                décideurs. Plutôt que de rechercher la visibilité, Bramers se
                concentre sur un nombre limité de relations où la clarté, la
                confiance et la continuité comptent plus que le bruit.
            </>
        ),
        whatTitle: "Ce que fait Bramers",
        whatBody: (
            <>
                Nous aidons les dirigeants à clarifier leurs choix, structurer leurs
                initiatives et installer une dynamique adaptée à leur réalité. Le
                travail se concentre généralement sur trois axes qui se renforcent
                mutuellement.
            </>
        ),
        cards: [
            {
                title: "Stratégie de marché et positionnement",
                desc: "Définir où se positionner et comment se différencier. Nous analysons les moteurs de la demande, les voies d’entrée et les avantages compétitifs, puis alignons les capacités internes sur la trajectoire choisie.",
                bullets: [
                    "Veille d’opportunités et priorisation",
                    "Séquençage et routes d’entrée sur le marché",
                    "Mise en place du modèle opérationnel et de la gouvernance",
                ],
            },
            {
                title: "Alignement institutionnel et réglementaire",
                desc: "Transformer l’intention en cadres opérationnels solides. Nous alignons les objectifs privés avec les contraintes réglementaires afin de réduire les frictions et protéger l’élan du projet.",
                bullets: [
                    "Navigation réglementaire et mise en conformité",
                    "Cartographie des parties prenantes et rythme d’engagement",
                    "Registres de risques et voies d’escalade",
                ],
            },
            {
                title: "Partenariats internationaux",
                desc: "Établir des relations transfrontalières de confiance. Nous mettons l’accent sur la crédibilité, la clarté de la valeur échangée et des mécanismes de collaboration durables.",
                bullets: [
                    "Profilage des partenaires et mises en relation",
                    "Pré structuration de term sheets",
                    "PMO de mise en œuvre et revues de performance",
                ],
            },
        ],
        quote: (
            <>
                « Bramers existe pour aider les personnes à avancer avec clarté, au bon
                rythme et dans la bonne direction. »
            </>
        ),
    },
};

/** Reveal-on-scroll hook */
function useRevealOnce(selector) {
    const played = useRef(new WeakSet());

    useEffect(() => {
        const els = Array.from(document.querySelectorAll(selector));
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    const el = e.target;
                    if (e.isIntersecting) {
                        el.classList.add("is-visible");
                        if (!played.current.has(el)) {
                            el.classList.add("has-played"); // animation runs once
                            played.current.add(el);
                        }
                    } else {
                        // Hide when passed, but do NOT remove has-played (no replay)
                        el.classList.remove("is-visible");
                    }
                });
            },
            { threshold: 0.25 }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [selector]);
}

export default function AboutPage() {
    const { language } = useLanguage();
    const t = copy[language] || copy.en;

    // Reveal groups
    useRevealOnce("[data-reveal='fade-up']");
    useRevealOnce("[data-reveal='slide-left']");
    useRevealOnce("[data-reveal='slide-right']");
    useRevealOnce("[data-reveal='cards']");

    return (
        <main style={{ fontFamily: "var(--font-inter)", color: "#111" }}>
            {/* ===== HERO (video with centered copy) ===== */}
            <section
                style={{ position: "relative", height: "100vh", overflow: "hidden" }}
            >
                <video
                    src="/videos/about.mp4"
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
                    }}
                />
                {/* subtle gradient so white type pops */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.1) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        textAlign: "center",
                        color: "white",
                        padding: "0 24px",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "64px",
                            lineHeight: 1.06,
                            margin: "0 0 14px",
                        }}
                    >
                        {t.heroTitle}
                    </h1>
                    <p
                        style={{
                            fontSize: "20px",
                            opacity: 0.92,
                            maxWidth: 760,
                            margin: "0 auto",
                        }}
                    >
                        {t.heroSubtitle}
                    </p>
                </div>
            </section>

            {/* ===== SECTION 1: Founder Story (video LEFT, text RIGHT) ===== */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: "140px auto 120px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 56,
                    padding: "0 24px",
                }}
            >
                {/* Video left */}
                <div
                    data-reveal="slide-right"
                    className="reveal"
                    style={{
                        borderRadius: 18,
                        overflow: "hidden",
                        boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
                    }}
                >
                    <video
                        src="/videos/dream.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                            objectFit: "cover",
                            filter: "brightness(80%)",
                        }}
                    />
                </div>

                {/* Text right */}
                <div data-reveal="slide-left" className="reveal">
                    <h2
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: 38,
                            margin: "6px 0 16px",
                        }}
                    >
                        {t.founderTitle}
                    </h2>
                    <p
                        style={{
                            fontSize: 18,
                            lineHeight: 1.75,
                            color: "#444",
                        }}
                    >
                        {t.founderBody}
                    </p>
                </div>
            </section>

            {/* ===== SECTION 2: “What Bramers Do” ===== */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: "0 auto 140px",
                    padding: "0 24px",
                }}
            >
                <div
                    data-reveal="fade-up"
                    className="reveal"
                    style={{ textAlign: "center", marginBottom: 26 }}
                >
                    <h2
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: 38,
                            margin: 0,
                        }}
                    >
                        {t.whatTitle}
                    </h2>
                    <p
                        style={{
                            fontSize: 18,
                            color: "#555",
                            maxWidth: 860,
                            margin: "12px auto 0",
                            lineHeight: 1.75,
                        }}
                    >
                        {t.whatBody}
                    </p>
                </div>

                {/* Premium cards with subtle blue gradient */}
                <div
                    data-reveal="cards"
                    className="reveal cards-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 28,
                        marginTop: 32,
                    }}
                >
                    {t.cards.map((card, i) => (
                        <div key={i} className="card">
                            <h3
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontSize: 22,
                                    margin: "2px 0 10px",
                                }}
                            >
                                {card.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 15.5,
                                    color: "#1f2933",
                                    lineHeight: 1.66,
                                    marginBottom: 14,
                                }}
                            >
                                {card.desc}
                            </p>
                            <ul
                                style={{
                                    paddingLeft: 18,
                                    margin: 0,
                                    color: "#111827",
                                    lineHeight: 1.6,
                                }}
                            >
                                {card.bullets.map((b, j) => (
                                    <li
                                        key={j}
                                        style={{
                                            marginBottom: 6,
                                            listStyle: "disc",
                                        }}
                                    >
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== SECTION 3: Image + short purpose line ===== */}
            <section
                style={{
                    maxWidth: 1100,
                    margin: "0 auto 160px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 56,
                    padding: "0 24px",
                    alignItems: "center",
                }}
            >
                <div data-reveal="slide-right" className="reveal">
                    <img
                        src="/images/coast.jpg"
                        alt="Coast"
                        style={{
                            width: "100%",
                            borderRadius: 18,
                            objectFit: "cover",
                            boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
                        }}
                    />
                </div>
                <div data-reveal="slide-left" className="reveal">
                    <p
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: 30,
                            lineHeight: 1.35,
                        }}
                    >
                        {t.quote}
                    </p>
                </div>
            </section>

            {/* ===== Animations & Card styling ===== */}
            <style jsx>{`
                .reveal {
                    opacity: 0;
                    transform: translateY(18px);
                    transition: opacity 600ms ease, transform 600ms ease;
                    will-change: opacity, transform;
                }

                /* first-time entry animations */
                .reveal[data-reveal='fade-up'].is-visible:not(.has-played) {
                    opacity: 1;
                    transform: translateY(0);
                }
                .reveal[data-reveal='slide-left'].is-visible:not(.has-played) {
                    opacity: 1;
                    transform: translateX(0);
                    animation: slideLeftOnce 650ms ease forwards;
                }
                .reveal[data-reveal='slide-right'].is-visible:not(.has-played) {
                    opacity: 1;
                    transform: translateX(0);
                    animation: slideRightOnce 650ms ease forwards;
                }

                /* after it has played once, simply show/hide without replaying keyframes */
                .reveal.has-played.is-visible {
                    opacity: 1;
                    transform: none;
                }
                .reveal.has-played:not(.is-visible) {
                    opacity: 0;
                }

                @keyframes slideLeftOnce {
                    from {
                        opacity: 0;
                        transform: translateX(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideRightOnce {
                    from {
                        opacity: 0;
                        transform: translateX(-24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                /* Gradient cards */
                .cards-grid .card {
                    position: relative;
                    background:
                            radial-gradient(
                                    circle at top left,
                                    rgba(30, 144, 255, 0.18),
                                    transparent 55%
                            ),
                            #ffffff;
                    border-radius: 18px;
                    padding: 26px 28px;
                    border: 1px solid rgba(148, 163, 184, 0.5);
                    box-shadow: 0 14px 40px rgba(15, 23, 42, 0.12);
                    transition:
                            transform 250ms ease,
                            box-shadow 250ms ease,
                            border-color 250ms ease,
                            background 250ms ease;
                    backdrop-filter: blur(4px);
                }

                .cards-grid .card:hover {
                    transform: translateY(-6px);
                    border-color: #1e90ff;
                    box-shadow: 0 20px 60px rgba(30, 144, 255, 0.25);
                    background:
                            radial-gradient(
                                    circle at top left,
                                    rgba(30, 144, 255, 0.26),
                                    transparent 60%
                            ),
                            #ffffff;
                }
            `}</style>
        </main>
    );
}