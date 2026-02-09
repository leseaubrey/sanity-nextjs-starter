import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";

const PAGE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    title
  }
`);

export const fetchPageBySlug = (slug: string) => {
  return sanityFetch({
    query: PAGE_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "page" && defined(slug.current)].slug.current
`);

export const fetchAllPageSlugs = () => {
  return client.fetch(ALL_PAGE_SLUGS_QUERY);
};
