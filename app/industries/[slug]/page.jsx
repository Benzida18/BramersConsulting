"use client";

export const dynamic = "force-dynamic";

// ---------- CONFIG FOR ALL 9 INDUSTRIES ----------
const INDUSTRY_CONFIG = {
    "agribusiness": {
        title: "Agribusiness",
        tagline: "Sustainable value chains from farm to export markets.",
        video: "/videos/agribusiness.mp4",
        image: "/images/agribusiness.jpg",
        overview:
            "At Bramers Consulting, we work with producers, traders and sector institutions to professionalise agribusiness value chains. We support organisations in building resilient supply networks, improving yield and quality, and connecting African producers to UK and global demand.",
        detailPoints: [
            "Mapping end-to-end value chains and identifying where margin, leakage and strategic risk sit.",
            "Designing commercial models that balance smallholder livelihoods with investor returns and export standards.",
            "Supporting clients to meet traceability, sustainability and certification requirements demanded by international buyers."
        ],
        pillars: [
            {
                title: "Market Strategy & Positioning",
                desc: "Clarifying demand across UK–Africa corridors, defining your competitive edge, and prioritising the markets, partners and channels that matter most."
            },
            {
                title: "Institutional & Regulatory Alignment",
                desc: "Working with ministries, regulators and sector bodies to align incentives, frameworks and programmes that support long-term agribusiness growth."
            },
            {
                title: "International Partnership Development",
                desc: "Structuring partnerships with off-takers, financiers and development partners while addressing ESG, climate and food-security risks."
            }
        ],
        quote:
            "In agriculture, the real value is created when small productivity gains are scaled across millions of people.",
        quoteAuthor: "Strive Masiyiwa"
    },

    "ai-strategy": {
        title: "AI Strategy",
        tagline: "Applied AI and data for responsible growth.",
        video: "/videos/ai-strategy.mp4",
        image: "/images/ai-strategy.jpg",
        overview:
            "We help boards and leadership teams move from AI buzzwords to clear, value-creating use cases. Our work focuses on responsible deployment, practical data foundations and change programmes that bring people and technology together.",
        detailPoints: [
            "Identifying high-impact AI opportunities across operations, customer experience and risk management.",
            "Designing data, governance and model-risk frameworks that meet regulatory and ethical expectations.",
            "Supporting pilots, vendor selection and scale-up of AI initiatives across multi-country operations."
        ],
        pillars: [
            {
                title: "AI Roadmapping & Use-Case Design",
                desc: "Clarifying where AI can unlock measurable value in your organisation and sequencing initiatives to match your data and talent maturity."
            },
            {
                title: "Data & Governance Foundations",
                desc: "Defining the policies, controls and operating models needed for responsible AI deployment across geographies and business units."
            },
            {
                title: "Change, Talent & Delivery",
                desc: "Supporting leadership, product and engineering teams to embed AI into day-to-day decision-making and frontline processes."
            }
        ],
        quote:
            "Without data, you’re just another person with an opinion. With discipline, data becomes an unfair advantage.",
        quoteAuthor: "W. Edwards Deming"
    },

    "catering-hospitality": {
        title: "Hospitality & Catering",
        tagline: "Service excellence across hotels, restaurants and leisure.",
        video: "/videos/catering-hospitality.mp4",
        image: "/images/catering-hospitality.jpg",
        overview:
            "We advise hospitality groups, independent operators and investors on concept strategy, guest experience and operational performance. Our work spans both mature UK markets and fast-growing African destinations.",
        detailPoints: [
            "Shaping concepts and formats that match evolving guest expectations and local demand.",
            "Improving unit economics through menu engineering, labour optimisation and procurement discipline.",
            "Supporting operators and investors with expansion, franchising and partnership decisions."
        ],
        pillars: [
            {
                title: "Concept & Market Strategy",
                desc: "Aligning brand, format and price-point with local demand, tourist flows and competitive dynamics."
            },
            {
                title: "Guest Experience & Operations",
                desc: "Redesigning service journeys, back-of-house processes and performance dashboards to raise quality and profitability."
            },
            {
                title: "Growth, Partnerships & Franchising",
                desc: "Advising on new site decisions, franchise structures and international brand partnerships across UK–Africa corridors."
            }
        ],
        quote:
            "In hospitality, every detail is a decision about how seriously you take your guest.",
        quoteAuthor: "Danny Meyer"
    },

    "coaching-training": {
        title: "Coaching & Leadership Development",
        tagline: "Building leaders and teams fit for cross-border growth.",
        video: "/videos/coaching-training.mp4",
        image: "/images/coaching-training.jpg",
        overview:
            "We support executives, founder-led businesses and institutions to develop leadership capability that matches their ambitions. Our work blends coaching, advisory and practical tools that help teams execute with clarity.",
        detailPoints: [
            "Working with CEOs and senior leaders on mandate clarity, decision-making and stakeholder management.",
            "Designing leadership programmes for high-potential talent across multiple markets.",
            "Embedding performance rituals, feedback loops and simple tools that strengthen accountability."
        ],
        pillars: [
            {
                title: "Executive & Team Coaching",
                desc: "One-to-one and small-group coaching focused on the real decisions leaders are making across markets."
            },
            {
                title: "Leadership Programmes",
                desc: "Designing and delivering tailored programmes that build capability in strategy, execution and collaboration."
            },
            {
                title: "Culture & Ways of Working",
                desc: "Helping organisations define clear behaviours, meeting rhythms and decision rights that scale with growth."
            }
        ],
        quote:
            "Before you are a leader, success is about growing yourself. When you become a leader, success is about growing others.",
        quoteAuthor: "Jack Welch"
    },

    "finance": {
        title: "Financial Services",
        tagline: "Capital, risk and growth across UK–Africa markets.",
        video: "/videos/finance.mp4",
        image: "/images/finance.jpg",
        overview:
            "We advise banks, fintechs, asset managers and investment platforms on strategy, product, partnerships and regulation. Our work supports institutions in navigating competition, technology change and cross-border capital flows.",
        detailPoints: [
            "Clarifying portfolio priorities across retail, SME, corporate and institutional segments.",
            "Designing products, pricing and partnership models for target client segments.",
            "Supporting regulatory engagement and stakeholder communications for strategic initiatives."
        ],
        pillars: [
            {
                title: "Strategy & Portfolio Choices",
                desc: "Helping leadership teams make clear, data-driven decisions on where to compete and how to allocate scarce capital and talent."
            },
            {
                title: "Product, Digital & Partnerships",
                desc: "Shaping offerings, journeys and alliances that improve client economics and widen distribution."
            },
            {
                title: "Risk, Regulation & Governance",
                desc: "Bringing together risk, legal and business teams to deliver growth within robust control and governance frameworks."
            }
        ],
        quote:
            "The most important investment you can make is in building a disciplined framework for decisions.",
        quoteAuthor: "Warren Buffett"
    },

    "football-advisory": {
        title: "Sports & Football Advisory",
        tagline: "Performance, governance and long-term value in football.",
        video: "/videos/football-advisory.mp4",
        image: "/images/football-advisory.jpg",
        overview:
            "We work with clubs, academies, investors and federations to strengthen football structures on and off the pitch. Our focus is on building sustainable pathways, governance and commercial models that outlast individual seasons.",
        detailPoints: [
            "Supporting club owners and boards on strategy, governance and stakeholder management.",
            "Designing academy and talent-pathway models that balance development and financial sustainability.",
            "Advising investors and partners on transactions, due diligence and long-term value creation."
        ],
        pillars: [
            {
                title: "Club & Federation Strategy",
                desc: "Clarifying the long-term sporting and commercial direction, and aligning stakeholders behind a realistic plan."
            },
            {
                title: "Talent, Pathways & Academies",
                desc: "Building structures that identify, develop and retain talent while protecting welfare and education outcomes."
            },
            {
                title: "Governance, Investments & Deals",
                desc: "Advising on ownership structures, investor relations and football-specific transaction dynamics."
            }
        ],
        quote:
            "You don’t build a team by collecting names; you build it by aligning purpose, standards and culture.",
        quoteAuthor: "Sir Alex Ferguson"
    },

    "international-trade": {
        title: "International Trade & Logistics",
        tagline: "Routes, partners and risk across borders.",
        video: "/videos/international-trade.mp4",
        image: "/images/international-trade.jpg",
        overview:
            "We support exporters, importers and logistics operators as they expand along UK–Africa trade corridors. Our work helps clients understand demand, structure partnerships and navigate regulatory and operational complexity.",
        detailPoints: [
            "Assessing market opportunities, route economics and competitive positioning for priority products.",
            "Structuring distributor, agent and joint-venture agreements that balance control and reach.",
            "Mapping customs, compliance and trade-finance requirements across jurisdictions."
        ],
        pillars: [
            {
                title: "Market Entry & Route-to-Market",
                desc: "Clarifying which markets, channels and partners offer the best path to sustainable scale."
            },
            {
                title: "Partnerships & Distribution",
                desc: "Designing contracts, incentives and governance for distributors, agents and logistics partners."
            },
            {
                title: "Trade Risk & Compliance",
                desc: "Supporting clients to manage regulatory, sanctions, FX and operational risks in cross-border trade."
            }
        ],
        quote:
            "Trade flows follow confidence. Confidence follows clarity on risk, rules and relationships.",
        quoteAuthor: "Anonymous trade financier"
    },

    "mining": {
        title: "Mining & Natural Resources",
        tagline: "Responsible, long-term resource development.",
        video: "/videos/mining.mp4",
        image: "/images/mining.jpg",
        overview:
            "We advise mining companies, investors and public institutions on strategy, stakeholder management and governance in the resources sector. Our work balances commercial imperatives with ESG, community and national-development priorities.",
        detailPoints: [
            "Assessing project portfolios, country risk and long-term demand dynamics for key commodities.",
            "Designing stakeholder engagement strategies with governments, communities and partners.",
            "Supporting ESG, transparency and reporting improvements aligned with global expectations."
        ],
        pillars: [
            {
                title: "Strategy & Portfolio",
                desc: "Clarifying which projects to advance, partner on or exit based on risk, returns and strategic positioning."
            },
            {
                title: "Stakeholders & Communities",
                desc: "Building structured engagement with governments, communities and civil-society stakeholders."
            },
            {
                title: "ESG, Governance & Reporting",
                desc: "Strengthening governance, disclosure and sustainability practices in line with global standards."
            }
        ],
        quote:
            "In resources, a licence to operate is earned daily in the way you treat people and the environment.",
        quoteAuthor: "Former mining CEO"
    },

    "real-estate": {
        title: "Real Estate & Infrastructure",
        tagline: "Investment, development and asset performance.",
        video: "/videos/real-estate.mp4",
        image: "/images/real-estate.jpg",
        overview:
            "We partner with developers, asset owners, funds and public institutions on real-estate and infrastructure strategy. Our work spans concept design, feasibility, capital structure and operational performance.",
        detailPoints: [
            "Testing demand, pricing and positioning for new developments and regeneration projects.",
            "Designing capital structures and partnership models between public, private and development-finance partners.",
            "Improving asset performance through better leasing, operations and data-driven decision-making."
        ],
        pillars: [
            {
                title: "Concept, Feasibility & Positioning",
                desc: "Defining the right use-mix, target segments and financial profile for new or repositioned assets."
            },
            {
                title: "Capital, Partnerships & Structuring",
                desc: "Supporting clients to structure deals, joint ventures and PPPs that align incentives across stakeholders."
            },
            {
                title: "Asset & Portfolio Performance",
                desc: "Helping owners use data, technology and governance to enhance returns across portfolios."
            }
        ],
        quote:
            "Great real estate is a long-term discipline: seeing the city not as it is today, but as it will be in thirty years.",
        quoteAuthor: "Global real-estate investor"
    }
};

