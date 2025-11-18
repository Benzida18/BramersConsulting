"use client";

export default function MobileHowWeWork() {
    const steps = [
        {
            title: "01 · Discovery & Context",
            text: "Understanding your mandate, stakeholders and market constraints.",
        },
        {
            title: "02 · Design & Structuring",
            text: "Mapping scenarios, risk, and strategic options for execution.",
        },
        {
            title: "03 · Execution",
            text: "Partnering with institutions and teams to deliver outcomes.",
        },
    ];

    return (
        <section className="m-section">
            <h2 className="m-title">How We Work</h2>

            <div className="m-list">
                {steps.map((s) => (
                    <div className="m-step" key={s.title}>
                        <h3>{s.title}</h3>
                        <p>{s.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}