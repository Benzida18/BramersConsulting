export default function Mission() {
    return (
        <section
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "120px 0 80px",
                background: "var(--color-white)",
            }}
        >
            {/* NEW TITLE */}
            <h2
                style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "36px",
                    fontWeight: 500,
                    marginBottom: "32px",
                    textAlign: "center",
                    color: "var(--color-black)",
                }}
            >
                Our Mission
            </h2>

            <div
                style={{
                    maxWidth: "900px",
                    padding: "0 24px",
                    textAlign: "left",
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "32px",
                        lineHeight: 1.45,
                        color: "var(--color-black)",
                    }}
                >
                    We advise organisations operating across the UK and African markets, facilitating market entry,
                    cross regional investment and partnerships that accelerate strategic outcomes.
                </p>
            </div>
        </section>
    );
}