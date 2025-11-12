// app/insights/page.tsx
import { client } from "@/sanity/lib/client";
import InsightsPageClient from "./InsightsPageClient";

export const revalidate = 60;

export type InsightCardData = {
    _id: string;
    title: string;
    excerpt?: string;
    slug: string;
    cover?: {
        asset?: {
            url?: string;
        };
    };
};

async function getInsights(): Promise<InsightCardData[]> {
    return await client.fetch(`
    *[_type == "insightArticle"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      "slug": slug.current,
      cover {
        asset -> { url }
      }
    }
  `);
}

export default async function InsightsPage() {
    const posts = await getInsights();
    return <InsightsPageClient posts={posts} />;
}