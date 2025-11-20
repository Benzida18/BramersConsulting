// components/HowWeWork.jsx
"use client";

import { motion } from "framer-motion";

const steps = [
    {
        title: "01 · Discovery & context",
        summary:
            "We start with listening – understanding your mandate, stakeholders and constraints across UK and African markets.",
        detail:
            "Typical outputs include a stakeholder map, market context memo and a prioritised list of questions to validate before committing resources.",
    },
    {
        title: "02 · Design & structuring",
        summary:
            "We shape market entry, transaction or partnership options, mapping scenarios, risk and decision paths.",
        detail:
            "We test different transaction and operating models, align internal sponsors and prepare materials for boards, investors and partners.",
    },
    {
        title: "03 · Execution & partner support",
        summary:
            "We work alongside internal teams and external partners to move programmes from paper to implementation.",
        detail:
            "Support can include workstream governance, deal and documentation support, and ongoing advisory as markets or partners evolve.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: 0.12 * i,
            ease: "easeOut",
        },
    }),
};

export default function HowWeWork() {
    return (
        <section className="how-section">
            <div className="how-inner">
                {/* TOP: heading + intro copy */}
                <header className="how-header">
                    <p className="how-kicker">HOW WE WORK</p>
                    <h2 className="how-heading">
                        Practical, partner-led advisory
                        <br />
                        for cross-border decisions.
                    </h2>
                    <p className="how-body">
                        Our work combines local insight, transaction experience and
                        institutional know-how. We sit between investors, operators and
                        regulators to move projects forward with clarity and discipline.
                    </p>
                </header>

                {/* BOTTOM: stacked cards */}
                <div className="how-card-list">
                    {steps.map((step, index) => (
                        <motion.article
                            key={step.title}
                            className="how-card"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                        >
                            <h3 className="how-card-title">{step.title}</h3>
                            <p className="how-card-summary">{step.summary}</p>
                            <p className="how-card-detail">{step.detail}</p>
                        </motion.article>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .how-section {
                    width: 100%;
                    background: #f6f7fb;
                    display: flex;
                    justify-content: center;
                    padding: 96px 0 110px; /* top + bottom spacing to breathe but not huge gap */
                }

                .how-inner {
                    width: 92%;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .how-header {
                    max-width: 720px;
                    margin-bottom: 40px;
                }

                .how-kicker {
                    font-family: var(--font-inter);
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    font-size: 13px;
                    color: #9b9ca5;
                    margin: 0 0 18px;
                }

                .how-heading {
                    font-family: var(--font-playfair), serif;
                    font-size: 40px;
                    line-height: 1.18;
                    margin: 0 0 22px;
                    color: #111111;
                }

                .how-body {
                    font-family: var(--font-inter);
                    font-size: 16px;
                    line-height: 1.7;
                    color: #4a4b53;
                    max-width: 540px;
                    margin: 0;
                }

                .how-card-list {
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }

                .how-card {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 22px 26px 20px;
                    box-shadow: 0 18px 42px rgba(15, 23, 42, 0.09);
                    border: 1px solid rgba(15, 23, 42, 0.05);
                }

                .how-card-title {
                    font-family: var(--font-playfair), serif;
                    font-size: 18px;
                    margin: 0 0 8px;
                    color: #111827;
                }

                .how-card-summary {
                    font-family: var(--font-inter);
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0 0 6px;
                    color: #4b5563;
                }

                .how-card-detail {
                    font-family: var(--font-inter);
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                    color: #6b7280;
                }

                /* ---------- RESPONSIVE ---------- */

                @media (max-width: 960px) {
                    .how-section {
                        padding: 80px 0 90px;
                    }

                    .how-heading {
                        font-size: 32px;
                    }
                }

                @media (max-width: 600px) {
                    .how-section {
                        padding: 64px 0 80px;
                    }

                    .how-heading {
                        font-size: 26px;
                        line-height: 1.25;
                    }

                    .how-body {
                        font-size: 14px;
                        max-width: 100%;
                    }

                    .how-card {
                        padding: 18px 18px 16px;
                        border-radius: 18px;
                    }

                    .how-card-title {
                        font-size: 16px;
                    }

                    .how-card-summary,
                    .how-card-detail {
                        font-size: 14px;
                    }
                }
            `}</style>
        </section>
    );
}