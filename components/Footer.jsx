"use client";

import Image from "next/image";
import Link from "next/link";

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
                {/* LEFT */}
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

                {/* CENTER */}
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

                {/* RIGHT — SOCIAL ICONS */}
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
                        {/* EMAIL ICON */}
                        <a href="mailto:lentrepreuneuriat40@gmail.com" style={{ color: "white" }}>
                            <svg
                                width="26"
                                height="26"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2
                                         2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0
                                         4-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>

                        {/* WHATSAPP ICON */}
                        <a
                            href="https://wa.me/447534259556"
                            target="_blank"
                            rel="noopener"
                            style={{ color: "white" }}
                        >
                            <svg
                                width="28"
                                height="28"
                                fill="white"
                                viewBox="0 0 32 32"
                            >
                                <path d="M16.002 3.2c-7.06 0-12.8 5.74-12.8 12.8
                                         0 2.26.59 4.45 1.71 6.39L3.2
                                         28.8l6.64-1.72c1.86 1 3.96 1.53
                                         6.16 1.53h.01c7.06
                                         0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0
                                         23.04h-.01c-1.98 0-3.91-.53-5.6-1.54l-.4-.24-3.94
                                         1.02 1.05-3.84-.26-.4a10.55
                                         10.55 0 0 1-1.68-5.74c0-5.86
                                         4.77-10.63 10.63-10.63s10.63
                                         4.77 10.63 10.63c0 5.86-4.77
                                         10.63-10.63 10.63zm5.8-7.96c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82
                                         1.04-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.84-1.59-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.15-.15.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.33-.26-.63-.52-.54-.71-.55-.18-.01-.4-.01-.62-.01-.21
                                         0-.55.08-.84.4-.29.32-1.1 1.08-1.1
                                         2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.4 5.37 4.76.75.32
                                         1.34.51 1.8.65.76.24 1.45.21 2
                                         .13.61-.09 1.88-.77 2.15-1.52.27-.75.27-1.4.19-1.52-.08-.13-.29-.21-.61-.37z" />
                            </svg>
                        </a>

                        {/* FACEBOOK ICON */}
                        <a
                            href="https://www.facebook.com/bouraima.zida"
                            target="_blank"
                            rel="noopener"
                            style={{ color: "white" }}
                        >
                            <svg
                                width="24"
                                height="24"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12c0-5.52-4.48-10-10-10S2
                                         6.48 2 12c0 5 3.66 9.13
                                         8.44 9.88v-6.99H8.08v-2.89h2.36V9.83c0-2.33
                                         1.39-3.62 3.52-3.62.72
                                         0 1.53.13 1.53.13v2.11h-.86c-.85
                                         0-1.12.53-1.12 1.07v1.29h2.89l-.46
                                         2.89h-2.43v6.99C18.34 21.13 22
                                         17 22 12z" />
                            </svg>
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