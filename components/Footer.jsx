"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            style={{
                background: "rgba(5, 8, 13, 0.92)",
                backdropFilter: "blur(12px)",
                color: "white",
                padding: "90px 0 40px",
                marginTop: "140px",
            }}
        >
            <div
                style={{
                    maxWidth: "1250px",
                    margin: "0 auto",
                    padding: "0 32px",
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1fr 0.9fr",
                    alignItems: "start",
                    gap: "75px",
                }}
            >
                {/* LEFT: Logo + Description */}
                <div>
                    <Image
                        src="/logo.jpg"
                        alt="Bramers Consulting Logo"
                        width={75}
                        height={75}
                        style={{ borderRadius: "10px", marginBottom: "18px" }}
                    />

                    <h3
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "30px",
                            marginBottom: "16px",
                        }}
                    >
                        Bramers Consulting
                    </h3>

                    <p
                        style={{
                            fontSize: "17px",
                            lineHeight: "1.7",
                            color: "rgba(255,255,255,0.75)",
                            maxWidth: "370px",
                        }}
                    >
                        Independent advisory bridging leadership, markets, and partnership
                        execution across the UK & Africa.
                    </p>
                </div>

                {/* CENTER: Navigation (Centered) */}
                <div style={{ textAlign: "center", transform: "translateX(20px)" }}>
                    <h4
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "21px",
                            marginBottom: "26px",
                        }}
                    >
                        Navigate
                    </h4>

                    <nav
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, minmax(140px, 1fr))",
                            gap: "14px 55px",
                            justifyContent: "center",
                            fontSize: "17px",
                            lineHeight: "1.7",
                        }}
                    >
                        {[
                            ["Industries", "/industries"],
                            ["Services", "/services"],
                            ["Case Studies", "/case-studies"],
                            ["Insights", "/insights"],
                            ["About", "/about"],
                            ["Contact", "/contact"],
                        ].map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                style={{
                                    color: "rgba(255,255,255,0.78)",
                                    textDecoration: "none",
                                    transition: ".25s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "white")}
                                onMouseLeave={(e) =>
                                    (e.target.style.color = "rgba(255,255,255,0.78)")
                                }
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* RIGHT: Social Icons (Closer to center now) */}
                <div style={{ textAlign: "right", transform: "translateX(-100px)" }}>
                    <h4
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "21px",
                            marginBottom: "26px",
                        }}
                    >
                        Connect
                    </h4>

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <a href="mailto:lentrepreuneuriat40@gmail.com" style={{ color: "white" }}>
                            <FaEnvelope size={24} />
                        </a>

                        <a
                            href="https://wa.me/447534259556"
                            target="_blank"
                            rel="noopener"
                            style={{ color: "white" }}
                        >
                            <FaWhatsapp size={26} />
                        </a>

                        <a
                            href="https://www.facebook.com/bouraima.zida"
                            target="_blank"
                            rel="noopener"
                            style={{ color: "white" }}
                        >
                            <FaFacebookF size={23} />
                        </a>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div
                style={{
                    textAlign: "center",
                    marginTop: "70px",
                    paddingTop: "28px",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.55)",
                }}
            >
                © {new Date().getFullYear()} Bramers Consulting — All rights reserved.
            </div>
        </footer>
    );
}