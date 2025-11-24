// app/case-studies/[slug]/page.jsx
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import "../case-studies.css";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

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
      reflections,
      language
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

    return <CaseStudyDetailClient data={data} />;
}