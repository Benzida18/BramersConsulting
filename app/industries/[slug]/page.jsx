"use client";

export const dynamic = "force-dynamic";

export default function IndustrySlugPage({ params }) {
  const { slug } = params;

  return (
    <main style={{ padding: "120px 0", width: "92%", margin: "0 auto" }}>
      <h1
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "40px",
          fontWeight: 500,
          marginBottom: "24px"
        }}
      >
        {slug?.replace(/-/g, " ").toUpperCase()}
      </h1>

      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "16px",
          color: "#555",
          maxWidth: "700px",
          lineHeight: 1.6
        }}
      >
        This is a placeholder page for the <strong>{slug}</strong> industry.
      </p>
    </main>
  );
}
