import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";
import { imageFragment } from "./fragments";

const PEOPLE_QUERY = defineQuery(`
  *[_type == "person" && defined(slug.current)] {
    _id,
    name,
    "slug": slug.current,
    image {
      ${imageFragment}
    },
    role
  }
`);

export const fetchPeople = () => {
  return sanityFetch({
    query: PEOPLE_QUERY,
  });
};

const PERSON_BY_SLUG_QUERY = defineQuery(`
  *[_type == "person" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    image {
      ${imageFragment}
    },
    role,
    bio,
    socialMediaLinks
  }
`);

export const fetchPersonBySlug = (slug: string) => {
  return sanityFetch({
    query: PERSON_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_PERSON_SLUGS_QUERY = defineQuery(`
  *[_type == "person" && defined(slug.current)].slug.current
`);

export const fetchAllPersonSlugs = () => {
  return client.fetch(ALL_PERSON_SLUGS_QUERY);
};
