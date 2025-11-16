"use client";

import { usePathname } from "next/navigation";
// 🔽 adjust these imports to match your actual paths
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteShell({ children }) {
    const pathname = usePathname();

    // Any route that starts with /studio should NOT show the site chrome
    const isStudioRoute = pathname.startsWith("/studio");

    if (isStudioRoute) {
        // No header, no footer – just render the Studio
        return <>{children}</>;
    }

    // Normal website pages: header + content + footer
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}