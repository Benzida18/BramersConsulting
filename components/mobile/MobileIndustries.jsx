"use client";

export default function MobileIndustries() {
    const list = [
        "Technology",
        "Financial Services",
        "Healthcare",
        "Agribusiness",
        "Real Estate",
        "AI Strategy",
        "Logistics",
        "Football Advisory",
        "Infrastructure",
        "Education",
    ];

    return (
        <section className="m-section">
            <h2 className="m-title">Industries We Serve</h2>

            <div className="m-list">
                {list.map((item) => (
                    <div key={item} className="m-card">
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}