import type { TeamMember } from "~/types";
import { TeamMemberCard } from "~/components/team/team-member-card";

interface TeamMembersGridProps {
  teamMembers: TeamMember[];
}

export const TeamMembersGrid = (props: TeamMembersGridProps) => {
  const { teamMembers } = props;

  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <div
      className={"grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"}
    >
      {teamMembers.map((teamMember) => (
        <TeamMemberCard key={teamMember._id} teamMember={teamMember} />
      ))}
    </div>
  );
};
