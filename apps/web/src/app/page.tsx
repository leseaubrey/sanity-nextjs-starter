import { fetchPageBySlug } from "@workspace/sanity/queries";
import { Button } from "@workspace/ui/components/button";

export default async function Page() {
  const result = await fetchPageBySlug("about");

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
