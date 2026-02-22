import { defineType } from "sanity";

import { navigationMenu } from "../fields";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [navigationMenu],
  preview: {
    prepare: () => ({
      title: "Header",
    }),
  },
});
