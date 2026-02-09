import {
  fetchAllAuthorSlugs,
  fetchAuthorBySlug,
} from "@workspace/sanity/queries";

export const generateStaticParams = async () => {
  const result = await fetchAllAuthorSlugs();

  return result.map((slug) => ({
    slug,
  }));
};

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = await fetchAuthorBySlug(slug);

  if (!result.data) {
    return <div>Author not found</div>;
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Author: {result.data.name}</h1>
      </div>
    </div>
  );
}
