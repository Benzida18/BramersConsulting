"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import IndustryCard from "../components/IndustryCard";
import IndustrySection from "../components/IndustrySection";
import HowWeWork from "../components/HowWeWork"; // 👈 new

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Mission />
            <IndustryCard />
            <IndustrySection />
            <HowWeWork />   {/* 👈 replaces <Insights /> */}
        </main>
    );
}