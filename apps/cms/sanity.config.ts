import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { env } from "@workspace/env/sanity";
import { schemaTypes } from "@workspace/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Sanity Next.js Starter",

  projectId: env.SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset: env.SANITY_STUDIO_SANITY_DATASET,

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        initial: env.SANITY_STUDIO_PREVIEW_URL,
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
