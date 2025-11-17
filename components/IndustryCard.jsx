"use client";

export default function IndustryCard() {
    return (
        <section
            className="fade-section"
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "18px 0 32px",
                background: "#F7F9FC",
                borderTop: "1px solid rgba(0,0,0,0.04)",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
            }}
        >
            <div
                style={{
                    width: "92%",
                    maxWidth: "1200px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "24px",
                    flexWrap: "wrap",
                }}
            >
                <p
                    style={{
                        margin: 0,
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                        color: "#777",
                    }}
                >
                    UK · EUROPE · AFRICA
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        "Market entry & expansion",
                        "Cross-border transactions",
                        "Institutional partnerships",
                    ].map((label) => (
                        <span
                            key={label}
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "13px",
                                padding: "7px 14px",
                                borderRadius: "999px",
                                border: "1px solid rgba(30,144,255,0.35)",
                                background: "rgba(255,255,255,0.92)",
                                color: "#1A3A5A",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>
            <style jsx>{`
    @media (max-width: 900px) {
        section {
            padding: 26px 0 34px !important;
        }

        /* Wrapper */
        div[style*="maxWidth: 1200px"] {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 18px !important;
        }

        p {
            font-size: 12px !important;
            letter-spacing: 0.14em !important;
        }

        span {
            font-size: 12px !important;
            padding: 6px 12px !important;
        }
    }

    @media (max-width: 540px) {
        section {
            padding: 22px 0 30px !important;
        }

        span {
            font-size: 11px !important;
            padding: 6px 10px !important;
        }
    }
`}</style>
        </section>
    );
}