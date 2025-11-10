// app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "Bramers Consulting",
  description: "Advisory for cross-regional strategy between the UK, Europe & Africa.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
      <head>
        <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,fr,nl,pt,ar',
          autoDisplay: false
        }, 'google_translate_element');
      }
    `
        }} />
      </head>
      <body className="page-body">
      <Header />

      {/* REQUIRED for Google Translate to mount */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <main>{children}</main>
      </body>
      </html>
  );
}