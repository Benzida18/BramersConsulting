"use client";

import { PortableText } from "@portabletext/react";

export default function BodyRenderer({ value }) {
    return (
        <div style={{ fontSize: "18px", lineHeight: "1.7", color: "#222" }}>
            <PortableText value={value} />
        </div>
    );
}