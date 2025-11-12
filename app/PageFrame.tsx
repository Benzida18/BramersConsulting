"use client";
import { usePathname } from "next/navigation";

export default function PageFrame({ children }: { children: React.ReactNode }) {
    const isStudio = usePathname()?.startsWith("/studio");
    // Keep content from sliding under your fixed header
    return <div style={{ paddingTop: isStudio ? 0 : "120px" }}>{children}</div>;
}