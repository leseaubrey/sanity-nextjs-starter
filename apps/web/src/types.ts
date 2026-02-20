import type {
  EVENTS_QUERY_RESULT,
  PEOPLE_QUERY_RESULT,
  POSTS_QUERY_RESULT,
  PUBLICATIONS_QUERY_RESULT,
} from "@workspace/sanity/types";

export type Event = NonNullable<EVENTS_QUERY_RESULT>["upcoming"][number];
export type Publication = NonNullable<PUBLICATIONS_QUERY_RESULT>[number];
export type Post = NonNullable<POSTS_QUERY_RESULT>[number];
export type Person = NonNullable<PEOPLE_QUERY_RESULT>[number];
