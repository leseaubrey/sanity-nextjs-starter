import { defineField, defineType } from "sanity";

import { FIELD_GROUP, FIELD_GROUPS } from "../../constants";

export const eventType = defineType({
  name: "event",
  title: "Event",
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
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
      group: FIELD_GROUP.CONTENT,
      initialValue: new Date().toISOString().slice(0, 10),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      group: FIELD_GROUP.CONTENT,
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: FIELD_GROUP.CONTENT,
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      group: FIELD_GROUP.CONTENT,
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: `${title ?? "Untitled Event"}`,
    }),
  },
});
