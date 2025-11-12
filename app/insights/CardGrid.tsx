"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";

export default function CardGrid({ posts }: { posts: any[] }) {
    return (
        <div
            style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",
                gap:24
            }}
        >
            {posts.map((p) => (
                <Card key={p._id} post={p} />
            ))}
            {posts.length === 0 && (
                <div style={{ opacity:0.7 }}>No articles yet — create one in Studio and Publish.</div>
            )}
        </div>
    );
}

function Card({ post }: { post: any }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    function onEnter() {
        if (!ref.current) return;
        ref.current.style.transform = "translateY(-6px)";
        ref.current.style.boxShadow = "0 18px 44px rgba(30,144,255,0.16)";
        ref.current.style.borderColor = "#1E90FF";
    }
    function onLeave() {
        if (!ref.current) return;
        ref.current.style.transform = "translateY(0)";
        ref.current.style.boxShadow = "0 8px 28px rgba(0,0,0,0.10)";
        ref.current.style.borderColor = "rgba(255,255,255,0.10)";
    }

    return (
        <>
            <div
                ref={ref}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{
                    background:"rgba(255,255,255,0.04)",
                    border:"1px solid rgba(255,255,255,0.10)",
                    borderRadius:18,
                    overflow:"hidden",
                    transition:"transform .28s ease, box-shadow .28s ease, border-color .28s ease",
                    cursor:"default"
                }}
            >
                {post.cover && (
                    <img
                        src={urlFor(post.cover).width(800).height(450).fit("crop").url()}
                        alt=""
                        style={{ width:"100%", height:180, objectFit:"cover" }}
                    />
                )}
                <div style={{ padding:18 }}>
                    <h3 style={{ fontFamily:"var(--font-playfair)", fontSize:22, margin:"2px 0 8px" }}>
                        {post.title}
                    </h3>
                    {post.excerpt && <p style={{ opacity:0.85, lineHeight:1.6 }}>{post.excerpt}</p>}

                    <button
                        onClick={() => setOpen(true)}
                        style={{
                            marginTop:14,
                            padding:"10px 14px",
                            borderRadius:10,
                            background:"#1E90FF",
                            color:"#fff",
                            border:"1px solid #1E90FF",
                            fontWeight:600
                        }}
                    >
                        Read more
                    </button>
                </div>
            </div>

            {open && <Modal post={post} onClose={() => setOpen(false)} />}
        </>
    );
}

/* ---------- Smooth Modal ---------- */

function Modal({ post, onClose }: { post:any; onClose:() => void }) {
    const [root, setRoot] = useState<Element|null>(null);
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setRoot(document.getElementById("insight-modal-root"));
    }, []);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        requestAnimationFrame(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    }, []);

    const modal = (
        <div
            onClick={onClose}
            style={{
                position:"fixed", inset:0, zIndex:10000,
                background:"rgba(0,0,0,0.55)",
                backdropFilter:"blur(6px)",
                display:"grid", placeItems:"center", padding:"24px"
            }}
        >
            <div
                ref={wrapRef}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width:"min(900px, 100%)",
                    maxHeight:"85vh",
                    overflow:"auto",
                    background:"#0b0f16",
                    border:"1px solid rgba(255,255,255,0.08)",
                    borderRadius:18,
                    boxShadow:"0 30px 80px rgba(0,0,0,0.4)",
                    padding:24,
                    opacity:0,
                    transform:"translateY(16px)",
                    transition:"opacity .25s ease, transform .25s ease"
                }}
            >
                {post.cover && (
                    <img
                        src={urlFor(post.cover).width(1200).height(600).fit("crop").url()}
                        alt=""
                        style={{ width:"100%", height:300, objectFit:"cover", borderRadius:12, marginBottom:16 }}
                    />
                )}
                <h2 style={{ fontFamily:"var(--font-playfair)", fontSize:28, marginBottom:10 }}>{post.title}</h2>
                {post.publishedAt && (
                    <p style={{ opacity:0.7, marginBottom:16 }}>
                        {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                )}
                {post.body ? <PortableText value={post.body} /> : <p style={{ opacity:0.85 }}>{post.excerpt ?? "—"}</p>}

                <div style={{ display:"flex", justifyContent:"flex-end", marginTop:18 }}>
                    <button
                        onClick={onClose}
                        style={{
                            padding:"10px 14px",
                            borderRadius:10,
                            background:"transparent",
                            color:"#fff",
                            border:"1px solid rgba(255,255,255,0.25)"
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );

    if (!root) return null;
    return createPortal(modal, root);
}