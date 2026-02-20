import { defineField, defineType } from "sanity";

import { FIELD_GROUP, FIELD_GROUPS } from "../../constants";

export const publicationType = defineType({
  name: "publication",
  title: "Publication",
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
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      group: FIELD_GROUP.CONTENT,
      validation: (Rule) => Rule.required(),
      initialValue: new Date().toISOString().slice(0, 10),
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

    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      group: FIELD_GROUP.CONTENT,
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: "regions",
      title: "Regions",
      type: "array",
      group: FIELD_GROUP.CONTENT,
      of: [
        {
          type: "reference",
          to: [{ type: "region" }],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: "themes",
      title: "Themes",
      type: "array",
      group: FIELD_GROUP.CONTENT,
      of: [
        {
          type: "reference",
          to: [{ type: "theme" }],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: `${title ?? "Untitled Publication"}`,
    }),
  },
});
