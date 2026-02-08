import { Config, Effect } from "effect";

const ClientEnvConfig = Config.all({
  SANITY_STUDIO_SANITY_PROJECT_ID: Config.string(
    "SANITY_STUDIO_SANITY_PROJECT_ID",
  ),
  SANITY_STUDIO_SANITY_DATASET: Config.string("SANITY_STUDIO_SANITY_DATASET"),
  SANITY_STUDIO_PREVIEW_URL: Config.string("SANITY_STUDIO_PREVIEW_URL"),
});

export const env = Effect.runSync(ClientEnvConfig);
