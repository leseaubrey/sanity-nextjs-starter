import { defineField, defineType } from "sanity";

const navbarLinkField = defineField({
  name: "navbarLink",
  title: "Navbar Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "link",
    }),
  ],
});

const navbarGroupField = defineField({
  name: "navbarGroup",
  title: "Navbar Group",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [navbarLinkField],
    }),
  ],
});

export const navbarType = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [navbarLinkField, navbarGroupField],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Navbar",
    }),
  },
});
