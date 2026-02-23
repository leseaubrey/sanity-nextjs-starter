import Link from "next/link";

import type { SanityLinkType } from "~/types";
import { resolveSanityLink } from "~/utils";

type SanityLinkProps = SanityLinkType & React.ComponentPropsWithoutRef<"a">;

// TODO: Null vs?
export const SanityLink = (props: SanityLinkProps) => {
  if (props.type === "external") {
    const { url, openInNewTab, text, ...rest } = props;

    if (!url) return null;

    return (
      <a
        href={url}
        {...(openInNewTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        {...rest}
      >
        {text}
      </a>
    );
  }

  const { documentType, slug, text, ...rest } = props;

  const href = resolveSanityLink(documentType, slug);

  if (!href) return null;

  return (
    <Link href={href} {...rest}>
      {text}
    </Link>
  );
};
