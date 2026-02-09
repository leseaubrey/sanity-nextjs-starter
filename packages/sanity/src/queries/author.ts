import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";

const AUTHOR_BY_SLUG_QUERY = defineQuery(`
  *[_type == "author" && slug.current == $slug][0]{
    name
  }
`);

export const fetchAuthorBySlug = (slug: string) => {
  return sanityFetch({
    query: AUTHOR_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_AUTHOR_SLUGS_QUERY = defineQuery(`
  *[_type == "author" && defined(slug.current)].slug.current
`);

export const fetchAllAuthorSlugs = () => {
  return client.fetch(ALL_AUTHOR_SLUGS_QUERY);
};
