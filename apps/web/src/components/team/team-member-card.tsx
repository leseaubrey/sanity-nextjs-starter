import Link from "next/link";

import { SanityImage } from "@workspace/sanity/components";

import type { TeamMember } from "~/types";

interface TeamMemberCardProps {
  teamMember: TeamMember;
}

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  const {
    teamMember: { name, slug, image, role },
  } = props;

  // TODO: URL resolver
  const resolvedHref = `/team/${slug}`;

  return (
    <Link href={resolvedHref}>
      {image?.id && <SanityImage id={image.id} className="mb-4" />}

      <h3 className="text-foreground font-medium tracking-tight">{name}</h3>

      {role && <span className="text-foreground/50 text-sm">{role}</span>}
    </Link>
  );
};
