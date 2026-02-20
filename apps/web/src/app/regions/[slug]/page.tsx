import {
  fetchAllRegionSlugs,
  fetchRegionBySlug,
} from "@workspace/sanity/queries";

export const generateStaticParams = async () => {
  const result = await fetchAllRegionSlugs();

  return result.map((slug) => ({
    slug,
  }));
};

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: regionData } = await fetchRegionBySlug(slug);

  if (!regionData) {
    return <div>Region not found</div>;
  }

  const { title } = regionData;

  return (
    <article className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>
    </article>
  );
}
