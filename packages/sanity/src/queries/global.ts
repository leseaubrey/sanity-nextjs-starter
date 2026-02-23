import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";
import { buttonFragment, linkFragment } from "./fragments";

const GLOBAL_DATA_QUERY = defineQuery(`
{
  "header": *[_type == "header"][0] {
    primaryNavigation {
      items[] {
        _type == 'navigationLink' => {
          _key,
          _type,
          link { 
            ${linkFragment}
          }
        },
        _type == 'navigationGroup' => {
          _key,
          _type,
          title,
          items[] {
            _key,
            _type,
            link { 
              ${linkFragment}
            }
          }
        },
      },
    },
    buttons[] {
      _key,
      ${buttonFragment}
    }
  },
}
`);

export const getGlobalData = async () => {
  const result = await sanityFetch({
    query: GLOBAL_DATA_QUERY,
  });

  return result.data;
};
