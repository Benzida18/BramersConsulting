"use client";

import MobileShell from "@/components/mobile/MobileShell";

// Desktop components
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import IndustryCard from "@/components/IndustryCard";
import IndustrySection from "@/components/IndustrySection";
import HowWeWork from "@/components/HowWeWork";

// Mobile components
import MobileHero from "@/components/mobile/MobileHero";
import MobileMission from "@/components/mobile/MobileMission";
import MobileIndustryCard from "@/components/mobile/MobileIndustryCard";
import MobileIndustrySection from "@/components/mobile/MobileIndustrySection";
import MobileHowWeWork from "@/components/mobile/MobileHowWeWork";

export default function Home() {
    return (
        <main>
            <MobileShell>
                {/* DESKTOP */}
                <div className="desktop-only">
                    <Hero />
                    <Mission />
                    <IndustryCard />
                    <IndustrySection />
                    <HowWeWork />
                </div>

                {/* MOBILE */}
                <div className="mobile-only">
                    <MobileHero />
                    <MobileMission />
                    <MobileIndustryCard />
                    <MobileIndustrySection />
                    <MobileHowWeWork />
                </div>
            </MobileShell>
        </main>
    );
}