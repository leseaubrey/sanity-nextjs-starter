import { defineField, defineType } from "sanity";

import { createNavigationField } from "../helpers";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    createNavigationField("primaryNavigation", "Primary Navigation"),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "buttons",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Header",
    }),
  },
});
