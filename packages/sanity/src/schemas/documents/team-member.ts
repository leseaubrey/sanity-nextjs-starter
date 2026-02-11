import { defineField, defineType } from "sanity";

import { socialNetworkProfiles } from "../fields";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  groups: [{ name: "content", title: "Content", default: true }],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
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
      group: "content",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      group: "content",
    }),
    socialNetworkProfiles,
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare: ({ name }) => ({
      title: `${name ?? "Unnamed Team Member"}`,
    }),
  },
});
