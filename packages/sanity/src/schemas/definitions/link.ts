import { defineField, defineType } from "sanity";

function getLinkType(parent: unknown) {
  if (typeof parent === "object" && parent !== null && "type" in parent) {
    const value = (parent as { type?: unknown }).type;

    if (value === "internal" || value === "external") {
      return value;
    }
  }

  return undefined;
}

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { value: "internal", title: "Internal" },
          { value: "external", title: "External" },
        ],
        layout: "radio",
      },
      initialValue: "internal",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reference",
      title: "Reference",
      type: "reference",
      to: [{ type: "page" }],
      options: {
        disableNew: true,
      },
      hidden: ({ parent }) => getLinkType(parent) !== "internal",
      validation: (Rule) => {
        return Rule.custom((value, { parent }) => {
          const type = getLinkType(parent);

          if (type === "internal" && !value) {
            return "Reference is required for internal links";
          }

          return true;
        });
      },
    }),
    defineField({
      name: "url",
      type: "url",
      title: "URL",
      hidden: ({ parent }) => getLinkType(parent) !== "external",
      validation: (Rule) => {
        return Rule.custom((value, { parent }) => {
          const type = getLinkType(parent);

          if (type === "external" && !value) {
            return "URL is required for external links";
          }

          return true;
        });
      },
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in new tab",
      type: "boolean",
      initialValue: () => false,
      hidden: ({ parent }) => getLinkType(parent) !== "external",
    }),
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare: ({ text }) => ({
      title: `${text ?? "Untitled"}`,
    }),
  },
});
