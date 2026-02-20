import Link from "next/link";

import { SanityImage } from "@workspace/sanity/components";

import type { Publication } from "~/types";
import { formatPublishedDate } from "~/utils";

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard = (props: PublicationCardProps) => {
  const {
    publication: { title, slug, publishedDate, image, excerpt },
  } = props;

  // TODO: URL resolver
  const resolvedHref = `/publications/${slug}`;

  return (
    <div>
      {image?.id && (
        <Link href={resolvedHref} className="block">
          <SanityImage
            id={image.id}
            className="mb-4 aspect-4/3 w-full object-cover"
          />
        </Link>
      )}

      <Link href={resolvedHref} className="block">
        <h3 className="text-foreground mb-2 font-medium tracking-tight">
          {title}
        </h3>
      </Link>

      {excerpt && <p className="text-foreground/70 mb-3 text-sm">{excerpt}</p>}

      <div className="text-foreground/50 flex flex-wrap items-center gap-x-2 text-xs">
        <time dateTime={publishedDate}>
          {formatPublishedDate(publishedDate)}
        </time>
      </div>
    </div>
  );
};
