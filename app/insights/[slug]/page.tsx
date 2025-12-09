// app/insights/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import InsightDetailClient from "../InsightDetailClient";

type InsightDetailData = {
    _id: string;
    title: string;
    slug: string;
    industry?: string;
    language?: "en" | "fr";
    excerpt?: string;
    body?: any[];
    cover?: {
        asset?: {
            url?: string;
        };
    };
};

async function getInsight(slug: string): Promise<InsightDetailData | null> {
    return await client.fetch(
        `*[_type == "insightArticle" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          industry,
          language,
          excerpt,
          body,
          cover {
            asset -> { url }
          }
        }`,
        { slug }
    );
}

export default async function InsightSlugPage({
                                                  params,
                                              }: {
    params: { slug: string };
}) {
    const post = await getInsight(params.slug);

    if (!post) {
        return (
            <main
                style={{
                    padding: "140px 24px",
                    fontFamily: "var(--font-inter)",
                }}
            >
                <h1
                    style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: 34,
                        marginBottom: 12,
                    }}
                >
                    Insight not found
                </h1>
                <p style={{ color: "#555" }}>
                    The article you’re looking for doesn’t exist or has been
                    unpublished.
                </p>
            </main>
        );
    }

    return <InsightDetailClient post={post} />;
}