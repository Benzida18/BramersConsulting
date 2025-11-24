"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function Mission() {
    const { language } = useLanguage();

    // ===== TEXT COPY (EN + FR) =====
    const copy = {
        en: {
            kicker: "Work between the UK and Africa",
            heading: (
                <>
                    Practical support for projects between the UK, & West Africa.
                </>
            ),
            body:
                "Bramers is a UK based consulting practice with roots in Côte d’Ivoire. " +
                "We help people and businesses who want to move products, services or " +
                "investment between the UK and African markets, starting with Côte d’Ivoire.",
            services: [
                {
                    title: "Market Understanding & Entry",
                    blurb:
                        "We help you understand how the UK and Ivorian markets work before you commit time and money.",
                    detail:
                        "Bramers works with you to clarify your idea, look at basic market demand, competition, pricing and key rules. The goal is simple: give you a clearer view so you can decide if, when and how to enter a market in a realistic way.",
                },
                {
                    title: "Trade, Products & Logistics",
                    blurb:
                        "Support with the practical steps of moving products between the UK and African markets.",
                    detail:
                        "We help you think through suppliers, routes, costs and basic paperwork for shipping between the UK and countries like Côte d’Ivoire. Bramers does not replace specialist legal, tax or customs advice, but we help you ask the right questions and prepare better conversations with those experts.",
                },
                {
                    title: "Business Support & Partnerships",
                    blurb:
                        "Helping you structure your project and speak the language of both the UK and African sides.",
                    detail:
                        "We work with you to organise your project, prepare clear summaries for banks, partners or clients, and identify the type of local professionals you may need. Bramers cannot promise funding or approvals, but we help you present your case more clearly and build more credible relationships on both sides.",
                },
            ],
        },

        fr: {
            kicker: "Travail Entre Le Royaume-Uni Et l'Afrique",
            heading: (
                <>
                    Un soutien pratique pour les projets entre le Royaume-Uni et l'Afrique de l'Ouest.
                </>
            ),
            body:
                "Bramers est un cabinet de conseil basé au Royaume-Uni, avec des racines en Côte d'Ivoire. " +
                "Nous aidons les personnes et les entreprises qui souhaitent déplacer des produits, des services " +
                "ou des investissements entre le Royaume-Uni et les marchés africains, en commençant par la Côte d'Ivoire.",
            services: [
                {
                    title: "Compréhension Du Marché & Entrée",
                    blurb:
                        "Nous vous aidons à comprendre comment fonctionnent les marchés britannique et ivoirien avant d'y consacrer du temps et de l'argent.",
                    detail:
                        "Bramers travaille avec vous pour clarifier votre idée, analyser la demande de base, la concurrence, les niveaux de prix et les principales règles. L'objectif est simple : vous donner une vision plus claire afin que vous puissiez décider si, quand et comment entrer sur un marché de manière réaliste.",
                },
                {
                    title: "Commerce, Produits & Logistique",
                    blurb:
                        "Un accompagnement sur les étapes pratiques pour faire circuler des produits entre le Royaume-Uni et les marchés africains.",
                    detail:
                        "Nous vous aidons à réfléchir aux fournisseurs, aux routes, aux coûts et aux démarches administratives de base pour l'expédition entre le Royaume-Uni et des pays comme la Côte d'Ivoire. Bramers ne remplace pas les conseils juridiques, fiscaux ou douaniers spécialisés, mais nous vous aidons à poser les bonnes questions et à mieux préparer vos échanges avec ces experts.",
                },
                {
                    title: "Appui aux Entreprises & Partenariats",
                    blurb:
                        "Nous vous aidons à structurer votre projet et à parler le langage des deux parties, britannique et africaine.",
                    detail:
                        "Nous travaillons avec vous pour organiser votre projet, préparer des synthèses claires pour les banques, partenaires ou clients, et identifier les types de professionnels locaux dont vous pourriez avoir besoin. Bramers ne peut pas promettre de financements ni d'autorisations, mais nous vous aidons à présenter votre dossier plus clairement et à créer des relations plus crédibles des deux côtés.",
                },
            ],
        },
    };

    const t = copy[language] ?? copy.en;

    return (
        <section className="mission-section">
            <div className="mission-grid">
                {/* LEFT – copy */}
                <div className="mission-copy">
                    <p className="mission-kicker">
                        {t.kicker}
                    </p>

                    <h2 className="mission-heading">
                        {t.heading}
                    </h2>

                    <p className="mission-body">
                        {t.body}
                    </p>
                </div>

                {/* RIGHT – cards with hover dropdown */}
                <div className="mission-services">
                    {t.services.map((item) => (
                        <div key={item.title} className="service-card">
                            <div className="service-main">
                                <h3 className="service-title">{item.title}</h3>
                                <p className="service-blurb">{item.blurb}</p>
                            </div>
                            <div className="service-dropdown">
                                <p className="service-detail">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                /* ===========================
                   LAYOUT – DESKTOP DEFAULT
                   =========================== */
                .mission-section {
                    width: 100%;
                    background: #ffffff;
                    display: flex;
                    justify-content: center;
                    padding: 110px 0 120px;
                }

                .mission-grid {
                    width: 100%;
                    max-width: 1320px;
                    padding: 0 40px;
                    display: grid;
                    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
                    gap: 72px;
                }

                .mission-copy {
                    max-width: 600px;
                }

                .mission-kicker {
                    font-family: var(--font-inter);
                    font-size: 13px;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: #7a7a7a;
                    margin: 0 0 18px;
                }

                .mission-heading {
                    font-family: var(--font-playfair), serif;
                    font-size: 52px;
                    line-height: 1.12;
                    font-weight: 500;
                    margin: 0 0 26px;
                    color: #0a0a0a;
                }

                .mission-body {
                    font-family: var(--font-inter);
                    font-size: 17px;
                    line-height: 1.7;
                    color: #3b3b3b;
                    max-width: 540px;
                    margin: 16px 0 0;
                }

                .mission-services {
                    display: flex;
                    flex-direction: column;
                    gap: 22px;
                }

                /* ===========================
                   SERVICE CARDS (same look)
                   =========================== */
                .service-card {
                    background: #ffffff;
                    border-radius: 22px;
                    padding: 24px 30px;
                    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.04);
                    border: 1px solid rgba(10, 10, 10, 0.05);
                    transition: transform 0.26s ease, box-shadow 0.26s ease,
                    border-color 0.26s ease, background 0.26s ease;
                    overflow: hidden;
                    position: relative;
                }

                .service-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 22px;
                    background: linear-gradient(
                            135deg,
                            rgba(30, 144, 255, 0.14),
                            transparent 45%,
                            transparent 100%
                    );
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                }

                .service-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 26px 60px rgba(15, 23, 42, 0.14);
                    border-color: rgba(30, 144, 255, 0.4);
                    background: #ffffff;
                }

                .service-card:hover::before {
                    opacity: 1;
                }

                .service-main {
                    position: relative;
                    z-index: 1;
                }

                .service-title {
                    font-family: var(--font-inter), system-ui, -apple-system,
                    "Segoe UI", sans-serif;
                    font-size: 20px;
                    font-weight: 600;
                    letter-spacing: 0.01em;
                    color: #111111;
                    margin: 0 0 8px;
                }

                .service-blurb {
                    font-family: var(--font-inter), system-ui, -apple-system,
                    "Segoe UI", sans-serif;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #4b4b4b;
                    margin: 0;
                }

                .service-dropdown {
                    margin-top: 10px;
                    max-height: 0;
                    opacity: 0;
                    transform: translateY(6px);
                    transition: max-height 0.32s ease, opacity 0.26s ease,
                    transform 0.26s ease;
                    position: relative;
                    z-index: 1;
                }

                .service-card:hover .service-dropdown {
                    max-height: 120px;
                    opacity: 1;
                    transform: translateY(0);
                }

                .service-detail {
                    font-family: var(--font-inter), system-ui, -apple-system,
                    "Segoe UI", sans-serif;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #5c5c5c;
                    margin: 0;
                }

                /* ===========================
                   TABLET
                   =========================== */
                @media (max-width: 1024px) {
                    .mission-section {
                        padding: 80px 0 90px;
                    }

                    .mission-grid {
                        grid-template-columns: 1fr;
                        gap: 44px;
                    }
                }

                /* ===========================
                   MOBILE
                   =========================== */
                @media (max-width: 768px) {
                    .mission-section {
                        padding: 64px 0 72px;
                    }

                    .mission-grid {
                        padding: 0 20px;
                        gap: 40px;
                    }

                    .mission-kicker {
                        font-size: 11px;
                        letter-spacing: 0.2em;
                    }

                    .mission-heading {
                        font-size: 32px;
                        line-height: 1.25;
                    }

                    .mission-body {
                        font-size: 15px;
                        line-height: 1.7;
                        max-width: none;
                    }

                    .service-card {
                        padding: 20px 18px;
                    }

                    .service-title {
                        font-size: 17px;
                    }

                    .service-blurb {
                        font-size: 14px;
                    }

                    .service-detail {
                        font-size: 13px;
                    }
                }
            `}</style>
        </section>
    );
}