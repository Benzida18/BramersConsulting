// app/industries/[slug]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export const dynamic = "force-dynamic";

// ---------- GENERIC LABELS (EN / FR) ----------
const LABELS = {
    en: {
        sectorOverview: "Sector overview",
        advisoryFor: "Advisory for organisations in",
        typicalWork: "Typical work in this sector",
        whereHelp: "Where we usually help",
    },
    fr: {
        sectorOverview: "Vue d'ensemble du secteur",
        advisoryFor: "Conseil pour les acteurs du",
        typicalWork: "Types de missions dans ce secteur",
        whereHelp: "Là où nous intervenons le plus souvent",
    },
};

// ---------- CONFIG FOR ALL 9 INDUSTRIES ----------
const INDUSTRY_CONFIG = {
    agribusiness: {
        video: "/videos/agribusiness.mp4",
        image: "/images/agribusiness.jpg",

        title: "Agribusiness",
        title_fr: "Agro-Industrie",

        sectorLine_en: "Working with producers, cooperatives and traders in agribusiness.",
        sectorLine_fr:
            "Accompagnement des producteurs, coopératives et négociants de l'agro-industrie.",

        tagline: "Practical support along the value chain, from farm to export.",
        tagline_fr:
            "Un appui concret le long de la chaîne de valeur, de l'exploitation agricole jusqu'à l'export.",

        overview:
            "Bramers works with farmers, cooperatives, traders and small processors who want to connect local production with UK and African demand. We help clarify where the value sits, what buyers expect, and the basic steps needed to move from harvest to market.",
        overview_fr:
            "Bramers accompagne des agriculteurs, coopératives, commerçants et petits transformateurs qui souhaitent connecter la production locale à la demande au Royaume-Uni et en Afrique. Nous aidons à clarifier où se situe la valeur, ce qu'attendent les acheteurs et les étapes essentielles pour passer de la récolte au marché.",

        detailPoints: [
            "Helping farmers and intermediaries understand quality, pricing and contract expectations from buyers.",
            "Clarifying the roles of cooperatives, traders and logistics partners along the value chain.",
            "Supporting basic planning around volumes, storage, simple documentation and first export steps.",
        ],
        detailPoints_fr: [
            "Aider les producteurs et intermédiaires à comprendre les attentes des acheteurs en matière de qualité, de prix et de contrats.",
            "Clarifier le rôle des coopératives, commerçants et partenaires logistiques dans la chaîne de valeur.",
            "Accompagner la planification de base autour des volumes, du stockage, de la documentation simple et des premiers pas vers l'export.",
        ],

        pillars: [
            {
                title: "Understanding demand",
                desc: "Making clear who buys what, at which quality, and on which basic commercial terms between the UK and West Africa.",
            },
            {
                title: "Structuring the value chain",
                desc: "Helping clients think through how farmers, cooperatives, traders and buyers work together in a simple, realistic way.",
            },
            {
                title: "First steps towards export",
                desc: "Supporting early conversations on logistics, documentation and partners, without replacing customs or legal specialists.",
            },
        ],
        pillars_fr: [
            {
                title: "Comprendre la demande",
                desc: "Rendre plus lisible qui achète quoi, à quel niveau de qualité et sur quelles bases commerciales entre le Royaume-Uni et l'Afrique de l'Ouest.",
            },
            {
                title: "Structurer la chaîne de valeur",
                desc: "Aider à réfléchir au rôle des agriculteurs, coopératives, commerçants et acheteurs de manière simple et réaliste.",
            },
            {
                title: "Premiers pas vers l'export",
                desc: "Accompagner les premières réflexions sur la logistique, la documentation et les partenaires, sans remplacer les spécialistes douaniers ou juridiques.",
            },
        ],

        quote:
            "In agriculture, small improvements become powerful when they are repeated year after year along the whole chain.",
        quote_fr:
            "En agriculture, de petits progrès deviennent puissants lorsqu'ils se répètent année après année sur l'ensemble de la chaîne.",
        quoteAuthor: "Strive Masiyiwa",
    },

    "ai-strategy": {
        video: "/videos/ai-strategy.mp4",
        image: "/images/ai-strategy.jpg",

        title: "AI Strategy",
        title_fr: "Stratégie IA",

        sectorLine_en: "Helping organisations turn AI ideas into practical projects.",
        sectorLine_fr:
            "Aider les organisations à transformer leurs idées IA en projets concrets.",

        tagline: "Simple, practical AI uses — not buzzwords.",
        tagline_fr: "Des usages IA simples et concrets, loin des mots à la mode.",

        overview:
            "We help organisations move from vague ideas about AI to a few practical use cases that fit their size, data and budget. The focus is on understanding what problem you want to solve, what data you actually have, and what is realistic for you today.",
        overview_fr:
            "Nous aidons les organisations à passer d'idées vagues sur l'IA à quelques cas d'usage concrets adaptés à leur taille, leurs données et leur budget. L'objectif est de clarifier le problème à résoudre, les données réellement disponibles et ce qui est réaliste aujourd'hui pour vous.",

        detailPoints: [
            "Clarifying where AI or simple analytics could save time, reduce errors or improve basic decision-making.",
            "Helping you prioritise a small number of use cases instead of chasing every new tool.",
            "Preparing you to speak with technical or vendor partners in a clear, structured way.",
        ],
        detailPoints_fr: [
            "Clarifier où l'IA ou une simple analyse de données peuvent faire gagner du temps, réduire les erreurs ou améliorer des décisions de base.",
            "Aider à prioriser un petit nombre de cas d'usage au lieu de courir après chaque nouvel outil.",
            "Préparer vos échanges avec des partenaires techniques ou des fournisseurs de manière claire et structurée.",
        ],

        pillars: [
            {
                title: "From idea to use case",
                desc: "Translating broad AI interest into 2–3 specific questions or processes where technology can genuinely help.",
            },
            {
                title: "Data reality check",
                desc: "Reviewing what information you actually collect today and what would need to change before doing more advanced work.",
            },
            {
                title: "Talking to the right partners",
                desc: "Helping you prepare simple briefs and questions so that discussions with AI vendors or developers are more productive.",
            },
        ],
        pillars_fr: [
            {
                title: "De l'idée au cas d'usage",
                desc: "Transformer un intérêt général pour l'IA en 2 ou 3 questions ou processus précis où la technologie peut vraiment aider.",
            },
            {
                title: "Vérifier la réalité des données",
                desc: "Revoir les informations que vous collectez déjà et ce qu'il faudrait améliorer avant d'aller vers des solutions plus avancées.",
            },
            {
                title: "Parler aux bons partenaires",
                desc: "Vous aider à préparer des cahiers des charges simples et des questions claires pour rendre les échanges avec les prestataires IA plus efficaces.",
            },
        ],

        quote:
            "Good technology projects start with a clear problem, not with a tool.",
        quote_fr:
            "Les bons projets technologiques commencent par un problème clair, pas par un outil.",
        quoteAuthor: "Inspired by W. Edwards Deming",
    },

    "catering-hospitality": {
        video: "/videos/catering-hospitality.mp4",
        image: "/images/catering-hospitality.jpg",

        title: "Hospitality & Catering",
        title_fr: "Hôtellerie et restauration",

        sectorLine_en:
            "Working with hospitality and catering operators across the UK and Africa.",
        sectorLine_fr:
            "Travailler avec des acteurs de l'hôtellerie-restauration au Royaume-Uni et en Afrique.",

        tagline: "Helping operators improve concept, service and basics.",
        tagline_fr:
            "Aider les opérateurs à clarifier le concept, le service et les fondamentaux.",

        overview:
            "Bramers supports hotel, restaurant and catering operators who work between the UK and African markets or draw on both cultures. We focus on simple but important questions: who is your guest, what do they expect, and how do you make the numbers work.",
        overview_fr:
            "Bramers accompagne des hôtels, restaurants et services de restauration qui opèrent entre le Royaume-Uni et l'Afrique ou s'inspirent des deux cultures. Nous travaillons sur des questions simples mais clés : qui est votre client, qu'attend-il et comment faire fonctionner l'économie du lieu.",

        detailPoints: [
            "Clarifying your concept and target guest for local, diaspora or international audiences.",
            "Looking at menu, pricing and basic cost structure to see where small improvements are possible.",
            "Thinking through expansion, partnerships or a first site in the UK or West Africa.",
        ],
        detailPoints_fr: [
            "Clarifier votre concept et votre clientèle cible, qu'elle soit locale, issue de la diaspora ou internationale.",
            "Examiner le menu, les prix et les coûts de base pour identifier des pistes d'amélioration.",
            "Réfléchir à l'expansion, aux partenariats ou à une première implantation au Royaume-Uni ou en Afrique de l'Ouest.",
        ],

        pillars: [
            {
                title: "Concept and positioning",
                desc: "Helping you express clearly what your venue stands for and who it is really built for.",
            },
            {
                title: "Economics and operations",
                desc: "Reviewing basic costs, pricing and simple processes that shape service and margin.",
            },
            {
                title: "Growth and new locations",
                desc: "Supporting early thinking around new sites, partnerships or cross-border concepts.",
            },
        ],
        pillars_fr: [
            {
                title: "Concept et positionnement",
                desc: "Vous aider à exprimer clairement l'identité de votre établissement et le public auquel il s'adresse réellement.",
            },
            {
                title: "Économie et opérations",
                desc: "Revoir les coûts de base, la tarification et certains processus clés qui influencent le service et la marge.",
            },
            {
                title: "Croissance et nouvelles implantations",
                desc: "Accompagner vos premières réflexions sur de nouveaux sites, des partenariats ou des concepts entre plusieurs pays.",
            },
        ],

        quote:
            "In hospitality, consistency on the basics matters more than perfection once in a while.",
        quote_fr:
            "Dans l'hôtellerie-restauration, la régularité sur les fondamentaux compte plus que la perfection ponctuelle.",
        quoteAuthor: "Bramers Consulting",
    },

    "coaching-training": {
        video: "/videos/coaching-training.mp4",
        image: "/images/coaching-training.jpg",

        title: "Coaching & Leadership Development",
        title_fr: "Coaching & Développement Du Leadership",

        sectorLine_en:
            "Supporting leaders and teams with coaching and leadership development.",
        sectorLine_fr:
            "Coaching & Développement Du Leadership.",

        tagline: "Support for leaders and teams working across countries.",
        tagline_fr:
            "Un appui pour des dirigeants et équipes qui travaillent entre plusieurs pays.",

        overview:
            "We work with owners, managers and teams who are growing businesses across the UK and African markets. The focus is on practical leadership questions: roles, decisions, communication and how to keep people aligned when they are not in the same place.",
        overview_fr:
            "Nous accompagnons des dirigeants, responsables et équipes qui développent leurs activités entre le Royaume-Uni et l’Afrique. Notre travail porte sur des questions de leadership très concrètes : rôles, décisions, communication, coordination et manière de garder tout le monde aligné entre les deux régions.",

        detailPoints: [
            "Helping leaders clarify their role and the few decisions that really sit with them.",
            "Supporting managers in giving clearer direction and feedback to their teams.",
            "Designing simple routines that make cross-country collaboration easier.",
        ],
        detailPoints_fr: [
            "Aider les dirigeants à clarifier leur rôle et les quelques décisions qui leur reviennent vraiment.",
            "Accompagner les managers pour donner des consignes et des retours plus clairs à leurs équipes.",
            "Mettre en place des routines simples pour faciliter le travail entre plusieurs pays.",
        ],

        pillars: [
            {
                title: "One-to-one and small-group coaching",
                desc: "Creating space for leaders to think through real situations and choose next steps with more clarity.",
            },
            {
                title: "Practical leadership skills",
                desc: "Working on communication, delegation and follow-up in the context of your actual business.",
            },
            {
                title: "Ways of working across borders",
                desc: "Helping teams agree simple habits for meetings, information sharing and accountability between the UK and Africa.",
            },
        ],
        pillars_fr: [
            {
                title: "Coaching individuel et en petit groupe",
                desc: "Offrir aux dirigeants un espace pour réfléchir à des situations réelles et choisir des prochaines étapes plus claires.",
            },
            {
                title: "Compétences de leadership pratiques",
                desc: "Travailler la communication, la délégation et le suivi dans le contexte concret de votre activité.",
            },
            {
                title: "Modes de fonctionnement transfrontaliers",
                desc: "Aider les équipes à se mettre d'accord sur des habitudes simples de réunions, de partage d'information et de responsabilité entre le Royaume-Uni et l'Afrique.",
            },
        ],

        quote:
            "Leadership shows up in the small, repeated choices you make with your team every week.",
        quote_fr:
            "Le leadership se voit dans les petits choix répétés que vous faites avec votre équipe chaque semaine.",
        quoteAuthor: "Bramers perspective",
    },

    finance: {
        video: "/videos/finance.mp4",
        image: "/images/finance.jpg",

        title: "Financial Services",
        title_fr: "Services financiers",

        sectorLine_en:
            "Advisory for fintechs and other financial services providers.",
        sectorLine_fr:
            "Conseil pour fintechs et autres acteurs des services financiers.",

        tagline: "Helping financial actors serve real businesses and people.",
        tagline_fr:
            "Aider les acteurs financiers à mieux servir les entreprises et les personnes.",

        overview:
            "Bramers supports smaller financial institutions and fintechs that work between the UK and African markets. We focus on simple questions: which clients are you really serving, what problems are you solving, and how can products and partnerships reflect that.",
        overview_fr:
            "Bramers Consulting accompagne institutions financières de moindre taille et fintechs qui opèrent entre le Royaume-Uni et l'Afrique. Nous travaillons sur des questions simples : quels clients servez-vous réellement, quels problèmes résolvez-vous et comment vos produits et partenariats peuvent mieux le refléter.",

        detailPoints: [
            "Clarifying priority segments such as SMEs, traders, professionals or diaspora clients.",
            "Thinking through basic product features, pricing logic and partner roles.",
            "Helping prepare clearer narratives for regulators, investors or development partners.",
        ],
        detailPoints_fr: [
            "Clarifier les segments prioritaires, par exemple les PME, commerçants, professionnels ou clients de la diaspora.",
            "Réfléchir aux caractéristiques essentielles des produits, à la logique de tarification et au rôle des partenaires.",
            "Aider à préparer des messages plus clairs pour les régulateurs, investisseurs ou bailleurs de développement.",
        ],

        pillars: [
            {
                title: "Client and segment clarity",
                desc: "Making it clear which customers you focus on and what you want to be known for.",
            },
            {
                title: "Products and partnerships",
                desc: "Supporting early thinking on offers, channels and collaboration with other institutions.",
            },
            {
                title: "Telling your story",
                desc: "Helping you prepare simple materials that explain your strategy to key stakeholders.",
            },
        ],
        pillars_fr: [
            {
                title: "Clarté sur les clients et segments",
                desc: "Rendre explicite les clients que vous ciblez et l'image que vous souhaitez construire.",
            },
            {
                title: "Offres et partenariats",
                desc: "Accompagner les premières réflexions sur vos produits, vos canaux et la collaboration avec d'autres institutions.",
            },
            {
                title: "Raconter votre projet",
                desc: "Aider à préparer des supports simples qui expliquent votre stratégie aux parties prenantes clés.",
            },
        ],

        quote:
            "In finance, trust grows when people understand clearly who you serve and how you make decisions.",
        quote_fr:
            "Dans la finance, la confiance grandit lorsque l'on comprend clairement qui vous servez et comment vous prenez vos décisions.",
        quoteAuthor: "Bramers perspective",
    },

    "football-advisory": {
        video: "/videos/football-advisory.mp4",
        image: "/images/football-advisory.jpg",

        title: "Football Business",
        title_fr: "oeuvrant dans le domain du foot-Business",

        sectorLine_en:
            "Partnering with clubs, academies and investors in football business.",
        sectorLine_fr:
            "Aux côtés de clubs, académies et investisseurs du foot-business.",

        tagline: "Connecting football structures, talent and investors.",
        tagline_fr:
            "Connecter structures, talents et investisseurs dans le football.",

        overview:
            "We work with clubs, academies, investors and project owners who want to build more solid football structures between Africa and Europe. Bramers focuses on the basics: roles, agreements and long-term thinking around players and projects.",
        overview_fr:
            "Nous travaillons avec des clubs, académies, investisseurs et porteurs de projets qui souhaitent construire des structures de football plus solides entre l'Afrique et l'Europe. Bramers se concentre sur les fondamentaux : rôles, accords et vision de long terme autour des joueurs et des projets.",

        detailPoints: [
            "Helping academies and clubs think through player pathways and partnership models.",
            "Clarifying expectations and responsibilities in agreements between local and international partners.",
            "Supporting investors or project owners in preparing for conversations with clubs and federations.",
        ],
        detailPoints_fr: [
            "Aider les académies et clubs à réfléchir aux parcours joueurs et aux modèles de partenariat.",
            "Clarifier les attentes et responsabilités dans les accords entre partenaires locaux et internationaux.",
            "Accompagner les investisseurs ou porteurs de projets dans la préparation de leurs échanges avec clubs et fédérations.",
        ],

        pillars: [
            {
                title: "Structures and pathways",
                desc: "Thinking through how young players move from local football to more professional environments.",
            },
            {
                title: "Partnerships and agreements",
                desc: "Helping parties discuss roles, timelines and basic protections in football projects.",
            },
            {
                title: "Investor and project support",
                desc: "Supporting those who want to invest or build in football to present realistic, long-term plans.",
            },
        ],
        pillars_fr: [
            {
                title: "Structures et parcours",
                desc: "Réfléchir à la manière dont les jeunes joueurs passent du football local à des environnements plus professionnels.",
            },
            {
                title: "Partenariats et accords",
                desc: "Aider les parties prenantes à discuter des rôles, des délais et des protections de base dans les projets football.",
            },
            {
                title: "Appui aux investisseurs et projets",
                desc: "Accompagner ceux qui souhaitent investir ou développer un projet dans le football pour présenter des plans réalistes et de long terme.",
            },
        ],

        quote:
            "Real success in football comes when the structure is as strong as the talent.",
        quote_fr:
            "Le vrai succès dans le football vient lorsque la structure est aussi solide que le talent.",
        quoteAuthor: "Bramers perspective",
    },

    "international-trade": {
        video: "/videos/international-trade.mp4",
        image: "/images/international-trade.jpg",

        title: "International Trade & Logistics",
        title_fr: "Commerce International & Logistique",

        sectorLine_en:
            "Practical guidance on international trade and logistics between the UK and Africa.",
        sectorLine_fr:
            "Un accompagnement pratique en commerce international et logistique entre le Royaume-Uni et l'Afrique.",

        tagline: "Helping you think through routes, partners and paperwork.",
        tagline_fr:
            "Vous aider à réfléchir aux routes, aux partenaires et aux démarches.",

        overview:
            "This is at the heart of Bramers' work. We help people and companies who want to move goods between the UK and African markets, especially Côte d’Ivoire and West Africa. Our role is to explain the steps, highlight key questions and prepare you for discussions with specialists.",
        overview_fr:
            "C'est au cœur du travail de Bramers. Nous aidons des personnes et des entreprises qui souhaitent faire circuler des marchandises entre le Royaume-Uni et les marchés africains, en particulier la Côte d'Ivoire et l'Afrique de l'Ouest. Notre rôle est d'expliquer les étapes, de faire ressortir les questions clés et de vous préparer à vos échanges avec les spécialistes.",

        detailPoints: [
            "Clarifying the basic journey of goods from supplier to buyer across borders.",
            "Helping you think through incoterms at a high level, responsibilities and cost implications.",
            "Supporting you in preparing questions and documents for freight forwarders, customs agents and banks.",
        ],
        detailPoints_fr: [
            "Clarifier le parcours de base des marchandises, du fournisseur à l'acheteur, au-delà des frontières.",
            "Vous aider à réfléchir, à un niveau simple, aux incoterms, responsabilités et implications sur les coûts.",
            "Vous accompagner dans la préparation de questions et de documents pour les transitaires, les douanes et les banques.",
        ],

        pillars: [
            {
                title: "Understanding the trade flow",
                desc: "Making visible each step in the export or import journey and who is involved.",
            },
            {
                title: "Roles, risks and costs",
                desc: "Highlighting who is responsible for what, where risk passes and which costs you need to plan for.",
            },
            {
                title: "Preparing for specialist support",
                desc: "Helping you arrive better prepared when you speak to customs, logistics or banking partners.",
            },
        ],
        pillars_fr: [
            {
                title: "Comprendre le flux commercial",
                desc: "Rendre visibles les étapes clés du parcours export ou import et les acteurs impliqués.",
            },
            {
                title: "Rôles, risques et coûts",
                desc: "Mettre en évidence qui est responsable de quoi, où le risque se transmet et quels coûts anticiper.",
            },
            {
                title: "Préparer l'appui des spécialistes",
                desc: "Vous aider à arriver mieux préparé lors de vos échanges avec les douanes, la logistique ou les banques.",
            },
        ],

        quote:
            "Moving goods across borders becomes easier when everyone understands their role and the basic rules.",
        quote_fr:
            "Le commerce transfrontalier devient plus simple lorsque chacun comprend son rôle et les règles de base.",
        quoteAuthor: "Bramers perspective",
    },

    mining: {
        video: "/videos/mining.mp4",
        image: "/images/mining.jpg",

        title: "Mining & Natural Resources",
        title_fr: "Mines & Ressources Naturelles",

        sectorLine_en:
            "Early stage support for mining and natural resources projects.",
        sectorLine_fr:
            "Un appui en amont pour les projets miniers et de ressources naturelles.",

        tagline: "Helping local projects speak to investors and authorities.",
        tagline_fr:
            "Aider les projets locaux à mieux dialoguer avec investisseurs et autorités.",

        overview:
            "Bramers does not replace technical or legal advisors in mining. Instead, we help project owners, local partners and institutions organise their story, understand key expectations and prepare for conversations with more specialised stakeholders.",
        overview_fr:
            "Bramers Consulting ne remplace pas les conseillers techniques ou juridiques dans le secteur minier. Nous aidons plutôt les porteurs de projets, partenaires locaux et institutions à structurer leur récit, comprendre les attentes clés et se préparer à dialoguer avec des parties prenantes plus spécialisées.",

        detailPoints: [
            "Clarifying the basic outline of a project: who is involved, what is proposed and what is still uncertain.",
            "Helping local actors understand investor, community and government perspectives at a high level.",
            "Preparing simple materials to support early stage discussions with technical, legal or financial experts.",
        ],
        detailPoints_fr: [
            "Clarifier les grandes lignes d'un projet : qui est impliqué, ce qui est proposé et ce qui reste incertain.",
            "Aider les acteurs locaux à mieux comprendre, à un niveau général, les attentes des investisseurs, des communautés et des autorités.",
            "Préparer des supports simples pour les premières discussions avec des experts techniques, juridiques ou financiers.",
        ],

        pillars: [
            {
                title: "Structuring the project story",
                desc: "Organising information about the project so others can quickly see what is on the table.",
            },
            {
                title: "Understanding stakeholder expectations",
                desc: "Highlighting, in simple language, what investors and authorities often look for in resource projects.",
            },
            {
                title: "Connecting to specialist advice",
                desc: "Helping you arrive more prepared when you start formal work with technical or legal advisors.",
            },
        ],
        pillars_fr: [
            {
                title: "Structurer le récit du projet",
                desc: "Organiser les informations clés pour que les autres comprennent rapidement ce qui est en jeu.",
            },
            {
                title: "Comprendre les attentes des parties prenantes",
                desc: "Expliquer, en termes simples, ce que recherchent souvent investisseurs et autorités dans les projets de ressources.",
            },
            {
                title: "Préparer le recours aux experts",
                desc: "Vous aider à être mieux préparé lorsque vous engagez un travail formel avec des conseillers techniques ou juridiques.",
            },
        ],

        quote:
            "In resources, clear and honest information is the starting point for any serious conversation.",
        quote_fr:
            "Dans les ressources naturelles, une information claire et honnête est le point de départ de toute discussion sérieuse.",
        quoteAuthor: "Bramers perspective",
    },

    "real-estate": {
        video: "/videos/real-estate.mp4",
        image: "/images/real-estate.jpg",

        title: "Real Estate & Infrastructure",
        title_fr: "Immobilier & Infrastructures",

        sectorLine_en: "Advisory around real estate and infrastructure projects.",
        sectorLine_fr:
            "Conseil autour de projets immobiliers et d'infrastructures.",

        tagline: "Helping owners and partners think through projects and sites.",
        tagline_fr:
            "Aider propriétaires et partenaires à réfléchir à leurs projets et sites.",

        overview:
            "We support project owners, small developers and partners who are working on real estate or basic infrastructure linked to African and UK markets. Bramers focuses on early stage thinking: demand, simple numbers, roles and how to explain the project to others.",
        overview_fr:
            "Nous accompagnons des porteurs de projets, petits développeurs et partenaires impliqués dans des projets immobiliers ou d'infrastructures liés aux marchés africains et britanniques. Bramers se concentre sur les premières réflexions : demande, chiffres simples, rôles et façon d'expliquer le projet aux autres.",

        detailPoints: [
            "Clarifying who the project is for and what problem it is trying to solve.",
            "Looking at basic assumptions on demand, pricing and costs, without replacing detailed feasibility studies.",
            "Helping prepare simple presentations for potential partners, authorities or financiers.",
        ],
        detailPoints_fr: [
            "Clarifier à qui s'adresse le projet et quel problème il cherche à résoudre.",
            "Examiner des hypothèses de base sur la demande, les prix et les coûts, sans remplacer les études de faisabilité détaillées.",
            "Aider à préparer des présentations simples pour des partenaires, autorités ou financeurs potentiels.",
        ],

        pillars: [
            {
                title: "Clarifying the idea",
                desc: "Putting into words the core of the project so that others can quickly understand it.",
            },
            {
                title: "Checking basic assumptions",
                desc: "Reviewing simple numbers and scenarios before you invest in heavy studies.",
            },
            {
                title: "Talking to partners",
                desc: "Helping you present the project in a way that invites constructive discussion.",
            },
        ],
        pillars_fr: [
            {
                title: "Clarifier l'idée",
                desc: "Mettre par écrit l'essentiel du projet pour que les autres le comprennent rapidement.",
            },
            {
                title: "Tester quelques hypothèses",
                desc: "Revoir quelques chiffres et scénarios de base avant d'engager des études lourdes.",
            },
            {
                title: "Parler aux partenaires",
                desc: "Vous aider à présenter le projet de manière à susciter un échange constructif.",
            },
        ],

        quote:
            "The first step in any project is being able to explain it simply to someone else.",
        quote_fr:
            "La première étape de tout projet consiste à pouvoir l'expliquer simplement à quelqu'un d'autre.",
        quoteAuthor: "Bramers perspective",
    },
};

