// app/insights/InsightDetailClient.tsx
"use client";

import "./insights.css";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

type InsightDetailProps = {
    post: {
        _id: string;
        title: string;
        excerpt?: string;
        slug: string;
        industry?: string;
        language?: "en" | "fr";
        body?: any[];
        cover?: {
            asset?: {
                url?: string;
            };
        };
    };
};

export default function InsightDetailClient({ post }: InsightDetailProps) {
    const hasBody = Array.isArray(post.body) && post.body.length > 0;

    const portableComponents = {
        types: {
            image: ({ value }: any) =>
                value?.asset?.url ? (
                    <img
                        src={value.asset.url}
                        alt={value.alt || ""}
                        className="insight-detail-image"
                    />
                ) : null,
        },
    };

    return (
        <div className="insight-detail-page">
            <article className="insight-detail-article">
                {/* Hero image */}
                {post.cover?.asset?.url && (
                    <div className="insight-detail-hero">
                        <img
                            src={post.cover.asset.url}
                            alt={post.title}
                            className="insight-detail-hero-img"
                        />
                    </div>
                )}

                {/* Heading + dek */}
                <header className="insight-detail-header">
                    <p className="insight-detail-eyebrow">Insight article</p>
                    <h1 className="insight-detail-title">{post.title}</h1>
                    {post.excerpt && (
                        <p className="insight-detail-dek">{post.excerpt}</p>
                    )}
                </header>

                {/* Body */}
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

                {/* Back button */}
                <footer className="insight-detail-footer">
                    <Link href="/insights" className="insight-detail-back">
            <span
                className="insight-detail-back-line"
                aria-hidden="true"
            ></span>
                        <span className="insight-detail-back-text">Back to insights</span>
                    </Link>
                </footer>
            </article>
        </div>
    );
}