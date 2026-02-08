import { defineCliConfig } from "sanity/cli";

import { env } from "@workspace/env/client";

export default defineCliConfig({
  api: {
    projectId: env.SANITY_STUDIO_SANITY_PROJECT_ID,
    dataset: env.SANITY_STUDIO_SANITY_DATASET,
  },
  typegen: {
    path: "./src/**/*.{ts,tsx,js,jsx}",
    schema: "schema.json",
    generates: "./src/sanity.types.ts",
    overloadClientMethods: true,
  },
});
