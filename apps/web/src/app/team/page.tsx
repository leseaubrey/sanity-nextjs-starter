import { fetchPageBySlug, fetchTeamMembers } from "@workspace/sanity/queries";

import { TeamMembersGrid } from "~/components/team/team-members-grid";

export default async function TeamPage() {
  // TODO: Magic string, single query?
  const [{ data: pageData }, { data: teamMembers }] = await Promise.all([
    fetchPageBySlug("team"),
    fetchTeamMembers(),
  ]);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <div className="container py-20">
        <h1 className="text-2xl font-bold">{pageData.title}</h1>
      </div>

      {teamMembers.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto">
            <TeamMembersGrid teamMembers={teamMembers} />
          </div>
        </div>
      )}
    </>
  );
}
