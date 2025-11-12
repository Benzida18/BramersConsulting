"use client";
import { usePathname } from "next/navigation";
import Header from "../components/Header";

export default function HeaderGate() {
    const p = usePathname();
    if (p?.startsWith("/studio")) return null;
    return <Header />;
}