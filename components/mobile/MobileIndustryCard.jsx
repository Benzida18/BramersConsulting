"use client";
import "./MobileIndustryCard.css";
export default function MobileIndustryCard() {
    const tags = [
        "Market entry & expansion",
        "Cross-border transactions",
        "Institutional partnerships",
    ];

    return (
        <section className="mobile-industry-card-section">
            <div className="mobile-industry-card-shell">
                <p className="mobile-industry-kicker">UK · EUROPE · AFRICA</p>

                <div className="mobile-industry-tags">
                    {tags.map((label) => (
                        <span key={label} className="mobile-industry-tag">
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}