// app/insights/page.tsx
import { client } from "@/sanity/lib/client";
import InsightsPageClient from "./InsightsPageClient";
import "./insights.css";

export const revalidate = 60;

export type InsightCardData = {
    _id: string;
    title: string;
    excerpt?: string;
    slug: string;
    industry?: string;
    language?: "en" | "fr";
    cover?: {
        asset?: {
            url?: string;
        };
    };
    body?: any[]; // PortableText content for modal
};

async function getInsights(): Promise<InsightCardData[]> {
    return await client.fetch(`
      *[_type == "insightArticle"] | order(publishedAt desc) {
        _id,
        title,
        excerpt,
        industry,
        language,
        "slug": slug.current,
        cover {
          asset -> { url }
        },
        body[]{
          ...,
          _type == "image" => {
            ...,
            asset->{
              url
            }
          }
        }
      }
    `);
}

export default async function InsightsPage() {
    const posts = await getInsights();
    return <InsightsPageClient posts={posts} />;
}