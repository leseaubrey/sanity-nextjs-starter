import { defineField, defineType } from "sanity";

export const cta = defineType({
  name: "cta",
  title: "Call To Action",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
    }),
  ],
});
