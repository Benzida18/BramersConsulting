// app/layout.jsx
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "../components/Footer";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: "Bramers Consulting",
    description: "Advisory for cross-regional strategy between the UK & Africa.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.className} ${playfair.className}`}>
        <body>
        <Header />

        {children}

        {/* ✅ Scroll Progress Bar Component */}
        <ScrollProgress />
        <Footer />
        </body>
        </html>
    );
}