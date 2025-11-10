// app/about/page.jsx
"use client";
import { useEffect, useRef } from "react";

/** Small helper: add .is-visible the first time an element enters view.
 * It removes .is-visible when you scroll past (hides again),
 * but the animation class .has-played prevents reanimation on backscroll.
 */
function useRevealOnce(selector) {
    const played = useRef(new WeakSet());

    useEffect(() => {
        const els = Array.from(document.querySelectorAll(selector));
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    const el = e.target;
                    if (e.isIntersecting) {
                        el.classList.add("is-visible");
                        if (!played.current.has(el)) {
                            el.classList.add("has-played"); // animation runs once
                            played.current.add(el);
                        }
                    } else {
                        // Hide when passed (opacity 0), but do NOT remove has-played (no replay)
                        el.classList.remove("is-visible");
                    }
                });
            },
            { threshold: 0.25 }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [selector]);
}

export default function AboutPage() {
    // Reveal groups
    useRevealOnce("[data-reveal='fade-up']");
    useRevealOnce("[data-reveal='slide-left']");
    useRevealOnce("[data-reveal='slide-right']");
    useRevealOnce("[data-reveal='cards']");

    return (
        <main style={{ fontFamily: "var(--font-inter)", color: "#111" }}>
            {/* ===== HERO (video with centered copy) ===== */}
            <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
                <video
                    src="/videos/about.mp4"
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
                    }}
                />
                {/* subtle gradient so white type pops */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.1) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        textAlign: "center",
                        color: "white",
                        padding: "0 24px",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "64px",
                            lineHeight: 1.06,
                            margin: "0 0 14px",
                        }}
                    >
                        About Bramers
                    </h1>
                    <p style={{ fontSize: "20px", opacity: 0.92, maxWidth: 760, margin: "0 auto" }}>
                        Independent advisory practice based in the United Kingdom, bridging markets and enabling
                        institutional cooperation across the UK & Africa.
                    </p>
                </div>
            </section>

            {/* ===== SECTION 1: Founder Story (video LEFT, text RIGHT) ===== */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: "140px auto 120px",
                    display: "grid",
                    gridTemplateColumns: "1.05fr 1fr",
                    gap: 56,
                    padding: "0 24px",
                }}
            >
                {/* Video left */}
                <div
                    data-reveal="slide-right"
                    className="reveal"
                    style={{
                        borderRadius: 18,
                        overflow: "hidden",
                        boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
                    }}
                >
                    <video
                        src="/videos/dream.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                            objectFit: "cover",
                            filter: "brightness(80%)",
                        }}
                    />
                </div>

                {/* Text right */}
                <div data-reveal="slide-left" className="reveal">
                    <h2
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: 38,
                            margin: "6px 0 16px",
                        }}
                    >
                        Founder’s Story
                    </h2>
                    <p style={{ fontSize: 18, lineHeight: 1.75, color: "#444" }}>
                        Bramers was founded by Bouraima Zida, an advisor who believes progress should be deliberate, context-aware, and built on trust. His work across the United Kingdom and West Africa shaped a practice that blends structured analysis with patient relationship-building — the kind that earns access, not just attention.

                        Early in his career, Bouraima saw how promising initiatives stall when strategy ignores people and place. He also saw how modest, well-sequenced decisions compound into durable results. That discipline informs Bramers today: clarify the goal, align the stakeholders, and move at the right pace — no faster than trust allows, no slower than opportunity requires.

                        Bouraima’s focus areas include business structuring, leadership development, market entry, and cross-border partnership building. He works quietly and thoroughly, favouring clear commitments over broad claims. Clients value the combination of steady communication, cultural fluency, and a bias for documentation — turning complex intentions into workable plans with owners, timelines, and accountability.

                        Bramers remains intentionally lean. That choice keeps the work hands-on and responsive, and it preserves the discretion expected in sensitive contexts. When scale is required, Bouraima coordinates specialist partners under a single, simple principle: clarity first, then consistency, always with respect. The result is an advisory relationship that is measured, human, and built to last.
                    </p>
                </div>
            </section>

            {/* ===== SECTION 2: “What Bramers Does” (reveals; hides when passed; no replay) ===== */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: "0 auto 140px",
                    padding: "0 24px",
                }}
            >
                <div data-reveal="fade-up" className="reveal" style={{ textAlign: "center", marginBottom: 26 }}>
                    <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: 38, margin: 0 }}>
                        What Bramers Do
                    </h2>
                    <p style={{ fontSize: 18, color: "#555", maxWidth: 860, margin: "12px auto 0", lineHeight: 1.75 }}>
                        We help leaders simplify choices, structure initiatives, and set momentum for sustainable outcomes.
                        The work typically spans three areas that reinforce each other.
                    </p>
                </div>

                {/* Premium cards */}
                <div
                    data-reveal="cards"
                    className="reveal cards-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 28,
                        marginTop: 32,
                    }}
                >
                    {[
                        {
                            title: "Market Strategy & Positioning",
                            desc:
                                "Define where to play and how to win. We map demand drivers, entry paths, and competitive edges — then align internal capabilities to the chosen path.",
                            bullets: [
                                "Opportunity scanning & prioritisation",
                                "Route-to-market & sequencing",
                                "Operating model & governance setup",
                            ],
                        },
                        {
                            title: "Institutional & Regulatory Alignment",
                            desc:
                                "Translate intent into workable frameworks. We align private objectives with policy constraints to reduce friction and protect momentum.",
                            bullets: [
                                "Regulatory navigation & compliance setup",
                                "Stakeholder mapping & engagement cadence",
                                "Risk registers & escalation paths",
                            ],
                        },
                        {
                            title: "International Partnerships",
                            desc:
                                "Establish trusted cross-border relationships. We focus on credibility, clarity of value exchange, and durable collaboration mechanisms.",
                            bullets: [
                                "Partner profiling & introductions",
                                "Term-sheet scaffolding",
                                "Delivery PMO & performance reviews",
                            ],
                        },
                    ].map((card, i) => (
                        <div key={i} className="card">
                            <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: 22, margin: "2px 0 10px" }}>
                                {card.title}
                            </h3>
                            <p style={{ fontSize: 15.5, color: "#4a4a4a", lineHeight: 1.66, marginBottom: 14 }}>
                                {card.desc}
                            </p>
                            <ul style={{ paddingLeft: 18, margin: 0, color: "#333", lineHeight: 1.6 }}>
                                {card.bullets.map((b, j) => (
                                    <li key={j} style={{ marginBottom: 6, listStyle: "disc" }}>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== SECTION 3: Image + short purpose line ===== */}
            <section
                style={{
                    maxWidth: 1100,
                    margin: "0 auto 160px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 56,
                    padding: "0 24px",
                    alignItems: "center",
                }}
            >
                <div data-reveal="slide-right" className="reveal">
                    <img
                        src="/images/coast.jpg"
                        alt="Coast"
                        style={{
                            width: "100%",
                            borderRadius: 18,
                            objectFit: "cover",
                            boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
                        }}
                    />
                </div>
                <div data-reveal="slide-left" className="reveal">
                    <p
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: 30,
                            lineHeight: 1.35,
                        }}
                    >
                        “Bramers exists to help people move forward with clarity — at the right pace, in the right direction.”
                    </p>
                </div>
            </section>

            {/* ===== Animations & Card styling ===== */}
            <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 600ms ease, transform 600ms ease;
          will-change: opacity, transform;
        }
        /* first-time entry animations */
        .reveal[data-reveal='fade-up'].is-visible:not(.has-played) {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal[data-reveal='slide-left'].is-visible:not(.has-played) {
          opacity: 1;
          transform: translateX(0);
          animation: slideLeftOnce 650ms ease forwards;
        }
        .reveal[data-reveal='slide-right'].is-visible:not(.has-played) {
          opacity: 1;
          transform: translateX(0);
          animation: slideRightOnce 650ms ease forwards;
        }
        /* after it has played once, simply show/hide without replaying keyframes */
        .reveal.has-played.is-visible {
          opacity: 1;
          transform: none;
        }
        .reveal.has-played:not(.is-visible) {
          opacity: 0; /* hide when scrolled past as you requested */
        }

        @keyframes slideLeftOnce {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRightOnce {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .cards-grid .card {
          background: #fff;
          border-radius: 18px;
          padding: 26px 28px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 8px 28px rgba(0,0,0,0.08);
          transition: transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease;
        }
        .cards-grid .card:hover {
          transform: translateY(-6px);
          border-color: #1E90FF;
          box-shadow: 0 18px 44px rgba(30,144,255,0.16);
        }
      `}</style>
        </main>
    );
}