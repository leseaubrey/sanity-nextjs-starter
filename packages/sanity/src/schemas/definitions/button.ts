import { defineField, defineType } from "sanity";

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "link",
      title: "Link",
      type: "link",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { value: "default", title: "Default" },
          { value: "outline", title: "Outline" },
          { value: "secondary", title: "Secondary" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "default",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      text: "link.text",
    },
    prepare({ text }) {
      return {
        title: `${text ?? "Untitled button"}`,
      };
    },
  },
});
