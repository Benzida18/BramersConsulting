export default function InsightsSection() {
    return (
        <section style={{ padding: "110px 0", width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "92%", maxWidth: "1400px" }}>

                {/* Header Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "42px" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "36px",
                            fontWeight: 500,
                            margin: 0,
                            color: "var(--color-black)"
                        }}
                    >
                        Insights
                    </h2>

                    <a
                        href="/insights"
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "16px",
                            color: "var(--color-primary)",
                            textDecoration: "none",
                            fontWeight: 500
                        }}
                    >
                        View all →
                    </a>
                </div>

                {/* Card Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "32px"
                    }}
                >
                    {[
                        {
                            title: "Strategic Partnerships Driving Market Expansion",
                            image: "/images/Photo1.jpg",
                            summary: "How coordinated investment strategies accelerate joint economic outcomes across borders."
                        },
                        {
                            title: "Cross-Regional Investment Outlook for 2026",
                            image: "/images/Photo2.jpg",
                            summary: "A forward-looking assessment of capital flows shaping UK–Africa growth trajectories."
                        },
                        {
                            title: "How African Markets Are Reshaping Global Trade",
                            image: "/images/Photo3.jpg",
                            summary: "The structural shifts redefining supply chains and institutional cooperation."
                        }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href="/insights"
                            style={{
                                display: "block",
                                background: "#ffffff",
                                borderRadius: "16px",
                                overflow: "hidden",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                                textDecoration: "none"
                            }}
                            className="insight-card"
                        >
                            <div style={{ width: "100%", height: "190px", overflow: "hidden" }}>
                                <img src={item.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            <div style={{ padding: "22px 26px" }}>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-playfair), serif",
                                        fontSize: "22px",
                                        fontWeight: 500,
                                        margin: "0 0 10px",
                                        color: "var(--color-black)"
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontSize: "15px",
                                        lineHeight: 1.55,
                                        color: "#555",
                                        marginBottom: "14px"
                                    }}
                                >
                                    {item.summary}
                                </p>

                                <span
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "15px",
                                        color: "var(--color-primary)",
                                        fontWeight: 500
                                    }}
                                >
                                    Read More →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}