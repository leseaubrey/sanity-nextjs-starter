import Link from "next/link";

import { SanityImage } from "@workspace/sanity/components";
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

  const { data } = await fetchTeamMemberBySlug(slug);

  if (!data) {
    return <div>Team Member not found</div>;
  }

  return (
    <>
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-4 gap-4">
          {data.image?.id && (
            <div className="col-span-1">
              <SanityImage id={data.image.id} />
            </div>
          )}

          <div className="col-span-2 col-start-2">
            {/* TODO: Magic string */}
            <Link href={"/team"} className="mb-8 inline-block">
              Back to team
            </Link>

            <div className="mb-4">
              <h1 className="text-foreground font-medium tracking-tight">
                {data.name}
              </h1>

              {data.role && (
                <span className="text-foreground/50 text-sm">{data.role}</span>
              )}
            </div>

            {/* TODO: Prose */}
            {data.bio && <div>{data.bio}</div>}

            {/* TODO: Team member social networks */}
          </div>
        </div>
      </div>

      {/* TODO: Team member posts */}

      {/* TODO: Team member publications */}
    </>
  );
}
