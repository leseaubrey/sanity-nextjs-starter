import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";

const THEMES_QUERY = defineQuery(`
  *[_type == "theme" && defined(slug.current)] {
    _id,
    title,
    "slug": slug.current
  }
`);

export const fetchThemes = () => {
  return sanityFetch({
    query: THEMES_QUERY,
  });
};

const THEME_BY_SLUG_QUERY = defineQuery(`
  *[_type == "theme" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current
  }
`);

export const fetchThemeBySlug = (slug: string) => {
  return sanityFetch({
    query: THEME_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_THEME_SLUGS_QUERY = defineQuery(`
  *[_type == "theme" && defined(slug.current)].slug.current
`);

export const fetchAllThemeSlugs = () => {
  return client.fetch(ALL_THEME_SLUGS_QUERY);
};
