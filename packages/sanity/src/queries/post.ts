import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";
import { imageFragment } from "./fragments";

const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
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

export const fetchPosts = () => {
  return sanityFetch({
    query: POSTS_QUERY,
  });
};

const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
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
