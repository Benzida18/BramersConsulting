// app/studio/layout.tsx
export const metadata = {
    title: "Studio – Bramers Consulting",
};

export default function StudioLayout({ children }) {
    // ⚠️ No <html> or <body> tags here – only in root layout
    return <>{children}</>;
}