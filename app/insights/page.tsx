import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import CardGrid from "./CardGrid";

type Insight = {
    _id: string;
    title: string;
    slug?: { current: string };
    excerpt?: string;
    cover?: any;
    publishedAt?: string;
};

export const dynamic = "force-static";

export default async function InsightsPage() {
    const posts: Insight[] = await client.fetch(`
    *[_type == "insightArticle"] | order(publishedAt desc) {
      _id, title, slug, excerpt, cover, publishedAt
    }
  `);

    return (
        <main style={{ color: "#fff" }}>
            {/* HERO */}
            <section style={{ position:"relative", height:"72vh", overflow:"hidden" }}>
                <video
                    src="/videos/insight.mp4"
                    autoPlay loop muted playsInline
                    style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}
                />
                <div style={{
                    position:"absolute", inset:0,
                    background:"linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.15))"
                }}/>
                <div style={{
                    position:"absolute", top:"50%", left:"50%",
                    transform:"translate(-50%,-50%)", textAlign:"center", padding:"0 24px"
                }}>
                    <h1 style={{ fontFamily:"var(--font-playfair)", fontSize:64, margin:0 }}>Insights</h1>
                    <p style={{ opacity:0.9, marginTop:12, fontSize:18 }}>
                        Short, practical notes on strategy and delivery.
                    </p>
                </div>
            </section>

            {/* GRID */}
            <section style={{ maxWidth:1200, margin:"80px auto 120px", padding:"0 24px" }}>
                <CardGrid posts={posts} />
            </section>

            <div id="insight-modal-root" />
        </main>
    );
}