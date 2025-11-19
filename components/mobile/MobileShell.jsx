"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileNavOverlay from "./MobileNavOverlay";

export default function MobileShell({ children }) {
    // view: "none" | "nav" | "industries" | "language"
    const [view, setView] = useState("none");

    const menuOpen = view !== "none";

    // lock body scroll when overlays open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeAll = () => setView("none");

    return (
        <>
            {/* FIXED TOP BAR */}
            <header className="m-header">
                <Link href="/" className="m-logo-link" onClick={closeAll}>
                    <img
                        src="/logo.jpg"
                        alt="Bramers Consulting"
                        className="m-logo"
                    />
                </Link>

                <div className="m-header-right">
                    {/* Language trigger – left of burger */}
                    <button
                        type="button"
                        className="m-lang-trigger"
                        onClick={() => setView("language")}
                    >
                        EN
                    </button>

                    {/* Hamburger */}
                    <button
                        type="button"
                        className={`m-burger ${menuOpen ? "open" : ""}`}
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        onClick={() => {
                            if (menuOpen) {
                                closeAll();
                            } else {
                                setView("nav");
                            }
                        }}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* FULL-SCREEN OVERLAYS */}
            {menuOpen && (
                <MobileNavOverlay
                    view={view}
                    setView={setView}
                    closeAll={closeAll}
                />
            )}

            {/* PAGE CONTENT (pushed down under fixed header) */}
            <div className="m-page">{children}</div>
        </>
    );
}