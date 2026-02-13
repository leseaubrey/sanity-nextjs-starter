import { defineField, defineType } from "sanity";

import { FIELD_GROUP, FIELD_GROUPS } from "../../constants";
import { socialMediaLinks } from "../fields";

export const personType = defineType({
  name: "person",
  title: "Person",
  type: "document",
  groups: FIELD_GROUPS,
  fields: [
    defineField({
      name: "name",
      title: "Name",
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
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: FIELD_GROUP.CONTENT,
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      group: FIELD_GROUP.CONTENT,
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      group: FIELD_GROUP.CONTENT,
    }),
    socialMediaLinks,
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare: ({ name }) => ({
      title: `${name ?? "Unnamed Person"}`,
    }),
  },
});
