"use client";
import { usePathname } from "next/navigation";
import ScrollProgress from "../components/ScrollProgress";

export default function ScrollGate() {
    const p = usePathname();
    if (p?.startsWith("/studio")) return null;
    return <ScrollProgress />;
}