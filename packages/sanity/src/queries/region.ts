import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";

const REGIONS_QUERY = defineQuery(`
  *[_type == "region" && defined(slug.current)] {
    _id,
    title,
    "slug": slug.current
  }
`);

export const fetchRegions = () => {
  return sanityFetch({
    query: REGIONS_QUERY,
  });
};

const REGION_BY_SLUG_QUERY = defineQuery(`
  *[_type == "region" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current
  }
`);

export const fetchRegionBySlug = (slug: string) => {
  return sanityFetch({
    query: REGION_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_REGION_SLUGS_QUERY = defineQuery(`
  *[_type == "region" && defined(slug.current)].slug.current
`);

export const fetchAllRegionSlugs = () => {
  return client.fetch(ALL_REGION_SLUGS_QUERY);
};
