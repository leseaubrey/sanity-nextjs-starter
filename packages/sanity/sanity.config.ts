import { defineConfig } from "sanity";

import { env } from "@workspace/env/client";

import { schemaTypes } from "./src/schemas";

export default defineConfig({
  projectId: env.SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset: env.SANITY_STUDIO_SANITY_DATASET,
  schema: {
    types: schemaTypes,
  },
});
