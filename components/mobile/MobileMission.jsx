"use client";

export default function MobileMission() {
    const services = [
        {
            title: "Market Entry & Expansion",
            blurb:
                "From feasibility through execution, we help organisations structure their entry into UK and African markets with clarity and precision.",
            detail:
                "We support leadership teams on market sizing, route-to-market, partner selection and regulatory positioning, so expansion decisions are made with confidence.",
        },
        {
            title: "Deals, Capital & Partnerships",
            blurb:
                "Support for transactions, JV structures and strategic alliances with regulators, lenders and institutional partners.",
            detail:
                "Our team advises on deal structuring, investor conversations and cross-border capital flows, ensuring incentives are aligned across all parties.",
        },
        {
            title: "Operational Excellence & Governance",
            blurb:
                "We work with leadership teams to strengthen governance, operating models and cross-border ways of working.",
            detail:
                "We help institutions modernise processes, clarify decision rights and embed governance that stands up to international scrutiny.",
        },
    ];

    return (
        <section className="mobile-mission-section">
            <div className="mobile-mission-shell">
                {/* TOP – copy */}
                <div className="mobile-mission-intro">
                    <p className="mobile-mission-kicker">Cross-regional advisory</p>

                    <h2 className="mobile-mission-heading">
                        Strategy, transactions and
                        <br />
                        execution between the UK
                        <br />
                        &amp; Africa.
                    </h2>

                    <p className="mobile-mission-text">
                        Bramers Consulting supports corporates, investors and institutions
                        navigating multi-market growth, with a focus on anglophone and
                        francophone Africa.
                    </p>
                </div>

                {/* BOTTOM – cards */}
                <div className="mobile-mission-cards">
                    {services.map((item) => (
                        <article key={item.title} className="mobile-mission-card">
                            <h3 className="mobile-mission-card-title">{item.title}</h3>
                            <p className="mobile-mission-card-blurb">{item.blurb}</p>
                            <p className="mobile-mission-card-detail">{item.detail}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}