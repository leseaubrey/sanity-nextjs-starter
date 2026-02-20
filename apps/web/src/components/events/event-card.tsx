import Link from "next/link";

import { SanityImage } from "@workspace/sanity/components";

import type { Event } from "~/types";
import { formatPublishedDate } from "~/utils";

interface EventCardProps {
  event: Event;
}

export const EventCard = (props: EventCardProps) => {
  const {
    event: { title, slug, eventDate, image, excerpt },
  } = props;

  // TODO: URL resolver
  const resolvedHref = `/events/${slug}`;

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
        <time dateTime={eventDate}>{formatPublishedDate(eventDate)}</time>
      </div>
    </div>
  );
};
