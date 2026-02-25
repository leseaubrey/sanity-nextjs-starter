import { defineField } from "sanity";

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
        of: [
          {
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
          },
          {
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
                of: [
                  {
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
                  },
                ],
              }),
            ],
          },
        ],
      }),
    ],
  });
};
