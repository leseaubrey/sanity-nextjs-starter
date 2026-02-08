import { Config, Effect } from "effect";

const ClientEnvConfig = Config.all({
  NEXT_PUBLIC_SANITY_PROJECT_ID: Config.string("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  NEXT_PUBLIC_SANITY_DATASET: Config.string("NEXT_PUBLIC_SANITY_DATASET"),
  NEXT_PUBLIC_SANITY_API_VERSION: Config.string(
    "NEXT_PUBLIC_SANITY_API_VERSION",
  ),
  NEXT_PUBLIC_SANITY_STUDIO_URL: Config.string("NEXT_PUBLIC_SANITY_STUDIO_URL"),
});

export const env = Effect.runSync(ClientEnvConfig);
