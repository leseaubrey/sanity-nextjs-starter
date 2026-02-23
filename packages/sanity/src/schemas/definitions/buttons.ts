import { defineType } from "sanity";

export const buttons = defineType({
  name: "buttons",
  title: "Buttons",
  type: "array",
  of: [{ type: "button" }],
});
