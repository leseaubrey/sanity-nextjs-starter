import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";
import { imageFragment } from "./fragments";

const PUBLICATIONS_QUERY = defineQuery(`
  *[_type == "publication" && defined(slug.current)] {
    _id,
    _type,
    title,
    "slug": slug.current,
    publishedDate,
    excerpt,
    image {
      ${imageFragment},
    },
    "authors": authors[]->{
      _id,
      name,
      "slug": slug.current,
      ${imageFragment},
      role,
    },
    "regions": regions[]->{
      _id,
      title,
      "slug": slug.current
    },
    "themes": themes[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`);

export const fetchPublications = () => {
  return sanityFetch({
    query: PUBLICATIONS_QUERY,
  });
};

const PUBLICATION_BY_SLUG_QUERY = defineQuery(`
  *[_type == "publication" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    "slug": slug.current,
    publishedDate,
    image {
      ${imageFragment},
    },
    content,
    "authors": authors[]->{
      _id,
      name,
      "slug": slug.current,
      ${imageFragment},
      role,
    },
    "regions": regions[]->{
      _id,
      title,
      "slug": slug.current
    },
    "themes": themes[]->{
      _id,
      title,
      "slug": slug.current
    }
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
