"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import IndustryCard from "../components/IndustryCard";
import IndustrySection from "../components/IndustrySection";
import HowWeWork from "../components/HowWeWork";

// ⬇ mobile imports
import MobileShell from "../components/mobile/MobileShell";
import MobileHero from "../components/mobile/MobileHero";
import MobileMission from "../components/mobile/MobileMission";
import MobileIndustries from "../components/mobile/MobileIndustries";
import MobileHowWeWork from "../components/mobile/MobileHowWeWork";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 900);
        check();

        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    if (isMobile) {
        return (
            <MobileShell>
                <MobileHero />
                <MobileMission />
                <MobileIndustries />
                <MobileHowWeWork />
            </MobileShell>
        );
    }

    // Desktop layout stays the same
    return (
        <main>
            <Header />
            <Hero />
            <Mission />
            <IndustryCard />
            <IndustrySection />
            <HowWeWork />
        </main>
    );
}