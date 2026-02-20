import Link from "next/link";
import { PortableText } from "next-sanity";

import { SanityImage } from "@workspace/sanity/components";
import { fetchAllPostSlugs, fetchPostBySlug } from "@workspace/sanity/queries";

import { formatPublishedDate } from "~/utils";

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

  const { data: postData } = await fetchPostBySlug(slug);

  if (!postData) {
    return <div>Post not found</div>;
  }

  const { title, publishedDate, image, content, authors, regions, themes } =
    postData;

  return (
    <article className="container mx-auto py-16">
      <h1 className="text-2xl font-bold">{title}</h1>

      {publishedDate && (
        <time dateTime={publishedDate}>
          {formatPublishedDate(publishedDate)}
        </time>
      )}

      {image?.id && <SanityImage id={image.id} />}

      {content && <PortableText value={content} />}

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {authors && (
          <div>
            <h2 className="text-xl">Authors</h2>

            <ul className="space-y-1">
              {authors.map((author) => (
                <li key={author._id}>
                  {/* TODO: Resolve url */}
                  <Link href={`/people/${author.slug}`}>{author.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {regions && regions.length > 0 && (
          <div>
            <h2 className="text-xl">Regions</h2>

            <ul>
              {regions.map((region) => (
                <li key={region._id}>
                  {/* TODO: Resolve url */}
                  <Link href={`/regions/${region.slug}`}>{region.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {themes && themes.length > 0 && (
          <div>
            <h2 className="text-xl">Themes</h2>

            <ul>
              {themes.map((theme) => (
                <li key={theme._id}>
                  {/* TODO: Resolve url */}
                  <Link href={`/themes/${theme.slug}`}>{theme.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
