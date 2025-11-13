"use client";

export default function Mission() {
    const services = [
        {
            title: "Market Entry & Expansion",
            blurb:
                "From feasibility through execution, we help organisations structure their entry into UK and African markets with clarity and precision.",
            detail:
                "We support leadership teams on market sizing, route-to-market, partner selection and regulatory positioning, so expansion decisions are made with confidence."
        },
        {
            title: "Deals, Capital & Partnerships",
            blurb:
                "Support for transactions, JV structures and strategic alliances with regulators, lenders and institutional partners.",
            detail:
                "Our team advises on deal structuring, investor conversations and cross-border capital flows, ensuring incentives are aligned across all parties."
        },
        {
            title: "Operational Excellence & Governance",
            blurb:
                "We work with leadership teams to strengthen governance, operating models and cross-border ways of working.",
            detail:
                "We help institutions modernise processes, clarify decision rights and embed governance that stands up to international scrutiny."
        }
    ];

    return (
        <section
            style={{
                width: "100%",
                background: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
                padding: "110px 0 120px"
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1320px",
                    padding: "0 40px",
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.1fr)",
                    gap: "72px"
                }}
            >
                {/* LEFT – copy */}
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "13px",
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "#7A7A7A",
                            marginBottom: "18px"
                        }}
                    >
                        Cross-regional advisory
                    </p>

                    <h2
                        style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "52px",
                            lineHeight: 1.12,
                            fontWeight: 500,
                            margin: 0,
                            color: "#0A0A0A",
                            marginBottom: "26px"
                        }}
                    >
                        Strategy, transactions and
                        <br />
                        execution between the UK
                        <br />
                        &amp; Africa.
                    </h2>

                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "17px",
                            lineHeight: 1.7,
                            color: "#3b3b3b",
                            maxWidth: "540px",
                            marginTop: "16px"
                        }}
                    >
                        Bramers Consulting supports corporates, investors and institutions
                        navigating multi-market growth, with a focus on anglophone and
                        francophone Africa.
                    </p>
                </div>

                {/* RIGHT – cards with hover dropdown */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "22px"
                    }}
                >
                    {services.map((item) => (
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

            {/* Local styles for hover dropdown + cleaner font (Inter) */}
            <style jsx>{`
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

                @media (max-width: 1024px) {
                    section {
                        padding: 80px 0 90px;
                    }
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr;
                        gap: 44px;
                    }
                }
            `}</style>
        </section>
    );
}