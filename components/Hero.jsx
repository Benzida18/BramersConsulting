"use client";
import { useState, useEffect } from "react";

export default function Hero() {
    const lines = [
        { text: "Bramers.", color: "#0066FF" },
        { text: "Bridging Markets.", color: "#FFFFFF" },
        { text: "Empowering Institutions.", color: "#FFFFFF" },
    ];

    const [visibleLines, setVisibleLines] = useState(["", "", ""]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= lines.length) return;

        const current = lines[lineIndex].text;
        if (charIndex < current.length) {
            const t = setTimeout(() => {
                const updated = [...visibleLines];
                updated[lineIndex] = current.slice(0, charIndex + 1);
                setVisibleLines(updated);
                setCharIndex(charIndex + 1);
            }, 120);
            return () => clearTimeout(t);
        } else {
            const pause = setTimeout(() => {
                setLineIndex(lineIndex + 1);
                setCharIndex(0);
            }, 800);
            return () => clearTimeout(pause);
        }
    }, [charIndex, lineIndex, visibleLines]);

    return (
        <section className="hero-section desktop-hero">
            <video
                src="/videos/london2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            />

            <div className="hero-heading hero-heading-desktop">
                <div style={{ color: lines[0].color }}>{visibleLines[0]}</div>
                <div style={{ color: lines[1].color }}>{visibleLines[1]}</div>
                <div style={{ color: lines[2].color }}>{visibleLines[2]}</div>
            </div>
        </section>
    );
}