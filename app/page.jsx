"use client";

import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import IndustryCard from "@/components/IndustryCard";
import IndustrySection from "@/components/IndustrySection";
import HowWeWork from "@/components/HowWeWork";

export default function Home() {
    return (
        <main>
            <div className="desktop-only">
                <Hero />
                <Mission />
                <IndustryCard />
                <IndustrySection />
                <HowWeWork />

            </div>

            <div className="mobile-only">
                <Hero />
                <Mission />
                <IndustryCard />
                <IndustrySection />
                <HowWeWork />

            </div>
        </main>
    );
}