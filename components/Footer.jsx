// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
    const year = new Date().getFullYear();
    const { language } = useLanguage();

    const TEXT = {
        en: {
            brand: "Bramers Consulting",
            tagline:
                "Independent advisory bridging leadership, markets, and partnership execution across the UK & Africa.",
            navigateHeading: "Navigate",
            connectHeading: "Connect",
            copyrightSuffix: "Bramers Consulting — All rights reserved.",
            navLinks: [
                ["Industries", "/industries"],
                ["Services", "/services"],
                ["Case Studies", "/case-studies"],
                ["Insights", "/insights"],
                ["About", "/about"],
                ["Contact", "/contact"],
            ],
        },
        fr: {
            brand: "Bramers Consulting",
            tagline:
                "Cabinet de conseil indépendant reliant leadership, marchés et exécution de partenariats entre le Royaume-Uni et l’Afrique.",
            navigateHeading: "Navigation",
            connectHeading: "Contact",
            copyrightSuffix:
                "Bramers Consulting — Tous droits réservés.",
            navLinks: [
                ["Secteurs", "/industries"],
                ["Services", "/services"],
                ["Études de cas", "/case-studies"],
                ["Analyses", "/insights"],
                ["À propos", "/about"],
                ["Contact", "/contact"],
            ],
        },
    };

    const t = TEXT[language] ?? TEXT.en;

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                {/* LEFT */}
                <div className="footer-left">
                    <Image
                        src="/logo.jpg"
                        alt="Bramers Consulting Logo"
                        width={75}
                        height={75}
                        className="footer-logo"
                    />

                    <h3 className="footer-brand">{t.brand}</h3>

                    <p className="footer-text">{t.tagline}</p>
                </div>

                {/* CENTER */}
                <div className="footer-center">
                    <h4 className="footer-heading">{t.navigateHeading}</h4>

                    <nav className="footer-nav">
                        {t.navLinks.map(([label, href]) => (
                            <Link key={href} href={href} className="footer-link">
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* RIGHT — SOCIAL ICONS */}
                <div className="footer-right">
                    <h4 className="footer-heading">{t.connectHeading}</h4>

                    <div className="footer-social">
                        {/* EMAIL */}
                        <a
                            href="mailto:lentrepreuneuriat40@gmail.com"
                            aria-label="Email Bramers Consulting"
                        >
                            <svg width="26" height="26" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2
                                       2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0
                                       4-8 5-8-5V6l8 5 8-5v2z"
                                />
                            </svg>
                        </a>

                        {/* WHATSAPP */}
                        <a
                            href="https://wa.me/447534259556"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Bramers Consulting"
                        >
                            <svg width="28" height="28" viewBox="0 0 32 32">
                                <path
                                    fill="currentColor"
                                    d="M16.002 3.2c-7.06 0-12.8 5.74-12.8 12.8
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
                                       .13.61-.09 1.88-.77 2.15-1.52.27-.75.27-1.4.19-1.52-.08-.13-.29-.21-.61-.37z"
                                />
                            </svg>
                        </a>

                        {/* FACEBOOK */}
                        <a
                            href="https://www.facebook.com/bouraima.zida"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook Bramers Consulting"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22 12c0-5.52-4.48-10-10-10S2
                                       6.48 2 12c0 5 3.66 9.13
                                       8.44 9.88v-6.99H8.08v-2.89h2.36V9.83c0-2.33
                                       1.39-3.62 3.52-3.62.72
                                       0 1.53.13 1.53.13v2.11h-.86c-.85
                                       0-1.12.53-1.12 1.07v1.29h2.89l-.46
                                       2.89h-2.43v6.99C18.34 21.13 22
                                       17 22 12z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="footer-copy">
                © {year} {t.copyrightSuffix}
            </div>

            <style jsx>{`
                .site-footer {
                    background: rgba(5, 8, 13, 0.92);
                    backdrop-filter: blur(12px);
                    color: #ffffff;
                    padding: 90px 0 40px;
                    margin-top: 140px;
                }

                .footer-inner {
                    max-width: 1250px;
                    margin: 0 auto;
                    padding: 0 32px;
                    display: grid;
                    grid-template-columns: 1.3fr 1fr 0.9fr;
                    align-items: flex-start;
                    gap: 75px;
                }

                .footer-logo {
                    border-radius: 10px;
                    margin-bottom: 18px;
                }

                .footer-brand {
                    font-family: var(--font-playfair);
                    font-size: 30px;
                    margin: 0 0 16px;
                }

                .footer-text {
                    font-size: 17px;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.75);
                    max-width: 370px;
                    margin: 0;
                }

                .footer-center {
                    text-align: center;
                }

                .footer-heading {
                    font-family: var(--font-playfair);
                    font-size: 21px;
                    margin: 0 0 26px;
                }

                .footer-nav {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(140px, 1fr));
                    gap: 14px 55px;
                    justify-content: center;
                    font-size: 17px;
                    line-height: 1.7;
                }

                .footer-link {
                    color: rgba(255, 255, 255, 0.78);
                    text-decoration: none;
                    transition: color 0.25s ease;
                }

                .footer-link:hover {
                    color: #ffffff;
                }

                .footer-right {
                    text-align: right;
                }

                .footer-social {
                    display: flex;
                    gap: 20px;
                    justify-content: flex-end;
                    align-items: center;
                }

                .footer-social a {
                    color: #ffffff;
                    display: inline-flex;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }

                .footer-social a:hover {
                    opacity: 0.85;
                    transform: translateY(-1px);
                }

                .footer-copy {
                    text-align: center;
                    margin-top: 70px;
                    padding-top: 28px;
                    border-top: 1px solid rgba(255, 255, 255, 0.07);
                    font-size: 15px;
                    color: rgba(255, 255, 255, 0.55);
                }

                /* ---------- RESPONSIVE FOOTER ---------- */

                @media (max-width: 900px) {
                    .site-footer {
                        padding: 60px 0 32px;
                        margin-top: 90px;
                    }

                    .footer-inner {
                        grid-template-columns: 1fr;
                        gap: 32px;
                        padding: 0 20px;
                    }

                    .footer-center,
                    .footer-right {
                        text-align: left;
                    }

                    .footer-nav {
                        grid-template-columns: 1fr;
                        gap: 10px;
                        justify-items: flex-start;
                    }

                    .footer-social {
                        justify-content: flex-start;
                    }

                    .footer-copy {
                        margin-top: 40px;
                        padding-top: 20px;
                        font-size: 13px;
                    }
                }

                @media (max-width: 540px) {
                    .site-footer {
                        padding: 52px 0 26px;
                        margin-top: 70px;
                    }

                    .footer-brand {
                        font-size: 26px;
                    }

                    .footer-text {
                        font-size: 15px;
                    }

                    .footer-heading {
                        font-size: 19px;
                    }
                }
            `}</style>
        </footer>
    );
}