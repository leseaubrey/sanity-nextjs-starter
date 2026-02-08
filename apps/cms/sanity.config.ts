import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { env } from "@workspace/env/client";
import { schemaTypes } from "@workspace/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Sanity Next.js Starter",

  projectId: env.SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset: env.SANITY_STUDIO_SANITY_DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
