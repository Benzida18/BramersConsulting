"use client";
import { usePathname } from "next/navigation";
import Footer from "../components/Footer";

export default function FooterGate() {
    const p = usePathname();
    if (p?.startsWith("/studio")) return null;
    return <Footer />;
}