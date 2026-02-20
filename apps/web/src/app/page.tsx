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
      <Link href="/events">Events</Link>
      <Link href="/people">People</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/publications">Publications</Link>
      <Link href="/regions">Regions</Link>
      <Link href="/themes">Themes</Link>
    </div>
  );
}
