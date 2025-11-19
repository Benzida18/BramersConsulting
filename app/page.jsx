"use client";

import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import IndustryCard from "@/components/IndustryCard";
import IndustrySection from "@/components/IndustrySection";
import HowWeWork from "@/components/HowWeWork";

export default function Home() {
    return (
        <main>
            <Hero />
            <Mission />
            <IndustryCard />
            <IndustrySection />
            <HowWeWork />
        </main>
    );
}