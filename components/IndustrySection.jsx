"use client";

import Link from "next/link";

export default function IndustrySection() {
    const sectors = [
        {
            title: "Agribusiness",
            href: "/industries/agribusiness",
            summary: "Value chains from farm to export markets.",
        },
        {
            title: "Finance",
            href: "/industries/finance",
            summary: "Banks, fintechs, asset managers and impact investors.",
        },
        {
            title: "Real Estate and Infrastructure",
            href: "/industries/real-estate",
            summary: "Urban development, logistics hubs and core infrastructure.",
        },
        {
            title: "Catering and Hospitality",
            href: "/industries/catering-hospitality",
            summary:
                "Hotels, restaurants and food-service operators across UK–Africa corridors.",
        },
        {
            title: "International Trade and Logistics",
            href: "/industries/international-trade",
            summary: "Trade corridors, ports and cross-border supply chains.",
        },
        {
            title: "Sports and Football Advisory",
            href: "/industries/football-advisory",
            summary: "Clubs, academies and investors in the football ecosystem.",
        },
        {
            title: "Coaching and Training",
            href: "/industries/coaching-training",
            summary:
                "Leadership development, coaching and professional training providers.",
        },
        {
            title: "AI Strategy",
            href: "/industries/ai-strategy",
            summary: "Applied AI, analytics and responsible data use.",
        },
        {
            title: "Mining",
            href: "/industries/mining",
            summary: "Natural resources and critical minerals projects.",
        },
    ];

    return (
        <section className="industry-section">
            <div className="industry-grid">
                {/* LEFT – copy + image */}
                <div className="industry-left">
                    <p className="industry-kicker">Sector focus</p>

                    <h2 className="industry-heading">
                        Where UK–Africa capital
                        <br />
                        and expertise are most active.
                    </h2>

                    <p className="industry-lead">
                        We advise organisations across sectors where trade, investment
                        and institutional collaboration are shaping the next decade of
                        growth.
                    </p>

                    <div className="industry-image-wrapper">
                        <img
                            src="/images/yamo.jpg"
                            alt="UK–Africa skyline"
                            className="industry-image"
                        />
                    </div>
                </div>

                {/* RIGHT – sector cards */}
                <div className="industry-right">
                    {sectors.map((sector) => (
                        <Link
                            key={sector.href}
                            href={sector.href}
                            className="sector-card"
                        >
                            <div className="sector-card-header">
                                <span>{sector.title}</span>
                                <span className="sector-arrow">→</span>
                            </div>

                            <p className="sector-summary">{sector.summary}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                /* ===========================
                   DESKTOP / DEFAULT LAYOUT
                   =========================== */
                .industry-section {
                    width: 100%;
                    padding: 120px 0 140px;
                    background: #f6f7fb;
                    display: flex;
                    justify-content: center;
                }

                .industry-grid {
                    width: 100%;
                    max-width: 1400px;
                    padding: 0 40px;
                    display: grid;
                    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.6fr);
                    column-gap: 72px;
                    row-gap: 32px;
                    align-items: flex-start;
                }

                .industry-left {
                    max-width: 640px;
                }

                .industry-kicker {
                    font-family: var(--font-inter);
                    font-size: 14px;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    color: rgba(15, 15, 15, 0.55);
                    margin: 0 0 18px;
                }

                .industry-heading {
                    font-family: var(--font-playfair), serif;
                    font-size: 52px;
                    line-height: 1.15;
                    font-weight: 500;
                    margin: 0 0 24px;
                    color: #111111;
                }

                .industry-lead {
                    font-family: var(--font-inter), sans-serif;
                    font-size: 18px;
                    line-height: 1.7;
                    color: #444;
                    max-width: 620px;
                    margin: 0 0 34px;
                }

                .industry-image-wrapper {
                    margin-top: 24px;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.16);
                    max-width: 560px;
                }

                .industry-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .industry-right {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 22px 26px;
                }

                .sector-card {
                    display: block;
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 20px 22px;
                    text-decoration: none;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
                    transition: transform 0.28s ease, box-shadow 0.28s ease,
                    border-color 0.28s ease;
                }

                .sector-card-header {
                    font-family: var(--font-playfair), serif;
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 6px;
                    color: #16161d;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .sector-arrow {
                    font-family: var(--font-inter);
                    font-size: 18px;
                    color: #1e90ff;
                    margin-left: 10px;
                }

                .sector-summary {
                    font-family: var(--font-inter), sans-serif;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #555;
                    margin: 0;
                }

                .sector-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.15);
                    border-color: #1e90ff;
                }

                /* ===========================
                   TABLET
                   =========================== */
                @media (max-width: 1024px) {
                    .industry-section {
                        padding: 90px 0 110px;
                    }

                    .industry-grid {
                        grid-template-columns: 1fr;
                        row-gap: 48px;
                        padding: 0 28px;
                    }

                    .industry-right {
                        grid-template-columns: 1fr;
                    }

                    .industry-heading {
                        font-size: 40px;
                    }
                }

                /* ===========================
                   MOBILE
                   =========================== */
                @media (max-width: 768px) {
                    .industry-section {
                        padding: 64px 0 82px;
                    }

                    .industry-grid {
                        padding: 0 20px;
                        row-gap: 36px;
                    }

                    .industry-kicker {
                        font-size: 11px;
                        letter-spacing: 0.22em;
                    }

                    .industry-heading {
                        font-size: 30px;
                        line-height: 1.25;
                    }

                    .industry-lead {
                        font-size: 15px;
                        margin-bottom: 22px;
                    }

                    .industry-image-wrapper {
                        margin-top: 18px;
                        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
                    }

                    .industry-right {
                        grid-template-columns: 1fr;
                        gap: 18px;
                    }

                    .sector-card {
                        padding: 18px 18px;
                    }

                    .sector-card-header {
                        font-size: 16px;
                    }

                    .sector-summary {
                        font-size: 14px;
                    }
                }
            `}</style>
        </section>
    );
}