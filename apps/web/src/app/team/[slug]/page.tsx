import {
  fetchAllTeamMemberSlugs,
  fetchTeamMemberBySlug,
} from "@workspace/sanity/queries";

export const generateStaticParams = async () => {
  const result = await fetchAllTeamMemberSlugs();

  return result.map((slug) => ({
    slug,
  }));
};

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = await fetchTeamMemberBySlug(slug);

  if (!result.data) {
    return <div>Team Member not found</div>;
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Team Member: {result.data.name}</h1>
      </div>
    </div>
  );
}
