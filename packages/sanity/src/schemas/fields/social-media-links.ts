import { defineField } from "sanity";

export const socialMediaLinks = defineField({
  name: "socialMediaLinks",
  title: "Social Media Links",
  type: "array",
  group: "content",
  of: [{ type: "socialMediaLink" }],
});
