// sanity/lib/client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qwdttf91",       // <- your real project ID
  dataset: "production",       // <- your dataset
  apiVersion: "2025-01-01",    // any recent date, or your chosen API version
  useCdn: true,                // cache public content
});