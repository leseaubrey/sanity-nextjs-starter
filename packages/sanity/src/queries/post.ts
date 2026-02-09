import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";

const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    title
  }
`);

export const fetchPostBySlug = (slug: string) => {
  return sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)].slug.current
`);

export const fetchAllPostSlugs = () => {
  return client.fetch(ALL_POST_SLUGS_QUERY);
};
