import "@workspace/sanity/queries";

import { fetchEvents, fetchPageBySlug } from "@workspace/sanity/queries";

import { ContentGrid } from "~/components/shared/content-grid";

export default async function EventsPage() {
  // TODO: Magic string, single query?
  const [{ data: pageData }, { data: eventsData }] = await Promise.all([
    fetchPageBySlug("events"),
    fetchEvents(),
  ]);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title } = pageData;
  const { upcoming, past } = eventsData;

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="mb-12">
        <h2 className="text-xl">Upcoming Events</h2>

        {upcoming.length === 0 && <p>No upcoming events.</p>}

        {upcoming.length > 0 && <ContentGrid items={upcoming} />}
      </div>

      <div className="mb-12">
        <h2 className="text-xl">Past Events</h2>

        {past.length === 0 && <p>No past events.</p>}

        {past.length > 0 && <ContentGrid items={past} />}
      </div>
    </div>
  );
}