// --------------------------------------------------
// PAGE COMPONENT
// --------------------------------------------------
export default function IndustrySlugPage({ params }) {
    const { slug } = params;
    const data = INDUSTRY_CONFIG[slug];

    const { language } = useLanguage();
    const L = LABELS[language] || LABELS.en;
    const isFr = language === "fr";

    if (!data) {
        return (
            <main style={{ padding: "140px 24px" }}>
                <h1
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "34px",
                        marginBottom: "12px",
                    }}
                >
                    Sector not found
                </h1>
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "16px",
                        color: "#555",
                    }}
                >
                    The page you’re looking for doesn’t exist yet.
                </p>
            </main>
        );
    }

    const title = isFr && data.title_fr ? data.title_fr : data.title;
    const tagline = isFr && data.tagline_fr ? data.tagline_fr : data.tagline;
    const overview =
        isFr && data.overview_fr ? data.overview_fr : data.overview;
    const detailPoints =
        isFr && data.detailPoints_fr ? data.detailPoints_fr : data.detailPoints;
    const pillars = isFr && data.pillars_fr ? data.pillars_fr : data.pillars;
    const quote = isFr && data.quote_fr ? data.quote_fr : data.quote;
    const quoteAuthor = data.quoteAuthor;

    const sectorLine =
        isFr && data.sectorLine_fr
            ? data.sectorLine_fr
            : data.sectorLine_en
                ? data.sectorLine_en
                : `${L.advisoryFor} ${title}.`;

    // hero text fade-in (replays on mount / slug change)
    const [heroAnimate, setHeroAnimate] = useState(false);

    useEffect(() => {
        setHeroAnimate(false);
        const id = requestAnimationFrame(() => setHeroAnimate(true));
        return () => cancelAnimationFrame(id);
    }, [slug]);

    return (
        <main
            style={{
                width: "100%",
                overflow: "hidden",
                background: "#f7f7fa",
            }}
        >
            {/* HERO */}
            <section
                className="industry-hero"
                style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
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
                        filter: "brightness(58%)",
                    }}
                />
                <div
                    className={`industry-hero-content ${
                        heroAnimate ? "hero-animate" : ""
                    }`}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white",
                        padding: "0 24px",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "52px",
                            marginBottom: "14px",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "19px",
                            opacity: 0.92,
                            maxWidth: "640px",
                            margin: "0 auto",
                        }}
                    >
                        {tagline}
                    </p>
                </div>
            </section>

            {/* OVERVIEW + IMAGE */}
            <section
                className="industry-overview"
                style={{
                    width: "92%",
                    maxWidth: "1200px",
                    margin: "90px auto 50px",
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
                    gap: "48px",
                    alignItems: "center",
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
                            marginBottom: "14px",
                        }}
                    >
                        {L.sectorOverview}
                    </p>
                    <h2
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "34px",
                            margin: "0 0 20px",
                            color: "#111",
                        }}
                    >
                        {sectorLine}
                    </h2>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "17px",
                            lineHeight: 1.7,
                            color: "#333",
                        }}
                    >
                        {overview}
                    </p>
                </div>

                <div
                    style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        boxShadow: "0 22px 60px rgba(0, 0, 0, 0.24)",
                    }}
                >
                    <img
                        src={data.image}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "360px",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* TYPICAL WORK */}
            <section
                className="industry-work"
                style={{
                    width: "92%",
                    maxWidth: "1100px",
                    margin: "0 auto 90px",
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        letterSpacing: "0.26em",
                        textTransform: "uppercase",
                        color: "#999",
                        marginBottom: "18px",
                    }}
                >
                    {L.typicalWork}
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "22px",
                    }}
                >
                    {detailPoints.map((text, idx) => (
                        <p
                            key={idx}
                            className="detail-block"
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "15px",
                                lineHeight: 1.7,
                                color: "#444",
                                margin: 0,
                            }}
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </section>

            {/* WHERE WE TYPICALLY HELP – 3 PILLAR CARDS */}
            <section
                className="industry-pillars"
                style={{
                    width: "92%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px",
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        letterSpacing: "0.26em",
                        textTransform: "uppercase",
                        color: "#999",
                        marginBottom: "16px",
                    }}
                >
                    {L.whereHelp}
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "28px",
                    }}
                >
                    {pillars.map((card, i) => (
                        <div key={i} className="pillar-card">
                            <h3
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontSize: "22px",
                                    marginBottom: "10px",
                                    color: "#111",
                                }}
                            >
                                {card.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "15px",
                                    lineHeight: 1.6,
                                    color: "#555",
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
                className="industry-quote"
                style={{
                    width: "92%",
                    maxWidth: "960px",
                    margin: "0 auto 130px",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "30px",
                        lineHeight: 1.4,
                        color: "#111",
                        marginBottom: "18px",
                    }}
                >
                    “{quote}”
                </p>
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#888",
                    }}
                >
                    {quoteAuthor}
                </p>
            </section>

            {/* local styles for hero fade, hover / gradient + responsive */}
            <style jsx>{`
                .industry-hero {
                    height: 65vh;
                    min-height: 420px;
                    background: radial-gradient(
                            circle at top,
                            #050814,
                            #020308 55%,
                            #000000 100%
                    );
                }

                .industry-hero video {
                    opacity: 0;
                    animation: heroVideoFade 900ms ease-out forwards;
                    will-change: opacity;
                }

                @keyframes heroVideoFade {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .industry-hero-content {
                    opacity: 0;
                }

                .industry-hero-content.hero-animate {
                    animation: heroTextFade 850ms ease-out forwards;
                    animation-delay: 350ms;
                    will-change: opacity;
                }

                @keyframes heroTextFade {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .pillar-card {
                    position: relative;
                    background: #ffffff;
                    border-radius: 18px;
                    padding: 26px 30px;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.06);
                    overflow: hidden;
                    transition:
                            transform 0.3s ease,
                            box-shadow 0.3s ease,
                            border-color 0.3s ease,
                            background 0.3s ease;
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

                /* ---------- RESPONSIVE ---------- */
                @media (max-width: 900px) {
                    .industry-hero {
                        height: 56vh;
                        min-height: 360px;
                    }

                    .industry-hero h1 {
                        font-size: 36px !important;
                    }

                    .industry-hero p {
                        font-size: 16px !important;
                    }

                    .industry-overview {
                        margin: 64px auto 40px !important;
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }

                    .industry-work,
                    .industry-pillars {
                        margin-bottom: 70px !important;
                    }

                    .industry-quote {
                        margin-bottom: 90px !important;
                    }

                    .industry-quote p:first-of-type {
                        font-size: 24px !important;
                    }
                }

                @media (max-width: 600px) {
                    .industry-hero {
                        height: 52vh;
                        min-height: 320px;
                    }

                    .industry-overview h2 {
                        font-size: 26px !important;
                    }

                    .industry-overview p {
                        font-size: 15px !important;
                    }

                    .pillar-card {
                        padding: 22px 20px;
                    }

                    .pillar-card h3 {
                        font-size: 19px;
                    }

                    .pillar-card p {
                        font-size: 14px;
                    }

                    .industry-quote p:first-of-type {
                        font-size: 22px !important;
                    }
                }
            `}</style>
        </main>
    );
}