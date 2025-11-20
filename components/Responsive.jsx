"use client";

import { useEffect, useState } from "react";

export default function Responsive({ mobile, desktop }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 900);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isMobile ? mobile : desktop;
}