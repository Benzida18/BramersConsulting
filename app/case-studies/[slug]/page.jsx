// app/case-studies/[slug]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import "../case-studies.css";

export const dynamic = "force-dynamic";

async function getCaseStudy(slug) {
    const query = `
    *[_type == "caseStudy" && slug.current == $slug][0]{
      _id,
      title,
      tag,
      meta,
      summary,
      context,
      mandate,
      whatWeDid,
      outcomes,
      reflections
    }
  `;
    return client.fetch(query, { slug });
}

export default async function CaseStudyDetailPage({ params }) {
    const { slug } = params;
    const data = await getCaseStudy(slug);

    if (!data) {
        notFound();
    }

    const {
        title,
        tag,
        meta,
        summary,
        context,
        mandate,
        whatWeDid,
        outcomes,
        reflections,
    } = data;

    return (
        <main className="case-detail-page">
            {/* HERO / OVERVIEW */}
            <section className="case-detail-hero">
                {tag && <p className="case-detail-eyebrow">{tag}</p>}
                <h1 className="case-detail-title">{title}</h1>
                {meta && <p className="case-detail-meta">{meta}</p>}
                {summary && <p className="case-detail-summary">{summary}</p>}
            </section>

            {/* CHAPTERS */}
            <section className="case-detail-body">
                {context && (
                    <article className="case-detail-section">
                        <h2>Context</h2>
                        <p>{context}</p>
                    </article>
                )}

                {mandate && (
                    <article className="case-detail-section">
                        <h2>Mandate</h2>
                        <p>{mandate}</p>
                    </article>
                )}

                {Array.isArray(whatWeDid) && whatWeDid.length > 0 && (
                    <article className="case-detail-section">
                        <h2>What we did</h2>
                        <ol>
                            {whatWeDid.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ol>
                    </article>
                )}

                {outcomes && (
                    <article className="case-detail-section">
                        <h2>What changed</h2>
                        <p>{outcomes}</p>
                    </article>
                )}

                {reflections && (
                    <article className="case-detail-section">
                        <h2>Reflections</h2>
                        <p>{reflections}</p>
                    </article>
                )}
            </section>

            {/* BACK BUTTON */}
            <section className="case-detail-footer-nav">
                <Link href="/case-studies" className="fancy case-detail-back-btn">
                    <span className="top-key"></span>
                    <span className="text">Back to case studies</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </Link>
            </section>
        </main>
    );
}