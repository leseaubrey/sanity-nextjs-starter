import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";
import { linkFragment } from "./fragments";

const GLOBAL_DATA_QUERY = defineQuery(`
{
  "navbar": *[_type == "navbar"][0] {
    items[] {
      _type,
      _key,
      _type == 'navbarLink' => {
        ${linkFragment}
      },
      _type == 'navbarGroup' => {
        title,
        items[] {
          ${linkFragment}
        }
      },
    }
  }
}
`);

export const getGlobalData = () => {
  return sanityFetch({
    query: GLOBAL_DATA_QUERY,
  });
};
