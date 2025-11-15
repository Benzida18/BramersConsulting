// app/services/page.jsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ---------- tiny helper for scroll-in animation ---------- */
function RevealOnScroll({ children, delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                } else {
                    // allow repeat on scroll (medium animation level)
                    el.style.opacity = "0";
                    el.style.transform = "translateY(18px)";
                }
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: 0,
                transform: "translateY(18px)",
                transition: `opacity .55s ease ${delay}ms, transform .55s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

/* ---------- data ---------- */
const SERVICES = [
    {
        slug: "agribusiness",
        title: "Agribusiness Advisory",
        short:
            "Value-chain mapping, export readiness, and market access across UK–Africa routes.",
        long:
            "We align producers, processors, and distributors; design cold-chain/logistics flows; and structure partnerships with reliable off-takers.",
    },
    {
        slug: "real-estate",
        title: "Real Estate & Infrastructure",
        short:
            "Site selection, capital structuring, and delivery governance for resilient assets.",
        long:
            "From feasibility to execution, we support JV models, risk allocation, and stakeholder engagement to keep programmes bankable.",
    },
    {
        slug: "finance",
        title: "Financial Advisory",
        short: "Capital strategy, investor relations, and transaction preparation.",
        long:
            "We help prepare datarooms, refine investment theses, and map suitable sources of capital across institutional and private channels.",
    },
    {
        slug: "catering-hospitality",
        title: "Catering & Hospitality",
        short:
            "Concept design, service standards, and unit economics for premium experiences.",
        long:
            "Menu engineering, staffing models, and supplier programmes that balance guest delight with margin discipline.",
    },
    {
        slug: "international-trade",
        title: "International Trade & Export",
        short:
            "Market entry, compliance pathways, and cross-border partnership building.",
        long:
            "We clarify tariff and non-tariff barriers, secure distributors, and sequence pilots to de-risk expansion.",
    },
    {
        slug: "football-advisory",
        title: "Football Advisory",
        short: "Talent pathways, club relations, and governance alignment.",
        long:
            "We design development frameworks, stakeholder protocols, and transparent reporting that protect athlete welfare and value.",
    },
    {
        slug: "coaching-training",
        title: "Coaching & Leadership",
        short: "Practical leadership development and team performance systems.",
        long:
            "Clarity frameworks, feedback cultures, and cadence rituals that sustain execution without burnout.",
    },
    {
        slug: "ai-strategy",
        title: "AI Strategy",
        short:
            "Pragmatic automation and decision support—grounded in real workflows.",
        long:
            "Opportunity scans, vendor selection, and adoption roadmaps that respect data governance and change management.",
    },
    {
        slug: "mining",
        title: "Mining & Natural Resources",
        short: "Licensing pathways, ESG alignment, and community engagement.",
        long:
            "Stakeholder maps, risk registers, and partnerships that keep projects viable and respectful of local context.",
    },
];

export default function ServicesPage() {
    return (
        <main style={{ fontFamily: "var(--font-inter)", color: "#111" }}>
            {/* ---------- HERO (Header sits over this video) ---------- */}
            <section style={{ position: "relative", height: "88vh", overflow: "hidden" }}>
                <video
                    src="/videos/office.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(60%)",
                    }}
                />

                {/* CENTERED COPY (only change) */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        color: "white",
                        textAlign: "center",
                        textShadow: "0 8px 28px rgba(0,0,0,0.5)",
                        padding: "0 24px",
                        width: "min(90vw, 900px)",
                    }}
                >
                    <RevealOnScroll>
                        <h1
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "64px",
                                margin: 0,
                            }}
                        >
                            Services
                        </h1>
                    </RevealOnScroll>
                    <RevealOnScroll delay={120}>
                        <p
                            style={{
                                fontSize: "20px",
                                maxWidth: 740,
                                opacity: 0.95,
                                margin: "12px auto 0",
                                lineHeight: 1.6,
                            }}
                        >
                            Advisory built for clarity and steady execution—bridging the UK and
                            African markets with practical structures, respectful relationships,
                            and measurable progress.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ---------- SECTION 2: Approach (text left, video right) ---------- */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "120px auto",
                    display: "grid",
                    gridTemplateColumns: "1.2fr 1fr",
                    gap: "56px",
                    alignItems: "center",
                    padding: "0 24px",
                }}
            >
                <RevealOnScroll>
                    <div>
                        <h2
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "38px",
                                margin: "0 0 16px",
                            }}
                        >
                            Our Approach
                        </h2>
                        <p style={{ fontSize: "18px", color: "#444", lineHeight: 1.75 }}>
                            We start with context: the people, constraints, and levers that actually
                            move a project forward. Then we co-design a simple operating rhythm—
                            decisions, reviews, and clear ownership—so momentum is maintained.
                            We avoid noise, document agreements, and build trusted partnerships that
                            last. Progress becomes consistent, not frantic.
                        </p>
                        <ul
                            style={{
                                marginTop: 18,
                                display: "grid",
                                gap: 10,
                                fontSize: 16,
                                color: "#333",
                            }}
                        >
                            <li>• Clear roles & decisions (no ambiguity).</li>
                            <li>• Lightweight governance and useful reporting.</li>
                            <li>• Respect for culture, timing, and stakeholder priorities.</li>
                            <li>• Measurable milestones—small wins compounding over time.</li>
                        </ul>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                    <div
                        style={{
                            borderRadius: 18,
                            overflow: "hidden",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                        }}
                    >
                        <video
                            src="/videos/customer.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                filter: "brightness(78%)",
                            }}
                        />
                    </div>
                </RevealOnScroll>
            </section>

            {/* ---------- SECTION 3: Services grid (9 cards) ---------- */}
            <section style={{ background: "#fafafa", padding: "100px 0 140px" }}>
                <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
                    <RevealOnScroll>
                        <h2
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "36px",
                                margin: "0 0 24px",
                                textAlign: "center",
                            }}
                        >
                            What We Deliver
                        </h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={80}>
                        <p
                            style={{
                                textAlign: "center",
                                maxWidth: 820,
                                margin: "0 auto 48px",
                                fontSize: 18,
                                color: "#444",
                                lineHeight: 1.7,
                            }}
                        >
                            Each service mirrors an industry context we know well. Hover to explore
                            how we work—no clicks required. When ready, book a session to map your
                            next step with us.
                        </p>
                    </RevealOnScroll>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 26,
                        }}
                    >
                        {SERVICES.map((s, i) => (
                            <RevealOnScroll key={s.slug} delay={i * 60}>
                                <ServiceCard service={s} />
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

/* ---------- card component ---------- */
function ServiceCard({ service }) {
    const cardStyle = {
        background: "#ffffff",
        borderRadius: 18,
        padding: "26px 26px 22px",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        transition: "transform .35s ease, box-shadow .35s ease, border-color .35s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
    };

    const titleStyle = {
        fontFamily: "var(--font-playfair)",
        fontSize: 22,
        margin: "2px 0 8px",
        color: "#0A0A0A",
    };

    const shortStyle = {
        fontSize: 15.5,
        lineHeight: 1.6,
        color: "#444",
        marginBottom: 10,
    };

    const moreWrapStyle = {
        maxHeight: 0,
        overflow: "hidden",
        transition: "max-height .4s ease, opacity .35s ease, transform .35s ease",
        opacity: 0,
        transform: "translateY(6px)",
    };

    const btnWrapStyle = {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 16,
        opacity: 0,
        transform: "translateY(10px)",
        transition: "opacity .35s ease, transform .35s ease",
    };

    const btnStyle = {
        padding: "10px 16px",
        fontSize: 14.5,
        fontWeight: 600,
        borderRadius: 10,
        border: "1px solid #1E90FF",
        background: "#1E90FF",
        color: "#fff",
        textDecoration: "none",
    };

    // inline hover via onMouseEnter/Leave to toggle styles
    const wrapRef = useRef(null);
    const moreRef = useRef(null);
    const btnRef = useRef(null);

    function onEnter() {
        const el = wrapRef.current;
        const more = moreRef.current;
        const btn = btnRef.current;
        if (el) {
            el.style.transform = "translateY(-6px)";
            el.style.boxShadow = "0 18px 42px rgba(30,144,255,0.18)";
            el.style.borderColor = "#1E90FF";
        }
        if (more) {
            more.style.maxHeight = "160px";
            more.style.opacity = "1";
            more.style.transform = "translateY(0)";
        }
        if (btn) {
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        }
    }

    function onLeave() {
        const el = wrapRef.current;
        const more = moreRef.current;
        const btn = btnRef.current;
        if (el) {
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
            el.style.borderColor = "rgba(0,0,0,0.06)";
        }
        if (more) {
            more.style.maxHeight = "0px";
            more.style.opacity = "0";
            more.style.transform = "translateY(6px)";
        }
        if (btn) {
            btn.style.opacity = "0";
            btn.style.transform = "translateY(10px)";
        }
    }

    return (
        <div
            ref={wrapRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            style={cardStyle}
            role="group"
            aria-label={service.title}
        >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div
                    aria-hidden
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        marginTop: 8,
                        background: "#1E90FF",
                        boxShadow: "0 0 0 6px rgba(30,144,255,0.15)",
                    }}
                />
                <div style={{ flex: 1 }}>
                    <h3 style={titleStyle}>{service.title}</h3>
                    <p style={shortStyle}>{service.short}</p>
                    <div ref={moreRef} style={moreWrapStyle}>
                        <p style={{ fontSize: 15, color: "#333", lineHeight: 1.6 }}>
                            {service.long}
                        </p>
                    </div>
                </div>
            </div>

            <div ref={btnRef} style={btnWrapStyle}>
                <Link href={`/industries/${service.slug}`} style={{ textDecoration: "none" }}>
                    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
                        <span className="button-text">Learn More</span>
                    </button>
                </Link>
            </div>

        </div>
    );
}