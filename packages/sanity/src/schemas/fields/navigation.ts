import { defineField } from "sanity";

const navigationLink = defineField({
  name: "navigationLink",
  title: "Link",
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

const navigationGroup = defineField({
  name: "navigationGroup",
  title: "Group",
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
      of: [navigationLink],
    }),
  ],
});

export const createNavigationField = (name: string, title: string) => {
  return defineField({
    name: name,
    title: title,
    type: "object",
    fields: [
      defineField({
        name: "items",
        title: "Navigation Items",
        type: "array",
        of: [navigationLink, navigationGroup],
      }),
    ],
  });
};
