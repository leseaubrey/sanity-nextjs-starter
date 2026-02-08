import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "@workspace/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Sanity Next.js Starter",

  projectId: "9xvnzhzp",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
