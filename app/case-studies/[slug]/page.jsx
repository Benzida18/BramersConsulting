// app/case-studies/[slug]/page.jsx
import Link from "next/link";
import { client } from "@/sanity/client";
import "./case-studies.css";

async function getCaseStudy(slug) {
    const query = `
    *[_type == "caseStudy" && slug.current == $slug][0]{
      title,
      shelf,
      tag,
      summary,
      meta,
      context,
      mandate,
      whatWeDid,
      outcomes,
      reflections
    }
  `;
    return client.fetch(query, { slug });
}

const SHELF_LABELS = {
    "markets-trade": "Markets & Trade",
    "capital-assets": "Capital & Assets",
    "people-performance": "People & Performance",
};

export default async function CaseStudyBookPage({ params }) {
    const { slug } = params;
    const book = await getCaseStudy(slug);

    if (!book) {
        return (
            <main className="cs-book-page">
                <section className="cs-book-notfound">
                    <h1>Case study coming soon</h1>
                    <p>
                        This case book hasn&apos;t been written yet. It will appear here
                        once content is added and published in the Studio.
                    </p>
                    <Link href="/case-studies" className="cs-book-backlink">
                        ← Back to case studies
                    </Link>
                </section>
            </main>
        );
    }

    const shelfLabel = SHELF_LABELS[book.shelf] || "Case study";

    return (
        <main className="cs-book-page">
            <section className="cs-book-hero">
                <div className="cs-book-hero-inner">
                    <p className="cs-book-shelf">{shelfLabel}</p>
                    <h1 className="cs-book-main-title">{book.title}</h1>
                    <div className="cs-book-tag-meta">
                        {book.tag && (
                            <span className="cs-book-tag-pill">{book.tag}</span>
                        )}
                        {book.meta && (
                            <span className="cs-book-meta-text">{book.meta}</span>
                        )}
                    </div>
                    <Link href="/case-studies" className="cs-book-backlink">
                        ← Back to case studies
                    </Link>
                </div>
            </section>

            <section className="cs-book-layout">
                <div className="cs-book-page-shell">
                    <div className="cs-book-page-edge" aria-hidden="true" />
                    <article className="cs-book-page-inner">
                        {book.context && (
                            <section className="cs-book-section">
                                <p className="cs-book-section-label">Chapter 1</p>
                                <h2 className="cs-book-section-title">Context</h2>
                                <p className="cs-book-body">{book.context}</p>
                            </section>
                        )}

                        {book.mandate && (
                            <section className="cs-book-section">
                                <p className="cs-book-section-label">Chapter 2</p>
                                <h2 className="cs-book-section-title">Mandate</h2>
                                <p className="cs-book-body">{book.mandate}</p>
                            </section>
                        )}

                        {book.whatWeDid && book.whatWeDid.length > 0 && (
                            <section className="cs-book-section">
                                <p className="cs-book-section-label">Chapter 3</p>
                                <h2 className="cs-book-section-title">What we did</h2>
                                <ul className="cs-book-list">
                                    {book.whatWeDid.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {book.outcomes && (
                            <section className="cs-book-section">
                                <p className="cs-book-section-label">Chapter 4</p>
                                <h2 className="cs-book-section-title">What changed</h2>
                                <p className="cs-book-body">{book.outcomes}</p>
                            </section>
                        )}

                        {book.reflections && (
                            <section className="cs-book-section">
                                <p className="cs-book-section-label">Afterword</p>
                                <h2 className="cs-book-section-title">Reflections</h2>
                                <p className="cs-book-body">{book.reflections}</p>
                            </section>
                        )}
                    </article>
                </div>
            </section>
        </main>
    );
}