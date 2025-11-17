import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "qwdttf91",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,          // 🔑 important so you don’t see stale data
    perspective: "published",
});