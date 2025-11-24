// app/case-studies/page.jsx
export const dynamic = "force-dynamic";

import { client } from "@/sanity/client";
import "./case-studies.css";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

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
    return <CaseStudiesPageClient cases={cases} maxBooks={MAX_BOOKS} />;
}