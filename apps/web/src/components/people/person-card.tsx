import Link from "next/link";

import { SanityImage } from "@workspace/sanity/components";

import type { Person } from "~/types";

interface PersonCardProps {
  person: Person;
}

export const PersonCard = (props: PersonCardProps) => {
  const {
    person: { name, slug, image, role },
  } = props;

  // TODO: URL resolver
  const resolvedHref = `/people/${slug}`;

  return (
    <Link href={resolvedHref}>
      {image?.id && <SanityImage id={image.id} className="mb-4" />}

      <h3 className="text-foreground font-medium tracking-tight">{name}</h3>

      {role && <span className="text-foreground/50 text-sm">{role}</span>}
    </Link>
  );
};
