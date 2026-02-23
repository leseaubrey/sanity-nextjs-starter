import type {
  EVENTS_QUERY_RESULT,
  GLOBAL_DATA_QUERY_RESULT,
  PEOPLE_QUERY_RESULT,
  POSTS_QUERY_RESULT,
  PUBLICATIONS_QUERY_RESULT,
} from "@workspace/sanity/types";

// TODO: Export from sanity package?
export type SanityDocumentType = "page" | null;

export type SanityButtonsType = NonNullable<
  NonNullable<GLOBAL_DATA_QUERY_RESULT["header"]>["buttons"]
>;

// TODO: Omit _key?
export type SanityButtonType = NonNullable<SanityButtonsType>[number];

export type SanityLinkType = NonNullable<SanityButtonType["link"]>;

export type NavigationItem = NonNullable<
  NonNullable<
    NonNullable<GLOBAL_DATA_QUERY_RESULT["header"]>["primaryNavigation"]
  >["items"]
>[number];

export type Event = NonNullable<EVENTS_QUERY_RESULT>["upcoming"][number];
export type Publication = NonNullable<PUBLICATIONS_QUERY_RESULT>[number];
export type Post = NonNullable<POSTS_QUERY_RESULT>[number];
export type Person = NonNullable<PEOPLE_QUERY_RESULT>[number];
