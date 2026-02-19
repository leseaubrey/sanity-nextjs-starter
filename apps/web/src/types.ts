import type { PEOPLE_QUERY_RESULT } from "@workspace/sanity/types";

export type Person = NonNullable<PEOPLE_QUERY_RESULT>[number];
