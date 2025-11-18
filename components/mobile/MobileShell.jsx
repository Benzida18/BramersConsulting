"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import "./mobile.css";

export default function MobileShell({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    if (!isMobile) return null; // Desktop will not use this shell

    return (
        <div className="mobile-shell">
            <MobileMenu />
            {children}
        </div>
    );
}