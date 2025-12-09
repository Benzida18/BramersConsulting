// components/HeroVideo.jsx
"use client";

import { useState } from "react";

export default function HeroVideo({
                                      src,
                                      poster,          // lightweight JPG/PNG used as placeholder
                                      brightness = 0.6, // 0–1, controls how dark the media is
                                      className = "",
                                      ...videoProps     // any extra props you pass (like muted, loop, etc.)
                                  }) {
    const [ready, setReady] = useState(false);

    return (
        <div
            className={`hero-video-shell ${ready ? "is-ready" : ""} ${className}`}
        >
            {poster && (
                <img
                    src={poster}
                    alt=""
                    aria-hidden="true"
                    className="hero-video-poster"
                    style={{ filter: `brightness(${brightness})` }}
                />
            )}

            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setReady(true)}
                className="hero-video-el"
                style={{ filter: `brightness(${brightness})` }}
                {...videoProps}
            />

            <style jsx>{`
                .hero-video-shell {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    /* prevents white flash while poster loads */
                    background: radial-gradient(circle at top, #151827, #05070c);
                }

                .hero-video-poster,
                .hero-video-el {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: opacity 0.45s ease;
                }

                .hero-video-poster {
                    opacity: 1;
                }

                .hero-video-el {
                    opacity: 0;
                }

                .hero-video-shell.is-ready .hero-video-el {
                    opacity: 1;
                }

                .hero-video-shell.is-ready .hero-video-poster {
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}