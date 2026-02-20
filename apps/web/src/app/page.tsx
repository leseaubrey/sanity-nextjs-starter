import Link from "next/link";

import { fetchPageBySlug } from "@workspace/sanity/queries";

export default async function HomePage() {
  // TODO: Magic string
  const { data: pageData } = await fetchPageBySlug("home");

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/events">Events</Link>
      <br />
      <Link href="/people">People</Link>
      <br />
      <Link href="/projects">Projects</Link>
      <br />
      <Link href="/publications">Publications</Link>
      <br />
      <Link href="/regions">Regions</Link>
      <br />
      <Link href="/themes">Themes</Link>
    </div>
  );
}
