import { type SchemaTypeDefinition } from "sanity";
import { insightArticle } from "./insightArticle";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [insightArticle],
};