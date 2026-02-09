import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";

const PUBLICATION_BY_SLUG_QUERY = defineQuery(`
  *[_type == "publication" && slug.current == $slug][0]{
    title
  }
`);

export const fetchPublicationBySlug = (slug: string) => {
  return sanityFetch({
    query: PUBLICATION_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_PUBLICATION_SLUGS_QUERY = defineQuery(`
  *[_type == "publication" && defined(slug.current)].slug.current
`);

export const fetchAllPublicationSlugs = () => {
  return client.fetch(ALL_PUBLICATION_SLUGS_QUERY);
};
