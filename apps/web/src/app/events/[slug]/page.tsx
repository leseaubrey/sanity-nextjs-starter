import { PortableText } from "next-sanity";

import { SanityImage } from "@workspace/sanity/components";
import {
  fetchAllEventSlugs,
  fetchEventBySlug,
} from "@workspace/sanity/queries";

import { formatPublishedDate } from "~/utils";

export const generateStaticParams = async () => {
  const result = await fetchAllEventSlugs();

  return result.map((slug) => ({
    slug,
  }));
};

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: eventData } = await fetchEventBySlug(slug);

  if (!eventData) {
    return <div>Event not found</div>;
  }

  const { title, eventDate, image, content } = eventData;

  return (
    <article className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>

      {eventDate && (
        <time dateTime={eventDate}>{formatPublishedDate(eventDate)}</time>
      )}

      {image?.id && <SanityImage id={image.id} />}

      {content && <PortableText value={content} />}
    </article>
  );
}
