import type { GLOBAL_DATA_QUERY_RESULT } from "@workspace/sanity/types";

import { DesktopNavigation } from "./desktop-navigation";

interface HeaderProps {
  header: GLOBAL_DATA_QUERY_RESULT["header"];
}

export const Header = (props: HeaderProps) => {
  const { header } = props;

  if (!header) {
    return null;
  }

  const { primaryNavigation } = header;

  return (
    <header>
      <div className="container my-auto">
        <DesktopNavigation items={primaryNavigation?.items ?? []} />
      </div>
    </header>
  );
};
