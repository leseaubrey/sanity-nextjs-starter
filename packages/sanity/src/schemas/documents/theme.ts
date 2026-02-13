import { defineField, defineType } from "sanity";

import { FIELD_GROUP, FIELD_GROUPS } from "../../constants";

export const themeType = defineType({
  name: "theme",
  title: "Theme",
  type: "document",
  groups: FIELD_GROUPS,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: FIELD_GROUP.CONTENT,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: FIELD_GROUP.CONTENT,
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: `${title ?? "Untitled Theme"}`,
    }),
  },
});
