import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";
import { imageFragment } from "./fragments";

export const EVENTS_SPLIT_QUERY = defineQuery(`
  {
    "upcoming": *[
      _type == "event" &&
      defined(slug.current) &&
      defined(eventDate) &&
      eventDate >= $now
    ] | order(eventDate asc) {
      _id,
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

export const fetchEventsSplit = () => {
  const now = new Date().toISOString();

  return sanityFetch({
    query: EVENTS_SPLIT_QUERY,
    params: { now },
  });
};
