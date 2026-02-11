import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";
import { imageFragment } from "./fragments";

const TEAM_MEMBERS_QUERY = defineQuery(`
  *[_type == "teamMember" && defined(slug.current)]{
    _id,
    name,
    "slug": slug.current,
    ${imageFragment},
    role
  }
`);

export const fetchTeamMembers = () => {
  return sanityFetch({
    query: TEAM_MEMBERS_QUERY,
  });
};

const TEAM_MEMBER_BY_SLUG_QUERY = defineQuery(`
  *[_type == "teamMember" && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    ${imageFragment},
    role,
    bio,
    socialNetworkProfiles
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
