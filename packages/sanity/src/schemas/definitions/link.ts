import { defineField, defineType } from "sanity";

function getParentType(parent: unknown) {
  if (typeof parent === "object" && parent !== null && "type" in parent) {
    const value = (parent as { type?: unknown }).type;

    if (value === "internal" || value === "external") {
      return value;
    }
  }

  return undefined;
}

export const linkType = defineType({
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
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
        layout: "radio",
      },
      initialValue: "internal",
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
      hidden: ({ parent }) => getParentType(parent) !== "internal",
      validation: (Rule) => {
        return Rule.custom((value, { parent }) => {
          const type = getParentType(parent);

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
      hidden: ({ parent }) => getParentType(parent) !== "external",
      validation: (Rule) => {
        return Rule.custom((value, { parent }) => {
          const type = getParentType(parent);

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
      hidden: ({ parent }) => getParentType(parent) !== "external",
    }),
  ],
});
