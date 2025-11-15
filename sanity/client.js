// sanity/client.js
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "qwdttf91",        // 👈 from sanity.config.ts
    dataset: "production",        // 👈 from sanity.config.ts
    apiVersion: "2024-01-01",     // can be any valid date / your chosen version
    useCdn: true,                 // faster, fine for public read-only
});