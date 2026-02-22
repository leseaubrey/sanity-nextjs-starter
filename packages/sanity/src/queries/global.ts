import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";
import { linkFragment } from "./fragments";

const GLOBAL_DATA_QUERY = defineQuery(`
{
  "header": *[_type == "header"][0] {
    primaryNavigation {
      items[] {
        _type,
        _key,
        _type == 'navigationLink' => {
          ${linkFragment}
        },
        _type == 'navigationGroup' => {
          title,
          items[] {
            ${linkFragment}
          }
        },
      }
    }
  }
}
`);

export const getGlobalData = async () => {
  const result = await sanityFetch({
    query: GLOBAL_DATA_QUERY,
  });

  return result.data;
};
