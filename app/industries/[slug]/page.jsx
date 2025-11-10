"use client";

export const dynamic = "force-dynamic";

const INDUSTRY_DATA = {
    "agribusiness": {
        title: "Agribusiness",
        tagline: "Sustainable Value Chain Development",
        video: "/videos/agribusiness.mp4"
    },
    "ai-strategy": {
        title: "AI Strategy",
        tagline: "Intelligent Transformation for Growth",
        video: "/videos/ai-strategy.mp4"
    },
    "coaching-training": {
        title: "Coaching & Leadership Development",
        tagline: "Building High-Performance Leaders",
        video: "/videos/coaching-training.mp4"
    },
    "finance": {
        title: "Financial Advisory",
        tagline: "Strategic Capital & Investment Guidance",
        video: "/videos/finance.mp4"
    },
    "football-advisory": {
        title: "Sports & Football Consulting",
        tagline: "Performance, Talent & Governance",
        video: "/videos/football-advisory.mp4"
    },

    "catering-hospitality": {
        title: "Hospitality & Tourism",
        tagline: "Elevating Guest Experience & Service Excellence",
        video: "/videos/catering-hospitality.mp4"
    },
    "international-trade": {
        title: "International Trade & Export",
        tagline: "Market Entry & Cross-Border Expansion",
        video: "/videos/international-trade.mp4"
    },
    "mining": {
        title: "Mining & Natural Resources",
        tagline: "Sustainable Resource Strategy & Operations",
        video: "/videos/mining.mp4"
    },
    "real-estate": {
        title: "Real Estate & Infrastructure",
        tagline: "Investment, Development & Asset Structuring",
        video: "/videos/real-estate.mp4"
    }
};

export default function IndustrySlugPage({ params }) {
    const { slug } = params;
    const data = INDUSTRY_DATA[slug];

    return (
        <main style={{ width: "100%", overflow: "hidden" }}>

            {/* ✅ HERO */}
            {data && (
                <div style={{ position: "relative", height: "65vh", width: "100%", overflow: "hidden" }}>
                    <video
                        src={data.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "brightness(60%)"
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "white"
                        }}
                    >
                        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "52px", marginBottom: "12px" }}>
                            {data.title}
                        </h1>
                        <p style={{ fontFamily: "var(--font-inter)", fontSize: "20px", opacity: 0.9 }}>
                            {data.tagline}
                        </p>
                    </div>
                </div>
            )}

            {/* ✅ OVERVIEW SECTION */}
            <section style={{ width: "92%", maxWidth: "1200px", margin: "90px auto 40px" }}>
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "18px",
                        lineHeight: 1.7,
                        color: "#333",
                        maxWidth: "850px"
                    }}
                >
                    At Bramers Consulting, we collaborate with private institutions,
                    industry leaders and policymakers within the{" "}
                    <strong>{slug.replace(/-/g, " ")}</strong> sector to support strategic growth,
                    sustainable development, and cross-border partnership expansion.
                </p>
            </section>

            {/* ✅ 3-PILLAR APPROACH */}
            <section style={{ width: "92%", maxWidth: "1200px", margin: "40px auto 120px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "32px"
                    }}
                >
                    {[
                        {
                            title: "Market Strategy & Positioning",
                            desc: "Identifying scalable entry points, demand drivers, market access pathways and competitive strategic advantage."
                        },
                        {
                            title: "Institutional & Regulatory Alignment",
                            desc: "Supporting alignment between private sector objectives, regulatory frameworks, and cross-government collaboration."
                        },
                        {
                            title: "International Partnership Development",
                            desc: "Facilitating trusted high-level relationships, cross-border investment flows, and long-term durable cooperation."
                        }
                    ].map((card, i) => (
                        <div
                            key={i}
                            style={{
                                background: "#fff",
                                borderRadius: "18px",
                                padding: "28px 32px",
                                border: "1px solid rgba(0,0,0,0.08)",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontSize: "22px",
                                    marginBottom: "12px",
                                    color: "#111"
                                }}
                            >
                                {card.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "15px",
                                    lineHeight: 1.55,
                                    color: "#555"
                                }}
                            >
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}