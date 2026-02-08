import { Config, Effect } from "effect";

const ServerEnvConfig = Config.all({
  SANITY_API_READ_TOKEN: Config.string("SANITY_API_READ_TOKEN"),
});

export const env = Effect.runSync(ServerEnvConfig);
