"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.15 * i,
            ease: "easeOut",
        },
    }),
};

const steps = [
    {
        title: "01 · Discovery & context",
        summary:
            "We start with listening – understanding your mandate, stakeholders and constraints across UK and African markets.",
        detail:
            "Typical outputs: stakeholder map, market context memo and a prioritised list of questions to validate before committing resources.",
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

export default function HowWeWork() {
    return (
        <section
            style={{
                width: "100%",
                padding: "110px 0 130px",
                background: "#f6f7fb",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <motion.div
                className="how-grid"
                style={{
                    width: "92%",
                    maxWidth: "1400px",
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
                    gap: "72px",
                    alignItems: "flex-start",
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* LEFT: simple hover cards (no flip) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                    }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            className="how-card"
                        >
                            <h3 className="how-card-title">{step.title}</h3>
                            <p className="how-card-summary">{step.summary}</p>
                            <p className="how-card-detail">{step.detail}</p>
                        </motion.div>
                    ))}
                </div>

                {/* RIGHT: text copy */}
                <div>
                    <p className="how-eyebrow">
                        HOW WE WORK
                    </p>

                    <h2 className="how-heading">
                        Practical, partner-led advisory
                        <br />
                        for cross-border decisions.
                    </h2>

                    <p className="how-body">
                        Our work combines local insight, transaction experience
                        and institutional know-how. We sit between investors,
                        operators and regulators to move projects forward with
                        clarity and discipline.
                    </p>
                </div>
            </motion.div>

            <style jsx>{`
                .how-card {
                    background: #ffffff;
                    border-radius: 18px;
                    padding: 22px 26px 20px;
                    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.08);
                    border: 1px solid rgba(15, 23, 42, 0.06);
                    font-family: var(--font-inter);
                    transition:
                        transform 0.26s ease,
                        box-shadow 0.26s ease,
                        border-color 0.26s ease,
                        background 0.26s ease;
                }

                .how-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 26px 60px rgba(15, 23, 42, 0.16);
                    border-color: rgba(30, 144, 255, 0.5);
                    background: #ffffff;
                }

                .how-card-title {
                    font-size: 17px;
                    font-weight: 600;
                    margin: 0 0 8px;
                    color: #111827;
                }

                .how-card-summary {
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #4b5563;
                }

                .how-card-detail {
                    margin: 10px 0 0;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #5c5c5c;
                }

                .how-eyebrow {
                    font-family: var(--font-inter);
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    font-size: 13px;
                    color: #9b9ca5;
                    margin-bottom: 18px;
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
                    max-width: 520px;
                    margin: 0;
                }

                /* ===== MOBILE ADAPTATION ===== */
                @media (max-width: 960px) {
                    section {
                        padding: 80px 0 90px;
                    }

                    .how-grid {
                        grid-template-columns: 1fr !important;
                        gap: 44px;
                    }

                    .how-heading {
                        font-size: 30px;
                        line-height: 1.25;
                    }

                    .how-body {
                        font-size: 14px;
                        line-height: 1.6;
                        max-width: 100%;
                    }

                    .how-card {
                        padding: 20px 20px 18px;
                    }

                    .how-card-title {
                        font-size: 16px;
                    }

                    .how-card-summary {
                        font-size: 14px;
                    }

                    .how-card-detail {
                        font-size: 13px;
                    }
                }

                @media (max-width: 540px) {
                    section {
                        padding: 70px 0 80px;
                    }

                    .how-heading {
                        font-size: 26px;
                    }

                    .how-card {
                        padding: 18px 18px 16px;
                    }
                }
            `}</style>
        </section>
    );
}