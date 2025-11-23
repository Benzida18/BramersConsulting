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
        body: "Share a brief outline of your organisation, the markets you operate in and the question you're currently working through. We will respond with a considered reply rather than a generic template.",
        bullets: [
            "Discreet, partner-level response – no mailing lists.",
            "Comfortable signing NDAs where appropriate.",
            "Advisory across the UK, Europe and African markets.",
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
        body: "Partagez une brève description de votre organisation, des marchés dans lesquels vous opérez et de la question que vous examinez actuellement. Nous répondrons avec un avis réfléchi plutôt qu’un modèle générique.",
        bullets: [
            "Réponse discrète au niveau partenaire – aucune liste de diffusion.",
            "Habitués à signer des accords de confidentialité (NDA) lorsque nécessaire.",
            "Conseil couvrant les marchés du Royaume-Uni, de l’Europe et de l’Afrique.",
        ],

        firstName: "Prénom",
        surname: "Nom de famille",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone",
        messageLabel: "Comment pouvons-nous vous aider ?",
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
                    <ul className="contact-copy-bullets">
                        {t.bullets.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="contact-card">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="contact-form"
                    >
                        {/* Web3Forms config – unchanged */}
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