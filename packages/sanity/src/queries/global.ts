import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";
import {
  buttonFragment,
  linkFragment,
  oneLevelNavigationFragment,
  twoLevelNavigationFragment,
} from "./fragments";

const GLOBAL_DATA_QUERY = defineQuery(`
{
  "header": *[_type == "header"][0] {
    primaryNavigation {
      ${twoLevelNavigationFragment}
    },
    buttons[] {
      _key,
      ${buttonFragment}
    }
  },
  "footer": *[_type == "footer"][0] {
    strapline,
    columns[] {
      _key,
      title,
      links[] {
        _key,
        ${linkFragment}
      }
    },
    copyrightText,
    subFooterNavigation {
      ${oneLevelNavigationFragment}
    },
  },
  "settings": *[_type == "settings"][0] {
    socialMediaLinks
  }
}
`);

export const getGlobalData = async () => {
  const result = await sanityFetch({
    query: GLOBAL_DATA_QUERY,
  });

  return result.data;
};
