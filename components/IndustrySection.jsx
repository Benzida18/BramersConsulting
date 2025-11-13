"use client";

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
            summary: "Hotels, restaurants and food-service operators across UK–Africa corridors.",
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
            summary: "Leadership development, coaching and professional training providers.",
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
        <section
            style={{
                width: "100%",
                padding: "120px 0 140px",
                background: "#F6F7FB",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1400px",
                    padding: "0 40px",
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1.6fr)",
                    columnGap: "72px",
                    rowGap: "32px",
                    alignItems: "flex-start",
                }}
            >
                {/* LEFT – copy + image */}
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "14px",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            color: "rgba(15,15,15,0.55)",
                            margin: "0 0 18px",
                        }}
                    >
                        Sector focus
                    </p>

                    <h2
                        style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "52px",
                            lineHeight: 1.15,
                            fontWeight: 500,
                            margin: "0 0 24px",
                            color: "#111111",
                        }}
                    >
                        Where UK–Africa capital
                        <br />
                        and expertise are most active.
                    </h2>

                    <p
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "18px",
                            lineHeight: 1.7,
                            color: "#444",
                            maxWidth: "620px",
                            marginBottom: "34px",
                        }}
                    >
                        We advise organisations across sectors where trade, investment
                        and institutional collaboration are shaping the next decade
                        of growth.
                    </p>

                    {/* Yamo image slot */}
                    <div
                        style={{
                            marginTop: "24px",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
                            maxWidth: "560px",
                        }}
                    >
                        <img
                            src="/images/yamo.jpg"
                            alt="UK–Africa skyline"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                </div>

                {/* RIGHT – sector cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "22px 26px",
                    }}
                >
                    {sectors.map((sector) => (
                        <a
                            key={sector.href}
                            href={sector.href}
                            style={{
                                display: "block",
                                background: "#ffffff",
                                borderRadius: "16px",
                                padding: "20px 22px",
                                textDecoration: "none",
                                border: "1px solid rgba(0,0,0,0.06)",
                                boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
                                transition:
                                    "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
                            }}
                            className="sector-card"
                        >
                            <div
                                style={{
                                    fontFamily: "var(--font-playfair), serif",
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    marginBottom: "6px",
                                    color: "#16161D",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>{sector.title}</span>
                                <span
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "18px",
                                        color: "#1E90FF",
                                        marginLeft: "10px",
                                    }}
                                >
                                    →
                                </span>
                            </div>

                            <p
                                style={{
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "15px",
                                    lineHeight: 1.6,
                                    color: "#555",
                                    margin: 0,
                                }}
                            >
                                {sector.summary}
                            </p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Small hover effect via global CSS helper */}
            <style jsx>{`
                .sector-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.15);
                    border-color: #1e90ff;
                }
            `}</style>
        </section>
    );
}