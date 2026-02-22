import { defineField } from "sanity";

const navigationMenuLink = defineField({
  name: "navigationMenuLink",
  title: "Navigation Menu Link",
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

const navigationMenuGroup = defineField({
  name: "navigationMenuGroup",
  title: "Navigation Menu Group",
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
      of: [navigationMenuLink],
    }),
  ],
});

export const navigationMenu = defineField({
  name: "navigationMenu",
  title: "Navigation Menu",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [navigationMenuLink, navigationMenuGroup],
    }),
  ],
});
