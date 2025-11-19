"use client";

import Link from "next/link";

export default function MobileFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="m-footer">
            {/* Top: logo + text */}
            <div className="m-footer-block">
                <img
                    src="/logo.jpg"
                    alt="Bramers Consulting Logo"
                    className="m-footer-logo"
                />
                <h3 className="m-footer-title">Bramers Consulting</h3>
                <p className="m-footer-text">
                    Independent advisory bridging leadership, markets, and partnership
                    execution across the UK &amp; Africa.
                </p>
            </div>

            {/* Navigate */}
            <div className="m-footer-block">
                <h4 className="m-footer-heading">Navigate</h4>
                <div className="m-footer-links">
                    {[
                        ["Industries", "/industries"],
                        ["Services", "/services"],
                        ["Case Studies", "/case-studies"],
                        ["Insights", "/insights"],
                        ["About", "/about"],
                        ["Contact", "/contact"],
                    ].map(([label, href]) => (
                        <Link key={href} href={href} className="m-footer-link">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Connect */}
            <div className="m-footer-block">
                <h4 className="m-footer-heading">Connect</h4>
                <div className="m-footer-links m-footer-links-inline">
                    <a
                        href="mailto:lentrepreuneuriat40@gmail.com"
                        className="m-footer-link"
                    >
                        Email
                    </a>
                    <a
                        href="https://wa.me/447534259556"
                        target="_blank"
                        rel="noopener"
                        className="m-footer-link"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="https://www.facebook.com/bouraima.zida"
                        target="_blank"
                        rel="noopener"
                        className="m-footer-link"
                    >
                        Facebook
                    </a>
                </div>
            </div>

            <div className="m-footer-bottom">
                © {year} Bramers Consulting — All rights reserved.
            </div>
        </footer>
    );
}