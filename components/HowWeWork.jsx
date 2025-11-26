// components/HowWeWork.jsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

const copy = {
    en: {
        kicker: "HOW WE WORK",
        headingLine1: "Practical, partner-led advisory",
        headingLine2: "for UK–Africa decisions.",
        body: "Most of our work sits between the UK and African markets. We help clients get clear on their mandate, options and constraints before money and reputation are committed. The process is simple, repeatable and built for busy teams.",
        steps: [
            {
                title: "01 · Discovery & context",
                summary:
                    "We start by listening – mandate, markets, stakeholders, timing and non-negotiables.",
                detail:
                    "Typical outputs: a short context note, stakeholder map and a prioritised list of questions to validate before committing resources.",
            },
            {
                title: "02 · Options & structuring",
                summary:
                    "We frame a small set of realistic options rather than a long report.",
                detail:
                    "Each option sets out benefits, risks, required partners and a simple business / deal logic, so you can compare like-for-like and choose a path with confidence.",
            },
            {
                title: "03 · Execution & partner support",
                summary:
                    "Once a direction is chosen, we stay close to the critical conversations.",
                detail:
                    "Support can include meeting prep, documentation, workstream governance and ongoing sounding-board calls as markets, partners or assumptions evolve.",
            },
        ],
    },
    fr: {
        kicker: "NOTRE FAÇON DE TRAVAILLER",
        headingLine1: "Un conseil pratique, porté par les partenaires",
        headingLine2: "au service des décisions Royaume-Uni–Afrique.",
        body: "La majorité de nos missions se situe à l’interface entre le Royaume-Uni et les marchés africains. Nous aidons les clients à clarifier leur mandat, leurs options et leurs contraintes avant d’engager des ressources financières ou leur réputation. Le processus reste simple, reproductible et adapté aux équipes déjà très sollicitées.",
        steps: [
            {
                title: "01 · Diagnostic & contexte",
                summary:
                    "Nous commençons par l’écoute : mandat, marchés, parties prenantes, calendrier et points non négociables.",
                detail:
                    "Livrables types : note de contexte courte, cartographie des parties prenantes et liste priorisée de points à valider avant d’engager des ressources.",
            },
            {
                title: "02 · Options & structuration",
                summary:
                    "Nous construisons un nombre limité d’options réalistes plutôt qu’un rapport volumineux.",
                detail:
                    "Chaque option précise les bénéfices, les risques, les partenaires nécessaires et une logique économique / de deal simple pour comparer sereinement et choisir une trajectoire.",
            },
            {
                title: "03 · Exécution & accompagnement",
                summary:
                    "Une fois la direction choisie, nous restons proches des échanges clés.",
                detail:
                    "L’accompagnement peut inclure la préparation des réunions, la documentation, la gouvernance des chantiers et un rôle de sparring-partner continu à mesure que les marchés, les partenaires ou les hypothèses évoluent.",
            },
        ],
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: 0.12 * i,
            ease: "easeOut",
        },
    }),
};

export default function HowWeWork() {
    const { language } = useLanguage();
    const t = copy[language] || copy.en;

    return (
        <section className="how-section">
            <div className="how-inner">
                {/* TOP: text left, image right */}
                <div className="how-top">
                    <header className="how-header">
                        <p className="how-kicker">{t.kicker}</p>
                        <h2 className="how-heading">
                            {t.headingLine1}
                            <br />
                            {t.headingLine2}
                        </h2>
                        <p className="how-body">{t.body}</p>
                    </header>

                    <div className="how-image-wrap" aria-hidden="true">
                        <img
                            src="/images/london.jpg"
                            alt="London skyline"
                            className="how-image"
                        />
                    </div>
                </div>

                {/* BOTTOM: stacked cards */}
                <div className="how-card-list">
                    {t.steps.map((step, index) => (
                        <motion.article
                            key={step.title}
                            className="how-card"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                        >
                            <div className="how-card-accent" aria-hidden="true" />
                            <div className="how-card-content">
                                <h3 className="how-card-title">{step.title}</h3>
                                <p className="how-card-summary">{step.summary}</p>
                                <p className="how-card-detail">{step.detail}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .how-section {
                    width: 100%;
                    background: #f6f7fb;
                    display: flex;
                    justify-content: center;
                    padding: 96px 0 110px;
                }

                .how-inner {
                    width: 92%;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* top row */
                .how-top {
                    display: grid;
                    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
                    gap: 56px;
                    align-items: center;
                    margin-bottom: 40px;
                }

                .how-header {
                    max-width: 720px;
                }

                .how-kicker {
                    font-family: var(--font-inter);
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    font-size: 13px;
                    color: #9b9ca5;
                    margin: 0 0 18px;
                }

                .how-heading {
                    font-family: var(--font-playfair), serif;
                    font-size: 40px;
                    line-height: 1.18;
                    margin: 0 0 22px;
                    color: #111111;
                }

                .how-body {
                    font-family: var(--font-inter);
                    font-size: 16px;
                    line-height: 1.7;
                    color: #4a4b53;
                    max-width: 540px;
                    margin: 0;
                }

                .how-image-wrap {
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 18px 48px rgba(15, 23, 42, 0.22);
                    min-height: 260px;
                }

                .how-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transform: scale(1.03);
                }

                /* cards */
                .how-card-list {
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }

                .how-card {
                    position: relative;
                    display: flex;
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 0;
                    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.09);
                    border: 1px solid rgba(15, 23, 42, 0.05);
                    overflow: hidden;
                }

                .how-card-accent {
                    width: 6px;
                    background: linear-gradient(
                            180deg,
                            #1e90ff,
                            #60a5fa,
                            #a5b4fc
                    );
                }

                .how-card-content {
                    padding: 22px 26px 20px;
                    flex: 1;
                }

                .how-card-title {
                    font-family: var(--font-playfair), serif;
                    font-size: 18px;
                    margin: 0 0 8px;
                    color: #111827;
                }

                .how-card-summary {
                    font-family: var(--font-inter);
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0 0 6px;
                    color: #4b5563;
                }

                .how-card-detail {
                    font-family: var(--font-inter);
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                    color: #6b7280;
                }

                @media (max-width: 960px) {
                    .how-section {
                        padding: 80px 0 90px;
                    }

                    .how-top {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }

                    .how-heading {
                        font-size: 32px;
                    }
                }

                @media (max-width: 600px) {
                    .how-section {
                        padding: 64px 0 80px;
                    }

                    .how-heading {
                        font-size: 26px;
                        line-height: 1.25;
                    }

                    .how-body {
                        font-size: 14px;
                        max-width: 100%;
                    }

                    .how-image-wrap {
                        min-height: 210px;
                        border-radius: 18px;
                    }

                    .how-card-content {
                        padding: 18px 18px 16px;
                    }

                    .how-card {
                        border-radius: 18px;
                    }

                    .how-card-title {
                        font-size: 16px;
                    }

                    .how-card-summary,
                    .how-card-detail {
                        font-size: 14px;
                    }
                }
            `}</style>
        </section>
    );
}