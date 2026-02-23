import { Button } from "@workspace/ui/components/button";

import type { SanityButtonType } from "~/types";
import { SanityLink } from "./sanity-link";

type SanityButtonProps = SanityButtonType;

export const SanityButton = ({ link, variant }: SanityButtonProps) => {
  return (
    <Button variant={variant} asChild>
      <SanityLink {...link} />
    </Button>
  );
};
