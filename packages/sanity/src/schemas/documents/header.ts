import { defineType } from "sanity";

import { createNavigationField } from "../fields";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [createNavigationField("primaryNavigation", "Primary Navigation")],
  preview: {
    prepare: () => ({
      title: "Header",
    }),
  },
});
