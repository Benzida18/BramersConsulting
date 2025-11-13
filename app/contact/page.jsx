"use client";

import { useState } from "react";
import { FaFacebookF, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const WEB3FORMS_KEY = "5a66e110-fd2a-4438-b396-186835357006";

export default function ContactPage() {
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const form = e.currentTarget;
            const formData = new FormData(form);
            formData.append("access_key", WEB3FORMS_KEY);

            // optional: subject + from name
            formData.append("subject", "New enquiry from Bramers Consulting website");
            formData.append("from_name", "Bramers Consulting Website");

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                form.reset();
            } else {
                console.error(data);
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <main
            style={{
                background: "#f7f7fa",
                minHeight: "100vh",
                paddingTop: "140px",
                paddingBottom: "80px",
            }}
        >
            {/* TOP SECTION */}
            <section
                style={{
                    width: "92%",
                    maxWidth: "1200px",
                    margin: "0 auto 60px",
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
                    gap: "52px",
                    alignItems: "center",
                }}
            >
                {/* LEFT – TEXT */}
                <div className="fade-in-up">
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "13px",
                            letterSpacing: "0.26em",
                            textTransform: "uppercase",
                            color: "#999",
                            marginBottom: "16px",
                        }}
                    >
                        Contact
                    </p>

                    <h1
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "42px",
                            lineHeight: 1.25,
                            margin: "0 0 20px",
                            color: "#111",
                        }}
                    >
                        Start a conversation about your next cross-border decision.
                    </h1>

                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "17px",
                            lineHeight: 1.7,
                            color: "#333",
                            maxWidth: "540px",
                        }}
                    >
                        Share a brief outline of your organisation, the markets you operate
                        in and the question you are currently working through. We will
                        respond with a considered reply rather than a generic template.
                    </p>

                    <ul
                        style={{
                            marginTop: "24px",
                            paddingLeft: "18px",
                            fontFamily: "var(--font-inter)",
                            fontSize: "15px",
                            color: "#555",
                            lineHeight: 1.7,
                        }}
                    >
                        <li>Discreet, partner-level response – no mailing lists.</li>
                        <li>We are comfortable signing NDAs where appropriate.</li>
                        <li>Advisory across the UK, Europe and African markets.</li>
                    </ul>
                </div>

                {/* RIGHT – FORM CARD */}
                <div className="form-card fade-in-up">
                    <form onSubmit={handleSubmit}>
                        {/* bot check (spam protection) */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            style={{ display: "none" }}
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        <div style={{ marginBottom: "18px" }}>
                            <label
                                htmlFor="name"
                                style={{
                                    display: "block",
                                    marginBottom: "6px",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "14px",
                                    color: "#555",
                                }}
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                required
                                placeholder="Your full name"
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: "18px" }}>
                            <label
                                htmlFor="organisation"
                                style={{
                                    display: "block",
                                    marginBottom: "6px",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "14px",
                                    color: "#555",
                                }}
                            >
                                Organisation
                            </label>
                            <input
                                id="organisation"
                                name="organisation"
                                placeholder="Company, fund or institution"
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: "18px" }}>
                            <label
                                htmlFor="email"
                                style={{
                                    display: "block",
                                    marginBottom: "6px",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "14px",
                                    color: "#555",
                                }}
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: "18px", display: "grid", gap: "14px" }}>
                            <div>
                                <label
                                    htmlFor="markets"
                                    style={{
                                        display: "block",
                                        marginBottom: "6px",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "14px",
                                        color: "#555",
                                    }}
                                >
                                    Markets
                                </label>
                                <input
                                    id="markets"
                                    name="markets"
                                    placeholder="e.g. UK, Côte d’Ivoire, Ghana"
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="timeline"
                                    style={{
                                        display: "block",
                                        marginBottom: "6px",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "14px",
                                        color: "#555",
                                    }}
                                >
                                    Timeline
                                </label>
                                <input
                                    id="timeline"
                                    name="timeline"
                                    placeholder="e.g. exploring / next 3–6 months"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: "22px" }}>
                            <label
                                htmlFor="message"
                                style={{
                                    display: "block",
                                    marginBottom: "6px",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "14px",
                                    color: "#555",
                                }}
                            >
                                How can we help?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Share a short summary of the decision, opportunity or challenge you’d like to discuss."
                                style={{
                                    ...inputStyle,
                                    resize: "vertical",
                                    minHeight: "120px",
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            style={{
                                width: "100%",
                                border: "none",
                                borderRadius: "999px",
                                padding: "13px 20px",
                                fontFamily: "var(--font-inter)",
                                fontSize: "15px",
                                fontWeight: 500,
                                cursor: status === "loading" ? "wait" : "pointer",
                                background:
                                    "linear-gradient(135deg, #1E90FF, #0044cc)",
                                color: "#fff",
                                boxShadow: "0 14px 28px rgba(0, 80, 170, 0.35)",
                                transition: "transform 0.18s ease, box-shadow 0.18s ease",
                            }}
                            className="submit-button"
                        >
                            {status === "loading" ? "Sending…" : "Send message"}
                        </button>

                        {status === "success" && (
                            <p
                                style={{
                                    marginTop: "14px",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "14px",
                                    color: "#0c8c4a",
                                }}
                            >
                                Thank you – your message has been sent. We’ll come back to you
                                shortly.
                            </p>
                        )}

                        {status === "error" && (
                            <p
                                style={{
                                    marginTop: "14px",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "14px",
                                    color: "#b00020",
                                }}
                            >
                                Something went wrong while sending your message. Please try
                                again or email us directly.
                            </p>
                        )}
                    </form>
                </div>
            </section>

            {/* DIRECT CONTACT CARDS */}
            <section
                style={{
                    width: "92%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "22px",
                    }}
                >
                    {/* Email */}
                    <div className="contact-card">
                        <div className="contact-icon">
                            <FaEnvelope size={18} />
                        </div>
                        <h3 className="contact-title">Email</h3>
                        <p className="contact-text">
                            For detailed briefs, documents or formal correspondence.
                        </p>
                        <a
                            href="mailto:lentrepreuneuriat40@gmail.com"
                            className="contact-link"
                        >
                            lentrepreuneuriat40@gmail.com
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="contact-card">
                        <div className="contact-icon">
                            <FaWhatsapp size={20} />
                        </div>
                        <h3 className="contact-title">WhatsApp</h3>
                        <p className="contact-text">
                            For quick questions, scheduling calls or sharing context.
                        </p>
                        <a
                            href="https://wa.me/447534259556"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            +44 7534 259 556
                        </a>
                    </div>

                    {/* Facebook */}
                    <div className="contact-card">
                        <div className="contact-icon">
                            <FaFacebookF size={18} />
                        </div>
                        <h3 className="contact-title">Facebook</h3>
                        <p className="contact-text">
                            Connect with{" "}
                            <span style={{ fontWeight: 600 }}>Bouraima Zida</span> for
                            ongoing updates and conversations.
                        </p>
                        <a
                            href="https://www.facebook.com/bouraima.zida"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            View profile →
                        </a>
                    </div>
                </div>
            </section>

            {/* local styles */}
            <style jsx>{`
                .form-card {
                    background: #ffffff;
                    border-radius: 24px;
                    padding: 26px 30px 30px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    backdrop-filter: blur(10px);
                    transform: translateY(0);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .form-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.16);
                }

                .submit-button:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 18px 36px rgba(0, 80, 170, 0.4);
                }

                .fade-in-up {
                    opacity: 0;
                    transform: translateY(16px);
                    animation: fadeUp 0.55s ease forwards;
                }

                .fade-in-up:nth-child(2) {
                    animation-delay: 0.08s;
                }

                .contact-card {
                    position: relative;
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 22px 22px 24px;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.06);
                    overflow: hidden;
                    transition: transform 0.25s ease, box-shadow 0.25s ease,
                    border-color 0.25s ease, background 0.25s ease;
                }

                .contact-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                            circle at top left,
                            rgba(30, 144, 255, 0.22),
                            transparent 55%
                    );
                    opacity: 0;
                    transition: opacity 0.25s ease;
                    pointer-events: none;
                }

                .contact-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 22px 48px rgba(15, 52, 96, 0.22);
                    border-color: rgba(30, 144, 255, 0.6);
                    background: linear-gradient(
                            135deg,
                            rgba(255, 255, 255, 1),
                            rgba(244, 248, 255, 1)
                    );
                }

                .contact-card:hover::before {
                    opacity: 1;
                }

                .contact-icon {
                    width: 34px;
                    height: 34px;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                    background: rgba(30, 144, 255, 0.12);
                    color: #1e90ff;
                }

                .contact-title {
                    font-family: var(--font-playfair);
                    font-size: 19px;
                    margin: 0 0 6px;
                    color: #111;
                }

                .contact-text {
                    font-family: var(--font-inter);
                    font-size: 14px;
                    line-height: 1.7;
                    color: #555;
                    margin: 0 0 10px;
                }

                .contact-link {
                    font-family: var(--font-inter);
                    font-size: 14px;
                    font-weight: 500;
                    color: #1e90ff;
                    text-decoration: none;
                }

                .contact-link:hover {
                    text-decoration: underline;
                }

                @keyframes fadeUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </main>
    );
}

const inputStyle = {
    width: "100%",
    borderRadius: "999px",
    border: "1px solid rgba(0,0,0,0.12)",
    padding: "11px 16px",
    fontFamily: "var(--font-inter)",
    fontSize: "14px",
    outline: "none",
    background: "rgba(255,255,255,0.96)",
    transition: "border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
};