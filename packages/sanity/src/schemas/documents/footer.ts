import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "strapline",
      title: "Strapline",
      type: "string",
    }),
    defineField({
      name: "columns",
      title: "Columns",
      type: "array",
      of: [
        defineField({
          name: "column",
          title: "Column",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "links",
              title: "Links",
              type: "array",
              of: [{ type: "link" }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
    }),
    defineField({
      name: "subFooterNavigation",
      title: "Sub Footer Navigation",
      type: "oneLevelNavigation",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Footer",
    }),
  },
});
