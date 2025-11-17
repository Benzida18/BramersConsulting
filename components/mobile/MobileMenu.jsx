"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileIndustries from "./MobileIndustries";

export default function MobileMenu() {
    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [view, setView] = useState("main");

    // Only render this on small screens
    useEffect(() => {
        const update = () => {
            setIsMobile(window.innerWidth <= 900);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Lock body scroll when the overlay is open
    useEffect(() => {
        if (!isMobile) return;
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open, isMobile]);

    if (!isMobile) return null;

    const closeAll = () => {
        setOpen(false);
        setView("main");
    };

    return (
        <>
            {/* TOP BAR (logo + hamburger) */}
            <div className="mobile-nav-bar">
                <Link href="/" className="mobile-nav-logo-link">
                    <img
                        src="/logo.jpg"
                        alt="Bramers Consulting"
                        className="mobile-nav-logo"
                    />
                </Link>

                <button
                    type="button"
                    aria-label={open ? "Close navigation" : "Open navigation"}
                    className={`mobile-hamburger ${open ? "mobile-hamburger-open" : ""}`}
                    onClick={() => {
                        if (open) {
                            closeAll();
                        } else {
                            setOpen(true);
                            setView("main");
                        }
                    }}
                >
                    <span />
                    <span />
                </button>
            </div>

            {/* FULL-SCREEN OVERLAY */}
            {open && view === "main" && (
                <div className="mobile-menu-overlay">
                    <div className="mobile-menu-header">
                        <span className="mobile-menu-label">Navigation</span>
                        <button
                            type="button"
                            className="mobile-menu-close"
                            aria-label="Close navigation"
                            onClick={closeAll}
                        >
                            ×
                        </button>
                    </div>

                    <ul className="mobile-menu-list">
                        <li>
                            <Link href="/services" onClick={closeAll}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/case-studies" onClick={closeAll}>
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link href="/insights" onClick={closeAll}>
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={closeAll}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={closeAll}>
                                Contact
                            </Link>
                        </li>
                        {/* Industries – goes to second panel */}
                        <li>
                            <button
                                type="button"
                                className="mobile-menu-industries-link"
                                onClick={() => setView("industries")}
                            >
                                <span>Industries</span>
                                <span className="mobile-menu-arrow">→</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            {open && view === "industries" && (
                <MobileIndustries
                    onBack={() => setView("main")}
                    onClose={closeAll}
                />
            )}
        </>
    );
}