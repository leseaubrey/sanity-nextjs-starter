import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";
import { imageFragment } from "./fragments";

const PROJECTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    image {
      ${imageFragment},
    }
  }
`);

export const fetchProjects = () => {
  return sanityFetch({
    query: PROJECTS_QUERY,
  });
};

const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    "slug": slug.current,
    image {
      ${imageFragment},
    },
    content
  }
`);

export const fetchProjectBySlug = (slug: string) => {
  return sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)].slug.current
`);

export const fetchAllProjectSlugs = () => {
  return client.fetch(ALL_PROJECT_SLUGS_QUERY);
};
