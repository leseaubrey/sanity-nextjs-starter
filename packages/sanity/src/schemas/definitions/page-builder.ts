import { defineArrayMember, defineType } from "sanity";

import { sections } from "../sections";

export const pageBuilder = defineType({
  name: "pageBuilder",
  title: "Page Builder",
  type: "array",
  of: sections.map(({ name }) => defineArrayMember({ type: name })),
});
