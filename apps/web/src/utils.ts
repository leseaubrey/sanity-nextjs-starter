export const formatPublishedDate = (publishedAt: string) => {
  return new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
