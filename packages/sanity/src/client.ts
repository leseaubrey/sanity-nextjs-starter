import { createClient } from "next-sanity";

// TODO: Env

const projectId = "9xvnzhzp";
const dataset = "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "v2021-03-25",
  useCdn: true,
});
