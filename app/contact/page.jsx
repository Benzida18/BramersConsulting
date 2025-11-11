// app/contact/page.jsx
"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
    const [progress, setProgress] = useState(0);

    // Smooth scroll progress bar
    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement;
            const total = h.scrollHeight - h.clientHeight;
            setProgress(total ? h.scrollTop / total : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <main style={{ fontFamily: "var(--font-inter)", color: "#0A0A0A" }}>
            {/* progress line (sits at the very top; keeps header unchanged) */}
            <div className="scroll-progress" aria-hidden>
                <span style={{ transform: `scaleX(${progress})` }} />
            </div>

            {/* HERO (centered title over video) */}
            <section className="hero">
                <video
                    src="/videos/contact.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                />
                <div className="hero-shade" />
                <div className="hero-copy">
                    <h1 className="hero-title">Contact us</h1>
                </div>
            </section>

            {/* CONTACT CARD */}
            <section className="wrap">
                <div className="card">
                    <div className="card-top">
                        <div>
                            <h2 className="card-title">Tell us about your enquiry</h2>
                            <p className="card-sub">
                                We’ll review and get back to you with a simple proposal or clarifying
                                questions.
                            </p>
                        </div>

                        {/* Only icons (Facebook + WhatsApp) */}
                        <div className="actions">
                            <a
                                href="https://www.facebook.com/bouraima.zida"
                                target="_blank"
                                rel="noopener"
                                aria-label="Open Facebook profile"
                                className="action-btn"
                                title="Facebook"
                            >
                                {/* FB icon */}
                                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                    <path
                                        d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.93 8.44-9.94Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/447534259556"
                                target="_blank"
                                rel="noopener"
                                aria-label="Chat on WhatsApp"
                                className="action-btn"
                                title="WhatsApp"
                            >
                                {/* WA icon */}
                                <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
                                    <path
                                        d="M19.1 17.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.3 0-.5-.1-.1-.7-1.7-.9-2.2-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.4 3.3c.2.3 2.4 3.7 5.8 5.1.8.4 1.5.6 2 .7.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.1-1.4-.1-.2-.3-.2-.6-.3Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M27 5a13 13 0 0 0-22 13.7L4 28l9.5-2A13 13 0 0 0 27 5Zm-2.8 14.9a10.3 10.3 0 0 1-12.1 2.1l-.3-.2-5.6 1.2 1.2-5.4-.2-.4a10.3 10.3 0 1 1 17 2.7Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <form className="grid">
                        {/* Row 1 */}
                        <div className="field">
                            <label>First name *</label>
                            <input type="text" name="firstName" placeholder="Jane" required />
                        </div>
                        <div className="field">
                            <label>Last name *</label>
                            <input type="text" name="lastName" placeholder="Doe" required />
                        </div>

                        {/* Row 2 */}
                        <div className="field">
                            <label>Email *</label>
                            <input type="email" name="email" placeholder="you@example.com" required />
                        </div>
                        <div className="field">
                            <label>Company (optional)</label>
                            <input type="text" name="company" placeholder="Company name" />
                        </div>

                        {/* Row 3 */}
                        <div className="field field--full">
                            <label>Phone (optional)</label>
                            <input type="tel" name="phone" placeholder="+44 …" />
                        </div>

                        {/* Row 4 */}
                        <div className="field field--full">
                            <label>Message *</label>
                            <textarea name="message" placeholder="Write your message…" required />
                        </div>

                        <div className="actions-bottom">
                            <button type="submit" className="btn">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <style jsx>{`
                /* progress line */
                .scroll-progress {
                    position: fixed;
                    top: 0; /* sits at the very top; header stays unchanged */
                    left: 0;
                    width: 100%;
                    height: 3px;
                    z-index: 99999;
                    pointer-events: none;
                }
                .scroll-progress span {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: #1e90ff;
                    transform-origin: 0 50%;
                    transform: scaleX(0);
                    transition: transform 120ms linear;
                    box-shadow: 0 0 12px rgba(30, 144, 255, 0.55);
                }

                /* hero */
                .hero {
                    position: relative;
                    height: 78vh;
                    min-height: 520px;
                    overflow: hidden;
                }
                .hero-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(65%);
                }
                .hero-shade {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                            0deg,
                            rgba(0, 0, 0, 0.55) 0%,
                            rgba(0, 0, 0, 0.28) 40%,
                            rgba(0, 0, 0, 0.15) 100%
                    );
                }
                .hero-copy {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    color: #fff;
                    padding: 0 24px;
                }
                .hero-title {
                    font-family: var(--font-playfair), serif;
                    font-size: 64px;
                    line-height: 1.06;
                    margin: 0;
                    text-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
                }

                /* page wrap */
                .wrap {
                    background: linear-gradient(180deg, #f5f9ff 0%, #ffffff 30%);
                    padding: 90px 24px 140px;
                }

                /* card */
                .card {
                    max-width: 1120px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 22px;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
                    padding: 32px 32px 28px;
                }
                .card-top {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 18px;
                    margin-bottom: 12px;
                }
                .card-title {
                    font-family: var(--font-playfair), serif;
                    font-size: 32px;
                    margin: 0 0 6px;
                }
                .card-sub {
                    color: #565a61;
                    margin: 0;
                    line-height: 1.6;
                }

                /* action icons */
                .actions {
                    display: flex;
                    gap: 10px;
                }
                .action-btn {
                    width: 42px;
                    height: 42px;
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #f3f7ff;
                    color: #1e90ff;
                    border: 1px solid rgba(30, 144, 255, 0.25);
                    box-shadow: 0 8px 24px rgba(30, 144, 255, 0.15);
                    transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
                }
                .action-btn:hover {
                    transform: translateY(-2px);
                    background: #eaf2ff;
                    box-shadow: 0 14px 36px rgba(30, 144, 255, 0.22);
                }

                /* grid form */
                .grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(300px, 1fr));
                    gap: 22px 22px; /* spacious */
                    margin-top: 12px;
                }
                .field {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .field--full {
                    grid-column: 1 / -1;
                }
                label {
                    font-size: 14px;
                    color: #333;
                    letter-spacing: 0.2px;
                }
                input,
                textarea {
                    width: 100%;
                    background: #fff;
                    border: 1px solid rgba(0, 0, 0, 0.12);
                    border-radius: 14px;
                    padding: 14px 16px;
                    font-size: 16px;
                    line-height: 1.3;
                    outline: none;
                    transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
                }
                input {
                    height: 56px; /* bigger inputs */
                }
                textarea {
                    min-height: 220px; /* generous message area */
                    resize: vertical;
                }
                input:focus,
                textarea:focus {
                    border-color: #1e90ff;
                    box-shadow: 0 0 0 4px rgba(30, 144, 255, 0.18);
                    background: #fcfdff;
                }

                .actions-bottom {
                    grid-column: 1 / -1;
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 6px;
                }
                .btn {
                    height: 48px;
                    padding: 0 18px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 15.5px;
                    color: #fff;
                    background: #1e90ff;
                    border: 1px solid #1e90ff;
                    box-shadow: 0 14px 36px rgba(30, 144, 255, 0.22);
                    transition: transform 160ms ease, box-shadow 160ms ease;
                }
                .btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 18px 44px rgba(30, 144, 255, 0.28);
                }

                @media (max-width: 900px) {
                    .hero-title { font-size: 46px; }
                    .grid { grid-template-columns: 1fr; }
                    .actions-bottom { justify-content: stretch; }
                    .btn { width: 100%; }
                }
            `}</style>
        </main>
    );
}