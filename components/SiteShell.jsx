"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileFooter from "@/components/mobile/MobileFooter";

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
            <div className="desktop-only">
                <Header />
            </div>

            {/* Mobile header wrapper */}
            <div className="mobile-only">
                <MobileHeader />
            </div>

            {/* Page content */}
            {children}

            {/* Desktop footer */}
            <div className="desktop-only">
                <Footer />
            </div>

            {/* Mobile footer */}
            <div className="mobile-only">
                <MobileFooter />
            </div>
        </>
    );
}