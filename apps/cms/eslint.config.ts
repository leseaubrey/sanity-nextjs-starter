import { defineConfig } from "eslint/config";

import {
  baseConfig,
  restrictEnvAccess,
} from "@sanity-nextjs-starter/eslint-config/base";

import { reactConfig } from "@sanity-nextjs-starter/eslint-config/react";
// @ts-ignore
import studio from "@sanity/eslint-config-studio";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  ...studio,
  restrictEnvAccess,
);
