// app/contact/page.jsx
"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import "./contact.css";
import { useLanguage } from "@/components/LanguageContext";

const COPY = {
    en: {
        heroTitle: "Contact",

        eyebrow: "Contact",
        headline: "Start a conversation about your next cross-border decision.",
        body: "Share a short note about your organisation, the markets you operate in, and the question you are working through. We will read it carefully and respond with a considered reply rather than a generic template.",

        // NEW: sector selection copy
        interestHeading: "Which sectors are you interested in?",
        interestOptions: [
            { value: "Agribusiness", label: "Agribusiness" },
            { value: "Real estate & infrastructure", label: "Real Estate & Infrastructure" },
            { value: "Financial services", label: "Financial services" },
            { value: "Hospitality & catering", label: "Hospitality & Catering" },
            { value: "International trade & logistics", label: "International Trade & Logistics" },
            { value: "Sports & football advisory", label: "Sports & Football Advisory" },
            { value: "Coaching & training", label: "Coaching & Training" },
            { value: "AI strategy", label: "AI Strategy" },
            { value: "Mining & natural resources", label: "Mining & Natural Resources" },
            { value: "Other / not sure", label: "Other / not sure yet" },
        ],

        firstName: "First name",
        surname: "Surname",
        email: "Email address",
        phone: "Phone number",
        messageLabel: "How can we help?",
        messagePlaceholder:
            "Share a brief summary of your mandate, markets and timelines.",
        sendText: "Send message",
    },
    fr: {
        heroTitle: "Contact",

        eyebrow: "Contact",
        headline:
            "Engageons une conversation sur votre prochaine décision transfrontalière.",
        body: "Envoyez-nous quelques lignes sur votre organisation, les marchés dans lesquels vous opérez et la question que vous examinez actuellement. Nous lirons votre message avec attention et répondrons par un avis réfléchi, pas par un modèle générique.",

        // NEW: sector selection copy (FR)
        interestHeading: "Quels secteurs vous intéressent ?",
        interestOptions: [
            { value: "Agribusiness", label: "Agro-industrie" },
            {
                value: "Real estate & infrastructure",
                label: "Immobilier et infrastructures",
            },
            { value: "Financial services", label: "Services financiers" },
            {
                value: "Hospitality & catering",
                label: "Hôtellerie & restauration",
            },
            {
                value: "International trade & logistics",
                label: "Commerce international & logistique",
            },
            {
                value: "Sports & football advisory",
                label: "Conseil sportif & football",
            },
            { value: "Coaching & training", label: "Coaching & formation" },
            { value: "AI strategy", label: "Stratégie IA" },
            {
                value: "Mining & natural resources",
                label: "Mines & ressources naturelles",
            },
            { value: "Other / not sure", label: "Autre / incertain pour l’instant" },
        ],

        firstName: "Prénom",
        surname: "Nom de famille",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone",
        messageLabel: "Comment pouvons nous vous aider ?",
        messagePlaceholder:
            "Partagez un bref résumé de votre mandat, de vos marchés et de vos échéances.",
        sendText: "Envoyer le message",
    },
};

export default function ContactPage() {
    const [phone, setPhone] = useState("");
    const { language } = useLanguage();
    const t = COPY[language] || COPY.en;

    return (
        <main className="contact-page">
            {/* HERO WITH VIDEO */}
            <section className="contact-hero">
                <video
                    src="/videos/contact.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="contact-hero-overlay">
                    <h1 className="contact-hero-title">{t.heroTitle}</h1>
                </div>
            </section>

            {/* BODY: COPY LEFT + FORM RIGHT */}
            <section className="contact-body">
                <div className="contact-copy">
                    <p className="contact-eyebrow-small">{t.eyebrow}</p>
                    <h2 className="contact-copy-title">{t.headline}</h2>
                    <p className="contact-copy-text">{t.body}</p>
                </div>

                <div className="contact-card">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="contact-form"
                    >
                        {/* Web3Forms config */}
                        <input
                            type="hidden"
                            name="access_key"
                            value="5a66e110-fd2a-4438-b396-186835357006"
                        />
                        <input
                            type="hidden"
                            name="subject"
                            value="New enquiry from Bramers Consulting site"
                        />
                        <input
                            type="hidden"
                            name="from_name"
                            value="Bramers Consulting Website"
                        />

                        {/* FIRST NAME */}
                        <div className="input-group">
                            <label className="label" htmlFor="firstName">
                                {t.firstName}
                            </label>
                            <input
                                id="firstName"
                                name="first_name"
                                type="text"
                                className="input"
                                autoComplete="given-name"
                                required
                            />
                        </div>

                        {/* SURNAME */}
                        <div className="input-group">
                            <label className="label" htmlFor="surname">
                                {t.surname}
                            </label>
                            <input
                                id="surname"
                                name="last_name"
                                type="text"
                                className="input"
                                autoComplete="family-name"
                                required
                            />
                        </div>

                        {/* EMAIL */}
                        <div className="input-group">
                            <label className="label" htmlFor="email">
                                {t.email}
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="input"
                                autoComplete="email"
                                required
                            />
                        </div>

                        {/* PHONE */}
                        <div className="input-group">
                            <label className="label" htmlFor="phone">
                                {t.phone}
                            </label>
                            <div className="phone-row">
                                <PhoneInput
                                    defaultCountry="gb"
                                    value={phone}
                                    onChange={setPhone}
                                    inputProps={{
                                        name: "phone",
                                        id: "phone",
                                        required: true,
                                        autoComplete: "tel",
                                    }}
                                />
                            </div>
                        </div>

                        {/* NEW: SECTOR CHECKBOXES */}
                        <div className="input-group interests-group">
                            <p className="interests-heading">{t.interestHeading}</p>
                            <div className="interests-grid">
                                {t.interestOptions.map((opt) => (
                                    <label
                                        key={opt.value}
                                        className="interests-option"
                                    >
                                        {/* all share the same name so Web3Forms groups them */}
                                        <input
                                            type="checkbox"
                                            name="industries"
                                            value={opt.value}
                                        />
                                        <span>{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div className="input-group">
                            <label className="label" htmlFor="message">
                                {t.messageLabel}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="textarea"
                                placeholder={t.messagePlaceholder}
                                rows={4}
                                required
                            />
                        </div>

                        {/* BUTTON */}
                        <div className="contact-actions">
                            <button type="submit" className="fancy-btn">
                                <span className="top-key"></span>
                                <span className="text">{t.sendText}</span>
                                <span className="bottom-key-1"></span>
                                <span className="bottom-key-2"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}