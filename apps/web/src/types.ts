import type { TEAM_MEMBERS_QUERY_RESULT } from "@workspace/sanity/types";

export type TeamMember = NonNullable<TEAM_MEMBERS_QUERY_RESULT>[number];
