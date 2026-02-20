import { fetchAllPageSlugs, fetchPageBySlug } from "@workspace/sanity/queries";

export const generateStaticParams = async () => {
  const result = await fetchAllPageSlugs();

  return result.map((slug) => ({
    slug: [slug],
  }));
};

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugString = slug.join("/");

  const { data: pageData } = await fetchPageBySlug(slugString);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title } = pageData;

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
