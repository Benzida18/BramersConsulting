"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/mobile/MobileHeader";

export default function SiteShell({ children }) {
    const pathname = usePathname();

    // Studio pages: no site chrome
    const isStudioRoute = pathname.startsWith("/studio");

    if (isStudioRoute) {
        return <>{children}</>;
    }

    return (
        <>
            {/* Desktop header wrapper */}
            <div className="desktop-header-wrap">
                <Header />
            </div>

            {/* Mobile header wrapper */}
            <div className="mobile-header-wrap">
                <MobileHeader />
            </div>

            {/* Page content */}
            {children}

            <Footer />
        </>
    );
}