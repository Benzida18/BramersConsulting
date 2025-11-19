"use client";

export default function MobileIndustrySection() {
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
        <section className="mobile-industry-section">
            <div className="mobile-industry-shell">
                {/* TOP: copy + image */}
                <div className="mobile-industry-intro">
                    <p className="mobile-industry-label">Sector focus</p>

                    <h2 className="mobile-industry-heading">
                        Where UK–Africa capital
                        <br />
                        and expertise are most active.
                    </h2>

                    <p className="mobile-industry-text">
                        We advise organisations across sectors where trade, investment
                        and institutional collaboration are shaping the next decade
                        of growth.
                    </p>

                    <div className="mobile-industry-image-wrap">
                        <img
                            src="/images/yamo.jpg"
                            alt="UK–Africa skyline"
                            className="mobile-industry-image"
                        />
                    </div>
                </div>

                {/* BOTTOM: sector cards */}
                <div className="mobile-industry-cards">
                    {sectors.map((sector) => (
                        <a
                            key={sector.href}
                            href={sector.href}
                            className="mobile-industry-card"
                        >
                            <div className="mobile-industry-card-header">
                                <span className="mobile-industry-card-title">
                                    {sector.title}
                                </span>
                                <span className="mobile-industry-card-arrow">→</span>
                            </div>
                            <p className="mobile-industry-card-summary">
                                {sector.summary}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}