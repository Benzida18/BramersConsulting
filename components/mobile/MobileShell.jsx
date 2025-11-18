"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./mobile.css";

export default function MobileShell({ children }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => (document.body.style.overflow = "");
    }, [open]);

    return (
        <>
            {/* TOP BAR */}
            <header className="m-header">
                <Link href="/" className="m-logo-link">
                    <img src="/logo.jpg" className="m-logo" alt="Bramers" />
                </Link>

                <button
                    className={`m-burger ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                </button>
            </header>

            {/* FULL-SCREEN OVERLAY */}
            {open && (
                <div className="m-menu-overlay">
                    <button
                        className="m-close"
                        onClick={() => setOpen(false)}
                        aria-label="Close"
                    >
                        ×
                    </button>

                    <nav className="m-menu-list">
                        <Link href="/services" onClick={() => setOpen(false)}>
                            Services
                        </Link>
                        <Link href="/case-studies" onClick={() => setOpen(false)}>
                            Case Studies
                        </Link>
                        <Link href="/insights" onClick={() => setOpen(false)}>
                            Insights
                        </Link>
                        <Link href="/about" onClick={() => setOpen(false)}>
                            About
                        </Link>
                        <Link href="/contact" onClick={() => setOpen(false)}>
                            Contact
                        </Link>
                        <Link href="/industries" onClick={() => setOpen(false)}>
                            Industries →
                        </Link>
                    </nav>
                </div>
            )}

            {/* MAIN CONTENT */}
            <div className="m-page">{children}</div>
        </>
    );
}