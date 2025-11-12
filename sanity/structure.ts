import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
    S.list()
        .title("Content")
        .items([
            // Insight Articles
            S.documentTypeListItem("insightArticle").title("Insight Articles"),
        ]);