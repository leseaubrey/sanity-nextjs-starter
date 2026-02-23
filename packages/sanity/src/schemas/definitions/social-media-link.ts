import { defineField, defineType } from "sanity";

const SOCIAL_PLATFORMS = [
  { title: "LinkedIn", value: "linkedin" },
  { title: "X", value: "x" },
  { title: "Facebook", value: "facebook" },
  { title: "Instagram", value: "instagram" },
  { title: "YouTube", value: "youtube" },
  { title: "GitHub", value: "github" },
];

export const socialMediaLink = defineType({
  name: "socialMediaLink",
  title: "Social Media Link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: SOCIAL_PLATFORMS,
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      platform: "platform",
      url: "url",
    },
    prepare({ platform, url }) {
      const platformTitle = SOCIAL_PLATFORMS.find(
        (p) => p.value === platform,
      )?.title;

      return {
        title: `${platformTitle ?? ""}`,
        subtitle: `${url ?? ""}`,
      };
    },
  },
});
