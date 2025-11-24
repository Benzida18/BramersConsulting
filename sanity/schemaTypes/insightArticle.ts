// sanity/schemaTypes/insightArticle.js
import { defineField, defineType } from "sanity";

export default defineType({
    name: "insightArticle",
    title: "Insight Article",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (r) => r.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (r) => r.required(),
        }),

        // 🔹 NEW: sector / industry (must match the ids we use in the UI)
        defineField({
            name: "industry",
            title: "Sector / Industry",
            type: "string",
            options: {
                layout: "dropdown",
                list: [
                    { title: "Agribusiness", value: "agribusiness" },
                    { title: "Financial Services", value: "finance" },
                    { title: "Real Estate & Infrastructure", value: "real-estate" },
                    { title: "Hospitality & Catering", value: "catering-hospitality" },
                    { title: "International Trade & Logistics", value: "international-trade" },
                    { title: "Sports & Football Advisory", value: "football-advisory" },
                    { title: "Coaching & Training", value: "coaching-training" },
                    { title: "AI Strategy", value: "ai-strategy" },
                    { title: "Mining & Natural Resources", value: "mining" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        // 🔹 NEW: language flag
        defineField({
            name: "language",
            title: "Language",
            type: "string",
            options: {
                layout: "radio",
                list: [
                    { title: "English", value: "en" },
                    { title: "Français", value: "fr" },
                ],
            },
            initialValue: "en",
        }),

        defineField({ name: "excerpt", type: "text", rows: 3 }),
        defineField({
            name: "cover",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),

        // full content used in the modal
        defineField({
            name: "body",
            type: "array",
            of: [{ type: "block" }, { type: "image" }],
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "cover",
            subtitle: "industry",
        },
    },
});