// @ts-ignore
import studio from "@sanity/eslint-config-studio";
import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@workspace/eslint-config/base";
import { reactConfig } from "@workspace/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  ...studio,
  restrictEnvAccess,
);
