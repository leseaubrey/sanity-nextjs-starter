import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";

const TEAM_MEMBER_BY_SLUG_QUERY = defineQuery(`
  *[_type == "teamMember" && slug.current == $slug][0]{
    name
  }
`);

export const fetchTeamMemberBySlug = (slug: string) => {
  return sanityFetch({
    query: TEAM_MEMBER_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_TEAM_MEMBER_SLUGS_QUERY = defineQuery(`
  *[_type == "teamMember" && defined(slug.current)].slug.current
`);

export const fetchAllTeamMemberSlugs = () => {
  return client.fetch(ALL_TEAM_MEMBER_SLUGS_QUERY);
};
