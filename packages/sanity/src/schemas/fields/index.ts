import { defineField } from "sanity";

export const socialNetworkProfiles = defineField({
  name: "socialNetworkProfiles",
  title: "Social Network Profiles",
  type: "object",
  group: "content",
  fields: [
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "x",
      title: "X URL",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    }),
    defineField({
      name: "gitHub",
      title: "GitHub",
      type: "url",
    }),
  ],
});
