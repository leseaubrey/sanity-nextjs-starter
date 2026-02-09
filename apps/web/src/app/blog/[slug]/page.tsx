import { fetchAllPostSlugs, fetchPostBySlug } from "@workspace/sanity/queries";

export const generateStaticParams = async () => {
  const result = await fetchAllPostSlugs();

  return result.map((slug) => ({
    slug,
  }));
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = await fetchPostBySlug(slug);

  if (!result.data) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{result.data.title}</h1>
      </div>
    </div>
  );
}
