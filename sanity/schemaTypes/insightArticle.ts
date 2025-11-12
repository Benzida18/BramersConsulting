import {defineField, defineType} from "sanity";

export const insightArticle = defineType({
    name: "insightArticle",
    title: "Insight Article",
    type: "document",
    fields: [
        defineField({ name: "title", type: "string", validation: r => r.required() }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: r => r.required()
        }),
        defineField({ name: "excerpt", type: "text", rows: 3 }),
        defineField({ name: "cover", type: "image", options: { hotspot: true } }),
        defineField({ name: "publishedAt", type: "datetime", initialValue: () => new Date().toISOString() }),
        defineField({ name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    ],
    preview: { select: { title: "title", media: "cover", subtitle: "publishedAt" } }
});