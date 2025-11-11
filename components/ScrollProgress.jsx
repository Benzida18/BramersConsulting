"use client";
import { useEffect } from "react";

export default function ScrollProgress() {
    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;

            const bar = document.getElementById("scroll-progress");
            if (bar) bar.style.width = `${progress}%`;
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            id="scroll-progress"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "3px",
                width: "0%",
                backgroundColor: "#1E90FF",
                transition: "width 0.15s ease-out",
                zIndex: 9999,
            }}
        />
    );
}