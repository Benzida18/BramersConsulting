"use client";

export default function MobileHero() {
    return (
        <section className="m-hero">
            <video
                src="/videos/london2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="m-hero-video"
            />

            <div className="m-hero-heading">
                <div>Bramers.</div>
                <div>Bridging Markets.</div>
                <div>Empowering Institutions.</div>
            </div>
        </section>
    );
}