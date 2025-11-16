"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteShell({ children }) {
    const pathname = usePathname();

    // Any /studio route ( /studio, /studio/structure, etc. )
    const isStudioRoute = pathname.startsWith("/studio");

    if (isStudioRoute) {
        // Studio: no site chrome at all
        return <>{children}</>;
    }

    // Normal website pages: show header + footer
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}