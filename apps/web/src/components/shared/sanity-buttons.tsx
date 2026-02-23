import type { SanityButtonsType } from "~/types";
import { SanityButton } from "./sanity-button";

interface SanityButtonsProps {
  buttons: SanityButtonsType;
}

export const SanityButtons = (props: SanityButtonsProps) => {
  const { buttons } = props;

  if (buttons.length === 0) {
    return null;
  }

  return buttons.map((button) => (
    <SanityButton key={button._key} {...button} />
  ));
};
