"use client";
import Link from "next/link";
import "./insights.css";

export default function CardGrid({ posts }) {
    return (
        <div className="insight-grid">
            {posts.map((post) => (
                <Link href={`/insights/${post.slug}`} key={post._id}>
                    <div className="insight-card">
                        {post.cover?.asset?.url && (
                            <img
                                src={post.cover.asset.url}
                                alt={post.title}
                                className="insight-card-img"
                            />
                        )}

                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}