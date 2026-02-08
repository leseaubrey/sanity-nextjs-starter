import { defineQuery } from "next-sanity";

/**
 * Dynamic Page
 */
export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    title
  }
`);
