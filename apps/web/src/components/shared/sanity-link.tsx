import Link from "next/link";

import type { SanityLinkType } from "~/types";
import { resolveSanityLink } from "~/utils";

interface SanityLinkProps {
  link: SanityLinkType;
}

export const SanityLink = (props: SanityLinkProps) => {
  const { link } = props;

  if (link.type === "external") {
    if (!link.url) {
      return null;
    }

    return (
      <a
        href={link.url}
        {...(link.openInNewTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {link.label}
      </a>
    );
  }

  const href = resolveSanityLink(link.documentType, link.slug);

  if (!href) {
    return null;
  }

  return <Link href={href}>{link.label}</Link>;
};
