// app/insights/InsightsPageClient.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { InsightCardData } from "./page";

/* ---------- Scroll-in animation wrapper ---------- */
function RevealOnScroll({
                            children,
                            delay = 0,
                        }: {
    children: React.ReactNode;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                } else {
                    // allow re-animate on scroll
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

/* ---------- MAIN CLIENT PAGE ---------- */
export default function InsightsPageClient({ posts }: { posts: InsightCardData[] }) {
    return (
        <main style={{ fontFamily: "var(--font-inter)", color: "#111" }}>
            {/* ---------- HERO VIDEO (insight.mp4) ---------- */}
            <section style={{ position: "relative", height: "88vh", overflow: "hidden" }}>
                <video
                    src="/videos/insight.mp4"
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

                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white",
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
                            Insights
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
                            Sharp perspectives on strategy, governance and cross-border execution
                            — grounded in our work across the UK and African markets.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* ---------- GRID OF INSIGHT CARDS ---------- */}
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
                            Latest Articles
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
                            Each article distils a real pattern we see in projects, markets, or
                            policy—written to give you clarity, not jargon.
                        </p>
                    </RevealOnScroll>

                    {/* 3-column cube grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            gap: 26,
                        }}
                    >
                        {posts.map((post, i) => (
                            <RevealOnScroll key={post._id} delay={i * 70}>
                                <InsightCard post={post} />
                            </RevealOnScroll>
                        ))}

                        {posts.length === 0 && (
                            <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#777" }}>
                                No insights have been published yet.
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

/* ---------- SINGLE CARD (your “cube” with hover) ---------- */
function InsightCard({ post }: { post: InsightCardData }) {
    const wrapRef = useRef<HTMLDivElement | null>(null);

    function onEnter() {
        const el = wrapRef.current;
        if (!el) return;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 18px 42px rgba(30,144,255,0.18)";
        el.style.borderColor = "#1E90FF";
    }

    function onLeave() {
        const el = wrapRef.current;
        if (!el) return;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
        el.style.borderColor = "rgba(0,0,0,0.06)";
    }

    return (
        <Link
            href={`/insights/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div
                ref={wrapRef}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{
                    background: "#ffffff",
                    borderRadius: 18,
                    padding: "22px 22px 20px",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    transition: "transform .35s ease, box-shadow .35s ease, border-color .35s ease",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                {post.cover?.asset?.url && (
                    <img
                        src={post.cover.asset.url}
                        alt={post.title}
                        style={{
                            width: "100%",
                            height: "210px",
                            objectFit: "cover",
                            borderRadius: 14,
                            marginBottom: 14,
                        }}
                    />
                )}

                <h3
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: 22,
                        margin: "2px 0 8px",
                        color: "#0A0A0A",
                    }}
                >
                    {post.title}
                </h3>

                <p
                    style={{
                        fontSize: 15.5,
                        lineHeight: 1.6,
                        color: "#444",
                        flexGrow: 1,
                    }}
                >
                    {post.excerpt || "Tap to read the full article."}
                </p>
            </div>
        </Link>
    );
}