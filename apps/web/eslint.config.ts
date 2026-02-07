import { defineConfig } from "eslint/config";

import {
  baseConfig,
  restrictEnvAccess,
} from "@sanity-nextjs-starter/eslint-config/base";
import { nextjsConfig } from "@sanity-nextjs-starter/eslint-config/nextjs";
import { reactConfig } from "@sanity-nextjs-starter/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess,
);
