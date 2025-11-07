"use client";

export default function IndustryGrid() {
    const industries = [
        "Technology",
        "Financial Services",
        "Healthcare",
        "Renewable Energy",
        "Agriculture & Agribusiness",
        "Real Estate & Infrastructure",
        "Education & Training",
        "AI & Data Strategy",
        "Sports & Football Advisory",
        "Logistics & Trade",
    ];

    return (
        <section
            style={{
                width: "100%",
                padding: "80px 0 120px",
                background: "var(--color-white)",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div style={{ width: "100%", maxWidth: "1200px", padding: "0 24px" }}>
                <h2
                    style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "40px",
                        marginBottom: "48px",
                        color: "var(--color-black)",
                    }}
                >
                    Industries We Advise
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {industries.map((name) => (
                        <a
                            key={name}
                            href="#"
                            className="industry-card"
                            style={{
                                padding: "28px 24px",
                                border: "1px solid rgba(0,0,0,0.20)",
                                borderRadius: "8px",
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "18px",
                                color: "var(--color-black)",
                                textDecoration: "none",
                                transition: "all 0.28s ease",
                            }}
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}