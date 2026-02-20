import Link from "next/link";

import { fetchPageBySlug, fetchThemes } from "@workspace/sanity/queries";

export default async function RegionsPage() {
  // TODO: Magic string, single query?
  const [{ data: pageData }, { data: themes }] = await Promise.all([
    fetchPageBySlug("themes"),
    fetchThemes(),
  ]);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title } = pageData;

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>

      {themes.length === 0 && <p>No themes found.</p>}

      {themes.length > 0 &&
        themes.map((theme) => {
          // TODO: URL resolver
          const resolvedHref = `/themes/${theme.slug}`;

          return (
            <Link id={theme._id} href={resolvedHref}>
              {theme.title}
            </Link>
          );
        })}
    </div>
  );
}
