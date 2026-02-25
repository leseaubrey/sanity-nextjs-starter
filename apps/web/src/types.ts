import type {
  EVENTS_QUERY_RESULT,
  GLOBAL_DATA_QUERY_RESULT,
  PAGE_BY_SLUG_QUERY_RESULT,
  PEOPLE_QUERY_RESULT,
  POSTS_QUERY_RESULT,
  PUBLICATIONS_QUERY_RESULT,
  SocialMediaLinks,
} from "@workspace/sanity/types";

// TODO: Export from sanity package?
export type SanityDocumentType = "page" | null;

export type SanityButtonsType = NonNullable<
  NonNullable<GLOBAL_DATA_QUERY_RESULT["header"]>["buttons"]
>;

export type SanityButtonType = Omit<SanityButtonsType[number], "_key">;

export type SanityLinkType = SanityButtonType["link"];

export type SocialMediaLinksType = SocialMediaLinks;

export type SocialMediaLinkType = SocialMediaLinks[number];

/**
 * Navigation
 */

export type NavigationItem = NonNullable<
  NonNullable<
    NonNullable<GLOBAL_DATA_QUERY_RESULT["header"]>["primaryNavigation"]
  >["items"]
>[number];

export type NavigationLink = Extract<
  NavigationItem,
  { _type: "navigationLink" }
>;

export type NavigationGroup = Extract<
  NavigationItem,
  { _type: "navigationGroup" }
>;

/**
 * Page Builder
 */

export type PageBuilderType = NonNullable<
  NonNullable<PAGE_BY_SLUG_QUERY_RESULT>["pageBuilder"]
>;

export type PageBuilderSectionType = PageBuilderType[number];
export type PageBuilderSectionTypes = PageBuilderSectionType["_type"];

/**
 * Documents
 */

export type Person = NonNullable<PEOPLE_QUERY_RESULT>[number];
export type Post = NonNullable<POSTS_QUERY_RESULT>[number];
export type Publication = NonNullable<PUBLICATIONS_QUERY_RESULT>[number];
export type Event = NonNullable<EVENTS_QUERY_RESULT>["upcoming"][number];
