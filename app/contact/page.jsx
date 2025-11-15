"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import "./contact.css";

export default function ContactPage() {
    const [phone, setPhone] = useState("");

    return (
        <main className="contact-page">
            {/* HERO WITH VIDEO – ONLY "CONTACT" */}
            <section className="contact-hero">
                <video
                    src="/videos/contact.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="contact-hero-overlay">
                    <h1 className="contact-hero-title">Contact</h1>
                </div>
            </section>

            {/* BODY: COPY LEFT + FORM CARD RIGHT */}
            <section className="contact-body">
                <div className="contact-copy">
                    <p className="contact-eyebrow-small">Contact</p>
                    <h2 className="contact-copy-title">
                        Start a conversation about your next cross-border decision.
                    </h2>
                    <p className="contact-copy-text">
                        Share a brief outline of your organisation, the markets you operate in
                        and the question you&apos;re currently working through. We will respond
                        with a considered reply rather than a generic template.
                    </p>
                    <ul className="contact-copy-bullets">
                        <li>Discreet, partner-level response – no mailing lists.</li>
                        <li>Comfortable signing NDAs where appropriate.</li>
                        <li>Advisory across the UK, Europe and African markets.</li>
                    </ul>
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
                                First name
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
                                Surname
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
                                Email address
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

                        {/* PHONE – GLOBAL DROPDOWN VIA react-international-phone */}
                        <div className="input-group">
                            <label className="label" htmlFor="phone">
                                Phone number
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
                                How can we help?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="textarea"
                                placeholder="Share a brief summary of your mandate, markets and timelines."
                                rows={4}
                                required
                            />
                        </div>

                        {/* BUTTON – fancy black animation (from globals.css) */}
                        <div className="contact-actions">
                            <button type="submit" className="fancy-btn">
                                <span className="top-key"></span>
                                <span className="text">Send message</span>
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