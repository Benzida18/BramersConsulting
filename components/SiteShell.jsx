// components/SiteShell.jsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/Mobile/MobileHeader"; // ⬅️ capital M
// ❌ REMOVE this: import MobileFooter from "@/components/mobile/MobileFooter";

export default function SiteShell({ children }) {
    const pathname = usePathname();
    const isStudioRoute = pathname.startsWith("/studio");

    if (isStudioRoute) {
        return <>{children}</>;
    }

    return (
        <>
            {/* Desktop header */}
            <div className="desktop-only">
                <Header />
            </div>

            {/* Mobile header */}
            <div className="mobile-only">
                <MobileHeader />
            </div>

            {/* Page content */}
            {children}

            {/* Desktop footer */}
            <div className="desktop-only">
                <Footer />
            </div>

            {/* Mobile footer – reuse same Footer for now */}
            <div className="mobile-only">
                <Footer />
            </div>
        </>
    );
}