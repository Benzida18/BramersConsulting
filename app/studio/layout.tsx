export const metadata = {
    title: "Studio",
};

export default function StudioRootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body style={{ background: "#111", minHeight: "100vh" }}>
        {children}
        </body>
        </html>
    );
}