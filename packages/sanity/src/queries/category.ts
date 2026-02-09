import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";

const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0]{
    title
  }
`);

export const fetchCategoryBySlug = (slug: string) => {
  return sanityFetch({
    query: CATEGORY_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_CATEGORY_SLUGS_QUERY = defineQuery(`
  *[_type == "category" && defined(slug.current)].slug.current
`);

export const fetchAllCategorySlugs = () => {
  return client.fetch(ALL_CATEGORY_SLUGS_QUERY);
};
