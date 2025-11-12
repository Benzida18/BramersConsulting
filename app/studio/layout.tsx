export const metadata = {
    title: "Studio",
};

export default function StudioRootLayout({ children }) {
    return (
        <div style={{ background: "#fff", minHeight: "100vh" }}>
            {children}
        </div>
    );
}