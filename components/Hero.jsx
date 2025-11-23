"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Hero() {
    const { language } = useLanguage();

    // 1) Text for EN + FR
    const lineSets = {
        en: [
            { text: "Bramers.", color: "#041e45" },
            { text: "Bridging Markets.", color: "#FFFFFF" },
            { text: "Empowering Institutions.", color: "#FFFFFF" },
        ],
        fr: [
            { text: "Bramers.", color: "#052555" },
            { text: "Relier les marchés.", color: "#FFFFFF" },
            { text: "Renforcer les institutions.", color: "#FFFFFF" },
        ],
    };

    const lines = lineSets[language] ?? lineSets.en;

    // 2) Typing state
    const [visibleLines, setVisibleLines] = useState(
        () => lines.map(() => "")
    );
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // 3) Reset animation whenever language changes
    useEffect(() => {
        setVisibleLines(lines.map(() => ""));
        setLineIndex(0);
        setCharIndex(0);
    }, [language]); // runs when EN ↔ FR

    // 4) Typewriter effect
    useEffect(() => {
        if (lineIndex >= lines.length) return;

        const current = lines[lineIndex].text;

        if (charIndex < current.length) {
            const t = setTimeout(() => {
                setVisibleLines((prev) => {
                    const updated = [...prev];
                    updated[lineIndex] = current.slice(0, charIndex + 1);
                    return updated;
                });
                setCharIndex((c) => c + 1);
            }, 120);

            return () => clearTimeout(t);
        } else {
            const pause = setTimeout(() => {
                setLineIndex((i) => i + 1);
                setCharIndex(0);
            }, 800);

            return () => clearTimeout(pause);
        }
    }, [charIndex, lineIndex, lines]);

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