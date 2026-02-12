import { definitions } from "./definitions";
import { authorType } from "./documents/author";
import { categoryType } from "./documents/category";
import { pageType } from "./documents/page";
import { postType } from "./documents/post";
import { publicationType } from "./documents/publication";
import { teamMemberType } from "./documents/team-member";

export const schemaTypes = [
  // Fields
  ...definitions,

  // Documents
  authorType,
  categoryType,
  pageType,
  postType,
  publicationType,
  teamMemberType,
];
