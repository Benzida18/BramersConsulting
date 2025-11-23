"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function Mission() {
    const { language } = useLanguage();

    // ===== TEXT COPY (EN + FR) =====
    const copy = {
        en: {
            kicker: "Cross-regional advisory",
            heading: (
                <>
                    Strategy, transactions and
                    <br />
                    execution between the UK
                    <br />
                    &amp; Africa.
                </>
            ),
            body:
                "Bramers Consulting supports corporates, investors and institutions " +
                "navigating multi-market growth, with a focus on anglophone and " +
                "francophone Africa.",
            services: [
                {
                    title: "Market Entry & Expansion",
                    blurb:
                        "From feasibility through execution, we help organisations structure their entry into UK and African markets with clarity and precision.",
                    detail:
                        "We support leadership teams on market sizing, route-to-market, partner selection and regulatory positioning, so expansion decisions are made with confidence.",
                },
                {
                    title: "Deals, Capital & Partnerships",
                    blurb:
                        "Support for transactions, JV structures and strategic alliances with regulators, lenders and institutional partners.",
                    detail:
                        "Our team advises on deal structuring, investor conversations and cross-border capital flows, ensuring incentives are aligned across all parties.",
                },
                {
                    title: "Operational Excellence & Governance",
                    blurb:
                        "We work with leadership teams to strengthen governance, operating models and cross-border ways of working.",
                    detail:
                        "We help institutions modernise processes, clarify decision rights and embed governance that stands up to international scrutiny.",
                },
            ],
        },

        fr: {
            kicker: "Conseil transrégional",
            heading: (
                <>
                    Stratégie, transactions et
                    <br />
                    exécution entre le Royaume-Uni
                    <br />
                    et l&apos;Afrique.
                </>
            ),
            body:
                "Bramers Consulting accompagne les entreprises, investisseurs et institutions " +
                "dans leur croissance multi-marchés, avec un focus sur l’Afrique anglophone " +
                "et francophone.",
            services: [
                {
                    title: "Entrée sur le marché & expansion",
                    blurb:
                        "De l’étude de faisabilité à l’exécution, nous aidons les organisations à structurer leur entrée sur les marchés britanniques et africains avec clarté et rigueur.",
                    detail:
                        "Nous accompagnons les équipes dirigeantes sur la taille de marché, les routes d’accès, le choix de partenaires et le positionnement réglementaire afin que les décisions d’expansion soient prises en toute confiance.",
                },
                {
                    title: "Transactions, capitaux & partenariats",
                    blurb:
                        "Accompagnement sur les transactions, les coentreprises et les alliances stratégiques avec les régulateurs, prêteurs et partenaires institutionnels.",
                    detail:
                        "Notre équipe conseille sur la structuration des deals, les échanges avec les investisseurs et les flux de capitaux transfrontaliers, en veillant à l’alignement des intérêts de chaque partie.",
                },
                {
                    title: "Excellence opérationnelle & gouvernance",
                    blurb:
                        "Nous travaillons avec les directions pour renforcer la gouvernance, les modèles opérationnels et les modes de collaboration transfrontaliers.",
                    detail:
                        "Nous aidons les institutions à moderniser leurs processus, clarifier les droits de décision et ancrer une gouvernance conforme aux attentes internationales.",
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