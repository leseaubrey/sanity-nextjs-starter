import { defineQuery } from "next-sanity";

import { client } from "../client";
import { sanityFetch } from "../live";
import { imageFragment } from "./fragments";

export const EVENTS_QUERY = defineQuery(`
  {
    "upcoming": *[
      _type == "event" &&
      defined(slug.current) &&
      defined(eventDate) &&
      eventDate >= $now
    ] | order(eventDate asc) {
      _id,
      _type,
      title,
      "slug": slug.current,
      eventDate,
      excerpt,
      image {
        ${imageFragment}
      }
    },
    "past": *[
      _type == "event" &&
      defined(slug.current) &&
      defined(eventDate) &&
      eventDate < $now
    ] | order(eventDate desc) {
      _id,
      _type,
      title,
      "slug": slug.current,
      eventDate,
      excerpt,
      image {
        ${imageFragment}
      }
    }
  }
`);

export const fetchEvents = () => {
  const now = new Date().toISOString();

  return sanityFetch({
    query: EVENTS_QUERY,
    params: { now },
  });
};

const EVENT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "event" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    "slug": slug.current,
    eventDate,
    image {
      ${imageFragment},
    },
    content
  }
`);

export const fetchEventBySlug = (slug: string) => {
  return sanityFetch({
    query: EVENT_BY_SLUG_QUERY,
    params: { slug },
  });
};

export const ALL_EVENT_SLUGS_QUERY = defineQuery(`
  *[_type == "event" && defined(slug.current)].slug.current
`);

export const fetchAllEventSlugs = () => {
  return client.fetch(ALL_EVENT_SLUGS_QUERY);
};
