import type {
  EVENTS_QUERY_RESULT,
  GLOBAL_DATA_QUERY_RESULT,
  PEOPLE_QUERY_RESULT,
  POSTS_QUERY_RESULT,
  PUBLICATIONS_QUERY_RESULT,
} from "@workspace/sanity/types";

// TODO: Export from sanity package?
export type SanityDocumentType = "page";

export interface SanityLinkInternal {
  type: "internal";
  label: string;
  slug: string | null;
  documentType: SanityDocumentType | null;
}

export interface SanityLinkExternal {
  type: "external";
  label: string;
  url: string | null;
  openInNewTab: boolean | null;
}

export type SanityLinkType = SanityLinkInternal | SanityLinkExternal;

export type NavigationItem = NonNullable<
  NonNullable<
    NonNullable<GLOBAL_DATA_QUERY_RESULT["header"]>["primaryNavigation"]
  >["items"]
>[number];

export type Event = NonNullable<EVENTS_QUERY_RESULT>["upcoming"][number];
export type Publication = NonNullable<PUBLICATIONS_QUERY_RESULT>[number];
export type Post = NonNullable<POSTS_QUERY_RESULT>[number];
export type Person = NonNullable<PEOPLE_QUERY_RESULT>[number];
