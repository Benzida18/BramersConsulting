// /sanity/schemaTypes/caseStudy.js

export default {
    name: "caseStudy",
    title: "Case Study",
    type: "document",

    fields: [
        // ───────── OVERVIEW / LIST CARD ─────────
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "Short, client-safe title (e.g. ‘Scaling export routes for a West African agribusiness’).",
            validation: (Rule) => Rule.required().min(8).max(120),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            description: "This is used in the URL, e.g. /case-studies/your-slug-here.",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "shelf",
            title: "Shelf / Category",
            type: "string",
            description: "Which ‘shelf’ (row) this book should appear on.",
            options: {
                layout: "radio",
                list: [
                    { title: "Markets & Trade", value: "markets-trade" },
                    { title: "Capital & Assets", value: "capital-assets" },
                    { title: "People & Performance", value: "people-performance" },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "tag",
            title: "Tag (e.g. Trade · Markets)",
            type: "string",
            description: "Short meta line above the title on the card (e.g. ‘Trade · Markets · West Africa’).",
        },
        {
            name: "summary",
            title: "Short summary",
            type: "text",
            rows: 3,
            description: "One paragraph for the front of the ‘book’ – what this case is about.",
        },
        {
            name: "meta",
            title: "Meta line",
            type: "string",
            description: "e.g. ‘Cross-border · 12–18 months · UK–West Africa’. Optional.",
        },
        {
            name: "order",
            title: "Order within shelf",
            type: "number",
            description: "Lower numbers appear earlier in that shelf. Leave blank to use created date.",
        },

        // ───────── BOOK CONTENT / CHAPTERS ─────────
        {
            name: "context",
            title: "Context",
            type: "text",
            rows: 4,
            description: "Where the client was starting from – markets, challenges, constraints.",
        },
        {
            name: "mandate",
            title: "Mandate",
            type: "text",
            rows: 4,
            description: "What Bramers was asked to do. The brief / question / scope in plain language.",
        },
        {
            name: "whatWeDid",
            title: "What we did (bullet points)",
            type: "array",
            of: [{ type: "string" }],
            description: "3–7 bullet points explaining the work (diagnostics, models, negotiations, etc.).",
        },
        {
            name: "outcomes",
            title: "What changed",
            type: "text",
            rows: 4,
            description: "Concrete shifts: agreements, decisions, performance changes, improved governance, etc.",
        },
        {
            name: "reflections",
            title: "Reflections / Afterword (optional)",
            type: "text",
            rows: 3,
            description: "Optional: learning, patterns, or advice you’d share with similar clients.",
        },
    ],

    // ───────── PREVIEW IN STUDIO LISTS ─────────
    preview: {
        select: {
            title: "title",
            shelf: "shelf",
            tag: "tag",
            order: "order",
        },
        prepare(selection) {
            const { title, shelf, tag, order } = selection;

            const shelfLabel =
                shelf === "markets-trade"
                    ? "Markets & Trade"
                    : shelf === "capital-assets"
                        ? "Capital & Assets"
                        : shelf === "people-performance"
                            ? "People & Performance"
                            : "Unassigned shelf";

            return {
                title: title || "Untitled case study",
                subtitle: [
                    shelfLabel,
                    tag ? ` · ${tag}` : "",
                    typeof order === "number" ? ` · #${order}` : "",
                ]
                    .join("")
                    .trim(),
            };
        },
    },
};