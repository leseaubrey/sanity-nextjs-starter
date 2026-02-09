import {
  fetchAllPublicationSlugs,
  fetchPublicationBySlug,
} from "@workspace/sanity/queries";

export const generateStaticParams = async () => {
  const result = await fetchAllPublicationSlugs();

  return result.map((slug) => ({
    slug,
  }));
};

export default async function PublicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = await fetchPublicationBySlug(slug);

  if (!result.data) {
    return <div>Publication not found</div>;
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{result.data.title}</h1>
      </div>
    </div>
  );
}
