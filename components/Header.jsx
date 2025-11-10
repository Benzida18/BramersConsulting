"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [indOpen, setIndOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 9999,
                padding: scrolled ? "10px 42px" : "26px 42px",
                // sits on top of video, visible from first paint
                background: scrolled ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.35)",
                backdropFilter: "blur(12px)",
                transition: "0.3s ease",
            }}
        >
            <nav
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "visible",
                }}
            >
                {/* LOGO (keep your size/position logic) */}
                <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src="/logo.jpg"
                        alt="Bramers Consulting"
                        style={{
                            height: scrolled ? "70px" : "100px",
                            width: "auto",
                            objectFit: "contain",
                            transition: "0.35s ease",
                        }}
                    />
                </Link>

                {/* NAV LINKS */}
                <ul
                    style={{
                        display: "flex",
                        gap: "48px",
                        listStyle: "none",
                        alignItems: "center",
                        // keep your left shift so long French labels still fit
                        transform: "translateX(-200px)",
                    }}
                >
                    {/* INDUSTRIES (white dropdown) */}
                    <li
                        onMouseEnter={() => setIndOpen(true)}
                        onMouseLeave={() => setIndOpen(false)}
                        style={{
                            position: "relative",
                            color: "white",
                            fontSize: "20px",
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                    >
                        <span className="dropdown-trigger">Industries ▾</span>

                        {indOpen && (
                            <ul className="dropdown-menu show" style={menuBoxStyle}>
                                {[
                                    ["Agribusiness", "/industries/agribusiness"],
                                    ["Real Estate", "/industries/real-estate"],
                                    ["Finance", "/industries/finance"],
                                    ["Catering & Hospitality", "/industries/catering-hospitality"],
                                    ["International Trade", "/industries/international-trade"],
                                    ["Football Advisory", "/industries/football-advisory"],
                                    ["Coaching & Training", "/industries/coaching-training"],
                                    ["AI Strategy", "/industries/ai-strategy"],
                                    ["Mining", "/industries/mining"],
                                ].map(([label, href]) => (
                                    <li key={href}>
                                        <Link href={href} style={menuItemStyle}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li><Link className="nav-link" href="/services" style={linkStyle}>Services</Link></li>
                    <li><Link className="nav-link" href="/case-studies" style={linkStyle}>Case Studies</Link></li>
                    <li><Link className="nav-link" href="/insights" style={linkStyle}>Insights</Link></li>
                    <li><Link className="nav-link" href="/about" style={linkStyle}>About</Link></li>
                    <li><Link className="nav-link" href="/contact" style={linkStyle}>Contact</Link></li>

                    {/* LANGUAGE (white dropdown, bold options) */}
                    <li
                        onMouseEnter={() => setLangOpen(true)}
                        onMouseLeave={() => setLangOpen(false)}
                        style={{
                            position: "relative",
                            color: "white",
                            fontSize: "19px",
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                    >
                        EN ▾
                        {langOpen && (
                            <ul className="dropdown-menu show" style={{ ...menuBoxStyle, right: 0, left: "auto" }}>
                                {[
                                    { label: "English", code: "en" },
                                    { label: "Français", code: "fr" },
                                ].map(({ label, code }) => (
                                    <li key={code}>
                    <span
                        style={menuItemStyle}
                        // placeholder handlers (you’ll wire these later)
                        onClick={(e) => e.preventDefault()}
                    >
                      {label}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            {/* Local styles for hover effects to match your look */}
            <style jsx>{`
        .nav-link {
          font-family: var(--font-playfair);
          color: #fff;
          text-decoration: none;
        }
        .nav-link:hover,
        .dropdown-trigger:hover {
          color: #1e90ff;
        }
      `}</style>
        </header>
    );
}

/* ---------- tiny style objects so we don't depend on globals ---------- */
const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: "var(--font-playfair)",
    fontSize: "20px",
};

const menuBoxStyle = {
    position: "absolute",
    top: "36px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#ffffff",
    borderRadius: "14px",
    padding: "18px 26px",
    display: "grid",
    gridTemplateColumns: "repeat(3, max-content)",
    columnGap: "42px",
    rowGap: "13px",
    minWidth: "520px",
    boxShadow: "0 18px 48px rgba(0,0,0,0.17)",
    zIndex: 10000,
};

const menuItemStyle = {
    display: "block",
    fontFamily: "var(--font-inter)",
    fontSize: "18px",
    fontWeight: 600,
    color: "#0A0A0A",
    textDecoration: "none",
    whiteSpace: "nowrap",
    padding: "6px 0",
    transition: "0.25s ease",
    cursor: "pointer",
};