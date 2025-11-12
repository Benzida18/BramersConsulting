import { client } from "@/sanity/lib/client";
import BodyRenderer from "./BodyRenderer";

async function getArticle(slug: string) {
    return await client.fetch(
        `
    *[_type == "insightArticle" && slug.current == $slug][0]{
      title,
      body,
      publishedAt,
      cover {
        asset-> { url }
      }
    }`,
        { slug }
    );
}

export default async function InsightPage({ params }) {
    const article = await getArticle(params.slug);

    if (!article) return <div>Article not found</div>;

    return (
        <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
                {article.title}
            </h1>

            {article.cover?.asset?.url && (
                <img
                    src={article.cover.asset.url}
                    style={{
                        width: "100%",
                        borderRadius: "14px",
                        marginBottom: "30px",
                        objectFit: "cover"
                    }}
                />
            )}

            {/* CLIENT COMPONENT */}
            <BodyRenderer value={article.body} />
        </div>
    );
}