// --------------------------------------------------
// PAGE COMPONENT
// --------------------------------------------------
export default function IndustrySlugPage({ params }) {
    const { slug } = params;
    const data = INDUSTRY_CONFIG[slug];

    if (!data) {
        return (
            <main style={{ padding: "140px 24px" }}>
                <h1
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "34px",
                        marginBottom: "12px"
                    }}
                >
                    Sector not found
                </h1>
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "16px",
                        color: "#555"
                    }}
                >
                    The page you’re looking for doesn’t exist yet.
                </p>
            </main>
        );
    }

    return (
        <main
            style={{
                width: "100%",
                overflow: "hidden",
                background: "#f7f7fa"
            }}
        >
            {/* HERO */}
            <section
                style={{
                    position: "relative",
                    height: "65vh",
                    width: "100%",
                    overflow: "hidden"
                }}
            >
                <video
                    src={data.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(58%)"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white",
                        padding: "0 24px"
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "52px",
                            marginBottom: "14px"
                        }}
                    >
                        {data.title}
                    </h1>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "19px",
                            opacity: 0.92,
                            maxWidth: "640px",
                            margin: "0 auto"
                        }}
                    >
                        {data.tagline}
                    </p>
                </div>
            </section>

            {/* OVERVIEW + IMAGE */}
            <section
                style={{
                    width: "92%",
                    maxWidth: "1200px",
                    margin: "90px auto 50px",
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
                    gap: "48px",
                    alignItems: "center"
                }}
            >
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "13px",
                            letterSpacing: "0.26em",
                            textTransform: "uppercase",
                            color: "#999",
                            marginBottom: "14px"
                        }}
                    >
                        Sector overview
                    </p>
                    <h2
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "34px",
                            margin: "0 0 20px",
                            color: "#111"
                        }}
                    >
                        Advisory for leaders in {data.title}.
                    </h2>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "17px",
                            lineHeight: 1.7,
                            color: "#333"
                        }}
                    >
                        {data.overview}
                    </p>
                </div>

                <div
                    style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        boxShadow: "0 22px 60px rgba(0,0,0,0.24)"
                    }}
                >
                    <img
                        src={data.image}
                        alt={data.title}
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "360px",
                            objectFit: "cover",
                            display: "block"
                        }}
                    />
                </div>
            </section>

            {/* TYPICAL WORK */}
            <section
                style={{
                    width: "92%",
                    maxWidth: "1100px",
                    margin: "0 auto 90px"
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        letterSpacing: "0.26em",
                        textTransform: "uppercase",
                        color: "#999",
                        marginBottom: "18px"
                    }}
                >
                    Typical work in this sector
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "22px"
                    }}
                >
                    {data.detailPoints.map((text, idx) => (
                        <p
                            key={idx}
                            className="detail-block"
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "15px",
                                lineHeight: 1.7,
                                color: "#444",
                                margin: 0
                            }}
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </section>

            {/* WHERE WE TYPICALLY HELP – 3 PILLAR CARDS */}
            <section
                style={{
                    width: "92%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px"
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        letterSpacing: "0.26em",
                        textTransform: "uppercase",
                        color: "#999",
                        marginBottom: "16px"
                    }}
                >
                    Where we typically help
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "28px"
                    }}
                >
                    {data.pillars.map((card, i) => (
                        <div key={i} className="pillar-card">
                            <h3
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontSize: "22px",
                                    marginBottom: "10px",
                                    color: "#111"
                                }}
                            >
                                {card.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "15px",
                                    lineHeight: 1.6,
                                    color: "#555"
                                }}
                            >
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BIG QUOTE AT END */}
            <section
                style={{
                    width: "92%",
                    maxWidth: "960px",
                    margin: "0 auto 130px",
                    textAlign: "center"
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "30px",
                        lineHeight: 1.4,
                        color: "#111",
                        marginBottom: "18px"
                    }}
                >
                    “{data.quote}”
                </p>
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#888"
                    }}
                >
                    {data.quoteAuthor}
                </p>
            </section>

            {/* local styles for hover / gradient */}
            <style jsx>{`
        .pillar-card {
          position: relative;
          background: #ffffff;
          border-radius: 18px;
          padding: 26px 30px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            border-color 0.3s ease, background 0.3s ease;
        }

        .pillar-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top left,
            rgba(30, 144, 255, 0.26),
            transparent 55%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .pillar-card:hover {
          transform: translateY(-6px);
          border-color: rgba(30, 144, 255, 0.7);
          box-shadow: 0 20px 55px rgba(15, 52, 96, 0.28);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 1),
            rgba(244, 248, 255, 1)
          );
        }

        .pillar-card:hover::before {
          opacity: 1;
        }
      `}</style>
        </main>
    );
}