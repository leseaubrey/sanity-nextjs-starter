import { fetchPageBySlug, fetchPublications } from "@workspace/sanity/queries";

import { ContentGrid } from "~/components/shared/content-grid";

export default async function PublicationsPage() {
  // TODO: Magic string, single query?
  const [{ data: pageData }, { data: publications }] = await Promise.all([
    fetchPageBySlug("publications"),
    fetchPublications(),
  ]);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title } = pageData;

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>

      <ContentGrid items={publications} />
    </div>
  );
}
