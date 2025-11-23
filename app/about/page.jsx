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
        founderTitle: "Founder’s Story",
        founderBody: (
            <>
                Bramers was founded by Bouraima Zida, an advisor who believes progress
                should be deliberate, context-aware, and built on trust. His work across
                the United Kingdom and West Africa shaped a practice that blends
                structured analysis with patient relationship-building — the kind that
                earns access, not just attention.
                <br />
                <br />
                Early in his career, Bouraima saw how promising initiatives stall when
                strategy ignores people and place. He also saw how modest, well-sequenced
                decisions compound into durable results. That discipline informs Bramers
                today: clarify the goal, align the stakeholders, and move at the right
                pace — no faster than trust allows, no slower than opportunity requires.
                <br />
                <br />
                Bouraima’s focus areas include business structuring, leadership
                development, market entry, and cross-border partnership building. He
                works quietly and thoroughly, favouring clear commitments over broad
                claims. Clients value the combination of steady communication, cultural
                fluency, and a bias for documentation — turning complex intentions into
                workable plans with owners, timelines, and accountability.
                <br />
                <br />
                Bramers remains intentionally lean. That choice keeps the work hands-on
                and responsive, and it preserves the discretion expected in sensitive
                contexts. When scale is required, Bouraima coordinates specialist partners
                under a single, simple principle: clarity first, then consistency, always
                with respect. The result is an advisory relationship that is measured,
                human, and built to last.
            </>
        ),
        whatTitle: "What Bramers Do",
        whatBody: (
            <>
                We help leaders simplify choices, structure initiatives, and set momentum
                for sustainable outcomes. The work typically spans three areas that
                reinforce each other.
            </>
        ),
        cards: [
            {
                title: "Market Strategy & Positioning",
                desc: "Define where to play and how to win. We map demand drivers, entry paths, and competitive edges — then align internal capabilities to the chosen path.",
                bullets: [
                    "Opportunity scanning & prioritisation",
                    "Route-to-market & sequencing",
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
                desc: "Establish trusted cross-border relationships. We focus on credibility, clarity of value exchange, and durable collaboration mechanisms.",
                bullets: [
                    "Partner profiling & introductions",
                    "Term-sheet scaffolding",
                    "Delivery PMO & performance reviews",
                ],
            },
        ],
        quote: (
            <>
                “Bramers exists to help people move forward with clarity — at the right
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
        founderTitle: "L’histoire du fondateur",
        founderBody: (
            <>
                Bramers a été fondé par Bouraima Zida, un conseiller qui est convaincu
                que le progrès doit être réfléchi, ancré dans le contexte et construit
                sur la confiance. Son travail entre le Royaume-Uni et l’Afrique de l’Ouest
                a façonné une pratique qui combine analyse structurée et relations
                patiemment cultivées — le type de travail qui ouvre des portes plutôt que
                de seulement attirer l’attention.
                <br />
                <br />
                Très tôt, Bouraima a observé comment des initiatives prometteuses se
                bloquent lorsque la stratégie ignore les personnes et les réalités
                locales. Il a également vu comment des décisions modestes mais bien
                séquencées s’additionnent pour produire des résultats durables. Cette
                discipline inspire Bramers aujourd’hui : clarifier l’objectif, aligner
                les parties prenantes et avancer au bon rythme — jamais plus vite que ce
                que la confiance permet, jamais plus lentement que ce que l’opportunité
                exige.
                <br />
                <br />
                Ses domaines d’intervention incluent la structuration d’entreprise, le
                développement du leadership, l’entrée sur de nouveaux marchés et la
                construction de partenariats transfrontaliers. Il travaille de manière
                discrète et rigoureuse, privilégiant des engagements clairs à de grandes
                promesses. Les clients apprécient la combinaison de communication
                régulière, de sensibilité culturelle et de rigueur dans la
                documentation — transformer des intentions complexes en plans concrets,
                avec responsables, échéances et redevabilité.
                <br />
                <br />
                Bramers reste volontairement une structure légère. Ce choix permet un
                accompagnement pratique et réactif, tout en préservant la discrétion
                attendue dans les contextes sensibles. Lorsque la taille du projet le
                nécessite, Bouraima coordonne des partenaires spécialisés autour d’un
                principe simple : d’abord la clarté, puis la cohérence, toujours avec
                respect. Le résultat est une relation de conseil mesurée, humaine et
                construite pour durer.
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
                    "Pré-structuration de term-sheets",
                    "PMO de mise en œuvre & revues de performance",
                ],
            },
        ],
        quote: (
            <>
                « Bramers existe pour aider les personnes à avancer avec clarté — au bon
                rythme et dans la bonne direction. »
            </>
        ),
    },
};

/** Reveal-on-scroll hook (unchanged) */
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

            {/* ===== SECTION 2: “What Bramers Does” ===== */}
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

                {/* Premium cards */}
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
                                    color: "#4a4a4a",
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
                                    color: "#333",
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

                .cards-grid .card {
                    background: #fff;
                    border-radius: 18px;
                    padding: 26px 28px;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
                    transition: transform 250ms ease, box-shadow 250ms ease,
                    border-color 250ms ease;
                }
                .cards-grid .card:hover {
                    transform: translateY(-6px);
                    border-color: #1e90ff;
                    box-shadow: 0 18px 44px rgba(30, 144, 255, 0.16);
                }
            `}</style>
        </main>
    );
}