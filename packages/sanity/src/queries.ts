import { defineQuery } from "next-sanity";

import { sanityFetch } from "./live";
// Ensure module augmentation works when package is imported
import "./sanity.types";

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    title
  }
`);

export const fetchPageBySlug = (slug: string) =>
  sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
  });
