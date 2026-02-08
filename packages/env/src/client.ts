import { Config, Effect } from "effect";

const ClientEnvConfig = Config.all({
  NEXT_PUBLIC_SANITY_PROJECT_ID: Config.string("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  NEXT_PUBLIC_SANITY_DATASET: Config.string("NEXT_PUBLIC_SANITY_DATASET"),
  NEXT_PUBLIC_SANITY_API_VERSION: Config.string(
    "NEXT_PUBLIC_SANITY_API_VERSION",
  ),
  SANITY_STUDIO_SANITY_PROJECT_ID: Config.string(
    "SANITY_STUDIO_SANITY_PROJECT_ID",
  ),
  SANITY_STUDIO_SANITY_DATASET: Config.string("SANITY_STUDIO_SANITY_DATASET"),
});

export const env = Effect.runSync(ClientEnvConfig);
