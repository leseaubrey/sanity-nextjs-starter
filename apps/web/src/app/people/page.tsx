import { fetchPageBySlug, fetchPeople } from "@workspace/sanity/queries";

import { PeopleGrid } from "~/components/people/people-grid";

export default async function PeoplePage() {
  // TODO: Magic string, single query?
  const [{ data: pageData }, { data: people }] = await Promise.all([
    fetchPageBySlug("people"),
    fetchPeople(),
  ]);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <div className="container py-20">
        <h1 className="text-2xl font-bold">{pageData.title}</h1>
      </div>

      {people.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto">
            <PeopleGrid people={people} />
          </div>
        </div>
      )}
    </>
  );
}
