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

            {/* *** Add this *** */}
            <style jsx>{`
                @media (max-width: 900px) {
                    section {
                        padding: 50px 0 70px !important;
                    }

                    h2 {
                        font-size: 30px !important;
                        margin-bottom: 32px !important;
                        text-align: center;
                    }

                    .industry-card {
                        padding: 20px 18px !important;
                        font-size: 16px !important;
                        border-radius: 10px !important;
                    }

                    @media (max-width: 540px) {
                        .industry-card {
                            padding: 18px 16px !important;
                            font-size: 15px !important;
                        }
                    }
                }
            `}</style>
        </section>
    );
}