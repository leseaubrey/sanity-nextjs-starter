import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "socialMediaLinks",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Settings",
    }),
  },
});
