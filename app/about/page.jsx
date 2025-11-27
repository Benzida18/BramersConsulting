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
                markets and enabling institutional cooperation across the UK & Africa.
            </>
        ),
        founderTitle: "Why Bramers Exists",
        founderBody: (
            <>
                Bramers grew out of a simple observation: many good ideas fail not
                because they lack ambition, but because they lack structure, trusted
                relationships and the right pace. Too often, organisations try to move
                quickly in complex environments without first aligning people, context
                and execution.
                <br />
                <br />
                The firm was founded by Bouraima Zida after years working between the
                United Kingdom and West Africa, across banking, catering and hospitality,
                and coaching and training. In each setting he saw the same pattern
                repeat: projects with strong intent but unclear ownership, fragmented
                communication and little documentation. Bramers was created to be a
                different kind of partner, one that takes the time to understand the
                ground reality, then helps leaders move forward in a measured, organised
                way.
                <br />
                <br />
                Today, Bramers works with clients on questions of market entry,
                cross border partnerships, leadership and organisational design. The
                practice is deliberately lean so that work stays hands on and discreet.
                Rather than chasing scale, Bramers focuses on a small number of
                relationships where clarity, trust and continuity matter more than
                visibility.
                <br />
                <br />
                Every mandate follows the same principle: define the goal in plain
                language, map the constraints, document the plan and build momentum
                step by step. That is the core of Bramers, a steady, quietly rigorous
                advisory practice for people who need to make decisions that will still
                make sense years from now.
            </>
        ),
        whatTitle: "What Bramers Do",
        whatBody: (
            <>
                We help leaders simplify choices, structure initiatives and set
                momentum for sustainable outcomes. The work typically spans three areas
                that reinforce each other.
            </>
        ),
        cards: [
            {
                title: "Market Strategy & Positioning",
                desc: "Define where to play and how to win. We map demand drivers, entry paths and competitive edges, then align internal capabilities to the chosen path.",
                bullets: [
                    "Opportunity scanning & prioritisation",
                    "Route to market & sequencing",
                    "Operating model & governance setup",
                ],
            },
            {
                title: "Institutional & Regulatory Alignment",
                desc: "Translate intent into workable frameworks. We align private objectives with policy constraints to reduce friction and protect momentum.",
                bullets: [
                    "Regulatory navigation & compliance setup",
                    "Stakeholder mapping & engagement cadence",
                    "Risk registers & escalation paths",
                ],
            },
            {
                title: "International Partnerships",
                desc: "Establish trusted cross border relationships. We focus on credibility, clarity of value exchange and durable collaboration mechanisms.",
                bullets: [
                    "Partner profiling & introductions",
                    "Term sheet scaffolding",
                    "Delivery PMO & performance reviews",
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
                Cabinet de conseil indépendant basé au Royaume-Uni, reliant les marchés
                et facilitant la coopération institutionnelle entre le Royaume-Uni et
                l’Afrique.
            </>
        ),
        founderTitle: "Pourquoi Bramers existe",
        founderBody: (
            <>
                Bramers est né d’un constat simple : beaucoup de bonnes idées échouent
                non pas par manque d’ambition, mais par manque de structure, de
                relations de confiance et de bon tempo. Trop souvent, les organisations
                veulent aller vite dans des environnements complexes sans avoir d’abord
                aligné les personnes, le contexte et l’exécution.
                <br />
                <br />
                Le cabinet a été fondé par Bouraima Zida après plusieurs années passées
                entre le Royaume-Uni et l’Afrique de l’Ouest, dans la banque,
                l’hôtellerie-restauration et des missions de coaching et de formation.
                Partout, il a constaté la même situation : des projets portés par une
                forte intention, mais avec une gouvernance floue, une communication
                fragmentée et très peu de documentation. Bramers a été créé pour offrir
                un autre type d’appui, un partenaire qui prend le temps de comprendre la
                réalité du terrain, puis aide les dirigeants à avancer de manière
                mesurée et organisée.
                <br />
                <br />
                Aujourd’hui, Bramers accompagne ses clients sur des sujets d’entrée de
                marché, de partenariats transfrontaliers, de leadership et de
                conception organisationnelle. La structure est volontairement légère
                afin de garder un travail pratique, proche des dossiers, et de préserver
                la discrétion attendue dans les contextes sensibles. Plutôt que de
                rechercher la taille, Bramers se concentre sur un nombre limité de
                relations où la clarté, la confiance et la continuité comptent plus que
                la visibilité.
                <br />
                <br />
                Chaque mandat suit le même principe : définir l’objectif avec des mots
                simples, cartographier les contraintes, documenter le plan et construire
                l’élan étape par étape. C’est l’ADN de Bramers, une pratique de conseil
                rigoureuse mais discrète, pour des décisions qui doivent encore avoir du
                sens dans plusieurs années.
            </>
        ),
        whatTitle: "Ce que fait Bramers",
        whatBody: (
            <>
                Nous aidons les dirigeants à clarifier leurs choix, structurer leurs
                initiatives et installer une dynamique durable. Le travail se concentre
                généralement sur trois axes qui se renforcent mutuellement.
            </>
        ),
        cards: [
            {
                title: "Stratégie de marché & positionnement",
                desc: "Définir où se positionner et comment gagner. Nous analysons les moteurs de la demande, les voies d’entrée et les avantages compétitifs, puis alignons les capacités internes sur la trajectoire choisie.",
                bullets: [
                    "Veille d’opportunités & priorisation",
                    "Séquençage & routes d’entrée sur le marché",
                    "Mise en place du modèle opérationnel & de la gouvernance",
                ],
            },
            {
                title: "Alignement institutionnel & réglementaire",
                desc: "Transformer l’intention en cadres opérationnels solides. Nous alignons les objectifs privés avec les contraintes réglementaires afin de réduire les frictions et protéger l’élan du projet.",
                bullets: [
                    "Navigation réglementaire & mise en conformité",
                    "Cartographie des parties prenantes & rythme d’engagement",
                    "Registres de risques & voies d’escalade",
                ],
            },
            {
                title: "Partenariats internationaux",
                desc: "Établir des relations transfrontalières de confiance. Nous mettons l’accent sur la crédibilité, la clarté de la valeur échangée et des mécanismes de collaboration durables.",
                bullets: [
                    "Profilage des partenaires & mises en relation",
                    "Pré structuration de term sheets",
                    "PMO de mise en œuvre & revues de performance",
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
            entries => {
                entries.forEach(e => {
                    const el = e.target;
                    if (e.isIntersecting) {
                        el.classList.add("is-visible");
                        if (!played.current.has(el)) {
                            el.classList.add("has-played");
                            played.current.add(el);
                        }
                    } else {
                        // Hide when passed, but do not remove has-played (no replay)
                        el.classList.remove("is-visible");
                    }
                });
            },
            { threshold: 0.25 }
        );

        els.forEach(el => io.observe(el));
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

                /* after it has played once, simply show or hide without replaying keyframes */
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
                    background: radial-gradient(
                            circle at top left,
                            rgba(30, 144, 255, 0.18),
                            transparent 55%
                    ),
                    #ffffff;
                    border-radius: 18px;
                    padding: 26px 28px;
                    border: 1px solid rgba(148, 163, 184, 0.5);
                    box-shadow: 0 14px 40px rgba(15, 23, 42, 0.12);
                    transition: transform 250ms ease, box-shadow 250ms ease,
                    border-color 250ms ease, background 250ms ease;
                    backdrop-filter: blur(4px);
                }

                .cards-grid .card:hover {
                    transform: translateY(-6px);
                    border-color: #1e90ff;
                    box-shadow: 0 20px 60px rgba(30, 144, 255, 0.25);
                    background: radial-gradient(
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