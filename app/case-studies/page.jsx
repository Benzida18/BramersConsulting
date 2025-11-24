// app/case-studies/page.jsx
export const dynamic = "force-dynamic";

import { client } from "@/sanity/client";
import CaseStudiesPageClient from "./CaseStudiesPageClient";
import "./case-studies.css";

const MAX_BOOKS = 9;

// Fetch case studies from Sanity
async function getCaseStudies() {
    const query = `
    *[_type == "caseStudy"]{
      _id,
      title,
      slug,
      shelf,
      tag,
      summary,
      order,
      meta,
      language
    } | order(coalesce(order, 9999) asc, _createdAt desc)
  `;
    return client.fetch(query);
}

export default async function CaseStudiesPage() {
    const cases = await getCaseStudies();

    // (We still cap to MAX_BOOKS inside the client by slice, but
    //   you can also leave it all and let the client decide; either is fine.)
    const visibleCases = (cases || []).slice(0, MAX_BOOKS);

    return <CaseStudiesPageClient cases={visibleCases} />;
}