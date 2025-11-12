import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
    title: "Bramers Consulting",
    description: "Advisory for cross-regional strategy between the UK & Africa.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.className} ${playfair.className}`}>
        <body>{children}</body>
        </html>
    );
}