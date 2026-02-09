import { fetchAllPageSlugs, fetchPageBySlug } from "@workspace/sanity/queries";
import { Button } from "@workspace/ui/components/button";

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

  const result = await fetchPageBySlug(slugString);

  if (!result.data) {
    return <div>Page not found</div>;
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{result.data.title}</h1>

        <div className="flex gap-2">
          <Button>Button</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </div>
  );
}
