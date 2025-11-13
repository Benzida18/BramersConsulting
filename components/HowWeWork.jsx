"use client";

import { useState } from "react";
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
    // ✅ plain JS – no generic
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
                style={{
                    width: "92%",
                    maxWidth: "1400px",
                    display: "grid",
                    // ✅ cards on the LEFT, text on the RIGHT
                    gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
                    gap: "72px",
                    alignItems: "flex-start",
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* LEFT: flip cards */}
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
                            className="flip-card"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className="flip-inner"
                                style={{
                                    transform:
                                        hoveredIndex === index
                                            ? "rotateY(180deg)"
                                            : "rotateY(0deg)",
                                    transformStyle: "preserve-3d",
                                    transition:
                                        "transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1)",
                                }}
                            >
                                {/* FRONT */}
                                <div className="flip-face flip-front">
                                    <h3 className="flip-title">{step.title}</h3>
                                    <p className="flip-text">{step.summary}</p>
                                </div>

                                {/* BACK */}
                                <div className="flip-face flip-back">
                                    <h3 className="flip-title">{step.title}</h3>
                                    <p className="flip-text">{step.detail}</p>
                                    <span className="flip-tag">
                                        Hover to flip back
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* RIGHT: text copy */}
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            fontSize: "13px",
                            color: "#9b9ca5",
                            marginBottom: "18px",
                        }}
                    >
                        HOW WE WORK
                    </p>

                    <h2
                        style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "40px",
                            lineHeight: 1.18,
                            margin: "0 0 22px",
                            color: "#111111",
                        }}
                    >
                        Practical, partner-led advisory
                        <br />
                        for cross-border decisions.
                    </h2>

                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "16px",
                            lineHeight: 1.7,
                            color: "#4a4b53",
                            maxWidth: "520px",
                        }}
                    >
                        Our work combines local insight, transaction experience
                        and institutional know-how. We sit between investors,
                        operators and regulators to move projects forward with
                        clarity and discipline.
                    </p>
                </div>
            </motion.div>

            {/* Flip card CSS */}
            <style jsx>{`
                .flip-card {
                    perspective: 1200px;
                }

                .flip-inner {
                    position: relative;
                    width: 100%;
                    min-height: 150px;
                }

                .flip-face {
                    position: absolute;
                    inset: 0;
                    border-radius: 18px;
                    padding: 22px 26px 20px;
                    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.1);
                    border: 1px solid rgba(15, 23, 42, 0.06);
                    background: #ffffff;
                    font-family: var(--font-inter);
                    backface-visibility: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .flip-front::before,
                .flip-back::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: radial-gradient(
                            circle at top left,
                            rgba(30, 144, 255, 0.08),
                            transparent 55%
                    );
                    pointer-events: none;
                }

                .flip-back {
                    transform: rotateY(180deg);
                    background: #f8fbff;
                }

                .flip-title {
                    position: relative;
                    font-size: 17px;
                    font-weight: 600;
                    margin: 0 0 8px;
                    color: #111827;
                }

                .flip-text {
                    position: relative;
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #4b5563;
                }

                .flip-tag {
                    position: relative;
                    margin-top: 12px;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: #6b7280;
                }

                @media (max-width: 960px) {
                    section > div {
                        grid-template-columns: 1fr !important;
                        gap: 48px;
                    }
                }
            `}</style>
        </section>
    );
}