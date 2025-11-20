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
        <section className="industry-grid-section">
            <div className="industry-grid-container">
                <h2 className="industry-grid-heading">Industries We Advise</h2>

                <div className="industry-grid-cards">
                    {industries.map((name) => (
                        <a
                            key={name}
                            href="#"
                            className="industry-grid-card"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .industry-grid-section {
                    width: 100%;
                    padding: 80px 0 120px;
                    background: var(--color-white);
                    display: flex;
                    justify-content: center;
                }

                .industry-grid-container {
                    width: 100%;
                    max-width: 1200px;
                    padding: 0 24px;
                }

                .industry-grid-heading {
                    font-family: var(--font-playfair), serif;
                    font-size: 40px;
                    margin-bottom: 48px;
                    color: var(--color-black);
                }

                .industry-grid-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 20px;
                }

                .industry-grid-card {
                    padding: 28px 24px;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                    font-family: var(--font-inter), sans-serif;
                    font-size: 18px;
                    color: var(--color-black);
                    text-decoration: none;
                    transition: all 0.28s ease;
                }

                .industry-grid-card:hover {
                    border-color: #1e90ff;
                    box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
                    transform: translateY(-4px);
                }

                @media (max-width: 900px) {
                    .industry-grid-section {
                        padding: 50px 0 70px;
                    }

                    .industry-grid-heading {
                        font-size: 30px;
                        margin-bottom: 32px;
                        text-align: center;
                    }

                    .industry-grid-card {
                        padding: 20px 18px;
                        font-size: 16px;
                        border-radius: 10px;
                    }
                }

                @media (max-width: 540px) {
                    .industry-grid-card {
                        padding: 18px 16px;
                        font-size: 15px;
                    }
                }
            `}</style>
        </section>
    );
}