"use client";

import "../insights.css";
import { PortableText } from "@portabletext/react";
import type { InsightCardData } from "../page";

export default function InsightDetailClient({ post }: { post: InsightCardData }) {
    const hasBody = Array.isArray(post.body) && post.body.length > 0;

    const portableComponents = {
        types: {
            image: ({ value }: any) =>
                value?.asset?.url ? (
                    <img
                        src={value.asset.url}
                        alt={value.alt || ""}
                        className="insight-modal-image"
                    />
                ) : null,
        },
    };

    return (
        <main className="insight-detail-page">
            <article className="insight-detail-article">
                {/* hero image */}
                {post.cover?.asset?.url && (
                    <div className="insight-detail-hero">
                        <img
                            src={post.cover.asset.url}
                            alt={post.title}
                            className="insight-detail-hero-img"
                        />
                    </div>
                )}

                {/* header */}
                <header className="insight-detail-header">
                    <p className="insight-detail-eyebrow">Insight article</p>
                    <h1 className="insight-detail-title">{post.title}</h1>
                    {post.excerpt && (
                        <p className="insight-detail-excerpt">{post.excerpt}</p>
                    )}
                </header>

                {/* body */}
                <section className="insight-detail-body">
                    {hasBody ? (
                        <PortableText
                            value={post.body}
                            components={portableComponents}
                        />
                    ) : (
                        <p>{post.excerpt}</p>
                    )}
                </section>
            </article>
        </main>
    );
}