import {
  fetchAllThemeSlugs,
  fetchThemeBySlug,
} from "@workspace/sanity/queries";

export const generateStaticParams = async () => {
  const result = await fetchAllThemeSlugs();

  return result.map((slug) => ({
    slug,
  }));
};

export default async function ThemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: themeData } = await fetchThemeBySlug(slug);

  if (!themeData) {
    return <div>Theme not found</div>;
  }

  const { title } = themeData;

  return (
    <article className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>
    </article>
  );
}
