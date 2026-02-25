import { defineField, defineType } from "sanity";

export const navigationLink = defineType({
  name: "navigationLink",
  title: "Navigation Link",
  type: "object",
  fields: [
    defineField({
      name: "link",
      title: "Link",
      type: "link",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      text: "link.text",
    },
    prepare({ text }) {
      return {
        title: `${text ?? "Untitled link"}`,
      };
    },
  },
});

export const navigationGroup = defineType({
  name: "navigationGroup",
  title: "Navigation Group",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "navigationLink" }],
    }),
  ],
});

export const oneLevelNavigation = defineType({
  name: "oneLevelNavigation",
  title: "One Level Navigation",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Navigation Items",
      type: "array",
      of: [{ type: "navigationLink" }],
    }),
  ],
});

export const twoLevelNavigation = defineType({
  name: "twoLevelNavigation",
  title: "Two Level Navigation",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Navigation Items",
      type: "array",
      of: [{ type: "navigationLink" }, { type: "navigationGroup" }],
    }),
  ],
});
