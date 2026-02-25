import type { SocialMediaLinksType, SocialMediaLinkType } from "~/types";
import { Facebook, GitHub, Instagram, LinkedIn, X, YouTube } from "../icons";

// Icon mapping
const ICONS: Record<SocialMediaLinkType["platform"], React.ReactNode> = {
  facebook: <Facebook />,
  github: <GitHub />,
  instagram: <Instagram />,
  linkedin: <LinkedIn />,
  x: <X />,
  youtube: <YouTube />,
};

// Display name mapping
const DISPLAY_NAMES: Record<SocialMediaLinkType["platform"], string> = {
  facebook: "Facebook",
  github: "GitHub",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  x: "X",
  youtube: "YouTube",
};

interface SocialMediaLinksProps {
  links: SocialMediaLinksType;
}

export const SocialMediaLinks = (props: SocialMediaLinksProps) => {
  const { links } = props;

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-4">
      {links.map(({ _key, platform, url }) => {
        if (!url) return null;

        return (
          <a
            key={_key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block h-4 w-4"
            aria-label={DISPLAY_NAMES[platform]}
          >
            {ICONS[platform]}
          </a>
        );
      })}
    </div>
  );
};
