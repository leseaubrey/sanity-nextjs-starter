import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "9xvnzhzp",
    dataset: "production",
  },
  typegen: {
    path: "./src/**/*.{ts,tsx,js,jsx}",
    schema: "schema.json",
    generates: "./src/sanity.types.ts",
    overloadClientMethods: true,
  },
});
