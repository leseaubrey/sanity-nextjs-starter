import Link from "next/link";

import { SanityImage } from "@workspace/sanity/components";
import {
  fetchAllPersonSlugs,
  fetchPersonBySlug,
} from "@workspace/sanity/queries";

import { SocialMediaLinks } from "~/components/shared/social-media-links";

export const generateStaticParams = async () => {
  const result = await fetchAllPersonSlugs();

  return result.map((slug) => ({
    slug,
  }));
};

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = await fetchPersonBySlug(slug);

  if (!data) {
    return <div>Person not found</div>;
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
            <Link href={"/people"} className="mb-8 inline-block">
              Back to people
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

            {data.socialMediaLinks && (
              <SocialMediaLinks links={data.socialMediaLinks} />
            )}
          </div>
        </div>
      </div>

      {/* TODO: Team member posts */}

      {/* TODO: Team member publications */}
    </>
  );
}
