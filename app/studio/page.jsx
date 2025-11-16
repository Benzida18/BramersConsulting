// app/studio/page.jsx
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../sanity.config"; // from project root

export default function StudioPage() {
    return <NextStudio config={config} />;
}