"use client";
import { useState, useEffect } from "react";

export default function Hero() {
    const lines = [
        { text: "Bramers.", color: "#0066FF" }, // darker blue
        { text: "Bridging Markets.", color: "#FFFFFF" },
        { text: "Empowering Institutions.", color: "#FFFFFF" }
    ];

    const [visibleLines, setVisibleLines] = useState(["", "", ""]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= lines.length) return;

        const currentText = lines[lineIndex].text;

        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                const updated = [...visibleLines];
                updated[lineIndex] = currentText.slice(0, charIndex + 1);
                setVisibleLines(updated);
                setCharIndex(charIndex + 1);
            }, 120); // typing speed
            return () => clearTimeout(timeout);
        } else {
            const pause = setTimeout(() => {
                setLineIndex(lineIndex + 1);
                setCharIndex(0);
            }, 800);
            return () => clearTimeout(pause);
        }
    }, [charIndex, lineIndex, visibleLines]);

    return (
        <section className="hero-section">
            {/* Background Video */}
            <video
                src="/videos/london2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            />

            <div className="hero-heading">
                <div style={{ color: lines[0].color }}>{visibleLines[0]}</div>
                <div style={{ color: lines[1].color }}>{visibleLines[1]}</div>
                <div style={{ color: lines[2].color }}>{visibleLines[2]}</div>
            </div>
        </section>
    );
}