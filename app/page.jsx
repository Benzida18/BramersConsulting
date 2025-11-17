"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import IndustryCard from "../components/IndustryCard";
import IndustrySection from "../components/IndustrySection";
import HowWeWork from "../components/HowWeWork";

// 👇 new import
import MobileMenu from "../components/mobile/MobileMenu";

export default function Home() {
    return (
        <main>
            {/* Mobile-only top bar + full-screen menu.
                On desktop this returns null, so nothing changes. */}
            <MobileMenu />

            {/* Desktop header (hidden on mobile by CSS in mobile.css) */}
            <Header />

            <Hero />
            <Mission />
            <IndustryCard />
            <IndustrySection />
            <HowWeWork />
        </main>
    );
}