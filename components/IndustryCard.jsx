// components/IndustryCard.jsx
"use client";

import { useLanguage } from "@/components/LanguageContext";

const copy = {
    en: {
        label: "UK · EUROPE · AFRICA",
        chips: [
            "Market entry & expansion",
            "Cross-border transactions",
            "Institutional partnerships",
        ],
    },
    fr: {
        label: "R.-U. · EUROPE · AFRIQUE",
        chips: [
            "Entrée et expansion sur les marchés",
            "Transactions transfrontalières",
            "Partenariats institutionnels",
        ],
    },
};

export default function IndustryCard() {
    const { language } = useLanguage();
    const t = copy[language] || copy.en;

    return (
        <section className="fade-section industry-strip">
            <div className="industry-strip-inner">
                <p className="industry-strip-label">{t.label}</p>

                <div className="industry-strip-chips">
                    {t.chips.map((label) => (
                        <span key={label} className="industry-strip-chip">
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .industry-strip {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    padding: 18px 0 32px;
                    background: #f7f9fc;
                    border-top: 1px solid rgba(0, 0, 0, 0.04);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
                }

                .industry-strip-inner {
                    width: 92%;
                    max-width: 1200px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 24px;
                    flex-wrap: wrap;
                }

                .industry-strip-label {
                    margin: 0;
                    font-family: var(--font-inter), sans-serif;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: #777;
                }

                .industry-strip-chips {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .industry-strip-chip {
                    font-family: var(--font-inter);
                    font-size: 13px;
                    padding: 7px 14px;
                    border-radius: 999px;
                    border: 1px solid rgba(30, 144, 255, 0.35);
                    background: rgba(255, 255, 255, 0.92);
                    color: #1a3a5a;
                    backdrop-filter: blur(10px);
                }

                @media (max-width: 900px) {
                    .industry-strip {
                        padding: 26px 0 34px;
                    }

                    .industry-strip-inner {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        gap: 18px;
                    }

                    .industry-strip-label {
                        font-size: 12px;
                        letter-spacing: 0.14em;
                    }

                    .industry-strip-chip {
                        font-size: 12px;
                        padding: 6px 12px;
                    }
                }

                @media (max-width: 540px) {
                    .industry-strip {
                        padding: 22px 0 30px;
                    }

                    .industry-strip-chip {
                        font-size: 11px;
                        padding: 6px 10px;
                    }
                }
            `}</style>
        </section>
    );
}