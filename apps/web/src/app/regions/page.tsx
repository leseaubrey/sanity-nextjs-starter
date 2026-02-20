import Link from "next/link";

import { fetchPageBySlug, fetchRegions } from "@workspace/sanity/queries";

export default async function RegionsPage() {
  // TODO: Magic string, single query?
  const [{ data: pageData }, { data: regions }] = await Promise.all([
    fetchPageBySlug("regions"),
    fetchRegions(),
  ]);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title } = pageData;

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>

      {regions.length === 0 && <p>No regions found.</p>}

      {regions.length > 0 &&
        regions.map((region) => {
          // TODO: URL resolver
          const resolvedHref = `/regions/${region.slug}`;

          return (
            <Link id={region._id} href={resolvedHref}>
              {region.title}
            </Link>
          );
        })}
    </div>
  );
}
