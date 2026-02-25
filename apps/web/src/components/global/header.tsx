import Link from "next/link";

import type { GLOBAL_DATA_QUERY_RESULT } from "@workspace/sanity/types";

import { SanityButtons } from "~/components/shared/sanity-buttons";
import { DesktopNavigation } from "./desktop-navigation";

interface HeaderProps {
  header: GLOBAL_DATA_QUERY_RESULT["header"];
}

export const Header = (props: HeaderProps) => {
  const { header } = props;

  if (!header) {
    return null;
  }

  const { primaryNavigation, buttons } = header;

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center py-4">
          <Link href="/">Impact</Link>

          <div className="ms-auto flex">
            <DesktopNavigation items={primaryNavigation?.items ?? []} />

            <SanityButtons buttons={buttons ?? []} />
          </div>
        </div>
      </div>
    </header>
  );
};
