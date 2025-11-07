export default function IndustrySection() {
    const industries = [
        "Agribusiness",
        "Real Estate",
        "Finance",
        "Catering & Hospitality",
        "International Trade",
        "Football Advisory",
        "Coaching & Training",
        "AI Strategy",
        "Mining",
    ];

    return (
        <section style={{ padding: "110px 0", display: "flex", justifyContent: "center" }}>
            <div
                style={{
                    width: "92%",
                    maxWidth: "1400px",
                    display: "grid",
                    gridTemplateColumns: "45% 55%",
                    gap: "60px",
                    alignItems: "center",
                }}
            >
                {/* LEFT SIDE */}
                <div>
                    <h2
                        style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "36px",
                            fontWeight: 500,
                            marginBottom: "34px",
                        }}
                    >
                        Industries we advise
                    </h2>

                    <div className="industry-grid-2col">
                        {industries.map((item) => (
                            <div key={item} className="industry-card">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE — STATIC IMAGE */}
                <div className="industry-image-wrap">
                    <img src="/images/LondonPic1.jpg" alt="City" />
                </div>
            </div>
        </section>
    );
}