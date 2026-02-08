import { defineCliConfig } from "sanity/cli";

import { env } from "@workspace/env/sanity";

export default defineCliConfig({
  api: {
    projectId: env.SANITY_STUDIO_SANITY_PROJECT_ID,
    dataset: env.SANITY_STUDIO_SANITY_DATASET,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: false,
  },
});
