import type { Person } from "~/types";
import { PersonCard } from "~/components/people/person-card";

interface PeopleGridProps {
  people: Person[];
}

export const PeopleGrid = (props: PeopleGridProps) => {
  const { people } = props;

  if (people.length === 0) {
    return null;
  }

  return (
    <div
      className={"grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"}
    >
      {people.map((person) => (
        <PersonCard key={person._id} person={person} />
      ))}
    </div>
  );
};
