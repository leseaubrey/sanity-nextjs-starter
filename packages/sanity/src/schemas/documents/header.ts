import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "primaryNavigation",
      title: "Primary Navigation",
      type: "twoLevelNavigation",
    }),
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
