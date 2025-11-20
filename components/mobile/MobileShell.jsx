"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileShell({ children }) {
    // view: "none" | "nav" | "industries" | "language"
    const [view, setView] = useState("none");

    const menuOpen = view !== "none";

    // lock body scroll when overlays open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
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

                    <button
                        type="button"
                        className="m-lang-trigger"
                        onClick={() => setView("language")}
                    >
                        EN
                    </button>

                    <button
                        type="button"
                        className={`m-burger ${menuOpen ? "open" : ""}`}
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        onClick={() => {
                            menuOpen ? closeAll() : setView("nav");
                        }}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {menuOpen && (
                <MobileNavOverlay
                    view={view}
                    setView={setView}
                    closeAll={closeAll}
                />
            )}

            <div className="m-page">{children}</div>
        </>
    );
}