// components/mobile/MobileIndustries.jsx
"use client";

export default function MobileIndustries({ onBack, onClose }) {

    const LIST = [
        ["Agribusiness", "/industries/agribusiness"],
        ["Real Estate", "/industries/real-estate"],
        ["Finance", "/industries/finance"],
        ["Catering & Hospitality", "/industries/catering-hospitality"],
        ["International Trade", "/industries/international-trade"],
        ["Football Advisory", "/industries/football-advisory"],
        ["Coaching & Training", "/industries/coaching-training"],
        ["AI Strategy", "/industries/ai-strategy"],
        ["Mining", "/industries/mining"],
    ];

    return (
        <div className="m-menu-overlay">
            <button className="m-back" onClick={onBack}>← Back</button>
            <button className="m-close" onClick={onClose}>×</button>

            <h3 className="m-menu-title">Industries</h3>

            <ul className="m-industry-list">
                {LIST.map(([label, href]) => (
                    <li key={href}>
                        <a href={href} className="m-industry-item" onClick={onClose}>
                            {label} →
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}