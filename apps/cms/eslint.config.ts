// @ts-ignore
import studio from "@sanity/eslint-config-studio";
import { baseConfig, restrictEnvAccess } from "@workspace/eslint-config/base";
import { reactConfig } from "@workspace/eslint-config/react";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  ...studio,
  restrictEnvAccess,
);
