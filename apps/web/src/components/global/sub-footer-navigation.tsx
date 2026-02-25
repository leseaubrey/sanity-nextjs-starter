import { cn } from "@workspace/ui/lib/utils";

import type { NavigationLink } from "~/types";
import { SanityLink } from "../shared/sanity-link";

interface SubFooterNavigationProps {
  items: NavigationLink[];
  className?: string;
}

export const SubFooterNavigation = (props: SubFooterNavigationProps) => {
  const { items, className } = props;

  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex gap-2", className)}>
      {items.map((item) => {
        return (
          <li key={item._key}>
            <SanityLink {...item.link} className="text-gray-400" />
          </li>
        );
      })}
    </ul>
  );
};
