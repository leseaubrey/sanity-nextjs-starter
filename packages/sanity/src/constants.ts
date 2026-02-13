import type { FieldGroupDefinition } from "sanity";

export const FIELD_GROUP = {
  CONTENT: "content",
};

export const FIELD_GROUPS: FieldGroupDefinition[] = [
  {
    name: FIELD_GROUP.CONTENT,
    title: "Content",
    default: true,
  },
];
