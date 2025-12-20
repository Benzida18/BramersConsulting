"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";


const INDUSTRIES = [
    {
        slug: "agribusiness",
        title_en: "Agribusiness",
        title_fr: "Agro-Industrie",
        blurb_en:
            "Producers, cooperatives and traders structuring value chains and export links.",
        blurb_fr:
            "Producteurs, coopératives et négociants structurant des chaînes de valeur et des liens d’exportation.",
    },
    {
        slug: "ai-strategy",
        title_en: "AI strategy",
        title_fr: "Stratégie IA",
        blurb_en:
            "Organisations turning broad AI interest into a few practical use cases.",
        blurb_fr:
            "Organisations transformant un intérêt général pour l’IA en quelques cas d’usage concrets.",
    },
    {
        slug: "catering-hospitality",
        title_en: "Hospitality & catering",
        title_fr: "Hôtellerie & restauration",
        blurb_en:
            "Hotels, restaurants and catering operators refining concept and operations.",
        blurb_fr:
            "Hôtels, restaurants et services de restauration affinant leur concept et leur exploitation.",
    },
    {
        slug: "coaching-training",
        title_en: "Coaching & leadership development",
        title_fr: "Coaching & développement du leadership",
        blurb_en:
            "Owners, managers and teams working across UK and African markets.",
        blurb_fr:
            "Dirigeants, responsables et équipes travaillant entre le Royaume-Uni et l’Afrique.",
    },
    {
        slug: "finance",
        title_en: "Financial services",
        title_fr: "Services financiers",
        blurb_en:
            "Smaller institutions and fintechs serving SMEs, traders and diaspora clients.",
        blurb_fr:
            "Institutions financières de moindre taille et fintechs au service des PME, commerçants et clients de la diaspora.",
    },
    {
        slug: "football-advisory",
        title_en: "Football business",
        title_fr: "Foot-business",
        blurb_en:
            "Clubs, academies and investors building more solid football structures.",
        blurb_fr:
            "Clubs, académies et investisseurs construisant des structures de football plus solides.",
    },
    {
        slug: "international-trade",
        title_en: "International trade & logistics",
        title_fr: "Commerce international & logistique",
        blurb_en:
            "Companies moving goods between the UK and African markets.",
        blurb_fr:
            "Entreprises faisant circuler des marchandises entre le Royaume-Uni et les marchés africains.",
    },
    {
        slug: "mining",
        title_en: "Mining & natural resources",
        title_fr: "Mines & ressources naturelles",
        blurb_en:
            "Local projects preparing to speak with investors, authorities and specialists.",
        blurb_fr:
            "Projets locaux se préparant à dialoguer avec investisseurs, autorités et spécialistes.",
    },
    {
        slug: "real-estate",
        title_en: "Real estate & infrastructure",
        title_fr: "Immobilier & infrastructures",
        blurb_en:
            "Owners, developers and partners thinking through sites and projects.",
        blurb_fr:
            "Propriétaires, développeurs et partenaires structurant leurs sites et projets.",
    },
];

export default function IndustriesIndexPage() {
    const { language } = useLanguage();
    const isFr = language === "fr";

    const heading = isFr ? "Secteurs" : "Industries";
    const kicker = isFr ? "SECTEURS D’INTERVENTION" : "SECTORS WE WORK IN";
    const intro = isFr
        ? "Utilisez les liens ci-dessous pour explorer chaque secteur en détail. L’objectif n’est pas de couvrir toutes les activités possibles, mais de montrer les situations dans lesquelles Bramers est le plus souvent utile."
        : "Use the links below to explore each sector in more detail. The aim is not to cover every possible activity, but to show the types of situations where Bramers is usually useful.";
    const ctaLabel = isFr ? "En savoir plus" : "Learn more";

    return (
        <main className="industries-page">
            {/* INTRO */}
            <section className="industries-hero">
                <p className="industries-kicker">{kicker}</p>
                <h1 className="industries-title">{heading}</h1>
                <p className="industries-intro">{intro}</p>
            </section>

            {/* GRID */}
            <section className="industries-grid-wrap">
                <div className="industries-grid">
                    {INDUSTRIES.map((item) => {
                        const title = isFr ? item.title_fr : item.title_en;
                        const blurb = isFr ? item.blurb_fr : item.blurb_en;
                        return (
                            <article key={item.slug} className="industry-card">
                                <div className="industry-card-body">
                                    <h3>{title}</h3>
                                    <p>{blurb}</p>
                                </div>
                                <div className="industry-card-cta">
                                    <Link
                                        href={`/industries/${item.slug}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        {/* uses global .learn-more styles from Services */}
                                        <button className="learn-more">
                                            <span
                                                className="circle"
                                                aria-hidden="true"
                                            >
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">
                                                {ctaLabel}
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <style jsx>{`
                .industries-page {
                    min-height: 100vh;
                    background: #f5f5fa;
                    padding-bottom: 90px;
                }

                .industries-hero {
                    max-width: 1100px;
                    margin: 120px auto 40px;
                    padding: 0 24px;
                    text-align: center;
                }

                .industries-kicker {
                    font-family: var(--font-inter);
                    font-size: 12px;
                    letter-spacing: 0.28em;
                    text-transform: uppercase;
                    color: #9ca3af;
                    margin: 0 0 10px;
                }

                .industries-title {
                    font-family: var(--font-playfair);
                    font-size: 44px;
                    margin: 0;
                    color: #0f172a;
                }

                .industries-intro {
                    margin: 18px auto 0;
                    max-width: 760px;
                    font-size: 17px;
                    line-height: 1.7;
                    color: #4b5563;
                }

                .industries-grid-wrap {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .industries-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 26px;
                }

                .industry-card {
                    background: #ffffff;
                    border-radius: 26px;
                    padding: 24px 24px 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 210px;
                    box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
                    border: 1px solid rgba(15, 23, 42, 0.05);
                    transition: transform 0.25s ease,
                    box-shadow 0.25s ease,
                    border-color 0.25s ease,
                    background 0.25s ease;
                }

                .industry-card-body h3 {
                    font-family: var(--font-playfair);
                    font-size: 22px;
                    margin: 0 0 10px;
                    color: #0f172a;
                }

                .industry-card-body p {
                    margin: 0;
                    font-size: 15.5px;
                    line-height: 1.7;
                    color: #4b5563;
                }

                .industry-card-cta {
                    margin-top: 22px;
                    display: flex;
                    justify-content: flex-end;
                }

                .industry-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
                    border-color: #1e90ff;
                    background: linear-gradient(
                            135deg,
                            #ffffff,
                            #f4f6ff
                    );
                }

                /* ---------- RESPONSIVE ---------- */
                @media (max-width: 1100px) {
                    .industries-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 720px) {
                    .industries-page {
                        padding-bottom: 70px;
                    }

                    .industries-hero {
                        margin: 90px auto 30px;
                    }

                    .industries-title {
                        font-size: 32px;
                    }

                    .industries-intro {
                        font-size: 15.5px;
                    }

                    .industries-grid {
                        grid-template-columns: 1fr;
                    }

                    .industry-card {
                        border-radius: 22px;
                        padding: 22px 20px 18px;
                    }

                    .industry-card-body h3 {
                        font-size: 20px;
                    }

                    .industry-card-body p {
                        font-size: 14.5px;
                    }
                }
            `}</style>
        </main>
    );
}