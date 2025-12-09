"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyVideo({
                                      src,
                                      className,
                                      style,
                                      autoPlay = true,
                                      loop = true,
                                      muted = true,
                                      playsInline = true,
                                  }) {
    const videoRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            className={className}
            style={style}
            // only set src when we actually want to load it
            src={shouldLoad ? src : undefined}
            autoPlay={shouldLoad && autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
        />
    );
}