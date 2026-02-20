import type { Event, Post, Publication } from "~/types";
import { EventCard } from "../events/event-card";
import { PostCard } from "../posts/post-card";
import { PublicationCard } from "../publications/publication-card";

interface ContentGridProps {
  items: (Post | Event | Publication)[];
}

export const ContentGrid = (props: ContentGridProps) => {
  const { items } = props;

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        if (item._type === "event") {
          return <EventCard key={item._id} event={item} />;
        }

        if (item._type === "publication") {
          return <PublicationCard key={item._id} publication={item} />;
        }

        return <PostCard key={item._id} post={item} />;
      })}
    </div>
  );
};
