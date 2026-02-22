import type { SanityDocumentType } from "./types";

export const formatPublishedDate = (publishedAt: string) => {
  return new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const resolveSanityLink = (
  documentType?: SanityDocumentType | null,
  slug?: string | null,
) => {
  switch (documentType) {
    case "page":
      return slug ? `/${slug}` : null;
    default:
      return null;
  }
};
