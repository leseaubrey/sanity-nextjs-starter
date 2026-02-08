import { defineLive } from "next-sanity/live";

import { env } from "@workspace/env/server";

import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: env.SANITY_API_READ_TOKEN,
  browserToken: env.SANITY_API_READ_TOKEN,
});
