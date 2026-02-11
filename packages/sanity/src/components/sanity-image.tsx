import type { WrapperProps } from "sanity-image";
import * as React from "react";
import { SanityImage as Image } from "sanity-image";

import { env } from "@workspace/env/client";

const BASE_URL = `https://cdn.sanity.io/images/${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET}/`;

/**
 * A wrapper around `SanityImage` that configures the `baseUrl` prop
 * from env variables.
 */
export const SanityImage = <T extends React.ElementType = "img">(
  props: WrapperProps<T>,
) => <Image baseUrl={BASE_URL} {...props} />;
