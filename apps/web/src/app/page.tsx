import { fetchPageBySlug } from "@workspace/sanity/queries";

export default async function HomePage() {
  // TODO: Magic string
  const result = await fetchPageBySlug("home");

  if (!result.data) {
    return <div>Page not found</div>;
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-2xl font-bold">{result.data.title}</h1>
      </div>
    </div>
  );
}
