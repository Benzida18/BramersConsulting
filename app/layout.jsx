// app/layout.jsx
import "./globals.css";
import "../components/Mobile/MobileGlobal.css";
import "../components/Mobile/MobileHeader.css";

import { Inter, Playfair_Display } from "next/font/google";
import SiteShell from "@/components/SiteShell";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
    title: "Bramers Consulting",
    description: "Advisory for cross-regional strategy between the UK & Africa.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.className} ${playfair.className}`}>
        <body className="site-body">
        <SiteShell>{children}</SiteShell>
        </body>
        </html>
    );
}