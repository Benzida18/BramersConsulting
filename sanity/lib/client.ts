// sanity/lib/client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qwdttf91",      // from your sanity.config
  dataset: "production",      // from your sanity.config
  apiVersion: "2024-01-01",   // any recent date is fine
  useCdn: false,              // ⛔ turn OFF CDN so we see fresh data
  perspective: "published",   // only use published documents
});