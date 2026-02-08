import { defineConfig } from "sanity";

import { schemaTypes } from "./src/schemas";

export default defineConfig({
  projectId: "9xvnzhzp",
  dataset: "production",
  schema: {
    types: schemaTypes,
  },
});
