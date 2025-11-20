"use client";

import { motion } from "framer-motion";
import "./MobileHowWeWork.css";

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.15 * i, ease: "easeOut" },
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

export default function MobileHowWeWork() {
    return (
        <section className="how-mobile-section">
            <motion.div
                className="how-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* STEP CARDS */}
                <div className="how-left">
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

                {/* TEXT BLOCK */}
                <div className="how-right">
                    <p className="how-eyebrow">HOW WE WORK</p>

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
        </section>
    );
}